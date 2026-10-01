export interface LanguageSource {
  id: string;
  title: string;
  fileName: string;
  processedPath?: string;
  languages: string[];
  published: string;
  contribution: string;
  appUses: string[];
  contentTypes: ('vocabulary' | 'grammar' | 'dialogue' | 'cultural-reference')[];
  ingestionStatus: 'integrated' | 'research-only';
  coverageNote: string;
}

/**
 * Local reference corpus used to build dictionaries, lessons, and editorial content.
 * Keep this manifest in sync when a new source is added to ./raw.
 */
export const LANGUAGE_SOURCES: LanguageSource[] = [
  {
    id: 'luyia-grammar',
    title: 'A First Luyia Grammar',
    fileName: 'A FIRST LUYIA GRAMMAR with_ (z-library.sk, 1lib.sk, z-lib.sk)_extracted.txt',
    languages: ['luhya'],
    published: 'Reference edition',
    contribution: 'Grammar patterns and vocabulary for Luhya lessons.',
    appUses: ['dictionary', 'grammar lessons', 'blog research'],
    contentTypes: ['grammar', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Reviewed grammar examples and vocabulary are represented in the Luhya dictionary and course; the full extracted text remains the reference source.',
  },
  {
    id: 'gusii-introduction',
    title: 'A Practical Introduction to Gusii',
    fileName: 'A practical introduction to Gusii -- Wilfred H_ Whiteley -- 1956 -- East African Literature Bureau_ -- 8682db6568fa94480ef196c9a571332d -- Anna’s Archive_extracted.txt',
    languages: ['kisii'],
    published: '1956',
    contribution: 'Core Ekegusii vocabulary, dialogues, and cultural context.',
    appUses: ['dictionary', 'course lessons', 'blog research'],
    contentTypes: ['vocabulary', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Vocabulary and selected teaching material are represented in the Kisii dictionary and course; dialogues and contextual passages remain source material for editorial review.',
  },
  {
    id: 'kikuyu-short-grammar',
    title: 'A Short Kikuyu Grammar',
    fileName: 'A Short Kikuyu Grammar - En_extracted.txt',
    languages: ['kikuyu'],
    published: 'Reference edition',
    contribution: 'English–Gĩkũyũ and Gĩkũyũ–English vocabulary, variants, and common phrases.',
    appUses: ['dictionary', 'grammar lessons', 'blog research'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Grammar-reference vocabulary is integrated; grammatical explanations and examples remain available as research material rather than automatic translations.',
  },
  {
    id: 'bantu-beliefs',
    title: 'Bantu Beliefs and Magic',
    fileName: 'bantubeliefsmagi00hobl_extracted.txt',
    languages: ['kikuyu', 'kamba'],
    published: 'Reference edition',
    contribution: 'Comparative cultural context for carefully attributed editorial content.',
    appUses: ['cultural notes', 'blog research'],
    contentTypes: ['cultural-reference'],
    ingestionStatus: 'research-only',
    coverageNote: 'The historical monograph is represented by an attributed editorial brief. Its cultural claims are not imported as translations and require community review.',
  },
  {
    id: 'first-lessons-kikuyu',
    title: 'First Lessons in Kikuyu',
    fileName: 'First lessons in Kikuyu (L_ (z-library.sk, 1lib.sk, z-lib.sk)_extracted.txt',
    languages: ['kikuyu'],
    published: 'Reference edition',
    contribution: 'Beginner vocabulary and graded Gĩkũyũ examples.',
    appUses: ['dictionary', 'beginner course', 'blog research'],
    contentTypes: ['vocabulary', 'dialogue', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Beginner vocabulary is integrated into the Kikuyu dictionary; lesson and dialogue material is used selectively in the course.',
  },
  {
    id: 'maasai-dictionary',
    title: 'Maasai Dictionary',
    fileName: 'Maasai Dictionary (Charles Richmond)_extracted.txt',
    languages: ['maasai'],
    published: 'Reference edition',
    contribution: 'Maasai vocabulary organized into practical categories.',
    appUses: ['dictionary', 'blog research'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Categorized dictionary entries are integrated into the Maasai dictionary; historical spellings and meanings should be checked with fluent speakers.',
  },
  {
    id: 'teso-introduction',
    title: 'Teso: An Introduction to the Ateso Language',
    fileName: 'Teso; An Introduction to the Ateso Language (Hilders & Lawrence)_extracted.txt',
    languages: ['teso'],
    published: '1957',
    contribution: 'Ateso vocabulary, grammar patterns, and cultural examples.',
    appUses: ['dictionary', 'course lessons', 'blog research'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Reference vocabulary and selected course material are integrated into the Teso dictionary and course; grammar and cultural examples remain attributed source material.',
  },
  {
    id: 'gusii-tense',
    title: 'The Tense System of Gusii',
    fileName: 'The tense system of Gusii (W H Whiteley) (z-library.sk, 1lib.sk, z-lib.sk)_extracted.txt',
    languages: ['kisii'],
    published: 'Reference edition',
    contribution: 'Tense and aspect reference for future Ekegusii grammar lessons.',
    appUses: ['grammar lessons', 'blog research'],
    contentTypes: ['grammar', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'The tense-system reference is linked to the Kisii language record and contributes reviewed reference vocabulary; its grammatical analysis is not flattened into word translations.',
  },
  {
    id: 'turkana-grammar',
    title: 'Turkana Grammatical Notes and Vocabulary',
    fileName: 'Turkana Grammatical Notes and Vocabulary (Barton) (1921)_extracted.txt',
    languages: ['turkana'],
    published: '1921',
    contribution: 'Turkana grammatical notes and historical vocabulary.',
    appUses: ['dictionary', 'grammar lessons', 'blog research'],
    contentTypes: ['grammar', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Historical vocabulary is integrated into the Turkana dictionary; the source explicitly notes limits in transcription and requires contemporary linguistic review.',
  },
  {
    id: 'kamba-kikuyu-vocabularies',
    title: 'Vocabularies of the Kamba and Kikuyu Languages',
    fileName: 'Vocabularies_of_the_Kamba_amd_Kikuyu_languages_of_East_Afica_(IA_vocabulariesofka00hindiala)_extracted.txt',
    languages: ['kamba', 'kikuyu'],
    published: '1904',
    contribution: 'Comparative Kamba and Gĩkũyũ vocabulary.',
    appUses: ['dictionary', 'comparative language blogs'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Comparative Kamba and Kikuyu vocabulary is integrated into both dictionaries with historical attribution; alternate forms are retained for later review.',
  },
  {
    id: 'wanga-english',
    title: 'Wanga-English Dictionary',
    fileName: 'Wanga-English Dictionary -- Alfred Anangwe, Michael R_ Marlo -- 2008 -- 5cce049c7be07b71116b324c193499a6 -- Anna’s Archive_extracted.txt',
    languages: ['luhya'],
    published: '2008',
    contribution: 'Wanga dialect vocabulary with part-of-speech information.',
    appUses: ['dictionary', 'dialect notes', 'blog research'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Wanga entries are integrated into the Luhya dictionary with part-of-speech and dialect attribution; the source remains the authority for the full wordlist.',
  },
  {
    id: 'kikuyu-proverbs-ocr',
    title: '1,000 Kikuyu Proverbs',
    fileName: 'dictionary_entries.jsonl',
    processedPath: 'languages data/kikuyu/Kikuyu Proverbs - G. Barra',
    languages: ['kikuyu'],
    published: 'Reference edition',
    contribution: 'Proverbs, meanings, themes, and cultural context for the proverb explorer and editorial work.',
    appUses: ['proverb explorer', 'course cultural notes', 'blog research'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Reviewed proverb records are integrated into the proverb explorer; low-confidence OCR records remain excluded from dictionary data.',
  },
  {
    id: 'kavirondo-guidebook-ocr',
    title: 'Kavirondo Guidebook',
    fileName: 'extracted_data.md',
    processedPath: 'languages data/luo/Kavirondo guidebook',
    languages: ['luo'],
    published: 'Reference edition',
    contribution: 'Historical Dholuo/Luo language and cultural reference material; OCR entries require review before dictionary use.',
    appUses: ['course research', 'blog research'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'research-only',
    coverageNote: 'Mixed-language OCR is retained for research and is not promoted into the Luo dictionary until language labels and transcriptions are reviewed.',
  },
  {
    id: 'turkana-classified-vocabulary-ocr',
    title: 'A Classified Vocabulary of Turkana',
    fileName: 'dictionary_entries.jsonl',
    processedPath: 'languages data/turkana/A classified vocabulary of Turkana',
    languages: ['turkana'],
    published: 'Reference edition',
    contribution: 'Classified Turkana vocabulary and semantic groupings; OCR entries require language and accuracy review.',
    appUses: ['course research', 'blog research'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'research-only',
    coverageNote: 'Classified OCR vocabulary is retained for research and is not promoted into the Turkana dictionary until labels and transcriptions are reviewed.',
  },
];

const LANGUAGE_ID_ALIASES: Record<string, string> = {
  dholuo: 'luo',
  luyia: 'luhya',
  ekegusii: 'kisii',
  ateso: 'teso',
};

export function normalizeLanguageId(languageId: string): string {
  const normalized = languageId.trim().toLowerCase().replace(/\s+/g, '');
  return LANGUAGE_ID_ALIASES[normalized] ?? normalized;
}

export function getSourcesForLanguage(languageId: string): LanguageSource[] {
  const normalizedId = normalizeLanguageId(languageId);
  return LANGUAGE_SOURCES.filter((source) => source.languages.includes(normalizedId));
}