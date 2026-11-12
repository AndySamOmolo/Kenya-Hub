/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useCallback, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  PartyPopper,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Flame,
  Lightbulb,
  RotateCcw,
  Layers,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import SkillTree from "@/components/learn/SkillTree";
import CustomSelect from "@/components/ui/CustomSelect";
import SearchInput from "@/components/ui/SearchInput";
import type {
  CourseSkill,
  UserProgress,
  LessonResult,
} from "@/data/courses/types";
import { ACHIEVEMENTS } from "@/data/courses/types";
import {
  createDefaultProgress,
  loadProgress,
  saveProgress,
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
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading interactive lesson...
    </div>
  ),
});

const GamesHub = dynamic(() => import("@/components/learn/GamesHub"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading language games...
    </div>
  ),
});

const GrammarView = dynamic(() => import("@/components/learn/GrammarView"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading grammar reference...
    </div>
  ),
});

const ProverbsView = dynamic(() => import("@/components/learn/ProverbsView"), {
  loading: () => (
    <div className="py-12 text-center text-sm text-text-muted animate-pulse">
      Loading proverbs &amp; oral wisdom...
    </div>
  ),
});

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;
const MODULES_PAGE_SIZE = 8;

type PageView = "lessons" | "flashcards" | "modules" | "games" | "playing" | "grammar" | "proverbs";

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

  // Interactive 3D Flashcard Deck state
  const [flashcardSkillId, setFlashcardSkillId] = useState<string>("all");
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

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
  }, [languageId]);

  useEffect(() => {
    if (!course) return;
    const loaded = loadProgress(languageId);
    setProgress(loaded);
  }, [languageId, course]);

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

  const flashcardDeck = useMemo(() => {
    if (flashcardSkillId === "all") {
      return allSkillsFlat.flatMap((s) =>
        s.skill.words.map((w) => ({ ...w, skillTitle: s.skill.title }))
      );
    }
    const found = allSkillsFlat.find((s) => s.skill.id === flashcardSkillId);
    if (!found) return [];
    return found.skill.words.map((w) => ({ ...w, skillTitle: found.skill.title }));
  }, [allSkillsFlat, flashcardSkillId]);

  const currentFlashcard =
    flashcardDeck[flashcardIndex] || flashcardDeck[0] || null;

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
      saveProgress(updated);
      return updated;
    });
  }, []);

  const handleLessonComplete = useCallback(
    (result: LessonResult) => {
      const prevAchievements = new Set(progress.achievements);
      const updated = applyLessonResult(progress, result);
      saveProgress(updated);
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
    [progress]
  );

  const handleQuitLesson = useCallback(() => {
    setActiveLesson(null);
    setView("lessons");
  }, []);

  if (!course) {
    return (
      <div
        data-error-page="true"
        className="mx-auto max-w-2xl px-4 py-16 text-center"
      >
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
    dataSource: `Verified ${course.config.name} Linguistic Corpus & Lexicons`,
  };

  const courseFaq = [
    {
      question: `How is the ${langHeading} course structured on KenyaHub?`,
      answer: `The ${course.config.name} course is organized into ${course.units.length} structured ${course.units.length === 1 ? "unit" : "units"} and ${totalSkills} skill ${totalSkills === 1 ? "module" : "modules"} teaching ${totalWords.toLocaleString()}+ verified vocabulary items, sentence patterns, grammar paradigms, and cultural proverbs. Learners progress from foundational greetings and numerals to verb conjugations, kinship, and oral literature.`,
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
      answer: `Yes. All ${totalSkills} ${course.config.name} skill modules, vocabulary flashcards, grammar reference chapters, cultural proverbs, and mini-games are 100% free with no account registration required. Progress is saved automatically in your browser.`,
    },
  ];

  return (
    <ToolShell
      tool={courseTool}
      faq={courseFaq}
      breadcrumbSuffix={[
        {
          label: course.config.name,
          href: `/tools/learn/${course.config.id}/`,
        },
      ]}
      hideHeader={view === "playing"}
      hideFooter={view === "playing"}
      hideSource
    >
      {/* Top Bar: Compact Language Dropdown on Left + XP & Streak on Right */}
      {view !== "playing" && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/tools/learn/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light transition-colors shrink-0"
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
              className="w-44 sm:w-52 text-xs sm:text-sm"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-gold font-bold">
              {progress.xp} XP
            </span>
            {progress.streak > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1.5 text-orange-400 font-bold">
                <Flame className="h-3.5 w-3.5" />
                {progress.streak}d
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
            { id: "lessons" as const, label: "Skill Path" },
            { id: "flashcards" as const, label: `Flashcards (${totalWords})` },
            { id: "modules" as const, label: "All Vocab" },
            { id: "games" as const, label: "Mini-Games" },
            ...(hasGrammar ? [{ id: "grammar" as const, label: "Grammar" }] : []),
            { id: "proverbs" as const, label: "Proverbs & Wisdom" },
          ].map((tab) => {
            const active = view === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                role="tab"
                aria-selected={active}
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
      )}

      {view === "playing" && activeLesson ? (
        <div data-adsense-pause="true">
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
        </div>
      ) : view === "flashcards" ? (
        /* ── Interactive 3D Flashcards Deck View (No Audio Buttons) ── */
        <div className="mx-auto max-w-2xl space-y-5 pb-8">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-gold" />
                <span>{course.config.name} Interactive Flashcards</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                Tap the card to flip between {course.config.name} and English meanings.
              </p>
            </div>
            <CustomSelect
              value={flashcardSkillId}
              onValueChange={(val) => {
                setFlashcardSkillId(val);
                setFlashcardIndex(0);
                setIsCardFlipped(false);
              }}
              options={[
                { value: "all", label: `All Modules (${totalWords} words)` },
                ...allSkillsFlat.map((s) => ({
                  value: s.skill.id,
                  label: `${s.skill.title} (${s.skill.words.length})`,
                })),
              ]}
              className="w-full sm:w-64 text-xs sm:text-sm"
            />
          </div>

          {currentFlashcard && (
            <div className="space-y-4">
              <div
                onClick={() => setIsCardFlipped((f) => !f)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsCardFlipped((f) => !f);
                  }
                }}
                className="group relative min-h-[250px] sm:min-h-[280px] rounded-3xl border-2 border-gold/35 bg-gradient-to-br from-bg-card via-bg-card to-bg-elevated p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all hover:border-gold/60 shadow-lg select-none"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted">
                  <span className="rounded-2xl bg-bg-elevated border border-border px-3 py-1 font-semibold text-gold max-w-full break-words">
                    {currentFlashcard.skillTitle}
                  </span>
                  <span>
                    Card {flashcardIndex + 1} of {flashcardDeck.length}
                  </span>
                </div>

                <div className="my-6 text-center space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    {isCardFlipped ? "English Meaning" : course.config.name}
                  </p>
                  <p className="text-2xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-gold break-words">
                    {isCardFlipped ? currentFlashcard.source : currentFlashcard.target}
                  </p>
                  {!isCardFlipped && currentFlashcard.pronunciation && (
                    <p className="text-sm text-sky-light italic">
                      [{currentFlashcard.pronunciation}]
                    </p>
                  )}
                  {isCardFlipped && currentFlashcard.example && (
                    <p className="text-sm text-text-secondary mt-3 pt-3 border-t border-border/60 max-w-md mx-auto">
                      Example: <strong className="text-text-primary">{currentFlashcard.example}</strong>
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center text-xs text-text-secondary pt-2 border-t border-border/40 font-medium">
                  Tap card to flip ↻
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((i) => Math.max(0, i - 1));
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-text-primary disabled:opacity-40 hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const rand = Math.floor(Math.random() * flashcardDeck.length);
                    setFlashcardIndex(rand);
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-elevated px-4 py-2.5 text-xs sm:text-sm font-semibold text-gold hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Shuffle Card
                </button>

                <button
                  type="button"
                  disabled={flashcardIndex >= flashcardDeck.length - 1}
                  onClick={() => {
                    setFlashcardIndex((i) =>
                      Math.min(flashcardDeck.length - 1, i + 1)
                    );
                    setIsCardFlipped(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold text-kenya-black disabled:opacity-40 hover:brightness-110 transition-all cursor-pointer"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : view === "modules" ? (
        <div className="mx-auto max-w-3xl space-y-5 pb-8">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-3.5">
            <div>
              <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                All {course.config.name} Modules &amp; Vocabulary ({filteredModules.length})
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
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
                className="w-full sm:w-64 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            {visibleModules.map(({ unitTitle, skill }) => {
              const skillLevel = progress.skillLevels[skill.id] || 0;
              return (
                <div
                  key={skill.id}
                  className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-4"
                >
                  <div className="space-y-2 border-b border-border pb-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">
                        {unitTitle}
                      </span>
                      <button
                        onClick={() =>
                          handleStartLesson(skill.id, Math.min(skillLevel + 1, 5))
                        }
                        className="rounded-xl bg-gold px-4 py-2 text-xs font-bold text-kenya-black hover:brightness-110 transition-all shrink-0 cursor-pointer"
                      >
                        Practice ({skill.words.length} words) →
                      </button>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary leading-snug">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {skill.tips && (
                    <details className="group rounded-xl bg-gold/5 border border-gold/20 px-3.5 py-2.5 text-xs sm:text-sm text-text-secondary">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-gold">
                        <span className="inline-flex items-center gap-2 min-w-0 flex-1">
                          <Lightbulb className="h-4 w-4 shrink-0 text-gold" />
                          <span>Grammar &amp; Lesson Notes</span>
                        </span>
                        <ChevronDown className="h-4 w-4 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                      </summary>
                      <div className="mt-2.5 border-t border-gold/15 pt-2.5 leading-relaxed whitespace-pre-line">
                        {skill.tips}
                      </div>
                    </details>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {skill.words.map((w, wIdx) => (
                      <div
                        key={wIdx}
                        className="rounded-xl bg-bg-elevated/60 border border-border/60 p-3.5 flex flex-col justify-between gap-1"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-bold text-gold break-words min-w-0 flex-1">
                            {w.target}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-text-primary text-right break-words max-w-[55%]">
                            {w.source}
                          </span>
                        </div>
                        {w.pronunciation && (
                          <span className="text-xs text-sky-light">
                            [{w.pronunciation}]
                          </span>
                        )}
                        {w.example && (
                          <span className="text-xs text-text-muted italic mt-1">
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
                  className="px-5 py-2.5 rounded-xl bg-bg-card border border-border hover:border-gold/40 text-xs sm:text-sm font-bold text-text-primary cursor-pointer transition-all"
                >
                  Load More Modules ({filteredModules.length - visibleModules.length} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      ) : view === "games" ? (
        <div data-adsense-pause="true">
          <GamesHub
            units={course.units}
            languageName={course.config.name}
            onBack={() => setView("lessons")}
          />
        </div>
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
