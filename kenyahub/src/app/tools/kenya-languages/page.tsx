"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/kenya-languages.json";
const tool = TOOLS.find((t) => t.slug === "kenya-languages")!;
const faq = [
  { question: "How many languages are spoken in Kenya?", answer: "Kenya has 42+ recognized ethnic groups speaking 60+ distinct languages and dialects. The two official languages are English and Swahili (Kiswahili). Swahili is also the national language." },
  { question: "What are the main language families in Kenya?", answer: "Kenya's languages belong to three main families: Bantu (~65% of population — Kikuyu, Luhya, Kamba, Kisii, etc.), Nilotic (~30% — Kalenjin, Luo, Maasai, Turkana), and Cushitic (~3% — Somali, Rendille, Borana)." },
  { question: "Are any Kenyan languages endangered?", answer: "Yes, several are classified as endangered by UNESCO, including El Molo (~300 speakers), Yaaku, Suba, and Omotik. Language loss is accelerated by urbanization and the dominance of Swahili and English." },
  { question: "What is the most spoken language in Kenya?", answer: "Swahili (Kiswahili) is the most widely spoken with ~15 million speakers. Among ethnic languages, Kikuyu (~8.1 million) and Luhya (~6.8 million) have the most speakers." },
];
export default function KenyaLanguagesPage() {
  const [familyFilter, setFamilyFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    return data.languages.filter((l) => {
      if (familyFilter !== "all" && l.family !== familyFilter) return false;
      if (search.trim()) { const q = search.toLowerCase(); return l.name.toLowerCase().includes(q) || l.counties.some((c) => c.toLowerCase().includes(q)); }
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
                <span className="text-lg">🏛️</span>
                <h3 className="text-sm font-bold text-text-primary">{ol.language}</h3>
                <span className="text-[0.6rem] bg-gold/15 text-gold px-2 py-0.5 rounded">{ol.status}</span>
              </div>
              <p className="text-xs text-text-secondary">{ol.use}</p>
            </div>
          ))}
        </div>
        {/* Family filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFamilyFilter("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${familyFilter === "all" ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>All Families</button>
            {data.families.map((f) => (
              <button key={f.id} onClick={() => setFamilyFilter(f.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${familyFilter === f.id ? "text-white" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`} style={familyFilter === f.id ? { backgroundColor: f.color } : {}}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: f.color }} />{f.name}
              </button>
            ))}
          </div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search languages or counties..." className="input-field text-sm" id="lang-search" />
        </div>
        {familyFilter !== "all" && (
          <div className="bg-bg-elevated border border-border rounded-xl p-4">
            <p className="text-xs text-text-secondary">{data.families.find((f) => f.id === familyFilter)?.description}</p>
          </div>
        )}
        <p className="text-xs text-text-muted">{filtered.length} languages · ~{(totalSpeakers / 1000000).toFixed(1)}M speakers</p>
        {/* Language cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((lang) => {
            const family = data.families.find((f) => f.id === lang.family);
            return (
              <div key={lang.name} className="bg-bg-card border border-border rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{lang.name}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: family?.color }} />
                      <span className="text-[0.6rem] text-text-muted">{family?.name}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gold">{(lang.speakers / 1000000).toFixed(1)}M</span>
                </div>
                <p className="text-[0.65rem] text-text-muted mb-2">{lang.notes}</p>
                <div className="flex flex-wrap gap-1">
                  {lang.counties.map((c) => (<span key={c} className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-secondary">{c}</span>))}
                </div>
                {/* Speaker bar */}
                <div className="mt-2 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (lang.speakers / 8100000) * 100)}%`, backgroundColor: family?.color }} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
