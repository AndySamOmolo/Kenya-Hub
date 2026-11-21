"use client";

import React from "react";
import { BookOpen, Calendar, Database, Globe2, Headphones, Sparkles } from "lucide-react";
import { getLanguageOpenCorpus, OPEN_CORPUS_INDEX } from "@/lib/open-corpus";

interface OpenCorpusPanelProps {
  languageId?: string;
  languageName: string;
}

export default function OpenCorpusPanel({ languageId, languageName }: OpenCorpusPanelProps) {
  const data = getLanguageOpenCorpus(languageId);
  if (!data) return null;

  const hasAny =
    Boolean(data.typology) ||
    data.r2AudioClips > 0 ||
    Boolean(data.cldr) ||
    data.sampleReadings.length > 0 ||
    data.topFrequencyWords.length > 0 ||
    data.wikimedia.length > 0 ||
    data.benchmarks.length > 0;

  if (!hasAny) return null;

  return (
    <section className="rounded-2xl border border-gold/25 bg-bg-card p-5 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-gold" />
          <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">
            Open Linguistic Profile &amp; Verified Corpus ({languageName})
          </h3>
        </div>
        <span className="text-[0.7rem] font-mono text-text-muted">
          CLDR {OPEN_CORPUS_INDEX.cldrVersion} · CC-BY / CC0 / PD
        </span>
      </div>

      {/* Typology & Live R2 Audio Metrics */}
      {data.typology && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="rounded-xl border border-border bg-bg-elevated/60 p-3">
            <p className="text-[0.65rem] uppercase tracking-wider text-text-muted">ISO 639-3 / Glottocode</p>
            <p className="text-sm font-bold text-text-primary font-mono mt-0.5">
              {data.typology.iso639_3} · {data.typology.glottocode}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg-elevated/60 p-3">
            <p className="text-[0.65rem] uppercase tracking-wider text-text-muted flex items-center gap-1">
              <Headphones className="h-3 w-3 text-kenya-green" /> Verified Audio Clips
            </p>
            <p className="text-sm font-bold text-kenya-green mt-0.5">
              {data.r2AudioClips > 0 ? `${data.r2AudioClips.toLocaleString()} clips on R2` : "Audio pipeline ready"}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg-elevated/60 p-3">
            <p className="text-[0.65rem] uppercase tracking-wider text-text-muted">Linguistic Lineage</p>
            <p className="text-xs font-semibold text-text-primary mt-0.5 line-clamp-2">
              {data.typology.familyPath.join(" → ") || "Kenyan Heritage Variety"}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg-elevated/60 p-3">
            <p className="text-[0.65rem] uppercase tracking-wider text-text-muted">CLDF &amp; Standards</p>
            <p className="text-xs font-semibold text-gold mt-0.5">
              {data.typology.cldfDatabases.length > 0
                ? data.typology.cldfDatabases.slice(0, 3).join(", ")
                : "Glottolog · PanLex"}
            </p>
          </div>
        </div>
      )}

      {/* Unicode CLDR 49 Calendar */}
      {data.cldr && (data.cldr.months.length > 0 || data.cldr.days.length > 0) && (
        <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Unicode CLDR {OPEN_CORPUS_INDEX.cldrVersion} Calendar ({data.cldr.locale})
          </p>
          {data.cldr.days.length > 0 && (
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
          )}
          {data.cldr.months.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.cldr.months.map((m, idx) => (
                <span
                  key={`mo-${idx}`}
                  className="rounded-lg border border-gold/20 bg-gold/5 px-2 py-0.5 text-[0.72rem] text-text-secondary"
                >
                  {idx + 1}. {m}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Authentic Reading Sentences (Tatoeba / OER Storybooks) */}
      {data.sampleReadings.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-kenya-green" />
            Authentic Corpus Reading Practice
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.sampleReadings.slice(0, 6).map((item, idx) => (
              <div
                key={`read-${idx}`}
                className="rounded-xl border border-border bg-bg-elevated/40 p-3 text-xs"
              >
                <p className="font-semibold text-text-primary leading-relaxed">{item.text}</p>
                {item.english && (
                  <p className="text-text-secondary mt-1">{item.english}</p>
                )}
                <p className="text-[0.65rem] text-text-muted mt-1.5">
                  {item.source} · {item.license}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* High-Frequency Vocabulary (FineWeb-2 / MADLAD / HPLT / WURA) */}
      {data.topFrequencyWords.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            High-Frequency Authentic Vocabulary (Open Web Corpora)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {data.topFrequencyWords.slice(0, 20).map((fw, idx) => (
              <span
                key={`fw-${idx}`}
                className="rounded-full border border-border bg-bg-elevated/60 px-2.5 py-1 text-xs text-text-primary"
              >
                {fw.word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Wikimedia & NLP Benchmarks */}
      {(data.wikimedia.length > 0 || data.benchmarks.length > 0) && (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[0.72rem] text-text-muted">
          <Globe2 className="h-3.5 w-3.5 text-gold shrink-0" />
          {data.wikimedia.map((w) => (
            <span key={w.id} className="rounded-md border border-border bg-bg-elevated/50 px-2 py-0.5">
              Wikimedia {w.id}: {w.count.toLocaleString()} items
            </span>
          ))}
          {data.benchmarks.slice(0, 5).map((b) => (
            <span key={b.id} className="rounded-md border border-border bg-bg-elevated/50 px-2 py-0.5">
              {b.id}: {b.rows.toLocaleString()} rows
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
