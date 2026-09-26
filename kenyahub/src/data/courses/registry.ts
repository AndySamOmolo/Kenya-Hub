import { LUO_CONFIG, LUO_UNITS } from "./luo/course";
import type { CourseUnit, LanguageConfig } from "./types";
import { validateCourse, type CourseValidationIssue } from "./validation";

export interface CourseDefinition {
  config: LanguageConfig;
  units: CourseUnit[];
  ready: boolean;
  validationIssues: CourseValidationIssue[];
}

export const COURSE_REGISTRY: Record<string, CourseDefinition> = {
  luo: {
    config: LUO_CONFIG,
    units: LUO_UNITS,
    ready: true,
    validationIssues: validateCourse(LUO_UNITS),
  },
};

export const PUBLISHED_COURSES = Object.values(COURSE_REGISTRY).filter(
  (course) => course.ready
);

export function getCourse(languageId: string): CourseDefinition | undefined {
  return COURSE_REGISTRY[languageId];
}