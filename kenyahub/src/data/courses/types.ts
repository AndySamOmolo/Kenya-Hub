// ============================================================
// Shared types for the Kenyan Language Learning Engine
// Used by all language courses (Luo, Kikuyu, Swahili, etc.)
// ============================================================

/* ─── Language Configuration ────────────────────────────── */

export interface LanguageConfig {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  family: string;
  counties: string[];
  speakers: string;
  speechLocale: string;
  description: string;
  color: string;
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
}

/* ─── User Progress ─────────────────────────────────────── */

export interface UserProgress {
  languageId: string;
  /** Completed skill levels: { "basics-1": 3 } means level 3/5 completed */
  skillLevels: Record<string, number>;
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
  /** Streak freeze count */
  streakFreezes: number;
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
}

/* ─── Achievement Definitions ───────────────────────────── */

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (progress: UserProgress) => boolean;
}

/* ─── Gamification Constants ────────────────────────────── */

export const MAX_HEARTS = 5;
export const HEART_REFILL_MINUTES = 30;
export const XP_PER_CORRECT = 10;
export const XP_PER_CORRECT_WITH_HINT = 5;
export const XP_PERFECT_BONUS = 50;
export const EXERCISES_PER_LESSON = 15;
export const MAX_SKILL_LEVEL = 5;

export const LEVELS = [
  { name: 'Bronze', icon: '🥉', minXp: 0, color: '#CD7F32' },
  { name: 'Silver', icon: '🥈', minXp: 300, color: '#C0C0C0' },
  { name: 'Gold', icon: '🥇', minXp: 1000, color: '#FFD700' },
  { name: 'Sapphire', icon: '💎', minXp: 3000, color: '#0F52BA' },
  { name: 'Diamond', icon: '👑', minXp: 8000, color: '#B9F2FF' },
] as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🌱',
    condition: (p) => p.lessonsCompleted >= 1,
  },
  {
    id: 'on-fire',
    name: 'On Fire',
    description: '7-day learning streak',
    icon: '🔥',
    condition: (p) => p.streak >= 7,
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Complete a lesson with no mistakes',
    icon: '⭐',
    condition: () => false, // Checked at lesson completion
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Learn 100 words',
    icon: '📚',
    condition: (p) => p.wordsLearned.length >= 100,
  },
  {
    id: 'dedicated',
    name: 'Dedicated',
    description: 'Complete 20 lessons',
    icon: '🏅',
    condition: (p) => p.lessonsCompleted >= 20,
  },
  {
    id: 'master',
    name: 'Master',
    description: 'Master all skills in a language',
    icon: '👑',
    condition: () => false, // Checked per-language
  },
  {
    id: 'diamond',
    name: 'Diamond',
    description: 'Reach Diamond level',
    icon: '💎',
    condition: (p) => p.xp >= 8000,
  },
  {
    id: 'memory-king',
    name: 'Memory King',
    description: 'Learn 200 words',
    icon: '🧠',
    condition: (p) => p.wordsLearned.length >= 200,
  },
];
