"use client";

import { useState, useMemo } from "react";
import { GraduationCap, Compass } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "kjsea-pathway-engine")!;

export default function KjseaPathwayEnginePage() {
  const [kpsea, setKpsea] = useState("78");
  const [sba, setSba] = useState("82");
  const [kjsea, setKjsea] = useState("74");
  const [stemAffinity, setStemAffinity] = useState("84");
  const [socialAffinity, setSocialAffinity] = useState("72");
  const [artsAffinity, setArtsAffinity] = useState("65");

  const result = useMemo(() => {
    const k6 = Math.min(100, Math.max(0, Number(kpsea) || 0));
    const s78 = Math.min(100, Math.max(0, Number(sba) || 0));
    const g9 = Math.min(100, Math.max(0, Number(kjsea) || 0));

    const composite = Number(
      (
        k6 * utilData.kjsea.weights.kpsea +
        s78 * utilData.kjsea.weights.sba +
        g9 * utilData.kjsea.weights.kjsea
      ).toFixed(1)
    );

    const tier =
      utilData.kjsea.rubricTiers.find((t) => composite >= t.min) ||
      utilData.kjsea.rubricTiers[utilData.kjsea.rubricTiers.length - 1];

    const scores = [
      { id: "stem", score: Math.min(100, Math.max(0, Number(stemAffinity) || 0)) },
      { id: "social", score: Math.min(100, Math.max(0, Number(socialAffinity) || 0)) },
      { id: "arts", score: Math.min(100, Math.max(0, Number(artsAffinity) || 0)) },
    ].sort((a, b) => b.score - a.score);

    const recommended =
      utilData.kjsea.pathways.find((p) => p.id === scores[0].id) || utilData.kjsea.pathways[0];

    return { composite, tier, recommended, ranked: scores };
  }, [kpsea, sba, kjsea, stemAffinity, socialAffinity, artsAffinity]);

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Grade 6 KPSEA (20% Weight)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={kpsea}
                onChange={(e) => setKpsea(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Grade 7–8 SBA (20% Weight)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={sba}
                onChange={(e) => setSba(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Grade 9 KJSEA (60% Weight)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={kjsea}
                onChange={(e) => setKjsea(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Math, Science &amp; Tech Avg (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={stemAffinity}
                onChange={(e) => setStemAffinity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Languages, Humanities &amp; Biz (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={socialAffinity}
                onChange={(e) => setSocialAffinity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Creative Arts &amp; Sports (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={artsAffinity}
                onChange={(e) => setArtsAffinity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.68rem] font-bold uppercase text-gold">20-20-60 Composite</span>
              <p className="text-2xl font-black text-gold mt-1">{result.composite}%</p>
              <p className="text-[0.68rem] text-text-secondary mt-0.5">
                Rubric: {result.tier.code} ({result.tier.points}/8 pts)
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 sm:col-span-2">
              <span className="text-[0.68rem] font-bold uppercase text-emerald-400 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Recommended Senior School Pathway
              </span>
              <p className="text-xl font-black text-text-primary mt-1">
                {result.recommended.name} ({result.recommended.sharePct}% National Allocation)
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Tracks: {result.recommended.tracks.join(" • ")}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
            <h3 className="text-xs font-bold uppercase text-text-muted mb-2">
              Aligned KUCCPS University Degree Clusters
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.recommended.kuccps.map((deg) => (
                <span
                  key={deg}
                  className="px-3 py-1 rounded-full border border-gold/30 bg-bg-card text-xs font-semibold text-text-primary"
                >
                  {deg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
