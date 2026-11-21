// ============================================================
// Exercise Generation Engine
// Generates interactive exercises from skill word/sentence data
// ============================================================

import type { Exercise, ExerciseType, CourseSkill, WordPair } from '../data/courses/types';
import { EXERCISES_PER_LESSON } from '../data/courses/types';

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
    .split(/\s*(?:[/;•|→—–]|\bor\b)\s*/i)[0]
    ?.replace(/\.$/, '')
    .trim();
  return primary || withoutPl || cleaned;
}

const NON_LATIN_OR_TOFU_RE = /[\uFFFD\uE000-\uF8FF\u0370-\u03FF\u0400-\u05FF\u0600-\u06FF\u0900-\u137F\u3000-\u9FFF\uAC00-\uD7AF]/u;

function normalizeComparable(text: string): string {
  return text
    .replace(/ñ/gi, "ng")
    .replace(/ŋ/gi, "ng")
    .replace(/ɲ/gi, "ny")
    .replace(/ɔ/gi, "o")
    .replace(/ɛ/gi, "e")
    .replace(/ɗ/gi, "d")
    .replace(/ɠ/gi, "g")
    .replace(/ɓ/gi, "b")
    .replace(/ʔ/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Transliterate extended African Latin phonemes (ŋ, ɲ, ɔ, ɛ, ɗ, ɠ, ɓ, ʔ, ω, ñ)
 * to ASCII before NFD diacritic stripping — shared by Wordle and answer matching.
 */
export function transliterateToAscii(text: string): string {
  return String(text || "")
    .replace(/[ñŋ]/gi, "ng")
    .replace(/ɲ/gi, "ny")
    .replace(/[ɔωΩ]/gi, "o")
    .replace(/ɛ/gi, "e")
    .replace(/ɗ/gi, "d")
    .replace(/ɠ/gi, "g")
    .replace(/ɓ/gi, "b")
    .replace(/β/gi, "v")
    .replace(/χ/gi, "sh")
    .replace(/þ/gi, "th")
    .replace(/ʔ/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Strip parenthetical/bracketed notes, POS tags, and multi-sense bloat so quiz
 * prompts and choices stay crisp and never leak answers by formatting.
 */
export function cleanQuizGloss(text: string): string {
  if (!text || typeof text !== "string") return "";
  let s = text
    .replace(/„/g, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/,\s*pl\.?\s+.*$/i, "")
    .replace(
      /(?:^|[,;\s])(?:v\.\s*[aint]\.?|v[aint]\.?|n\.|v\.|adj\.|adv\.|prep\.|conj\.|interj\.|pron\.|num\.|pl\.|sg\.|s\.)(?=\s|$|[;,/])/gi,
      " "
    )
    .replace(/\s+/g, " ")
    .trim();

  if (s.includes(";")) {
    const firstSemi = s.split(";").map((p) => p.trim()).find(Boolean);
    if (firstSemi) s = firstSemi;
  }
  if (s.includes("/") && s.length > 24) {
    const firstSlash = s.split("/").map((p) => p.trim()).find(Boolean);
    if (firstSlash) s = firstSlash;
  }

  s = s
    .replace(/^[,;:\-–—/|•]+\s*/, "")
    .replace(/\s*[,;:\-–—/|•.]+$/, "")
    .replace(/\s+/g, " ")
    .trim();

  return s;
}

/**
 * Validate that a word/gloss pair is pure, translated, Latin-script, non-numeric,
 * and concise (<= 55 chars) so target-language and English pools stay 100% clean.
 */
export function isValidQuizPair(word: string, english: string): boolean {
  if (!word || !english) return false;
  if (NON_LATIN_OR_TOFU_RE.test(word) || NON_LATIN_OR_TOFU_RE.test(english)) return false;

  const cleanWord = cleanQuizGloss(word);
  const cleanEng = cleanQuizGloss(english);
  if (cleanWord.length < 2 || cleanEng.length < 2) return false;
  if (cleanWord.length > 45 || cleanEng.length > 55) return false;

  if (/^[\d\s.,/-]+$/.test(cleanWord) || /^[\d\s.,/-]+$/.test(cleanEng)) return false;

  const normWord = normalizeComparable(cleanWord);
  const normEng = normalizeComparable(cleanEng);
  if (!normWord || !normEng || normWord === normEng) return false;

  const both = `${cleanWord} ~~~ ${cleanEng}`;
  if (/[:→•=><\[\]{}*§|"…_]/.test(both) || /(?:\.\s*){2,}/.test(both)) return false;
  if (/\b(vs\.?|pp?\.\s*\d|fn\.\s*\d|Ex\.\s*\d|Ch\.\s*[IVX\d]|Vide\b|cf\.|s\.v\.)/i.test(both)) {
    return false;
  }
  if (/^(?:plur|adj|adv|vid|intens|prep|conj|interj|pron|num|sp|sg|pl)\.?$/i.test(cleanEng)) {
    return false;
  }

  return true;
}

/**
 * Pick distractors that match the correct answer in word count, character length
 * (0.55x-1.65x band), and capitalization/phrase style, deduplicated and free of
 * substring leakage.
 */
export function pickBalancedDistractors(
  correctText: string,
  candidates: string[],
  count: number = 3
): string[] {
  const target = cleanQuizGloss(correctText) || correctText.trim();
  const targetNorm = normalizeComparable(target);
  if (!targetNorm || count <= 0) return [];

  const targetWords = target.split(/\s+/).filter(Boolean).length;
  const targetLen = target.length;
  const targetStartsUpper = /^[A-Z\u00C0-\u024F]/.test(target);
  const targetStartsTo = /^to\s+/i.test(target);
  const targetHasPunct = /[?!]$/.test(target);

  const seenNorm = new Set<string>([targetNorm]);
  const targetStem = getBaseStemKey(target);
  const scored: { text: string; norm: string; score: number }[] = [];

  for (const raw of candidates) {
    if (!raw || typeof raw !== "string") continue;
    if (NON_LATIN_OR_TOFU_RE.test(raw)) continue;
    const cleaned = cleanQuizGloss(raw);
    if (!cleaned || cleaned.length < 2) continue;
    const norm = normalizeComparable(cleaned);
    if (!norm || seenNorm.has(norm)) continue;

    if (
      norm === targetNorm ||
      (norm.length >= 3 && targetNorm.includes(norm)) ||
      (targetNorm.length >= 3 && norm.includes(targetNorm))
    ) {
      continue;
    }

    seenNorm.add(norm);
    const stem = getBaseStemKey(cleaned);
    const stemCollision = stem.length >= 4 && stem === targetStem;

    const candWords = cleaned.split(/\s+/).filter(Boolean).length;
    const wcDiff = Math.abs(candWords - targetWords);
    const wcPenalty = wcDiff === 0 ? 0 : wcDiff === 1 ? 1.5 : 4 + wcDiff * 2.5;

    const lenRatio = cleaned.length / Math.max(targetLen, 1);
    const lenDiff = Math.abs(cleaned.length - targetLen) / Math.max(targetLen, 4);
    const outlierPenalty = lenRatio < 0.55 || lenRatio > 1.65 ? 6 + lenDiff * 3 : 0;

    const candStartsUpper = /^[A-Z\u00C0-\u024F]/.test(cleaned);
    const candStartsTo = /^to\s+/i.test(cleaned);
    const candHasPunct = /[?!]$/.test(cleaned);
    const stylePenalty =
      (targetStartsUpper !== candStartsUpper ? 0.6 : 0) +
      (targetStartsTo !== candStartsTo ? 0.9 : 0) +
      (targetHasPunct !== candHasPunct ? 0.5 : 0) +
      (stemCollision ? 3.0 : 0);

    const score = wcPenalty + lenDiff * 2.0 + outlierPenalty + stylePenalty + Math.random() * 0.15;
    scored.push({ text: cleaned, norm, score });
  }

  scored.sort((a, b) => a.score - b.score);

  const tightPoolSize = Math.min(scored.length, Math.max(count * 3, count + 4));
  const tightPool = shuffle(scored.slice(0, tightPoolSize));

  const picked: string[] = [];
  const pickedNorms: string[] = [];

  for (const item of tightPool) {
    if (picked.length >= count) break;
    const overlapsPicked = pickedNorms.some(
      (pn) =>
        (item.norm.length >= 3 && pn.includes(item.norm)) ||
        (pn.length >= 3 && item.norm.includes(pn))
    );
    if (overlapsPicked) continue;
    picked.push(item.text);
    pickedNorms.push(item.norm);
  }

  if (picked.length < count) {
    for (const item of scored) {
      if (picked.length >= count) break;
      if (!pickedNorms.includes(item.norm)) {
        picked.push(item.text);
        pickedNorms.push(item.norm);
      }
    }
  }

  return picked;
}


/**
 * Check whether a word pair is a clean lexical item suitable for mini-games and exercises
 * (excluding grammatical table headers, section titles, page references, and multi-item compendia).
 */
export function isCleanLexicalWordPair(rawTarget: string, rawSource: string): boolean {
  if (!isValidQuizPair(rawTarget, rawSource)) return false;
  const target = cleanQuizGloss(getPrimaryForm(rawTarget));
  const source = cleanQuizGloss(getPrimaryForm(rawSource));
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

/**
 * Returns true if the primary form of a target entry is a clean single lexical word
 * (suitable for Word Scramble and Wordle mini-games).
 */
export function isSingleWordLexical(raw: string): boolean {
  if (!raw || typeof raw !== 'string') return false;
  const primary = getPrimaryForm(raw).trim();
  if (!primary || /\s/.test(primary)) return false;
  const cleaned = primary.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF']/g, '');
  return cleaned.length >= 3 && cleaned.length <= 14;
}

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
    .replace(/ñ/g, 'ng')
    .replace(/ŋ/g, 'ng')
    .replace(/ɲ/g, 'ny')
    .replace(/ɔ/g, 'o')
    .replace(/ɛ/g, 'e')
    .replace(/ɗ/g, 'd')
    .replace(/ɠ/g, 'g')
    .replace(/ɓ/g, 'b')
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
  const correctVal = cleanQuizGloss(getPrimaryForm(correctWord[field])) || getPrimaryForm(correctWord[field]).trim();
  const otherField = field === 'target' ? 'source' : 'target';
  const correctOtherNorm = normalizeComparable(cleanQuizGloss(getPrimaryForm(correctWord[otherField])));

  const candidatePool = allWords
    .filter((w) => {
      if (!isValidQuizPair(w.target, w.source)) return false;
      const otherNorm = normalizeComparable(cleanQuizGloss(getPrimaryForm(w[otherField])));
      return !correctOtherNorm || otherNorm !== correctOtherNorm;
    })
    .map((w) => cleanQuizGloss(getPrimaryForm(w[field])))
    .filter(Boolean);

  return pickBalancedDistractors(correctVal, candidatePool, count);
}

/* ─── Exercise Generators ──────────────────────────── */

function generateMultipleChoice(word: WordPair, pool: WordPair[]): Exercise {
  const toEnglish = Math.random() > 0.5;
  const primaryTarget = cleanQuizGloss(getPrimaryForm(word.target));
  const primarySource = cleanQuizGloss(getPrimaryForm(word.source));
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
  for (const part of cleanExerciseText(word.target).split(/\s*(?:[/;]|\bor\b)\s*/i)) {
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
  for (const part of cleanExerciseText(word.source).split(/\s*(?:[/;]|\bor\b)\s*/i)) {
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
  const primaryTarget = cleanQuizGloss(getPrimaryForm(word.target));
  const distractors = getDistractors(word, wordPool, 3, 'target');
  const options = shuffle([primaryTarget, ...distractors]);

  const escapedTarget = primaryTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordRegex = new RegExp(`(?<![\\p{L}\\p{N}_])${escapedTarget}(?![\\p{L}\\p{N}_])`, 'iu');
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
    if (!isValidQuizPair(w.target, w.source)) continue;
    const left = cleanQuizGloss(getPrimaryForm(w.target));
    const right = cleanQuizGloss(getPrimaryForm(w.source));
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

/* ─── Crown Level Progression Profiles (Levels 1–5) ── */

export interface LevelProfile {
  level: number;
  label: string;
  subtitle: string;
  teachingMode: 'vocab' | 'sentences' | 'review_optional';
}

const LEVEL_PROFILES: Record<number, LevelProfile> = {
  1: {
    level: 1,
    label: 'Foundations & Recognition',
    subtitle: 'Learn core vocabulary and build recognition with guided choices.',
    teachingMode: 'vocab',
  },
  2: {
    level: 2,
    label: 'Context & Active Recall',
    subtitle: 'Apply words in context phrases and recall meanings without hints.',
    teachingMode: 'sentences',
  },
  3: {
    level: 3,
    label: 'Phrase & Sentence Building',
    subtitle: 'Construct phrases, reorder syntax, and bridge to target production.',
    teachingMode: 'review_optional',
  },
  4: {
    level: 4,
    label: 'Active Target Production',
    subtitle: 'Type translations in the target language with minimal scaffolding.',
    teachingMode: 'review_optional',
  },
  5: {
    level: 5,
    label: 'Mastery Challenge',
    subtitle: 'Full-skill fluency check across vocabulary and sentences.',
    teachingMode: 'review_optional',
  },
};

export function getLevelProfile(level: number = 1): LevelProfile {
  const clamped = Math.max(1, Math.min(5, Math.round(level || 1)));
  return LEVEL_PROFILES[clamped] || LEVEL_PROFILES[1];
}

/**
 * Returns the teaching card deck tailored for a specific Crown Level (1–5):
 * - Level 1: Core vocabulary words (capped to first 12 if a skill is large).
 * - Level 2: Next unseen vocabulary batch if >12 words, OR clean context sentences
 *   (so Level 2 teaches genuinely new context rather than repeating Level 1 cards).
 * - Levels 3–5: Next unseen vocabulary batch if the skill is very large, otherwise
 *   empty array so learners jump directly into higher-difficulty active practice.
 */
export function getTeachingDeckForLevel(
  skill: CourseSkill,
  level: number = 1
): WordPair[] {
  const clamped = Math.max(1, Math.min(5, Math.round(level || 1)));
  const batchSize = 12;
  const words = skill.words || [];

  if (clamped === 1) {
    return words.length > batchSize ? words.slice(0, batchSize) : words;
  }

  // If the skill has additional unseen vocabulary batches for this level, teach them
  const batchOffset = (clamped - 1) * batchSize;
  if (words.length > batchOffset) {
    return words.slice(batchOffset, batchOffset + batchSize);
  }

  // On Level 2, teach clean sentences/context phrases if available (new material vs Level 1)
  if (clamped === 2) {
    const cleanSentences: WordPair[] = (skill.sentences || [])
      .filter((s) => s.target && s.source && isCleanSentencePair(s.target, s.source))
      .map((s) => ({
        target: s.target,
        source: s.source,
        ...(s.pronunciation ? { pronunciation: s.pronunciation } : {}),
        ...(s.audio ? { audio: s.audio } : {}),
        ...(s.audioFile ? { audioFile: s.audioFile } : {}),
        partOfSpeech: 'phrase',
      }));
    if (cleanSentences.length > 0) {
      return cleanSentences.slice(0, batchSize);
    }
  }

  // Levels 3–5 (and Level 2 when no extra batch/sentences exist): skip straight to practice
  return [];
}

/* ─── Main Generator (Level-Aware + Zero-Repeat Queue) ─ */

const LEVEL_EXERCISE_WEIGHTS: Record<
  number,
  { type: ExerciseType; weight: number; minWords: number }[]
> = {
  1: [
    { type: 'multiple_choice', weight: 3.4, minWords: 4 },
    { type: 'match_pairs', weight: 2.0, minWords: 4 },
    { type: 'fill_blank', weight: 2.0, minWords: 4 },
    { type: 'translate_to_english', weight: 1.2, minWords: 1 },
    { type: 'word_bank', weight: 0.8, minWords: 1 },
  ],
  2: [
    { type: 'translate_to_english', weight: 2.6, minWords: 1 },
    { type: 'fill_blank', weight: 2.4, minWords: 4 },
    { type: 'word_bank', weight: 2.2, minWords: 1 },
    { type: 'match_pairs', weight: 1.5, minWords: 4 },
    { type: 'multiple_choice', weight: 1.0, minWords: 4 },
    { type: 'reorder', weight: 1.2, minWords: 1 },
  ],
  3: [
    { type: 'word_bank', weight: 2.6, minWords: 1 },
    { type: 'reorder', weight: 2.4, minWords: 1 },
    { type: 'translate_to_target', weight: 2.2, minWords: 1 },
    { type: 'fill_blank', weight: 1.8, minWords: 4 },
    { type: 'translate_to_english', weight: 1.4, minWords: 1 },
    { type: 'match_pairs', weight: 1.0, minWords: 4 },
  ],
  4: [
    { type: 'translate_to_target', weight: 3.4, minWords: 1 },
    { type: 'reorder', weight: 2.4, minWords: 1 },
    { type: 'word_bank', weight: 2.0, minWords: 1 },
    { type: 'translate_to_english', weight: 1.6, minWords: 1 },
    { type: 'fill_blank', weight: 1.0, minWords: 4 },
  ],
  5: [
    { type: 'translate_to_target', weight: 3.8, minWords: 1 },
    { type: 'reorder', weight: 2.6, minWords: 1 },
    { type: 'fill_blank', weight: 1.6, minWords: 4 },
    { type: 'word_bank', weight: 1.6, minWords: 1 },
    { type: 'translate_to_english', weight: 1.4, minWords: 1 },
  ],
};

function rotateArray<T>(arr: T[], offset: number): T[] {
  if (arr.length <= 1) return [...arr];
  const shift = ((offset % arr.length) + arr.length) % arr.length;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

export function generateExercises(
  skill: CourseSkill,
  count: number = EXERCISES_PER_LESSON,
  level: number = 1
): Exercise[] {
  const clampedLevel = Math.max(1, Math.min(5, Math.round(level || 1)));
  const filteredWords = skill.words.filter((w) => isCleanLexicalWordPair(w.target, w.source));
  const allWords = filteredWords.length >= 4 ? filteredWords : [...skill.words];

  // Filter sentences strictly through isCleanSentencePair so academic/truncated sentences never leak
  const sentenceItems: WordPair[] = (skill.sentences || [])
    .filter((s) => s.target && s.source && isCleanSentencePair(s.target, s.source))
    .map((s) => ({
      target: s.target,
      source: s.source,
      ...(s.pronunciation ? { pronunciation: s.pronunciation } : {}),
      ...(s.audio ? { audio: s.audio } : {}),
      ...(s.audioFile ? { audioFile: s.audioFile } : {}),
    }));

  const allItems = [...allWords, ...sentenceItems];
  if (allItems.length === 0) return [];

  // Smart cap so compact skills (e.g. 4–5 words) never loop the same word 4 times
  const targetCount = Math.min(count, Math.max(6, Math.min(count, allItems.length * 2)));

  // Deterministic level-sliced authoredExercises so Level 1 & Level 2 don't repeat identical authored questions
  const validAuthored = (skill.authoredExercises || []).filter(isValidExercise);
  const authoredCap =
    allItems.length >= 4
      ? Math.min(clampedLevel <= 2 ? 4 : 3, Math.floor(targetCount * 0.35))
      : targetCount;
  const authoredSliceStart =
    validAuthored.length > 0 ? ((clampedLevel - 1) * Math.max(1, authoredCap)) % validAuthored.length : 0;
  const rotatedAuthored = rotateArray(validAuthored, authoredSliceStart);
  // On higher levels (3-5), deprioritize basic multiple_choice authored questions so progression feels harder
  const levelFilteredAuthored =
    clampedLevel >= 4
      ? rotatedAuthored.filter((ex) => ex.type !== 'multiple_choice')
      : rotatedAuthored;
  const exercises: Exercise[] = levelFilteredAuthored.slice(0, authoredCap);

  const usedExercises = new Set(
    exercises.map((exercise) => `${exercise.type}:${exercise.prompt}:${exercise.correctAnswer}`)
  );
  const usedTypesByWord = new Map<string, Set<ExerciseType>>();
  for (const ex of exercises) {
    const k = ex.sourceWord?.target?.trim().toLowerCase();
    if (k) {
      if (!usedTypesByWord.has(k)) usedTypesByWord.set(k, new Set());
      usedTypesByWord.get(k)!.add(ex.type);
    }
  }

  if (exercises.length >= targetCount) return exercises.slice(0, targetCount);

  const weights = LEVEL_EXERCISE_WEIGHTS[clampedLevel] || LEVEL_EXERCISE_WEIGHTS[1];
  const eligible = weights.filter((e) => allItems.length >= e.minWords);
  const totalWeight = eligible.reduce((s, e) => s + e.weight, 0);

  // Build level-rotated no-repeat round-robin queues so EVERY unique word/sentence is practiced
  // once before ANY word can appear a second time (and Level 2 starts on different words than Level 1).
  const baseLexical = rotateArray(
    allWords.length >= 4 ? allWords : allItems,
    (clampedLevel - 1) * Math.max(2, Math.floor(allWords.length / 3))
  );
  const baseSentences = rotateArray(sentenceItems, clampedLevel - 1);

  let lexicalQueue: WordPair[] = shuffle(baseLexical);
  let sentenceQueue: WordPair[] = shuffle(baseSentences);
  let matchPairsCount = exercises.filter((e) => e.type === 'match_pairs').length;

  const popNextWord = (preferSentence: boolean): WordPair => {
    if (preferSentence && sentenceItems.length > 0) {
      if (sentenceQueue.length === 0) sentenceQueue = shuffle(baseSentences);
      return sentenceQueue.shift()!;
    }
    if (lexicalQueue.length === 0) lexicalQueue = shuffle(baseLexical);
    return lexicalQueue.shift()!;
  };

  const maxAttempts = (targetCount - exercises.length) * 8;
  let attempts = 0;

  while (exercises.length < targetCount && attempts < maxAttempts) {
    attempts++;

    let r = Math.random() * totalWeight;
    let selectedType: ExerciseType = eligible[0]?.type || 'multiple_choice';
    for (const e of eligible) {
      r -= e.weight;
      if (r <= 0) {
        selectedType = e.type;
        break;
      }
    }

    // Cap match_pairs to at most 1 per lesson (2 on Level 1 if large skill)
    if (selectedType === 'match_pairs' && matchPairsCount >= (clampedLevel === 1 && allWords.length >= 10 ? 2 : 1)) {
      continue;
    }

    const preferSentence =
      (selectedType === 'reorder' || selectedType === 'word_bank' || (clampedLevel >= 2 && selectedType === 'translate_to_english')) &&
      sentenceItems.length > 0;
    const word = popNextWord(preferSentence);
    const wordKey = word.target.trim().toLowerCase();

    // Never repeat the exact same exercise type on the same word inside one lesson
    if (selectedType !== 'match_pairs' && usedTypesByWord.get(wordKey)?.has(selectedType)) {
      continue;
    }

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
      if (exercise.type === 'match_pairs') {
        matchPairsCount++;
      } else {
        if (!usedTypesByWord.has(wordKey)) usedTypesByWord.set(wordKey, new Set());
        usedTypesByWord.get(wordKey)!.add(exercise.type);
      }
      exercises.push(exercise);
    }
  }

  // Smooth pedagogical pacing + prevent back-to-back exercises on the exact same word
  const recognition = exercises.filter((e) => e.type === 'multiple_choice' || e.type === 'fill_blank');
  const activeRecall = exercises.filter((e) => e.type !== 'multiple_choice' && e.type !== 'fill_blank');
  const warmupCount = clampedLevel === 1 ? 2 : clampedLevel === 2 ? 1 : 0;
  const warmup = recognition.slice(0, warmupCount);
  const restRec = recognition.slice(warmupCount);
  const interleaved: Exercise[] = [...warmup];
  let iRec = 0;
  let iAct = 0;
  while (iRec < restRec.length || iAct < activeRecall.length) {
    if (iAct < activeRecall.length) interleaved.push(activeRecall[iAct++]);
    if (iRec < restRec.length) interleaved.push(restRec[iRec++]);
  }

  // Final pass: separate any adjacent exercises targeting the exact same word
  for (let i = 1; i < interleaved.length; i++) {
    const prevKey = interleaved[i - 1].sourceWord?.target?.trim().toLowerCase();
    const curKey = interleaved[i].sourceWord?.target?.trim().toLowerCase();
    if (prevKey && curKey && prevKey === curKey) {
      const swapIdx = interleaved.findIndex(
        (candidate, j) =>
          j > i &&
          candidate.sourceWord?.target?.trim().toLowerCase() !== prevKey
      );
      if (swapIdx !== -1) {
        [interleaved[i], interleaved[swapIdx]] = [interleaved[swapIdx], interleaved[i]];
      }
    }
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
  const stripPunctAndSpace = (s: string) =>
    s
      .replace(/\(.*?\)|\[.*?\]|\{.*?\}/g, '')
      .replace(/[?!.,;:'"„“”‘’ʼ\-–—]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const normalizeExact = (s: string) =>
    stripPunctAndSpace(s.normalize('NFKC').toLowerCase());

  const normalizeBase = (s: string) =>
    stripPunctAndSpace(transliterateToAscii(s).toLowerCase());

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
  if (exercise.type === 'translate_to_english') {
    for (const c of [...rawCandidates]) {
      const stripped = c.trim().replace(/^(?:to|a|an|the)\s+/i, '');
      if (stripped && stripped !== c.trim()) rawCandidates.push(stripped);
    }
  }

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
