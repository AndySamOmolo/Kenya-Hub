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

export function ScrambleGame({ allWords, languageName }: GameProps) {
  const validWords = useMemo(
    () =>
      allWords.filter((w) => {
        const clean = w.target.replace(/[^a-zA-Z']/g, "");
        return clean.length >= 3 && clean.length <= 10;
      }),
    [allWords]
  );

  const [targetWord, setTargetWord] = useState<WordPair | null>(null);
  const [scrambled, setScrambled] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);

  const initRound = useCallback(() => {
    if (validWords.length === 0) return;
    const word = pickRandom(validWords);
    setTargetWord(word);
    const letters = word.target.split("");
    // Ensure scramble is different from original
    let scrambledLetters = shuffle(letters);
    let attempts = 0;
    while (scrambledLetters.join("") === letters.join("") && attempts < 10) {
      scrambledLetters = shuffle(letters);
      attempts++;
    }
    setScrambled(scrambledLetters);
    setSelected([]);
    setSolved(false);
    setWrong(false);
    setHintsUsed(0);
  }, [validWords]);

  useEffect(() => {
    initRound();
  }, [initRound]);

  const handleTap = (idx: number) => {
    if (solved || selected.includes(idx)) return;
    const newSelected = [...selected, idx];
    setSelected(newSelected);

    // Check if word is complete
    if (newSelected.length === scrambled.length && targetWord) {
      const built = newSelected.map((i) => scrambled[i]).join("");
      if (built.toLowerCase() === targetWord.target.toLowerCase()) {
        setSolved(true);
        setScore((s) => s + Math.max(10 - hintsUsed * 3, 5));
      } else {
        setWrong(true);
        setTimeout(() => {
          setSelected([]);
          setWrong(false);
        }, 500);
      }
    }
  };

  const handleHint = () => {
    if (!targetWord || solved) return;
    // Reveal the next correct letter
    const target = targetWord.target;
    const nextIdx = selected.length;
    if (nextIdx >= target.length) return;

    const nextChar = target[nextIdx].toLowerCase();
    const availableIdx = scrambled.findIndex(
      (ch, i) => ch.toLowerCase() === nextChar && !selected.includes(i)
    );
    if (availableIdx !== -1) {
      setSelected((s) => [...s, availableIdx]);
      setHintsUsed((h) => h + 1);
    }
  };

  const handleNext = () => {
    setRound((r) => r + 1);
    initRound();
  };

  if (!targetWord || validWords.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted">
        Not enough words for this game.
      </p>
    );
  }

  const builtWord = selected.map((i) => scrambled[i]).join("");

  return (
    <div>
      {/* Score */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs text-text-muted">Round {round + 1}</span>
      </div>

      {/* Clue */}
      <div className="mb-5 rounded-xl border border-border bg-bg-card p-4 text-center">
        <p className="text-xs text-text-muted mb-1">Unscramble the {languageName} word for:</p>
        <p className="text-xl font-bold text-gold">
          &ldquo;{targetWord.source}&rdquo;
        </p>

      </div>

      {/* Built word */}
      <div className={`mb-4 flex min-h-[3.5rem] flex-wrap items-center justify-center gap-1.5 rounded-xl border-2 border-dashed p-3 ${
        solved ? "border-kenya-green bg-kenya-green/5" : wrong ? "border-red-400 bg-red-400/5 animate-shake" : "border-border"
      }`}>
        {builtWord ? (
          selected.map((scrambleIdx, i) => (
            <button
              key={i}
              type="button"
              disabled={solved}
              onClick={() => {
                if (solved) return;
                setSelected((prev) => prev.filter((_, idx) => idx !== i));
              }}
              title="Tap to remove"
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-base sm:text-lg font-bold uppercase transition-transform active:scale-90 ${
                solved
                  ? "bg-kenya-green text-white cursor-default"
                  : "bg-gold/10 text-gold border border-gold/30 hover:border-gold hover:bg-gold/20 cursor-pointer"
              }`}
            >
              {scrambled[scrambleIdx]}
            </button>
          ))
        ) : (
          <p className="text-sm italic text-text-muted">Tap letters below</p>
        )}
      </div>

      {/* Scrambled tiles */}
      {!solved && (
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {scrambled.map((letter, idx) => {
            const isUsed = selected.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => handleTap(idx)}
                disabled={isUsed}
                className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl text-base sm:text-lg font-bold uppercase transition-all active:scale-90 ${
                  isUsed
                    ? "border border-border/20 bg-bg-elevated/30 text-text-muted/20 cursor-not-allowed"
                    : "border-2 border-border bg-bg-card text-text-primary active:border-gold sm:hover:border-gold/50 shadow-xs"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {!solved && (
          <>
            <button
              onClick={() => setSelected([])}
              disabled={selected.length === 0}
              className="flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-text-muted transition-all active:bg-bg-card disabled:opacity-30"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Clear
            </button>
            <button
              onClick={handleHint}
              className="flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/5 px-4 py-2.5 text-xs font-semibold text-gold transition-all active:bg-gold/10"
            >
              <DynamicIcon emoji="💡" className="w-3.5 h-3.5" /> Hint
            </button>
          </>
        )}
        {solved && (
          <div className="flex w-full gap-2">
            <button
              onClick={handleNext}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold px-6 py-2.5 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110"
            >
              Next Word →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

