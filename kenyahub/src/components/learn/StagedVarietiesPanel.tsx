"use client";

import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Film, Hand, Search } from "lucide-react";
import { OPEN_CORPUS_INDEX, type KslVideoItem } from "@/lib/open-corpus";

type KslFilterTab = "all" | "maseno-stickman" | "human-sign-bible";
const KSL_PAGE_SIZE = 24;

export default function StagedVarietiesPanel() {
  const [selectedId, setSelectedId] = useState<string>(
    OPEN_CORPUS_INDEX.stagedVarieties[0]?.id ?? ""
  );
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [kslTab, setKslTab] = useState<KslFilterTab>("all");
  const [kslQuery, setKslQuery] = useState("");
  const deferredKslQuery = useDeferredValue(kslQuery);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [visibleKslCount, setVisibleKslCount] = useState<number>(KSL_PAGE_SIZE);
  const [kslVideos, setKslVideos] = useState<KslVideoItem[]>(
    OPEN_CORPUS_INDEX.ksl.videos ?? []
  );

  // Dynamically load the full /ksl-index.json so all newly ingested KSL videos appear automatically
  useEffect(() => {
    fetch("/ksl-index.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && Array.isArray(d.videos) && d.videos.length > 0) {
          setKslVideos(d.videos as KslVideoItem[]);
        }
      })
      .catch(() => {});
  }, []);

  const filteredKslVideos = useMemo(() => {
    const q = deferredKslQuery.trim().toLowerCase();
    return kslVideos.filter((v) => {
      if (kslTab !== "all" && v.category !== kslTab) return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.gloss.toLowerCase().includes(q) ||
        (v.reference ?? "").toLowerCase().includes(q) ||
        (v.transcript ?? "").toLowerCase().includes(q)
      );
    });
  }, [kslVideos, kslTab, deferredKslQuery]);

  const [activeVideoId, setActiveVideoId] = useState<string>(
    (OPEN_CORPUS_INDEX.ksl.videos ?? [])[0]?.id ?? ""
  );
  const [autoPlayVideo, setAutoPlayVideo] = useState<boolean>(false);
  const activeVideo =
    filteredKslVideos.find((v) => v.id === activeVideoId) ?? filteredKslVideos[0] ?? null;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = playbackRate;
    if (autoPlayVideo) {
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  }, [playbackRate, activeVideo?.id, autoPlayVideo]);

  const activeVariety = useMemo(
    () => OPEN_CORPUS_INDEX.stagedVarieties.find((v) => v.id === selectedId),
    [selectedId]
  );
  const filteredEntries = useMemo(() => {
    const entries = activeVariety?.sampleEntries ?? [];
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.english.toLowerCase().includes(q) ||
        e.translation.toLowerCase().includes(q) ||
        e.context.toLowerCase().includes(q)
    );
  }, [activeVariety, deferredQuery]);

  const { masenoCount, humanBibleCount } = useMemo(() => {
    let maseno = 0;
    let bible = 0;
    for (const v of kslVideos) {
      if (v.category === "maseno-stickman") maseno++;
      else if (v.category === "human-sign-bible") bible++;
    }
    return { masenoCount: maseno, humanBibleCount: bible };
  }, [kslVideos]);

  return (
    <section className="mt-10 space-y-6">
      {/* 1. Kenyan Sign Language (KSL) — Video Library & Storybooks */}
      <div className="rounded-2xl border border-kenya-green/30 bg-bg-card p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/60 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-kenya-green flex items-center gap-1.5">
              <Hand className="h-3.5 w-3.5" />
              Kenyan Sign Language (KSL)
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)] mt-1">
              Watch Kenyan Sign Language Videos &amp; Storybooks
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Practice signs with slow-motion playback (0.5x–1x) using Maseno University stickman sign videos and human KSL signers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 min-w-0 max-w-full">
            {kslVideos.length > 0 && (
              <span className="whitespace-nowrap rounded-full border border-kenya-green/30 bg-kenya-green/10 px-3 py-1 text-xs font-semibold text-kenya-green">
                {kslVideos.length.toLocaleString()} playable videos
              </span>
            )}
            <Link
              href="/tools/learn/ksl/"
              prefetch={false}
              className="whitespace-nowrap inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold hover:bg-gold/20 transition-colors"
            >
              Open Full KSL Studio <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Playable HTML5 <video> Library */}
        {kslVideos.length > 0 ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all" as const, label: `All Signs (${kslVideos.length})` },
                  { id: "maseno-stickman" as const, label: `Stickman Signs (${masenoCount})` },
                  { id: "human-sign-bible" as const, label: `Human Signers (${humanBibleCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setKslTab(tab.id);
                      setVisibleKslCount(KSL_PAGE_SIZE);
                    }}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                      kslTab === tab.id
                        ? "border-kenya-green bg-kenya-green text-white"
                        : "border-border bg-bg-elevated text-text-secondary hover:border-kenya-green/50"
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
                  onChange={(e) => {
                    setKslQuery(e.target.value);
                    setVisibleKslCount(KSL_PAGE_SIZE);
                  }}
                  placeholder="Search a KSL sign..."
                  className="w-full rounded-lg border border-border bg-bg-elevated pl-8 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-kenya-green"
                />
              </div>
            </div>

            {activeVideo && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-xl border border-border bg-bg-elevated/40 p-3.5">
                <div className="lg:col-span-7 space-y-2.5">
                  <video
                    ref={videoRef}
                    key={activeVideo.id}
                    src={activeVideo.videoUrl}
                    controls
                    autoPlay={autoPlayVideo}
                    playsInline
                    loop
                    preload="auto"
                    onLoadedData={(e) => {
                      e.currentTarget.playbackRate = playbackRate;
                      if (autoPlayVideo) e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full max-h-80 rounded-lg bg-black object-contain"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-text-primary">{activeVideo.title}</p>
                      <p className="text-[0.7rem] text-text-muted">{activeVideo.source}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[0.68rem] text-text-muted mr-1">Speed:</span>
                      {[0.5, 0.75, 1].map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => setPlaybackRate(spd)}
                          className={`rounded-md border px-2 py-0.5 text-[0.7rem] font-mono cursor-pointer ${
                            playbackRate === spd
                              ? "border-kenya-green bg-kenya-green/15 text-kenya-green font-bold"
                              : "border-border bg-bg-card text-text-secondary"
                          }`}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>
                  </div>
                  {(activeVideo.reference || activeVideo.transcript) && (
                    <div className="rounded-lg border border-border bg-bg-card p-2.5 space-y-1">
                      {activeVideo.reference && (
                        <p className="text-[0.68rem] font-bold uppercase tracking-wider text-kenya-green">
                          Passage Context · {activeVideo.reference}
                        </p>
                      )}
                      {activeVideo.transcript && (
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {activeVideo.transcript}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 flex flex-col max-h-80">
                  <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                    {filteredKslVideos.slice(0, visibleKslCount).map((vid) => {
                      const isCurrent = vid.id === activeVideo.id;
                      return (
                        <button
                          key={vid.id}
                          type="button"
                          onClick={() => { setAutoPlayVideo(true); setActiveVideoId(vid.id); }}
                          className={`w-full text-left rounded-lg border p-2.5 transition-all cursor-pointer ${
                            isCurrent
                              ? "border-kenya-green bg-kenya-green/10"
                              : "border-border bg-bg-card hover:border-kenya-green/40"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-text-primary line-clamp-1">
                              {vid.title}
                            </span>
                            <span className="text-[0.62rem] font-semibold uppercase text-kenya-green shrink-0">
                              {vid.category === "maseno-stickman" ? "Stickman" : "Human"}
                            </span>
                          </div>
                          {(vid.reference || vid.transcript) && (
                            <p className="text-[0.68rem] text-text-muted line-clamp-1 mt-0.5">
                              {vid.transcript || vid.reference}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {visibleKslCount < filteredKslVideos.length && (
                    <button
                      type="button"
                      onClick={() => setVisibleKslCount((n) => n + KSL_PAGE_SIZE)}
                      className="mt-2 w-full rounded-lg border border-kenya-green/40 bg-kenya-green/10 py-1.5 text-xs font-semibold text-kenya-green hover:bg-kenya-green/20 cursor-pointer"
                    >
                      Load More ({filteredKslVideos.length - visibleKslCount} more videos)
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-kenya-green/35 bg-bg-elevated/40 p-3.5 text-xs text-text-secondary flex items-start gap-2.5">
            <Film className="h-4 w-4 text-kenya-green shrink-0 mt-0.5" />
            <p>
              Kenyan Sign Language videos are being updated — check back shortly.
            </p>
          </div>
        )}
      </div>

      {/* 2. More Kenyan Languages — Starter Phrasebooks (Kinubi, Kuria, Kenyan Maay, Yaaku) */}
      {OPEN_CORPUS_INDEX.stagedVarieties.length > 0 && (
        <div className="rounded-2xl border border-gold/25 bg-bg-card p-5 sm:p-6 space-y-4">
          <div className="border-b border-border/60 pb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              More Kenyan Languages
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)] mt-1">
              Starter Phrasebooks for Emerging Kenyan Languages
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Explore everyday words and phrases in Kinubi, Kuria, Kenyan Maay, and Yaaku while full multi-unit courses are being expanded.
            </p>
          </div>

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
                  <p className="text-xs font-bold">{v.name}</p>
                  <p className="text-[0.68rem] text-text-muted mt-0.5">
                    {v.totalEntries} phrases · {v.counties.slice(0, 2).join(", ")}
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
                    {activeVariety.name} ({activeVariety.nativeName}) Phrasebook
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
                    placeholder={`Search ${activeVariety.name} phrases...`}
                    className="w-full rounded-lg border border-border bg-bg-card pl-8 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {activeVariety.grammarNotes && activeVariety.grammarNotes.length > 0 && (
                <div className="rounded-lg border border-gold/25 bg-bg-card p-3 space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">Grammar &amp; Usage Notes</p>
                  <ul className="space-y-1 text-xs text-text-secondary list-disc pl-4">
                    {activeVariety.grammarNotes.slice(0, 4).map((note, nIdx) => (
                      <li key={nIdx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto pr-1">
                {filteredEntries.map((entry, idx) => (
                  <div
                    key={`${activeVariety.id}-${idx}`}
                    className="rounded-lg border border-border bg-bg-card p-2.5 text-xs space-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <p className="font-bold text-text-primary">{entry.translation}</p>
                      {entry.category && (
                        <span className="rounded bg-bg-elevated px-1.5 py-0.5 text-[10px] text-text-muted capitalize shrink-0">
                          {entry.category}
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary">{entry.english}</p>
                    {entry.context && (
                      <p className="text-[11px] text-text-muted italic line-clamp-2">{entry.context}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
