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

export interface OpenCorpusLanguageData {
  languageId: string;
  r2AudioClips: number;
  cldr: {
    locale: string;
    months: string[];
    days: string[];
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
  sampleReadings: OpenCorpusReading[];
  topFrequencyWords: OpenCorpusFrequencyWord[];
  wikimedia: { id: string; count: number; license: string }[];
  benchmarks: { id: string; rows: number }[];
}

export interface StagedVariety {
  id: string;
  name: string;
  nativeName: string;
  isoCode: string;
  family: string;
  counties: string[];
  totalEntries: number;
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
    totalStagedVarieties: number;
    totalStagedEntries: number;
    totalBenchmarkRows: number;
    totalReaderSentences: number;
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
    }[];
    zenodoFiles: {
      key: string;
      size: number;
      checksum: string;
      downloadUrl: string;
    }[];
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
