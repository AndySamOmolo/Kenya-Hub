/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { MessageSquare, RotateCcw, Trophy } from "lucide-react";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle } from "./shared";

interface DialogueScenario {
  setting: string;
  speakerPrompt: string;
  correctResponse: string;
  options: string[];
  culturalTip: string;
}

export function MatatuShengGame({
  allWords,
  languageName,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const SESSION_ROUNDS = 6;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const scenarios = useMemo<DialogueScenario[]>(() => {
    const list: DialogueScenario[] = [];
    const shuffledWords = shuffle(allWords);

    const settings = [
      {
        title: "Sokoni (Open-Air Market Bargaining)",
        template: (src: string) =>
          `Mama Mboga asks you at the market stall how to say "${src}" in ${languageName}:`,
      },
      {
        title: "Matatu Stage & Safari Greeting",
        template: (src: string) =>
          `A fellow traveler at the stage greets you and asks for the ${languageName} word meaning "${src}":`,
      },
      {
        title: "Homestead & Elders' Baraza",
        template: (src: string) =>
          `An elder welcoming guests to the homestead asks you to name "${src}" in ${languageName}:`,
      },
    ];

    for (let i = 0; i < Math.min(SESSION_ROUNDS, shuffledWords.length); i++) {
      const w = shuffledWords[i];
      if (!w) continue;
      const distractors = shuffle(
        shuffledWords
          .filter((o) => o.target.toLowerCase() !== w.target.toLowerCase())
          .map((o) => o.target)
      ).slice(0, 3);
      if (distractors.length < 3) continue;

      const s = settings[i % settings.length];
      list.push({
        setting: s.title,
        speakerPrompt: s.template(w.source),
        correctResponse: w.target,
        options: shuffle([w.target, ...distractors]),
        culturalTip: w.example
          ? `Usage in context: "${w.example}"`
          : `In ${languageName}, "${w.target}" means "${w.source}".`,
      });
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords, languageName, sessionSeed]);

  const current = scenarios[round];

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    const isRight = opt === current.correctResponse;
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 20);
      onAwardXp?.(20, false);
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= scenarios.length) {
        playCelebrationSfx();
        setSessionDone(true);
        onAwardXp?.(0, true);
        onUpdateGameStats?.((prev) => ({ ...prev, matatuBest: Math.max(prev.matatuBest || 0, score + (isRight ? 20 : 0)) }));
      } else {
        setRound((r) => r + 1);
      }
    }, 1050);
  };

  if (scenarios.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough words available for Sokoni &amp; Matatu Dialogue.
      </p>
    );
  }

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🚐" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Sokoni &amp; Matatu Dialogue Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You navigated {scenarios.length} real-life Kenyan conversations ({score} pts).
        </p>
        <button
          type="button"
          onClick={() => {
            setRound(0);
            setScore(0);
            setPicked(null);
            setSessionDone(false);
            setSessionSeed((s) => s + 1);
          }}
          className="mt-6 flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-sm font-bold text-kenya-black transition-all active:scale-95 sm:hover:brightness-110 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" /> New Dialogue Run
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Scene {round + 1} of {scenarios.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-bold text-gold">
          <MessageSquare className="h-3.5 w-3.5" /> {current.setting}
        </span>
        <p className="text-base sm:text-lg font-bold text-text-primary leading-relaxed">
          {current.speakerPrompt}
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {current.options.map((opt, idx) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (picked !== null) {
            if (opt === current.correctResponse) {
              style = "border-kenya-green bg-kenya-green/15 text-kenya-green-light font-bold";
            } else if (picked === opt) {
              style = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => handlePick(opt)}
              className={`rounded-xl border-2 p-4 text-left text-sm font-semibold transition-all cursor-pointer ${style}`}
            >
              &ldquo;{opt}&rdquo;
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-3 text-center text-xs text-text-secondary">
          {current.culturalTip}
        </div>
      )}
    </div>
  );
}
