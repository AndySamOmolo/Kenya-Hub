import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useMemo, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  categoryColorMap,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
} from "../../src/theme";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolUsageScore,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import {
  STATIC_BLOG_POSTS,
  StaticBlogPost,
} from "../../src/shared/data/blog-posts";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function renderInlineMarkdown(text: string, theme: any, baseStyle: any): React.ReactNode[] {
  const cleaned = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
  const tokenRegex = /(\*\*\*[\s\S]+?\*\*\*|\*\*(?:\\\*|[^*]|\*[^*]+\*)+?\*\*|\*[^*\n]+?\*|`[^`]+`)/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = tokenRegex.exec(cleaned)) !== null) {
    if (match.index > lastIdx) {
      nodes.push(cleaned.slice(lastIdx, match.index));
    }
    const raw = match[0];
    if (raw.startsWith("***") && raw.endsWith("***")) {
      nodes.push(
        <Text
          key={key++}
          style={[baseStyle, { fontFamily: "Outfit_700Bold", fontStyle: "italic", color: theme.textPrimary }]}
        >
          {raw.slice(3, -3)}
        </Text>
      );
    } else if (raw.startsWith("**") && raw.endsWith("**")) {
      const inner = raw.slice(2, -2);
      // Handle nested *italic* inside **bold**
      const subParts = inner.split(/(\*[^*]+\*)/g);
      nodes.push(
        <Text key={key++} style={[baseStyle, { fontFamily: "Outfit_700Bold", color: theme.textPrimary }]}>
          {subParts.map((sp, sIdx) =>
            sp.startsWith("*") && sp.endsWith("*") ? (
              <Text key={sIdx} style={{ fontStyle: "italic", color: theme.gold }}>
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
        <Text key={key++} style={[baseStyle, { fontStyle: "italic", color: theme.textPrimary }]}>
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
          {" "}{raw.slice(1, -1)}{" "}
        </Text>
      );
    }
    lastIdx = tokenRegex.lastIndex;
  }
  if (lastIdx < cleaned.length) {
    nodes.push(cleaned.slice(lastIdx));
  }
  return nodes;
}

function BlogMarkdownContent({ content, theme }: { content: string; theme: any }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  const bodyStyle = {
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
          {renderInlineMarkdown(trimmed.slice(3), theme, { fontSize: 17, color: theme.gold })}
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
          {renderInlineMarkdown(trimmed.slice(4), theme, { fontSize: 15, color: theme.textPrimary })}
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
          <Text style={[bodyStyle, { fontStyle: "italic", color: theme.textPrimary }]}>
            {renderInlineMarkdown(quoteLines.join(" "), theme, bodyStyle)}
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
                      fontFamily: rIdx === 0 ? "Outfit_700Bold" : undefined,
                      color: rIdx === 0 ? theme.gold : theme.textSecondary,
                    }}
                  >
                    {renderInlineMarkdown(cell, theme, {
                      fontSize: 11.5,
                      color: rIdx === 0 ? theme.gold : theme.textSecondary,
                    })}
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
      const marker = /^\d+\./.test(bulletMatch[2]) ? bulletMatch[2] : indent > 0 ? "◦" : "•";
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
          <Text style={{ color: theme.gold, fontFamily: "Outfit_700Bold", fontSize: 13, lineHeight: 21 }}>
            {marker}
          </Text>
          <Text style={[bodyStyle, { flex: 1 }]}>
            {renderInlineMarkdown(itemText, theme, bodyStyle)}
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
        {renderInlineMarkdown(paraLines.join(" "), theme, bodyStyle)}
      </Text>
    );
  }

  return <View style={{ gap: 8 }}>{blocks}</View>;
}

function ToolCard({ tool }: { tool: (typeof TOOLS)[0] }) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const catInfo = getCategoryInfo(tool.category);

  return (
    <View
      style={[
        styles.toolCardWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        style={styles.toolCard}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.toolIconBox,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}38`,
              },
            ]}
          >
            <DynamicIcon emoji={tool.icon} size={22} color={categoryColor} />
          </View>
          <View style={{ flex: 1, marginLeft: 14 }}>
            <View style={styles.categoryPillWrap}>
              <View
                style={[
                  styles.categoryDot,
                  { backgroundColor: categoryColor },
                ]}
              />
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {(catInfo?.name || tool.category).toUpperCase()}
              </Text>
            </View>
            <Text
              style={[styles.toolTitle, { color: theme.textPrimary }]}
              
            >
              {tool.shortTitle}
            </Text>
          </View>
          <View
            style={[
              styles.trailingIconCircle,
              { backgroundColor: theme.surfaceContainerHigh },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={16}
              color={theme.textSecondary}
            />
          </View>
        </View>

        <Text
          style={[styles.toolDesc, { color: theme.textSecondary }]}
          
        >
          {tool.description}
        </Text>

        <View
          style={[
            styles.cardFooterRow,
            { borderTopColor: theme.outlineVariant },
          ]}
        >
          <View style={styles.sourceTag}>
            <Ionicons
              name="shield-checkmark"
              size={13}
              color={theme.kenyaGreenLight}
            />
            <Text
              style={[styles.sourceText, { color: theme.textMuted }]}
              
            >
              {tool.dataSource}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const [selectedPost, setSelectedPost] = useState<StaticBlogPost | null>(null);
  const [selectedBlogTag, setSelectedBlogTag] = useState<string>("All");

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("kh-saved-tools")
        .then((val) => setPinnedSlugs(val?.split(",").filter(Boolean) ?? []))
        .catch(() => setPinnedSlugs([]));

      AsyncStorage.getItem("kh-tool-visits")
        .then((raw) => {
          if (!raw) {
            setVisitCounts({});
            return;
          }
          const parsed = JSON.parse(raw);
          setVisitCounts(parsed && typeof parsed === "object" ? parsed : {});
        })
        .catch(() => setVisitCounts({}));
    }, [])
  );

  // Mirrors web PopularToolsSection: sort by real visit counts if any, else baseline usage score
  const popular = useMemo(() => {
    const hasVisits = Object.values(visitCounts).some((c) => c > 0);
    return [...TOOLS]
      .sort((a, b) => {
        const labelComparison = a.shortTitle.localeCompare(
          b.shortTitle,
          undefined,
          { numeric: true, sensitivity: "base" }
        );
        if (hasVisits) {
          const aV = visitCounts[a.slug] ?? 0;
          const bV = visitCounts[b.slug] ?? 0;
          if (bV !== aV) return bV - aV;
        }
        return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
      })
      .slice(0, 6);
  }, [visitCounts]);

  const pinnedTools = useMemo(
    () =>
      pinnedSlugs
        .map((s) => TOOLS.find((t) => t.slug === s))
        .filter(Boolean) as (typeof TOOLS)[0][],
    [pinnedSlugs]
  );

  // Sorted blog posts from web STATIC_BLOG_POSTS (newest first)
  const blogTags = useMemo(() => {
    const tags = new Set<string>();
    STATIC_BLOG_POSTS.forEach((p) => (p.tags || []).forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const sortedPosts = useMemo(() => {
    const list =
      selectedBlogTag === "All"
        ? STATIC_BLOG_POSTS
        : STATIC_BLOG_POSTS.filter((p) => p.tags?.includes(selectedBlogTag));
    return [...list].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [selectedBlogTag]);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        rightAction={
          <View
            style={[
              styles.offlineChip,
              {
                backgroundColor: theme.secondaryContainer,
                borderColor: `${theme.kenyaGreenLight}40`,
              },
            ]}
          >
            <Ionicons
              name="cloud-done"
              size={13}
              color={theme.onSecondaryContainer}
            />
            <Text
              style={[
                styles.offlineChipText,
                { color: theme.onSecondaryContainer },
              ]}
            >
              Offline
            </Text>
          </View>
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Material 3 Search Bar Trigger */}
        <View style={styles.searchSection}>
          <Pressable
            android_ripple={androidRipple(theme.rippleColor)}
            onPress={() => router.push("/(tabs)/tools")}
            style={[
              styles.m3SearchBar,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Ionicons name="search" size={20} color={theme.gold} />
            <Text
              style={[
                styles.m3SearchPlaceholder,
                { color: theme.textSecondary },
              ]}
              numberOfLines={1}
            >
              Search PAYE, M-Pesa, KPLC, tools...
            </Text>
            <View
              style={[
                styles.m3SearchBadge,
                { backgroundColor: theme.primaryContainer },
              ]}
            >
              <Text
                style={[
                  styles.m3SearchBadgeText,
                  { color: theme.onPrimaryContainer },
                ]}
              >
                {TOOLS.length}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Material 3 Hero Banner Card */}
        <View style={styles.heroWrap}>
          <View
            style={[
              styles.heroCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View
              style={[
                styles.statusPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={styles.pulsingDot}>
                <View style={styles.pulsingDotInner} />
              </View>
              <Text
                style={[styles.statusPillText, { color: theme.textSecondary }]}
              >
                {TOOLS.length}+ tools · Free forever · Official data
              </Text>
            </View>

            <Text style={[styles.heroHeadline, { color: theme.textPrimary }]}>
              The tools <Text style={{ color: theme.gold }}>every Kenyan</Text>{" "}
              needs, in one place
            </Text>

            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              Calculate your net salary, explore CBC curriculum, decode number
              plates, check M-Pesa fees — all powered by official Kenyan
              government data. Zero sign-ups, zero cost.
            </Text>

            <View style={styles.heroButtons}>
              <View style={styles.btnFilledWrap}>
                <Pressable
                  android_ripple={androidRipple("rgba(0,0,0,0.18)")}
                  onPress={() => router.push("/(tabs)/tools")}
                  style={[styles.btnFilled, { backgroundColor: theme.gold }]}
                >
                  <Ionicons name="apps" size={16} color={theme.kenyaBlack} />
                  <Text style={styles.btnFilledText}>Explore All Tools</Text>
                </Pressable>
              </View>

              <View
                style={[
                  styles.btnTonalWrap,
                  {
                    backgroundColor: theme.surfaceContainerHigh,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() =>
                    router.push({
                      pathname: "/tools/[slug]",
                      params: { slug: "paye-calculator" },
                    })
                  }
                  style={styles.btnTonal}
                >
                  <Ionicons name="calculator" size={16} color={theme.gold} />
                  <Text
                    style={[styles.btnTonalText, { color: theme.textPrimary }]}
                  >
                    Try PAYE Calculator
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Horizontal Scrolling Pill Bar for Quick Actions */}
        <ExpandablePillRow contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 16,
            marginBottom: 8,
          }}>
          {[
            {
              slug: "paye-calculator",
              label: "PAYE Salary",
              icon: "calculator" as const,
            },
            {
              slug: "mpesa-fee-calculator",
              label: "M-Pesa Fees",
              icon: "phone-portrait" as const,
            },
            {
              slug: "kplc-token-calculator",
              label: "KPLC Tokens",
              icon: "flash" as const,
            },
            {
              slug: "learn",
              label: "Language Courses",
              icon: "chatbubbles" as const,
            },
            {
              slug: "kenyan-translator",
              label: "Translator",
              icon: "language" as const,
            },
            {
              slug: "number-plate-decoder",
              label: "Number Plates",
              icon: "car" as const,
            },
          ].map((action) => (
            <Pressable
              key={action.slug}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() =>
                router.push({
                  pathname: "/tools/[slug]",
                  params: { slug: action.slug },
                })
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 999,
                borderWidth: 1,
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              }}
            >
              <Ionicons name={action.icon} size={14} color={theme.gold} />
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 12.5,
                  color: theme.textPrimary,
                }}
              >
                {action.label}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>

        {/* Pinned Tools Section (mirrors web PinnedToolsHomeSection) */}
        {pinnedTools.length > 0 && (
          <>
            <View style={styles.sectionHeader}>
              <View>
                <Text style={[styles.sectionOverline, { color: theme.gold }]}>
                  YOUR FAVORITES
                </Text>
                <Text
                  style={[styles.sectionTitle, { color: theme.textPrimary }]}
                >
                  Pinned Tools ({pinnedTools.length})
                </Text>
              </View>
              <Pressable
                android_ripple={androidRipple(theme.rippleColor, true)}
                onPress={() => router.push("/(tabs)/saved")}
                style={styles.seeAllBtn}
              >
                <Text style={[styles.seeAllText, { color: theme.gold }]}>
                  Manage
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.gold} />
              </Pressable>
            </View>

            <View style={styles.toolList}>
              {pinnedTools.slice(0, 4).map((t) => (
                <ToolCard key={`home-pinned-${t.slug}`} tool={t} />
              ))}
            </View>
          </>
        )}

        {/* Popular Tools (mirrors web PopularToolsSection) */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              MOST USED
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Featured Kenyan Tools
            </Text>
          </View>
          <Pressable
            android_ripple={androidRipple(theme.rippleColor, true)}
            onPress={() => router.push("/(tabs)/tools")}
            style={styles.seeAllBtn}
          >
            <Text style={[styles.seeAllText, { color: theme.gold }]}>
              See all ({TOOLS.length})
            </Text>
            <Ionicons name="arrow-forward" size={14} color={theme.gold} />
          </Pressable>
        </View>

        <View style={styles.toolList}>
          {popular.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </View>

        {/* Explore Hubs */}
        <View style={[styles.sectionHeader, { marginTop: 22 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              PUBLIC DIRECTORIES
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Transit & Devolved Counties
            </Text>
          </View>
        </View>

        <View style={styles.hubsRow}>
          <View
            style={[
              styles.hubCardWrap,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Pressable
              android_ripple={androidRipple(theme.rippleColor)}
              style={styles.hubCard}
              onPress={() => router.push("/(tabs)/matatu")}
            >
              <View
                style={[
                  styles.hubIconBox,
                  { backgroundColor: theme.primaryContainer },
                ]}
              >
                <Ionicons name="bus" size={24} color={theme.gold} />
              </View>
              <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
                Matatu Routes
              </Text>
              <Text style={[styles.hubDesc, { color: theme.textSecondary }]}>
                100+ routes, stages & peak/off-peak fares
              </Text>
              <View style={styles.hubLink}>
                <Text style={[styles.hubLinkText, { color: theme.gold }]}>
                  Open Transit
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.gold} />
              </View>
            </Pressable>
          </View>

          <View
            style={[
              styles.hubCardWrap,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Pressable
              android_ripple={androidRipple(theme.rippleColor)}
              style={styles.hubCard}
              onPress={() => router.push("/(tabs)/county")}
            >
              <View
                style={[
                  styles.hubIconBox,
                  { backgroundColor: "rgba(26, 139, 209, 0.16)" },
                ]}
              >
                <Ionicons name="map" size={24} color={theme.sky} />
              </View>
              <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
                47 Counties
              </Text>
              <Text style={[styles.hubDesc, { color: theme.textSecondary }]}>
                Governors, capitals, budgets & sub-counties
              </Text>
              <View style={styles.hubLink}>
                <Text style={[styles.hubLinkText, { color: theme.sky }]}>
                  Explore Map
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.sky} />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Categories */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              BROWSE BY TOPIC
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              10 Tool Categories
            </Text>
          </View>
        </View>

        <View style={styles.categoriesGrid}>
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            const catColor = categoryColorMap[cat.id] || theme.gold;

            return (
              <View
                key={cat.id}
                style={[
                  styles.categoryCardWrap,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/tools",
                      params: { category: cat.id },
                    })
                  }
                  style={styles.categoryCard}
                >
                  <View style={styles.categoryCardTop}>
                    <View
                      style={[
                        styles.catIconWrap,
                        {
                          backgroundColor: `${catColor}18`,
                          borderColor: `${catColor}35`,
                        },
                      ]}
                    >
                      <DynamicIcon emoji={cat.icon} size={20} color={catColor} />
                    </View>
                    <View
                      style={[
                        styles.catBadge,
                        {
                          backgroundColor: theme.surfaceContainerHigh,
                        },
                      ]}
                    >
                      <Text style={[styles.catBadgeText, { color: catColor }]}>
                        {count}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.catTitle, { color: theme.textPrimary }]}>
                    {cat.name}
                  </Text>
                  <Text
                    style={[styles.catDescription, { color: theme.textMuted }]}
                    
                  >
                    {cat.description}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>

        {/* KenyaHub Guides & Blog Articles (synced from web STATIC_BLOG_POSTS) */}
        <View style={[styles.sectionHeader, { marginTop: 26 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              KENYAHUB EDITORIAL
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Guides & Articles ({sortedPosts.length})
            </Text>
          </View>
        </View>

        <ExpandablePillRow contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 8,
            marginBottom: 14,
          }}>
          {blogTags.map((tag) => {
            const active = selectedBlogTag === tag;
            return (
              <Pressable
                key={tag}
                onPress={() => setSelectedBlogTag(tag)}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Outfit_700Bold",
                    color: active
                      ? theme.onPrimaryContainer
                      : theme.textSecondary,
                  }}
                >
                  {tag}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        <View style={styles.toolList}>
          {sortedPosts.map((post) => (
            <View
              key={post.slug}
              style={[
                styles.toolCardWrap,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => setSelectedPost(post)}
                style={styles.toolCard}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  {(post.tags || []).slice(0, 2).map((t) => (
                    <View
                      key={t}
                      style={{
                        backgroundColor: `${theme.gold}1A`,
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "Outfit_700Bold",
                          color: theme.gold,
                        }}
                      >
                        {t}
                      </Text>
                    </View>
                  ))}
                  <Text style={{ fontSize: 11, color: theme.textMuted }}>
                    {post.readTime} min read ·{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Text>
                </View>
                <Text
                  style={[styles.toolTitle, { color: theme.textPrimary }]}
                >
                  {post.title}
                </Text>
                <Text
                  style={[styles.toolDesc, { color: theme.textSecondary }]}
                  
                >
                  {post.excerpt}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Outfit_700Bold",
                      color: theme.gold,
                    }}
                  >
                    Read Full Guide
                  </Text>
                  <Ionicons name="arrow-forward" size={13} color={theme.gold} />
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Full-Screen Blog Guide Reader Modal */}
      <Modal
        visible={!!selectedPost}
        animationType="slide"
        onRequestClose={() => setSelectedPost(null)}
      >
        <SafeAreaView
          style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
        >
          <KenyaStripe />
          <AndroidTopAppBar
            title={selectedPost?.title || "Guide"}
            subtitle={
              selectedPost
                ? `${selectedPost.author} · ${selectedPost.readTime} min read`
                : ""
            }
            onBack={() => setSelectedPost(null)}
          />
          {selectedPost && (
            <ScrollView
              contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={[
                  styles.heroCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                    marginBottom: 16,
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  {(selectedPost.tags || []).map((t) => (
                    <View
                      key={t}
                      style={{
                        backgroundColor: `${theme.gold}20`,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "Outfit_700Bold",
                          color: theme.gold,
                        }}
                      >
                        {t}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text
                  style={{
                    fontFamily: "Outfit_800ExtraBold",
                    fontSize: 20,
                    color: theme.textPrimary,
                    lineHeight: 26,
                  }}
                >
                  {selectedPost.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: theme.textSecondary,
                    marginTop: 6,
                    lineHeight: 19,
                  }}
                >
                  {selectedPost.excerpt}
                </Text>
              </View>

              <View
                style={[
                  styles.heroCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                    gap: 10,
                  },
                ]}
              >
                <BlogMarkdownContent content={selectedPost.content} theme={theme} />
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  offlineChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
  },
  offlineChipText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  scrollContent: {
    paddingBottom: 36,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  m3SearchBar: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  m3SearchPlaceholder: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  m3SearchBadge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 12,
  },
  m3SearchBadgeText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  heroWrap: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  heroCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
  },
  pulsingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#006B3F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  pulsingDotInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#2FA463",
  },
  statusPillText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
  },
  heroHeadline: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 25,
    lineHeight: 32,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 18,
  },
  heroButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  btnFilledWrap: {
    borderRadius: 20,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  btnFilled: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 20,
  },
  btnFilledText: {
    fontFamily: "Outfit_700Bold",
    color: "#1A1108",
    fontSize: 13,
  },
  btnTonalWrap: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  btnTonal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  btnTonalText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
  },
  quickChipsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 4,
    gap: 8,
  },
  assistChipWrap: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  assistChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  assistChipText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionOverline: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  sectionTitle: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 19,
  },
  seeAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 13,
    fontFamily: "Outfit_700Bold",
  },
  toolList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  toolCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  toolCard: {
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolIconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trailingIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryPillWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 2,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryPillText: {
    fontSize: 9,
    fontFamily: "Outfit_700Bold",
    letterSpacing: 0.6,
  },
  toolTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  toolDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 8,
  },
  cardFooterRow: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  sourceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  sourceText: {
    fontSize: 11,
  },
  hubsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
  },
  hubCardWrap: {
    flex: 1,
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  hubCard: {
    padding: 16,
  },
  hubIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  hubTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    marginBottom: 3,
  },
  hubDesc: {
    fontSize: 11.5,
    lineHeight: 16,
    marginBottom: 12,
  },
  hubLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  hubLinkText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 10,
  },
  categoryCardWrap: {
    flexGrow: 1,
    flexBasis: "45%",
    minWidth: 145,
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  categoryCard: {
    padding: 14,
  },
  categoryCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  catIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  catBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  catBadgeText: {
    fontSize: 10,
    fontFamily: "Outfit_700Bold",
  },
  catTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    marginBottom: 2,
  },
  catDescription: {
    fontSize: 10.5,
    lineHeight: 14.5,
  },
});
