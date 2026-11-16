/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, Flame, RotateCcw, Star, Zap, ArrowLeftRight } from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import {
  playCorrectSfx,
  playWrongSfx,
  playStreakSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, pickAdaptiveWord } from "./shared";

type SpeedDirection = "to_english" | "to_target" | "mixed";

export function SpeedMatchGame({
  allWords,
  languageName,
  progress,
  onAwardXp,
  onRecordWordResult,
  onUpdateGameStats,
}: GameProps) {
  const GAME_DURATION = 60;

  const [direction, setDirection] = useState<SpeedDirection>("mixed");
  const [gameState, setGameState] = useState<"ready" | "playing" | "done">("ready");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [roundDir, setRoundDir] = useState<"to_english" | "to_target">("to_english");
  const [options, setOptions] = useState<string[]>([]);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [timeBonusPop, setTimeBonusPop] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const awardedRef = useRef(false);

  const generateRound = useCallback(
    (dirMode: SpeedDirection = direction) => {
      if (allWords.length < 4) return;
      const word = pickAdaptiveWord(allWords, progress);
      const activeDir: "to_english" | "to_target" =
        dirMode === "mixed"
          ? Math.random() < 0.5
            ? "to_english"
            : "to_target"
          : dirMode;
      setRoundDir(activeDir);

      if (activeDir === "to_english") {
        const distractors = shuffle(
          allWords.filter((w) => w.source.toLowerCase() !== word.source.toLowerCase())
        )
          .slice(0, 3)
          .map((w) => w.source);
        setCurrentWord(word);
        setOptions(shuffle([word.source, ...distractors]));
      } else {
        const distractors = shuffle(
          allWords.filter((w) => w.target.toLowerCase() !== word.target.toLowerCase())
        )
          .slice(0, 3)
          .map((w) => w.target);
        setCurrentWord(word);
        setOptions(shuffle([word.target, ...distractors]));
      }
    },
    [allWords, direction, progress]
  );

  const startGame = () => {
    if (allWords.length < 4) return;
    awardedRef.current = false;
    setGameState("playing");
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(GAME_DURATION);
    setTotal(0);
    setCorrect(0);
    setFlash(null);
    generateRound(direction);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setGameState("done");
          return 0;
        }
        return Number((t - 1).toFixed(1));
      });
    }, 1000);
  };

  useEffect(() => {
    if (gameState === "done" && !awardedRef.current) {
      awardedRef.current = true;
      playCelebrationSfx();
      const earnedXp = Math.max(15, Math.min(55, Math.round(score / 4)));
      onAwardXp?.(earnedXp);
      onUpdateGameStats?.((prev) => ({
        ...prev,
        speedBestScore: Math.max(prev.speedBestScore, score),
      }));
    }
  }, [gameState, score, onAwardXp, onUpdateGameStats]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      // Guard against double-taps during feedback flash (Fixes SM-4)
      if (!currentWord || gameState !== "playing" || flash !== null) return;
      setTotal((t) => t + 1);

      const expected =
        roundDir === "to_english" ? currentWord.source : currentWord.target;
      const isCorrect = answer.toLowerCase() === expected.toLowerCase();

      if (isCorrect) {
        const newStreak = streak + 1;
        const multiplier = newStreak >= 5 ? 3 : newStreak >= 3 ? 2 : 1;
        setScore((s) => s + 10 * multiplier);
        setStreak(newStreak);
        setBestStreak((b) => Math.max(b, newStreak));
        setCorrect((c) => c + 1);
        setFlash("correct");
        onRecordWordResult?.(currentWord, true);

        if (newStreak > 0 && newStreak % 5 === 0) {
          playStreakSfx();
          setTimeLeft((t) => Math.min(90, Number((t + 2).toFixed(1))));
          setTimeBonusPop("+2s Combo! ⚡");
          setTimeout(() => setTimeBonusPop(null), 900);
        } else {
          playCorrectSfx();
        }

        setTimeout(() => {
          setFlash(null);
          generateRound();
        }, 180);
      } else {
        playWrongSfx();
        setStreak(0);
        setFlash("wrong");
        onRecordWordResult?.(currentWord, false);
        setTimeLeft((t) => Math.max(1, Number((t - 1).toFixed(1))));
        setTimeBonusPop("-1s");
        setTimeout(() => setTimeBonusPop(null), 700);

        // 400ms anti-mashing penalty lock
        setTimeout(() => {
          setFlash(null);
          generateRound();
        }, 400);
      }
    },
    [currentWord, gameState, flash, roundDir, streak, generateRound, onRecordWordResult]
  );

  // Desktop keyboard shortcuts [1] [2] [3] [4]
  useEffect(() => {
    if (gameState !== "playing") return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (options[idx]) {
          e.preventDefault();
          handleAnswer(options[idx]);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gameState, options, handleAnswer]);

  if (gameState === "ready") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="flex justify-center mb-3">
          <DynamicIcon emoji="⚡" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
          Speed Match Blitz
        </h3>
        <p className="mt-2 text-sm text-text-secondary max-w-md">
          Race the {GAME_DURATION}-second clock! Every 5-streak combo grants{" "}
          <strong className="text-gold">+2s bonus time</strong>; wrong guesses cost{" "}
          <strong className="text-red-400">-1s</strong>.
        </p>

        {/* 3-Way Direction Selector */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {[
            { id: "to_english" as const, label: `${languageName} → English` },
            { id: "to_target" as const, label: `English → ${languageName}` },
            { id: "mixed" as const, label: "Mixed Blitz ⇄" },
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setDirection(m.id)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                direction === m.id
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
              }`}
            >
              <ArrowLeftRight className="h-3.5 w-3.5" /> {m.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={startGame}
          disabled={allWords.length < 4}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:hover:brightness-110 mx-auto cursor-pointer"
        >
          <span>Start 60s Blitz</span> <DynamicIcon emoji="🚀" className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (gameState === "done") {
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const earnedXp = Math.max(15, Math.min(55, Math.round(score / 4)));
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="flex justify-center mb-4 animate-bounce-in">
          <DynamicIcon emoji="🏆" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Time&apos;s Up! (+{earnedXp} XP)
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
          type="button"
          onClick={startGame}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 rounded-full border px-3 py-1.5 ${
              timeLeft <= 10
                ? "border-red-400/50 bg-red-400/5"
                : "border-border bg-bg-card"
            }`}
          >
            <Clock
              className={`h-3.5 w-3.5 ${
                timeLeft <= 10 ? "text-red-400 animate-countdown-pulse" : "text-text-muted"
              }`}
            />
            <span
              className={`text-sm font-bold tabular-nums ${
                timeLeft <= 10 ? "text-red-400" : "text-text-primary"
              }`}
            >
              {Math.ceil(timeLeft)}s
            </span>
          </div>
          {timeBonusPop && (
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-extrabold animate-bounce-in ${
                timeBonusPop.startsWith("+")
                  ? "bg-kenya-green/20 text-kenya-green-light"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {timeBonusPop}
            </span>
          )}
          {streak >= 3 && (
            <div className="flex items-center gap-1 rounded-full bg-orange-400/10 px-2.5 py-1">
              <Flame className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-xs font-bold text-orange-400">{streak}x</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5">
          <Zap className="h-3.5 w-3.5 text-gold" />
          <span className="text-sm font-bold text-gold">{score}</span>
        </div>
      </div>

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
            {roundDir === "to_english"
              ? `Translate from ${languageName} to English:`
              : `Translate from English to ${languageName}:`}
          </p>
          <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-gold sm:text-3xl">
            {roundDir === "to_english" ? currentWord.target : currentWord.source}
          </p>
        </div>
      )}

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt, idx) => (
          <button
            key={`${opt}-${idx}`}
            type="button"
            disabled={flash !== null}
            onClick={() => handleAnswer(opt)}
            className="flex items-center gap-3 rounded-xl border-2 border-border bg-bg-card px-4 py-3.5 text-left text-sm font-medium text-text-primary transition-all active:scale-[0.97] active:border-gold sm:hover:border-gold/50 sm:py-3 cursor-pointer"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-bg-elevated border border-border text-[0.7rem] font-bold text-text-muted">
              {idx + 1}
            </span>
            <span className="flex-1 break-words">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
