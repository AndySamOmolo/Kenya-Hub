"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Users,
  BookOpen,
  Flame,
  Star,
  Zap,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import type { LanguageConfig } from "@/data/courses/types";
import { TOOLS } from "@/lib/tools-registry";

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

/* ═══════════════════════════════════════════════════════
   LANGUAGE PICKER — Choose your language to learn
   ═══════════════════════════════════════════════════════ */

// Available languages (only ones with course data)
const AVAILABLE_LANGUAGES: (LanguageConfig & { ready: boolean; skills: number })[] = [
  {
    id: "luo",
    name: "Dholuo",
    nativeName: "Dholuo",
    family: "Nilotic",
    counties: ["Kisumu", "Siaya", "Homa Bay", "Migori"],
    speakers: "5.8M",
    speechLocale: "sw-KE",
    description: "A River-Lake Nilotic language spoken around Lake Victoria",
    color: "#D4A843",
    ready: true,
    skills: 20,
  },
  {
    id: "kikuyu",
    name: "Gĩkũyũ",
    nativeName: "Gĩkũyũ",
    family: "Bantu",
    counties: ["Kiambu", "Murang'a", "Nyeri", "Kirinyaga"],
    speakers: "8.1M",
    speechLocale: "ki-KE",
    description: "The most spoken ethnic language in Kenya, from the Central Highlands",
    color: "#4CAF50",
    ready: false,
    skills: 0,
  },
  {
    id: "swahili",
    name: "Kiswahili",
    nativeName: "Kiswahili",
    family: "Bantu",
    counties: ["All counties"],
    speakers: "15M+",
    speechLocale: "sw-KE",
    description: "Kenya's national language — the lingua franca of East Africa",
    color: "#2196F3",
    ready: false,
    skills: 0,
  },
  {
    id: "kamba",
    name: "Kamba",
    nativeName: "Kĩkamba",
    family: "Bantu",
    counties: ["Machakos", "Makueni", "Kitui"],
    speakers: "4.7M",
    speechLocale: "sw-KE",
    description: "An Eastern Bantu language from the Ukambani region",
    color: "#FF9800",
    ready: false,
    skills: 0,
  },
  {
    id: "kalenjin",
    name: "Kalenjin",
    nativeName: "Kalenjin",
    family: "Nilotic",
    counties: ["Nandi", "Uasin Gishu", "Kericho", "Baringo", "Elgeyo-Marakwet"],
    speakers: "5.1M",
    speechLocale: "sw-KE",
    description: "A Highland Nilotic language from Kenya's Rift Valley",
    color: "#9C27B0",
    ready: false,
    skills: 0,
  },
  {
    id: "luhya",
    name: "Luhya",
    nativeName: "Oluluyia",
    family: "Bantu",
    counties: ["Kakamega", "Bungoma", "Busia", "Vihiga"],
    speakers: "6.8M",
    speechLocale: "sw-KE",
    description: "A group of closely related Bantu dialects from Western Kenya",
    color: "#E91E63",
    ready: false,
    skills: 0,
  },
];

// Load saved progress for a language
function getLanguageXp(languageId: string): { xp: number; streak: number } {
  if (typeof window === "undefined") return { xp: 0, streak: 0 };
  try {
    const raw = localStorage.getItem(`kh-learn-progress-${languageId}`);
    if (!raw) return { xp: 0, streak: 0 };
    const p = JSON.parse(raw);
    return { xp: p.xp || 0, streak: p.streak || 0 };
  } catch {
    return { xp: 0, streak: 0 };
  }
}

export default function LearnPage() {
  const [progressMap, setProgressMap] = useState<
    Record<string, { xp: number; streak: number }>
  >({});

  useEffect(() => {
    const map: Record<string, { xp: number; streak: number }> = {};
    AVAILABLE_LANGUAGES.forEach((l) => {
      map[l.id] = getLanguageXp(l.id);
    });
    setProgressMap(map);
  }, []);

  const readyLangs = AVAILABLE_LANGUAGES.filter((l) => l.ready);
  const comingLangs = AVAILABLE_LANGUAGES.filter((l) => !l.ready);

  return (
    <ToolShell tool={LEARN_TOOL}>
      <div className="mx-auto max-w-3xl px-4 pb-8">
        {/* Hero */}
        <div className="mb-6 rounded-2xl border border-border bg-gradient-to-br from-bg-card via-bg-card to-gold/5 p-6 text-center sm:p-8">
          <div className="mb-3 text-5xl">🗣️</div>
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary sm:text-3xl">
            Learn a Kenyan Language
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
            Interactive lessons with vocabulary, grammar, cultural notes, and
            spaced repetition. Pick a language and start your journey.
          </p>

          {/* Global stats */}
          <div className="mt-5 flex justify-center gap-4">
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-text-secondary">
              <BookOpen className="h-3.5 w-3.5 text-gold" />{" "}
              {readyLangs.length} language{readyLangs.length !== 1 ? "s" : ""}{" "}
              available
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-semibold text-text-secondary">
              <Globe2 className="h-3.5 w-3.5 text-gold" />{" "}
              {comingLangs.length} coming soon
            </div>
          </div>
        </div>

        {/* Available Languages */}
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-text-primary">
          <Star className="h-4 w-4 text-gold" /> Available Courses
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {readyLangs.map((lang) => {
            const xpData = progressMap[lang.id] || { xp: 0, streak: 0 };
            return (
              <Link
                key={lang.id}
                href={`/tools/learn/${lang.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-5 transition-all active:scale-[0.98] sm:hover:border-gold/40 sm:hover:shadow-lg sm:hover:shadow-gold/5"
              >
                {/* Color accent */}
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-60"
                  style={{ backgroundColor: lang.color }}
                />

                <div className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors truncate">
                      {lang.name}
                      <span className="ml-1 text-xs font-normal text-text-muted">
                        ({lang.nativeName})
                      </span>
                    </h4>
                    <p className="mt-0.5 text-[0.65rem] text-text-secondary truncate">
                      {lang.description}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[0.6rem] text-text-muted">
                        <Users className="h-3 w-3" /> {lang.speakers} speakers
                      </span>
                      <span className="text-[0.6rem] text-text-muted">
                        {lang.family}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                </div>

                {/* Progress bar if started */}
                {xpData.xp > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gold"
                        style={{
                          width: `${Math.min(100, (xpData.xp / 1000) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="flex items-center gap-1 text-[0.6rem] font-semibold text-gold">
                      <Zap className="h-3 w-3" /> {xpData.xp} XP
                    </span>
                    {xpData.streak > 0 && (
                      <span className="flex items-center gap-0.5 text-[0.6rem] font-semibold text-orange-400">
                        <Flame className="h-3 w-3" /> {xpData.streak}
                      </span>
                    )}
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Coming Soon */}
        {comingLangs.length > 0 && (
          <>
            <h3 className="mb-3 mt-8 flex items-center gap-2 text-sm font-bold text-text-primary">
              <Globe2 className="h-4 w-4 text-text-muted" /> Coming Soon
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {comingLangs.map((lang) => (
                <div
                  key={lang.id}
                  className="rounded-xl border border-border/50 bg-bg-card/60 p-4 opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-text-primary truncate">
                        {lang.name}
                      </h4>
                      <p className="text-[0.55rem] text-text-muted truncate">
                        {lang.speakers} speakers • {lang.family}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-bg-elevated px-2 py-0.5 text-[0.55rem] font-semibold text-text-muted">
                      Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Data contribution CTA */}
        <div className="mt-8 rounded-xl border border-border bg-bg-card p-5 text-center">
          <p className="text-sm font-semibold text-text-primary">
            🤝 Help us grow
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            Know a Kenyan language? We&apos;d love your help adding vocabulary,
            sentences, and grammar data for new courses.
          </p>
        </div>
      </div>
    </ToolShell>
  );
}
