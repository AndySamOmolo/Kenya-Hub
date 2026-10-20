import React, { useCallback, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
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
  KenyaStripe,
  categoryColorMap,
  AndroidTopAppBar,
  androidRipple,
} from "../../src/theme";
import { TOOLS, getPopularTools } from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function SavedToolCard({
  tool,
  onRemove,
}: {
  tool: (typeof TOOLS)[0];
  onRemove: () => void;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[tool.category] || theme.gold;

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
            params: { slug: tool.slug },
          })
        }
        style={styles.card}
      >
        <View
          style={[
            styles.cardIconWrap,
            {
              backgroundColor: `${categoryColor}1A`,
              borderColor: `${categoryColor}38`,
            },
          ]}
        >
          <DynamicIcon emoji={tool.icon} size={22} color={categoryColor} />
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
          <Text
            style={[styles.title, { color: theme.textPrimary }]}
            numberOfLines={1}
          >
            {tool.shortTitle}
          </Text>
          <Text
            style={[styles.description, { color: theme.textSecondary }]}
            numberOfLines={1}
          >
            {tool.description}
          </Text>
        </View>
        <Pressable
          android_ripple={androidRipple(theme.rippleColor, true)}
          onPress={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={[
            styles.removeBtn,
            { backgroundColor: theme.primaryContainer },
          ]}
          hitSlop={8}
        >
          <Ionicons name="bookmark" size={18} color={theme.gold} />
        </Pressable>
      </Pressable>
    </View>
  );
}

export default function SavedScreen() {
  const router = useRouter();
  const { theme } = useTheme();
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
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="Pinned Tools"
        subtitle="Saved offline for 1-tap access"
        rightAction={
          tools.length > 0 ? (
            <Pressable
              onPress={handleClearAll}
              style={[
                styles.clearBtn,
                { borderColor: `${theme.kenyaRedLight}45` },
              ]}
            >
              <Text style={styles.clearBtnText}>Clear</Text>
            </Pressable>
          ) : undefined
        }
      />

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
            <View
              style={[
                styles.emptyIconWrap,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons
                name="bookmark-outline"
                size={34}
                color={theme.gold}
              />
            </View>
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No pinned tools yet
            </Text>
            <Text
              style={[styles.emptySubtitle, { color: theme.textSecondary }]}
            >
              Tap the bookmark icon on any calculator or guide to pin it here
              for instant offline access.
            </Text>

            <Text style={[styles.suggestHeading, { color: theme.gold }]}>
              POPULAR SUGGESTIONS
            </Text>
            <View style={styles.suggestList}>
              {popular.map((item) => (
                <View
                  key={item.slug}
                  style={[
                    styles.suggestCardWrap,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={styles.suggestCard}
                    onPress={() =>
                      router.push({
                        pathname: "/tools/[slug]",
                        params: { slug: item.slug },
                      })
                    }
                  >
                    <DynamicIcon
                      emoji={item.icon}
                      size={20}
                      color={theme.gold}
                    />
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text
                        style={[
                          styles.suggestTitle,
                          { color: theme.textPrimary },
                        ]}
                      >
                        {item.shortTitle}
                      </Text>
                      <Text
                        style={[
                          styles.suggestDesc,
                          { color: theme.textMuted },
                        ]}
                        numberOfLines={1}
                      >
                        {item.description}
                      </Text>
                    </View>
                    <Ionicons
                      name="arrow-forward"
                      size={16}
                      color={theme.textMuted}
                    />
                  </Pressable>
                </View>
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
  clearBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
  },
  clearBtnText: {
    color: "#E05A5A",
    fontSize: 12,
    fontFamily: "Outfit_700Bold",
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
  cardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  card: {
    padding: 15,
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
    marginRight: 12,
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
    fontFamily: "Outfit_700Bold",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15.5,
    fontFamily: "Outfit_700Bold",
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
  removeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  empty: {
    alignItems: "center",
    paddingTop: 28,
  },
  emptyIconWrap: {
    width: 68,
    height: 68,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 18,
    marginTop: 14,
  },
  emptySubtitle: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 6,
    maxWidth: 280,
  },
  suggestHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    letterSpacing: 1.2,
    marginTop: 28,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  suggestList: {
    width: "100%",
    gap: 8,
  },
  suggestCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  suggestCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  suggestTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
  suggestDesc: {
    fontSize: 11.5,
    marginTop: 1,
  },
});
