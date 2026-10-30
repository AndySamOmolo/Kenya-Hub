/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { PartyPopper, ChevronLeft, ChevronDown, Flame, Lightbulb } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import SkillTree from "@/components/learn/SkillTree";
import CustomSelect from "@/components/ui/CustomSelect";
import SearchInput from "@/components/ui/SearchInput";
import type {
  CourseSkill,
  UserProgress,
  LessonResult,
} from "@/data/courses/types";
import { MAX_HEARTS, ACHIEVEMENTS } from "@/data/courses/types";
import {
  createDefaultProgress,
  loadProgress,
  saveProgress,
  refillHearts,
  applyLessonResult,
  getDueReviews,
} from "@/lib/learn-progress";
import { TOOLS } from "@/lib/tools-registry";
import type { Tool } from "@/lib/types";
import { getCourse, PUBLISHED_COURSES } from "@/data/courses/registry";
import { getSourcesForLanguage } from "@/data/language-sources";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LessonPlayer = dynamic(() => import("@/components/learn/LessonPlayer"), {
  loading: () => (
    <div className="py-12 text-center text-xs text-text-muted animate-pulse">
      Loading interactive lesson...
    </div>
  ),
});

const GamesHub = dynamic(() => import("@/components/learn/GamesHub"), {
  loading: () => (
    <div className="py-12 text-center text-xs text-text-muted animate-pulse">
      Loading language games...
    </div>
  ),
});

const GrammarView = dynamic(() => import("@/components/learn/GrammarView"), {
  loading: () => (
    <div className="py-12 text-center text-xs text-text-muted animate-pulse">
      Loading grammar reference...
    </div>
  ),
});

const ProverbsView = dynamic(() => import("@/components/learn/ProverbsView"), {
  loading: () => (
    <div className="py-12 text-center text-xs text-text-muted animate-pulse">
      Loading proverbs &amp; oral wisdom...
    </div>
  ),
});

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;
const MODULES_PAGE_SIZE = 8;

type PageView = "lessons" | "modules" | "games" | "playing" | "grammar" | "proverbs";

function formatLanguageHeader(name: string, nativeName: string): string {
  const cleanName = name.trim();
  const cleanNative = (nativeName || "").trim();
  if (!cleanNative || cleanName.toLowerCase().includes(cleanNative.toLowerCase())) {
    return cleanName;
  }
  return `${cleanName} (${cleanNative})`;
}

export default function LanguageClientPage({ languageId }: { languageId: string }) {
  const course = getCourse(languageId);
  const router = useRouter();

  const [progress, setProgress] = useState<UserProgress>(() =>
    createDefaultProgress(languageId)
  );
  const [view, setView] = useState<PageView>("lessons");
  const [moduleSearch, setModuleSearch] = useState("");
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>("all");
  const [modulesPage, setModulesPage] = useState(1);
  const [activeLesson, setActiveLesson] = useState<{
    skill: CourseSkill;
    level: number;
    reviewItems: ReturnType<typeof getDueReviews>;
    reviewOnly: boolean;
  } | null>(null);
  const [showCompletionToast, setShowCompletionToast] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.style.scrollBehavior = prev;
      });
    }
  }, [languageId, view]);

  useEffect(() => {
    if (!course) return;
    const loaded = loadProgress(languageId);
    const refilled = refillHearts(loaded);
    if (refilled.hearts !== loaded.hearts) {
      saveProgress(languageId, refilled);
    }
    setProgress(refilled);
  }, [languageId, course]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev.hearts >= MAX_HEARTS) return prev;
        const refilled = refillHearts(prev);
        if (refilled.hearts !== prev.hearts) {
          saveProgress(languageId, refilled);
        }
        return refilled;
      });
    }, 30_000);
    return () => clearInterval(interval);
  }, [languageId]);

  const allSkillsFlat = useMemo(() => {
    if (!course) return [];
    const list: { unitId: string; unitTitle: string; skill: CourseSkill }[] = [];
    course.units.forEach((unit) => {
      unit.skills.forEach((skill) => {
        list.push({ unitId: unit.id, unitTitle: unit.title, skill });
      });
    });
    return list;
  }, [course]);

  const filteredModules = useMemo(() => {
    const q = moduleSearch.trim().toLowerCase();
    return allSkillsFlat.filter((item) => {
      if (selectedUnitFilter !== "all" && item.unitId !== selectedUnitFilter) {
        return false;
      }
      if (!q) return true;
      if (
        item.skill.title.toLowerCase().includes(q) ||
        item.skill.description.toLowerCase().includes(q) ||
        item.unitTitle.toLowerCase().includes(q)
      ) {
        return true;
      }
      return item.skill.words.some(
        (w) =>
          w.target.toLowerCase().includes(q) ||
          w.source.toLowerCase().includes(q)
      );
    });
  }, [allSkillsFlat, moduleSearch, selectedUnitFilter]);

  useEffect(() => {
    setModulesPage(1);
  }, [moduleSearch, selectedUnitFilter, languageId]);

  const visibleModules = useMemo(
    () => filteredModules.slice(0, modulesPage * MODULES_PAGE_SIZE),
    [filteredModules, modulesPage]
  );

  const handleStartLesson = useCallback(
    (skillId: string, level: number) => {
      if (!course) return;
      const found = allSkillsFlat.find((s) => s.skill.id === skillId);
      if (!found) return;
      const due = getDueReviews(progress);
      setActiveLesson({
        skill: found.skill,
        level,
        reviewItems: due.slice(0, 3),
        reviewOnly: false,
      });
      setView("playing");
    },
    [course, allSkillsFlat, progress]
  );

  const handleStartReview = useCallback(() => {
    if (!course) return;
    const due = getDueReviews(progress);
    if (due.length === 0) return;
    const fallbackSkill = course.units[0]?.skills[0];
    if (!fallbackSkill) return;
    setActiveLesson({
      skill: fallbackSkill,
      level: 1,
      reviewItems: due.slice(0, 10),
      reviewOnly: true,
    });
    setView("playing");
  }, [course, progress]);

  const handleToggleUnlockAll = useCallback(() => {
    setProgress((prev) => {
      const updated: UserProgress = {
        ...prev,
        unlockAll: !prev.unlockAll,
      };
      saveProgress(languageId, updated);
      return updated;
    });
  }, [languageId]);

  const handleLessonComplete = useCallback(
    (result: LessonResult) => {
      const prevAchievements = new Set(progress.achievements);
      const updated = applyLessonResult(progress, result);
      saveProgress(languageId, updated);
      setProgress(updated);

      const newlyUnlocked = updated.achievements.filter(
        (id) => !prevAchievements.has(id)
      );
      if (newlyUnlocked.length > 0) {
        const ach = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
        if (ach) {
          setShowCompletionToast(`Unlocked Badge: ${ach.name}!`);
          setTimeout(() => setShowCompletionToast(null), 4000);
        }
      }
    },
    [languageId, progress]
  );

  const handleQuitLesson = useCallback(() => {
    setActiveLesson(null);
    setView("lessons");
  }, []);

  if (!course) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-text-primary">
          Course Not Found
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          The requested Kenyan language course could not be loaded.
        </p>
        <Link
          href="/tools/learn/"
          className="mt-4 inline-block rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-black"
        >
          Back to Language Hub
        </Link>
      </div>
    );
  }

  const hasGrammar = Boolean(
    course.grammarSections && course.grammarSections.length > 0
  );

  const totalWords = course.units.reduce(
    (sum, u) => sum + u.skills.reduce((s, sk) => s + sk.words.length, 0),
    0
  );
  const totalSkills = course.units.reduce((sum, u) => sum + u.skills.length, 0);
  const sources = getSourcesForLanguage(course.config.id);
  const langHeading = formatLanguageHeader(course.config.name, course.config.nativeName);

  const courseTool: Tool = {
    ...LEARN_TOOL,
    title: `Learn ${langHeading} — Free Interactive Course`,
    shortTitle: `Learn ${course.config.name}`,
    description: course.config.description,
    dataSource:
      sources.length > 0
        ? sources.map((s) => `${s.title.split("(")[0].trim()} (${s.published})`).join("; ")
        : LEARN_TOOL.dataSource,
  };

  const courseFaq = [
    {
      question: `How is the ${langHeading} course structured on KenyaHub?`,
      answer: `The ${course.config.name} course is organized into ${course.units.length} structured units and ${totalSkills} skill modules teaching ${totalWords.toLocaleString()}+ verified vocabulary items, sentence patterns, grammar paradigms, and cultural proverbs. Learners progress from foundational greetings and numerals to verb conjugations, kinship, and oral literature.`,
    },
    {
      question: `Where is ${course.config.name} spoken in Kenya and which language family does it belong to?`,
      answer: `${langHeading} is a ${course.config.family} language spoken by approximately ${course.config.speakers} speakers across ${course.config.counties.join(", ")} in Kenya.`,
    },
    {
      question: `What primary linguistic sources are used for the ${course.config.name} lessons and grammar reference?`,
      answer:
        sources.length > 0
          ? `The ${course.config.name} curriculum is compiled from verified public-domain monographs and open lexical datasets, including ${sources.map((s) => `${s.title} (${s.published})`).join("; ")}.`
          : `The ${course.config.name} curriculum is compiled from verified Kenyan linguistic monographs and open lexical corpora.`,
    },
    {
      question: `Is the ${course.config.name} language course completely free to use?`,
      answer: `Yes. All ${totalSkills} ${course.config.name} skill modules, vocabulary tables, grammar reference chapters, cultural proverbs, and mini-games are 100% free with no account registration required. Progress is saved automatically in your browser.`,
    },
  ];

  return (
    <ToolShell
      tool={courseTool}
      faq={courseFaq}
      breadcrumbSuffix={[{ label: course.config.name }]}
      hideHeader={view === "playing"}
      hideFooter={view === "playing"}
      hideSource
    >
      {/* Top Bar: Compact Language Dropdown on Left + XP on Right */}
      {view !== "playing" && (
        <div className="mb-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/tools/learn/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light transition-colors shrink-0"
              aria-label="All Languages"
              title="All Languages"
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <CustomSelect
              value={course.config.id}
              onValueChange={(val) => router.push(`/tools/learn/${val}/`)}
              options={PUBLISHED_COURSES.map((c) => ({
                value: c.config.id,
                label: c.config.name,
              }))}
              className="w-40 sm:w-48 text-xs"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary shrink-0">
            <span className="text-gold font-bold">{progress.xp} XP</span>
            {progress.streak > 0 && (
              <span className="inline-flex items-center gap-1 text-orange-400">
                <Flame className="h-3.5 w-3.5" />
                {progress.streak}
              </span>
            )}
          </div>
        </div>
      )}

      {showCompletionToast && (
        <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4 animate-in fade-in slide-in-from-top-3 duration-300">
          <div className="rounded-xl border border-gold/40 bg-bg-card px-5 py-3 shadow-lg shadow-gold/10">
            <p className="text-sm font-semibold text-gold flex items-center gap-1.5">
              <PartyPopper className="w-4 h-4 text-gold shrink-0" /> {showCompletionToast}
            </p>
          </div>
        </div>
      )}

      {/* Horizontal Scrolling Pill Tabs */}
      {view !== "playing" && (
        <ExpandablePillRow className="mb-5">
          {[
            { id: "lessons" as const, label: "Path" },
            { id: "modules" as const, label: "Vocab" },
            { id: "games" as const, label: "Games" },
            ...(hasGrammar ? [{ id: "grammar" as const, label: "Grammar" }] : []),
            { id: "proverbs" as const, label: "Wisdom" },
          ].map((tab) => {
            const active = view === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                role="tab"
                aria-selected={active}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all ${
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
      )}

      {view === "playing" && activeLesson ? (
        <LessonPlayer
          skill={activeLesson.skill}
          level={activeLesson.level}
          progress={progress}
          languageName={course.config.name}
          onComplete={handleLessonComplete}
          onQuit={handleQuitLesson}
          reviewItems={activeLesson.reviewItems}
          reviewOnly={activeLesson.reviewOnly}
        />
      ) : view === "modules" ? (
        <div className="mx-auto max-w-3xl space-y-5 pb-8">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-3.5">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                All {course.config.name} Modules &amp; Vocabulary ({filteredModules.length})
              </h2>
              <p className="text-xs text-text-secondary">
                Browse every module, grammar note, and vocabulary word table, or launch any lesson directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <SearchInput
                value={moduleSearch}
                onChange={(e) => setModuleSearch(e.target.value)}
                onClear={() => setModuleSearch("")}
                placeholder={`Search ${course.config.name} or English words...`}
                className="flex-1 text-sm"
              />
              <CustomSelect
                value={selectedUnitFilter}
                onValueChange={(val) => setSelectedUnitFilter(val)}
                options={[
                  { value: "all", label: `All Units (${course.units.length})` },
                  ...course.units.map((u, idx) => ({
                    value: u.id,
                    label: `Unit ${idx + 1}: ${u.title.replace(/^Unit \d+:\s*/i, "")}`,
                  })),
                ]}
                className="w-full sm:w-64 text-xs"
              />
            </div>
          </div>

          <div className="space-y-4">
            {visibleModules.map(({ unitTitle, skill }) => {
              const skillLevel = progress.skillLevels[skill.id] || 0;
              return (
                <div
                  key={skill.id}
                  className="bg-bg-card border border-border rounded-2xl p-5 space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                        {unitTitle}
                      </span>
                      <h3 className="text-base font-bold text-text-primary">
                        {skill.title}
                      </h3>
                      <p className="text-xs text-text-muted">{skill.description}</p>
                    </div>
                    <button
                      onClick={() =>
                        handleStartLesson(skill.id, Math.min(skillLevel + 1, 5))
                      }
                      className="rounded-xl bg-gold px-4 py-2 text-xs font-bold text-kenya-black hover:brightness-110 transition-all shrink-0"
                    >
                      Practice Module ({skill.words.length} words) →
                    </button>
                  </div>

                  {skill.tips && (
                    <details className="group rounded-xl bg-gold/5 border border-gold/20 px-3.5 py-2.5 text-xs text-text-secondary">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-gold">
                        <span className="inline-flex items-center gap-1.5">
                          <Lightbulb className="h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>Grammar &amp; Lesson Notes</span>
                        </span>
                        <ChevronDown className="h-3.5 w-3.5 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                      </summary>
                      <div className="mt-2 border-t border-gold/15 pt-2 leading-relaxed whitespace-pre-line">
                        {skill.tips}
                      </div>
                    </details>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {skill.words.map((w, wIdx) => (
                      <div
                        key={wIdx}
                        className="rounded-xl bg-bg-elevated/60 border border-border/60 p-3 flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-bold text-gold">{w.target}</span>
                          <span className="text-xs font-medium text-text-primary text-right">
                            {w.source}
                          </span>
                        </div>
                        {w.pronunciation && (
                          <span className="text-[0.65rem] text-sky-light mt-1">
                            [{w.pronunciation}]
                          </span>
                        )}
                        {w.example && (
                          <span className="text-[0.65rem] text-text-muted italic mt-1">
                            {w.example}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredModules.length > visibleModules.length && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setModulesPage((p) => p + 1)}
                  className="px-5 py-2.5 rounded-xl bg-bg-card border border-border hover:border-gold/40 text-xs font-bold text-text-primary cursor-pointer transition-all"
                >
                  Load More Modules ({filteredModules.length - visibleModules.length} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      ) : view === "games" ? (
        <GamesHub
          units={course.units}
          languageName={course.config.name}
          onBack={() => setView("lessons")}
        />
      ) : view === "grammar" && course.grammarSections ? (
        <GrammarView
          sections={course.grammarSections}
          languageName={course.config.name}
        />
      ) : view === "proverbs" ? (
        <ProverbsView lockedLanguageId={course.config.id} />
      ) : (
        <SkillTree
          units={course.units}
          progress={progress}
          config={course.config}
          onStartLesson={handleStartLesson}
          onStartReview={handleStartReview}
          onToggleUnlockAll={handleToggleUnlockAll}
          onGoBack={() => {
            window.location.href = "/tools/learn/";
          }}
        />
      )}
    </ToolShell>
  );
}
