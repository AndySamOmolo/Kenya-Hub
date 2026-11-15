/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useMemo, useState } from "react";
import { Zap } from "lucide-react";
import { type GameProps, shuffle } from "./shared";

export function VocabQuizGame({ allWords, languageName, onAwardXp }: GameProps) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Shuffle words on mount so Round 1 is randomized every time the game opens
  const shuffledWords = useMemo(() => shuffle(allWords), [allWords]);

  const currentWord =
    shuffledWords.length > 0 ? shuffledWords[round % shuffledWords.length] : null;

  const options = useMemo(() => {
    if (!currentWord || shuffledWords.length < 2) return [];
    const distractors = shuffle(
      shuffledWords.filter((w) => w.target.toLowerCase() !== currentWord.target.toLowerCase())
    )
      .slice(0, 3)
      .map((w) => w.target);
    return shuffle([currentWord.target, ...distractors]);
  }, [currentWord, shuffledWords, round]);

  const handleAnswer = (ans: string) => {
    if (feedback !== null || !currentWord) return;
    const isRight = ans === currentWord.target;
    setFeedback(ans);
    if (isRight) {
      setScore((s) => s + 15);
      onAwardXp?.(15);
    }
    setTimeout(() => {
      setFeedback(null);
      setRound((r) => r + 1);
    }, 700);
  };

  if (!currentWord) {
    return (
      <p className="text-center text-sm text-text-muted">
        Not enough vocabulary in this course for Vocabulary Blitz.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Zap className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs text-text-muted">Question {round + 1}</span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center">
        <p className="text-xs text-text-muted mb-2">How do you say in {languageName}?</p>
        <p className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-gold">
          &ldquo;{currentWord.source}&rdquo;
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          let btnStyle = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (feedback !== null) {
            if (opt === currentWord.target) {
              btnStyle = "border-kenya-green bg-kenya-green/10 text-kenya-green font-bold";
            } else if (feedback === opt) {
              btnStyle = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={opt}
              disabled={feedback !== null}
              onClick={() => handleAnswer(opt)}
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
