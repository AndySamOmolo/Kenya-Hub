/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  Clock,
  Delete,
  Flame,
  Grid3X3,
  Hash,
  RotateCcw,
  Shuffle,
  Star,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import { type GameProps, shuffle, pickRandom } from "./shared";

export function RiddleGame({ allWords, languageName }: GameProps) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const sampleRiddles = useMemo(() => [
    { riddle: "Nyumba yangu haina mlango", answer: "An egg (Yai)" },
    { riddle: "Hutembea na mguu mmoja", answer: "A mushroom (Uyoga)" },
    { riddle: "Akisimama ana urefu, akikaa hana", answer: "A walking stick (Mti)" },
    { riddle: "Nikikata siachi alama", answer: "Water (Maji)" },
    { riddle: "Kila niendapo ananifuata", answer: "My shadow (Kivuli)" },
    { riddle: "Hana miguu lakini anakimbia", answer: "A river (Mto)" },
  ], []);

  const currentRiddle = sampleRiddles[round % sampleRiddles.length];
  const options = useMemo(() => {
    const distractors = sampleRiddles
      .filter((r) => r.answer !== currentRiddle.answer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((r) => r.answer);
    return [currentRiddle.answer, ...distractors].sort(() => Math.random() - 0.5);
  }, [currentRiddle, sampleRiddles]);

  const handlePick = (ans: string) => {
    if (feedback !== null) return;
    const isRight = ans === currentRiddle.answer;
    setFeedback(ans);
    if (isRight) setScore((s) => s + 20);
    setTimeout(() => {
      setFeedback(null);
      setRound((r) => r + 1);
    }, 800);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs text-text-muted">Round {round + 1}</span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center">
        <p className="text-xs text-text-muted mb-2">Traditional Kenyan Riddle</p>
        <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-text-primary">
          &ldquo;{currentRiddle.riddle}&rdquo;
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          let btnStyle = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (feedback !== null) {
            if (opt === currentRiddle.answer) {
              btnStyle = "border-kenya-green bg-kenya-green/10 text-kenya-green font-bold";
            } else if (feedback === opt) {
              btnStyle = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={opt}
              disabled={feedback !== null}
              onClick={() => handlePick(opt)}
              className={`rounded-xl border-2 p-4 text-left text-sm font-medium transition-all active:scale-[0.98] ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

