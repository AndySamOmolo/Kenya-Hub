"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import SearchInput from "@/components/ui/SearchInput";
import { getSourcesForLanguage, LANGUAGE_SOURCES } from "@/data/language-sources";
import { COURSE_REGISTRY } from "@/data/courses/registry";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, BookOpen } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import langData from "@/data/kenya-languages.json";

const tool = TOOLS.find((t) => t.slug === "kenya-languages")!;

interface Language { name: string; family: string; speakers: number; percentage?: number; counties: string[]; status?: string; notes: string; }
interface Family { id: string; name: string; color: string; description: string; percentage?: number; }

const data: { families: Family[]; languages: Language[]; notes: string[] } = langData;

const faq = [
  { question: "How many languages are spoken in Kenya?", answer: "Kenya has over 42 indigenous language communities, broadly grouped into three major African language families: Bantu (~65% of population), Nilotic (~30%), and Cushitic (~4%). English and Kiswahili are the two official languages under the 2010 Constitution." },
  { question: "What is the most spoken mother tongue in Kenya?", answer: "Kikuyu (Gĩkũyũ) is the largest mother tongue with approximately 8.1 million speakers (17.1%), followed by Luhya (6.8M, 14.3%), Kalenjin (6.4M, 13.4%), Dholuo (5.0M, 10.7%), and Kamba (4.7M, 9.8%). However, Kiswahili is the most widely spoken language overall as a lingua franca." },
  { question: "What is the difference between Bantu, Nilotic, and Cushitic languages?", answer: "Bantu languages (Kikuyu, Luhya, Kamba, Kisii, Meru, Mijikenda, Swahili) belong to the Niger-Congo phylum and use noun-class prefixes (e.g., Mũ-Gĩkũyũ / A-Gĩkũyũ). Nilotic languages (Luo, Kalenjin, Maasai, Turkana, Samburu, Teso) belong to the Nilo-Saharan phylum. Cushitic languages (Somali, Oromo/Borana, Rendille) belong to the Afroasiatic phylum." },
  { question: "What is Sheng?", answer: "Sheng is an urban youth sociolect that originated in Nairobi's Eastlands in the 1970s. It blends Kiswahili grammar with vocabulary drawn from English, Kikuyu, Dholuo, Kamba, and Luhya, constantly evolving across neighbourhoods and music culture." },
];

function formatSpeakers(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toLocaleString();
}

function normalizeLanguageId(languageName: string): string {
  const lower = languageName.toLowerCase();
  if (lower.includes("kikuyu")) return "kikuyu";
  if (lower.includes("luhya")) return "luhya";
  if (lower.includes("kalenjin")) return "kalenjin";
  if (lower.includes("luo")) return "luo";
  if (lower.includes("kamba")) return "kamba";
  if (lower.includes("somali")) return "somali";
  if (lower.includes("kisii")) return "kisii";
  if (lower.includes("mijikenda")) return "mijikenda";
  if (lower.includes("meru")) return "meru";
  if (lower.includes("maasai")) return "maasai";
  if (lower.includes("turkana")) return "turkana";
  if (lower.includes("teso")) return "teso";
  if (lower.includes("embu") || lower.includes("mbeere")) return "embu";
  if (lower.includes("taita")) return "taita";
  if (lower.includes("samburu")) return "samburu";
  if (lower.includes("borana") || lower.includes("oromo") || lower.includes("gabbra")) return "borana";
  if (lower.includes("pokomo")) return "pokomo";
  if (lower.includes("rendille")) return "rendille";
  if (lower.includes("swahili")) return "swahili";
  if (lower.includes("pokot")) return "pokot";
  if (lower.includes("taveta")) return "taveta";
  if (lower.includes("ilchamus") || lower.includes("njemps")) return "ilchamus";
  return lower.replace(/[^a-z0-9]+/g, "-");
}

export default function KenyaLanguagesPage() {
  const [search, setSearch] = useState("");
  const [familyFilter, setFamilyFilter] = useState("all");

  const filtered = useMemo(() => {
    return data.languages.filter((l) => {
      const matchFamily = familyFilter === "all" || l.family === familyFilter;
      const matchSearch = !search.trim() ||
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.counties.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
        l.notes.toLowerCase().includes(search.toLowerCase());
      return matchFamily && matchSearch;
    });
  }, [search, familyFilter]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Family breakdown cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.families.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFamilyFilter(familyFilter === f.id ? "all" : f.id)}
              className={`bg-bg-card border rounded-xl p-4 text-left transition-all cursor-pointer ${
                familyFilter === f.id ? "border-gold ring-1 ring-gold/30" : "border-border hover:border-gold/30"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
                <span className="text-lg font-bold text-gold font-[family-name:var(--font-outfit)]">{f.percentage}%</span>
              </div>
              <p className="text-xs font-bold text-text-primary">{f.name}</p>
              <p className="text-[0.6rem] text-text-muted mt-0.5 line-clamp-2">{f.description}</p>
            </button>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-3">
          <SearchInput
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search language or county..."
            className="input-field text-sm flex-1"
            id="lang-search"
            onClear={() => setSearch("")}
          />
          <ExpandablePillRow className="w-auto">
            <button type="button" onClick={() => setFamilyFilter("all")} className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${familyFilter === "all" ? "border-gold/50 bg-gold/15 text-gold font-semibold" : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"}`}>All ({data.languages.length})</button>
            {data.families.map((f) => (
              <button key={f.id} type="button" onClick={() => setFamilyFilter(f.id)} className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${familyFilter === f.id ? "border-gold/50 bg-gold/15 text-gold font-semibold" : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"}`}>{f.name.split(" ")[0]}</button>
            ))}
          </ExpandablePillRow>
        </div>

        {/* Languages Grid */}
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
                    <details className="group mt-3 border-t border-border pt-2">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[0.65rem] font-semibold text-text-muted hover:text-gold transition-colors">
                        <span className="inline-flex items-center gap-1.5">
                          <BookOpen className="h-3 w-3 text-gold shrink-0" />
                          <span>Reference sources ({sources.length})</span>
                        </span>
                        <ChevronDown className="h-3 w-3 text-text-muted transition-transform group-open:rotate-180 shrink-0" />
                      </summary>
                      <ul className="mt-1.5 space-y-1 pl-1 text-[0.6rem] text-text-secondary">
                        {sources.map((source) => (
                          <li key={source.id} className="flex items-start gap-1.5">
                            <span className="text-gold font-bold">•</span>
                            <span>
                              {source.title} <span className="text-text-muted">({source.published})</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
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
            <li className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="text-gold mt-0.5">•</span>
              <span>
                Cross-referenced with {LANGUAGE_SOURCES.length} historical grammars, dictionaries, and comparative vocabularies (1842–1929) plus Unicode CLDR &amp; CC0 lexical resources.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
