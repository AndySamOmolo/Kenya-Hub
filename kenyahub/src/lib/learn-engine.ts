// ============================================================
// Exercise Generation Engine
// Generates Duolingo-style exercises from skill word/sentence data
// ============================================================

import type { Exercise, ExerciseType, CourseSkill, WordPair } from '@/data/courses/types';
import { EXERCISES_PER_LESSON } from '@/data/courses/types';

/* ─── Helpers ──────────────────────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function pickOne<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Get distractors from the same skill's word list */
function getDistractors(
  correctWord: WordPair,
  allWords: WordPair[],
  count: number,
  field: 'target' | 'source'
): string[] {
  const others = allWords.filter(
    (w) => w[field].toLowerCase() !== correctWord[field].toLowerCase()
  );
  return pick(others, count).map((w) => w[field]);
}

/* ─── Exercise Generators ──────────────────────────── */

function generateMultipleChoice(word: WordPair, allWords: WordPair[]): Exercise {
  // Randomly choose direction: target→source or source→target
  const toEnglish = Math.random() > 0.5;
  const distractors = getDistractors(
    word,
    allWords,
    3,
    toEnglish ? 'source' : 'target'
  );
  const correct = toEnglish ? word.source : word.target;
  const options = shuffle([correct, ...distractors]);

  return {
    type: 'multiple_choice',
    prompt: toEnglish
      ? `What does "${word.target}" mean?`
      : `How do you say "${word.source}"?`,
    correctAnswer: correct,
    options,
    sourceWord: word,
  };
}

function generateTranslateToTarget(word: WordPair): Exercise {
  return {
    type: 'translate_to_target',
    prompt: `Translate to the target language:`,
    correctAnswer: word.target.toLowerCase().replace(/[?!.,]/g, '').trim(),
    hint: word.pronunciation,
    audioText: word.target,
    sourceWord: word,
  };
}

function generateTranslateToEnglish(word: WordPair): Exercise {
  return {
    type: 'translate_to_english',
    prompt: `Translate to English:`,
    correctAnswer: word.source.toLowerCase().replace(/[?!.,]/g, '').replace(/\(.*?\)/g, '').trim(),
    audioText: word.target,
    sourceWord: word,
  };
}

function generateFillBlank(word: WordPair, allWords: WordPair[]): Exercise {
  // Create a sentence with a blank
  const distractors = getDistractors(word, allWords, 3, 'target');
  const options = shuffle([word.target, ...distractors]);

  return {
    type: 'fill_blank',
    prompt: `Complete: _____ means "${word.source}"`,
    correctAnswer: word.target,
    options,
    sourceWord: word,
  };
}

function generateMatchPairs(words: WordPair[]): Exercise {
  const selected = pick(words, Math.min(5, words.length));
  const pairs = selected.map((w) => ({
    left: w.target,
    right: w.source.replace(/\(.*?\)/g, '').trim(),
  }));

  return {
    type: 'match_pairs',
    prompt: 'Match the pairs',
    correctAnswer: '', // N/A for match
    pairs,
  };
}

function generateListenType(word: WordPair): Exercise {
  return {
    type: 'listen_type',
    prompt: 'Type what you hear',
    correctAnswer: word.target.toLowerCase().replace(/[?!.,]/g, '').trim(),
    audioText: word.target,
    sourceWord: word,
  };
}

function generateTapWhatYouHear(word: WordPair, allWords: WordPair[]): Exercise {
  const distractors = getDistractors(word, allWords, 3, 'target');
  const options = shuffle([word.target, ...distractors]);

  return {
    type: 'tap_what_you_hear',
    prompt: 'Tap what you hear',
    correctAnswer: word.target,
    options,
    audioText: word.target,
    sourceWord: word,
  };
}

function generateWordBank(word: WordPair): Exercise {
  // Split the source (English) into words and add distractors
  const sourceWords = word.source.replace(/\(.*?\)/g, '').trim().split(/\s+/);
  const distractorPool = ['the', 'a', 'an', 'is', 'it', 'to', 'of', 'my', 'not', 'very', 'big', 'small', 'he', 'she', 'we'];
  const distractors = pick(
    distractorPool.filter((d) => !sourceWords.map(s => s.toLowerCase()).includes(d)),
    Math.min(3, Math.max(1, 4 - sourceWords.length))
  );
  const tiles = shuffle([...sourceWords, ...distractors]);

  return {
    type: 'word_bank',
    prompt: `Build the translation of "${word.target}"`,
    correctAnswer: word.source.replace(/\(.*?\)/g, '').trim(),
    wordTiles: tiles,
    audioText: word.target,
    sourceWord: word,
  };
}

function generateReorder(word: WordPair): Exercise {
  const targetWords = word.target.split(/\s+/);
  if (targetWords.length < 2) {
    // Fallback to multiple choice for single words
    return generateMultipleChoice(word, [word]);
  }

  return {
    type: 'reorder',
    prompt: `Put in order: "${word.source.replace(/\(.*?\)/g, '').trim()}"`,
    correctAnswer: word.target,
    wordTiles: shuffle(targetWords),
    sourceWord: word,
  };
}

/* ─── Main Generator ───────────────────────────────── */

const EXERCISE_WEIGHTS: { type: ExerciseType; weight: number; minWords: number }[] = [
  { type: 'multiple_choice', weight: 3, minWords: 4 },
  { type: 'translate_to_target', weight: 1.5, minWords: 1 },
  { type: 'translate_to_english', weight: 1.5, minWords: 1 },
  { type: 'fill_blank', weight: 2, minWords: 4 },
  { type: 'match_pairs', weight: 1, minWords: 4 },
  { type: 'listen_type', weight: 1.5, minWords: 1 },
  { type: 'tap_what_you_hear', weight: 1.5, minWords: 4 },
  { type: 'word_bank', weight: 1, minWords: 1 },
  { type: 'reorder', weight: 1, minWords: 1 },
];

export function generateExercises(
  skill: CourseSkill,
  count: number = EXERCISES_PER_LESSON
): Exercise[] {
  const allWords = [...skill.words];
  const allSentences = skill.sentences.map(
    (s): WordPair => ({ target: s.target, source: s.source })
  );
  const allItems = [...allWords, ...allSentences];

  if (allItems.length === 0) return [];

  const eligible = EXERCISE_WEIGHTS.filter((e) => allItems.length >= e.minWords);
  const totalWeight = eligible.reduce((s, e) => s + e.weight, 0);

  const exercises: Exercise[] = [];
  const maxAttempts = count * 3;
  let attempts = 0;

  while (exercises.length < count && attempts < maxAttempts) {
    attempts++;

    // Weighted random type selection
    let r = Math.random() * totalWeight;
    let selectedType: ExerciseType = 'multiple_choice';
    for (const e of eligible) {
      r -= e.weight;
      if (r <= 0) {
        selectedType = e.type;
        break;
      }
    }

    const word = pickOne(allItems);

    let exercise: Exercise | null = null;
    try {
      switch (selectedType) {
        case 'multiple_choice':
          exercise = generateMultipleChoice(word, allItems);
          break;
        case 'translate_to_target':
          exercise = generateTranslateToTarget(word);
          break;
        case 'translate_to_english':
          exercise = generateTranslateToEnglish(word);
          break;
        case 'fill_blank':
          exercise = generateFillBlank(word, allItems);
          break;
        case 'match_pairs':
          exercise = generateMatchPairs(allItems);
          break;
        case 'listen_type':
          exercise = generateListenType(word);
          break;
        case 'tap_what_you_hear':
          exercise = generateTapWhatYouHear(word, allItems);
          break;
        case 'word_bank':
          if (word.source.split(/\s+/).length >= 2) {
            exercise = generateWordBank(word);
          }
          break;
        case 'reorder':
          if (word.target.split(/\s+/).length >= 2) {
            exercise = generateReorder(word);
          }
          break;
      }
    } catch {
      // Skip failed generation
    }

    if (exercise) {
      exercises.push(exercise);
    }
  }

  // Ensure we start with easier types (choice, fill) and progress to harder
  return exercises.sort((a, b) => {
    const order: Record<ExerciseType, number> = {
      multiple_choice: 0,
      tap_what_you_hear: 1,
      fill_blank: 2,
      match_pairs: 3,
      word_bank: 4,
      listen_type: 5,
      reorder: 6,
      translate_to_english: 7,
      translate_to_target: 8,
      speak: 9,
    };
    return (order[a.type] || 5) - (order[b.type] || 5);
  });
}

/* ─── Answer Checking ──────────────────────────────── */

export function checkAnswer(exercise: Exercise, userAnswer: string): boolean {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[?!.,;:'"]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const correct = normalize(exercise.correctAnswer);
  const answer = normalize(userAnswer);

  if (correct === answer) return true;

  // Allow minor typos (Levenshtein distance <= 1 for short words)
  if (correct.length <= 5 && levenshtein(correct, answer) <= 1) return true;
  if (correct.length > 5 && levenshtein(correct, answer) <= 2) return true;

  return false;
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0)
      );
    }
  }
  return dp[m][n];
}

/* ─── TTS Helper ───────────────────────────────────── */

export function speak(text: string, locale: string = 'sw-KE') {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = locale;
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}
