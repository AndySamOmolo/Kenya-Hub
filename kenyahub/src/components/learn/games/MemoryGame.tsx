/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useCallback, useEffect, useState } from "react";
import { Eye, Flame, Hash, RotateCcw, Star } from "lucide-react";
import { getPrimaryForm } from "@/lib/learn-engine";
import {
  playKeyTapSfx,
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, cleanQuizGloss, isValidQuizPair } from "./shared";

interface MemoryCard {
  id: number;
  text: string;
  pairId: number;
  type: "target" | "source";
}

export function MemoryGame({
  allWords,
  languageName,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const [pairCount, setPairCount] = useState<6 | 8 | 10>(6);
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [matchStreak, setMatchStreak] = useState(0);
  const [bonusXpEarned, setBonusXpEarned] = useState(0);
  const [firstFlip, setFirstFlip] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const initGame = useCallback(
    (pairsTarget: 6 | 8 | 10 = pairCount) => {
      const seenTargets = new Set<string>();
      const seenSources = new Set<string>();
      const selected: typeof allWords = [];
      for (const w of shuffle(allWords)) {
        if (!isValidQuizPair(w.target, w.source) && w.target.length <= 24 && w.source.length <= 28) continue;
        const t = cleanQuizGloss(getPrimaryForm(w.target));
        const s = cleanQuizGloss(getPrimaryForm(w.source));
        if (!t || !s) continue;
        if (seenTargets.has(t.toLowerCase()) || seenSources.has(s.toLowerCase()))
          continue;
        seenTargets.add(t.toLowerCase());
        seenSources.add(s.toLowerCase());
        selected.push({ ...w, target: t, source: s });
        if (selected.length >= pairsTarget) break;
      }

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
          text: word.source,
          pairId: idx,
          type: "source",
        });
      });
      setCards(shuffle(newCards));
      setFlipped(new Set());
      setMatched(new Set());
      setMoves(0);
      setMatchStreak(0);
      setBonusXpEarned(0);
      setFirstFlip(null);
      setIsChecking(false);
      setGameWon(false);
      setIsPeeking(true);
      setStartTime(0);
      setEndTime(0);

      const timer = setTimeout(() => {
        setIsPeeking(false);
        setStartTime(performance.now());
      }, 2200);
      return () => clearTimeout(timer);
    },
    [allWords, pairCount]
  );

  useEffect(() => {
    const cleanup = initGame(pairCount);
    return cleanup;
  }, [initGame, pairCount]);

  if (allWords.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-text-muted">
        Memory Cards will be available when this course has vocabulary.
      </p>
    );
  }

  const handleFlip = (cardId: number, eventTime: number) => {
    if (isPeeking || isChecking || flipped.has(cardId) || matched.has(cardId))
      return;

    playKeyTapSfx();
    const newFlipped = new Set(flipped);
    newFlipped.add(cardId);
    setFlipped(newFlipped);

    if (firstFlip === null) {
      setFirstFlip(cardId);
    } else {
      setIsChecking(true);
      const nextMoves = moves + 1;
      setMoves(nextMoves);

      const firstCard = cards.find((c) => c.id === firstFlip);
      const secondCard = cards.find((c) => c.id === cardId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        const newMatched = new Set(matched);
        newMatched.add(firstFlip);
        newMatched.add(cardId);
        setMatched(newMatched);

        const nextStreak = matchStreak + 1;
        setMatchStreak(nextStreak);
        const comboBonus = nextStreak >= 2 ? 5 : 0;
        const nextBonusXp = bonusXpEarned + comboBonus;
        setBonusXpEarned(nextBonusXp);

        if (newMatched.size === cards.length) {
          playCelebrationSfx();
          setGameWon(true);
          setEndTime(eventTime);
          const baseXp = pairCount === 10 ? 40 : pairCount === 8 ? 30 : 25;
          onAwardXp?.(baseXp + nextBonusXp);
          onUpdateGameStats?.((prev) => ({
            ...prev,
            memoryBestMoves:
              prev.memoryBestMoves === 0
                ? nextMoves
                : Math.min(prev.memoryBestMoves, nextMoves),
          }));
        } else {
          playCorrectSfx();
        }

        setTimeout(() => {
          setFirstFlip(null);
          setIsChecking(false);
          setFlipped(new Set());
        }, 380);
      } else {
        playWrongSfx();
        setMatchStreak(0);
        setTimeout(() => {
          setFlipped(new Set());
          setFirstFlip(null);
          setIsChecking(false);
        }, 750);
      }
    }
  };

  const getStars = () => {
    if (moves <= pairCount + 2) return 3;
    if (moves <= Math.round(pairCount * 1.8)) return 2;
    return 1;
  };

  if (gameWon) {
    const timeTaken = Math.max(1, Math.round((endTime - startTime) / 1000));
    const stars = getStars();
    const baseXp = pairCount === 10 ? 40 : pairCount === 8 ? 30 : 25;

    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="flex justify-center mb-4 animate-bounce-in">
          <DynamicIcon
            emoji={stars === 3 ? "🏆" : stars === 2 ? "⭐" : "👍"}
            className="w-14 h-14 text-gold"
          />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          All {pairCount} Pairs Matched! (+{baseXp + bonusXpEarned} XP)
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

        <div className="mt-5 grid grid-cols-3 gap-3 w-full max-w-sm">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-lg font-bold text-text-primary">{moves}</div>
            <div className="text-[0.6rem] text-text-muted">Moves</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-lg font-bold text-text-primary">{timeTaken}s</div>
            <div className="text-[0.6rem] text-text-muted">Time</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-lg font-bold text-gold">+{bonusXpEarned}</div>
            <div className="text-[0.6rem] text-text-muted">Combo XP</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => initGame(pairCount)}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Difficulty Tier Selector */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-xl border border-border bg-bg-card p-1">
          {([6, 8, 10] as const).map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setPairCount(tier)}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                pairCount === tier
                  ? "bg-gold text-kenya-black"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tier === 6 ? "Easy (6 Pairs)" : tier === 8 ? "Medium (8)" : "Hard (10)"}
            </button>
          ))}
        </div>

        {isPeeking && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold animate-pulse">
            <Eye className="h-3.5 w-3.5" /> Memorize Board...
          </span>
        )}
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1.5">
            <Hash className="h-3.5 w-3.5 text-text-muted" />
            <span className="text-xs font-bold text-text-primary">{moves} moves</span>
          </div>
          {matchStreak >= 2 && (
            <div className="flex items-center gap-1 rounded-full bg-orange-400/15 px-2.5 py-1 text-xs font-bold text-orange-400">
              <Flame className="h-3.5 w-3.5" /> {matchStreak}x Mind Palace (+5 XP)
            </div>
          )}
        </div>
        <div className="text-xs text-text-muted font-semibold">
          {matched.size / 2} / {cards.length / 2} pairs
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {cards.map((card) => {
          const isFlipped =
            isPeeking || flipped.has(card.id) || matched.has(card.id);
          const isMatched = matched.has(card.id);

          return (
            <button
              key={card.id}
              type="button"
              onClick={(event) => handleFlip(card.id, event.timeStamp)}
              className={`relative flex min-h-[5.25rem] sm:min-h-[6rem] items-center justify-center rounded-xl border-2 px-2 pt-2 pb-5 text-center transition-all cursor-pointer ${
                isMatched
                  ? "border-kenya-green/40 bg-kenya-green/10"
                  : isFlipped
                  ? "border-gold bg-gold/5 animate-flip-in"
                  : "border-border bg-bg-card active:scale-95 sm:hover:border-gold/40"
              }`}
            >
              {isFlipped ? (
                <span
                  className={`text-xs sm:text-sm font-semibold leading-snug line-clamp-3 break-words px-0.5 ${
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
                <span className="text-xl sm:text-2xl opacity-30">?</span>
              )}
              {isFlipped && (
                <span
                  className={`absolute bottom-1 text-[0.55rem] font-bold uppercase tracking-wider ${
                    isMatched
                      ? "text-kenya-green/70"
                      : card.type === "target"
                      ? "text-gold/70"
                      : "text-text-muted/70"
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
