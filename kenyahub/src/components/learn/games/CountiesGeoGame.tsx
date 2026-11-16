/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { MapPin, RotateCcw, Trophy } from "lucide-react";
import { PUBLISHED_COURSES } from "@/data/courses/registry";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle } from "./shared";

interface GeoQuestion {
  prompt: string;
  subprompt: string;
  correctAnswer: string;
  options: string[];
  fact: string;
}

export function CountiesGeoGame({ languageId, onAwardXp }: GameProps) {
  const SESSION_ROUNDS = 8;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const questions = useMemo<GeoQuestion[]>(() => {
    const qList: GeoQuestion[] = [];
    const courses = shuffle(PUBLISHED_COURSES);

    for (const c of courses) {
      const cfg = c.config;
      const countiesStr = cfg.counties.slice(0, 3).join(", ");
      const otherCountySets = shuffle(
        PUBLISHED_COURSES.filter((o) => o.config.id !== cfg.id).map((o) =>
          o.config.counties.slice(0, 3).join(", ")
        )
      ).slice(0, 3);

      qList.push({
        prompt: `In which Kenyan counties is ${cfg.name} (${cfg.nativeName}) primarily spoken?`,
        subprompt: `Language Family: ${cfg.family} • Speakers: ${cfg.speakers}`,
        correctAnswer: countiesStr,
        options: shuffle([countiesStr, ...otherCountySets]),
        fact: `${cfg.name} (${cfg.nativeName}) is a ${cfg.family} language spoken across ${cfg.counties.join(", ")}.`,
      });

      const otherLangs = shuffle(
        PUBLISHED_COURSES.filter((o) => o.config.id !== cfg.id).map(
          (o) => `${o.config.name} (${o.config.nativeName})`
        )
      ).slice(0, 3);
      const correctLang = `${cfg.name} (${cfg.nativeName})`;

      qList.push({
        prompt: `Which Kenyan language is indigenous to ${countiesStr}?`,
        subprompt: `Clue: ${cfg.family} family (${cfg.speakers} speakers)`,
        correctAnswer: correctLang,
        options: shuffle([correctLang, ...otherLangs]),
        fact: cfg.description,
      });
    }

    // Prioritize questions involving the active language first
    const activeFirst = qList.sort((a, b) => {
      const aMatch = languageId && a.fact.toLowerCase().includes(languageId) ? -1 : 0;
      const bMatch = languageId && b.fact.toLowerCase().includes(languageId) ? -1 : 0;
      return aMatch - bMatch;
    });
    return activeFirst.slice(0, SESSION_ROUNDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageId, sessionSeed]);

  const current = questions[round];

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    const isRight = opt === current.correctAnswer;
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 20);
      onAwardXp?.(20);
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= questions.length) {
        playCelebrationSfx();
        setSessionDone(true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1200);
  };

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🗺️" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          47 Counties &amp; Homelands Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You mapped Kenya&apos;s linguistic homelands across {questions.length} rounds ({score} pts).
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
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          County {round + 1} of {questions.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-semibold text-gold">
          <MapPin className="h-3.5 w-3.5" /> 47 Counties Linguistic Atlas
        </span>
        <p className="font-[family-name:var(--font-outfit)] text-lg sm:text-xl font-bold text-text-primary">
          {current.prompt}
        </p>
        <p className="text-xs text-text-secondary">{current.subprompt}</p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {current.options.map((opt, idx) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (picked !== null) {
            if (opt === current.correctAnswer) {
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
              className={`rounded-xl border-2 p-4 text-left text-sm font-medium transition-all cursor-pointer ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-3 text-center text-xs text-text-secondary">
          <strong className="text-gold">Atlas Note:</strong> {current.fact}
        </div>
      )}
    </div>
  );
}
