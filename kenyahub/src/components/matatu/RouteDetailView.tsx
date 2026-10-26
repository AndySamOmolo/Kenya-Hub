"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import matatuData from "@/data/matatu-routes.json";
import DynamicIcon from "@/components/ui/DynamicIcon";

// Dynamic import for Leaflet map component (CSR only)
const MatatuMap = dynamic(() => import("@/components/matatu/MatatuMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] rounded-xl border border-border bg-bg-card flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin" />
      <p className="text-xs text-text-muted">Interactive route map loads in browser</p>
    </div>
  ),
});

interface RouteDetailViewProps {
  townSlug: string;
  routeSlug: string;
}

export default function RouteDetailView({ townSlug, routeSlug }: RouteDetailViewProps) {
  const townInfo = matatuData.towns.find((t) => t.slug === townSlug);
  const townRoutes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];
  const route = townRoutes.find((r) => r.slug === routeSlug);

  if (!route || !townInfo) {
    return (
      <div data-error-page="true" data-nosnippet="true" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Route Not Found</h1>
        <p className="text-text-muted text-sm mb-6">The requested matatu route could not be found.</p>
        <Link href={`/matatu/${townSlug}/`} className="text-xs font-semibold text-gold hover:underline">
          ← Back to {townInfo?.name || "City"} Routes
        </Link>
      </div>
    );
  }

  const otherRoutes = townRoutes.filter((r) => r.slug !== route.slug).slice(0, 4);
  const intermediateStages = route.stages.slice(1, -1).map((s) => s.name);
  const stageNamesList = route.stages.map((s) => s.name).join(" → ");

  const routeFaq = [
    {
      question: `Where do I board Route ${route.routeNumber} (${route.name}) in ${townInfo.name}?`,
      answer: `In ${townInfo.name}, Route ${route.routeNumber} departs from ${route.terminusA} and terminates at ${route.terminusB}. Commuters can also board or alight at designated intermediate stages including ${intermediateStages.length > 0 ? intermediateStages.join(", ") : route.stages.map((s) => s.name).join(", ")}.`,
    },
    {
      question: `How much is the matatu fare for Route ${route.routeNumber} from ${route.terminusA} to ${route.terminusB}?`,
      answer: `Typical fares on Route ${route.routeNumber} range from KES ${route.fareMin} during off-peak hours (mid-morning and early afternoon) to KES ${route.fareMax} during morning (6:00 AM – 9:00 AM) and evening (4:30 PM – 8:00 PM) rush hours or heavy rain. Most operators accept both M-Pesa (Pochi la Biashara / Till Number) and cash.`,
    },
    {
      question: `Which SACCO operates Matatu Route ${route.routeNumber} in ${townInfo.name}?`,
      answer: `Route ${route.routeNumber} (${route.name}) is operated by ${route.saccoName}, a public service vehicle (PSV) operator registered under the National Transport and Safety Authority (NTSA) regulations, operating daily during ${route.operatingHours}.`,
    },
    {
      question: `What are all the stage stopovers along ${townInfo.name} Route ${route.routeNumber}?`,
      answer: `Route ${route.routeNumber} covers ${route.stages.length} principal stages in sequential order: ${stageNamesList}.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: routeFaq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <Link href="/matatu/" className="hover:text-gold transition-colors">Matatu</Link>
        <span>/</span>
        <Link href={`/matatu/${townSlug}/`} className="hover:text-gold transition-colors capitalize">{townInfo.name}</Link>
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
              <span className="text-xs bg-kenya-green/15 text-kenya-green-light px-2.5 py-0.5 rounded font-semibold inline-flex items-center gap-1">
                <DynamicIcon emoji="✓" className="w-3 h-3" /> Verified Route
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-[family-name:var(--font-outfit)] mb-1">
            {route.name} ({townInfo.name} Route {route.routeNumber})
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed mt-1">
            Commuter guide for {townInfo.name} Matatu Route {route.routeNumber} connecting{" "}
            <strong>{route.terminusA}</strong> to <strong>{route.terminusB}</strong> via{" "}
            {intermediateStages.length > 0 ? intermediateStages.join(", ") : `${route.stages.length} verified stages`}.
            Operated by <strong className="text-text-primary">{route.saccoName}</strong>.
          </p>
        </div>

        {/* Fare badge */}
        <div className="bg-bg-elevated border border-border rounded-xl p-4 text-center md:text-right shrink-0">
          <p className="text-[0.65rem] uppercase tracking-wider text-text-muted mb-0.5">Typical Fare</p>
          <p className="text-2xl font-black text-gold">KES {route.fareMin} – {route.fareMax}</p>
          <p className="text-[0.65rem] text-text-muted mt-0.5 flex items-center justify-center md:justify-end gap-1">
            <DynamicIcon emoji="⏰" className="w-3 h-3" /> {route.operatingHours}
          </p>
        </div>
      </div>

      {/* Main Grid: Interactive Map + Route Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map column (2 cols wide on large) */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] flex items-center gap-2">
                <DynamicIcon emoji="🗺️" className="w-4 h-4 text-gold" /> Interactive Route Map
              </h2>
              <span className="text-xs text-text-muted">{route.stages.length} Stage Stopovers</span>
            </div>
            <MatatuMap stages={route.stages} routeName={route.name} routeNumber={route.routeNumber} />
          </div>

          {/* Route Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Start Terminus</p>
              <p className="text-xs font-bold text-kenya-green-light mt-1 break-words">{route.terminusA}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Destination</p>
              <p className="text-xs font-bold text-kenya-red-light mt-1 break-words">{route.terminusB}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Operator SACCO</p>
              <p className="text-xs font-bold text-gold mt-1 break-words">{route.saccoName}</p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-[0.65rem] text-text-muted">Operating Hours</p>
              <p className="text-xs font-bold text-text-primary mt-1 break-words">{route.operatingHours}</p>
            </div>
          </div>

          {/* Detailed Commuter Guide & Corridor Breakdown */}
          <section className="bg-bg-card border border-border rounded-2xl p-6 space-y-4">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🧭" className="w-4 h-4 text-gold" /> Commuter Guide: {route.terminusA} to {route.terminusB} (Route {route.routeNumber})
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <strong>Route {route.routeNumber} ({route.name})</strong> is a key public service vehicle (PSV) transit corridor in{" "}
              <strong>{townInfo.name}</strong> ({townInfo.county} County). Matatus and buses operated by{" "}
              <strong>{route.saccoName}</strong> board passengers at <strong>{route.terminusA}</strong> and travel through{" "}
              {route.stages.length} designated stages ({stageNamesList}) before terminating at{" "}
              <strong>{route.terminusB}</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-4 space-y-1.5">
                <h3 className="text-xs font-bold text-gold">Off-Peak vs. Peak Fare Guide</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Off-peak fares (9:30 AM – 4:00 PM) average <strong>KES {route.fareMin}</strong>. During morning and evening peak windows or wet weather, fares typically rise up to <strong>KES {route.fareMax}</strong>. Confirm the current fare with the conductor before boarding.
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-4 space-y-1.5">
                <h3 className="text-xs font-bold text-kenya-green-light">NTSA Safety &amp; Payment Tips</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Ensure the vehicle displays a valid NTSA inspection sticker, yellow PSV continuous band, and{" "}
                  <strong>{route.saccoName}</strong> branding. Most crews accept M-Pesa Till or Pochi la Biashara alongside cash.
                </p>
              </div>
            </div>
          </section>

          {/* Route FAQs */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Frequently Asked Questions — Route {route.routeNumber}
            </h2>
            <div className="space-y-2.5">
              {routeFaq.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-bg-card border border-border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-4 py-3.5 cursor-pointer text-xs sm:text-sm font-medium text-text-primary hover:text-gold transition-colors list-none">
                    <span className="pr-3">{item.question}</span>
                    <span className="text-text-muted group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Stage-by-stage sidebar */}
        <div className="space-y-6">
          <div className="bg-bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-4 flex items-center gap-2">
              <DynamicIcon emoji="🚏" className="w-4 h-4 text-gold" /> Stage Stopovers ({route.stages.length})
            </h2>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-kenya-green before:via-gold before:to-kenya-red">
              {route.stages.map((stage, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === route.stages.length - 1;

                return (
                  <div key={`${stage.order}-${stage.name}`} className="relative flex items-start gap-3">
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
                        {isFirst ? "Departure Terminus" : isLast ? "Final Destination" : `Stage ${stage.order} · GPS ${stage.lat.toFixed(3)}, ${stage.lng.toFixed(3)}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Report discrepancy link */}
          <div className="bg-bg-card border border-border rounded-xl p-5 text-center space-y-2">
            <p className="text-xs font-semibold text-text-primary">Notice a change in fares, stages, or SACCOs?</p>
            <p className="text-[0.65rem] text-text-muted">
              Send an update to our transit verification team so we can keep {townInfo.name} Route {route.routeNumber} accurate.
            </p>
            <Link
              href="/contact/"
              className="px-4 py-2 bg-bg-elevated hover:bg-gold/20 border border-border text-xs text-text-primary rounded-lg transition-colors inline-flex items-center gap-1.5 mx-auto"
            >
              <DynamicIcon emoji="🚩" className="w-3.5 h-3.5 text-kenya-red-light" /> Submit Route Update
            </Link>
          </div>
        </div>
      </div>

      {/* Nearby / Other Routes */}
      {otherRoutes.length > 0 && (
        <div className="pt-8 border-t border-border">
          <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-4">
            Other {townInfo.name} Matatu Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/matatu/${townSlug}/${r.slug}/`}
                className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded">
                    R{r.routeNumber}
                  </span>
                  <span className="text-xs font-semibold text-text-primary group-hover:text-gold transition-colors break-words">
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
