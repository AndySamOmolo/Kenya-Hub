import rawIndex from "@/data/open-corpus-index.json";

export interface OpenCorpusReading {
  text: string;
  english?: string;
  source: string;
  license: string;
}

export interface OpenCorpusFrequencyWord {
  word: string;
  count?: number | null;
}

export interface OpenCorpusNativeAudioSample {
  slug: string;
  label: string;
  transcript?: string;
  english?: string;
  verifiedTranscript?: boolean;
  audioUrl: string;
}

export interface OpenCorpusAudioChapter {
  id: string;
  number: number;
  title: string;
  slug: string;
  archiveFilename?: string;
  audioUrl: string;
  fallbackUrl?: string;
  sizeMb?: number;
  topics?: string[];
  license: string;
  sourceUrl: string;
}

export interface KslVideoItem {
  id: string;
  title: string;
  gloss: string;
  videoUrl: string;
  category: "maseno-stickman" | "human-sign-bible" | string;
  register?: string;
  reference?: string;
  transcript?: string;
  license: string;
  source: string;
  sourceUrl: string;
}

export interface KslStorybookItem {
  id: string;
  title: string;
  language: string;
  format: string;
  license: string;
  url: string;
  description: string;
}

export interface LanguageShardSummary {
  audioCount: number;
  storiesCount: number;
  sentencesCount: number;
  articlesCount: number;
  quizCount: number;
  freqCount: number;
  hasGrammarShard: boolean;
}

export interface OpenCorpusLanguageData {
  languageId: string;
  r2AudioClips: number;
  nativeAudioSamples?: OpenCorpusNativeAudioSample[];
  cldr: {
    locale: string;
    months: string[];
    days: string[];
    currencyName?: string | null;
    license: string;
  } | null;
  typology: {
    iso639_3: string;
    glottocode: string;
    familyPath: string[];
    cldrLocale?: string | null;
    cldrCoverage?: string | null;
    cldfDatabases: string[];
    commercialAudioSources: string[];
    phoibleSegments?: number | null;
    unimorphEntries?: number | null;
  } | null;
  grambankFeatures?: number;
  sampleReadings: OpenCorpusReading[];
  topFrequencyWords: OpenCorpusFrequencyWord[];
  wikimedia: { id: string; count: number; license: string }[];
  benchmarks: { id: string; rows: number }[];
  audioChapters?: OpenCorpusAudioChapter[];
  phonemes?: string[];
  morphologySamples?: { lemma: string; form: string; features: string }[];
  wikimediaArticles?: { title: string; url: string; source: string }[];
  wikidataLexemes?: string[];
  shards?: LanguageShardSummary;
}

export interface StagedVariety {
  id: string;
  name: string;
  nativeName: string;
  isoCode: string;
  family: string;
  counties: string[];
  totalEntries: number;
  grammarFeatureCount?: number;
  grammarNotes?: string[];
  sampleEntries: {
    english: string;
    translation: string;
    context: string;
    category: string;
  }[];
}

export interface OpenCorpusIndex {
  generatedAt: string;
  cldrVersion: string;
  stats: {
    totalR2AudioClips: number;
    totalAudioChapters?: number;
    totalKslVideos?: number;
    totalStagedVarieties: number;
    totalStagedEntries: number;
    totalBenchmarkRows: number;
    totalReaderSentences: number;
    totalQuizQuestions?: number;
    totalCivicDatasets: number;
    totalWikimediaDatasets: number;
    pendingGatedCount: number;
  };
  languages: Record<string, OpenCorpusLanguageData>;
  stagedVarieties: StagedVariety[];
  ksl: {
    languageId: string;
    iso639_3: string;
    sources: {
      id: string;
      title: string;
      license: string;
      url: string;
      access: string;
      status?: string;
      register?: string;
    }[];
    zenodoFiles: {
      key: string;
      size: number;
      checksum: string;
      downloadUrl: string;
    }[];
    videos?: KslVideoItem[];
    storybooks?: KslStorybookItem[];
    wikidataLexemes?: string[];
    videoCount?: number;
    extractedSignCount?: number;
    glossCount: number;
  };
  benchmarks: { id: string; rows: number }[];
  wikimedia: { id: string; license: string; count: number }[];
  civic: { id: string; license: string; source: string; pageCount?: number | null }[];
}

export const OPEN_CORPUS_INDEX = rawIndex as unknown as OpenCorpusIndex;

export function getLanguageOpenCorpus(languageId?: string): OpenCorpusLanguageData | null {
  if (!languageId) return null;
  return OPEN_CORPUS_INDEX.languages[languageId.trim().toLowerCase()] ?? null;
}
