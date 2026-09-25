"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
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
  Volume2,
  Zap,
} from "lucide-react";
import type { WordPair, CourseUnit } from "@/data/courses/types";
import { speak } from "@/lib/learn-engine";

/* ═══════════════════════════════════════════════════════
   GAMES HUB — Language learning mini-games
   Includes: Wordle, Word Scramble, Speed Match, Memory Cards
   ═══════════════════════════════════════════════════════ */

interface GamesHubProps {
  units: CourseUnit[];
  languageName: string;
  locale: string;
  onBack: () => void;
}

/* ─── Helpers ──────────────────────────────────────── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Gather all words from all units/skills */
function getAllWords(units: CourseUnit[]): WordPair[] {
  const words: WordPair[] = [];
  for (const unit of units) {
    for (const skill of unit.skills) {
      words.push(...skill.words);
    }
  }
  return words;
}

type GameType = "menu" | "wordle" | "scramble" | "speed" | "memory";

export default function GamesHub({
  units,
  languageName,
  locale,
  onBack,
}: GamesHubProps) {
  const [activeGame, setActiveGame] = useState<GameType>("menu");

  const allWords = useMemo(() => getAllWords(units), [units]);

  if (activeGame === "menu") {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors active:text-text-primary sm:hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to lessons
          </button>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-6 text-center sm:p-8">
            <div className="mb-3 text-5xl">🎮</div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
              Language Games
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Practice {languageName} vocabulary through fun mini-games
            </p>
          </div>
        </div>

        {/* Game Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Wordle */}
          <button
            onClick={() => setActiveGame("wordle")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
                🟩
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Wordle
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Guess the word in 6 tries
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Guess a {languageName} word letter by letter. Green = correct
              position, Yellow = wrong position.
            </p>
          </button>

          {/* Word Scramble */}
          <button
            onClick={() => setActiveGame("scramble")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🔤
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Word Scramble
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Unscramble the letters
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Rearrange scrambled letters to form the correct {languageName}{" "}
              word. The English hint is provided.
            </p>
          </button>

          {/* Speed Match */}
          <button
            onClick={() => setActiveGame("speed")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                ⚡
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Speed Match
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Race against the clock
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Match {languageName} words to their English translations as fast as
              possible. 60 seconds on the clock!
            </p>
          </button>

          {/* Memory Cards */}
          <button
            onClick={() => setActiveGame("memory")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-2xl">
                🃏
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Memory Cards
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Find the matching pairs
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Flip cards to find matching {languageName} ↔ English pairs. Fewer
              moves = higher score!
            </p>
          </button>
        </div>
      </div>
    );
  }

  const gameHeader = (title: string, icon: string) => (
    <div className="mb-4 flex items-center gap-3 sm:mb-6">
      <button
        onClick={() => setActiveGame("menu")}
        className="shrink-0 rounded-lg p-2 text-text-muted transition-colors active:bg-bg-card sm:hover:text-text-primary"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
          {title}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-2xl px-4 pb-8">
      {activeGame === "wordle" && (
        <>
          {gameHeader("Wordle", "🟩")}
          <WordleGame allWords={allWords} locale={locale} languageName={languageName} />
        </>
      )}
      {activeGame === "scramble" && (
        <>
          {gameHeader("Word Scramble", "🔤")}
          <ScrambleGame allWords={allWords} locale={locale} languageName={languageName} />
        </>
      )}
      {activeGame === "speed" && (
        <>
          {gameHeader("Speed Match", "⚡")}
          <SpeedMatchGame allWords={allWords} locale={locale} languageName={languageName} />
        </>
      )}
      {activeGame === "memory" && (
        <>
          {gameHeader("Memory Cards", "🃏")}
          <MemoryGame allWords={allWords} locale={locale} languageName={languageName} />
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   GAME 1: WORDLE
   Guess a target-language word in 6 tries
   ═══════════════════════════════════════════════════════ */

interface GameProps {
  allWords: WordPair[];
  locale: string;
  languageName: string;
}

type LetterStatus = "correct" | "present" | "absent" | "empty";

function WordleGame({ allWords, locale, languageName }: GameProps) {
  const MAX_GUESSES = 6;

  // Pick words with 4-7 letters, no spaces/apostrophes
  const validWords = useMemo(
    () =>
      allWords.filter((w) => {
        const clean = w.target.toLowerCase();
        return clean.length >= 4 && clean.length <= 7 && /^[a-z]+$/.test(clean);
      }),
    [allWords]
  );

  const [targetWord, setTargetWord] = useState<WordPair | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shakeRow, setShakeRow] = useState(false);
  const [revealedRows, setRevealedRows] = useState<Set<number>>(new Set());

  // Key status tracking
  const [keyStatuses, setKeyStatuses] = useState<Record<string, LetterStatus>>({});

  // Initialize
  useEffect(() => {
    if (validWords.length > 0) {
      setTargetWord(pickRandom(validWords));
    }
  }, [validWords]);

  const wordLength = targetWord ? targetWord.target.length : 5;
  const targetLower = targetWord ? targetWord.target.toLowerCase() : "";

  const getLetterStatuses = useCallback(
    (guess: string): LetterStatus[] => {
      const result: LetterStatus[] = Array(wordLength).fill("absent");
      const targetChars = targetLower.split("");
      const guessChars = guess.toLowerCase().split("");

      // First pass: correct positions
      for (let i = 0; i < wordLength; i++) {
        if (guessChars[i] === targetChars[i]) {
          result[i] = "correct";
          targetChars[i] = "_";
        }
      }
      // Second pass: present but wrong position
      for (let i = 0; i < wordLength; i++) {
        if (result[i] === "correct") continue;
        const idx = targetChars.indexOf(guessChars[i]);
        if (idx !== -1) {
          result[i] = "present";
          targetChars[idx] = "_";
        }
      }
      return result;
    },
    [targetLower, wordLength]
  );

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver || !targetWord) return;

      if (key === "Enter") {
        if (currentGuess.length !== wordLength) {
          setShakeRow(true);
          setTimeout(() => setShakeRow(false), 300);
          return;
        }

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);

        // Reveal animation
        setTimeout(() => {
          setRevealedRows((prev) => new Set([...prev, newGuesses.length - 1]));
        }, 100);

        // Update key statuses
        const statuses = getLetterStatuses(currentGuess);
        const newKeyStatuses = { ...keyStatuses };
        currentGuess.toLowerCase().split("").forEach((letter, i) => {
          const current = newKeyStatuses[letter];
          const newStatus = statuses[i];
          if (newStatus === "correct") newKeyStatuses[letter] = "correct";
          else if (newStatus === "present" && current !== "correct")
            newKeyStatuses[letter] = "present";
          else if (!current) newKeyStatuses[letter] = "absent";
        });
        setKeyStatuses(newKeyStatuses);

        // Check win/lose
        if (currentGuess.toLowerCase() === targetLower) {
          setWon(true);
          setGameOver(true);
        } else if (newGuesses.length >= MAX_GUESSES) {
          setGameOver(true);
        }

        setCurrentGuess("");
      } else if (key === "Backspace") {
        setCurrentGuess((g) => g.slice(0, -1));
      } else if (/^[a-zA-Z']$/.test(key) && currentGuess.length < wordLength) {
        setCurrentGuess((g) => g + key.toLowerCase());
      }
    },
    [gameOver, targetWord, currentGuess, wordLength, guesses, targetLower, getLetterStatuses, keyStatuses]
  );

  // Keyboard listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      handleKey(e.key);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKey]);

  const newGame = () => {
    setTargetWord(pickRandom(validWords));
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWon(false);
    setKeyStatuses({});
    setRevealedRows(new Set());
  };

  if (!targetWord || validWords.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted">
        Not enough words available for Wordle.
      </p>
    );
  }

  const KEYBOARD_ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "⌫"],
  ];

  return (
    <div>
      {/* Hint */}
      <div className="mb-4 rounded-xl border border-border bg-bg-card p-3 text-center">
        <p className="text-xs text-text-muted">
          Guess the {languageName} word meaning:
        </p>
        <p className="mt-1 text-base font-bold text-gold">
          &ldquo;{targetWord.source}&rdquo;
        </p>
        <p className="mt-0.5 text-[0.55rem] text-text-muted">
          {wordLength} letters • {MAX_GUESSES - guesses.length} guesses remaining
        </p>
      </div>

      {/* Grid */}
      <div className="mb-4 flex flex-col items-center gap-1.5">
        {Array.from({ length: MAX_GUESSES }).map((_, rowIdx) => {
          const guess = guesses[rowIdx];
          const isCurrent = rowIdx === guesses.length && !gameOver;
          const isRevealed = revealedRows.has(rowIdx);
          const statuses = guess ? getLetterStatuses(guess) : [];

          return (
            <div
              key={rowIdx}
              className={`flex gap-1.5 ${isCurrent && shakeRow ? "animate-shake" : ""}`}
            >
              {Array.from({ length: wordLength }).map((_, colIdx) => {
                let letter = "";
                let status: LetterStatus = "empty";

                if (guess) {
                  letter = guess[colIdx] || "";
                  status = isRevealed ? statuses[colIdx] : "empty";
                } else if (isCurrent) {
                  letter = currentGuess[colIdx] || "";
                }

                return (
                  <div
                    key={colIdx}
                    className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 text-lg font-bold uppercase transition-all sm:h-14 sm:w-14 sm:text-xl ${
                      status === "correct"
                        ? "border-kenya-green bg-kenya-green text-white animate-pop-correct"
                        : status === "present"
                        ? "border-gold bg-gold text-kenya-black animate-pop-correct"
                        : status === "absent"
                        ? "border-border/50 bg-bg-elevated text-text-muted"
                        : letter
                        ? "border-text-muted/50 bg-bg-card text-text-primary"
                        : "border-border bg-bg-card"
                    }`}
                    style={
                      guess && isRevealed
                        ? { animationDelay: `${colIdx * 80}ms` }
                        : undefined
                    }
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Game over */}
      {gameOver && (
        <div
          className={`mb-4 rounded-xl p-4 text-center ${
            won
              ? "border border-kenya-green/30 bg-kenya-green/10"
              : "border border-red-400/30 bg-red-400/5"
          }`}
        >
          <p className="text-lg font-bold text-text-primary">
            {won ? "🎉 You got it!" : "😔 Better luck next time!"}
          </p>
          {!won && (
            <p className="mt-1 text-sm text-text-secondary">
              The word was:{" "}
              <span className="font-bold text-gold">{targetWord.target}</span>
            </p>
          )}
          <div className="mt-3 flex justify-center gap-2">
            <button
              onClick={() => speak(targetWord.target, locale)}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-muted transition-all active:bg-bg-card sm:hover:text-gold"
            >
              <Volume2 className="h-3.5 w-3.5" /> Listen
            </button>
            <button
              onClick={newGame}
              className="flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110"
            >
              <RotateCcw className="h-3.5 w-3.5" /> New Word
            </button>
          </div>
        </div>
      )}

      {/* Keyboard */}
      {!gameOver && (
        <div className="flex flex-col items-center gap-1.5">
          {KEYBOARD_ROWS.map((row, i) => (
            <div key={i} className="flex gap-1">
              {row.map((key) => {
                const isSpecial = key === "Enter" || key === "⌫";
                const status = keyStatuses[key];

                return (
                  <button
                    key={key}
                    onClick={() =>
                      handleKey(key === "⌫" ? "Backspace" : key)
                    }
                    className={`flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 ${
                      isSpecial
                        ? "h-11 px-2.5 text-[0.6rem] sm:px-4 sm:text-xs"
                        : "h-11 w-8 text-sm sm:w-10"
                    } ${
                      status === "correct"
                        ? "bg-kenya-green text-white"
                        : status === "present"
                        ? "bg-gold text-kenya-black"
                        : status === "absent"
                        ? "bg-bg-elevated/70 text-text-muted/50"
                        : "bg-bg-elevated text-text-primary"
                    }`}
                  >
                    {key === "⌫" ? <Delete className="h-4 w-4" /> : key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   GAME 2: WORD SCRAMBLE
   Unscramble letters to form the correct word
   ═══════════════════════════════════════════════════════ */

function ScrambleGame({ allWords, locale, languageName }: GameProps) {
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
        {targetWord.pronunciation && (
          <p className="mt-1 text-[0.6rem] text-text-muted italic">
            Pronunciation: {targetWord.pronunciation}
          </p>
        )}
      </div>

      {/* Built word */}
      <div className={`mb-4 flex min-h-[3.5rem] items-center justify-center gap-1.5 rounded-xl border-2 border-dashed p-3 ${
        solved ? "border-kenya-green bg-kenya-green/5" : wrong ? "border-red-400 bg-red-400/5 animate-shake" : "border-border"
      }`}>
        {builtWord ? (
          builtWord.split("").map((ch, i) => (
            <span
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold uppercase ${
                solved
                  ? "bg-kenya-green text-white"
                  : "bg-gold/10 text-gold"
              }`}
            >
              {ch}
            </span>
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
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold uppercase transition-all active:scale-90 sm:h-14 sm:w-14 ${
                  isUsed
                    ? "border border-border/20 bg-bg-elevated/30 text-text-muted/20"
                    : "border-2 border-border bg-bg-card text-text-primary active:border-gold sm:hover:border-gold/50"
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
              💡 Hint
            </button>
          </>
        )}
        {solved && (
          <div className="flex w-full gap-2">
            <button
              onClick={() => speak(targetWord.target, locale)}
              className="flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-text-muted transition-all active:bg-bg-card sm:hover:text-gold"
            >
              <Volume2 className="h-3.5 w-3.5" /> Listen
            </button>
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

/* ═══════════════════════════════════════════════════════
   GAME 3: SPEED MATCH
   60-second race to match translations
   ═══════════════════════════════════════════════════════ */

function SpeedMatchGame({ allWords, locale, languageName }: GameProps) {
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
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
          Speed Match
        </h3>
        <p className="mt-2 text-sm text-text-secondary max-w-sm">
          Match {languageName} words to their English translations. You have {GAME_DURATION} seconds. Streaks give bonus points!
        </p>
        <button
          onClick={startGame}
          className="mt-6 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110"
        >
          Start Game 🚀
        </button>
      </div>
    );
  }

  if (gameState === "done") {
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="text-5xl mb-4 animate-bounce-in">🏆</div>
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
          <button
            onClick={() => speak(currentWord.target, locale)}
            className="mt-2 mx-auto flex items-center gap-1 text-[0.65rem] text-text-muted active:text-gold"
          >
            <Volume2 className="h-3 w-3" /> Listen
          </button>
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

/* ═══════════════════════════════════════════════════════
   GAME 4: MEMORY CARDS
   Flip cards to find matching target ↔ English pairs
   ═══════════════════════════════════════════════════════ */

interface MemoryCard {
  id: number;
  text: string;
  pairId: number;
  type: "target" | "source";
}

function MemoryGame({ allWords, locale, languageName }: GameProps) {
  const PAIR_COUNT = 6;

  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [firstFlip, setFirstFlip] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const initGame = useCallback(() => {
    const selected = shuffle(allWords).slice(0, PAIR_COUNT);
    const newCards: MemoryCard[] = [];
    selected.forEach((word, idx) => {
      newCards.push({
        id: idx * 2,
        text: word.target,
        pairId: idx,
        type: "target",
      });
      newCards.push({
        id: idx * 2 + 1,
        text: word.source.replace(/\(.*?\)/g, "").trim(),
        pairId: idx,
        type: "source",
      });
    });
    setCards(shuffle(newCards));
    setFlipped(new Set());
    setMatched(new Set());
    setMoves(0);
    setFirstFlip(null);
    setIsChecking(false);
    setGameWon(false);
    setStartTime(Date.now());
    setEndTime(0);
  }, [allWords]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleFlip = (cardId: number) => {
    if (isChecking || flipped.has(cardId) || matched.has(cardId)) return;

    const newFlipped = new Set(flipped);
    newFlipped.add(cardId);
    setFlipped(newFlipped);

    if (firstFlip === null) {
      setFirstFlip(cardId);
    } else {
      setIsChecking(true);
      setMoves((m) => m + 1);

      const firstCard = cards.find((c) => c.id === firstFlip);
      const secondCard = cards.find((c) => c.id === cardId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match found
        const newMatched = new Set(matched);
        newMatched.add(firstFlip);
        newMatched.add(cardId);
        setMatched(newMatched);

        if (newMatched.size === cards.length) {
          setGameWon(true);
          setEndTime(Date.now());
        }

        setTimeout(() => {
          setFirstFlip(null);
          setIsChecking(false);
          setFlipped(new Set());
        }, 400);
      } else {
        // No match
        setTimeout(() => {
          setFlipped(new Set());
          setFirstFlip(null);
          setIsChecking(false);
        }, 800);
      }
    }
  };

  const getStars = () => {
    if (moves <= PAIR_COUNT + 2) return 3;
    if (moves <= PAIR_COUNT * 2) return 2;
    return 1;
  };

  if (gameWon) {
    const timeTaken = Math.round((endTime - startTime) / 1000);
    const stars = getStars();

    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="text-5xl mb-4 animate-bounce-in">
          {stars === 3 ? "🏆" : stars === 2 ? "⭐" : "👍"}
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          All Matched!
        </h3>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${
                i < stars ? "fill-gold text-gold" : "text-border"
              }`}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-lg font-bold text-text-primary">{moves}</div>
            <div className="text-[0.6rem] text-text-muted">Moves</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-lg font-bold text-text-primary">{timeTaken}s</div>
            <div className="text-[0.6rem] text-text-muted">Time</div>
          </div>
        </div>

        <button
          onClick={initGame}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Moves counter */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Hash className="h-3.5 w-3.5 text-text-muted" />
          <span className="text-xs font-bold text-text-primary">{moves} moves</span>
        </div>
        <div className="text-xs text-text-muted">
          {matched.size / 2} / {PAIR_COUNT} pairs found
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {cards.map((card) => {
          const isFlipped = flipped.has(card.id) || matched.has(card.id);
          const isMatched = matched.has(card.id);

          return (
            <button
              key={card.id}
              onClick={() => handleFlip(card.id)}
              className={`relative flex aspect-square items-center justify-center rounded-xl border-2 p-2 text-center transition-all ${
                isMatched
                  ? "border-kenya-green/40 bg-kenya-green/10"
                  : isFlipped
                  ? "border-gold bg-gold/5 animate-flip-in"
                  : "border-border bg-bg-card active:scale-95 sm:hover:border-gold/40"
              }`}
            >
              {isFlipped ? (
                <span
                  className={`text-xs font-semibold break-words sm:text-sm ${
                    isMatched
                      ? "text-kenya-green"
                      : card.type === "target"
                      ? "text-gold"
                      : "text-text-primary"
                  }`}
                >
                  {card.text}
                </span>
              ) : (
                <span className="text-2xl opacity-30">?</span>
              )}
              {/* Type indicator */}
              {isFlipped && (
                <span
                  className={`absolute bottom-1 text-[0.45rem] font-semibold ${
                    isMatched ? "text-kenya-green/60" : card.type === "target" ? "text-gold/60" : "text-text-muted/60"
                  }`}
                >
                  {card.type === "target" ? languageName : "ENG"}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
