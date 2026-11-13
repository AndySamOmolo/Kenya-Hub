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

export function SpeedMatchGame({ allWords, languageName }: GameProps) {
  const GAME_DURATION = 60;

  const [gameState, setGameState] = useState<"ready" | "playing" | "done">("ready");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateRound = useCallback(() => {
    const word = pickRandom(allWords);
    const distractors = shuffle(
      allWords.filter(
        (w) => w.source.toLowerCase() !== word.source.toLowerCase()
      )
    )
      .slice(0, 3)
      .map((w) => w.source);
    setCurrentWord(word);
    setOptions(shuffle([word.source, ...distractors]));
  }, [allWords]);

  const startGame = () => {
    if (allWords.length === 0) return;
    setGameState("playing");
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(GAME_DURATION);
    setTotal(0);
    setCorrect(0);
    generateRound();

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setGameState("done");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAnswer = (answer: string) => {
    if (!currentWord || gameState !== "playing") return;
    setTotal((t) => t + 1);

    const isCorrect =
      answer.toLowerCase() === currentWord.source.toLowerCase();

    if (isCorrect) {
      const newStreak = streak + 1;
      const multiplier = newStreak >= 5 ? 3 : newStreak >= 3 ? 2 : 1;
      setScore((s) => s + 10 * multiplier);
      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));
      setCorrect((c) => c + 1);
      setFlash("correct");
    } else {
      setStreak(0);
      setFlash("wrong");
    }

    setTimeout(() => {
      setFlash(null);
      generateRound();
    }, 200);
  };

  if (gameState === "ready") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex justify-center mb-4"><DynamicIcon emoji="⚡" className="w-14 h-14 text-gold" /></div>
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
          Speed Match
        </h3>
        <p className="mt-2 text-sm text-text-secondary max-w-sm">
          Match {languageName} words to their English translations. You have {GAME_DURATION} seconds. Streaks give bonus points!
        </p>
        {allWords.length === 0 && (
          <p className="mt-3 text-sm text-text-muted">
            This game will be available when this course has vocabulary.
          </p>
        )}
        <button
          onClick={startGame}
          disabled={allWords.length === 0}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:hover:brightness-110 mx-auto"
        >
          <span>Start Game</span> <DynamicIcon emoji="🚀" className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (gameState === "done") {
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="flex justify-center mb-4 animate-bounce-in"><DynamicIcon emoji="🏆" className="w-14 h-14 text-gold" /></div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Time&apos;s Up!
        </h3>

        <div className="mt-5 grid grid-cols-3 gap-3 w-full max-w-sm">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <Zap className="mx-auto mb-1 h-5 w-5 text-gold" />
            <div className="text-xl font-bold text-gold">{score}</div>
            <div className="text-[0.6rem] text-text-muted">Score</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <Flame className="mx-auto mb-1 h-5 w-5 text-orange-400" />
            <div className="text-xl font-bold text-orange-400">{bestStreak}</div>
            <div className="text-[0.6rem] text-text-muted">Best Streak</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <Star className="mx-auto mb-1 h-5 w-5 text-kenya-green" />
            <div className="text-xl font-bold text-kenya-green">{accuracy}%</div>
            <div className="text-[0.6rem] text-text-muted">Accuracy</div>
          </div>
        </div>

        <button
          onClick={startGame}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Timer and score */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 rounded-full border px-3 py-1.5 ${
            timeLeft <= 10 ? "border-red-400/50 bg-red-400/5" : "border-border bg-bg-card"
          }`}>
            <Clock className={`h-3.5 w-3.5 ${timeLeft <= 10 ? "text-red-400 animate-countdown-pulse" : "text-text-muted"}`} />
            <span className={`text-sm font-bold tabular-nums ${timeLeft <= 10 ? "text-red-400" : "text-text-primary"}`}>
              {timeLeft}s
            </span>
          </div>
          {streak >= 3 && (
            <div className="flex items-center gap-1 rounded-full bg-orange-400/10 px-2.5 py-1">
              <Flame className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-xs font-bold text-orange-400">
                {streak}x
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5">
          <Zap className="h-3.5 w-3.5 text-gold" />
          <span className="text-sm font-bold text-gold">{score}</span>
        </div>
      </div>

      {/* Word to translate */}
      {currentWord && (
        <div
          className={`mb-5 rounded-2xl border-2 p-6 text-center transition-all ${
            flash === "correct"
              ? "border-kenya-green bg-kenya-green/5"
              : flash === "wrong"
              ? "border-red-400 bg-red-400/5 animate-shake"
              : "border-border bg-bg-card"
          }`}
        >
          <p className="text-xs text-text-muted mb-2">
            What does this mean?
          </p>
          <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary sm:text-3xl">
            {currentWord.target}
          </p>
        </div>
      )}

      {/* Options */}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className="rounded-xl border-2 border-border bg-bg-card px-4 py-3.5 text-left text-sm font-medium text-text-primary transition-all active:scale-[0.97] active:border-gold sm:hover:border-gold/50 sm:py-3"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

