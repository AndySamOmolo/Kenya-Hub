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
  Heart,
  Flame,
  Trophy,
  Target,
  Crown,
  Sparkles,
  Layers,
  Lock,
  Unlock,
  Zap,
} from "lucide-react";
import type { CourseUnit, UserProgress, LanguageConfig } from "@/data/courses/types";
import { MAX_SKILL_LEVEL, ACHIEVEMENTS, MAX_HEARTS, LEVELS } from "@/data/courses/types";
import {
  getXpLevel,
  minutesToNextHeart,
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
  const nextHeartMin = minutesToNextHeart(progress);
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
    <div className="mx-auto max-w-2xl px-0 sm:px-4 pb-8">
      {/* ─── Header ──────────────────────────────── */}
      <div className="mb-6">
        {/* Hero card */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary sm:text-2xl">
                {config.name} ({config.nativeName})
              </h2>
              <p className="text-xs text-text-secondary">{config.description}</p>
              {sources.length > 0 && (
                <div className="mt-2 space-y-1 text-[0.65rem] leading-relaxed text-text-muted">
                  <p>Built from:</p>
                  {sources.map((source) => (
                    <p key={source.id} className="pl-2">
                      <span className="text-text-secondary">{source.title}</span>{" "}
                      <span className={source.ingestionStatus === "integrated" ? "text-green-400" : "text-gold"}>
                        ({source.ingestionStatus === "integrated" ? "integrated" : "research reference"})
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick stats row */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div className="rounded-xl bg-bg-elevated/60 border border-border/50 p-2 text-center">
              <div className="text-base font-bold text-gold sm:text-lg flex items-center justify-center gap-1">
                <DynamicIcon emoji={levelInfo.current.icon} className="w-[1em] h-[1em]" />
                <span>{progress.xp}</span>
              </div>
              <div className="text-[0.6rem] text-text-muted">Total XP</div>
            </div>
            <div className="rounded-xl bg-bg-elevated/60 border border-border/50 p-2 text-center">
              <div className="text-base font-bold text-text-primary sm:text-lg">
                {completedSkills}/{totalSkills}
              </div>
              <div className="text-[0.6rem] text-text-muted">
                Modules {masteredSkills > 0 ? `(${masteredSkills}★)` : ""}
              </div>
            </div>
            <div className="rounded-xl bg-bg-elevated/60 border border-border/50 p-2 text-center">
              <div className="text-base font-bold text-text-primary sm:text-lg">
                {progress.wordsLearned.length}
              </div>
              <div className="text-[0.6rem] text-text-muted">Words Learned</div>
            </div>
            <div className="rounded-xl bg-bg-elevated/60 border border-border/50 p-2 text-center">
              <div className="flex items-center justify-center gap-0.5 text-base font-bold text-red-400 sm:text-lg">
                <Heart className="h-3.5 w-3.5" fill="currentColor" />{progress.hearts}
              </div>
              <div className="text-[0.6rem] text-text-muted">
                {progress.hearts < MAX_HEARTS ? `+1 in ${nextHeartMin}m` : "Full Hearts"}
              </div>
            </div>
          </div>

          {/* XP Rank Progress bar */}
          <div className="mt-4 rounded-xl border border-border/60 bg-bg-elevated/40 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-gold flex items-center gap-1.5">
                <DynamicIcon emoji={levelInfo.current.icon} className="w-4 h-4" />
                {levelInfo.current.name}
              </span>
              {levelInfo.next ? (
                <span className="text-[0.65rem] text-text-muted">
                  {levelInfo.next.minXp - progress.xp} XP to {levelInfo.next.name}
                </span>
              ) : (
                <span className="text-[0.65rem] text-emerald-400 font-semibold">
                  Highest Rank Reached!
                </span>
              )}
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-700"
                style={{ width: `${levelInfo.progressToNext}%` }}
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[0.6rem] text-text-muted">
              <span className="inline-flex items-center gap-1">
                <Zap className="h-3 w-3 text-gold" /> +10 XP/answer · +50 XP Perfect Lesson
              </span>
              <span className="inline-flex items-center gap-1 text-orange-400">
                <Flame className="h-3 w-3" /> Streak Bonus: +{Math.min(Math.max(1, progress.streak), 7) * 5} XP/lesson
              </span>
            </div>
          </div>

          {/* Daily goal */}
          <div className="mt-3 rounded-lg border border-border/50 bg-bg-elevated/50 p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-gold" />
                <span className="text-[0.65rem] font-semibold text-text-secondary">
                  Daily Goal (+25 XP Bonus on Completion)
                </span>
              </div>
              <span className="text-[0.65rem] font-bold text-gold">
                {Math.min(progress.todayXp, progress.dailyGoal)}/{progress.dailyGoal} XP
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gold transition-all duration-500"
                style={{
                  width: `${Math.min(100, (progress.todayXp / progress.dailyGoal) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>

        {dueReviewCount > 0 && (
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-kenya-green/30 bg-kenya-green/5 p-3">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-kenya-green" />
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
              <p className="text-xs leading-relaxed text-text-secondary">
                {dueReviewCount} item{dueReviewCount === 1 ? "" : "s"} ready for spaced-repetition review.
              </p>
              <button
                onClick={onStartReview}
                className="shrink-0 rounded-lg bg-kenya-green px-3 py-2 text-xs font-bold text-white transition-colors active:brightness-95 sm:hover:brightness-110"
              >
                Review now
              </button>
            </div>
          </div>
        )}

        {/* Achievements button */}
        <button
          onClick={() => setShowAchievements(!showAchievements)}
          aria-expanded={showAchievements}
          aria-controls="achievements-panel"
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-border bg-bg-card px-4 py-3 transition-all active:bg-bg-elevated sm:hover:border-gold/30"
        >
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-text-primary">
              Achievements &amp; XP Milestones
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-xs font-bold text-gold">
              {progress.achievements.length}/{ACHIEVEMENTS.length} Unlocked
            </span>
            <ChevronDown
              className={`h-4 w-4 text-text-muted transition-transform ${
                showAchievements ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {showAchievements && (
          <div id="achievements-panel" className="mt-2 rounded-xl border border-border bg-bg-card p-3.5 space-y-3">
            {/* Horizontal Pill Filter for Achievement Categories */}
            <ExpandablePillRow>
              {[
                { id: "all", label: `All (${ACHIEVEMENTS.length})` },
                { id: "lessons", label: "Lessons" },
                { id: "streak", label: "Streaks" },
                { id: "vocabulary", label: "Vocabulary" },
                { id: "mastery", label: "Mastery & Ranks" },
              ].map((cat) => {
                const active = achCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setAchCategory(cat.id)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium border transition-all cursor-pointer ${
                      active
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </ExpandablePillRow>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {filteredAchievements.map((ach) => {
                const earned = progress.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`flex flex-col justify-between rounded-xl p-3 text-left transition-all ${
                      earned
                        ? "bg-gold/10 border border-gold/30"
                        : "opacity-60 border border-border bg-bg-elevated/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xl"><DynamicIcon emoji={ach.icon} className="w-5 h-5" /></span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${
                          earned
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-bg-card text-gold"
                        }`}
                      >
                        {earned ? `✓ +${ach.xpReward} XP` : `+${ach.xpReward} XP`}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span
                        className={`block text-xs font-bold ${
                          earned ? "text-gold" : "text-text-primary"
                        }`}
                      >
                        {ach.name}
                      </span>
                      <span className="block mt-0.5 text-[0.65rem] text-text-muted leading-snug">
                        {ach.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 10-Rank Progression Ladder */}
            <div className="pt-2 border-t border-border/60">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted mb-2">
                10-Tier Rank Ladder
              </p>
              <ExpandablePillRow>
                {LEVELS.map((lvl) => {
                  const reached = progress.xp >= lvl.minXp;
                  return (
                    <div
                      key={lvl.name}
                      className={`shrink-0 rounded-full border px-3 py-1 text-[0.65rem] font-medium flex items-center gap-1.5 ${
                        reached
                          ? "border-gold/40 bg-gold/10 text-gold font-semibold"
                          : "border-border bg-bg-elevated/50 text-text-muted"
                      }`}
                    >
                      <DynamicIcon emoji={lvl.icon} className="w-3.5 h-3.5" />
                      <span>{lvl.name}</span>
                      <span className="opacity-75">({lvl.minXp} XP)</span>
                    </div>
                  );
                })}
              </ExpandablePillRow>
            </div>
          </div>
        )}
      </div>

      {/* ─── Unlock Mode & Unit Controls Bar ─────────── */}
      <div className="mb-4 rounded-xl border border-border bg-bg-card p-3.5 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-gold" />
          <div>
            <span className="text-xs font-bold text-text-primary block">
              {isAllUnlocked
                ? `All ${totalSkills} Modules Unlocked (Free-Browse Mode)`
                : `Progressive Path Mode (${completedSkills}/${totalSkills} Completed)`}
            </span>
            <span className="text-[0.65rem] text-text-muted">
              {isAllUnlocked
                ? "Jump into any unit or module directly, or switch back to guided progression."
                : "Complete each module to unlock the next, or tap Unlock All to skip ahead."}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleUnlockAll}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${
              isAllUnlocked
                ? "border-kenya-green/40 bg-kenya-green/15 text-kenya-green-light hover:bg-kenya-green/25"
                : "border-gold bg-gold text-kenya-black hover:brightness-110"
            }`}
          >
            {isAllUnlocked ? (
              <>
                <Lock className="h-3.5 w-3.5" /> Lock to Progressive Path
              </>
            ) : (
              <>
                <Unlock className="h-3.5 w-3.5" /> Unlock All Modules
              </>
            )}
          </button>
          <button
            onClick={toggleAllUnits}
            className="rounded-lg border border-border bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-text-secondary hover:border-gold/50 hover:text-gold transition-colors"
          >
            {allExpanded ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Unit Quick-Jump Pills */}
      <ExpandablePillRow className="mb-4">
        {units.map((unit, idx) => (
          <a
            key={unit.id}
            href={`#unit-block-${unit.id}`}
            onClick={() =>
              setExpandedUnits((prev) => ({ ...prev, [unit.id]: true }))
            }
            className="shrink-0 whitespace-nowrap rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-xs font-medium text-text-secondary hover:border-gold/50 hover:bg-gold/15 hover:text-gold transition-all"
          >
            Unit {idx + 1}: {unit.title.replace(/^Unit \d+:\s*/i, "")}
          </a>
        ))}
      </ExpandablePillRow>

      {/* ─── Skill Tree Path ─── */}
      <div className="space-y-4">
        {units.map((unit, uIdx) => {
          const isExpanded = expandedUnits[unit.id] !== false;
          const unitCompleted = unit.skills.every(
            (s) => (progress.skillLevels[s.id] || 0) >= 1
          );
          const unitMastered = unit.skills.every(
            (s) => (progress.skillLevels[s.id] || 0) >= MAX_SKILL_LEVEL
          );

          return (
            <div key={unit.id} id={`unit-block-${unit.id}`}>
              {/* Unit header */}
              <button
                onClick={() => toggleUnit(unit.id)}
                aria-expanded={isExpanded}
                aria-controls={`unit-${unit.id}-skills`}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                  unitMastered
                    ? "border-gold/30 bg-gold/5"
                    : unitCompleted
                    ? "border-kenya-green/30 bg-kenya-green/5"
                    : "border-border bg-bg-card active:bg-bg-elevated sm:hover:border-gold/40"
                }`}
              >
                <span className="text-2xl"><DynamicIcon emoji={unit.icon} className="w-[1em] h-[1em]" /></span>
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-sm font-bold text-text-primary break-words">
                    {unit.title}
                  </h3>
                  <p className="text-[0.65rem] text-text-muted leading-snug break-words">
                    {unit.description} · {unit.skills.length} modules
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {unitMastered && (
                    <Crown className="h-4 w-4 text-gold shrink-0" />
                  )}
                  {unitCompleted && !unitMastered && (
                    <Check className="h-4 w-4 text-kenya-green" />
                  )}
                  <ChevronDown
                    className={`h-4 w-4 text-text-muted transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Skills list */}
              {isExpanded && (
                <div id={`unit-${unit.id}-skills`} className="mt-2 ml-4 space-y-2 border-l-2 border-border pl-4 sm:ml-6 sm:pl-5">
                  {unit.skills.map((skill, sIdx) => {
                    const skillLevel =
                      progress.skillLevels[skill.id] || 0;
                    const nextLevel = Math.min(
                      skillLevel + 1,
                      MAX_SKILL_LEVEL
                    );
                    const unlocked = isSkillUnlocked(
                      skill.id,
                      sIdx,
                      uIdx,
                      progress.skillLevels,
                      units,
                      isAllUnlocked
                    );

                    return (
                      <div
                        key={skill.id}
                        className={`relative rounded-xl border p-4 transition-all ${
                          !unlocked
                            ? "border-border/50 bg-bg-card/50 opacity-65"
                            : skillLevel >= MAX_SKILL_LEVEL
                            ? "border-gold/30 bg-gradient-to-r from-gold/5 to-bg-card"
                            : "border-border bg-bg-card hover:border-gold/30"
                        }`}
                      >
                        {/* Connector dot */}
                        <div
                          className={`absolute -left-[1.35rem] top-5 h-3 w-3 rounded-full border-2 sm:-left-[1.65rem] ${
                            !unlocked
                              ? "border-border bg-bg-elevated"
                              : skillLevel >= MAX_SKILL_LEVEL
                              ? "border-gold bg-gold"
                              : skillLevel > 0
                              ? "border-kenya-green bg-kenya-green"
                              : "border-gold bg-bg-primary"
                          }`}
                        />

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-2xl"><DynamicIcon emoji={skill.icon} className="w-[1em] h-[1em]" /></span>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-text-primary flex flex-wrap items-center gap-1.5 break-words">
                              {skill.title}
                              {!unlocked && <Lock className="w-3.5 h-3.5 text-text-muted inline" />}
                            </h4>
                            <p className="text-[0.65rem] text-text-muted leading-snug break-words">
                              {skill.description} · {skill.words.length} words
                            </p>

                            {/* Star progress */}
                            <div className="mt-1.5 flex items-center gap-1">
                              {Array.from({ length: MAX_SKILL_LEVEL }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3.5 w-3.5 ${
                                      i < skillLevel
                                        ? "fill-gold text-gold"
                                        : "text-border"
                                    }`}
                                  />
                                )
                              )}
                              <span className="ml-1 text-[0.55rem] text-text-muted">
                                {skillLevel}/{MAX_SKILL_LEVEL}
                              </span>
                            </div>
                          </div>

                          {/* Action button */}
                          {unlocked ? (
                            <button
                              onClick={() =>
                                onStartLesson(skill.id, nextLevel)
                              }
                              className={`ml-auto shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 ${
                                skillLevel >= MAX_SKILL_LEVEL
                                  ? "border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
                                  : "bg-gold text-kenya-black sm:hover:brightness-110"
                              }`}
                            >
                              {skillLevel >= MAX_SKILL_LEVEL ? (
                                <span className="inline-flex items-center gap-1">
                                  <Sparkles className="h-3.5 w-3.5" /> Practice Again
                                </span>
                              ) : skillLevel === 0 ? (
                                "Start Module"
                              ) : (
                                `Level ${nextLevel}`
                              )}
                            </button>
                          ) : (
                            <button
                              onClick={onToggleUnlockAll}
                              title="Tap to unlock all modules"
                              className="ml-auto shrink-0 rounded-xl border border-border bg-bg-elevated px-3.5 py-2 text-xs font-semibold text-text-muted hover:border-gold/50 hover:text-gold transition-all inline-flex items-center gap-1.5"
                            >
                              <Lock className="h-3.5 w-3.5" /> Locked · Unlock All
                            </button>
                          )}
                        </div>

                        {/* Tips preview */}
                        {skill.tips && unlocked && (
                          <div className="mt-3 flex items-start gap-2 rounded-lg bg-gold/5 p-2.5">
                            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                            <p className="text-[0.65rem] leading-relaxed text-text-secondary">
                              {skill.tips}
                            </p>
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
