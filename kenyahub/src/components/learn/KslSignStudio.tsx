"use client";

import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  Flame,
  Hand,
  HelpCircle,
  Pause,
  Play,
  Repeat,
  RotateCcw,
  Search,
  Sparkles,
  XCircle,
} from "lucide-react";
import {
  KSL_ALPHABET,
  KSL_GRAMMAR_NOTES,
  KSL_LESSONS,
  KSL_NUMBERS,
} from "@/data/ksl-starter";
import type { KslStorybookItem, KslVideoItem } from "@/lib/open-corpus";
import { loadKslIndex } from "@/lib/learning-shards";

interface R2KslSignMeta {
  id: string;
  gloss: string;
  frameCount: number;
  fps: number;
  poseUrl: string;
  source: string;
}

interface R2PoseSequence {
  id: string;
  gloss: string;
  fps: number;
  landmarks: number[];
  frames: [number, number][][];
}

type VideoFilterTab = "all" | "maseno-stickman" | "human-sign-bible" | "saved";
const VIDEOS_PER_PAGE = 40;

interface KslSignStudioProps {
  initialVideos?: KslVideoItem[];
  storybooks?: KslStorybookItem[];
}

function ensureFullDurationKslUrl(v: { category?: string; videoUrl?: string }): string {
  return String(v?.videoUrl || "");
}

export default function KslSignStudio({
  initialVideos = [],
  storybooks = [],
}: KslSignStudioProps) {
  const [tab, setTab] = useState<"videos" | "lessons" | "quiz" | "alphabet" | "grammar">(
    initialVideos.length > 0 ? "videos" : "lessons"
  );

  const [activeUnitId, setActiveUnitId] = useState<string>(KSL_LESSONS[0].id);
  const [completedUnits, setCompletedUnits] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem("kh-ksl-completed-units");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
    } catch {
      return [];
    }
  });
  const toggleUnitComplete = useCallback((unitId: string) => {
    setCompletedUnits((prev) => {
      const next = prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId];
      try {
        window.localStorage.setItem("kh-ksl-completed-units", JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);


  // Live full KSL video & pose catalog loaded from /ksl-index.json
  const [kslVideos, setKslVideos] = useState<KslVideoItem[]>(initialVideos);
  const [videoTab, setVideoTab] = useState<VideoFilterTab>("all");
  const [videoQuery, setVideoQuery] = useState("");
  const deferredVideoQuery = useDeferredValue(videoQuery);
  const [videoLetter, setVideoLetter] = useState<string>("ALL");
  const [videoPage, setVideoPage] = useState<number>(1);
  const [activeVideoId, setActiveVideoId] = useState<string>(initialVideos[0]?.id ?? "");
  const [autoPlayVideo, setAutoPlayVideo] = useState<boolean>(false);
  const selectSignVideo = (id: string) => {
    setAutoPlayVideo(true);
    setActiveVideoId(id);
  };
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [loopVideo, setLoopVideo] = useState<boolean>(true);
  const [savedVideoIds, setSavedVideoIds] = useState<string[]>([]);
  const [kslStorybooks, setKslStorybooks] = useState<KslStorybookItem[]>(storybooks);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const quizVideoRef = useRef<HTMLVideoElement | null>(null);

  const [r2Signs, setR2Signs] = useState<R2KslSignMeta[]>([]);
  const [activeR2Pose, setActiveR2Pose] = useState<R2PoseSequence | null>(null);

  // Visual Quiz state (supports both Real KSL Video Quiz and Guided Skeleton Quiz)
  const [quizMode, setQuizMode] = useState<"video" | "skeleton">(initialVideos.length >= 4 ? "video" : "skeleton");
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizPicked, setQuizPicked] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);

  // Interactive Word-to-Fingerspelling Speller state
  const [spellInput, setSpellInput] = useState("JAMBO");
  const [spellStep, setSpellStep] = useState(0);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("kenyahub_ksl_saved_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSavedVideoIds(parsed.filter((x): x is string => typeof x === "string"));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleSaveVideo = (id: string) => {
    setSavedVideoIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev];
      try {
        window.localStorage.setItem("kenyahub_ksl_saved_v1", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    let active = true;
    loadKslIndex().then((d) => {
      if (!active || !d) return;
      if (Array.isArray(d.videos) && d.videos.length > 0) {
        const vids = d.videos as KslVideoItem[];
        setKslVideos(vids);
        setActiveVideoId((prev) => prev || vids[0].id);
      }
      if (Array.isArray(d.signs)) {
        setR2Signs(d.signs as R2KslSignMeta[]);
      }
      if (Array.isArray(d.storybooks) && d.storybooks.length > 0) {
        setKslStorybooks(d.storybooks as KslStorybookItem[]);
      }
    });
    return () => { active = false; };
  }, []);

  const savedVideoIdSet = useMemo(() => new Set(savedVideoIds), [savedVideoIds]);

  const availableVideoLetters = useMemo(() => {
    const set = new Set<string>();
    for (const v of kslVideos) {
      if (videoTab === "saved" && !savedVideoIdSet.has(v.id)) continue;
      if (videoTab !== "all" && videoTab !== "saved" && v.category !== videoTab) continue;
      const ch = ((v.gloss || v.title || "").trim()[0] || "").toUpperCase();
      if (ch >= "A" && ch <= "Z") set.add(ch);
    }
    return Array.from(set).sort();
  }, [kslVideos, videoTab, savedVideoIdSet]);

  const filteredVideos = useMemo(() => {
    const q = deferredVideoQuery.trim().toLowerCase();
    return kslVideos.filter((v) => {
      if (videoTab === "saved" && !savedVideoIdSet.has(v.id)) return false;
      if (videoTab !== "all" && videoTab !== "saved" && v.category !== videoTab) return false;
      if (videoLetter !== "ALL") {
        const ch = ((v.gloss || v.title || "").trim()[0] || "").toUpperCase();
        if (ch !== videoLetter) return false;
      }
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.gloss.toLowerCase().includes(q) ||
        (v.reference ?? "").toLowerCase().includes(q) ||
        (v.transcript ?? "").toLowerCase().includes(q)
      );
    });
  }, [kslVideos, videoTab, videoLetter, deferredVideoQuery, savedVideoIdSet]);

  const activeVideo = useMemo(
    () => filteredVideos.find((v) => v.id === activeVideoId) ?? filteredVideos[0] ?? null,
    [filteredVideos, activeVideoId]
  );

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = playbackRate;
    if (autoPlayVideo) {
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  }, [playbackRate, activeVideo?.id, autoPlayVideo]);

  const masenoCount = useMemo(
    () => kslVideos.filter((v) => v.category === "maseno-stickman").length,
    [kslVideos]
  );
  const humanCount = useMemo(
    () => kslVideos.filter((v) => v.category === "human-sign-bible").length,
    [kslVideos]
  );

  const quizVideoPool = useMemo(() => {
    const clean = kslVideos.filter((v) => v.videoUrl && (v.gloss || v.title).trim().length >= 2);
    const vocabFirst = clean.filter((v) => v.category === "maseno-stickman");
    return vocabFirst.length >= 4 ? vocabFirst : clean;
  }, [kslVideos]);

  const activeQuizVideo = quizVideoPool.length > 0 ? quizVideoPool[quizIdx % quizVideoPool.length] : null;
  const quizVideoOptions = useMemo(() => {
    if (!activeQuizVideo || quizVideoPool.length < 4) return [];
    const targetLabel = (activeQuizVideo.gloss || activeQuizVideo.title).trim();
    const others = quizVideoPool.filter((v) => (v.gloss || v.title).trim().toLowerCase() !== targetLabel.toLowerCase());
    const start = others.length > 3 ? (quizIdx * 5) % (others.length - 3) : 0;
    const distractors = others.slice(start, start + 3);
    return [activeQuizVideo, ...distractors].sort((a, b) =>
      (a.gloss || a.title).localeCompare(b.gloss || b.title)
    );
  }, [activeQuizVideo, quizVideoPool, quizIdx]);

  useEffect(() => {
    if (quizVideoRef.current) {
      quizVideoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, activeQuizVideo?.id]);

  const handleQuizAnswer = (pickedId: string) => {
    if (quizPicked) return;
    setQuizPicked(pickedId);
    setQuizTotal((n) => n + 1);
    const expectedId = activeQuizVideo ? activeQuizVideo.id : "";
    if (pickedId === expectedId) {
      setQuizScore((s) => s + 1);
      setQuizStreak((st) => st + 1);
    } else {
      setQuizStreak(0);
    }
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/tools/learn/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to All Kenyan Languages
        </Link>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-lg border border-kenya-green/30 bg-kenya-green/10 px-2.5 py-1 font-semibold text-kenya-green">
            Official Kenyan Sign Language · Constitution Art. 7(3)(b)
          </span>
          <span className="rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 font-semibold text-gold">
            {kslVideos.length.toLocaleString()} Real KSL Videos · {KSL_LESSONS.length} Course Units
          </span>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-3">
        {[
          { id: "videos" as const, label: `KSL Video Library (${kslVideos.length})`, icon: Film },
          { id: "lessons" as const, label: `Course Units (${completedUnits.length}/${KSL_LESSONS.length})`, icon: BookOpen },
          { id: "quiz" as const, label: "Visual Sign Quiz", icon: Sparkles },
          { id: "alphabet" as const, label: "A–Z & Numbers", icon: BookOpen },
          { id: "grammar" as const, label: "KSL Grammar & Culture", icon: HelpCircle },
        ].map((item) => {
          const Icon = item.icon;
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                active
                  ? "bg-gold text-black"
                  : "border border-border bg-bg-card text-text-secondary hover:border-gold/50 hover:text-text-primary"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* TAB 0: REAL KSL VIDEO LIBRARY */}
      {tab === "videos" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all" as const, label: `All Videos (${kslVideos.length})` },
                { id: "maseno-stickman" as const, label: `Sign Vocabulary (${masenoCount})` },
                { id: "human-sign-bible" as const, label: `Signed Passages (${humanCount})` },
                { id: "saved" as const, label: `Saved (${savedVideoIds.length})` },
              ].map((ft) => (
                <button
                  key={ft.id}
                  type="button"
                  onClick={() => {
                    setVideoTab(ft.id);
                    setVideoPage(1); setVideoLetter('ALL');
                  }}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    videoTab === ft.id
                      ? "border-kenya-green bg-kenya-green text-white"
                      : "border-border bg-bg-card text-text-secondary hover:border-kenya-green/50"
                  }`}
                >
                  {ft.label}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="h-3.5 w-3.5 text-text-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={videoQuery}
                onChange={(e) => {
                  setVideoQuery(e.target.value);
                  setVideoPage(1);
                }}
                placeholder="Search KSL gloss, passage, transcript..."
                className="w-full rounded-lg border border-border bg-bg-card pl-8 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-kenya-green"
              />
            </div>
          </div>

          {availableVideoLetters.length > 1 && (
            <div className="flex flex-wrap items-center gap-1">
              {["ALL", ...availableVideoLetters].map((ltr) => {
                const active = videoLetter === ltr;
                return (
                  <button
                    key={ltr}
                    type="button"
                    onClick={() => {
                      setVideoLetter(ltr);
                      setVideoPage(1);
                    }}
                    className={`min-w-[28px] rounded-md border px-2 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                      active
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-border bg-bg-card text-text-secondary hover:border-gold/50 hover:text-text-primary"
                    }`}
                  >
                    {ltr === "ALL" ? "All" : ltr}
                  </button>
                );
              })}
            </div>
          )}

          {activeVideo ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-2xl border border-kenya-green/30 bg-bg-card p-4">
              <div className="lg:col-span-7 space-y-3">
                <video
                  ref={videoRef}
                  key={activeVideo.id}
                  src={ensureFullDurationKslUrl(activeVideo)}
                  controls
                  autoPlay={autoPlayVideo}
                  playsInline
                  loop={loopVideo}
                  preload="metadata"
                  onLoadedData={(e) => {
                    e.currentTarget.playbackRate = playbackRate;
                    if (autoPlayVideo) {
                      e.currentTarget.play().catch(() => {});
                    }
                  }}
                  className="w-full max-h-96 rounded-xl bg-black object-contain"
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold text-text-primary break-words">{activeVideo.title}</h2>
                    <a
                      href={activeVideo.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.72rem] text-gold hover:underline"
                    >
                      {activeVideo.source} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => toggleSaveVideo(activeVideo.id)}
                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.7rem] font-semibold cursor-pointer ${
                        savedVideoIdSet.has(activeVideo.id)
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-border bg-bg-elevated text-text-secondary hover:text-gold"
                      }`}
                    >
                      <Bookmark className="h-3 w-3" />
                      {savedVideoIdSet.has(activeVideo.id) ? "Saved" : "Save"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoopVideo((l) => !l)}
                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.7rem] font-semibold cursor-pointer ${
                        loopVideo
                          ? "border-kenya-green bg-kenya-green/15 text-kenya-green"
                          : "border-border bg-bg-elevated text-text-secondary"
                      }`}
                    >
                      <Repeat className="h-3 w-3" />
                      Loop
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const idx = filteredVideos.findIndex((v) => v.id === activeVideo.id);
                        if (idx > 0) setActiveVideoId(filteredVideos[idx - 1].id);
                      }}
                      className="rounded-md border border-border bg-bg-elevated p-1 text-text-secondary hover:text-gold cursor-pointer"
                      aria-label="Previous sign video"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const idx = filteredVideos.findIndex((v) => v.id === activeVideo.id);
                        if (idx >= 0 && idx + 1 < filteredVideos.length) setActiveVideoId(filteredVideos[idx + 1].id);
                      }}
                      className="rounded-md border border-border bg-bg-elevated p-1 text-text-secondary hover:text-gold cursor-pointer"
                      aria-label="Next sign video"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-[0.68rem] text-text-muted ml-1 mr-0.5">Speed:</span>
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
                {(activeVideo.reference || activeVideo.transcript) && (
                  <div className="rounded-xl border border-border bg-bg-elevated/50 p-3 space-y-1">
                    {activeVideo.reference && (
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-kenya-green">
                        Passage Context · {activeVideo.reference}
                      </p>
                    )}
                    {activeVideo.transcript && (
                      <p className="text-xs text-text-secondary leading-relaxed">{activeVideo.transcript}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col max-h-[28rem]">
                <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                  {filteredVideos
                    .slice((videoPage - 1) * VIDEOS_PER_PAGE, videoPage * VIDEOS_PER_PAGE)
                    .map((vid) => {
                    const isCurrent = vid.id === activeVideo.id;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => selectSignVideo(vid.id)}
                        className={`w-full text-left rounded-lg border p-2.5 transition-all cursor-pointer ${
                          isCurrent
                            ? "border-kenya-green bg-kenya-green/10"
                            : "border-border bg-bg-elevated/40 hover:border-kenya-green/40"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-text-primary line-clamp-1">{vid.title}</span>
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
                {filteredVideos.length > VIDEOS_PER_PAGE && (
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-border/60 mt-2 text-xs">
                    <button
                      type="button"
                      disabled={videoPage <= 1}
                      onClick={() => setVideoPage((p) => Math.max(1, p - 1))}
                      className="rounded-lg border border-border bg-bg-elevated px-3 py-1.5 font-semibold text-text-primary disabled:opacity-40 cursor-pointer"
                    >
                      ← Prev
                    </button>
                    <span className="text-text-muted font-medium">
                      Page {videoPage} of {Math.max(1, Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE))}
                    </span>
                    <button
                      type="button"
                      disabled={videoPage * VIDEOS_PER_PAGE >= filteredVideos.length}
                      onClick={() => setVideoPage((p) => p + 1)}
                      className="rounded-lg border border-kenya-green/40 bg-kenya-green/10 px-3 py-1.5 font-semibold text-kenya-green disabled:opacity-40 cursor-pointer"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-text-muted">
              No KSL videos match your search filter.
            </div>
          )}
        </div>
      )}

      {/* TAB 1: SIGN STUDIO */}
            {/* TAB: STRUCTURED KSL COURSE UNITS (5 UNITS · 20 PHRASES) */}
      {tab === "lessons" && (() => {
        const activeUnit = KSL_LESSONS.find((u) => u.id === activeUnitId) || KSL_LESSONS[0];
        const isDone = completedUnits.includes(activeUnit.id);
        const pct = Math.round((completedUnits.length / KSL_LESSONS.length) * 100);
        return (
          <div className="space-y-4">
            {/* Course Progress Bar */}
            <div className="rounded-2xl border border-gold/25 bg-bg-card p-4 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    Structured KSL Curriculum (5 Units · 20 Everyday Phrases)
                  </h3>
                  <p className="text-xs text-text-muted">
                    Learn authentic Kenyan Sign Language sentence order (Topic–Comment / OSV) with Swahili equivalents and facial grammar cues.
                  </p>
                </div>
                <span className="rounded-lg border border-kenya-green/40 bg-kenya-green/10 px-2.5 py-1 text-xs font-bold text-kenya-green">
                  {completedUnits.length}/{KSL_LESSONS.length} Units ({pct}%)
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-bg-elevated overflow-hidden">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* Unit Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {KSL_LESSONS.map((unit) => {
                const selected = unit.id === activeUnit.id;
                const unitDone = completedUnits.includes(unit.id);
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setActiveUnitId(unit.id)}
                    className={`rounded-xl border p-3 text-left transition-all cursor-pointer ${
                      selected
                        ? "border-gold bg-gold/15"
                        : "border-border bg-bg-card hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 text-[10px] font-bold uppercase tracking-wider">
                      <span className={selected ? "text-gold" : "text-text-muted"}>
                        Unit {unit.unitNumber} · {unit.level}
                      </span>
                      {unitDone && <CheckCircle2 className="h-3.5 w-3.5 text-kenya-green shrink-0" />}
                    </div>
                    <p className="text-xs font-bold text-text-primary mt-1">{unit.title}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{unit.swahiliTitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Unit Detail */}
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="inline-block rounded-md bg-gold/15 px-2 py-0.5 text-[11px] font-bold text-gold">
                    Unit {activeUnit.unitNumber} · {activeUnit.level}
                  </span>
                  <h3 className="text-base font-bold text-text-primary">
                    {activeUnit.title} <span className="text-text-muted font-normal">({activeUnit.swahiliTitle})</span>
                  </h3>
                  <p className="text-xs text-text-secondary max-w-2xl">{activeUnit.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleUnitComplete(activeUnit.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                    isDone
                      ? "border border-kenya-green/50 bg-kenya-green/15 text-kenya-green"
                      : "bg-gold text-black hover:opacity-90"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {isDone ? "Completed" : "Mark Unit Complete"}
                </button>
              </div>

              {/* Conversational Phrases & KSL Gloss Order */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeUnit.phrases.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-bg-elevated/50 p-3.5 space-y-1.5"
                  >
                    <p className="text-sm font-bold text-text-primary">{phrase.english}</p>
                    <p className="text-xs text-text-secondary">Kiswahili: {phrase.swahili}</p>
                    <div className="rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1.5 font-mono text-xs font-bold text-gold">
                      KSL Gloss: {phrase.kslGloss}
                    </div>
                    <p className="text-[11px] text-kenya-green leading-relaxed">
                      <strong>Facial / Non-Manual:</strong> {phrase.nonManual}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

{/* TAB 2: VISUAL SIGN QUIZ (Real KSL Videos) */}
      {tab === "quiz" && (
        <div className="max-w-xl mx-auto rounded-2xl border border-gold/25 bg-bg-card p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="rounded-lg border border-kenya-green bg-kenya-green/15 px-2.5 py-1 font-bold text-kenya-green">
              Real KSL Video Quiz ({quizVideoPool.length} signs)
            </span>
            <div className="flex items-center gap-2 font-mono text-text-secondary">
              {quizStreak >= 2 && (
                <span className="inline-flex items-center gap-0.5 text-gold font-bold">
                  <Flame className="h-3.5 w-3.5" /> {quizStreak}
                </span>
              )}
              <span>Score: {quizScore}/{quizTotal}</span>
            </div>
          </div>

          {activeQuizVideo && quizVideoOptions.length >= 4 ? (
            <>
              <div className="rounded-xl border border-border bg-black overflow-hidden">
                <video
                  ref={quizVideoRef}
                  key={activeQuizVideo.id}
                  src={ensureFullDurationKslUrl(activeQuizVideo)}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-72 object-contain"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-muted">
                <span>Watch the KSL sign and pick the matching word:</span>
                <div className="flex items-center gap-1">
                  {[0.5, 0.75, 1].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setPlaybackRate(spd)}
                      className={`rounded border px-1.5 py-0.5 text-[10px] font-mono cursor-pointer ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quizVideoOptions.map((opt) => {
                  const isCorrect = opt.id === activeQuizVideo.id;
                  const isPicked = quizPicked === opt.id;
                  let cls = "border-border bg-bg-elevated/60 text-text-primary hover:border-gold";
                  if (quizPicked) {
                    if (isCorrect) cls = "border-kenya-green bg-kenya-green/15 text-kenya-green";
                    else if (isPicked) cls = "border-kenya-red bg-kenya-red/15 text-kenya-red";
                  }
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleQuizAnswer(opt.id)}
                      className={`rounded-xl border p-3 text-left text-xs font-bold flex items-center justify-between cursor-pointer ${cls}`}
                    >
                      <span className="truncate">{opt.gloss || opt.title}</span>
                      {quizPicked && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0" />}
                      {quizPicked && isPicked && !isCorrect && <XCircle className="h-4 w-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <p className="text-xs text-text-muted text-center py-6">
              Loading KSL video quiz pool...
            </p>
          )}

          {quizPicked && (
            <button
              type="button"
              onClick={() => {
                setQuizPicked(null);
                setQuizIdx((i) => i + 1);
              }}
              className="w-full rounded-xl bg-gold py-2.5 text-xs font-bold text-black cursor-pointer"
            >
              Next KSL Sign →
            </button>
          )}
        </div>
      )}

      {/* TAB 3: MANUAL ALPHABET A-Z + INTERACTIVE WORD SPELLER */}
      {tab === "alphabet" && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/25 bg-bg-card p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-text-primary">Practice Fingerspelling Any Name or Word</h3>
                <p className="text-xs text-text-muted">Type a word (e.g. NAIROBI, JAMBO, or your name) to see each KSL handshape step by step.</p>
              </div>
              <input
                type="text"
                value={spellInput}
                onChange={(e) => {
                  setSpellInput(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 24));
                  setSpellStep(0);
                }}
                placeholder="Type a word..."
                className="w-full sm:w-56 rounded-xl border border-border bg-bg-elevated px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gold focus:border-gold focus:outline-none"
              />
            </div>
            {(() => {
              const letters = spellInput.toUpperCase().split("").filter((ch) => /[A-Z]/.test(ch));
              const safeIdx = letters.length > 0 ? Math.min(spellStep, letters.length - 1) : 0;
              const activeLetter = letters[safeIdx];
              const cueObj = KSL_ALPHABET.find((a) => a.letter === activeLetter);
              if (letters.length === 0) return null;
              return (
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {letters.map((ch, idx) => (
                      <button
                        key={`${ch}-${idx}`}
                        type="button"
                        onClick={() => setSpellStep(idx)}
                        className={`h-9 w-9 rounded-lg border font-bold text-sm transition-all cursor-pointer ${
                          idx === safeIdx
                            ? "border-gold bg-gold text-black scale-105"
                            : "border-border bg-bg-elevated text-text-primary hover:border-gold/60"
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                  {cueObj && (
                    <div className="rounded-xl border border-border bg-bg-elevated/60 p-3 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 min-w-0">
                      <div className="text-xs">
                        <span className="font-bold text-gold">Letter {cueObj.letter}:</span>{" "}
                        <span className="text-text-secondary">{cueObj.cue}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSpellStep((i) => (i + 1) % letters.length)}
                        className="shrink-0 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold hover:bg-gold/20 cursor-pointer"
                      >
                        Next Letter →
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {KSL_ALPHABET.map((item) => (
            <div key={item.letter} className="rounded-xl border border-border bg-bg-card p-3 flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center font-bold text-gold shrink-0">
                {item.letter}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{item.cue}</p>
            </div>
          ))}
          </div>

          {/* KSL Numbers 0–1,000 */}
          <div className="rounded-2xl border border-kenya-green/30 bg-bg-card p-4 space-y-3">
            <div>
              <h3 className="text-sm font-bold text-kenya-green">KSL Numbers (0 – 1,000)</h3>
              <p className="text-xs text-text-muted">
                Pay close attention to palm orientation and finger-thumb contact for 3 vs 6–9.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {KSL_NUMBERS.map((num) => (
                <div key={num.number} className="rounded-xl border border-border bg-bg-elevated/50 p-3 flex items-start gap-3">
                  <div className="min-w-11 h-9 px-2 rounded-lg bg-kenya-green/15 border border-kenya-green/30 flex items-center justify-center font-bold text-kenya-green shrink-0 text-xs">
                    {num.number}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-text-primary">{num.swahili}</p>
                    <p className="text-[11px] text-text-secondary leading-relaxed">{num.cue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: GRAMMAR, STORYBOOKS & DEAF CULTURE */}
      {tab === "grammar" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KSL_GRAMMAR_NOTES.map((note) => (
              <div key={note.title} className="rounded-2xl border border-border bg-bg-card p-4 space-y-2">
                <h3 className="text-sm font-bold text-gold font-[family-name:var(--font-outfit)]">{note.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
          {kslStorybooks.length > 0 && (
            <div className="rounded-2xl border border-kenya-green/30 bg-bg-card p-4 space-y-3">
              <h3 className="text-sm font-bold text-kenya-green">Kenyan Sign Language Storybooks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {kslStorybooks.map((sb) => (
                  <a
                    key={sb.id}
                    href={sb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-bg-elevated/50 p-3 hover:border-kenya-green/60 transition-colors space-y-1"
                  >
                    <p className="text-xs font-bold text-text-primary flex items-center justify-between gap-2">
                      <span>{sb.title}</span>
                      <ExternalLink className="h-3 w-3 text-gold shrink-0" />
                    </p>
                    <p className="text-[11px] text-text-secondary line-clamp-2">{sb.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
