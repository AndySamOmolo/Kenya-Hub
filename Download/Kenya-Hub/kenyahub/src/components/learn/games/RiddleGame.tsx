/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { Eye, EyeOff, RotateCcw, Sparkles, Trophy } from "lucide-react";
import { getRiddlesForLanguage, type RiddleItem } from "@/data/courses/riddles-bank";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle, RIDDLE_CALL_RESPONSE, cleanQuizGloss, pickBalancedDistractors } from "./shared";

export function RiddleGame({
  languageName,
  languageId,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showEnglishClue, setShowEnglishClue] = useState(false);
  const [clueRevealedThisRound, setClueRevealedThisRound] = useState(false);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const riddlesPool = useMemo<RiddleItem[]>(() => {
    const items = getRiddlesForLanguage(languageId, languageName);
    return shuffle(items).slice(0, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageName, languageId, sessionSeed]);

  const callResponse =
    RIDDLE_CALL_RESPONSE[(languageId || "").toLowerCase()] ||
    RIDDLE_CALL_RESPONSE.swahili;

  const currentRiddle = riddlesPool[round];

  const cleanAnswer = currentRiddle ? cleanQuizGloss(currentRiddle.answer) || currentRiddle.answer : "";

  const options = useMemo(() => {
    if (!currentRiddle) return [];
    const allForLang = getRiddlesForLanguage(languageId, languageName);
    const candidates = allForLang.map((r) => cleanQuizGloss(r.answer) || r.answer);
    const distractors = pickBalancedDistractors(cleanAnswer, candidates, 3);
    return shuffle([cleanAnswer, ...distractors]);
  }, [currentRiddle, cleanAnswer, languageId, languageName]);

  const handlePick = (ans: string) => {
    if (feedback !== null || !currentRiddle) return;
    const isRight = ans === cleanAnswer;
    setFeedback(ans);

    if (isRight) {
      playCorrectSfx();
      const earned = clueRevealedThisRound ? 15 : 25;
      setScore((s) => s + earned);
      setCorrectCount((c) => c + 1);
      onAwardXp?.(earned, false);
      onUpdateGameStats?.((prev) => ({
        ...prev,
        riddlesSolved: prev.riddlesSolved + 1,
      }));
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setFeedback(null);
      setShowEnglishClue(false);
      setClueRevealedThisRound(false);
      if (round + 1 >= riddlesPool.length) {
        playCelebrationSfx();
        setSessionDone(true);
        onAwardXp?.(0, true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1000);
  };

  const restartSession = () => {
    setScore(0);
    setRound(0);
    setCorrectCount(0);
    setFeedback(null);
    setShowEnglishClue(false);
      setClueRevealedThisRound(false);
    setSessionDone(false);
    setSessionSeed((s) => s + 1);
  };

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🪶" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          {callResponse.culturalName} Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You solved {correctCount} of {riddlesPool.length} traditional riddles ({score} pts).
        </p>
        <button
          type="button"
          onClick={restartSession}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> New Riddle Session
        </button>
      </div>
    );
  }

  if (!currentRiddle) return null;

  return (
    <div>
      {/* Traditional Call-and-Response Banner */}
      <div className="mb-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs">
          <Sparkles className="h-4 w-4 text-gold shrink-0" />
          <span className="font-bold text-gold">{callResponse.challenger}</span>
          <span className="text-text-muted">→</span>
          <span className="font-extrabold text-kenya-green-light">
            {callResponse.audience}
          </span>
        </div>
        <span className="text-[0.6875rem] font-semibold text-text-secondary">
          {callResponse.culturalName}
        </span>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Riddle {round + 1} of {riddlesPool.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center space-y-3">
        <p className="text-xs text-gold font-semibold">{currentRiddle.origin}</p>
        <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-text-primary">
          &ldquo;{currentRiddle.riddle}&rdquo;
        </p>

        {showEnglishClue ? (
          <p className="text-xs sm:text-sm text-text-secondary italic pt-1 border-t border-border/50">
            English Clue: &ldquo;{currentRiddle.translation}&rdquo; (+15 XP)
          </p>
        ) : (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowEnglishClue(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-bg-elevated px-3 py-1 text-xs font-semibold text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              <Eye className="h-3.5 w-3.5 text-gold" /> Reveal English Clue (Native First = +25 XP)
            </button>
          </div>
        )}
        {showEnglishClue && (
          <button
            type="button"
            onClick={() => setShowEnglishClue(false)}
            className="inline-flex items-center gap-1 text-[0.6875rem] text-text-muted hover:text-text-secondary cursor-pointer"
          >
            <EyeOff className="h-3 w-3" /> Hide Clue
          </button>
        )}
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          let btnStyle =
            "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (feedback !== null) {
            if (opt === cleanAnswer) {
              btnStyle =
                "border-kenya-green bg-kenya-green/10 text-kenya-green font-bold";
            } else if (feedback === opt) {
              btnStyle = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={opt}
              type="button"
              disabled={feedback !== null}
              onClick={() => handlePick(opt)}
              className={`rounded-xl border-2 p-4 text-left text-sm font-medium transition-all active:scale-[0.98] cursor-pointer ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
