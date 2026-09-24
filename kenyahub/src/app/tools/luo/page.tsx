"use client";

import { useEffect, useMemo, useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import { BookOpen, Brain, Check, ChevronRight, Clipboard, Flame, GraduationCap, Heart, Lightbulb, ListFilter, RotateCcw, Search, Sparkles, Trophy, Volume2, Zap } from "lucide-react";
import luoDict from "@/data/dictionaries/luo.json";
import { LESSONS as COURSE_LESSONS, LESSON_CATEGORIES } from "@/data/courses/luo/lessons";
import { luoProverbs } from "@/data/courses/luo/proverbs";
import { luoRiddles } from "@/data/courses/luo/riddles";

const tool = TOOLS.find((item) => item.slug === "luo")!;
const COURSE_ID = "dholuo-a1";

type Tab = "learn" | "review" | "dictionary" | "culture";
type DictionaryEntry = {
  english: string;
  translation: string;
  pronunciation?: string;
  context?: string;
  category: string;
  categoryId: string;
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
type ReviewCard = { key: string; luo: string; english: string; nextReview: number; interval: number; ease: number; repetitions: number };

const lessons: Lesson[] = COURSE_LESSONS.map((lesson) => {
  const firstExercise = lesson.exercises.find((exercise) => exercise.type === "choice") || lesson.exercises[0];
  const options = firstExercise.options?.length ? firstExercise.options : [firstExercise.answer, "Try again", "Keep practising", "Not yet"];
  return {
    id: `${COURSE_ID}-${lesson.id}`,
    title: lesson.title,
    description: lesson.description,
    icon: lesson.icon,
    level: lesson.level,
    category: lesson.category,
    cards: lesson.cards.map((card) => ({ luo: card.luo, english: card.english, note: card.hint || card.example || card.response || lesson.culturalNote })),
    check: { question: firstExercise.question, options, answer: firstExercise.answer },
  };
});

const cultureProverbs = luoProverbs.slice(0, 60).map((item) => ({
  luo: item.luo,
  english: item.english,
  meaning: item.meaning || item.explanation || item.moral || "A piece of inherited Luo wisdom.",
}));
const cultureRiddles = luoRiddles.slice(0, 40);

const fallbackDictionary: DictionaryEntry[] = luoDict.categories.flatMap((category) => category.entries.map((entry) => ({
  english: entry.english,
  translation: entry.translation,
  pronunciation: entry.pronunciation,
  context: entry.context,
  category: category.name,
  categoryId: category.id,
})));

const faq = [
  { question: "What is Luo?", answer: "Luo is KenyaHub's first dedicated language course. It teaches Dholuo through structured lessons, grammar, vocabulary, review practice, and Luo cultural knowledge." },
  { question: "Is Dholuo the same as Luo?", answer: "Dholuo is the language of the Luo people. Luo is commonly used in English to refer to both the people and their language." },
  { question: "How should I use the lessons?", answer: "Study a small set of cards, say each phrase aloud, then use the quick check. Returning daily is more effective than trying to memorise everything at once." },
];

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "sw-KE";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

export default function LuoPage() {
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
  const [cultureTab, setCultureTab] = useState<"proverbs" | "riddles">("proverbs");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const loadProgress = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("kh-luo-progress") || "{}");
        setCompleted(saved.completed || []); setXp(saved.xp || 0); setStreak(saved.streak || 0); setFavorites(saved.favorites || []);
        setReviewCards(saved.reviewCards || []);
      } catch { /* local progress is optional */ }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(loadProgress);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("kh-luo-progress", JSON.stringify({ completed, xp, streak, favorites, reviewCards }));
  }, [completed, xp, streak, favorites, reviewCards, hydrated]);

  useEffect(() => {
    fetch("/dictionaries/luo-merged-dictionary.json")
      .then((response) => response.json())
      .then((payload: { fullDictionary?: { luo: string; english: string; category?: string; phonetic?: string; definition?: string }[] }) => {
        if (!payload.fullDictionary?.length) return;
        setDictionaryEntries(payload.fullDictionary.map((entry) => ({
          english: entry.english,
          translation: entry.luo,
          pronunciation: entry.phonetic,
          context: entry.definition,
          category: entry.category || "General vocabulary",
          categoryId: (entry.category || "general").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        })));
      })
      .catch(() => { /* bundled starter vocabulary remains available offline */ });
  }, []);

  const categories = useMemo(() => Array.from(new Map(dictionaryEntries.map((entry) => [entry.categoryId, { id: entry.categoryId, name: entry.category }])).values()), [dictionaryEntries]);
  const allEntries = dictionaryEntries;
  const filteredEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allEntries.filter((entry) => (category === "all" || entry.categoryId === category) && (!needle || entry.english.toLowerCase().includes(needle) || entry.translation.toLowerCase().includes(needle)));
  }, [allEntries, category, query]);
  const currentCard = activeLesson?.cards[cardIndex];
  const progress = Math.round((completed.length / lessons.length) * 100);
  const dueCards = reviewCards.filter((card) => card.nextReview <= Date.now());
  const currentReviewCard = dueCards[reviewIndex];

  function beginLesson(lesson: Lesson) {
    setActiveLesson(lesson); setCardIndex(0); setRevealed(false); setChecked(null);
  }
  function nextCard() {
    if (!activeLesson) return;
    if (cardIndex === activeLesson.cards.length - 1) {
      if (!completed.includes(activeLesson.id)) {
        setCompleted((items) => [...items, activeLesson.id]); setXp((value) => value + 30); setStreak((value) => Math.max(1, value));
        const now = Date.now();
        setReviewCards((cards) => {
          const existing = new Set(cards.map((card) => card.key));
          const newCards = activeLesson.cards.filter((card) => !existing.has(`${COURSE_ID}:${card.luo.toLowerCase()}`)).map((card) => ({ key: `${COURSE_ID}:${card.luo.toLowerCase()}`, luo: card.luo, english: card.english, nextReview: now, interval: 0, ease: 2.5, repetitions: 0 }));
          return [...cards, ...newCards];
        });
      }
      setActiveLesson(null); return;
    }
    setCardIndex((value) => value + 1); setRevealed(false); setChecked(null);
  }
  function toggleFavorite(key: string) {
    setFavorites((items) => items.includes(key) ? items.filter((item) => item !== key) : [...items, key]);
  }
  function copyWord(text: string) {
    navigator.clipboard?.writeText(text).then(() => { setCopied(text); setTimeout(() => setCopied(null), 1400); });
  }
  function reviewCard(quality: "again" | "hard" | "good" | "easy") {
    if (!currentReviewCard) return;
    const multipliers = { again: 0, hard: 0.5, good: 1, easy: 2 };
    const nextInterval = quality === "again" ? 0 : Math.max(1, Math.round((currentReviewCard.interval || 1) * (multipliers[quality] || 1) * currentReviewCard.ease));
    const nextEase = quality === "again" ? Math.max(1.3, currentReviewCard.ease - 0.2) : quality === "easy" ? currentReviewCard.ease + 0.15 : currentReviewCard.ease;
    setReviewCards((cards) => cards.map((card) => card.key === currentReviewCard.key ? { ...card, interval: nextInterval, ease: nextEase, repetitions: quality === "again" ? 0 : card.repetitions + 1, nextReview: Date.now() + (nextInterval || 0.003) * 86400000 } : card));
    setXp((value) => value + (quality === "easy" ? 5 : 2));
    setReviewIndex(0); setReviewRevealed(false);
  }

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/15 via-bg-card to-kenya-green/10 p-5 sm:p-8">
          <div className="absolute -right-8 -top-12 text-[9rem] opacity-[0.08]">✦</div>
          <div className="relative max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold"><Sparkles className="h-3.5 w-3.5" /> Dholuo language studio</div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold leading-tight text-text-primary sm:text-4xl">Learn words. Find your voice. <span className="text-gold">Carry the culture.</span></h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">A gentle, practical path into Dholuo, built around everyday phrases, useful vocabulary, and the wisdom that gives a language its heartbeat.</p>
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-2 sm:max-w-lg sm:gap-3">
            {[{ label: "Progress", value: `${progress}%`, icon: Trophy }, { label: "Learning XP", value: xp, icon: Zap }, { label: "Day streak", value: streak, icon: Flame }].map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="border-l border-border pl-3"><Icon className="mb-1 h-4 w-4 text-gold" /><div className="text-lg font-bold text-text-primary">{stat.value}</div><div className="text-[0.65rem] text-text-muted">{stat.label}</div></div>; })}
          </div>
        </section>

        <div className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-bg-elevated p-1">
          {[{ id: "learn" as const, label: "Learn", icon: GraduationCap }, { id: "review" as const, label: `Review${dueCards.length ? ` (${dueCards.length})` : ""}`, icon: Brain }, { id: "dictionary" as const, label: "Dictionary", icon: Search }, { id: "culture" as const, label: "Culture", icon: Lightbulb }].map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setTab(item.id)} className={`flex min-w-[6.5rem] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${tab === item.id ? "bg-gold text-kenya-black" : "text-text-secondary hover:text-text-primary"}`}><Icon className="h-4 w-4" />{item.label}</button>; })}
        </div>

        {tab === "review" && <section className="mx-auto max-w-2xl"><div className="mb-5"><p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Spaced review</p><h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">Keep the words alive</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">Review is deliberately short. Rate how well you remembered each card and the next interval will adapt.</p></div>{currentReviewCard ? <><div className="mb-5 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-bg-card p-8 text-center sm:p-12"><span className="text-[0.65rem] uppercase tracking-widest text-text-muted">{reviewIndex + 1} of {dueCards.length} due</span><div className="my-5 font-[family-name:var(--font-outfit)] text-4xl font-bold text-text-primary">{reviewRevealed ? currentReviewCard.english : currentReviewCard.luo}</div><p className="text-sm text-text-secondary">{reviewRevealed ? "How well did you remember it?" : "Recall the meaning, then reveal."}</p><button onClick={() => setReviewRevealed(true)} className="mt-5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black">{reviewRevealed ? "Answer below" : "Reveal meaning"}</button></div>{reviewRevealed && <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{(["again", "hard", "good", "easy"] as const).map((quality) => <button key={quality} onClick={() => reviewCard(quality)} className="rounded-lg border border-border bg-bg-card px-3 py-3 text-xs font-semibold capitalize text-text-secondary hover:border-gold/50 hover:text-gold">{quality}<span className="mt-1 block text-[0.6rem] font-normal text-text-muted">{quality === "again" ? "Now" : quality === "hard" ? "1 day" : quality === "good" ? "Adaptive" : "Longer"}</span></button>)}</div>}</> : <div className="rounded-xl border border-kenya-green/30 bg-kenya-green/10 p-8 text-center"><Check className="mx-auto mb-3 h-8 w-8 text-kenya-green" /><h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">You are caught up</h4><p className="mt-2 text-sm text-text-secondary">Finish a lesson or come back later for your next review.</p><button onClick={() => setTab("learn")} className="mt-5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-kenya-black">Continue learning</button></div>}</section>}

        {tab === "learn" && !activeLesson && <>
          <div className="flex items-end justify-between gap-4"><div><p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Your path</p><h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">Small steps, real recall</h3></div><span className="text-xs text-text-muted">{completed.length} of {lessons.length} complete</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-bg-elevated"><div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} /></div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">{LESSON_CATEGORIES.map((unit) => { const count = lessons.filter((lesson) => lesson.category === unit.id).length; return <div key={unit.id} className="rounded-lg border border-border bg-bg-card px-3 py-2"><div className="text-base">{unit.icon}</div><div className="mt-1 text-[0.65rem] font-semibold text-text-primary">{unit.name}</div><div className="text-[0.6rem] text-text-muted">{count} lessons</div></div>; })}</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {lessons.map((lesson, index) => { const isDone = completed.includes(lesson.id); return <button key={lesson.id} onClick={() => beginLesson(lesson)} className="group flex items-start gap-4 rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-bg-elevated"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${isDone ? "bg-kenya-green/15" : "bg-gold/10"}`}>{isDone ? <Check className="h-5 w-5 text-kenya-green" /> : lesson.icon}</div><div className="min-w-0 flex-1"><div className="mb-1 flex items-center justify-between gap-2"><span className="text-[0.6rem] uppercase tracking-wider text-text-muted">{String(index + 1).padStart(2, "0")} · {lesson.level}</span><ChevronRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" /></div><h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold text-text-primary">{lesson.title}</h4><p className="mt-1 text-xs leading-relaxed text-text-secondary">{lesson.description}</p></div></button>; })}
          </div>
          <div className="grid gap-3 sm:grid-cols-2"><button onClick={() => setTab("dictionary")} className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4 text-left hover:border-gold/40"><BookOpen className="h-5 w-5 text-gold" /><span><b className="block text-sm text-text-primary">Browse the word bank</b><small className="text-xs text-text-muted">{allEntries.length}+ words and phrases</small></span><ChevronRight className="ml-auto h-4 w-4 text-text-muted" /></button><button onClick={() => setTab("culture")} className="flex items-center gap-3 rounded-xl border border-border bg-bg-card p-4 text-left hover:border-gold/40"><Lightbulb className="h-5 w-5 text-gold" /><span><b className="block text-sm text-text-primary">Hear Luo wisdom</b><small className="text-xs text-text-muted">Proverbs and riddles</small></span><ChevronRight className="ml-auto h-4 w-4 text-text-muted" /></button></div>
        </>}

        {tab === "learn" && activeLesson && currentCard && <section className="mx-auto max-w-2xl"><button onClick={() => setActiveLesson(null)} className="mb-5 text-xs text-text-muted hover:text-gold">← Back to lessons</button><div className="mb-4 flex items-center justify-between"><div><p className="text-[0.65rem] uppercase tracking-widest text-gold">{activeLesson.icon} {activeLesson.title}</p><h3 className="mt-1 text-lg font-bold text-text-primary">Card {cardIndex + 1} of {activeLesson.cards.length}</h3></div><span className="text-xs text-text-muted">+25 XP on completion</span></div><div className="mb-5 h-1.5 overflow-hidden rounded-full bg-bg-elevated"><div className="h-full rounded-full bg-gold transition-all" style={{ width: `${((cardIndex + 1) / activeLesson.cards.length) * 100}%` }} /></div><button onClick={() => setRevealed((value) => !value)} className="group w-full rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-bg-card p-8 text-center shadow-lg sm:p-12"><span className="text-[0.65rem] uppercase tracking-widest text-text-muted">{revealed ? "Meaning" : "Say it aloud"}</span><div className="my-5 font-[family-name:var(--font-outfit)] text-4xl font-bold text-text-primary sm:text-5xl">{revealed ? currentCard.english : currentCard.luo}</div><div className="text-sm text-text-secondary">{revealed ? currentCard.note || "Keep the rhythm natural and clear." : "Tap to reveal the meaning"}</div></button><div className="mt-4 flex gap-2"><button onClick={() => speak(currentCard.luo)} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-2.5 text-xs font-semibold text-text-secondary hover:text-gold"><Volume2 className="h-4 w-4" /> Hear it</button><button onClick={() => setRevealed((value) => !value)} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-3 py-2.5 text-xs font-bold text-kenya-black"><RotateCcw className="h-4 w-4" /> {revealed ? "Hide meaning" : "Reveal meaning"}</button></div><div className="mt-6 rounded-xl border border-border bg-bg-card p-4"><p className="mb-3 text-xs font-semibold text-text-primary">Quick check</p><p className="mb-3 text-sm text-text-secondary">{activeLesson.check.question}</p><div className="grid gap-2 sm:grid-cols-2">{activeLesson.check.options.map((option) => <button key={option} onClick={() => setChecked(option)} className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${checked === option ? option === activeLesson.check.answer ? "border-kenya-green bg-kenya-green/10 text-kenya-green" : "border-red-400/50 bg-red-400/10 text-red-300" : "border-border text-text-secondary hover:border-gold/50"}`}>{option}{checked === option && (option === activeLesson.check.answer ? " ✓" : " ×")}</button>)}</div></div><button onClick={nextCard} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-kenya-green px-4 py-3 text-sm font-bold text-white hover:brightness-110">{cardIndex === activeLesson.cards.length - 1 ? "Finish lesson" : "Next card"}<ChevronRight className="h-4 w-4" /></button></section>}

        {tab === "dictionary" && <section><div className="mb-4 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search English or Dholuo..." className="input-field w-full pl-10 text-sm" /></div><div className="relative sm:w-56"><ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" /><select value={category} onChange={(event) => setCategory(event.target.value)} className="input-field w-full pl-10 text-sm"><option value="all">All categories</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div></div><p className="mb-3 text-xs text-text-muted">Showing {filteredEntries.length} of {allEntries.length} entries</p><div className="grid gap-2 sm:grid-cols-2">{filteredEntries.slice(0, 80).map((entry) => { const key = `${entry.categoryId}-${entry.english}`; const favorite = favorites.includes(key); return <div key={key} className="group rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-gold/40"><div className="flex items-start justify-between gap-3"><div><p className="text-[0.6rem] uppercase tracking-wider text-text-muted">{entry.category}</p><h4 className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-bold text-gold">{entry.translation}</h4><p className="text-xs text-text-primary">{entry.english}</p>{entry.pronunciation && <p className="mt-1 text-[0.65rem] italic text-text-muted">/{entry.pronunciation}/</p>}</div><div className="flex gap-1 opacity-70 transition-opacity group-hover:opacity-100"><button onClick={() => speak(entry.translation)} className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold" title="Listen"><Volume2 className="h-4 w-4" /></button><button onClick={() => toggleFavorite(key)} className={`rounded-lg p-2 hover:bg-gold/10 ${favorite ? "text-red-400" : "text-text-muted hover:text-gold"}`} title="Favourite"><Heart className="h-4 w-4" fill={favorite ? "currentColor" : "none"} /></button><button onClick={() => copyWord(entry.translation)} className="rounded-lg p-2 text-text-muted hover:bg-gold/10 hover:text-gold" title="Copy"><Clipboard className="h-4 w-4" /></button></div></div>{entry.context && <p className="mt-3 border-t border-border pt-2 text-[0.7rem] leading-relaxed text-text-secondary">{entry.context}</p>}{copied === entry.translation && <span className="mt-2 block text-[0.65rem] text-kenya-green">Copied</span>}</div>; })}</div>{filteredEntries.length > 80 && <p className="mt-4 text-center text-xs text-text-muted">Refine your search to see more entries.</p>}</section>}

        {tab === "culture" && <section><div className="mb-5 flex gap-2"><button onClick={() => setCultureTab("proverbs")} className={`rounded-lg px-4 py-2 text-xs font-semibold ${cultureTab === "proverbs" ? "bg-gold text-kenya-black" : "border border-border text-text-secondary"}`}>Proverbs</button><button onClick={() => setCultureTab("riddles")} className={`rounded-lg px-4 py-2 text-xs font-semibold ${cultureTab === "riddles" ? "bg-gold text-kenya-black" : "border border-border text-text-secondary"}`}>Riddles</button></div>{cultureTab === "proverbs" ? <div className="grid gap-3 sm:grid-cols-2">{cultureProverbs.map((item) => <article key={item.luo} className="rounded-xl border border-border bg-bg-card p-5"><p className="mb-3 text-[0.65rem] uppercase tracking-wider text-gold">Luo wisdom</p><h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold leading-snug text-text-primary">{item.luo}</h4><p className="mt-2 text-sm italic text-gold/90">“{item.english}”</p><p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-text-secondary"><b className="text-text-primary">Takeaway:</b> {item.meaning}</p><button onClick={() => speak(item.luo)} className="mt-4 flex items-center gap-1.5 text-[0.65rem] font-semibold text-text-muted hover:text-gold"><Volume2 className="h-3.5 w-3.5" /> Listen</button></article>)}</div> : <div className="grid gap-3 sm:grid-cols-2">{cultureRiddles.map((item) => <details key={item.luo} className="group rounded-xl border border-border bg-bg-card p-5"><summary className="cursor-pointer list-none"><p className="mb-3 text-[0.65rem] uppercase tracking-wider text-gold">Think in Dholuo</p><h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary">{item.luo}</h4><p className="mt-2 text-sm text-text-secondary">{item.english}</p><span className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold">Reveal answer <ChevronRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" /></span></summary><p className="mt-4 border-t border-border pt-3 text-sm text-kenya-green">{item.answer}</p></details>)}</div>}</section>}
      </div>
    </ToolShell>
  );
}
