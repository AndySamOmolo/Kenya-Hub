// ============================================================
// Language Learning Progress Manager
// Handles localStorage persistence, hearts, XP, streaks, and optional Unlock All
// ============================================================

import type { UserProgress, LessonResult } from '../data/courses/types';
import {
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  ACHIEVEMENTS,
  LEVELS,
  XP_DAILY_GOAL_BONUS,
} from '../data/courses/types';

const STORAGE_KEY = 'kh-learn-progress';
const PROGRESS_VERSION = 2;

/* ─── Default state ────────────────────────────────── */

export function createDefaultProgress(languageId: string): UserProgress {
  return {
    version: PROGRESS_VERSION,
    languageId,
    skillLevels: {},
    unlockAll: false,
    xp: 0,
    streak: 0,
    lastActiveDate: '',
    dailyGoal: 50,
    todayXp: 0,
    hearts: MAX_HEARTS,
    heartsLastRefill: 0,
    achievements: [],
    wordsLearned: [],
    lessonsCompleted: 0,
    perfectLessons: 0,
    gamesPlayed: 0,
    streakFreezes: 0,
    reviewQueue: [],
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function toBoundedNumber(value: unknown, fallback: number, min: number, max: number): number {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;
}

function migrateProgress(languageId: string, value: unknown): UserProgress {
  const defaults = createDefaultProgress(languageId);
  if (!isRecord(value) || value.languageId !== languageId) return defaults;

  const skillLevels = isRecord(value.skillLevels)
    ? Object.fromEntries(
        Object.entries(value.skillLevels).filter(
          ([, level]) => typeof level === 'number' && Number.isFinite(level)
        ).map(([skillId, level]) => [skillId, Math.min(5, Math.max(0, Math.floor(level as number)))])
      )
    : {};
  const reviewQueue = Array.isArray(value.reviewQueue)
    ? value.reviewQueue.filter((item): item is UserProgress['reviewQueue'][number] =>
        isRecord(item) &&
        typeof item.id === 'string' &&
        typeof item.skillId === 'string' &&
        typeof item.prompt === 'string' &&
        typeof item.answer === 'string' &&
        typeof item.dueAt === 'number' &&
        Number.isFinite(item.dueAt)
      )
    : [];

  return {
    version: PROGRESS_VERSION,
    languageId,
    skillLevels,
    unlockAll: typeof value.unlockAll === 'boolean' ? value.unlockAll : false,
    xp: toBoundedNumber(value.xp, defaults.xp, 0, Number.MAX_SAFE_INTEGER),
    streak: toBoundedNumber(value.streak, defaults.streak, 0, Number.MAX_SAFE_INTEGER),
    lastActiveDate: typeof value.lastActiveDate === 'string' ? value.lastActiveDate : defaults.lastActiveDate,
    dailyGoal: toBoundedNumber(value.dailyGoal, defaults.dailyGoal, 10, Number.MAX_SAFE_INTEGER),
    todayXp: toBoundedNumber(value.todayXp, defaults.todayXp, 0, Number.MAX_SAFE_INTEGER),
    hearts: toBoundedNumber(value.hearts, defaults.hearts, 0, MAX_HEARTS),
    heartsLastRefill: toBoundedNumber(value.heartsLastRefill, defaults.heartsLastRefill, 0, Number.MAX_SAFE_INTEGER),
    achievements: Array.isArray(value.achievements)
      ? value.achievements.filter((item): item is string => typeof item === 'string')
      : [],
    wordsLearned: Array.isArray(value.wordsLearned)
      ? value.wordsLearned.filter((item): item is string => typeof item === 'string')
      : [],
    lessonsCompleted: toBoundedNumber(value.lessonsCompleted, defaults.lessonsCompleted, 0, Number.MAX_SAFE_INTEGER),
    perfectLessons: toBoundedNumber(value.perfectLessons, 0, 0, Number.MAX_SAFE_INTEGER),
    gamesPlayed: toBoundedNumber(value.gamesPlayed, 0, 0, Number.MAX_SAFE_INTEGER),
    streakFreezes: toBoundedNumber(value.streakFreezes, defaults.streakFreezes, 0, Number.MAX_SAFE_INTEGER),
    reviewQueue,
  };
}

/* ─── Load / Save ──────────────────────────────────── */

export function loadProgress(languageId: string): UserProgress {
  if (typeof window === 'undefined') return createDefaultProgress(languageId);
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${languageId}`);
    if (!raw) return createDefaultProgress(languageId);
    return migrateProgress(languageId, JSON.parse(raw));
  } catch {
    return createDefaultProgress(languageId);
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY}-${progress.languageId}`, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable
  }
}

/* ─── Hearts ───────────────────────────────────────── */

/** Refill hearts based on elapsed time */
export function refillHearts(progress: UserProgress): UserProgress {
  if (progress.hearts >= MAX_HEARTS) return progress;
  const elapsed = Date.now() - progress.heartsLastRefill;
  const heartsToAdd = Math.floor(elapsed / (HEART_REFILL_MINUTES * 60 * 1000));
  if (heartsToAdd <= 0) return progress;
  return {
    ...progress,
    hearts: Math.min(MAX_HEARTS, progress.hearts + heartsToAdd),
    heartsLastRefill: Date.now(),
  };
}

/** Lose a heart */
export function loseHeart(progress: UserProgress): UserProgress {
  const hearts = Math.max(0, progress.hearts - 1);
  return {
    ...progress,
    hearts,
    heartsLastRefill:
      progress.hearts >= MAX_HEARTS && hearts < MAX_HEARTS
        ? Date.now()
        : progress.heartsLastRefill,
  };
}

/** Time until next heart refill (in minutes) */
export function minutesToNextHeart(progress: UserProgress): number {
  if (progress.hearts >= MAX_HEARTS) return 0;
  const elapsed = Date.now() - progress.heartsLastRefill;
  const remaining = HEART_REFILL_MINUTES * 60 * 1000 - (elapsed % (HEART_REFILL_MINUTES * 60 * 1000));
  return Math.ceil(remaining / 60000);
}

/* ─── Streaks ──────────────────────────────────────── */

function getTodayString(): string {
  return new Date().toISOString().slice(0, 10);
}

function getDateStringDaysAgo(daysAgo: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

function getYesterdayString(): string {
  return getDateStringDaysAgo(1);
}

/** Update streak based on current date */
export function updateStreak(progress: UserProgress): UserProgress {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (progress.lastActiveDate === today) {
    return progress;
  }

  if (progress.lastActiveDate === yesterday) {
    return {
      ...progress,
      streak: progress.streak + 1,
      lastActiveDate: today,
      todayXp: 0,
    };
  }

  if (progress.streakFreezes > 0 && progress.lastActiveDate === getDateStringDaysAgo(2)) {
    return {
      ...progress,
      streakFreezes: progress.streakFreezes - 1,
      lastActiveDate: today,
      todayXp: 0,
    };
  }

  return {
    ...progress,
    streak: progress.lastActiveDate ? 0 : 1,
    lastActiveDate: today,
    todayXp: 0,
  };
}

/* ─── Achievement Evaluation & XP Bonus Helper ─────── */

function evaluateAchievementsAndBonuses(updated: UserProgress): UserProgress {
  const newAchievements = [...updated.achievements];
  let achievementBonusXp = 0;

  for (const achievement of ACHIEVEMENTS) {
    if (!newAchievements.includes(achievement.id)) {
      if (achievement.condition(updated)) {
        newAchievements.push(achievement.id);
        achievementBonusXp += achievement.xpReward || 0;
      }
    }
  }

  if (achievementBonusXp > 0) {
    updated.xp += achievementBonusXp;
    updated.todayXp += achievementBonusXp;
    // Re-check XP-based achievements if bonus pushed user over threshold
    for (const achievement of ACHIEVEMENTS) {
      if (!newAchievements.includes(achievement.id) && achievement.condition(updated)) {
        newAchievements.push(achievement.id);
        updated.xp += achievement.xpReward || 0;
        updated.todayXp += achievement.xpReward || 0;
      }
    }
  }

  updated.achievements = newAchievements;
  return updated;
}

/* ─── Lesson Completion ────────────────────────────── */

export function applyLessonResult(progress: UserProgress, result: LessonResult): UserProgress {
  const today = getTodayString();
  const wasBelowDailyGoal = (progress.lastActiveDate === today ? progress.todayXp : 0) < progress.dailyGoal;

  const updated: UserProgress = {
    ...progress,
    skillLevels: { ...progress.skillLevels },
    achievements: [...progress.achievements],
    wordsLearned: [...progress.wordsLearned],
    reviewQueue: [...progress.reviewQueue],
    todayXp: progress.lastActiveDate === today ? progress.todayXp : 0,
  };

  const currentLevel = updated.skillLevels[result.skillId] || 0;
  if (result.level > currentLevel) {
    updated.skillLevels[result.skillId] = result.level;
  }

  if (updated.lastActiveDate !== today) {
    const yesterday = getYesterdayString();
    if (updated.lastActiveDate === yesterday || !updated.lastActiveDate) {
      updated.streak += 1;
    } else if (
      updated.streakFreezes > 0 &&
      updated.lastActiveDate === getDateStringDaysAgo(2)
    ) {
      updated.streakFreezes -= 1;
    } else {
      updated.streak = 1;
    }
    updated.lastActiveDate = today;
  }

  // Streak bonus (+5 XP per streak day up to +35 XP)
  const streakBonus = Math.min(updated.streak, 7) * 5;
  const totalEarned = result.xpEarned + streakBonus;

  updated.xp += totalEarned;
  updated.todayXp += totalEarned;
  updated.lessonsCompleted += 1;
  if (result.perfectLesson) {
    updated.perfectLessons = (updated.perfectLessons || 0) + 1;
  }

  // Daily goal completion bonus (+25 XP)
  if (wasBelowDailyGoal && updated.todayXp >= updated.dailyGoal) {
    updated.xp += XP_DAILY_GOAL_BONUS;
    updated.todayXp += XP_DAILY_GOAL_BONUS;
  }

  const wordSet = new Set(updated.wordsLearned);
  result.newWordsLearned.forEach((w) => wordSet.add(w));
  updated.wordsLearned = Array.from(wordSet);

  const reviewById = new Map(updated.reviewQueue.map((item) => [item.id, item]));
  result.reviewedItemIds.forEach((id) => reviewById.delete(id));
  result.reviewItems.forEach((item) => reviewById.set(item.id, item));
  updated.reviewQueue = Array.from(reviewById.values()).sort((a, b) => a.dueAt - b.dueAt);

  updated.hearts = Math.min(MAX_HEARTS, result.heartsRemaining + (result.perfectLesson ? 1 : 0));
  if (updated.hearts >= MAX_HEARTS) {
    updated.heartsLastRefill = Date.now();
  } else if (progress.hearts >= MAX_HEARTS && updated.hearts < MAX_HEARTS) {
    updated.heartsLastRefill = Date.now();
  }

  if (result.perfectLesson && !updated.achievements.includes('perfect-score')) {
    updated.achievements.push('perfect-score');
    updated.xp += 50;
    updated.todayXp += 50;
  }

  return evaluateAchievementsAndBonuses(updated);
}

/** Award XP from mini-games or flashcard practice */
export function awardActivityXp(
  progress: UserProgress,
  bonusXp: number,
  isGame = false
): UserProgress {
  const today = getTodayString();
  const wasBelowDailyGoal = (progress.lastActiveDate === today ? progress.todayXp : 0) < progress.dailyGoal;
  const updated: UserProgress = {
    ...progress,
    todayXp: (progress.lastActiveDate === today ? progress.todayXp : 0) + bonusXp,
    xp: progress.xp + bonusXp,
    lastActiveDate: today,
    streak: progress.lastActiveDate === today ? Math.max(1, progress.streak) : progress.streak + 1,
    gamesPlayed: isGame ? (progress.gamesPlayed || 0) + 1 : progress.gamesPlayed || 0,
  };

  if (wasBelowDailyGoal && updated.todayXp >= updated.dailyGoal) {
    updated.xp += XP_DAILY_GOAL_BONUS;
    updated.todayXp += XP_DAILY_GOAL_BONUS;
  }

  return evaluateAchievementsAndBonuses(updated);
}

export function getDueReviews(progress: UserProgress, now = Date.now()): LessonResult['reviewItems'] {
  return progress.reviewQueue.filter((item) => item.dueAt <= now);
}

/* ─── Skill Unlocking ──────────────────────────────── */

/**
 * By default, skills unlock progressively (first skill of Unit 1 is open;
 * each subsequent skill unlocks once the preceding skill reaches at least Level 1).
 * Users can explicitly toggle `unlockAll` to open all units and skills at once.
 */
export function isSkillUnlocked(
  skillId: string,
  skillIndex: number,
  unitIndex: number,
  skillLevels: Record<string, number>,
  allUnits: { skills: { id: string }[] }[],
  unlockAll: boolean = false
): boolean {
  if (unlockAll) return true;
  if ((skillLevels[skillId] || 0) >= 1) return true;
  if (unitIndex === 0 && skillIndex === 0) return true;

  if (skillIndex > 0) {
    const prevSkill = allUnits[unitIndex]?.skills[skillIndex - 1];
    return prevSkill ? (skillLevels[prevSkill.id] || 0) >= 1 : true;
  }

  if (unitIndex > 0) {
    const prevUnit = allUnits[unitIndex - 1];
    const lastSkillInPrevUnit = prevUnit?.skills[prevUnit.skills.length - 1];
    return lastSkillInPrevUnit ? (skillLevels[lastSkillInPrevUnit.id] || 0) >= 1 : true;
  }

  return true;
}

/* ─── Level Helpers ────────────────────────────────── */

export function getXpLevel(xp: number) {
  let current: typeof LEVELS[number] = LEVELS[0];
  let next: typeof LEVELS[number] | null = LEVELS[1];
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
      break;
    }
  }
  const progressToNext = next
    ? ((xp - current.minXp) / (next.minXp - current.minXp)) * 100
    : 100;
  const clamped = Math.min(100, progressToNext);
  return { current, next, progressToNext: clamped, progressPercent: clamped };
}
