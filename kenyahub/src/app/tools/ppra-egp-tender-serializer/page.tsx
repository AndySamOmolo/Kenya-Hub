"use client";

import { useState, useMemo } from "react";
import { Copy, Check, AlertTriangle } from "lucide-react";
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

  // Align subtitle to MR1–MR11 (F-022)
  const cleanTool = {
    ...tool,
    description: tool.description.replace(/MR1[–-]MR15/gi, "MR1–MR11"),
  };

  const plan = useMemo(() => {
    const { rows, nextPage } = docs.reduce<{ rows: Array<TenderDoc & { startPage: number | null; endPage: number | null }>; nextPage: number }>((acc, d) => {
      if (!d.included || d.pages <= 0) {
        return {
          rows: [...acc.rows, { ...d, startPage: null, endPage: null }],
          nextPage: acc.nextPage,
        };
      }
      const startPage = acc.nextPage;
      const endPage = acc.nextPage + d.pages - 1;
      return {
        rows: [...acc.rows, { ...d, startPage, endPage }],
        nextPage: endPage + 1,
      };
    }, { rows: [], nextPage: 1 });
    const totalPages = nextPage - 1;
    const missingCritical = docs.filter((d) => d.critical && (!d.included || d.pages <= 0));
    const uninitialed = docs.filter((d) => d.included && !d.initialed);
    const validityOk = Number(bidValidityDays) >= 120;
    return { rows, totalPages, missingCritical, uninitialed, validityOk };
  }, [docs, bidValidityDays]);

  const fmtBates = (n: number) => String(n).padStart(4, "0");

  const copyManifest = () => {
    const lines = [
      `PPRA / e-GP TENDER SERIALIZATION MANIFEST (ITT 20.3 — MR1–MR11)`,
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
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div>
              <label
                htmlFor="ppra-tender-ref"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Tender Reference No.
              </label>
              <input
                id="ppra-tender-ref"
                type="text"
                value={tenderRef}
                onChange={(e) => setTenderRef(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
              />
            </div>
            <div>
              <label
                htmlFor="ppra-bid-validity"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Bid Validity Period (Days)
              </label>
              <input
                id="ppra-bid-validity"
                type="number"
                inputMode="numeric"
                value={bidValidityDays}
                onChange={(e) => setBidValidityDays(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] px-4 py-2 flex flex-col justify-center"
            >
              <span className="text-[0.65rem] font-bold uppercase text-gold">
                Continuous Bates Range (MR1–MR11)
              </span>
              <span className="text-lg font-black text-text-primary tabular-nums">
                {plan.totalPages > 0 ? `0001 – ${fmtBates(plan.totalPages)} (${plan.totalPages} pp)` : "No pages included (0 pp)"}
              </span>
            </div>
          </div>

          {(plan.missingCritical.length > 0 || plan.uninitialed.length > 0 || !plan.validityOk) && (
            <div
              role="status"
              aria-live="polite"
              className="mb-4 p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-xs text-red-700 dark:text-red-300 flex items-start gap-2"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                Disqualification risk: {plan.missingCritical.length} missing critical mandatory item(s),{" "}
                {plan.uninitialed.length} uninitialed section(s)
                {!plan.validityOk ? `, and bid validity (${bidValidityDays || 0} days) is below the 120-day minimum` : ""}.
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-border mb-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-bg-elevated text-text-muted uppercase text-[0.65rem]">
                <tr>
                  <th className="px-3 py-2.5 whitespace-nowrap">Code</th>
                  <th className="px-3 py-2.5">Mandatory Document (MR1–MR11)</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Included</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Pages</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Bates Range</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Initialed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {plan.rows.map((r, idx) => (
                  <tr key={r.code}>
                    <td className="px-3 py-2 font-mono font-bold text-gold whitespace-nowrap">{r.code}</td>
                    <td className="px-3 py-2 text-text-primary font-medium">{r.title}</td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        aria-label={`Include ${r.code} ${r.title}`}
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
                        aria-label={`Page count for ${r.code}`}
                        min={0}
                        value={r.pages}
                        onChange={(e) =>
                          setDocs((prev) =>
                            prev.map((d, i) =>
                              i === idx ? { ...d, pages: Math.max(0, Math.floor(Number(e.target.value) || 0)) } : d
                            )
                          )
                        }
                        className="w-16 px-2 py-1 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs text-text-primary tabular-nums"
                      />
                    </td>
                    <td className="px-3 py-2 font-mono text-[0.72rem] text-emerald-700 dark:text-emerald-400 whitespace-nowrap tabular-nums">
                      {r.startPage !== null ? `${fmtBates(r.startPage)}–${fmtBates(r.endPage!)}` : "—"}
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        aria-label={`Initialed ${r.code} ${r.title}`}
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
    </>
  );
}
