"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useState, useMemo } from "react";
import Link from "next/link";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/kenya-languages.json";
import SearchInput from "@/components/ui/SearchInput";
import { getSourcesForLanguage, normalizeLanguageId } from "@/data/language-sources";
import { COURSE_REGISTRY } from "@/data/courses/registry";

const tool = TOOLS.find((t) => t.slug === "kenya-languages")!;

const faq = [
  { question: "How many languages are spoken in Kenya?", answer: "Kenya has 42+ recognized ethnic groups speaking 60+ distinct languages and dialects. The two official languages are English and Swahili (Kiswahili). Swahili is also the national language." },
  { question: "What are the main language families in Kenya?", answer: "Kenya's languages belong to three main families: Bantu (~65% of population — Kikuyu, Luhya, Kamba, Kisii, etc.), Nilotic (~30% — Kalenjin, Luo, Maasai, Turkana), and Cushitic (~3% — Somali, Rendille, Borana)." },
  { question: "Are any Kenyan languages endangered?", answer: "Yes, several are classified as endangered by UNESCO, including El Molo (~300 speakers), Yaaku, Suba, and Omotik. Language loss is accelerated by urbanization and the dominance of Swahili and English." },
  { question: "What is the most spoken language in Kenya?", answer: "Swahili (Kiswahili) is the most widely spoken with ~15 million speakers. Among ethnic languages, Kikuyu (~8.1 million) and Luhya (~6.8 million) have the most speakers." },
];

function formatSpeakers(speakers: number): string {
  if (speakers >= 1_000_000) {
    return `${(speakers / 1_000_000).toFixed(1)}M`;
  }
  if (speakers >= 1_000) {
    return `${Math.round(speakers / 1_000).toLocaleString()}K`;
  }
  return speakers.toLocaleString();
}

export default function KenyaLanguagesPage() {
  const [familyFilter, setFamilyFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    return data.languages.filter((l) => {
      if (familyFilter !== "all" && l.family !== familyFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          l.name.toLowerCase().includes(q) ||
          l.notes.toLowerCase().includes(q) ||
          l.counties.some((c) => c.toLowerCase().includes(q))
        );
      }
      return true;
    }).sort((a, b) => b.speakers - a.speakers);
  }, [familyFilter, search]);

  const totalSpeakers = filtered.reduce((s, l) => s + l.speakers, 0);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Official languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.officialLanguages.map((ol) => (
            <div key={ol.language} className="bg-bg-card border border-gold/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <DynamicIcon emoji="🏛️" className="w-5 h-5 text-gold" />
                <h3 className="text-sm font-bold text-text-primary">{ol.language}</h3>
                <span className="text-[0.6rem] bg-gold/15 text-gold px-2 py-0.5 rounded">{ol.status}</span>
              </div>
              <p className="text-xs text-text-secondary">{ol.use}</p>
            </div>
          ))}
        </div>
        {/* Family filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <ExpandablePillRow>
            <button
              onClick={() => setFamilyFilter("all")}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all ${
                familyFilter === "all"
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              All Families
            </button>
            {data.families.map((f) => {
              const active = familyFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFamilyFilter(f.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all ${
                    active
                      ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                      : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                  }`}
                >
                  {f.name}
                </button>
              );
            })}
          </ExpandablePillRow>
          <SearchInput
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search languages, dialects, or counties..."
            className="input-field text-sm"
            id="lang-search"
            onClear={() => setSearch("")}
          />
        </div>
        {familyFilter !== "all" && (
          <div className="bg-bg-elevated border border-border rounded-xl p-4">
            <p className="text-xs text-text-secondary">{data.families.find((f) => f.id === familyFilter)?.description}</p>
          </div>
        )}
        <p className="text-xs text-text-muted">{filtered.length} languages · ~{formatSpeakers(totalSpeakers)} speakers</p>
        {/* Language cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((lang) => {
            const family = data.families.find((f) => f.id === lang.family);
            const langId = normalizeLanguageId(lang.name);
            const sources = getSourcesForLanguage(langId);
            const hasCourse = Boolean(COURSE_REGISTRY[langId]);
            return (
              <div key={lang.name} className="bg-bg-card border border-border rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-text-primary">{lang.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: family?.color }} />
                        <span className="text-[0.6rem] text-text-muted">{family?.name}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gold" title={`${lang.speakers.toLocaleString()} estimated speakers`}>
                      {formatSpeakers(lang.speakers)}
                    </span>
                  </div>
                  <p className="text-[0.65rem] text-text-muted mb-2">{lang.notes}</p>
                  <div className="flex flex-wrap gap-1">
                    {lang.counties.map((c) => (
                      <span key={c} className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-secondary">
                        {c}
                      </span>
                    ))}
                  </div>
                  {sources.length > 0 && (
                    <div className="mt-3 border-t border-border pt-2">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-text-muted">
                        Reference sources ({sources.length})
                      </p>
                      <div className="mt-1 space-y-1">
                        {sources.slice(0, 4).map((source) => (
                          <div key={source.id} className="flex items-start justify-between gap-2 text-[0.6rem]">
                            <span className="text-text-secondary">
                              {source.title} <span className="text-text-muted">({source.published})</span>
                            </span>
                            <span className={source.ingestionStatus === "integrated" ? "shrink-0 text-green-400" : "shrink-0 text-gold"}>
                              {source.ingestionStatus === "integrated" ? "Integrated" : "Research"}
                            </span>
                          </div>
                        ))}
                        {sources.length > 4 && (
                          <p className="text-[0.55rem] text-text-muted">+{sources.length - 4} more historical &amp; lexical sources</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-border/50 space-y-2">
                  {/* Speaker bar */}
                  <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${Math.max(2, Math.min(100, (lang.speakers / 8100000) * 100))}%`, backgroundColor: family?.color }}
                    />
                  </div>
                  {hasCourse && (
                    <div className="flex items-center justify-between pt-0.5">
                      <Link
                        href={`/tools/learn/${langId}/`}
                        className="text-[0.6875rem] font-semibold text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
                      >
                        Start Free {lang.name.split("(")[0].trim()} Course →
                      </Link>
                      <Link
                        href="/tools/kenyan-translator/"
                        className="text-[0.625rem] text-text-muted hover:text-text-secondary transition-colors"
                      >
                        Translator
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">
            {data.notes.map((n, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
