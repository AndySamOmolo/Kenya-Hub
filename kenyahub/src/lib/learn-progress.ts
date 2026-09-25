// ============================================================
// Language Learning Progress Manager
// Handles localStorage persistence, hearts, XP, streaks
// ============================================================

import type { UserProgress, LessonResult } from '@/data/courses/types';
import {
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  XP_PER_CORRECT,
  XP_PERFECT_BONUS,
  ACHIEVEMENTS,
  LEVELS,
} from '@/data/courses/types';

const STORAGE_KEY = 'kh-learn-progress';

/* ─── Default state ────────────────────────────────── */

function createDefaultProgress(languageId: string): UserProgress {
  return {
    languageId,
    skillLevels: {},
    xp: 0,
    streak: 0,
    lastActiveDate: '',
    dailyGoal: 20,
    todayXp: 0,
    hearts: MAX_HEARTS,
    heartsLastRefill: Date.now(),
    achievements: [],
    wordsLearned: [],
    lessonsCompleted: 0,
    streakFreezes: 0,
  };
}

/* ─── Load / Save ──────────────────────────────────── */

export function loadProgress(languageId: string): UserProgress {
  if (typeof window === 'undefined') return createDefaultProgress(languageId);
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${languageId}`);
    if (!raw) return createDefaultProgress(languageId);
    const parsed = JSON.parse(raw) as UserProgress;
    // Migrate hearts if needed
    if (parsed.hearts === undefined) parsed.hearts = MAX_HEARTS;
    if (parsed.heartsLastRefill === undefined) parsed.heartsLastRefill = Date.now();
    if (!parsed.achievements) parsed.achievements = [];
    if (!parsed.wordsLearned) parsed.wordsLearned = [];
    if (parsed.streakFreezes === undefined) parsed.streakFreezes = 0;
    return parsed;
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
  return {
    ...progress,
    hearts: Math.max(0, progress.hearts - 1),
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

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** Update streak based on current date */
export function updateStreak(progress: UserProgress): UserProgress {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (progress.lastActiveDate === today) {
    // Already active today
    return progress;
  }

  if (progress.lastActiveDate === yesterday) {
    // Consecutive day — increment streak
    return {
      ...progress,
      streak: progress.streak + 1,
      lastActiveDate: today,
      todayXp: 0,
    };
  }

  // Streak broken — check for freeze
  if (progress.streakFreezes > 0 && progress.lastActiveDate === getYesterdayString()) {
    return {
      ...progress,
      streakFreezes: progress.streakFreezes - 1,
      lastActiveDate: today,
      todayXp: 0,
    };
  }

  // Streak reset
  return {
    ...progress,
    streak: progress.lastActiveDate ? 0 : 1,
    lastActiveDate: today,
    todayXp: 0,
  };
}

/* ─── Lesson Completion ────────────────────────────── */

export function applyLessonResult(progress: UserProgress, result: LessonResult): UserProgress {
  const updated = { ...progress };

  // Update skill level
  const currentLevel = updated.skillLevels[result.skillId] || 0;
  if (result.level > currentLevel) {
    updated.skillLevels[result.skillId] = result.level;
  }

  // Add XP
  updated.xp += result.xpEarned;
  updated.todayXp += result.xpEarned;

  // Track lessons completed
  updated.lessonsCompleted += 1;

  // Add new words
  const wordSet = new Set(updated.wordsLearned);
  result.newWordsLearned.forEach((w) => wordSet.add(w));
  updated.wordsLearned = Array.from(wordSet);

  // Update streak
  const today = getTodayString();
  if (updated.lastActiveDate !== today) {
    const yesterday = getYesterdayString();
    if (updated.lastActiveDate === yesterday || !updated.lastActiveDate) {
      updated.streak += 1;
    } else if (updated.streakFreezes > 0) {
      updated.streakFreezes -= 1;
    } else {
      updated.streak = 1;
    }
    updated.lastActiveDate = today;
  }

  // Refill hearts (practice lessons give hearts back)
  updated.hearts = Math.min(MAX_HEARTS, updated.hearts + (result.perfectLesson ? 1 : 0));

  // Check achievements
  const newAchievements = [...updated.achievements];
  for (const achievement of ACHIEVEMENTS) {
    if (!newAchievements.includes(achievement.id)) {
      if (achievement.id === 'perfect-score' && result.perfectLesson) {
        newAchievements.push(achievement.id);
      } else if (achievement.condition(updated)) {
        newAchievements.push(achievement.id);
      }
    }
  }
  updated.achievements = newAchievements;

  return updated;
}

/* ─── Skill Unlocking ──────────────────────────────── */

export function isSkillUnlocked(
  skillId: string,
  skillIndex: number,
  unitIndex: number,
  skillLevels: Record<string, number>,
  allUnits: { skills: { id: string }[] }[]
): boolean {
  // First skill of first unit is always unlocked
  if (unitIndex === 0 && skillIndex === 0) return true;

  // Within same unit: previous skill must be at least level 1
  if (skillIndex > 0) {
    const prevSkill = allUnits[unitIndex].skills[skillIndex - 1];
    return (skillLevels[prevSkill.id] || 0) >= 1;
  }

  // First skill of a new unit: last skill of previous unit must be at least level 1
  if (unitIndex > 0) {
    const prevUnit = allUnits[unitIndex - 1];
    const lastSkill = prevUnit.skills[prevUnit.skills.length - 1];
    return (skillLevels[lastSkill.id] || 0) >= 1;
  }

  return false;
}

/* ─── Level Helpers ────────────────────────────────── */

export function getXpLevel(xp: number) {
  let current = LEVELS[0];
  let next = LEVELS[1];
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
  return { current, next, progressToNext: Math.min(100, progressToNext) };
}
