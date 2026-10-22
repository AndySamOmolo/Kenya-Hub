// ============================================================
// Shared types for the Kenyan Language Learning Engine
// Used by all language courses (Luo, Kikuyu, Swahili, etc.)
// ============================================================

/* ─── Language Configuration ────────────────────────────── */

export interface LanguageConfig {
  id: string;
  name: string;
  nativeName: string;
  family: string;
  counties: string[];
  speakers: string;
  speechLocale: string;
  description: string;
  color: string;
  sources?: string[];
}

export interface GrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples?: { [lang: string]: string | undefined; english: string; explanation?: string }[];
}

/* ─── Course Structure: Unit → Skill → Exercise ─────────── */

export interface CourseUnit {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: CourseSkill[];
}

export interface CourseSkill {
  id: string;
  title: string;
  icon: string;
  description: string;
  /** Vocabulary pairs taught in this skill */
  words: WordPair[];
  /** Full sentence pairs for translation exercises */
  sentences: SentencePair[];
  /** Exercises written by the course author */
  authoredExercises?: Exercise[];
  /** Grammar/cultural tips shown before the lesson */
  tips?: string;
  /** Cultural note shown after completion */
  culturalNote?: string;
}

export interface WordPair {
  target: string;         // Word in the target language
  source: string;         // English translation
  pronunciation?: string; // Phonetic guide
  partOfSpeech?: string;  // noun, verb, adj, etc.
  audio?: string;         // Optional audio file path
  hint?: string;          // Contextual hint
  example?: string;       // Teaching example; not assumed to be a translation pair
  response?: string;      // Expected response for dialogue cards
}

export interface SentencePair {
  target: string;  // Sentence in the target language
  source: string;  // English translation
  audio?: string;
}

/* ─── Exercise Types ────────────────────────────────────── */

export type ExerciseType =
  | 'multiple_choice'       // Pick the correct translation from 4 options
  | 'translate_to_target'   // Type the translation in the target language
  | 'translate_to_english'  // Type the translation in English
  | 'fill_blank'            // Fill in the missing word
  | 'match_pairs'           // Connect 5 pairs
  | 'listen_type'           // Hear audio, type what you heard
  | 'tap_what_you_hear'     // Hear audio, pick from options
  | 'word_bank'             // Build sentence from word tiles
  | 'reorder'               // Put words in correct order
  | 'speak';                // Say the word/sentence aloud

export interface Exercise {
  type: ExerciseType;
  /** The prompt shown to the user */
  prompt: string;
  /** The correct answer string */
  correctAnswer: string;
  /** Additional authored answers accepted for this exercise */
  acceptedAnswers?: string[];
  /** Options for multiple-choice / tap exercises */
  options?: string[];
  /** Pairs for match_pairs exercises */
  pairs?: { left: string; right: string }[];
  /** Word tiles for word_bank exercises */
  wordTiles?: string[];
  /** Audio text to speak (for listen/tap exercises) */
  audioText?: string;
  /** Hint text */
  hint?: string;
  /** The source word/sentence this exercise is about */
  sourceWord?: WordPair;
  /** Existing review item represented by this exercise */
  reviewId?: string;
}

/* ─── User Progress ─────────────────────────────────────── */

export interface UserProgress {
  /** Storage schema version for local migrations */
  version?: number;
  languageId: string;
  /** Completed skill levels: { "basics-1": 3 } means level 3/5 completed */
  skillLevels: Record<string, number>;
  /** Explicit user toggle to unlock all units/skills without sequential gatekeeping */
  unlockAll?: boolean;
  /** Total XP earned */
  xp: number;
  /** Current daily streak */
  streak: number;
  /** Last activity date (ISO string, date only) */
  lastActiveDate: string;
  /** Daily XP goal */
  dailyGoal: number;
  /** XP earned today */
  todayXp: number;
  /** Hearts remaining (max 5) */
  hearts: number;
  /** Last time hearts were refilled */
  heartsLastRefill: number;
  /** Achievement IDs earned */
  achievements: string[];
  /** Words learned (keys) */
  wordsLearned: string[];
  /** Total lessons completed */
  lessonsCompleted: number;
  /** Total perfect (100% accuracy) lessons completed */
  perfectLessons?: number;
  /** Total mini-games completed */
  gamesPlayed?: number;
  /** Streak freeze count */
  streakFreezes: number;
  /** Missed items scheduled for later review */
  reviewQueue: ReviewItem[];
}

export interface ReviewItem {
  id: string;
  skillId: string;
  type?: ExerciseType;
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  hint?: string;
  dueAt: number;
}

export interface LessonResult {
  skillId: string;
  level: number;
  score: number;         // 0-100
  xpEarned: number;
  accuracy: number;      // 0-1
  mistakes: number;
  perfectLesson: boolean;
  timeSpent: number;     // seconds
  newWordsLearned: string[];
  heartsRemaining: number;
  reviewItems: ReviewItem[];
  reviewedItemIds: string[];
}

/* ─── Achievement Definitions ───────────────────────────── */

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
  category: 'streak' | 'lessons' | 'vocabulary' | 'mastery';
  condition: (progress: UserProgress) => boolean;
}

/* ─── Gamification Constants ────────────────────────────── */

export const MAX_HEARTS = 5;
export const HEART_REFILL_MINUTES = 30;
export const XP_PER_CORRECT = 10;
export const XP_PER_CORRECT_WITH_HINT = 5;
export const XP_PERFECT_BONUS = 50;
export const XP_DAILY_GOAL_BONUS = 25;
export const EXERCISES_PER_LESSON = 15;
export const MAX_SKILL_LEVEL = 5;

export const LEVELS = [
  { name: 'Bronze I • Learner', icon: '🥉', minXp: 0, color: '#CD7F32' },
  { name: 'Bronze II • Initiate', icon: '🛡️', minXp: 150, color: '#D99058' },
  { name: 'Silver I • Speaker', icon: '🥈', minXp: 350, color: '#C0C0C0' },
  { name: 'Silver II • Storyteller', icon: '📜', minXp: 700, color: '#94A3B8' },
  { name: 'Gold I • Scholar', icon: '🥇', minXp: 1200, color: '#FFD700' },
  { name: 'Gold II • Orator', icon: '🎙️', minXp: 2000, color: '#F59E0B' },
  { name: 'Sapphire • Keeper of Wisdom', icon: '💎', minXp: 3200, color: '#0EA5E9' },
  { name: 'Emerald • Council Sage', icon: '🌿', minXp: 5000, color: '#10B981' },
  { name: 'Ruby • Master of Tongues', icon: '🔥', minXp: 8000, color: '#EF4444' },
  { name: 'Diamond • Elder of the Council', icon: '👑', minXp: 12000, color: '#B9F2FF' },
] as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🌱',
    xpReward: 25,
    category: 'lessons',
    condition: (p) => p.lessonsCompleted >= 1,
  },
  {
    id: 'spark-streak',
    name: '3-Day Spark',
    description: 'Reach a 3-day learning streak',
    icon: '⚡',
    xpReward: 40,
    category: 'streak',
    condition: (p) => p.streak >= 3,
  },
  {
    id: 'on-fire',
    name: 'On Fire',
    description: 'Reach a 7-day learning streak',
    icon: '🔥',
    xpReward: 75,
    category: 'streak',
    condition: (p) => p.streak >= 7,
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Reach a 14-day learning streak',
    icon: '🌋',
    xpReward: 150,
    category: 'streak',
    condition: (p) => p.streak >= 14,
  },
  {
    id: 'monthly-legend',
    name: '30-Day Legend',
    description: 'Reach a 30-day learning streak',
    icon: '🌞',
    xpReward: 300,
    category: 'streak',
    condition: (p) => p.streak >= 30,
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Complete a lesson with 100% accuracy',
    icon: '⭐',
    xpReward: 50,
    category: 'mastery',
    condition: (p) => (p.perfectLessons || 0) >= 1,
  },
  {
    id: 'sharp-shooter',
    name: 'Sharp Shooter',
    description: 'Complete 5 lessons with 100% accuracy',
    icon: '🎯',
    xpReward: 120,
    category: 'mastery',
    condition: (p) => (p.perfectLessons || 0) >= 5,
  },
  {
    id: 'vocab-starter',
    name: 'Word Collector',
    description: 'Learn 25 vocabulary words',
    icon: '📝',
    xpReward: 35,
    category: 'vocabulary',
    condition: (p) => p.wordsLearned.length >= 25,
  },
  {
    id: 'memory-king',
    name: 'Memory King',
    description: 'Learn 50 vocabulary words',
    icon: '🧠',
    xpReward: 60,
    category: 'vocabulary',
    condition: (p) => p.wordsLearned.length >= 50,
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Learn 100 vocabulary words',
    icon: '📚',
    xpReward: 100,
    category: 'vocabulary',
    condition: (p) => p.wordsLearned.length >= 100,
  },
  {
    id: 'lexicon-master',
    name: 'Lexicon Master',
    description: 'Learn 250 vocabulary words',
    icon: '🏛️',
    xpReward: 200,
    category: 'vocabulary',
    condition: (p) => p.wordsLearned.length >= 250,
  },
  {
    id: 'living-dictionary',
    name: 'Living Dictionary',
    description: 'Learn 500 vocabulary words',
    icon: '🌍',
    xpReward: 400,
    category: 'vocabulary',
    condition: (p) => p.wordsLearned.length >= 500,
  },
  {
    id: 'dedicated-10',
    name: 'Consistent Learner',
    description: 'Complete 10 lessons',
    icon: '🥉',
    xpReward: 50,
    category: 'lessons',
    condition: (p) => p.lessonsCompleted >= 10,
  },
  {
    id: 'dedicated',
    name: 'Dedicated Scholar',
    description: 'Complete 20 lessons',
    icon: '🏅',
    xpReward: 100,
    category: 'lessons',
    condition: (p) => p.lessonsCompleted >= 20,
  },
  {
    id: 'centurion',
    name: 'Half-Century',
    description: 'Complete 50 lessons',
    icon: '🏆',
    xpReward: 250,
    category: 'lessons',
    condition: (p) => p.lessonsCompleted >= 50,
  },
  {
    id: 'crown-collector',
    name: 'Crown Collector',
    description: 'Reach 5-Star mastery in any skill module',
    icon: '👑',
    xpReward: 100,
    category: 'mastery',
    condition: (p) => Object.values(p.skillLevels).some((lvl) => lvl >= 5),
  },
  {
    id: 'master',
    name: 'Polyglot Pioneer',
    description: 'Complete at least 10 distinct skill modules',
    icon: '🎓',
    xpReward: 250,
    category: 'mastery',
    condition: (p) => Object.values(p.skillLevels).filter((lvl) => lvl >= 1).length >= 10,
  },
  {
    id: 'diamond',
    name: 'Elder of the Council',
    description: 'Earn 8,000+ total XP',
    icon: '💎',
    xpReward: 500,
    category: 'mastery',
    condition: (p) => p.xp >= 8000,
  },
];
