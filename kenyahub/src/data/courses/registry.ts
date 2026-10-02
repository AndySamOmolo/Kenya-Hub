import { LUO_CONFIG, LUO_UNITS } from "./luo/course";
import { TURKANA_CONFIG, TURKANA_UNITS } from "./turkana/course";
import { LUHYA_CONFIG, LUHYA_UNITS } from "./luhya/course";
import { KIKUYU_CONFIG, KIKUYU_UNITS } from "./kikuyu/course";
import { KISII_CONFIG, KISII_UNITS } from "./kisii/course";
import { TESO_CONFIG, TESO_UNITS } from "./teso/course";
import { KAMBA_CONFIG, KAMBA_UNITS } from "./kamba/course";
import { MAASAI_CONFIG, MAASAI_UNITS } from "./maasai/course";
import type { CourseUnit, LanguageConfig } from "./types";
import { validateCourse, type CourseValidationIssue } from "./validation";
import { getSourcesForLanguage } from "@/data/language-sources";

export interface CourseDefinition {
  config: LanguageConfig;
  units: CourseUnit[];
  ready: boolean;
  validationIssues: CourseValidationIssue[];
  sourceIds: string[];
}

export const COURSE_REGISTRY: Record<string, CourseDefinition> = {
  kikuyu: {
    config: KIKUYU_CONFIG,
    units: KIKUYU_UNITS,
    ready: true,
    validationIssues: validateCourse(KIKUYU_UNITS),
    sourceIds: getSourcesForLanguage(KIKUYU_CONFIG.id).map((source) => source.id),
  },
  kisii: {
    config: KISII_CONFIG,
    units: KISII_UNITS,
    ready: true,
    validationIssues: validateCourse(KISII_UNITS),
    sourceIds: getSourcesForLanguage(KISII_CONFIG.id).map((source) => source.id),
  },
  luo: {
    config: LUO_CONFIG,
    units: LUO_UNITS,
    ready: true,
    validationIssues: validateCourse(LUO_UNITS),
    sourceIds: getSourcesForLanguage(LUO_CONFIG.id).map((source) => source.id),
  },
  turkana: {
    config: TURKANA_CONFIG,
    units: TURKANA_UNITS,
    ready: true,
    validationIssues: validateCourse(TURKANA_UNITS),
    sourceIds: getSourcesForLanguage(TURKANA_CONFIG.id).map((source) => source.id),
  },
  luhya: {
    config: LUHYA_CONFIG,
    units: LUHYA_UNITS,
    ready: true,
    validationIssues: validateCourse(LUHYA_UNITS),
    sourceIds: getSourcesForLanguage(LUHYA_CONFIG.id).map((source) => source.id),
  },
  teso: {
    config: TESO_CONFIG,
    units: TESO_UNITS,
    ready: true,
    validationIssues: validateCourse(TESO_UNITS),
    sourceIds: getSourcesForLanguage(TESO_CONFIG.id).map((source) => source.id),
  },
  kamba: {
    config: KAMBA_CONFIG,
    units: KAMBA_UNITS,
    ready: true,
    validationIssues: validateCourse(KAMBA_UNITS),
    sourceIds: getSourcesForLanguage(KAMBA_CONFIG.id).map((source) => source.id),
  },
  maasai: {
    config: MAASAI_CONFIG,
    units: MAASAI_UNITS,
    ready: true,
    validationIssues: validateCourse(MAASAI_UNITS),
    sourceIds: getSourcesForLanguage(MAASAI_CONFIG.id).map((source) => source.id),
  },
};

export const PUBLISHED_COURSES = Object.values(COURSE_REGISTRY).filter(
  (course) => course.ready
);

export function getCourse(languageId: string): CourseDefinition | undefined {
  return COURSE_REGISTRY[languageId];
}