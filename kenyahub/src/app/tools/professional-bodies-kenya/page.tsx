"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/professional-bodies.json";
const tool = TOOLS.find((t) => t.slug === "professional-bodies-kenya")!;
const faq = [
  { question: "How do I verify if a professional is registered in Kenya?", answer: "Each regulatory body has a public register or verification portal. Use the verification URL provided for each body in our directory. For doctors, check kmpdc.go.ke; for lawyers, check lsk.or.ke/find-a-lawyer." },
  { question: "Is professional registration mandatory in Kenya?", answer: "Yes, practising a regulated profession without valid registration is a criminal offence under the respective Acts. This applies to doctors, lawyers, engineers, accountants, nurses, and many other professions." },
  { question: "How much does professional registration cost?", answer: "Costs vary widely — from KES 1,000 (TSC for teachers) to KES 20,000+ (CMA for investment advisors). Most bodies charge KES 3,000–10,000 for initial registration plus annual renewal fees." },
];
export default function ProfessionalBodiesPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    if (!search.trim()) return data.bodies;
    const q = search.toLowerCase();
    return data.bodies.filter((b) => b.name.toLowerCase().includes(q) || b.abbreviation.toLowerCase().includes(q) || b.profession.toLowerCase().includes(q));
  }, [search]);
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by profession, body name, or abbreviation — e.g. 'doctor', 'LSK', 'engineer'..." className="input-field text-sm" id="prof-search" />
        </div>
        <p className="text-xs text-text-muted">{filtered.length} professional bodies found</p>
        <div className="space-y-3">
          {filtered.map((b) => (
            <div key={b.abbreviation} className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-text-primary">{b.name}</h3>
                      <span className="text-[0.65rem] bg-gold/15 text-gold px-2 py-0.5 rounded font-bold">{b.abbreviation}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1">👤 {b.profession}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="bg-bg-elevated rounded-lg p-2.5">
                    <p className="text-[0.6rem] text-text-muted">Registration Fee</p>
                    <p className="text-xs font-semibold text-text-primary">{b.registrationFee}</p>
                  </div>
                  <div className="bg-bg-elevated rounded-lg p-2.5">
                    <p className="text-[0.6rem] text-text-muted">Renewal Fee</p>
                    <p className="text-xs font-semibold text-text-primary">{b.renewalFee}</p>
                  </div>
                  <div className="bg-bg-elevated rounded-lg p-2.5">
                    <p className="text-[0.6rem] text-text-muted">Website</p>
                    <a href={`https://${b.website}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-gold hover:underline">{b.website}</a>
                  </div>
                </div>
                <details className="group">
                  <summary className="text-xs font-medium text-gold cursor-pointer hover:underline">📋 Registration Requirements</summary>
                  <ul className="mt-2 space-y-1">
                    {b.requirements.map((r, i) => (<li key={i} className="text-xs text-text-secondary flex items-start gap-2"><span className="text-kenya-green-light mt-0.5">✓</span>{r}</li>))}
                  </ul>
                </details>
                {b.verificationUrl && (
                  <a href={b.verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-kenya-green-light hover:underline">
                    🔍 Verify a {b.profession.split(" / ")[0]} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><p className="text-4xl mb-3">🔍</p><p className="text-text-secondary text-sm">No professional bodies found for &quot;{search}&quot;</p></div>}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
