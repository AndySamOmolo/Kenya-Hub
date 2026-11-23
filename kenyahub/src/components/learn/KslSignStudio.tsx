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
  KSL_STARTER_SIGNS,
  type KslStarterSign,
} from "@/data/ksl-starter";
import { OPEN_CORPUS_INDEX, type KslStorybookItem, type KslVideoItem } from "@/lib/open-corpus";
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

// MediaPipe upper-body bone pairs mapped onto UPPER_BODY_INDICES:
// [0, 2, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24]
const UPPER_BONES: [number, number][] = [
  [5, 6],   // shoulders
  [5, 7],   // left upper arm
  [7, 9],   // left forearm
  [9, 11],  // left hand pinky
  [9, 13],  // left hand index
  [6, 8],   // right upper arm
  [8, 10],  // right forearm
  [10, 12], // right hand pinky
  [10, 14], // right hand index
  [5, 15],  // left torso
  [6, 16],  // right torso
  [15, 16], // hips
];

function drawProceduralSkeleton(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  motion: KslStarterSign["motionType"]
) {
  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(212, 175, 55, 0.10)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.44, Math.min(w, h) * 0.36, 0, Math.PI * 2);
  ctx.stroke();

  const phase = t * Math.PI * 2;
  const sin = Math.sin(phase);
  const cos = Math.cos(phase);

  const headX = w * 0.5 + (motion === "head-shake" ? sin * 10 : 0);
  const headY = h * 0.24 + (motion === "head-nod" ? Math.abs(sin) * 8 : 0);
  const neckX = w * 0.5;
  const lShX = w * 0.34;
  const rShX = w * 0.66;
  const shY = h * 0.38;
  const lHipX = w * 0.39;
  const rHipX = w * 0.61;
  const hipY = h * 0.78;

  let lElbX = w * 0.27, lElbY = h * 0.56, lWriX = w * 0.32, lWriY = h * 0.70;
  let rElbX = w * 0.73, rElbY = h * 0.56, rWriX = w * 0.68, rWriY = h * 0.70;

  if (motion === "wave") {
    rElbX = w * 0.74; rElbY = h * 0.44;
    rWriX = w * 0.68 + sin * 22; rWriY = h * 0.25 + cos * 6;
  } else if (motion === "chin-forward") {
    rElbX = w * 0.68; rElbY = h * 0.52;
    rWriX = w * 0.52 + (0.5 - 0.5 * cos) * 34;
    rWriY = h * 0.32 + (0.5 - 0.5 * cos) * 26;
  } else if (motion === "chest-circle") {
    rElbX = w * 0.68; rElbY = h * 0.56;
    rWriX = w * 0.50 + cos * 16;
    rWriY = h * 0.50 + sin * 14;
  } else if (motion === "forehead-salute") {
    rElbX = w * 0.71; rElbY = h * 0.42;
    rWriX = w * 0.55 + Math.abs(sin) * 14;
    rWriY = h * 0.19;
  } else if (motion === "chin-tap") {
    rElbX = w * 0.68; rElbY = h * 0.48;
    rWriX = w * 0.53 + Math.abs(sin) * 10;
    rWriY = h * 0.32;
  } else if (motion === "mouth-tap") {
    rElbX = w * 0.67; rElbY = h * 0.50;
    rWriX = w * 0.52 + Math.abs(sin) * 12;
    rWriY = h * 0.29;
  } else if (motion === "cup-to-mouth") {
    rElbX = w * 0.70; rElbY = h * 0.50;
    rWriX = w * 0.54 + (1 - Math.abs(sin)) * 10;
    rWriY = h * 0.33 - Math.abs(sin) * 8;
  } else if (motion === "hands-together") {
    const lift = Math.sin(phase) * 18;
    lElbX = w * 0.32; lElbY = h * 0.58 - lift * 0.4;
    lWriX = w * 0.48; lWriY = h * 0.54 - lift;
    rElbX = w * 0.68; rElbY = h * 0.56 - lift * 0.4;
    rWriX = w * 0.52; rWriY = h * 0.50 - lift;
  } else if (motion === "palms-up") {
    lElbX = w * 0.30; lElbY = h * 0.56;
    lWriX = w * 0.36 + sin * 14; lWriY = h * 0.52;
    rElbX = w * 0.70; rElbY = h * 0.56;
    rWriX = w * 0.64 - sin * 14; rWriY = h * 0.52;
  } else if (motion === "head-nod" || motion === "head-shake") {
    rElbX = w * 0.69; rElbY = h * 0.54;
    rWriX = w * 0.60 + (motion === "head-shake" ? sin * 14 : 0);
    rWriY = h * 0.44 + (motion === "head-nod" ? Math.abs(sin) * 14 : 0);
  } else if (motion === "point-self") {
    rElbX = w * 0.68; rElbY = h * 0.54;
    rWriX = w * 0.51 + Math.abs(sin) * 8;
    rWriY = h * 0.49;
  }

  const line = (x1: number, y1: number, x2: number, y2: number, color: string, width = 4) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  line(lShX, shY, rShX, shY, "#94a3b8", 4);
  line(lShX, shY, lHipX, hipY, "#64748b", 3.5);
  line(rShX, shY, rHipX, hipY, "#64748b", 3.5);
  line(lHipX, hipY, rHipX, hipY, "#64748b", 3.5);
  line(neckX, headY + 22, neckX, shY, "#94a3b8", 3.5);
  line(lShX, shY, lElbX, lElbY, "#38bdf8", 4.5);
  line(lElbX, lElbY, lWriX, lWriY, "#38bdf8", 4.5);
  line(rShX, shY, rElbX, rElbY, "#eab308", 5);
  line(rElbX, rElbY, rWriX, rWriY, "#eab308", 5);

  ctx.strokeStyle = "#e2e8f0";
  ctx.fillStyle = "rgba(30, 41, 59, 0.7)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(headX, headY, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const dot = (x: number, y: number, r: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };
  dot(lShX, shY, 4.5, "#cbd5e1");
  dot(rShX, shY, 4.5, "#cbd5e1");
  dot(lElbX, lElbY, 5, "#38bdf8");
  dot(rElbX, rElbY, 5, "#facc15");
  dot(lWriX, lWriY, 8, "#0ea5e9");
  dot(rWriX, rWriY, 9.5, "#22c55e");
}

function drawR2PoseFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: [number, number][]
) {
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = "round";
  for (const [a, b] of UPPER_BONES) {
    if (a >= frame.length || b >= frame.length) continue;
    const [ax, ay] = frame[a];
    const [bx, by] = frame[b];
    ctx.strokeStyle = a >= 6 && b <= 14 ? "#eab308" : "#38bdf8";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ax * w, ay * h);
    ctx.lineTo(bx * w, by * h);
    ctx.stroke();
  }
  frame.forEach(([x, y], idx) => {
    ctx.fillStyle = idx === 0 ? "#e2e8f0" : idx === 9 || idx === 10 ? "#22c55e" : "#facc15";
    ctx.beginPath();
    ctx.arc(x * w, y * h, idx === 0 ? 12 : idx === 9 || idx === 10 ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

type VideoFilterTab = "all" | "maseno-stickman" | "human-sign-bible" | "saved";
const VIDEOS_PER_PAGE = 40;

export default function KslSignStudio() {
  const initialVideos: KslVideoItem[] = OPEN_CORPUS_INDEX.ksl.videos ?? [];
  const [tab, setTab] = useState<"videos" | "signs" | "quiz" | "alphabet" | "grammar">(
    initialVideos.length > 0 ? "videos" : "signs"
  );
  const [selectedId, setSelectedId] = useState<string>(KSL_STARTER_SIGNS[0].id);
  const [playing, setPlaying] = useState(true);
  const [slowMo, setSlowMo] = useState(false);

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
  const [kslStorybooks, setKslStorybooks] = useState<KslStorybookItem[]>(
    (OPEN_CORPUS_INDEX.ksl?.storybooks ?? []) as KslStorybookItem[]
  );
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

  const activeStarter = useMemo(
    () => KSL_STARTER_SIGNS.find((s) => s.id === selectedId) ?? KSL_STARTER_SIGNS[0],
    [selectedId]
  );

  const quizSign = KSL_STARTER_SIGNS[quizIdx % KSL_STARTER_SIGNS.length];
  const quizOptions = useMemo(() => {
    const distractors = KSL_STARTER_SIGNS.filter((s) => s.id !== quizSign.id)
      .slice((quizIdx * 3) % (KSL_STARTER_SIGNS.length - 3), ((quizIdx * 3) % (KSL_STARTER_SIGNS.length - 3)) + 3);
    const pool = [quizSign, ...distractors];
    return pool.sort((a, b) => a.gloss.localeCompare(b.gloss));
  }, [quizIdx, quizSign]);

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

  const loadR2Sign = async (meta: R2KslSignMeta) => {
    try {
      const resp = await fetch(meta.poseUrl);
      if (resp.ok) {
        const seq = (await resp.json()) as R2PoseSequence;
        setActiveR2Pose(seq);
        progressRef.current = 0;
        if (progressBarRef.current) progressBarRef.current.value = "0";
        setPlaying(true);
      }
    } catch {
      // Keep starter fallback
    }
  };

  const drawCurrentFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (tab === "signs" && activeR2Pose && activeR2Pose.frames.length > 0) {
      const fIdx = Math.floor(progressRef.current * activeR2Pose.frames.length) % activeR2Pose.frames.length;
      drawR2PoseFrame(ctx, canvas.width, canvas.height, activeR2Pose.frames[fIdx]);
    } else {
      const targetMotion = tab === "quiz" ? quizSign.motionType : activeStarter.motionType;
      drawProceduralSkeleton(ctx, canvas.width, canvas.height, progressRef.current, targetMotion);
    }
  }, [tab, activeR2Pose, quizSign, activeStarter]);

  useEffect(() => {
    const canvasActive = tab === "signs" || (tab === "quiz" && quizMode === "skeleton");
    if (!canvasActive) return;

    // Always render the current frame immediately (covers paused state without spinning rAF)
    drawCurrentFrame();
    if (!playing) return;

    let lastTs = performance.now();
    const tick = (now: number) => {
      const dt = (now - lastTs) / 1000;
      lastTs = now;

      const speed = slowMo ? 0.25 : 0.55;
      progressRef.current = (progressRef.current + dt * speed) % 1;
      if (progressBarRef.current) {
        progressBarRef.current.value = String(Math.round(progressRef.current * 100));
      }

      drawCurrentFrame();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [tab, quizMode, playing, slowMo, drawCurrentFrame]);

  const handleQuizAnswer = (pickedId: string) => {
    if (quizPicked) return;
    setQuizPicked(pickedId);
    setQuizTotal((n) => n + 1);
    const expectedId = quizMode === "video" && activeQuizVideo ? activeQuizVideo.id : quizSign.id;
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
            {kslVideos.length.toLocaleString()} Real KSL Videos · {KSL_STARTER_SIGNS.length} Guided Signs
            {r2Signs.length > 0 ? ` · ${r2Signs.length} Motion Poses` : ""}
          </span>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-3">
        {[
          { id: "videos" as const, label: `KSL Video Library (${kslVideos.length})`, icon: Film },
          { id: "signs" as const, label: "Sign Studio", icon: Hand },
          { id: "quiz" as const, label: "Visual Sign Quiz", icon: Sparkles },
          { id: "alphabet" as const, label: "Fingerspelling (A–Z)", icon: BookOpen },
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
                  src={activeVideo.videoUrl}
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
      {tab === "signs" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 rounded-2xl border border-gold/25 bg-bg-card p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[0.68rem] uppercase tracking-wider font-bold text-gold">
                  {activeR2Pose ? "Maseno University Motion Sign" : activeStarter.category}
                </p>
                <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  {activeR2Pose ? activeR2Pose.gloss : activeStarter.gloss}
                </h2>
              </div>
              {!activeR2Pose && (
                <span className="rounded-md bg-bg-elevated px-2 py-0.5 text-xs text-text-secondary">
                  {activeStarter.swahiliEquivalent}
                </span>
              )}
            </div>

            <div className="rounded-xl border border-border bg-[#0b1120] p-2 flex items-center justify-center">
              <canvas ref={canvasRef} width={340} height={280} className="w-full max-w-[340px] h-auto" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1 rounded-lg bg-gold px-3 py-1.5 text-xs font-bold text-black cursor-pointer"
                >
                  {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  onClick={() => setSlowMo((s) => !s)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold cursor-pointer ${
                    slowMo ? "border-kenya-green bg-kenya-green/15 text-kenya-green" : "border-border text-text-secondary"
                  }`}
                >
                  0.5x Slow
                </button>
                <button
                  type="button"
                  onClick={() => {
                    progressRef.current = 0;
                    if (progressBarRef.current) progressBarRef.current.value = "0";
                    drawCurrentFrame();
                  }}
                  className="rounded-lg border border-border p-1.5 text-text-secondary hover:text-text-primary cursor-pointer"
                  aria-label="Restart sign animation"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
              <input
                ref={progressBarRef}
                type="range"
                min={0}
                max={100}
                defaultValue={0}
                onChange={(e) => {
                  progressRef.current = Number(e.target.value) / 100; drawCurrentFrame();
                }}
                aria-label="Animation frame scrubber"
                className="w-28 accent-gold"
              />
            </div>

            {!activeR2Pose && (
              <div className="rounded-xl border border-border bg-bg-elevated/50 p-3 space-y-1.5 text-xs">
                <p><strong className="text-gold">Handshape:</strong> {activeStarter.handshape}</p>
                <p><strong className="text-gold">Location:</strong> {activeStarter.location}</p>
                <p><strong className="text-gold">Movement:</strong> {activeStarter.movement}</p>
                <p><strong className="text-kenya-green">Facial / Non-Manual:</strong> {activeStarter.nonManual}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-border bg-bg-card p-4 space-y-3">
              <h3 className="text-sm font-bold text-text-primary">
                Core KSL Starter Vocabulary ({KSL_STARTER_SIGNS.length} Guided Signs)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {KSL_STARTER_SIGNS.map((sign) => {
                  const active = !activeR2Pose && sign.id === selectedId;
                  return (
                    <button
                      key={sign.id}
                      type="button"
                      onClick={() => {
                        setActiveR2Pose(null);
                        setSelectedId(sign.id);
                        progressRef.current = 0;
                        setPlaying(true);
                      }}
                      className={`rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                        active
                          ? "border-gold bg-gold/15 text-text-primary"
                          : "border-border bg-bg-elevated/50 text-text-secondary hover:border-gold/50"
                      }`}
                    >
                      <p className="text-xs font-bold text-text-primary">{sign.gloss}</p>
                      <p className="text-[0.68rem] text-text-muted mt-0.5">{sign.swahiliEquivalent}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {r2Signs.length > 0 && (
              <div className="rounded-2xl border border-kenya-green/30 bg-bg-card p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-kenya-green min-w-0">
                    Maseno University Live Motion-Capture Signs ({r2Signs.length})
                  </h3>
                  <a
                    href="https://zenodo.org/records/14338329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.7rem] text-gold hover:underline"
                  >
                    Maseno University Sign Library <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                  {r2Signs.map((rs) => (
                    <button
                      key={rs.id}
                      type="button"
                      onClick={() => void loadR2Sign(rs)}
                      className={`rounded-lg border px-2.5 py-1 text-xs cursor-pointer ${
                        activeR2Pose?.id === rs.id
                          ? "border-kenya-green bg-kenya-green/20 font-bold text-kenya-green"
                          : "border-border bg-bg-elevated/60 text-text-secondary hover:border-kenya-green/50"
                      }`}
                    >
                      {rs.gloss}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: VISUAL SIGN QUIZ (Real KSL Video Quiz + Guided Skeleton Quiz) */}
      {tab === "quiz" && (
        <div className="max-w-xl mx-auto rounded-2xl border border-gold/25 bg-bg-card p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              {quizVideoPool.length >= 4 && (
                <button
                  type="button"
                  onClick={() => {
                    setQuizMode("video");
                    setQuizPicked(null);
                  }}
                  className={`rounded-lg border px-2.5 py-1 font-bold cursor-pointer ${
                    quizMode === "video"
                      ? "border-kenya-green bg-kenya-green/15 text-kenya-green"
                      : "border-border bg-bg-elevated text-text-secondary"
                  }`}
                >
                  Real Video Quiz ({quizVideoPool.length})
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setQuizMode("skeleton");
                  setQuizPicked(null);
                }}
                className={`rounded-lg border px-2.5 py-1 font-bold cursor-pointer ${
                  quizMode === "skeleton"
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border bg-bg-elevated text-text-secondary"
                }`}
              >
                Guided Signs ({KSL_STARTER_SIGNS.length})
              </button>
            </div>
            <div className="flex items-center gap-2 font-mono text-text-secondary">
              {quizStreak >= 2 && (
                <span className="inline-flex items-center gap-0.5 text-gold font-bold">
                  <Flame className="h-3.5 w-3.5" /> {quizStreak}
                </span>
              )}
              <span>Score: {quizScore}/{quizTotal}</span>
            </div>
          </div>

          {quizMode === "video" && activeQuizVideo && quizVideoOptions.length >= 4 ? (
            <>
              <div className="rounded-xl border border-border bg-black overflow-hidden">
                <video
                  ref={quizVideoRef}
                  key={activeQuizVideo.id}
                  src={activeQuizVideo.videoUrl}
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
            <>
              <div className="rounded-xl border border-border bg-[#0b1120] p-2 flex items-center justify-center">
                <canvas ref={canvasRef} width={340} height={260} className="w-full max-w-[340px] h-auto" />
              </div>

              <p className="text-xs text-text-muted text-center">
                Cue: <strong className="text-text-secondary">{quizSign.handshape}</strong> · {quizSign.location}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quizOptions.map((opt) => {
                  const isCorrect = opt.id === quizSign.id;
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
                      <span>{opt.gloss}</span>
                      {quizPicked && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0" />}
                      {quizPicked && isPicked && !isCorrect && <XCircle className="h-4 w-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {quizPicked && (
            <button
              type="button"
              onClick={() => {
                setQuizPicked(null);
                setQuizIdx((i) => i + 1);
                progressRef.current = 0;
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
