// ============================================================
// Kenyan Dictionary & Lexicon Type Definitions
// ============================================================

export interface DictEntry {
  english: string;
  translation: string;
  pronunciation: string;
  context: string;
  audioFile?: string | null;
}

export interface DictCategory {
  id: string;
  name: string;
  icon?: string;
  entries: DictEntry[];
}

export interface Dictionary {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  categories: DictCategory[];
}

export interface DictCategoryMeta {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface DictMeta {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  totalEntries: number;
  categories: DictCategoryMeta[];
}
