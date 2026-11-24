"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, ExternalLink, Headphones, Sparkles, Volume2 } from "lucide-react";
import type { OpenCorpusLanguageData } from "@/lib/open-corpus";

interface OpenCorpusPanelProps {
  languageId?: string;
  languageName: string;
  openCorpusData?: OpenCorpusLanguageData | null;
}

export default function OpenCorpusPanel({
  languageName,
  openCorpusData = null,
}: OpenCorpusPanelProps) {
  const data = openCorpusData ?? null;
  const chapters = data?.audioChapters ?? [];
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id ?? "");

  if (!data) return null;

  const hasCalendar = Boolean(data.cldr && (data.cldr.months.length > 0 || data.cldr.days.length > 0));
  const hasReadings = data.sampleReadings.length > 0;
  const hasEverydayWords = data.topFrequencyWords.length > 0;
  const hasChapters = chapters.length > 0;
  const phonemes = data.phonemes ?? [];
  const morphologySamples = data.morphologySamples ?? [];
  const wikimediaArticles = data.wikimediaArticles ?? [];
  const hasPhonemes = phonemes.length > 0;
  const hasMorphology = morphologySamples.length > 0;
  const hasWikiArticles = wikimediaArticles.length > 0;

  if (!hasChapters && !hasCalendar && !hasReadings && !hasEverydayWords && !hasPhonemes && !hasMorphology && !hasWikiArticles) return null;

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId) ?? chapters[0] ?? null;

  return (
    <section className="rounded-2xl border border-gold/25 bg-bg-card p-5 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-gold" />
          <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">
            {languageName} Listening, Calendar &amp; Reading Practice
          </h3>
        </div>
        {data.r2AudioClips > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full border border-kenya-green/30 bg-kenya-green/10 px-2.5 py-0.5 text-[0.7rem] font-semibold text-kenya-green">
            <Headphones className="h-3 w-3" />
            {data.r2AudioClips.toLocaleString()} native audio clips
          </span>
        )}
      </div>

      {/* Bilingual Spoken Phrasebook Listening Chapters (e.g., Dholuo 1920 Phrase Book) */}
      {hasChapters && activeChapter && (
        <div className="rounded-xl border border-kenya-green/35 bg-kenya-green/5 p-4 space-y-3.5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-kenya-green flex items-center gap-1.5">
                <Volume2 className="h-3.5 w-3.5" />
                Spoken Phrasebook Listening ({chapters.length} Chapters · 1h 01m)
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Listen to real bilingual English &amp; {languageName} phrases from <em>A Handbook of the Kavirondo Language — Part III</em>, read by Nicholas &amp; Grace Bridgewater.
              </p>
            </div>
            <a
              href={activeChapter.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-kenya-green/30 bg-bg-card px-2.5 py-1 text-[0.72rem] font-semibold text-kenya-green hover:underline shrink-0"
            >
              <span>Source</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {chapters.map((ch) => {
              const isSelected = ch.id === activeChapter.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "border-kenya-green bg-kenya-green text-white"
                      : "border-border bg-bg-card text-text-secondary hover:border-kenya-green/50"
                  }`}
                >
                  {ch.title}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-border bg-bg-card p-3.5 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-text-primary">{activeChapter.title}</p>
              {activeChapter.sizeMb && (
                <span className="text-[0.68rem] font-mono text-text-muted">
                  {activeChapter.sizeMb} MB · Public Domain
                </span>
              )}
            </div>
            <audio key={activeChapter.id} controls preload="none" className="w-full h-10">
              <source src={activeChapter.audioUrl} />
              {activeChapter.fallbackUrl && activeChapter.fallbackUrl !== activeChapter.audioUrl && (
                <source src={activeChapter.fallbackUrl} type="audio/mpeg" />
              )}
              Your browser does not support embedded audio playback.
            </audio>
            {activeChapter.topics && activeChapter.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {activeChapter.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border bg-bg-elevated/60 px-2 py-0.5 text-[0.68rem] text-text-secondary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Days of the Week & Months of the Year */}
      {hasCalendar && data.cldr && (
        <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Days of the Week &amp; Months in {languageName}
          </p>
          {data.cldr.days.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-text-muted">Days</p>
              <div className="flex flex-wrap gap-1.5">
                {data.cldr.days.map((d, idx) => (
                  <span
                    key={`day-${idx}`}
                    className="rounded-lg border border-border bg-bg-card px-2.5 py-1 text-xs font-medium text-text-primary"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
          {data.cldr.months.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-text-muted">Months</p>
              <div className="flex flex-wrap gap-1.5">
                {data.cldr.months.map((m, idx) => (
                  <span
                    key={`mo-${idx}`}
                    className="rounded-lg border border-gold/20 bg-gold/5 px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {idx + 1}. {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Everyday Reading Practice */}
      {hasReadings && (
        <div className="space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-kenya-green" />
            Real {languageName} Reading Practice
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {data.sampleReadings.slice(0, 8).map((item, idx) => (
              <div
                key={`read-${idx}`}
                className="rounded-xl border border-border bg-bg-elevated/40 p-3 text-xs"
              >
                <p className="font-semibold text-text-primary leading-relaxed">{item.text}</p>
                {item.english && (
                  <p className="text-text-secondary mt-1">{item.english}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Most Common Everyday Words */}
      {hasEverydayWords && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Most Common Everyday {languageName} Words
          </p>
          <div className="flex flex-wrap gap-1.5">
            {data.topFrequencyWords.slice(0, 24).map((fw, idx) => (
              <span
                key={`fw-${idx}`}
                className="rounded-full border border-border bg-bg-elevated/60 px-2.5 py-1 text-xs font-medium text-text-primary"
              >
                {fw.word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pronunciation Sound Inventory (PHOIBLE IPA) */}
      {hasPhonemes && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <Volume2 className="h-3.5 w-3.5 text-kenya-green" />
            {languageName} Sound Inventory (IPA · {phonemes.length} phonemes)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {phonemes.map((seg, idx) => (
              <span
                key={`ph-${idx}`}
                className="rounded-lg border border-border bg-bg-elevated/60 px-2 py-0.5 text-xs font-mono text-text-primary"
              >
                /{seg}/
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Morphological Inflection Examples (UniMorph) */}
      {hasMorphology && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Word Formation &amp; Inflection Examples
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {morphologySamples.slice(0, 12).map((m, idx) => (
              <div
                key={`morph-${idx}`}
                className="rounded-lg border border-border bg-bg-elevated/40 px-2.5 py-2 text-xs"
              >
                <p className="font-bold text-text-primary">{m.form}</p>
                <p className="text-[0.68rem] text-text-muted mt-0.5">Root: {m.lemma}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Open-Access Wikimedia Reading Articles */}
      {hasWikiArticles && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-kenya-green" />
            Open-Access {languageName} Articles ({wikimediaArticles[0]?.source})
          </p>
          <div className="flex flex-wrap gap-2">
            {wikimediaArticles.map((art, idx) => (
              <a
                key={`wiki-${idx}`}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-kenya-green/30 bg-kenya-green/5 px-3 py-1 text-xs font-semibold text-kenya-green hover:bg-kenya-green/15 transition-colors"
              >
                <span>{art.title}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
