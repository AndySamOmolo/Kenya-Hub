/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { RotateCcw, Sparkles, Trophy } from "lucide-react";
import type { WordPair } from "@/data/courses/types";
import { getPrimaryForm, cleanExerciseText, isCleanLexicalWordPair } from "@/lib/learn-engine";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, shuffle } from "./shared";

interface OddRound {
  categoryTitle: string;
  intruderCategoryTitle: string;
  options: (WordPair & { isIntruder: boolean })[];
  intruderTarget: string;
}

export function OddWordOutGame({
  courseUnits = [],
  allUnits = [],
  languageName,
  onAwardXp,
}: GameProps) {
  const SESSION_ROUNDS = 8;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const rounds = useMemo<OddRound[]>(() => {
    const units = courseUnits.length > 0 ? courseUnits : allUnits;
    const validSkills = units
      .flatMap((u) => u.skills)
      .map((sk) => ({
        title: sk.title.replace(/^Dictionary:\s*/i, ""),
        words: sk.words
          .filter((w) => isCleanLexicalWordPair(w.target, w.source))
          .map((w) => ({
            ...w,
            target: getPrimaryForm(w.target).trim(),
            source: cleanExerciseText(getPrimaryForm(w.source)).trim(),
          }))
          .filter((w) => w.target && w.source),
      }))
      .filter((sk) => sk.words.length >= 4);

    if (validSkills.length < 2) return [];

    const generated: OddRound[] = [];
    for (let i = 0; i < SESSION_ROUNDS; i++) {
      const shuffledSkills = shuffle(validSkills);
      const mainSkill = shuffledSkills[0];
      const oddSkill =
        shuffledSkills.find((s) => s.title !== mainSkill.title) || shuffledSkills[1];
      if (!mainSkill || !oddSkill) continue;

      const threeMain = shuffle(mainSkill.words)
        .slice(0, 3)
        .map((w) => ({ ...w, isIntruder: false }));
      const mainTargets = new Set(threeMain.map((w) => w.target.toLowerCase()));
      const intruderCandidates = shuffle(oddSkill.words).filter(
        (w) => !mainTargets.has(w.target.toLowerCase())
      );
      if (intruderCandidates.length === 0) continue;
      const intruder = { ...intruderCandidates[0], isIntruder: true };

      generated.push({
        categoryTitle: mainSkill.title,
        intruderCategoryTitle: oddSkill.title,
        options: shuffle([...threeMain, intruder]),
        intruderTarget: intruder.target,
      });
    }
    return generated;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseUnits, allUnits, sessionSeed]);

  const current = rounds[round];

  const handlePick = (target: string) => {
    if (picked !== null || !current) return;
    setPicked(target);
    const isRight = target === current.intruderTarget;
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 20);
      onAwardXp?.(20);
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= rounds.length) {
        playCelebrationSfx();
        setSessionDone(true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1300);
  };

  if (rounds.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough thematic skills available for Semantic Odd-Word-Out.
      </p>
    );
  }

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🕵️" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Odd-Word-Out Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You spotted the semantic intruders across {rounds.length} rounds ({score} pts).
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

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Round {round + 1} of {rounds.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-5 text-center space-y-1.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-semibold text-gold">
          <Sparkles className="h-3 w-3" /> Semantic Category Detective
        </span>
        <p className="text-sm sm:text-base font-bold text-text-primary">
          3 of these {languageName} words belong to{" "}
          <span className="text-gold">&ldquo;{current.categoryTitle}&rdquo;</span>.
        </p>
        <p className="text-xs text-text-secondary">
          Tap the 1 word that does <strong>NOT</strong> belong!
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {current.options.map((opt, idx) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (picked !== null) {
            if (opt.isIntruder) {
              style = "border-kenya-green bg-kenya-green/15 text-kenya-green-light font-bold";
            } else if (picked === opt.target) {
              style = "border-red-400 bg-red-400/10 text-red-400";
            }
          }
          return (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => handlePick(opt.target)}
              className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${style}`}
            >
              <div className="text-base font-bold">{opt.target}</div>
              {picked !== null && (
                <div className="mt-1 text-xs opacity-90">
                  Meaning: <strong>{opt.source}</strong>{" "}
                  {opt.isIntruder ? `(${current.intruderCategoryTitle})` : ""}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
