import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useTheme, androidRipple } from '../theme';
import { PUBLISHED_COURSES, getCourse } from '../shared/data/courses/registry';
import { getSourcesForLanguage } from '../shared/data/language-sources';
import { generateExercises, checkAnswer } from '../shared/lib/learn-engine';
import {
  isSkillUnlocked,
  getXpLevel,
  minutesToNextHeart,
} from '../shared/lib/learn-progress';
import {
  LEVELS,
  ACHIEVEMENTS,
  MAX_HEARTS,
  HEART_REFILL_MINUTES,
  type CourseSkill,
  type CourseUnit,
  type Exercise,
  type GrammarSection,
  type WordPair,
} from '../shared/data/courses/types';

type Word = WordPair;

interface SkillProgress {
  skillId: string;
  level: number;
  lessonsCompleted: number;
  lastPracticed: number;
  bestAccuracy: number;
}

interface LanguageProgress {
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
}

const STORAGE_KEY_V2 = '@kenyahub_course_progress_v2';
const STORAGE_KEY_V1 = '@kenyahub_course_progress_v1';
const HEART_REFILL_MS = HEART_REFILL_MINUTES * 60 * 1000;

function createDefaultLanguageProgress(langId: string): LanguageProgress {
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
  };
}

/**
 * Helper to render inline Markdown (**bold**, *italic*, `code`) in React Native <Text>
 */
function renderFormattedText(
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

type MainTab = 'learn' | 'cards' | 'games' | 'grammar';
type LessonStage = 'idle' | 'learn' | 'practice' | 'complete';
type ActiveGame = 'menu' | 'scramble' | 'speed' | 'memory' | 'wordle';

export function LanguageLearningTool() {
  return <LanguageCourseTool />;
}

export default function LanguageCourseTool() {
  const { colors, isDark } = useTheme();
  const ripple = useMemo(() => androidRipple(colors.rippleColor), [colors.rippleColor]);

  // ── Language & Tab State ──
  const [selectedLangId, setSelectedLangId] = useState<string>(
    PUBLISHED_COURSES[0]?.config.id || 'kikuyu'
  );
  const [activeTab, setActiveTab] = useState<MainTab>('learn');
  const [showAchievements, setShowAchievements] = useState(false);

  // ── Progress Store (All Languages) ──
  const [allProgress, setAllProgress] = useState<Record<string, LanguageProgress>>({});
  const [heartTick, setHeartTick] = useState(0);

  // Load & migrate progress from AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const rawV2 = await AsyncStorage.getItem(STORAGE_KEY_V2);
        if (rawV2) {
          setAllProgress(JSON.parse(rawV2));
          return;
        }
        // Migrate from v1 if present
        const rawV1 = await AsyncStorage.getItem(STORAGE_KEY_V1);
        if (rawV1) {
          const v1 = JSON.parse(rawV1);
          const migrated: Record<string, LanguageProgress> = {};
          for (const course of PUBLISHED_COURSES) {
            const lid = course.config.id;
            const base = createDefaultLanguageProgress(lid);
            base.totalXP = v1.xp || 0;
            base.streak = v1.streak || 0;
            base.lastPracticeDate = v1.lastPracticeDate || '';
            const completedList: string[] = v1.completedSkills?.[lid] || [];
            for (const sid of completedList) {
              base.skills[sid] = {
                skillId: sid,
                level: 1,
                lessonsCompleted: 1,
                lastPracticed: Date.now(),
                bestAccuracy: 100,
              };
            }
            migrated[lid] = base;
          }
          setAllProgress(migrated);
          await AsyncStorage.setItem(STORAGE_KEY_V2, JSON.stringify(migrated));
        }
      } catch {}
    })();
  }, []);

  // Periodic heart refill check every 15s
  useEffect(() => {
    const timer = setInterval(() => {
      setHeartTick((t) => t + 1);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const currentCourse = useMemo(
    () => getCourse(selectedLangId) || PUBLISHED_COURSES[0],
    [selectedLangId]
  );

  const langColor = currentCourse?.config.color || colors.gold;
  const languageSources = useMemo(
    () => getSourcesForLanguage(selectedLangId),
    [selectedLangId]
  );

  // Compute current language progress with automatic heart refills & daily reset
  const progress: LanguageProgress = useMemo(() => {
    const raw = allProgress[selectedLangId] || createDefaultLanguageProgress(selectedLangId);
    const today = new Date().toISOString().slice(0, 10);
    let hearts = raw.hearts;
    let heartsLastRefill = raw.heartsLastRefill;
    if (hearts < MAX_HEARTS) {
      const elapsed = Date.now() - heartsLastRefill;
      const refills = Math.floor(elapsed / HEART_REFILL_MS);
      if (refills > 0) {
        hearts = Math.min(MAX_HEARTS, hearts + refills);
        heartsLastRefill = hearts >= MAX_HEARTS ? Date.now() : heartsLastRefill + refills * HEART_REFILL_MS;
      }
    }
    return {
      ...raw,
      dailyXP: raw.dailyDate === today ? raw.dailyXP : 0,
      dailyDate: today,
      hearts,
      heartsLastRefill,
    };
  }, [allProgress, selectedLangId, heartTick]);

  const saveLanguageProgress = useCallback(
    async (updater: (prev: LanguageProgress) => LanguageProgress) => {
      setAllProgress((prevAll) => {
        const current = prevAll[selectedLangId] || createDefaultLanguageProgress(selectedLangId);
        const updated = updater(current);

        // Check achievements
        const unlocked = new Set(updated.unlockedAchievements);
        const totalLessons = Object.values(updated.skills).reduce((s, k) => s + k.lessonsCompleted, 0);
        const wordsLearnedCount = Object.keys(updated.wordStrengths).length;
        if (totalLessons >= 1) unlocked.add('first-steps');
        if (updated.streak >= 7) unlocked.add('on-fire');
        if (updated.perfectLessons >= 1) unlocked.add('perfect-score');
        if (wordsLearnedCount >= 100) unlocked.add('bookworm');
        if (totalLessons >= 20) unlocked.add('dedicated');
        if (updated.totalXP >= 8000) unlocked.add('diamond');
        if (wordsLearnedCount >= 200) unlocked.add('memory-king');
        updated.unlockedAchievements = Array.from(unlocked);

        const nextAll = { ...prevAll, [selectedLangId]: updated };
        AsyncStorage.setItem(STORAGE_KEY_V2, JSON.stringify(nextAll)).catch(() => {});
        return nextAll;
      });
    },
    [selectedLangId]
  );

  // ── Skill Tree State ──
  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<string, boolean>>({});
  const [activeSkillId, setActiveSkillId] = useState<string>('');

  const allSkills = useMemo(
    () => currentCourse?.units.flatMap((u) => u.skills) || [],
    [currentCourse]
  );
  const allSkillIds = useMemo(() => allSkills.map((s) => s.id), [allSkills]);

  useEffect(() => {
    if (currentCourse?.units?.length) {
      const initialExpanded: Record<string, boolean> = {};
      currentCourse.units.forEach((u, idx) => {
        initialExpanded[u.id] = idx < 2; // Expand first 2 units by default
      });
      setExpandedUnitIds(initialExpanded);
      if (currentCourse.units[0]?.skills[0]) {
        setActiveSkillId(currentCourse.units[0].skills[0].id);
      }
    }
  }, [selectedLangId, currentCourse]);

  const activeSkill: CourseSkill | undefined = useMemo(
    () => allSkills.find((s) => s.id === activeSkillId) || allSkills[0],
    [allSkills, activeSkillId]
  );

  // ── Lesson Player State (Matches Website LessonPlayer.tsx) ──
  const [lessonStage, setLessonStage] = useState<LessonStage>('idle');
  const [learnCardIdx, setLearnCardIdx] = useState(0);
  const [showTipsPanel, setShowTipsPanel] = useState(false);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exIndex, setExIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [wordBankSelected, setWordBankSelected] = useState<string[]>([]);
  const [wordBankRemaining, setWordBankRemaining] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [matchLeftIdx, setMatchLeftIdx] = useState<number | null>(null);
  const [matchRightOrder, setMatchRightOrder] = useState<number[]>([]);
  const [matchWrongFlash, setMatchWrongFlash] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [almostCorrect, setAlmostCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [streakCount, setStreakCount] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [missedItems, setMissedItems] = useState<{ prompt: string; correct: string }[]>([]);

  // ── Flashcards / Review Tab State ──
  const [cardMode, setCardMode] = useState<'skill' | 'review'>('skill');
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // ── Games Hub State (4 Games: Scramble, Speed Match, Memory, Wordle) ──
  const [activeGame, setActiveGame] = useState<ActiveGame>('menu');
  const [gameScore, setGameScore] = useState(0);
  const [gameRound, setGameRound] = useState(0);
  // Scramble
  const [scrambleWord, setScrambleWord] = useState<Word | null>(null);
  const [scramblePicked, setScramblePicked] = useState<number[]>([]);
  const [scramblePool, setScramblePool] = useState<string[]>([]);
  const [scrambleDone, setScrambleDone] = useState<boolean | null>(null);
  // Speed Match
  const [speedQuestion, setSpeedQuestion] = useState<Word | null>(null);
  const [speedOptions, setSpeedOptions] = useState<string[]>([]);
  const [speedFeedback, setSpeedFeedback] = useState<string | null>(null);
  // Memory Match
  const [memoryCards, setMemoryCards] = useState<
    { id: string; text: string; pairId: number; type: 'target' | 'source'; matched: boolean }[]
  >([]);
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  // Wordle
  const [wordleTarget, setWordleTarget] = useState<Word | null>(null);
  const [wordleAnswer, setWordleAnswer] = useState('');
  const [wordleGuesses, setWordleGuesses] = useState<string[]>([]);
  const [wordleInput, setWordleInput] = useState('');
  const [wordleStatus, setWordleStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  // ── Grammar Tab State ──
  const [grammarSearch, setGrammarSearch] = useState('');
  const [expandedGrammarId, setExpandedGrammarId] = useState<string | null>(null);

  // ── Helper: Initialize Exercise State for Current Exercise ──
  const setupExerciseState = useCallback((ex: Exercise | undefined) => {
    setSelectedAnswer(null);
    setTypedAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setAlmostCorrect(false);
    setShowHint(false);
    setMatchedPairs(new Set());
    setMatchLeftIdx(null);
    setMatchWrongFlash(false);

    if (!ex) return;
    if (ex.type === 'word_bank' || ex.type === 'reorder') {
      setWordBankSelected([]);
      setWordBankRemaining([...(ex.wordTiles || ex.options || [])]);
    } else if (ex.type === 'match_pairs' && ex.pairs) {
      const indices = ex.pairs.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setMatchRightOrder(indices);
    }
  }, []);

  // ── Start a Skill Lesson (Stage 1: Learn First -> Stage 2: 15 Exercises) ──
  const startSkillLesson = useCallback(
    (skill: CourseSkill, skipLearn = false) => {
      setActiveSkillId(skill.id);
      setLearnCardIdx(0);
      setShowTipsPanel(false);
      const generated = generateExercises(skill, 15);
      setExercises(generated);
      setExIndex(0);
      setCorrectCount(0);
      setStreakCount(0);
      setXpEarned(0);
      setMissedItems([]);
      setupExerciseState(generated[0]);
      setLessonStage(skipLearn ? 'practice' : 'learn');
    },
    [setupExerciseState]
  );

  // ── Submit Current Exercise Answer ──
  const handleCheckExercise = useCallback(() => {
    const ex = exercises[exIndex];
    if (!ex || isSubmitted) return;

    let userAns = '';
    if (ex.type === 'multiple_choice' || ex.type === 'fill_blank') {
      if (!selectedAnswer) return;
      userAns = selectedAnswer;
    } else if (ex.type === 'word_bank' || ex.type === 'reorder') {
      if (wordBankSelected.length === 0) return;
      userAns = wordBankSelected.join(' ');
    } else if (ex.type === 'translate_to_english' || ex.type === 'translate_to_target') {
      if (!typedAnswer.trim()) return;
      userAns = typedAnswer.trim();
    }

    const isRight = checkAnswer(ex, userAns);
    const exactMatch =
      userAns.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase();
    const result = { correct: isRight, almostCorrect: isRight && !exactMatch };
    setIsSubmitted(true);
    setIsCorrect(result.correct);
    setAlmostCorrect(result.almostCorrect);

    if (result.correct) {
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      setCorrectCount((c) => c + 1);
      const bonus = newStreak >= 5 ? 5 : newStreak >= 3 ? 2 : 0;
      setXpEarned((x) => x + 10 + bonus);
    } else {
      setStreakCount(0);
      setMissedItems((prev) => [...prev, { prompt: ex.prompt, correct: ex.correctAnswer }]);
      saveLanguageProgress((prev) => ({
        ...prev,
        hearts: Math.max(0, prev.hearts - 1),
        heartsLastRefill: prev.hearts === MAX_HEARTS ? Date.now() : prev.heartsLastRefill,
      }));
    }

    // Update word strength if sourceWord present
    if (ex.sourceWord?.target) {
      const wKey = ex.sourceWord.target;
      saveLanguageProgress((prev) => {
        const existing = prev.wordStrengths[wKey] || {
          wordKey: wKey,
          strength: 3,
          lastSeen: Date.now(),
          correctStreak: 0,
          timesWrong: 0,
        };
        return {
          ...prev,
          wordStrengths: {
            ...prev.wordStrengths,
            [wKey]: {
              ...existing,
              strength: result.correct
                ? Math.min(5, existing.strength + 1)
                : Math.max(1, existing.strength - 1),
              lastSeen: Date.now(),
              correctStreak: result.correct ? existing.correctStreak + 1 : 0,
              timesWrong: result.correct ? existing.timesWrong : existing.timesWrong + 1,
            },
          },
        };
      });
    }
  }, [
    exercises,
    exIndex,
    isSubmitted,
    selectedAnswer,
    wordBankSelected,
    typedAnswer,
    streakCount,
    saveLanguageProgress,
  ]);

  // ── Handle Match Pairs Selection ──
  const handleMatchRightPress = useCallback(
    (pairIndex: number) => {
      const ex = exercises[exIndex];
      if (!ex || ex.type !== 'match_pairs' || !ex.pairs || matchLeftIdx === null) return;
      if (matchedPairs.has(pairIndex)) return;

      if (matchLeftIdx === pairIndex) {
        const nextMatched = new Set(matchedPairs);
        nextMatched.add(pairIndex);
        setMatchedPairs(nextMatched);
        setMatchLeftIdx(null);

        if (nextMatched.size === ex.pairs.length) {
          setIsSubmitted(true);
          setIsCorrect(true);
          setCorrectCount((c) => c + 1);
          setStreakCount((s) => s + 1);
          setXpEarned((x) => x + 15);
        }
      } else {
        setMatchWrongFlash(true);
        setTimeout(() => {
          setMatchWrongFlash(false);
          setMatchLeftIdx(null);
        }, 500);
      }
    },
    [exercises, exIndex, matchLeftIdx, matchedPairs]
  );

  // ── Advance to Next Exercise or Complete Lesson ──
  const handleNextExercise = useCallback(() => {
    if (exIndex + 1 < exercises.length) {
      const nextIdx = exIndex + 1;
      setExIndex(nextIdx);
      setupExerciseState(exercises[nextIdx]);
    } else {
      // Complete Lesson & Persist Mastery
      const total = Math.max(1, exercises.length);
      const accuracy = Math.round((correctCount / total) * 100);
      const completionBonus = accuracy === 100 ? 25 : 15;
      const finalLessonXP = xpEarned + completionBonus;
      setXpEarned(finalLessonXP);

      if (activeSkill) {
        saveLanguageProgress((prev) => {
          const today = new Date().toISOString().slice(0, 10);
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          const newStreak =
            prev.lastPracticeDate === today
              ? Math.max(1, prev.streak)
              : prev.lastPracticeDate === yesterday
              ? prev.streak + 1
              : 1;

          const prevSkill: SkillProgress = prev.skills[activeSkill.id] || {
            skillId: activeSkill.id,
            level: 0,
            lessonsCompleted: 0,
            lastPracticed: 0,
            bestAccuracy: 0,
          };

          const newLessonsCompleted = prevSkill.lessonsCompleted + 1;
          const newLevel = Math.min(5, prevSkill.level + 1);

          return {
            ...prev,
            totalXP: prev.totalXP + finalLessonXP,
            dailyXP: (prev.dailyDate === today ? prev.dailyXP : 0) + finalLessonXP,
            dailyDate: today,
            streak: newStreak,
            lastPracticeDate: today,
            perfectLessons: accuracy === 100 ? prev.perfectLessons + 1 : prev.perfectLessons,
            skills: {
              ...prev.skills,
              [activeSkill.id]: {
                skillId: activeSkill.id,
                level: newLevel,
                lessonsCompleted: newLessonsCompleted,
                lastPracticed: Date.now(),
                bestAccuracy: Math.max(prevSkill.bestAccuracy, accuracy),
              },
            },
          };
        });
      }
      setLessonStage('complete');
    }
  }, [exIndex, exercises, setupExerciseState, correctCount, xpEarned, activeSkill, saveLanguageProgress]);

  // ── Skip Current Exercise ──
  const handleSkipExercise = useCallback(() => {
    const ex = exercises[exIndex];
    if (!ex || isSubmitted) return;
    setIsSubmitted(true);
    setIsCorrect(false);
    setStreakCount(0);
    setMissedItems((prev) => [...prev, { prompt: ex.prompt, correct: ex.correctAnswer }]);
  }, [exercises, exIndex, isSubmitted]);

  // ── Mini-Games Pool & Launchers ──
  const allCourseWords = useMemo(() => {
    return allSkills.flatMap((s) => s.words);
  }, [allSkills]);

  const startScrambleRound = useCallback(() => {
    const eligible = allCourseWords.filter((w) => {
      const clean = w.target.replace(/[^a-zA-Z']/g, '');
      return clean.length >= 3 && clean.length <= 10 && !w.target.includes(' ');
    });
    const pool = eligible.length > 0 ? eligible : allCourseWords;
    if (pool.length === 0) return;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    const chars = chosen.target.trim().split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    setScrambleWord(chosen);
    setScramblePool(chars);
    setScramblePicked([]);
    setScrambleDone(null);
  }, [allCourseWords]);

  const startSpeedRound = useCallback(() => {
    if (allCourseWords.length < 4) return;
    const chosen = allCourseWords[Math.floor(Math.random() * allCourseWords.length)];
    const distractors = allCourseWords
      .filter((w) => w.source !== chosen.source)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.source);
    const opts = [chosen.source, ...distractors].sort(() => Math.random() - 0.5);
    setSpeedQuestion(chosen);
    setSpeedOptions(opts);
    setSpeedFeedback(null);
  }, [allCourseWords]);

  const startMemoryGame = useCallback(() => {
    const sample = [...allCourseWords].sort(() => Math.random() - 0.5).slice(0, 6);
    const deck: {
      id: string;
      text: string;
      pairId: number;
      type: 'target' | 'source';
      matched: boolean;
    }[] = [];
    sample.forEach((w, idx) => {
      deck.push({ id: `t-${idx}`, text: w.target, pairId: idx, type: 'target', matched: false });
      deck.push({ id: `s-${idx}`, text: w.source, pairId: idx, type: 'source', matched: false });
    });
    deck.sort(() => Math.random() - 0.5);
    setMemoryCards(deck);
    setMemoryFlipped([]);
  }, [allCourseWords]);

  const startWordleGame = useCallback(() => {
    const eligible = allCourseWords.filter((w) => {
      const clean = w.target.trim().toLowerCase();
      return /^[a-z]{4,7}$/.test(clean);
    });
    const pool = eligible.length > 0 ? eligible : allCourseWords.filter((w) => w.target.length >= 3);
    if (pool.length === 0) return;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    const cleanAns = chosen.target.trim().toLowerCase().replace(/[^a-z]/g, '').slice(0, 7);
    setWordleTarget(chosen);
    setWordleAnswer(cleanAns || 'maber');
    setWordleGuesses([]);
    setWordleInput('');
    setWordleStatus('playing');
  }, [allCourseWords]);

  const awardGameXP = useCallback(
    (points: number) => {
      saveLanguageProgress((prev) => ({
        ...prev,
        totalXP: prev.totalXP + points,
        dailyXP: prev.dailyXP + points,
        gamesPlayed: prev.gamesPlayed + 1,
      }));
    },
    [saveLanguageProgress]
  );

  // ── Derived Stats for Header & Skill Tree ──
  const xpLevelInfo = useMemo(() => getXpLevel(progress.totalXP), [progress.totalXP]);
  const currentLevel = xpLevelInfo.current;
  const nextLevel = xpLevelInfo.next;
  const reviewWordList = useMemo(
    () =>
      Object.values(progress.wordStrengths)
        .filter((w) => w.strength <= 3 || w.timesWrong > 0)
        .sort((a, b) => a.strength - b.strength)
        .map((w) => w.wordKey),
    [progress.wordStrengths]
  );
  const reviewDueCount = reviewWordList.length;
  const reviewWordKeys = useMemo(() => new Set(reviewWordList.slice(0, 20)), [reviewWordList]);

  const flashcardDeck: Word[] = useMemo(() => {
    if (cardMode === 'review' && reviewWordKeys.size > 0) {
      const matched = allCourseWords.filter((w) => reviewWordKeys.has(w.target));
      if (matched.length > 0) return matched;
    }
    return activeSkill?.words || [];
  }, [cardMode, reviewWordKeys, allCourseWords, activeSkill]);

  const currentFlashcard = flashcardDeck[cardIndex] || flashcardDeck[0];

  const grammarSections: GrammarSection[] = currentCourse?.grammarSections || [];
  const filteredGrammar = useMemo(() => {
    const q = grammarSearch.trim().toLowerCase();
    if (!q) return grammarSections;
    return grammarSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q) ||
        sec.content.toLowerCase().includes(q) ||
        (sec.examples || []).some((ex) =>
          Object.values(ex).some((val) => (val || '').toLowerCase().includes(q))
        )
    );
  }, [grammarSections, grammarSearch]);

  // ============================================================================
  // ACTIVE LESSON PLAYER VIEW (FULL-SCREEN MATERIAL 3 MODAL EXPERIENCE)
  // ============================================================================
  if (lessonStage !== 'idle' && activeSkill) {
    const currentEx = exercises[exIndex];
    const progressRatio =
      lessonStage === 'learn'
        ? (learnCardIdx + 1) / Math.max(1, activeSkill.words.length)
        : lessonStage === 'practice'
        ? (exIndex + 1) / Math.max(1, exercises.length)
        : 1;

    return (
      <View style={[styles.lessonContainer, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
        {/* Top Lesson Bar */}
        <View style={styles.lessonTopBar}>
          <Pressable
            android_ripple={ripple}
            onPress={() => setLessonStage('idle')}
            style={[styles.iconCircleBtn, { backgroundColor: colors.surfaceContainerHigh }]}
          >
            <Feather name="x" size={18} color={colors.text} />
          </Pressable>

          <View style={styles.lessonProgressTrackWrap}>
            <View style={[styles.lessonProgressTrack, { backgroundColor: colors.surfaceContainerHighest }]}>
              <View
                style={[
                  styles.lessonProgressFill,
                  { width: `${Math.min(100, Math.round(progressRatio * 100))}%`, backgroundColor: langColor },
                ]}
              />
            </View>
            <Text style={[styles.lessonProgressLabel, { color: colors.textMuted }]}>
              {lessonStage === 'learn'
                ? `Learn Card ${learnCardIdx + 1}/${activeSkill.words.length}`
                : lessonStage === 'practice'
                ? `Exercise ${exIndex + 1}/${exercises.length}`
                : 'Complete'}
            </Text>
          </View>

          <View style={styles.lessonHeartsBadge}>
            <Feather name="heart" size={14} color="#EF4444" />
            <Text style={[styles.lessonHeartsText, { color: colors.text }]}>{progress.hearts}</Text>
          </View>
        </View>

        {/* STAGE 1: LEARN FIRST (TEACHING WALKTHROUGH + GRAMMAR TIPS) */}
        {lessonStage === 'learn' && (
          <View style={styles.stageBody}>
            <View style={styles.learnHeaderRow}>
              <View style={[styles.stagePill, { backgroundColor: `${langColor}20` }]}>
                <Feather name="book-open" size={13} color={langColor} />
                <Text style={[styles.stagePillText, { color: langColor }]}>
                  Step 1: Study New Words
                </Text>
              </View>

              {activeSkill.tips ? (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setShowTipsPanel((v) => !v)}
                  style={[
                    styles.tipsToggleBtn,
                    {
                      backgroundColor: showTipsPanel
                        ? colors.primaryContainer
                        : colors.surfaceContainerHigh,
                    },
                  ]}
                >
                  <Feather name="info" size={13} color={showTipsPanel ? colors.gold : colors.textSecondary} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '700',
                      color: showTipsPanel ? colors.gold : colors.textSecondary,
                    }}
                  >
                    {showTipsPanel ? 'Hide Grammar Tips' : 'Grammar Tips'}
                  </Text>
                </Pressable>
              ) : null}
            </View>

            {showTipsPanel && activeSkill.tips ? (
              <View
                style={[
                  styles.tipsDrawerCard,
                  { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.tipsDrawerTitle, { color: colors.gold }]}>
                  Grammar & Usage Notes
                </Text>
                <Text style={[styles.tipsDrawerBody, { color: colors.textSecondary }]}>
                  {activeSkill.tips}
                </Text>
              </View>
            ) : null}

            {/* Active Teaching Card */}
            {activeSkill.words[learnCardIdx] ? (
              <View
                style={[
                  styles.teachCard,
                  { backgroundColor: colors.surface, borderColor: langColor },
                ]}
              >
                {activeSkill.words[learnCardIdx].partOfSpeech ? (
                  <View style={[styles.posTag, { backgroundColor: `${langColor}18` }]}>
                    <Text style={[styles.posTagText, { color: langColor }]}>
                      {activeSkill.words[learnCardIdx].partOfSpeech}
                    </Text>
                  </View>
                ) : null}

                <Text style={[styles.teachTargetWord, { color: colors.text }]}>
                  {activeSkill.words[learnCardIdx].target}
                </Text>

                {activeSkill.words[learnCardIdx].pronunciation ? (
                  <Text style={[styles.teachPronunciation, { color: langColor }]}>
                    [{activeSkill.words[learnCardIdx].pronunciation}]
                  </Text>
                ) : null}

                <View style={[styles.teachDivider, { backgroundColor: colors.outlineVariant }]} />

                <Text style={[styles.teachSourceMeaning, { color: colors.text }]}>
                  {activeSkill.words[learnCardIdx].source}
                </Text>

                {activeSkill.words[learnCardIdx].example ? (
                  <View
                    style={[
                      styles.teachExampleBox,
                      { backgroundColor: colors.surfaceContainerHigh },
                    ]}
                  >
                    <Text style={[styles.teachExampleLabel, { color: colors.textMuted }]}>
                      EXAMPLE
                    </Text>
                    <Text style={[styles.teachExampleText, { color: colors.textSecondary }]}>
                      {activeSkill.words[learnCardIdx].example}
                    </Text>
                  </View>
                ) : null}
              </View>
            ) : null}

            {/* Navigation Row */}
            <View style={styles.learnNavRow}>
              <Pressable
                android_ripple={ripple}
                disabled={learnCardIdx === 0}
                onPress={() => setLearnCardIdx((i) => Math.max(0, i - 1))}
                style={[
                  styles.m3OutlinedBtn,
                  {
                    borderColor: colors.outlineVariant,
                    opacity: learnCardIdx === 0 ? 0.4 : 1,
                  },
                ]}
              >
                <Feather name="chevron-left" size={16} color={colors.text} />
                <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Prev</Text>
              </Pressable>

              <Pressable
                android_ripple={ripple}
                onPress={() => setLessonStage('practice')}
                style={[styles.m3TonalBtn, { backgroundColor: colors.surfaceContainerHighest }]}
              >
                <Text style={[styles.m3TonalBtnText, { color: colors.textSecondary }]}>
                  Skip to Quiz
                </Text>
              </Pressable>

              {learnCardIdx + 1 < activeSkill.words.length ? (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setLearnCardIdx((i) => i + 1)}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Next Word</Text>
                  <Feather name="chevron-right" size={16} color="#000" />
                </Pressable>
              ) : (
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setLessonStage('practice')}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Start Practice</Text>
                  <Feather name="play" size={15} color="#000" />
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* STAGE 2: 15-EXERCISE INTERACTIVE PRACTICE LOOP */}
        {lessonStage === 'practice' && currentEx && (
          <View style={styles.stageBody}>
            <View style={styles.practiceMetaRow}>
              <View style={[styles.stagePill, { backgroundColor: `${langColor}18` }]}>
                <Feather name="zap" size={13} color={langColor} />
                <Text style={[styles.stagePillText, { color: langColor }]}>
                  {currentEx.type.replace(/_/g, ' ').toUpperCase()}
                </Text>
              </View>
              {streakCount >= 2 && (
                <View style={[styles.streakComboPill, { backgroundColor: 'rgba(245,158,11,0.16)' }]}>
                  <Text style={{ fontSize: 11, fontWeight: '800', color: '#F59E0B' }}>
                    🔥 {streakCount} in a row!
                  </Text>
                </View>
              )}
            </View>

            <Text style={[styles.quizPrompt, { color: colors.text }]}>{currentEx.prompt}</Text>

            {showHint && currentEx.hint ? (
              <View style={[styles.hintBanner, { backgroundColor: colors.surfaceContainerHigh }]}>
                <Feather name="help-circle" size={14} color={colors.gold} />
                <Text style={[styles.hintBannerText, { color: colors.textSecondary }]}>
                  Hint: {currentEx.hint}
                </Text>
              </View>
            ) : null}

            {/* 1. Multiple Choice & Fill Blank */}
            {(currentEx.type === 'multiple_choice' || currentEx.type === 'fill_blank') &&
              currentEx.options && (
                <View style={styles.optionsList}>
                  {currentEx.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isRightOption = opt.toLowerCase() === currentEx.correctAnswer.toLowerCase();
                    let bg = colors.surface;
                    let border = colors.outlineVariant;
                    if (isSubmitted) {
                      if (isRightOption) {
                        bg = 'rgba(16,185,129,0.16)';
                        border = '#10B981';
                      } else if (isSelected) {
                        bg = 'rgba(239,68,68,0.16)';
                        border = '#EF4444';
                      }
                    } else if (isSelected) {
                      bg = `${langColor}22`;
                      border = langColor;
                    }

                    return (
                      <Pressable
                        key={`${opt}-${idx}`}
                        android_ripple={ripple}
                        disabled={isSubmitted}
                        onPress={() => setSelectedAnswer(opt)}
                        style={[styles.optionButton, { backgroundColor: bg, borderColor: border }]}
                      >
                        <View
                          style={[
                            styles.optionNumberBadge,
                            {
                              backgroundColor: isSelected ? langColor : colors.surfaceContainerHigh,
                            },
                          ]}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '800',
                              color: isSelected ? '#000' : colors.textSecondary,
                            }}
                          >
                            {idx + 1}
                          </Text>
                        </View>
                        <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              )}

            {/* 2. Word Bank & Sentence Reorder */}
            {(currentEx.type === 'word_bank' || currentEx.type === 'reorder') && (
              <View style={{ gap: 14 }}>
                <View
                  style={[
                    styles.wordBankAnswerZone,
                    {
                      backgroundColor: colors.surface,
                      borderColor: isSubmitted
                        ? isCorrect
                          ? '#10B981'
                          : '#EF4444'
                        : colors.outlineVariant,
                    },
                  ]}
                >
                  {wordBankSelected.length === 0 ? (
                    <Text style={{ color: colors.textMuted, fontSize: 13 }}>
                      Tap words below to build your answer...
                    </Text>
                  ) : (
                    <View style={styles.wordChipsWrap}>
                      {wordBankSelected.map((word, idx) => (
                        <Pressable
                          key={`sel-${word}-${idx}`}
                          disabled={isSubmitted}
                          onPress={() => {
                            const nextSel = [...wordBankSelected];
                            nextSel.splice(idx, 1);
                            setWordBankSelected(nextSel);
                            setWordBankRemaining((prev) => [...prev, word]);
                          }}
                          style={[styles.wordTile, { backgroundColor: langColor }]}
                        >
                          <Text style={{ color: '#000', fontWeight: '700', fontSize: 14 }}>
                            {word}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>

                <View style={styles.wordChipsWrap}>
                  {wordBankRemaining.map((word, idx) => (
                    <Pressable
                      key={`rem-${word}-${idx}`}
                      disabled={isSubmitted}
                      onPress={() => {
                        const nextRem = [...wordBankRemaining];
                        nextRem.splice(idx, 1);
                        setWordBankRemaining(nextRem);
                        setWordBankSelected((prev) => [...prev, word]);
                      }}
                      style={[
                        styles.wordTile,
                        {
                          backgroundColor: colors.surfaceContainerHigh,
                          borderWidth: 1,
                          borderColor: colors.outlineVariant,
                        },
                      ]}
                    >
                      <Text style={{ color: colors.text, fontWeight: '600', fontSize: 14 }}>
                        {word}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            )}

            {/* 3. Match Pairs */}
            {currentEx.type === 'match_pairs' && currentEx.pairs && (
              <View style={styles.matchPairsGrid}>
                <View style={styles.matchColumn}>
                  <Text style={[styles.matchColumnHeader, { color: colors.textMuted }]}>
                    {currentCourse?.config.name}
                  </Text>
                  {currentEx.pairs.map((p, idx) => {
                    const isDone = matchedPairs.has(idx);
                    const isSelected = matchLeftIdx === idx;
                    return (
                      <Pressable
                        key={`left-${idx}`}
                        disabled={isDone}
                        onPress={() => setMatchLeftIdx(idx)}
                        style={[
                          styles.matchPairCard,
                          {
                            backgroundColor: isDone
                              ? 'rgba(16,185,129,0.14)'
                              : isSelected
                              ? `${langColor}26`
                              : colors.surface,
                            borderColor: isDone
                              ? '#10B981'
                              : isSelected
                              ? langColor
                              : colors.outlineVariant,
                            opacity: isDone ? 0.55 : 1,
                          },
                        ]}
                      >
                        <Text style={[styles.matchPairText, { color: colors.text }]}>
                          {(p as any).left || (p as any).target}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>

                <View style={styles.matchColumn}>
                  <Text style={[styles.matchColumnHeader, { color: colors.textMuted }]}>
                    English
                  </Text>
                  {matchRightOrder.map((pairIdx) => {
                    const pair = currentEx.pairs![pairIdx];
                    if (!pair) return null;
                    const isDone = matchedPairs.has(pairIdx);
                    return (
                      <Pressable
                        key={`right-${pairIdx}`}
                        disabled={isDone || matchLeftIdx === null}
                        onPress={() => handleMatchRightPress(pairIdx)}
                        style={[
                          styles.matchPairCard,
                          {
                            backgroundColor: isDone
                              ? 'rgba(16,185,129,0.14)'
                              : matchWrongFlash
                              ? 'rgba(239,68,68,0.15)'
                              : colors.surface,
                            borderColor: isDone ? '#10B981' : colors.outlineVariant,
                            opacity: isDone ? 0.55 : 1,
                          },
                        ]}
                      >
                        <Text style={[styles.matchPairText, { color: colors.text }]}>
                          {(pair as any).right || (pair as any).source}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            )}

            {/* 4. Free-Text Translation (translate_to_english / translate_to_target) */}
            {(currentEx.type === 'translate_to_english' ||
              currentEx.type === 'translate_to_target') && (
              <View style={{ gap: 10 }}>
                <TextInput
                  value={typedAnswer}
                  onChangeText={setTypedAnswer}
                  editable={!isSubmitted}
                  placeholder={
                    currentEx.type === 'translate_to_target'
                      ? `Type in ${currentCourse?.config.name}...`
                      : 'Type in English...'
                  }
                  placeholderTextColor={colors.textMuted}
                  style={[
                    styles.translationInput,
                    {
                      backgroundColor: colors.surface,
                      color: colors.text,
                      borderColor: isSubmitted
                        ? isCorrect
                          ? '#10B981'
                          : '#EF4444'
                        : colors.outlineVariant,
                    },
                  ]}
                />
              </View>
            )}

            {/* Feedback Banner */}
            {isSubmitted && (
              <View
                style={[
                  styles.feedbackBanner,
                  {
                    backgroundColor: isCorrect
                      ? 'rgba(16,185,129,0.14)'
                      : 'rgba(239,68,68,0.14)',
                    borderColor: isCorrect ? '#10B981' : '#EF4444',
                  },
                ]}
              >
                <Feather
                  name={isCorrect ? 'check-circle' : 'alert-circle'}
                  size={18}
                  color={isCorrect ? '#10B981' : '#EF4444'}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 14,
                      color: isCorrect ? '#10B981' : '#EF4444',
                    }}
                  >
                    {isCorrect
                      ? almostCorrect
                        ? 'Correct! (Watch the spelling)'
                        : 'Spot on!'
                      : 'Not quite right'}
                  </Text>
                  {(!isCorrect || almostCorrect) && (
                    <Text style={{ fontSize: 13, color: colors.text, marginTop: 2 }}>
                      Answer: <Text style={{ fontWeight: '700' }}>{currentEx.correctAnswer}</Text>
                    </Text>
                  )}
                </View>
              </View>
            )}

            {/* Action Row: Hint / Skip / Check / Continue */}
            <View style={styles.practiceActionRow}>
              {!isSubmitted ? (
                <>
                  {currentEx.hint && !showHint ? (
                    <Pressable
                      android_ripple={ripple}
                      onPress={() => setShowHint(true)}
                      style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                    >
                      <Feather name="help-circle" size={15} color={colors.textSecondary} />
                      <Text style={[styles.m3OutlinedBtnText, { color: colors.textSecondary }]}>
                        Hint
                      </Text>
                    </Pressable>
                  ) : null}

                  <Pressable
                    android_ripple={ripple}
                    onPress={handleSkipExercise}
                    style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                  >
                    <Text style={[styles.m3OutlinedBtnText, { color: colors.textSecondary }]}>
                      Skip
                    </Text>
                  </Pressable>

                  {currentEx.type !== 'match_pairs' && (
                    <Pressable
                      android_ripple={ripple}
                      onPress={handleCheckExercise}
                      style={[
                        styles.m3FilledBtn,
                        { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                      ]}
                    >
                      <Text style={styles.m3FilledBtnText}>Check Answer</Text>
                    </Pressable>
                  )}
                </>
              ) : (
                <Pressable
                  android_ripple={ripple}
                  onPress={handleNextExercise}
                  style={[
                    styles.m3FilledBtn,
                    { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                  ]}
                >
                  <Text style={styles.m3FilledBtnText}>
                    {exIndex + 1 < exercises.length ? 'Continue' : 'Finish Lesson'}
                  </Text>
                  <Feather name="arrow-right" size={16} color="#000" />
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* STAGE 3: LESSON COMPLETE SUMMARY & CULTURAL NOTE */}
        {lessonStage === 'complete' && (
          <View style={styles.stageBody}>
            <View style={styles.completeHero}>
              <View style={[styles.completeBadgeCircle, { backgroundColor: `${langColor}22` }]}>
                <Feather name="award" size={36} color={langColor} />
              </View>
              <Text style={[styles.completeTitle, { color: colors.text }]}>Lesson Complete!</Text>
              <Text style={[styles.completeSubtitle, { color: colors.textSecondary }]}>
                {activeSkill.title}
              </Text>
            </View>

            <View style={styles.completeMetricsRow}>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: langColor }]}>+{xpEarned}</Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  XP EARNED
                </Text>
              </View>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: '#10B981' }]}>
                  {Math.round((correctCount / Math.max(1, exercises.length)) * 100)}%
                </Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  ACCURACY
                </Text>
              </View>
              <View
                style={[
                  styles.completeMetricCard,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={[styles.completeMetricValue, { color: '#F59E0B' }]}>
                  🔥 {progress.streak}
                </Text>
                <Text style={[styles.completeMetricLabel, { color: colors.textMuted }]}>
                  DAY STREAK
                </Text>
              </View>
            </View>

            {activeSkill.culturalNote ? (
              <View
                style={[
                  styles.culturalNoteBox,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Feather name="compass" size={14} color={langColor} />
                  <Text style={{ fontSize: 12, fontWeight: '800', color: langColor }}>
                    Cultural & Historical Context
                  </Text>
                </View>
                <Text style={{ fontSize: 13, lineHeight: 19, color: colors.textSecondary }}>
                  {activeSkill.culturalNote}
                </Text>
              </View>
            ) : null}

            {missedItems.length > 0 && (
              <View
                style={[
                  styles.missedReviewBox,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={{ fontSize: 12, fontWeight: '800', color: colors.text }}>
                  Review Missed Items ({missedItems.length})
                </Text>
                {missedItems.slice(0, 4).map((m, idx) => (
                  <View key={idx} style={{ marginTop: 4 }}>
                    <Text style={{ fontSize: 12, color: colors.textSecondary }}>{m.prompt}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: '#10B981' }}>
                      → {m.correct}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            <View style={styles.learnNavRow}>
              <Pressable
                android_ripple={ripple}
                onPress={() => startSkillLesson(activeSkill, true)}
                style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
              >
                <Feather name="refresh-cw" size={15} color={colors.text} />
                <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Practice Again</Text>
              </Pressable>

              <Pressable
                android_ripple={ripple}
                onPress={() => setLessonStage('idle')}
                style={[
                  styles.m3FilledBtn,
                  { flex: 1, justifyContent: 'center', backgroundColor: langColor },
                ]}
              >
                <Text style={styles.m3FilledBtnText}>Back to Course Path</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    );
  }

  // ============================================================================
  // MAIN COURSE DASHBOARD (LANGUAGE SELECTOR + GAMIFICATION BAR + 4 TABS)
  // ============================================================================
  return (
    <View style={styles.container}>
      {/* 1. Material 3 Gamification & Level Status Card */}
      <View
        style={[
          styles.gamificationCard,
          { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
        ]}
      >
        <View style={styles.statsTopRow}>
          <View style={styles.levelBadgeWrap}>
            <Text style={{ fontSize: 20 }}>{currentLevel.icon}</Text>
            <View>
              <Text style={[styles.levelTitleText, { color: colors.text }]}>
                {currentLevel.name} • {progress.totalXP} XP
              </Text>
              <Text style={[styles.levelSubText, { color: colors.textMuted }]}>
                {nextLevel
                  ? `${nextLevel.minXp - progress.totalXP} XP to ${nextLevel.name}`
                  : 'Max Rank Achieved!'}
              </Text>
            </View>
          </View>

          <View style={styles.statsRightPills}>
            <View style={[styles.miniStatPill, { backgroundColor: colors.surfaceContainerHigh }]}>
              <Text style={{ fontSize: 12 }}>🔥 {progress.streak}d</Text>
            </View>
            <View style={[styles.miniStatPill, { backgroundColor: colors.surfaceContainerHigh }]}>
              <Text style={{ fontSize: 12 }}>❤️ {progress.hearts}</Text>
              {progress.hearts < MAX_HEARTS && (
                <Text style={{ fontSize: 10, color: colors.textMuted }}>
                  {' '}({`${minutesToNextHeart({ ...progress, version: 1, skillLevels: {}, xp: progress.totalXP, lastActiveDate: progress.lastPracticeDate, todayXp: progress.dailyXP, achievements: progress.unlockedAchievements, wordsLearned: [], lessonsCompleted: 0, streakFreezes: 0, reviewQueue: [] })}m`})
                </Text>
              )}
            </View>
            <Pressable
              android_ripple={ripple}
              onPress={() => setShowAchievements((v) => !v)}
              style={[
                styles.miniStatPill,
                {
                  backgroundColor: showAchievements
                    ? colors.primaryContainer
                    : colors.surfaceContainerHigh,
                },
              ]}
            >
              <Text style={{ fontSize: 12 }}>
                🏆 {progress.unlockedAchievements.length}/{ACHIEVEMENTS.length}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Daily XP Progress Bar */}
        <View style={styles.dailyGoalRow}>
          <Text style={[styles.dailyGoalLabel, { color: colors.textSecondary }]}>
            Daily Goal ({Math.min(progress.dailyXP, progress.dailyGoal)}/{progress.dailyGoal} XP)
          </Text>
          <View style={[styles.dailyGoalTrack, { backgroundColor: colors.surfaceContainerHighest }]}>
            <View
              style={[
                styles.dailyGoalFill,
                {
                  width: `${Math.min(100, Math.round((progress.dailyXP / progress.dailyGoal) * 100))}%`,
                  backgroundColor: langColor,
                },
              ]}
            />
          </View>
        </View>

        {/* Expandable Achievements Drawer */}
        {showAchievements && (
          <View style={[styles.achievementsGrid, { borderTopColor: colors.outlineVariant }]}>
            {ACHIEVEMENTS.map((ach) => {
              const isUnlocked = progress.unlockedAchievements.includes(ach.id);
              return (
                <View
                  key={ach.id}
                  style={[
                    styles.achievementChip,
                    {
                      backgroundColor: isUnlocked
                        ? `${langColor}18`
                        : colors.surfaceContainerHigh,
                      borderColor: isUnlocked ? langColor : colors.outlineVariant,
                      opacity: isUnlocked ? 1 : 0.55,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 16 }}>{ach.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 11, fontWeight: '800', color: colors.text }}>
                      {ach.name}
                    </Text>
                    <Text style={{ fontSize: 10, color: colors.textMuted }}>{ach.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>

      {/* 2. Horizontal M3 Language Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.langChipsScroll}
      >
        {PUBLISHED_COURSES.map((course) => {
          const isSelected = course.config.id === selectedLangId;
          return (
            <Pressable
              key={course.config.id}
              android_ripple={ripple}
              onPress={() => {
                setSelectedLangId(course.config.id);
                setCardIndex(0);
                setIsCardFlipped(false);
                setActiveGame('menu');
              }}
              style={[
                styles.langFilterChip,
                {
                  backgroundColor: isSelected
                    ? `${course.config.color}24`
                    : colors.surfaceContainerLow,
                  borderColor: isSelected ? course.config.color : colors.outlineVariant,
                },
              ]}
            >
              {isSelected ? (
                <Feather name="check" size={14} color={course.config.color} />
              ) : (
                <View style={[styles.langColorDot, { backgroundColor: course.config.color }]} />
              )}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: isSelected ? '800' : '600',
                  color: isSelected ? colors.text : colors.textSecondary,
                }}
              >
                {course.config.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* 3. Selected Language Banner + Verified Sources */}
      {currentCourse && (
        <View
          style={[
            styles.courseInfoCard,
            { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
          ]}
        >
          <View style={styles.courseInfoHeader}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.courseInfoTitle, { color: colors.text }]}>
                {currentCourse.config.name} ({currentCourse.config.nativeName})
              </Text>
              <Text style={[styles.courseInfoMeta, { color: langColor }]}>
                {currentCourse.config.family} • {currentCourse.config.speakers} speakers •{' '}
                {currentCourse.units.length} units
              </Text>
            </View>

            {reviewDueCount > 0 && (
              <Pressable
                android_ripple={ripple}
                onPress={() => {
                  setCardMode('review');
                  setCardIndex(0);
                  setActiveTab('cards');
                }}
                style={[styles.reviewDueBadge, { backgroundColor: 'rgba(245,158,11,0.16)' }]}
              >
                <Feather name="rotate-cw" size={12} color="#F59E0B" />
                <Text style={{ fontSize: 11, fontWeight: '800', color: '#F59E0B' }}>
                  {reviewDueCount} Due
                </Text>
              </Pressable>
            )}
          </View>

          <Text style={[styles.courseInfoDesc, { color: colors.textSecondary }]}>
            {currentCourse.config.description}
          </Text>

          {languageSources.length > 0 && (
            <View style={styles.sourcesRow}>
              <Feather name="book" size={11} color={colors.textMuted} />
              <Text style={[styles.sourcesText, { color: colors.textMuted }]} numberOfLines={2}>
                Built from: {languageSources.map((s) => `${s.title} (${s.published})`).join(' • ')}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* 4. Material 3 Segmented Navigation Bar (Learn | Cards | Games | Grammar) */}
      <View
        style={[
          styles.m3SegmentedBar,
          { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
        ]}
      >
        {(
          [
            { id: 'learn', label: 'Path', icon: 'git-commit' },
            { id: 'cards', label: 'Cards', icon: 'layers' },
            { id: 'games', label: 'Games', icon: 'cpu' },
            ...(grammarSections.length > 0
              ? [{ id: 'grammar', label: 'Grammar', icon: 'book-open' }]
              : []),
          ] as { id: MainTab; label: string; icon: keyof typeof Feather.glyphMap }[]
        ).map((tab) => {
          const active = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              android_ripple={ripple}
              onPress={() => setActiveTab(tab.id)}
              style={[
                styles.m3SegmentBtn,
                active && { backgroundColor: `${langColor}26` },
              ]}
            >
              <Feather
                name={tab.icon}
                size={14}
                color={active ? langColor : colors.textSecondary}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: active ? '800' : '600',
                  color: active ? colors.text : colors.textSecondary,
                }}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* ========================================================================
          TAB 1: SKILL TREE PATH (UNITS ACCORDION + 5-STAR MASTERY + LESSON LAUNCH)
         ======================================================================== */}
      {activeTab === 'learn' && currentCourse && (
        <View style={styles.unitListWrap}>
          {currentCourse.units.map((unit: CourseUnit, uIdx: number) => {
            const isExpanded = !!expandedUnitIds[unit.id];
            const completedInUnit = unit.skills.filter(
              (s) => (progress.skills[s.id]?.level || 0) >= 1
            ).length;

            return (
              <View
                key={unit.id}
                style={[
                  styles.unitCard,
                  {
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: colors.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={ripple}
                  onPress={() =>
                    setExpandedUnitIds((prev) => ({ ...prev, [unit.id]: !prev[unit.id] }))
                  }
                  style={styles.unitHeaderPressable}
                >
                  <View style={[styles.unitNumberBadge, { backgroundColor: `${langColor}22` }]}>
                    <Text style={{ fontSize: 13, fontWeight: '800', color: langColor }}>
                      {uIdx + 1}
                    </Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={[styles.unitTitleText, { color: colors.text }]}>{unit.title}</Text>
                    <Text style={[styles.unitDescText, { color: colors.textSecondary }]} numberOfLines={2}>
                      {unit.description}
                    </Text>
                    <Text style={{ fontSize: 11, fontWeight: '700', color: langColor, marginTop: 4 }}>
                      {completedInUnit}/{unit.skills.length} skills practiced
                    </Text>
                  </View>

                  <Feather
                    name={isExpanded ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textSecondary}
                  />
                </Pressable>

                {isExpanded && (
                  <View style={[styles.unitSkillsBody, { borderTopColor: colors.outlineVariant }]}>
                    {unit.skills.map((skill: CourseSkill, sIdx: number) => {
                      const sp = progress.skills[skill.id];
                      const skillLevel = sp?.level || 0;
                      const skillLevelsMap: Record<string, number> = {};
                      for (const [k, v] of Object.entries(progress.skills)) {
                        skillLevelsMap[k] = v.level;
                      }
                      const unlocked = isSkillUnlocked(
                        skill.id,
                        sIdx,
                        uIdx,
                        skillLevelsMap,
                        currentCourse.units
                      );

                      return (
                        <View
                          key={skill.id}
                          style={[
                            styles.skillNodeCard,
                            {
                              backgroundColor: colors.surface,
                              borderColor:
                                skillLevel >= 5
                                  ? '#F59E0B'
                                  : skillLevel >= 1
                                  ? langColor
                                  : colors.outlineVariant,
                              opacity: unlocked ? 1 : 0.65,
                            },
                          ]}
                        >
                          <View style={styles.skillNodeTop}>
                            <View style={{ flex: 1 }}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <Feather
                                  name={
                                    skillLevel >= 1
                                      ? 'check-circle'
                                      : unlocked
                                      ? 'play-circle'
                                      : 'lock'
                                  }
                                  size={15}
                                  color={
                                    skillLevel >= 1
                                      ? '#10B981'
                                      : unlocked
                                      ? langColor
                                      : colors.textMuted
                                  }
                                />
                                <Text style={[styles.skillNodeTitle, { color: colors.text }]}>
                                  {skill.title}
                                </Text>
                              </View>
                              <Text
                                style={[styles.skillNodeDesc, { color: colors.textSecondary }]}
                                numberOfLines={2}
                              >
                                {skill.description}
                              </Text>
                            </View>

                            {/* 5-Star Mastery Row */}
                            <View style={styles.starsRow}>
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Text
                                  key={star}
                                  style={{
                                    fontSize: 11,
                                    opacity: star <= skillLevel ? 1 : 0.25,
                                  }}
                                >
                                  ⭐
                                </Text>
                              ))}
                            </View>
                          </View>

                          <View style={styles.skillNodeFooter}>
                            <Text style={{ fontSize: 11, color: colors.textMuted }}>
                              {skill.words.length} words •{' '}
                              {sp?.bestAccuracy ? `Best ${sp.bestAccuracy}%` : 'New'}
                            </Text>

                            <View style={{ flexDirection: 'row', gap: 8 }}>
                              <Pressable
                                android_ripple={ripple}
                                onPress={() => {
                                  setActiveSkillId(skill.id);
                                  setCardMode('skill');
                                  setCardIndex(0);
                                  setIsCardFlipped(false);
                                  setActiveTab('cards');
                                }}
                                style={[
                                  styles.skillSmallBtn,
                                  { backgroundColor: colors.surfaceContainerHigh },
                                ]}
                              >
                                <Feather name="layers" size={12} color={colors.textSecondary} />
                                <Text
                                  style={{
                                    fontSize: 11,
                                    fontWeight: '700',
                                    color: colors.textSecondary,
                                  }}
                                >
                                  Cards
                                </Text>
                              </Pressable>

                              <Pressable
                                android_ripple={ripple}
                                onPress={() => startSkillLesson(skill, false)}
                                style={[
                                  styles.skillStartBtn,
                                  { backgroundColor: langColor },
                                ]}
                              >
                                <Text style={{ fontSize: 12, fontWeight: '800', color: '#000' }}>
                                  {skillLevel === 0
                                    ? 'Start Lesson'
                                    : skillLevel >= 5
                                    ? 'Mastered • Review'
                                    : `Level ${skillLevel} → ${skillLevel + 1}`}
                                </Text>
                                <Feather name="arrow-right" size={13} color="#000" />
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}

      {/* ========================================================================
          TAB 2: FLASHCARDS & SPACED REPETITION REVIEW DECK
         ======================================================================== */}
      {activeTab === 'cards' && (
        <View style={styles.cardsTabWrap}>
          {/* Mode Switcher: Skill Vocabulary vs. Spaced Repetition Review */}
          <View style={styles.cardModeRow}>
            <Pressable
              android_ripple={ripple}
              onPress={() => {
                setCardMode('skill');
                setCardIndex(0);
                setIsCardFlipped(false);
              }}
              style={[
                styles.cardModeChip,
                {
                  backgroundColor:
                    cardMode === 'skill' ? `${langColor}22` : colors.surfaceContainerLow,
                  borderColor: cardMode === 'skill' ? langColor : colors.outlineVariant,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: cardMode === 'skill' ? colors.text : colors.textSecondary,
                }}
              >
                Skill Deck ({activeSkill?.words.length || 0})
              </Text>
            </Pressable>

            <Pressable
              android_ripple={ripple}
              onPress={() => {
                setCardMode('review');
                setCardIndex(0);
                setIsCardFlipped(false);
              }}
              style={[
                styles.cardModeChip,
                {
                  backgroundColor:
                    cardMode === 'review' ? `${langColor}22` : colors.surfaceContainerLow,
                  borderColor: cardMode === 'review' ? langColor : colors.outlineVariant,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: cardMode === 'review' ? colors.text : colors.textSecondary,
                }}
              >
                Review Queue ({reviewDueCount})
              </Text>
            </Pressable>
          </View>

          {currentFlashcard ? (
            <>
              <Pressable
                android_ripple={ripple}
                onPress={() => setIsCardFlipped((f) => !f)}
                style={[
                  styles.flashcardSurface,
                  {
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: isCardFlipped ? langColor : colors.outlineVariant,
                  },
                ]}
              >
                <View style={styles.flashcardTopMeta}>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: colors.textMuted }}>
                    CARD {cardIndex + 1} OF {flashcardDeck.length}
                  </Text>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: langColor }}>
                    {isCardFlipped ? 'ENGLISH MEANING' : currentCourse?.config.name.toUpperCase()}
                  </Text>
                </View>

                <Text style={[styles.flashcardMainWord, { color: colors.text }]}>
                  {isCardFlipped ? currentFlashcard.source : currentFlashcard.target}
                </Text>

                {!isCardFlipped && currentFlashcard.pronunciation ? (
                  <Text style={{ fontSize: 13, color: langColor, marginTop: 6 }}>
                    [{currentFlashcard.pronunciation}]
                  </Text>
                ) : null}

                {isCardFlipped && currentFlashcard.example ? (
                  <Text
                    style={{
                      fontSize: 13,
                      color: colors.textSecondary,
                      marginTop: 12,
                      textAlign: 'center',
                    }}
                  >
                    {currentFlashcard.example}
                  </Text>
                ) : null}

                <Text style={{ fontSize: 11, color: colors.textMuted, marginTop: 18 }}>
                  Tap card to flip
                </Text>
              </Pressable>

              <View style={styles.learnNavRow}>
                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i > 0 ? i - 1 : flashcardDeck.length - 1));
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Feather name="chevron-left" size={16} color={colors.text} />
                  <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Previous</Text>
                </Pressable>

                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    if (activeSkill) startSkillLesson(activeSkill, false);
                  }}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Quiz This Skill</Text>
                </Pressable>

                <Pressable
                  android_ripple={ripple}
                  onPress={() => {
                    setIsCardFlipped(false);
                    setCardIndex((i) => (i + 1) % Math.max(1, flashcardDeck.length));
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Text style={[styles.m3OutlinedBtnText, { color: colors.text }]}>Next</Text>
                  <Feather name="chevron-right" size={16} color={colors.text} />
                </Pressable>
              </View>
            </>
          ) : null}
        </View>
      )}

      {/* ========================================================================
          TAB 3: GAMES HUB (4 MINI-GAMES: SCRAMBLE, SPEED MATCH, MEMORY, WORDLE)
         ======================================================================== */}
      {activeTab === 'games' && (
        <View style={styles.gamesTabWrap}>
          {activeGame === 'menu' && (
            <View style={styles.gamesMenuGrid}>
              {[
                {
                  id: 'scramble' as ActiveGame,
                  title: 'Word Scramble',
                  desc: 'Unscramble letters to spell the target language word.',
                  icon: 'shuffle' as const,
                  onStart: startScrambleRound,
                },
                {
                  id: 'speed' as ActiveGame,
                  title: 'Speed Match',
                  desc: 'Rapid-fire vocabulary translation challenge.',
                  icon: 'zap' as const,
                  onStart: startSpeedRound,
                },
                {
                  id: 'memory' as ActiveGame,
                  title: 'Memory Cards',
                  desc: 'Flip and match pairs of words and their meanings.',
                  icon: 'grid' as const,
                  onStart: startMemoryGame,
                },
                {
                  id: 'wordle' as ActiveGame,
                  title: `${currentCourse?.config.name} Wordle`,
                  desc: 'Guess the hidden word in 6 tries with color-coded letter hints.',
                  icon: 'hash' as const,
                  onStart: startWordleGame,
                },
              ].map((g) => (
                <Pressable
                  key={g.id}
                  android_ripple={ripple}
                  onPress={() => {
                    setGameScore(0);
                    setGameRound(1);
                    g.onStart();
                    setActiveGame(g.id);
                  }}
                  style={[
                    styles.gameMenuCard,
                    {
                      backgroundColor: colors.surfaceContainerLow,
                      borderColor: colors.outlineVariant,
                    },
                  ]}
                >
                  <View style={[styles.gameIconBox, { backgroundColor: `${langColor}22` }]}>
                    <Feather name={g.icon} size={20} color={langColor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.gameCardTitle, { color: colors.text }]}>{g.title}</Text>
                    <Text style={[styles.gameCardDesc, { color: colors.textSecondary }]}>
                      {g.desc}
                    </Text>
                  </View>
                  <Feather name="chevron-right" size={18} color={colors.textMuted} />
                </Pressable>
              ))}
            </View>
          )}

          {/* GAME 1: WORD SCRAMBLE */}
          {activeGame === 'scramble' && scrambleWord && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={{ fontSize: 12, color: colors.textMuted, textAlign: 'center' }}>
                UNSCRAMBLE THE WORD FOR:
              </Text>
              <Text style={[styles.gamePromptWord, { color: colors.text }]}>
                "{scrambleWord.source}"
              </Text>

              <View
                style={[
                  styles.scrambleSlotsBox,
                  { backgroundColor: colors.surface, borderColor: colors.outlineVariant },
                ]}
              >
                <Text style={{ fontSize: 22, fontWeight: '800', letterSpacing: 3, color: langColor }}>
                  {scramblePicked.map((i) => scramblePool[i]).join('') || '...'}
                </Text>
              </View>

              <View style={styles.wordChipsWrap}>
                {scramblePool.map((ch, idx) => {
                  const used = scramblePicked.includes(idx);
                  return (
                    <Pressable
                      key={`scr-${idx}`}
                      disabled={used || scrambleDone !== null}
                      onPress={() => {
                        const nextPicked = [...scramblePicked, idx];
                        setScramblePicked(nextPicked);
                        if (nextPicked.length === scramblePool.length) {
                          const attempt = nextPicked.map((i) => scramblePool[i]).join('');
                          const won =
                            attempt.toLowerCase() === scrambleWord.target.trim().toLowerCase();
                          setScrambleDone(won);
                          if (won) {
                            setGameScore((s) => s + 15);
                            awardGameXP(15);
                          }
                        }
                      }}
                      style={[
                        styles.letterBtn,
                        {
                          backgroundColor: used ? colors.surfaceContainerHighest : langColor,
                          opacity: used ? 0.35 : 1,
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 16, fontWeight: '800', color: '#000' }}>
                        {ch.toUpperCase()}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {scrambleDone !== null && (
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '800',
                    color: scrambleDone ? '#10B981' : '#EF4444',
                  }}
                >
                  {scrambleDone ? '✓ Correct! +15 XP' : `Answer: ${scrambleWord.target}`}
                </Text>
              )}

              <View style={styles.learnNavRow}>
                <Pressable
                  onPress={() => {
                    setScramblePicked([]);
                    setScrambleDone(null);
                  }}
                  style={[styles.m3OutlinedBtn, { borderColor: colors.outlineVariant }]}
                >
                  <Text style={{ color: colors.text, fontWeight: '700' }}>Reset</Text>
                </Pressable>
                <Pressable
                  onPress={startScrambleRound}
                  style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                >
                  <Text style={styles.m3FilledBtnText}>Next Word</Text>
                </Pressable>
              </View>
            </View>
          )}

          {/* GAME 2: SPEED MATCH */}
          {activeGame === 'speed' && speedQuestion && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>Score: {gameScore}</Text>
              </View>

              <Text style={[styles.gamePromptWord, { color: colors.text }]}>
                {speedQuestion.target}
              </Text>

              <View style={styles.optionsList}>
                {speedOptions.map((opt, idx) => (
                  <Pressable
                    key={`spd-${idx}`}
                    disabled={speedFeedback !== null}
                    onPress={() => {
                      const right = opt === speedQuestion.source;
                      setSpeedFeedback(opt);
                      if (right) {
                        setGameScore((s) => s + 10);
                        awardGameXP(10);
                      }
                      setTimeout(() => {
                        startSpeedRound();
                      }, 650);
                    }}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          speedFeedback === null
                            ? colors.surface
                            : opt === speedQuestion.source
                            ? 'rgba(16,185,129,0.2)'
                            : speedFeedback === opt
                            ? 'rgba(239,68,68,0.2)'
                            : colors.surface,
                        borderColor:
                          speedFeedback !== null && opt === speedQuestion.source
                            ? '#10B981'
                            : colors.outlineVariant,
                      },
                    ]}
                  >
                    <Text style={[styles.optionButtonText, { color: colors.text }]}>{opt}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* GAME 3: MEMORY CARDS */}
          {activeGame === 'memory' && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Pressable onPress={startMemoryGame}>
                  <Text style={{ fontWeight: '800', color: langColor }}>New Board</Text>
                </Pressable>
              </View>

              <View style={styles.memoryGrid}>
                {memoryCards.map((card, idx) => {
                  const isOpen = card.matched || memoryFlipped.includes(idx);
                  return (
                    <Pressable
                      key={card.id}
                      disabled={isOpen || memoryFlipped.length >= 2}
                      onPress={() => {
                        const nextFlip = [...memoryFlipped, idx];
                        setMemoryFlipped(nextFlip);
                        if (nextFlip.length === 2) {
                          const [a, b] = nextFlip;
                          if (
                            memoryCards[a].pairId === memoryCards[b].pairId &&
                            memoryCards[a].type !== memoryCards[b].type
                          ) {
                            setMemoryCards((prev) =>
                              prev.map((c, i) =>
                                i === a || i === b ? { ...c, matched: true } : c
                              )
                            );
                            setMemoryFlipped([]);
                            setGameScore((s) => s + 10);
                            awardGameXP(5);
                          } else {
                            setTimeout(() => setMemoryFlipped([]), 650);
                          }
                        }
                      }}
                      style={[
                        styles.memoryTile,
                        {
                          backgroundColor: card.matched
                            ? 'rgba(16,185,129,0.16)'
                            : isOpen
                            ? `${langColor}24`
                            : colors.surface,
                          borderColor: card.matched
                            ? '#10B981'
                            : isOpen
                            ? langColor
                            : colors.outlineVariant,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '700',
                          color: isOpen ? colors.text : colors.textMuted,
                          textAlign: 'center',
                        }}
                        numberOfLines={2}
                      >
                        {isOpen ? card.text : '?'}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          {/* GAME 4: WORDLE (MATCHES WEBSITE GAMESHUB WORDLE) */}
          {activeGame === 'wordle' && wordleTarget && (
            <View
              style={[
                styles.gameBoardCard,
                { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
              ]}
            >
              <View style={styles.gameTopHeader}>
                <Pressable onPress={() => setActiveGame('menu')} style={styles.backLinkRow}>
                  <Feather name="arrow-left" size={16} color={colors.textSecondary} />
                  <Text style={{ color: colors.textSecondary, fontWeight: '700', fontSize: 13 }}>
                    Games Menu
                  </Text>
                </Pressable>
                <Text style={{ fontWeight: '800', color: langColor }}>
                  {wordleAnswer.length}-Letter Wordle
                </Text>
              </View>

              <Text style={{ fontSize: 12, color: colors.textSecondary, textAlign: 'center' }}>
                Clue (English meaning):{' '}
                <Text style={{ fontWeight: '800', color: colors.text }}>
                  "{wordleTarget.source}"
                </Text>
              </Text>

              {/* 6 Guess Rows */}
              <View style={{ gap: 6, alignItems: 'center', marginVertical: 8 }}>
                {Array.from({ length: 6 }).map((_, rowIdx) => {
                  const guess = wordleGuesses[rowIdx] || '';
                  const isSubmittedRow = rowIdx < wordleGuesses.length;
                  return (
                    <View key={`wrow-${rowIdx}`} style={{ flexDirection: 'row', gap: 6 }}>
                      {Array.from({ length: wordleAnswer.length }).map((__, colIdx) => {
                        const letter = guess[colIdx] || '';
                        let cellBg = colors.surface;
                        let cellBorder = colors.outlineVariant;
                        let textColor = colors.text;

                        if (isSubmittedRow) {
                          if (letter === wordleAnswer[colIdx]) {
                            cellBg = '#10B981';
                            cellBorder = '#10B981';
                            textColor = '#000';
                          } else if (wordleAnswer.includes(letter)) {
                            cellBg = '#F59E0B';
                            cellBorder = '#F59E0B';
                            textColor = '#000';
                          } else {
                            cellBg = colors.surfaceContainerHighest;
                          }
                        }

                        return (
                          <View
                            key={`wcol-${colIdx}`}
                            style={[
                              styles.wordleCell,
                              { backgroundColor: cellBg, borderColor: cellBorder },
                            ]}
                          >
                            <Text style={{ fontSize: 15, fontWeight: '800', color: textColor }}>
                              {letter.toUpperCase()}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>

              {wordleStatus === 'playing' ? (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <TextInput
                    value={wordleInput}
                    onChangeText={(t) =>
                      setWordleInput(t.replace(/[^a-zA-Z]/g, '').slice(0, wordleAnswer.length))
                    }
                    placeholder={`Enter ${wordleAnswer.length} letters...`}
                    placeholderTextColor={colors.textMuted}
                    autoCapitalize="none"
                    style={[
                      styles.translationInput,
                      {
                        flex: 1,
                        backgroundColor: colors.surface,
                        color: colors.text,
                        borderColor: colors.outlineVariant,
                      },
                    ]}
                  />
                  <Pressable
                    onPress={() => {
                      const clean = wordleInput.trim().toLowerCase();
                      if (clean.length !== wordleAnswer.length) return;
                      const nextGuesses = [...wordleGuesses, clean];
                      setWordleGuesses(nextGuesses);
                      setWordleInput('');
                      if (clean === wordleAnswer) {
                        setWordleStatus('won');
                        awardGameXP(25);
                      } else if (nextGuesses.length >= 6) {
                        setWordleStatus('lost');
                      }
                    }}
                    style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                  >
                    <Text style={styles.m3FilledBtnText}>Guess</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={{ alignItems: 'center', gap: 10 }}>
                  <Text
                    style={{
                      fontWeight: '800',
                      color: wordleStatus === 'won' ? '#10B981' : '#EF4444',
                    }}
                  >
                    {wordleStatus === 'won'
                      ? '🎉 Solved! +25 XP'
                      : `Word was: ${wordleAnswer.toUpperCase()}`}
                  </Text>
                  <Pressable
                    onPress={startWordleGame}
                    style={[styles.m3FilledBtn, { backgroundColor: langColor }]}
                  >
                    <Text style={styles.m3FilledBtnText}>Play Again</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}
        </View>
      )}

      {/* ========================================================================
          TAB 4: GRAMMAR REFERENCE (WITH MARKDOWN BOLD/ITALIC/BULLET FORMATTING)
         ======================================================================== */}
      {activeTab === 'grammar' && (
        <View style={styles.grammarTabWrap}>
          {/* M3 Search Input */}
          <View
            style={[
              styles.m3SearchBar,
              { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant },
            ]}
          >
            <Feather name="search" size={16} color={colors.textMuted} />
            <TextInput
              value={grammarSearch}
              onChangeText={setGrammarSearch}
              placeholder="Search grammar rules, tenses, or examples..."
              placeholderTextColor={colors.textMuted}
              style={{ flex: 1, fontSize: 13, color: colors.text, paddingVertical: 6 }}
            />
            {grammarSearch.length > 0 && (
              <Pressable onPress={() => setGrammarSearch('')}>
                <Feather name="x-circle" size={15} color={colors.textMuted} />
              </Pressable>
            )}
          </View>

          {filteredGrammar.map((section) => {
            const isOpen = expandedGrammarId === section.id;
            const lines = section.content.split('\n');

            return (
              <View
                key={section.id}
                style={[
                  styles.grammarAccordionCard,
                  {
                    backgroundColor: colors.surfaceContainerLow,
                    borderColor: isOpen ? langColor : colors.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={ripple}
                  onPress={() => setExpandedGrammarId(isOpen ? null : section.id)}
                  style={styles.grammarHeaderRow}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.grammarSectionTitle, { color: colors.text }]}>
                      {section.title}
                    </Text>
                    <Text
                      style={[styles.grammarSectionSummary, { color: colors.textSecondary }]}
                      numberOfLines={isOpen ? undefined : 2}
                    >
                      {section.summary}
                    </Text>
                  </View>
                  <Feather
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textSecondary}
                  />
                </Pressable>

                {isOpen && (
                  <View style={[styles.grammarBodyWrap, { borderTopColor: colors.outlineVariant }]}>
                    {lines.map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <View key={lIdx} style={{ height: 6 }} />;
                      const isBullet = trimmed.startsWith('- ');
                      const cleanLine = isBullet ? trimmed.slice(2) : trimmed;

                      return (
                        <View
                          key={lIdx}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            paddingLeft: isBullet ? 8 : 0,
                            marginBottom: 4,
                          }}
                        >
                          {isBullet && (
                            <Text style={{ color: langColor, fontWeight: '800', marginRight: 6 }}>
                              •
                            </Text>
                          )}
                          <View style={{ flex: 1 }}>
                            {renderFormattedText(
                              cleanLine,
                              { fontSize: 13, lineHeight: 20, color: colors.textSecondary },
                              colors.text,
                              langColor,
                              colors.surfaceContainerHigh
                            )}
                          </View>
                        </View>
                      );
                    })}

                    {section.examples && section.examples.length > 0 && (
                      <View style={styles.grammarExamplesBox}>
                        <Text
                          style={{
                            fontSize: 11,
                            fontWeight: '800',
                            color: langColor,
                            marginBottom: 6,
                          }}
                        >
                          EXAMPLES ({section.examples.length})
                        </Text>
                        {section.examples.slice(0, 8).map((ex, eIdx) => {
                          const targetKey = Object.keys(ex).find(
                            (k) => k !== 'english' && k !== 'explanation'
                          );
                          const targetText = targetKey ? (ex as any)[targetKey] : '';
                          return (
                          <View
                            key={eIdx}
                            style={[
                              styles.grammarExampleItem,
                              {
                                backgroundColor: colors.surface,
                                borderColor: colors.outlineVariant,
                              },
                            ]}
                          >
                            <Text style={{ fontSize: 13, fontWeight: '800', color: colors.text }}>
                              {targetText}
                            </Text>
                            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                              {ex.english}
                            </Text>
                            {ex.explanation ? (
                              <Text style={{ fontSize: 11, color: langColor, marginTop: 2 }}>
                                {ex.explanation}
                              </Text>
                            ) : null}
                          </View>
                          );
                        })}
                      </View>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  gamificationCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  statsTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  levelBadgeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  levelTitleText: {
    fontSize: 14,
    fontWeight: '800',
  },
  levelSubText: {
    fontSize: 11,
  },
  statsRightPills: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  miniStatPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
  },
  dailyGoalRow: {
    gap: 5,
  },
  dailyGoalLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  dailyGoalTrack: {
    height: 7,
    borderRadius: 999,
    overflow: 'hidden',
  },
  dailyGoalFill: {
    height: '100%',
    borderRadius: 999,
  },
  achievementsGrid: {
    borderTopWidth: 1,
    paddingTop: 10,
    gap: 6,
  },
  achievementChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  langChipsScroll: {
    gap: 8,
    paddingVertical: 2,
  },
  langFilterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  langColorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  courseInfoCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
    gap: 6,
  },
  courseInfoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  courseInfoTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  courseInfoMeta: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  courseInfoDesc: {
    fontSize: 12,
    lineHeight: 18,
  },
  sourcesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  sourcesText: {
    flex: 1,
    fontSize: 11,
  },
  reviewDueBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  m3SegmentedBar: {
    flexDirection: 'row',
    borderRadius: 999,
    borderWidth: 1,
    padding: 4,
    gap: 4,
  },
  m3SegmentBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 9,
    borderRadius: 999,
  },
  unitListWrap: {
    gap: 12,
  },
  unitCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  unitHeaderPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
  },
  unitNumberBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitTitleText: {
    fontSize: 14,
    fontWeight: '800',
  },
  unitDescText: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 17,
  },
  unitSkillsBody: {
    borderTopWidth: 1,
    padding: 12,
    gap: 10,
  },
  skillNodeCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 10,
  },
  skillNodeTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  skillNodeTitle: {
    fontSize: 13,
    fontWeight: '800',
    flex: 1,
  },
  skillNodeDesc: {
    fontSize: 12,
    marginTop: 3,
    lineHeight: 17,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  skillNodeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  skillSmallBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  skillStartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  // Lesson Player
  lessonContainer: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
    gap: 16,
  },
  lessonTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonProgressTrackWrap: {
    flex: 1,
    gap: 4,
  },
  lessonProgressTrack: {
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  lessonProgressFill: {
    height: '100%',
    borderRadius: 999,
  },
  lessonProgressLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  lessonHeartsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  lessonHeartsText: {
    fontSize: 13,
    fontWeight: '800',
  },
  stageBody: {
    gap: 14,
  },
  learnHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  stagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  stagePillText: {
    fontSize: 11,
    fontWeight: '800',
  },
  tipsToggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 999,
  },
  tipsDrawerCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 6,
  },
  tipsDrawerTitle: {
    fontSize: 12,
    fontWeight: '800',
  },
  tipsDrawerBody: {
    fontSize: 12,
    lineHeight: 18,
  },
  teachCard: {
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  posTag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },
  posTagText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  teachTargetWord: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  teachPronunciation: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  teachDivider: {
    width: '60%',
    height: 1,
    marginVertical: 6,
  },
  teachSourceMeaning: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  teachExampleBox: {
    width: '100%',
    borderRadius: 12,
    padding: 10,
    marginTop: 6,
    gap: 2,
  },
  teachExampleLabel: {
    fontSize: 10,
    fontWeight: '800',
  },
  teachExampleText: {
    fontSize: 12,
    lineHeight: 18,
  },
  learnNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  m3OutlinedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
  },
  m3OutlinedBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  m3TonalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  m3TonalBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  m3FilledBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 999,
  },
  m3FilledBtnText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#000',
  },
  practiceMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  streakComboPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  quizPrompt: {
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 24,
  },
  hintBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    borderRadius: 12,
  },
  hintBannerText: {
    fontSize: 12,
    flex: 1,
  },
  optionsList: {
    gap: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 13,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  optionNumberBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonText: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  wordBankAnswerZone: {
    minHeight: 68,
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 12,
    justifyContent: 'center',
  },
  wordChipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  wordTile: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  matchPairsGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  matchColumn: {
    flex: 1,
    gap: 8,
  },
  matchColumnHeader: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  matchPairCard: {
    minHeight: 50,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchPairText: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  translationInput: {
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: '600',
  },
  feedbackBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  practiceActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  completeHero: {
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
  },
  completeBadgeCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeTitle: {
    fontSize: 22,
    fontWeight: '800',
  },
  completeSubtitle: {
    fontSize: 13,
    textAlign: 'center',
  },
  completeMetricsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  completeMetricCard: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    gap: 4,
  },
  completeMetricValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  completeMetricLabel: {
    fontSize: 10,
    fontWeight: '800',
  },
  culturalNoteBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 6,
  },
  missedReviewBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  // Flashcards Tab
  cardsTabWrap: {
    gap: 12,
  },
  cardModeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  cardModeChip: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
  },
  flashcardSurface: {
    minHeight: 220,
    borderRadius: 24,
    borderWidth: 1.5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcardTopMeta: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  flashcardMainWord: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  // Games Tab
  gamesTabWrap: {
    gap: 12,
  },
  gamesMenuGrid: {
    gap: 10,
  },
  gameMenuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
  },
  gameIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameCardTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  gameCardDesc: {
    fontSize: 12,
    marginTop: 2,
  },
  gameBoardCard: {
    borderRadius: 22,
    borderWidth: 1,
    padding: 16,
    gap: 14,
  },
  gameTopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  gamePromptWord: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  scrambleSlotsBox: {
    minHeight: 54,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  letterBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  memoryTile: {
    width: '31%',
    minHeight: 68,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordleCell: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Grammar Tab
  grammarTabWrap: {
    gap: 10,
  },
  m3SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  grammarAccordionCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  grammarHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 14,
  },
  grammarSectionTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  grammarSectionSummary: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 17,
  },
  grammarBodyWrap: {
    borderTopWidth: 1,
    padding: 14,
    gap: 4,
  },
  grammarExamplesBox: {
    marginTop: 10,
    gap: 6,
  },
  grammarExampleItem: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
  },
});
