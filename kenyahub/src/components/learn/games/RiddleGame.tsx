/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import { getRiddlesForLanguage, type RiddleItem } from "@/data/courses/riddles-bank";
import { type GameProps, shuffle } from "./shared";

export function RiddleGame({ languageName, languageId, onAwardXp }: GameProps) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const riddlesPool = useMemo<RiddleItem[]>(() => {
    const items = getRiddlesForLanguage(languageId, languageName);
    return shuffle(items);
  }, [languageName, languageId]);

  const currentRiddle = riddlesPool[round % Math.max(1, riddlesPool.length)];
  const options = useMemo(() => {
    if (!currentRiddle) return [];
    const distractors = shuffle(
      riddlesPool.filter((r) => r.answer.toLowerCase() !== currentRiddle.answer.toLowerCase())
    )
      .slice(0, 3)
      .map((r) => r.answer);
    return shuffle([currentRiddle.answer, ...distractors]);
  }, [currentRiddle, riddlesPool, round]);

  const handlePick = (ans: string) => {
    if (feedback !== null || !currentRiddle) return;
    const isRight = ans === currentRiddle.answer;
    setFeedback(ans);
    if (isRight) {
      setScore((s) => s + 20);
      onAwardXp?.(20);
    }
    setTimeout(() => {
      setFeedback(null);
      setRound((r) => r + 1);
    }, 800);
  };

  if (!currentRiddle) return null;

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
        <p className="text-xs text-gold font-medium mb-1.5">{currentRiddle.origin}</p>
        <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-text-primary mb-2">
          &ldquo;{currentRiddle.riddle}&rdquo;
        </p>
        <p className="text-xs text-text-secondary italic">{currentRiddle.translation}</p>
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
              className={`rounded-xl border-2 p-4 text-left text-sm font-medium transition-all active:scale-[0.98] cursor-pointer ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
