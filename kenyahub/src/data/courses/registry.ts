import { LUO_CONFIG, LUO_UNITS } from "./luo/course";
import { TURKANA_CONFIG, TURKANA_UNITS } from "./turkana/course";
import { LUHYA_CONFIG, LUHYA_UNITS } from "./luhya/course";
import { KIKUYU_CONFIG, KIKUYU_UNITS } from "./kikuyu/course";
import { KISII_CONFIG, KISII_UNITS } from "./kisii/course";
import type { CourseUnit, LanguageConfig } from "./types";
import { validateCourse, type CourseValidationIssue } from "./validation";

export interface CourseDefinition {
  config: LanguageConfig;
  units: CourseUnit[];
  ready: boolean;
  validationIssues: CourseValidationIssue[];
}

export const COURSE_REGISTRY: Record<string, CourseDefinition> = {
  kikuyu: {
    config: KIKUYU_CONFIG,
    units: KIKUYU_UNITS,
    ready: true,
    validationIssues: validateCourse(KIKUYU_UNITS),
  },
  kisii: {
    config: KISII_CONFIG,
    units: KISII_UNITS,
    ready: true,
    validationIssues: validateCourse(KISII_UNITS),
  },
  luo: {
    config: LUO_CONFIG,
    units: LUO_UNITS,
    ready: true,
    validationIssues: validateCourse(LUO_UNITS),
  },
  turkana: {
    config: TURKANA_CONFIG,
    units: TURKANA_UNITS,
    ready: true,
    validationIssues: validateCourse(TURKANA_UNITS),
  },
  luhya: {
    config: LUHYA_CONFIG,
    units: LUHYA_UNITS,
    ready: true,
    validationIssues: validateCourse(LUHYA_UNITS),
  },
};

export const PUBLISHED_COURSES = Object.values(COURSE_REGISTRY).filter(
  (course) => course.ready
);

export function getCourse(languageId: string): CourseDefinition | undefined {
  return COURSE_REGISTRY[languageId];
}