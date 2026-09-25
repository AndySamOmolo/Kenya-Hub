"use client";

import { useState } from "react";
import {
  Lock,
  Check,
  Star,
  ChevronDown,
  ChevronRight,
  Volume2,
  Lightbulb,
  Zap,
  Heart,
  Flame,
  Trophy,
  Target,
} from "lucide-react";
import type { CourseUnit, UserProgress, LanguageConfig } from "@/data/courses/types";
import { MAX_SKILL_LEVEL, LEVELS, ACHIEVEMENTS, MAX_HEARTS } from "@/data/courses/types";
import {
  isSkillUnlocked,
  getXpLevel,
  minutesToNextHeart,
} from "@/lib/learn-progress";

/* ═══════════════════════════════════════════════════════
   SKILL TREE — Duolingo-style learning path
   ═══════════════════════════════════════════════════════ */

interface SkillTreeProps {
  units: CourseUnit[];
  progress: UserProgress;
  config: LanguageConfig;
  onStartLesson: (skillId: string, level: number) => void;
  onGoBack: () => void;
}

export default function SkillTree({
  units,
  progress,
  config,
  onStartLesson,
  onGoBack,
}: SkillTreeProps) {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(
    units[0]?.id || null
  );
  const [showProfile, setShowProfile] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  const levelInfo = getXpLevel(progress.xp);
  const nextHeartMin = minutesToNextHeart(progress);

  // Count totals
  const totalSkills = units.reduce((s, u) => s + u.skills.length, 0);
  const completedSkills = Object.values(progress.skillLevels).filter(
    (v) => v >= 1
  ).length;
  const masteredSkills = Object.values(progress.skillLevels).filter(
    (v) => v >= MAX_SKILL_LEVEL
  ).length;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-8">
      {/* ─── Header ──────────────────────────────── */}
      <div className="mb-6">
        {/* Language badge */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={onGoBack}
            className="flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors active:text-text-primary sm:hover:text-text-primary"
          >
            <ChevronRight className="h-4 w-4 rotate-180" /> Languages
          </button>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs font-semibold transition-all active:bg-bg-elevated sm:hover:border-gold/40"
          >
            <span>{levelInfo.current.icon}</span>
            <span className="text-gold">{progress.xp} XP</span>
            {progress.streak > 0 && (
              <>
                <span className="text-border">|</span>
                <Flame className="h-3 w-3 text-orange-400" />
                <span className="text-orange-400">{progress.streak}</span>
              </>
            )}
          </button>
        </div>

        {/* Hero card */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-3xl sm:h-16 sm:w-16">
              {config.flag}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary sm:text-2xl">
                {config.name}
              </h1>
              <p className="text-xs text-text-secondary">{config.description}</p>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-base font-bold text-gold sm:text-lg">{levelInfo.current.icon}</div>
              <div className="text-[0.6rem] text-text-muted">{levelInfo.current.name}</div>
            </div>
            <div className="text-center">
              <div className="text-base font-bold text-text-primary sm:text-lg">{completedSkills}/{totalSkills}</div>
              <div className="text-[0.6rem] text-text-muted">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-base font-bold text-text-primary sm:text-lg">{progress.wordsLearned.length}</div>
              <div className="text-[0.6rem] text-text-muted">Words</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-0.5 text-base font-bold text-red-400 sm:text-lg">
                <Heart className="h-3.5 w-3.5" fill="currentColor" />{progress.hearts}
              </div>
              <div className="text-[0.6rem] text-text-muted">
                {progress.hearts < MAX_HEARTS ? `+1 in ${nextHeartMin}m` : "Full"}
              </div>
            </div>
          </div>

          {/* XP Progress bar */}
          {levelInfo.next && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-[0.6rem] text-text-muted">
                <span>{levelInfo.current.name}</span>
                <span>{levelInfo.next.name}</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-bg-elevated">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-700"
                  style={{ width: `${levelInfo.progressToNext}%` }}
                />
              </div>
              <div className="mt-0.5 text-center text-[0.55rem] text-text-muted">
                {progress.xp} / {levelInfo.next.minXp} XP
              </div>
            </div>
          )}

          {/* Daily goal */}
          <div className="mt-3 rounded-lg border border-border/50 bg-bg-elevated/50 p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-gold" />
                <span className="text-[0.65rem] font-semibold text-text-secondary">
                  Daily Goal
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

        {/* Achievements button */}
        <button
          onClick={() => setShowAchievements(!showAchievements)}
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-border bg-bg-card px-4 py-3 transition-all active:bg-bg-elevated sm:hover:border-gold/30"
        >
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-text-primary">
              Achievements
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">
              {progress.achievements.length}/{ACHIEVEMENTS.length}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-text-muted transition-transform ${
                showAchievements ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Achievements panel */}
        {showAchievements && (
          <div className="mt-2 rounded-xl border border-border bg-bg-card p-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {ACHIEVEMENTS.map((ach) => {
                const earned = progress.achievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`flex flex-col items-center rounded-lg p-2.5 text-center transition-all ${
                      earned
                        ? "bg-gold/10 border border-gold/20"
                        : "opacity-40 border border-border/30"
                    }`}
                  >
                    <span className="text-2xl">{ach.icon}</span>
                    <span
                      className={`mt-1 text-[0.6rem] font-semibold ${
                        earned ? "text-gold" : "text-text-muted"
                      }`}
                    >
                      {ach.name}
                    </span>
                    <span className="text-[0.5rem] text-text-muted">
                      {ach.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ─── Skill Tree Path ─────────────────────── */}
      <div className="space-y-3">
        {units.map((unit, unitIdx) => {
          const isExpanded = expandedUnit === unit.id;
          const unitCompleted = unit.skills.every(
            (s) => (progress.skillLevels[s.id] || 0) >= 1
          );
          const unitMastered = unit.skills.every(
            (s) => (progress.skillLevels[s.id] || 0) >= MAX_SKILL_LEVEL
          );

          // Is this unit accessible?
          const unitUnlocked =
            unitIdx === 0 ||
            isSkillUnlocked(
              unit.skills[0].id,
              0,
              unitIdx,
              progress.skillLevels,
              units
            );

          return (
            <div key={unit.id}>
              {/* Unit header */}
              <button
                onClick={() =>
                  setExpandedUnit(isExpanded ? null : unit.id)
                }
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 transition-all ${
                  unitMastered
                    ? "border-gold/30 bg-gold/5"
                    : unitCompleted
                    ? "border-kenya-green/30 bg-kenya-green/5"
                    : unitUnlocked
                    ? "border-border bg-bg-card active:bg-bg-elevated sm:hover:border-gold/40"
                    : "border-border/50 bg-bg-card/50 opacity-60"
                }`}
              >
                <span className="text-2xl">{unit.icon}</span>
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-sm font-bold text-text-primary truncate">
                    {unit.title}
                  </h3>
                  <p className="text-[0.6rem] text-text-muted truncate">
                    {unit.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {unitMastered && (
                    <span className="text-xs text-gold">👑</span>
                  )}
                  {unitCompleted && !unitMastered && (
                    <Check className="h-4 w-4 text-kenya-green" />
                  )}
                  {!unitUnlocked && <Lock className="h-4 w-4 text-text-muted" />}
                  <ChevronDown
                    className={`h-4 w-4 text-text-muted transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Skills list */}
              {isExpanded && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-border pl-4 sm:ml-6 sm:pl-5">
                  {unit.skills.map((skill, skillIdx) => {
                    const skillLevel =
                      progress.skillLevels[skill.id] || 0;
                    const unlocked = isSkillUnlocked(
                      skill.id,
                      skillIdx,
                      unitIdx,
                      progress.skillLevels,
                      units
                    );
                    const nextLevel = Math.min(
                      skillLevel + 1,
                      MAX_SKILL_LEVEL
                    );

                    return (
                      <div
                        key={skill.id}
                        className={`relative rounded-xl border p-4 transition-all ${
                          !unlocked
                            ? "border-border/50 bg-bg-card/50 opacity-50"
                            : skillLevel >= MAX_SKILL_LEVEL
                            ? "border-gold/30 bg-gradient-to-r from-gold/5 to-bg-card"
                            : "border-border bg-bg-card"
                        }`}
                      >
                        {/* Connector dot */}
                        <div
                          className={`absolute -left-[1.35rem] top-5 h-3 w-3 rounded-full border-2 sm:-left-[1.65rem] ${
                            skillLevel >= MAX_SKILL_LEVEL
                              ? "border-gold bg-gold"
                              : skillLevel > 0
                              ? "border-kenya-green bg-kenya-green"
                              : unlocked
                              ? "border-gold bg-bg-primary"
                              : "border-border bg-bg-elevated"
                          }`}
                        />

                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-text-primary truncate">
                              {skill.title}
                            </h4>
                            <p className="text-[0.6rem] text-text-muted truncate">
                              {skill.description}
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
                              disabled={
                                progress.hearts <= 0 ||
                                skillLevel >= MAX_SKILL_LEVEL
                              }
                              className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 ${
                                skillLevel >= MAX_SKILL_LEVEL
                                  ? "border border-gold/30 bg-gold/5 text-gold"
                                  : progress.hearts > 0
                                  ? "bg-gold text-kenya-black sm:hover:brightness-110"
                                  : "bg-bg-elevated text-text-muted cursor-not-allowed"
                              }`}
                            >
                              {skillLevel >= MAX_SKILL_LEVEL
                                ? "✨ Mastered"
                                : skillLevel === 0
                                ? "Start"
                                : `Level ${nextLevel}`}
                            </button>
                          ) : (
                            <Lock className="h-5 w-5 shrink-0 text-text-muted" />
                          )}
                        </div>

                        {/* Tips preview */}
                        {skill.tips && unlocked && skillLevel === 0 && (
                          <div className="mt-3 flex items-start gap-2 rounded-lg bg-gold/5 p-2.5">
                            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                            <p className="text-[0.6rem] leading-relaxed text-text-secondary line-clamp-2">
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
