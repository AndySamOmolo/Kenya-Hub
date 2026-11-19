"use client";

import { useState, useMemo } from "react";
import { Compass, CheckCircle2, AlertTriangle } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "ardhisasa-cad-title-auditor")!;

const DOSSIER_CHECKS = [
  { id: "search", label: "Official Ardhisasa Title Search matches current registered proprietor" },
  { id: "greencard", label: "Green Card / Root-of-Title history audited for gaps or irregular allocations" },
  { id: "gazette", label: "Kenya Gazette succession / probate notices verified (no unresolved family dispute)" },
  { id: "ndungu", label: "Cross-checked against Ndung'u Land Report & riparian / road-reserve excisions" },
  { id: "datum", label: "Cassini-Soldner / ARC1960 coordinates transformed cleanly to UTM Zone 37S / WGS84" },
  { id: "nca", label: "NCA project registration, EBK structural sign-off, BORAQS & ISK stage approvals verified" },
];

export default function ArdhisasaCadTitleAuditorPage() {
  const [declaredSqm, setDeclaredSqm] = useState("2000");
  const [coordText, setCoordText] = useState(
    utilData.ardhisasa.sampleUtmCoords.map(([e, n]) => `${e}, ${n}`).join("\n")
  );
  const [checks, setChecks] = useState<Record<string, boolean>>({
    search: true,
    greencard: true,
    gazette: false,
    ndungu: true,
    datum: true,
    nca: false,
  });

  const audit = useMemo(() => {
    const pts = coordText
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => {
        const p = l.split(/[,\s]+/).map(Number);
        return p.length >= 2 && !Number.isNaN(p[0]) && !Number.isNaN(p[1]) ? ([p[0], p[1]] as [number, number]) : null;
      })
      .filter((p): p is [number, number] => p !== null);

    let areaSqm = 0;
    if (pts.length >= 4) {
      let s = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        s += pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1];
      }
      areaSqm = Math.abs(s) / 2;
    }

    const closureErr =
      pts.length >= 2
        ? Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1])
        : 999;
    const isClosed = pts.length >= 4 && closureErr < 0.05;
    const declared = Math.max(1, Number(declaredSqm) || 1);
    const variancePct = Math.abs(((areaSqm - declared) / declared) * 100);
    const areaOk = variancePct <= utilData.ardhisasa.areaTolerancePct;
    const passedChecks = Object.values(checks).filter(Boolean).length;

    return { pts, areaSqm, closureErr, isClosed, variancePct, areaOk, passedChecks };
  }, [coordText, declaredSqm, checks]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2 mb-2">
            <Compass className="w-5 h-5 text-gold" />
            Ardhisasa Root-of-Title Due Diligence &amp; Sectional CAD Pre-Validator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
            Pre-validate parcel beacon coordinates (UTM Easting, Northing in meters) for polygon closure and area tolerance before Ardhisasa GIS/CAD submission, and audit Root-of-Title &amp; <strong>NCA/EBK/BORAQS/ISK</strong> compliance (addressing Kenya&apos;s {utilData.ardhisasa.urbanNonComplianceRangePct} urban compliance gap).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Declared Title Area (m²)</label>
              <input
                type="number"
                value={declaredSqm}
                onChange={(e) => setDeclaredSqm(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 flex flex-col justify-center">
              <span className="text-[0.65rem] font-bold uppercase text-gold">Computed Polygon Area</span>
              <span className="text-base font-black text-text-primary">
                {audit.areaSqm.toFixed(1)} m² ({(audit.areaSqm / 10000).toFixed(4)} ha)
              </span>
            </div>
            <div className={`rounded-xl border px-4 py-2 flex flex-col justify-center ${audit.isClosed && audit.areaOk ? "border-emerald-500/40 bg-emerald-500/10" : "border-red-500/40 bg-red-500/10"}`}>
              <span className="text-[0.65rem] font-bold uppercase text-text-muted">Topology &amp; Tolerance</span>
              <span className={`text-sm font-black ${audit.isClosed && audit.areaOk ? "text-emerald-400" : "text-red-400"}`}>
                {audit.isClosed ? "Closed" : `Open (${audit.closureErr.toFixed(2)}m)`} • Δ {audit.variancePct.toFixed(2)}%
              </span>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
              Parcel Beacon Coordinates (`Easting, Northing` in UTM Zone 37S meters)
            </label>
            <textarea
              rows={5}
              value={coordText}
              onChange={(e) => setCoordText(e.target.value)}
              className="w-full p-3 rounded-xl border border-border bg-bg-elevated font-mono text-xs text-text-primary"
            />
          </div>

          <h3 className="text-xs font-bold uppercase text-text-muted mb-2">
            Root-of-Title &amp; Structural Compliance Dossier ({audit.passedChecks}/{DOSSIER_CHECKS.length} Verified)
          </h3>
          <div className="space-y-2">
            {DOSSIER_CHECKS.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-xl border border-border bg-bg-elevated/40 cursor-pointer text-xs"
              >
                <input
                  type="checkbox"
                  checked={!!checks[item.id]}
                  onChange={() => setChecks((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                  className="mt-0.5 accent-gold"
                />
                <span className="text-text-primary font-medium">{item.label}</span>
              </label>
            ))}
          </div>

          <div className="mt-4">
            {audit.isClosed && audit.areaOk && audit.passedChecks === DOSSIER_CHECKS.length ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Parcel topology and Root-of-Title compliance dossier passed.
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <AlertTriangle className="w-4 h-4" /> Complete remaining {DOSSIER_CHECKS.length - audit.passedChecks} dossier check(s) and verify polygon closure/tolerance before conveyancing or Ardhisasa upload.
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
