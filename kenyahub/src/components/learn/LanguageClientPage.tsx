/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import { Gamepad2, GraduationCap, HelpCircle, PartyPopper, BookOpen, Layers, Search } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import SkillTree from "@/components/learn/SkillTree";
import LessonPlayer from "@/components/learn/LessonPlayer";
import GamesHub from "@/components/learn/GamesHub";
import GrammarView from "@/components/learn/GrammarView";
import type {
  CourseSkill,
  UserProgress,
  LessonResult,
} from "@/data/courses/types";
import { MAX_HEARTS } from "@/data/courses/types";
import {
  loadProgress,
  saveProgress,
  refillHearts,
  applyLessonResult,
  getDueReviews,
} from "@/lib/learn-progress";
import { TOOLS } from "@/lib/tools-registry";
import { getCourse, PUBLISHED_COURSES } from "@/data/courses/registry";
import Link from "next/link";

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

type PageView = "lessons" | "modules" | "games" | "playing" | "grammar";

export default function LanguageClientPage({ languageId }: { languageId: string }) {
  const course = getCourse(languageId);

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [view, setView] = useState<PageView>("lessons");
  const [moduleSearch, setModuleSearch] = useState("");
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>("all");
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
    if (!languageId) return;
    const p = loadProgress(languageId);
    const withHearts = refillHearts(p);
    setProgress(withHearts);
    saveProgress(withHearts);
  }, [languageId]);

  const findSkill = useCallback(
    (skillId: string): CourseSkill | null => {
      if (!course) return null;
      for (const unit of course.units) {
        const skill = unit.skills.find((s) => s.id === skillId);
        if (skill) return skill;
      }
      return null;
    },
    [course]
  );

  const handleStartLesson = useCallback(
    (skillId: string, level: number) => {
      const skill = findSkill(skillId);
      if (!skill || !progress) return;
      const reviewItems = getDueReviews(progress);
      // Ensure the user can always start any module even if hearts ran low
      if (progress.hearts <= 0) {
        const restored = { ...progress, hearts: MAX_HEARTS, heartsLastRefill: Date.now() };
        setProgress(restored);
        saveProgress(restored);
      }
      setActiveLesson({ skill, level, reviewItems, reviewOnly: false });
      setView("playing");
    },
    [findSkill, progress]
  );

  const handleStartReview = useCallback(() => {
    if (!progress || !course) return;
    const reviewItems = getDueReviews(progress);
    if (reviewItems.length === 0) return;

    const skill = findSkill(reviewItems[0].skillId) || course.units[0]?.skills[0];
    if (!skill) return;

    setActiveLesson({ skill, level: progress.skillLevels[skill.id] || 1, reviewItems, reviewOnly: true });
    setView("playing");
  }, [course, findSkill, progress]);

  const handleLessonComplete = useCallback(
    (result: LessonResult) => {
      if (!progress) return;
      const updated = applyLessonResult(progress, result);
      setProgress(updated);
      saveProgress(updated);

      const newAchievements = updated.achievements.filter(
        (a) => !progress.achievements.includes(a)
      );
      if (newAchievements.length > 0) {
        setShowCompletionToast(`Achievement unlocked: ${newAchievements[0]}!`);
        setTimeout(() => setShowCompletionToast(null), 4000);
      }
    },
    [progress]
  );

  const handleQuitLesson = useCallback(() => {
    setActiveLesson(null);
    setView("lessons");
    if (progress) {
      const refreshed = refillHearts(progress);
      setProgress(refreshed);
      saveProgress(refreshed);
    }
  }, [progress]);

  // Filtered units/skills for the "All Modules & Vocabulary" overview tab
  const filteredModules = useMemo(() => {
    if (!course) return [];
    const q = moduleSearch.trim().toLowerCase();
    const list: { unitTitle: string; unitId: string; skill: CourseSkill }[] = [];
    for (const unit of course.units) {
      if (selectedUnitFilter !== "all" && unit.id !== selectedUnitFilter) continue;
      for (const skill of unit.skills) {
        if (!q) {
          list.push({ unitTitle: unit.title, unitId: unit.id, skill });
        } else {
          const matchesSkill =
            skill.title.toLowerCase().includes(q) ||
            skill.description.toLowerCase().includes(q) ||
            (skill.tips && skill.tips.toLowerCase().includes(q)) ||
            skill.words.some(
              (w) =>
                w.target.toLowerCase().includes(q) ||
                w.source.toLowerCase().includes(q) ||
                (w.example && w.example.toLowerCase().includes(q))
            );
          if (matchesSkill) {
            list.push({ unitTitle: unit.title, unitId: unit.id, skill });
          }
        }
      }
    }
    return list;
  }, [course, moduleSearch, selectedUnitFilter]);

  if (!course) {
    return (
      <ToolShell tool={LEARN_TOOL}>
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
          <div className="flex justify-center mb-4"><HelpCircle className="w-14 h-14 text-text-muted" /></div>
          <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
            Course not found
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            The {languageId} course is not available yet. Check back soon!
          </p>
          <a
            href="/tools/learn"
            className="mt-4 rounded-xl bg-gold px-6 py-2.5 text-sm font-bold text-kenya-black transition-all active:scale-[0.98] sm:hover:brightness-110"
          >
            Browse languages
          </a>
        </div>
      </ToolShell>
    );
  }

  if (!progress) {
    return (
      <ToolShell tool={LEARN_TOOL}>
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-sm text-text-muted">Loading your progress...</div>
        </div>
      </ToolShell>
    );
  }

  return (
    <ToolShell
      tool={LEARN_TOOL}
      breadcrumbSuffix={[{ label: course.config.name }]}
    >
      {/* Quick Language Switcher Across All Published Courses */}
      {view !== "playing" && (
        <div className="mb-5 flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-hide">
          {PUBLISHED_COURSES.map((c) => {
            const active = c.config.id === course.config.id;
            return (
              <Link
                key={c.config.id}
                href={`/tools/learn/${c.config.id}`}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border ${
                  active
                    ? "bg-gold text-kenya-black border-gold font-bold"
                    : "bg-bg-card border-border text-text-secondary hover:border-gold hover:text-text-primary"
                }`}
              >
                {c.config.name} ({c.config.nativeName})
              </Link>
            );
          })}
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

      {view !== "playing" && (
        <div className="mb-6 flex justify-center px-2 sm:px-4">
          <div className="inline-flex items-center gap-1 rounded-2xl border border-border bg-bg-card p-1 shadow-sm max-w-full overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setView("lessons")}
              role="tab"
              aria-selected={view === "lessons"}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                view === "lessons"
                  ? "bg-gold text-kenya-black shadow-xs font-bold"
                  : "text-text-muted hover:text-text-primary active:bg-bg-elevated"
              }`}
            >
              <GraduationCap className="h-4 w-4 shrink-0" />
              <span>Skill Path</span>
            </button>
            <button
              onClick={() => setView("modules")}
              role="tab"
              aria-selected={view === "modules"}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                view === "modules"
                  ? "bg-gold text-kenya-black shadow-xs font-bold"
                  : "text-text-muted hover:text-text-primary active:bg-bg-elevated"
              }`}
            >
              <Layers className="h-4 w-4 shrink-0" />
              <span>All Modules &amp; Vocab</span>
            </button>
            <button
              onClick={() => setView("games")}
              role="tab"
              aria-selected={view === "games"}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                view === "games"
                  ? "bg-gold text-kenya-black shadow-xs font-bold"
                  : "text-text-muted hover:text-text-primary active:bg-bg-elevated"
              }`}
            >
              <Gamepad2 className="h-4 w-4 shrink-0" />
              <span>Games</span>
            </button>
            {course.grammarSections && course.grammarSections.length > 0 && (
              <button
                onClick={() => setView("grammar")}
                role="tab"
                aria-selected={view === "grammar"}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  view === "grammar"
                    ? "bg-gold text-kenya-black shadow-xs font-bold"
                    : "text-text-muted hover:text-text-primary active:bg-bg-elevated"
                }`}
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span>Grammar</span>
              </button>
            )}
          </div>
        </div>
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
          <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                  All {course.config.name} Modules &amp; Vocabulary ({filteredModules.length})
                </h2>
                <p className="text-xs text-text-secondary">
                  Browse every module, grammar tip, and vocabulary word table at once, or launch any lesson directly.
                </p>
              </div>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={moduleSearch}
                onChange={(e) => setModuleSearch(e.target.value)}
                placeholder={`Search ${course.config.name} or English words across all modules...`}
                className="input-field w-full pl-10 text-sm"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setSelectedUnitFilter("all")}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedUnitFilter === "all"
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary"
                }`}
              >
                All Units ({course.units.length})
              </button>
              {course.units.map((u, idx) => (
                <button
                  key={u.id}
                  onClick={() => setSelectedUnitFilter(u.id)}
                  className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedUnitFilter === u.id
                      ? "bg-gold text-kenya-black"
                      : "bg-bg-elevated border border-border text-text-secondary"
                  }`}
                >
                  Unit {idx + 1}: {u.title.replace(/^Unit \d+:\s*/i, "")}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredModules.map(({ unitTitle, skill }) => {
              const skillLevel = progress.skillLevels[skill.id] || 0;
              return (
                <div
                  key={skill.id}
                  className="bg-bg-card border border-border rounded-2xl p-5 space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-3">
                    <div>
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
                      className="rounded-xl bg-gold px-4 py-2 text-xs font-bold text-kenya-black hover:brightness-110 transition-all"
                    >
                      Practice Module ({skill.words.length} words) →
                    </button>
                  </div>

                  {skill.tips && (
                    <div className="rounded-xl bg-gold/5 border border-gold/20 p-3 text-xs text-text-secondary leading-relaxed">
                      <strong className="text-gold">Module Tip: </strong>
                      {skill.tips}
                    </div>
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
      ) : (
        <SkillTree
          units={course.units}
          progress={progress}
          config={course.config}
          onStartLesson={handleStartLesson}
          onStartReview={handleStartReview}
          onGoBack={() => {
            window.location.href = "/tools/learn";
          }}
        />
      )}
    </ToolShell>
  );
}
