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
  BookOpen,
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
              <p className="text-xs text-text-secondary mt-0.5">{config.description}</p>
              {sources.length > 0 && (
                <details className="group mt-2.5 rounded-xl border border-border/70 bg-bg-elevated/50 px-3 py-2 text-xs">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[0.7rem] font-semibold text-text-secondary hover:text-gold transition-colors">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span>
                        Built from {sources.length} linguistic &amp; historical reference{" "}
                        {sources.length === 1 ? "source" : "sources"}
                      </span>
                    </span>
                    <ChevronDown className="h-3.5 w-3.5 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <ul className="mt-2 space-y-1.5 border-t border-border/50 pt-2 text-[0.65rem] leading-relaxed text-text-secondary">
                    {sources.map((source) => (
                      <li key={source.id} className="flex items-start gap-1.5">
                        <span className="text-gold font-bold">•</span>
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
                {Array.from({ length: MAX_HEARTS }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < progress.hearts
                        ? "fill-red-500 text-red-500"
                        : "text-border-light"
                    }`}
                  />
                ))}
              </div>
              <div className="text-[0.6rem] text-text-muted">
                {progress.hearts < MAX_HEARTS
                  ? `+1 in ${nextHeartMin}m`
                  : "Full Hearts"}
              </div>
            </div>
          </div>

          {/* XP Level Progress Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-[0.65rem] text-text-secondary mb-1">
              <span className="font-semibold text-gold flex items-center gap-1">
                <DynamicIcon emoji={levelInfo.current.icon} className="w-3.5 h-3.5" /> Level{" "}
                {levelInfo.current.level}: {levelInfo.current.title}
              </span>
              {levelInfo.next ? (
                <span>
                  {progress.xp} / {levelInfo.next.minXp} XP to{" "}
                  {levelInfo.next.title}
                </span>
              ) : (
                <span className="text-gold font-semibold flex items-center gap-1"><Crown className="w-3.5 h-3.5 inline text-gold" /> Max Level!</span>
              )}
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-500"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Daily Goal + Action buttons */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Target className="h-3.5 w-3.5 text-kenya-green-light" />
              <span>
                Daily XP:{" "}
                <strong className="text-text-primary">
                  {progress.dailyXp}/{progress.dailyGoal}
                </strong>
              </span>
              {progress.dailyXp >= progress.dailyGoal && (
                <span className="rounded-full bg-kenya-green/20 px-2 py-0.5 text-[0.6rem] font-semibold text-kenya-green-light">
                  ✓ Goal Met!
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {dueReviewCount > 0 && (
                <button
                  onClick={onStartReview}
                  className="flex items-center gap-1.5 rounded-lg bg-gold/15 border border-gold/40 px-2.5 py-1 text-xs font-semibold text-gold hover:bg-gold/25 transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Review ({dueReviewCount})
                </button>
              )}
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className="flex items-center gap-1 rounded-lg bg-bg-elevated border border-border px-2.5 py-1 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                <Trophy className="h-3.5 w-3.5 text-gold" />
                <span>
                  Badges ({progress.achievements.length}/{ACHIEVEMENTS.length})
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ─── Collapsible Achievements Drawer ─── */}
        {showAchievements && (
          <div className="mt-3 rounded-2xl border border-border bg-bg-card p-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <Crown className="h-4 w-4 text-gold" /> Achievements &amp; Ranks
              </h3>
              <ExpandablePillRow className="w-auto">
                {["all", "learning", "streak", "mastery", "speed"].map((cat) => (
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
            <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1.5">
              {LEVELS.map((lvl) => {
                const reached = progress.xp >= lvl.minXp;
                return (
                  <div
                    key={lvl.level}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[0.65rem] ${
                      reached
                        ? "border-gold/40 bg-gold/10 text-text-primary"
                        : "border-border bg-bg-elevated/40 text-text-muted opacity-60"
                    }`}
                  >
                    <DynamicIcon emoji={lvl.icon} className="w-3.5 h-3.5" />
                    <div>
                      <div className="font-bold">Lv.{lvl.level} {lvl.title}</div>
                      <div className="text-[0.55rem] text-text-muted">{lvl.minXp} XP</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {filteredAchievements.map((ach) => {
                const unlocked = progress.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`flex items-start gap-2.5 rounded-xl border p-2.5 transition-all ${
                      unlocked
                        ? "border-gold/40 bg-gold/5"
                        : "border-border bg-bg-elevated/30 opacity-50"
                    }`}
                  >
                    <div className="text-xl flex items-center justify-center"><DynamicIcon emoji={ach.icon} className="w-5 h-5" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-text-primary break-words">
                        {ach.title}
                      </div>
                      <div className="text-[0.6rem] text-text-muted leading-tight">
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

      {/* ─── Skill Tree Units ──────────────────────── */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1">
        <span className="text-xs font-semibold text-text-secondary">
          {units.length} Units · {totalSkills} Skill Modules
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleUnlockAll}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:border-gold/40 transition-colors"
          >
            <Layers className="h-3.5 w-3.5 text-gold" />
            {allExpanded ? "Collapse All Units" : "Expand All Units"}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {units.map((unit) => {
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
                className="w-full flex items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-white/[0.02]"
                style={{
                  borderBottom: isExpanded ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
                    style={{ backgroundColor: unit.color }}
                  >
                    U{unit.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-[family-name:var(--font-outfit)] text-base font-bold text-text-primary">
                        {unit.title}
                      </h3>
                      <span className="rounded-full bg-bg-elevated px-2 py-0.5 text-[0.6rem] font-semibold text-text-secondary">
                        {unitCompleted}/{unit.skills.length}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      {unit.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Unit Skills List */}
              {isExpanded && (
                <div className="divide-y divide-border/50 p-3 sm:p-4 space-y-3">
                  {unit.skills.map((skill, sIdx) => {
                    const prevIds =
                      sIdx === 0
                        ? []
                        : [unit.skills[sIdx - 1].id];
                    const unlocked =
                      isAllUnlocked ||
                      (unit.number === 1 && sIdx === 0) ||
                      isSkillUnlocked(skill.id, prevIds, progress);

                    const currentLevel = progress.skillLevels[skill.id] || 0;
                    const isMastered = currentLevel >= MAX_SKILL_LEVEL;
                    const nextLevel = Math.min(currentLevel + 1, MAX_SKILL_LEVEL);

                    return (
                      <div
                        key={skill.id}
                        className={`pt-3 first:pt-0 rounded-xl transition-all ${
                          !unlocked ? "opacity-55" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 min-w-0 flex-1">
                            {/* Skill Icon Node */}
                            <div
                              className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl border-2 transition-transform ${
                                isMastered
                                  ? "border-gold bg-gold/15 shadow-sm shadow-gold/20"
                                  : currentLevel > 0
                                  ? "border-kenya-green bg-kenya-green/10"
                                  : unlocked
                                  ? "border-border-light bg-bg-elevated"
                                  : "border-border bg-bg-elevated/40"
                              }`}
                            >
                              {unlocked ? (
                                <DynamicIcon emoji={skill.icon} className="w-6 h-6" />
                              ) : (
                                <Lock className="h-5 w-5 text-text-muted" />
                              )}
                              {isMastered && (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.55rem] font-bold text-black">
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </span>
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <h4 className="text-sm font-bold text-text-primary">
                                  {skill.title}
                                </h4>
                                <span className="text-[0.65rem] text-text-muted">
                                  ({skill.words.length} words)
                                </span>
                              </div>
                              <p className="text-xs text-text-secondary">
                                {skill.description}
                              </p>

                              {/* 5-Star Level Indicator */}
                              <div className="mt-1.5 flex items-center gap-1">
                                {Array.from({ length: MAX_SKILL_LEVEL }).map(
                                  (_, lvlIdx) => (
                                    <Star
                                      key={lvlIdx}
                                      className={`h-3.5 w-3.5 ${
                                        lvlIdx < currentLevel
                                          ? "fill-gold text-gold"
                                          : "text-border-light"
                                      }`}
                                    />
                                  )
                                )}
                                <span className="ml-1 text-[0.6rem] text-text-muted">
                                  {isMastered
                                    ? "Mastered"
                                    : `Level ${currentLevel}/${MAX_SKILL_LEVEL}`}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Start / Practice Button */}
                          <div className="shrink-0">
                            <button
                              disabled={!unlocked}
                              onClick={() =>
                                onStartLesson(
                                  skill.id,
                                  isMastered ? MAX_SKILL_LEVEL : nextLevel
                                )
                              }
                              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
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
                                ? "Practice"
                                : currentLevel === 0
                                ? "Start"
                                : `Lv ${nextLevel}`}
                            </button>
                          </div>
                        </div>

                        {/* Tip Callout + Preview Vocabulary */}
                        {unlocked && (
                          <div className="mt-2.5 pl-0 sm:pl-15 space-y-2">
                            {skill.tip && (
                              <div className="flex items-start gap-2 rounded-lg bg-bg-elevated/60 border border-border/50 px-3 py-2 text-[0.7rem] text-text-secondary">
                                <Lightbulb className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                                <span>{skill.tip}</span>
                              </div>
                            )}

                            {/* Word chips preview */}
                            <div className="flex flex-wrap gap-1.5">
                              {skill.words.slice(0, 6).map((w) => {
                                const learned = progress.wordsLearned.includes(
                                  w.id
                                );
                                return (
                                  <span
                                    key={w.id}
                                    className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.65rem] ${
                                      learned
                                        ? "border-kenya-green/30 bg-kenya-green/10 text-text-primary"
                                        : "border-border bg-bg-elevated/40 text-text-secondary"
                                    }`}
                                  >
                                    <strong className="text-gold">
                                      {w.luo}
                                    </strong>
                                    <span className="text-text-muted">·</span>
                                    <span>{w.english}</span>
                                  </span>
                                );
                              })}
                              {skill.words.length > 6 && (
                                <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[0.6rem] text-text-muted">
                                  +{skill.words.length - 6} more
                                </span>
                              )}
                            </div>
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
