/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BookOpen, Puzzle, RotateCcw, Sparkles, Trophy } from "lucide-react";
import {
  CULTURAL_WISDOM,
  getCulturalWisdomForLanguage,
  type CulturalWisdomItem,
} from "@/data/courses/cultural-wisdom";
import {
  playKeyTapSfx,
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, pickRandom, cleanQuizGloss, isValidQuizPair, pickBalancedDistractors } from "./shared";

export function MethaliBuilderGame({
  allWords,
  languageName,
  languageId,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const SESSION_ROUNDS = 6;
  const [mode, setMode] = useState<"tiles" | "complete">("tiles");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  // Tile mode state
  const [currentProverb, setCurrentProverb] = useState<CulturalWisdomItem | null>(null);
  const [targetTokens, setTargetTokens] = useState<string[]>([]);
  const [tilePool, setTilePool] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [solved, setSolved] = useState<boolean | null>(null);

  // Complete-the-proverb mode state
  const [promptStem, setPromptStem] = useState("");
  const [correctEnding, setCorrectEnding] = useState("");
  const [endingOptions, setEndingOptions] = useState<string[]>([]);
  const [pickedEnding, setPickedEnding] = useState<string | null>(null);

  const proverbsPool = useMemo(() => {
    const langItems = getCulturalWisdomForLanguage(languageId || "swahili").filter(
      (p) => p.nativeText && p.nativeText.trim().split(/\s+/).length >= 3
    );
    if (langItems.length >= 3) return langItems;
    return CULTURAL_WISDOM.filter(
      (p) => p.nativeText && p.nativeText.trim().split(/\s+/).length >= 3
    );
  }, [languageId]);

  const initRound = useCallback(
    (activeMode: "tiles" | "complete" = mode) => {
      if (proverbsPool.length === 0) return;
      const item = pickRandom(proverbsPool);
      setCurrentProverb(item);
      setSolved(null);
      setPickedEnding(null);

      const cleanText = item.nativeText
        .replace(/\s*\([A-Z][^)]*\d{4}[^)]*\)\.?\s*$/g, "")
        .replace(/[.!?]+$/g, "")
        .trim();
      const words = cleanText.split(/\s+/).filter(Boolean);

      if (activeMode === "tiles") {
        const capped = words.slice(0, 9);
        setTargetTokens(capped);
        const tileCandidates = allWords
          .filter((w) => isValidQuizPair(w.target, w.source))
          .map((w) => cleanQuizGloss(w.target).split(/\s+/)[0])
          .filter(
            (w) =>
              w &&
              w.length >= 3 &&
              !capped.some((c) => c.toLowerCase() === w.toLowerCase())
          );
        const distractorWords = pickBalancedDistractors(capped[0] || words[0], tileCandidates, 2);
        setTilePool(shuffle([...capped, ...distractorWords]));
        setSelectedIndices([]);
      } else {
        const splitAt = Math.max(1, Math.floor(words.length / 2));
        const firstHalf = words.slice(0, splitAt).join(" ") + " ...";
        const secondHalf = words.slice(splitAt).join(" ");
        setPromptStem(firstHalf);
        setCorrectEnding(secondHalf);

        const endingCandidates = proverbsPool
          .filter((p) => p.id !== item.id)
          .map((p) => {
            const cleanedP = cleanQuizGloss(p.nativeText).replace(/[.!?]+$/g, "").trim();
            const w = cleanedP.split(/\s+/).filter(Boolean);
            return w.slice(Math.max(1, Math.floor(w.length / 2))).join(" ");
          })
          .filter(Boolean);
        const otherEndings = pickBalancedDistractors(secondHalf, endingCandidates, 3);
        setEndingOptions(shuffle([secondHalf, ...otherEndings]));
      }
    },
    [proverbsPool, allWords, mode]
  );

  useEffect(() => {
    initRound(mode);
  }, [initRound, mode]);

  const handleTileTap = (idx: number) => {
    if (solved !== null || selectedIndices.includes(idx)) return;
    playKeyTapSfx();
    const next = [...selectedIndices, idx];
    setSelectedIndices(next);

    if (next.length === targetTokens.length) {
      const attempt = next.map((i) => tilePool[i]).join(" ").toLowerCase();
      const expected = targetTokens.join(" ").toLowerCase();
      if (attempt === expected) {
        playCorrectSfx();
        setSolved(true);
        setScore((s) => s + 25);
        onAwardXp?.(25, false);
        onUpdateGameStats?.((prev) => ({ ...prev, methaliSolved: (prev.methaliSolved || 0) + 1 }));
      } else {
        playWrongSfx();
        setSolved(false);
        setTimeout(() => {
          setSelectedIndices([]);
          setSolved(null);
        }, 650);
      }
    }
  };

  const handleEndingPick = (opt: string) => {
    if (pickedEnding !== null) return;
    setPickedEnding(opt);
    const isRight = opt.toLowerCase() === correctEnding.toLowerCase();
    if (isRight) {
      playCorrectSfx();
      setSolved(true);
      setScore((s) => s + 20);
      onAwardXp?.(20, false);
      onUpdateGameStats?.((prev) => ({ ...prev, methaliSolved: (prev.methaliSolved || 0) + 1 }));
    } else {
      playWrongSfx();
      setSolved(false);
    }
  };

  const handleNext = () => {
    if (round + 1 >= SESSION_ROUNDS) {
      playCelebrationSfx();
      setSessionDone(true);
      onAwardXp?.(0, true);
    } else {
      setRound((r) => r + 1);
      initRound(mode);
    }
  };

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="📜" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Methali &amp; Wisdom Session Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You mastered {SESSION_ROUNDS} {languageName} proverbs and earned{" "}
          <strong className="text-gold">{score} pts</strong>!
        </p>
        <button
          type="button"
          onClick={() => {
            setRound(0);
            setScore(0);
            setSessionDone(false);
            initRound(mode);
          }}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  if (!currentProverb) return null;

  return (
    <div>
      {/* Mode Switcher */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-xl border border-border bg-bg-card p-1">
          <button
            type="button"
            onClick={() => setMode("tiles")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              mode === "tiles"
                ? "bg-gold text-kenya-black"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Puzzle className="h-3.5 w-3.5" /> Tile Assembly
          </button>
          <button
            type="button"
            onClick={() => setMode("complete")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              mode === "complete"
                ? "bg-gold text-kenya-black"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" /> Finish the Proverb
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-text-muted">
            Proverb {round + 1}/{SESSION_ROUNDS}
          </span>
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1">
            <Trophy className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-bold text-gold">{score} pts</span>
          </div>
        </div>
      </div>

      {/* Cultural Wisdom Clue Banner */}
      <div className="mb-4 rounded-2xl border border-border bg-bg-card p-5 text-center space-y-2">
        <span className="inline-block rounded-full bg-gold/15 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-bold text-gold">
          {currentProverb.category || `${languageName} Oral Wisdom`}
        </span>
        <p className="text-xs text-text-muted">Cultural Meaning &amp; Moral:</p>
        <p className="text-base sm:text-lg font-bold text-text-primary">
          &ldquo;{currentProverb.meaning}&rdquo;
        </p>
        {currentProverb.literalTranslation && (
          <p className="text-xs text-text-secondary italic">
            Literal: &ldquo;{currentProverb.literalTranslation}&rdquo;
          </p>
        )}
      </div>

      {mode === "tiles" ? (
        <>
          {/* Assembled Proverb Zone */}
          <div
            className={`mb-4 flex min-h-[4rem] flex-wrap items-center justify-center gap-2 rounded-xl border-2 border-dashed p-3.5 ${
              solved === true
                ? "border-kenya-green bg-kenya-green/10"
                : solved === false
                ? "border-red-400 bg-red-400/10 animate-shake"
                : "border-border bg-bg-card/50"
            }`}
          >
            {selectedIndices.length > 0 ? (
              selectedIndices.map((poolIdx, pos) => (
                <button
                  key={pos}
                  type="button"
                  disabled={solved === true}
                  onClick={() =>
                    setSelectedIndices((prev) => prev.filter((_, i) => i !== pos))
                  }
                  className="rounded-lg border border-gold/40 bg-gold/15 px-3 py-1.5 text-sm font-bold text-gold hover:bg-gold/25 transition-all cursor-pointer"
                >
                  {tilePool[poolIdx]}
                </button>
              ))
            ) : (
              <p className="text-xs italic text-text-muted">
                Tap the {targetTokens.length} {languageName} words in order to build the proverb...
              </p>
            )}
          </div>

          {/* Scrambled Word Tiles */}
          {solved !== true && (
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {tilePool.map((word, idx) => {
                const used = selectedIndices.includes(idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={used}
                    onClick={() => handleTileTap(idx)}
                    className={`rounded-xl border-2 px-3.5 py-2 text-sm font-bold transition-all cursor-pointer ${
                      used
                        ? "border-border/20 bg-bg-elevated/30 text-text-muted/25 cursor-not-allowed"
                        : "border-border bg-bg-card text-text-primary hover:border-gold/50 active:scale-95"
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-4 rounded-xl border border-gold/30 bg-gold/5 p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Complete the {languageName} proverb:</p>
            <p className="font-[family-name:var(--font-outfit)] text-xl font-bold text-gold">
              &ldquo;{promptStem}&rdquo;
            </p>
          </div>
          <div className="mb-4 grid gap-2.5 sm:grid-cols-2">
            {endingOptions.map((opt, idx) => {
              let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
              if (pickedEnding !== null) {
                if (opt.toLowerCase() === correctEnding.toLowerCase()) {
                  style = "border-kenya-green bg-kenya-green/15 text-kenya-green-light font-bold";
                } else if (pickedEnding === opt) {
                  style = "border-red-400 bg-red-400/10 text-red-400";
                }
              }
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={pickedEnding !== null}
                  onClick={() => handleEndingPick(opt)}
                  className={`rounded-xl border-2 p-3.5 text-left text-sm transition-all cursor-pointer ${style}`}
                >
                  ... {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Ethnographic Citation & Next Button */}
      {(solved === true || pickedEnding !== null) && (
        <div className="mt-4 rounded-xl border border-kenya-green/30 bg-kenya-green/10 p-4 space-y-3">
          <div className="flex items-start gap-2 text-xs text-text-secondary">
            <BookOpen className="h-4 w-4 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gold">{currentProverb.nativeText}</p>
              {currentProverb.source && (
                <p className="text-[0.6875rem] text-text-muted mt-0.5">
                  Source: {currentProverb.source}
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="w-full rounded-xl bg-gold py-2.5 text-sm font-bold text-kenya-black hover:brightness-110 transition-all cursor-pointer"
          >
            {round + 1 >= SESSION_ROUNDS ? "Finish Session →" : "Next Proverb →"}
          </button>
        </div>
      )}
    </div>
  );
}
