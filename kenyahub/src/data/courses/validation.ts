import type { CourseUnit, Exercise } from "./types";

export interface CourseValidationIssue {
  path: string;
  message: string;
}

function validateExercise(
  exercise: Exercise,
  path: string
): CourseValidationIssue[] {
  const issues: CourseValidationIssue[] = [];

  if (!exercise.prompt.trim()) {
    issues.push({ path, message: "Exercise prompt is empty" });
  }
  if (exercise.type !== "match_pairs" && !exercise.correctAnswer.trim()) {
    issues.push({ path, message: "Exercise answer is empty" });
  }
  if (
    (exercise.type === "multiple_choice" || exercise.type === "fill_blank") &&
    exercise.options
  ) {
    const options = exercise.options.map((option) => option.trim().toLowerCase());
    if (new Set(options).size !== options.length) {
      issues.push({ path, message: "Exercise options contain duplicates" });
    }
    if (exercise.type === "multiple_choice" && !options.includes(exercise.correctAnswer.trim().toLowerCase())) {
      issues.push({ path, message: "Correct answer is missing from exercise options" });
    }
  }

  if (exercise.type === "match_pairs" && (!exercise.pairs || exercise.pairs.length < 2)) {
    issues.push({ path, message: "Match exercise needs at least two pairs" });
  }

  return issues;
}

export function validateCourse(units: CourseUnit[]): CourseValidationIssue[] {
  const issues: CourseValidationIssue[] = [];
  const unitIds = new Set<string>();
  const skillIds = new Set<string>();

  units.forEach((unit, unitIndex) => {
    const unitPath = `units[${unitIndex}]`;
    if (!unit.id.trim()) issues.push({ path: unitPath, message: "Unit ID is empty" });
    if (unitIds.has(unit.id)) issues.push({ path: unitPath, message: `Duplicate unit ID: ${unit.id}` });
    unitIds.add(unit.id);

    unit.skills.forEach((skill, skillIndex) => {
      const skillPath = `${unitPath}.skills[${skillIndex}]`;
      if (!skill.id.trim()) issues.push({ path: skillPath, message: "Skill ID is empty" });
      if (skillIds.has(skill.id)) issues.push({ path: skillPath, message: `Duplicate skill ID: ${skill.id}` });
      skillIds.add(skill.id);

      skill.words.forEach((word, wordIndex) => {
        const wordPath = `${skillPath}.words[${wordIndex}]`;
        if (!word.target.trim()) issues.push({ path: wordPath, message: "Vocabulary target is empty" });
        if (!word.source.trim()) issues.push({ path: wordPath, message: "Vocabulary source is empty" });
      });

      skill.authoredExercises?.forEach((exercise, exerciseIndex) => {
        issues.push(...validateExercise(exercise, `${skillPath}.authoredExercises[${exerciseIndex}]`));
      });
    });
  });

  return issues;
}