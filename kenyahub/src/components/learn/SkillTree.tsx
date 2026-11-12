"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { getSourcesForLanguage } from "@/data/language-sources";
import DynamicIcon from "@/components/ui/DynamicIcon";

import { useState } from "react";
import {
  Check,
  Star,
  ChevronDown,
  Lightbulb,
  Flame,
  Trophy,
  Target,
  Crown,
  Sparkles,
  Layers,
  Lock,
  Unlock,
  BookOpen,
} from "lucide-react";
import type { CourseUnit, UserProgress, LanguageConfig } from "@/data/courses/types";
import { MAX_SKILL_LEVEL, ACHIEVEMENTS, LEVELS } from "@/data/courses/types";
import {
  getXpLevel,
  getDueReviews,
  isSkillUnlocked,
} from "@/lib/learn-progress";

interface SkillTreeProps {
  units: CourseUnit[];
  progress: UserProgress;
  config: LanguageConfig;
  onStartLesson: (skillId: string, level: number) => void;
  onStartReview: () => void;
  onToggleUnlockAll: () => void;
  onGoBack: () => void;
}

export default function SkillTree({
  units,
  progress,
  config,
  onStartLesson,
  onStartReview,
  onToggleUnlockAll,
}: SkillTreeProps) {
  const sources = getSourcesForLanguage(config.id);
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(units.map((u) => [u.id, true]))
  );
  const [showAchievements, setShowAchievements] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [achCategory, setAchCategory] = useState<string>("all");

  const allExpanded = units.every((u) => expandedUnits[u.id] !== false);
  const isAllUnlocked = Boolean(progress.unlockAll);

  const toggleAllUnits = () => {
    const nextState = !allExpanded;
    setExpandedUnits(Object.fromEntries(units.map((u) => [u.id, nextState])));
  };

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitId]: prev[unitId] === false ? true : false,
    }));
  };

  const levelInfo = getXpLevel(progress.xp);
  const dueReviewCount = getDueReviews(progress).length;

  const totalSkills = units.reduce((s, u) => s + u.skills.length, 0);
  const completedSkills = Object.values(progress.skillLevels).filter(
    (v) => v >= 1
  ).length;
  const masteredSkills = Object.values(progress.skillLevels).filter(
    (v) => v >= MAX_SKILL_LEVEL
  ).length;

  const filteredAchievements = ACHIEVEMENTS.filter(
    (a) => achCategory === "all" || a.category === achCategory
  );

  return (
    <div className="mx-auto max-w-3xl px-0 sm:px-2 pb-8">
      {/* ─── Sleek Compact Progress Bar (Collapsible on Mobile) ─── */}
      <div className="mb-4">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-3.5 sm:p-5 shadow-xs transition-all">
          {/* Always-visible compact overview row */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-xl shrink-0">{levelInfo.current.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-text-primary">
                    Lv.{levelInfo.current.level} {levelInfo.current.title.split("•")[0].trim()}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.6875rem] font-bold bg-gold/15 text-gold border border-gold/30">
                    {progress.xp} XP
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[0.6875rem] sm:text-xs text-text-muted mt-0.5 flex-wrap">
                  <span>{completedSkills}/{totalSkills} Modules</span>
                  <span>·</span>
                  <span className="text-text-secondary">{progress.wordsLearned.length} Words</span>
                  <span>·</span>
                  <span className={progress.streak > 0 ? "text-orange-400 font-semibold" : "text-text-muted"}>
                    {progress.streak}d Streak
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {dueReviewCount > 0 && (
                <button
                  onClick={onStartReview}
                  className="flex items-center gap-1 rounded-xl bg-gold/15 border border-gold/40 px-2.5 py-1 text-xs font-semibold text-gold hover:bg-gold/25 transition-colors cursor-pointer"
                >
                  <Sparkles className="h-3 w-3" />
                  <span>Review ({dueReviewCount})</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowDashboard(!showDashboard)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-bg-elevated hover:bg-border/60 text-xs font-semibold text-text-secondary hover:text-text-primary transition-all cursor-pointer"
              >
                <span>{showDashboard ? "Hide Stats ▴" : "Stats & Badges ▾"}</span>
              </button>
            </div>
          </div>

          {/* Expanded detailed statistics */}
          {showDashboard && (
            <div className="mt-4 pt-4 border-t border-border/50 animate-in fade-in duration-200">
              {/* Responsive 2x2 on Mobile / 4-col on Desktop Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {/* 1. Total XP */}
            <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-3 flex flex-col justify-between">
              <span className="text-xs font-medium text-text-muted">Total XP</span>
              <div className="mt-1 flex items-center gap-1.5 text-lg sm:text-xl font-bold text-gold">
                <DynamicIcon emoji={levelInfo.current.icon} className="w-5 h-5 shrink-0" />
                <span>{progress.xp}</span>
              </div>
              <span className="text-xs text-text-secondary mt-0.5 truncate">
                Lv.{levelInfo.current.level} {levelInfo.current.title}
              </span>
            </div>

            {/* 2. Modules Completed */}
            <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-3 flex flex-col justify-between">
              <span className="text-xs font-medium text-text-muted">Modules</span>
              <div className="mt-1 text-lg sm:text-xl font-bold text-text-primary">
                {completedSkills}
                <span className="text-sm font-normal text-text-muted">/{totalSkills}</span>
              </div>
              <span className="text-xs text-kenya-green-light mt-0.5">
                {masteredSkills > 0 ? `${masteredSkills} Mastered ★` : "Guided Path"}
              </span>
            </div>

            {/* 3. Words Learned */}
            <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-3 flex flex-col justify-between">
              <span className="text-xs font-medium text-text-muted">Vocabulary</span>
              <div className="mt-1 text-lg sm:text-xl font-bold text-text-primary">
                {progress.wordsLearned.length}
              </div>
              <span className="text-xs text-text-secondary mt-0.5">
                Words Practiced
              </span>
            </div>

            {/* 4. Day Streak */}
            <div className="rounded-xl bg-bg-elevated/70 border border-border/60 p-3 flex flex-col justify-between">
              <span className="text-xs font-medium text-text-muted">Day Streak</span>
              <div className="mt-1 flex items-center gap-1.5 text-lg sm:text-xl font-bold text-orange-400">
                <Flame className="h-5 w-5 shrink-0" />
                <span>{progress.streak}</span>
              </div>
              <span className="text-xs text-text-secondary mt-0.5">
                {progress.streak > 0 ? "Active Streak" : "Practice Today"}
              </span>
            </div>
          </div>

          {/* XP Level Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-text-secondary mb-1.5 flex-wrap gap-1">
              <span className="font-semibold text-gold flex items-center gap-1.5">
                <DynamicIcon emoji={levelInfo.current.icon} className="w-4 h-4" /> Level{" "}
                {levelInfo.current.level}: {levelInfo.current.title}
              </span>
              {levelInfo.next ? (
                <span>
                  {progress.xp} / {levelInfo.next.minXp} XP to{" "}
                  {levelInfo.next.title}
                </span>
              ) : (
                <span className="text-gold font-semibold flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5 inline text-gold" /> Max Level!
                </span>
              )}
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-500"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Daily Goal + Action buttons */}
          <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-border/50">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
              <Target className="h-4 w-4 text-kenya-green-light shrink-0" />
              <span>
                Daily Goal:{" "}
                <strong className="text-text-primary">
                  {progress.todayXp}/{progress.dailyGoal} XP
                </strong>
              </span>
              {progress.todayXp >= progress.dailyGoal && (
                <span className="rounded-full bg-kenya-green/20 px-2.5 py-0.5 text-xs font-semibold text-kenya-green-light">
                  ✓ Goal Met!
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {dueReviewCount > 0 && (
                <button
                  onClick={onStartReview}
                  className="flex items-center gap-1.5 rounded-xl bg-gold/15 border border-gold/40 px-3 py-1.5 text-xs font-semibold text-gold hover:bg-gold/25 transition-colors cursor-pointer"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Review ({dueReviewCount})</span>
                </button>
              )}
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className="flex items-center gap-1.5 rounded-xl bg-bg-elevated border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                <Trophy className="h-3.5 w-3.5 text-gold" />
                <span>
                  Badges ({progress.achievements.length}/{ACHIEVEMENTS.length})
                </span>
              </button>
            </div>
          </div>

          {sources.length > 0 && (
            <details className="group mt-3.5 rounded-xl border border-border/70 bg-bg-elevated/50 px-3.5 py-2.5 text-xs">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-text-secondary hover:text-gold transition-colors">
                <span className="inline-flex items-center gap-2 min-w-0 flex-1">
                  <BookOpen className="h-4 w-4 text-gold shrink-0" />
                  <span>
                    Compiled from {sources.length} verified linguistic{" "}
                    {sources.length === 1 ? "source" : "sources"}
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <ul className="mt-2.5 space-y-1.5 border-t border-border/50 pt-2.5 text-xs leading-relaxed text-text-secondary">
                {sources.map((source) => (
                  <li key={source.id} className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">•</span>
                    <span>
                      <span className="font-medium text-text-primary">{source.title}</span>{" "}
                      <span className="text-text-muted">({source.published})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}
            </div>
          )}
        </div>

        {/* ─── Collapsible Achievements Drawer ─── */}
        {showAchievements && (
          <div className="mt-3 rounded-2xl border border-border bg-bg-card p-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <Crown className="h-4 w-4 text-gold" /> Achievements &amp; Ranks
              </h3>
              <ExpandablePillRow className="w-full sm:w-auto max-w-full">
                {["all", "lessons", "streak", "vocabulary", "mastery"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setAchCategory(cat)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium capitalize border transition-all ${
                      achCategory === cat
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </ExpandablePillRow>
            </div>

            {/* Level Ladder Preview */}
            <ExpandablePillRow className="mb-3 pb-1.5">
              {LEVELS.map((lvl) => {
                const reached = progress.xp >= lvl.minXp;
                return (
                  <div
                    key={lvl.level}
                    className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-1.5 text-xs ${
                      reached
                        ? "border-gold/40 bg-gold/10 text-text-primary"
                        : "border-border bg-bg-elevated/40 text-text-muted opacity-60"
                    }`}
                  >
                    <DynamicIcon emoji={lvl.icon} className="w-4 h-4" />
                    <div>
                      <div className="font-bold">Lv.{lvl.level} {lvl.title}</div>
                      <div className="text-text-muted">{lvl.minXp} XP</div>
                    </div>
                  </div>
                );
              })}
            </ExpandablePillRow>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {filteredAchievements.map((ach) => {
                const unlocked = progress.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`flex items-start gap-3 rounded-xl border p-3 transition-all ${
                      unlocked
                        ? "border-gold/40 bg-gold/5"
                        : "border-border bg-bg-elevated/30 opacity-55"
                    }`}
                  >
                    <div className="text-xl flex items-center justify-center shrink-0 mt-0.5">
                      <DynamicIcon emoji={ach.icon} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-text-primary break-words">
                        {ach.name}
                      </div>
                      <div className="text-xs text-text-muted leading-snug mt-0.5">
                        {ach.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ─── Quick Unit Jump Pills + Controls ──────────────────────── */}
      <div className="mb-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <span className="text-xs sm:text-sm font-semibold text-text-secondary">
            {units.length} Units · {totalSkills} Skill Modules
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onToggleUnlockAll}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                isAllUnlocked
                  ? "border-gold/50 bg-gold/15 text-gold"
                  : "border-border bg-bg-card text-text-secondary hover:border-gold/40 hover:text-text-primary"
              }`}
              title={
                isAllUnlocked
                  ? "Switch back to step-by-step guided progression"
                  : "Unlock all units and lessons immediately so you can jump to any module"
              }
            >
              {isAllUnlocked ? (
                <>
                  <Unlock className="h-3.5 w-3.5 text-gold" />
                  <span>All Unlocked (Free Jump)</span>
                </>
              ) : (
                <>
                  <Lock className="h-3.5 w-3.5" />
                  <span>Unlock All Lessons</span>
                </>
              )}
            </button>

            <button
              onClick={toggleAllUnits}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-gold/40 transition-colors cursor-pointer"
            >
              <Layers className="h-3.5 w-3.5 text-gold" />
              <span>{allExpanded ? "Collapse All" : "Expand All"}</span>
            </button>
          </div>
        </div>

        {units.length > 1 && (
          <ExpandablePillRow>
            {units.map((u, idx) => (
              <a
                key={u.id}
                href={`#unit-block-${u.id}`}
                onClick={() =>
                  setExpandedUnits((prev) => ({ ...prev, [u.id]: true }))
                }
                className="shrink-0 whitespace-nowrap rounded-full border border-border bg-bg-card hover:border-gold/50 px-3 py-1 text-xs font-medium text-text-secondary hover:text-gold transition-colors"
              >
                Unit {idx + 1}: {u.title.replace(/^Unit \d+:\s*/i, "")}
              </a>
            ))}
          </ExpandablePillRow>
        )}
      </div>

      {/* ─── Units & Mobile-Optimized Full-Width Skill Cards ─── */}
      <div className="space-y-5">
        {units.map((unit, uIdx) => {
          const isExpanded = expandedUnits[unit.id] !== false;
          const unitCompleted = unit.skills.filter(
            (sk) => (progress.skillLevels[sk.id] || 0) >= 1
          ).length;

          return (
            <div
              key={unit.id}
              id={`unit-block-${unit.id}`}
              className="rounded-2xl border border-border bg-bg-card overflow-hidden transition-all"
            >
              {/* Unit Header Banner */}
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-start sm:items-center justify-between gap-3 p-4 sm:p-5 text-left transition-colors hover:bg-white/[0.02]"
                style={{
                  borderBottom: isExpanded ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold mt-0.5 sm:mt-0">
                    <DynamicIcon emoji={unit.icon} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-[family-name:var(--font-outfit)] text-base sm:text-lg font-bold text-text-primary leading-snug">
                        {unit.title}
                      </h3>
                      <span className="rounded-full bg-bg-elevated px-2.5 py-0.5 text-xs font-semibold text-gold">
                        {unitCompleted}/{unit.skills.length} completed
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 mt-1 sm:mt-0 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Unit Skills List — Full-Width Uncramped Layout */}
              {isExpanded && (
                <div className="divide-y divide-border/50 p-4 sm:p-5 space-y-4">
                  {unit.skills.map((skill, sIdx) => {
                    const unlocked = isSkillUnlocked(
                      skill.id,
                      sIdx,
                      uIdx,
                      progress.skillLevels,
                      units,
                      isAllUnlocked
                    );

                    const currentLevel = progress.skillLevels[skill.id] || 0;
                    const isMastered = currentLevel >= MAX_SKILL_LEVEL;
                    const nextLevel = Math.min(currentLevel + 1, MAX_SKILL_LEVEL);
                    const tipContent = skill.tips || skill.tip;

                    return (
                      <div
                        key={skill.id}
                        className={`pt-4 first:pt-0 transition-all ${
                          !unlocked ? "opacity-60" : ""
                        }`}
                      >
                        {/* Row 1: Icon + Skill Title + Word Count */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border-2 transition-transform ${
                              isMastered
                                ? "border-gold bg-gold/15 text-gold shadow-sm shadow-gold/20"
                                : currentLevel > 0
                                ? "border-kenya-green bg-kenya-green/10 text-kenya-green-light"
                                : unlocked
                                ? "border-border-light bg-bg-elevated text-gold"
                                : "border-border bg-bg-elevated/40 text-text-muted"
                            }`}
                          >
                            {unlocked ? (
                              <DynamicIcon emoji={skill.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                              <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-text-muted" />
                            )}
                            {isMastered && (
                              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.55rem] font-bold text-black">
                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                              </span>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-base font-bold text-text-primary leading-snug break-words">
                                {skill.title}
                              </h4>
                              <span className="rounded-full bg-bg-elevated border border-border/70 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                                {skill.words.length} words
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Full-Width Description (Never Squeezed Between Icon and Button!) */}
                        <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Row 3: 5-Star Mastery Bar on Left + Action Button on Right */}
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5">
                            {Array.from({ length: MAX_SKILL_LEVEL }).map(
                              (_, lvlIdx) => (
                                <Star
                                  key={lvlIdx}
                                  className={`h-4 w-4 ${
                                    lvlIdx < currentLevel
                                      ? "fill-gold text-gold"
                                      : "text-border-light"
                                  }`}
                                />
                              )
                            )}
                            <span className="ml-1.5 text-xs font-medium text-text-muted">
                              {isMastered
                                ? "Mastered (5/5)"
                                : `Level ${currentLevel}/${MAX_SKILL_LEVEL}`}
                            </span>
                          </div>

                          <button
                            disabled={!unlocked}
                            onClick={() =>
                              onStartLesson(
                                skill.id,
                                isMastered ? MAX_SKILL_LEVEL : nextLevel
                              )
                            }
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                              !unlocked
                                ? "cursor-not-allowed bg-bg-elevated text-text-muted"
                                : isMastered
                                ? "border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
                                : currentLevel > 0
                                ? "bg-kenya-green text-white hover:bg-kenya-green-light shadow-sm"
                                : "bg-gold text-black hover:bg-gold-light shadow-sm"
                            }`}
                          >
                            {!unlocked
                              ? "Locked"
                              : isMastered
                              ? "Practice Again"
                              : currentLevel === 0
                              ? "Start Lesson →"
                              : `Continue Lv ${nextLevel} →`}
                          </button>
                        </div>

                        {/* Collapsible Grammar & Lesson Notes Dropdown */}
                        {unlocked && tipContent && (
                          <div className="mt-3">
                            <details
                              onClick={(e) => e.stopPropagation()}
                              className="group rounded-xl bg-bg-elevated/60 border border-border/60 px-3.5 py-2.5 text-xs sm:text-sm text-text-secondary"
                            >
                              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-gold hover:text-gold-light transition-colors">
                                <span className="inline-flex items-center gap-2 min-w-0 flex-1">
                                  <Lightbulb className="h-4 w-4 shrink-0 text-gold" />
                                  <span>Grammar &amp; Lesson Notes</span>
                                </span>
                                <ChevronDown className="h-4 w-4 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                              </summary>
                              <div className="mt-2.5 border-t border-border/50 pt-2.5 text-xs sm:text-sm leading-relaxed text-text-secondary whitespace-pre-line">
                                {tipContent}
                              </div>
                            </details>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
