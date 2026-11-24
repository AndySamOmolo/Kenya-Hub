/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMemo, useState } from "react";
import { Compass, RotateCcw, Trophy } from "lucide-react";
import { cleanExerciseText, getPrimaryForm } from "@/lib/learn-engine";
import {
  playCorrectSfx,
  playWrongSfx,
  playCelebrationSfx,
} from "@/lib/game-sfx";
import { type GameProps, cleanQuizGloss, isValidQuizPair, pickBalancedDistractors, seededRandom } from "./shared";

interface ClozeChallenge {
  maskedSentence: string;
  englishSentence: string;
  missingWord: string;
  options: string[];
  skillTitle: string;
}

function shuffleWithSeed<T>(items: T[], seed: string): T[] {
  return items
    .map((item, index) => ({
      item,
      index,
      rank: seededRandom(`${seed}:${index}`)(),
    }))
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .map(({ item }) => item);
}

export function SentenceSafariGame({
  allWords,
  courseUnits = [],
  allUnits = [],
  languageName,
  onAwardXp,
  onUpdateGameStats,
}: GameProps) {
  const SESSION_ROUNDS = 8;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [sessionSeed, setSessionSeed] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);

  const challenges = useMemo<ClozeChallenge[]>(() => {
    const units = courseUnits.length > 0 ? courseUnits : allUnits;
    const pool: ClozeChallenge[] = [];
    const wordTargets = allWords
      .filter((w) => isValidQuizPair(w.target, w.source))
      .map((w) => cleanQuizGloss(w.target))
      .filter((w) => w && !w.includes(" ") && w.length >= 3);

    for (const unit of units) {
      for (const skill of unit.skills) {
        for (const sent of skill.sentences || []) {
          const targetSent = cleanExerciseText(sent.target).trim();
          const sourceSent = cleanExerciseText(sent.source).trim();
          if (!targetSent || !sourceSent) continue;
          const tokens = targetSent.split(/\s+/);
          if (tokens.length < 3 || tokens.length > 14) continue;

          // Pick a content word (length >= 3) to mask
          const candidates = tokens
            .map((tok, idx) => ({
              tok,
              clean: tok.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'-]/g, ""),
              idx,
            }))
            .filter((c) => c.clean.length >= 3);
          if (candidates.length === 0) continue;

          const sentenceSeed = `${languageName}:${sessionSeed}:${targetSent}`;
          const chosen = candidates[Math.floor(seededRandom(`${sentenceSeed}:word`)() * candidates.length)];
          const maskedTokens = [...tokens];
          maskedTokens[chosen.idx] = "_____";

          const distractors = pickBalancedDistractors(chosen.clean, wordTargets, 3);
          if (distractors.length < 3) continue;

          pool.push({
            maskedSentence: maskedTokens.join(" "),
            englishSentence: sourceSent,
            missingWord: chosen.clean,
            options: shuffleWithSeed([chosen.clean, ...distractors], `${sentenceSeed}:options`),
            skillTitle: skill.title,
          });
        }

        // Also build contextual clozes from word examples if needed
        for (const w of skill.words) {
          if (!w.example) continue;
          if (!isValidQuizPair(w.target, w.source)) continue;
          const primaryTarget = cleanQuizGloss(getPrimaryForm(w.target));
          if (!primaryTarget || primaryTarget.includes(" ")) continue;
          const regex = new RegExp(`\\b${primaryTarget.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
          if (regex.test(w.example)) {
            const masked = w.example.replace(regex, "_____");
            const distractors = pickBalancedDistractors(primaryTarget, wordTargets, 3);
            if (distractors.length >= 3) {
              pool.push({
                maskedSentence: masked,
                englishSentence: `Meaning of missing word: "${cleanQuizGloss(w.source)}"`,
                missingWord: primaryTarget,
                options: shuffleWithSeed(
                  [primaryTarget, ...distractors],
                  `${languageName}:${sessionSeed}:${w.example}:options`
                ),
                skillTitle: skill.title,
              });
            }
          }
        }
      }
    }
    return shuffleWithSeed(pool, `${languageName}:${sessionSeed}:pool`).slice(0, SESSION_ROUNDS);
  }, [courseUnits, allUnits, allWords, languageName, sessionSeed]);

  const current = challenges[round];

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    const isRight = opt.toLowerCase() === current.missingWord.toLowerCase();
    if (isRight) {
      playCorrectSfx();
      setScore((s) => s + 20);
      onAwardXp?.(20, false);
      onUpdateGameStats?.((prev) => ({ ...prev, safariCompleted: (prev.safariCompleted || 0) + 1 }));
    } else {
      playWrongSfx();
    }

    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= challenges.length) {
        playCelebrationSfx();
        setSessionDone(true);
        onAwardXp?.(0, true);
      } else {
        setRound((r) => r + 1);
      }
    }, 950);
  };

  if (challenges.length === 0) {
    return (
      <p className="text-center text-sm text-text-muted py-8">
        Not enough contextual sentences available for Sentence Safari in this course.
      </p>
    );
  }

  if (sessionDone) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-3 flex justify-center animate-bounce-in">
          <DynamicIcon emoji="🦁" className="w-14 h-14 text-gold" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
          Sentence Safari Complete!
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          You completed {challenges.length} contextual {languageName} sentences ({score} pts).
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
          <RotateCcw className="h-4 w-4" /> New Safari Run
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5">
          <Trophy className="h-3.5 w-3.5 text-gold" />
          <span className="text-xs font-bold text-gold">{score} pts</span>
        </div>
        <span className="text-xs font-semibold text-text-muted">
          Safari Stop {round + 1} of {challenges.length}
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-bg-card p-6 text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-[0.6875rem] font-semibold text-gold">
          <Compass className="h-3 w-3" /> {current.skillTitle}
        </span>
        <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold text-text-primary leading-relaxed">
          {current.maskedSentence}
        </p>
        <p className="text-xs sm:text-sm text-text-secondary italic pt-2 border-t border-border/50">
          &ldquo;{current.englishSentence}&rdquo;
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {current.options.map((opt, idx) => {
          let style = "border-border bg-bg-card text-text-primary hover:border-gold/40";
          if (picked !== null) {
            if (opt.toLowerCase() === current.missingWord.toLowerCase()) {
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
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
