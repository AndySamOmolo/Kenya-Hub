import React, { useState, useEffect, useCallback } from "react";
import {
  AccessibilityInfo,
  LayoutAnimation,
  Linking,
  Platform,
  Pressable,
  Text,
  UIManager,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  categoryColorMap,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../../theme";
import { TOOLS, getCategoryInfo } from "../../shared/lib/tools-registry";
import {
  INITIAL_RANDOM_WORDS,
  TOTAL_DICTIONARY_ENTRIES,
  ALL_DICT_METAS,
} from "../../shared/data/language-sources";
import { DynamicIcon } from "../DynamicIcon";
import { styles } from "./styles";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function useReduceMotionEnabled(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (mounted) setReduceMotion(Boolean(enabled));
      })
      .catch(() => {});
    const sub = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      (enabled) => {
        if (mounted) setReduceMotion(Boolean(enabled));
      }
    );
    return () => {
      mounted = false;
      sub.remove();
    };
  }, []);

  return reduceMotion;
}

export const COURSE_NAMES: Record<string, string> = {
  swahili: "Kiswahili",
  kikuyu: "Gĩkũyũ",
  luo: "Dholuo",
  kalenjin: "Kalenjin",
  luhya: "Luluhya",
  kamba: "Kĩkamba",
  kisii: "Ekegusii",
  meru: "Kĩmĩĩrũ",
  maasai: "Maa (Maasai)",
  mijikenda: "Kigiriama",
  somali: "Af-Soomaali",
  turkana: "Ng'aturkana",
  teso: "Ateso",
  embu: "Kĩembu",
  taita: "Kidawida",
  taveta: "Kitaveta",
  pokomo: "Kipokomo",
  borana: "Afaan Borana",
  rendille: "Af-Rendille",
  samburu: "Sampur",
  ilchamus: "Ilchamus",
  pokot: "Pökoot",
  daasanach: "Daasanach",
};

/**
 * Renders inline Markdown with interactive tappable links (MOB-10, UX-13)
 * Internal links (/tools/..., /county/..., /matatu/...) navigate directly inside the app.
 */
export function renderInlineMarkdown(
  text: string,
  theme: any,
  baseStyle: any,
  onNavigateLink?: (href: string) => void
): React.ReactNode[] {
  const tokenRegex =
    /(\[[^\]]+\]\([^)]+\)|\*\*\*[\s\S]+?\*\*\*|\*\*(?:\\\*|[^*]|\*[^*]+\*)+?\*\*|\*[^*\n]+?\*|`[^`]+`)/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      nodes.push(text.slice(lastIdx, match.index));
    }
    const raw = match[0];
    if (raw.startsWith("[") && raw.includes("](") && raw.endsWith(")")) {
      const linkMatch = raw.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const label = linkMatch[1];
        const href = linkMatch[2].trim();
        nodes.push(
          <Text
            key={key++}
            accessibilityRole="link"
            accessibilityLabel={`Open link ${label}`}
            onPress={() => {
              triggerHaptic(8);
              if (onNavigateLink) {
                onNavigateLink(href);
              } else if (href.startsWith("http://") || href.startsWith("https://")) {
                Linking.openURL(href).catch(() => {});
              }
            }}
            style={[
              baseStyle,
              {
                fontFamily: "Outfit_700Bold",
                color: theme.gold,
                textDecorationLine: "underline",
              },
            ]}
          >
            {label}
          </Text>
        );
      } else {
        nodes.push(raw);
      }
    } else if (raw.startsWith("***") && raw.endsWith("***")) {
      nodes.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            {
              fontFamily: "Outfit_700Bold",
              fontStyle: "italic",
              color: theme.textPrimary,
            },
          ]}
        >
          {raw.slice(3, -3)}
        </Text>
      );
    } else if (raw.startsWith("**") && raw.endsWith("**")) {
      const inner = raw.slice(2, -2);
      const subParts = inner.split(/(\*[^*]+\*)/g);
      nodes.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            { fontFamily: "Outfit_700Bold", color: theme.textPrimary },
          ]}
        >
          {subParts.map((sp, sIdx) =>
            sp.startsWith("*") && sp.endsWith("*") ? (
              <Text
                key={sIdx}
                style={{ fontStyle: "italic", color: theme.gold }}
              >
                {sp.slice(1, -1)}
              </Text>
            ) : (
              sp
            )
          )}
        </Text>
      );
    } else if (raw.startsWith("*") && raw.endsWith("*")) {
      nodes.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            { fontStyle: "italic", color: theme.textPrimary },
          ]}
        >
          {raw.slice(1, -1)}
        </Text>
      );
    } else if (raw.startsWith("`") && raw.endsWith("`")) {
      nodes.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            {
              fontFamily: Platform.OS === "android" ? "monospace" : "Courier",
              backgroundColor: theme.surfaceContainerHigh,
              color: theme.gold,
              fontSize: 12,
            },
          ]}
        >
          {" "}
          {raw.slice(1, -1)}{" "}
        </Text>
      );
    }
    lastIdx = tokenRegex.lastIndex;
  }
  if (lastIdx < text.length) {
    nodes.push(text.slice(lastIdx));
  }
  return nodes;
}

export function BlogMarkdownContent({
  content,
  theme,
  onNavigateLink,
}: {
  content: string;
  theme: any;
  onNavigateLink?: (href: string) => void;
}) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  const bodyStyle = {
    fontFamily: "Inter_400Regular",
    fontSize: 13.5,
    lineHeight: 21,
    color: theme.textSecondary,
  };

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push(
        <View
          key={`hr-${i}`}
          style={{
            height: 1,
            backgroundColor: theme.outlineVariant,
            marginVertical: 8,
          }}
        />
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <Text
          key={`h2-${i}`}
          style={{
            fontFamily: "Outfit_700Bold",
            fontSize: 17,
            color: theme.gold,
            marginTop: 10,
            marginBottom: 2,
          }}
        >
          {renderInlineMarkdown(
            trimmed.slice(3),
            theme,
            { fontSize: 17, color: theme.gold },
            onNavigateLink
          )}
        </Text>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <Text
          key={`h3-${i}`}
          style={{
            fontFamily: "Outfit_700Bold",
            fontSize: 15,
            color: theme.textPrimary,
            marginTop: 6,
            marginBottom: 2,
          }}
        >
          {renderInlineMarkdown(
            trimmed.slice(4),
            theme,
            { fontSize: 15, color: theme.textPrimary },
            onNavigateLink
          )}
        </Text>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <View
          key={`quote-${i}`}
          style={{
            borderLeftWidth: 3,
            borderLeftColor: theme.gold,
            backgroundColor: `${theme.gold}12`,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
            marginVertical: 4,
          }}
        >
          <Text
            style={[
              bodyStyle,
              { fontStyle: "italic", color: theme.textPrimary },
            ]}
          >
            {renderInlineMarkdown(
              quoteLines.join(" "),
              theme,
              bodyStyle,
              onNavigateLink
            )}
          </Text>
        </View>
      );
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const rowStr = lines[i].trim();
        if (!/^\|[\s\-:|]+\|$/.test(rowStr)) {
          const cells = rowStr
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim());
          tableRows.push(cells);
        }
        i++;
      }
      if (tableRows.length > 0) {
        blocks.push(
          <View
            key={`tbl-${i}`}
            style={{
              borderWidth: 1,
              borderColor: theme.outlineVariant,
              borderRadius: 10,
              overflow: "hidden",
              marginVertical: 6,
            }}
          >
            {tableRows.map((row, rIdx) => (
              <View
                key={`tr-${rIdx}`}
                style={{
                  flexDirection: "row",
                  backgroundColor:
                    rIdx === 0 ? theme.surfaceContainerHigh : "transparent",
                  borderBottomWidth: rIdx < tableRows.length - 1 ? 1 : 0,
                  borderBottomColor: theme.outlineVariant,
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  gap: 6,
                }}
              >
                {row.map((cell, cIdx) => (
                  <Text
                    key={`tc-${cIdx}`}
                    style={{
                      flex: 1,
                      fontSize: 11.5,
                      lineHeight: 16,
                      fontFamily:
                        rIdx === 0 ? "Outfit_700Bold" : "Inter_400Regular",
                      color: rIdx === 0 ? theme.gold : theme.textSecondary,
                    }}
                  >
                    {renderInlineMarkdown(
                      cell,
                      theme,
                      {
                        fontSize: 11.5,
                        color: rIdx === 0 ? theme.gold : theme.textSecondary,
                      },
                      onNavigateLink
                    )}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        );
      }
      continue;
    }

    const bulletMatch = rawLine.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (bulletMatch) {
      const indent = bulletMatch[1].length >= 2 ? 16 : 0;
      const marker = /^\d+\./.test(bulletMatch[2])
        ? bulletMatch[2]
        : indent > 0
        ? "◦"
        : "•";
      const itemText = bulletMatch[3];
      blocks.push(
        <View
          key={`li-${i}`}
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingLeft: indent,
            gap: 8,
            marginVertical: 2,
          }}
        >
          <Text
            style={{
              color: theme.gold,
              fontFamily: "Outfit_700Bold",
              fontSize: 13,
              lineHeight: 21,
            }}
          >
            {marker}
          </Text>
          <Text style={[bodyStyle, { flex: 1 }]}>
            {renderInlineMarkdown(itemText, theme, bodyStyle, onNavigateLink)}
          </Text>
        </View>
      );
      i++;
      continue;
    }

    const paraLines: string[] = [trimmed];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^(\s*)([-*]|\d+\.)\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push(
      <Text key={`p-${i}`} style={bodyStyle}>
        {renderInlineMarkdown(
          paraLines.join(" "),
          theme,
          bodyStyle,
          onNavigateLink
        )}
      </Text>
    );
  }

  return <View style={{ gap: 8 }}>{blocks}</View>;
}

/**
 * Isolated Featured Language Card (MOB-4, UX-6)
 * Owns its own state & timer so rotating never re-renders the 1,100+ line HomeScreen.
 */
export function FeaturedLanguageWidget({
  learnStats,
  paused = false,
}: {
  learnStats: {
    langId: string;
    langName: string;
    totalXP: number;
    streak: number;
  };
  paused?: boolean;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const isFocused = useIsFocused();
  const reduceMotion = useReduceMotionEnabled();
  const [featuredLangIdx, setFeaturedLangIdx] = useState<number>(
    () => new Date().getDate() % ROTATING_LANGUAGES.length
  );

  const rotateNext = useCallback(
    (withHaptic = false) => {
      if (withHaptic) triggerHaptic(8);
      if (!reduceMotion) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
      setFeaturedLangIdx((i) => (i + 1) % ROTATING_LANGUAGES.length);
    },
    [reduceMotion]
  );

  useEffect(() => {
    if (!isFocused || paused || reduceMotion) return;
    const timer = setInterval(() => {
      rotateNext(false);
    }, 15000);
    return () => clearInterval(timer);
  }, [isFocused, paused, reduceMotion, rotateNext]);

  const currentFeatured =
    ROTATING_LANGUAGES[featuredLangIdx % ROTATING_LANGUAGES.length];
  const isCurrentLearned =
    learnStats.langId === currentFeatured.id && learnStats.totalXP > 0;

  return (
    <View
      style={[
        styles.snapshotWidget,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: `${theme.gold}45`,
        },
      ]}
    >
      <View style={styles.widgetHeaderRow}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={[
              styles.widgetBadgePill,
              { backgroundColor: `${theme.gold}22` },
            ]}
          >
            <Ionicons name="school" size={12} color={theme.gold} />
            <Text style={[styles.widgetBadgeText, { color: theme.gold }]}>
              23 COURSES
            </Text>
          </View>
          <View
            style={{
              backgroundColor: `${theme.gold}18`,
              paddingHorizontal: 6,
              paddingVertical: 1.5,
              borderRadius: 999,
            }}
          >
            <Text
              style={{
                fontSize: 9.5,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.gold,
              }}
            >
              “{currentFeatured.greeting}”
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => rotateNext(true)}
          accessibilityRole="button"
          accessibilityLabel="Rotate featured Kenyan language"
          hitSlop={12}
          style={pressableStyle(styles.diceMiniBtn)}
        >
          <Ionicons name="dice-outline" size={14} color={theme.gold} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Outfit_700Bold",
              color: theme.gold,
            }}
          >
            Rotate
          </Text>
        </Pressable>
      </View>

      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Learn ${currentFeatured.name}`}
        onPress={() => {
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: "learn", lang: currentFeatured.id },
          });
        }}
        style={pressableStyle({ flex: 1, justifyContent: "space-between" })}
      >
        <View>
          <Text style={[styles.widgetMainTitle, { color: theme.textPrimary }]}>
            Learn {currentFeatured.name}
          </Text>
          <Text
            style={[styles.widgetSubText, { color: theme.textSecondary }]}
            numberOfLines={2}
          >
            {isCurrentLearned
              ? `${learnStats.totalXP} XP earned · Continue flashcards, grammar & oral wisdom in ${currentFeatured.region}`
              : `Explore ${currentFeatured.name} — ${currentFeatured.region} · Flashcards, grammar & oral wisdom`}
          </Text>
        </View>

        <View style={styles.widgetFooterLink}>
          <Text style={[styles.widgetFooterLinkText, { color: theme.gold }]}>
            {isCurrentLearned ? "Resume Course" : "Start Learning"}
          </Text>
          <Ionicons name="arrow-forward" size={13} color={theme.gold} />
        </View>
      </Pressable>
    </View>
  );
}

/**
 * Isolated Word of the Moment Card (MOB-4, UX-6)
 * Owns its own state & timer so rotating never re-renders HomeScreen.
 */
export function WordOfTheMomentWidget({ paused = false }: { paused?: boolean }) {
  const router = useRouter();
  const { theme } = useTheme();
  const isFocused = useIsFocused();
  const reduceMotion = useReduceMotionEnabled();
  const [wordIdx, setWordIdx] = useState<number>(() =>
    INITIAL_RANDOM_WORDS.length > 0
      ? Math.floor(Math.random() * INITIAL_RANDOM_WORDS.length)
      : 0
  );

  const nextWord = useCallback(
    (withHaptic = false) => {
      if (withHaptic) triggerHaptic(8);
      if (!reduceMotion) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
      setWordIdx((i) => (i + 1) % Math.max(1, INITIAL_RANDOM_WORDS.length));
    },
    [reduceMotion]
  );

  useEffect(() => {
    if (!isFocused || paused || reduceMotion) return;
    const timer = setInterval(() => {
      nextWord(false);
    }, 15000);
    return () => clearInterval(timer);
  }, [isFocused, paused, reduceMotion, nextWord]);

  if (!INITIAL_RANDOM_WORDS.length) return null;
  const currentWord =
    INITIAL_RANDOM_WORDS[wordIdx % INITIAL_RANDOM_WORDS.length];
  if (!currentWord) return null;

  return (
    <View
      style={[
        styles.snapshotWidget,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <View style={styles.widgetHeaderRow}>
        <View
          style={[
            styles.widgetBadgePill,
            { backgroundColor: "rgba(47, 164, 99, 0.16)" },
          ]}
        >
          <Ionicons name="sparkles" size={12} color="#2FA463" />
          <Text style={[styles.widgetBadgeText, { color: "#2FA463" }]}>
            {currentWord.langName.toUpperCase()} WORD
          </Text>
        </View>
        <Pressable
          onPress={() => nextWord(true)}
          accessibilityRole="button"
          accessibilityLabel="Show next Kenyan word"
          hitSlop={12}
          style={pressableStyle(styles.diceMiniBtn)}
        >
          <Ionicons name="dice-outline" size={14} color={theme.gold} />
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Outfit_700Bold",
              color: theme.gold,
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>

      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Open Kenyan Translator for ${currentWord.entry.translation}`}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: "kenyan-translator" },
          })
        }
        style={pressableStyle({ flex: 1, justifyContent: "space-between" })}
      >
        <View>
          <Text
            style={[styles.widgetMainTitle, { color: theme.gold }]}
            numberOfLines={1}
          >
            {currentWord.entry.translation}
          </Text>
          <Text
            style={[styles.widgetSubText, { color: theme.textPrimary }]}
            numberOfLines={2}
          >
            &ldquo;{currentWord.entry.english}&rdquo;{" "}
            {currentWord.entry.pronunciation
              ? `· /${currentWord.entry.pronunciation}/`
              : ""}
          </Text>
        </View>

        <View style={styles.widgetFooterLink}>
          <Text style={[styles.widgetFooterLinkText, { color: "#2FA463" }]}>
            {TOTAL_DICTIONARY_ENTRIES.toLocaleString()}+ Words in{" "}
            {ALL_DICT_METAS.length} Languages
          </Text>
          <Ionicons name="arrow-forward" size={13} color="#2FA463" />
        </View>
      </Pressable>
    </View>
  );
}

/** Compact Bento Tile for Android Home Screen */
export function PopularToolRow({
  tool,
  isPinned,
  onTogglePin,
}: {
  tool: (typeof TOOLS)[0];
  isPinned: boolean;
  onTogglePin: (slug: string) => void;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const catInfo = getCategoryInfo(tool.category);

  return (
    <View
      style={[
        styles.popularToolCard,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: isPinned ? `${theme.gold}55` : theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Open ${tool.shortTitle || tool.title}`}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        style={pressableStyle(styles.popularToolPressable)}
      >
        <View
          style={[
            styles.popularToolIconWrap,
            {
              backgroundColor: `${categoryColor}1A`,
              borderColor: `${categoryColor}35`,
            },
          ]}
        >
          <DynamicIcon emoji={tool.icon} size={22} color={categoryColor} />
        </View>
        <View style={styles.popularToolBody}>
          <View
            style={[
              styles.miniCategoryPill,
              {
                backgroundColor: `${categoryColor}18`,
                alignSelf: "flex-start",
                marginBottom: 3,
              },
            ]}
          >
            <Text style={[styles.miniCategoryText, { color: categoryColor }]}>
              {catInfo?.name || tool.category}
            </Text>
          </View>
          <Text style={[styles.popularToolTitle, { color: theme.textPrimary }]}>
            {tool.shortTitle || tool.title}
          </Text>
          <Text
            style={[
              styles.popularToolDesc,
              { color: theme.textSecondary, marginTop: 2 },
            ]}
            numberOfLines={2}
          >
            {tool.description}
          </Text>
        </View>
        <View style={styles.popularToolActions}>
          <Pressable
            onPress={() => {
              triggerHaptic(10);
              onTogglePin(tool.slug);
            }}
            accessibilityRole="button"
            accessibilityLabel={
              isPinned
                ? `Unpin ${tool.shortTitle}`
                : `Pin ${tool.shortTitle}`
            }
            hitSlop={10}
            style={pressableStyle([
              styles.popularToolPinBtn,
              {
                backgroundColor: isPinned
                  ? `${theme.gold}22`
                  : theme.surfaceContainerHigh,
              },
            ])}
          >
            <Ionicons
              name={isPinned ? "bookmark" : "bookmark-outline"}
              size={15}
              color={isPinned ? theme.gold : theme.textMuted}
            />
          </Pressable>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={theme.textMuted}
          />
        </View>
      </Pressable>
    </View>
  );
}

export const ROTATING_LANGUAGES = [
  { id: "swahili", name: "Kiswahili", greeting: "Jambo!", region: "Swahili Coast" },
  { id: "luo", name: "Dholuo", greeting: "Oyawore!", region: "Lake Victoria Basin" },
  { id: "kalenjin", name: "Kalenjin", greeting: "Chamgei!", region: "Great Rift Valley" },
  { id: "kikuyu", name: "Gĩkũyũ", greeting: "Mwohoro!", region: "Mount Kenya Highlands" },
  { id: "luhya", name: "Luluhya", greeting: "Mulembe!", region: "Western Forest Lands" },
  { id: "kamba", name: "Kĩkamba", greeting: "Ũmũvoo!", region: "Ukambani Hills" },
  { id: "maasai", name: "Maa (Maasai)", greeting: "Sopa!", region: "Mara-Amboseli Plains" },
  { id: "somali", name: "Af-Soomaali", greeting: "Nabad!", region: "Northern Frontier" },
  { id: "turkana", name: "Ng'aturkana", greeting: "Mata!", region: "Jade Sea Basin" },
  { id: "mijikenda", name: "Kigiriama", greeting: "Vidze!", region: "Coastal Kaya Forests" },
  { id: "meru", name: "Kĩmĩĩrũ", greeting: "Muuga!", region: "Nyambene Slopes" },
  { id: "kisii", name: "Ekegusii", greeting: "Bwakire!", region: "Gusii Highlands" },
  { id: "borana", name: "Afaan Borana", greeting: "Nagaa!", region: "Marsabit Plateau" },
  { id: "embu", name: "Kĩembu", greeting: "Mwega!", region: "Mount Kenya South" },
  { id: "taita", name: "Kidawida", greeting: "Mwashuma!", region: "Taita Cloud Hills" },
];

export const SUPER_APP_LAUNCHER_ITEMS = [
  {
    id: "paye",
    label: "PAYE Tax",
    icon: "calculator" as const,
    color: "#2FA463",
    route: "/tools/[slug]" as const,
    params: { slug: "paye-calculator" },
  },
  {
    id: "mpesa",
    label: "M-Pesa Fees",
    icon: "phone-portrait" as const,
    color: "#10B981",
    route: "/tools/[slug]" as const,
    params: { slug: "mpesa-fee-calculator" },
  },
  {
    id: "kplc",
    label: "KPLC Tokens",
    icon: "flash" as const,
    color: "#F59E0B",
    route: "/tools/[slug]" as const,
    params: { slug: "kplc-token-calculator" },
  },
  {
    id: "translator",
    label: "Translator",
    icon: "language" as const,
    color: "#EC4899",
    route: "/tools/[slug]" as const,
    params: { slug: "kenyan-translator" },
  },
  {
    id: "learn",
    label: "Learn",
    icon: "school" as const,
    color: "#C8961E",
    route: "/tools/[slug]" as const,
    params: { slug: "learn" },
  },
  {
    id: "matatu",
    label: "Matatu Fares",
    icon: "bus" as const,
    color: "#0EA5E9",
    route: "/matatu" as const,
  },
  {
    id: "county",
    label: "47 Counties",
    icon: "map" as const,
    color: "#8B5CF6",
    route: "/(tabs)/county" as const,
  },
  {
    id: "all",
    label: `All ${TOOLS.length} Tools`,
    icon: "grid" as const,
    color: "#EF4444",
    route: "/(tabs)/tools" as const,
  },
];

export function SUPER_APP_APP_TILES(
  items: Array<{
    id: string;
    label: string;
    icon: any;
    color: string;
    route: any;
    params?: any;
  }>,
  router: ReturnType<typeof useRouter>,
  theme: any
) {
  return items.map((item) => (
    <Pressable
      key={item.id}
      android_ripple={androidRipple(theme.rippleColor, true)}
      accessibilityRole="button"
      accessibilityLabel={`Open ${item.label}`}
      onPress={() => {
        triggerHaptic(8);
        if (item.params) {
          router.push({
            pathname: item.route,
            params: item.params,
          });
        } else {
          router.push(item.route as any);
        }
      }}
      style={pressableStyle(styles.launcherTile)}
    >
      <View
        style={[
          styles.launcherSquircle,
          {
            backgroundColor: `${item.color}1C`,
            borderColor: `${item.color}40`,
          },
        ]}
      >
        <Ionicons name={item.icon} size={22} color={item.color} />
      </View>
      <Text
        style={[styles.launcherLabel, { color: theme.textPrimary }]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
      >
        {item.label}
      </Text>
    </Pressable>
  ));
}
