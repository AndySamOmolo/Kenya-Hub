// ============================================================
// Exercise Generation Engine
// Generates interactive exercises from skill word/sentence data
// ============================================================

import type { Exercise, ExerciseType, CourseSkill, WordPair } from '@/data/courses/types';
import { EXERCISES_PER_LESSON } from '@/data/courses/types';

export const KENYAN_SPECIAL_CHARS = [
  'ĩ',
  'ũ',
  'ë',
  'ö',
  'ä',
  'ē',
  'ō',
  'ū',
  "ng'",
  'ŋ',
  'ɗ',
  'ɠ',
  'ʼ',
] as const;

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
 * and unresolved ditto marks („) while preserving the primary lexical or sentence form.
 */
export function cleanExerciseText(text: string): string {
  const stripped = text
    .replace(/„/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/\{.*?\}/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/,\s*(?:v\.\s*[an]\.?|v\.\s*[ti]\.?|v[an]\.?|v\.?|s\.?|n\.?|adj\.?|adv\.?|prep\.?|conj\.?|interj\.?|pron\.?|num\.?)(?=\s*(?:$|[;(/]))/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return stripped || text.replace(/„/g, '').trim();
}

/**
 * Extract the primary form (before '/', ';', ',', or 'or'/'and' variants) for tile/blank/game exercises
 * while keeping full variants for acceptedAnswers.
 */
export function getPrimaryForm(text: string): string {
  const cleaned = cleanExerciseText(text);
  const withoutPl = cleaned.split(/,\s*pl\.?\s+/i)[0]?.trim() || cleaned;
  const primary = withoutPl
    .split(/\s*(?:[/;•|→—–]|\b(?:or|and)\b|,)\s*/i)[0]
    ?.replace(/\.$/, '')
    .trim();
  return primary || withoutPl || cleaned;
}

/**
 * Check whether a word pair is a clean lexical item suitable for mini-games and exercises
 * (excluding grammatical table headers, section titles, page references, and multi-item compendia).
 */
export function isCleanLexicalWordPair(rawTarget: string, rawSource: string): boolean {
  const target = getPrimaryForm(rawTarget).trim();
  const source = getPrimaryForm(rawSource).trim();
  if (target.length < 2 || target.length > 35) return false;
  if (source.length < 2 || source.length > 55) return false;
  const both = `${target} ~~~ ${source}`;
  if (/[:→•=><[\]{}*§|"…_]/.test(both) || /(?:\.\s*){2,}/.test(both)) return false;
  // Reject digits at start, but allow valid Bantu hyphen-prefixed verb roots like -īyā or -mēnyā
  if (/^\d/.test(target) || /^-(?![a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]{2,})/.test(target)) return false;
  if (/[\u0370-\u03FF\u0600-\u06FF\u1200-\u137F]/u.test(both)) return false;
  if (
    /^(Class |Stories |Study |Table |Figure |Section |Cardinals|Ordinals|Modes|Male |Female |ATR |Subj|Obj|Overt |Lexical|Idiosyncratic|Pwani |Sheng |TAM |Sing\.|Pl\.)/i.test(
      target
    )
  ) {
    return false;
  }
  if (/\b(vs\.?|pp?\.\s*\d|fn\.\s*\d|Ex\.\s*\d|Ch\.\s*[IVX\d]|Vide\b|cf\.|s\.v\.)/i.test(both)) {
    return false;
  }
  if (
    /^(Complete |Representative |All \d|The \d|Three |Four |Five |Six |Seven |Eight |Nine |Ten |Twelve |Substantive |Inseparable |Upward-oriented |Suffixed |Morphosyntactic |Key vocabulary|Some other |First \d|Later \d|Early |Traditional |Ceremonial |Geneal)/i.test(
      source
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Check whether a sentence pair is a clean conversational/proverbial sentence
 * (excluding academic tables, page citations, and em-dash vocabulary definitions).
 */
export function isCleanSentencePair(rawTarget: string, rawSource: string): boolean {
  const target = cleanExerciseText(rawTarget).trim();
  const source = cleanExerciseText(rawSource).trim();
  if (target.length < 5 || target.length > 140) return false;
  if (source.length < 5 || source.length > 160) return false;
  if (target.split(/\s+/).length < 2 || source.split(/\s+/).length < 2) return false;
  const both = `${target} ~~~ ${source}`;
  if (/[:→•=><[\]{}*§|"_]/.test(both) || /(?:\.\s*){2,}/.test(both)) return false;
  if (/\s[—–]\s/.test(target)) return false;
  if (/\b(vs\.?|pp?\.\s*\d|fn\.\s*\d|Ex\.\s*\d|Ch\.\s*[IVX\d]|Tableau\b|SyllCon|Vide\b|cf\.|s\.v\.)/i.test(both)) {
    return false;
  }
  return true;
}

/**
 * Build a non-leaking hint for translate_to_target exercises.
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

  if (
    word.pronunciation &&
    normPron &&
    normPron !== normTarget &&
    !normPron.includes(normTarget) &&
    !normTarget.includes(normPron)
  ) {
    return word.pronunciation;
  }

  const clean = primaryTarget.replace(/[?!.,]/g, '').trim();
  if (clean.length <= 2) {
    return `${clean.length} letters`;
  }
  return `Starts with "${clean.slice(0, 2)}…" (${clean.length} letters)`;
}

function getBaseStemKey(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/^to\s+/i, '')
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 6);
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

  if (exercise.type === 'multiple_choice' || (exercise.type === 'fill_blank' && exercise.options)) {
    if (!exercise.options || exercise.options.length < 2 || !exercise.options.includes(exercise.correctAnswer)) {
      return false;
    }
    return new Set(exercise.options.map(option => option.toLowerCase().trim())).size === exercise.options.length;
  }

  if (exercise.type === 'reorder' || exercise.type === 'word_bank') {
    return Boolean(exercise.wordTiles?.length && exercise.wordTiles.length > 1);
  }

  return true;
}

/**
 * Get distractors matching the target word's word-count tier and deduplicated by base stem
 * so 10-word sentences are never paired with 1-word distractors and synonyms never collide.
 */
function getDistractors(
  correctWord: WordPair,
  allWords: WordPair[],
  count: number,
  field: 'target' | 'source'
): string[] {
  const correctVal = getPrimaryForm(correctWord[field]).trim();
  const correctLower = correctVal.toLowerCase();
  const correctStem = getBaseStemKey(correctVal);
  const correctWordCount = correctVal.split(/\s+/).length;

  const seenExact = new Set<string>([correctLower]);
  const seenStems = new Set<string>([correctStem]);
  const distractors: string[] = [];

  // Pass 1: Strict word-count proximity (difference <= 2 words) + distinct stem
  for (const w of shuffle(allWords)) {
    const val = getPrimaryForm(w[field]).trim();
    if (!val) continue;
    const key = val.toLowerCase();
    const stem = getBaseStemKey(val);
    const wc = val.split(/\s+/).length;
    if (!seenExact.has(key) && !seenStems.has(stem) && Math.abs(wc - correctWordCount) <= 2) {
      seenExact.add(key);
      seenStems.add(stem);
      distractors.push(val);
      if (distractors.length >= count) return distractors;
    }
  }

  // Pass 2: Distinct stem regardless of length
  for (const w of shuffle(allWords)) {
    const val = getPrimaryForm(w[field]).trim();
    if (!val) continue;
    const key = val.toLowerCase();
    const stem = getBaseStemKey(val);
    if (!seenExact.has(key) && !seenStems.has(stem)) {
      seenExact.add(key);
      seenStems.add(stem);
      distractors.push(val);
      if (distractors.length >= count) return distractors;
    }
  }

  // Pass 3: Any distinct string
  for (const w of shuffle(allWords)) {
    const val = getPrimaryForm(w[field]).trim();
    if (!val) continue;
    const key = val.toLowerCase();
    if (!seenExact.has(key)) {
      seenExact.add(key);
      distractors.push(val);
      if (distractors.length >= count) break;
    }
  }

  return distractors;
}

/* ─── Exercise Generators ──────────────────────────── */

function generateMultipleChoice(word: WordPair, pool: WordPair[]): Exercise {
  const toEnglish = Math.random() > 0.5;
  const primaryTarget = getPrimaryForm(word.target);
  const primarySource = getPrimaryForm(word.source);
  const distractors = getDistractors(
    word,
    pool,
    3,
    toEnglish ? 'source' : 'target'
  );
  const correct = toEnglish ? primarySource : primaryTarget;
  const options = shuffle([correct, ...distractors]);

  return {
    type: 'multiple_choice',
    prompt: toEnglish
      ? `What does "${primaryTarget}" mean?`
      : `How do you say "${primarySource}"?`,
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
  for (const part of cleanExerciseText(word.target).split(/\s*(?:[/;,]|\b(?:or|and)\b)\s*/i)) {
    const cleaned = part.toLowerCase().replace(/[?!.,]/g, '').trim();
    if (cleaned) variants.add(cleaned);
  }

  return {
    type: 'translate_to_target',
    prompt: `Translate "${getPrimaryForm(word.source)}" to the target language:`,
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
  for (const part of cleanExerciseText(word.source).split(/\s*(?:[/;,]|\b(?:or|and)\b)\s*/i)) {
    const cleaned = part.toLowerCase().replace(/[?!.,]/g, '').trim();
    if (cleaned) variants.add(cleaned);
  }

  return {
    type: 'translate_to_english',
    prompt: `Translate "${getPrimaryForm(word.target)}" to English:`,
    correctAnswer: primarySource || cleanExerciseText(word.source).toLowerCase().replace(/[?!.,]/g, '').trim(),
    acceptedAnswers: Array.from(variants),
    audioText: getPrimaryForm(word.target),
    sourceWord: word,
  };
}

function generateFillBlank(word: WordPair, wordPool: WordPair[], sentences: WordPair[] = []): Exercise {
  const primaryTarget = getPrimaryForm(word.target);
  const distractors = getDistractors(word, wordPool, 3, 'target');
  const options = shuffle([primaryTarget, ...distractors]);

  const escapedTarget = primaryTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordRegex = new RegExp(`\\b${escapedTarget}\\b`, 'i');
  const matchingSentence = sentences.find(
    (s) => s.target.length > primaryTarget.length + 3 && wordRegex.test(s.target)
  );

  if (matchingSentence) {
    const blanked = matchingSentence.target.replace(wordRegex, '_____');
    return {
      type: 'fill_blank',
      prompt: `Complete: "${blanked}" (${matchingSentence.source})`,
      correctAnswer: primaryTarget,
      options,
      sourceWord: word,
    };
  }

  return {
    type: 'fill_blank',
    prompt: `Complete: _____ means "${getPrimaryForm(word.source)}"`,
    correctAnswer: primaryTarget,
    options,
    sourceWord: word,
  };
}

function generateMatchPairs(words: WordPair[]): Exercise {
  const seenLeft = new Set<string>();
  const seenRight = new Set<string>();
  const seenRightStems = new Set<string>();
  const pairs: { left: string; right: string }[] = [];
  for (const w of shuffle(words)) {
    const left = getPrimaryForm(w.target).trim();
    const right = getPrimaryForm(w.source).trim();
    if (!left || !right) continue;
    const rStem = getBaseStemKey(right);
    if (seenLeft.has(left.toLowerCase()) || seenRight.has(right.toLowerCase()) || seenRightStems.has(rStem)) {
      continue;
    }
    seenLeft.add(left.toLowerCase());
    seenRight.add(right.toLowerCase());
    seenRightStems.add(rStem);
    pairs.push({ left, right });
    if (pairs.length >= 5) break;
  }

  return {
    type: 'match_pairs',
    prompt: 'Match the pairs',
    correctAnswer: '',
    pairs,
  };
}

function generateWordBank(word: WordPair, allWords: WordPair[] = []): Exercise {
  const cleanSource = getPrimaryForm(word.source).replace(/[?!.,]/g, '').trim();
  const sourceWords = cleanSource.split(/\s+/).filter(Boolean);
  const sourceLowerSet = new Set(sourceWords.map((s) => s.toLowerCase()));

  const skillTokens = Array.from(
    new Set(
      allWords
        .flatMap((w) => getPrimaryForm(w.source).replace(/[?!.,]/g, '').trim().split(/\s+/))
        .filter((t) => t.length >= 2 && !sourceLowerSet.has(t.toLowerCase()))
    )
  );
  const fallbackPool = ['today', 'water', 'good', 'house', 'person', 'child', 'food', 'road', 'friend', 'work'];
  const combinedPool = skillTokens.length >= 3
    ? skillTokens
    : [...skillTokens, ...fallbackPool.filter((d) => !sourceLowerSet.has(d))];

  const distractors = pick(combinedPool, Math.min(3, Math.max(1, 5 - sourceWords.length)));
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

function generateReorder(word: WordPair, wordPool: WordPair[] = []): Exercise {
  const cleanTarget = getPrimaryForm(word.target).replace(/[?!.,]/g, '').trim();
  const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
  if (targetWords.length < 2) {
    return generateMultipleChoice(word, wordPool.length >= 2 ? wordPool : [word]);
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
  { type: 'multiple_choice', weight: 2.5, minWords: 4 },
  { type: 'translate_to_target', weight: 1.6, minWords: 1 },
  { type: 'translate_to_english', weight: 1.6, minWords: 1 },
  { type: 'fill_blank', weight: 2.0, minWords: 4 },
  { type: 'match_pairs', weight: 1.2, minWords: 4 },
  { type: 'word_bank', weight: 1.4, minWords: 1 },
  { type: 'reorder', weight: 1.4, minWords: 1 },
];

export function generateExercises(
  skill: CourseSkill,
  count: number = EXERCISES_PER_LESSON
): Exercise[] {
  const filteredWords = skill.words.filter((w) => isCleanLexicalWordPair(w.target, w.source));
  const allWords = filteredWords.length >= 4 ? filteredWords : [...skill.words];

  // Filter sentences strictly through isCleanSentencePair so academic/truncated sentences never leak
  const sentenceItems: WordPair[] = (skill.sentences || [])
    .filter((s) => s.target && s.source && isCleanSentencePair(s.target, s.source))
    .map((s) => ({
      target: s.target,
      source: s.source,
      ...(s.pronunciation ? { pronunciation: s.pronunciation } : {}),
    }));

  const allItems = [...allWords, ...sentenceItems];

  // Cap static authoredExercises to at most half the lesson (~7-8 items) and shuffle them
  // so every Crown Level 1..5 mixes in dynamic typing, match_pairs, and word_bank exercises.
  const validAuthored = shuffle((skill.authoredExercises || []).filter(isValidExercise));
  const authoredCap = allItems.length >= 4 ? Math.min(8, Math.ceil(count * 0.5)) : count;
  const exercises = validAuthored.slice(0, authoredCap);
  const usedExercises = new Set(
    exercises.map(exercise => `${exercise.type}:${exercise.prompt}:${exercise.correctAnswer}`)
  );

  if (exercises.length >= count || allItems.length === 0) return exercises;

  const eligible = EXERCISE_WEIGHTS.filter((e) => allItems.length >= e.minWords);
  const totalWeight = eligible.reduce((s, e) => s + e.weight, 0);

  const maxAttempts = (count - exercises.length) * 5;
  let attempts = 0;

  while (exercises.length < count && attempts < maxAttempts) {
    attempts++;

    let r = Math.random() * totalWeight;
    let selectedType: ExerciseType = 'multiple_choice';
    for (const e of eligible) {
      r -= e.weight;
      if (r <= 0) {
        selectedType = e.type;
        break;
      }
    }

    // Separate lexical pool vs sentence pool so 15-word sentences are never paired against 1-word distractors
    const useSentencePool =
      (selectedType === 'reorder' || selectedType === 'word_bank') && sentenceItems.length > 0;
    const pool = useSentencePool ? [...sentenceItems, ...allWords] : allWords.length >= 4 ? allWords : allItems;
    const word = pickOne(pool);
    const sameTierPool =
      getPrimaryForm(word.target).split(/\s+/).length >= 4 && sentenceItems.length >= 4
        ? sentenceItems
        : allWords.length >= 4
        ? allWords
        : allItems;

    let exercise: Exercise | null = null;
    try {
      switch (selectedType) {
        case 'multiple_choice':
          exercise = generateMultipleChoice(word, sameTierPool);
          break;
        case 'translate_to_target':
          exercise = generateTranslateToTarget(word);
          break;
        case 'translate_to_english':
          exercise = generateTranslateToEnglish(word);
          break;
        case 'fill_blank':
          exercise = generateFillBlank(word, allWords.length >= 4 ? allWords : sameTierPool, sentenceItems);
          break;
        case 'match_pairs':
          exercise = generateMatchPairs(allWords.length >= 2 ? allWords : allItems);
          break;
        case 'word_bank':
          if (getPrimaryForm(word.source).split(/\s+/).length >= 2) {
            exercise = generateWordBank(word, allItems);
          }
          break;
        case 'reorder':
          if (getPrimaryForm(word.target).split(/\s+/).length >= 2) {
            exercise = generateReorder(word, sameTierPool);
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

  // Smooth pedagogical pacing: place 2 warm-up recognition questions first, then interleave remaining types
  const recognition = exercises.filter((e) => e.type === 'multiple_choice' || e.type === 'fill_blank');
  const activeRecall = exercises.filter((e) => e.type !== 'multiple_choice' && e.type !== 'fill_blank');
  const warmup = recognition.slice(0, 2);
  const restRec = recognition.slice(2);
  const interleaved: Exercise[] = [...warmup];
  let iRec = 0;
  let iAct = 0;
  while (iRec < restRec.length || iAct < activeRecall.length) {
    if (iAct < activeRecall.length) interleaved.push(activeRecall[iAct++]);
    if (iRec < restRec.length) interleaved.push(restRec[iRec++]);
  }
  return interleaved;
}

/* ─── Answer Checking ──────────────────────────────── */

export interface AnswerCheckResult {
  correct: boolean;
  almostCorrect: boolean;
  canonicalAnswer: string;
}

export function checkAnswerWithFeedback(
  exercise: Exercise,
  userAnswer: string
): AnswerCheckResult {
  const normalizeExact = (s: string) =>
    s
      .normalize('NFKC')
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[?!.,;:'"„“]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const normalizeBase = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ωΩ]/g, 'o')
      .replace(/β/g, 'v')
      .replace(/χ/g, 'sh')
      .replace(/þ/g, 'th')
      .replace(/ñ/g, 'ng')
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[?!.,;:'"„“ʼ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const answerExact = normalizeExact(userAnswer);
  const answerBase = normalizeBase(userAnswer);
  const canonicalAnswer = getPrimaryForm(exercise.correctAnswer) || exercise.correctAnswer;

  if (!answerBase) {
    return { correct: false, almostCorrect: false, canonicalAnswer };
  }

  const rawCandidates = [
    exercise.correctAnswer,
    cleanExerciseText(exercise.correctAnswer),
    getPrimaryForm(exercise.correctAnswer),
    ...(exercise.acceptedAnswers || []),
  ];

  const acceptedExact = Array.from(new Set(rawCandidates.map(normalizeExact).filter(Boolean)));
  const acceptedBase = Array.from(new Set(rawCandidates.map(normalizeBase).filter(Boolean)));

  if (acceptedExact.includes(answerExact)) {
    return { correct: true, almostCorrect: false, canonicalAnswer };
  }

  if (acceptedBase.includes(answerBase)) {
    return { correct: true, almostCorrect: true, canonicalAnswer };
  }

  const fuzzyMatch = acceptedBase.some((correct) => {
    const distance = levenshtein(correct, answerBase);
    if (correct.length >= 10) return distance <= 2;
    if (correct.length >= 6) return distance <= 1;
    return false;
  });

  return {
    correct: fuzzyMatch,
    almostCorrect: fuzzyMatch,
    canonicalAnswer,
  };
}

export function checkAnswer(exercise: Exercise, userAnswer: string): boolean {
  return checkAnswerWithFeedback(exercise, userAnswer).correct;
}

export function levenshtein(a: string, b: string): number {
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
