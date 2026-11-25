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
 * Review ledger for public-domain OCR exports in `src/data/languages data`.
 */
export const OCR_SOURCE_REVIEWS: OcrSourceReview[] = [
  {
    sourceId: 'kavirondo-handbook-1920',
    folder: 'languages data/luo/Kavirondo guidebook',
    languageLabels: ['luo', 'eng'],
    pageRecords: 68,
    dictionaryRecords: 3,
    pagesNeedingReview: 28,
    repetitionLoops: 2,
    status: 'candidate-review',
    appDestination: 'dictionaries/luo.json and the Dholuo course',
    reason:
      'Public-domain 1920 Kavirondo Handbook OCR retained alongside the verified 1920 transcription.',
  },
];
