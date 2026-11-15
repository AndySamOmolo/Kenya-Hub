// ============================================================
// Kenyan Cultural Wisdom & Proverbs Type Definitions
// ============================================================

export interface ProverbItem {
  id: string;
  languageId: string;
  languageName: string;
  indigenous: string;
  literalTranslation: string;
  meaning: string;
  englishEquivalent?: string;
  theme: 'unity' | 'patience' | 'wisdom' | 'hard-work' | 'humility' | 'family' | 'nature' | 'courage';
  sourceCitation: string;
}

export interface CulturalWisdomItem {
  id: string;
  languageId: string;
  nativeText: string;
  literalTranslation: string;
  meaning: string;
  englishEquivalent?: string;
  category: string;
  source: string;
}
