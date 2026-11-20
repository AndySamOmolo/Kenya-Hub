import type { WordPair, CourseUnit, UserProgress, GameStats } from "@/data/courses/types";
import {
  getPrimaryForm,
  isCleanLexicalWordPair,
  cleanQuizGloss,
  isValidQuizPair,
  pickBalancedDistractors,
} from "@/lib/learn-engine";

export { cleanQuizGloss, isValidQuizPair, pickBalancedDistractors };

export type VocabScopeMode = "learned" | "unit" | "course" | "dictionary";

export interface GameProps {
  allWords: WordPair[];
  courseUnits?: CourseUnit[];
  allUnits?: CourseUnit[];
  languageName: string;
  languageId?: string;
  progress?: UserProgress;
  onAwardXp?: (xp: number, sessionComplete?: boolean) => void;
  onRecordWordResult?: (word: WordPair, correct: boolean) => void;
  onUpdateGameStats?: (updater: (prev: GameStats) => GameStats) => void;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Deterministic daily seed PRNG (Mulberry32) for Daily Wordle / Challenge */
export function seededRandom(seedStr: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function () {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Check if a word entry is strictly a single lexical word (no spaces or multi-word phrases) */
export function isSingleWordLexical(rawTarget: string): boolean {
  const primary = getPrimaryForm(rawTarget).trim();
  if (!primary) return false;
  // Reject multi-word phrases so Wordle & Scramble never fuse or chop phrases
  if (/\s/.test(primary)) return false;
  return true;
}

/** Gather and normalize all words from given units/skills for mini-games */
export function getAllWords(units: CourseUnit[]): WordPair[] {
  const words: WordPair[] = [];
  const seenTargets = new Set<string>();
  const seenSources = new Set<string>();

  for (const unit of units) {
    for (const skill of unit.skills) {
      for (const word of skill.words) {
        if (!isCleanLexicalWordPair(word.target, word.source) || !isValidQuizPair(word.target, word.source)) continue;
        const target = cleanQuizGloss(getPrimaryForm(word.target));
        const source = cleanQuizGloss(getPrimaryForm(word.source));
        const tKey = target.toLowerCase();
        const sKey = source.toLowerCase();
        if (target && source && !seenTargets.has(tKey) && !seenSources.has(sKey)) {
          seenTargets.add(tKey);
          seenSources.add(sKey);
          words.push({
            ...word,
            target,
            source,
          });
        }
      }
    }
  }
  return words;
}

/**
 * Filter word pool according to the 4-tier Vocabulary Scope bar:
 * - "learned": words the learner has practiced or in unlocked/completed skills (falls back to Unit 1 if < 12)
 * - "unit": words from the selected unit ID
 * - "course": core pedagogical course units only (excluding the 2,000+ raw dictionary appendix)
 * - "dictionary": full combined course + dictionary corpus
 */
export function getScopedWords(
  allUnits: CourseUnit[],
  courseUnits: CourseUnit[],
  scope: VocabScopeMode,
  selectedUnitId: string,
  progress?: UserProgress
): WordPair[] {
  const coreUnits = courseUnits.length > 0 ? courseUnits : allUnits.filter((u) => !u.id.startsWith("dict-unit-"));
  const coreWords = getAllWords(coreUnits.length > 0 ? coreUnits : allUnits);

  if (scope === "dictionary") {
    return getAllWords(allUnits);
  }

  if (scope === "course") {
    return coreWords.length >= 8 ? coreWords : getAllWords(allUnits);
  }

  if (scope === "unit") {
    const unit = allUnits.find((u) => u.id === selectedUnitId) || coreUnits[0] || allUnits[0];
    if (unit) {
      const unitWords = getAllWords([unit]);
      if (unitWords.length >= 6) return unitWords;
    }
    return coreWords;
  }

  // scope === "learned"
  if (progress) {
    const learnedSet = new Set(progress.wordsLearned.map((w) => w.toLowerCase().trim()));
    const reviewSet = new Set(
      progress.reviewQueue.map((r) =>
        (r.word || r.sourceWord?.target || r.answer).toLowerCase().trim()
      )
    );
    const completedSkillIds = new Set(
      Object.entries(progress.skillLevels)
        .filter(([, lvl]) => lvl >= 1)
        .map(([id]) => id)
    );

    const pool: WordPair[] = [];
    const seen = new Set<string>();

    for (const u of coreUnits) {
      for (const sk of u.skills) {
        const skillActive = completedSkillIds.has(sk.id);
        for (const w of sk.words) {
          if (!isCleanLexicalWordPair(w.target, w.source) || !isValidQuizPair(w.target, w.source)) continue;
          const target = cleanQuizGloss(getPrimaryForm(w.target));
          const source = cleanQuizGloss(getPrimaryForm(w.source));
          const tKey = target.toLowerCase();
          if (
            target &&
            source &&
            !seen.has(tKey) &&
            (learnedSet.has(tKey) || learnedSet.has(w.target.toLowerCase()) || reviewSet.has(tKey) || skillActive)
          ) {
            seen.add(tKey);
            pool.push({ ...w, target, source });
          }
        }
      }
    }

    if (pool.length >= 10) {
      return pool;
    }
  }

  // Fallback for brand-new learners: Unit 1 foundational words
  if (coreUnits[0]) {
    const u1Words = getAllWords([coreUnits[0]]);
    if (u1Words.length >= 8) return u1Words;
  }
  return coreWords.slice(0, 60);
}

/**
 * Adaptive SRS-weighted word picker:
 * Prioritizes words in the learner's SRS reviewQueue (box 1-2 or high wrongCount)
 * ~35% of the time when available.
 */
export function pickAdaptiveWord<T extends WordPair>(
  pool: T[],
  progress?: UserProgress,
  excludeTargets?: Set<string>
): T {
  const candidates = excludeTargets
    ? pool.filter((w) => !excludeTargets.has(w.target.toLowerCase()))
    : pool;
  const activePool = candidates.length > 0 ? candidates : pool;

  if (progress && progress.reviewQueue.length > 0 && Math.random() < 0.38) {
    const weakSet = new Set(
      progress.reviewQueue
        .filter((r) => (r.box ?? 1) <= 2 || (r.wrongCount ?? 0) > 0)
        .map((r) =>
          getPrimaryForm(r.word || r.sourceWord?.target || r.answer)
            .toLowerCase()
            .trim()
        )
    );
    const weakMatches = activePool.filter((w) => weakSet.has(w.target.toLowerCase()));
    if (weakMatches.length > 0) {
      return pickRandom(weakMatches);
    }
  }
  return pickRandom(activePool);
}

/** Traditional Kenyan Riddle Call-and-Response Headers by Language */
export const RIDDLE_CALL_RESPONSE: Record<
  string,
  { challenger: string; audience: string; culturalName: string }
> = {
  swahili: { challenger: "Kitendawili!", audience: "Tega!", culturalName: "Vitendawili vya Kiswahili" },
  kikuyu: { challenger: "Gwano!", audience: "Kwata!", culturalName: "Ndai cia Gĩkũyũ" },
  luo: { challenger: "Minai!", audience: "Kwata!", culturalName: "Ngero mag Dholuo" },
  luhya: { challenger: "Minai!", audience: "Kwata!", culturalName: "Kiminaayi / Ebitandawili" },
  kalenjin: { challenger: "Tangoch!", audience: "Choo!", culturalName: "Tangochikab Kalenjin" },
  kamba: { challenger: "Ndai!", audience: "Kwata!", culturalName: "Ndai sya Kĩkamba" },
  kisii: { challenger: "Egetandawili!", audience: "Tega!", culturalName: "Ebitandawili bia Ekegusii" },
  meru: { challenger: "Ndaĩ!", audience: "Kwata!", culturalName: "Ndaĩ cia Kĩmĩĩrũ" },
  embu: { challenger: "Ndaĩ!", audience: "Kwata!", culturalName: "Ndaĩ cia Kĩembu" },
  maasai: { challenger: "Oyet!", audience: "E-ton!", culturalName: "Il-oyeti loo l-Maasai" },
  samburu: { challenger: "Oyet!", audience: "E-ton!", culturalName: "Il-oyeti loo Sampur" },
  ilchamus: { challenger: "Oyet!", audience: "E-ton!", culturalName: "Il-oyeti loo Ilchamus" },
  somali: { challenger: "Halxiraale!", audience: "Furo!", culturalName: "Halxiraale Soomaaliyeed" },
  borana: { challenger: "Hibboo!", audience: "Hibib!", culturalName: "Hibboo Booranaa" },
  rendille: { challenger: "Halxiraale!", audience: "Furo!", culturalName: "Halxiraale Rendille" },
  daasanach: { challenger: "Hibboo!", audience: "Hibib!", culturalName: "Daasanach Oral Riddles" },
  mijikenda: { challenger: "Chondoni!", audience: "Dekeha!", culturalName: "Chondoni za Kimijikenda" },
  pokomo: { challenger: "Chondoni!", audience: "Tega!", culturalName: "Chondoni za Kipokomo" },
  taita: { challenger: "Ndai!", audience: "Tega!", culturalName: "Ndai za Kidaw'ida" },
  taveta: { challenger: "Ndai!", audience: "Tega!", culturalName: "Ndai za Kitaveta" },
  turkana: { challenger: "Ng'akiro!", audience: "Toma!", culturalName: "Ng'aturkana Riddles" },
  pokot: { challenger: "Tiangoi!", audience: "Choo!", culturalName: "Tiangoi pökoot" },
  teso: { challenger: "Awaragasia!", audience: "Kobia!", culturalName: "Awaragasia nu Ateso" },
};
