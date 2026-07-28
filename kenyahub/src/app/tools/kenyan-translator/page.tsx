"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";

// Import all dictionaries
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

// Import language metadata for "coming soon" languages
import langData from "@/data/kenya-languages.json";

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
  icon: string;
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

// ─── All dictionaries indexed ───
const ALL_DICTS: Dictionary[] = [
  swahiliDict, kikuyuDict, luoDict, kalenjinDict,
  luhyaDict, kambaDict, meruDict, maasaiDict,
  kisiiDict, somaliDict, turkanaDict, mijikendaDict,
];

const DICT_MAP: Record<string, Dictionary> = {};
ALL_DICTS.forEach((d) => { DICT_MAP[d.languageId] = d; });

// Languages that have no dictionary yet
const COMING_SOON_LANGUAGES = langData.languages
  .filter((l) => {
    const id = l.name.split("(")[0].trim().toLowerCase().replace(/\s+/g, "");
    return !DICT_MAP[id] && id !== "swahili";
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

// All category IDs across all languages (unique, in order)
const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [];
const seenCats = new Set<string>();
ALL_DICTS.forEach((d) =>
  d.categories.forEach((c) => {
    if (!seenCats.has(c.id)) {
      seenCats.add(c.id);
      ALL_CATEGORY_IDS.push({ id: c.id, name: c.name, icon: c.icon });
    }
  })
);

// ─── FAQ ───
const faq = [
  { question: "What languages does this translator support?", answer: `Currently 12 Kenyan languages with seed vocabularies: Swahili, Kikuyu, Dholuo (Luo), Kalenjin, Luhya (Bukusu), Kamba, Meru, Maasai, Kisii, Somali, Turkana, and Mijikenda (Giriama). More languages and vocabulary are being added continuously.` },
  { question: "Is this a machine translation tool?", answer: "No — this is a curated dictionary-based translator. Each translation has been verified by community contributors. It translates individual words and common phrases, not full sentences. This makes it more reliable than machine translation for Kenyan languages, which are often poorly supported by AI translators." },
  { question: "Can I contribute translations?", answer: "Yes! We're actively looking for native speakers to help expand the dictionaries. Use the 'Contribute' button on any language card to submit corrections or new vocabulary. All contributions are credited." },
  { question: "Why don't some languages have dictionaries yet?", answer: "We're building this project incrementally. Languages like Embu, Taita, Pokomo, Samburu, and others are planned. If you speak one of these languages, please reach out to help us build the dictionary!" },
  { question: "How accurate are the pronunciations?", answer: "Pronunciations use an approximate English phonetic guide. They're designed to help non-speakers get a rough idea of how words sound. For precise pronunciation, audio recordings (coming soon) will be more reliable." },
];

// ─── Component ───
export default function KenyanTranslatorPage() {
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("swahili");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"translate" | "compare" | "browse">("translate");
  const [compareLanguages, setCompareLanguages] = useState<string[]>(["swahili", "kikuyu", "luo"]);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

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
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSearchQuery("");
  }, [sourceLanguage, targetLanguage]);

  // Get target dictionary
  const targetDict = DICT_MAP[targetLanguage];
  const sourceDict = sourceLanguage !== "english" ? DICT_MAP[sourceLanguage] : null;

  // ─── Search / Translation Logic ───
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();

    // Add to recent
    if (q.length > 2) {
      // defer to avoid setState during render
      setTimeout(() => addRecentSearch(q), 0);
    }

    const results: { entry: DictEntry; categoryName: string; categoryIcon: string; languageId: string; languageName: string; matchType: "exact" | "partial" }[] = [];

    if (sourceLanguage === "english") {
      // English → Target language
      if (targetDict) {
        targetDict.categories.forEach((cat) => {
          cat.entries.forEach((entry) => {
            const engLower = entry.english.toLowerCase();
            if (engLower === q) {
              results.push({ entry, categoryName: cat.name, categoryIcon: cat.icon, languageId: targetDict.languageId, languageName: targetDict.languageName, matchType: "exact" });
            } else if (engLower.includes(q)) {
              results.push({ entry, categoryName: cat.name, categoryIcon: cat.icon, languageId: targetDict.languageId, languageName: targetDict.languageName, matchType: "partial" });
            }
          });
        });
      }
    } else if (sourceDict) {
      // Kenyan language → English (reverse lookup)
      sourceDict.categories.forEach((cat) => {
        cat.entries.forEach((entry) => {
          const transLower = entry.translation.toLowerCase();
          if (transLower === q) {
            results.push({ entry, categoryName: cat.name, categoryIcon: cat.icon, languageId: sourceDict.languageId, languageName: sourceDict.languageName, matchType: "exact" });
          } else if (transLower.includes(q)) {
            results.push({ entry, categoryName: cat.name, categoryIcon: cat.icon, languageId: sourceDict.languageId, languageName: sourceDict.languageName, matchType: "partial" });
          }
        });
      });
    }

    // Sort: exact matches first
    results.sort((a, b) => (a.matchType === "exact" ? -1 : 1) - (b.matchType === "exact" ? -1 : 1));
    return results;
  }, [searchQuery, sourceLanguage, targetLanguage, targetDict, sourceDict, addRecentSearch]);

  // ─── Category Browser ───
  const categoryEntries = useMemo(() => {
    if (!activeCategory || !targetDict) return [];
    const cat = targetDict.categories.find((c) => c.id === activeCategory);
    return cat ? cat.entries : [];
  }, [activeCategory, targetDict]);

  // ─── Compare Mode: word across multiple languages ───
  const comparisonResults = useMemo(() => {
    if (viewMode !== "compare" || !searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: { languageId: string; languageName: string; family: string; entry: DictEntry | null }[] = [];

    compareLanguages.forEach((langId) => {
      const dict = DICT_MAP[langId];
      if (!dict) return;
      let found: DictEntry | null = null;
      for (const cat of dict.categories) {
        for (const entry of cat.entries) {
          if (entry.english.toLowerCase() === q || entry.english.toLowerCase().includes(q)) {
            found = entry;
            break;
          }
        }
        if (found) break;
      }
      results.push({ languageId: dict.languageId, languageName: dict.languageName, family: dict.family, entry: found });
    });

    return results;
  }, [searchQuery, viewMode, compareLanguages]);

  // Stats
  const totalEntries = ALL_DICTS.reduce((sum, d) => sum + d.categories.reduce((s, c) => s + c.entries.length, 0), 0);
  const activeTargetCategories = targetDict?.categories.filter((c) => c.entries.length > 0) ?? [];

  // ─── Random Word Feature ───
  const [randomWord, setRandomWord] = useState<{ entry: DictEntry; langName: string } | null>(null);
  const getRandomWord = useCallback(() => {
    const dict = ALL_DICTS[Math.floor(Math.random() * ALL_DICTS.length)];
    const cat = dict.categories[Math.floor(Math.random() * dict.categories.length)];
    const entry = cat.entries[Math.floor(Math.random() * cat.entries.length)];
    setRandomWord({ entry, langName: dict.languageName });
  }, []);

  useEffect(() => { getRandomWord(); }, [getRandomWord]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">

        {/* ── Random Word of the Moment ── */}
        {randomWord && (
          <div className="bg-gradient-to-r from-gold/10 to-kenya-green/10 border border-gold/20 rounded-xl p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-wider text-gold font-medium mb-1">🎲 Discover a word</p>
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

        {/* ── View Mode Tabs ── */}
        <div className="flex gap-1 bg-bg-elevated rounded-xl p-1 border border-border">
          {([
            { id: "translate" as const, label: "Translate", icon: "🔄" },
            { id: "compare" as const, label: "Compare", icon: "📊" },
            { id: "browse" as const, label: "Browse", icon: "📖" },
          ]).map((mode) => (
            <button
              key={mode.id}
              onClick={() => { setViewMode(mode.id); setSearchQuery(""); setActiveCategory(null); }}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                viewMode === mode.id
                  ? "bg-gold text-kenya-black shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{mode.icon}</span>
              <span>{mode.label}</span>
            </button>
          ))}
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* ── TRANSLATE MODE ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "translate" && (
          <>
            {/* Language Selector */}
            <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1.5 font-medium">From</label>
                  <select
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                    className="input-field text-sm w-full"
                    id="source-lang"
                  >
                    <option value="english">🇬🇧 English</option>
                    {ALL_DICTS.map((d) => (
                      <option key={d.languageId} value={d.languageId}>
                        {d.languageName}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={swapLanguages}
                  className="mt-5 w-10 h-10 rounded-full bg-gold/15 hover:bg-gold/25 flex items-center justify-center transition-all hover:rotate-180 duration-300 flex-shrink-0"
                  title="Swap languages"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </button>

                <div className="flex-1 min-w-0">
                  <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1.5 font-medium">To</label>
                  <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                    className="input-field text-sm w-full"
                    id="target-lang"
                  >
                    <option value="english">🇬🇧 English</option>
                    {ALL_DICTS.map((d) => (
                      <option key={d.languageId} value={d.languageId}>
                        {d.languageName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Input */}
              <div className="mt-4 relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={sourceLanguage === "english" ? "Type an English word... e.g. 'hello', 'water', 'mother'" : `Type a ${sourceDict?.languageName ?? ""} word...`}
                  className="input-field text-sm w-full pl-10 pr-10"
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

              {/* Recent Searches */}
              {!searchQuery && recentSearches.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="text-[0.6rem] text-text-muted mt-1">Recent:</span>
                  {recentSearches.slice(0, 5).map((s) => (
                    <button key={s} onClick={() => setSearchQuery(s)} className="text-[0.65rem] px-2 py-0.5 rounded-full bg-bg-elevated border border-border text-text-secondary hover:text-gold hover:border-gold/30 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Target Language Info Banner */}
            {targetDict && !searchQuery && (
              <div className="bg-bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[targetDict.family] }} />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">{targetDict.languageName}</h3>
                  <p className="text-[0.65rem] text-text-muted mt-0.5">
                    {targetDict.nativeName} · {(targetDict.speakerCount / 1000000).toFixed(1)}M speakers · {targetDict.family.charAt(0).toUpperCase() + targetDict.family.slice(1)} family
                  </p>
                  <p className="text-[0.6rem] text-text-muted mt-1">{targetDict.counties.join(", ")}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[0.6rem] text-text-muted">
                      📖 {targetDict.categories.reduce((s, c) => s + c.entries.length, 0)} words
                    </span>
                    <span className="text-[0.6rem] text-text-muted">
                      📂 {targetDict.categories.length} categories
                    </span>
                    <span className="text-[0.6rem] text-text-muted">
                      v{targetDict.dictionaryVersion}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="space-y-2">
                <p className="text-xs text-text-muted">
                  {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
                  {targetDict && <span> in {targetDict.languageName}</span>}
                </p>

                {searchResults.length === 0 && (
                  <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
                    <span className="text-3xl block mb-3">🔍</span>
                    <p className="text-sm font-medium text-text-primary mb-1">No translations found</p>
                    <p className="text-xs text-text-muted max-w-sm mx-auto">
                      Try a different word or browse categories below. This dictionary is growing — your word may be added soon!
                    </p>
                  </div>
                )}

                {searchResults.map((result, i) => {
                  const favKey = `${result.languageId}:${result.entry.english}`;
                  const isFav = favorites.includes(favKey);
                  const isReverse = sourceLanguage !== "english";
                  return (
                    <div key={i} className={`bg-bg-card border rounded-xl p-4 transition-all hover:border-gold/30 ${result.matchType === "exact" ? "border-gold/20" : "border-border"}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs">{result.categoryIcon}</span>
                            <span className="text-[0.6rem] text-text-muted">{result.categoryName}</span>
                            {result.matchType === "exact" && (
                              <span className="text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">Exact</span>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            <div>
                              <p className="text-[0.6rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverse ? result.languageName : "English"}</p>
                              <p className="text-sm font-bold text-text-primary">{isReverse ? result.entry.translation : result.entry.english}</p>
                            </div>
                            <div>
                              <p className="text-[0.6rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverse ? "English" : result.languageName}</p>
                              <p className="text-sm font-bold text-gold">{isReverse ? result.entry.english : result.entry.translation}</p>
                              {result.entry.pronunciation && (
                                <p className="text-[0.65rem] text-text-muted italic mt-0.5">/{result.entry.pronunciation}/</p>
                              )}
                            </div>
                          </div>
                          {result.entry.context && (
                            <p className="text-[0.65rem] text-text-muted mt-2 bg-bg-elevated rounded-lg px-3 py-1.5">💡 {result.entry.context}</p>
                          )}
                        </div>
                        <div className="flex flex-col gap-1 flex-shrink-0">
                          <button onClick={() => copyToClipboard(result.entry.translation)} className="w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors" title="Copy translation">
                            {copiedText === result.entry.translation ? (
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
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Category Browser (when not searching) */}
            {!searchQuery && targetDict && (
              <>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Browse by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {ALL_CATEGORY_IDS.map((cat) => {
                      const hasEntries = targetDict.categories.some((c) => c.id === cat.id && c.entries.length > 0);
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                          disabled={!hasEntries}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                            activeCategory === cat.id
                              ? "bg-gold text-kenya-black shadow-sm"
                              : hasEntries
                              ? "bg-bg-elevated border border-border text-text-secondary hover:text-gold hover:border-gold/30"
                              : "bg-bg-elevated/50 border border-border/50 text-text-muted/50 cursor-not-allowed"
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Category Entries Table */}
                {activeCategory && categoryEntries.length > 0 && (
                  <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-bg-elevated/50">
                      <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                        <span>{ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.icon}</span>
                        {ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.name}
                        <span className="text-[0.6rem] text-text-muted font-normal">({categoryEntries.length} entries)</span>
                      </h4>
                    </div>
                    <div className="divide-y divide-border">
                      {categoryEntries.map((entry, i) => {
                        const favKey = `${targetLanguage}:${entry.english}`;
                        const isFav = favorites.includes(favKey);
                        return (
                          <div key={i} className="px-4 py-3 hover:bg-bg-card-hover transition-colors">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5 sm:hidden">English</p>
                                  <p className="text-[0.8125rem] text-text-primary font-medium">{entry.english}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5 sm:hidden">{targetDict.languageName}</p>
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
            <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5 space-y-4">
              <div>
                <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1.5 font-medium">Compare across languages</label>
                <div className="flex flex-wrap gap-2">
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
                        className={`px-2.5 py-1 rounded-full text-[0.65rem] font-medium transition-all flex items-center gap-1 ${
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
                </div>
              </div>

              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type an English word to compare... e.g. 'hello', 'water', 'mother'"
                  className="input-field text-sm w-full pl-10"
                  id="compare-search"
                  autoComplete="off"
                />
              </div>
            </div>

            {searchQuery && comparisonResults.length > 0 && (
              <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-bg-elevated/50">
                  <h4 className="text-sm font-semibold text-text-primary">
                    &ldquo;{searchQuery}&rdquo; in {compareLanguages.length} languages
                  </h4>
                </div>
                <div className="divide-y divide-border">
                  {comparisonResults.map((result) => (
                    <div key={result.languageId} className="px-4 py-3 flex items-center gap-3 hover:bg-bg-card-hover transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[result.family] }} />
                      <div className="w-28 sm:w-36 flex-shrink-0">
                        <p className="text-xs font-medium text-text-primary truncate">{result.languageName}</p>
                        <p className="text-[0.6rem] text-text-muted capitalize">{result.family}</p>
                      </div>
                      {result.entry ? (
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-gold">{result.entry.translation}</p>
                          {result.entry.pronunciation && (
                            <p className="text-[0.65rem] text-text-muted italic">/{result.entry.pronunciation}/</p>
                          )}
                        </div>
                      ) : (
                        <p className="text-xs text-text-muted italic flex-1">Not in dictionary yet</p>
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

            {searchQuery && comparisonResults.length === 0 && (
              <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
                <span className="text-3xl block mb-3">📊</span>
                <p className="text-sm font-medium text-text-primary mb-1">Select languages to compare</p>
                <p className="text-xs text-text-muted">Pick at least one language above, then search for a word.</p>
              </div>
            )}
          </>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* ── BROWSE MODE — All Languages ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "browse" && (
          <>
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                All Languages ({ALL_DICTS.length} with dictionaries)
              </h3>
              <p className="text-[0.65rem] text-text-muted">{totalEntries} total words</p>
            </div>

            {/* Active Language Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ALL_DICTS.map((dict) => {
                const entryCount = dict.categories.reduce((s, c) => s + c.entries.length, 0);
                const maxEntries = 120; // Swahili benchmark
                const coverage = Math.min(100, (entryCount / maxEntries) * 100);
                return (
                  <button
                    key={dict.languageId}
                    onClick={() => { setViewMode("translate"); setTargetLanguage(dict.languageId); setSourceLanguage("english"); }}
                    className="bg-bg-card border border-border rounded-xl p-4 text-left group hover:border-gold/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{dict.languageName}</h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FAMILY_COLORS[dict.family] }} />
                          <span className="text-[0.6rem] text-text-muted capitalize">{dict.family}</span>
                          <span className="text-[0.5rem] text-text-muted">·</span>
                          <span className="text-[0.6rem] text-text-muted">{(dict.speakerCount / 1000000).toFixed(1)}M speakers</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gold">{entryCount}</span>
                    </div>
                    <p className="text-[0.6rem] text-text-muted mb-2">{dict.counties.slice(0, 3).join(", ")}{dict.counties.length > 3 ? ` +${dict.counties.length - 3}` : ""}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {dict.categories.map((cat) => (
                        <span key={cat.id} className="text-[0.55rem] bg-bg-elevated px-1.5 py-0.5 rounded text-text-muted">{cat.icon} {cat.entries.length}</span>
                      ))}
                    </div>
                    {/* Coverage bar */}
                    <div className="h-1 bg-bg-elevated rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${coverage}%`, backgroundColor: FAMILY_COLORS[dict.family] }} />
                    </div>
                    <p className="text-[0.55rem] text-text-muted mt-1">{Math.round(coverage)}% coverage</p>
                  </button>
                );
              })}
            </div>

            {/* Coming Soon Languages */}
            {COMING_SOON_LANGUAGES.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                  Coming Soon — Help Us Build These Dictionaries
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {COMING_SOON_LANGUAGES.map((lang) => (
                    <div key={lang.name} className="bg-bg-card border border-border/50 rounded-xl p-3 opacity-70">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FAMILY_COLORS[lang.family] }} />
                        <h4 className="text-xs font-medium text-text-secondary">{lang.name}</h4>
                      </div>
                      <p className="text-[0.6rem] text-text-muted">
                        {(lang.speakers / 1000000).toFixed(1)}M speakers · {lang.counties.slice(0, 2).join(", ")}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="text-[0.55rem] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">Contribute →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ── Stats Footer ── */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About This Translator</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{ALL_DICTS.length}</p>
              <p className="text-[0.6rem] text-text-muted">Languages</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{totalEntries}</p>
              <p className="text-[0.6rem] text-text-muted">Words & Phrases</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{ALL_CATEGORY_IDS.length}</p>
              <p className="text-[0.6rem] text-text-muted">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">3</p>
              <p className="text-[0.6rem] text-text-muted">Language Families</p>
            </div>
          </div>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>This is a curated, offline dictionary — not machine translation. Every entry has been verified.</span></li>
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>Pronunciations use approximate English phonetics. Audio recordings coming soon.</span></li>
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>Dictionary data is community-sourced. Found an error? Let us know via the contact page.</span></li>
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>We&apos;re actively expanding to cover all 42+ Kenyan ethnic languages.</span></li>
          </ul>
        </div>

      </div>
    </ToolShell>
  );
}
