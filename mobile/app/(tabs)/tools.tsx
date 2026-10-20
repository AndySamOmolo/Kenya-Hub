import React, { useMemo, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
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
} from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function ToolItem({ item }: { item: (typeof TOOLS)[0] }) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[item.category] || theme.gold;

  return (
    <View
      style={[
        styles.cardWrap,
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
            params: { slug: item.slug },
          })
        }
        style={styles.card}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.cardIconWrap,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}38`,
              },
            ]}
          >
            <DynamicIcon emoji={item.icon} size={22} color={categoryColor} />
          </View>
          <View style={styles.body}>
            <View style={styles.categoryPillWrap}>
              <View
                style={[styles.categoryDot, { backgroundColor: categoryColor }]}
              />
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {item.category.replace("-", " & ").toUpperCase()}
              </Text>
            </View>
            <Text
              style={[styles.title, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {item.shortTitle}
            </Text>
          </View>
          <View
            style={[
              styles.trailingCircle,
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
          style={[styles.description, { color: theme.textSecondary }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>

        <View
          style={[styles.sourceBadge, { borderTopColor: theme.outlineVariant }]}
        >
          <Ionicons
            name="shield-checkmark"
            size={13}
            color={theme.kenyaGreenLight}
          />
          <Text
            style={[styles.source, { color: theme.textMuted }]}
            numberOfLines={1}
          >
            {item.dataSource}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default function ToolsScreen() {
  const { theme } = useTheme();
  const params = useLocalSearchParams<{ category?: string }>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.category ?? "all");
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">(
    "popular"
  );

  const filtered = useMemo(() => {
    const list = TOOLS.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;
      const haystack =
        `${tool.title} ${tool.shortTitle} ${tool.description} ${tool.keywords.join(" ")}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase().trim());
    });

    return [...list].sort((a, b) => {
      const labelComparison = a.shortTitle.localeCompare(
        b.shortTitle,
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      );
      if (sortBy === "alphabetical") return labelComparison;
      if (sortBy === "category")
        return a.category.localeCompare(b.category) || labelComparison;
      return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
    });
  }, [category, query, sortBy]);

  const categories = useMemo(
    () => [{ id: "all", name: "All", icon: "🧰" }, ...TOOL_CATEGORIES],
    []
  );

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="KenyaHub Tools"
        subtitle={`${filtered.length} calculators & public guides`}
      />

      <View
        style={[
          styles.filterHeader,
          {
            backgroundColor: theme.surfaceContainerLow,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        {/* Material 3 Pill Search Bar */}
        <View
          style={[
            styles.searchWrap,
            {
              backgroundColor: theme.surfaceContainerHigh,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <Ionicons
            name="search"
            size={20}
            color={theme.gold}
            style={styles.searchIcon}
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search all 45 tools, KRA, M-Pesa, CBC..."
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
            autoCorrect={false}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={20}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Material 3 Filter Chips */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chips}
          renderItem={({ item }) => {
            const active = item.id === category;
            return (
              <View
                style={[
                  styles.chipWrap,
                  active
                    ? {
                        backgroundColor: theme.primaryContainer,
                        borderColor: theme.gold,
                      }
                    : {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: theme.outlineVariant,
                      },
                ]}
              >
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => setCategory(item.id)}
                  style={styles.chip}
                >
                  {active ? (
                    <Ionicons
                      name="checkmark"
                      size={15}
                      color={theme.onPrimaryContainer}
                    />
                  ) : (
                    <DynamicIcon
                      emoji={item.icon}
                      size={14}
                      color={theme.textSecondary}
                    />
                  )}
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: active
                          ? theme.onPrimaryContainer
                          : theme.textSecondary,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              </View>
            );
          }}
        />

        {/* Material 3 Segmented Sort Row */}
        <View style={styles.sortRow}>
          <Text style={[styles.sortLabel, { color: theme.textMuted }]}>
            SORT BY
          </Text>
          <View
            style={[
              styles.segmentedGroup,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            {(
              [
                { id: "popular", label: "Popular" },
                { id: "alphabetical", label: "A–Z" },
                { id: "category", label: "Topic" },
              ] as const
            ).map((option) => {
              const active = sortBy === option.id;
              return (
                <Pressable
                  key={option.id}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => setSortBy(option.id)}
                  style={[
                    styles.segmentBtn,
                    active && { backgroundColor: theme.primaryContainer },
                  ]}
                >
                  <Text
                    style={[
                      styles.segmentText,
                      {
                        color: active
                          ? theme.onPrimaryContainer
                          : theme.textSecondary,
                      },
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ToolItem item={item} />}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Ionicons name="search-outline" size={44} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No matching tools
            </Text>
            <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
              Try clearing your filter or searching another keyword.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  filterHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 26,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 48,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  chips: {
    paddingTop: 12,
    paddingBottom: 4,
    gap: 8,
  },
  chipWrap: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  chipText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  sortLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    letterSpacing: 1,
  },
  segmentedGroup: {
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  segmentBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  segmentText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
    gap: 10,
  },
  cardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  card: {
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trailingCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    marginLeft: 14,
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
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 8,
  },
  sourceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  source: {
    fontSize: 11,
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 48,
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    marginTop: 10,
  },
  emptySub: {
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
});
