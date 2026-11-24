"use client";

import { useState, useMemo } from "react";
import { MapPin, CheckCircle2, AlertTriangle, Download } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "eudr-coop-geojson-packager")!;

function parseCoords(raw: string): [number, number][] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/[,\s]+/).filter(Boolean).map(Number);
      return parts.length >= 2 &&
        Number.isFinite(parts[0]) &&
        Number.isFinite(parts[1]) &&
        Math.abs(parts[0]) <= 90 &&
        Math.abs(parts[1]) <= 180
        ? ([parts[0], parts[1]] as [number, number])
        : null;
    })
    .filter((p): p is [number, number] => p !== null);
}

function segmentsIntersect(
  a: [number, number],
  b: [number, number],
  c: [number, number],
  d: [number, number]
): boolean {
  const ccw = (p1: [number, number], p2: [number, number], p3: [number, number]) =>
    (p3[1] - p1[1]) * (p2[0] - p1[0]) - (p2[1] - p1[1]) * (p3[0] - p1[0]);
  const d1 = ccw(c, d, a);
  const d2 = ccw(c, d, b);
  const d3 = ccw(a, b, c);
  const d4 = ccw(a, b, d);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
}

function hasSelfIntersection(pts: [number, number][]): boolean {
  const n = pts.length - 1;
  if (n < 4) return false;
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segmentsIntersect(pts[i], pts[i + 1], pts[j], pts[j + 1])) return true;
    }
  }
  return false;
}

// Approximate geodesic polygon area in hectares for small equatorial Kenyan plots (WGS84 lat, lon)
function computeAreaHectares(coords: [number, number][]): number {
  if (coords.length < 3) return 0;
  const isClosed =
    Math.abs(coords[0][0] - coords[coords.length - 1][0]) < 1e-6 &&
    Math.abs(coords[0][1] - coords[coords.length - 1][1]) < 1e-6;
  const ring = isClosed ? coords.slice(0, -1) : coords;
  if (ring.length < 3) return 0;
  const avgLatRad = (ring.reduce((s, c) => s + c[0], 0) / ring.length) * (Math.PI / 180);
  const mPerDegLat = 110574;
  const mPerDegLon = 111320 * Math.cos(avgLatRad);
  let area = 0;
  for (let i = 0; i < ring.length; i++) {
    const next = ring[(i + 1) % ring.length];
    const x1 = ring[i][1] * mPerDegLon;
    const y1 = ring[i][0] * mPerDegLat;
    const x2 = next[1] * mPerDegLon;
    const y2 = next[0] * mPerDegLat;
    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area) / 2 / 10000;
}

// RFC 7946 §3.1.6: Exterior rings in [lon, lat] must be counter-clockwise (signed area > 0)
function ensureCcwLonLatRing(pts: [number, number][]): [number, number][] {
  const lonLat: [number, number][] = pts.map(([lat, lon]) => [lon, lat]);
  let signed = 0;
  for (let i = 0; i < lonLat.length - 1; i++) {
    signed += lonLat[i][0] * lonLat[i + 1][1] - lonLat[i + 1][0] * lonLat[i][1];
  }
  return signed < 0 ? [...lonLat].reverse() : lonLat;
}

export default function EudrCoopGeojsonPackagerPage() {
  const [coopName, setCoopName] = useState("Othaya Farmers Co-operative Society");
  const [farmerId, setFarmerId] = useState("KE-NYR-04128");
  const [declaredHa, setDeclaredHa] = useState("7.08");
  const [gnssAccuracy, setGnssAccuracy] = useState("6.5");
  const [coordText, setCoordText] = useState(
    utilData.eudr.samplePolygonCoords.map(([lat, lon]) => `${lat}, ${lon}`).join("\n")
  );

  const validation = useMemo(() => {
    const pts = parseCoords(coordText);
    const ha = Math.max(0, Number(declaredHa) || 0);
    const acc = Math.max(0, Number(gnssAccuracy) || 0);
    const isClosed =
      pts.length >= 4 &&
      Math.abs(pts[0][0] - pts[pts.length - 1][0]) < 1e-6 &&
      Math.abs(pts[0][1] - pts[pts.length - 1][1]) < 1e-6;
    const computedHa = pts.length >= 3 ? computeAreaHectares(pts) : ha;
    const requiresPolygon = Math.max(ha, computedHa) >= utilData.eudr.polygonThresholdHa;
    const selfIntersects = isClosed && hasSelfIntersection(pts);
    const gnssOk = acc > 0 && acc <= utilData.eudr.maxGnssAccuracyMeters;

    const errors: string[] = [];
    if (!gnssOk) errors.push(`GNSS accuracy (${acc}m) exceeds the ≤10m EUDR field lock requirement.`);
    if (requiresPolygon && pts.length < 4) {
      errors.push("Plots >= 4.0 hectares strictly require a closed multi-vertex polygon (at least 4 vertices with first = last).");
    }
    if (requiresPolygon && pts.length >= 4 && !isClosed) {
      errors.push("Polygon ring is not closed (first and last lat/lon coordinates must match).");
    }
    if (requiresPolygon && isClosed && (selfIntersects || computedHa <= 0)) {
      errors.push("Polygon geometry is invalid (self-intersecting edges or zero enclosed area).");
    }
    if (!requiresPolygon && pts.length < 1) {
      errors.push("Enter at least 1 WGS84 GPS point (lat, lon) for smallholder plots < 4.0 ha.");
    }

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            cooperative: coopName,
            producerId: farmerId,
            commodity: "Coffee (HS 0901)",
            countryOfProduction: "KE",
            deforestationCutoff: utilData.eudr.cutoffDate,
            gnssAccuracyMeters: acc,
            areaHectares: Number(computedHa.toFixed(3)),
            eudrGeometryMode: requiresPolygon ? "Polygon (>=4ha)" : "Point (<4ha)",
          },
          geometry: requiresPolygon && pts.length >= 4
            ? { type: "Polygon", coordinates: [ensureCcwLonLatRing(pts)] }
            : { type: "Point", coordinates: pts[0] ? [pts[0][1], pts[0][0]] : [36.95, -0.4167] },
        },
      ],
    };

    return { pts, requiresPolygon, isClosed, computedHa, gnssOk, errors, geojson };
  }, [coordText, declaredHa, gnssAccuracy, coopName, farmerId]);

  const downloadGeojson = () => {
    const blob = new Blob([JSON.stringify(validation.geojson, null, 2)], { type: "application/geo+json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${farmerId.toLowerCase()}-eudr-traces.geojson`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Cooperative Name</label>
              <input
                type="text"
                value={coopName}
                onChange={(e) => setCoopName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Plot Area (Hectares)</label>
              <input
                type="number"
                step="0.1"
                value={declaredHa}
                onChange={(e) => setDeclaredHa(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">GNSS Accuracy (m)</label>
              <input
                type="number"
                step="0.5"
                value={gnssAccuracy}
                onChange={(e) => setGnssAccuracy(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">
              WGS84 Coordinates (one `latitude, longitude` per line — auto-switched to {validation.requiresPolygon ? "Closed Polygon >= 4 ha" : "Single GPS Point < 4 ha"})
            </label>
            <textarea
              rows={5}
              value={coordText}
              onChange={(e) => setCoordText(e.target.value)}
              className="w-full p-3 rounded-xl border border-border dark:border-white/15 bg-bg-elevated font-mono text-xs text-text-primary outline-hidden focus:border-gold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-3.5">
              <span className="text-[0.68rem] font-bold text-gold uppercase">Geometry Mode</span>
              <p className="text-base font-black text-text-primary mt-1">
                {validation.requiresPolygon ? "Closed Polygon (≥ 4 ha)" : "Single Point (< 4 ha)"}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-0.5">{validation.pts.length} vertices parsed</p>
            </div>
            <div className="rounded-xl border border-border dark:border-white/15 bg-bg-elevated/40 p-3.5">
              <span className="text-[0.68rem] font-bold text-text-muted uppercase">Computed Area</span>
              <p className="text-base font-black text-text-primary mt-1">
                {validation.computedHa.toFixed(2)} ha
              </p>
              <p className="text-[0.68rem] text-text-muted mt-0.5">Baseline: Dec 31, 2020 forest cutoff</p>
              {Math.abs(validation.computedHa - (parseFloat(declaredHa) || 0)) / Math.max(parseFloat(declaredHa) || 0.1, 0.1) > 0.1 && (
                <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-1">
                  Variance warning: Computed polygon area ({validation.computedHa.toFixed(2)} ha) differs from declared area ({declaredHa} ha) by over 10%.
                </p>
              )}
            </div>
            <div className={`rounded-xl border p-3.5 ${validation.errors.length === 0 ? "border-emerald-500/40 bg-emerald-500/10" : "border-red-500/40 bg-red-500/10"}`}>
              <span className="text-[0.68rem] font-bold uppercase text-text-muted">EU TRACES Status</span>
              <p className={`text-base font-black mt-1 ${validation.errors.length === 0 ? "text-emerald-400" : "text-red-400"}`}>
                {validation.errors.length === 0 ? "TRACES Ready" : `${validation.errors.length} Blocking Issue(s)`}
              </p>
            </div>
          </div>

          {validation.errors.length > 0 ? (
            <div className="space-y-2 mb-5">
              {validation.errors.map((err, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-xs text-red-300">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{err}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-xs text-emerald-300 mb-5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Polygon closure, WGS84 ordering ([lon, lat] per RFC 7946), and &lt;10m GNSS accuracy checks passed.</span>
            </div>
          )}

          <button
            type="button"
            onClick={downloadGeojson}
            disabled={validation.errors.length > 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold text-kenya-black text-xs font-bold disabled:opacity-40 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Export EU TRACES GeoJSON (.geojson)
          </button>
        </div>
      </div>
    </>
  );
}
