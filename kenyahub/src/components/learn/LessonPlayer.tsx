/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import {
  Check,
  ChevronRight,
  Heart,
  Volume2,
  X,
  Zap,
  Flame,
  Lightbulb,
  SkipForward,
  Star,
} from "lucide-react";
import type {
  Exercise,
  CourseSkill,
  UserProgress,
  LessonResult,
  ReviewItem,
} from "@/data/courses/types";
import {
  XP_PER_CORRECT,
  XP_PER_CORRECT_WITH_HINT,
  XP_PERFECT_BONUS,
  EXERCISES_PER_LESSON,
} from "@/data/courses/types";
import { generateExercises, checkAnswer } from "@/lib/learn-engine";

/* ═══════════════════════════════════════════════════════
   LESSON PLAYER — The interactive exercise loop
   ═══════════════════════════════════════════════════════ */

interface LessonPlayerProps {
  skill: CourseSkill;
  level: number;
  progress: UserProgress;
  languageName: string;
  onComplete: (result: LessonResult) => void;
  onQuit: () => void;
  reviewItems?: ReviewItem[];
  reviewOnly?: boolean;
}

export default function LessonPlayer({
  skill,
  level,
  progress,
  languageName,
  onComplete,
  onQuit,
  reviewItems = [],
  reviewOnly = false,
}: LessonPlayerProps) {
  /* ─── State ────────────────────────────────────── */
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoadingExercises, setIsLoadingExercises] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(progress.hearts);
  const [xpEarned, setXpEarned] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [missedExercises, setMissedExercises] = useState<Exercise[]>([]);
  const [reviewedItemIds, setReviewedItemIds] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [wordsLearned, setWordsLearned] = useState<string[]>([]);
  const [startTime] = useState(Date.now());

  // Current exercise state
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [usedHint, setUsedHint] = useState(false);

  // Match pairs state
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [wrongMatch, setWrongMatch] = useState(false);

  // Word bank state
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);

  // Animation state
  const [shakeWrong, setShakeWrong] = useState(false);
  const [flashCorrect, setFlashCorrect] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [lessonStage, setLessonStage] = useState<"learn" | "practice">("learn");
  const [teachingIndex, setTeachingIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  /* ─── Initialize exercises ─────────────────────── */
  useEffect(() => {
    const reviewExercises: Exercise[] = reviewItems.map((item) => ({
      type: item.type || "translate_to_english",
      prompt: item.prompt,
      correctAnswer: item.answer,
      acceptedAnswers: item.acceptedAnswers,
      hint: item.hint,
      reviewId: item.id,
    }));
    const exs = [
      ...reviewExercises.slice(0, EXERCISES_PER_LESSON),
      ...generateExercises(
        skill,
        reviewOnly ? 0 : Math.max(0, EXERCISES_PER_LESSON - reviewExercises.length)
      ),
    ];
    setExercises(exs);
    setIsLoadingExercises(false);
  }, [reviewItems, reviewOnly, skill]);

  const exercise = exercises[currentIndex];
  const teachingCard = skill.words[teachingIndex];
  const progressPercent = exercises.length
    ? ((currentIndex + (isChecked ? 1 : 0)) / exercises.length) * 100
    : 0;

  // Pre-calculate shuffled match pairs to avoid React Hooks in JSX
  const shuffledRightPairs = useMemo(() => {
    if (exercise?.type !== "match_pairs" || !exercise.pairs) return [];
    return [...exercise.pairs].sort(() => Math.random() - 0.5);
  }, [exercise]);

  /* ─── Reset state for new exercise ─────────────── */
  const resetExercise = useCallback(() => {
    setUserAnswer("");
    setSelectedOption(null);
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
    setUsedHint(false);
    setMatchedPairs(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongMatch(false);
    setSelectedTiles([]);
    setShakeWrong(false);
    setFlashCorrect(false);
  }, []);

  /* ─── Submit answer ────────────────────────────── */
  const handleCheck = useCallback(() => {
    if (!exercise || isChecked) return;

    let answer = "";
    switch (exercise.type) {
      case "multiple_choice":
      case "tap_what_you_hear":
        answer = selectedOption || "";
        break;
      case "fill_blank":
        answer = exercise.options ? selectedOption || "" : userAnswer;
        break;
      case "translate_to_target":
      case "translate_to_english":
      case "listen_type":
        answer = userAnswer;
        break;
      case "word_bank":
        answer = selectedTiles
          .map((i) => exercise.wordTiles?.[i] || "")
          .join(" ");
        break;
      case "reorder":
        answer = selectedTiles
          .map((i) => exercise.wordTiles?.[i] || "")
          .join(" ");
        break;
      case "match_pairs":
        // Handled separately
        return;
      default:
        answer = userAnswer;
    }

    const correct = checkAnswer(exercise, answer);
    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setFlashCorrect(true);
      const xp = usedHint ? XP_PER_CORRECT_WITH_HINT : XP_PER_CORRECT;
      // Streak bonus
      const streakMultiplier = streak >= 5 ? 3 : streak >= 3 ? 2 : 1;
      setXpEarned((v) => v + xp * streakMultiplier);
      setStreak((v) => v + 1);
      if (exercise.reviewId) {
        setReviewedItemIds((ids) =>
          ids.includes(exercise.reviewId!) ? ids : [...ids, exercise.reviewId!]
        );
      }

      // Track words learned
      if (exercise.sourceWord) {
        setWordsLearned((v) => {
          const key = exercise.sourceWord!.target.toLowerCase();
          return v.includes(key) ? v : [...v, key];
        });
      }
    } else {
      setShakeWrong(true);
      setMistakes((v) => v + 1);
      setStreak(0);
      if (!exercise.reviewId) {
        setHearts((v) => Math.max(0, v - 1));
      }
      setMissedExercises((items) =>
        items.some((item) => item.prompt === exercise.prompt && item.correctAnswer === exercise.correctAnswer)
          ? items
          : [...items, exercise]
      );
      setTimeout(() => setShakeWrong(false), 500);
    }
  }, [exercise, isChecked, selectedOption, userAnswer, selectedTiles, usedHint, streak]);

  /* ─── Next exercise ────────────────────────────── */
  const handleContinue = useCallback(() => {
    const nextExercise = exercises[currentIndex + 1];
    if (
      currentIndex >= exercises.length - 1 ||
      (hearts <= 0 && !nextExercise?.reviewId)
    ) {
      // Lesson complete
      const perfect = mistakes === 0;
      const totalXp = xpEarned + (perfect ? XP_PERFECT_BONUS : 0);
      const result: LessonResult = {
        skillId: skill.id,
        level,
        score: exercises.length > 0
          ? Math.max(0, Math.round(((exercises.length - mistakes) / exercises.length) * 100))
          : 0,
        xpEarned: totalXp,
        accuracy:
          exercises.length > 0
            ? Math.max(0, (exercises.length - mistakes) / exercises.length)
            : 0,
        mistakes,
        perfectLesson: perfect,
        timeSpent: Math.round((Date.now() - startTime) / 1000),
        newWordsLearned: wordsLearned,
        heartsRemaining: hearts,
        reviewItems: missedExercises
          .filter((item) => item.type !== "match_pairs" && item.correctAnswer.trim())
          .map((item): ReviewItem => ({
            id: `${skill.id}:${item.type}:${item.prompt}`,
            skillId: skill.id,
            type: item.type,
            prompt: item.prompt,
            answer: item.correctAnswer,
            acceptedAnswers: item.acceptedAnswers,
            hint: item.hint,
            dueAt: Date.now() + 10 * 60 * 1000,
          })),
        reviewedItemIds,
      };
      setLessonComplete(true);
      setTimeout(() => onComplete(result), 100);
      return;
    }

    setCurrentIndex((v) => v + 1);
    resetExercise();
  }, [
    currentIndex,
    exercises,
    hearts,
    mistakes,
    xpEarned,
    skill,
    level,
    startTime,
    wordsLearned,
    onComplete,
    resetExercise,
  ]);

  /* ─── Match pairs logic ────────────────────────── */
  const handleMatchSelect = useCallback(
    (side: "left" | "right", value: string) => {
      if (!exercise || exercise.type !== "match_pairs") return;

      if (side === "left") {
        setSelectedLeft(value);
        if (selectedRight) {
          // Check if pair matches
          const pair = exercise.pairs?.find(
            (p) => p.left === value && p.right === selectedRight
          );
          if (pair) {
            setMatchedPairs((prev) => {
              const next = new Set(prev);
              next.add(value);
              return next;
            });
            setSelectedLeft(null);
            setSelectedRight(null);

            // Check if all matched
            if (matchedPairs.size + 1 >= (exercise.pairs?.length || 0)) {
              setIsChecked(true);
              setIsCorrect(true);
              setFlashCorrect(true);
              const xp = XP_PER_CORRECT;
              setXpEarned((v) => v + xp);
              setStreak((v) => v + 1);
            }
          } else {
            setWrongMatch(true);
            setMistakes((v) => v + 1);
            setHearts((v) => Math.max(0, v - 1));
            setTimeout(() => {
              setSelectedLeft(null);
              setSelectedRight(null);
              setWrongMatch(false);
            }, 500);
          }
        }
      } else {
        setSelectedRight(value);
        if (selectedLeft) {
          const pair = exercise.pairs?.find(
            (p) => p.left === selectedLeft && p.right === value
          );
          if (pair) {
            setMatchedPairs((prev) => {
              const next = new Set(prev);
              next.add(selectedLeft!);
              return next;
            });
            setSelectedLeft(null);
            setSelectedRight(null);

            if (matchedPairs.size + 1 >= (exercise.pairs?.length || 0)) {
              setIsChecked(true);
              setIsCorrect(true);
              setFlashCorrect(true);
              setXpEarned((v) => v + XP_PER_CORRECT);
              setStreak((v) => v + 1);
            }
          } else {
            setWrongMatch(true);
            setMistakes((v) => v + 1);
            setHearts((v) => Math.max(0, v - 1));
            setTimeout(() => {
              setSelectedLeft(null);
              setSelectedRight(null);
              setWrongMatch(false);
            }, 500);
          }
        }
      }
    },
    [exercise, selectedLeft, selectedRight, matchedPairs]
  );

  /* ─── Word bank / Reorder tile toggle ──────────── */
  const toggleTile = useCallback(
    (index: number) => {
      setSelectedTiles((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    },
    []
  );

  /* ─── Skip (costs a heart) ─────────────────────── */
  const handleSkip = useCallback(() => {
    if (!exercise || isChecked) return;
    setMistakes((v) => v + 1);
    setStreak(0);
    if (!exercise.reviewId) {
      setHearts((v) => Math.max(0, v - 1));
    }
    setMissedExercises((items) =>
      items.some((item) => item.prompt === exercise.prompt && item.correctAnswer === exercise.correctAnswer)
        ? items
        : [...items, exercise]
    );
    setIsChecked(true);
    setIsCorrect(false);
  }, [exercise, isChecked]);

  /* ─── Audio ────────────────────────────────────── */
  const playAudio = useCallback(() => {
    const audioPath = exercise?.sourceWord?.audio;
    if (!audioPath) return;
    void new Audio(audioPath).play();
  }, [exercise]);

  // Auto-play audio for listen exercises
  useEffect(() => {
    if (
      exercise &&
      exercise.sourceWord?.audio &&
      (exercise.type === "listen_type" || exercise.type === "tap_what_you_hear")
    ) {
      const t = setTimeout(() => playAudio(), 300);
      return () => clearTimeout(t);
    }
  }, [exercise, playAudio]);

  // Focus input on text exercises
  useEffect(() => {
    if (
      exercise &&
      (exercise.type === "translate_to_target" ||
        exercise.type === "translate_to_english" ||
        exercise.type === "listen_type") &&
      !isChecked
    ) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [exercise, isChecked]);

  /* ─── Lesson Complete Screen ───────────────────── */
  if (lessonComplete) {
    const perfect = mistakes === 0;
    const totalXp = xpEarned + (perfect ? XP_PERFECT_BONUS : 0);
    const accuracy =
      exercises.length > 0
        ? Math.round(
            ((exercises.length - mistakes) / exercises.length) * 100
          )
        : 0;

    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          {/* Celebration emoji */}
          <div className="mb-4 flex justify-center animate-bounce">
            <DynamicIcon emoji={perfect ? "🏆" : accuracy >= 80 ? "⭐" : accuracy >= 50 ? "💪" : "📖"} className="w-16 h-16 text-gold" />
          </div>

          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary sm:text-3xl">
            {perfect ? "Perfect!" : accuracy >= 80 ? "Great job!" : "Lesson complete!"}
          </h2>

          <p className="mt-2 text-sm text-text-secondary">
            {perfect
              ? "You completed the lesson with no mistakes!"
              : `You got ${accuracy}% correct. Keep practicing!`}
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-bg-card p-3">
              <Zap className="mx-auto mb-1 h-5 w-5 text-gold" />
              <div className="text-lg font-bold text-gold">{totalXp}</div>
              <div className="text-[0.6rem] text-text-muted">Total XP</div>
            </div>
            <div className="rounded-xl border border-border bg-bg-card p-3">
              <Check className="mx-auto mb-1 h-5 w-5 text-kenya-green" />
              <div className="text-lg font-bold text-kenya-green">{accuracy}%</div>
              <div className="text-[0.6rem] text-text-muted">Accuracy</div>
            </div>
            <div className="rounded-xl border border-border bg-bg-card p-3">
              <Star className="mx-auto mb-1 h-5 w-5 text-gold" />
              <div className="text-lg font-bold text-text-primary">{wordsLearned.length}</div>
              <div className="text-[0.6rem] text-text-muted">Words</div>
            </div>
          </div>

          {perfect && (
            <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-3">
              <p className="text-sm font-semibold text-gold flex items-center justify-center gap-1.5">
                <DynamicIcon emoji="🎉" className="w-4 h-4 text-gold shrink-0" /> +{XP_PERFECT_BONUS} XP Perfect Bonus!
              </p>
            </div>
          )}

          {missedExercises.length > 0 && (
            <div className="mt-5 rounded-xl border border-border bg-bg-card p-4 text-left">
              <h3 className="text-sm font-bold text-text-primary">Review before you leave</h3>
              <div className="mt-3 space-y-3">
                {missedExercises.map((item, index) => (
                  <div key={`${item.prompt}-${index}`} className="border-t border-border pt-3 first:border-0 first:pt-0">
                    <p className="text-xs text-text-muted">{item.prompt}</p>
                    <p className="mt-1 text-sm font-semibold text-text-primary">{item.correctAnswer}</p>
                    {item.hint && <p className="mt-1 text-xs text-text-secondary">{item.hint}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {skill.culturalNote && (
            <div className="mt-5 rounded-xl border border-gold/20 bg-gold/5 p-4 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-gold">Context</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{skill.culturalNote}</p>
            </div>
          )}

          <button
            onClick={onQuit}
            className="mt-6 w-full rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-kenya-black transition-all active:scale-[0.98] sm:hover:brightness-110"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (lessonStage === "learn" && teachingCard) {
    const isLastTeachingCard = teachingIndex >= skill.words.length - 1;

    return (
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col px-4">
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={onQuit}
            className="shrink-0 rounded-lg p-2 text-text-muted transition-colors active:bg-bg-card sm:hover:text-text-primary"
            aria-label="Exit lesson"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <div className="h-3 overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-500"
                style={{ width: `${((teachingIndex + 1) / skill.words.length) * 100}%` }}
              />
            </div>
          </div>
          <span className="text-xs font-semibold text-text-muted">
            {teachingIndex + 1}/{skill.words.length}
          </span>
        </div>

        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-gold">Learn first</p>
          <h2 className="mt-2 font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary sm:text-3xl">
            {skill.title}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">Study this card before practicing.</p>

          <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:p-8">
            <p className="text-3xl font-bold text-gold sm:text-4xl">{teachingCard.target}</p>
            <p className="mt-4 text-lg font-semibold text-text-primary">{teachingCard.source}</p>
            {teachingCard.pronunciation && (
              <p className="mt-2 text-sm text-text-secondary">
                Pronunciation: <span className="font-medium text-text-primary">{teachingCard.pronunciation}</span>
              </p>
            )}
            {teachingCard.example && (
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Example</p>
                <p className="mt-1 text-base text-text-primary">{teachingCard.example}</p>
              </div>
            )}
            {teachingCard.response && (
              <div className="mt-4 rounded-xl bg-bg-card p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Expected response</p>
                <p className="mt-1 text-sm text-text-primary">{teachingCard.response}</p>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            if (isLastTeachingCard) setLessonStage("practice");
            else setTeachingIndex((index) => index + 1);
          }}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-kenya-black transition-all active:scale-[0.98] sm:hover:brightness-110"
        >
          {isLastTeachingCard ? "Start practice" : "Next card"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  /* ─── No hearts left ───────────────────────────── */
  if (hearts <= 0 && !isChecked && !exercise?.reviewId) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-4 flex justify-center">
            <DynamicIcon emoji="💔" className="w-16 h-16 text-kenya-red-light" />
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
            Out of Hearts
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Hearts refill over time, or practice previous lessons to earn more.
          </p>
          <button
            onClick={onQuit}
            className="mt-6 w-full rounded-xl border border-border bg-bg-card px-6 py-3 text-sm font-semibold text-text-primary transition-all active:bg-bg-elevated"
          >
            Back to lessons
          </button>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-sm text-text-secondary">
          {isLoadingExercises
            ? "Preparing this lesson..."
            : "This lesson does not have any usable exercises yet."}
        </p>
        {!isLoadingExercises && (
          <button
            onClick={onQuit}
            className="mt-4 rounded-xl border border-border bg-bg-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors active:bg-bg-elevated"
          >
            Back to lessons
          </button>
        )}
      </div>
    );
  }

  /* ─── Can submit? ──────────────────────────────── */
  const canCheck = (() => {
    if (isChecked) return false;
    switch (exercise.type) {
      case "multiple_choice":
      case "tap_what_you_hear":
        return !!selectedOption;
      case "fill_blank":
        return exercise.options ? !!selectedOption : userAnswer.trim().length > 0;
      case "translate_to_target":
      case "translate_to_english":
      case "listen_type":
        return userAnswer.trim().length > 0;
      case "word_bank":
      case "reorder":
        return selectedTiles.length > 0;
      case "match_pairs":
        return false; // Auto-handled
      default:
        return false;
    }
  })();

  /* ═══════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════ */
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col px-4">
      {/* ─── Top bar: Hearts + Progress ──────────── */}
      <div className="mb-4 flex items-center gap-3 sm:mb-6">
        <button
          onClick={onQuit}
          className="shrink-0 rounded-lg p-2 text-text-muted transition-colors active:bg-bg-card sm:hover:text-text-primary"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Progress bar */}
        <div className="flex-1">
          <div className="h-3 overflow-hidden rounded-full bg-bg-elevated sm:h-3.5">
            <div
                role="progressbar"
                aria-label="Lesson progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progressPercent)}
              className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Hearts */}
        <div className="flex shrink-0 items-center gap-1">
          <Heart
            className="h-5 w-5 text-red-400 sm:h-5 sm:w-5"
            fill="currentColor"
          />
          <span className="text-sm font-bold text-red-400">{hearts}</span>
        </div>

        {/* Streak */}
        {streak > 1 && (
          <div className="hidden items-center gap-1 sm:flex">
            <Flame className="h-4 w-4 text-gold" />
            <span className="text-xs font-bold text-gold">{streak}</span>
          </div>
        )}
      </div>

      {/* ─── Exercise Content ────────────────────── */}
      <div className="flex-1">
        {/* Prompt */}
        <div className="mb-5 sm:mb-6">
          {exercise.reviewId && (
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-kenya-green">
              Review item
            </p>
          )}
          <p className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-xl">
            {exercise.prompt}
          </p>

          {/* Source word display for translate exercises */}
          {exercise.sourceWord &&
            (exercise.type === "translate_to_target" ||
              exercise.type === "translate_to_english" ||
              exercise.type === "word_bank") && (
              <div className="mt-3 flex items-center gap-3">
                {exercise.sourceWord.audio && (
                  <button
                    onClick={playAudio}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors active:bg-gold/20 sm:hover:bg-gold/20"
                    aria-label="Play recording"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                )}
                <span className="text-xl font-bold text-gold sm:text-2xl">
                  {exercise.type === "translate_to_target"
                    ? exercise.sourceWord.source
                    : exercise.sourceWord.target}
                </span>
              </div>
            )}

          {/* Listen exercises: big audio button */}
          {(exercise.type === "listen_type" ||
            exercise.type === "tap_what_you_hear") && (
            exercise.sourceWord?.audio ? (
              <button
                onClick={playAudio}
                className="mt-4 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 px-5 py-4 text-sm font-semibold text-gold transition-all active:bg-gold/10 sm:hover:bg-gold/10"
              >
                <Volume2 className="h-6 w-6" />
                <span>Play recording</span>
              </button>
            ) : (
              <p className="mt-4 rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text-secondary">
                No recording is available for this item yet. Continue with the text exercise.
              </p>
            )
          )}
        </div>

        {/* ─── Exercise-specific UI ──────────────── */}
        <div
          className={`transition-all ${
            shakeWrong ? "animate-[shake_0.3s_ease-in-out]" : ""
          } ${flashCorrect ? "animate-[flash-green_0.4s_ease]" : ""}`}
        >
          {/* MULTIPLE CHOICE / TAP WHAT YOU HEAR / FILL BLANK */}
          {(exercise.type === "multiple_choice" ||
            exercise.type === "tap_what_you_hear" ||
            (exercise.type === "fill_blank" && exercise.options)) &&
            exercise.options && (
              <div className="grid gap-2 sm:grid-cols-2">
                {exercise.options.map((opt) => {
                  const isSelected = selectedOption === opt;
                  const isCorrectOpt =
                    isChecked &&
                    opt.toLowerCase().trim() ===
                      exercise.correctAnswer.toLowerCase().trim();
                  const isWrongSelection =
                    isChecked && isSelected && !isCorrectOpt;

                  return (
                    <button
                      key={opt}
                      onClick={() => !isChecked && setSelectedOption(opt)}
                      disabled={isChecked}
                      className={`rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-all sm:py-3 ${
                        isCorrectOpt
                          ? "border-kenya-green bg-kenya-green/10 text-kenya-green"
                          : isWrongSelection
                          ? "border-red-400/60 bg-red-400/5 text-red-400"
                          : isSelected
                          ? "border-gold bg-gold/5 text-text-primary"
                          : "border-border bg-bg-card text-text-secondary active:border-gold/50 sm:hover:border-gold/50"
                      }`}
                    >
                      {opt}
                      {isChecked && isCorrectOpt && (
                        <Check className="ml-2 inline h-4 w-4" />
                      )}
                      {isWrongSelection && (
                        <X className="ml-2 inline h-4 w-4" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

          {/* TEXT INPUT (translate, fill, listen_type) */}
          {(exercise.type === "translate_to_target" ||
            exercise.type === "translate_to_english" ||
            exercise.type === "listen_type" ||
            (exercise.type === "fill_blank" && !exercise.options)) && (
            <div>
              <label htmlFor="lesson-answer" className="sr-only">
                {exercise.type === "fill_blank"
                  ? "Type the missing answer"
                  : exercise.type === "translate_to_target"
                  ? `Answer in ${languageName}`
                  : exercise.type === "listen_type"
                  ? "Type what you heard"
                  : "Answer in English"}
              </label>
              <input
                id="lesson-answer"
                ref={inputRef}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (isChecked) handleContinue();
                    else if (canCheck) handleCheck();
                  }
                }}
                disabled={isChecked}
                placeholder={
                  exercise.type === "fill_blank"
                    ? "Type the missing answer..."
                    : exercise.type === "translate_to_target"
                    ? `Type in ${languageName}...`
                    : exercise.type === "listen_type"
                    ? "Type what you heard..."
                    : "Type in English..."
                }
                className="input-field w-full text-base sm:text-lg"
              />
              {/* Show hint button */}
              {exercise.hint && !showHint && !isChecked && (
                <button
                  onClick={() => {
                    setShowHint(true);
                    setUsedHint(true);
                  }}
                  className="mt-2 flex items-center gap-1.5 text-xs text-text-muted transition-colors active:text-gold sm:hover:text-gold"
                >
                  <Lightbulb className="h-3.5 w-3.5" /> Show hint
                </button>
              )}
              {showHint && exercise.hint && (
                <p className="mt-2 rounded-lg bg-gold/5 px-3 py-2 text-xs text-gold flex items-start gap-1.5">
                  <DynamicIcon emoji="💡" className="w-3.5 h-3.5 mt-0.5 text-gold flex-shrink-0" />
                  <span>{exercise.hint}</span>
                </p>
              )}
            </div>
          )}

          {/* MATCH PAIRS */}
          {exercise.type === "match_pairs" && exercise.pairs && (
            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="space-y-2">
                {exercise.pairs.map((pair) => (
                  <button
                    key={`L-${pair.left}`}
                    onClick={() =>
                      !matchedPairs.has(pair.left) &&
                      handleMatchSelect("left", pair.left)
                    }
                    disabled={matchedPairs.has(pair.left)}
                    className={`w-full rounded-xl border-2 px-3 py-3 text-center text-sm font-medium transition-all ${
                      matchedPairs.has(pair.left)
                        ? "border-kenya-green/30 bg-kenya-green/10 text-kenya-green opacity-60"
                        : selectedLeft === pair.left
                        ? wrongMatch
                          ? "border-red-400 bg-red-400/10 text-red-400"
                          : "border-gold bg-gold/5 text-gold"
                        : "border-border bg-bg-card text-text-primary active:border-gold/50"
                    }`}
                  >
                    {pair.left}
                  </button>
                ))}
              </div>
              {/* Right column (shuffled) */}
              <div className="space-y-2">
                {shuffledRightPairs.map((pair) => (
                  <button
                    key={`R-${pair.right}`}
                    onClick={() =>
                      !matchedPairs.has(pair.left) &&
                      handleMatchSelect("right", pair.right)
                    }
                    disabled={matchedPairs.has(pair.left)}
                    className={`w-full rounded-xl border-2 px-3 py-3 text-center text-sm font-medium transition-all ${
                      matchedPairs.has(
                        exercise.pairs?.find((p) => p.right === pair.right)
                          ?.left || ""
                      )
                        ? "border-kenya-green/30 bg-kenya-green/10 text-kenya-green opacity-60"
                        : selectedRight === pair.right
                        ? wrongMatch
                          ? "border-red-400 bg-red-400/10 text-red-400"
                          : "border-gold bg-gold/5 text-gold"
                        : "border-border bg-bg-card text-text-secondary active:border-gold/50"
                    }`}
                  >
                    {pair.right}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WORD BANK / REORDER */}
          {(exercise.type === "word_bank" || exercise.type === "reorder") &&
            exercise.wordTiles && (
              <div>
                {/* Selected tiles area */}
                <div className="mb-4 min-h-[3.5rem] rounded-xl border-2 border-dashed border-border p-3">
                  {selectedTiles.length === 0 ? (
                    <p className="text-sm italic text-text-muted">
                      Tap words below to build your answer
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {selectedTiles.map((tileIdx) => (
                        <button
                          key={tileIdx}
                          onClick={() => !isChecked && toggleTile(tileIdx)}
                          className="rounded-lg border border-gold bg-gold/10 px-3 py-1.5 text-sm font-medium text-gold transition-all active:scale-95"
                        >
                          {exercise.wordTiles?.[tileIdx]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Available tiles */}
                <div className="flex flex-wrap gap-2">
                  {exercise.wordTiles.map((tile, idx) => {
                    const isUsed = selectedTiles.includes(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => !isChecked && !isUsed && toggleTile(idx)}
                        disabled={isChecked || isUsed}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                          isUsed
                            ? "border-border/30 text-text-muted/30 opacity-30"
                            : "border-border bg-bg-card text-text-primary active:border-gold/50 active:bg-gold/5"
                        }`}
                      >
                        {tile}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
        </div>
      </div>

      {/* ─── Bottom bar: Feedback + Actions ──────── */}
      <div className="mt-auto pt-4 pb-2 sm:pb-4">
        {/* Feedback banner */}
        {isChecked && (
          <div
            className={`mb-3 rounded-xl p-3 sm:p-4 ${
              isCorrect
                ? "border border-kenya-green/30 bg-kenya-green/10"
                : "border border-red-400/30 bg-red-400/5"
            }`}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <Check className="h-5 w-5 text-kenya-green" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
              <span
                className={`text-sm font-semibold ${
                  isCorrect ? "text-kenya-green" : "text-red-400"
                }`}
              >
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
              {isCorrect && !usedHint && (
                <span className="ml-auto text-xs font-semibold text-gold">
                  +{XP_PER_CORRECT * (streak >= 5 ? 3 : streak >= 3 ? 2 : 1)}{" "}
                  XP
                </span>
              )}
            </div>
            {!isCorrect && (
              <div className="mt-1 text-xs text-text-secondary">
                <p>
                  Correct answer:{" "}
                  <span className="font-semibold text-text-primary">
                    {exercise.correctAnswer}
                  </span>
                </p>
                {exercise.hint && (
                  <p className="mt-1 text-text-secondary">Hint: {exercise.hint}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2">
          {!isChecked && exercise.type !== "match_pairs" && (
            <>
              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 rounded-xl border border-border px-4 py-3 text-xs font-semibold text-text-muted transition-all active:bg-bg-card sm:hover:text-text-secondary"
              >
                <SkipForward className="h-3.5 w-3.5" /> Skip
              </button>
              <button
                onClick={handleCheck}
                disabled={!canCheck}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all sm:py-3 ${
                  canCheck
                    ? "bg-gold text-kenya-black active:scale-[0.98] sm:hover:brightness-110"
                    : "bg-bg-elevated text-text-muted cursor-not-allowed"
                }`}
              >
                Check
              </button>
            </>
          )}

          {isChecked && (
            <button
              onClick={handleContinue}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all sm:py-3 active:scale-[0.98] ${
                isCorrect
                  ? "bg-kenya-green text-white sm:hover:brightness-110"
                  : "bg-gold text-kenya-black sm:hover:brightness-110"
              }`}
            >
              {currentIndex >= exercises.length - 1
                ? "Finish"
                : "Continue"}
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
