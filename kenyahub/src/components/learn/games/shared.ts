import type { WordPair, CourseUnit } from "@/data/courses/types";

export interface GameProps {
  allWords: WordPair[];
  languageName: string;
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

/** Gather all words from all units/skills */
export function getAllWords(units: CourseUnit[]): WordPair[] {
  const words: WordPair[] = [];
  for (const unit of units) {
    for (const skill of unit.skills) {
      words.push(
        ...skill.words.filter((word) => {
          const target = word.target.trim();
          const source = word.source.trim();
          return (
            target.length >= 2 &&
            target.length <= 40 &&
            source.length > 0 &&
            !source.includes(":") &&
            !target.includes("→") &&
            !target.startsWith("-")
          );
        })
      );
    }
  }
  return Array.from(
    new Map(words.map((word) => [`${word.target}:${word.source}`, word])).values()
  );
}
