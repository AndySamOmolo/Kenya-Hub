"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Gamepad2, GraduationCap, HelpCircle, PartyPopper } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import SkillTree from "@/components/learn/SkillTree";
import LessonPlayer from "@/components/learn/LessonPlayer";
import GamesHub from "@/components/learn/GamesHub";
import type {
  CourseUnit,
  CourseSkill,
  UserProgress,
  LessonResult,
  LanguageConfig,
} from "@/data/courses/types";
import {
  loadProgress,
  saveProgress,
  refillHearts,
  applyLessonResult,
} from "@/lib/learn-progress";
import { TOOLS } from "@/lib/tools-registry";

// Course data imports
import { LUO_CONFIG, LUO_UNITS } from "@/data/courses/luo/course";

const COURSES: Record<
  string,
  { config: LanguageConfig; units: CourseUnit[] }
> = {
  luo: { config: LUO_CONFIG, units: LUO_UNITS },
};

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

type PageView = "lessons" | "games" | "playing";

export default function LanguageClientPage({ languageId }: { languageId: string }) {
  const course = COURSES[languageId];

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [view, setView] = useState<PageView>("lessons");
  const [activeLesson, setActiveLesson] = useState<{
    skill: CourseSkill;
    level: number;
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
      if (!skill || !progress || progress.hearts <= 0) return;
      setActiveLesson({ skill, level });
      setView("playing");
    },
    [findSkill, progress]
  );

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
        <div className="mb-4 flex justify-center gap-1 sm:mb-6">
          <button
            onClick={() => setView("lessons")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              view === "lessons"
                ? "bg-gold text-kenya-black"
                : "text-text-muted active:bg-bg-card sm:hover:text-text-primary"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Lessons</span>
          </button>
          <button
            onClick={() => setView("games")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              view === "games"
                ? "bg-gold text-kenya-black"
                : "text-text-muted active:bg-bg-card sm:hover:text-text-primary"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Games</span>
          </button>
        </div>
      )}

      {view === "playing" && activeLesson ? (
        <LessonPlayer
          skill={activeLesson.skill}
          level={activeLesson.level}
          progress={progress}
          locale={course.config.speechLocale}
          languageName={course.config.name}
          onComplete={handleLessonComplete}
          onQuit={handleQuitLesson}
        />
      ) : view === "games" ? (
        <GamesHub
          units={course.units}
          languageName={course.config.name}
          locale={course.config.speechLocale}
          onBack={() => setView("lessons")}
        />
      ) : (
        <SkillTree
          units={course.units}
          progress={progress}
          config={course.config}
          onStartLesson={handleStartLesson}
          onGoBack={() => {}}
        />
      )}
    </ToolShell>
  );
}
