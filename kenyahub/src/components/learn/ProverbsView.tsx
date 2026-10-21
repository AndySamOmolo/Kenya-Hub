"use client";

import { useState, useMemo } from "react";
import { Search, Shuffle, Eye, EyeOff, Sparkles, BookOpen } from "lucide-react";
import kikuyuProverbsData from "@/data/kikuyu-proverbs.json";
import { luoProverbs, type ProverbEntry } from "@/data/courses/luo/proverbs";
import { luoRiddles, type RiddleEntry } from "@/data/courses/luo/riddles";
import { luoTongueTwisters, type TongueTwisterEntry } from "@/data/courses/luo/tongue-twisters";

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

  return (
    <div className="space-y-6">
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Kenyan Oral Literature & Cultural Wisdom
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              Proverbs, Riddles & Tongue Twisters
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Explore {KIKUYU_PROVERBS.length} verified Gĩkũyũ proverbs (Fr. G. Barra, 1939) and{" "}
              {luoProverbs.length + luoRiddles.length + luoTongueTwisters.length} Dholuo proverbs, riddles, and tongue twisters — integrated directly into the Language Learning Hub.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedLang("kikuyu");
                setSelectedCategory("All");
                setSearch("");
                setPage(1);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedLang === "kikuyu"
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]"
              }`}
            >
              🌿 Gĩkũyũ Proverbs ({KIKUYU_PROVERBS.length})
            </button>
            <button
              onClick={() => {
                setSelectedLang("luo");
                setSelectedCategory("All");
                setSearch("");
                setPage(1);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedLang === "luo"
                  ? "bg-sky-500/15 text-sky-400 border-sky-500/40"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]"
              }`}
            >
              🌊 Dholuo Wisdom ({luoProverbs.length + luoRiddles.length + luoTongueTwisters.length})
            </button>
          </div>
        </div>

        {selectedLang === "luo" && (
          <div className="flex flex-wrap gap-2 mb-4 pt-3 border-t border-[var(--border)]">
            {(
              [
                { id: "proverbs", label: `Proverbs (${luoProverbs.length})` },
                { id: "riddles", label: `Interactive Riddles (${luoRiddles.length})` },
                { id: "twisters", label: `Tongue Twisters (${luoTongueTwisters.length})` },
              ] as const
            ).map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setLuoSubTab(sub.id);
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
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

        <div className="flex flex-col sm:flex-row gap-2.5">
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
                  ? "Search by Gĩkũyũ word (u matches ũ), English meaning, or # (1–1000)..."
                  : "Search Dholuo text, literal translation, or moral lesson..."
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)]"
            />
          </div>
          <button
            onClick={pickRandom}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--gold)]/40 text-xs font-semibold text-[var(--text-primary)] cursor-pointer transition-all"
          >
            <Shuffle className="w-3.5 h-3.5 text-[var(--gold)]" />
            Random Wisdom
          </button>
          {(search || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setPage(1);
              }}
              className="px-3.5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        {(selectedLang === "kikuyu" || (selectedLang === "luo" && luoSubTab === "proverbs")) && (
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {(selectedLang === "kikuyu" ? kikuyuCategories : luoCategories).map((cat: string) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold capitalize transition-all cursor-pointer border ${
                    active
                      ? "bg-[var(--gold)]/15 text-[var(--gold)] border-[var(--gold)]/40"
                      : "bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}
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
                  <span className="text-[10px] font-semibold capitalize px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                    {p.category}
                  </span>
                </div>
                <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1.5 break-words">
                  “{p.kikuyu}”
                </p>
                <p className="text-xs italic text-[var(--text-secondary)] mb-2 break-words">
                  Literal: {p.translation}
                </p>
                {p.explanation && (
                  <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)] break-words">
                    <strong className="text-[var(--text-secondary)]">Meaning:</strong> {p.explanation}
                  </p>
                )}
                {p.englishEquivalent && (
                  <p className="text-[11px] text-emerald-400/90 mt-1.5 break-words">
                    <strong>Equivalent:</strong> {p.englishEquivalent}
                  </p>
                )}
              </div>
            ))}
          </div>
          {filteredKikuyu.length > page * PAGE_SIZE && (
            <div className="text-center pt-2">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--gold)]/40 text-xs font-bold text-[var(--gold)] cursor-pointer"
              >
                Load More Proverbs ({filteredKikuyu.length - page * PAGE_SIZE} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {selectedLang === "luo" && luoSubTab === "proverbs" && (
        <>
          <div className="text-xs text-[var(--text-muted)] px-1">
            Showing {Math.min(filteredLuoProverbs.length, page * PAGE_SIZE)} of {filteredLuoProverbs.length} Dholuo proverbs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredLuoProverbs.slice(0, page * PAGE_SIZE).map((p: ProverbEntry, idx: number) => (
              <div
                key={p.id || idx}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-sky-500/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400">
                    Ngero #{p.id || idx + 1}
                  </span>
                  {p.category && (
                    <span className="text-[10px] font-semibold capitalize px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                      {p.category}
                    </span>
                  )}
                </div>
                <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1.5 break-words">
                  “{p.luo}”
                </p>
                <p className="text-xs italic text-[var(--text-secondary)] mb-2 break-words">
                  {p.english}
                </p>
                {(p.meaning || p.explanation) && (
                  <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)] break-words">
                    <strong className="text-[var(--text-secondary)]">Meaning:</strong>{" "}
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
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-sky-500/40 text-xs font-bold text-sky-400 cursor-pointer"
              >
                Load More Dholuo Proverbs ({filteredLuoProverbs.length - page * PAGE_SIZE} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {selectedLang === "luo" && luoSubTab === "riddles" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredLuoRiddles.map((r: RiddleEntry) => {
            const key = `riddle-${r.id}`;
            const revealed = !!revealedIds[key];
            return (
              <div
                key={r.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                    Minstrel Riddle #{r.id}
                  </span>
                  <button
                    onClick={() =>
                      setRevealedIds((prev) => ({ ...prev, [key]: !prev[key] }))
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--gold)] cursor-pointer"
                  >
                    {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {revealed ? "Hide Answer" : "Reveal Answer"}
                  </button>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)] mb-1 break-words">
                  “{r.luo}”
                </p>
                <p className="text-xs text-[var(--text-secondary)] mb-3 break-words">
                  {r.english}
                </p>
                {revealed && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 break-words">
                    <strong>Answer:</strong> {r.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {selectedLang === "luo" && luoSubTab === "twisters" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredLuoTwisters.map((t: TongueTwisterEntry) => (
            <div
              key={t.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4"
            >
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 mb-2">
                Tongue Twister #{t.id}
              </span>
              <p className="text-sm font-bold text-[var(--text-primary)] mb-1.5 break-words">
                “{t.luo}”
              </p>
              <p className="text-xs text-[var(--text-secondary)] break-words">
                {t.english}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
