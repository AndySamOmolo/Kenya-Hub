import React, { useCallback, useRef, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe, categoryColorMap } from "../../src/theme";
import { TOOLS, getPopularTools } from "../../src/shared/lib/tools-registry";

function SavedToolCard({
  tool,
  onRemove,
}: {
  tool: (typeof TOOLS)[0];
  onRemove: () => void;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  const categoryColor = categoryColorMap[tool.category] || theme.gold;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
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
        <View style={[styles.cardIconWrap, { backgroundColor: theme.bgSecondary, borderColor: theme.border }]}>
          <Text style={styles.icon}>{tool.icon}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.categoryPillWrap}>
            <View
              style={[styles.categoryDot, { backgroundColor: categoryColor }]}
            />
            <Text style={[styles.categoryPillText, { color: categoryColor }]}>
              {tool.category.replace("-", " & ").toUpperCase()}
            </Text>
          </View>
          <Text style={[styles.title, { color: theme.textPrimary }]} numberOfLines={1}>
            {tool.shortTitle}
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]} numberOfLines={1}>
            {tool.description}
          </Text>
        </View>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={styles.removeBtn}
          hitSlop={8}
        >
          <Ionicons name="bookmark" size={20} color={theme.gold} />
        </Pressable>
      </Pressable>
    </Animated.View>
  );
}

export default function SavedScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();
  const [saved, setSaved] = useState<string[]>([]);
  const popular = getPopularTools(4);

  const loadSaved = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("kh-saved-tools");
      setSaved(value?.split(",").filter(Boolean) ?? []);
    } catch {
      setSaved([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadSaved();
    }, [loadSaved])
  );

  const handleRemove = async (slug: string) => {
    const updated = saved.filter((s) => s !== slug);
    setSaved(updated);
    await AsyncStorage.setItem("kh-saved-tools", updated.join(","));
  };

  const handleClearAll = async () => {
    setSaved([]);
    await AsyncStorage.removeItem("kh-saved-tools");
  };

  const tools = saved
    .map((slug) => TOOLS.find((tool) => tool.slug === slug))
    .filter(Boolean) as (typeof TOOLS)[number][];

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <View style={styles.headerTitleRow}>
          <View style={[styles.iconBox, { backgroundColor: `${theme.gold}20`, borderColor: `${theme.gold}40` }]}>
            <Ionicons name="bookmark" size={22} color={theme.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.heading, { color: theme.textPrimary }]}>Pinned Tools</Text>
            <Text style={[styles.headerSub, { color: theme.textSecondary }]}>
              Saved offline for quick 1-tap access
            </Text>
          </View>
          <Pressable
            onPress={toggleTheme}
            style={[styles.themeBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
            hitSlop={8}
          >
            <Ionicons name={isDark ? "sunny-outline" : "moon-outline"} size={16} color={theme.gold} />
          </Pressable>
          {tools.length > 0 && (
            <Pressable onPress={handleClearAll} style={[styles.clearBtn, { borderColor: theme.border }]}>
              <Text style={styles.clearBtnText}>Clear all</Text>
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {tools.length > 0 ? (
          <>
            <Text style={[styles.countText, { color: theme.textMuted }]}>
              {tools.length} pinned tool{tools.length !== 1 ? "s" : ""}
            </Text>
            <View style={styles.list}>
              {tools.map((tool) => (
                <SavedToolCard
                  key={tool.slug}
                  tool={tool}
                  onRemove={() => handleRemove(tool.slug)}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={styles.empty}>
            <View style={[styles.emptyIconWrap, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <Ionicons
                name="bookmark-outline"
                size={36}
                color={theme.textMuted}
              />
            </View>
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No pinned tools yet</Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Tap the bookmark icon on any calculator or guide to pin it here for offline access.
            </Text>

            {/* Quick suggestions */}
            <Text style={[styles.suggestHeading, { color: theme.gold }]}>POPULAR SUGGESTIONS</Text>
            <View style={styles.suggestList}>
              {popular.map((item) => (
                <Pressable
                  key={item.slug}
                  style={[styles.suggestCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
                  onPress={() =>
                    router.push({
                      pathname: "/tools/[slug]",
                      params: { slug: item.slug },
                    })
                  }
                >
                  <Text style={styles.suggestEmoji}>{item.icon}</Text>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>{item.shortTitle}</Text>
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]} numberOfLines={1}>
                      {item.description}
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
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
    paddingVertical: 12,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  themeBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "900",
  },
  headerSub: {
    fontSize: 12,
    marginTop: 2,
  },
  clearBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  clearBtnText: {
    color: "#E05A5A",
    fontSize: 12,
    fontWeight: "700",
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  countText: {
    fontSize: 12,
    marginBottom: 12,
  },
  list: {
    gap: 10,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
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
  cardBody: {
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
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15,
    fontFamily: "Outfit_700Bold",
    fontWeight: "700",
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
  removeBtn: {
    padding: 8,
    marginLeft: 6,
  },
  empty: {
    alignItems: "center",
    paddingTop: 30,
  },
  emptyIconWrap: {
    width: 68,
    height: 68,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 17,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  emptySubtitle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 18,
    maxWidth: 260,
  },
  suggestHeading: {
    fontSize: 11,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 32,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  suggestList: {
    width: "100%",
    gap: 8,
  },
  suggestCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  suggestEmoji: {
    fontSize: 20,
  },
  suggestTitle: {
    fontSize: 13,
    fontFamily: "Outfit_700Bold",
    fontWeight: "700",
  },
  suggestDesc: {
    fontSize: 11,
    marginTop: 1,
  },
});
