"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Database, ExternalLink, Film, Hand, Search } from "lucide-react";
import { OPEN_CORPUS_INDEX, type KslVideoItem } from "@/lib/open-corpus";

type KslFilterTab = "all" | "maseno-stickman" | "human-sign-bible";

export default function StagedVarietiesPanel() {
  const [selectedId, setSelectedId] = useState<string>(
    OPEN_CORPUS_INDEX.stagedVarieties[0]?.id ?? ""
  );
  const [query, setQuery] = useState("");
  const [kslTab, setKslTab] = useState<KslFilterTab>("all");
  const [kslQuery, setKslQuery] = useState("");
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  const kslVideos: KslVideoItem[] = OPEN_CORPUS_INDEX.ksl.videos ?? [];
  const kslStorybooks = OPEN_CORPUS_INDEX.ksl.storybooks ?? [];

  const filteredKslVideos = kslVideos.filter((v) => {
    if (kslTab !== "all" && v.category !== kslTab) return false;
    const q = kslQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      v.title.toLowerCase().includes(q) ||
      v.gloss.toLowerCase().includes(q) ||
      (v.transcript ?? "").toLowerCase().includes(q)
    );
  });

  const [activeVideoId, setActiveVideoId] = useState<string>(kslVideos[0]?.id ?? "");
  const activeVideo =
    filteredKslVideos.find((v) => v.id === activeVideoId) ?? filteredKslVideos[0] ?? null;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, activeVideo?.id]);

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
  const masenoCount = kslVideos.filter((v) => v.category === "maseno-stickman").length;
  const humanBibleCount = kslVideos.filter((v) => v.category === "human-sign-bible").length;

  return (
    <section className="mt-10 rounded-2xl border border-gold/25 bg-bg-card p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" />
            Emerging Varieties, Kenyan Sign Language (KSL) &amp; Open Corpora
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)] mt-1">
            Staged Kenyan Languages &amp; Live Open-Access Media Datasets
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Commercially permissive CC-BY, CC-BY-SA, CC0, and Public Domain corpora automatically synced into KenyaHub.
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

      {/* Kenyan Sign Language (KSL · ISO xki) Real Video & Storybook Library */}
      <div className="rounded-2xl border border-kenya-green/30 bg-bg-elevated/40 p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-kenya-green flex items-center gap-1.5">
              <Hand className="h-3.5 w-3.5" />
              Kenyan Sign Language (KSL · ISO xki) — Commercially Permissive Video Library
            </p>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              Real KSL videos from Maseno University&apos;s anonymized stickman dataset (Zenodo 14338329, CC-BY-4.0), human KSL signers in Open Sign Bibles (CC-BY-SA-4.0), and Global Digital Library KSL video storybooks (CC-BY-4.0).
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ksl.sources.map((src) => (
              <a
                key={src.id}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-kenya-green/30 bg-bg-card px-2.5 py-1 text-[0.72rem] font-semibold text-kenya-green hover:underline"
              >
                <span>{src.id}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Interactive R2 HTML5 <video> Player when Maseno / Open Sign Bibles MP4s are synced */}
        {kslVideos.length > 0 ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all" as const, label: `All Videos (${kslVideos.length})` },
                  { id: "maseno-stickman" as const, label: `Maseno Stickman (${masenoCount})` },
                  { id: "human-sign-bible" as const, label: `Human Sign Bibles (${humanBibleCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setKslTab(tab.id)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                      kslTab === tab.id
                        ? "border-kenya-green bg-kenya-green text-white"
                        : "border-border bg-bg-card text-text-secondary hover:border-kenya-green/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-56">
                <Search className="h-3.5 w-3.5 text-text-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={kslQuery}
                  onChange={(e) => setKslQuery(e.target.value)}
                  placeholder="Search KSL sign or passage..."
                  className="w-full rounded-lg border border-border bg-bg-card pl-8 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-kenya-green"
                />
              </div>
            </div>

            {activeVideo && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-xl border border-border bg-bg-card p-3.5">
                <div className="lg:col-span-7 space-y-2.5">
                  <video
                    ref={videoRef}
                    key={activeVideo.id}
                    src={activeVideo.videoUrl}
                    controls
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full max-h-80 rounded-lg bg-black object-contain"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-text-primary">{activeVideo.title}</p>
                      <p className="text-[0.7rem] text-text-muted">
                        {activeVideo.source} · {activeVideo.license}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[0.5, 0.75, 1].map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => setPlaybackRate(spd)}
                          className={`rounded-md border px-2 py-0.5 text-[0.7rem] font-mono cursor-pointer ${
                            playbackRate === spd
                              ? "border-kenya-green bg-kenya-green/15 text-kenya-green font-bold"
                              : "border-border bg-bg-elevated text-text-secondary"
                          }`}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>
                  </div>
                  {activeVideo.transcript && (
                    <p className="text-xs text-text-secondary rounded-lg border border-border bg-bg-elevated/50 p-2.5 leading-relaxed">
                      {activeVideo.transcript}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-5 max-h-80 overflow-y-auto space-y-1.5 pr-1">
                  {filteredKslVideos.map((vid) => {
                    const isCurrent = vid.id === activeVideo.id;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => setActiveVideoId(vid.id)}
                        className={`w-full text-left rounded-lg border p-2.5 transition-all cursor-pointer ${
                          isCurrent
                            ? "border-kenya-green bg-kenya-green/10"
                            : "border-border bg-bg-elevated/40 hover:border-kenya-green/40"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-text-primary line-clamp-1">
                            {vid.title}
                          </span>
                          <span className="text-[0.62rem] font-mono uppercase text-kenya-green shrink-0">
                            {vid.category === "maseno-stickman" ? "Stickman" : "Human"}
                          </span>
                        </div>
                        <p className="text-[0.65rem] text-text-muted mt-0.5">{vid.license}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-kenya-green/35 bg-bg-card/80 p-3.5 text-xs text-text-secondary space-y-1.5">
            <p className="font-semibold text-text-primary flex items-center gap-1.5">
              <Film className="h-3.5 w-3.5 text-kenya-green" />
              Maseno Stickman &amp; Open Sign Bibles R2 Video Pipeline Ready
            </p>
            <p>
              Run the GitHub Actions ingestion workflow to transcode and stream Maseno stickman <code className="font-mono">.mp4</code> signs (Zenodo 14338329, 1.54 GB, CC-BY-4.0) and human KSL <code className="font-mono">.mp4</code> clips from Open Sign Bibles (CC-BY-SA-4.0) directly into this player.
            </p>
          </div>
        )}

        {/* Global Digital Library Human KSL Video Storybooks (Available Immediately) */}
        {kslStorybooks.length > 0 && (
          <div className="space-y-2">
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-text-muted">
              Human KSL Video Storybooks (Global Digital Library · Open Access)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {kslStorybooks.map((book) => (
                <a
                  key={book.id}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border bg-bg-card p-3 hover:border-kenya-green/50 transition-all block"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-bold text-text-primary">{book.title}</p>
                    <ExternalLink className="h-3.5 w-3.5 text-kenya-green shrink-0 mt-0.5" />
                  </div>
                  <p className="text-[0.72rem] text-text-secondary mt-1 leading-relaxed">
                    {book.description}
                  </p>
                  <p className="text-[0.65rem] font-mono text-kenya-green mt-1.5">
                    {book.format} · {book.license}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
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

      {/* Open Civic, Wikimedia & NLP Evaluation Corpora */}
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
    </section>
  );
}
