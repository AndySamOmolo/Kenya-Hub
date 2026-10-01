export type OcrIngestionStatus = 'integrated' | 'candidate-review';

export interface OcrSourceReview {
  sourceId: string;
  folder: string;
  languageLabels: string[];
  pageRecords: number;
  dictionaryRecords: number;
  pagesNeedingReview: number;
  status: OcrIngestionStatus;
  appDestination: string;
  reason: string;
}

/**
 * Review ledger for OCR exports in `src/data/languages data`.
 * Page OCR is retained for research; only reviewed dictionary records enter live data.
 */
export const OCR_SOURCE_REVIEWS: OcrSourceReview[] = [
  {
    sourceId: 'luyia-grammar',
    folder: 'languages data/luhya/A first course in luyia grammar',
    languageLabels: ['und', 'eng'],
    pageRecords: 224,
    dictionaryRecords: 48,
    pagesNeedingReview: 0,
    status: 'integrated',
    appDestination: 'dictionaries/luhya.json and the Luhya course',
    reason: 'Reviewed grammar and vocabulary are represented; unresolved OCR records remain in the source folder.',
  },
  {
    sourceId: 'kikuyu-proverbs-ocr',
    folder: 'languages data/kikuyu/Kikuyu Proverbs - G. Barra',
    languageLabels: ['kikuyu', 'kik', 'kiswahili', 'und'],
    pageRecords: 125,
    dictionaryRecords: 324,
    pagesNeedingReview: 21,
    status: 'integrated',
    appDestination: 'data/kikuyu-proverbs.json and the Kikuyu proverbs tool',
    reason: 'The reviewed proverb dataset is already integrated; mixed-language and low-confidence OCR records are not bulk-imported.',
  },
  {
    sourceId: 'kavirondo-guidebook-ocr',
    folder: 'languages data/luo/Kavirondo guidebook',
    languageLabels: ['luo', 'guz', 'kln', 'eng'],
    pageRecords: 68,
    dictionaryRecords: 3,
    pagesNeedingReview: 28,
    status: 'candidate-review',
    appDestination: 'dictionaries/luo.json and the Dholuo course',
    reason: 'The OCR contains mixed language labels, truncation, and low-confidence pages; use it as research until entries are verified.',
  },
  {
    sourceId: 'turkana-classified-vocabulary-ocr',
    folder: 'languages data/turkana/A classified vocabulary of Turkana',
    languageLabels: ['und'],
    pageRecords: 104,
    dictionaryRecords: 54,
    pagesNeedingReview: 66,
    status: 'candidate-review',
    appDestination: 'dictionaries/turkana.json and the Turkana course',
    reason: 'Most OCR dictionary records have unresolved language labels or low-confidence/truncated text and need linguistic review.',
  },
];