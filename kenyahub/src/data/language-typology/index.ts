import profilesData from "./profiles.json";

export interface LanguageTypologyProfile {
  iso639_3: string;
  glottocode: string;
  familyPath: string[];
  cldrLocale?: string;
  cldrCoverage?: "Modern" | "Basic" | "Core";
  panlexEntries?: number;
  kaikkiEntries?: number;
  unimorphEntries?: number;
  phoibleSegments?: number;
  apicsFeatures?: number;
  staging?: boolean;
  commercialAudioSources: string[];
  cldfDatabases: string[];
}

export interface LanguageTypologyDataset {
  version: string;
  generatedFrom: string;
  cldrVersion: string;
  glottologVersion: string;
  excludedCldfConstituents: string[];
  languages: Record<string, LanguageTypologyProfile>;
}

export const LANGUAGE_TYPOLOGY_DATASET = profilesData as LanguageTypologyDataset;

export function getTypologyProfile(languageId: string): LanguageTypologyProfile | undefined {
  return LANGUAGE_TYPOLOGY_DATASET.languages[languageId.trim().toLowerCase()];
}

export function getAllTypologyProfiles(): Record<string, LanguageTypologyProfile> {
  return LANGUAGE_TYPOLOGY_DATASET.languages;
}
