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

interface MemoryCard {
  id: number;
  text: string;
  pairId: number;
  type: "target" | "source";
}

export function MemoryGame({ allWords, languageName }: GameProps) {
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

  if (allWords.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-text-muted">
        Memory Cards will be available when this course has vocabulary.
      </p>
    );
  }

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
        <div className="flex justify-center mb-4 animate-bounce-in">
          <DynamicIcon emoji={stars === 3 ? "🏆" : stars === 2 ? "⭐" : "👍"} className="w-14 h-14 text-gold" />
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
              className={`relative flex aspect-square items-center justify-center rounded-xl border-2 px-2 pt-2 pb-4 sm:pb-5 text-center transition-all ${
                isMatched
                  ? "border-kenya-green/40 bg-kenya-green/10"
                  : isFlipped
                  ? "border-gold bg-gold/5 animate-flip-in"
                  : "border-border bg-bg-card active:scale-95 sm:hover:border-gold/40"
              }`}
            >
              {isFlipped ? (
                <span
                  className={`text-[0.7rem] sm:text-xs md:text-sm font-semibold leading-tight line-clamp-3 break-words px-0.5 ${
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


