"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import {
  Award,
  BookMarked,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Eye,
  EyeOff,
  Flame,
  GraduationCap,
  Heart,
  Lightbulb,
  ListFilter,
  MessageSquareText,
  Mic,
  PenLine,
  RefreshCw,
  RotateCcw,
  Search,
  Shuffle,
  Sparkles,
  Star,
  Target,
  Trophy,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import luoDict from "@/data/dictionaries/luo.json";
import { LESSONS as COURSE_LESSONS, LESSON_CATEGORIES } from "@/data/courses/luo/lessons";
import { luoProverbs } from "@/data/courses/luo/proverbs";
import { luoRiddles } from "@/data/courses/luo/riddles";
import { luoTongueTwisters } from "@/data/courses/luo/tongue-twisters";

const tool = TOOLS.find((item) => item.slug === "luo")!;
const COURSE_ID = "dholuo-a1";

/* ─── Types ──────────────────────────────────────── */
type Tab = "learn" | "practice" | "review" | "dictionary" | "sentences" | "culture";
type DictionaryEntry = {
  english: string;
  translation: string;
  pronunciation?: string;
  context?: string;
  category: string;
  categoryId: string;
  partOfSpeech?: string;
  example?: string;
};
type Lesson = {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  category: string;
  cards: { luo: string; english: string; note?: string }[];
  check: { question: string; options: string[]; answer: string };
};
type ReviewCard = {
  key: string;
  luo: string;
  english: string;
  nextReview: number;
  interval: number;
  ease: number;
  repetitions: number;
};
type QuizQuestion = {
  type: "choice" | "fill" | "listen";
  question: string;
  correctAnswer: string;
  options?: string[];
  luoWord: string;
};
type SentencePair = {
  en: string;
  luo: string;
};

/* ─── Data transformations ───────────────────────── */
const lessons: Lesson[] = COURSE_LESSONS.map((lesson) => {
  const firstExercise = lesson.exercises.find((e) => e.type === "choice") || lesson.exercises[0];
  const options = firstExercise.options?.length
    ? firstExercise.options
    : [firstExercise.answer, "Try again", "Keep practising", "Not yet"];
  return {
    id: `${COURSE_ID}-${lesson.id}`,
    title: lesson.title,
    description: lesson.description,
    icon: lesson.icon,
    level: lesson.level,
    category: lesson.category,
    cards: lesson.cards.map((card) => ({
      luo: card.luo,
      english: card.english,
      note: card.hint || card.example || card.response || lesson.culturalNote,
    })),
    check: { question: firstExercise.question, options, answer: firstExercise.answer },
  };
});

const cultureProverbs = luoProverbs.slice(0, 80).map((item) => ({
  luo: item.luo,
  english: item.english,
  meaning: item.meaning || item.explanation || item.moral || "A piece of inherited Luo wisdom.",
}));
const cultureRiddles = luoRiddles.slice(0, 50);
const cultureTongueTwisters = luoTongueTwisters;

const fallbackDictionary: DictionaryEntry[] = luoDict.categories.flatMap((category) =>
  category.entries.map((entry) => ({
    english: entry.english,
    translation: entry.translation,
    pronunciation: entry.pronunciation,
    context: entry.context,
    category: category.name,
    categoryId: category.id,
  }))
);

const faq = [
  {
    question: "What is the Luo Learning Studio?",
    answer:
      "It's KenyaHub's comprehensive Dholuo language course featuring 30+ structured lessons, a 19,000+ word dictionary extracted from linguistic datasets, 1,200+ real-world sentence pairs for reading practice, interactive quizzes, spaced repetition review, and a rich collection of Luo proverbs, riddles, and tongue twisters.",
  },
  {
    question: "Is Dholuo the same as Luo?",
    answer:
      "Dholuo is the language of the Luo people. 'Luo' is commonly used in English to refer to both the people and their language. The language is spoken by roughly 5.8 million people primarily in Kisumu, Siaya, Homa Bay, and Migori counties.",
  },
  {
    question: "How should I use the lessons?",
    answer:
      "Study a small set of cards, say each phrase aloud, then use the quick check. Use Practice mode for interactive quizzes. Review your words with spaced repetition. Returning daily is more effective than trying to memorize everything at once.",
  },
  {
    question: "Where does the dictionary data come from?",
    answer:
      "The dictionary combines curated community vocabulary with 19,000+ entries extracted from a comprehensive Dholuo linguistic dataset including the LAFAND parallel corpus. Sentence pairs come from real-world English-Dholuo translations.",
  },
  {
    question: "Can I practice reading real Dholuo sentences?",
    answer:
      "Yes! The Sentences tab features over 1,200 real-world English-Dholuo translation pairs from news articles and everyday text. You can hide translations to test your reading comprehension.",
  },
];

/* ─── Utility functions ──────────────────────────── */
function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "sw-KE";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWordOfTheDay(entries: DictionaryEntry[]): DictionaryEntry | null {
  if (!entries.length) return null;
  const dayIndex = Math.floor(Date.now() / 86400000) % entries.length;
  return entries[dayIndex];
}

/* ─── XP Leveling ────────────────────────────────── */
const LEVELS = [
  { name: "Seed", minXp: 0, icon: "🌱" },
  { name: "Sprout", minXp: 100, icon: "🌿" },
  { name: "Sapling", minXp: 300, icon: "🌳" },
  { name: "Elder Tree", minXp: 600, icon: "🏔️" },
  { name: "Nyasaye's Voice", minXp: 1000, icon: "⚡" },
  { name: "Living Proverb", minXp: 2000, icon: "👑" },
];

function getLevel(xp: number) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.minXp) level = l;
  }
  const idx = LEVELS.indexOf(level);
  const nextLevel = LEVELS[idx + 1] || null;
  const progressToNext = nextLevel ? ((xp - level.minXp) / (nextLevel.minXp - level.minXp)) * 100 : 100;
  return { ...level, index: idx, nextLevel, progressToNext: Math.min(100, progressToNext) };
}

/* ─── Quiz Generator ─────────────────────────────── */
function generateQuiz(entries: DictionaryEntry[], count: number = 10): QuizQuestion[] {
  const usable = entries.filter((e) => e.translation && e.english && e.english.length < 60);
  if (usable.length < 8) return [];
  const selected = shuffleArray(usable).slice(0, count);
  return selected.map((entry, i) => {
    const type: QuizQuestion["type"] = i % 3 === 0 ? "fill" : i % 3 === 1 ? "listen" : "choice";
    const wrongPool = usable.filter((e) => e.translation !== entry.translation);
    const wrongs = shuffleArray(wrongPool)
      .slice(0, 3)
      .map((e) => e.translation);
    const options = shuffleArray([entry.translation, ...wrongs]);
    return {
      type,
      question:
        type === "fill"
          ? `What is "${entry.english}" in Dholuo?`
          : type === "listen"
          ? `Listen and identify: What does this word mean?`
          : `Translate to Dholuo: "${entry.english}"`,
      correctAnswer: type === "listen" ? entry.english : entry.translation,
      options: type === "listen"
        ? shuffleArray([entry.english, ...shuffleArray(wrongPool).slice(0, 3).map((e) => e.english)])
        : options,
      luoWord: entry.translation,
    };
  });
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════ */
export default function LuoPage() {
  /* ─── State ──────────────────────────────────── */
  const [tab, setTab] = useState<Tab>("learn");
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [dictionaryEntries, setDictionaryEntries] = useState<DictionaryEntry[]>(fallbackDictionary);
  const [reviewCards, setReviewCards] = useState<ReviewCard[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewRevealed, setReviewRevealed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [cultureTab, setCultureTab] = useState<"proverbs" | "riddles" | "twisters">("proverbs");
  const [copied, setCopied] = useState<string | null>(null);
  const [sentencePairs, setSentencePairs] = useState<SentencePair[]>([]);
  const [sentencePage, setSentencePage] = useState(0);
  const [hiddenTranslations, setHiddenTranslations] = useState<Set<number>>(new Set());
  const [sentenceFilter, setSentenceFilter] = useState("");
  // Practice mode
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizFillInput, setQuizFillInput] = useState("");
  const [quizStreak, setQuizStreak] = useState(0);
  const [showGrammar, setShowGrammar] = useState(false);
  // Expanded category filter for lessons
  const [lessonCategoryFilter, setLessonCategoryFilter] = useState("all");
  // Dictionary page
  const [dictPage, setDictPage] = useState(0);
  const DICT_PAGE_SIZE = 60;
  // Animations
  const [flashCorrect, setFlashCorrect] = useState(false);
  const [flashWrong, setFlashWrong] = useState(false);

  /* ─── Persistence ────────────────────────────── */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("kh-luo-progress") || "{}");
        setCompleted(saved.completed || []);
        setXp(saved.xp || 0);
        setStreak(saved.streak || 0);
        setFavorites(saved.favorites || []);
        setReviewCards(saved.reviewCards || []);
      } catch {
        /* local progress is optional */
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hydrated)
      localStorage.setItem(
        "kh-luo-progress",
        JSON.stringify({ completed, xp, streak, favorites, reviewCards })
      );
  }, [completed, xp, streak, favorites, reviewCards, hydrated]);

  /* ─── Load extended dictionary ───────────────── */
  useEffect(() => {
    // Try the full dictionary first
    fetch("/dictionaries/luo-full-dictionary.json")
      .then((r) => r.json())
      .then(
        (payload: {
          entries?: {
            luo: string;
            english: string;
            partOfSpeech?: string;
            example?: string;
          }[];
        }) => {
          if (!payload.entries?.length) throw new Error("empty");
          setDictionaryEntries(
            payload.entries.map((entry) => ({
              english: entry.english,
              translation: entry.luo,
              partOfSpeech: entry.partOfSpeech,
              example: entry.example || undefined,
              context: entry.example || undefined,
              category: formatPartOfSpeech(entry.partOfSpeech || "general"),
              categoryId: (entry.partOfSpeech || "general").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            }))
          );
        }
      )
      .catch(() => {
        // Fallback: try the merged dictionary
        fetch("/dictionaries/luo-merged-dictionary.json")
          .then((r) => r.json())
          .then(
            (payload: {
              fullDictionary?: {
                luo: string;
                english: string;
                category?: string;
                phonetic?: string;
                definition?: string;
              }[];
            }) => {
              if (!payload.fullDictionary?.length) return;
              setDictionaryEntries(
                payload.fullDictionary.map((entry) => ({
                  english: entry.english,
                  translation: entry.luo,
                  pronunciation: entry.phonetic,
                  context: entry.definition,
                  category: entry.category || "General vocabulary",
                  categoryId: (entry.category || "general").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                }))
              );
            }
          )
          .catch(() => {
            /* bundled starter vocabulary remains available offline */
          });
      });
  }, []);

  /* ─── Load sentence pairs ────────────────────── */
  useEffect(() => {
    fetch("/dictionaries/luo-sentence-pairs.json")
      .then((r) => r.json())
      .then((payload: { pairs?: SentencePair[] }) => {
        if (payload.pairs?.length) setSentencePairs(payload.pairs);
      })
      .catch(() => {});
  }, []);

  /* ─── Derived state ──────────────────────────── */
  const categories = useMemo(
    () =>
      Array.from(
        new Map(dictionaryEntries.map((e) => [e.categoryId, { id: e.categoryId, name: e.category }])).values()
      ),
    [dictionaryEntries]
  );
  const filteredEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return dictionaryEntries.filter(
      (e) =>
        (category === "all" || e.categoryId === category) &&
        (!needle || e.english.toLowerCase().includes(needle) || e.translation.toLowerCase().includes(needle))
    );
  }, [dictionaryEntries, category, query]);

  const pagedEntries = useMemo(
    () => filteredEntries.slice(dictPage * DICT_PAGE_SIZE, (dictPage + 1) * DICT_PAGE_SIZE),
    [filteredEntries, dictPage]
  );
  const dictTotalPages = Math.ceil(filteredEntries.length / DICT_PAGE_SIZE);

  const currentCard = activeLesson?.cards[cardIndex];
  const progress = Math.round((completed.length / lessons.length) * 100);
  const dueCards = reviewCards.filter((c) => c.nextReview <= Date.now());
  const currentReviewCard = dueCards[reviewIndex];
  const level = getLevel(xp);
  const wordOfTheDay = useMemo(() => getWordOfTheDay(dictionaryEntries), [dictionaryEntries]);

  const filteredLessons = useMemo(
    () =>
      lessonCategoryFilter === "all"
        ? lessons
        : lessons.filter((l) => l.category === lessonCategoryFilter),
    [lessonCategoryFilter]
  );

  const filteredSentences = useMemo(() => {
    if (!sentenceFilter.trim()) return sentencePairs;
    const needle = sentenceFilter.toLowerCase();
    return sentencePairs.filter(
      (p) => p.en.toLowerCase().includes(needle) || p.luo.toLowerCase().includes(needle)
    );
  }, [sentencePairs, sentenceFilter]);

  const sentencesPerPage = 12;
  const sentencePages = Math.ceil(filteredSentences.length / sentencesPerPage);
  const pagedSentences = filteredSentences.slice(
    sentencePage * sentencesPerPage,
    (sentencePage + 1) * sentencesPerPage
  );

  /* ─── Handlers ───────────────────────────────── */
  function beginLesson(lesson: Lesson) {
    setActiveLesson(lesson);
    setCardIndex(0);
    setRevealed(false);
    setChecked(null);
  }

  function nextCard() {
    if (!activeLesson) return;
    if (cardIndex === activeLesson.cards.length - 1) {
      if (!completed.includes(activeLesson.id)) {
        setCompleted((items) => [...items, activeLesson.id]);
        setXp((v) => v + 30);
        setStreak((v) => Math.max(1, v));
        const now = Date.now();
        setReviewCards((cards) => {
          const existing = new Set(cards.map((c) => c.key));
          const newCards = activeLesson.cards
            .filter((c) => !existing.has(`${COURSE_ID}:${c.luo.toLowerCase()}`))
            .map((c) => ({
              key: `${COURSE_ID}:${c.luo.toLowerCase()}`,
              luo: c.luo,
              english: c.english,
              nextReview: now,
              interval: 0,
              ease: 2.5,
              repetitions: 0,
            }));
          return [...cards, ...newCards];
        });
      }
      setActiveLesson(null);
      return;
    }
    setCardIndex((v) => v + 1);
    setRevealed(false);
    setChecked(null);
  }

  function toggleFavorite(key: string) {
    setFavorites((items) => (items.includes(key) ? items.filter((i) => i !== key) : [...items, key]));
  }

  function copyWord(text: string) {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    });
  }

  function reviewCard(quality: "again" | "hard" | "good" | "easy") {
    if (!currentReviewCard) return;
    const multipliers = { again: 0, hard: 0.5, good: 1, easy: 2 };
    const nextInterval =
      quality === "again"
        ? 0
        : Math.max(1, Math.round((currentReviewCard.interval || 1) * (multipliers[quality] || 1) * currentReviewCard.ease));
    const nextEase =
      quality === "again"
        ? Math.max(1.3, currentReviewCard.ease - 0.2)
        : quality === "easy"
        ? currentReviewCard.ease + 0.15
        : currentReviewCard.ease;
    setReviewCards((cards) =>
      cards.map((c) =>
        c.key === currentReviewCard.key
          ? {
              ...c,
              interval: nextInterval,
              ease: nextEase,
              repetitions: quality === "again" ? 0 : c.repetitions + 1,
              nextReview: Date.now() + (nextInterval || 0.003) * 86400000,
            }
          : c
      )
    );
    setXp((v) => v + (quality === "easy" ? 5 : 2));
    setReviewIndex(0);
    setReviewRevealed(false);
  }

  /* Practice quiz handlers */
  const startQuiz = useCallback(() => {
    const quiz = generateQuiz(dictionaryEntries, 10);
    setQuizQuestions(quiz);
    setQuizIndex(0);
    setQuizAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
    setQuizFillInput("");
    setQuizStreak(0);
  }, [dictionaryEntries]);

  function submitQuizAnswer(answer: string) {
    const current = quizQuestions[quizIndex];
    if (!current) return;
    const isCorrect = answer.toLowerCase().trim() === current.correctAnswer.toLowerCase().trim();
    setQuizAnswer(answer);
    if (isCorrect) {
      setQuizScore((s) => s + 1);
      setQuizStreak((s) => s + 1);
      setFlashCorrect(true);
      setTimeout(() => setFlashCorrect(false), 500);
    } else {
      setQuizStreak(0);
      setFlashWrong(true);
      setTimeout(() => setFlashWrong(false), 500);
    }
  }

  function nextQuizQuestion() {
    if (quizIndex >= quizQuestions.length - 1) {
      setQuizCompleted(true);
      setXp((v) => v + quizScore * 5);
      return;
    }
    setQuizIndex((i) => i + 1);
    setQuizAnswer(null);
    setQuizFillInput("");
  }

  function toggleSentenceTranslation(index: number) {
    setHiddenTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function hideAllTranslations() {
    setHiddenTranslations(new Set(pagedSentences.map((_, i) => sentencePage * sentencesPerPage + i)));
  }

  function showAllTranslations() {
    setHiddenTranslations(new Set());
  }

  /* ─── Tab Config ─────────────────────────────── */
  const tabs: { id: Tab; label: string; icon: typeof GraduationCap }[] = [
    { id: "learn", label: "Learn", icon: GraduationCap },
    { id: "practice", label: "Practice", icon: Target },
    { id: "review", label: `Review${dueCards.length ? ` (${dueCards.length})` : ""}`, icon: Brain },
    { id: "dictionary", label: `Dictionary`, icon: Search },
    { id: "sentences", label: "Sentences", icon: MessageSquareText },
    { id: "culture", label: "Culture", icon: Lightbulb },
  ];

  /* ═══════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════ */
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* ─── Hero ─────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/15 via-bg-card to-kenya-green/10 p-5 sm:p-8">
          <div className="absolute -right-8 -top-12 text-[9rem] opacity-[0.06] select-none">✦</div>
          <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-kenya-green/8 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Dholuo language studio
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold leading-tight text-text-primary sm:text-4xl">
              Learn words. Find your voice.{" "}
              <span className="text-gold">Carry the culture.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
              A deep, practical path into Dholuo with {lessons.length} lessons, {dictionaryEntries.length.toLocaleString()}+ dictionary entries, {sentencePairs.length.toLocaleString()} real-world sentences, interactive quizzes, and Luo wisdom.
            </p>
          </div>

          {/* Stats Row */}
          <div className="relative mt-6 grid grid-cols-2 gap-2 sm:max-w-2xl sm:grid-cols-4 sm:gap-3">
            {[
              { label: "Level", value: `${level.icon} ${level.name}`, sub: `${Math.round(level.progressToNext)}% to next`, icon: Award },
              { label: "Progress", value: `${progress}%`, sub: `${completed.length}/${lessons.length} lessons`, icon: Trophy },
              { label: "XP", value: xp.toLocaleString(), sub: "Learning points", icon: Zap },
              { label: "Streak", value: streak, sub: "Day streak", icon: Flame },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-xl border border-border/60 bg-bg-card/50 p-3 backdrop-blur-sm">
                  <Icon className="mb-1.5 h-4 w-4 text-gold" />
                  <div className="text-base font-bold text-text-primary sm:text-lg">{stat.value}</div>
                  <div className="text-[0.6rem] text-text-muted">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Level progress bar */}
          {level.nextLevel && (
            <div className="relative mt-4 sm:max-w-2xl">
              <div className="flex items-center justify-between text-[0.6rem] text-text-muted">
                <span>{level.icon} {level.name}</span>
                <span>{level.nextLevel.icon} {level.nextLevel.name}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-bg-elevated">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-700"
                  style={{ width: `${level.progressToNext}%` }}
                />
              </div>
            </div>
          )}

          {/* Word of the Day */}
          {wordOfTheDay && (
            <div className="relative mt-5 flex items-center gap-4 rounded-xl border border-gold/20 bg-bg-card/60 p-4 backdrop-blur-sm sm:max-w-2xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-2xl">
                <Star className="h-6 w-6 text-gold" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[0.6rem] font-semibold uppercase tracking-widest text-gold">Word of the Day</div>
                <div className="mt-0.5 font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
                  {wordOfTheDay.translation}
                </div>
                <div className="text-xs text-text-secondary">{wordOfTheDay.english}</div>
              </div>
              <button
                onClick={() => speak(wordOfTheDay.translation)}
                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-gold/10 hover:text-gold"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </section>

        {/* ─── Tabs ─────────────────────────────── */}
        <div className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-bg-elevated p-1 scrollbar-hide">
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                onClick={() => setTab(item.id)}
                className={`flex min-w-[5.5rem] flex-1 items-center justify-center gap-1.5 rounded-lg px-2.5 py-2.5 text-[0.7rem] font-semibold transition-all ${
                  tab === item.id
                    ? "bg-gold text-kenya-black shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            TAB: LEARN
           ═══════════════════════════════════════════ */}
        {tab === "learn" && !activeLesson && (
          <>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Your path</p>
                <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                  Small steps, real recall
                </h3>
              </div>
              <span className="text-xs text-text-muted">
                {completed.length} of {lessons.length} complete
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLessonCategoryFilter("all")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lessonCategoryFilter === "all"
                    ? "bg-gold text-kenya-black"
                    : "border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                All ({lessons.length})
              </button>
              {LESSON_CATEGORIES.map((unit) => {
                const count = lessons.filter((l) => l.category === unit.id).length;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setLessonCategoryFilter(unit.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      lessonCategoryFilter === unit.id
                        ? "bg-gold text-kenya-black"
                        : "border border-border text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {unit.icon} {unit.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Lesson grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredLessons.map((lesson, index) => {
                const isDone = completed.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    id={`lesson-${lesson.id}`}
                    onClick={() => beginLesson(lesson)}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-bg-elevated hover:shadow-lg hover:shadow-gold/5"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl transition-transform group-hover:scale-110 ${
                        isDone ? "bg-kenya-green/15" : "bg-gold/10"
                      }`}
                    >
                      {isDone ? <Check className="h-5 w-5 text-kenya-green" /> : lesson.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <span className="text-[0.6rem] uppercase tracking-wider text-text-muted">
                          {String(lessons.indexOf(lesson) + 1).padStart(2, "0")} · {lesson.level}
                        </span>
                        <ChevronRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" />
                      </div>
                      <h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold text-text-primary">
                        {lesson.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-text-secondary">{lesson.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick access cards */}
            <div className="grid gap-3 sm:grid-cols-3">
              <button
                onClick={() => setTab("practice")}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:border-gold/40 hover:-translate-y-0.5"
              >
                <Target className="h-5 w-5 text-gold" />
                <span>
                  <b className="block text-sm text-text-primary">Practice quiz</b>
                  <small className="text-xs text-text-muted">Interactive vocabulary drills</small>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-text-muted" />
              </button>
              <button
                onClick={() => setTab("dictionary")}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:border-gold/40 hover:-translate-y-0.5"
              >
                <BookOpen className="h-5 w-5 text-gold" />
                <span>
                  <b className="block text-sm text-text-primary">Full dictionary</b>
                  <small className="text-xs text-text-muted">{dictionaryEntries.length.toLocaleString()}+ words</small>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-text-muted" />
              </button>
              <button
                onClick={() => setTab("sentences")}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:border-gold/40 hover:-translate-y-0.5"
              >
                <MessageSquareText className="h-5 w-5 text-gold" />
                <span>
                  <b className="block text-sm text-text-primary">Real sentences</b>
                  <small className="text-xs text-text-muted">{sentencePairs.length.toLocaleString()} pairs</small>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-text-muted" />
              </button>
            </div>
          </>
        )}

        {/* Active lesson */}
        {tab === "learn" && activeLesson && currentCard && (
          <section className="mx-auto max-w-2xl">
            <button
              onClick={() => setActiveLesson(null)}
              className="mb-5 flex items-center gap-1 text-xs text-text-muted hover:text-gold transition-colors"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Back to lessons
            </button>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest text-gold">
                  {activeLesson.icon} {activeLesson.title}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
                  Card {cardIndex + 1} of {activeLesson.cards.length}
                </h3>
              </div>
              <span className="text-xs text-text-muted">+30 XP on completion</span>
            </div>

            {/* Progress bar */}
            <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-kenya-green transition-all duration-500"
                style={{ width: `${((cardIndex + 1) / activeLesson.cards.length) * 100}%` }}
              />
            </div>

            {/* Flashcard */}
            <button
              onClick={() => setRevealed((v) => !v)}
              className="group w-full rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-bg-card p-8 text-center shadow-lg transition-all hover:shadow-xl hover:shadow-gold/10 sm:p-12"
            >
              <span className="text-[0.65rem] uppercase tracking-widest text-text-muted">
                {revealed ? "Meaning" : "Say it aloud"}
              </span>
              <div className="my-5 font-[family-name:var(--font-outfit)] text-4xl font-bold text-text-primary transition-transform group-hover:scale-[1.02] sm:text-5xl">
                {revealed ? currentCard.english : currentCard.luo}
              </div>
              <div className="text-sm text-text-secondary">
                {revealed ? currentCard.note || "Keep the rhythm natural and clear." : "Tap to reveal the meaning"}
              </div>
            </button>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => speak(currentCard.luo)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-2.5 text-xs font-semibold text-text-secondary transition-colors hover:text-gold hover:border-gold/40"
              >
                <Volume2 className="h-4 w-4" /> Hear it
              </button>
              <button
                onClick={() => setRevealed((v) => !v)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-3 py-2.5 text-xs font-bold text-kenya-black transition-transform hover:scale-[1.01]"
              >
                <RotateCcw className="h-4 w-4" />{" "}
                {revealed ? "Hide meaning" : "Reveal meaning"}
              </button>
            </div>

            {/* Quick check */}
            <div className="mt-6 rounded-xl border border-border bg-bg-card p-4">
              <p className="mb-3 text-xs font-semibold text-text-primary">Quick check</p>
              <p className="mb-3 text-sm text-text-secondary">{activeLesson.check.question}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {activeLesson.check.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setChecked(option)}
                    className={`rounded-lg border px-3 py-2 text-left text-xs transition-all ${
                      checked === option
                        ? option === activeLesson.check.answer
                          ? "border-kenya-green bg-kenya-green/10 text-kenya-green"
                          : "border-red-400/50 bg-red-400/10 text-red-300"
                        : "border-border text-text-secondary hover:border-gold/50"
                    }`}
                  >
                    {option}
                    {checked === option && (option === activeLesson.check.answer ? " ✓" : " ×")}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={nextCard}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-kenya-green px-4 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-kenya-green/20"
            >
              {cardIndex === activeLesson.cards.length - 1 ? "Finish lesson ✨" : "Next card"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            TAB: PRACTICE
           ═══════════════════════════════════════════ */}
        {tab === "practice" && (
          <section className="mx-auto max-w-2xl">
            <div className="mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Interactive quiz</p>
              <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                Test your Dholuo skills
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Answer multiple-choice, fill-in-the-blank, and listening questions drawn from the full dictionary. Earn 5 XP per correct answer.
              </p>
            </div>

            {quizQuestions.length === 0 || quizCompleted ? (
              <div className="rounded-xl border border-border bg-bg-card p-8 text-center">
                {quizCompleted ? (
                  <>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-3xl">
                      {quizScore >= 8 ? "🏆" : quizScore >= 5 ? "⭐" : "💪"}
                    </div>
                    <h4 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
                      {quizScore} / {quizQuestions.length}
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary">
                      {quizScore >= 8
                        ? "Excellent! You're mastering Dholuo!"
                        : quizScore >= 5
                        ? "Good progress! Keep practising."
                        : "Every attempt builds your knowledge. Try again!"}
                    </p>
                    <p className="mt-1 text-xs text-gold">+{quizScore * 5} XP earned</p>
                  </>
                ) : (
                  <>
                    <Target className="mx-auto mb-4 h-10 w-10 text-gold" />
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
                      Ready for a challenge?
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary">
                      10 questions from {dictionaryEntries.length.toLocaleString()}+ words. Multiple choice, fill-in, and listening rounds.
                    </p>
                  </>
                )}
                <button
                  onClick={startQuiz}
                  className="mt-5 rounded-lg bg-gold px-6 py-2.5 text-sm font-bold text-kenya-black transition-transform hover:scale-[1.02]"
                >
                  {quizCompleted ? "Play again" : "Start quiz"}
                </button>
              </div>
            ) : (
              <>
                {/* Quiz progress */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-text-muted">
                    Question {quizIndex + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex items-center gap-3">
                    {quizStreak > 1 && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                        <Flame className="h-3.5 w-3.5" /> {quizStreak}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-kenya-green">
                      {quizScore} correct
                    </span>
                  </div>
                </div>

                <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-bg-elevated">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-500"
                    style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Question card */}
                {(() => {
                  const q = quizQuestions[quizIndex];
                  return (
                    <div
                      className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                        flashCorrect
                          ? "border-kenya-green/60 bg-kenya-green/5"
                          : flashWrong
                          ? "border-red-400/60 bg-red-400/5"
                          : "border-gold/30 bg-gradient-to-br from-gold/5 to-bg-card"
                      }`}
                    >
                      {/* Question type badge */}
                      <div className="mb-4 flex items-center gap-2">
                        {q.type === "fill" && (
                          <span className="flex items-center gap-1 rounded-full bg-sky/10 px-3 py-1 text-[0.65rem] font-semibold text-sky">
                            <PenLine className="h-3 w-3" /> Fill in
                          </span>
                        )}
                        {q.type === "listen" && (
                          <span className="flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold text-gold">
                            <Mic className="h-3 w-3" /> Listening
                          </span>
                        )}
                        {q.type === "choice" && (
                          <span className="flex items-center gap-1 rounded-full bg-kenya-green/10 px-3 py-1 text-[0.65rem] font-semibold text-kenya-green">
                            <BookMarked className="h-3 w-3" /> Choice
                          </span>
                        )}
                      </div>

                      <p className="mb-4 text-sm font-medium text-text-primary">{q.question}</p>

                      {q.type === "listen" && (
                        <button
                          onClick={() => speak(q.luoWord)}
                          className="mb-4 flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-4 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
                        >
                          <Volume2 className="h-5 w-5" /> Play word
                        </button>
                      )}

                      {q.type === "fill" ? (
                        <div className="mb-4">
                          <input
                            value={quizFillInput}
                            onChange={(e) => setQuizFillInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !quizAnswer) submitQuizAnswer(quizFillInput);
                            }}
                            placeholder="Type your answer in Dholuo..."
                            disabled={!!quizAnswer}
                            className="input-field w-full text-sm"
                          />
                          {!quizAnswer && (
                            <button
                              onClick={() => submitQuizAnswer(quizFillInput)}
                              className="mt-3 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black"
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="grid gap-2 sm:grid-cols-2">
                          {q.options?.map((opt) => {
                            const isSelected = quizAnswer === opt;
                            const isCorrect = opt.toLowerCase() === q.correctAnswer.toLowerCase();
                            const showResult = !!quizAnswer;
                            return (
                              <button
                                key={opt}
                                onClick={() => !quizAnswer && submitQuizAnswer(opt)}
                                disabled={!!quizAnswer}
                                className={`rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                                  showResult
                                    ? isCorrect
                                      ? "border-kenya-green bg-kenya-green/10 text-kenya-green"
                                      : isSelected
                                      ? "border-red-400/50 bg-red-400/10 text-red-300"
                                      : "border-border/50 text-text-muted opacity-60"
                                    : "border-border text-text-secondary hover:border-gold/50 hover:bg-gold/5"
                                }`}
                              >
                                {opt}
                                {showResult && isCorrect && " ✓"}
                                {showResult && isSelected && !isCorrect && " ×"}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Feedback */}
                      {quizAnswer && (
                        <div className="mt-4 rounded-lg border border-border bg-bg-elevated p-3">
                          <p
                            className={`text-sm font-semibold ${
                              quizAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()
                                ? "text-kenya-green"
                                : "text-red-400"
                            }`}
                          >
                            {quizAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()
                              ? "✓ Correct!"
                              : `✗ The answer is: ${q.correctAnswer}`}
                          </p>
                        </div>
                      )}

                      {quizAnswer && (
                        <button
                          onClick={nextQuizQuestion}
                          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-kenya-green px-4 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
                        >
                          {quizIndex >= quizQuestions.length - 1 ? "See results" : "Next question"}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  );
                })()}
              </>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════
            TAB: REVIEW
           ═══════════════════════════════════════════ */}
        {tab === "review" && (
          <section className="mx-auto max-w-2xl">
            <div className="mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Spaced review</p>
              <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                Keep the words alive
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Review is deliberately short. Rate how well you remembered each card and the next interval will adapt.
              </p>
            </div>

            {currentReviewCard ? (
              <>
                <div className="mb-5 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-bg-card p-8 text-center sm:p-12">
                  <span className="text-[0.65rem] uppercase tracking-widest text-text-muted">
                    {reviewIndex + 1} of {dueCards.length} due
                  </span>
                  <div className="my-5 font-[family-name:var(--font-outfit)] text-4xl font-bold text-text-primary">
                    {reviewRevealed ? currentReviewCard.english : currentReviewCard.luo}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {reviewRevealed ? "How well did you remember it?" : "Recall the meaning, then reveal."}
                  </p>
                  <div className="mt-5 flex justify-center gap-2">
                    <button
                      onClick={() => speak(currentReviewCard.luo)}
                      className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary hover:text-gold"
                    >
                      <Volume2 className="inline h-3.5 w-3.5 mr-1" /> Listen
                    </button>
                    <button
                      onClick={() => setReviewRevealed(true)}
                      className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black"
                    >
                      {reviewRevealed ? "Answer below" : "Reveal meaning"}
                    </button>
                  </div>
                </div>
                {reviewRevealed && (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {(["again", "hard", "good", "easy"] as const).map((quality) => (
                      <button
                        key={quality}
                        onClick={() => reviewCard(quality)}
                        className="rounded-lg border border-border bg-bg-card px-3 py-3 text-xs font-semibold capitalize text-text-secondary transition-all hover:border-gold/50 hover:text-gold hover:-translate-y-0.5"
                      >
                        {quality}
                        <span className="mt-1 block text-[0.6rem] font-normal text-text-muted">
                          {quality === "again" ? "Now" : quality === "hard" ? "1 day" : quality === "good" ? "Adaptive" : "Longer"}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl border border-kenya-green/30 bg-kenya-green/10 p-8 text-center">
                <Check className="mx-auto mb-3 h-8 w-8 text-kenya-green" />
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
                  You are caught up
                </h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Finish a lesson or come back later for your next review.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <button
                    onClick={() => setTab("learn")}
                    className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black"
                  >
                    Continue learning
                  </button>
                  <button
                    onClick={() => setTab("practice")}
                    className="rounded-lg border border-border px-4 py-2 text-xs font-semibold text-text-secondary hover:text-gold"
                  >
                    Practice quiz
                  </button>
                </div>
              </div>
            )}

            {/* Review stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-border bg-bg-card p-3 text-center">
                <div className="text-lg font-bold text-text-primary">{reviewCards.length}</div>
                <div className="text-[0.6rem] text-text-muted">Total cards</div>
              </div>
              <div className="rounded-lg border border-border bg-bg-card p-3 text-center">
                <div className="text-lg font-bold text-gold">{dueCards.length}</div>
                <div className="text-[0.6rem] text-text-muted">Due now</div>
              </div>
              <div className="rounded-lg border border-border bg-bg-card p-3 text-center">
                <div className="text-lg font-bold text-kenya-green">
                  {reviewCards.filter((c) => c.repetitions >= 3).length}
                </div>
                <div className="text-[0.6rem] text-text-muted">Mastered</div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            TAB: DICTIONARY
           ═══════════════════════════════════════════ */}
        {tab === "dictionary" && (
          <section>
            <div className="mb-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Full dictionary</p>
              <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                {dictionaryEntries.length.toLocaleString()} words and phrases
              </h3>
            </div>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setDictPage(0);
                  }}
                  placeholder="Search English or Dholuo..."
                  className="input-field w-full pl-10 text-sm"
                />
              </div>
              <div className="relative sm:w-56">
                <ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setDictPage(0);
                  }}
                  className="input-field w-full pl-10 text-sm"
                >
                  <option value="all">All categories</option>
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mb-3 text-xs text-text-muted">
              Showing {pagedEntries.length} of {filteredEntries.length.toLocaleString()} entries
              {dictTotalPages > 1 && ` · Page ${dictPage + 1} of ${dictTotalPages}`}
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {pagedEntries.map((entry, idx) => {
                const key = `${entry.categoryId}-${entry.english}-${idx}`;
                const favorite = favorites.includes(key);
                return (
                  <div
                    key={key}
                    className="group rounded-xl border border-border bg-bg-card p-4 transition-all hover:border-gold/40 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[0.6rem] uppercase tracking-wider text-text-muted">{entry.category}</p>
                          {entry.partOfSpeech && (
                            <span className="rounded bg-gold/10 px-1.5 py-0.5 text-[0.55rem] font-medium text-gold">
                              {entry.partOfSpeech}
                            </span>
                          )}
                        </div>
                        <h4 className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-bold text-gold">
                          {entry.translation}
                        </h4>
                        <p className="text-xs text-text-primary">{entry.english}</p>
                        {entry.pronunciation && (
                          <p className="mt-1 text-[0.65rem] italic text-text-muted">/{entry.pronunciation}/</p>
                        )}
                      </div>
                      <div className="flex gap-1 opacity-70 transition-opacity group-hover:opacity-100">
                        <button
                          onClick={() => speak(entry.translation)}
                          className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold"
                          title="Listen"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => toggleFavorite(key)}
                          className={`rounded-lg p-2 hover:bg-gold/10 ${
                            favorite ? "text-red-400" : "text-text-muted hover:text-gold"
                          }`}
                          title="Favourite"
                        >
                          <Heart className="h-4 w-4" fill={favorite ? "currentColor" : "none"} />
                        </button>
                        <button
                          onClick={() => copyWord(entry.translation)}
                          className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold"
                          title="Copy"
                        >
                          <Clipboard className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    {entry.context && (
                      <p className="mt-3 border-t border-border pt-2 text-[0.7rem] leading-relaxed text-text-secondary">
                        {entry.context}
                      </p>
                    )}
                    {copied === entry.translation && (
                      <span className="mt-2 block text-[0.65rem] text-kenya-green">Copied</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {dictTotalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2">
                <button
                  onClick={() => setDictPage((p) => Math.max(0, p - 1))}
                  disabled={dictPage === 0}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary disabled:opacity-30 hover:border-gold/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, dictTotalPages) }, (_, i) => {
                    let page: number;
                    if (dictTotalPages <= 5) {
                      page = i;
                    } else if (dictPage < 3) {
                      page = i;
                    } else if (dictPage > dictTotalPages - 4) {
                      page = dictTotalPages - 5 + i;
                    } else {
                      page = dictPage - 2 + i;
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => setDictPage(page)}
                        className={`h-8 w-8 rounded-lg text-xs font-semibold transition-colors ${
                          dictPage === page
                            ? "bg-gold text-kenya-black"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {page + 1}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setDictPage((p) => Math.min(dictTotalPages - 1, p + 1))}
                  disabled={dictPage >= dictTotalPages - 1}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary disabled:opacity-30 hover:border-gold/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════
            TAB: SENTENCES
           ═══════════════════════════════════════════ */}
        {tab === "sentences" && (
          <section>
            <div className="mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">
                Real-world reading
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                {sentencePairs.length.toLocaleString()} English ↔ Dholuo sentences
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Parallel translations from news articles and everyday text. Hide the Dholuo translation to test your reading comprehension.
              </p>
            </div>

            {/* Controls */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  value={sentenceFilter}
                  onChange={(e) => {
                    setSentenceFilter(e.target.value);
                    setSentencePage(0);
                  }}
                  placeholder="Search sentences..."
                  className="input-field w-full pl-10 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={hideAllTranslations}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary hover:border-gold/50 hover:text-gold"
                >
                  <EyeOff className="h-3.5 w-3.5" /> Hide all
                </button>
                <button
                  onClick={showAllTranslations}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary hover:border-gold/50 hover:text-gold"
                >
                  <Eye className="h-3.5 w-3.5" /> Show all
                </button>
              </div>
            </div>

            {sentencePairs.length === 0 ? (
              <div className="rounded-xl border border-border bg-bg-card p-8 text-center">
                <RefreshCw className="mx-auto mb-3 h-8 w-8 text-text-muted animate-spin" />
                <p className="text-sm text-text-secondary">Loading sentence pairs...</p>
              </div>
            ) : (
              <div className="grid gap-3">
                {pagedSentences.map((pair, idx) => {
                  const globalIdx = sentencePage * sentencesPerPage + idx;
                  const isHidden = hiddenTranslations.has(globalIdx);
                  return (
                    <article
                      key={globalIdx}
                      className="group rounded-xl border border-border bg-bg-card p-4 transition-all hover:border-gold/30"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-gold mb-2">
                            English
                          </p>
                          <p className="text-sm leading-relaxed text-text-primary">{pair.en}</p>
                          <div className="mt-3 border-t border-border pt-3">
                            <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-kenya-green mb-2">
                              Dholuo
                            </p>
                            {isHidden ? (
                              <button
                                onClick={() => toggleSentenceTranslation(globalIdx)}
                                className="flex items-center gap-1.5 text-sm italic text-text-muted hover:text-gold transition-colors"
                              >
                                <Eye className="h-3.5 w-3.5" /> Tap to reveal translation
                              </button>
                            ) : (
                              <p className="text-sm leading-relaxed text-text-secondary">{pair.luo}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 opacity-70 group-hover:opacity-100">
                          <button
                            onClick={() => toggleSentenceTranslation(globalIdx)}
                            className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold"
                            title={isHidden ? "Show" : "Hide"}
                          >
                            {isHidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                          </button>
                          <button
                            onClick={() => speak(pair.luo)}
                            className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold"
                            title="Listen to Dholuo"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Sentence pagination */}
            {sentencePages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2">
                <button
                  onClick={() => setSentencePage((p) => Math.max(0, p - 1))}
                  disabled={sentencePage === 0}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary disabled:opacity-30 hover:border-gold/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs text-text-muted">
                  Page {sentencePage + 1} of {sentencePages}
                </span>
                <button
                  onClick={() => setSentencePage((p) => Math.min(sentencePages - 1, p + 1))}
                  disabled={sentencePage >= sentencePages - 1}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-secondary disabled:opacity-30 hover:border-gold/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════
            TAB: CULTURE
           ═══════════════════════════════════════════ */}
        {tab === "culture" && (
          <section>
            <div className="mb-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Luo heritage</p>
              <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">
                Wisdom, wit, and wordplay
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Discover the soul of the Luo language through proverbs, riddles, and tongue twisters passed down through generations.
              </p>
            </div>

            <div className="mb-5 flex gap-2 flex-wrap">
              <button
                onClick={() => setCultureTab("proverbs")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                  cultureTab === "proverbs" ? "bg-gold text-kenya-black" : "border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                🌿 Proverbs ({cultureProverbs.length})
              </button>
              <button
                onClick={() => setCultureTab("riddles")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                  cultureTab === "riddles" ? "bg-gold text-kenya-black" : "border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                🧩 Riddles ({cultureRiddles.length})
              </button>
              <button
                onClick={() => setCultureTab("twisters")}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                  cultureTab === "twisters" ? "bg-gold text-kenya-black" : "border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                👅 Tongue Twisters ({cultureTongueTwisters.length})
              </button>
            </div>

            {cultureTab === "proverbs" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {cultureProverbs.map((item, idx) => (
                  <article key={`proverb-${idx}`} className="rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-gold/30">
                    <p className="mb-3 text-[0.65rem] uppercase tracking-wider text-gold">Luo wisdom</p>
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold leading-snug text-text-primary">
                      {item.luo}
                    </h4>
                    <p className="mt-2 text-sm italic text-gold/90">&ldquo;{item.english}&rdquo;</p>
                    <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-text-secondary">
                      <b className="text-text-primary">Takeaway:</b> {item.meaning}
                    </p>
                    <button
                      onClick={() => speak(item.luo)}
                      className="mt-4 flex items-center gap-1.5 text-[0.65rem] font-semibold text-text-muted hover:text-gold transition-colors"
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Listen
                    </button>
                  </article>
                ))}
              </div>
            )}

            {cultureTab === "riddles" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {cultureRiddles.map((item, idx) => (
                  <details key={`riddle-${idx}`} className="group rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-gold/30">
                    <summary className="cursor-pointer list-none">
                      <p className="mb-3 text-[0.65rem] uppercase tracking-wider text-gold">Think in Dholuo</p>
                      <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">
                        {item.luo}
                      </h4>
                      <p className="mt-2 text-sm text-text-secondary">{item.english}</p>
                      <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold">
                        Reveal answer{" "}
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-border pt-3 text-sm text-kenya-green">{item.answer}</p>
                    <button
                      onClick={() => speak(item.luo)}
                      className="mt-3 flex items-center gap-1.5 text-[0.65rem] font-semibold text-text-muted hover:text-gold transition-colors"
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Listen
                    </button>
                  </details>
                ))}
              </div>
            )}

            {cultureTab === "twisters" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {cultureTongueTwisters.map((item, idx) => (
                  <article
                    key={`twister-${idx}`}
                    className="rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-gold/30"
                  >
                    <p className="mb-3 text-[0.65rem] uppercase tracking-wider text-gold">
                      👅 Tongue twister #{item.id}
                    </p>
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold leading-snug text-text-primary">
                      {item.luo}
                    </h4>
                    {item.english && (
                      <p className="mt-2 text-sm italic text-text-secondary">&ldquo;{item.english}&rdquo;</p>
                    )}
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => speak(item.luo)}
                        className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-[0.65rem] font-semibold text-text-muted hover:text-gold transition-colors hover:border-gold/40"
                      >
                        <Volume2 className="h-3.5 w-3.5" /> Listen
                      </button>
                      <button
                        onClick={() => {
                          speak(item.luo);
                          setTimeout(() => speak(item.luo), 3000);
                        }}
                        className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-[0.65rem] font-semibold text-text-muted hover:text-gold transition-colors hover:border-gold/40"
                      >
                        <Shuffle className="h-3.5 w-3.5" /> Listen fast
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </ToolShell>
  );
}

/* ─── Helper ─────────────────────────────────────── */
function formatPartOfSpeech(pos: string): string {
  const map: Record<string, string> = {
    n: "Noun",
    v: "Verb",
    vi: "Verb (intransitive)",
    vt: "Verb (transitive)",
    adj: "Adjective",
    adv: "Adverb",
    pron: "Pronoun",
    prep: "Preposition",
    conj: "Conjunction",
    interj: "Interjection",
    affix: "Affix",
    prefix: "Prefix",
    "proper n": "Proper Noun",
    excl: "Exclamation",
    general: "General",
  };
  return map[pos] || pos.charAt(0).toUpperCase() + pos.slice(1);
}
