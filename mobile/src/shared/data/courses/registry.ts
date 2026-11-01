import { LUO_CONFIG, LUO_UNITS, LUO_GRAMMAR_SECTIONS } from "./luo/course";
import { TURKANA_CONFIG, TURKANA_UNITS } from "./turkana/course";
import { LUHYA_CONFIG, LUHYA_UNITS } from "./luhya/course";
import { KIKUYU_CONFIG, KIKUYU_UNITS } from "./kikuyu/course";
import { KISII_CONFIG, KISII_UNITS } from "./kisii/course";
import { TESO_CONFIG, TESO_UNITS } from "./teso/course";
import { KAMBA_CONFIG, KAMBA_UNITS } from "./kamba/course";
import { MAASAI_CONFIG, MAASAI_UNITS } from "./maasai/course";
import type { CourseUnit, LanguageConfig, GrammarSection } from "./types";
import { validateCourse, type CourseValidationIssue } from "./validation";
import { getSourcesForLanguage } from "../language-sources";

import { KIKUYU_GRAMMAR_SECTIONS } from "./kikuyu/grammar-reference";
import { KISII_GRAMMAR_SECTIONS } from "./kisii/grammar-reference";
import { LUHYA_GRAMMAR_SECTIONS } from "./luhya/grammar-reference";
import { TESO_GRAMMAR_SECTIONS } from "./teso/grammar-reference";
import { KAMBA_GRAMMAR_SECTIONS } from "./kamba/grammar-reference";
import { MAASAI_GRAMMAR_SECTIONS } from "./maasai/grammar-reference";
import { TURKANA_GRAMMAR_SECTIONS } from "./turkana/grammar-reference";
import {
  SWAHILI_CONFIG,
  SWAHILI_UNITS,
  SWAHILI_GRAMMAR_SECTIONS,
  KALENJIN_CONFIG,
  KALENJIN_UNITS,
  KALENJIN_GRAMMAR_SECTIONS,
  MIJIKENDA_CONFIG,
  MIJIKENDA_UNITS,
  MIJIKENDA_GRAMMAR_SECTIONS,
  MERU_CONFIG,
  MERU_UNITS,
  MERU_GRAMMAR_SECTIONS,
  SOMALI_CONFIG,
  SOMALI_UNITS,
  SOMALI_GRAMMAR_SECTIONS,
  EMBU_CONFIG,
  EMBU_UNITS,
  EMBU_GRAMMAR_SECTIONS,
  TAITA_CONFIG,
  TAITA_UNITS,
  TAITA_GRAMMAR_SECTIONS,
  TAVETA_CONFIG,
  TAVETA_UNITS,
  TAVETA_GRAMMAR_SECTIONS,
  POKOMO_CONFIG,
  POKOMO_UNITS,
  POKOMO_GRAMMAR_SECTIONS,
  BORANA_CONFIG,
  BORANA_UNITS,
  BORANA_GRAMMAR_SECTIONS,
  RENDILLE_CONFIG,
  RENDILLE_UNITS,
  RENDILLE_GRAMMAR_SECTIONS,
  SAMBURU_CONFIG,
  SAMBURU_UNITS,
  SAMBURU_GRAMMAR_SECTIONS,
  ILCHAMUS_CONFIG,
  ILCHAMUS_UNITS,
  ILCHAMUS_GRAMMAR_SECTIONS,
  POKOT_CONFIG,
  POKOT_UNITS,
  POKOT_GRAMMAR_SECTIONS,
  DAASANACH_CONFIG,
  DAASANACH_UNITS,
  DAASANACH_GRAMMAR_SECTIONS,
} from "./cultural-wisdom";

export interface CourseDefinition {
  config: LanguageConfig;
  units: CourseUnit[];
  ready: boolean;
  validationIssues: CourseValidationIssue[];
  sourceIds: string[];
  grammarSections?: GrammarSection[];
}

function buildCourseEntry(
  config: LanguageConfig,
  units: CourseUnit[],
  grammarSections?: unknown
): CourseDefinition {
  const validationIssues = validateCourse(units);
  return {
    config,
    units,
    ready: validationIssues.length === 0,
    validationIssues,
    sourceIds: getSourcesForLanguage(config.id).map((source) => source.id),
    grammarSections: grammarSections as GrammarSection[] | undefined,
  };
}

export const COURSE_REGISTRY: Record<string, CourseDefinition> = {
  kikuyu: buildCourseEntry(KIKUYU_CONFIG, KIKUYU_UNITS, KIKUYU_GRAMMAR_SECTIONS),
  luo: buildCourseEntry(LUO_CONFIG, LUO_UNITS, LUO_GRAMMAR_SECTIONS),
  kamba: buildCourseEntry(KAMBA_CONFIG, KAMBA_UNITS, KAMBA_GRAMMAR_SECTIONS),
  turkana: buildCourseEntry(TURKANA_CONFIG, TURKANA_UNITS, TURKANA_GRAMMAR_SECTIONS),
  swahili: buildCourseEntry(SWAHILI_CONFIG, SWAHILI_UNITS, SWAHILI_GRAMMAR_SECTIONS),
  luhya: buildCourseEntry(LUHYA_CONFIG, LUHYA_UNITS, LUHYA_GRAMMAR_SECTIONS),
  kalenjin: buildCourseEntry(KALENJIN_CONFIG, KALENJIN_UNITS, KALENJIN_GRAMMAR_SECTIONS),
  kisii: buildCourseEntry(KISII_CONFIG, KISII_UNITS, KISII_GRAMMAR_SECTIONS),
  meru: buildCourseEntry(MERU_CONFIG, MERU_UNITS, MERU_GRAMMAR_SECTIONS),
  mijikenda: buildCourseEntry(MIJIKENDA_CONFIG, MIJIKENDA_UNITS, MIJIKENDA_GRAMMAR_SECTIONS),
  maasai: buildCourseEntry(MAASAI_CONFIG, MAASAI_UNITS, MAASAI_GRAMMAR_SECTIONS),
  somali: buildCourseEntry(SOMALI_CONFIG, SOMALI_UNITS, SOMALI_GRAMMAR_SECTIONS),
  teso: buildCourseEntry(TESO_CONFIG, TESO_UNITS, TESO_GRAMMAR_SECTIONS),
  embu: buildCourseEntry(EMBU_CONFIG, EMBU_UNITS, EMBU_GRAMMAR_SECTIONS),
  taita: buildCourseEntry(TAITA_CONFIG, TAITA_UNITS, TAITA_GRAMMAR_SECTIONS),
  taveta: buildCourseEntry(TAVETA_CONFIG, TAVETA_UNITS, TAVETA_GRAMMAR_SECTIONS),
  pokomo: buildCourseEntry(POKOMO_CONFIG, POKOMO_UNITS, POKOMO_GRAMMAR_SECTIONS),
  borana: buildCourseEntry(BORANA_CONFIG, BORANA_UNITS, BORANA_GRAMMAR_SECTIONS),
  rendille: buildCourseEntry(RENDILLE_CONFIG, RENDILLE_UNITS, RENDILLE_GRAMMAR_SECTIONS),
  samburu: buildCourseEntry(SAMBURU_CONFIG, SAMBURU_UNITS, SAMBURU_GRAMMAR_SECTIONS),
  ilchamus: buildCourseEntry(ILCHAMUS_CONFIG, ILCHAMUS_UNITS, ILCHAMUS_GRAMMAR_SECTIONS),
  pokot: buildCourseEntry(POKOT_CONFIG, POKOT_UNITS, POKOT_GRAMMAR_SECTIONS),
  daasanach: buildCourseEntry(DAASANACH_CONFIG, DAASANACH_UNITS, DAASANACH_GRAMMAR_SECTIONS),
};

export const PUBLISHED_COURSES = Object.values(COURSE_REGISTRY).filter(
  (course) => course.ready
);

export function getCourse(languageId: string): CourseDefinition | undefined {
  return COURSE_REGISTRY[languageId];
}
