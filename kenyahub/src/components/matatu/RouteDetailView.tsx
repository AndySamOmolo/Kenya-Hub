"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import matatuData from "@/data/matatu-routes.json";

// Dynamic import for Leaflet map component (CSR only)
const MatatuMap = dynamic(() => import("@/components/matatu/MatatuMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] rounded-xl border border-border bg-bg-card flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin" />
      <p className="text-xs text-text-muted">Loading interactive map...</p>
    </div>
  ),
});

interface RouteDetailViewProps {
  townSlug: string;
  routeSlug: string;
}

export default function RouteDetailView({ townSlug, routeSlug }: RouteDetailViewProps) {
  const [reported, setReported] = useState(false);

  const townInfo = matatuData.towns.find((t) => t.slug === townSlug);
  const townRoutes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];
  const route = townRoutes.find((r) => r.slug === routeSlug);

  if (!route || !townInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Route Not Found</h1>
        <p className="text-text-muted text-sm mb-6">The requested matatu route could not be found.</p>
        <Link href={`/matatu/${townSlug}`} className="text-xs font-semibold text-gold hover:underline">
          ← Back to {townInfo?.name || "City"} Routes
        </Link>
      </div>
    );
  }

  const otherRoutes = townRoutes.filter((r) => r.slug !== route.slug).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <Link href="/matatu/" className="hover:text-gold transition-colors">Matatu</Link>
        <span>/</span>
        <Link href={`/matatu/${townSlug}`} className="hover:text-gold transition-colors capitalize">{townInfo.name}</Link>
        <span>/</span>
        <span className="text-text-primary">Route {route.routeNumber}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-gold/15 text-gold border border-gold/30 rounded-lg text-sm font-black font-[family-name:var(--font-outfit)]">
              Route {route.routeNumber}
            </span>
            {route.verified && (
              <span className="text-xs bg-kenya-green/15 text-kenya-green-light px-2.5 py-0.5 rounded font-semibold">
                ✓ Verified Route
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-[family-name:var(--font-outfit)] mb-1">
            {route.name}
          </h1>
          <p className="text-xs text-text-muted">
            Operated by <strong className="text-text-secondary">{route.saccoName}</strong>
          </p>
        </div>

        {/* Fare badge */}
        <div className="bg-bg-elevated border border-border rounded-xl p-4 text-center md:text-right">
          <p className="text-[0.65rem] uppercase tracking-wider text-text-muted mb-0.5">Typical Fare</p>
          <p className="text-2xl font-black text-gold">KES {route.fareMin} – {route.fareMax}</p>
          <p className="text-[0.65rem] text-text-muted mt-0.5">⏰ {route.operatingHours}</p>
        </div>
      </div>

      {/* Main Grid: Interactive Map + Route Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map column (2 cols wide on large) */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                🗺️ Interactive Route Map
              </h2>
              <span className="text-xs text-text-muted">{route.stages.length} Stage Stopovers</span>
            </div>
            <MatatuMap stages={route.stages} routeName={route.name} routeNumber={route.routeNumber} />
          </div>

          {/* Route Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Start Terminus</p>
              <p className="text-xs font-bold text-kenya-green-light mt-1 truncate">{route.terminusA}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Destination</p>
              <p className="text-xs font-bold text-kenya-red-light mt-1 truncate">{route.terminusB}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Operator SACCO</p>
              <p className="text-xs font-bold text-gold mt-1 truncate">{route.saccoName}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Operating Hours</p>
              <p className="text-xs font-bold text-text-primary mt-1 truncate">{route.operatingHours}</p>
            </div>
          </div>
        </div>

        {/* Stage-by-stage sidebar */}
        <div className="space-y-6">
          <div className="bg-bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-4">
              🚏 Stage Stopovers ({route.stages.length})
            </h2>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-kenya-green before:via-gold before:to-kenya-red">
              {route.stages.map((stage, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === route.stages.length - 1;

                return (
                  <div key={stage.name} className="relative flex items-start gap-3">
                    {/* Stage dot marker */}
                    <div
                      className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold text-black border-2 border-white shadow-sm ${
                        isFirst ? "bg-kenya-green" : isLast ? "bg-kenya-red" : "bg-gold"
                      }`}
                    >
                      {stage.order}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold ${isFirst ? "text-kenya-green-light" : isLast ? "text-kenya-red-light" : "text-text-primary"}`}>
                        {stage.name}
                      </p>
                      <p className="text-[0.65rem] text-text-muted mt-0.5">
                        {isFirst ? "🏁 Departure Terminus" : isLast ? "🎯 Final Destination" : `Stage ${stage.order}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Report discrepancy button */}
          <div className="bg-bg-card border border-border rounded-xl p-5 text-center space-y-2">
            <p className="text-xs font-semibold text-text-primary">Notice an error in fares or stages?</p>
            <p className="text-[0.65rem] text-text-muted">Help us keep Kenya&apos;s matatu route information accurate.</p>
            {reported ? (
              <p className="text-xs text-kenya-green-light font-medium pt-2">✓ Thank you! Report submitted for review.</p>
            ) : (
              <button
                onClick={() => setReported(true)}
                className="px-4 py-2 bg-bg-elevated hover:bg-gold/20 border border-border text-xs text-text-primary rounded-lg transition-colors"
              >
                🚩 Report Discrepancy
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Nearby / Other Routes */}
      {otherRoutes.length > 0 && (
        <div className="pt-8 border-t border-border">
          <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-4">
            Other {townInfo.name} Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/matatu/${townSlug}/${r.slug}`}
                className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded">
                    R{r.routeNumber}
                  </span>
                  <span className="text-xs font-semibold text-text-primary group-hover:text-gold transition-colors truncate">
                    {r.name}
                  </span>
                </div>
                <p className="text-[0.65rem] text-text-muted">KES {r.fareMin}–{r.fareMax} · {r.saccoName}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
