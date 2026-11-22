"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Headphones,
  HelpCircle,
  Newspaper,
  Search,
  Sparkles,
  Volume2,
  XCircle,
} from "lucide-react";
import { getLanguageOpenCorpus, type OpenCorpusAudioChapter } from "@/lib/open-corpus";
import {
  loadAudioShard,
  loadQuizzesShard,
  loadReadersShard,
  type AudioShardClip,
  type QuizQuestionItem,
  type ReadersShard,
} from "@/lib/learning-shards";
import { playLanguageAudio } from "@/lib/language-audio";

interface ListenReadViewProps {
  languageId: string;
  languageName: string;
}

type SubTab = "listen" | "read" | "quiz";

export default function ListenReadView({ languageId, languageName }: ListenReadViewProps) {
  const langMeta = getLanguageOpenCorpus(languageId);
  const chapters: OpenCorpusAudioChapter[] = langMeta?.audioChapters ?? [];
  const shards = langMeta?.shards;

  const hasListen = (shards?.audioCount ?? langMeta?.r2AudioClips ?? 0) > 0 || chapters.length > 0;
  const hasRead =
    (shards?.storiesCount ?? 0) > 0 ||
    (shards?.sentencesCount ?? 0) > 0 ||
    (shards?.articlesCount ?? 0) > 0 ||
    (langMeta?.sampleReadings?.length ?? 0) > 0 ||
    (langMeta?.wikimediaArticles?.length ?? 0) > 0;
  const hasQuiz = (shards?.quizCount ?? 0) > 0;

  const defaultTab: SubTab = hasListen ? "listen" : hasRead ? "read" : "quiz";
  const [subTab, setSubTab] = useState<SubTab>(defaultTab);

  // Listening state
  const [audioClips, setAudioClips] = useState<AudioShardClip[]>(langMeta?.nativeAudioSamples ?? []);
  const [audioSearch, setAudioSearch] = useState("");
  const [audioLimit, setAudioLimit] = useState(36);
  const [playingSlug, setPlayingSlug] = useState<string | null>(null);
  const [slowMode, setSlowMode] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id ?? "");

  // Reading state
  const [readers, setReaders] = useState<ReadersShard | null>(null);
  const [expandedStoryIdx, setExpandedStoryIdx] = useState<number | null>(0);
  const [expandedBiIdx, setExpandedBiIdx] = useState<number | null>(0);
  const [showBiEnglish, setShowBiEnglish] = useState<boolean>(true);
  const [chapterSearch, setChapterSearch] = useState<string>("");
  const [showChapterEnglish, setShowChapterEnglish] = useState<boolean>(true);
  const [expandedNewsIdx, setExpandedNewsIdx] = useState<number | null>(null);
  const [sentenceLimit, setSentenceLimit] = useState(24);
  const [linkLimit, setLinkLimit] = useState(16);

  // Quiz state
  const [questions, setQuestions] = useState<QuizQuestionItem[]>([]);
  const [quizFilter, setQuizFilter] = useState<"all" | "reading" | "knowledge" | "science">("all");
  const [qIndex, setQIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, answered: 0 });

  useEffect(() => {
    let active = true;
    if (shards?.audioCount) {
      loadAudioShard(languageId).then((res) => {
        if (active && res?.clips?.length) setAudioClips(res.clips);
      });
    }
    if (hasRead || chapters.length > 0) {
      loadReadersShard(languageId).then((res) => {
        if (active && res) setReaders(res);
      });
    }
    if (hasQuiz) {
      loadQuizzesShard(languageId).then((res) => {
        if (active && res?.questions?.length) setQuestions(res.questions);
      });
    }
    return () => {
      active = false;
    };
  }, [languageId, shards?.audioCount, hasRead, hasQuiz, chapters.length]);

  const filteredClips = useMemo(() => {
    const q = audioSearch.trim().toLowerCase();
    if (!q) return audioClips;
    return audioClips.filter((c) => c.label.toLowerCase().includes(q));
  }, [audioClips, audioSearch]);

  const filteredQuestions = useMemo(() => {
    if (quizFilter === "all") return questions;
    return questions.filter((q) => q.type === quizFilter);
  }, [questions, quizFilter]);

  const currentQuestion = filteredQuestions[qIndex] ?? null;
  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? chapters[0];

  const handlePlayClip = (clip: AudioShardClip) => {
    setPlayingSlug(clip.slug);
    playLanguageAudio(
      { translation: clip.label, audioFile: clip.audioUrl },
      languageId,
      { rate: slowMode ? 0.75 : 1.0 }
    );
    window.setTimeout(() => {
      setPlayingSlug((cur) => (cur === clip.slug ? null : cur));
    }, 1800);
  };

  const handleSelectChoice = (idx: number) => {
    if (selectedChoice !== null || !currentQuestion) return;
    setSelectedChoice(idx);
    setScore((prev) => ({
      correct: prev.correct + (idx === currentQuestion.correctIndex ? 1 : 0),
      answered: prev.answered + 1,
    }));
  };

  const handleNextQuestion = () => {
    setSelectedChoice(null);
    setQIndex((prev) => (prev + 1 < filteredQuestions.length ? prev + 1 : 0));
  };

  if (!hasListen && !hasRead && !hasQuiz) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-bg-card p-6 text-center text-sm text-text-secondary">
        Listening recordings and reading passages for {languageName} are being prepared. Use Skill Path, Flashcards, and Mini-Games to keep practicing.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5 pb-10">
      {/* Sub-navigation pills */}
      <div className="flex flex-wrap items-center gap-2">
        {hasListen && (
          <button
            type="button"
            onClick={() => setSubTab("listen")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              subTab === "listen"
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
            }`}
          >
            <Headphones className="h-4 w-4" />
            <span>Listening ({(audioClips.length || langMeta?.r2AudioClips || 0).toLocaleString("en-KE")})</span>
          </button>
        )}
        {hasRead && (
          <button
            type="button"
            onClick={() => setSubTab("read")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              subTab === "read"
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>
              Stories &amp; Reading (
              {(
                (readers?.stories.length ?? shards?.storiesCount ?? 0) +
                (readers?.sentences.length ?? shards?.sentencesCount ?? 0) +
                (readers?.newsArticles.length ?? 0)
              ).toLocaleString("en-KE")}
              )
            </span>
          </button>
        )}
        {hasQuiz && (
          <button
            type="button"
            onClick={() => setSubTab("quiz")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              subTab === "quiz"
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Comprehension Quiz ({(questions.length || shards?.quizCount || 0).toLocaleString("en-KE")})</span>
          </button>
        )}
      </div>

      {/* 1. LISTENING STUDIO */}
      {subTab === "listen" && hasListen && (
        <div className="space-y-5">
          {chapters.length > 0 && activeChapter && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                    <Headphones className="h-4 w-4 text-gold" />
                    <span>{languageName} Spoken Phrasebook Chapters</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Full guided audio chapters for natural rhythm and pronunciation.
                  </p>
                </div>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-xs font-semibold text-gold">
                  {chapters.length} chapters
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
                      ch.id === activeChapter.id
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-border bg-bg-elevated/60 text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    Ch. {ch.number}: {ch.title}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-border/70 bg-bg-elevated/60 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-text-primary">
                    Chapter {activeChapter.number}: {activeChapter.title}
                  </p>
                  {activeChapter.sizeMb && (
                    <span className="text-[11px] text-text-muted">{activeChapter.sizeMb} MB audio</span>
                  )}
                </div>
                {activeChapter.topics && activeChapter.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {activeChapter.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-border/70 bg-bg-card px-2 py-0.5 text-[11px] text-text-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <audio controls preload="none" src={activeChapter.audioUrl} className="w-full h-10" />

                {(() => {
                  const rawPhrases = readers?.chapterTranscripts?.[activeChapter.id] ?? [];
                  if (rawPhrases.length === 0) return null;
                  const cq = chapterSearch.trim().toLowerCase();
                  const visiblePhrases = cq
                    ? rawPhrases.filter(
                        (p) =>
                          p.dholuo.toLowerCase().includes(cq) ||
                          p.english.toLowerCase().includes(cq)
                      )
                    : rawPhrases;
                  return (
                    <div className="pt-2 border-t border-border/60 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-gold">
                          Follow-Along Phrasebook Transcript ({rawPhrases.length} phrases)
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setShowChapterEnglish((v) => !v)}
                            className="rounded-lg border border-border bg-bg-card px-2.5 py-1 text-[11px] font-semibold text-text-secondary hover:text-gold cursor-pointer"
                          >
                            {showChapterEnglish ? "Hide English" : "Show English"}
                          </button>
                          <input
                            type="text"
                            value={chapterSearch}
                            onChange={(e) => setChapterSearch(e.target.value)}
                            placeholder="Search chapter phrases..."
                            className="w-40 sm:w-48 rounded-lg border border-border bg-bg-card px-2.5 py-1 text-xs text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="max-h-72 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-2 pr-1">
                        {visiblePhrases.map((ph, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border/60 bg-bg-card px-3 py-2 text-xs space-y-0.5"
                          >
                            <p className="font-bold text-gold">{ph.dholuo}</p>
                            {showChapterEnglish && (
                              <p className="text-text-secondary">{ph.english}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {audioClips.length > 0 && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-sky" />
                    <span>Native Speaker Listening Deck</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Tap any word or phrase to hear natural {languageName} pronunciation.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSlowMode((s) => !s)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      slowMode
                        ? "border-sky bg-sky/15 text-sky"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {slowMode ? "0.75x Slow On" : "1.0x Normal Speed"}
                  </button>
                  <span className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-xs font-medium text-text-secondary">
                    {filteredClips.length.toLocaleString("en-KE")} clips
                  </span>
                </div>
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                <input
                  type="text"
                  value={audioSearch}
                  onChange={(e) => {
                    setAudioSearch(e.target.value);
                    setAudioLimit(36);
                  }}
                  placeholder={`Filter ${audioClips.length.toLocaleString("en-KE")} ${languageName} recordings...`}
                  className="w-full rounded-xl border border-border bg-bg-elevated pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-gold/60 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {filteredClips.slice(0, audioLimit).map((clip) => {
                  const isPlaying = playingSlug === clip.slug;
                  return (
                    <button
                      key={clip.slug}
                      type="button"
                      onClick={() => handlePlayClip(clip)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left transition-all cursor-pointer ${
                        isPlaying
                          ? "border-sky bg-sky/15 text-sky"
                          : "border-border/70 bg-bg-elevated/60 hover:border-gold/50 text-text-primary"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium truncate">{clip.label}</span>
                      <Volume2 className={`h-4 w-4 shrink-0 ${isPlaying ? "text-sky animate-pulse" : "text-gold"}`} />
                    </button>
                  );
                })}
              </div>

              {filteredClips.length > audioLimit && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setAudioLimit((n) => n + 48)}
                    className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/20 transition-colors cursor-pointer"
                  >
                    Load more recordings ({(filteredClips.length - audioLimit).toLocaleString("en-KE")} remaining)
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 2. STORIES & READING LIBRARY */}
      {subTab === "read" && hasRead && (
        <div className="space-y-5">
          {/* Full Stories */}
          {readers && readers.stories.length > 0 && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gold" />
                    <span>{languageName} Short Stories</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Tap any story to read the full text in {languageName}.
                  </p>
                </div>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-xs font-semibold text-gold">
                  {readers.stories.length} {readers.stories.length === 1 ? "story" : "stories"}
                </span>
              </div>

              <div className="space-y-2.5">
                {readers.stories.map((story, idx) => {
                  const isOpen = expandedStoryIdx === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-border/70 bg-bg-elevated/50 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedStoryIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-bg-elevated transition-colors cursor-pointer"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-text-primary truncate">{story.title}</p>
                          {story.wordCount && (
                            <p className="text-[11px] text-text-muted">{story.wordCount} words</p>
                          )}
                        </div>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-gold shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-text-muted shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="border-t border-border/60 px-4 py-3.5 text-sm leading-relaxed text-text-primary whitespace-pre-line">
                          {story.text}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bilingual Passages with English Translations */}
          {readers?.bilingualReadings && readers.bilingualReadings.length > 0 && (
            <div className="rounded-2xl border border-gold/25 bg-bg-card p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-kenya-green" />
                    <span>Bilingual {languageName} &amp; English Readings</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Read authentic {languageName} passages side by side with full English translations.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowBiEnglish((v) => !v)}
                  className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold hover:bg-gold/20 cursor-pointer"
                >
                  {showBiEnglish ? "Hide English Translation" : "Show English Translation"}
                </button>
              </div>
              <div className="space-y-2.5">
                {readers.bilingualReadings.slice(0, 20).map((item, idx) => {
                  const isOpen = expandedBiIdx === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-border/70 bg-bg-elevated/50 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedBiIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-bg-elevated transition-colors cursor-pointer"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-text-primary truncate">{item.title}</p>
                          {showBiEnglish && item.englishTitle && (
                            <p className="text-xs text-text-muted truncate">{item.englishTitle}</p>
                          )}
                        </div>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-gold shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-text-muted shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="border-t border-border/60 px-4 py-3.5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-gold mb-1">{languageName}</p>
                            <p className="text-text-primary whitespace-pre-line">{item.text}</p>
                          </div>
                          {showBiEnglish && (
                            <div className="border-t md:border-t-0 md:border-l border-border/50 pt-3 md:pt-0 md:pl-4">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-sky mb-1">English Translation</p>
                              <p className="text-text-secondary whitespace-pre-line">{item.english}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Everyday Practice Sentences */}
          {((readers?.sentences?.length ?? 0) > 0 || (langMeta?.sampleReadings?.length ?? 0) > 0) && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sky" />
                    <span>Everyday Reading Sentences</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Real-world {languageName} sentences to build reading fluency.
                  </p>
                </div>
                <span className="rounded-full border border-border bg-bg-elevated px-2.5 py-0.5 text-xs text-text-secondary">
                  {(readers?.sentences?.length || langMeta?.sampleReadings?.length || 0).toLocaleString("en-KE")} sentences
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {(readers?.sentences?.length ? readers.sentences : langMeta?.sampleReadings ?? [])
                  .slice(0, sentenceLimit)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/70 bg-bg-elevated/50 p-3.5 space-y-1"
                    >
                      <p className="text-sm font-medium text-text-primary leading-relaxed">{item.text}</p>
                      {item.english && (
                        <p className="text-xs text-text-secondary italic">{item.english}</p>
                      )}
                    </div>
                  ))}
              </div>

              {(readers?.sentences?.length ?? 0) > sentenceLimit && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setSentenceLimit((n) => n + 30)}
                    className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/20 cursor-pointer"
                  >
                    Show more sentences ({(readers!.sentences.length - sentenceLimit).toLocaleString("en-KE")} more)
                  </button>
                </div>
              )}
            </div>
          )}

          {/* News Articles (Swahili) */}
          {readers && readers.newsArticles.length > 0 && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-emerald-400" />
                  <span>{languageName} News Reading Practice</span>
                </h3>
                <span className="text-xs text-text-muted">{readers.newsArticles.length} articles</span>
              </div>
              <div className="space-y-2">
                {readers.newsArticles.slice(0, 15).map((art, idx) => {
                  const open = expandedNewsIdx === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-border/70 bg-bg-elevated/50 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedNewsIdx(open ? null : idx)}
                        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left cursor-pointer"
                      >
                        <div className="min-w-0">
                          <span className="inline-block rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 mb-1">
                            {art.category}
                          </span>
                          <p className="text-sm font-medium text-text-primary truncate">{art.title}</p>
                        </div>
                        {open ? (
                          <ChevronUp className="h-4 w-4 text-gold shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-text-muted shrink-0" />
                        )}
                      </button>
                      {open && (
                        <div className="border-t border-border/60 px-4 py-3 text-sm leading-relaxed text-text-primary">
                          {art.text}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Further Reading Links */}
          {((readers?.externalLinks?.length ?? 0) > 0 || (langMeta?.wikimediaArticles?.length ?? 0) > 0) && (
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
              <h3 className="text-base font-bold text-text-primary">Further Reading</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(readers?.externalLinks?.length ? readers.externalLinks : langMeta?.wikimediaArticles ?? [])
                  .slice(0, linkLimit)
                  .map((lk, idx) => (
                    <a
                      key={idx}
                      href={lk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-bg-elevated/50 px-3.5 py-2.5 text-xs sm:text-sm text-text-primary hover:border-gold/50 transition-colors"
                    >
                      <span className="truncate font-medium">{lk.title}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-muted shrink-0">
                        {lk.source}
                        <ExternalLink className="h-3 w-3 text-gold" />
                      </span>
                    </a>
                  ))}
              </div>
              {(readers?.externalLinks?.length ?? 0) > linkLimit && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setLinkLimit((n) => n + 20)}
                    className="rounded-xl border border-border bg-bg-elevated px-4 py-1.5 text-xs font-semibold text-text-secondary hover:text-gold cursor-pointer"
                  >
                    Show more reading links ({readers!.externalLinks.length - linkLimit} more)
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. READING COMPREHENSION & KNOWLEDGE QUIZ */}
      {subTab === "quiz" && hasQuiz && (
        <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-gold" />
                <span>{languageName} Reading &amp; Knowledge Challenge</span>
              </h3>
              <p className="text-xs text-text-muted mt-0.5">
                Test real reading comprehension and everyday knowledge in {languageName}.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                Score: {score.correct} / {score.answered}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(["all", "reading", "knowledge", "science"] as const).map((mode) => {
              const cnt = mode === "all" ? questions.length : questions.filter((q) => q.type === mode).length;
              if (mode !== "all" && cnt === 0) return null;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setQuizFilter(mode);
                    setQIndex(0);
                    setSelectedChoice(null);
                  }}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize cursor-pointer ${
                    quizFilter === mode
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {mode === "all" ? `All (${cnt})` : `${mode} (${cnt})`}
                </button>
              );
            })}
          </div>

          {currentQuestion ? (
            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>
                  Question {qIndex + 1} of {filteredQuestions.length}
                </span>
                {currentQuestion.subject && (
                  <span className="rounded bg-bg-elevated px-2 py-0.5 font-medium text-text-secondary">
                    {currentQuestion.subject}
                  </span>
                )}
              </div>

              {currentQuestion.passage && (
                <div className="rounded-xl border border-gold/25 bg-bg-elevated/70 p-4 text-sm leading-relaxed text-text-primary">
                  {currentQuestion.passage}
                </div>
              )}

              <p className="text-sm sm:text-base font-bold text-text-primary">
                {currentQuestion.question}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {currentQuestion.choices.map((choice, idx) => {
                  const isSelected = selectedChoice === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;
                  let style = "border-border bg-bg-elevated/60 hover:border-gold/50 text-text-primary";
                  if (selectedChoice !== null) {
                    if (isCorrect) {
                      style = "border-emerald-500/60 bg-emerald-500/15 text-emerald-300";
                    } else if (isSelected) {
                      style = "border-rose-500/60 bg-rose-500/15 text-rose-300";
                    } else {
                      style = "border-border/50 bg-bg-elevated/30 text-text-muted";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={selectedChoice !== null}
                      onClick={() => handleSelectChoice(idx)}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer disabled:cursor-default ${style}`}
                    >
                      <span>{choice}</span>
                      {selectedChoice !== null && isCorrect && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      )}
                      {selectedChoice !== null && isSelected && !isCorrect && (
                        <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedChoice !== null && (
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-bg-primary hover:bg-gold-light transition-colors cursor-pointer"
                  >
                    Next Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-text-muted">Loading comprehension questions...</p>
          )}
        </div>
      )}
    </div>
  );
}
