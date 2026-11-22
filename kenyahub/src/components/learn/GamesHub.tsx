/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CustomSelect from "@/components/ui/CustomSelect";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Gamepad2,
  Type,
  Puzzle,
  Zap,
  GalleryHorizontal,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  BookOpen,
  Compass,
  Layers,
  Globe2,
  Flame,
  Filter,
} from "lucide-react";
import type {
  CourseUnit,
  UserProgress,
  WordPair,
  GameStats,
} from "@/data/courses/types";
import {
  updateGameStats,
  recordWordPracticeResult,
} from "@/lib/learn-progress";
import { isGameSfxMuted, setGameSfxMuted } from "@/lib/game-sfx";
import { getScopedWords, type VocabScopeMode } from "./games/shared";
import { WordleGame } from "./games/WordleGame";
import { ScrambleGame } from "./games/ScrambleGame";
import { SpeedMatchGame } from "./games/SpeedMatchGame";
import { MemoryGame } from "./games/MemoryGame";
import { RiddleGame } from "./games/RiddleGame";
import { VocabQuizGame } from "./games/VocabQuizGame";
import { MethaliBuilderGame } from "./games/MethaliBuilderGame";
import { SentenceSafariGame } from "./games/SentenceSafariGame";
import { NounClassSorterGame } from "./games/NounClassSorterGame";
import { OddWordOutGame } from "./games/OddWordOutGame";
import { PolyglotBridgeGame } from "./games/PolyglotBridgeGame";
import { TongueTwisterGame } from "./games/TongueTwisterGame";

interface GamesHubProps {
  units: CourseUnit[];
  courseUnits?: CourseUnit[];
  languageName: string;
  languageId?: string;
  progress?: UserProgress;
  onUpdateProgress?: (updater: (prev: UserProgress) => UserProgress) => void;
  onAwardXp?: (xp: number, sessionComplete?: boolean) => void;
  onBack: () => void;
}

type GameType =
  | "menu"
  | "wordle"
  | "scramble"
  | "speed"
  | "memory"
  | "riddles"
  | "vocabQuiz"
  | "methali"
  | "safari"
  | "nounClass"
  | "oddWord"
  | "polyglot"
  | "twister";

export default function GamesHub({
  units,
  courseUnits,
  languageName,
  languageId,
  progress,
  onUpdateProgress,
  onAwardXp,
  onBack,
}: GamesHubProps) {
  const [activeGame, setActiveGame] = useState<GameType>("menu");
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (activeGame !== "menu") {
      document.body.dataset.khFocusMode = "true";
    } else {
      delete document.body.dataset.khFocusMode;
    }
    return () => {
      delete document.body.dataset.khFocusMode;
    };
  }, [activeGame]);
  const [scope, setScope] = useState<VocabScopeMode>("course");
  const [selectedUnitId, setSelectedUnitId] = useState<string>(
    () => (courseUnits?.[0] || units[0])?.id || ""
  );
  const [sfxMuted, setSfxMuted] = useState<boolean>(() => isGameSfxMuted());

  useEffect(() => {
    scrollToTopIfScrolled();
  }, [activeGame]);

  const effectiveCourseUnits = useMemo(
    () =>
      courseUnits && courseUnits.length > 0
        ? courseUnits
        : units.filter((u) => !u.id.startsWith("dict-unit-")),
    [courseUnits, units]
  );

  const learnedSig =
    scope === "learned"
      ? `${progress?.wordsLearned?.length ?? 0}:${progress?.reviewQueue?.length ?? 0}:${Object.keys(progress?.skillLevels ?? {}).length}`
      : "";

  const scopedWords = useMemo(
    () =>
      getScopedWords(
        units,
        effectiveCourseUnits,
        scope,
        selectedUnitId,
        scope === "learned" ? progress : undefined
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [units, effectiveCourseUnits, scope, selectedUnitId, learnedSig]
  );

  // Snapshot active pool while inside a game so mid-game XP/SRS updates never reset or re-shuffle an active board
  const activePoolRef = useRef(scopedWords);
  if (activeGame === "menu") {
    activePoolRef.current = scopedWords;
  }
  const gameWords = activeGame === "menu" ? scopedWords : activePoolRef.current;

  const handleToggleMute = () => {
    const next = !sfxMuted;
    setSfxMuted(next);
    setGameSfxMuted(next);
  };

  const handleRecordWordResult = useCallback(
    (word: WordPair, correct: boolean) => {
      if (!onUpdateProgress) return;
      onUpdateProgress((prev) =>
        recordWordPracticeResult(prev, word.target, word.source, correct)
      );
    },
    [onUpdateProgress]
  );

  const handleUpdateGameStats = useCallback(
    (updater: (prev: GameStats) => GameStats) => {
      if (!onUpdateProgress) return;
      onUpdateProgress((prev) => updateGameStats(prev, updater));
    },
    [onUpdateProgress]
  );

  const stats = progress?.gameStats;

  const scopeSelectorBar = (
    <div className="mb-5 rounded-2xl border border-border bg-bg-card p-3.5 sm:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
          <Filter className="h-3.5 w-3.5 text-gold" />
          <span>Vocabulary Pool Scope ({scopedWords.length.toLocaleString()} words active)</span>
        </div>
        <button
          type="button"
          onClick={handleToggleMute}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-elevated px-3 py-1 text-xs font-semibold text-text-secondary hover:text-gold transition-colors cursor-pointer"
          title={sfxMuted ? "Unmute Game Sound Effects" : "Mute Game Sound Effects"}
        >
          {sfxMuted ? (
            <>
              <VolumeX className="h-3.5 w-3.5 text-text-muted" />
              <span>SFX Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5 text-gold" />
              <span>SFX On</span>
            </>
          )}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {(
          [
            { id: "learned" as const, label: "My Learned Words" },
            { id: "unit" as const, label: "By Course Unit" },
            { id: "course" as const, label: "Core Curriculum" },
            { id: "dictionary" as const, label: "Full Dictionary" },
          ] as const
        ).map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setScope(s.id)}
            className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              scope === s.id
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            {s.label}
          </button>
        ))}

        {scope === "unit" && effectiveCourseUnits.length > 0 && (
          <CustomSelect
            value={selectedUnitId}
            onValueChange={(val) => setSelectedUnitId(val)}
            options={effectiveCourseUnits.map((u, idx) => ({
              value: u.id,
              label: `Unit ${idx + 1}: ${u.title.replace(/^Unit \d+:\s*/i, "")}`,
            }))}
            className="w-full sm:w-60 text-xs"
          />
        )}
      </div>
    </div>
  );

  if (activeGame === "menu") {
    const gameCards = [
      {
        id: "wordle" as GameType,
        title: `${languageName} Wordle`,
        subtitle: "Daily Word & Free Play",
        desc: `Guess a single ${languageName} word in 6 tries with progressive hints and shareable emoji grids.`,
        icon: <Type className="w-6 h-6" />,
        badgeColor: "bg-emerald-500/10 text-emerald-500",
        bestText:
          stats && stats.wordleWins > 0
            ? `${stats.wordleWins} Wins • ${stats.wordleBestStreak}🔥`
            : "Daily & 4–7L",
      },
      {
        id: "scramble" as GameType,
        title: "Word Scramble Sprint",
        subtitle: "10-Word Orthography Sprint",
        desc: `Rearrange scrambled letters (tap or type on keyboard) to spell ${languageName} vocabulary.`,
        icon: <Puzzle className="w-6 h-6" />,
        badgeColor: "bg-purple-500/10 text-purple-500",
        bestText:
          stats && stats.scrambleSolved > 0
            ? `${stats.scrambleSolved} Solved`
            : "+15 XP / Word",
      },
      {
        id: "speed" as GameType,
        title: "Speed Match Blitz",
        subtitle: "60s Bidirectional Time-Attack",
        desc: `Race the 60-second clock with 3 direction modes, +2s combo time bonuses, and streak multipliers.`,
        icon: <Zap className="w-6 h-6" />,
        badgeColor: "bg-amber-500/10 text-amber-500",
        bestText:
          stats && stats.speedBestScore > 0
            ? `Best: ${stats.speedBestScore} pts`
            : "60s Time-Attack",
      },
      {
        id: "memory" as GameType,
        title: "Memory Cards",
        subtitle: "6 / 8 / 10 Pairs + Peek Phase",
        desc: `Memorize the board during the opening peek, then match ${languageName} ↔ English pairs for Mind Palace combos.`,
        icon: <GalleryHorizontal className="w-6 h-6" />,
        badgeColor: "bg-sky-500/10 text-sky-500",
        bestText:
          stats && stats.memoryBestMoves > 0
            ? `Best: ${stats.memoryBestMoves} moves`
            : "Easy / Med / Hard",
      },
      {
        id: "riddles" as GameType,
        title: "Riddle Master",
        subtitle: "Authentic Call-and-Response",
        desc: `Solve traditional ${languageName} riddles with Native-First (+25 XP) or Clue-Revealed (+15 XP) modes.`,
        icon: <Sparkles className="w-6 h-6" />,
        badgeColor: "bg-amber-500/10 text-amber-500",
        bestText:
          stats && stats.riddlesSolved > 0
            ? `${stats.riddlesSolved} Riddles Solved`
            : "Oral Literature",
      },
      {
        id: "vocabQuiz" as GameType,
        title: "3-Heart Survival Blitz",
        subtitle: "Sudden-Death Accelerating Clock",
        desc: `Survive endless rapid-fire waves with 3 hearts and an accelerating 7.0s → 3.5s shot clock.`,
        icon: <Trophy className="w-6 h-6" />,
        badgeColor: "bg-red-500/10 text-red-400",
        bestText:
          stats && stats.survivalBestRun > 0
            ? `Best Run: ${stats.survivalBestRun} Waves`
            : "3 Hearts ❤️❤️❤️",
      },
      {
        id: "methali" as GameType,
        title: "Methali & Ngero Builder",
        subtitle: "Proverb Tile & Completion Studio",
        desc: `Reconstruct authentic ${languageName} proverbs from scrambled tiles or complete the second half.`,
        icon: <BookOpen className="w-6 h-6" />,
        badgeColor: "bg-gold/15 text-gold",
        bestText: "+25 XP / Proverb",
      },
      {
        id: "safari" as GameType,
        title: "Sentence Safari (Cloze)",
        subtitle: "Contextual Sentence Completion",
        desc: `Fill in the missing ${languageName} word inside authentic conversational and ethnographic sentences.`,
        icon: <Compass className="w-6 h-6" />,
        badgeColor: "bg-emerald-500/10 text-emerald-500",
        bestText: "8-Stop Safari",
      },
      {
        id: "nounClass" as GameType,
        title: "Grammar & Class Sorter",
        subtitle: "Bantu / Nilotic / Cushitic Morphology",
        desc: `Classify ${languageName} nouns and verbs into their proper morphological classes and semantic domains.`,
        icon: <Layers className="w-6 h-6" />,
        badgeColor: "bg-indigo-500/10 text-indigo-400",
        bestText: "Morphology Drill",
      },
      {
        id: "oddWord" as GameType,
        title: "Semantic Odd-Word-Out",
        subtitle: "Thematic Category Detective",
        desc: `Spot which 1 of the 4 ${languageName} words belongs to a different thematic category.`,
        icon: <Sparkles className="w-6 h-6" />,
        badgeColor: "bg-pink-500/10 text-pink-400",
        bestText: "Category Logic",
      },
      {
        id: "polyglot" as GameType,
        title: "Kenyan Polyglot Bridge",
        subtitle: "Bantu • Nilotic • Cushitic Cognates",
        desc: `Compare shared roots and sound shifts across Kenya's 23 Bantu, Nilotic, and Cushitic languages.`,
        icon: <Globe2 className="w-6 h-6" />,
        badgeColor: "bg-cyan-500/10 text-cyan-400",
        bestText: "Comparative Roots",
      },
      {
        id: "twister" as GameType,
        title: "Kikokotoo Tongue Twisters",
        subtitle: "Rapid Phonetic Articulation",
        desc: `Assemble and recite traditional Kenyan alliterating tongue-twisters targeting key digraphs.`,
        icon: <Flame className="w-6 h-6" />,
        badgeColor: "bg-orange-500/10 text-orange-400",
        bestText: "Phonetics Sprint",
      },
    ];

    return (
      <div className="mx-auto max-w-3xl px-0 sm:px-4 pb-8">
        <div className="mb-5">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors active:text-text-primary sm:hover:text-text-primary cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Skill Path
          </button>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-5 text-center sm:p-7">
            <div className="mb-2.5 flex justify-center">
              <Gamepad2 className="w-11 h-11 text-gold" />
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
              {languageName} Arcade &amp; Cultural Games (12)
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-text-secondary max-w-xl mx-auto">
              Master {languageName} orthography, morphology, proverbs, riddles, and conversational fluency across 12 interactive games.
            </p>
            <p className="mt-2.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-gold">
              Adaptive SRS Integration • Earned XP Counts Toward Daily Quests &amp; Streaks
            </p>
          </div>
        </div>

        {scopeSelectorBar}

        <div className="grid gap-3 sm:grid-cols-2">
          {gameCards.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGame(g.id)}
              className="group rounded-2xl border border-border bg-bg-card p-4 sm:p-5 text-left transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${g.badgeColor}`}
                    >
                      {g.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                        {g.title}
                      </h3>
                      <p className="text-[0.65rem] text-text-muted">{g.subtitle}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[0.625rem] font-bold text-gold">
                    {g.bestText}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const gameHeader = (title: string, icon: string) => (
    <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => setActiveGame("menu")}
          className="shrink-0 rounded-xl border border-border bg-bg-card p-2 text-text-muted transition-colors active:bg-bg-elevated sm:hover:text-text-primary cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl">
            <DynamicIcon emoji={icon} className="w-[1em] h-[1em]" />
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
            {title}
          </h2>
        </div>
      </div>

      <button
        type="button"
        onClick={handleToggleMute}
        className="inline-flex items-center gap-1 rounded-xl border border-border bg-bg-card px-2.5 py-1.5 text-xs font-semibold text-text-secondary hover:text-gold cursor-pointer"
      >
        {sfxMuted ? (
          <VolumeX className="h-3.5 w-3.5 text-text-muted" />
        ) : (
          <Volume2 className="h-3.5 w-3.5 text-gold" />
        )}
      </button>
    </div>
  );

  const sharedGameProps = {
    allWords: gameWords,
    courseUnits: effectiveCourseUnits,
    allUnits: units,
    languageName,
    languageId,
    progress,
    onAwardXp,
    onRecordWordResult: handleRecordWordResult,
    onUpdateGameStats: handleUpdateGameStats,
  };

  return (
    <div className="mx-auto max-w-2xl px-0 sm:px-4 pb-8">
      {activeGame === "wordle" && (
        <>
          {gameHeader(`${languageName} Wordle`, "🟩")}
          <WordleGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "scramble" && (
        <>
          {gameHeader("Word Scramble Sprint", "🔤")}
          <ScrambleGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "speed" && (
        <>
          {gameHeader("Speed Match Blitz", "⚡")}
          <SpeedMatchGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "memory" && (
        <>
          {gameHeader("Memory Cards", "🃏")}
          <MemoryGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "riddles" && (
        <>
          {gameHeader("Riddle Master", "🪶")}
          <RiddleGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "vocabQuiz" && (
        <>
          {gameHeader("3-Heart Survival Blitz", "🔥")}
          <VocabQuizGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "methali" && (
        <>
          {gameHeader("Methali & Ngero Proverb Builder", "📜")}
          <MethaliBuilderGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "safari" && (
        <>
          {gameHeader("Sentence Safari (Cloze)", "🦁")}
          <SentenceSafariGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "nounClass" && (
        <>
          {gameHeader("Grammar & Class Sorter", "🗂️")}
          <NounClassSorterGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "oddWord" && (
        <>
          {gameHeader("Semantic Odd-Word-Out", "🕵️")}
          <OddWordOutGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "polyglot" && (
        <>
          {gameHeader("Kenyan Polyglot Cognate Bridge", "🌍")}
          <PolyglotBridgeGame {...sharedGameProps} />
        </>
      )}
      {activeGame === "twister" && (
        <>
          {gameHeader("Kikokotoo Tongue Twisters", "🗣️")}
          <TongueTwisterGame {...sharedGameProps} />
        </>
      )}
    </div>
  );
}
