/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Gamepad2,
  Type,
  Puzzle,
  Zap,
  GalleryHorizontal,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { CourseUnit } from "@/data/courses/types";
import { getAllWords } from "./games/shared";
import { WordleGame } from "./games/WordleGame";
import { ScrambleGame } from "./games/ScrambleGame";
import { SpeedMatchGame } from "./games/SpeedMatchGame";
import { MemoryGame } from "./games/MemoryGame";
import { RiddleGame } from "./games/RiddleGame";
import { VocabQuizGame } from "./games/VocabQuizGame";

interface GamesHubProps {
  units: CourseUnit[];
  languageName: string;
  onBack: () => void;
}

type GameType = "menu" | "wordle" | "scramble" | "speed" | "memory" | "riddles" | "vocabQuiz";

export default function GamesHub({
  units,
  languageName,
  onBack,
}: GamesHubProps) {
  const [activeGame, setActiveGame] = useState<GameType>("menu");

  useEffect(() => {
    scrollToTopIfScrolled();
  }, [activeGame]);

  const allWords = useMemo(() => getAllWords(units), [units]);

  if (activeGame === "menu") {
    return (
      <div className="mx-auto max-w-2xl px-0 sm:px-4 pb-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors active:text-text-primary sm:hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to lessons
          </button>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-6 text-center sm:p-8">
            <div className="mb-3 flex justify-center"><Gamepad2 className="w-12 h-12 text-gold" /></div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
              Language Games
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Practice {languageName} vocabulary through fun mini-games
            </p>
            <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-wide text-text-muted">
              Casual practice only · scores do not change lesson progress
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Type className="w-6 h-6" />
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                <Puzzle className="w-6 h-6" />
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Zap className="w-6 h-6" />
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                <GalleryHorizontal className="w-6 h-6" />
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

          {/* Riddle Master */}
          <button
            onClick={() => setActiveGame("riddles")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Riddle Master
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Traditional oral literature
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Solve authentic Kenyan proverbs, riddles, and cultural sayings.
            </p>
          </button>

          {/* Vocabulary Blitz */}
          <button
            onClick={() => setActiveGame("vocabQuiz")}
            className="group rounded-2xl border border-border bg-bg-card p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  Vocabulary Blitz
                </h3>
                <p className="text-[0.6rem] text-text-muted">
                  Fast target word identification
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary">
              Rapid multiple choice challenge testing mastery of course vocabulary.
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
        <span className="text-xl"><DynamicIcon emoji={icon} className="w-[1em] h-[1em]" /></span>
        <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
          {title}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-2xl px-0 sm:px-4 pb-8">
      {activeGame === "wordle" && (
        <>
          {gameHeader("Wordle", "🟩")}
          <WordleGame allWords={allWords} languageName={languageName} />
        </>
      )}
      {activeGame === "scramble" && (
        <>
          {gameHeader("Word Scramble", "🔤")}
          <ScrambleGame allWords={allWords} languageName={languageName} />
        </>
      )}
      {activeGame === "speed" && (
        <>
          {gameHeader("Speed Match", "⚡")}
          <SpeedMatchGame allWords={allWords} languageName={languageName} />
        </>
      )}
      {activeGame === "memory" && (
        <>
          {gameHeader("Memory Cards", "🃏")}
          <MemoryGame allWords={allWords} languageName={languageName} />
        </>
      )}
      {activeGame === "riddles" && (
        <>
          {gameHeader("Riddle Master", "🧩")}
          <RiddleGame allWords={allWords} languageName={languageName} />
        </>
      )}
      {activeGame === "vocabQuiz" && (
        <>
          {gameHeader("Vocabulary Blitz", "🎯")}
          <VocabQuizGame allWords={allWords} languageName={languageName} />
        </>
      )}
    </div>
  );
}


