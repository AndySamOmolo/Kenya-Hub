import type {
  CourseSkill,
  CourseUnit,
  LanguageConfig,
  GrammarSection,
  WordPair,
} from "../../shared/data/courses/types";
import type { CourseDefinition } from "../../shared/data/courses/registry";
import {
  PUBLISHED_COURSE_SUMMARIES,
  type CourseCatalogSummary,
} from "../../shared/data/courses/catalog-summary";
import {
  getSourcesForLanguage,
  DICT_META_MAP,
  type Dictionary,
} from "../../shared/data/language-sources";

export { PUBLISHED_COURSE_SUMMARIES, type CourseCatalogSummary };

export interface CanonicalCourseCounts {
  totalUnits: number;
  totalSkills: number;
  totalWords: number;
  dictCategoryCount: number;
  dictTotalEntries: number;
}

/**
 * Computes canonical unit, module/skill, and word counts matching Web LanguageClientPage.tsx
 * by integrating the verified dictionary categories unit from DICT_META_MAP.
 */
export function getCanonicalCourseCounts(
  summary: Pick<CourseCatalogSummary, "config" | "unitCount" | "skillCount" | "wordsCount">
): CanonicalCourseCounts {
  const meta = DICT_META_MAP[summary.config.id];
  const validMetaCats = meta ? meta.categories.filter((c) => c.count > 0) : [];
  const hasDictUnit = validMetaCats.length > 0;
  const dictCategoryCount = validMetaCats.length;
  const dictTotalEntries = meta?.totalEntries || 0;

  return {
    totalUnits: summary.unitCount + (hasDictUnit ? 1 : 0),
    totalSkills: summary.skillCount + dictCategoryCount,
    totalWords: Math.max(summary.wordsCount, dictTotalEntries),
    dictCategoryCount,
    dictTotalEntries,
  };
}

/**
 * Builds the integrated Dictionary CourseUnit matching Web LanguageClientPage.tsx.
 * Populates category metadata immediately (zero eager JSON load) and hydrates word arrays
 * as soon as loadedDict is available.
 */
export function buildDictUnit(
  languageId: string,
  baseUnits: CourseUnit[],
  loadedDict: Dictionary | null
): CourseUnit | null {
  const meta = DICT_META_MAP[languageId];
  if (!meta) return null;
  const validMetaCats = meta.categories.filter((c) => c.count > 0);
  if (validMetaCats.length === 0) return null;

  const courseWordSet = new Set<string>();
  for (const u of baseUnits) {
    for (const sk of u.skills) {
      for (const w of sk.words) {
        courseWordSet.add(
          `${w.target.toLowerCase().trim()}::${w.source.toLowerCase().trim()}`
        );
      }
    }
  }

  const loadedCatMap = new Map(
    (loadedDict?.categories || []).map((c) => [c.id, c])
  );

  const skills: CourseSkill[] = validMetaCats.map((catMeta) => {
    const loadedCat = loadedCatMap.get(catMeta.id);
    const dedupedWords: WordPair[] = [];
    const allCatWords: WordPair[] = [];
    if (loadedCat?.entries) {
      for (const e of loadedCat.entries) {
        const t = e.translation.trim();
        const s = e.english.trim();
        if (!t || !s) continue;
        const pair: WordPair = {
          target: t,
          source: s,
          pronunciation: e.pronunciation || undefined,
          example: e.context || undefined,
          audioFile: e.audioFile || undefined,
        };
        allCatWords.push(pair);
        const key = `${t.toLowerCase()}::${s.toLowerCase()}`;
        if (!courseWordSet.has(key)) {
          dedupedWords.push(pair);
        }
      }
    }
    const words = dedupedWords.length > 0 ? dedupedWords : allCatWords;
    const countLabel = catMeta.count.toLocaleString();
    return {
      id: `dict-cat-${catMeta.id}`,
      title: `Dictionary: ${catMeta.name}`,
      icon: catMeta.icon || "📖",
      description: `Complete ${meta.languageName} dictionary entries for ${catMeta.name.toLowerCase()} (${countLabel} verified entries).`,
      tips: `Practice and search ${countLabel} verified ${meta.languageName} dictionary entries in the ${catMeta.name} category.`,
      words,
      sentences: [],
    };
  });

  return {
    id: `dict-unit-${languageId}`,
    unitNumber: baseUnits.length + 1,
    title: `${meta.languageName} Complete Dictionary (${meta.totalEntries.toLocaleString()} Entries)`,
    description: `All verified ${meta.languageName} dictionary categories integrated for flashcards, vocabulary search, interactive practice, and mini-games.`,
    icon: "📖",
    color: "#D4A017",
    skills,
  };
}

const SUMMARY_IDS = new Set(PUBLISHED_COURSE_SUMMARIES.map((c) => c.config.id));
const COURSE_CACHE = new Map<string, CourseDefinition>();
const GRAMMAR_CACHE = new Map<string, GrammarSection[]>();

export function hasCourseSummary(languageId?: string): boolean {
  return Boolean(languageId && SUMMARY_IDS.has(languageId));
}

function buildLazyCourse(
  config: LanguageConfig,
  units: CourseUnit[],
  grammarSections?: unknown
): CourseDefinition {
  const unitCount = units.length;
  const skillCount = units.reduce((sum, u) => sum + u.skills.length, 0);
  const wordCount = units.reduce(
    (sum, u) => sum + u.skills.reduce((s, sk) => s + sk.words.length, 0),
    0
  );
  return {
    config,
    units,
    ready: unitCount > 0 && skillCount > 0 && wordCount > 0,
    validationIssues: [],
    sourceIds: getSourcesForLanguage(config.id).map((s) => s.id),
    grammarSections: grammarSections as GrammarSection[] | undefined,
    unitCount,
    skillCount,
    wordCount,
  };
}

/**
 * Lazily loads only the course units (~100–180 KB) without eagerly evaluating
 * grammar reference modules until the user opens the Grammar tab.
 */
export function getCourseLazy(languageId: string): CourseDefinition | undefined {
  const cached = COURSE_CACHE.get(languageId);
  if (cached) return cached;

  let loaded: CourseDefinition | undefined;
  switch (languageId) {
    case "kikuyu": { const c = require("../../shared/data/courses/kikuyu/course"); loaded = buildLazyCourse(c.KIKUYU_CONFIG, c.KIKUYU_UNITS); break; }
    case "luo": { const c = require("../../shared/data/courses/luo/course"); loaded = buildLazyCourse(c.LUO_CONFIG, c.LUO_UNITS, c.LUO_GRAMMAR_SECTIONS); break; }
    case "kamba": { const c = require("../../shared/data/courses/kamba/course"); loaded = buildLazyCourse(c.KAMBA_CONFIG, c.KAMBA_UNITS); break; }
    case "turkana": { const c = require("../../shared/data/courses/turkana/course"); loaded = buildLazyCourse(c.TURKANA_CONFIG, c.TURKANA_UNITS); break; }
    case "swahili": { const c = require("../../shared/data/courses/swahili/course"); loaded = buildLazyCourse(c.SWAHILI_CONFIG, c.SWAHILI_UNITS); break; }
    case "luhya": { const c = require("../../shared/data/courses/luhya/course"); loaded = buildLazyCourse(c.LUHYA_CONFIG, c.LUHYA_UNITS); break; }
    case "kalenjin": { const c = require("../../shared/data/courses/kalenjin/course"); loaded = buildLazyCourse(c.KALENJIN_CONFIG, c.KALENJIN_UNITS); break; }
    case "kisii": { const c = require("../../shared/data/courses/kisii/course"); loaded = buildLazyCourse(c.KISII_CONFIG, c.KISII_UNITS); break; }
    case "meru": { const c = require("../../shared/data/courses/meru/course"); loaded = buildLazyCourse(c.MERU_CONFIG, c.MERU_UNITS); break; }
    case "mijikenda": { const c = require("../../shared/data/courses/mijikenda/course"); loaded = buildLazyCourse(c.MIJIKENDA_CONFIG, c.MIJIKENDA_UNITS); break; }
    case "maasai": { const c = require("../../shared/data/courses/maasai/course"); loaded = buildLazyCourse(c.MAASAI_CONFIG, c.MAASAI_UNITS); break; }
    case "somali": { const c = require("../../shared/data/courses/somali/course"); loaded = buildLazyCourse(c.SOMALI_CONFIG, c.SOMALI_UNITS); break; }
    case "teso": { const c = require("../../shared/data/courses/teso/course"); loaded = buildLazyCourse(c.TESO_CONFIG, c.TESO_UNITS); break; }
    case "embu": { const c = require("../../shared/data/courses/embu/course"); loaded = buildLazyCourse(c.EMBU_CONFIG, c.EMBU_UNITS); break; }
    case "taita": { const c = require("../../shared/data/courses/taita/course"); loaded = buildLazyCourse(c.TAITA_CONFIG, c.TAITA_UNITS); break; }
    case "taveta": { const c = require("../../shared/data/courses/taveta/course"); loaded = buildLazyCourse(c.TAVETA_CONFIG, c.TAVETA_UNITS); break; }
    case "pokomo": { const c = require("../../shared/data/courses/pokomo/course"); loaded = buildLazyCourse(c.POKOMO_CONFIG, c.POKOMO_UNITS); break; }
    case "borana": { const c = require("../../shared/data/courses/borana/course"); loaded = buildLazyCourse(c.BORANA_CONFIG, c.BORANA_UNITS); break; }
    case "rendille": { const c = require("../../shared/data/courses/rendille/course"); loaded = buildLazyCourse(c.RENDILLE_CONFIG, c.RENDILLE_UNITS); break; }
    case "samburu": { const c = require("../../shared/data/courses/samburu/course"); loaded = buildLazyCourse(c.SAMBURU_CONFIG, c.SAMBURU_UNITS); break; }
    case "ilchamus": { const c = require("../../shared/data/courses/ilchamus/course"); loaded = buildLazyCourse(c.ILCHAMUS_CONFIG, c.ILCHAMUS_UNITS); break; }
    case "pokot": { const c = require("../../shared/data/courses/pokot/course"); loaded = buildLazyCourse(c.POKOT_CONFIG, c.POKOT_UNITS); break; }
    case "daasanach": { const c = require("../../shared/data/courses/daasanach/course"); loaded = buildLazyCourse(c.DAASANACH_CONFIG, c.DAASANACH_UNITS); break; }
    default: return undefined;
  }

  if (loaded) COURSE_CACHE.set(languageId, loaded);
  return loaded;
}

/**
 * Lazily loads grammar reference sections only when the user opens the Grammar tab.
 */
export function getGrammarSectionsLazy(languageId: string): GrammarSection[] {
  const cached = GRAMMAR_CACHE.get(languageId);
  if (cached) return cached;

  let sections: GrammarSection[] = [];
  switch (languageId) {
    case "kikuyu": sections = require("../../shared/data/courses/kikuyu/grammar-reference").KIKUYU_GRAMMAR_SECTIONS || []; break;
    case "luo": sections = require("../../shared/data/courses/luo/course").LUO_GRAMMAR_SECTIONS || []; break;
    case "kamba": sections = require("../../shared/data/courses/kamba/grammar-reference").KAMBA_GRAMMAR_SECTIONS || []; break;
    case "turkana": sections = require("../../shared/data/courses/turkana/grammar-reference").TURKANA_GRAMMAR_SECTIONS || []; break;
    case "swahili": sections = require("../../shared/data/courses/swahili/grammar-reference").SWAHILI_GRAMMAR_SECTIONS || []; break;
    case "luhya": sections = require("../../shared/data/courses/luhya/grammar-reference").LUHYA_GRAMMAR_SECTIONS || []; break;
    case "kalenjin": sections = require("../../shared/data/courses/kalenjin/grammar-reference").KALENJIN_GRAMMAR_SECTIONS || []; break;
    case "kisii": sections = require("../../shared/data/courses/kisii/grammar-reference").KISII_GRAMMAR_SECTIONS || []; break;
    case "meru": sections = require("../../shared/data/courses/meru/grammar-reference").MERU_GRAMMAR_SECTIONS || []; break;
    case "mijikenda": sections = require("../../shared/data/courses/mijikenda/grammar-reference").MIJIKENDA_GRAMMAR_SECTIONS || []; break;
    case "maasai": sections = require("../../shared/data/courses/maasai/grammar-reference").MAASAI_GRAMMAR_SECTIONS || []; break;
    case "somali": sections = require("../../shared/data/courses/somali/grammar-reference").SOMALI_GRAMMAR_SECTIONS || []; break;
    case "teso": sections = require("../../shared/data/courses/teso/grammar-reference").TESO_GRAMMAR_SECTIONS || []; break;
    case "embu": sections = require("../../shared/data/courses/embu/grammar-reference").EMBU_GRAMMAR_SECTIONS || []; break;
    case "taita": sections = require("../../shared/data/courses/taita/grammar-reference").TAITA_GRAMMAR_SECTIONS || []; break;
    case "taveta": sections = require("../../shared/data/courses/taveta/grammar-reference").TAVETA_GRAMMAR_SECTIONS || []; break;
    case "pokomo": sections = require("../../shared/data/courses/pokomo/grammar-reference").POKOMO_GRAMMAR_SECTIONS || []; break;
    case "borana": sections = require("../../shared/data/courses/borana/grammar-reference").BORANA_GRAMMAR_SECTIONS || []; break;
    case "rendille": sections = require("../../shared/data/courses/rendille/grammar-reference").RENDILLE_GRAMMAR_SECTIONS || []; break;
    case "samburu": sections = require("../../shared/data/courses/samburu/grammar-reference").SAMBURU_GRAMMAR_SECTIONS || []; break;
    case "ilchamus": sections = require("../../shared/data/courses/ilchamus/grammar-reference").ILCHAMUS_GRAMMAR_SECTIONS || []; break;
    case "pokot": sections = require("../../shared/data/courses/pokot/grammar-reference").POKOT_GRAMMAR_SECTIONS || []; break;
    case "daasanach": sections = require("../../shared/data/courses/daasanach/grammar-reference").DAASANACH_GRAMMAR_SECTIONS || []; break;
    default: sections = [];
  }
  GRAMMAR_CACHE.set(languageId, sections);
  return sections;
}

export function getPlaceholderCourse(languageId: string): CourseDefinition {
  const summary =
    PUBLISHED_COURSE_SUMMARIES.find((c) => c.config.id === languageId) ||
    PUBLISHED_COURSE_SUMMARIES[0];
  const counts = getCanonicalCourseCounts(summary);
  return {
    config: summary.config,
    units: [],
    ready: true,
    validationIssues: [],
    sourceIds: [],
    grammarSections: [],
    unitCount: counts.totalUnits,
    skillCount: counts.totalSkills,
    wordCount: counts.totalWords,
  };
}
