"use client";

import { useState, useMemo } from "react";
import { FileCheck2, Copy, Check, AlertTriangle } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "ppra-egp-tender-serializer")!;

interface TenderDoc {
  code: string;
  title: string;
  pages: number;
  included: boolean;
  initialed: boolean;
  critical: boolean;
}

export default function PpraEgpTenderSerializerPage() {
  const [tenderRef, setTenderRef] = useState("CDA/T/010/2025-2026");
  const [bidValidityDays, setBidValidityDays] = useState("300");
  const [docs, setDocs] = useState<TenderDoc[]>(() =>
    utilData.ppra.mandatoryDocs.map((d) => ({
      code: d.code,
      title: d.title,
      pages: d.defaultPages,
      included: true,
      initialed: true,
      critical: d.critical,
    }))
  );
  const [copied, setCopied] = useState(false);

  const plan = useMemo(() => {
    let cursor = 1;
    const rows = docs.map((d) => {
      if (!d.included || d.pages <= 0) {
        return { ...d, startPage: null, endPage: null };
      }
      const startPage = cursor;
      const endPage = cursor + d.pages - 1;
      cursor = endPage + 1;
      return { ...d, startPage, endPage };
    });
    const totalPages = cursor - 1;
    const missingCritical = docs.filter((d) => d.critical && !d.included);
    const uninitialed = docs.filter((d) => d.included && !d.initialed);
    const validityOk = Number(bidValidityDays) >= 120;
    return { rows, totalPages, missingCritical, uninitialed, validityOk };
  }, [docs, bidValidityDays]);

  const fmtBates = (n: number) => String(n).padStart(4, "0");

  const copyManifest = () => {
    const lines = [
      `PPRA / e-GP TENDER SERIALIZATION MANIFEST (ITT 20.3)`,
      `Tender Ref: ${tenderRef} | Bid Validity: ${bidValidityDays} days | Total Pages: ${plan.totalPages}`,
      "",
      ...plan.rows
        .filter((r) => r.startPage !== null)
        .map(
          (r) =>
            `${r.code} | Pages ${fmtBates(r.startPage!)}–${fmtBates(r.endPage!)} (${r.pages} pp) | ${r.title} | Initialed: ${r.initialed ? "YES" : "PENDING"}`
        ),
    ];
    navigator.clipboard?.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2 mb-2">
            <FileCheck2 className="w-5 h-5 text-gold" />
            PPRA &amp; e-GP Tender Mandatory Requirements Compiler
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
            Prevent Preliminary Mandatory Stage (<strong>MR1–MR15</strong>) disqualifications on <strong>e-gp.go.ke</strong> and physical Kenyan tenders. Verify CR12, KRA TCC, NCA, AGPO, SD1/SD2, and compute exact continuous <strong>ITT 20.3 Bates page ranges</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Tender Reference No.</label>
              <input
                type="text"
                value={tenderRef}
                onChange={(e) => setTenderRef(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-xs font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Bid Validity Period (Days)</label>
              <input
                type="number"
                value={bidValidityDays}
                onChange={(e) => setBidValidityDays(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-xs font-bold text-text-primary"
              />
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 flex flex-col justify-center">
              <span className="text-[0.65rem] font-bold uppercase text-gold">Continuous Bates Range</span>
              <span className="text-lg font-black text-text-primary">
                0001 – {fmtBates(Math.max(1, plan.totalPages))} ({plan.totalPages} pp)
              </span>
            </div>
          </div>

          {(plan.missingCritical.length > 0 || plan.uninitialed.length > 0) && (
            <div className="mb-4 p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-xs text-red-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                Disqualification risk: {plan.missingCritical.length} missing critical mandatory item(s) and {plan.uninitialed.length} uninitialed section(s).
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-border mb-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-bg-elevated text-text-muted uppercase text-[0.65rem]">
                <tr>
                  <th className="px-3 py-2.5">Code</th>
                  <th className="px-3 py-2.5">Mandatory Document</th>
                  <th className="px-3 py-2.5">Included</th>
                  <th className="px-3 py-2.5">Pages</th>
                  <th className="px-3 py-2.5">Bates Range</th>
                  <th className="px-3 py-2.5">Initialed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {plan.rows.map((r, idx) => (
                  <tr key={r.code}>
                    <td className="px-3 py-2 font-mono font-bold text-gold">{r.code}</td>
                    <td className="px-3 py-2 text-text-primary font-medium">{r.title}</td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={r.included}
                        onChange={() =>
                          setDocs((prev) => prev.map((d, i) => (i === idx ? { ...d, included: !d.included } : d)))
                        }
                        className="accent-gold"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="number"
                        min={0}
                        value={r.pages}
                        onChange={(e) =>
                          setDocs((prev) =>
                            prev.map((d, i) => (i === idx ? { ...d, pages: Math.max(0, Number(e.target.value) || 0) } : d))
                          )
                        }
                        className="w-16 px-2 py-1 rounded-lg border border-border bg-bg-elevated text-xs text-text-primary"
                      />
                    </td>
                    <td className="px-3 py-2 font-mono text-[0.72rem] text-emerald-400">
                      {r.startPage !== null ? `${fmtBates(r.startPage)}–${fmtBates(r.endPage!)}` : "—"}
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={r.initialed}
                        onChange={() =>
                          setDocs((prev) => prev.map((d, i) => (i === idx ? { ...d, initialed: !d.initialed } : d)))
                        }
                        className="accent-gold"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={copyManifest}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold text-kenya-black text-xs font-bold cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied Serialization Manifest" : "Copy ITT 20.3 Table of Contents & Bates Manifest"}
          </button>
        </div>
      </div>
    </ToolShell>
  );
}
