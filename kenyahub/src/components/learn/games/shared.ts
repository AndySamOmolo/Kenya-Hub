import type { WordPair, CourseUnit } from "@/data/courses/types";
import { getPrimaryForm, cleanExerciseText, isCleanLexicalWordPair } from "@/lib/learn-engine";

export interface GameProps {
  allWords: WordPair[];
  languageName: string;
  languageId?: string;
  onAwardXp?: (xp: number) => void;
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

/** Gather and normalize all words from all units/skills for mini-games */
export function getAllWords(units: CourseUnit[]): WordPair[] {
  const words: WordPair[] = [];
  const seenTargets = new Set<string>();
  const seenSources = new Set<string>();

  for (const unit of units) {
    for (const skill of unit.skills) {
      for (const word of skill.words) {
        if (!isCleanLexicalWordPair(word.target, word.source)) continue;
        const target = getPrimaryForm(word.target).trim();
        const source = cleanExerciseText(getPrimaryForm(word.source)).trim();
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
