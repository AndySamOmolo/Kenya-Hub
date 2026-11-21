"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Film, Hand, Search } from "lucide-react";
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

  const masenoCount = kslVideos.filter((v) => v.category === "maseno-stickman").length;
  const humanBibleCount = kslVideos.filter((v) => v.category === "human-sign-bible").length;

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
          {kslVideos.length > 0 && (
            <span className="rounded-full border border-kenya-green/30 bg-kenya-green/10 px-3 py-1 text-xs font-semibold text-kenya-green shrink-0">
              {kslVideos.length} playable videos
            </span>
          )}
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
                    onClick={() => setKslTab(tab.id)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
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
                  onChange={(e) => setKslQuery(e.target.value)}
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
                    playsInline
                    loop
                    preload="metadata"
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
                  {activeVideo.transcript && (
                    <p className="text-xs text-text-secondary rounded-lg border border-border bg-bg-card p-2.5 leading-relaxed">
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
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-kenya-green/35 bg-bg-elevated/40 p-3.5 text-xs text-text-secondary flex items-start gap-2.5">
            <Film className="h-4 w-4 text-kenya-green shrink-0 mt-0.5" />
            <p>
              Maseno stickman sign clips and human KSL videos appear right here automatically after syncing media to Cloudflare R2.
            </p>
          </div>
        )}
            </div>
          </div>
        )}
      </div>

      {/* 2. More Kenyan Languages — Starter Phrasebooks (Kinubi, Kuria, Kenyan Maay) */}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto pr-1">
                {filteredEntries.map((entry, idx) => (
                  <div
                    key={`${activeVariety.id}-${idx}`}
                    className="rounded-lg border border-border bg-bg-card p-2.5 text-xs"
                  >
                    <p className="font-bold text-text-primary">{entry.translation}</p>
                    <p className="text-text-secondary mt-0.5">{entry.english}</p>
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
