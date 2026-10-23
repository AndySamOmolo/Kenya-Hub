/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
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
  Layers,
  ChevronDown,
  ScrollText,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import ProverbsView from "@/components/learn/ProverbsView";
import type { LanguageConfig } from "@/data/courses/types";
import { COURSE_REGISTRY } from "@/data/courses/registry";
import { TOOLS } from "@/lib/tools-registry";

const LEARN_TOOL = TOOLS.find((t) => t.slug === "learn")!;

const AVAILABLE_LANGUAGES: (LanguageConfig & { ready: boolean; skills: number })[] =
  Object.values(COURSE_REGISTRY).map(({ config, units, ready }) => ({
    ...config,
    ready,
    skills: units.reduce((total, unit) => total + unit.skills.length, 0),
  }));

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
  const [showAllModules, setShowAllModules] = useState(false);
  const [activeHubTab, setActiveHubTab] = useState<"courses" | "proverbs">("courses");

  useEffect(() => {
    const map: Record<string, { xp: number; streak: number }> = {};
    AVAILABLE_LANGUAGES.forEach((l) => {
      map[l.id] = getLanguageXp(l.id);
    });
    setProgressMap(map);
  }, []);

  const readyLangs = AVAILABLE_LANGUAGES.filter((l) => l.ready);
  const comingLangs = AVAILABLE_LANGUAGES.filter((l) => !l.ready);
  const totalModulesCount = PUBLISHED_COURSES.reduce(
    (sum, c) => sum + c.units.reduce((s, u) => s + u.skills.length, 0),
    0
  );

  return (
    <ToolShell tool={LEARN_TOOL}>
      <div className="mx-auto max-w-4xl px-0 sm:px-4 pb-8">
        {/* Hero */}
        <div className="mb-6 rounded-2xl border border-border bg-gradient-to-br from-bg-card via-bg-card to-gold/5 p-6 text-center sm:p-8">
          <div className="flex justify-center mb-3"><DynamicIcon emoji="🗣️" className="w-12 h-12 text-gold" /></div>
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary sm:text-3xl">
            Kenyan Languages, Proverbs &amp; Oral Wisdom Hub
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-text-secondary">
            Master Kenyan indigenous languages with step-by-step guided skill trees (plus a 1-click option to unlock all modules at once), grammar guides, and over 1,600 authentic Gĩkũyũ and Dholuo proverbs and riddles.
          </p>

          {/* Compact stats line */}
          <p className="mt-3 text-xs font-medium text-gold">
            {readyLangs.length} Courses · {totalModulesCount} Modules · 1,600+ Proverbs &amp; Riddles
          </p>
        </div>

        {/* Standalone Horizontal Pill Menu (Courses | Proverbs & Wisdom) */}
        <ExpandablePillRow className="mb-5">
          {[
            { id: "courses" as const, label: `Courses (${readyLangs.length})` },
            { id: "proverbs" as const, label: "Proverbs & Wisdom" },
          ].map((tab) => {
            const active = activeHubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveHubTab(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </ExpandablePillRow>

        {activeHubTab === "proverbs" ? (
          <ProverbsView defaultLanguageId="kikuyu" />
        ) : (
          <>
            {/* Available Languages */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 text-sm font-bold text-text-primary">
                <Star className="h-4 w-4 text-gold" /> Available Language Courses ({readyLangs.length})
              </h3>
              <button
                onClick={() => setShowAllModules(!showAllModules)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-card px-3 py-1.5 text-xs font-semibold text-gold hover:border-gold/50 transition-colors"
              >
                <Layers className="h-3.5 w-3.5" />
                {showAllModules ? "Hide Module Previews" : "Preview All Modules"}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAllModules ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {readyLangs.map((lang) => {
                const xpData = progressMap[lang.id] || { xp: 0, streak: 0 };
                const courseObj = PUBLISHED_COURSES.find((c) => c.config.id === lang.id);

                return (
                  <div
                    key={lang.id}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-5 transition-all sm:hover:border-gold/40"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 opacity-60"
                      style={{ backgroundColor: lang.color }}
                    />

                    <Link href={`/tools/learn/${lang.id}`} className="block">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors break-words">
                            {lang.name}
                            <span className="ml-1 text-xs font-normal text-text-muted">
                              ({lang.nativeName})
                            </span>
                          </h4>
                          <p className="mt-1 text-[0.7rem] text-text-secondary line-clamp-2 leading-relaxed">
                            {lang.description}
                          </p>
                          <div className="mt-2.5 flex flex-wrap items-center gap-2">
                            <span className="flex items-center gap-1 rounded-full border border-border bg-white/[0.02] px-2 py-0.5 text-[0.6rem] text-text-muted">
                              <Users className="h-3 w-3" /> {lang.speakers}
                            </span>
                            <span className="flex items-center gap-1 rounded-full border border-border bg-white/[0.02] px-2 py-0.5 text-[0.6rem] text-kenya-green-light font-semibold">
                              <BookOpen className="h-3 w-3" /> {lang.skills} modules
                            </span>
                            <span className="rounded-full border border-border bg-white/[0.02] px-2 py-0.5 text-[0.6rem] text-text-muted">
                              {lang.family}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                      </div>
                    </Link>

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

                    {showAllModules && courseObj && (
                      <div className="mt-4 pt-3 border-t border-border/60 space-y-2">
                        <p className="text-[0.625rem] font-bold uppercase tracking-wider text-text-muted">
                          {courseObj.units.length} Units · Direct Module Preview:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {courseObj.units.map((unit) =>
                            unit.skills.map((skill) => (
                              <Link
                                key={skill.id}
                                href={`/tools/learn/${lang.id}#unit-block-${unit.id}`}
                                className="inline-flex items-center gap-1 rounded-lg border border-border bg-bg-elevated/70 px-2 py-1 text-[0.65rem] text-text-secondary hover:border-gold hover:text-gold transition-colors"
                              >
                                <DynamicIcon emoji={skill.icon} className="w-3 h-3" />
                                <span>{skill.title}</span>
                              </Link>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
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
                          <h4 className="text-sm font-bold text-text-primary">
                            {lang.name}
                          </h4>
                          <p className="text-[0.65rem] text-text-muted mt-0.5">
                            {lang.speakers} speakers • {lang.family}
                          </p>
                        </div>
                        <span className="rounded-full border border-border px-2 py-0.5 text-[0.55rem] font-semibold text-text-muted">
                          Soon
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </ToolShell>
  );
}
