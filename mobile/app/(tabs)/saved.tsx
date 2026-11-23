import React, { useCallback, useMemo, useState } from "react";
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
  getThemedCardStyle,
  getThemedIconBadgeStyle,
} from "../../src/theme";
import type { ThemeMetrics } from "../../src/lib/theme-engine";
import {
  TOOLS,
  getPopularTools,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";
import { showAdPrivacyOptionsForm } from "../../src/lib/mobile-ads";

function createSavedStyles(
  metrics?: ThemeMetrics,
  fonts?: { heading: string; body: string; bold: string }
) {
  const cardRadiusPx = metrics?.cardRadiusPx ?? 14;
  const radiusRatio = cardRadiusPx / 14;
  const r = (base: number) => Math.round(base * radiusRatio);
  const bw = metrics?.borderWidthPx ?? 1;
  const spacingScale = metrics?.spacingScale ?? 1;
  const sp = (v: number) => Number((v * spacingScale).toFixed(1));
  const fontScale = metrics?.fontScale ?? 1;
  const lineHeightScale = metrics?.lineHeightScale ?? 1;
  const fs = (v: number) => Number((v * fontScale).toFixed(1));
  const lh = (v: number) => Math.round(v * fontScale * lineHeightScale);
  const isDefaultFonts =
    !fonts ||
    (fonts.heading === "Outfit_700Bold" &&
      fonts.body === "Inter_400Regular" &&
      fonts.bold === "Inter_700Bold");
  const hf = (fallback = "Outfit_700Bold") =>
    isDefaultFonts ? fallback : fonts.heading;
  const bf = (fallback = "Inter_400Regular") =>
    isDefaultFonts ? fallback : fonts.body;

  return StyleSheet.create({
    screen: {
      flex: 1,
    },
    clearBtn: {
      paddingHorizontal: sp(10),
      paddingVertical: sp(5),
      borderRadius: r(14),
      borderWidth: bw,
    },
    clearBtnText: {
      fontSize: fs(12),
      fontFamily: hf("Outfit_700Bold"),
    },
    content: {
      padding: sp(14),
      paddingBottom: sp(28),
    },
    countText: {
      fontFamily: bf("Inter_500Medium"),
      fontSize: fs(12),
      marginBottom: sp(12),
    },
    list: {
      gap: sp(10),
    },
    cardWrap: {
      borderRadius: r(16),
      borderWidth: bw,
    },
    card: {
      padding: sp(12),
      flexDirection: "row",
      alignItems: "center",
    },
    cardIconWrap: {
      width: 42,
      height: 42,
      borderRadius: r(12),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
      marginRight: sp(12),
    },
    cardBody: {
      flex: 1,
    },
    categoryPillWrap: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      marginBottom: 2,
    },
    categoryDot: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
    },
    categoryPillText: {
      fontSize: fs(9),
      fontFamily: hf("Outfit_700Bold"),
      letterSpacing: 0.5,
    },
    title: {
      fontSize: fs(15.5),
      fontFamily: hf("Outfit_700Bold"),
    },
    description: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12),
      marginTop: 2,
    },
    removeBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: sp(8),
    },
    empty: {
      alignItems: "center",
      paddingTop: sp(28),
    },
    emptyIconWrap: {
      width: 68,
      height: 68,
      borderRadius: r(22),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    emptyTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(18),
      marginTop: sp(14),
    },
    emptySubtitle: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(13),
      lineHeight: lh(19),
      textAlign: "center",
      marginTop: sp(6),
      maxWidth: 280,
    },
    suggestHeading: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11),
      letterSpacing: 1.2,
      marginTop: sp(28),
      marginBottom: sp(10),
      alignSelf: "flex-start",
    },
    suggestList: {
      width: "100%",
      gap: sp(8),
    },
    suggestCardWrap: {
      borderRadius: r(16),
      borderWidth: bw,
    },
    suggestCard: {
      flexDirection: "row",
      alignItems: "center",
      padding: sp(14),
    },
    suggestTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(14),
    },
    suggestDesc: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11.5),
      marginTop: 1,
    },
    privacySection: {
      width: "100%",
    },
  });
}

const SavedToolCard = React.memo(function SavedToolCard({
  tool,
  onRemove,
  styles,
}: {
  tool: (typeof TOOLS)[0];
  onRemove: (slug: string) => void;
  styles: ReturnType<typeof createSavedStyles>;
}) {
  const router = useRouter();
  const { theme, themeConfig, themeMetrics } = useTheme();
  const themedCardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const iconBadge = useMemo(
    () => getThemedIconBadgeStyle(theme, themeConfig, categoryColor, 42),
    [theme, themeConfig, categoryColor]
  );

  return (
    <View
      style={[
        styles.cardWrap,
        themedCardStyle,
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
        <View style={[iconBadge.container, { marginRight: Math.round(12 * (themeMetrics?.spacingScale ?? 1)) }]}>
          <DynamicIcon emoji={tool.icon} size={Math.round(22 * (themeMetrics?.iconScale ?? 1))} color={iconBadge.iconColor} />
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
            onRemove(tool.slug);
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
});

export default function SavedScreen() {
  const router = useRouter();
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts, themeKey } = useTheme();
  const styles = useMemo(
    () => createSavedStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const themedCardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(14 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const headingTransform = themeConfig.headingTransform || "none";
  const [saved, setSaved] = useState<string[]>([]);
  const popular = useMemo(() => getPopularTools(4), []);

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

  const handleRemove = useCallback((slug: string) => {
    setSaved((prev) => {
      const updated = prev.filter((s) => s !== slug);
      AsyncStorage.setItem("kh-saved-tools", serializeSavedTools(updated)).catch(() => {});
      return updated;
    });
  }, []);

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

  const handleManageAdPrivacy = async () => {
    triggerHaptic(8);
    try {
      const shown = await showAdPrivacyOptionsForm();
      if (shown) return;
    } catch {
      // Fall back to privacy portal notice below
    }
    Alert.alert(
      "Ad & Privacy Preferences",
      "KenyaHub stores your saved tools and language progress locally on your device. You can review our full Kenya DPA 2019 privacy policy online.",
      [
        { text: "Close", style: "cancel" },
        {
          text: "Open Privacy Policy",
          onPress: () => Linking.openURL("https://kenyahub.me/privacy/").catch(() => {}),
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

  const tools = useMemo(
    () =>
      saved
        .map((slug) => TOOLS.find((tool) => tool.slug === slug))
        .filter(Boolean) as (typeof TOOLS)[number][],
    [saved]
  );

  return (
    <SafeAreaView
      key={themeKey}
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
              <Text style={[styles.clearBtnText, { color: theme.kenyaRedLight }]}>Clear</Text>
            </Pressable>
          ) : undefined
        }
      />

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: screenPadPx },
          floatClearance > 0 ? { paddingBottom: Math.round(28 * (themeMetrics?.spacingScale ?? 1)) + floatClearance } : null,
        ]}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig.verticalScrollbarStyle === "always-visible"}
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
                  styles={styles}
                  onRemove={handleRemove}
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
            <Text style={[styles.emptyTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
              No pinned tools yet
            </Text>
            <Text
              style={[styles.emptySubtitle, { color: theme.textSecondary }]}
            >
              Tap the bookmark icon on any calculator or guide to pin it here
              for instant offline access.
            </Text>

            <Text style={[styles.suggestHeading, { color: theme.gold, textTransform: headingTransform }]}>
              POPULAR SUGGESTIONS
            </Text>
            <View style={styles.suggestList}>
              {popular.map((item) => (
                <View
                  key={item.slug}
                  style={[
                    styles.suggestCardWrap,
                    themedCardStyle,
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
          <Text style={[styles.suggestHeading, { color: theme.gold, marginTop: 28, textTransform: headingTransform }]}>
            PRIVACY & LOCAL DATA (KENYA DPA 2019)
          </Text>
          <View style={styles.suggestList}>
            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Privacy Policy"
                style={pressableStyle(styles.suggestCard)}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/privacy/").catch(() => {});
                }}
              >
                <Ionicons name="shield-checkmark-outline" size={20} color={theme.kenyaGreenLight} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Privacy Policy
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Kenya Data Protection Act 2019 & local-only data practices
                  </Text>
                </View>
                <Ionicons name="open-outline" size={16} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Terms of Service"
                style={pressableStyle(styles.suggestCard)}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/terms/").catch(() => {});
                }}
              >
                <Ionicons name="document-text-outline" size={20} color={theme.gold} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Terms of Service
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Independent utility disclaimer & usage terms
                  </Text>
                </View>
                <Ionicons name="open-outline" size={16} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="button"
                accessibilityLabel="Manage Ad Privacy"
                style={pressableStyle(styles.suggestCard)}
                onPress={handleManageAdPrivacy}
              >
                <Ionicons name="options-outline" size={20} color={theme.sky} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Manage Ad Privacy
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Review or update your Google AdMob consent preferences
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Contact & Support"
                style={pressableStyle(styles.suggestCard)}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/contact/").catch(() => {});
                }}
              >
                <Ionicons name="mail-outline" size={20} color={theme.kenyaGreenLight} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Contact & Support
                  </Text>
                  <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                    Report statutory rate updates, bugs, or data inquiries
                  </Text>
                </View>
                <Ionicons name="open-outline" size={16} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
                { borderColor: `${theme.kenyaRedLight}45` },
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
