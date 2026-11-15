/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Delete, RotateCcw } from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import { getPrimaryForm } from "@/lib/learn-engine";
import { type GameProps, pickRandom } from "./shared";

type LetterStatus = "correct" | "present" | "absent" | "empty";

function stripDiacriticsToAscii(str: string): string {
  return getPrimaryForm(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ωΩ]/g, "o")
    .replace(/ñ/g, "ng")
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();
}

export function WordleGame({ allWords, languageName, onAwardXp }: GameProps) {
  const MAX_GUESSES = 6;

  // Include diacritic-bearing words by normalizing to 4-7 base ASCII letters for the grid
  const validWords = useMemo(
    () =>
      allWords
        .map((w) => ({
          ...w,
          asciiTarget: stripDiacriticsToAscii(w.target),
        }))
        .filter((w) => w.asciiTarget.length >= 4 && w.asciiTarget.length <= 7),
    [allWords]
  );

  const [targetWord, setTargetWord] = useState<(WordPair & { asciiTarget: string }) | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shakeRow, setShakeRow] = useState(false);
  const [revealedRows, setRevealedRows] = useState<Set<number>>(new Set());
  const [keyStatuses, setKeyStatuses] = useState<Record<string, LetterStatus>>({});

  useEffect(() => {
    if (validWords.length > 0) {
      setTargetWord(pickRandom(validWords));
    }
  }, [validWords]);

  const wordLength = targetWord ? targetWord.asciiTarget.length : 5;
  const targetLower = targetWord ? targetWord.asciiTarget : "";

  const getLetterStatuses = useCallback(
    (guess: string): LetterStatus[] => {
      const result: LetterStatus[] = Array(wordLength).fill("absent");
      const targetChars = targetLower.split("");
      const guessChars = guess.toLowerCase().split("");

      for (let i = 0; i < wordLength; i++) {
        if (guessChars[i] === targetChars[i]) {
          result[i] = "correct";
          targetChars[i] = "_";
        }
      }
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

        setTimeout(() => {
          setRevealedRows((prev) => new Set([...prev, newGuesses.length - 1]));
        }, 100);

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

        if (currentGuess.toLowerCase() === targetLower) {
          setWon(true);
          setGameOver(true);
          onAwardXp?.(25);
        } else if (newGuesses.length >= MAX_GUESSES) {
          setGameOver(true);
        }

        setCurrentGuess("");
      } else if (key === "Backspace") {
        setCurrentGuess((g) => g.slice(0, -1));
      } else {
        const cleanChar = key
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (/^[a-z]$/.test(cleanChar) && currentGuess.length < wordLength) {
          setCurrentGuess((g) => g + cleanChar);
        }
      }
    },
    [gameOver, targetWord, currentGuess, wordLength, guesses, targetLower, getLetterStatuses, keyStatuses, onAwardXp]
  );

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
      <div className="mb-4 rounded-xl border border-border bg-bg-card p-3 text-center">
        <p className="text-xs text-text-muted">
          Guess the {languageName} word meaning:
        </p>
        <p className="mt-1 text-base font-bold text-gold">
          &ldquo;{targetWord.source}&rdquo;
        </p>
        <p className="mt-0.5 text-[0.6rem] text-text-muted">
          {wordLength} letters (diacritics match base letters) • {MAX_GUESSES - guesses.length} guesses remaining
        </p>
      </div>

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
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border-2 text-base font-bold uppercase transition-all sm:h-12 sm:w-12 sm:text-lg md:h-14 md:w-14 md:text-xl ${
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

      {gameOver && (
        <div
          className={`mb-4 rounded-xl p-4 text-center ${
            won
              ? "border border-kenya-green/30 bg-kenya-green/10"
              : "border border-red-400/30 bg-red-400/5"
          }`}
        >
          <p className="text-lg font-bold text-text-primary flex items-center justify-center gap-2">
            {won ? (
              <>
                <DynamicIcon emoji="🎉" className="w-5 h-5 text-gold inline-block" /> You got it! (+25 XP)
              </>
            ) : (
              <>
                <DynamicIcon emoji="😔" className="w-5 h-5 text-kenya-red-light inline-block" /> Better luck next time!
              </>
            )}
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Word: <span className="font-bold text-gold">{targetWord.target}</span>
          </p>
          <div className="mt-3 flex justify-center gap-2">
            <button
              onClick={newGame}
              className="flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> New Word
            </button>
          </div>
        </div>
      )}

      {!gameOver && (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-md mx-auto px-1">
          {KEYBOARD_ROWS.map((row, i) => (
            <div key={i} className="flex gap-1 justify-center w-full">
              {row.map((key) => {
                const isSpecial = key === "Enter" || key === "⌫";
                const status = keyStatuses[key];

                return (
                  <button
                    key={key}
                    onClick={() => handleKey(key === "⌫" ? "Backspace" : key)}
                    className={`flex items-center justify-center rounded-md sm:rounded-lg font-bold transition-all active:scale-95 cursor-pointer ${
                      isSpecial
                        ? "h-10 sm:h-11 px-1.5 sm:px-3 text-[0.65rem] sm:text-xs shrink-0"
                        : "h-10 sm:h-11 flex-1 min-w-0 max-w-[36px] sm:max-w-[42px] text-xs sm:text-sm"
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
