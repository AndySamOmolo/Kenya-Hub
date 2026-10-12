import React, { useMemo, useState, useRef } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  Animated,
  FlatList,
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
} from "../../src/theme";
import {
  TOOLS,
  TOOL_CATEGORIES,
} from "../../src/shared/lib/tools-registry";

function ToolItem({ item }: { item: (typeof TOOLS)[0] }) {
  const router = useRouter();
  const { theme } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  const categoryColor = categoryColorMap[item.category] || theme.gold;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: item.slug },
          })
        }
        onPressIn={() =>
          Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start()
        }
        onPressOut={() =>
          Animated.spring(scale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
          }).start()
        }
        style={[
          styles.card,
          {
            backgroundColor: theme.bgCard,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.cardIconWrap,
              {
                backgroundColor: theme.bgSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.icon}>{item.icon}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.categoryPillWrap}>
              <View
                style={[
                  styles.categoryDot,
                  { backgroundColor: categoryColor },
                ]}
              />
              <Text
                style={[styles.categoryPillText, { color: categoryColor }]}
              >
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
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.textMuted}
          />
        </View>

        <Text
          style={[styles.description, { color: theme.textSecondary }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>

        <View
          style={[
            styles.sourceBadge,
            { borderTopColor: theme.border },
          ]}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={12}
            color={theme.textMuted}
          />
          <Text
            style={[styles.source, { color: theme.textMuted }]}
            numberOfLines={1}
          >
            {item.dataSource}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function ToolsScreen() {
  const { theme } = useTheme();
  const params = useLocalSearchParams<{ category?: string }>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.category ?? "all");

  const filtered = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesCategory =
        category === "all" || tool.category === category;
      const haystack =
        `${tool.title} ${tool.shortTitle} ${tool.description} ${tool.keywords.join(" ")}`.toLowerCase();
      return (
        matchesCategory && haystack.includes(query.toLowerCase().trim())
      );
    });
  }, [category, query]);

  const categories = useMemo(
    () => [
      { id: "all", name: "All", icon: "🧰" },
      ...TOOL_CATEGORIES,
    ],
    []
  );

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.bgSecondary,
            borderBottomColor: theme.border,
          },
        ]}
      >
        <View style={styles.headerTitleRow}>
          <Text style={[styles.heading, { color: theme.textPrimary }]}>
            KenyaHub Tools
          </Text>
          <View
            style={[
              styles.countBadge,
              {
                backgroundColor: "rgba(200, 150, 30, 0.15)",
                borderColor: "rgba(200, 150, 30, 0.3)",
              },
            ]}
          >
            <Text style={[styles.countText, { color: theme.gold }]}>
              {filtered.length}
            </Text>
          </View>
        </View>
        <Text style={[styles.headerSub, { color: theme.textSecondary }]}>
          Calculators, educational tools & official government guides
        </Text>

        {/* Search Input */}
        <View
          style={[
            styles.searchWrap,
            {
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons
            name="search-outline"
            size={18}
            color={theme.textMuted}
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
                size={18}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Category Horizontal Filter Chips */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chipsContainer}
          renderItem={({ item }) => {
            const active = category === item.id;
            return (
              <Pressable
                onPress={() => setCategory(item.id)}
                style={[
                  styles.chip,
                  active
                    ? { backgroundColor: theme.gold }
                    : {
                        backgroundColor: theme.bgCard,
                        borderColor: theme.border,
                        borderWidth: 1,
                      },
                ]}
              >
                <Text style={styles.chipIcon}>{item.icon}</Text>
                <Text
                  style={[
                    styles.chipText,
                    active
                      ? { color: theme.kenyaBlack }
                      : { color: theme.textSecondary },
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      {/* Tools List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ToolItem item={item} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons
              name="search-outline"
              size={48}
              color={theme.textMuted}
            />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No tools match &quot;{query}&quot;
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try searching with another keyword or select &quot;All&quot; category
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
  header: {
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 22,
  },
  countBadge: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 10,
  },
  countText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
  headerSub: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
  },
  chipsContainer: {
    gap: 8,
    paddingVertical: 4,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  chipIcon: {
    fontSize: 13,
  },
  chipText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
    gap: 10,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  body: {
    flex: 1,
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
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  description: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 8,
  },
  sourceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
  },
  source: {
    fontSize: 10,
  },
  empty: {
    alignItems: "center",
    paddingVertical: 50,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
    maxWidth: 240,
  },
});
