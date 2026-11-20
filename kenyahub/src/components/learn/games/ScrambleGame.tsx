/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RotateCcw, Shuffle, Star, Trophy } from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import { getPrimaryForm } from "@/lib/learn-engine";
import {
  playKeyTapSfx,
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import {
  type GameProps,
  shuffle,
  pickAdaptiveWord,
  isSingleWordLexical,
  cleanQuizGloss,
  isValidQuizPair,
} from "./shared";

function cleanScrambleToken(raw: string): string {
  const primary = getPrimaryForm(raw).trim();
  return primary.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'-]/g, "");
}

export function ScrambleGame({
  allWords,
  languageName,
  progress,
  onAwardXp,
  onRecordWordResult,
  onUpdateGameStats,
}: GameProps) {
  const SESSION_ROUNDS = 10;

  // Strictly single-word entries (no multi-word phrases chopped at first space)
  const validWords = useMemo(
    () =>
      allWords
        .filter((w) => isSingleWordLexical(w.target) && isValidQuizPair(w.target, w.source))
        .map((w) => ({
          ...w,
          source: cleanQuizGloss(w.source),
          cleanTarget: cleanScrambleToken(w.target),
        }))
        .filter((w) => w.cleanTarget.length >= 3 && w.cleanTarget.length <= 10),
    [allWords]
  );

  const [targetWord, setTargetWord] = useState<(WordPair & { cleanTarget: string }) | null>(null);
  const [scrambled, setScrambled] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [perfectWords, setPerfectWords] = useState(0);

  const initRound = useCallback(() => {
    if (validWords.length === 0) return;
    const word = pickAdaptiveWord(validWords, progress);
    setTargetWord(word);
    const letters = word.cleanTarget.split("");
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
  }, [validWords, progress]);

  useEffect(() => {
    initRound();
  }, [initRound]);

  // Unified completion evaluation used by both tile taps and Hint button (fixes S-2 last-letter soft-lock)
  const evaluateSelection = useCallback(
    (nextSelected: number[], nextHintsUsed: number) => {
      if (!targetWord || nextSelected.length !== scrambled.length) return;
      const built = nextSelected.map((i) => scrambled[i]).join("");
      const normBuilt = built
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const normTarget = targetWord.cleanTarget
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      if (normBuilt === normTarget) {
        setSolved(true);
        playCorrectSfx();
        const earnedPts = Math.max(10 - nextHintsUsed * 3, 4);
        const earnedXp = Math.max(15 - nextHintsUsed * 4, 5);
        setScore((s) => s + earnedPts);
        if (nextHintsUsed === 0) setPerfectWords((p) => p + 1);
        onAwardXp?.(earnedXp, false);
        onRecordWordResult?.(targetWord, nextHintsUsed === 0);
        onUpdateGameStats?.((prev) => ({
          ...prev,
          scrambleSolved: prev.scrambleSolved + 1,
        }));
      } else {
        playWrongSfx();
        setWrong(true);
        onRecordWordResult?.(targetWord, false);
        setTimeout(() => {
          setSelected([]);
          setWrong(false);
        }, 500);
      }
    },
    [targetWord, scrambled, onAwardXp, onRecordWordResult, onUpdateGameStats]
  );

  const handleTap = useCallback(
    (idx: number) => {
      if (solved || selected.includes(idx)) return;
      playKeyTapSfx();
      const newSelected = [...selected, idx];
      setSelected(newSelected);
      evaluateSelection(newSelected, hintsUsed);
    },
    [solved, selected, evaluateSelection, hintsUsed]
  );

  const handleHint = useCallback(() => {
    if (!targetWord || solved) return;
    const target = targetWord.cleanTarget;
    const nextIdx = selected.length;
    if (nextIdx >= target.length) return;

    const nextChar = target[nextIdx]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const availableIdx = scrambled.findIndex(
      (ch, i) =>
        ch
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase() === nextChar && !selected.includes(i)
    );
    if (availableIdx !== -1) {
      playKeyTapSfx();
      const nextSelected = [...selected, availableIdx];
      const nextHints = hintsUsed + 1;
      setSelected(nextSelected);
      setHintsUsed(nextHints);
      evaluateSelection(nextSelected, nextHints);
    }
  }, [targetWord, solved, selected, scrambled, hintsUsed, evaluateSelection]);

  const handleShuffleRemaining = useCallback(() => {
    if (solved) return;
    playKeyTapSfx();
    const selectedLetters = selected.map((i) => scrambled[i]);
    const remainingLetters = scrambled.filter((_, i) => !selected.includes(i));
    const reshuffled = [...selectedLetters, ...shuffle(remainingLetters)];
    setScrambled(reshuffled);
    setSelected(selectedLetters.map((_, i) => i));
  }, [solved, selected, scrambled]);

  const handleNext = useCallback(() => {
    if (round + 1 >= SESSION_ROUNDS) {
      playCelebrationSfx();
      setSessionDone(true);
      onAwardXp?.(0, true);
    } else {
      setRound((r) => r + 1);
      initRound();
    }
  }, [round, initRound]);

  // Physical Keyboard Support (a-z, Backspace, Space to shuffle, Enter for next)
  useEffect(() => {
    if (sessionDone) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (solved && e.key === "Enter") {
        e.preventDefault();
        handleNext();
        return;
      }
      if (solved) return;
      if (e.key === "Backspace") {
        e.preventDefault();
        setSelected((prev) => prev.slice(0, -1));
      } else if (e.key === " ") {
        e.preventDefault();
        handleShuffleRemaining();
      } else {
        const cleanKey = e.key
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (/^[a-z'-]$/.test(cleanKey)) {
          const matchIdx = scrambled.findIndex(
            (ch, idx) =>
              !selected.includes(idx) &&
              ch
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase() === cleanKey
          );
          if (matchIdx !== -1) {
            handleTap(matchIdx);
          }
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [sessionDone, solved, scrambled, selected, handleTap, handleShuffleRemaining, handleNext]);

  const restartSprint = () => {
    setScore(0);
    setRound(0);
    setPerfectWords(0);
    setSessionDone(false);
    initRound();
  };

  if (!targetWord || validWords.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough single-word entries in this scope. Switch the Vocabulary Scope above to Course or All Dictionary.
      </p>
    );
  }

  if (sessionDone) {
    const stars = perfectWords >= 8 ? 3 : perfectWords >= 5 ? 2 : 1;
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🏆" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          10-Word Scramble Sprint Complete!
        </h3>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${i < stars ? "fill-gold text-gold" : "text-border"}`}
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-xl font-bold text-gold">{score} pts</div>
            <div className="text-xs text-text-muted">Total Score</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-xl font-bold text-kenya-green-light">
              {perfectWords}/{SESSION_ROUNDS}
            </div>
            <div className="text-xs text-text-muted">No-Hint Solves</div>
          </div>
        </div>
        <button
          type="button"
          onClick={restartSprint}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> New 10-Word Sprint
        </button>
      </div>
    );
  }

  const builtWord = selected.map((i) => scrambled[i]).join("");
  const xpPreview = Math.max(15 - hintsUsed * 4, 5);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Word {round + 1} of {SESSION_ROUNDS}
        </span>
      </div>

      <div className="mb-5 rounded-xl border border-border bg-bg-card p-4 text-center">
        <p className="text-xs text-text-muted mb-1">
          Unscramble the {languageName} word for:
        </p>
        <p className="text-xl font-bold text-gold">&ldquo;{targetWord.source}&rdquo;</p>
        {targetWord.pronunciation && (
          <p className="text-xs text-sky-light italic mt-1">[{targetWord.pronunciation}]</p>
        )}
      </div>

      <div
        className={`mb-4 flex min-h-[3.5rem] flex-wrap items-center justify-center gap-1.5 rounded-xl border-2 border-dashed p-3 ${
          solved
            ? "border-kenya-green bg-kenya-green/5"
            : wrong
            ? "border-red-400 bg-red-400/5 animate-shake"
            : "border-border"
        }`}
      >
        {builtWord ? (
          selected.map((scrambleIdx, i) => (
            <button
              key={i}
              type="button"
              disabled={solved}
              onClick={() => {
                if (solved) return;
                playKeyTapSfx();
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
          <p className="text-sm italic text-text-muted">
            Tap letters below or type on your keyboard
          </p>
        )}
      </div>

      {!solved && (
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {scrambled.map((letter, idx) => {
            const isUsed = selected.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleTap(idx)}
                disabled={isUsed}
                className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl text-base sm:text-lg font-bold uppercase transition-all active:scale-90 cursor-pointer ${
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

      {solved && targetWord.example && (
        <div className="mb-4 rounded-xl border border-kenya-green/30 bg-kenya-green/10 p-3 text-center text-xs text-text-secondary">
          Example: <strong className="text-text-primary">{targetWord.example}</strong>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {!solved && (
          <>
            <button
              type="button"
              onClick={() => setSelected([])}
              disabled={selected.length === 0}
              className="flex items-center gap-1.5 rounded-xl border border-border px-3.5 py-2.5 text-xs font-semibold text-text-muted transition-all active:bg-bg-card disabled:opacity-30 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Clear
            </button>
            <button
              type="button"
              onClick={handleShuffleRemaining}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-bg-card px-3.5 py-2.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-all cursor-pointer"
            >
              <Shuffle className="h-3.5 w-3.5 text-gold" /> Shuffle
            </button>
            <button
              type="button"
              onClick={handleHint}
              className="flex items-center gap-1.5 rounded-xl border border-gold/30 bg-gold/5 px-3.5 py-2.5 text-xs font-semibold text-gold transition-all active:bg-gold/10 cursor-pointer"
            >
              <DynamicIcon emoji="💡" className="w-3.5 h-3.5" /> Hint (-3 pts)
            </button>
          </>
        )}
        {solved && (
          <div className="flex w-full gap-2">
            <button
              type="button"
              onClick={handleNext}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold px-6 py-2.5 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
            >
              {round + 1 >= SESSION_ROUNDS
                ? `Finish Sprint (+${xpPreview} XP) →`
                : `Next Word (+${xpPreview} XP) →`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
