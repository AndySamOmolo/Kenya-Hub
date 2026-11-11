/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";
import { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
  Sparkles,
  Trophy,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import type { LanguageConfig } from "@/data/courses/types";
import { COURSE_REGISTRY, PUBLISHED_COURSES } from "@/data/courses/registry";
import { getLanguageIdentity } from "@/data/language-identity";
import { INITIAL_RANDOM_WORDS } from "@/data/language-sources";
import { TOOLS } from "@/lib/tools-registry";
import { scrollToTopIfScrolled } from "@/lib/scroll";

const ProverbsView = dynamic(() => import("@/components/learn/ProverbsView"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading proverbs &amp; oral wisdom...
    </div>
  ),
});

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

const AVAILABLE_LANGUAGES: (LanguageConfig & { ready: boolean; skills: number; wordsCount: number })[] =
  Object.values(COURSE_REGISTRY).map(({ config, units, ready }) => ({
    ...config,
    ready,
    skills: units.reduce((total, unit) => total + unit.skills.length, 0),
    wordsCount: units.reduce(
      (total, unit) => total + unit.skills.reduce((s, sk) => s + sk.words.length, 0),
      0
    ),
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

export default function LearnPage() {
  const [progressMap, setProgressMap] = useState<Record<string, StoredLangStats>>({});
  const [showAllModules, setShowAllModules] = useState(false);
  const [activeHubTab, setActiveHubTab] = useState<"courses" | "proverbs">("courses");
  const [familyFilter, setFamilyFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
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
    const q = searchQuery.trim().toLowerCase();
    return readyLangs.filter((l) => {
      if (familyFilter !== "All" && l.family !== familyFilter) return false;
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        (l.nativeName || "").toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.family.toLowerCase().includes(q) ||
        l.counties.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [readyLangs, familyFilter, searchQuery]);

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
      readyLangs.find((l) => l.id === topLangId) || readyLangs[0];
    return { totalXp, bestStreak, totalWords, resumeLang };
  }, [progressMap, readyLangs]);

  const spotlightWord = useMemo(() => {
    if (!INITIAL_RANDOM_WORDS || INITIAL_RANDOM_WORDS.length === 0) return null;
    return INITIAL_RANDOM_WORDS[wordIndex % INITIAL_RANDOM_WORDS.length];
  }, [wordIndex]);

  const nextSpotlightWord = useCallback(() => {
    setWordIndex((prev) => prev + 1);
  }, []);

  return (
    <ToolShell tool={LEARN_TOOL} hideSource>
      <div className="mx-auto max-w-4xl px-3.5 sm:px-4 pt-7 pb-10 space-y-5">
        {/* ── Flagship Learner Dashboard & Quick Translator Banner ── */}
        <div className="rounded-2xl border border-gold/35 bg-gradient-to-br from-bg-card via-bg-card to-bg-elevated p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Kenyan Language Learning
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-snug">
                {overallStats.totalXp > 0
                  ? `Welcome back! Keep building your Kenyan language fluency`
                  : `Start learning any of ${readyLangs.length} interactive Kenyan language courses`}
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                Every course includes guided skill trees, 3D vocabulary flashcards, written phonetic guides, grammar tables, 4 mini-games, and oral proverbs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {overallStats.resumeLang && overallStats.totalXp > 0 && (
                <Link
                  href={`/tools/learn/${overallStats.resumeLang.id}/`}
                  className="btn-gold text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2.5"
                >
                  Resume {overallStats.resumeLang.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                href="/tools/kenyan-translator/"
                className="btn-outline text-xs sm:text-sm px-3 py-2 sm:px-3.5 sm:py-2.5"
              >
                <Globe className="w-4 h-4 text-kenya-green-light" />
                22-Language Translator
              </Link>
            </div>
          </div>

          {/* 3-Column Learner Summary & Daily Word Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-border/60">
            <div className="grid grid-cols-3 gap-2 md:col-span-1">
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2.5 text-center">
                <div className="text-base sm:text-lg font-bold text-gold flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>{overallStats.totalXp}</span>
                </div>
                <div className="text-xs text-text-muted mt-0.5">Total XP</div>
              </div>
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2.5 text-center">
                <div className="text-base sm:text-lg font-bold text-orange-400 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 shrink-0" />
                  <span>{overallStats.bestStreak}d</span>
                </div>
                <div className="text-xs text-text-muted mt-0.5">Best Streak</div>
              </div>
              <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-2.5 text-center">
                <div className="text-base sm:text-lg font-bold text-kenya-green-light flex items-center justify-center gap-1">
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>{overallStats.totalWords}</span>
                </div>
                <div className="text-xs text-text-muted mt-0.5">Words</div>
              </div>
            </div>

            {spotlightWord && (
              <div className="md:col-span-2 rounded-xl bg-bg-elevated/70 border border-gold/25 p-3 sm:px-4 flex items-center justify-between gap-3">
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
                    className="h-9 px-3 rounded-xl bg-bg-card hover:border-gold/40 border border-border text-xs font-semibold text-text-secondary hover:text-gold flex items-center gap-1.5 transition-colors cursor-pointer"
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
        <ExpandablePillRow>
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
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
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
            <div className="bg-bg-card border border-border rounded-2xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <SearchInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClear={() => setSearchQuery("")}
                    placeholder="Search language, native name, or Kenyan county (e.g. Kiswahili, Gĩkũyũ, Nakuru, Coast)..."
                    className="w-full text-sm"
                  />
                </div>
                <button
                  onClick={() => setShowAllModules(!showAllModules)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-bg-elevated px-3.5 py-2.5 text-xs font-semibold text-gold hover:border-gold/50 transition-colors shrink-0 cursor-pointer"
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

              <ExpandablePillRow>
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
                      className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.6875rem] sm:text-xs font-medium border transition-all cursor-pointer ${
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
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {filteredLangs.map((lang) => {
                const stats = progressMap[lang.id] || {
                  xp: 0,
                  streak: 0,
                  wordsLearned: 0,
                  completedSkills: 0,
                };
                const courseObj = PUBLISHED_COURSES.find((c) => c.config.id === lang.id);
                const display = formatLanguageDisplay(lang.name, lang.nativeName);
                const identity = getLanguageIdentity(lang.id);

                return (
                  <div
                    key={lang.id}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-3.5 sm:p-5 transition-all hover:border-gold/50 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <Link href={`/tools/learn/${lang.id}/`} className="block">
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="min-w-0 flex-1">
                            {/* Cultural greeting and regional motif badges (cool, fun language differentiation) */}
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
                          <span className="inline-flex items-center gap-1 rounded-xl bg-gold/15 border border-gold/30 px-2.5 py-1 text-xs font-bold text-gold group-hover:bg-gold group-hover:text-kenya-black transition-colors shrink-0">
                            <span>{stats.xp > 0 ? "Continue" : "Start"}</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {lang.description}
                        </p>

                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated/60 px-2 py-0.5 text-[0.6875rem] text-kenya-green-light font-semibold">
                            <BookOpen className="h-3 w-3" /> {lang.skills} modules · {lang.wordsCount} words
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

                      {showAllModules && courseObj && (
                        <div className="mt-3.5 pt-3 border-t border-border/60 space-y-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                            {courseObj.units.length} Units · Direct Module Preview:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {courseObj.units.map((unit) =>
                              unit.skills.map((skill) => (
                                <Link
                                  key={skill.id}
                                  href={`/tools/learn/${lang.id}/#unit-block-${unit.id}`}
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-elevated/70 px-2.5 py-1 text-xs text-text-secondary hover:border-gold hover:text-gold transition-colors"
                                >
                                  <DynamicIcon emoji={skill.icon} className="w-3.5 h-3.5 shrink-0" />
                                  <span>{skill.title}</span>
                                </Link>
                              ))
                            )}
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
      </div>
    </ToolShell>
  );
}
