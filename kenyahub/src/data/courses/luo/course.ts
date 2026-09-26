// ============================================================
// Dholuo (Luo) Language Configuration
// ============================================================

import type { Exercise, LanguageConfig, CourseUnit } from '../types';
import { LESSONS, LESSON_CATEGORIES } from './lessons';

export const LUO_CONFIG: LanguageConfig = {
  id: 'luo',
  name: 'Dholuo',
  nativeName: 'Dholuo',
  family: 'Nilotic',
  counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori'],
  speakers: '5.8M',
  speechLocale: '',
  description: 'A River-Lake Nilotic language spoken in the Lake Victoria basin of Western Kenya.',
  color: '#D4A843',
};

// ============================================================
// Course Units → Skills → Words/Sentences
// Structured for the interactive skill tree
// ============================================================

export const LUO_UNITS: CourseUnit[] = LESSON_CATEGORIES.map(category => {
  return {
    id: category.id,
    title: category.name,
    description: category.description,
    icon: category.icon,
    skills: LESSONS.filter(lesson => lesson.category === category.id).map(lesson => {
      const words = lesson.cards.map(card => ({
        target: card.luo,
        source: card.english,
        pronunciation: card.hint || '',
        audio: card.audio,
        example: card.example,
        response: card.response,
      }));
      const findSourceWord = (answer: string) => {
        const normalizedAnswer = answer.toLowerCase().trim();
        const matches = words.filter((word) =>
          [word.target, word.source].some(
            (value) => value.toLowerCase().trim() === normalizedAnswer
          )
        );
        return matches.length === 1 ? matches[0] : undefined;
      };
      const sentences: { target: string, source: string }[] = [];
      const authoredExercises: Exercise[] = lesson.exercises.map(exercise => {
        const sourceWord = findSourceWord(exercise.answer);
        if (exercise.type === 'choice' || exercise.type === 'match') {
          return {
            type: 'multiple_choice',
            prompt: exercise.question,
            correctAnswer: exercise.answer,
            options: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        if (exercise.type === 'order') {
          return {
            type: 'reorder',
            prompt: exercise.question,
            correctAnswer: exercise.answer.replace(/,/g, ' '),
            wordTiles: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        if (exercise.type === 'fill') {
          return {
            type: 'fill_blank',
            prompt: exercise.question,
            correctAnswer: exercise.answer,
            options: exercise.options,
            hint: exercise.hint,
            sourceWord,
          };
        }

        return {
          type: 'translate_to_english',
          prompt: exercise.question,
          correctAnswer: exercise.answer,
          hint: exercise.hint,
          sourceWord,
        };
      });
      
      return {
        id: lesson.id,
        title: lesson.title,
        icon: lesson.icon,
        description: lesson.description,
        tips: lesson.description,
        culturalNote: lesson.culturalNote,
        words,
        sentences,
        authoredExercises,
      };
    })
  };
});
