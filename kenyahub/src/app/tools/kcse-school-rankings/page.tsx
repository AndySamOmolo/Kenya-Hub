"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/kcse-rankings.json";
const tool = TOOLS.find((t) => t.slug === "kcse-school-rankings")!;
const faq = [
  { question: "How are KCSE school rankings determined?", answer: "Rankings are based on each school's mean score — the average of all students' mean grades on a 12-point scale (A=12, E=1). This is calculated by KNEC (Kenya National Examinations Council)." },
  { question: "When are KCSE results released?", answer: "KCSE results are typically released by KNEC in March/April of the following year. The CS for Education announces the results and overall statistics." },
  { question: "What is the difference between National, Extra-County, and County schools?", answer: "National schools admit students from all 47 counties. Extra-County schools admit from multiple counties but not all. County schools primarily serve their home county. Sub-County schools serve specific sub-counties." },
  { question: "What mean score is needed for university admission?", answer: "The minimum KUCCPS university admission grade is typically C+ (mean score 7.0+). However, competitive courses like Medicine require A or A- (10.5+) and Engineering requires B+ (9.5+)." },
];
export default function KcseSchoolRankingsPage() {
  const [search, setSearch] = useState("");
  const [countyFilter, setCountyFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"meanScore" | "aGrades" | "change">("meanScore");
  const counties = useMemo(() => Array.from(new Set(data.schools.map((s) => s.county))).sort(), []);
  const types = useMemo(() => Array.from(new Set(data.schools.map((s) => s.type))).sort(), []);
  const filtered = useMemo(() => {
    return data.schools.filter((s) => {
      if (countyFilter !== "all" && s.county !== countyFilter) return false;
      if (typeFilter !== "all" && s.type !== typeFilter) return false;
      if (search.trim()) { const q = search.toLowerCase(); return s.name.toLowerCase().includes(q) || s.county.toLowerCase().includes(q); }
      return true;
    }).sort((a, b) => {
      if (sortBy === "aGrades") return b.aGrades - a.aGrades;
      if (sortBy === "change") return b.change - a.change;
      return b.meanScore - a.meanScore;
    });
  }, [search, countyFilter, typeFilter, sortBy]);
  const getScoreColor = (score: number) => {
    if (score >= 10) return "text-kenya-green-light";
    if (score >= 9) return "text-gold";
    if (score >= 8) return "text-sky-light";
    return "text-text-secondary";
  };
  const getChangeIcon = (c: number) => c > 0 ? "↑" : c < 0 ? "↓" : "→";
  const getChangeColor = (c: number) => c > 0 ? "text-kenya-green-light" : c < 0 ? "text-kenya-red-light" : "text-text-muted";
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gold">{data.year}</p>
            <p className="text-[0.65rem] text-text-muted">Results Year</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-text-primary">{(data.totalCandidates / 1000).toFixed(0)}K</p>
            <p className="text-[0.65rem] text-text-muted">Total Candidates</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-text-primary">{data.totalSchools.toLocaleString()}</p>
            <p className="text-[0.65rem] text-text-muted">Schools</p>
          </div>
        </div>
        {/* Filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search school name or county..." className="input-field text-sm" id="kcse-search" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <select value={countyFilter} onChange={(e) => setCountyFilter(e.target.value)} className="input-field text-sm" id="kcse-county">
              <option value="all">All Counties</option>
              {counties.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input-field text-sm" id="kcse-type">
              <option value="all">All Types</option>
              {types.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="input-field text-sm" id="kcse-sort">
              <option value="meanScore">Sort by Mean Score</option>
              <option value="aGrades">Sort by A Grades</option>
              <option value="change">Sort by Improvement</option>
            </select>
          </div>
        </div>
        {/* Rankings table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-border bg-bg-elevated">
                <th className="text-left px-4 py-2.5 text-text-muted font-medium w-10">#</th>
                <th className="text-left px-4 py-2.5 text-text-muted font-medium">School</th>
                <th className="text-left px-4 py-2.5 text-text-muted font-medium hidden sm:table-cell">County</th>
                <th className="text-left px-4 py-2.5 text-text-muted font-medium hidden md:table-cell">Type</th>
                <th className="text-right px-4 py-2.5 text-text-muted font-medium">Mean</th>
                <th className="text-right px-4 py-2.5 text-text-muted font-medium">A&apos;s</th>
                <th className="text-right px-4 py-2.5 text-text-muted font-medium">YoY</th>
              </tr></thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.name} className="border-b border-border/50 last:border-0 hover:bg-bg-elevated/50 transition-colors">
                    <td className="px-4 py-3 font-bold text-text-muted">{i + 1}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-text-primary">{s.name}</p>
                      <p className="text-[0.6rem] text-text-muted sm:hidden">{s.county} · {s.type}</p>
                    </td>
                    <td className="px-4 py-3 text-text-secondary hidden sm:table-cell">{s.county}</td>
                    <td className="px-4 py-3 hidden md:table-cell"><span className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted">{s.type}</span></td>
                    <td className={`px-4 py-3 text-right font-bold ${getScoreColor(s.meanScore)}`}>{s.meanScore.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gold">{s.aGrades}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${getChangeColor(s.change)}`}>{getChangeIcon(s.change)} {Math.abs(s.change).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><p className="text-4xl mb-3">🏆</p><p className="text-text-secondary text-sm">No schools found</p></div>}
        {/* Grade distribution */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">📊 National Grade Distribution ({data.year})</h3>
          <div className="space-y-2">
            {Object.entries(data.gradeDistribution).map(([grade, pct]) => (
              <div key={grade} className="flex items-center gap-3">
                <span className="text-xs font-bold text-text-primary w-6">{grade}</span>
                <div className="flex-1 h-4 bg-bg-elevated rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-gold to-gold-vivid transition-all" style={{ width: `${(pct as number) * 6}%` }} />
                </div>
                <span className="text-xs text-text-muted w-12 text-right">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
