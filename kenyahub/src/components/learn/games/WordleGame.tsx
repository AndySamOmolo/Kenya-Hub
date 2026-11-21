/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useState , useRef } from "react";
import { Delete, RotateCcw, Share2, Sparkles, Calendar, Shuffle } from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import { getPrimaryForm, transliterateToAscii } from "@/lib/learn-engine";
import { getLocalDateString } from "@/lib/learn-progress";
import {
  playKeyTapSfx,
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import {
  type GameProps,
  pickAdaptiveWord,
  isSingleWordLexical,
  seededRandom,
  cleanQuizGloss,
  isValidQuizPair,
} from "./shared";

type LetterStatus = "correct" | "present" | "absent" | "empty";

function stripDiacriticsToAscii(str: string): string {
  return transliterateToAscii(getPrimaryForm(str))
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();
}

export function WordleGame({
  allWords,
  languageName,
  languageId,
  progress,
  onAwardXp,
  onRecordWordResult,
  onUpdateGameStats,
}: GameProps) {
  const MAX_GUESSES = 6;
  const [playMode, setPlayMode] = useState<"daily" | "free">("free");
  const [lengthFilter, setLengthFilter] = useState<number | "all">("all");
  const [copiedShare, setCopiedShare] = useState(false);

  // Strictly single-word lexical entries (4-7 ASCII base letters)
  const validWords = useMemo(() => {
    const base = allWords
      .filter((w) => isSingleWordLexical(w.target) && isValidQuizPair(w.target, w.source))
      .map((w) => ({
        ...w,
        source: cleanQuizGloss(w.source),
        asciiTarget: stripDiacriticsToAscii(w.target),
      }))
      .filter((w) => w.asciiTarget.length >= 4 && w.asciiTarget.length <= 7);

    if (playMode === "free" && lengthFilter !== "all") {
      const filtered = base.filter((w) => w.asciiTarget.length === lengthFilter);
      if (filtered.length >= 3) return filtered;
    }
    return base;
  }, [allWords, playMode, lengthFilter]);

  const [targetWord, setTargetWord] = useState<(WordPair & { asciiTarget: string }) | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shakeRow, setShakeRow] = useState(false);
  const [revealedRows, setRevealedRows] = useState<Set<number>>(new Set());
  const [keyStatuses, setKeyStatuses] = useState<Record<string, LetterStatus>>({});

  const progressRef = useRef(progress);
  progressRef.current = progress;

  const pickNextTarget = useCallback(
    (mode: "daily" | "free") => {
      if (validWords.length === 0) return null;
      if (mode === "daily") {
        const today = getLocalDateString();
        const rng = seededRandom(`${today}::${languageId || languageName}`);
        const idx = Math.floor(rng() * validWords.length);
        return validWords[idx] || validWords[0];
      }
      return pickAdaptiveWord(validWords, progressRef.current);
    },
    [validWords, languageId, languageName]
  );

  const resetBoard = useCallback(
    (mode: "daily" | "free" = playMode) => {
      const chosen = pickNextTarget(mode);
      setTargetWord(chosen);
      setGuesses([]);
      setCurrentGuess("");
      setGameOver(false);
      setWon(false);
      setKeyStatuses({});
      setRevealedRows(new Set());
      setCopiedShare(false);
    },
    [pickNextTarget, playMode]
  );

  useEffect(() => {
    resetBoard(playMode);
  }, [validWords, playMode, resetBoard]);

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
          playWrongSfx();
          setShakeRow(true);
          setTimeout(() => setShakeRow(false), 300);
          return;
        }

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);

        setTimeout(() => {
          setRevealedRows((prev) => new Set([...prev, newGuesses.length - 1]));
        }, 80);

        const statuses = getLetterStatuses(currentGuess);
        const newKeyStatuses = { ...keyStatuses };
        currentGuess
          .toLowerCase()
          .split("")
          .forEach((letter, i) => {
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
          playCelebrationSfx();
          const xpReward = newGuesses.length <= 2 ? 35 : newGuesses.length <= 4 ? 25 : 20;
          onAwardXp?.(xpReward);
          onRecordWordResult?.(targetWord, true);
          onUpdateGameStats?.((prev) => {
            const nextStreak = prev.wordleStreak + 1;
            return {
              ...prev,
              wordlePlayed: prev.wordlePlayed + 1,
              wordleWins: prev.wordleWins + 1,
              wordleFirstTryWins:
                newGuesses.length <= 2 ? prev.wordleFirstTryWins + 1 : prev.wordleFirstTryWins,
              wordleStreak: nextStreak,
              wordleBestStreak: Math.max(prev.wordleBestStreak, nextStreak),
            };
          });
        } else if (newGuesses.length >= MAX_GUESSES) {
          setGameOver(true);
          playWrongSfx();
          onRecordWordResult?.(targetWord, false);
          onUpdateGameStats?.((prev) => ({
            ...prev,
            wordlePlayed: prev.wordlePlayed + 1,
            wordleStreak: 0,
          }));
        } else {
          playKeyTapSfx();
        }

        setCurrentGuess("");
      } else if (key === "Backspace") {
        playKeyTapSfx();
        setCurrentGuess((g) => g.slice(0, -1));
      } else {
        const cleanChar = key
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (/^[a-z]$/.test(cleanChar) && currentGuess.length < wordLength) {
          playKeyTapSfx();
          setCurrentGuess((g) => g + cleanChar);
        }
      }
    },
    [
      gameOver,
      targetWord,
      currentGuess,
      wordLength,
      guesses,
      targetLower,
      getLetterStatuses,
      keyStatuses,
      onAwardXp,
      onRecordWordResult,
      onUpdateGameStats,
    ]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      handleKey(e.key);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKey]);

  const handleCopyShareGrid = () => {
    if (!targetWord) return;
    const header = `KenyaHub ${languageName} Wordle (${playMode === "daily" ? getLocalDateString() : "Free Play"}) ${
      won ? guesses.length : "X"
    }/${MAX_GUESSES}`;
    const rows = guesses
      .map((g) =>
        getLetterStatuses(g)
          .map((s) => (s === "correct" ? "🟩" : s === "present" ? "🟨" : "⬛"))
          .join("")
      )
      .join("\n");
    const text = `${header}\n${rows}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  if (!targetWord || validWords.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough single-word entries available for Wordle in this scope. Try switching the Vocabulary Scope above to Course or All Dictionary.
      </p>
    );
  }

  const KEYBOARD_ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "⌫"],
  ];

  const maskedExample = targetWord.example
    ? targetWord.example.replace(new RegExp(targetWord.target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "____")
    : null;

  return (
    <div>
      {/* Mode & Length Controls */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-xl border border-border bg-bg-card p-1">
          <button
            type="button"
            onClick={() => setPlayMode("daily")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              playMode === "daily"
                ? "bg-gold text-kenya-black"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" /> Neno la Siku (Daily)
          </button>
          <button
            type="button"
            onClick={() => setPlayMode("free")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              playMode === "free"
                ? "bg-gold text-kenya-black"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Shuffle className="h-3.5 w-3.5" /> Free Play
          </button>
        </div>

        {playMode === "free" && (
          <div className="flex items-center gap-1">
            {(["all", 4, 5, 6, 7] as const).map((len) => (
              <button
                key={String(len)}
                type="button"
                onClick={() => setLengthFilter(len)}
                className={`rounded-lg border px-2 py-1 text-[0.6875rem] font-bold transition-all cursor-pointer ${
                  lengthFilter === len
                    ? "border-gold/50 bg-gold/15 text-gold"
                    : "border-border bg-bg-card text-text-muted hover:text-text-primary"
                }`}
              >
                {len === "all" ? "4–7L" : `${len}L`}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clue Banner + Progressive Hints */}
      <div className="mb-4 rounded-xl border border-border bg-bg-card p-3.5 text-center space-y-1.5">
        <p className="text-xs text-text-muted">
          Guess the single {languageName} word meaning:
        </p>
        <p className="text-base sm:text-lg font-bold text-gold">
          &ldquo;{targetWord.source}&rdquo;
        </p>
        <p className="text-[0.65rem] text-text-muted">
          {wordLength} letters (diacritics match base letters) • {MAX_GUESSES - guesses.length} guesses left
        </p>

        {/* Progressive Clue 1 after 3 guesses */}
        {guesses.length >= 3 && !gameOver && (
          <div className="mt-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs text-gold">
            <Sparkles className="inline h-3.5 w-3.5 mr-1" />
            Clue 1: Starts with{" "}
            <strong className="uppercase">&ldquo;{targetWord.target.slice(0, 2)}...&rdquo;</strong>
            {targetWord.pronunciation ? ` • Pronunciation: [${targetWord.pronunciation}]` : ""}
          </div>
        )}

        {/* Progressive Clue 2 after 4 guesses */}
        {guesses.length >= 4 && !gameOver && maskedExample && (
          <div className="mt-1.5 rounded-lg border border-kenya-green/30 bg-kenya-green/10 px-3 py-1.5 text-xs text-kenya-green-light">
            Context Clue: <em>{maskedExample}</em>
          </div>
        )}
      </div>

      {/* 6-Row Wordle Grid */}
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
                        ? { animationDelay: `${colIdx * 70}ms` }
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

      {/* Post-Game Dictionary & Share Card */}
      {gameOver && (
        <div
          className={`mb-4 rounded-2xl p-4 sm:p-5 text-center space-y-2.5 ${
            won
              ? "border border-kenya-green/40 bg-kenya-green/10"
              : "border border-red-400/30 bg-red-400/5"
          }`}
        >
          <p className="text-lg font-bold text-text-primary flex items-center justify-center gap-2">
            {won ? (
              <>
                <DynamicIcon emoji="🎉" className="w-5 h-5 text-gold inline-block" /> Solved in{" "}
                {guesses.length}/{MAX_GUESSES}! (+{guesses.length <= 2 ? 35 : guesses.length <= 4 ? 25 : 20} XP)
              </>
            ) : (
              <>
                <DynamicIcon emoji="💡" className="w-5 h-5 text-gold inline-block" /> Keep practicing!
              </>
            )}
          </p>

          <div className="rounded-xl border border-border bg-bg-card/90 p-3.5 text-left space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-base font-extrabold text-gold">{targetWord.target}</span>
              <span className="text-xs font-semibold text-text-primary">{targetWord.source}</span>
            </div>
            {targetWord.pronunciation && (
              <p className="text-xs text-sky-light italic">[{targetWord.pronunciation}]</p>
            )}
            {targetWord.example && (
              <p className="text-xs text-text-secondary pt-1 border-t border-border/50">
                {targetWord.example}
              </p>
            )}
          </div>

          <div className="pt-1 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={handleCopyShareGrid}
              className="flex items-center gap-1.5 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold text-gold hover:bg-gold/20 transition-all cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" />
              {copiedShare ? "Copied Grid! ✓" : "Share Emoji Grid"}
            </button>
            <button
              type="button"
              onClick={() => {
                if (playMode === "daily") setPlayMode("free");
                else resetBoard("free");
              }}
              className="flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2 text-xs font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Next Word
            </button>
          </div>
        </div>
      )}

      {/* On-Screen Keyboard */}
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
                    type="button"
                    onClick={() => handleKey(key === "⌫" ? "Backspace" : key)}
                    className={`flex items-center justify-center rounded-md sm:rounded-lg font-bold transition-all active:scale-95 cursor-pointer ${
                      isSpecial
                        ? "h-10 sm:h-11 px-2 sm:px-3 text-[0.65rem] sm:text-xs shrink-0"
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
