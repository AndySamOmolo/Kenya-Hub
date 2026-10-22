"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo, useEffect } from "react";
import { Search, Shuffle, Eye, EyeOff, BookOpen, Compass } from "lucide-react";
import kikuyuProverbsData from "@/data/kikuyu-proverbs.json";
import { luoProverbs, type ProverbEntry } from "@/data/courses/luo/proverbs";
import { luoRiddles, type RiddleEntry } from "@/data/courses/luo/riddles";
import { luoTongueTwisters, type TongueTwisterEntry } from "@/data/courses/luo/tongue-twisters";
import {
  getCulturalWisdomForLanguage,
  type CulturalWisdomItem,
} from "@/data/courses/cultural-wisdom";
import { PUBLISHED_COURSES, getCourse } from "@/data/courses/registry";

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

type LuoSubTab = "proverbs" | "riddles" | "twisters";

export default function ProverbsView({
  lockedLanguageId,
  defaultLanguageId,
  initialLanguage = "kikuyu",
}: {
  /** When set (e.g. inside a specific language course), ONLY show wisdom of this language and hide cross-language tabs */
  lockedLanguageId?: string;
  defaultLanguageId?: string;
  initialLanguage?: string;
}) {
  const resolvedInitial = lockedLanguageId || defaultLanguageId || initialLanguage;
  const [selectedLang, setSelectedLang] = useState<string>(resolvedInitial);
  const [luoSubTab, setLuoSubTab] = useState<LuoSubTab>("proverbs");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 24;

  useEffect(() => {
    if (lockedLanguageId) {
      setSelectedLang(lockedLanguageId);
      setSelectedCategory("All");
      setSearch("");
      setPage(1);
    }
  }, [lockedLanguageId]);

  const activeLang = lockedLanguageId || selectedLang;
  const activeCourse = useMemo(() => getCourse(activeLang), [activeLang]);

  // Build combined wisdom items for non-Kikuyu/non-Luo courses (proverbs + course cultural notes)
  const otherLangWisdom = useMemo((): CulturalWisdomItem[] => {
    if (activeLang === "kikuyu" || activeLang === "luo") return [];
    const proverbs = getCulturalWisdomForLanguage(activeLang);
    const notes: CulturalWisdomItem[] = [];
    if (activeCourse) {
      const seen = new Set<string>();
      activeCourse.units.forEach((unit) => {
        unit.skills.forEach((skill) => {
          if (
            skill.culturalNote &&
            !skill.culturalNote.startsWith("Source attribution:") &&
            !seen.has(skill.culturalNote)
          ) {
            seen.add(skill.culturalNote);
            const sampleWord = skill.words[0];
            notes.push({
              id: `${activeLang}-note-${skill.id}`,
              languageId: activeLang,
              nativeText: sampleWord
                ? `${sampleWord.target} — "${sampleWord.source}"`
                : skill.title,
              literalTranslation: skill.title,
              meaning: skill.culturalNote,
              category: "tradition",
              source: `${activeCourse.config.name} Cultural & Historical Notes`,
            });
          }
        });
      });
    }
    return [...proverbs, ...notes];
  }, [activeLang, activeCourse]);

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

  const otherCategories = useMemo(() => {
    const cats = Array.from(
      new Set(otherLangWisdom.map((item) => item.category).filter(Boolean))
    );
    return ["All", ...cats];
  }, [otherLangWisdom]);

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

  const filteredOtherWisdom = useMemo(() => {
    const q = search.trim().toLowerCase();
    const normQ = normalizeDiacritics(q);
    return otherLangWisdom.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        item.nativeText.toLowerCase().includes(q) ||
        normalizeDiacritics(item.nativeText).includes(normQ) ||
        item.literalTranslation.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        (item.englishEquivalent || "").toLowerCase().includes(q)
      );
    });
  }, [otherLangWisdom, search, selectedCategory]);

  const pickRandom = () => {
    setSelectedCategory("All");
    if (activeLang === "kikuyu") {
      const item = KIKUYU_PROVERBS[Math.floor(Math.random() * KIKUYU_PROVERBS.length)];
      if (item) setSearch(String(item.id));
    } else if (activeLang === "luo") {
      if (luoSubTab === "proverbs") {
        const item = luoProverbs[Math.floor(Math.random() * luoProverbs.length)];
        if (item) setSearch(item.luo.slice(0, 18));
      } else if (luoSubTab === "riddles") {
        const item = luoRiddles[Math.floor(Math.random() * luoRiddles.length)];
        if (item) setSearch(item.luo.slice(0, 18));
      }
    } else if (otherLangWisdom.length > 0) {
      const item = otherLangWisdom[Math.floor(Math.random() * otherLangWisdom.length)];
      if (item) setSearch(item.nativeText.slice(0, 14));
    }
    setPage(1);
  };

  const activeCategoryOptions =
    activeLang === "kikuyu"
      ? kikuyuCategories
      : activeLang === "luo"
      ? luoCategories
      : otherCategories;

  const langDisplayName = activeCourse?.config.name || "Kenyan";
  const langNativeName = activeCourse?.config.nativeName || langDisplayName;

  return (
    <div className="space-y-5">
      {/* Only show cross-language selector on the main Hub when NOT locked to a specific language */}
      {!lockedLanguageId && (
        <ExpandablePillRow>
          {PUBLISHED_COURSES.map(({ config }) => {
            const count =
              config.id === "kikuyu"
                ? KIKUYU_PROVERBS.length
                : config.id === "luo"
                ? luoProverbs.length + luoRiddles.length + luoTongueTwisters.length
                : getCulturalWisdomForLanguage(config.id).length;
            const active = activeLang === config.id;
            return (
              <button
                key={config.id}
                onClick={() => {
                  setSelectedLang(config.id);
                  setSelectedCategory("All");
                  setSearch("");
                  setPage(1);
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {config.name} ({count})
              </button>
            );
          })}
        </ExpandablePillRow>
      )}

      {/* Sub-tabs for Dholuo (Proverbs | Riddles | Tongue Twisters) */}
      {activeLang === "luo" && (
        <ExpandablePillRow>
          {(
            [
              { id: "proverbs", label: `Proverbs (${luoProverbs.length})` },
              { id: "riddles", label: `Riddles (${luoRiddles.length})` },
              { id: "twisters", label: `Twisters (${luoTongueTwisters.length})` },
            ] as const
          ).map((sub) => {
            const active = luoSubTab === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  setLuoSubTab(sub.id);
                  setPage(1);
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium border transition-all cursor-pointer ${
                  active
                    ? "border-sky/50 bg-sky/15 text-sky-light font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </ExpandablePillRow>
      )}

      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 space-y-3.5">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
            {activeLang === "kikuyu"
              ? "Gĩkũyũ Proverbs & Oral Wisdom (Thimo cia Gĩkũyũ)"
              : activeLang === "luo"
              ? "Dholuo Proverbs, Riddles & Tongue Twisters (Ngero)"
              : `${langDisplayName} (${langNativeName}) Proverbs & Cultural Wisdom`}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            {activeLang === "kikuyu"
              ? `${KIKUYU_PROVERBS.length} verified Gĩkũyũ proverbs from Fr. G. Barra (1939), 1,000 Kikuyu Proverbs.`
              : activeLang === "luo"
              ? `${luoProverbs.length} Dholuo proverbs, ${luoRiddles.length} interactive riddles, and ${luoTongueTwisters.length} tongue twisters.`
              : `Authentic ${langDisplayName} (${langNativeName}) proverbs, moral sayings, and cultural traditions.`}
          </p>
        </div>

        {/* Search + Random + Reset */}
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
              placeholder={`Search ${langDisplayName} proverb, meaning, or theme...`}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)]"
            />
          </div>

          <div className="flex items-center gap-2">
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

        {(activeLang !== "luo" || luoSubTab === "proverbs") &&
          activeCategoryOptions.length > 1 && (
            <ExpandablePillRow className="pt-1">
              {activeCategoryOptions.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPage(1);
                    }}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all capitalize cursor-pointer ${
                      active
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                    }`}
                  >
                    {cat === "All" ? "All Themes" : cat}
                  </button>
                );
              })}
            </ExpandablePillRow>
          )}
      </div>

      {/* 1. KIKUYU PROVERBS */}
      {activeLang === "kikuyu" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)] px-1">
            <span>
              Showing {Math.min(filteredKikuyu.length, page * PAGE_SIZE)} of{" "}
              {filteredKikuyu.length} Gĩkũyũ proverbs
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

      {/* 2. DHOLUO PROVERBS / RIDDLES / TWISTERS */}
      {activeLang === "luo" && luoSubTab === "proverbs" && (
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

      {activeLang === "luo" && luoSubTab === "riddles" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredLuoRiddles.slice(0, page * PAGE_SIZE).map((r: RiddleEntry, idx: number) => {
            const key = String(r.id || idx);
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

      {activeLang === "luo" && luoSubTab === "twisters" && (
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

      {/* 3. LUHYA, KAMBA, KISII, MAASAI, TESO & TURKANA PROVERBS & CULTURAL WISDOM */}
      {activeLang !== "kikuyu" && activeLang !== "luo" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)] px-1">
            <span>
              Showing {filteredOtherWisdom.length} {langDisplayName} proverbs &amp; cultural wisdom entries
            </span>
            <span className="inline-flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-gold" /> {langDisplayName} Oral Tradition &amp; Historical Corpus
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredOtherWisdom.map((item, idx) => (
              <div
                key={item.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-gold/30 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-gold/10 text-gold">
                    {item.category === "tradition" ? `Tradition #${idx + 1}` : `Proverb #${idx + 1}`}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] capitalize">
                    {item.category}
                  </span>
                </div>
                <p className="text-base font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                  &ldquo;{item.nativeText}&rdquo;
                </p>
                <p className="text-xs font-medium text-emerald-400/90 mb-2">
                  Literal: {item.literalTranslation}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                  <span className="font-semibold text-[var(--text-primary)]">Wisdom: </span>
                  {item.meaning}
                </p>
                {item.englishEquivalent && (
                  <div className="mt-2 pt-2 border-t border-[var(--border)] text-[11px] text-[var(--gold)]">
                    <span className="font-bold">English Equivalent: </span>
                    {item.englishEquivalent}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
