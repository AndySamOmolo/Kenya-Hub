/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Flame, Heart, RotateCcw, Zap } from "lucide-react";
import {
  playCorrectSfx,
  playWrongSfx,
  playStreakSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle } from "./shared";

export function VocabQuizGame({
  allWords,
  languageName,
  onAwardXp,
  onRecordWordResult,
  onUpdateGameStats,
}: GameProps) {
  const MAX_LIVES = 3;
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [untimed, setUntimed] = useState(false);
  const [timeLeftMs, setTimeLeftMs] = useState(7000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const awardedRef = useRef(false);

  // Accelerating shot clock: 7.0s (Q1-5) -> 5.0s (Q6-12) -> 3.5s (Q13+)
  const maxShotClockMs = round < 5 ? 7000 : round < 12 ? 5000 : 3500;

  const shuffledWords = useMemo(
    () => shuffle(allWords),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allWords, sessionSeed]
  );

  const currentWord =
    shuffledWords.length > 0
      ? shuffledWords[round % shuffledWords.length]
      : null;

  const isReverse = round % 2 === 1;

  const options = useMemo(() => {
    if (!currentWord || shuffledWords.length < 2) return [];
    if (!isReverse) {
      const seen = new Set<string>([currentWord.target.toLowerCase()]);
      const distractors: string[] = [];
      for (const w of shuffle(shuffledWords)) {
        if (
          !seen.has(w.target.toLowerCase()) &&
          w.source.toLowerCase() !== currentWord.source.toLowerCase()
        ) {
          seen.add(w.target.toLowerCase());
          distractors.push(w.target);
          if (distractors.length >= 3) break;
        }
      }
      return shuffle([currentWord.target, ...distractors]);
    } else {
      const seen = new Set<string>([currentWord.source.toLowerCase()]);
      const distractors: string[] = [];
      for (const w of shuffle(shuffledWords)) {
        if (
          !seen.has(w.source.toLowerCase()) &&
          w.target.toLowerCase() !== currentWord.target.toLowerCase()
        ) {
          seen.add(w.source.toLowerCase());
          distractors.push(w.source);
          if (distractors.length >= 3) break;
        }
      }
      return shuffle([currentWord.source, ...distractors]);
    }
  }, [currentWord, shuffledWords, isReverse]);

  const triggerLossOfLife = useCallback(
    (chosenAns: string) => {
      if (timerRef.current) clearInterval(timerRef.current);
      playWrongSfx();
      setFeedback(chosenAns);
      setStreak(0);
      if (currentWord) onRecordWordResult?.(currentWord, false);

      const nextLives = lives - 1;
      setLives(nextLives);
      setTimeout(() => {
        setFeedback(null);
        if (nextLives <= 0) {
          setGameOver(true);
        } else {
          setRound((r) => r + 1);
        }
      }, 750);
    },
    [lives, currentWord, onRecordWordResult]
  );

  // Per-question shot clock timer (pauses/disables when untimed mode is enabled - WCAG 2.2.1 A-06)
  useEffect(() => {
    if (untimed || gameOver || feedback !== null || !currentWord) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setTimeLeftMs(maxShotClockMs);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeftMs((prev) => {
        if (prev <= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          triggerLossOfLife("__TIMEOUT__");
          return 0;
        }
        return prev - 100;
      });
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [untimed, round, gameOver, feedback, currentWord, maxShotClockMs, triggerLossOfLife]);

  // Session XP award once on game over
  useEffect(() => {
    if (gameOver && !awardedRef.current) {
      awardedRef.current = true;
      playCelebrationSfx();
      const earnedXp = Math.min(60, Math.max(15, round * 3));
      onAwardXp?.(earnedXp);
      onUpdateGameStats?.((prev) => ({
        ...prev,
        survivalBestRun: Math.max(prev.survivalBestRun, round),
      }));
    }
  }, [gameOver, round, onAwardXp, onUpdateGameStats]);

  const handleAnswer = (ans: string) => {
    if (feedback !== null || !currentWord || gameOver) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const expected = isReverse ? currentWord.source : currentWord.target;
    const isRight = ans === expected;
    setFeedback(ans);

    if (isRight) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setBestStreak((b) => Math.max(b, nextStreak));
      const speedBonus = !untimed && timeLeftMs > maxShotClockMs * 0.5 ? 5 : 0;
      setScore((s) => s + 15 + speedBonus);
      onRecordWordResult?.(currentWord, true);
      if (nextStreak > 0 && nextStreak % 5 === 0) playStreakSfx();
      else playCorrectSfx();

      setTimeout(() => {
        setFeedback(null);
        setRound((r) => r + 1);
      }, 550);
    } else {
      triggerLossOfLife(ans);
    }
  };

  const restartRun = () => {
    awardedRef.current = false;
    setLives(MAX_LIVES);
    setScore(0);
    setRound(0);
    setStreak(0);
    setBestStreak(0);
    setFeedback(null);
    setGameOver(false);
    setSessionSeed((s) => s + 1);
  };

  if (!currentWord) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough vocabulary in this course for Survival Blitz.
      </p>
    );
  }

  if (gameOver) {
    const earnedXp = Math.min(60, Math.max(15, round * 3));
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🔥" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Survival Run Over! (+{earnedXp} XP)
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You survived <strong className="text-gold">{round}</strong> rapid-fire rounds!
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3 w-full max-w-sm">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-xl font-bold text-gold">{score}</div>
            <div className="text-[0.6rem] text-text-muted">Score</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-xl font-bold text-orange-400">{bestStreak}</div>
            <div className="text-[0.6rem] text-text-muted">Best Streak</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-xl font-bold text-kenya-green-light">{round}</div>
            <div className="text-[0.6rem] text-text-muted">Rounds Survived</div>
          </div>
        </div>

        <button
          type="button"
          onClick={restartRun}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Start New Survival Run
        </button>
      </div>
    );
  }

  const expected = isReverse ? currentWord.source : currentWord.target;
  const clockPct = untimed ? 100 : Math.max(0, Math.min(100, (timeLeftMs / maxShotClockMs) * 100));

  return (
    <div>
      {/* Top Status Row: 3 Hearts + Streak + Untimed Toggle + Score */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: MAX_LIVES }).map((_, idx) => (
            <Heart
              key={idx}
              className={`h-5 w-5 transition-all ${
                idx < lives
                  ? "fill-red-500 text-red-500"
                  : "text-border-light opacity-40"
              }`}
            />
          ))}
          {streak >= 3 && (
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-orange-400/15 px-2.5 py-0.5 text-xs font-bold text-orange-400">
              <Flame className="h-3.5 w-3.5" /> {streak}x
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setUntimed((u) => !u)}
            aria-pressed={untimed}
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
              untimed
                ? "border-kenya-green/50 bg-kenya-green/15 text-kenya-green-light"
                : "border-border bg-bg-card text-text-secondary hover:border-gold/40"
            }`}
          >
            {untimed ? "Untimed / Relaxed Mode: ON" : "Untimed / Relaxed Mode"}
          </button>
          <span className="text-xs font-semibold text-text-muted">
            {untimed
              ? `Wave ${round + 1} (Relaxed)`
              : `Wave ${round + 1} (${(maxShotClockMs / 1000).toFixed(1)}s clock)`}
          </span>
          <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
            <Zap className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-bold text-gold">{score} pts</span>
          </div>
        </div>
      </div>

      {/* Shot-Clock Progress Bar */}
      <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
        <div
          className={`h-full transition-all duration-100 ${
            untimed
              ? "bg-kenya-green/60"
              : clockPct < 30
              ? "bg-red-500"
              : clockPct < 60
              ? "bg-amber-400"
              : "bg-kenya-green"
          }`}
          style={{ width: `${clockPct}%` }}
        />
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center">
        <p className="text-xs text-text-muted mb-2">
          {isReverse
            ? `What does this ${languageName} word mean in English?`
            : `How do you say in ${languageName}?`}
        </p>
        <p className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-gold">
          &ldquo;{isReverse ? currentWord.target : currentWord.source}&rdquo;
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          let btnStyle =
            "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (feedback !== null) {
            if (opt === expected) {
              btnStyle =
                "border-kenya-green bg-kenya-green/10 text-kenya-green font-bold";
            } else if (feedback === opt) {
              btnStyle = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={opt}
              type="button"
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
