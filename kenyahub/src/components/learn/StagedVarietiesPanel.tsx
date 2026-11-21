"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Database, ExternalLink, Hand, Search } from "lucide-react";
import { OPEN_CORPUS_INDEX } from "@/lib/open-corpus";

export default function StagedVarietiesPanel() {
  const [selectedId, setSelectedId] = useState<string>(
    OPEN_CORPUS_INDEX.stagedVarieties[0]?.id ?? ""
  );
  const [query, setQuery] = useState("");

  const activeVariety = OPEN_CORPUS_INDEX.stagedVarieties.find((v) => v.id === selectedId);
  const filteredEntries = (activeVariety?.sampleEntries ?? []).filter((e) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      e.english.toLowerCase().includes(q) ||
      e.translation.toLowerCase().includes(q) ||
      e.context.toLowerCase().includes(q)
    );
  });

  const { stats, ksl, civic, benchmarks } = OPEN_CORPUS_INDEX;

  return (
    <section className="mt-10 rounded-2xl border border-gold/25 bg-bg-card p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" />
            Emerging Varieties, Kenyan Sign Language (KSL) &amp; Open Corpora
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)] mt-1">
            Staged Kenyan Languages &amp; Live Open-Access Research Datasets
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Commercially permissive CC-BY, CC0, and Public Domain corpora automatically synced into KenyaHub.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-lg border border-kenya-green/30 bg-kenya-green/10 px-2.5 py-1 font-semibold text-kenya-green">
            {stats.totalR2AudioClips.toLocaleString()} R2 Audio Clips
          </span>
          <span className="rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 font-semibold text-gold">
            {stats.totalStagedEntries.toLocaleString()} Staged Entries
          </span>
          <span className="rounded-lg border border-border bg-bg-elevated px-2.5 py-1 font-semibold text-text-secondary">
            {stats.totalBenchmarkRows.toLocaleString()} Benchmark Rows
          </span>
        </div>
      </div>

      {/* Emerging / Staged Kenyan Varieties (Kinubi, Kuria, Kenyan Maay + any future staging files) */}
      {OPEN_CORPUS_INDEX.stagedVarieties.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {OPEN_CORPUS_INDEX.stagedVarieties.map((v) => {
              const active = v.id === selectedId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(v.id);
                    setQuery("");
                  }}
                  className={`rounded-xl border px-3.5 py-2 text-left transition-all cursor-pointer ${
                    active
                      ? "border-gold bg-gold/15 text-text-primary"
                      : "border-border bg-bg-elevated/60 text-text-secondary hover:border-gold/50"
                  }`}
                >
                  <p className="text-xs font-bold">
                    {v.name}{" "}
                    <span className="font-mono text-[0.68rem] text-gold">({v.isoCode})</span>
                  </p>
                  <p className="text-[0.68rem] text-text-muted mt-0.5">
                    {v.totalEntries} verified entries · {v.counties.slice(0, 2).join(", ")}
                  </p>
                </button>
              );
            })}
          </div>

          {activeVariety && (
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    {activeVariety.name} ({activeVariety.nativeName}) — Preview Lexicon
                  </h3>
                  <p className="text-xs text-text-muted">
                    {activeVariety.family} · Spoken in {activeVariety.counties.join(", ")}
                  </p>
                </div>
                <div className="relative w-full sm:w-56">
                  <Search className="h-3.5 w-3.5 text-text-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Filter ${activeVariety.name} preview...`}
                    className="w-full rounded-lg border border-border bg-bg-card pl-8 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredEntries.map((entry, idx) => (
                  <div
                    key={`${activeVariety.id}-${idx}`}
                    className="rounded-lg border border-border bg-bg-card p-2.5 text-xs"
                  >
                    <p className="font-bold text-text-primary">{entry.translation}</p>
                    <p className="text-text-secondary mt-0.5">{entry.english}</p>
                    {entry.context && (
                      <p className="text-[0.65rem] text-text-muted mt-1 line-clamp-1">
                        {entry.context}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Kenyan Sign Language (xki) & Civic/Benchmark Open Datasets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-kenya-green flex items-center gap-1.5">
            <Hand className="h-3.5 w-3.5" />
            Kenyan Sign Language (KSL · ISO xki)
          </p>
          <p className="text-xs text-text-secondary leading-relaxed">
            Indexed directly from Maseno University&apos;s open-access MediaPipe KSL Pose Dataset (CC-BY-4.0) and Open Sign Bibles (CC-BY-SA-4.0).
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link
              href="/tools/learn/ksl/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-kenya-green px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 transition-opacity"
            >
              Launch Interactive KSL Course →
            </Link>
            {ksl.sources.map((src) => (
              <a
                key={src.id}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-kenya-green/30 bg-bg-card px-2.5 py-1 text-xs font-semibold text-kenya-green hover:underline"
              >
                <span>{src.id}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
          {ksl.zenodoFiles.length > 0 && (
            <p className="text-[0.68rem] text-text-muted font-mono">
              Open Archive: {ksl.zenodoFiles[0].key} ({(ksl.zenodoFiles[0].size / (1024 * 1024 * 1024)).toFixed(2)} GB)
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            Open Civic, Wikimedia &amp; NLP Evaluation Corpora
          </p>
          <p className="text-xs text-text-secondary leading-relaxed">
            {stats.totalReaderSentences.toLocaleString()} reading sentences, {benchmarks.length} commercial NLP benchmarks ({stats.totalBenchmarkRows.toLocaleString()} rows), {stats.totalWikimediaDatasets} Wikimedia dumps, and {civic.length} Kenyan civic &amp; agricultural datasets.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {civic.map((c) => (
              <span
                key={c.id}
                className="rounded-md border border-border bg-bg-card px-2 py-0.5 text-[0.68rem] text-text-secondary"
              >
                {c.id} ({c.license})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
