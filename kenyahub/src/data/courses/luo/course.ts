// ============================================================
// Dholuo (Luo) Language Configuration
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';
import { LESSONS, LESSON_CATEGORIES } from './lessons';

export const LUO_CONFIG: LanguageConfig = {
  id: 'luo',
  name: 'Dholuo',
  nativeName: 'Dholuo',
  family: 'Nilotic',
  counties: ['Kisumu', 'Siaya', 'Homa Bay', 'Migori'],
  speakers: '5.8M',
  speechLocale: 'sw-KE',
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
      const words: { target: string, source: string, pronunciation?: string }[] = [];
      const sentences: { target: string, source: string }[] = [];
      
      lesson.cards.forEach(card => {
        // A rough heuristic to distinguish words from sentences based on length and spaces
        const hasSpaces = card.english.trim().includes(' ');
        if (hasSpaces && card.english.length > 20) {
          sentences.push({
            target: card.luo,
            source: card.english,
          });
        } else {
          words.push({
            target: card.luo,
            source: card.english,
            pronunciation: card.hint || ''
          });
        }
      });
      
      // If there are example sentences on cards, add them to sentences
      lesson.cards.forEach(card => {
        if (card.example && card.luo !== card.example) {
           sentences.push({
             target: card.example,
             source: card.english + ' (example)' // We don't have the english translation of the example easily, so just a rough placeholder
           })
        }
      });
      
      return {
        id: lesson.id,
        title: lesson.title,
        icon: lesson.icon,
        description: lesson.description,
        culturalNote: lesson.culturalNote,
        words,
        sentences
      };
    })
  };
});
