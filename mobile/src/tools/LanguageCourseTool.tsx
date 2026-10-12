import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme, fonts } from "../theme";
import { COURSE_REGISTRY } from "../shared/data/courses/registry";

export function LanguageLearningTool() {
  const { theme } = useTheme();
  const availableCourseIds = Object.keys(COURSE_REGISTRY);

  const [selectedLang, setSelectedLang] = useState<string>("kikuyu");
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"words" | "sentences" | "tips" | "quiz">("words");

  // User Progress
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(1);

  // Quiz state
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
      <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>
        Choose Kenyan Language
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.langPills}
      >
        {availableCourseIds.map((id) => {
          const c = COURSE_REGISTRY[id];
          const active = id === selectedLang;
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
                styles.langBtn,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.langBtnText,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {c.config.nativeName || c.config.name}
              </Text>
              <Text
                style={[
                  styles.langBtnSub,
                  { color: active ? theme.kenyaBlack : theme.textMuted },
                ]}
              >
                {c.config.speakers}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* ── 2. Language Hero & Progress Banner ── */}
      <View
        style={[
          styles.heroCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <View style={styles.heroTop}>
          <View style={{ flex: 1 }}>
            <View style={styles.heroNameRow}>
              <Text style={[styles.heroName, { color: theme.textPrimary }]}>
                {course.config.name}
              </Text>
              <View style={[styles.familyBadge, { backgroundColor: `${theme.gold}20` }]}>
                <Text style={[styles.familyText, { color: theme.gold }]}>
                  {course.config.family}
                </Text>
              </View>
            </View>
            <Text style={[styles.heroDesc, { color: theme.textSecondary }]} numberOfLines={2}>
              {course.config.description}
            </Text>
          </View>

          {/* Progress Box */}
          <View style={[styles.xpBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
            <View style={styles.xpRow}>
              <Ionicons name="sparkles" size={14} color={theme.gold} />
              <Text style={[styles.xpText, { color: theme.gold }]}>{xp} XP</Text>
            </View>
            <View style={styles.xpRow}>
              <Ionicons name="flame" size={14} color={theme.kenyaRedLight} />
              <Text style={[styles.xpText, { color: theme.kenyaRedLight }]}>{streak}d streak</Text>
            </View>
          </View>
        </View>
      </View>

      {/* ── 3. Units & Skills Selector ── */}
      <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>
        Course Units & Lessons ({course.units.length} Units)
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.unitPills}
      >
        {course.units.map((u, uIdx) => {
          const active = uIdx === selectedUnitIdx;
          return (
            <Pressable
              key={u.id}
              onPress={() => {
                setSelectedUnitIdx(uIdx);
                setSelectedSkillIdx(0);
                setQuizIdx(0);
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
              }}
              style={[
                styles.unitBtn,
                {
                  backgroundColor: active ? `${theme.gold}20` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text style={styles.unitIcon}>{u.icon || "📚"}</Text>
              <Text
                style={[
                  styles.unitTitle,
                  { color: active ? theme.gold : theme.textPrimary },
                ]}
                numberOfLines={1}
              >
                {u.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Skills in Selected Unit */}
      {currentUnit && currentUnit.skills.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.skillPills}
        >
          {currentUnit.skills.map((s, sIdx) => {
            const active = sIdx === selectedSkillIdx;
            return (
              <Pressable
                key={s.id}
                onPress={() => {
                  setSelectedSkillIdx(sIdx);
                  setQuizIdx(0);
                  setSelectedAnswer(null);
                  setIsAnswerSubmitted(false);
                }}
                style={[
                  styles.skillBtn,
                  {
                    backgroundColor: active ? theme.gold : theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.skillBtnText,
                    { color: active ? theme.kenyaBlack : theme.textSecondary },
                  ]}
                >
                  {s.title}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}

      {/* ── 4. Skill Study Tabs (Vocabulary, Sentences, Cultural Notes, Practice Quiz) ── */}
      {currentSkill && (
        <View style={styles.studyWrap}>
          {/* Tabs Row */}
          <View style={[styles.tabsHeader, { borderBottomColor: theme.border }]}>
            <Pressable
              onPress={() => setActiveTab("words")}
              style={[
                styles.tabItem,
                activeTab === "words" && { borderBottomColor: theme.gold, borderBottomWidth: 2 },
              ]}
            >
              <Ionicons
                name="book-outline"
                size={16}
                color={activeTab === "words" ? theme.gold : theme.textMuted}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === "words" ? theme.gold : theme.textMuted },
                ]}
              >
                Words ({currentSkill.words?.length || 0})
              </Text>
            </Pressable>

            {currentSkill.sentences && currentSkill.sentences.length > 0 && (
              <Pressable
                onPress={() => setActiveTab("sentences")}
                style={[
                  styles.tabItem,
                  activeTab === "sentences" && { borderBottomColor: theme.gold, borderBottomWidth: 2 },
                ]}
              >
                <Ionicons
                  name="chatbubbles-outline"
                  size={16}
                  color={activeTab === "sentences" ? theme.gold : theme.textMuted}
                />
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === "sentences" ? theme.gold : theme.textMuted },
                  ]}
                >
                  Phrases ({currentSkill.sentences.length})
                </Text>
              </Pressable>
            )}

            {(currentSkill.tips || currentSkill.culturalNote) && (
              <Pressable
                onPress={() => setActiveTab("tips")}
                style={[
                  styles.tabItem,
                  activeTab === "tips" && { borderBottomColor: theme.gold, borderBottomWidth: 2 },
                ]}
              >
                <Ionicons
                  name="bulb-outline"
                  size={16}
                  color={activeTab === "tips" ? theme.gold : theme.textMuted}
                />
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === "tips" ? theme.gold : theme.textMuted },
                  ]}
                >
                  Tips & Culture
                </Text>
              </Pressable>
            )}

            {exercises.length > 0 && (
              <Pressable
                onPress={() => setActiveTab("quiz")}
                style={[
                  styles.tabItem,
                  activeTab === "quiz" && { borderBottomColor: theme.gold, borderBottomWidth: 2 },
                ]}
              >
                <Ionicons
                  name="trophy-outline"
                  size={16}
                  color={activeTab === "quiz" ? theme.gold : theme.textMuted}
                />
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === "quiz" ? theme.gold : theme.textMuted },
                  ]}
                >
                  Quiz ({exercises.length})
                </Text>
              </Pressable>
            )}
          </View>

          {/* Tab 1: Words */}
          {activeTab === "words" && (
            <View style={styles.cardsList}>
              {(currentSkill.words || []).map((w, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.wordCard,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <View style={styles.wordTopRow}>
                    <Text style={[styles.wordTarget, { color: theme.gold }]}>
                      {w.target}
                    </Text>
                    {w.pronunciation && (
                      <View style={styles.pronounceWrap}>
                        <Ionicons name="volume-medium-outline" size={13} color={theme.sky} />
                        <Text style={[styles.wordPronounce, { color: theme.sky }]}>
                          {w.pronunciation}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.wordSource, { color: theme.textPrimary }]}>
                    {w.source}
                  </Text>
                  {w.hint && (
                    <Text style={[styles.wordHint, { color: theme.textMuted }]}>
                      💡 {w.hint}
                    </Text>
                  )}
                  {w.example && (
                    <Text style={[styles.wordExample, { color: theme.textSecondary }]}>
                      e.g. {w.example}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Tab 2: Sentences */}
          {activeTab === "sentences" && (
            <View style={styles.cardsList}>
              {(currentSkill.sentences || []).map((s, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.wordCard,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <Text style={[styles.sentenceTarget, { color: theme.gold }]}>
                    {s.target}
                  </Text>
                  <Text style={[styles.sentenceSource, { color: theme.textPrimary }]}>
                    {s.source}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Tab 3: Tips & Cultural Notes */}
          {activeTab === "tips" && (
            <View style={styles.cardsList}>
              {currentSkill.tips && (
                <View
                  style={[
                    styles.noteCard,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <View style={styles.noteHeaderRow}>
                    <Ionicons name="bulb" size={18} color={theme.gold} />
                    <Text style={[styles.noteHeading, { color: theme.gold }]}>
                      Language Tips & Grammar
                    </Text>
                  </View>
                  <Text style={[styles.noteBody, { color: theme.textSecondary }]}>
                    {currentSkill.tips}
                  </Text>
                </View>
              )}

              {currentSkill.culturalNote && (
                <View
                  style={[
                    styles.noteCard,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <View style={styles.noteHeaderRow}>
                    <Ionicons name="shield-checkmark" size={18} color={theme.kenyaGreenLight} />
                    <Text style={[styles.noteHeading, { color: theme.kenyaGreenLight }]}>
                      Cultural Heritage & Social Context
                    </Text>
                  </View>
                  <Text style={[styles.noteBody, { color: theme.textSecondary }]}>
                    {currentSkill.culturalNote}
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Tab 4: Interactive Quiz */}
          {activeTab === "quiz" && currentExercise && (
            <View
              style={[
                styles.quizCard,
                { backgroundColor: theme.bgCard, borderColor: theme.border },
              ]}
            >
              <View style={styles.quizProgressRow}>
                <Text style={[styles.quizProgressText, { color: theme.gold }]}>
                  QUESTION {quizIdx + 1} OF {exercises.length}
                </Text>
                <View style={[styles.quizPointsBadge, { backgroundColor: `${theme.gold}20` }]}>
                  <Text style={[styles.quizPointsText, { color: theme.gold }]}>+10 XP</Text>
                </View>
              </View>

              <Text style={[styles.quizPrompt, { color: theme.textPrimary }]}>
                {currentExercise.prompt}
              </Text>

              {currentExercise.hint && !isAnswerSubmitted && (
                <Text style={[styles.quizHint, { color: theme.textMuted }]}>
                  💡 Hint: {currentExercise.hint}
                </Text>
              )}

              {/* Options */}
              <View style={styles.optionsWrap}>
                {(currentExercise.options || []).map((opt: string, optIdx: number) => {
                  const isSelected = selectedAnswer === opt;
                  let optBg = theme.bgElevated;
                  let optBorder = theme.border;
                  let optTextColor = theme.textPrimary;

                  if (isAnswerSubmitted) {
                    if (opt === currentExercise.correctAnswer) {
                      optBg = `${theme.kenyaGreenLight}25`;
                      optBorder = theme.kenyaGreenLight;
                      optTextColor = theme.kenyaGreenLight;
                    } else if (isSelected && !isCorrect) {
                      optBg = `${theme.kenyaRedLight}25`;
                      optBorder = theme.kenyaRedLight;
                      optTextColor = theme.kenyaRedLight;
                    }
                  } else if (isSelected) {
                    optBg = `${theme.gold}20`;
                    optBorder = theme.gold;
                    optTextColor = theme.gold;
                  }

                  return (
                    <Pressable
                      key={optIdx}
                      onPress={() => handleSelectOption(opt)}
                      style={[
                        styles.quizOptionBtn,
                        { backgroundColor: optBg, borderColor: optBorder },
                      ]}
                    >
                      <Text style={[styles.quizOptionText, { color: optTextColor }]}>
                        {opt}
                      </Text>
                      {isAnswerSubmitted && opt === currentExercise.correctAnswer && (
                        <Ionicons name="checkmark-circle" size={18} color={theme.kenyaGreenLight} />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <Ionicons name="close-circle" size={18} color={theme.kenyaRedLight} />
                      )}
                    </Pressable>
                  );
                })}
              </View>

              {/* Feedback & Actions */}
              {isAnswerSubmitted ? (
                <View style={styles.quizFeedbackWrap}>
                  <View
                    style={[
                      styles.feedbackBox,
                      {
                        backgroundColor: isCorrect
                          ? `${theme.kenyaGreenLight}15`
                          : `${theme.kenyaRedLight}15`,
                        borderColor: isCorrect
                          ? theme.kenyaGreenLight
                          : theme.kenyaRedLight,
                      },
                    ]}
                  >
                    <Ionicons
                      name={isCorrect ? "checkmark-circle" : "close-circle"}
                      size={20}
                      color={isCorrect ? theme.kenyaGreenLight : theme.kenyaRedLight}
                    />
                    <Text
                      style={[
                        styles.feedbackText,
                        {
                          color: isCorrect
                            ? theme.kenyaGreenLight
                            : theme.kenyaRedLight,
                        },
                      ]}
                    >
                      {isCorrect ? "Hongera! That is correct (+10 XP)" : "Not quite! Study the correct answer above."}
                    </Text>
                  </View>

                  <Pressable
                    onPress={handleNextQuestion}
                    style={[styles.quizActionBtn, { backgroundColor: theme.gold }]}
                  >
                    <Text style={[styles.quizActionBtnText, { color: theme.kenyaBlack }]}>
                      {quizIdx + 1 < exercises.length ? "Next Question" : "Complete Lesson"}
                    </Text>
                    <Ionicons name="arrow-forward" size={16} color={theme.kenyaBlack} />
                  </Pressable>
                </View>
              ) : (
                <Pressable
                  onPress={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  style={[
                    styles.quizActionBtn,
                    {
                      backgroundColor: selectedAnswer ? theme.gold : theme.border,
                      opacity: selectedAnswer ? 1 : 0.6,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.quizActionBtnText,
                      { color: selectedAnswer ? theme.kenyaBlack : theme.textMuted },
                    ]}
                  >
                    Check Answer
                  </Text>
                </Pressable>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  langPills: {
    gap: 8,
    paddingVertical: 2,
  },
  langBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
  },
  langBtnText: {
    fontSize: 14,
    fontWeight: "800",
  },
  langBtnSub: {
    fontSize: 10,
    marginTop: 2,
  },
  heroCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  heroNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  heroName: {
    fontSize: 18,
    fontWeight: "800",
  },
  familyBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  familyText: {
    fontSize: 10,
    fontWeight: "800",
  },
  heroDesc: {
    fontSize: 12,
    lineHeight: 16,
  },
  xpBox: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
    alignItems: "flex-end",
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  xpText: {
    fontSize: 11,
    fontWeight: "800",
  },
  unitPills: {
    gap: 8,
  },
  unitBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    maxWidth: 240,
  },
  unitIcon: {
    fontSize: 16,
  },
  unitTitle: {
    fontSize: 12,
    fontWeight: "700",
  },
  skillPills: {
    gap: 6,
    marginTop: 2,
  },
  skillBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  skillBtnText: {
    fontSize: 11,
    fontWeight: "600",
  },
  studyWrap: {
    marginTop: 4,
    gap: 12,
  },
  tabsHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    gap: 12,
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tabText: {
    fontSize: 12,
    fontWeight: "700",
  },
  cardsList: {
    gap: 8,
  },
  wordCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
  },
  wordTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wordTarget: {
    fontSize: 16,
    fontWeight: "800",
  },
  pronounceWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  wordPronounce: {
    fontSize: 11,
    fontWeight: "600",
  },
  wordSource: {
    fontSize: 14,
    fontWeight: "600",
  },
  wordHint: {
    fontSize: 11,
    marginTop: 2,
  },
  wordExample: {
    fontSize: 11,
    fontStyle: "italic",
    marginTop: 2,
  },
  sentenceTarget: {
    fontSize: 15,
    fontWeight: "800",
  },
  sentenceSource: {
    fontSize: 13,
    fontWeight: "500",
  },
  noteCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    gap: 8,
  },
  noteHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  noteHeading: {
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  noteBody: {
    fontSize: 13,
    lineHeight: 18,
  },
  quizCard: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  quizProgressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quizProgressText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  quizPointsBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  quizPointsText: {
    fontSize: 10,
    fontWeight: "800",
  },
  quizPrompt: {
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  quizHint: {
    fontSize: 12,
  },
  optionsWrap: {
    gap: 8,
    marginVertical: 4,
  },
  quizOptionBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  quizOptionText: {
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
  },
  quizFeedbackWrap: {
    gap: 10,
  },
  feedbackBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  feedbackText: {
    fontSize: 12,
    fontWeight: "700",
    flex: 1,
  },
  quizActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 14,
    borderRadius: 12,
  },
  quizActionBtnText: {
    fontSize: 14,
    fontWeight: "800",
  },
});
