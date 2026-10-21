"use client";

import { useState, useMemo } from "react";
import { Search, Shuffle, Eye, EyeOff, Sparkles, BookOpen } from "lucide-react";
import kikuyuProverbsData from "@/data/kikuyu-proverbs.json";
import { luoProverbs, type ProverbEntry } from "@/data/courses/luo/proverbs";
import { luoRiddles, type RiddleEntry } from "@/data/courses/luo/riddles";
import { luoTongueTwisters, type TongueTwisterEntry } from "@/data/courses/luo/tongue-twisters";
import CustomSelect from "@/components/ui/CustomSelect";

export interface KikuyuProverbItem {
  id: number;
  kikuyu: string;
  translation: string;
  explanation: string | null;
  englishEquivalent: string | null;
  category: string;
}

const KIKUYU_PROVERBS: KikuyuProverbItem[] = Array.isArray(kikuyuProverbsData)
  ? (kikuyuProverbsData as KikuyuProverbItem[])
  : [];

function normalizeDiacritics(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

type WisdomLanguage = "kikuyu" | "luo";
type LuoSubTab = "proverbs" | "riddles" | "twisters";

export default function ProverbsView({
  defaultLanguageId,
  initialLanguage = "kikuyu",
  accentColor = "#10B981",
}: {
  defaultLanguageId?: string;
  initialLanguage?: string;
  accentColor?: string;
}) {
  const resolvedInitial = defaultLanguageId || initialLanguage;
  const [selectedLang, setSelectedLang] = useState<WisdomLanguage>(
    resolvedInitial === "luo" ? "luo" : "kikuyu"
  );
  const [luoSubTab, setLuoSubTab] = useState<LuoSubTab>("proverbs");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 24;

  const kikuyuCategories = useMemo(() => {
    const cats = Array.from(
      new Set(KIKUYU_PROVERBS.map((p: KikuyuProverbItem) => p.category).filter(Boolean))
    );
    return ["All", ...cats];
  }, []);

  const luoCategories = [
    "All",
    "wisdom",
    "warning",
    "truth",
    "patience",
    "family",
    "character",
    "life",
  ];

  const filteredKikuyu = useMemo(() => {
    const q = search.trim().toLowerCase();
    const normQ = normalizeDiacritics(q);
    return KIKUYU_PROVERBS.filter((p: KikuyuProverbItem) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        p.kikuyu.toLowerCase().includes(q) ||
        normalizeDiacritics(p.kikuyu).includes(normQ) ||
        p.translation.toLowerCase().includes(q) ||
        (p.explanation || "").toLowerCase().includes(q) ||
        (p.englishEquivalent || "").toLowerCase().includes(q) ||
        String(p.id) === q
      );
    });
  }, [search, selectedCategory]);

  const filteredLuoProverbs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return luoProverbs.filter((p: ProverbEntry) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        p.luo.toLowerCase().includes(q) ||
        (p.english || "").toLowerCase().includes(q) ||
        (p.meaning || "").toLowerCase().includes(q) ||
        (p.explanation || "").toLowerCase().includes(q)
      );
    });
  }, [search, selectedCategory]);

  const filteredLuoRiddles = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return luoRiddles;
    return luoRiddles.filter(
      (r: RiddleEntry) =>
        r.luo.toLowerCase().includes(q) ||
        r.english.toLowerCase().includes(q) ||
        r.answer.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredLuoTwisters = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return luoTongueTwisters;
    return luoTongueTwisters.filter(
      (t: TongueTwisterEntry) =>
        t.luo.toLowerCase().includes(q) || t.english.toLowerCase().includes(q)
    );
  }, [search]);

  const pickRandom = () => {
    setSelectedCategory("All");
    if (selectedLang === "kikuyu") {
      const item = KIKUYU_PROVERBS[Math.floor(Math.random() * KIKUYU_PROVERBS.length)];
      if (item) setSearch(String(item.id));
    } else if (luoSubTab === "proverbs") {
      const item = luoProverbs[Math.floor(Math.random() * luoProverbs.length)];
      if (item) setSearch(item.luo.slice(0, 18));
    } else if (luoSubTab === "riddles") {
      const item = luoRiddles[Math.floor(Math.random() * luoRiddles.length)];
      if (item) setSearch(item.luo.slice(0, 18));
    }
    setPage(1);
  };

  const activeCategoryOptions = selectedLang === "kikuyu" ? kikuyuCategories : luoCategories;

  return (
    <div className="space-y-5">
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1.5"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Kenyan Oral Literature &amp; Cultural Wisdom
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              Proverbs, Riddles &amp; Tongue Twisters
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {KIKUYU_PROVERBS.length} verified Gĩkũyũ proverbs (Fr. G. Barra, 1939) &amp;{" "}
              {luoProverbs.length + luoRiddles.length + luoTongueTwisters.length} Dholuo proverbs, riddles, and tongue twisters.
            </p>
          </div>

          {/* Single-row 2-button horizontal switcher */}
          <div className="grid grid-cols-2 sm:flex gap-2 shrink-0">
            <button
              onClick={() => {
                setSelectedLang("kikuyu");
                setSelectedCategory("All");
                setSearch("");
                setPage(1);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center whitespace-nowrap ${
                selectedLang === "kikuyu"
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]"
              }`}
            >
              🌿 Gĩkũyũ ({KIKUYU_PROVERBS.length})
            </button>
            <button
              onClick={() => {
                setSelectedLang("luo");
                setSelectedCategory("All");
                setSearch("");
                setPage(1);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center whitespace-nowrap ${
                selectedLang === "luo"
                  ? "bg-sky-500/15 text-sky-400 border-sky-500/40"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]"
              }`}
            >
              🌊 Dholuo ({luoProverbs.length + luoRiddles.length + luoTongueTwisters.length})
            </button>
          </div>
        </div>

        {/* Single-row horizontal sub-tabs for Dholuo */}
        {selectedLang === "luo" && (
          <div className="grid grid-cols-3 sm:flex gap-1.5 mb-3.5 pt-3 border-t border-[var(--border)]">
            {(
              [
                { id: "proverbs", label: `Proverbs (${luoProverbs.length})` },
                { id: "riddles", label: `Riddles (${luoRiddles.length})` },
                { id: "twisters", label: `Twisters (${luoTongueTwisters.length})` },
              ] as const
            ).map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setLuoSubTab(sub.id);
                  setPage(1);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer text-center whitespace-nowrap ${
                  luoSubTab === sub.id
                    ? "bg-sky-500 text-black font-bold"
                    : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Search + Category Dropdown + Random button in a compact layout */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder={
                selectedLang === "kikuyu"
                  ? "Search Gĩkũyũ word (u matches ũ), meaning, or #..."
                  : "Search Dholuo text, translation, or lesson..."
              }
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)]"
            />
          </div>

          <div className="flex items-center gap-2">
            {(selectedLang === "kikuyu" || (selectedLang === "luo" && luoSubTab === "proverbs")) && (
              <CustomSelect
                value={selectedCategory}
                onValueChange={(val) => {
                  setSelectedCategory(val);
                  setPage(1);
                }}
                options={activeCategoryOptions.map((cat) => ({
                  value: cat,
                  label: cat === "All" ? "All Themes" : cat.charAt(0).toUpperCase() + cat.slice(1),
                }))}
                className="flex-1 sm:w-44 text-xs"
              />
            )}

            <button
              onClick={pickRandom}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--gold)]/40 text-xs font-semibold text-[var(--text-primary)] cursor-pointer transition-all shrink-0"
            >
              <Shuffle className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Random</span>
            </button>

            {(search || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                  setPage(1);
                }}
                className="px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 cursor-pointer shrink-0"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {selectedLang === "kikuyu" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)] px-1">
            <span>
              Showing {Math.min(filteredKikuyu.length, page * PAGE_SIZE)} of {filteredKikuyu.length} Gĩkũyũ proverbs
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> Source: Fr. G. Barra (1939), 1,000 Kikuyu Proverbs
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredKikuyu.slice(0, page * PAGE_SIZE).map((p: KikuyuProverbItem) => (
              <div
                key={p.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                    #{p.id}
                  </span>
                  {p.category && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] capitalize">
                      {p.category}
                    </span>
                  )}
                </div>
                <p className="text-base font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                  &ldquo;{p.kikuyu}&rdquo;
                </p>
                <p className="text-xs font-medium text-emerald-400/90 mb-2">
                  Literal: {p.translation}
                </p>
                {p.explanation && (
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                    <span className="font-semibold text-[var(--text-primary)]">Meaning: </span>
                    {p.explanation}
                  </p>
                )}
                {p.englishEquivalent && (
                  <div className="mt-2 pt-2 border-t border-[var(--border)] text-[11px] text-[var(--gold)]">
                    <span className="font-bold">English Equivalent: </span>
                    {p.englishEquivalent}
                  </div>
                )}
              </div>
            ))}
          </div>
          {filteredKikuyu.length > page * PAGE_SIZE && (
            <div className="text-center pt-2">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-emerald-500/40 text-xs font-bold text-[var(--text-primary)] cursor-pointer transition-all"
              >
                Load More Proverbs ({filteredKikuyu.length - page * PAGE_SIZE} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {selectedLang === "luo" && luoSubTab === "proverbs" && (
        <>
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
            <span>
              Showing {Math.min(filteredLuoProverbs.length, page * PAGE_SIZE)} of{" "}
              {filteredLuoProverbs.length} Dholuo proverbs
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredLuoProverbs.slice(0, page * PAGE_SIZE).map((p: ProverbEntry, idx: number) => (
              <div
                key={p.id || idx}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-sky-500/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400">
                    Ngero #{idx + 1}
                  </span>
                  {p.category && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] capitalize">
                      {p.category}
                    </span>
                  )}
                </div>
                <p className="text-base font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                  &ldquo;{p.luo}&rdquo;
                </p>
                <p className="text-xs font-medium text-sky-400/90 mb-2">
                  Literal: {p.english}
                </p>
                {(p.meaning || p.explanation) && (
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-semibold text-[var(--text-primary)]">Wisdom: </span>
                    {p.meaning || p.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
          {filteredLuoProverbs.length > page * PAGE_SIZE && (
            <div className="text-center pt-2">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-sky-500/40 text-xs font-bold text-[var(--text-primary)] cursor-pointer transition-all"
              >
                Load More Dholuo Proverbs ({filteredLuoProverbs.length - page * PAGE_SIZE} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {selectedLang === "luo" && luoSubTab === "riddles" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredLuoRiddles.slice(0, page * PAGE_SIZE).map((r: RiddleEntry, idx: number) => {
            const key = r.id || String(idx);
            const revealed = !!revealedIds[key];
            return (
              <div
                key={key}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                    Ngero / Riddle #{idx + 1}
                  </span>
                  <button
                    onClick={() =>
                      setRevealedIds((prev) => ({ ...prev, [key]: !prev[key] }))
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
                  >
                    {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {revealed ? "Hide Answer" : "Reveal Answer"}
                  </button>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  &ldquo;{r.luo}&rdquo;
                </p>
                <p className="text-xs text-[var(--text-secondary)] italic">{r.english}</p>
                {revealed && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-semibold">
                    Answer: {r.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {selectedLang === "luo" && luoSubTab === "twisters" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredLuoTwisters.map((t: TongueTwisterEntry, idx: number) => (
            <div
              key={t.id || idx}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 space-y-2"
            >
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                Tongue Twister #{idx + 1}
              </span>
              <p className="text-sm font-bold text-[var(--text-primary)]">
                &ldquo;{t.luo}&rdquo;
              </p>
              <p className="text-xs text-[var(--text-secondary)]">{t.english}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
