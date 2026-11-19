import type { CourseUnit, LanguageConfig, GrammarSection } from "../../shared/data/courses/types";
import type { CourseDefinition } from "../../shared/data/courses/registry";
import {
  PUBLISHED_COURSE_SUMMARIES,
  type CourseCatalogSummary,
} from "../../shared/data/courses/catalog-summary";
import { getSourcesForLanguage } from "../../shared/data/language-sources";

export { PUBLISHED_COURSE_SUMMARIES, type CourseCatalogSummary };

const SUMMARY_IDS = new Set(PUBLISHED_COURSE_SUMMARIES.map((c) => c.config.id));
const COURSE_CACHE = new Map<string, CourseDefinition>();

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
 * Lazily loads a single Kenyan language course (~150–300 KB) on demand
 * instead of eagerly evaluating all 23 courses (5.9 MB) when opening the Learn tab.
 */
export function getCourseLazy(languageId: string): CourseDefinition | undefined {
  const cached = COURSE_CACHE.get(languageId);
  if (cached) return cached;

  let loaded: CourseDefinition | undefined;
  switch (languageId) {
    case "kikuyu": {
      const c = require("../../shared/data/courses/kikuyu/course");
      const g = require("../../shared/data/courses/kikuyu/grammar-reference");
      loaded = buildLazyCourse(c.KIKUYU_CONFIG, c.KIKUYU_UNITS, g.KIKUYU_GRAMMAR_SECTIONS);
      break;
    }
    case "luo": {
      const c = require("../../shared/data/courses/luo/course");
      loaded = buildLazyCourse(c.LUO_CONFIG, c.LUO_UNITS, c.LUO_GRAMMAR_SECTIONS);
      break;
    }
    case "kamba": {
      const c = require("../../shared/data/courses/kamba/course");
      const g = require("../../shared/data/courses/kamba/grammar-reference");
      loaded = buildLazyCourse(c.KAMBA_CONFIG, c.KAMBA_UNITS, g.KAMBA_GRAMMAR_SECTIONS);
      break;
    }
    case "turkana": {
      const c = require("../../shared/data/courses/turkana/course");
      const g = require("../../shared/data/courses/turkana/grammar-reference");
      loaded = buildLazyCourse(c.TURKANA_CONFIG, c.TURKANA_UNITS, g.TURKANA_GRAMMAR_SECTIONS);
      break;
    }
    case "swahili": {
      const c = require("../../shared/data/courses/swahili/course");
      const g = require("../../shared/data/courses/swahili/grammar-reference");
      loaded = buildLazyCourse(c.SWAHILI_CONFIG, c.SWAHILI_UNITS, g.SWAHILI_GRAMMAR_SECTIONS);
      break;
    }
    case "luhya": {
      const c = require("../../shared/data/courses/luhya/course");
      const g = require("../../shared/data/courses/luhya/grammar-reference");
      loaded = buildLazyCourse(c.LUHYA_CONFIG, c.LUHYA_UNITS, g.LUHYA_GRAMMAR_SECTIONS);
      break;
    }
    case "kalenjin": {
      const c = require("../../shared/data/courses/kalenjin/course");
      const g = require("../../shared/data/courses/kalenjin/grammar-reference");
      loaded = buildLazyCourse(c.KALENJIN_CONFIG, c.KALENJIN_UNITS, g.KALENJIN_GRAMMAR_SECTIONS);
      break;
    }
    case "kisii": {
      const c = require("../../shared/data/courses/kisii/course");
      const g = require("../../shared/data/courses/kisii/grammar-reference");
      loaded = buildLazyCourse(c.KISII_CONFIG, c.KISII_UNITS, g.KISII_GRAMMAR_SECTIONS);
      break;
    }
    case "meru": {
      const c = require("../../shared/data/courses/meru/course");
      const g = require("../../shared/data/courses/meru/grammar-reference");
      loaded = buildLazyCourse(c.MERU_CONFIG, c.MERU_UNITS, g.MERU_GRAMMAR_SECTIONS);
      break;
    }
    case "mijikenda": {
      const c = require("../../shared/data/courses/mijikenda/course");
      const g = require("../../shared/data/courses/mijikenda/grammar-reference");
      loaded = buildLazyCourse(c.MIJIKENDA_CONFIG, c.MIJIKENDA_UNITS, g.MIJIKENDA_GRAMMAR_SECTIONS);
      break;
    }
    case "maasai": {
      const c = require("../../shared/data/courses/maasai/course");
      const g = require("../../shared/data/courses/maasai/grammar-reference");
      loaded = buildLazyCourse(c.MAASAI_CONFIG, c.MAASAI_UNITS, g.MAASAI_GRAMMAR_SECTIONS);
      break;
    }
    case "somali": {
      const c = require("../../shared/data/courses/somali/course");
      const g = require("../../shared/data/courses/somali/grammar-reference");
      loaded = buildLazyCourse(c.SOMALI_CONFIG, c.SOMALI_UNITS, g.SOMALI_GRAMMAR_SECTIONS);
      break;
    }
    case "teso": {
      const c = require("../../shared/data/courses/teso/course");
      const g = require("../../shared/data/courses/teso/grammar-reference");
      loaded = buildLazyCourse(c.TESO_CONFIG, c.TESO_UNITS, g.TESO_GRAMMAR_SECTIONS);
      break;
    }
    case "embu": {
      const c = require("../../shared/data/courses/embu/course");
      const g = require("../../shared/data/courses/embu/grammar-reference");
      loaded = buildLazyCourse(c.EMBU_CONFIG, c.EMBU_UNITS, g.EMBU_GRAMMAR_SECTIONS);
      break;
    }
    case "taita": {
      const c = require("../../shared/data/courses/taita/course");
      const g = require("../../shared/data/courses/taita/grammar-reference");
      loaded = buildLazyCourse(c.TAITA_CONFIG, c.TAITA_UNITS, g.TAITA_GRAMMAR_SECTIONS);
      break;
    }
    case "taveta": {
      const c = require("../../shared/data/courses/taveta/course");
      const g = require("../../shared/data/courses/taveta/grammar-reference");
      loaded = buildLazyCourse(c.TAVETA_CONFIG, c.TAVETA_UNITS, g.TAVETA_GRAMMAR_SECTIONS);
      break;
    }
    case "pokomo": {
      const c = require("../../shared/data/courses/pokomo/course");
      const g = require("../../shared/data/courses/pokomo/grammar-reference");
      loaded = buildLazyCourse(c.POKOMO_CONFIG, c.POKOMO_UNITS, g.POKOMO_GRAMMAR_SECTIONS);
      break;
    }
    case "borana": {
      const c = require("../../shared/data/courses/borana/course");
      const g = require("../../shared/data/courses/borana/grammar-reference");
      loaded = buildLazyCourse(c.BORANA_CONFIG, c.BORANA_UNITS, g.BORANA_GRAMMAR_SECTIONS);
      break;
    }
    case "rendille": {
      const c = require("../../shared/data/courses/rendille/course");
      const g = require("../../shared/data/courses/rendille/grammar-reference");
      loaded = buildLazyCourse(c.RENDILLE_CONFIG, c.RENDILLE_UNITS, g.RENDILLE_GRAMMAR_SECTIONS);
      break;
    }
    case "samburu": {
      const c = require("../../shared/data/courses/samburu/course");
      const g = require("../../shared/data/courses/samburu/grammar-reference");
      loaded = buildLazyCourse(c.SAMBURU_CONFIG, c.SAMBURU_UNITS, g.SAMBURU_GRAMMAR_SECTIONS);
      break;
    }
    case "ilchamus": {
      const c = require("../../shared/data/courses/ilchamus/course");
      const g = require("../../shared/data/courses/ilchamus/grammar-reference");
      loaded = buildLazyCourse(c.ILCHAMUS_CONFIG, c.ILCHAMUS_UNITS, g.ILCHAMUS_GRAMMAR_SECTIONS);
      break;
    }
    case "pokot": {
      const c = require("../../shared/data/courses/pokot/course");
      const g = require("../../shared/data/courses/pokot/grammar-reference");
      loaded = buildLazyCourse(c.POKOT_CONFIG, c.POKOT_UNITS, g.POKOT_GRAMMAR_SECTIONS);
      break;
    }
    case "daasanach": {
      const c = require("../../shared/data/courses/daasanach/course");
      const g = require("../../shared/data/courses/daasanach/grammar-reference");
      loaded = buildLazyCourse(c.DAASANACH_CONFIG, c.DAASANACH_UNITS, g.DAASANACH_GRAMMAR_SECTIONS);
      break;
    }
    default:
      return undefined;
  }

  if (loaded) {
    COURSE_CACHE.set(languageId, loaded);
  }
  return loaded;
}

export function getPlaceholderCourse(languageId: string): CourseDefinition {
  const summary =
    PUBLISHED_COURSE_SUMMARIES.find((c) => c.config.id === languageId) ||
    PUBLISHED_COURSE_SUMMARIES[0];
  return {
    config: summary.config,
    units: [],
    ready: true,
    validationIssues: [],
    sourceIds: [],
    grammarSections: [],
    unitCount: summary.unitCount,
    skillCount: summary.skillCount,
    wordCount: summary.wordsCount,
  };
}
