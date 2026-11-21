import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme, androidRipple } from "../../theme";
import type { CourseUnit, WordPair } from "../../shared/data/courses/types";
import {
  CULTURAL_WISDOM,
  getCulturalWisdomForLanguage,
  type CulturalWisdomItem,
} from "../../shared/data/courses/cultural-wisdom";
import { luoTongueTwisters } from "../../shared/data/courses/luo/tongue-twisters";
import {
  cleanExerciseText,
  getPrimaryForm,
  isCleanLexicalWordPair,
} from "../../shared/lib/learn-engine";
import {
  cleanQuizGloss,
  isValidQuizPair,
  pickBalancedDistractors,
  type ExtraGameId,
} from "./types";

export interface ExtraMiniGamesProps {
  activeGame: ExtraGameId;
  languageId: string;
  languageName: string;
  langColor: string;
  allWords: WordPair[];
  courseUnits: CourseUnit[];
  allUnits: CourseUnit[];
  awardGameXP: (points: number, sessionComplete?: boolean) => void;
  onBack: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Shared Top Header Bar & Completion Card ──
function GameHeaderBar({
  title,
  score,
  progressText,
  onBack,
}: {
  title: string;
  score: number;
  progressText: string;
  onBack: () => void;
}) {
  const { colors } = useTheme();
  return (
    <View style={localStyles.topBar}>
      <Pressable onPress={onBack} style={localStyles.backBtn} hitSlop={8}>
        <Feather name="arrow-left" size={16} color={colors.textSecondary} />
        <Text style={{ color: colors.textSecondary, fontWeight: "700", fontSize: 13 }}>
          Games
        </Text>
      </Pressable>
      <Text
        numberOfLines={1}
        style={{ flex: 1, textAlign: "center", fontSize: 13.5, fontWeight: "800", color: colors.text }}
      >
        {title}
      </Text>
      <View
        style={[
          localStyles.scorePill,
          { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant },
        ]}
      >
        <Feather name="award" size={12} color={colors.gold} />
        <Text style={{ fontSize: 11.5, fontWeight: "800", color: colors.gold }}>
          {score}
        </Text>
        {progressText ? (
          <Text style={{ fontSize: 10.5, fontWeight: "600", color: colors.textMuted }}>
            • {progressText}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

function GameCompleteCard({
  icon,
  title,
  subtitle,
  buttonLabel,
  langColor,
  onRestart,
  onBack,
}: {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  subtitle: string;
  buttonLabel: string;
  langColor: string;
  onRestart: () => void;
  onBack: () => void;
}) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  return (
    <View
      style={[
        localStyles.boardCard,
        { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant, alignItems: "center", gap: 12 },
      ]}
    >
      <View style={[localStyles.completeIconCircle, { backgroundColor: `${langColor}22`, borderColor: `${langColor}55` }]}>
        <Feather name={icon} size={28} color={langColor} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "800", color: colors.text, textAlign: "center" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 13, color: colors.textSecondary, textAlign: "center", lineHeight: 19 }}>
        {subtitle}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 4, width: "100%" }}>
        <Pressable
          android_ripple={ripple}
          onPress={onBack}
          style={[
            localStyles.secondaryBtn,
            { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant, flex: 1 },
          ]}
        >
          <Text style={{ fontSize: 13, fontWeight: "700", color: colors.textSecondary }}>
            Games Menu
          </Text>
        </Pressable>
        <Pressable
          android_ripple={ripple}
          onPress={onRestart}
          style={[localStyles.primaryBtn, { backgroundColor: langColor, flex: 1 }]}
        >
          <Feather name="rotate-ccw" size={14} color="#000" />
          <Text style={{ fontSize: 13, fontWeight: "800", color: "#000" }}>{buttonLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ============================================================================
// 1. METHALI & NGERO BUILDER (matches MethaliBuilderGame.tsx)
// ============================================================================
function MethaliBuilderMobile({
  allWords,
  languageId,
  languageName,
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const SESSION_ROUNDS = 6;
  const [mode, setMode] = useState<"tiles" | "complete">("tiles");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const [currentProverb, setCurrentProverb] = useState<CulturalWisdomItem | null>(null);
  const [targetTokens, setTargetTokens] = useState<string[]>([]);
  const [tilePool, setTilePool] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [solved, setSolved] = useState<boolean | null>(null);

  const [promptStem, setPromptStem] = useState("");
  const [correctEnding, setCorrectEnding] = useState("");
  const [endingOptions, setEndingOptions] = useState<string[]>([]);
  const [pickedEnding, setPickedEnding] = useState<string | null>(null);

  const proverbsPool = useMemo(() => {
    const langItems = getCulturalWisdomForLanguage(languageId || "swahili").filter(
      (p) => p.nativeText && p.nativeText.trim().split(/\s+/).length >= 3
    );
    if (langItems.length >= 3) return langItems;
    return CULTURAL_WISDOM.filter(
      (p) => p.nativeText && p.nativeText.trim().split(/\s+/).length >= 3
    );
  }, [languageId]);

  const initRound = useCallback(
    (activeMode: "tiles" | "complete" = mode) => {
      if (proverbsPool.length === 0) return;
      const item = pickRandom(proverbsPool);
      setCurrentProverb(item);
      setSolved(null);
      setPickedEnding(null);

      const cleanText = item.nativeText
        .replace(/\s*\([A-Z][^)]*\d{4}[^)]*\)\.?\s*$/g, "")
        .replace(/[.!?]+$/g, "")
        .trim();
      const words = cleanText.split(/\s+/).filter(Boolean);

      if (activeMode === "tiles") {
        const capped = words.slice(0, 9);
        setTargetTokens(capped);
        const cappedSet = new Set(capped.map((c) => c.toLowerCase()));
        const medianToken =
          [...capped].sort((a, b) => a.length - b.length)[Math.floor(capped.length / 2)] || capped[0] || "";
        const singleTokenCandidates = allWords
          .filter((w) => isValidQuizPair(w.target, w.source))
          .map((w) => cleanQuizGloss(getPrimaryForm(w.target), 30).split(/\s+/)[0])
          .filter((w) => w && w.length >= 3 && !cappedSet.has(w.toLowerCase()));
        const distractorWords = pickBalancedDistractors(medianToken, singleTokenCandidates, 2);
        setTilePool(shuffle([...capped, ...distractorWords]));
        setSelectedIndices([]);
      } else {
        const splitAt = Math.max(1, Math.floor(words.length / 2));
        const firstHalf = words.slice(0, splitAt).join(" ") + " ...";
        const secondHalf = words.slice(splitAt).join(" ");
        setPromptStem(firstHalf);
        setCorrectEnding(secondHalf);

        const candidateEndings = proverbsPool
          .filter((p) => p.id !== item.id)
          .map((p) => {
            const cleaned = p.nativeText
              .replace(/\s*\([A-Z][^)]*\d{4}[^)]*\)\.?\s*$/g, "")
              .replace(/[.!?]+$/g, "")
              .trim();
            const w = cleaned.split(/\s+/).filter(Boolean);
            return w.slice(Math.max(1, Math.floor(w.length / 2))).join(" ");
          })
          .filter(Boolean);
        const otherEndings = pickBalancedDistractors(secondHalf, candidateEndings, 3);
        setEndingOptions(shuffle([secondHalf, ...otherEndings]));
      }
    },
    [proverbsPool, allWords, mode]
  );

  useEffect(() => {
    initRound(mode);
  }, [initRound, mode]);

  const handleTileTap = (idx: number) => {
    if (solved !== null || selectedIndices.includes(idx)) return;
    const next = [...selectedIndices, idx];
    setSelectedIndices(next);

    if (next.length === targetTokens.length) {
      const attempt = next.map((i) => tilePool[i]).join(" ").toLowerCase();
      const expected = targetTokens.join(" ").toLowerCase();
      if (attempt === expected) {
        setSolved(true);
        setScore((s) => s + 25);
        awardGameXP(25, false);
      } else {
        setSolved(false);
        setTimeout(() => {
          setSelectedIndices([]);
          setSolved(null);
        }, 650);
      }
    }
  };

  const handleEndingPick = (opt: string) => {
    if (pickedEnding !== null) return;
    setPickedEnding(opt);
    const isRight = opt.toLowerCase() === correctEnding.toLowerCase();
    if (isRight) {
      setSolved(true);
      setScore((s) => s + 20);
      awardGameXP(20, false);
    } else {
      setSolved(false);
    }
  };

  const handleNext = () => {
    if (round + 1 >= SESSION_ROUNDS) {
      setDone(true);
      awardGameXP(0, true);
    } else {
      setRound((r) => r + 1);
      initRound(mode);
    }
  };

  if (done) {
    return (
      <GameCompleteCard
        icon="book-open"
        title="Methali & Wisdom Complete!"
        subtitle={`You mastered ${SESSION_ROUNDS} ${languageName} proverbs and earned ${score} pts!`}
        buttonLabel="Play Again"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setDone(false);
          initRound(mode);
        }}
        onBack={onBack}
      />
    );
  }

  if (!currentProverb) return null;

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Methali Builder" score={score} progressText={`${round + 1}/${SESSION_ROUNDS}`} onBack={onBack} />

      {/* Mode Switcher */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        {(
          [
            { id: "tiles" as const, label: "Tile Assembly" },
            { id: "complete" as const, label: "Finish Proverb" },
          ] as const
        ).map((m) => {
          const active = mode === m.id;
          return (
            <Pressable
              key={m.id}
              android_ripple={ripple}
              onPress={() => setMode(m.id)}
              style={{
                flex: 1,
                paddingVertical: 7,
                borderRadius: 10,
                borderWidth: 1,
                alignItems: "center",
                backgroundColor: active ? colors.gold : colors.surfaceContainerHigh,
                borderColor: active ? colors.gold : colors.outlineVariant,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "800", color: active ? "#000" : colors.textSecondary }}>
                {m.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Proverb Clue */}
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <Text style={{ fontSize: 10.5, fontWeight: "800", color: colors.gold, textTransform: "uppercase" }}>
          {currentProverb.category || `${languageName} Oral Wisdom`}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 21 }}>
          “{currentProverb.meaning}”
        </Text>
        {currentProverb.literalTranslation ? (
          <Text style={{ fontSize: 11.5, fontStyle: "italic", color: colors.textSecondary, textAlign: "center" }}>
            Literal: “{currentProverb.literalTranslation}”
          </Text>
        ) : null}
      </View>

      {mode === "tiles" ? (
        <>
          <View
            style={[
              localStyles.dropZone,
              {
                borderColor:
                  solved === true ? "#10B981" : solved === false ? "#EF4444" : colors.outlineVariant,
                backgroundColor:
                  solved === true
                    ? "rgba(16,185,129,0.12)"
                    : solved === false
                    ? "rgba(239,68,68,0.1)"
                    : colors.surface,
              },
            ]}
          >
            {selectedIndices.length > 0 ? (
              selectedIndices.map((poolIdx, pos) => (
                <Pressable
                  key={pos}
                  disabled={solved === true}
                  onPress={() => setSelectedIndices((prev) => prev.filter((_, i) => i !== pos))}
                  style={[localStyles.selectedTile, { backgroundColor: `${colors.gold}22`, borderColor: `${colors.gold}55` }]}
                >
                  <Text style={{ fontSize: 13, fontWeight: "800", color: colors.gold }}>
                    {tilePool[poolIdx]}
                  </Text>
                </Pressable>
              ))
            ) : (
              <Text style={{ fontSize: 12, fontStyle: "italic", color: colors.textMuted, textAlign: "center" }}>
                Tap the {targetTokens.length} words in order to build the proverb...
              </Text>
            )}
          </View>

          {solved !== true && (
            <View style={localStyles.tileBank}>
              {tilePool.map((word, idx) => {
                const used = selectedIndices.includes(idx);
                return (
                  <Pressable
                    key={idx}
                    disabled={used}
                    onPress={() => handleTileTap(idx)}
                    style={[
                      localStyles.wordTile,
                      {
                        backgroundColor: used ? colors.surfaceContainerHigh : colors.surface,
                        borderColor: used ? colors.outlineVariant : colors.outline,
                        opacity: used ? 0.35 : 1,
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 13, fontWeight: "700", color: colors.text }}>{word}</Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </>
      ) : (
        <>
          <View style={[localStyles.noteBanner, { backgroundColor: `${colors.gold}12`, borderColor: `${colors.gold}40` }]}>
            <Text style={{ fontSize: 11, color: colors.textMuted, textAlign: "center", marginBottom: 4 }}>
              Complete the proverb:
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "800", color: colors.gold, textAlign: "center" }}>
              “{promptStem}”
            </Text>
          </View>

          <View style={{ gap: 8 }}>
            {endingOptions.map((opt, idx) => {
              const isCorrect = opt.toLowerCase() === correctEnding.toLowerCase();
              const isPicked = pickedEnding === opt;
              let borderColor = colors.outlineVariant;
              let bgColor = colors.surface;
              let textColor = colors.text;
              if (pickedEnding !== null) {
                if (isCorrect) {
                  borderColor = "#10B981";
                  bgColor = "rgba(16,185,129,0.14)";
                  textColor = "#10B981";
                } else if (isPicked) {
                  borderColor = "#EF4444";
                  bgColor = "rgba(239,68,68,0.12)";
                  textColor = "#EF4444";
                }
              }
              return (
                <Pressable
                  key={idx}
                  android_ripple={ripple}
                  disabled={pickedEnding !== null}
                  onPress={() => handleEndingPick(opt)}
                  style={[localStyles.optionBtn, { borderColor, backgroundColor: bgColor }]}
                >
                  <Text style={{ fontSize: 13.5, fontWeight: "700", color: textColor }}>... {opt}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}

      {(solved === true || pickedEnding !== null) && (
        <View style={[localStyles.noteBanner, { backgroundColor: "rgba(16,185,129,0.12)", borderColor: "rgba(16,185,129,0.35)", gap: 8 }]}>
          <Text style={{ fontSize: 13.5, fontWeight: "800", color: colors.gold }}>
            {currentProverb.nativeText}
          </Text>
          {currentProverb.source ? (
            <Text style={{ fontSize: 11, color: colors.textMuted }}>Source: {currentProverb.source}</Text>
          ) : null}
          <Pressable
            android_ripple={ripple}
            onPress={handleNext}
            style={[localStyles.primaryBtn, { backgroundColor: colors.gold }]}
          >
            <Text style={{ fontSize: 13, fontWeight: "800", color: "#000" }}>
              {round + 1 >= SESSION_ROUNDS ? "Finish Session →" : "Next Proverb →"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

// ============================================================================
// 2. GRAMMAR & NOUN CLASS SORTER (matches NounClassSorterGame.tsx)
// ============================================================================
const BANTU_IDS = new Set([
  "swahili", "kikuyu", "luhya", "kamba", "kisii", "meru",
  "embu", "mijikenda", "taita", "taveta", "pokomo",
]);
const CUSHITIC_IDS = new Set(["somali", "borana", "rendille", "daasanach"]);

function NounClassSorterMobile({
  allWords,
  languageId,
  languageName,
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const SESSION_ROUNDS = 10;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [pickedBucket, setPickedBucket] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);
  const [done, setDone] = useState(false);

  const familyType = BANTU_IDS.has(languageId)
    ? "bantu"
    : CUSHITIC_IDS.has(languageId)
    ? "cushitic"
    : "nilotic";

  const buckets = useMemo(() => {
    if (familyType === "bantu") {
      return [
        { id: "people", label: "Class 1/2: People & Kin", sublabel: "M-/Wa-, Mũ-/A-, Omu-/Aba-" },
        { id: "trees", label: "Class 3/4: Nature & Body", sublabel: "M-/Mi-, Mũ-/Mĩ-, Omu-/Emi-" },
        { id: "things", label: "Class 7/8: Objects & Tools", sublabel: "Ki-/Vi-, Kĩ-/I-, Eki-/Ebi-" },
        { id: "actions", label: "Verbs & Actions", sublabel: "Ku-/Kũ-/Khu- & Imperatives" },
      ];
    }
    if (familyType === "cushitic") {
      return [
        { id: "kin", label: "People & Kinship", sublabel: "Family, elders & roles" },
        { id: "pastoral", label: "Livestock & Ecology", sublabel: "Camels, cattle, water & sky" },
        { id: "objects", label: "Homestead & Numerals", sublabel: "Tools, dwellings & numbers" },
        { id: "actions", label: "Verbs & Actions", sublabel: "Motion, speech & actions" },
      ];
    }
    return [
      { id: "masc", label: "People, Warriors & Kin", sublabel: "Ol- / Ja- / Kip- / Kinship" },
      { id: "fem", label: "Animals, Nature & Places", sublabel: "En- / Chep- / Ng'a- / Ecology" },
      { id: "objects", label: "Homestead & Numbers", sublabel: "Tools, vessels & numerals" },
      { id: "actions", label: "Verbs & Actions", sublabel: "Action roots & states" },
    ];
  }, [familyType]);

  const sortItems = useMemo(() => {
    const items: { target: string; source: string; bucketId: string; explanation: string }[] = [];
    for (const w of shuffle(allWords)) {
      if (!isValidQuizPair(w.target, w.source)) continue;
      const t = cleanQuizGloss(getPrimaryForm(w.target), 40);
      const cleanSrc = cleanQuizGloss(getPrimaryForm(w.source), 56);
      const s = cleanSrc.toLowerCase();
      if (!t || !s) continue;

      if (/^to\s+[a-z]/i.test(s)) {
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: "actions",
          explanation: `"${t}" (${cleanSrc}) is an action verb/infinitive form.`,
        });
        continue;
      }
      if (/\b(mother|father|child|elder|person|man|woman|brother|sister|friend|warrior|chief|guest|boy|girl|husband|wife|son|daughter)\b/i.test(s)) {
        const bId = familyType === "bantu" ? "people" : familyType === "cushitic" ? "kin" : "masc";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the human/kinship noun class.`,
        });
        continue;
      }
      if (/\b(tree|river|mountain|fire|water|sun|moon|rain|wind|cloud|star|cow|goat|sheep|camel|lion|bird|fish|snake|dog|milk|grass|forest)\b/i.test(s)) {
        const bId = familyType === "bantu" ? "trees" : familyType === "cushitic" ? "pastoral" : "fem";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the nature, ecology & livestock class.`,
        });
        continue;
      }
      if (/\b(house|door|pot|knife|spear|stool|basket|chair|book|food|shoe|cloth|one|two|three|four|five|ten)\b/i.test(s)) {
        const bId = familyType === "bantu" ? "things" : "objects";
        items.push({
          target: t,
          source: cleanSrc,
          bucketId: bId,
          explanation: `"${t}" (${cleanSrc}) belongs to the artifacts, homestead & numerals class.`,
        });
      }
    }
    return shuffle(items).slice(0, SESSION_ROUNDS);
  }, [allWords, familyType, seed]);

  const current = sortItems[round];

  const handleSelectBucket = (bucketId: string) => {
    if (pickedBucket !== null || !current) return;
    setPickedBucket(bucketId);
    const isRight = bucketId === current.bucketId;
    if (isRight) {
      setScore((s) => s + 20);
      awardGameXP(20, false);
    }
    setTimeout(() => {
      setPickedBucket(null);
      if (round + 1 >= sortItems.length) {
        setDone(true);
        awardGameXP(0, true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1050);
  };

  if (sortItems.length === 0) {
    return (
      <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
        <GameHeaderBar title="Class Sorter" score={0} progressText="" onBack={onBack} />
        <Text style={{ fontSize: 13, color: colors.textMuted, textAlign: "center", paddingVertical: 20 }}>
          Not enough categorized nouns/verbs in this course yet.
        </Text>
      </View>
    );
  }

  if (done) {
    return (
      <GameCompleteCard
        icon="layers"
        title="Morphology & Class Sorter Complete!"
        subtitle={`You classified ${sortItems.length} ${languageName} words (${score} pts).`}
        buttonLabel="Play Again"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setPickedBucket(null);
          setDone(false);
          setSeed((s) => s + 1);
        }}
        onBack={onBack}
      />
    );
  }

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Class Sorter" score={score} progressText={`${round + 1}/${sortItems.length}`} onBack={onBack} />
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <View style={[localStyles.tagPill, { backgroundColor: `${langColor}20`, borderColor: `${langColor}45` }]}>
          <Feather name="layers" size={11} color={langColor} />
          <Text style={{ fontSize: 10.5, fontWeight: "800", color: langColor }}>
            {familyType === "bantu"
              ? `${languageName} Bantu Noun Class`
              : familyType === "cushitic"
              ? `${languageName} Cushitic Domain`
              : `${languageName} Nilotic Morphology`}
          </Text>
        </View>
        <Text style={{ fontSize: 24, fontWeight: "800", color: colors.gold, textAlign: "center" }}>
          {current.target}
        </Text>
        <Text style={{ fontSize: 13, color: colors.textSecondary, textAlign: "center" }}>
          Meaning: “{current.source}”
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        {buckets.map((b) => {
          const isCorrect = b.id === current.bucketId;
          const isPicked = pickedBucket === b.id;
          let borderColor = colors.outlineVariant;
          let bgColor = colors.surface;
          let titleColor = colors.text;
          if (pickedBucket !== null) {
            if (isCorrect) {
              borderColor = "#10B981";
              bgColor = "rgba(16,185,129,0.14)";
              titleColor = "#10B981";
            } else if (isPicked) {
              borderColor = "#EF4444";
              bgColor = "rgba(239,68,68,0.12)";
              titleColor = "#EF4444";
            }
          }
          return (
            <Pressable
              key={b.id}
              android_ripple={ripple}
              disabled={pickedBucket !== null}
              onPress={() => handleSelectBucket(b.id)}
              style={[localStyles.optionBtn, { borderColor, backgroundColor: bgColor }]}
            >
              <Text style={{ fontSize: 13.5, fontWeight: "800", color: titleColor }}>{b.label}</Text>
              <Text style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>{b.sublabel}</Text>
            </Pressable>
          );
        })}
      </View>

      {pickedBucket !== null && (
        <View style={[localStyles.noteBanner, { backgroundColor: `${colors.gold}15`, borderColor: `${colors.gold}40` }]}>
          <Text style={{ fontSize: 12, color: colors.gold, fontWeight: "600", textAlign: "center" }}>
            {current.explanation}
          </Text>
        </View>
      )}
    </View>
  );
}

// ============================================================================
// 3. SEMANTIC ODD-WORD-OUT (matches OddWordOutGame.tsx)
// ============================================================================
function OddWordOutMobile({
  courseUnits,
  allUnits,
  languageName,
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const SESSION_ROUNDS = 8;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);
  const [done, setDone] = useState(false);

  const rounds = useMemo(() => {
    const units = courseUnits.length > 0 ? courseUnits : allUnits;
    const validSkills = units
      .flatMap((u) => u.skills)
      .map((sk) => ({
        title: sk.title.replace(/^Dictionary:\s*/i, ""),
        words: sk.words
          .filter((w) => isCleanLexicalWordPair(w.target, w.source) && isValidQuizPair(w.target, w.source))
          .map((w) => ({
            ...w,
            target: cleanQuizGloss(getPrimaryForm(w.target), 40),
            source: cleanQuizGloss(cleanExerciseText(getPrimaryForm(w.source)), 56),
          }))
          .filter((w) => w.target && w.source),
      }))
      .filter((sk) => sk.words.length >= 4);

    if (validSkills.length < 2) return [];

    const generated: {
      categoryTitle: string;
      intruderCategoryTitle: string;
      options: (WordPair & { isIntruder: boolean })[];
      intruderTarget: string;
    }[] = [];

    for (let i = 0; i < SESSION_ROUNDS; i++) {
      const shuffledSkills = shuffle(validSkills);
      const mainSkill = shuffledSkills[0];
      const oddSkill = shuffledSkills.find((s) => s.title !== mainSkill.title) || shuffledSkills[1];
      if (!mainSkill || !oddSkill) continue;

      const mainPool = shuffle(mainSkill.words);
      const anchor = mainPool[0];
      if (!anchor) continue;
      const matchedMainTargets = pickBalancedDistractors(
        anchor.target,
        mainPool.slice(1).map((w) => w.target),
        2
      );
      const threeMain = [
        anchor,
        ...matchedMainTargets
          .map((t) => mainPool.find((w) => w.target === t))
          .filter((w): w is WordPair => Boolean(w)),
      ]
        .slice(0, 3)
        .map((w) => ({ ...w, isIntruder: false }));
      if (threeMain.length < 3) continue;
      const mainTargets = new Set(threeMain.map((w) => w.target.toLowerCase()));
      const intruderCandidates = shuffle(oddSkill.words).filter(
        (w) => !mainTargets.has(w.target.toLowerCase())
      );
      if (intruderCandidates.length === 0) continue;
      const balancedIntruderTarget = pickBalancedDistractors(
        anchor.target,
        intruderCandidates.map((w) => w.target),
        1
      )[0];
      const chosenIntruder =
        intruderCandidates.find((w) => w.target === balancedIntruderTarget) || intruderCandidates[0];
      const intruder = { ...chosenIntruder, isIntruder: true };

      generated.push({
        categoryTitle: mainSkill.title,
        intruderCategoryTitle: oddSkill.title,
        options: shuffle([...threeMain, intruder]),
        intruderTarget: intruder.target,
      });
    }
    return generated;
  }, [courseUnits, allUnits, seed]);

  const current = rounds[round];

  const handlePick = (target: string) => {
    if (picked !== null || !current) return;
    setPicked(target);
    const isRight = target === current.intruderTarget;
    if (isRight) {
      setScore((s) => s + 20);
      awardGameXP(20, false);
    }
    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= rounds.length) {
        setDone(true);
        awardGameXP(0, true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1250);
  };

  if (rounds.length === 0) {
    return (
      <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
        <GameHeaderBar title="Odd Word Out" score={0} progressText="" onBack={onBack} />
        <Text style={{ fontSize: 13, color: colors.textMuted, textAlign: "center", paddingVertical: 20 }}>
          Not enough thematic skills available for Semantic Odd-Word-Out.
        </Text>
      </View>
    );
  }

  if (done) {
    return (
      <GameCompleteCard
        icon="search"
        title="Odd-Word-Out Complete!"
        subtitle={`You spotted the semantic intruders across ${rounds.length} rounds (${score} pts).`}
        buttonLabel="Play Again"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setPicked(null);
          setDone(false);
          setSeed((s) => s + 1);
        }}
        onBack={onBack}
      />
    );
  }

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Odd Word Out" score={score} progressText={`${round + 1}/${rounds.length}`} onBack={onBack} />
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <Text style={{ fontSize: 10.5, fontWeight: "800", color: colors.gold, textTransform: "uppercase" }}>
          Semantic Category Detective
        </Text>
        <Text style={{ fontSize: 14.5, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 20 }}>
          3 of these {languageName} words belong to{" "}
          <Text style={{ color: colors.gold }}>“{current.categoryTitle}”</Text>.
        </Text>
        <Text style={{ fontSize: 12, color: colors.textSecondary, textAlign: "center" }}>
          Tap the 1 word that does NOT belong!
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        {current.options.map((opt, idx) => {
          const isPicked = picked === opt.target;
          let borderColor = colors.outlineVariant;
          let bgColor = colors.surface;
          let titleColor = colors.text;
          if (picked !== null) {
            if (opt.isIntruder) {
              borderColor = "#10B981";
              bgColor = "rgba(16,185,129,0.14)";
              titleColor = "#10B981";
            } else if (isPicked) {
              borderColor = "#EF4444";
              bgColor = "rgba(239,68,68,0.12)";
              titleColor = "#EF4444";
            }
          }
          return (
            <Pressable
              key={idx}
              android_ripple={ripple}
              disabled={picked !== null}
              onPress={() => handlePick(opt.target)}
              style={[localStyles.optionBtn, { borderColor, backgroundColor: bgColor }]}
            >
              <Text style={{ fontSize: 15, fontWeight: "800", color: titleColor }}>{opt.target}</Text>
              {picked !== null && (
                <Text style={{ fontSize: 11.5, color: colors.textSecondary, marginTop: 3 }}>
                  Meaning: <Text style={{ fontWeight: "700" }}>{opt.source}</Text>
                  {opt.isIntruder ? ` (${current.intruderCategoryTitle})` : ""}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// ============================================================================
// 4. KENYAN POLYGLOT BRIDGE (matches PolyglotBridgeGame.tsx)
// ============================================================================
const KENYAN_COGNATE_BANK = [
  {
    concept: "Water",
    family: "Bantu / Nilotic / Cushitic",
    entries: [
      { lang: "Kiswahili", word: "maji" },
      { lang: "Gĩkũyũ", word: "maĩ" },
      { lang: "Kĩkamba", word: "maanzĩ" },
      { lang: "Dholuo", word: "pi" },
      { lang: "Af-Soomaali", word: "biyo" },
    ],
    question: "Which Gĩkũyũ & Kĩkamba pair shares the Proto-Bantu *ma-njɪ root with Swahili 'maji' (Water)?",
    correctAnswer: "maĩ (Gĩkũyũ) & maanzĩ (Kĩkamba)",
    distractors: [
      "pi (Dholuo) & beek (Kalenjin)",
      "biyo (Somali) & bishaan (Borana)",
      "ng'akipi (Turkana) & akipi (Ateso)",
    ],
    linguisticNote:
      "Bantu Class 6 liquid nouns preserve the ancient *ma- prefix across Swahili (maji), Gĩkũyũ (maĩ), Kĩkamba (maanzĩ), Luluhya (amatsi), and Ekegusii (amache).",
  },
  {
    concept: "People / Humanity",
    family: "Bantu Class 1/2",
    entries: [
      { lang: "Kiswahili", word: "mtu / watu" },
      { lang: "Gĩkũyũ", word: "mũndũ / andũ" },
      { lang: "Luluhya", word: "omundu / abandu" },
      { lang: "Ekegusii", word: "omonto / abanto" },
    ],
    question: "What does the shared Bantu root -ndu / -ntu / -tu signify across Swahili, Gĩkũyũ, Luluhya, and Ekegusii?",
    correctAnswer: "Person / Human being (Class 1/2)",
    distractors: [
      "Flowing river / Stream (Class 3/4)",
      "Cattle enclosure / Homestead",
      "Mountain peak / Highland ridge",
    ],
    linguisticNote:
      "The Proto-Bantu root *-ntʊ̀ ('person') appears across all Kenyan Bantu languages: mtu (Swahili), mũndũ (Gĩkũyũ/Kĩkamba/Kĩembu), omundu (Luhya), and omonto (Ekegusii).",
  },
  {
    concept: "Cattle / Cow",
    family: "Eastern Nilotic (Maa) & Highland Nilotic",
    entries: [
      { lang: "Maa (Maasai)", word: "en-kiteng' / in-kishu" },
      { lang: "Samburu", word: "nkiteng' / nkishu" },
      { lang: "Ilchamus", word: "nkiteng' / nkishu" },
      { lang: "Kalenjin", word: "teta / tuga" },
    ],
    question: "Which three Kenyan Maa languages share the cognate 'kiteng' / kishu' for Cow / Cattle?",
    correctAnswer: "Maasai, Samburu & Ilchamus",
    distractors: [
      "Somali, Borana & Rendille",
      "Dholuo, Luluhya & Ekegusii",
      "Kipokomo, Mijikenda & Kidaw'ida",
    ],
    linguisticNote:
      "Maasai, Samburu (Sampur), and Ilchamus form the closely related Maa branch of Eastern Nilotic, sharing feminine prefix en-/n- and plural in-/n-.",
  },
  {
    concept: "Two Eyes",
    family: "Cushitic & Nilotic & Bantu",
    entries: [
      { lang: "Af-Soomaali", word: "il / indho" },
      { lang: "Borana Oromo", word: "ija" },
      { lang: "Af-Rendille", word: "il / indo" },
      { lang: "Daasanach", word: "ʔíl" },
    ],
    question: "Across Lowland East Cushitic languages of Northern Kenya (Somali, Borana, Rendille, Daasanach), what does 'il / ija / indo' mean?",
    correctAnswer: "Eye / Eyes",
    distractors: [
      "Camel / Herd",
      "Star / Dawn",
      "Spear / Shield",
    ],
    linguisticNote:
      "Somali (il/indho), Rendille (il/indo), Borana (ija), and Daasanach (ʔíl) preserve the Afroasiatic Lowland East Cushitic root for 'eye'.",
  },
  {
    concept: "Three (Numeral 3)",
    family: "Pan-Bantu Numeral Cognates",
    entries: [
      { lang: "Kiswahili", word: "-tatu" },
      { lang: "Gĩkũyũ", word: "igĩrĩ / ithatũ" },
      { lang: "Kĩkamba", word: "itatũ" },
      { lang: "Mijikenda", word: "hahu" },
    ],
    question: "In Coastal Mijikenda & Kipokomo, Proto-Bantu *t (as in Swahili 'tatu', three) regularly shifts to which sound in 'hahu'?",
    correctAnswer: "Voiceless glottal 'h' (*t → h)",
    distractors: [
      "Labial click 'c' (*t → c)",
      "Alveolar trill 'rr' (*t → rr)",
      "Velar nasal 'ng' (*t → ng)",
    ],
    linguisticNote:
      "A hallmark sound law of Mijikenda and Kipokomo is lenition of Proto-Bantu *t to h: *tatu ('three') → hahu, and *m-ti ('tree') → muhi.",
  },
  {
    concept: "Milk",
    family: "Nilotic & Cushitic Pastoral Lexicon",
    entries: [
      { lang: "Dholuo", word: "chak" },
      { lang: "Kalenjin", word: "chego" },
      { lang: "Pökoot", word: "chepo" },
      { lang: "Ateso", word: "akile" },
      { lang: "Ng'aturkana", word: "ng'akile" },
    ],
    question: "Which pair of Kenyan languages shares the Eastern Nilotic Ateker root '-kile' for Milk?",
    correctAnswer: "Ng'aturkana (ng'akile) & Ateso (akile)",
    distractors: [
      "Dholuo (chak) & Kalenjin (chego)",
      "Kiswahili (maziwa) & Gĩkũyũ (iria)",
      "Af-Soomaali (caano) & Borana (aannan)",
    ],
    linguisticNote:
      "Turkana and Ateso belong to the Ateker (Teso-Turkana) cluster of Eastern Nilotic, while Dholuo (chak) and Kalenjin/Pökoot (chego/chepo) share a Western/Southern Nilotic dairy root.",
  },
];

function PolyglotBridgeMobile({
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);
  const [done, setDone] = useState(false);

  const deck = useMemo(() => shuffle(KENYAN_COGNATE_BANK), [seed]);
  const current = deck[round];
  const options = useMemo(() => {
    if (!current) return [];
    const balanced = pickBalancedDistractors(current.correctAnswer, current.distractors, 3);
    return shuffle([current.correctAnswer, ...(balanced.length >= 3 ? balanced : current.distractors)]);
  }, [current]);

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    if (opt === current.correctAnswer) {
      setScore((s) => s + 25);
      awardGameXP(25, false);
    }
  };

  const handleNext = () => {
    setPicked(null);
    if (round + 1 >= deck.length) {
      setDone(true);
      awardGameXP(0, true);
    } else {
      setRound((r) => r + 1);
    }
  };

  if (done) {
    return (
      <GameCompleteCard
        icon="globe"
        title="Polyglot Cognate Bridge Complete!"
        subtitle={`You compared Bantu, Nilotic, and Cushitic roots across Kenya (${score} pts).`}
        buttonLabel="Play Again"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setPicked(null);
          setDone(false);
          setSeed((s) => s + 1);
        }}
        onBack={onBack}
      />
    );
  }

  if (!current) return null;

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Polyglot Bridge" score={score} progressText={`${round + 1}/${deck.length}`} onBack={onBack} />
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <View style={[localStyles.tagPill, { backgroundColor: `${colors.gold}20`, borderColor: `${colors.gold}45` }]}>
            <Feather name="globe" size={11} color={colors.gold} />
            <Text style={{ fontSize: 10.5, fontWeight: "800", color: colors.gold }}>Concept: {picked !== null ? current.concept : '???'}</Text>
          </View>
          <Text style={{ fontSize: 10.5, color: colors.textMuted, flexShrink: 1 }} numberOfLines={1}>
            {current.family}
          </Text>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, justifyContent: "center", width: "100%" }}>
          {current.entries.map((e, i) => (
            <View
              key={i}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 10,
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.outlineVariant,
                alignItems: "center",
                minWidth: "45%",
                flexGrow: 1,
              }}
            >
              <Text style={{ fontSize: 10, color: colors.textMuted, fontWeight: "600" }}>{e.lang}</Text>
              <Text style={{ fontSize: 13, fontWeight: "800", color: colors.gold, marginTop: 1 }}>{e.word}</Text>
            </View>
          ))}
        </View>

        <Text style={{ fontSize: 14, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 20, marginTop: 4 }}>
          {current.question}
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        {options.map((opt, idx) => {
          const isCorrect = opt === current.correctAnswer;
          const isPicked = picked === opt;
          let borderColor = colors.outlineVariant;
          let bgColor = colors.surface;
          let textColor = colors.text;
          if (picked !== null) {
            if (isCorrect) {
              borderColor = "#10B981";
              bgColor = "rgba(16,185,129,0.14)";
              textColor = "#10B981";
            } else if (isPicked) {
              borderColor = "#EF4444";
              bgColor = "rgba(239,68,68,0.12)";
              textColor = "#EF4444";
            }
          }
          return (
            <Pressable
              key={idx}
              android_ripple={ripple}
              disabled={picked !== null}
              onPress={() => handlePick(opt)}
              style={[localStyles.optionBtn, { borderColor, backgroundColor: bgColor }]}
            >
              <Text style={{ fontSize: 13.5, fontWeight: "700", color: textColor }}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      {picked !== null && (
        <View style={[localStyles.noteBanner, { backgroundColor: `${colors.gold}15`, borderColor: `${colors.gold}40`, gap: 8 }]}>
          <Text style={{ fontSize: 12, color: colors.textSecondary, lineHeight: 18 }}>
            <Text style={{ fontWeight: "800", color: colors.gold }}>Linguistics Note: </Text>
            {current.linguisticNote}
          </Text>
          <Pressable
            android_ripple={ripple}
            onPress={handleNext}
            style={[localStyles.primaryBtn, { backgroundColor: colors.gold }]}
          >
            <Text style={{ fontSize: 13, fontWeight: "800", color: "#000" }}>
              {round + 1 >= deck.length ? "Finish Bridge →" : "Next Cognate Bridge →"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

// ============================================================================
// 5. SENTENCE SAFARI (CLOZE) (matches SentenceSafariGame.tsx)
// ============================================================================
function SentenceSafariMobile({
  allWords,
  courseUnits,
  allUnits,
  languageName,
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const SESSION_ROUNDS = 8;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);
  const [done, setDone] = useState(false);

  const challenges = useMemo(() => {
    const units = courseUnits.length > 0 ? courseUnits : allUnits;
    const pool: {
      maskedSentence: string;
      englishSentence: string;
      missingWord: string;
      options: string[];
      skillTitle: string;
    }[] = [];
    const wordTargets = allWords
      .filter((w) => isValidQuizPair(w.target, w.source))
      .map((w) => cleanQuizGloss(getPrimaryForm(w.target), 32))
      .filter((t) => t.length >= 3 && !t.includes(" "));

    for (const unit of units) {
      for (const skill of unit.skills) {
        for (const sent of skill.sentences || []) {
          const targetSent = cleanExerciseText(sent.target).trim();
          const sourceSent = cleanExerciseText(sent.source).trim();
          if (!targetSent || !sourceSent) continue;
          const tokens = targetSent.split(/\s+/);
          if (tokens.length < 3 || tokens.length > 14) continue;

          const candidates = tokens
            .map((tok, idx) => ({
              tok,
              clean: tok.replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'-]/g, ""),
              idx,
            }))
            .filter((c) => c.clean.length >= 3);
          if (candidates.length === 0) continue;

          const chosen = candidates[Math.floor(Math.random() * candidates.length)];
          const maskedTokens = [...tokens];
          maskedTokens[chosen.idx] = "_____";

          const distractors = pickBalancedDistractors(chosen.clean, wordTargets, 3);
          if (distractors.length < 3) continue;

          pool.push({
            maskedSentence: maskedTokens.join(" "),
            englishSentence: sourceSent,
            missingWord: chosen.clean,
            options: shuffle([chosen.clean, ...distractors]),
            skillTitle: skill.title,
          });
        }

        for (const w of skill.words) {
          if (!w.example) continue;
          const primaryTarget = getPrimaryForm(w.target).trim();
          if (!primaryTarget || primaryTarget.includes(" ")) continue;
          const regex = new RegExp(`\\b${primaryTarget.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
          if (regex.test(w.example)) {
            const masked = w.example.replace(regex, "_____");
            const cleanMeaning = cleanQuizGloss(w.source, 56);
            if (!cleanMeaning || !isValidQuizPair(primaryTarget, cleanMeaning)) continue;
            const distractors = pickBalancedDistractors(primaryTarget, wordTargets, 3);
            if (distractors.length >= 3) {
              pool.push({
                maskedSentence: masked,
                englishSentence: `Meaning of missing word: "${cleanMeaning}"`,
                missingWord: primaryTarget,
                options: shuffle([primaryTarget, ...distractors]),
                skillTitle: skill.title,
              });
            }
          }
        }
      }
    }
    return shuffle(pool).slice(0, SESSION_ROUNDS);
  }, [courseUnits, allUnits, allWords, seed]);

  const current = challenges[round];

  const handlePick = (opt: string) => {
    if (picked !== null || !current) return;
    setPicked(opt);
    const isRight = opt.toLowerCase() === current.missingWord.toLowerCase();
    if (isRight) {
      setScore((s) => s + 20);
      awardGameXP(20, false);
    }
    setTimeout(() => {
      setPicked(null);
      if (round + 1 >= challenges.length) {
        setDone(true);
        awardGameXP(0, true);
      } else {
        setRound((r) => r + 1);
      }
    }, 950);
  };

  if (challenges.length === 0) {
    return (
      <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
        <GameHeaderBar title="Sentence Safari" score={0} progressText="" onBack={onBack} />
        <Text style={{ fontSize: 13, color: colors.textMuted, textAlign: "center", paddingVertical: 20 }}>
          Not enough contextual sentences available for Sentence Safari in this course.
        </Text>
      </View>
    );
  }

  if (done) {
    return (
      <GameCompleteCard
        icon="compass"
        title="Sentence Safari Complete!"
        subtitle={`You completed ${challenges.length} contextual ${languageName} sentences (${score} pts).`}
        buttonLabel="New Safari Run"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setPicked(null);
          setDone(false);
          setSeed((s) => s + 1);
        }}
        onBack={onBack}
      />
    );
  }

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Sentence Safari" score={score} progressText={`${round + 1}/${challenges.length}`} onBack={onBack} />
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <View style={[localStyles.tagPill, { backgroundColor: `${langColor}20`, borderColor: `${langColor}45` }]}>
          <Feather name="compass" size={11} color={langColor} />
          <Text style={{ fontSize: 10.5, fontWeight: "800", color: langColor }} numberOfLines={1}>
            {current.skillTitle}
          </Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "800", color: colors.text, textAlign: "center", lineHeight: 26 }}>
          {current.maskedSentence}
        </Text>
        <Text style={{ fontSize: 12.5, fontStyle: "italic", color: colors.textSecondary, textAlign: "center" }}>
          “{current.englishSentence}”
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        {current.options.map((opt, idx) => {
          const isCorrect = opt.toLowerCase() === current.missingWord.toLowerCase();
          const isPicked = picked === opt;
          let borderColor = colors.outlineVariant;
          let bgColor = colors.surface;
          let textColor = colors.text;
          if (picked !== null) {
            if (isCorrect) {
              borderColor = "#10B981";
              bgColor = "rgba(16,185,129,0.14)";
              textColor = "#10B981";
            } else if (isPicked) {
              borderColor = "#EF4444";
              bgColor = "rgba(239,68,68,0.12)";
              textColor = "#EF4444";
            }
          }
          return (
            <Pressable
              key={idx}
              android_ripple={ripple}
              disabled={picked !== null}
              onPress={() => handlePick(opt)}
              style={[localStyles.optionBtn, { borderColor, backgroundColor: bgColor }]}
            >
              <Text style={{ fontSize: 14, fontWeight: "700", color: textColor }}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// ============================================================================
// 6. KIKOKOTOO TONGUE TWISTERS (matches TongueTwisterGame.tsx)
// ============================================================================
const PAN_KENYAN_TWISTERS = [
  ...luoTongueTwisters.map((t) => ({
    languageId: "luo",
    text: t.luo,
    english: t.english.replace(/\s*\(Practicing[^)]*\)\.?\s*$/i, ""),
    phoneticFocus: "Dholuo dental/alveolar contrasts (t/th, d/dh) & velar nasal ng'",
  })),
  {
    languageId: "swahili",
    text: "Katakata kiti cha kukalia kivulini",
    english: "Cut up the wooden chair for sitting in the shade.",
    phoneticFocus: "Kiswahili voiceless velar k- and palatal ch- alliteration",
  },
  {
    languageId: "swahili",
    text: "Wale watu saba walisema wataenda sokoni sasa",
    english: "Those seven people said they will go to the market now.",
    phoneticFocus: "Kiswahili labial-velar glide w- and alveolar sibilant s-",
  },
  {
    languageId: "kikuyu",
    text: "Kana ka Nikora kona kora kora",
    english: "When Nicholas's child sees a frog, the frog flees.",
    phoneticFocus: "Gĩkũyũ Diminutive Class 12 ka- prefix & tapped r",
  },
  {
    languageId: "kikuyu",
    text: "Mũndũ mũrũme mũkũrũ arĩ mũgũnda mũnene",
    english: "The elder man has a large cultivated garden.",
    phoneticFocus: "Gĩkũyũ open-mid vowel ũ [o] & prenasalized stops nd/ng",
  },
  {
    languageId: "luhya",
    text: "Omwana wa mama amala amatsi muli inzu",
    english: "Mother's child finished the water inside the house.",
    phoneticFocus: "Luluhya bilabial nasals m- and affricate ts-",
  },
  {
    languageId: "kalenjin",
    text: "Chepkondok che mengechen che miitei timin",
    english: "The little birds that are inside the forest.",
    phoneticFocus: "Kalenjin palatal ch- and long vowel -ee-",
  },
  {
    languageId: "kamba",
    text: "Kaana ka kaseo nĩendaa kahora mũtĩnĩ",
    english: "The good little child walks gently by the tree.",
    phoneticFocus: "Kĩkamba Class 12 ka- concord and open vowels ĩ/ũ",
  },
  {
    languageId: "somali",
    text: "Shimbiraha quruxda badan baa geedka dul fadhiya",
    english: "The beautiful birds are sitting atop the tree.",
    phoneticFocus: "Af-Soomaali uvular stop q- and retroflex d-",
  },
  {
    languageId: "maasai",
    text: "E-ton ol-moruo o-ibor te-boo en-kaji",
    english: "The white-haired elder sits outside the homestead house.",
    phoneticFocus: "Maa gender prefixes ol- (masc.) and en- (fem.)",
  },
];

function TongueTwisterMobile({
  languageId,
  languageName,
  langColor,
  awardGameXP,
  onBack,
}: Omit<ExtraMiniGamesProps, "activeGame">) {
  const { colors, isDark } = useTheme();
  const ripple = androidRipple(isDark);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [solved, setSolved] = useState<boolean | null>(null);
  const [done, setDone] = useState(false);

  const deck = useMemo(() => {
    const langSpecific = PAN_KENYAN_TWISTERS.filter((t) => t.languageId === languageId);
    const others = PAN_KENYAN_TWISTERS.filter((t) => t.languageId !== languageId);
    return [...langSpecific, ...shuffle(others)].slice(0, 5);
  }, [languageId]);

  const current = deck[round];
  const expectedWords = useMemo(
    () => (current ? current.text.replace(/[.!?]+$/g, "").trim().split(/\s+/) : []),
    [current]
  );

  const initRound = useCallback(() => {
    if (!current) return;
    const words = current.text.replace(/[.!?]+$/g, "").trim().split(/\s+/);
    setTiles(shuffle(words));
    setSelected([]);
    setSolved(null);
  }, [current]);

  useEffect(() => {
    initRound();
  }, [initRound]);

  const handleTap = (idx: number) => {
    if (solved !== null || selected.includes(idx)) return;
    const next = [...selected, idx];
    setSelected(next);

    if (next.length === tiles.length) {
      const attempt = next.map((i) => tiles[i]).join(" ").toLowerCase();
      const target = expectedWords.join(" ").toLowerCase();
      if (attempt === target) {
        setSolved(true);
        setScore((s) => s + 25);
        awardGameXP(25, false);
      } else {
        setSolved(false);
        setTimeout(() => {
          setSelected([]);
          setSolved(null);
        }, 600);
      }
    }
  };

  if (done) {
    return (
      <GameCompleteCard
        icon="mic"
        title="Kikokotoo Tongue-Twister Sprint Complete!"
        subtitle={`You mastered ${deck.length} rapid articulation drills (${score} pts).`}
        buttonLabel="Practice Again"
        langColor={langColor}
        onRestart={() => {
          setRound(0);
          setScore(0);
          setDone(false);
        }}
        onBack={onBack}
      />
    );
  }

  if (!current) return null;

  return (
    <View style={[localStyles.boardCard, { backgroundColor: colors.surfaceContainerLow, borderColor: colors.outlineVariant }]}>
      <GameHeaderBar title="Tongue Twisters" score={score} progressText={`${round + 1}/${deck.length}`} onBack={onBack} />
      <View style={[localStyles.promptBox, { backgroundColor: colors.surfaceContainerHigh, borderColor: colors.outlineVariant }]}>
        <Text style={{ fontSize: 10.5, fontWeight: "800", color: colors.gold, textAlign: "center" }}>
          {current.phoneticFocus}
        </Text>
        <Text style={{ fontSize: 11.5, color: colors.textMuted, textAlign: "center" }}>
          Assemble & say aloud 3 times fast ({languageName} / Kenyan Phonetics):
        </Text>
        <Text style={{ fontSize: 14.5, fontWeight: "800", color: colors.text, textAlign: "center" }}>
          “{cleanQuizGloss(current.english, 140) || current.english}”
        </Text>
      </View>

      <View
        style={[
          localStyles.dropZone,
          {
            borderColor: solved === true ? "#10B981" : solved === false ? "#EF4444" : colors.outlineVariant,
            backgroundColor:
              solved === true
                ? "rgba(16,185,129,0.12)"
                : solved === false
                ? "rgba(239,68,68,0.1)"
                : colors.surface,
          },
        ]}
      >
        {selected.length > 0 ? (
          selected.map((tileIdx, pos) => (
            <Pressable
              key={pos}
              disabled={solved === true}
              onPress={() => setSelected((prev) => prev.filter((_, i) => i !== pos))}
              style={[localStyles.selectedTile, { backgroundColor: `${colors.gold}22`, borderColor: `${colors.gold}55` }]}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: colors.gold }}>
                {tiles[tileIdx]}
              </Text>
            </Pressable>
          ))
        ) : (
          <Text style={{ fontSize: 12, fontStyle: "italic", color: colors.textMuted, textAlign: "center" }}>
            Tap the alliterating words below in sequence...
          </Text>
        )}
      </View>

      {solved !== true && (
        <View style={localStyles.tileBank}>
          {tiles.map((w, idx) => {
            const used = selected.includes(idx);
            return (
              <Pressable
                key={idx}
                disabled={used}
                onPress={() => handleTap(idx)}
                style={[
                  localStyles.wordTile,
                  {
                    backgroundColor: used ? colors.surfaceContainerHigh : colors.surface,
                    borderColor: used ? colors.outlineVariant : colors.outline,
                    opacity: used ? 0.35 : 1,
                  },
                ]}
              >
                <Text style={{ fontSize: 13, fontWeight: "700", color: colors.text }}>{w}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {solved === true && (
        <View style={[localStyles.noteBanner, { backgroundColor: "rgba(16,185,129,0.12)", borderColor: "rgba(16,185,129,0.35)", gap: 8 }]}>
          <Text style={{ fontSize: 13, fontWeight: "800", color: "#10B981", textAlign: "center" }}>
            Say it 3x aloud: <Text style={{ color: colors.gold }}>“{current.text}”</Text>
          </Text>
          <Pressable
            android_ripple={ripple}
            onPress={() => {
              if (round + 1 >= deck.length) {
                setDone(true);
                awardGameXP(0, true);
              } else {
                setRound((r) => r + 1);
              }
            }}
            style={[localStyles.primaryBtn, { backgroundColor: colors.gold }]}
          >
            <Text style={{ fontSize: 13, fontWeight: "800", color: "#000" }}>
              {round + 1 >= deck.length ? "Finish Sprint →" : "Next Tongue Twister →"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

// ============================================================================
// MAIN DISPATCHER
// ============================================================================
export default function ExtraMiniGames(props: ExtraMiniGamesProps) {
  const { activeGame, ...rest } = props;
  switch (activeGame) {
    case "methali":
      return <MethaliBuilderMobile {...rest} />;
    case "nounClass":
      return <NounClassSorterMobile {...rest} />;
    case "oddWord":
      return <OddWordOutMobile {...rest} />;
    case "polyglot":
      return <PolyglotBridgeMobile {...rest} />;
    case "safari":
      return <SentenceSafariMobile {...rest} />;
    case "twister":
      return <TongueTwisterMobile {...rest} />;
    default:
      return null;
  }
}

const localStyles = StyleSheet.create({
  boardCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
    paddingRight: 4,
  },
  scorePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  promptBox: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 8,
  },
  tagPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 1,
  },
  optionBtn: {
    borderRadius: 12,
    borderWidth: 1.5,
    paddingVertical: 11,
    paddingHorizontal: 13,
  },
  noteBanner: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  dropZone: {
    minHeight: 60,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: "dashed",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  tileBank: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
  },
  selectedTile: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9,
    borderWidth: 1,
  },
  wordTile: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  completeIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
});
