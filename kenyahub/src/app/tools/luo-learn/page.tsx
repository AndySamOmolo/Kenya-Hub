"use client";

import { useEffect, useMemo, useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import { BookOpen, Check, ChevronRight, Clipboard, Flame, GraduationCap, Heart, Lightbulb, ListFilter, RotateCcw, Search, Sparkles, Trophy, Volume2, Zap } from "lucide-react";
import luoDict from "@/data/dictionaries/luo.json";

const tool = TOOLS.find((item) => item.slug === "luo-learn")!;

type Tab = "learn" | "dictionary" | "culture";
type Lesson = {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  cards: { luo: string; english: string; note?: string }[];
  check: { question: string; options: string[]; answer: string };
};

const lessons: Lesson[] = [
  {
    id: "greetings",
    title: "Greetings & respect",
    description: "Start every conversation with warmth and good manners.",
    icon: "👋",
    level: "Beginner",
    cards: [
      { luo: "Amosi", english: "Hello (to one person)", note: "A friendly greeting for one person." },
      { luo: "Amoso u", english: "Hello (to many people)", note: "Use this when greeting a group." },
      { luo: "Idhi nade?", english: "How are you?", note: "A natural way to check in." },
      { luo: "Adhi maber", english: "I am fine", note: "Literally, I am going well." },
      { luo: "Erokamano", english: "Thank you", note: "A phrase worth carrying everywhere." },
      { luo: "Oriti", english: "Goodbye", note: "A warm farewell." },
    ],
    check: { question: 'How do you say “Thank you”?', options: ["Oriti", "Erokamano", "Amosi", "Adhi maber"], answer: "Erokamano" },
  },
  {
    id: "numbers",
    title: "Count 1 to 10",
    description: "Learn the first ten numbers and notice their patterns.",
    icon: "🔢",
    level: "Beginner",
    cards: [
      { luo: "Achiel", english: "One" }, { luo: "Ariyo", english: "Two" }, { luo: "Adek", english: "Three" },
      { luo: "Ang'wen", english: "Four" }, { luo: "Abich", english: "Five" }, { luo: "Auchiel", english: "Six" },
      { luo: "Abiriyo", english: "Seven" }, { luo: "Aboro", english: "Eight" }, { luo: "Ochiko", english: "Nine" }, { luo: "Apar", english: "Ten" },
    ],
    check: { question: 'What does “Abich” mean?', options: ["Three", "Five", "Seven", "Ten"], answer: "Five" },
  },
  {
    id: "everyday",
    title: "Everyday essentials",
    description: "Useful words for home, food, family, and the world around you.",
    icon: "🌿",
    level: "Beginner",
    cards: [
      { luo: "Pi", english: "Water" }, { luo: "Chiemo", english: "Food" }, { luo: "Dala", english: "Home / homestead" },
      { luo: "Nyathi", english: "Child" }, { luo: "Osiepna", english: "My friend" }, { luo: "Rech", english: "Fish" },
      { luo: "Kuon", english: "Ugali / staple food" }, { luo: "Nam", english: "Lake / sea" },
    ],
    check: { question: 'Which word means “Water”?', options: ["Pi", "Rech", "Dala", "Nam"], answer: "Pi" },
  },
  {
    id: "time",
    title: "Time & rhythm",
    description: "Talk about today, tomorrow, yesterday, and the daily cycle.",
    icon: "☀️",
    level: "Beginner",
    cards: [
      { luo: "Kawuono", english: "Today" }, { luo: "Kiny", english: "Tomorrow" }, { luo: "Nyoro", english: "Yesterday" },
      { luo: "Sani", english: "Now" }, { luo: "Odhiambo", english: "Evening" }, { luo: "Okinyi", english: "Morning" },
    ],
    check: { question: 'What does “Kiny” mean?', options: ["Today", "Yesterday", "Tomorrow", "Evening"], answer: "Tomorrow" },
  },
];

const cultureProverbs = [
  { luo: "Aora matin ok yomo pii", english: "A small river does not carry water.", meaning: "Small beginnings can still become useful when they are nurtured." },
  { luo: "Adiera ok tow", english: "Truth does not rot.", meaning: "Truth may take time, but it keeps its strength." },
  { luo: "Ng'ato ng'ato gi wachne", english: "Everyone has their own story.", meaning: "Listen with humility; each person carries a different experience." },
  { luo: "Jatelo ok dhi kende", english: "A leader does not walk alone.", meaning: "Good leadership is carried by community and shared responsibility." },
  { luo: "Koth biro ka polo oyudo", english: "Rain comes when the sky is ready.", meaning: "Some things need patience before their moment arrives." },
];

const cultureRiddles = [
  { luo: "Abet e kombe adek kinde duto.", english: "I always sit on three chairs.", answer: "A cooking pot resting on three stones." },
  { luo: "Adak e kind kuthe.", english: "I live among thorns.", answer: "The tongue in the mouth." },
  { luo: "Adhi nyime, aduogo chien.", english: "I go backwards and forward.", answer: "A swing." },
  { luo: "Agoyo nyathina to ji miel.", english: "I beat my child while people are dancing.", answer: "A drum." },
];

const faq = [
  { question: "What is LuoLearn?", answer: "LuoLearn is KenyaHub's first dedicated language-learning module. It combines structured practice with Dholuo vocabulary and Luo cultural knowledge." },
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

export default function LuoLearnPage() {
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
  const [hydrated, setHydrated] = useState(false);
  const [cultureTab, setCultureTab] = useState<"proverbs" | "riddles">("proverbs");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const loadProgress = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("kh-luo-learn") || "{}");
        setCompleted(saved.completed || []); setXp(saved.xp || 0); setStreak(saved.streak || 0); setFavorites(saved.favorites || []);
      } catch { /* local progress is optional */ }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(loadProgress);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("kh-luo-learn", JSON.stringify({ completed, xp, streak, favorites }));
  }, [completed, xp, streak, favorites, hydrated]);

  const categories = useMemo(() => luoDict.categories.filter((item) => item.entries.length > 0), []);
  const allEntries = useMemo(() => categories.flatMap((item) => item.entries.map((entry) => ({ ...entry, category: item.name, categoryId: item.id }))), [categories]);
  const filteredEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allEntries.filter((entry) => (category === "all" || entry.categoryId === category) && (!needle || entry.english.toLowerCase().includes(needle) || entry.translation.toLowerCase().includes(needle)));
  }, [allEntries, category, query]);
  const currentCard = activeLesson?.cards[cardIndex];
  const progress = Math.round((completed.length / lessons.length) * 100);

  function beginLesson(lesson: Lesson) {
    setActiveLesson(lesson); setCardIndex(0); setRevealed(false); setChecked(null);
  }
  function nextCard() {
    if (!activeLesson) return;
    if (cardIndex === activeLesson.cards.length - 1) {
      if (!completed.includes(activeLesson.id)) { setCompleted((items) => [...items, activeLesson.id]); setXp((value) => value + 25); setStreak((value) => Math.max(1, value)); }
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
          {[{ id: "learn" as const, label: "Learn", icon: GraduationCap }, { id: "dictionary" as const, label: "Dictionary", icon: Search }, { id: "culture" as const, label: "Culture", icon: Lightbulb }].map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setTab(item.id)} className={`flex min-w-[7rem] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${tab === item.id ? "bg-gold text-kenya-black" : "text-text-secondary hover:text-text-primary"}`}><Icon className="h-4 w-4" />{item.label}</button>; })}
        </div>

        {tab === "learn" && !activeLesson && <>
          <div className="flex items-end justify-between gap-4"><div><p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gold">Your path</p><h3 className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-text-primary">Small steps, real recall</h3></div><span className="text-xs text-text-muted">{completed.length} of {lessons.length} complete</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-bg-elevated"><div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} /></div>
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
