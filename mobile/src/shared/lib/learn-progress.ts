// ============================================================
// Language Learning Progress Manager
// Handles localStorage persistence, SRS review boxes, XP, streaks, Daily Quests, GameStats, and Cross-Device Backup
// ============================================================

import type {
  UserProgress,
  LessonResult,
  GameStats,
  DailyQuestProgress,
  WordPair,
} from '../data/courses/types';
import {
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  ACHIEVEMENTS,
  LEVELS,
  XP_DAILY_GOAL_BONUS,
  XP_DAILY_QUEST_CHEST,
} from '../data/courses/types';

const STORAGE_KEY = 'kh-learn-progress';
const PROGRESS_VERSION = 3;

const SRS_BOX_INTERVALS_MS: Record<number, number> = {
  1: 10 * 60 * 1000,            // 10 minutes
  2: 24 * 60 * 60 * 1000,       // 1 day
  3: 3 * 24 * 60 * 60 * 1000,   // 3 days
  4: 7 * 24 * 60 * 60 * 1000,   // 7 days
  5: 14 * 24 * 60 * 60 * 1000,  // 14 days
};

/* ─── Local Calendar Date Helpers (UTC+3 EAT Safe) ─── */

export function getLocalDateString(daysAgo = 0): string {
  const d = new Date();
  if (daysAgo !== 0) {
    d.setDate(d.getDate() - daysAgo);
  }
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getTodayString(): string {
  return getLocalDateString(0);
}

function getYesterdayString(): string {
  return getLocalDateString(1);
}

/* ─── Default state ────────────────────────────────── */

export function createDefaultGameStats(): GameStats {
  return {
    wordleWon: 0,
    wordleWins: 0,
    wordleFirstTryWins: 0,
    wordlePlayed: 0,
    wordleStreak: 0,
    wordleBestStreak: 0,
    wordleGuessDist: [0, 0, 0, 0, 0, 0],
    speedBestScore: 0,
    speedBestStreak: 0,
    memoryBestMoves: 0,
    memoryBestTimeSec: {},
    scrambleBestStreak: 0,
    scrambleSolved: 0,
    riddlesSolved: 0,
    survivalBestRun: 0,
    methaliSolved: 0,
    safariCompleted: 0,
    nounClassBest: 0,
    oddWordBest: 0,
    polyglotBest: 0,
    twisterBest: 0,
    countiesBest: 0,
    matatuBest: 0,
  };
}

export function createDefaultDailyQuests(date = getTodayString()): DailyQuestProgress {
  return {
    date,
    lessonDone: false,
    gameDone: false,
    memoryOrCardsDone: false,
    lessonsToday: 0,
    gamesToday: 0,
    xpToday: 0,
    chestClaimed: false,
  };
}

export function createDefaultProgress(languageId: string): UserProgress {
  return {
    version: PROGRESS_VERSION,
    languageId,
    skillLevels: {},
    dictCursors: {},
    unlockAll: false,
    xp: 0,
    streak: 0,
    lastActiveDate: '',
    dailyGoal: 50,
    todayXp: 0,
    hearts: MAX_HEARTS,
    heartsLastRefill: Date.now(),
    achievements: [],
    wordsLearned: [],
    lessonsCompleted: 0,
    perfectLessons: 0,
    gamesPlayed: 0,
    streakFreezes: 1,
    reviewQueue: [],
    gameStats: createDefaultGameStats(),
    dailyQuests: createDefaultDailyQuests(),
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
        Object.entries(value.skillLevels)
          .filter(([, level]) => typeof level === 'number' && Number.isFinite(level))
          .map(([skillId, level]) => [skillId, Math.min(5, Math.max(0, Math.floor(level as number)))])
      )
    : {};
  const dictCursors = isRecord(value.dictCursors)
    ? Object.fromEntries(
        Object.entries(value.dictCursors)
          .filter(([, cur]) => typeof cur === 'number' && Number.isFinite(cur))
          .map(([skillId, cur]) => [skillId, Math.max(0, Math.floor(cur as number))])
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

  const today = getTodayString();
  const lastActiveDate = typeof value.lastActiveDate === 'string' ? value.lastActiveDate : defaults.lastActiveDate;
  const todayXpVal = lastActiveDate === today ? toBoundedNumber(value.todayXp, 0, 0, Number.MAX_SAFE_INTEGER) : 0;

  const rawQuests = isRecord(value.dailyQuests) ? value.dailyQuests : null;
  const dailyQuests: DailyQuestProgress =
    rawQuests && rawQuests.date === today
      ? {
          date: today,
          lessonDone: Boolean(rawQuests.lessonDone),
          gameDone: Boolean(rawQuests.gameDone),
          memoryOrCardsDone: Boolean(rawQuests.memoryOrCardsDone),
          lessonsToday: toBoundedNumber(rawQuests.lessonsToday, rawQuests.lessonDone ? 1 : 0, 0, 1000),
          gamesToday: toBoundedNumber(rawQuests.gamesToday, rawQuests.gameDone ? 1 : 0, 0, 1000),
          xpToday: toBoundedNumber(rawQuests.xpToday, todayXpVal, 0, Number.MAX_SAFE_INTEGER),
          chestClaimed: Boolean(rawQuests.chestClaimed),
        }
      : createDefaultDailyQuests(today);

  const rawGs = isRecord(value.gameStats) ? value.gameStats : {};
  const defaultGs = createDefaultGameStats();
  const gameStats: GameStats = {
    ...defaultGs,
    ...(rawGs as Partial<GameStats>),
    wordleWins: toBoundedNumber(rawGs.wordleWins ?? rawGs.wordleWon, 0, 0, Number.MAX_SAFE_INTEGER),
    wordleWon: toBoundedNumber(rawGs.wordleWon ?? rawGs.wordleWins, 0, 0, Number.MAX_SAFE_INTEGER),
    wordleFirstTryWins: toBoundedNumber(rawGs.wordleFirstTryWins, 0, 0, Number.MAX_SAFE_INTEGER),
    scrambleSolved: toBoundedNumber(rawGs.scrambleSolved, 0, 0, Number.MAX_SAFE_INTEGER),
    wordleGuessDist:
      Array.isArray(rawGs.wordleGuessDist) && rawGs.wordleGuessDist.length === 6
        ? (rawGs.wordleGuessDist.map((n) => Number(n) || 0) as [number, number, number, number, number, number])
        : defaultGs.wordleGuessDist,
    memoryBestMoves:
      typeof rawGs.memoryBestMoves === 'number' && Number.isFinite(rawGs.memoryBestMoves)
        ? rawGs.memoryBestMoves
        : 0,
    memoryBestTimeSec: isRecord(rawGs.memoryBestTimeSec)
      ? (rawGs.memoryBestTimeSec as Record<number, number>)
      : {},
  };

  const migrated: UserProgress = {
    version: PROGRESS_VERSION,
    languageId,
    skillLevels,
    dictCursors,
    unlockAll: typeof value.unlockAll === 'boolean' ? value.unlockAll : false,
    xp: toBoundedNumber(value.xp, defaults.xp, 0, Number.MAX_SAFE_INTEGER),
    streak: toBoundedNumber(value.streak, defaults.streak, 0, Number.MAX_SAFE_INTEGER),
    lastActiveDate,
    dailyGoal: toBoundedNumber(value.dailyGoal, defaults.dailyGoal, 10, Number.MAX_SAFE_INTEGER),
    todayXp: todayXpVal,
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
    streakFreezes: toBoundedNumber(value.streakFreezes, defaults.streakFreezes, 0, 5),
    reviewQueue,
    gameStats,
    dailyQuests,
  };

  return refillHearts(migrated);
}

/* ─── Load / Save / Backup Export & Import ─────────── */

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

/**
 * Exports all stored language course progress into a compact Base64 backup code
 * so learners can transfer streaks, XP, and skill levels across devices (PROD-01).
 */
export function exportAllProgressBackup(languageIds: string[]): string {
  if (typeof window === 'undefined') return '';
  const payload: Record<string, UserProgress> = {};
  for (const langId of languageIds) {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${langId}`);
    if (raw) {
      try {
        const parsed = migrateProgress(langId, JSON.parse(raw));
        if (parsed.xp > 0 || parsed.lessonsCompleted > 0 || (parsed.gamesPlayed || 0) > 0) {
          payload[langId] = parsed;
        }
      } catch {
        // Ignore malformed language entry
      }
    }
  }
  const json = JSON.stringify({ v: PROGRESS_VERSION, ts: Date.now(), courses: payload });
  return typeof btoa === 'function'
    ? btoa(encodeURIComponent(json))
    : Buffer.from(json, 'utf-8').toString('base64');
}

/**
 * Restores language course progress from a Base64 backup code.
 * Returns the number of language courses restored.
 */
export function importAllProgressBackup(backupCode: string): number {
  if (typeof window === 'undefined' || !backupCode.trim()) return 0;
  try {
    const clean = backupCode.trim();
    const json =
      typeof atob === 'function'
        ? decodeURIComponent(atob(clean))
        : Buffer.from(clean, 'base64').toString('utf-8');
    const parsed = JSON.parse(json);
    if (!isRecord(parsed) || !isRecord(parsed.courses)) return 0;
    let count = 0;
    for (const [langId, data] of Object.entries(parsed.courses)) {
      const migrated = migrateProgress(langId, data);
      saveProgress(migrated);
      count++;
    }
    return count;
  } catch {
    return 0;
  }
}

/* ─── Hearts ───────────────────────────────────────── */

export function refillHearts(progress: UserProgress): UserProgress {
  if (progress.hearts >= MAX_HEARTS) return progress;
  const elapsed = Date.now() - (progress.heartsLastRefill || Date.now());
  const heartsToAdd = Math.floor(elapsed / (HEART_REFILL_MINUTES * 60 * 1000));
  if (heartsToAdd <= 0) return progress;
  const nextHearts = Math.min(MAX_HEARTS, progress.hearts + heartsToAdd);
  return {
    ...progress,
    hearts: nextHearts,
    heartsLastRefill:
      nextHearts >= MAX_HEARTS
        ? Date.now()
        : progress.heartsLastRefill + heartsToAdd * HEART_REFILL_MINUTES * 60 * 1000,
  };
}

export function loseHeart(progress: UserProgress): UserProgress {
  const hearts = Math.max(0, progress.hearts - 1);
  return {
    ...progress,
    hearts,
    heartsLastRefill:
      progress.hearts >= MAX_HEARTS && hearts < MAX_HEARTS
        ? Date.now()
        : progress.heartsLastRefill || Date.now(),
  };
}

export function minutesToNextHeart(progress: UserProgress): number {
  if (progress.hearts >= MAX_HEARTS) return 0;
  const elapsed = Date.now() - (progress.heartsLastRefill || Date.now());
  const remaining = HEART_REFILL_MINUTES * 60 * 1000 - (elapsed % (HEART_REFILL_MINUTES * 60 * 1000));
  return Math.max(1, Math.ceil(remaining / 60000));
}

/* ─── Streaks ──────────────────────────────────────── */

function advanceStreakForToday(progress: UserProgress): {
  streak: number;
  streakFreezes: number;
  lastActiveDate: string;
} {
  const today = getTodayString();
  const yesterday = getYesterdayString();
  const twoDaysAgo = getLocalDateString(2);

  if (progress.lastActiveDate === today) {
    return {
      streak: Math.max(1, progress.streak),
      streakFreezes: progress.streakFreezes,
      lastActiveDate: today,
    };
  }

  if (progress.lastActiveDate === yesterday || !progress.lastActiveDate) {
    return {
      streak: progress.streak + 1,
      streakFreezes: progress.streakFreezes,
      lastActiveDate: today,
    };
  }

  if (progress.streakFreezes > 0 && progress.lastActiveDate === twoDaysAgo) {
    return {
      streak: Math.max(1, progress.streak),
      streakFreezes: progress.streakFreezes - 1,
      lastActiveDate: today,
    };
  }

  return {
    streak: 1,
    streakFreezes: progress.streakFreezes,
    lastActiveDate: today,
  };
}

export function updateStreak(progress: UserProgress): UserProgress {
  const today = getTodayString();
  if (progress.lastActiveDate === today) return progress;
  const next = advanceStreakForToday(progress);
  return {
    ...progress,
    ...next,
    todayXp: 0,
  };
}

/* ─── Achievement & Daily Quest Evaluation Helper ─── */

function evaluateAchievementsAndBonuses(
  updated: UserProgress,
  wasBelowDailyGoal: boolean
): UserProgress {
  if (updated.dailyQuests) {
    updated.dailyQuests.xpToday = updated.todayXp;
    // All 3 Daily Quests displayed in SkillTree.tsx must be satisfied:
    // 1. Complete 1 Lesson (lessonsToday >= 1)
    // 2. Play 2 Mini-Games (gamesToday >= 2)
    // 3. Earn Daily XP Goal (xpToday >= dailyGoal)
    const all3Done =
      updated.dailyQuests.lessonsToday >= 1 &&
      updated.dailyQuests.gamesToday >= 2 &&
      updated.dailyQuests.xpToday >= updated.dailyGoal;
    if (all3Done && !updated.dailyQuests.chestClaimed) {
      updated.dailyQuests = { ...updated.dailyQuests, chestClaimed: true };
      updated.xp += XP_DAILY_QUEST_CHEST;
      updated.todayXp += XP_DAILY_QUEST_CHEST;
      updated.dailyQuests.xpToday = updated.todayXp;
      updated.streakFreezes = Math.min(3, (updated.streakFreezes || 0) + 1);
    }
  }

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
    for (const achievement of ACHIEVEMENTS) {
      if (!newAchievements.includes(achievement.id) && achievement.condition(updated)) {
        newAchievements.push(achievement.id);
        updated.xp += achievement.xpReward || 0;
        updated.todayXp += achievement.xpReward || 0;
      }
    }
  }

  updated.achievements = newAchievements;

  // Evaluate daily goal bonus AFTER all lesson/perfect/quest/achievement bonuses are added
  if (wasBelowDailyGoal && updated.todayXp >= updated.dailyGoal) {
    updated.xp += XP_DAILY_GOAL_BONUS;
    updated.todayXp += XP_DAILY_GOAL_BONUS;
    if (updated.dailyQuests) {
      updated.dailyQuests.xpToday = updated.todayXp;
    }
  }

  return updated;
}

/* ─── Lesson Completion ────────────────────────────── */

export function applyLessonResult(progress: UserProgress, result: LessonResult): UserProgress {
  const today = getTodayString();
  const wasBelowDailyGoal = (progress.lastActiveDate === today ? progress.todayXp : 0) < progress.dailyGoal;
  const streakInfo = advanceStreakForToday(progress);

  const currentQuests =
    progress.dailyQuests && progress.dailyQuests.date === today
      ? progress.dailyQuests
      : createDefaultDailyQuests(today);

  // Streak bonus (+5 XP per streak day up to +35 XP)
  const streakBonus = Math.min(streakInfo.streak, 7) * 5;
  const totalEarned = result.xpEarned + streakBonus;
  const baseTodayXp = progress.lastActiveDate === today ? progress.todayXp : 0;

  const updated: UserProgress = {
    ...progress,
    skillLevels: { ...progress.skillLevels },
    dictCursors: { ...(progress.dictCursors || {}) },
    achievements: [...progress.achievements],
    wordsLearned: [...progress.wordsLearned],
    reviewQueue: [...progress.reviewQueue],
    gameStats: { ...(progress.gameStats || createDefaultGameStats()) },
    dailyQuests: {
      ...currentQuests,
      lessonDone: currentQuests.lessonDone || result.accuracy >= 0.75,
      lessonsToday: (currentQuests.lessonsToday || 0) + 1,
      xpToday: baseTodayXp + totalEarned,
    },
    todayXp: baseTodayXp + totalEarned,
    xp: progress.xp + totalEarned,
    ...streakInfo,
  };

  if (!result.reviewOnly) {
    const currentLevel = updated.skillLevels[result.skillId] || 0;
    if (result.level > currentLevel) {
      updated.skillLevels[result.skillId] = result.level;
    }
  }

  updated.lessonsCompleted += 1;
  if (result.perfectLesson) {
    updated.perfectLessons = (updated.perfectLessons || 0) + 1;
  }

  const wordSet = new Set(updated.wordsLearned);
  result.newWordsLearned.forEach((w) => wordSet.add(w));
  updated.wordsLearned = Array.from(wordSet);

  // Exponential SRS box progression (Box 1..5: 10m -> 1d -> 3d -> 7d -> 14d, graduate after Box 5)
  const reviewById = new Map(updated.reviewQueue.map((item) => [item.id, item]));
  const now = Date.now();
  result.reviewedItemIds.forEach((id) => {
    const existing = reviewById.get(id);
    if (!existing) return;
    const nextBox = (existing.box || 1) + 1;
    if (nextBox > 5) {
      reviewById.delete(id);
    } else {
      const interval = SRS_BOX_INTERVALS_MS[nextBox] || SRS_BOX_INTERVALS_MS[5];
      reviewById.set(id, {
        ...existing,
        box: nextBox,
        dueAt: now + interval,
      });
    }
  });
  result.reviewItems.forEach((item) => {
    reviewById.set(item.id, {
      ...item,
      box: 1,
      dueAt: now + SRS_BOX_INTERVALS_MS[1],
    });
  });
  updated.reviewQueue = Array.from(reviewById.values()).sort((a, b) => a.dueAt - b.dueAt);

  updated.hearts = Math.min(MAX_HEARTS, result.heartsRemaining + (result.perfectLesson ? 1 : 0));
  if (updated.hearts >= MAX_HEARTS) {
    updated.heartsLastRefill = Date.now();
  } else if (progress.hearts >= MAX_HEARTS && updated.hearts < MAX_HEARTS) {
    updated.heartsLastRefill = Date.now();
  }

  return evaluateAchievementsAndBonuses(updated, wasBelowDailyGoal);
}

/**
 * Award XP from mini-games or flashcard practice.
 * Only increments `gamesPlayed` and `dailyQuests.gamesToday` when `isGameSessionComplete` is true.
 */
export function awardActivityXp(
  progress: UserProgress,
  bonusXp: number,
  isGameSessionComplete = false
): UserProgress {
  const today = getTodayString();
  const baseTodayXp = progress.lastActiveDate === today ? progress.todayXp : 0;
  const wasBelowDailyGoal = baseTodayXp < progress.dailyGoal;
  const streakInfo = advanceStreakForToday(progress);

  const currentQuests =
    progress.dailyQuests && progress.dailyQuests.date === today
      ? progress.dailyQuests
      : createDefaultDailyQuests(today);

  const nextGamesToday = isGameSessionComplete
    ? (currentQuests.gamesToday || 0) + 1
    : currentQuests.gamesToday || 0;

  const updated: UserProgress = {
    ...progress,
    todayXp: baseTodayXp + bonusXp,
    xp: progress.xp + bonusXp,
    ...streakInfo,
    gamesPlayed: isGameSessionComplete ? (progress.gamesPlayed || 0) + 1 : progress.gamesPlayed || 0,
    gameStats: { ...(progress.gameStats || createDefaultGameStats()) },
    dailyQuests: {
      ...currentQuests,
      gameDone: currentQuests.gameDone || nextGamesToday >= 2,
      memoryOrCardsDone: currentQuests.memoryOrCardsDone || !isGameSessionComplete || bonusXp >= 20,
      gamesToday: nextGamesToday,
      xpToday: baseTodayXp + bonusXp,
    },
  };

  return evaluateAchievementsAndBonuses(updated, wasBelowDailyGoal);
}

/** Update persistent per-game Personal Bests & statistics */
export function updateGameStats(
  progress: UserProgress,
  updater: (prev: GameStats) => Partial<GameStats>
): UserProgress {
  const current = progress.gameStats || createDefaultGameStats();
  const patch = updater(current);
  const nextStats: GameStats = {
    ...current,
    ...patch,
  };
  const updated: UserProgress = {
    ...progress,
    gameStats: nextStats,
  };
  return evaluateAchievementsAndBonuses(updated, false);
}

/**
 * Bidirectional SRS hook for Mini-Games:
 * Supports both (progress, wordPair, correct) and (progress, target, source, correct).
 */
export function recordWordPracticeResult(
  progress: UserProgress,
  wordOrTarget: WordPair | string,
  correctOrSource: boolean | string,
  maybeCorrect?: boolean
): UserProgress {
  const word: WordPair =
    typeof wordOrTarget === 'string'
      ? { target: wordOrTarget, source: String(correctOrSource || '') }
      : wordOrTarget;
  const correct = typeof wordOrTarget === 'string' ? Boolean(maybeCorrect) : Boolean(correctOrSource);

  if (!word || !word.target || !word.source) return progress;
  const targetKey = word.target.toLowerCase().trim();
  const now = Date.now();
  const reviewById = new Map(progress.reviewQueue.map((item) => [item.id, item]));
  const reviewId = `game:${targetKey}`;

  if (correct) {
    const wordSet = new Set(progress.wordsLearned);
    wordSet.add(targetKey);
    for (const [id, item] of reviewById.entries()) {
      if (
        id === reviewId ||
        item.answer.toLowerCase().trim() === targetKey ||
        item.answer.toLowerCase().trim() === word.source.toLowerCase().trim()
      ) {
        const nextBox = (item.box || 1) + 1;
        if (nextBox > 5) {
          reviewById.delete(id);
        } else {
          reviewById.set(id, {
            ...item,
            box: nextBox,
            dueAt: now + (SRS_BOX_INTERVALS_MS[nextBox] || SRS_BOX_INTERVALS_MS[5]),
          });
        }
      }
    }
    return {
      ...progress,
      wordsLearned: Array.from(wordSet),
      reviewQueue: Array.from(reviewById.values()).sort((a, b) => a.dueAt - b.dueAt),
    };
  } else {
    const existing = reviewById.get(reviewId);
    reviewById.set(reviewId, {
      id: reviewId,
      skillId: 'games-practice',
      type: 'translate_to_english',
      prompt: `Translate "${word.target}" to English:`,
      answer: word.source,
      word: word.target,
      wrongCount: (existing?.wrongCount || 0) + 1,
      sourceWord: word,
      box: 1,
      dueAt: now + SRS_BOX_INTERVALS_MS[1],
    });
    return {
      ...progress,
      reviewQueue: Array.from(reviewById.values()).sort((a, b) => a.dueAt - b.dueAt),
    };
  }
}

export function getDueReviews(progress: UserProgress, now = Date.now()): LessonResult['reviewItems'] {
  return progress.reviewQueue.filter((item) => item.dueAt <= now);
}

/* ─── Skill Unlocking ──────────────────────────────── */

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
