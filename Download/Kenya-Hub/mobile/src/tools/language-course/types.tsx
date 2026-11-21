import React from "react";
import { Text, Platform } from "react-native";
import {
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  type WordPair,
} from "../../shared/data/courses/types";

export type Word = WordPair;

export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export interface SkillProgress {
  skillId: string;
  level: number;
  lessonsCompleted: number;
  lastPracticed: number;
  bestAccuracy: number;
}

export interface LanguageProgress {
  languageId: string;
  totalXP: number;
  streak: number;
  lastPracticeDate: string;
  dailyGoal: number;
  dailyXP: number;
  dailyDate: string;
  hearts: number;
  heartsLastRefill: number;
  skills: Record<string, SkillProgress>;
  dictCursors?: Record<string, number>;
  streakFreezes?: number;
  wordStrengths: Record<
    string,
    {
      wordKey: string;
      strength: number;
      lastSeen: number;
      correctStreak: number;
      timesWrong: number;
    }
  >;
  gamesPlayed: number;
  perfectLessons: number;
  unlockedAchievements: string[];
  unlockAll?: boolean;
}

export const STORAGE_KEY_V2 = '@kenyahub_course_progress_v2';
export const STORAGE_KEY_V1 = '@kenyahub_course_progress_v1';
export const HEART_REFILL_MS = HEART_REFILL_MINUTES * 60 * 1000;

export function createDefaultLanguageProgress(langId: string): LanguageProgress {
  return {
    languageId: langId,
    totalXP: 0,
    streak: 0,
    lastPracticeDate: '',
    dailyGoal: 50,
    dailyXP: 0,
    dailyDate: getLocalDateString(),
    hearts: MAX_HEARTS,
    heartsLastRefill: Date.now(),
    skills: {},
    dictCursors: {},
    streakFreezes: 1,
    wordStrengths: {},
    gamesPlayed: 0,
    perfectLessons: 0,
    unlockedAchievements: [],
    unlockAll: false,
  };
}

/**
 * Helper to render inline Markdown (**bold**, *italic*, `code`) in React Native <Text>
 */
export function renderFormattedText(
  raw: string,
  baseStyle: any,
  boldColor: string,
  italicColor: string,
  codeBg: string
) {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      parts.push(raw.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <Text key={key++} style={[baseStyle, { fontWeight: '800', color: boldColor }]}>
          {token.slice(2, -2)}
        </Text>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <Text key={key++} style={[baseStyle, { fontStyle: 'italic', color: italicColor }]}>
          {token.slice(1, -1)}
        </Text>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            {
              backgroundColor: codeBg,
              fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier',
              fontSize: 12,
            },
          ]}
        >
          {' '}{token.slice(1, -1)}{' '}
        </Text>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < raw.length) {
    parts.push(raw.slice(lastIndex));
  }

  return <Text style={baseStyle}>{parts}</Text>;
}

export type MainTab = 'learn' | 'cards' | 'games' | 'grammar' | 'proverbs';
export type LessonStage = 'idle' | 'learn' | 'practice' | 'complete';

export type ExtraGameId =
  | 'methali'
  | 'safari'
  | 'nounClass'
  | 'oddWord'
  | 'polyglot'
  | 'twister';

export type ActiveGame =
  | 'menu'
  | 'scramble'
  | 'speed'
  | 'memory'
  | 'wordle'
  | 'riddles'
  | 'vocabQuiz'
  | ExtraGameId;

const EXTRA_GAME_SET = new Set<string>([
  'methali',
  'safari',
  'nounClass',
  'oddWord',
  'polyglot',
  'twister',
]);

export function isExtraGame(game: ActiveGame): game is ExtraGameId {
  return EXTRA_GAME_SET.has(game);
}

// ============================================================================
// QUIZ GLOSS CLEANING & BALANCED DISTRACTOR ENGINE
// ============================================================================

const NON_LATIN_OR_TOFU_RE =
  /[\uFFFD\u0000-\u001F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u1200-\u137F\u25A0-\u25FF]/;

const HAS_LATIN_LETTER_RE = /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/;

const PLACEHOLDER_GLOSS_SET = new Set([
  'none',
  'n/a',
  'na',
  'null',
  'undefined',
  'unknown',
  'tbd',
]);

const EDITORIAL_NOISE_RE =
  /\b(vs\.?|pp?\.\s*\d|fn\.\s*\d|Ex\.\s*\d|Ch\.\s*[IVX\d]|Vide\b|cf\.|s\.v\.)/i;

function normalizeQuizKey(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/^to\s+/i, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasSubstringOverlap(aNorm: string, bNorm: string): boolean {
  if (!aNorm || !bNorm) return false;
  if (aNorm === bNorm) return true;
  const shorter = aNorm.length <= bNorm.length ? aNorm : bNorm;
  const longer = aNorm.length <= bNorm.length ? bNorm : aNorm;
  if (shorter.length < 4) return false;
  return longer.includes(shorter);
}

/**
 * Strip parenthetical/bracketed editorial notes, POS tags, and overly long
 * dictionary definitions while rejecting non-Latin/tofu artifacts.
 */
export function cleanQuizGloss(text: string, maxChars = 56): string {
  if (!text || typeof text !== 'string') return '';
  if (NON_LATIN_OR_TOFU_RE.test(text)) return '';

  let cleaned = text
    .replace(/„/g, '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    // Strip standalone/trailing POS tags and dictionary labels
    .replace(
      /(?:^|[\s,;])(?:v\.\s*[anrtip]\.?|v[anrtip]\.?|v\.|n\.|s\.|adj\.|adv\.|prep\.|conj\.|interj\.|pron\.|num\.|pl\.|sg\.|sing\.|lit\.|fig\.|arch\.|colloq\.|slang\.?|idiom\.?)(?=\s*(?:$|[,;:/|]))/gi,
      ' '
    )
    .replace(/\s+/g, ' ')
    .trim();

  // Take primary gloss before multi-definition separators if present
  if (/[;|•—–]/.test(cleaned)) {
    const primarySeg = cleaned
      .split(/\s*[;|•—–]\s*/)
      .map((s) => s.trim())
      .find((s) => s.length >= 2);
    if (primarySeg) cleaned = primarySeg;
  }

  // Strip slash alternatives for concise vocab glosses
  if (cleaned.includes('/') && maxChars <= 64) {
    const firstSlash = cleaned
      .split(/\s*\/\s*/)
      .map((s) => s.trim())
      .find((s) => s.length >= 2);
    if (firstSlash) cleaned = firstSlash;
  }

  cleaned = cleaned
    .replace(/^[,;:\-–—.\s]+/, '')
    .replace(/[,;:\-–—.\s]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length > maxChars && cleaned.includes(',')) {
    const beforeComma = cleaned.split(',')[0].trim();
    if (beforeComma.length >= 2 && beforeComma.length <= maxChars) {
      cleaned = beforeComma;
    }
  }

  if (!cleaned || cleaned.length > maxChars) return '';
  if (!HAS_LATIN_LETTER_RE.test(cleaned)) return '';
  if (NON_LATIN_OR_TOFU_RE.test(cleaned)) return '';
  if (PLACEHOLDER_GLOSS_SET.has(cleaned.toLowerCase())) return '';
  if (EDITORIAL_NOISE_RE.test(cleaned)) return '';

  return cleaned;
}

/**
 * Verify that a (targetWord, englishGloss) pair is clean, Latin-script,
 * non-empty, concise, and genuinely translated (not word === english).
 */
export function isValidQuizPair(word: string, english: string): boolean {
  const cleanWord = cleanQuizGloss(word, 42);
  const cleanEng = cleanQuizGloss(english, 56);
  if (cleanWord.length < 2 || cleanEng.length < 2) return false;
  if (/^\d+$/.test(cleanWord) || /^\d+$/.test(cleanEng)) return false;

  const normWord = normalizeQuizKey(cleanWord);
  const normEng = normalizeQuizKey(cleanEng);
  if (!normWord || !normEng) return false;
  if (normWord === normEng) return false;

  return true;
}

/**
 * Pick distractors matched by exact/closest word count AND character length
 * (0.55x–1.65x, sorted by closest length difference) with zero duplicate
 * normalized forms or substring overlaps.
 */
export function pickBalancedDistractors(
  correctText: string,
  candidates: string[],
  count = 3
): string[] {
  const maxLen = Math.max(56, correctText.trim().length + 28);
  const cleanCorrect = cleanQuizGloss(correctText, maxLen) || correctText.trim();
  const correctNorm = normalizeQuizKey(cleanCorrect);
  const correctLen = Math.max(1, cleanCorrect.length);
  const correctWordCount = cleanCorrect.split(/\s+/).filter(Boolean).length;
  const minLen = Math.max(2, Math.floor(correctLen * 0.55));
  const maxAllowedLen = Math.ceil(correctLen * 1.65);

  // Deduplicate and clean candidates, excluding exact matches or substring overlaps with correct answer
  const uniqueCandidates: { text: string; norm: string; len: number; wc: number; jitter: number }[] = [];
  const seenNorms = new Set<string>([correctNorm]);

  for (const raw of candidates) {
    const cleaned = cleanQuizGloss(raw, maxLen);
    if (!cleaned) continue;
    const norm = normalizeQuizKey(cleaned);
    if (!norm || seenNorms.has(norm)) continue;
    if (hasSubstringOverlap(correctNorm, norm)) continue;
    seenNorms.add(norm);
    uniqueCandidates.push({
      text: cleaned,
      norm,
      len: cleaned.length,
      wc: cleaned.split(/\s+/).filter(Boolean).length,
      jitter: Math.random() * 1.5,
    });
  }

  const picked: { text: string; norm: string }[] = [];

  const tryAddFrom = (pool: typeof uniqueCandidates) => {
    for (const item of pool) {
      if (picked.length >= count) break;
      if (picked.some((p) => p.norm === item.norm || hasSubstringOverlap(p.norm, item.norm))) {
        continue;
      }
      picked.push({ text: item.text, norm: item.norm });
    }
  };

  // Tier 1: Exact word count + character length within 0.55x–1.65x, sorted by closest length diff
  const tier1 = uniqueCandidates
    .filter((c) => c.wc === correctWordCount && c.len >= minLen && c.len <= maxAllowedLen)
    .sort((a, b) => Math.abs(a.len - correctLen) + a.jitter - (Math.abs(b.len - correctLen) + b.jitter));
  tryAddFrom(tier1);

  // Tier 2: Word count within ±1 + character length within 0.55x–1.65x
  if (picked.length < count) {
    const tier2 = uniqueCandidates
      .filter((c) => Math.abs(c.wc - correctWordCount) <= 1 && c.len >= minLen && c.len <= maxAllowedLen)
      .sort(
        (a, b) =>
          Math.abs(a.wc - correctWordCount) * 4 +
          Math.abs(a.len - correctLen) +
          a.jitter -
          (Math.abs(b.wc - correctWordCount) * 4 + Math.abs(b.len - correctLen) + b.jitter)
      );
    tryAddFrom(tier2);
  }

  // Tier 3: Character length within 0.55x–1.65x regardless of word count
  if (picked.length < count) {
    const tier3 = uniqueCandidates
      .filter((c) => c.len >= minLen && c.len <= maxAllowedLen)
      .sort(
        (a, b) =>
          Math.abs(a.wc - correctWordCount) * 6 +
          Math.abs(a.len - correctLen) +
          a.jitter -
          (Math.abs(b.wc - correctWordCount) * 6 + Math.abs(b.len - correctLen) + b.jitter)
      );
    tryAddFrom(tier3);
  }

  // Tier 4: Closest remaining candidates (for very small pools)
  if (picked.length < count) {
    const tier4 = [...uniqueCandidates].sort(
      (a, b) =>
        Math.abs(a.wc - correctWordCount) * 10 +
        Math.abs(a.len - correctLen) +
        a.jitter -
        (Math.abs(b.wc - correctWordCount) * 10 + Math.abs(b.len - correctLen) + b.jitter)
    );
    tryAddFrom(tier4);
  }

  return picked.map((p) => p.text);
}
