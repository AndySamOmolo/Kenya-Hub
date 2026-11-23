/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import SearchInput from "@/components/ui/SearchInput";
import { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDebouncedValue } from "@/lib/useDebouncedValue";
import {
  ArrowRight,
  Users,
  BookOpen,
  Flame,
  Zap,
  Layers,
  ChevronDown,
  Globe,
  Shuffle,
  Trophy,
} from "lucide-react";
import ToolShell, { type RichGuideEntry } from "@/components/tools/ToolShell";
const ProverbsView = dynamic(() => import("@/components/learn/ProverbsView"), {
  ssr: false,
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading proverbs &amp; oral wisdom...
    </div>
  ),
});

const StagedVarietiesPanel = dynamic(() => import("@/components/learn/StagedVarietiesPanel"), {
  ssr: false,
});
import type { LanguageConfig } from "@/data/courses/types";
import { PUBLISHED_COURSE_SUMMARIES } from "@/data/courses/catalog-summary";
import { getLanguageIdentity } from "@/data/language-identity";
import { INITIAL_RANDOM_WORDS, DICT_META_MAP, ALL_DICT_METAS, TOTAL_DICTIONARY_ENTRIES } from "@/data/dictionaries/metadata";
import { TOOLS } from "@/lib/tools-registry";
import { scrollToTopIfScrolled } from "@/lib/scroll";

function getDeterministicDailyIndex(length: number): number {
  if (length <= 1) return 0;
  const dateStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  return hash % length;
}

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

const AVAILABLE_LANGUAGES: (LanguageConfig & {
  ready: boolean;
  unitCount: number;
  skills: number;
  wordsCount: number;
})[] = PUBLISHED_COURSE_SUMMARIES.map(({ config, ready, unitCount, skillCount, wordsCount }) => ({
  ...config,
  ready,
  unitCount,
  skills: skillCount,
  wordsCount,
}));

interface StoredLangStats {
  xp: number;
  streak: number;
  wordsLearned: number;
  completedSkills: number;
}

function getLanguageStats(languageId: string): StoredLangStats {
  if (typeof window === "undefined") {
    return { xp: 0, streak: 0, wordsLearned: 0, completedSkills: 0 };
  }
  try {
    const raw = localStorage.getItem(`kh-learn-progress-${languageId}`);
    if (!raw) return { xp: 0, streak: 0, wordsLearned: 0, completedSkills: 0 };
    const p = JSON.parse(raw);
    const completedSkills = Object.values(p.skillLevels || {}).filter(
      (lvl) => Number(lvl) >= 1
    ).length;
    return {
      xp: Number(p.xp) || 0,
      streak: Number(p.streak) || 0,
      wordsLearned: Array.isArray(p.wordsLearned) ? p.wordsLearned.length : 0,
      completedSkills,
    };
  } catch {
    return { xp: 0, streak: 0, wordsLearned: 0, completedSkills: 0 };
  }
}

function formatLanguageDisplay(name: string, nativeName: string): { primary: string; secondary?: string } {
  const cleanName = name.trim();
  const cleanNative = (nativeName || "").trim();
  if (!cleanNative || cleanName.toLowerCase().includes(cleanNative.toLowerCase())) {
    return { primary: cleanName };
  }
  return { primary: cleanName, secondary: cleanNative };
}

function normalizeLanguageQuery(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f'’]/g, "").toLowerCase();
}

export default function LearnPage() {
  const [progressMap, setProgressMap] = useState<Record<string, StoredLangStats>>({});
  const [showAllModules, setShowAllModules] = useState(false);
  const [activeHubTab, setActiveHubTab] = useState<"courses" | "proverbs">("courses");
  const [familyFilter, setFamilyFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 180);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [lastVisitedId, setLastVisitedId] = useState<string | null>(null);

  useEffect(() => {
    setWordIndex(getDeterministicDailyIndex(INITIAL_RANDOM_WORDS?.length || 0));
    try {
      setLastVisitedId(localStorage.getItem("kenyahub_last_visited_lang"));
    } catch {
      // ignore storage errors
    }
    const map: Record<string, StoredLangStats> = {};
    AVAILABLE_LANGUAGES.forEach((l) => {
      map[l.id] = getLanguageStats(l.id);
    });
    setProgressMap(map);
  }, []);

  const readyLangs = useMemo(() => AVAILABLE_LANGUAGES.filter((l) => l.ready), []);

  const families = useMemo(() => {
    const set = new Set<string>();
    readyLangs.forEach((l) => {
      if (l.family) set.add(l.family);
    });
    return ["All", ...Array.from(set)];
  }, [readyLangs]);

  const filteredLangs = useMemo(() => {
    const q = normalizeLanguageQuery(debouncedSearchQuery.trim());
    return readyLangs.filter((l) => {
      if (familyFilter !== "All" && l.family !== familyFilter) return false;
      if (!q) return true;
      return (
        normalizeLanguageQuery(l.name).includes(q) ||
        normalizeLanguageQuery(l.nativeName || "").includes(q) ||
        normalizeLanguageQuery(l.description).includes(q) ||
        normalizeLanguageQuery(l.family).includes(q) ||
        l.counties.some((c) => normalizeLanguageQuery(c).includes(q))
      );
    });
  }, [readyLangs, familyFilter, debouncedSearchQuery]);

  const overallStats = useMemo(() => {
    let totalXp = 0;
    let bestStreak = 0;
    let totalWords = 0;
    let topLangId = "swahili";
    let topLangXp = -1;

    for (const lang of readyLangs) {
      const st = progressMap[lang.id];
      if (!st) continue;
      totalXp += st.xp;
      totalWords += st.wordsLearned;
      if (st.streak > bestStreak) bestStreak = st.streak;
      if (st.xp > topLangXp) {
        topLangXp = st.xp;
        topLangId = lang.id;
      }
    }
    const resumeLang =
      (lastVisitedId ? readyLangs.find((l) => l.id === lastVisitedId) : null) ||
      readyLangs.find((l) => l.id === topLangId) ||
      readyLangs[0];
    return { totalXp, bestStreak, totalWords, resumeLang };
  }, [progressMap, readyLangs, lastVisitedId]);

  const spotlightWord = useMemo(() => {
    if (!INITIAL_RANDOM_WORDS || INITIAL_RANDOM_WORDS.length === 0) return null;
    return INITIAL_RANDOM_WORDS[wordIndex % INITIAL_RANDOM_WORDS.length];
  }, [wordIndex]);



  const nextSpotlightWord = useCallback(() => {
    setWordIndex((prev) => prev + 1);
  }, []);

  const learnGuideOverride: RichGuideEntry = useMemo(
    () => ({
      notesTitle: `Interactive Kenyan Languages & Oral Wisdom Hub (${readyLangs.length} Languages)`,
      overview: [
        `KenyaHub offers ${readyLangs.length} free interactive Kenyan language courses spanning Bantu, Nilotic, and Cushitic language families, paired with a ${TOTAL_DICTIONARY_ENTRIES.toLocaleString("en-KE")}-entry cross-dialect dictionary.`,
        `Switch to the Proverbs, Riddles & Oral Wisdom tab to explore traditional sayings including Thimo cia Gĩkũyũ, Ngero za Dholuo, and Mifano ya Kiswahili with literal translations and cultural explanations.`,
      ],
      howItWorks: [],
      complianceTips: [],
      notes: [],
      faq: [
        {
          question: "Which Kenyan languages can I learn for free on KenyaHub?",
          answer: `KenyaHub offers ${readyLangs.length} free interactive Kenyan language courses: ${readyLangs.map((l) => l.name).join(", ")}. Every course includes guided skill trees, flashcards, grammar reference chapters, proverbs, and 12 mini-games.`,
        },
        {
          question: "Do I need an account to save my language learning progress?",
          answer: "No account is required. All course progress, XP, streaks, and spaced-repetition reviews are saved automatically in your browser.",
        },
      ],
    }),
    [readyLangs]
  );

  return (
    <ToolShell tool={LEARN_TOOL} guideOverride={learnGuideOverride} hideSource>
      <div className="mx-auto max-w-4xl px-0 sm:px-2 pt-1 sm:pt-2 pb-8 space-y-3 sm:space-y-5">
        {/* ── Compact Quick Actions + Learner Stats & Word Spotlight ── */}
        <div className="space-y-2.5 sm:space-y-3.5">
          <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar">
            {overallStats.resumeLang && overallStats.totalXp > 0 && (
              <Link
                href={`/tools/learn/${overallStats.resumeLang.id}/`}
                className="btn-gold shrink-0 whitespace-nowrap text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
              >
                Resume {overallStats.resumeLang.name}
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            )}
            <Link
              href="/tools/kenyan-translator/"
              className="btn-outline shrink-0 whitespace-nowrap text-xs sm:text-sm px-2.5 py-1.5 sm:px-3.5 sm:py-2"
            >
              <Globe className="w-3.5 h-3.5 text-kenya-green-light shrink-0" />
              <span className="sm:hidden">{ALL_DICT_METAS.length}-Lang Translator</span>
              <span className="hidden sm:inline">{ALL_DICT_METAS.length}-Language Translator ({TOTAL_DICTIONARY_ENTRIES.toLocaleString()} Words)</span>
            </Link>
          </div>

          {/* 3-Column Compact KPI Summary & Daily Word Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="grid grid-cols-3 gap-2 md:col-span-1">
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2 sm:p-3.5 text-center">
                <div className="text-sm sm:text-xl font-extrabold tabular-nums text-gold flex items-center justify-center gap-1">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{overallStats.totalXp}</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted mt-0.5 truncate compact-label">Total XP</div>
              </div>
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2 sm:p-3.5 text-center">
                <div className="text-sm sm:text-xl font-extrabold tabular-nums text-orange-400 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{overallStats.bestStreak}d</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted mt-0.5 truncate compact-label">Best Streak</div>
              </div>
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2 sm:p-3.5 text-center">
                <div className="text-sm sm:text-xl font-extrabold tabular-nums text-kenya-green-light flex items-center justify-center gap-1">
                  <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{overallStats.totalWords}</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted mt-0.5 truncate compact-label">Words</div>
              </div>
            </div>

            {spotlightWord && (
              <div className="md:col-span-2 rounded-xl bg-bg-elevated/70 border border-gold/25 p-2.5 sm:px-4 flex items-center justify-between gap-2.5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs text-gold font-semibold">
                    <span>Word of the Moment ({spotlightWord.langName})</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline gap-2">
                    <span className="text-base sm:text-lg font-bold text-text-primary break-words">
                      {spotlightWord.entry.translation}
                    </span>
                    <span className="text-xs sm:text-sm text-text-secondary">
                      — &ldquo;{spotlightWord.entry.english}&rdquo;
                    </span>
                    {spotlightWord.entry.pronunciation && (
                      <span className="text-xs text-text-muted italic">
                        [{spotlightWord.entry.pronunciation}]
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={nextSpotlightWord}
                    className="min-h-[38px] px-3 rounded-xl bg-bg-card hover:border-gold/40 border border-border text-xs font-semibold text-text-secondary hover:text-gold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Next word"
                    aria-label="Next word"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-gold" />
                    <span>Shuffle</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Standalone Horizontal Pill Menu (Courses | Proverbs & Wisdom) */}
        <ExpandablePillRow className="[&>button]:!h-7 [&>button]:!w-7 sm:[&>button]:!h-8 sm:[&>button]:!w-8 [&>button]:rounded-full [&_.expandable-pill-row]:px-1 [&_.expandable-pill-row]:scroll-pl-1">
          {[
            { id: "courses" as const, label: `Interactive Courses (${readyLangs.length})` },
            { id: "proverbs" as const, label: "Proverbs, Riddles & Oral Wisdom" },
          ].map((tab) => {
            const active = activeHubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveHubTab(tab.id);
                  scrollToTopIfScrolled();
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 sm:px-4 sm:py-1.5 min-h-[32px] sm:min-h-[38px] inline-flex items-center text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </ExpandablePillRow>

        {activeHubTab === "proverbs" ? (
          <ProverbsView defaultLanguageId="kikuyu" />
        ) : (
          <>
            {/* Search & Family Filter Controls */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
                <div className="flex-1">
                  <SearchInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClear={() => setSearchQuery("")}
                    placeholder="Search language or county..."
                    className="w-full !h-9 sm:!h-11 !rounded-xl text-sm"
                  />
                </div>
                <button
                  onClick={() => setShowAllModules(!showAllModules)}
                  className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-bg-elevated px-3.5 text-xs font-semibold text-gold hover:border-gold/50 transition-colors shrink-0 cursor-pointer"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>{showAllModules ? "Hide Module Previews" : "Preview All Modules"}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      showAllModules ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <ExpandablePillRow className="[&>button]:!h-7 [&>button]:!w-7 sm:[&>button]:!h-8 sm:[&>button]:!w-8 [&>button]:rounded-full [&_.expandable-pill-row]:px-1 [&_.expandable-pill-row]:scroll-pl-1">
                {families.map((fam) => {
                  const active = familyFilter === fam;
                  const count =
                    fam === "All"
                      ? readyLangs.length
                      : readyLangs.filter((l) => l.family === fam).length;
                  return (
                    <button
                      key={fam}
                      type="button"
                      onClick={() => setFamilyFilter(fam)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 min-h-[30px] sm:min-h-[36px] inline-flex items-center justify-center text-xs font-semibold border transition-colors cursor-pointer ${
                        active
                          ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                          : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {fam === "All" ? `All Families (${count})` : `${fam} (${count})`}
                    </button>
                  );
                })}
              </ExpandablePillRow>
            </div>

            {/* Available Languages Grid */}
            <div data-adsense-pause={filteredLangs.length === 0 ? "true" : undefined} className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {filteredLangs.map((lang) => {
                const stats = progressMap[lang.id] || {
                  xp: 0,
                  streak: 0,
                  wordsLearned: 0,
                  completedSkills: 0,
                };
                const display = formatLanguageDisplay(lang.name, lang.nativeName);
                const identity = getLanguageIdentity(lang.id);
                const dictCats = DICT_META_MAP[lang.id]?.categories || [];

                return (
                  <div
                    key={lang.id}
                    className="cv-auto group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-4.5 sm:p-5 transition-colors hover:border-gold/50 flex flex-col justify-between shadow-sm"
                  >
                    <div className="flex flex-col flex-1">
                      <Link href={`/tools/learn/${lang.id}/`} prefetch={false} className="flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="min-w-0 flex-1">
                            {/* Cultural greeting and regional motif badges */}
                            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-bold bg-gold/10 border border-gold/30 text-gold shadow-xs">
                                “{identity.greeting}”
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated/70 px-2 py-0.5 text-[0.625rem] text-text-secondary">
                                <span>{identity.region}</span>
                              </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-gold transition-colors break-words leading-snug">
                              {display.primary}
                              {display.secondary && (
                                <span className="ml-1.5 text-xs sm:text-sm font-normal text-text-muted">
                                  ({display.secondary})
                                </span>
                              )}
                            </h3>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-xl bg-gold/15 border border-gold/30 px-2.5 py-1.5 min-h-[34px] text-xs font-bold text-gold group-hover:bg-gold group-hover:text-kenya-black transition-colors shrink-0">
                            <span>{stats.xp > 0 ? "Continue" : "Start"}</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                          {lang.description}
                        </p>

                        <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated/60 px-2 py-0.5 text-[0.6875rem] text-kenya-green-light font-semibold">
                            <BookOpen className="h-3 w-3" /> {lang.skills} modules · {(DICT_META_MAP[lang.id]?.totalEntries || lang.wordsCount).toLocaleString("en-KE")} words
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated/60 px-2 py-0.5 text-[0.6875rem] text-text-secondary">
                            <Users className="h-3 w-3 text-gold" /> {lang.speakers}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated/60 px-2 py-0.5 text-[0.6875rem] text-text-muted">
                            {lang.family}
                          </span>
                        </div>
                      </Link>

                      {stats.xp > 0 && (
                        <div className="mt-3.5 pt-3 border-t border-border/60 flex items-center gap-2.5">
                          <div className="flex-1 h-2 rounded-full bg-bg-elevated overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green"
                              style={{
                                width: `${Math.min(
                                  100,
                                  Math.max(8, (stats.completedSkills / Math.max(1, lang.skills)) * 100)
                                )}%`,
                              }}
                            />
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-gold shrink-0">
                            <Zap className="h-3.5 w-3.5" /> {stats.xp} XP
                          </span>
                          {stats.streak > 0 && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-400 shrink-0">
                              <Flame className="h-3.5 w-3.5" /> {stats.streak}d
                            </span>
                          )}
                        </div>
                      )}

                      {showAllModules && (
                        <div className="mt-3.5 pt-3 border-t border-border/60 space-y-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                            {lang.unitCount} Units · {lang.skills} Skill Modules · Direct Preview:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {dictCats.slice(0, 8).map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/tools/learn/${lang.id}/`}
                                prefetch={false}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-elevated/70 px-2.5 py-1 text-xs text-text-secondary hover:border-gold hover:text-gold transition-colors"
                              >
                                <span>{cat.icon}</span>
                                <span>{cat.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        <StagedVarietiesPanel />
      </div>
    </ToolShell>
  );
}
