/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Shuffle,
  Filter,
  ArrowRight,
  Info,
  ChevronLeft,
  ChevronRight,
  Scale,
  Heart,
  Sprout,
  Users,
  ShieldAlert,
  Leaf,
  Globe2,
  ExternalLink,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import rawProverbs from "@/data/kikuyu-proverbs.json";

const tool = TOOLS.find((t) => t.slug === "kikuyu-proverbs")!;

interface Proverb {
  id: number;
  kikuyu: string;
  translation: string;
  explanation: string | null;
  englishEquivalent: string | null;
  category: string;
}

const PROVERBS = rawProverbs as Proverb[];

const CATEGORIES = [
  { id: "all", label: "All Themes", icon: BookOpen, color: "#D4AF37" },
  { id: "wisdom", label: "Wisdom & Character", icon: Sparkles, color: "#3B82F6" },
  { id: "family", label: "Family & Kinship", icon: Heart, color: "#EC4899" },
  { id: "work-wealth", label: "Farming & Wealth", icon: Sprout, color: "#10B981" },
  { id: "community", label: "Community & Friends", icon: Users, color: "#F59E0B" },
  { id: "caution", label: "Caution & Danger", icon: ShieldAlert, color: "#EF4444" },
  { id: "nature", label: "Nature & Animals", icon: Leaf, color: "#84CC16" },
  { id: "justice", label: "Justice & Truth", icon: Scale, color: "#8B5CF6" },
];

const ITEMS_PER_PAGE = 24;

// Normalization helper for diacritic-tolerant search (ũ -> u, ĩ -> i)
function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .replace(/[ũũŨ]/g, "u")
    .replace(/[ĩĩĨ]/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const FAQ_ITEMS = [
  {
    question: "What are Thimo cia Gĩkũyũ?",
    answer:
      "Thimo cia Gĩkũyũ are traditional Kikuyu proverbs that embody the philosophical, moral, legal, and communal wisdom of the Agĩkũyũ people. They were traditionally transmitted orally across generations and served as legal precedents in traditional elders' courts (kĩama), moral lessons for youth, and concise summaries of human nature.",
  },
  {
    question: "Who was Fr. G. Barra and what is the source of these proverbs?",
    answer:
      "Father G. Barra was an Italian Catholic missionary of the Consolata Fathers who worked extensively among the Agĩkũyũ in Central Kenya (particularly Nyeri). In 1939, he compiled and published '1,000 Kikuyu Proverbs' (reprinted by the Kenya Literature Bureau / Macmillan). His collection is one of the most authoritative and comprehensive records of Kikuyu proverbial lore in existence.",
  },
  {
    question: "Why do Kikuyu vowels have tildes like ũ and ĩ?",
    answer:
      "Gĩkũyũ is a 7-vowel Bantu language (a, e, i, o, u, ĩ, ũ). The letters ĩ and ũ represent close-mid vowels: 'ĩ' is pronounced between 'e' and 'i' (similar to the 'i' in 'pin'), while 'ũ' is pronounced between 'o' and 'u' (similar to the 'oo' in 'book'). Standard keyboards often omit them, but they are phonemically distinct in Gĩkũyũ.",
  },
  {
    question: "How did Kikuyu elders use proverbs in traditional trials (ciira)?",
    answer:
      "In traditional Agĩkũyũ courts of elders (athuri a kĩama), debates were not conducted in dry legalistic jargon, but through proverbs and parables. A well-placed proverb like 'Ciira wĩ kĩrĩro ti ũiguano' (A lawsuit with weeping is not concord) or 'Kĩama gĩtĩthũire mũndũ, kĩthũire ũhoro wake' (The council hates nobody; it only hates their misdeed) could resolve disputes and bring social harmony.",
  },
  {
    question: "How can I learn to speak Kikuyu (Gĩkũyũ)?",
    answer:
      "You can learn Gĩkũyũ right here on KenyaHub! Check out our interactive Kikuyu Language Course at /tools/learn/kikuyu with guided lessons in greetings, numbers, family kinship, and everyday conversation, or practice vocabulary with our Kenyan Languages Translator at /tools/kenyan-translator.",
  },
];

export default function KikuyuProverbsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onlyWithEquivalent, setOnlyWithEquivalent] = useState(false);
  const [sortBy, setSortBy] = useState("number-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [showCulturalNotes, setShowCulturalNotes] = useState(false);

  // Initialize random featured proverb
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PROVERBS.length);
    setFeaturedIndex(randomIndex);
  }, []);

  const featuredProverb = PROVERBS[featuredIndex] || PROVERBS[0];

  const handleShuffleFeatured = () => {
    let nextIndex = Math.floor(Math.random() * PROVERBS.length);
    if (nextIndex === featuredIndex) {
      nextIndex = (nextIndex + 1) % PROVERBS.length;
    }
    setFeaturedIndex(nextIndex);
  };

  const copyToClipboard = useCallback((proverb: Proverb) => {
    let text = `"${proverb.kikuyu}"\nTranslation: ${proverb.translation}`;
    if (proverb.explanation) {
      text += `\nMeaning: ${proverb.explanation}`;
    }
    if (proverb.englishEquivalent) {
      text += `\nEnglish Equivalent: "${proverb.englishEquivalent}"`;
    }
    text += `\n— Thimo cia Gĩkũyũ (Kikuyu Proverb #${proverb.id}, KenyaHub)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(proverb.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  // Filter & sort
  const filteredProverbs = useMemo(() => {
    const qRaw = search.trim();
    const qNorm = normalizeText(qRaw);

    return PROVERBS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // English equivalent filter
      if (onlyWithEquivalent && !p.englishEquivalent) {
        return false;
      }

      // Search filter
      if (qNorm) {
        // Direct ID search if user entered digits
        if (/^\d+$/.test(qRaw) && p.id === parseInt(qRaw, 10)) {
          return true;
        }

        const kikuyuNorm = normalizeText(p.kikuyu);
        const transNorm = normalizeText(p.translation);
        const explNorm = p.explanation ? normalizeText(p.explanation) : "";
        const equivNorm = p.englishEquivalent ? normalizeText(p.englishEquivalent) : "";

        return (
          kikuyuNorm.includes(qNorm) ||
          transNorm.includes(qNorm) ||
          explNorm.includes(qNorm) ||
          equivNorm.includes(qNorm)
        );
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "number-asc") return a.id - b.id;
      if (sortBy === "number-desc") return b.id - a.id;
      if (sortBy === "alpha-kikuyu") return a.kikuyu.localeCompare(b.kikuyu);
      return 0;
    });
  }, [search, selectedCategory, onlyWithEquivalent, sortBy]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, onlyWithEquivalent, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProverbs.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProverbs = filteredProverbs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROVERBS.length };
    PROVERBS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <ToolShell tool={tool} faq={FAQ_ITEMS}>
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg-card via-bg-card to-gold/10 p-6 sm:p-8 text-center sm:text-left">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
                <DynamicIcon emoji="📜" className="w-3.5 h-3.5" />
                <span>Thimo cia Gĩkũyũ • 1,000 Authentic Proverbs</span>
              </div>
              <h1 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Kikuyu Proverbs &amp; Cultural Wisdom
              </h1>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Explore the complete 1939 collection compiled by <strong className="text-text-primary">Fr. G. Barra</strong> of the Consolata Catholic Mission. Dive into deep tribal philosophy, courtroom jurisprudence, humor, and English equivalents.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-text-muted">
                <span className="flex items-center gap-1.5 font-medium text-text-secondary">
                  <BookOpen className="w-4 h-4 text-gold" /> 989 Preserved Sayings
                </span>
                <span className="flex items-center gap-1.5 font-medium text-text-secondary">
                  <Sparkles className="w-4 h-4 text-gold" /> 664 English Equivalents
                </span>
                <span className="flex items-center gap-1.5 font-medium text-text-secondary">
                  <Globe2 className="w-4 h-4 text-gold" /> 7 Life Themes
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto shrink-0">
              <Link
                href="/tools/learn/kikuyu"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-xs sm:text-sm font-bold text-kenya-black hover:bg-gold/90 transition-all shadow-md active:scale-95"
              >
                <DynamicIcon emoji="🗣️" className="w-4 h-4" />
                <span>Learn Gĩkũyũ Course</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setShowCulturalNotes(!showCulturalNotes)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg-elevated px-4 py-2.5 text-xs sm:text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-gold/40 transition-all"
              >
                <Info className="w-4 h-4 text-gold" />
                <span>{showCulturalNotes ? "Hide Cultural Guide" : "Cultural & Vowel Guide"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cultural & Linguistic Guide (Collapsible) */}
        {showCulturalNotes && (
          <div className="rounded-2xl border border-gold/30 bg-bg-card p-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="font-bold text-text-primary text-base flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                Understanding Kikuyu Proverbs (Thimo) &amp; Pronunciation
              </h3>
              <button
                onClick={() => setShowCulturalNotes(false)}
                className="text-xs text-text-muted hover:text-gold transition-colors"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-text-secondary">
              <div className="space-y-2 bg-bg-elevated/50 p-4 rounded-xl border border-border/50">
                <h4 className="font-bold text-text-primary text-sm flex items-center gap-1.5">
                  <DynamicIcon emoji="🔤" className="w-4 h-4" /> The 7 Vowels of Gĩkũyũ
                </h4>
                <p>
                  Gĩkũyũ has 7 distinct vowel sounds. Unlike standard 5-vowel languages:
                </p>
                <ul className="list-disc list-inside space-y-1 text-text-muted">
                  <li><strong className="text-gold">Ĩ / ĩ</strong>: Pronounced between &apos;e&apos; and &apos;i&apos; (like &apos;i&apos; in <em>pin</em> or &apos;ea&apos; in <em>meat</em>).</li>
                  <li><strong className="text-gold">Ũ / ũ</strong>: Pronounced between &apos;o&apos; and &apos;u&apos; (like &apos;oo&apos; in <em>book</em> or &apos;u&apos; in <em>pull</em>).</li>
                  <li><strong>A, E, I, O, U</strong>: Pronounced as in pure Italian or Swahili.</li>
                </ul>
              </div>

              <div className="space-y-2 bg-bg-elevated/50 p-4 rounded-xl border border-border/50">
                <h4 className="font-bold text-text-primary text-sm flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-gold" /> Proverbs as Law &amp; Precedent
                </h4>
                <p>
                  In the council of elders (<em>Kĩama kĩa Athuri</em>), proverbs were not just flowery speech; they served as <strong>constitutional maxims and binding precedents</strong>.
                </p>
                <p className="text-text-muted">
                  Quoting a recognized proverb like <em>&quot;Kĩama gĩtĩthũire mũndũ, kĩthũire ũhoro wake&quot;</em> helped decouple personal emotion from impartial justice.
                </p>
              </div>

              <div className="space-y-2 bg-bg-elevated/50 p-4 rounded-xl border border-border/50">
                <h4 className="font-bold text-text-primary text-sm flex items-center gap-1.5">
                  <DynamicIcon emoji="🏺" className="w-4 h-4" /> Common Cultural Terms
                </h4>
                <ul className="space-y-1.5 text-text-muted">
                  <li><strong className="text-text-primary">Mũgumo</strong>: Sacred African fig tree where sacrifices to Ngai were held.</li>
                  <li><strong className="text-text-primary">Ndĩrĩ</strong>: Wooden mortar used for crushing grain; symbol of household endurance.</li>
                  <li><strong className="text-text-primary">Mwatũ</strong>: Hollowed log beehive placed in trees.</li>
                  <li><strong className="text-text-primary">Thakirio</strong>: The choice portion of sacrificial meat given to the priest-elder.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Featured "Wisdom of the Day" Card */}
        {featuredProverb && (
          <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-bg-card via-bg-card to-gold/5 p-6 sm:p-7 shadow-lg shadow-gold/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold font-bold text-sm">
                  #{featuredProverb.id}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">Featured Wisdom of the Day</span>
                  <p className="text-[0.7rem] text-text-muted">Fr. G. Barra Collection (1939)</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleShuffleFeatured}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-text-secondary hover:text-gold hover:border-gold/40 transition-colors"
                  title="Pick a random proverb"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Draw Another</span>
                </button>
                <button
                  type="button"
                  onClick={() => copyToClipboard(featuredProverb)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gold/10 border border-gold/30 px-3 py-1.5 text-xs font-semibold text-gold hover:bg-gold/20 transition-colors"
                  title="Copy proverb to clipboard"
                >
                  {copiedId === featuredProverb.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-extrabold text-gold leading-snug">
                &ldquo;{featuredProverb.kikuyu}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-text-primary font-medium italic">
                &ldquo;{featuredProverb.translation}&rdquo;
              </p>
              {featuredProverb.explanation && (
                <div className="rounded-xl bg-bg-elevated/70 p-3.5 border border-border/50 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <strong className="text-text-primary font-semibold">Cultural Meaning: </strong>
                  {featuredProverb.explanation}
                </div>
              )}
              {featuredProverb.englishEquivalent && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-gold/10 border border-gold/25 px-3 py-1.5 text-xs font-semibold text-gold">
                  <DynamicIcon emoji="💡" className="w-3.5 h-3.5" />
                  <span>English Equivalent: &ldquo;{featuredProverb.englishEquivalent}&rdquo;</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search, Filter & Sorting Bar */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4 shadow-sm">
          {/* Top row: Search input and controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="flex-1">
              <SearchInput
                id="proverbs-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClear={() => setSearch("")}
                placeholder="Search in Kikuyu, English translation, meaning, or # number..."
                className="w-full text-sm"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <div className="w-44 shrink-0">
                <CustomSelect
                  id="proverbs-sort"
                  value={sortBy}
                  onValueChange={setSortBy}
                  options={[
                    { value: "number-asc", label: "Proverb # (1 to 1000)" },
                    { value: "number-desc", label: "Proverb # (1000 to 1)" },
                    { value: "alpha-kikuyu", label: "Alphabetical (A–Z)" },
                  ]}
                />
              </div>

              <button
                type="button"
                onClick={() => setOnlyWithEquivalent(!onlyWithEquivalent)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 shrink-0 ${
                  onlyWithEquivalent
                    ? "bg-gold text-kenya-black border-gold shadow-sm"
                    : "bg-bg-elevated border-border text-text-secondary hover:text-gold hover:border-gold/30"
                }`}
                title="Filter proverbs with an English equivalent"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>With English Match</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-border">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const count = categoryCounts[cat.id] || 0;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-gold text-kenya-black border-gold shadow-sm font-bold"
                      : "bg-bg-elevated border-border text-text-secondary hover:text-text-primary hover:border-gold/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? "#000" : cat.color }} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[0.65rem] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-kenya-black/20 text-kenya-black" : "bg-bg-card text-text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results summary bar */}
          <div className="flex items-center justify-between text-xs text-text-muted pt-1 border-t border-border/40">
            <span>
              Showing <strong className="text-text-primary">{filteredProverbs.length > 0 ? startIndex + 1 : 0}</strong>–
              <strong className="text-text-primary">
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredProverbs.length)}
              </strong>{" "}
              of <strong className="text-text-primary">{filteredProverbs.length}</strong> proverbs
              {selectedCategory !== "all" && ` in ${CATEGORIES.find((c) => c.id === selectedCategory)?.label}`}
              {onlyWithEquivalent && " (with English match)"}
            </span>

            {(search || selectedCategory !== "all" || onlyWithEquivalent) && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                  setOnlyWithEquivalent(false);
                }}
                className="text-xs text-gold hover:underline font-semibold"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Proverbs Grid */}
        {filteredProverbs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-bg-card p-12 text-center space-y-3">
            <DynamicIcon emoji="🔍" className="w-12 h-12 mx-auto text-gold opacity-60" />
            <h3 className="text-base font-bold text-text-primary">No Kikuyu proverbs match your query</h3>
            <p className="text-xs text-text-secondary max-w-md mx-auto">
              We couldn&apos;t find any proverbs matching &ldquo;{search}&rdquo;. Try searching for general terms like &ldquo;friend&rdquo;, &ldquo;goat&rdquo;, &ldquo;fire&rdquo;, &ldquo;child&rdquo;, or reset the active category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
                setOnlyWithEquivalent(false);
              }}
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-xs font-bold text-kenya-black hover:bg-gold/90 transition-colors"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginatedProverbs.map((proverb) => {
              const catMeta = CATEGORIES.find((c) => c.id === proverb.category) || CATEGORIES[1];
              const CatIcon = catMeta.icon;

              return (
                <div
                  key={proverb.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-bg-card p-5 sm:p-6 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="space-y-3">
                    {/* Header: Proverb Number, Category & Copy */}
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-gold/15 text-gold border border-gold/20">
                          #{proverb.id}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 text-[0.65rem] font-semibold px-2 py-0.5 rounded-full border border-border/60 bg-bg-elevated"
                          style={{ color: catMeta.color }}
                        >
                          <CatIcon className="w-3 h-3" />
                          <span>{catMeta.label}</span>
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(proverb)}
                        className="rounded-lg p-1.5 text-text-muted hover:text-gold hover:bg-bg-elevated transition-colors"
                        title="Copy proverb"
                        aria-label="Copy proverb"
                      >
                        {copiedId === proverb.id ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Kikuyu text */}
                    <h3 className="font-[family-name:var(--font-outfit)] text-base sm:text-lg font-bold text-text-primary group-hover:text-gold transition-colors leading-snug">
                      &ldquo;{proverb.kikuyu}&rdquo;
                    </h3>

                    {/* Translation */}
                    <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                      &ldquo;{proverb.translation}&rdquo;
                    </p>

                    {/* Cultural Explanation */}
                    {proverb.explanation && (
                      <p className="text-xs text-text-muted leading-relaxed border-l-2 border-gold/40 pl-3 py-0.5">
                        {proverb.explanation}
                      </p>
                    )}
                  </div>

                  {/* English Equivalent Footer */}
                  {proverb.englishEquivalent && (
                    <div className="mt-4 pt-3 border-t border-border/40">
                      <div className="rounded-lg bg-bg-elevated/70 border border-border/60 px-3 py-2 text-xs flex items-start gap-2">
                        <DynamicIcon emoji="💡" className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="text-text-secondary">
                          <strong className="text-gold font-semibold">Equivalent: </strong>
                          &ldquo;{proverb.englishEquivalent}&rdquo;
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-bg-card p-4">
            <span className="text-xs text-text-muted order-2 sm:order-1">
              Page <strong className="text-text-primary">{currentPage}</strong> of{" "}
              <strong className="text-text-primary">{totalPages}</strong> ({filteredProverbs.length} proverbs)
            </span>

            <div className="flex items-center gap-1.5 order-1 sm:order-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-bg-elevated px-3 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-gold/40 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Quick page indicators */}
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? "bg-gold text-kenya-black shadow-sm"
                          : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-bg-elevated px-3 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-gold/40 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Cross-linking Banner to Course & Translator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tools/learn/kikuyu"
            className="group flex items-center justify-between rounded-2xl border border-border bg-gradient-to-br from-bg-card to-green-950/20 p-5 hover:border-green-600/50 hover:shadow-lg transition-all"
          >
            <div className="space-y-1">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-green-500">
                Interactive Learning
              </span>
              <h4 className="font-bold text-text-primary text-base group-hover:text-gold transition-colors">
                Start Kikuyu Language Course
              </h4>
              <p className="text-xs text-text-muted">
                Learn 7 foundational skills with greetings, numbers, family kinship, and exercises.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:translate-x-1 group-hover:text-gold transition-all shrink-0 ml-3" />
          </Link>

          <Link
            href="/tools/kenyan-translator"
            className="group flex items-center justify-between rounded-2xl border border-border bg-gradient-to-br from-bg-card to-gold/10 p-5 hover:border-gold/40 hover:shadow-lg transition-all"
          >
            <div className="space-y-1">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                12+ Kenyan Languages
              </span>
              <h4 className="font-bold text-text-primary text-base group-hover:text-gold transition-colors">
                Kenyan Languages Translator
              </h4>
              <p className="text-xs text-text-muted">
                Look up 400+ Gĩkũyũ vocabulary entries, verbs, cultural terms, and compare dialects.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:translate-x-1 group-hover:text-gold transition-all shrink-0 ml-3" />
          </Link>
        </div>
      </div>
    </ToolShell>
  );
}

