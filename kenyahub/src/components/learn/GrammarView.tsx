"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Calendar, ExternalLink, Headphones, Pause, Play, Sparkles, Volume2 } from "lucide-react";
import type { GrammarSection } from "@/data/courses/types";
import { renderInlineMarkdown } from "@/lib/render-markdown";
import { getLanguageOpenCorpus } from "@/lib/open-corpus";
import { loadGrammarShard, type GrammarShard } from "@/lib/learning-shards";
import CustomSelect from "@/components/ui/CustomSelect";

/**
 * Renders grammar section content supporting headings, bulleted/numbered lists,
 * blockquotes, and Markdown pipe tables.
 */
function RenderedContent({ content }: { content: string }) {
  const blocks = useMemo(() => {
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const result: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();

      if (!trimmed) {
        result.push(<div key={`sp-${i}`} className="h-2" />);
        i++;
        continue;
      }

      if (trimmed.startsWith("### ")) {
        result.push(
          <h4
            key={`h3-${i}`}
            className="mt-4 mb-1.5 font-[family-name:var(--font-outfit)] text-base font-bold text-gold"
          >
            {renderInlineMarkdown(trimmed.slice(4))}
          </h4>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith("## ")) {
        result.push(
          <h3
            key={`h2-${i}`}
            className="mt-5 mb-2 font-[family-name:var(--font-outfit)] text-lg font-bold text-gold"
          >
            {renderInlineMarkdown(trimmed.slice(3))}
          </h3>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const tableRows: string[][] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const rowStr = lines[i].trim();
          if (!/^\|[\s\-:|]+\|$/.test(rowStr)) {
            const cells = rowStr
              .slice(1, -1)
              .split("|")
              .map((c) => c.trim());
            tableRows.push(cells);
          }
          i++;
        }
        if (tableRows.length > 0) {
          result.push(
            <div
              key={`tbl-${i}`}
              className="my-3 overflow-x-auto rounded-xl border border-border"
            >
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-bg-elevated border-b border-border text-gold font-semibold">
                    {tableRows[0].map((cell, cIdx) => (
                      <th key={`th-${cIdx}`} className="px-3 py-2">
                        {renderInlineMarkdown(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(1).map((row, rIdx) => (
                    <tr
                      key={`tr-${rIdx}`}
                      className="border-b border-border/60 last:border-0 odd:bg-bg-card even:bg-bg-elevated/30"
                    >
                      {row.map((cell, cIdx) => (
                        <td key={`td-${cIdx}`} className="px-3 py-2 text-text-secondary">
                          {renderInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (trimmed.startsWith(">")) {
        result.push(
          <blockquote
            key={`bq-${i}`}
            className="my-2 border-l-2 border-gold bg-gold/5 px-3.5 py-2 rounded-r-lg italic text-text-primary"
          >
            {renderInlineMarkdown(trimmed.replace(/^>\s*/, ""))}
          </blockquote>
        );
        i++;
        continue;
      }

      const bulletMatch = rawLine.match(/^(\s*)([-•*]|\d+\.)\s+(.*)$/);
      if (bulletMatch) {
        const isSub = bulletMatch[1].length >= 2;
        const marker = /^\d+\./.test(bulletMatch[2]) ? bulletMatch[2] : isSub ? "◦" : "•";
        result.push(
          <div
            key={`li-${i}`}
            className={`flex gap-2 py-0.5 ${isSub ? "pl-6" : "pl-2"}`}
          >
            <span className="text-gold font-semibold shrink-0 mt-0.5">{marker}</span>
            <span className="min-w-0 flex-1 break-words">
              {renderInlineMarkdown(bulletMatch[3])}
            </span>
          </div>
        );
        i++;
        continue;
      }

      result.push(
        <p key={`p-${i}`} className="mb-1.5 leading-relaxed">
          {renderInlineMarkdown(rawLine)}
        </p>
      );
      i++;
    }

    return result;
  }, [content]);

  return <>{blocks}</>;
}

export default function GrammarView({
  sections,
  languageName,
  languageId,
}: {
  sections: GrammarSection[];
  languageName: string;
  languageId?: string;
}) {
  const langData = getLanguageOpenCorpus(languageId);
  const chapters = langData?.audioChapters ?? [];
  const nativeSamples = langData?.nativeAudioSamples ?? [];
  const phonemes = langData?.phonemes ?? [];
  const morphologySamples = langData?.morphologySamples ?? [];
  const readings = langData?.sampleReadings ?? [];
  const everydayWords = langData?.topFrequencyWords ?? [];
  const readingArticles = langData?.wikimediaArticles ?? [];
  const cldr = langData?.cldr ?? null;

  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id ?? "");
  const [playingSlug, setPlayingSlug] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [grammarShard, setGrammarShard] = useState<GrammarShard | null>(null);
  const [selectedVerbLemma, setSelectedVerbLemma] = useState<string>("");

  useEffect(() => {
    let active = true;
    if (!languageId) return;
    loadGrammarShard(languageId).then((res) => {
      if (!active || !res) return;
      setGrammarShard(res);
      if (res.conjugations?.length) {
        setSelectedVerbLemma(res.conjugations[0].lemma);
      }
    });
    return () => { active = false; };
  }, [languageId]);

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId) ?? chapters[0] ?? null;

  const toggleSampleAudio = (slug: string, url: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (playingSlug === slug) {
      setPlayingSlug(null);
      return;
    }
    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingSlug(slug);
    audio.onended = () => setPlayingSlug(null);
    audio.onerror = () => setPlayingSlug(null);
    audio.play().catch(() => setPlayingSlug(null));
  };

  const hasCalendar = Boolean(cldr && (cldr.months.length > 0 || cldr.days.length > 0));
  const hasListening = chapters.length > 0 || nativeSamples.length > 0;
  const hasPronunciationOrMorph = phonemes.length > 0 || morphologySamples.length > 0;
  const hasReadingOrWords = readings.length > 0 || everydayWords.length > 0 || readingArticles.length > 0;

  if ((!sections || sections.length === 0) && !hasListening && !hasCalendar && !hasPronunciationOrMorph && !hasReadingOrWords) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-text-muted">
        <p>No grammar references available for {languageName} yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl w-full min-w-0 overflow-x-hidden space-y-6 px-1 sm:px-4">
      {grammarShard && ((grammarShard.familyPath?.length ?? 0) > 0 || (grammarShard.structureHighlights?.length ?? 0) > 0) && (
        <section className="rounded-2xl border border-gold/25 bg-bg-card p-4 shadow-sm sm:p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-[family-name:var(--font-outfit)] text-base sm:text-xl font-bold text-text-primary">
              {languageName} Language Structure at a Glance
            </h2>
            {(grammarShard.familyPath?.length ?? 0) > 0 && (
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold break-words max-w-full">
                {grammarShard.familyPath!.slice(-3).join(" › ")}
              </span>
            )}
          </div>
          {(grammarShard.structureHighlights?.length ?? 0) > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {grammarShard.structureHighlights!.map((item, idx) => (
                <div key={`sh-${idx}`} className="rounded-xl border border-border bg-bg-elevated/60 px-3 py-2 text-xs min-w-0 break-words">
                  <p className="font-bold text-text-primary">{item.label}</p>
                  <p className="text-text-secondary mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {(sections ?? []).map((section) => (
        <section
          key={section.id}
          className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8"
        >
          <h2 className="mb-2 font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl">
            {section.title}
          </h2>
          <p className="mb-5 text-sm font-medium text-gold leading-relaxed">
            {section.summary}
          </p>
          <div className="max-w-none text-sm text-text-secondary leading-relaxed">
            <RenderedContent content={section.content} />
          </div>

          {section.examples && section.examples.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-bg-elevated p-3 sm:p-4">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                Examples
              </h3>
              <div className="space-y-3">
                {section.examples.map((ex, idx) => {
                  const targetKey = Object.keys(ex).find(
                    (k) => k !== "english" && k !== "explanation"
                  );
                  const targetText = targetKey
                    ? (ex as Record<string, string | undefined>)[targetKey] ?? ""
                    : "";

                  return (
                    <div
                      key={idx}
                      className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text-primary text-sm break-words">
                          {targetText}
                        </p>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {renderInlineMarkdown(ex.english)}
                        </p>
                      </div>
                      {ex.explanation && (
                        <div className="mt-1 text-xs text-text-muted sm:mt-0 sm:text-right max-w-full sm:max-w-[45%] break-words">
                          <span className="inline-block rounded-md bg-kenya-green/10 px-2 py-1 text-kenya-green max-w-full break-words">
                            {renderInlineMarkdown(ex.explanation)}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Native Listening Practice & Spoken Chapters */}
      {hasListening && (
        <section className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl flex items-center gap-2">
                <Headphones className="h-5 w-5 text-kenya-green" />
                {languageName} Listening Practice
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Hear authentic native-speaker pronunciation and spoken phrases in {languageName}.
              </p>
            </div>
            {langData && langData.r2AudioClips > 0 && (
              <span className="rounded-full border border-kenya-green/30 bg-kenya-green/10 px-3 py-1 text-xs font-semibold text-kenya-green">
                {langData.r2AudioClips.toLocaleString()} native recordings
              </span>
            )}
          </div>

          {nativeSamples.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {nativeSamples.slice(0, 18).map((clip) => {
                const isPlaying = playingSlug === clip.slug;
                return (
                  <button
                    key={clip.slug}
                    type="button"
                    onClick={() => toggleSampleAudio(clip.slug, clip.audioUrl)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-all cursor-pointer ${
                      isPlaying
                        ? "border-kenya-green bg-kenya-green text-white font-semibold"
                        : "border-border bg-bg-elevated/60 text-text-primary hover:border-kenya-green/60"
                    }`}
                  >
                    {isPlaying ? <Pause className="h-3.5 w-3.5 shrink-0" /> : <Play className="h-3.5 w-3.5 shrink-0 text-kenya-green" />}
                    <span className="max-w-[220px] truncate">{clip.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {chapters.length > 0 && activeChapter && (
            <div className="rounded-xl border border-kenya-green/30 bg-kenya-green/5 p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-kenya-green flex items-center gap-1.5">
                <Volume2 className="h-3.5 w-3.5" />
                Spoken Phrasebook Chapters ({chapters.length} Chapters)
              </p>
              <div className="flex flex-wrap gap-1.5">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      ch.id === activeChapter.id
                        ? "border-kenya-green bg-kenya-green text-white"
                        : "border-border bg-bg-card text-text-secondary hover:border-kenya-green/50"
                    }`}
                  >
                    {ch.title}
                  </button>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-3.5 space-y-2">
                <p className="text-sm font-bold text-text-primary">{activeChapter.title}</p>
                <audio key={activeChapter.id} controls preload="none" className="w-full h-10">
                  <source src={activeChapter.audioUrl} />
                  {activeChapter.fallbackUrl && activeChapter.fallbackUrl !== activeChapter.audioUrl && (
                    <source src={activeChapter.fallbackUrl} type="audio/mpeg" />
                  )}
                  Your browser does not support embedded audio playback.
                </audio>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Days of the Week, Months, Currency & Alphabet */}
      {(hasCalendar || (grammarShard?.orthographyLetters?.length ?? 0) > 0) && (
        <section className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gold" />
              Calendar, Currency &amp; Alphabet in {languageName}
            </h2>
            {(grammarShard?.currencyName || cldr?.currencyName) && (
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                KES: {grammarShard?.currencyName || cldr?.currencyName}
              </span>
            )}
          </div>
          {((grammarShard?.days?.length ?? 0) > 0 || (cldr?.days?.length ?? 0) > 0) && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Days of the Week</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {(grammarShard?.days?.length
                  ? grammarShard.days
                  : (cldr?.days ?? []).map((d, i) => ({
                      english: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i] || `Day ${i + 1}`,
                      local: d,
                    }))
                ).map((d, idx) => (
                  <div
                    key={`day-${idx}`}
                    className="rounded-xl border border-border bg-bg-elevated px-3 py-2 text-xs min-w-0 break-words"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-text-muted">{d.english}</p>
                    <p className="font-bold text-text-primary mt-0.5">{d.local}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {((grammarShard?.months?.length ?? 0) > 0 || (cldr?.months?.length ?? 0) > 0) && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Months</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {(grammarShard?.months?.length
                  ? grammarShard.months
                  : (cldr?.months ?? []).map((m, i) => ({
                      english: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i] || `M${i + 1}`,
                      local: m,
                    }))
                ).map((m, idx) => (
                  <div
                    key={`mo-${idx}`}
                    className="rounded-xl border border-gold/25 bg-gold/5 px-3 py-2 text-xs min-w-0 break-words"
                  >
                    <p className="text-[10px] font-medium text-text-muted">{idx + 1}. {m.english}</p>
                    <p className="font-semibold text-text-primary mt-0.5">{m.local}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(grammarShard?.orthographyLetters?.length ?? 0) > 0 && (
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Writing System Letters</h3>
              <div className="flex flex-wrap gap-1.5">
                {grammarShard!.orthographyLetters.map((ltr, idx) => (
                  <span
                    key={`ltr-${idx}`}
                    className="rounded-lg border border-border bg-bg-elevated px-2.5 py-1 text-xs font-semibold text-text-primary"
                  >
                    {ltr}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Pronunciation Sound Guide & Verb Conjugations */}
      {(hasPronunciationOrMorph || (grammarShard?.conjugations?.length ?? 0) > 0) && (
        <section className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8 space-y-5">
          <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-kenya-green" />
            {languageName} Sounds &amp; Word Formation
          </h2>

          {grammarShard && (grammarShard.phonology.consonants.length > 0 || grammarShard.phonology.vowels.length > 0) ? (
            <div className="space-y-3">
              {grammarShard.phonology.vowels.length > 0 && (
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Vowels ({grammarShard.phonology.vowels.length})
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grammarShard.phonology.vowels.map((p, idx) => (
                      <span
                        key={`v-${idx}`}
                        title={p.allophones ? `Variants: ${p.allophones}` : undefined}
                        className="rounded-lg border border-gold/30 bg-gold/5 px-2.5 py-1 text-xs font-mono text-text-primary"
                      >
                        /{p.symbol}/
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {grammarShard.phonology.consonants.length > 0 && (
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Consonants ({grammarShard.phonology.consonants.length})
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grammarShard.phonology.consonants.map((p, idx) => (
                      <span
                        key={`c-${idx}`}
                        title={p.allophones ? `Variants: ${p.allophones}` : undefined}
                        className="rounded-lg border border-border bg-bg-elevated px-2.5 py-1 text-xs font-mono text-text-primary"
                      >
                        /{p.symbol}/
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {grammarShard.phonology.tones.length > 0 && (
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Tone Patterns ({grammarShard.phonology.tones.length})
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grammarShard.phonology.tones.map((p, idx) => (
                      <span
                        key={`t-${idx}`}
                        className="rounded-lg border border-sky/30 bg-sky/10 px-2.5 py-1 text-xs font-mono text-sky"
                      >
                        {p.symbol}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : phonemes.length > 0 ? (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Sound Inventory ({phonemes.length} sounds)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {phonemes.map((seg, idx) => (
                  <span
                    key={`ph-${idx}`}
                    className="rounded-lg border border-border bg-bg-elevated px-2.5 py-1 text-xs font-mono text-text-primary"
                  >
                    /{seg}/
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {grammarShard && grammarShard.conjugations.length > 0 ? (
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Interactive Verb Conjugations ({grammarShard.conjugations.length} verbs)
                </h3>
                <CustomSelect
                  value={selectedVerbLemma}
                  onChange={(e) => setSelectedVerbLemma(e.target.value)}
                  className="input-field w-full sm:w-auto sm:min-w-[12rem] max-w-full min-w-0 py-1.5 text-xs"
                >
                  {grammarShard.conjugations.map((g) => (
                    <option key={g.lemma} value={g.lemma}>
                      {g.lemma} ({g.forms.length} forms)
                    </option>
                  ))}
                </CustomSelect>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {(grammarShard.conjugations.find((g) => g.lemma === selectedVerbLemma) ?? grammarShard.conjugations[0]).forms.map((f, idx) => (
                  <div
                    key={`conj-${idx}`}
                    className="rounded-xl border border-border bg-bg-elevated/60 px-3 py-2 text-xs"
                  >
                    <p className="font-bold text-gold">{f.form}</p>
                    <p className="text-[0.68rem] text-text-muted mt-0.5">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : morphologySamples.length > 0 ? (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Word Forms &amp; Inflections
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {morphologySamples.slice(0, 12).map((m, idx) => (
                  <div
                    key={`morph-${idx}`}
                    className="rounded-xl border border-border bg-bg-elevated/60 px-3 py-2 text-xs"
                  >
                    <p className="font-bold text-text-primary">{m.form}</p>
                    <p className="text-[0.68rem] text-text-muted mt-0.5">Root: {m.lemma} · {m.features}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      )}

      {/* Everyday Words & Reading Practice */}
      {hasReadingOrWords && (
        <section className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8 space-y-5">
          <h2 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold" />
            {languageName} Everyday Words &amp; Reading Practice
          </h2>

          {everydayWords.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                Most Common Everyday Words
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {everydayWords.slice(0, 24).map((fw, idx) => (
                  <span
                    key={`fw-${idx}`}
                    className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-primary"
                  >
                    {fw.word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {readings.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Real {languageName} Sentences &amp; Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {readings.slice(0, 8).map((item, idx) => (
                  <div
                    key={`read-${idx}`}
                    className="rounded-xl border border-border bg-bg-elevated/50 p-3.5 text-xs"
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

          {readingArticles.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Further {languageName} Reading
              </h3>
              <div className="flex flex-wrap gap-2">
                {readingArticles.map((art, idx) => (
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
      )}
    </div>
  );
}
