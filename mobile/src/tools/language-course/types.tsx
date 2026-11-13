import React from "react";
import { Text, Platform } from "react-native";
import {
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  type WordPair,
} from "../../shared/data/courses/types";

export type Word = WordPair;

export interface SkillProgress {
  skillId: string;
  level: number;
  lessonsCompleted: number;
  lastPracticed: number;
  bestAccuracy: number;
}

export interface LanguageProgress {
  languageId: string;
  totalXP: number;
  streak: number;
  lastPracticeDate: string;
  dailyGoal: number;
  dailyXP: number;
  dailyDate: string;
  hearts: number;
  heartsLastRefill: number;
  skills: Record<string, SkillProgress>;
  wordStrengths: Record<
    string,
    {
      wordKey: string;
      strength: number;
      lastSeen: number;
      correctStreak: number;
      timesWrong: number;
    }
  >;
  gamesPlayed: number;
  perfectLessons: number;
  unlockedAchievements: string[];
  unlockAll?: boolean;
}

export const STORAGE_KEY_V2 = '@kenyahub_course_progress_v2';
export const STORAGE_KEY_V1 = '@kenyahub_course_progress_v1';
export const HEART_REFILL_MS = HEART_REFILL_MINUTES * 60 * 1000;

export function createDefaultLanguageProgress(langId: string): LanguageProgress {
  return {
    languageId: langId,
    totalXP: 0,
    streak: 0,
    lastPracticeDate: '',
    dailyGoal: 50,
    dailyXP: 0,
    dailyDate: new Date().toISOString().slice(0, 10),
    hearts: MAX_HEARTS,
    heartsLastRefill: Date.now(),
    skills: {},
    wordStrengths: {},
    gamesPlayed: 0,
    perfectLessons: 0,
    unlockedAchievements: [],
    unlockAll: false,
  };
}

/**
 * Helper to render inline Markdown (**bold**, *italic*, `code`) in React Native <Text>
 */
export function renderFormattedText(
  raw: string,
  baseStyle: any,
  boldColor: string,
  italicColor: string,
  codeBg: string
) {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      parts.push(raw.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <Text key={key++} style={[baseStyle, { fontWeight: '800', color: boldColor }]}>
          {token.slice(2, -2)}
        </Text>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <Text key={key++} style={[baseStyle, { fontStyle: 'italic', color: italicColor }]}>
          {token.slice(1, -1)}
        </Text>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            {
              backgroundColor: codeBg,
              fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier',
              fontSize: 12,
            },
          ]}
        >
          {' '}{token.slice(1, -1)}{' '}
        </Text>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < raw.length) {
    parts.push(raw.slice(lastIndex));
  }

  return <Text style={baseStyle}>{parts}</Text>;
}

export type MainTab = 'learn' | 'cards' | 'games' | 'grammar' | 'proverbs';
export type LessonStage = 'idle' | 'learn' | 'practice' | 'complete';
export type ActiveGame = 'menu' | 'scramble' | 'speed' | 'memory' | 'wordle' | 'riddles' | 'vocabQuiz';

