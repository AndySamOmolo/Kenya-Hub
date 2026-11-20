import React, { useCallback, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Linking,
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
  pressableStyle,
  triggerHaptic,
  parseSavedTools,
  serializeSavedTools,
} from "../../src/theme";
import {
  TOOLS,
  getPopularTools,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function SavedToolCard({
  tool,
  onRemove,
}: {
  tool: (typeof TOOLS)[0];
  onRemove: () => void;
}) {
  const router = useRouter();
  const { theme, isDark } = useTheme();
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
        accessibilityRole="button"
        accessibilityLabel={`Open ${tool.shortTitle}`}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        style={pressableStyle(styles.card)}
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
              {(
                getCategoryInfo(tool.category)?.name || tool.category
              ).toUpperCase()}
            </Text>
          </View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            {tool.shortTitle}
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {tool.description}
          </Text>
        </View>
        <Pressable
          android_ripple={androidRipple(theme.rippleColor, true)}
          accessibilityRole="button"
          accessibilityLabel={`Unpin ${tool.shortTitle}`}
          onPress={(e) => {
            e.stopPropagation();
            triggerHaptic(12);
            onRemove();
          }}
          style={pressableStyle([
            styles.removeBtn,
            { backgroundColor: theme.primaryContainer },
          ])}
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
  const { theme, isDark } = useTheme();
  const [saved, setSaved] = useState<string[]>([]);
  const popular = getPopularTools(4);

  const loadSaved = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("kh-saved-tools");
      const parsed = parseSavedTools(value);
      setSaved(parsed);
      // Migrate legacy comma-separated string to JSON array if needed
      if (value && !value.trim().startsWith("[")) {
        await AsyncStorage.setItem("kh-saved-tools", serializeSavedTools(parsed));
      }
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
    await AsyncStorage.setItem("kh-saved-tools", serializeSavedTools(updated));
  };

  const handleClearAll = () => {
    triggerHaptic(12);
    Alert.alert(
      "Clear Pinned Tools?",
      "Remove all saved tool shortcuts from your device?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear All",
          style: "destructive",
          onPress: async () => {
            setSaved([]);
            await AsyncStorage.removeItem("kh-saved-tools");
          },
        },
      ]
    );
  };

  const handleClearAllAppData = () => {
    triggerHaptic(12);
    Alert.alert(
      "Clear All App Data?",
      "This will permanently erase all saved tools, language course progress, streaks, and local preferences from your device.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear All App Data",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              setSaved([]);
            } catch {}
          },
        },
      ]
    );
  };

  const tools = saved
    .map((slug) => TOOLS.find((tool) => tool.slug === slug))
    .filter(Boolean) as (typeof TOOLS)[number][];

  return (
    <SafeAreaView
      key={isDark ? "dark" : "light"}
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title="Pinned Tools"
        subtitle="Saved offline for 1-tap access"
        rightAction={
          tools.length > 0 ? (
            <Pressable
              onPress={handleClearAll}
              accessibilityRole="button"
              accessibilityLabel="Clear all pinned tools"
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle([
                styles.clearBtn,
                { borderColor: `${theme.kenyaRedLight}45` },
              ])}
            >
              <Text style={styles.clearBtnText}>Clear</Text>
            </Pressable>
          ) : undefined
        }
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
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
              <Ionicons name="bookmark-outline" size={34} color={theme.gold} />
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
                    accessibilityRole="button"
                    accessibilityLabel={`Open ${item.shortTitle}`}
                    style={pressableStyle(styles.suggestCard)}
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
                        style={[styles.suggestDesc, { color: theme.textMuted }]}
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

        {/* Privacy Policy & Local Data Controls (Google Play & Kenya DPA 2019 - P11-05) */}
        <View style={styles.privacySection}>
          <Text style={[styles.suggestHeading, { color: theme.gold, marginTop: 28 }]}>
            PRIVACY & LOCAL DATA (KENYA DPA 2019)
          </Text>
          <View style={styles.suggestList}>
            <View
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
                accessibilityRole="link"
                accessibilityLabel="Privacy Policy & Terms"
                style={pressableStyle(styles.suggestCard)}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/privacy/").catch(() => {});
                }}
              >
                <Ionicons name="shield-checkmark-outline" size={20} color={theme.gold} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Privacy Policy & Terms
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Kenya Data Protection Act 2019 compliance & terms of service
                  </Text>
                </View>
                <Ionicons name="open-outline" size={16} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: `${theme.kenyaRedLight}45`,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="button"
                accessibilityLabel="Clear All App Data"
                style={pressableStyle(styles.suggestCard)}
                onPress={handleClearAllAppData}
              >
                <Ionicons name="trash-outline" size={20} color={theme.kenyaRedLight} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.kenyaRedLight }]}>
                    Clear All App Data
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Erase all offline saved tools, language progress, and preferences
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={theme.kenyaRedLight} />
              </Pressable>
            </View>
          </View>
        </View>
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
    padding: 14,
    paddingBottom: 28,
  },
  countText: {
    fontFamily: "Inter_500Medium",
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
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
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
    fontFamily: "Inter_400Regular",
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
    fontFamily: "Inter_400Regular",
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
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    marginTop: 1,
  },
  privacySection: {
    width: "100%",
  },
});
