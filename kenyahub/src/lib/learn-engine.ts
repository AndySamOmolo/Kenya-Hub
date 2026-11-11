// ============================================================
// Exercise Generation Engine
// Generates interactive exercises from skill word/sentence data
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

/**
 * Strip parenthetical/bracketed editorial notes (e.g. "(pl. ...)", "[...]", "{...}")
 * while preserving the primary lexical or sentence form for interactive exercises.
 */
export function cleanExerciseText(text: string): string {
  const stripped = text
    .replace(/\[.*?\]/g, '')
    .replace(/\{.*?\}/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return stripped || text.trim();
}

/**
 * Extract the primary form (before '/' or ';') for tile/blank exercises
 * while keeping full variants for acceptedAnswers.
 */
export function getPrimaryForm(text: string): string {
  const cleaned = cleanExerciseText(text);
  const primary = cleaned.split(/\s*[/;]\s*/)[0]?.trim();
  return primary || cleaned;
}

/**
 * Build a non-leaking hint for translate_to_target exercises.
 * If word.pronunciation is distinct from the target word, return it;
 * otherwise return a masked structural hint so the answer is never given away.
 */
function buildNonLeakingHint(word: WordPair): string {
  const primaryTarget = getPrimaryForm(word.target);
  const normTarget = primaryTarget
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  const normPron = (word.pronunciation || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  if (word.pronunciation && normPron && normPron !== normTarget) {
    return word.pronunciation;
  }

  const clean = primaryTarget.replace(/[?!.,]/g, '').trim();
  if (clean.length <= 2) {
    return `${clean.length} letters`;
  }
  return `Starts with "${clean.slice(0, 2)}…" (${clean.length} letters)`;
}

function isValidExercise(exercise: Exercise): boolean {
  if (!exercise.prompt.trim()) return false;

  if (exercise.type === 'match_pairs') {
    if (!exercise.pairs || exercise.pairs.length < 2) return false;
    const leftValues = new Set(exercise.pairs.map(pair => pair.left.toLowerCase().trim()));
    const rightValues = new Set(exercise.pairs.map(pair => pair.right.toLowerCase().trim()));
    return leftValues.size === exercise.pairs.length && rightValues.size === exercise.pairs.length;
  }

  if (!exercise.correctAnswer.trim()) return false;

  if (exercise.type === 'multiple_choice') {
    if (!exercise.options || !exercise.options.includes(exercise.correctAnswer)) return false;
    return new Set(exercise.options.map(option => option.toLowerCase().trim())).size === exercise.options.length;
  }

  if (exercise.type === 'reorder') {
    return Boolean(exercise.wordTiles?.length && exercise.wordTiles.length > 1);
  }

  return true;
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
  const primaryTarget = getPrimaryForm(word.target).toLowerCase().replace(/[?!.,]/g, '').trim();
  const variants = new Set<string>();
  if (primaryTarget) variants.add(primaryTarget);
  variants.add(word.target.toLowerCase().replace(/[?!.,]/g, '').trim());
  for (const part of cleanExerciseText(word.target).split(/\s*[/;,]\s*/)) {
    const cleaned = part.toLowerCase().replace(/[?!.,]/g, '').trim();
    if (cleaned) variants.add(cleaned);
  }

  return {
    type: 'translate_to_target',
    prompt: `Translate "${word.source}" to the target language:`,
    correctAnswer: primaryTarget || word.target.toLowerCase().replace(/[?!.,]/g, '').trim(),
    acceptedAnswers: Array.from(variants),
    hint: buildNonLeakingHint(word),
    audioText: getPrimaryForm(word.target),
    sourceWord: word,
  };
}

function generateTranslateToEnglish(word: WordPair): Exercise {
  const primarySource = getPrimaryForm(word.source).toLowerCase().replace(/[?!.,]/g, '').trim();
  const variants = new Set<string>();
  if (primarySource) variants.add(primarySource);
  variants.add(cleanExerciseText(word.source).toLowerCase().replace(/[?!.,]/g, '').trim());
  for (const part of cleanExerciseText(word.source).split(/\s*[/;,]\s*/)) {
    const cleaned = part.toLowerCase().replace(/[?!.,]/g, '').trim();
    if (cleaned) variants.add(cleaned);
  }

  return {
    type: 'translate_to_english',
    prompt: `Translate "${word.target}" to English:`,
    correctAnswer: primarySource || cleanExerciseText(word.source).toLowerCase().replace(/[?!.,]/g, '').trim(),
    acceptedAnswers: Array.from(variants),
    audioText: getPrimaryForm(word.target),
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
    left: getPrimaryForm(w.target),
    right: getPrimaryForm(w.source),
  }));

  return {
    type: 'match_pairs',
    prompt: 'Match the pairs',
    correctAnswer: '', // N/A for match
    pairs,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateListenType(word: WordPair): Exercise {
  const primaryTarget = getPrimaryForm(word.target);
  return {
    type: 'listen_type',
    prompt: 'Type what you hear',
    correctAnswer: primaryTarget.toLowerCase().replace(/[?!.,]/g, '').trim(),
    audioText: primaryTarget,
    sourceWord: word,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateTapWhatYouHear(word: WordPair, allWords: WordPair[]): Exercise {
  const distractors = getDistractors(word, allWords, 3, 'target');
  const options = shuffle([word.target, ...distractors]);

  return {
    type: 'tap_what_you_hear',
    prompt: 'Tap what you hear',
    correctAnswer: word.target,
    options,
    audioText: getPrimaryForm(word.target),
    sourceWord: word,
  };
}

function generateWordBank(word: WordPair): Exercise {
  const cleanSource = getPrimaryForm(word.source).replace(/[?!.,]/g, '').trim();
  const sourceWords = cleanSource.split(/\s+/).filter(Boolean);
  const distractorPool = ['the', 'a', 'an', 'is', 'it', 'to', 'of', 'my', 'not', 'very', 'big', 'small', 'he', 'she', 'we'];
  const distractors = pick(
    distractorPool.filter((d) => !sourceWords.map(s => s.toLowerCase()).includes(d)),
    Math.min(3, Math.max(1, 4 - sourceWords.length))
  );
  const tiles = shuffle([...sourceWords, ...distractors]);

  return {
    type: 'word_bank',
    prompt: `Build the translation of "${getPrimaryForm(word.target)}"`,
    correctAnswer: cleanSource,
    wordTiles: tiles,
    audioText: getPrimaryForm(word.target),
    sourceWord: word,
  };
}

function generateReorder(word: WordPair): Exercise {
  const cleanTarget = getPrimaryForm(word.target).replace(/[?!.,]/g, '').trim();
  const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
  if (targetWords.length < 2) {
    // Fallback to multiple choice for single words
    return generateMultipleChoice(word, [word]);
  }

  return {
    type: 'reorder',
    prompt: `Put in order: "${getPrimaryForm(word.source)}"`,
    correctAnswer: cleanTarget,
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
  { type: 'word_bank', weight: 1.2, minWords: 1 },
  { type: 'reorder', weight: 1.2, minWords: 1 },
];

export function generateExercises(
  skill: CourseSkill,
  count: number = EXERCISES_PER_LESSON
): Exercise[] {
  const allWords = [...skill.words];
  const sentenceItems: WordPair[] = (skill.sentences || [])
    .filter((s) => s.target && s.source && getPrimaryForm(s.target).split(/\s+/).length >= 2)
    .map((s) => ({
      target: s.target,
      source: s.source,
      ...(s.pronunciation ? { pronunciation: s.pronunciation } : {}),
    }));
  const allItems = [...allWords, ...sentenceItems];

  const authoredExercises = (skill.authoredExercises || []).filter(isValidExercise);
  const exercises = authoredExercises.slice(0, count);
  const usedExercises = new Set(
    exercises.map(exercise => `${exercise.type}:${exercise.prompt}:${exercise.correctAnswer}`)
  );

  if (exercises.length >= count || allItems.length === 0) return exercises;

  const eligible = EXERCISE_WEIGHTS.filter((e) => allItems.length >= e.minWords);
  const totalWeight = eligible.reduce((s, e) => s + e.weight, 0);

  const maxAttempts = (count - exercises.length) * 4;
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

    const pool =
      (selectedType === 'reorder' || selectedType === 'word_bank') && sentenceItems.length > 0
        ? [...sentenceItems, ...allWords]
        : allItems;
    const word = pickOne(pool);

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
          exercise = generateMatchPairs(allWords.length >= 2 ? allWords : allItems);
          break;
        case 'word_bank':
          if (getPrimaryForm(word.source).split(/\s+/).length >= 2) {
            exercise = generateWordBank(word);
          }
          break;
        case 'reorder':
          if (getPrimaryForm(word.target).split(/\s+/).length >= 2) {
            exercise = generateReorder(word);
          }
          break;
      }
    } catch {
      // Skip failed generation
    }

    if (exercise && isValidExercise(exercise)) {
      const key = `${exercise.type}:${exercise.prompt}:${exercise.correctAnswer}`;
      if (usedExercises.has(key)) continue;
      usedExercises.add(key);
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
    return (order[a.type] ?? 5) - (order[b.type] ?? 5);
  });
}

/* ─── Answer Checking ──────────────────────────────── */

export function checkAnswer(exercise: Exercise, userAnswer: string): boolean {
  const normalize = (s: string) =>
    s
      .normalize('NFKC')
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[?!.,;:'"]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const answer = normalize(userAnswer);
  if (!answer) return false;

  const rawCandidates = [
    exercise.correctAnswer,
    cleanExerciseText(exercise.correctAnswer),
    getPrimaryForm(exercise.correctAnswer),
    ...(exercise.acceptedAnswers || []),
  ];
  const accepted = Array.from(new Set(rawCandidates.map(normalize).filter(Boolean)));

  if (accepted.includes(answer)) return true;

  // Only allow a small typo when the answer is long enough to avoid accepting
  // a different short word as equivalent.
  return accepted.some((correct) => {
    const distance = levenshtein(correct, answer);
    if (correct.length >= 10) return distance <= 2;
    if (correct.length >= 6) return distance <= 1;
    return false;
  });
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
