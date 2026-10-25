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
} from "./cultural-wisdom";

export interface CourseDefinition {
  config: LanguageConfig;
  units: CourseUnit[];
  ready: boolean;
  validationIssues: CourseValidationIssue[];
  sourceIds: string[];
  grammarSections?: GrammarSection[];
}

export const COURSE_REGISTRY: Record<string, CourseDefinition> = {
  kikuyu: {
    config: KIKUYU_CONFIG,
    units: KIKUYU_UNITS,
    ready: true,
    validationIssues: validateCourse(KIKUYU_UNITS),
    sourceIds: getSourcesForLanguage(KIKUYU_CONFIG.id).map((source) => source.id),
    grammarSections: KIKUYU_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  luo: {
    config: LUO_CONFIG,
    units: LUO_UNITS,
    ready: true,
    validationIssues: validateCourse(LUO_UNITS),
    sourceIds: getSourcesForLanguage(LUO_CONFIG.id).map((source) => source.id),
    grammarSections: LUO_GRAMMAR_SECTIONS,
  },
  kamba: {
    config: KAMBA_CONFIG,
    units: KAMBA_UNITS,
    ready: true,
    validationIssues: validateCourse(KAMBA_UNITS),
    sourceIds: getSourcesForLanguage(KAMBA_CONFIG.id).map((source) => source.id),
    grammarSections: KAMBA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  turkana: {
    config: TURKANA_CONFIG,
    units: TURKANA_UNITS,
    ready: true,
    validationIssues: validateCourse(TURKANA_UNITS),
    sourceIds: getSourcesForLanguage(TURKANA_CONFIG.id).map((source) => source.id),
    grammarSections: TURKANA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  swahili: {
    config: SWAHILI_CONFIG,
    units: SWAHILI_UNITS,
    ready: true,
    validationIssues: validateCourse(SWAHILI_UNITS),
    sourceIds: getSourcesForLanguage(SWAHILI_CONFIG.id).map((source) => source.id),
    grammarSections: SWAHILI_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  luhya: {
    config: LUHYA_CONFIG,
    units: LUHYA_UNITS,
    ready: true,
    validationIssues: validateCourse(LUHYA_UNITS),
    sourceIds: getSourcesForLanguage(LUHYA_CONFIG.id).map((source) => source.id),
    grammarSections: LUHYA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  kalenjin: {
    config: KALENJIN_CONFIG,
    units: KALENJIN_UNITS,
    ready: true,
    validationIssues: validateCourse(KALENJIN_UNITS),
    sourceIds: getSourcesForLanguage(KALENJIN_CONFIG.id).map((source) => source.id),
    grammarSections: KALENJIN_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  kisii: {
    config: KISII_CONFIG,
    units: KISII_UNITS,
    ready: true,
    validationIssues: validateCourse(KISII_UNITS),
    sourceIds: getSourcesForLanguage(KISII_CONFIG.id).map((source) => source.id),
    grammarSections: KISII_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  meru: {
    config: MERU_CONFIG,
    units: MERU_UNITS,
    ready: true,
    validationIssues: validateCourse(MERU_UNITS),
    sourceIds: getSourcesForLanguage(MERU_CONFIG.id).map((source) => source.id),
    grammarSections: MERU_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  mijikenda: {
    config: MIJIKENDA_CONFIG,
    units: MIJIKENDA_UNITS,
    ready: true,
    validationIssues: validateCourse(MIJIKENDA_UNITS),
    sourceIds: getSourcesForLanguage(MIJIKENDA_CONFIG.id).map((source) => source.id),
    grammarSections: MIJIKENDA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  maasai: {
    config: MAASAI_CONFIG,
    units: MAASAI_UNITS,
    ready: true,
    validationIssues: validateCourse(MAASAI_UNITS),
    sourceIds: getSourcesForLanguage(MAASAI_CONFIG.id).map((source) => source.id),
    grammarSections: MAASAI_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  somali: {
    config: SOMALI_CONFIG,
    units: SOMALI_UNITS,
    ready: true,
    validationIssues: validateCourse(SOMALI_UNITS),
    sourceIds: getSourcesForLanguage(SOMALI_CONFIG.id).map((source) => source.id),
    grammarSections: SOMALI_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  teso: {
    config: TESO_CONFIG,
    units: TESO_UNITS,
    ready: true,
    validationIssues: validateCourse(TESO_UNITS),
    sourceIds: getSourcesForLanguage(TESO_CONFIG.id).map((source) => source.id),
    grammarSections: TESO_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  embu: {
    config: EMBU_CONFIG,
    units: EMBU_UNITS,
    ready: true,
    validationIssues: validateCourse(EMBU_UNITS),
    sourceIds: getSourcesForLanguage(EMBU_CONFIG.id).map((source) => source.id),
    grammarSections: EMBU_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  taita: {
    config: TAITA_CONFIG,
    units: TAITA_UNITS,
    ready: true,
    validationIssues: validateCourse(TAITA_UNITS),
    sourceIds: getSourcesForLanguage(TAITA_CONFIG.id).map((source) => source.id),
    grammarSections: TAITA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  taveta: {
    config: TAVETA_CONFIG,
    units: TAVETA_UNITS,
    ready: true,
    validationIssues: validateCourse(TAVETA_UNITS),
    sourceIds: getSourcesForLanguage(TAVETA_CONFIG.id).map((source) => source.id),
    grammarSections: TAVETA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  pokomo: {
    config: POKOMO_CONFIG,
    units: POKOMO_UNITS,
    ready: true,
    validationIssues: validateCourse(POKOMO_UNITS),
    sourceIds: getSourcesForLanguage(POKOMO_CONFIG.id).map((source) => source.id),
    grammarSections: POKOMO_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  borana: {
    config: BORANA_CONFIG,
    units: BORANA_UNITS,
    ready: true,
    validationIssues: validateCourse(BORANA_UNITS),
    sourceIds: getSourcesForLanguage(BORANA_CONFIG.id).map((source) => source.id),
    grammarSections: BORANA_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  rendille: {
    config: RENDILLE_CONFIG,
    units: RENDILLE_UNITS,
    ready: true,
    validationIssues: validateCourse(RENDILLE_UNITS),
    sourceIds: getSourcesForLanguage(RENDILLE_CONFIG.id).map((source) => source.id),
    grammarSections: RENDILLE_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  samburu: {
    config: SAMBURU_CONFIG,
    units: SAMBURU_UNITS,
    ready: true,
    validationIssues: validateCourse(SAMBURU_UNITS),
    sourceIds: getSourcesForLanguage(SAMBURU_CONFIG.id).map((source) => source.id),
    grammarSections: SAMBURU_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  ilchamus: {
    config: ILCHAMUS_CONFIG,
    units: ILCHAMUS_UNITS,
    ready: true,
    validationIssues: validateCourse(ILCHAMUS_UNITS),
    sourceIds: getSourcesForLanguage(ILCHAMUS_CONFIG.id).map((source) => source.id),
    grammarSections: ILCHAMUS_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
  pokot: {
    config: POKOT_CONFIG,
    units: POKOT_UNITS,
    ready: true,
    validationIssues: validateCourse(POKOT_UNITS),
    sourceIds: getSourcesForLanguage(POKOT_CONFIG.id).map((source) => source.id),
    grammarSections: POKOT_GRAMMAR_SECTIONS as unknown as GrammarSection[],
  },
};

export const PUBLISHED_COURSES = Object.values(COURSE_REGISTRY).filter(
  (course) => course.ready
);

export function getCourse(languageId: string): CourseDefinition | undefined {
  return COURSE_REGISTRY[languageId];
}
