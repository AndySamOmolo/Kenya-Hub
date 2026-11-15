import type { WordPair, CourseUnit } from "@/data/courses/types";
import { getPrimaryForm, cleanExerciseText } from "@/lib/learn-engine";

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
  for (const unit of units) {
    for (const skill of unit.skills) {
      for (const word of skill.words) {
        const target = getPrimaryForm(word.target).trim();
        const source = getPrimaryForm(word.source).trim();
        if (
          target.length >= 2 &&
          target.length <= 36 &&
          source.length > 0 &&
          source.length <= 60 &&
          !source.includes(":") &&
          !target.includes("→") &&
          !target.startsWith("-")
        ) {
          words.push({
            ...word,
            target,
            source: cleanExerciseText(source),
          });
        }
      }
    }
  }
  return Array.from(
    new Map(words.map((word) => [`${word.target.toLowerCase()}:${word.source.toLowerCase()}`, word])).values()
  );
}
