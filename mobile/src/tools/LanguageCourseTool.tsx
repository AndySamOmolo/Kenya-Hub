import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDynamicStyles, ThemeColors } from "../theme";
import { COURSE_REGISTRY } from "../shared/data/courses/registry";
import type { WordPair, CourseUnit, GrammarSection } from "../shared/data/courses/types";

// Helper utilities
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getAllWords(units: CourseUnit[]): WordPair[] {
  const words: WordPair[] = [];
  for (const unit of units) {
    for (const skill of unit.skills) {
      if (Array.isArray(skill.words)) {
        words.push(
          ...skill.words.filter((w) => {
            const target = w.target.trim();
            const source = w.source.trim();
            return (
              target.length >= 2 &&
              target.length <= 35 &&
              source.length > 0 &&
              !source.includes(":") &&
              !target.includes("→") &&
              !target.startsWith("-")
            );
          })
        );
      }
    }
  }
  return Array.from(
    new Map(words.map((w) => [`${w.target}:${w.source}`, w])).values()
  );
}

export function LanguageLearningTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const availableCourseIds = Object.keys(COURSE_REGISTRY);

  const [selectedLang, setSelectedLang] = useState<string>("kikuyu");
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number>(0);

  // Main Page View: Lessons, Games, Grammar
  const [mainView, setMainView] = useState<"lessons" | "games" | "grammar">("lessons");

  // Lessons Sub-tab
  const [activeTab, setActiveTab] = useState<"words" | "quiz">("quiz");

  // User Progress
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(1);

  // Quiz state
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Games State
  const [activeGame, setActiveGame] = useState<"menu" | "speed" | "scramble" | "memory">("menu");

  // Load progress
  useEffect(() => {
    AsyncStorage.getItem(`kh-learn-progress-${selectedLang}`).then((raw) => {
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setXp(parsed.xp || 0);
          setStreak(parsed.streak || 1);
        } catch {
          // ignore
        }
      } else {
        setXp(0);
        setStreak(1);
      }
    });
  }, [selectedLang]);

  const saveProgress = async (newXp: number, newStreak: number) => {
    setXp(newXp);
    setStreak(newStreak);
    await AsyncStorage.setItem(
      `kh-learn-progress-${selectedLang}`,
      JSON.stringify({ xp: newXp, streak: newStreak })
    );
  };

  const course = COURSE_REGISTRY[selectedLang] || COURSE_REGISTRY.kikuyu;
  const currentUnit = course.units[selectedUnitIdx] || course.units[0];
  const currentSkill = currentUnit?.skills[selectedSkillIdx] || currentUnit?.skills[0];

  const exercises = currentSkill?.authoredExercises || [];
  const currentExercise = exercises[quizIdx] || exercises[0];

  const allWords = useMemo(() => getAllWords(course.units), [course.units]);

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentExercise || isAnswerSubmitted) return;
    const correct =
      selectedAnswer.trim().toLowerCase() ===
      currentExercise.correctAnswer.trim().toLowerCase();
    setIsCorrect(correct);
    setIsAnswerSubmitted(true);

    if (correct) {
      saveProgress(xp + 10, streak);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    if (quizIdx + 1 < exercises.length) {
      setQuizIdx(quizIdx + 1);
    } else {
      setQuizIdx(0);
    }
  };

  return (
    <View style={styles.container}>
      {/* ── 1. Language Carousel ── */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>
          Choose Language
        </Text>
        <View style={styles.progressPill}>
          <Ionicons name="flame" size={14} color="#EA580C" />
          <Text style={styles.streakText}>{streak}d</Text>
          <View style={styles.progressDivider} />
          <Ionicons name="trophy" size={14} color={theme.gold} />
          <Text style={styles.xpText}>{xp} XP</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.langScroll}
      >
        {availableCourseIds.map((id) => {
          const item = COURSE_REGISTRY[id];
          const isSelected = selectedLang === id;
          return (
            <Pressable
              key={id}
              onPress={() => {
                setSelectedLang(id);
                setSelectedUnitIdx(0);
                setSelectedSkillIdx(0);
                setQuizIdx(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
              }}
              style={[
                styles.langChip,
                isSelected && styles.langChipActive,
              ]}
            >
              <Text
                style={[
                  styles.langChipText,
                  isSelected && styles.langChipTextActive,
                ]}
              >
                {item.config.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* ── 2. Website-Style Segmented Navigation (Lessons | Games | Grammar) ── */}
      <View style={styles.segmentedNav}>
        <Pressable
          onPress={() => {
            setMainView("lessons");
            setActiveGame("menu");
          }}
          style={[
            styles.segmentBtn,
            mainView === "lessons" && styles.segmentBtnActive,
          ]}
        >
          <Ionicons
            name="school"
            size={16}
            color={mainView === "lessons" ? theme.kenyaBlack : theme.textMuted}
          />
          <Text
            style={[
              styles.segmentText,
              mainView === "lessons" && styles.segmentTextActive,
            ]}
          >
            Lessons
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setMainView("games")}
          style={[
            styles.segmentBtn,
            mainView === "games" && styles.segmentBtnActive,
          ]}
        >
          <Ionicons
            name="game-controller"
            size={16}
            color={mainView === "games" ? theme.kenyaBlack : theme.textMuted}
          />
          <Text
            style={[
              styles.segmentText,
              mainView === "games" && styles.segmentTextActive,
            ]}
          >
            Games
          </Text>
        </Pressable>

        {course.grammarSections && course.grammarSections.length > 0 && (
          <Pressable
            onPress={() => {
              setMainView("grammar");
              setActiveGame("menu");
            }}
            style={[
              styles.segmentBtn,
              mainView === "grammar" && styles.segmentBtnActive,
            ]}
          >
            <Ionicons
              name="book"
              size={16}
              color={mainView === "grammar" ? theme.kenyaBlack : theme.textMuted}
            />
            <Text
              style={[
                styles.segmentText,
                mainView === "grammar" && styles.segmentTextActive,
              ]}
            >
              Grammar
            </Text>
          </Pressable>
        )}
      </View>

      {/* ── 3. VIEW: LESSONS ── */}
      {mainView === "lessons" && (
        <View style={{ gap: 14 }}>
          {/* Unit & Skill Header */}
          <View style={styles.unitHeaderCard}>
            <View style={styles.unitHeaderTop}>
              <View style={styles.unitBadge}>
                <Text style={styles.unitBadgeText}>
                  UNIT {selectedUnitIdx + 1} OF {course.units.length}
                </Text>
              </View>
              <Text style={styles.totalWordsBadge}>
                {allWords.length} words
              </Text>
            </View>
            <Text style={styles.unitTitle}>{currentUnit?.title}</Text>
            <Text style={styles.unitDesc}>{currentUnit?.description}</Text>

            {/* Skill Selector */}
            <View style={styles.skillsSelectorRow}>
              {currentUnit?.skills.map((skill, idx) => (
                <Pressable
                  key={skill.id}
                  onPress={() => {
                    setSelectedSkillIdx(idx);
                    setQuizIdx(0);
                    setSelectedAnswer(null);
                    setIsAnswerSubmitted(false);
                  }}
                  style={[
                    styles.skillPill,
                    selectedSkillIdx === idx && styles.skillPillActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.skillPillText,
                      selectedSkillIdx === idx && styles.skillPillTextActive,
                    ]}
                  >
                    {skill.title}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Sub Tab: Words or Practice Quiz */}
          <View style={styles.subTabRow}>
            <Pressable
              onPress={() => setActiveTab("quiz")}
              style={[
                styles.subTabBtn,
                activeTab === "quiz" && styles.subTabBtnActive,
              ]}
            >
              <Ionicons
                name="sparkles"
                size={14}
                color={activeTab === "quiz" ? theme.gold : theme.textMuted}
              />
              <Text
                style={[
                  styles.subTabText,
                  activeTab === "quiz" && styles.subTabTextActive,
                ]}
              >
                Practice Quiz ({exercises.length})
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setActiveTab("words")}
              style={[
                styles.subTabBtn,
                activeTab === "words" && styles.subTabBtnActive,
              ]}
            >
              <Ionicons
                name="list"
                size={14}
                color={activeTab === "words" ? theme.gold : theme.textMuted}
              />
              <Text
                style={[
                  styles.subTabText,
                  activeTab === "words" && styles.subTabTextActive,
                ]}
              >
                Vocabulary ({currentSkill?.words.length || 0})
              </Text>
            </Pressable>
          </View>

          {/* QUIZ INTERACTIVE PLAYER */}
          {activeTab === "quiz" && (
            <View style={styles.quizBox}>
              {currentExercise ? (
                <>
                  <View style={styles.quizHeader}>
                    <Text style={styles.quizQuestionNum}>
                      QUESTION {quizIdx + 1} OF {exercises.length}
                    </Text>
                    <View style={styles.rewardPill}>
                      <Ionicons name="star" size={12} color={theme.gold} />
                      <Text style={styles.rewardText}>+10 XP</Text>
                    </View>
                  </View>

                  <Text style={styles.quizPrompt}>{currentExercise.prompt}</Text>
                  {((currentExercise as any).sourceText || currentExercise.sourceWord?.target) && (
                    <View style={styles.sourceBubble}>
                      <Text style={styles.sourceText}>
                        &ldquo;{(currentExercise as any).sourceText || currentExercise.sourceWord?.target}&rdquo;
                      </Text>
                    </View>
                  )}

                  {/* Options */}
                  <View style={styles.optionsWrap}>
                    {currentExercise.options?.map((opt, i) => {
                      const isChosen = selectedAnswer === opt;
                      let optionStyle: any = styles.optionBtn;
                      let textStyle: any = styles.optionText;

                      if (isChosen && !isAnswerSubmitted) {
                        optionStyle = [styles.optionBtn, styles.optionBtnSelected];
                        textStyle = [styles.optionText, styles.optionTextSelected];
                      } else if (isAnswerSubmitted) {
                        if (
                          opt.trim().toLowerCase() ===
                          currentExercise.correctAnswer.trim().toLowerCase()
                        ) {
                          optionStyle = [styles.optionBtn, styles.optionBtnCorrect];
                          textStyle = [styles.optionText, styles.optionTextCorrect];
                        } else if (isChosen && !isCorrect) {
                          optionStyle = [styles.optionBtn, styles.optionBtnWrong];
                          textStyle = [styles.optionText, styles.optionTextWrong];
                        }
                      }

                      return (
                        <Pressable
                          key={i}
                          onPress={() => handleSelectOption(opt)}
                          style={optionStyle}
                        >
                          <Text style={textStyle}>{opt}</Text>
                        </Pressable>
                      );
                    })}
                  </View>

                  {/* Submit / Next Button */}
                  {!isAnswerSubmitted ? (
                    <Pressable
                      onPress={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      style={[
                        styles.actionBtn,
                        !selectedAnswer && styles.actionBtnDisabled,
                      ]}
                    >
                      <Text style={styles.actionBtnText}>Check Answer</Text>
                      <Ionicons name="checkmark-circle" size={18} color={theme.kenyaBlack} />
                    </Pressable>
                  ) : (
                    <View style={styles.feedbackWrap}>
                      <View
                        style={[
                          styles.feedbackAlert,
                          isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
                        ]}
                      >
                        <Ionicons
                          name={isCorrect ? "checkmark-circle" : "close-circle"}
                          size={24}
                          color={isCorrect ? theme.kenyaGreenLight : theme.kenyaRedLight}
                        />
                        <View style={{ flex: 1 }}>
                          <Text
                            style={[
                              styles.feedbackTitle,
                              { color: isCorrect ? theme.kenyaGreenLight : theme.kenyaRedLight },
                            ]}
                          >
                            {isCorrect ? "Hongera! That's correct!" : "Incorrect"}
                          </Text>
                          {!isCorrect && (
                            <Text style={styles.feedbackCorrectAnswer}>
                              Correct answer: {currentExercise.correctAnswer}
                            </Text>
                          )}
                          {((currentExercise as any).explanation || currentExercise.hint) && (
                            <Text style={styles.feedbackExplanation}>
                              {(currentExercise as any).explanation || currentExercise.hint}
                            </Text>
                          )}
                        </View>
                      </View>

                      <Pressable
                        onPress={handleNextQuestion}
                        style={styles.actionBtn}
                      >
                        <Text style={styles.actionBtnText}>Continue</Text>
                        <Ionicons name="arrow-forward" size={18} color={theme.kenyaBlack} />
                      </Pressable>
                    </View>
                  )}
                </>
              ) : (
                <View style={styles.emptyContainer}>
                  <Ionicons name="checkmark-done-circle" size={48} color={theme.gold} />
                  <Text style={styles.emptyTitle}>Skill Mastered!</Text>
                  <Text style={styles.emptySubtitle}>
                    You have reviewed all available exercises for this skill.
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* VOCABULARY WORD LIST */}
          {activeTab === "words" && (
            <View style={styles.wordsCard}>
              {currentSkill?.words.map((w, idx) => (
                <View key={idx} style={styles.wordRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.wordTarget}>{w.target}</Text>
                    {w.pronunciation && (
                      <Text style={styles.wordPronounce}>/{w.pronunciation}/</Text>
                    )}
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={styles.wordSource}>{w.source}</Text>
                    {w.partOfSpeech && (
                      <Text style={styles.wordPos}>{w.partOfSpeech}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      {/* ── 4. VIEW: GAMES HUB ── */}
      {mainView === "games" && (
        <View style={{ gap: 14 }}>
          {activeGame === "menu" ? (
            <View style={{ gap: 14 }}>
              {/* Game Hub Promo Banner */}
              <View style={styles.gameBannerCard}>
                <View style={styles.gameBannerIconBox}>
                  <Ionicons name="game-controller" size={32} color={theme.gold} />
                </View>
                <Text style={styles.gameBannerTitle}>
                  {course.config.name} Mini-Games
                </Text>
                <Text style={styles.gameBannerSubtitle}>
                  Practice vocabulary through fast-paced interactive challenges
                </Text>
              </View>

              {/* 1. Speed Match Card */}
              <Pressable
                onPress={() => setActiveGame("speed")}
                style={styles.gameCard}
              >
                <View style={[styles.gameIconBox, { backgroundColor: "rgba(200, 150, 30, 0.15)" }]}>
                  <Ionicons name="flash" size={24} color={theme.gold} />
                </View>
                <View style={styles.gameCardBody}>
                  <Text style={styles.gameCardTitle}>Speed Match</Text>
                  <Text style={styles.gameCardSubtitle}>
                    60-second race to match {course.config.name} words to English meanings.
                  </Text>
                  <View style={styles.gameTag}>
                    <Text style={styles.gameTagText}>Speed Challenge · 60s</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
              </Pressable>

              {/* 2. Word Scramble Card */}
              <Pressable
                onPress={() => setActiveGame("scramble")}
                style={styles.gameCard}
              >
                <View style={[styles.gameIconBox, { backgroundColor: "rgba(168, 85, 247, 0.15)" }]}>
                  <Ionicons name="extension-puzzle" size={24} color="#A855F7" />
                </View>
                <View style={styles.gameCardBody}>
                  <Text style={styles.gameCardTitle}>Word Scramble</Text>
                  <Text style={styles.gameCardSubtitle}>
                    Unscramble jumbled letter tiles to reconstruct indigenous words.
                  </Text>
                  <View style={styles.gameTag}>
                    <Text style={styles.gameTagText}>Letter Tiles · Clues</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
              </Pressable>

              {/* 3. Memory Cards Card */}
              <Pressable
                onPress={() => setActiveGame("memory")}
                style={styles.gameCard}
              >
                <View style={[styles.gameIconBox, { backgroundColor: "rgba(14, 165, 233, 0.15)" }]}>
                  <Ionicons name="albums" size={24} color="#0EA5E9" />
                </View>
                <View style={styles.gameCardBody}>
                  <Text style={styles.gameCardTitle}>Memory Cards</Text>
                  <Text style={styles.gameCardSubtitle}>
                    Flip and match 6 hidden word-pairs in fewest moves possible.
                  </Text>
                  <View style={styles.gameTag}>
                    <Text style={styles.gameTagText}>12 Cards · Flip & Pair</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
              </Pressable>
            </View>
          ) : (
            <View style={{ gap: 12 }}>
              <Pressable
                onPress={() => setActiveGame("menu")}
                style={styles.backToGamesBtn}
              >
                <Ionicons name="arrow-back" size={16} color={theme.gold} />
                <Text style={styles.backToGamesText}>Back to Games Hub</Text>
              </Pressable>

              {/* Active Game Components */}
              {activeGame === "speed" && (
                <SpeedMatchGame
                  allWords={allWords}
                  languageName={course.config.name}
                  onWinXp={(pts) => saveProgress(xp + pts, streak)}
                />
              )}
              {activeGame === "scramble" && (
                <WordScrambleGame
                  allWords={allWords}
                  languageName={course.config.name}
                  onWinXp={(pts) => saveProgress(xp + pts, streak)}
                />
              )}
              {activeGame === "memory" && (
                <MemoryCardsGame
                  allWords={allWords}
                  languageName={course.config.name}
                  onWinXp={(pts) => saveProgress(xp + pts, streak)}
                />
              )}
            </View>
          )}
        </View>
      )}

      {/* ── 5. VIEW: GRAMMAR GUIDE ── */}
      {mainView === "grammar" && course.grammarSections && (
        <View style={{ gap: 14 }}>
          {course.grammarSections.map((sec, idx) => (
            <View key={sec.id || idx} style={styles.grammarCard}>
              <Text style={styles.grammarTitle}>{sec.title}</Text>
              <Text style={styles.grammarSummary}>{sec.summary}</Text>
              <Text style={styles.grammarContent}>{sec.content}</Text>

              {sec.examples && sec.examples.length > 0 && (
                <View style={styles.examplesBox}>
                  <Text style={styles.examplesHeader}>PRACTICAL EXAMPLES</Text>
                  {sec.examples.map((ex: any, exIdx: number) => {
                    const targetKey = Object.keys(ex).find(
                      (k) => k !== "english" && k !== "explanation"
                    );
                    const targetText = targetKey ? ex[targetKey] : "";
                    return (
                      <View key={exIdx} style={styles.exampleRow}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.exampleTarget}>{targetText}</Text>
                          <Text style={styles.exampleEnglish}>{ex.english}</Text>
                        </View>
                        {ex.explanation && (
                          <View style={styles.explanationBadge}>
                            <Text style={styles.explanationText}>
                              {ex.explanation}
                            </Text>
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// GAME 1: SPEED MATCH
// ─────────────────────────────────────────────────────────────
function SpeedMatchGame({
  allWords,
  languageName,
  onWinXp,
}: {
  allWords: WordPair[];
  languageName: string;
  onWinXp: (pts: number) => void;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const GAME_DURATION = 60;

  const [gameState, setGameState] = useState<"ready" | "playing" | "done">("ready");
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateRound = () => {
    if (allWords.length === 0) return;
    const word = pickRandom(allWords);
    const distractors = shuffle(
      allWords.filter((w) => w.source.toLowerCase() !== word.source.toLowerCase())
    )
      .slice(0, 3)
      .map((w) => w.source);

    setCurrentWord(word);
    setOptions(shuffle([word.source, ...distractors]));
  };

  const startGame = () => {
    setGameState("playing");
    setTimeLeft(GAME_DURATION);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    generateRound();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setGameState("done");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAnswer = (ans: string) => {
    if (!currentWord || gameState !== "playing") return;
    const isCorrect = ans.toLowerCase() === currentWord.source.toLowerCase();

    if (isCorrect) {
      const nextStreak = streak + 1;
      const multiplier = nextStreak >= 5 ? 3 : nextStreak >= 3 ? 2 : 1;
      const pts = 10 * multiplier;
      setScore((s) => s + pts);
      setStreak(nextStreak);
      setBestStreak((b) => Math.max(b, nextStreak));
      setFlash("correct");
      onWinXp(pts);
    } else {
      setStreak(0);
      setFlash("wrong");
    }

    setTimeout(() => {
      setFlash(null);
      generateRound();
    }, 250);
  };

  if (gameState === "ready") {
    return (
      <View style={styles.gameInnerCard}>
        <Ionicons name="flash" size={48} color={theme.gold} style={{ alignSelf: "center", marginBottom: 10 }} />
        <Text style={styles.gameTitle}>Speed Match Challenge</Text>
        <Text style={styles.gameDesc}>
          Match {languageName} vocabulary to their English meanings within {GAME_DURATION} seconds. Streaks multiply your points!
        </Text>
        <Pressable onPress={startGame} style={styles.gameActionBtn}>
          <Text style={styles.gameActionBtnText}>Start Challenge</Text>
          <Ionicons name="play" size={18} color={theme.kenyaBlack} />
        </Pressable>
      </View>
    );
  }

  if (gameState === "done") {
    return (
      <View style={styles.gameInnerCard}>
        <Ionicons name="trophy" size={54} color={theme.gold} style={{ alignSelf: "center", marginBottom: 12 }} />
        <Text style={styles.gameTitle}>Time&apos;s Up!</Text>
        <View style={styles.statGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{score}</Text>
            <Text style={styles.statLabel}>Score Points</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{bestStreak}x</Text>
            <Text style={styles.statLabel}>Best Streak</Text>
          </View>
        </View>
        <Pressable onPress={startGame} style={styles.gameActionBtn}>
          <Ionicons name="reload" size={18} color={theme.kenyaBlack} />
          <Text style={styles.gameActionBtnText}>Play Again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.gameInnerCard}>
      {/* Timer and Score Strip */}
      <View style={styles.gameStatusRow}>
        <View style={[styles.timerBadge, timeLeft <= 10 && styles.timerBadgeUrgent]}>
          <Ionicons name="time" size={14} color={timeLeft <= 10 ? theme.kenyaRedLight : theme.textPrimary} />
          <Text style={[styles.timerText, timeLeft <= 10 && { color: theme.kenyaRedLight }]}>
            {timeLeft}s
          </Text>
        </View>
        {streak >= 3 && (
          <View style={styles.streakBadge}>
            <Ionicons name="flame" size={14} color="#EA580C" />
            <Text style={styles.streakText}>{streak}x Streak</Text>
          </View>
        )}
        <View style={styles.scoreBadge}>
          <Ionicons name="flash" size={14} color={theme.gold} />
          <Text style={styles.scoreText}>{score} pts</Text>
        </View>
      </View>

      {/* Target Word Prompt */}
      {currentWord && (
        <View
          style={[
            styles.speedPromptBox,
            flash === "correct" && styles.speedPromptCorrect,
            flash === "wrong" && styles.speedPromptWrong,
          ]}
        >
          <Text style={styles.speedSubtext}>What does this mean?</Text>
          <Text style={styles.speedTargetWord}>{currentWord.target}</Text>
        </View>
      )}

      {/* 4 Choices */}
      <View style={styles.speedOptionsGrid}>
        {options.map((opt, i) => (
          <Pressable
            key={i}
            onPress={() => handleAnswer(opt)}
            style={styles.speedOptionBtn}
          >
            <Text style={styles.speedOptionText}>{opt}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// GAME 2: WORD SCRAMBLE
// ─────────────────────────────────────────────────────────────
function WordScrambleGame({
  allWords,
  languageName,
  onWinXp,
}: {
  allWords: WordPair[];
  languageName: string;
  onWinXp: (pts: number) => void;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const validWords = useMemo(
    () =>
      allWords.filter((w) => {
        const clean = w.target.replace(/[^a-zA-Z]/g, "");
        return clean.length >= 3 && clean.length <= 10;
      }),
    [allWords]
  );

  const [targetWord, setTargetWord] = useState<WordPair | null>(null);
  const [scrambled, setScrambled] = useState<string[]>([]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);

  const initRound = () => {
    if (validWords.length === 0) return;
    const word = pickRandom(validWords);
    setTargetWord(word);
    const letters = word.target.split("");
    let s = shuffle(letters);
    let attempts = 0;
    while (s.join("") === letters.join("") && attempts < 10) {
      s = shuffle(letters);
      attempts++;
    }
    setScrambled(s);
    setPlaced([]);
    setIsSolved(false);
    setIsWrong(false);
  };

  useEffect(() => {
    initRound();
  }, [validWords]);

  const handleTapTile = (index: number) => {
    if (isSolved || placed.includes(index)) return;
    const newPlaced = [...placed, index];
    setPlaced(newPlaced);

    if (newPlaced.length === scrambled.length && targetWord) {
      const built = newPlaced.map((i) => scrambled[i]).join("");
      if (built.toLowerCase() === targetWord.target.toLowerCase()) {
        setIsSolved(true);
        setScore((s) => s + 15);
        onWinXp(15);
      } else {
        setIsWrong(true);
        setTimeout(() => {
          setPlaced([]);
          setIsWrong(false);
        }, 600);
      }
    }
  };

  const handleRemovePlaced = (placedIndex: number) => {
    if (isSolved) return;
    setPlaced((p) => p.filter((_, idx) => idx !== placedIndex));
  };

  const handleHint = () => {
    if (!targetWord || isSolved) return;
    const target = targetWord.target;
    const nextIdx = placed.length;
    if (nextIdx >= target.length) return;

    const nextChar = target[nextIdx].toLowerCase();
    const freeIdx = scrambled.findIndex(
      (ch, i) => ch.toLowerCase() === nextChar && !placed.includes(i)
    );
    if (freeIdx !== -1) {
      setPlaced((p) => [...p, freeIdx]);
    }
  };

  if (!targetWord) {
    return (
      <View style={styles.gameInnerCard}>
        <Text style={styles.gameDesc}>Loading vocabulary tiles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.gameInnerCard}>
      <View style={styles.gameStatusRow}>
        <View style={styles.scoreBadge}>
          <Ionicons name="trophy" size={14} color={theme.gold} />
          <Text style={styles.scoreText}>{score} pts</Text>
        </View>
        <Pressable onPress={handleHint} style={styles.hintBtn}>
          <Ionicons name="bulb-outline" size={14} color={theme.gold} />
          <Text style={styles.hintBtnText}>Hint</Text>
        </Pressable>
      </View>

      {/* Clue Prompt */}
      <View style={styles.clueCard}>
        <Text style={styles.clueLabel}>UNSCRAMBLE THE {languageName.toUpperCase()} WORD FOR:</Text>
        <Text style={styles.clueWord}>&ldquo;{targetWord.source}&rdquo;</Text>
        {targetWord.pronunciation && (
          <Text style={styles.cluePronounce}>Pronunciation: {targetWord.pronunciation}</Text>
        )}
      </View>

      {/* Built Word Slots */}
      <View
        style={[
          styles.slotsRow,
          isSolved && styles.slotsRowSolved,
          isWrong && styles.slotsRowWrong,
        ]}
      >
        {placed.length > 0 ? (
          placed.map((scrambleIdx, i) => (
            <Pressable
              key={i}
              onPress={() => handleRemovePlaced(i)}
              style={styles.placedSlot}
            >
              <Text style={styles.placedSlotText}>{scrambled[scrambleIdx]}</Text>
            </Pressable>
          ))
        ) : (
          <Text style={styles.slotsPlaceholder}>Tap letters below to spell word</Text>
        )}
      </View>

      {/* Scrambled Letter Tiles */}
      {!isSolved && (
        <View style={styles.tilesGrid}>
          {scrambled.map((letter, idx) => {
            const isUsed = placed.includes(idx);
            return (
              <Pressable
                key={idx}
                onPress={() => handleTapTile(idx)}
                disabled={isUsed}
                style={[styles.tileBtn, isUsed && styles.tileBtnUsed]}
              >
                <Text style={[styles.tileBtnText, isUsed && styles.tileBtnTextUsed]}>
                  {letter}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {/* Next Round Button */}
      {isSolved && (
        <Pressable onPress={initRound} style={styles.gameActionBtn}>
          <Text style={styles.gameActionBtnText}>Next Word</Text>
          <Ionicons name="arrow-forward" size={18} color={theme.kenyaBlack} />
        </Pressable>
      )}
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// GAME 3: MEMORY CARDS
// ─────────────────────────────────────────────────────────────
interface CardItem {
  id: number;
  text: string;
  pairId: number;
  type: "target" | "source";
}

function MemoryCardsGame({
  allWords,
  languageName,
  onWinXp,
}: {
  allWords: WordPair[];
  languageName: string;
  onWinXp: (pts: number) => void;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const PAIR_COUNT = 6;

  const [cards, setCards] = useState<CardItem[]>([]);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [firstFlip, setFirstFlip] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const initGame = () => {
    const selected = shuffle(allWords).slice(0, PAIR_COUNT);
    const newCards: CardItem[] = [];
    selected.forEach((word, idx) => {
      newCards.push({
        id: idx * 2,
        text: word.target,
        pairId: idx,
        type: "target",
      });
      newCards.push({
        id: idx * 2 + 1,
        text: word.source.replace(/\(.*?\)/g, "").trim(),
        pairId: idx,
        type: "source",
      });
    });
    setCards(shuffle(newCards));
    setFlipped(new Set());
    setMatched(new Set());
    setMoves(0);
    setFirstFlip(null);
    setIsChecking(false);
    setIsWon(false);
  };

  useEffect(() => {
    initGame();
  }, [allWords]);

  const handleCardTap = (cardId: number) => {
    if (isChecking || flipped.has(cardId) || matched.has(cardId)) return;

    const nextFlipped = new Set(flipped);
    nextFlipped.add(cardId);
    setFlipped(nextFlipped);

    if (firstFlip === null) {
      setFirstFlip(cardId);
    } else {
      setIsChecking(true);
      setMoves((m) => m + 1);

      const firstCard = cards.find((c) => c.id === firstFlip);
      const secondCard = cards.find((c) => c.id === cardId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match!
        setTimeout(() => {
          const nextMatched = new Set(matched);
          nextMatched.add(firstCard.id);
          nextMatched.add(secondCard.id);
          setMatched(nextMatched);
          setFirstFlip(null);
          setIsChecking(false);

          if (nextMatched.size === cards.length) {
            setIsWon(true);
            onWinXp(30);
          }
        }, 400);
      } else {
        // No match
        setTimeout(() => {
          const revertFlipped = new Set(nextFlipped);
          revertFlipped.delete(firstFlip);
          revertFlipped.delete(cardId);
          setFlipped(revertFlipped);
          setFirstFlip(null);
          setIsChecking(false);
        }, 900);
      }
    }
  };

  return (
    <View style={styles.gameInnerCard}>
      <View style={styles.gameStatusRow}>
        <Text style={styles.statLabel}>Moves: {moves}</Text>
        <Text style={styles.scoreText}>Matched: {matched.size / 2} / {PAIR_COUNT}</Text>
      </View>

      {/* Cards 3x4 Grid */}
      <View style={styles.memoryGrid}>
        {cards.map((card) => {
          const isFlipped = flipped.has(card.id) || matched.has(card.id);
          const isPairMatched = matched.has(card.id);

          return (
            <Pressable
              key={card.id}
              onPress={() => handleCardTap(card.id)}
              disabled={isFlipped}
              style={[
                styles.memoryCard,
                isFlipped && styles.memoryCardFlipped,
                isPairMatched && styles.memoryCardMatched,
              ]}
            >
              {isFlipped ? (
                <Text
                  style={[
                    styles.memoryCardText,
                    isPairMatched && styles.memoryCardTextMatched,
                  ]}
                  numberOfLines={2}
                >
                  {card.text}
                </Text>
              ) : (
                <Ionicons name="help" size={20} color={theme.gold} />
              )}
            </Pressable>
          );
        })}
      </View>

      {isWon && (
        <View style={styles.winBanner}>
          <Ionicons name="trophy" size={28} color={theme.gold} />
          <Text style={styles.winBannerText}>All 6 Pairs Matched!</Text>
          <Pressable onPress={initGame} style={styles.gameActionBtn}>
            <Text style={styles.gameActionBtnText}>Play Again</Text>
            <Ionicons name="reload" size={16} color={theme.kenyaBlack} />
          </Pressable>
        </View>
      )}
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────
function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: {
      gap: 16,
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: "800",
      letterSpacing: 0.8,
      textTransform: "uppercase",
      color: colors.textSecondary,
    },
    progressPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    progressDivider: {
      width: 1,
      height: 12,
      backgroundColor: colors.border,
    },
    streakText: {
      fontSize: 12,
      fontWeight: "800",
      color: "#EA580C",
    },
    xpText: {
      fontSize: 12,
      fontWeight: "800",
      color: colors.gold,
    },
    langScroll: {
      gap: 8,
      paddingVertical: 4,
    },
    langChip: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 8,
    },
    langChipActive: {
      backgroundColor: colors.gold,
      borderColor: colors.gold,
    },
    langChipText: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textSecondary,
    },
    langChipTextActive: {
      color: colors.kenyaBlack,
    },

    // Segmented Navigation
    segmentedNav: {
      flexDirection: "row",
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 14,
      padding: 4,
      gap: 4,
    },
    segmentBtn: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingVertical: 9,
      borderRadius: 10,
    },
    segmentBtnActive: {
      backgroundColor: colors.gold,
    },
    segmentText: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textMuted,
    },
    segmentTextActive: {
      color: colors.kenyaBlack,
    },

    // Unit Card
    unitHeaderCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
      gap: 6,
    },
    unitHeaderTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    unitBadge: {
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 3,
    },
    unitBadgeText: {
      fontSize: 10,
      fontWeight: "800",
      color: colors.gold,
      letterSpacing: 0.5,
    },
    totalWordsBadge: {
      fontSize: 11,
      color: colors.textMuted,
      fontWeight: "600",
    },
    unitTitle: {
      fontSize: 17,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    unitDesc: {
      fontSize: 12,
      color: colors.textSecondary,
      lineHeight: 17,
    },
    skillsSelectorRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 8,
    },
    skillPill: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    skillPillActive: {
      borderColor: colors.gold,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
    },
    skillPillText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.textSecondary,
    },
    skillPillTextActive: {
      color: colors.gold,
    },

    // Sub tabs
    subTabRow: {
      flexDirection: "row",
      gap: 8,
    },
    subTabBtn: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingVertical: 8,
    },
    subTabBtnActive: {
      borderColor: colors.gold,
    },
    subTabText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textMuted,
    },
    subTabTextActive: {
      color: colors.gold,
    },

    // Quiz Player
    quizBox: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
      gap: 12,
    },
    quizHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    quizQuestionNum: {
      fontSize: 10,
      fontWeight: "800",
      color: colors.textMuted,
      letterSpacing: 0.8,
    },
    rewardPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    rewardText: {
      fontSize: 10,
      fontWeight: "800",
      color: colors.gold,
    },
    quizPrompt: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.textPrimary,
      lineHeight: 21,
    },
    sourceBubble: {
      backgroundColor: colors.bgSecondary,
      borderLeftWidth: 3,
      borderLeftColor: colors.gold,
      padding: 12,
      borderRadius: 8,
    },
    sourceText: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.gold,
    },
    optionsWrap: {
      gap: 8,
    },
    optionBtn: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 14,
    },
    optionBtnSelected: {
      borderColor: colors.gold,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
    },
    optionBtnCorrect: {
      borderColor: colors.kenyaGreenLight,
      backgroundColor: "rgba(47, 164, 99, 0.15)",
    },
    optionBtnWrong: {
      borderColor: colors.kenyaRedLight,
      backgroundColor: "rgba(190, 33, 38, 0.15)",
    },
    optionText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    optionTextSelected: {
      color: colors.gold,
    },
    optionTextCorrect: {
      color: colors.kenyaGreenLight,
      fontWeight: "700",
    },
    optionTextWrong: {
      color: colors.kenyaRedLight,
    },
    actionBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: colors.gold,
      borderRadius: 12,
      paddingVertical: 14,
      marginTop: 4,
    },
    actionBtnDisabled: {
      opacity: 0.4,
    },
    actionBtnText: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.kenyaBlack,
    },
    feedbackWrap: {
      gap: 10,
    },
    feedbackAlert: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
    },
    feedbackCorrect: {
      backgroundColor: "rgba(47, 164, 99, 0.12)",
      borderColor: colors.kenyaGreenLight,
    },
    feedbackWrong: {
      backgroundColor: "rgba(190, 33, 38, 0.12)",
      borderColor: colors.kenyaRedLight,
    },
    feedbackTitle: {
      fontSize: 14,
      fontWeight: "800",
    },
    feedbackCorrectAnswer: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textPrimary,
      marginTop: 2,
    },
    feedbackExplanation: {
      fontSize: 11,
      color: colors.textSecondary,
      marginTop: 4,
      lineHeight: 16,
    },
    emptyContainer: {
      alignItems: "center",
      paddingVertical: 32,
      gap: 8,
    },
    emptyTitle: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    emptySubtitle: {
      fontSize: 12,
      color: colors.textMuted,
      textAlign: "center",
    },

    // Vocabulary Words
    wordsCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 14,
      gap: 10,
    },
    wordRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    wordTarget: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    wordPronounce: {
      fontSize: 11,
      color: colors.gold,
      marginTop: 1,
    },
    wordSource: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.textSecondary,
    },
    wordPos: {
      fontSize: 10,
      color: colors.textMuted,
      fontStyle: "italic",
    },

    // Games Hub
    gameBannerCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 18,
      padding: 20,
      alignItems: "center",
      gap: 6,
    },
    gameBannerIconBox: {
      width: 52,
      height: 52,
      borderRadius: 16,
      backgroundColor: "rgba(200, 150, 30, 0.15)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 6,
    },
    gameBannerTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    gameBannerSubtitle: {
      fontSize: 12,
      color: colors.textSecondary,
      textAlign: "center",
    },
    gameCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
      gap: 14,
    },
    gameIconBox: {
      width: 48,
      height: 48,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
    },
    gameCardBody: {
      flex: 1,
      gap: 4,
    },
    gameCardTitle: {
      fontSize: 15,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    gameCardSubtitle: {
      fontSize: 12,
      color: colors.textMuted,
      lineHeight: 16,
    },
    gameTag: {
      alignSelf: "flex-start",
      backgroundColor: colors.bgSecondary,
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
      marginTop: 2,
    },
    gameTagText: {
      fontSize: 10,
      fontWeight: "700",
      color: colors.gold,
    },
    backToGamesBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingVertical: 4,
    },
    backToGamesText: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.gold,
    },

    // Generic Game Card
    gameInnerCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 18,
      padding: 18,
      gap: 14,
    },
    gameTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.textPrimary,
      textAlign: "center",
    },
    gameDesc: {
      fontSize: 13,
      color: colors.textSecondary,
      textAlign: "center",
      lineHeight: 18,
    },
    gameActionBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: colors.gold,
      borderRadius: 12,
      paddingVertical: 12,
      marginTop: 8,
    },
    gameActionBtnText: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.kenyaBlack,
    },
    gameStatusRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    timerBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    timerBadgeUrgent: {
      borderColor: colors.kenyaRedLight,
      backgroundColor: "rgba(190, 33, 38, 0.12)",
    },
    timerText: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    streakBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: "rgba(234, 88, 12, 0.15)",
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 5,
    },
    scoreBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    scoreText: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.gold,
    },
    statGrid: {
      flexDirection: "row",
      gap: 12,
      marginVertical: 8,
    },
    statBox: {
      flex: 1,
      backgroundColor: colors.bgSecondary,
      borderRadius: 12,
      padding: 14,
      alignItems: "center",
      gap: 2,
    },
    statNumber: {
      fontSize: 22,
      fontWeight: "900",
      color: colors.gold,
    },
    statLabel: {
      fontSize: 11,
      color: colors.textMuted,
      fontWeight: "600",
    },

    // Speed Match styles
    speedPromptBox: {
      borderWidth: 2,
      borderColor: colors.border,
      backgroundColor: colors.bgSecondary,
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      gap: 4,
    },
    speedPromptCorrect: {
      borderColor: colors.kenyaGreenLight,
      backgroundColor: "rgba(47, 164, 99, 0.12)",
    },
    speedPromptWrong: {
      borderColor: colors.kenyaRedLight,
      backgroundColor: "rgba(190, 33, 38, 0.12)",
    },
    speedSubtext: {
      fontSize: 11,
      color: colors.textMuted,
      fontWeight: "600",
    },
    speedTargetWord: {
      fontSize: 22,
      fontWeight: "900",
      color: colors.textPrimary,
    },
    speedOptionsGrid: {
      gap: 8,
    },
    speedOptionBtn: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 13,
      alignItems: "center",
    },
    speedOptionText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.textPrimary,
    },

    // Word Scramble styles
    clueCard: {
      backgroundColor: colors.bgSecondary,
      borderRadius: 14,
      padding: 14,
      alignItems: "center",
      gap: 4,
    },
    clueLabel: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 0.8,
      color: colors.textMuted,
    },
    clueWord: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.gold,
    },
    cluePronounce: {
      fontSize: 11,
      fontStyle: "italic",
      color: colors.textMuted,
    },
    hintBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    hintBtnText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.gold,
    },
    slotsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 52,
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: colors.border,
      borderRadius: 14,
      padding: 8,
      gap: 6,
    },
    slotsRowSolved: {
      borderColor: colors.kenyaGreenLight,
      backgroundColor: "rgba(47, 164, 99, 0.1)",
    },
    slotsRowWrong: {
      borderColor: colors.kenyaRedLight,
      backgroundColor: "rgba(190, 33, 38, 0.1)",
    },
    slotsPlaceholder: {
      fontSize: 12,
      fontStyle: "italic",
      color: colors.textMuted,
    },
    placedSlot: {
      width: 38,
      height: 38,
      borderRadius: 8,
      backgroundColor: "rgba(200, 150, 30, 0.2)",
      borderWidth: 1,
      borderColor: colors.gold,
      alignItems: "center",
      justifyContent: "center",
    },
    placedSlotText: {
      fontSize: 18,
      fontWeight: "900",
      color: colors.gold,
      textTransform: "uppercase",
    },
    tilesGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 8,
    },
    tileBtn: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: colors.bgSecondary,
      borderWidth: 1.5,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
    },
    tileBtnUsed: {
      opacity: 0.25,
      borderColor: "transparent",
    },
    tileBtnText: {
      fontSize: 18,
      fontWeight: "900",
      color: colors.textPrimary,
      textTransform: "uppercase",
    },
    tileBtnTextUsed: {
      color: colors.textMuted,
    },

    // Memory Cards styles
    memoryGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 8,
    },
    memoryCard: {
      width: "31%",
      height: 72,
      borderRadius: 12,
      backgroundColor: colors.bgSecondary,
      borderWidth: 1.5,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
      padding: 4,
    },
    memoryCardFlipped: {
      borderColor: colors.gold,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
    },
    memoryCardMatched: {
      borderColor: colors.kenyaGreenLight,
      backgroundColor: "rgba(47, 164, 99, 0.15)",
    },
    memoryCardText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.textPrimary,
      textAlign: "center",
    },
    memoryCardTextMatched: {
      color: colors.kenyaGreenLight,
      fontWeight: "800",
    },
    winBanner: {
      alignItems: "center",
      backgroundColor: "rgba(47, 164, 99, 0.12)",
      borderColor: colors.kenyaGreenLight,
      borderWidth: 1,
      borderRadius: 14,
      padding: 14,
      gap: 6,
    },
    winBannerText: {
      fontSize: 15,
      fontWeight: "800",
      color: colors.kenyaGreenLight,
    },

    // Grammar View
    grammarCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
      gap: 8,
    },
    grammarTitle: {
      fontSize: 17,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    grammarSummary: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.gold,
      lineHeight: 18,
    },
    grammarContent: {
      fontSize: 13,
      color: colors.textSecondary,
      lineHeight: 19,
    },
    examplesBox: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 12,
      gap: 10,
      marginTop: 6,
    },
    examplesHeader: {
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 0.8,
      color: colors.textMuted,
    },
    exampleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    exampleTarget: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    exampleEnglish: {
      fontSize: 12,
      color: colors.textSecondary,
      marginTop: 2,
    },
    explanationBadge: {
      backgroundColor: "rgba(47, 164, 99, 0.12)",
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    explanationText: {
      fontSize: 10,
      fontWeight: "700",
      color: colors.kenyaGreenLight,
    },
  });
}
