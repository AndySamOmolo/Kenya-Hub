export type OcrIngestionStatus = 'integrated' | 'candidate-review';

export interface OcrSourceReview {
  sourceId: string;
  folder: string;
  languageLabels: string[];
  pageRecords: number;
  dictionaryRecords: number;
  pagesNeedingReview: number;
  repetitionLoops: number;
  status: OcrIngestionStatus;
  appDestination: string;
  reason: string;
}

/**
 * Review ledger for OCR exports in `src/data/languages data`.
 * Page OCR is retained for research; only reviewed and verified dictionary records enter live data.
 */
export const OCR_SOURCE_REVIEWS: OcrSourceReview[] = [
  {
    sourceId: 'luyia-grammar',
    folder: 'languages data/luhya/A first course in luyia grammar',
    languageLabels: ['und', 'eng'],
    pageRecords: 224,
    dictionaryRecords: 48,
    pagesNeedingReview: 100,
    repetitionLoops: 19,
    status: 'candidate-review',
    appDestination: 'dictionaries/luhya.json and the Luhya course',
    reason:
      '100 of 224 pages (44.6%) are flagged needs_review, with 19 repetition loops and 7 illegible pages concentrated in the two-column vocabulary glossaries (pages 197–223). Unverified OCR entries are excluded from live app data; the glossary pages should be re-transcribed.',
  },
  {
    sourceId: 'kikuyu-proverbs-ocr',
    folder: 'languages data/kikuyu/Kikuyu Proverbs - G. Barra',
    languageLabels: ['kikuyu', 'kik', 'kiswahili', 'und'],
    pageRecords: 125,
    dictionaryRecords: 324,
    pagesNeedingReview: 21,
    repetitionLoops: 0,
    status: 'integrated',
    appDestination: 'data/kikuyu-proverbs.json and the Language Learning Proverbs & Oral Wisdom hub',
    reason:
      'All 989 proverbs in data/kikuyu-proverbs.json have been audited and repaired for page-break truncations, i.e. splits, multi-line Kikuyu bleeds, and diacritic normalization (ũ/ĩ). Unverified dictionary_entries.jsonl records with mixed language labels remain excluded.',
  },
  {
    sourceId: 'kavirondo-guidebook-ocr',
    folder: 'languages data/luo/Kavirondo guidebook',
    languageLabels: ['luo', 'guz', 'kln', 'eng'],
    pageRecords: 68,
    dictionaryRecords: 3,
    pagesNeedingReview: 28,
    repetitionLoops: 2,
    status: 'candidate-review',
    appDestination: 'dictionaries/luo.json and the Dholuo course',
    reason:
      '28 of 68 pages (41.2%) require review with low self-check similarity and collapsed multi-item dictionary records; excluded from live dictionary data in favour of the clean 1920 Kavirondo Handbook transcription.',
  },
  {
    sourceId: 'turkana-classified-vocabulary-ocr',
    folder: 'languages data/turkana/A classified vocabulary of Turkana',
    languageLabels: ['und'],
    pageRecords: 104,
    dictionaryRecords: 54,
    pagesNeedingReview: 66,
    repetitionLoops: 2,
    status: 'candidate-review',
    appDestination: 'dictionaries/turkana.json and the Turkana course',
    reason:
      '66 of 104 pages (63.5%) require review due to multi-column tabular layout causing English category headers to be parsed as Turkana headwords. Excluded from live dictionary data until re-transcribed.',
  },
];