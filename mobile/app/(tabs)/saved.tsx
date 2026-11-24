import React, { useCallback, useMemo, useRef, useState } from "react";
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
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
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
} from "../../src/theme";
import type { ThemeMetrics } from "../../src/lib/theme-engine";
import {
  TOOLS,
  getPopularTools,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import { ThemedIcon, ThemedIconBadge } from "../../src/components/ThemedIcon";
import { useAppLanguage, translateToolShortTitle } from "../../src/lib/i18n";

function toolEmojiToIonicon(emoji?: string): string {
  const clean = (emoji || "").replace(/[\uFE0F]/g, "").trim();
  switch (clean) {
    case "🛡": return "shield-checkmark-outline";
    case "🔒": return "lock-closed-outline";
    case "🌱": return "leaf-outline";
    case "🚢": return "boat-outline";
    case "🩺":
    case "🏥": return "medkit-outline";
    case "📑":
    case "📝": return "document-text-outline";
    case "🎯": return "disc-outline";
    case "📐": return "resize-outline";
    case "🗣": return "chatbubble-ellipses-outline";
    case "🌍": return "globe-outline";
    case "🧮": return "calculator-outline";
    case "📱": return "phone-portrait-outline";
    case "🏦":
    case "🏢": return "business-outline";
    case "🎓": return "school-outline";
    case "🏠": return "home-outline";
    case "📚": return "book-outline";
    case "🚗":
    case "🚘": return "car-outline";
    case "🚦": return "warning-outline";
    case "🧱": return "construct-outline";
    case "⚡": return "flash-outline";
    case "💧": return "water-outline";
    case "⚖": return "scale-outline";
    case "🔑": return "key-outline";
    case "🧹": return "brush-outline";
    case "📞": return "call-outline";
    default: return "sparkles-outline";
  }
}

import { getMobileAdsModule, showAdPrivacyOptionsForm } from "../../src/lib/mobile-ads";

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
  themedCardStyle: passedCardStyle,
}: {
  tool: (typeof TOOLS)[0];
  onRemove: (slug: string) => void;
  styles: ReturnType<typeof createSavedStyles>;
  themedCardStyle?: ReturnType<typeof getThemedCardStyle>;
}) {
  const router = useRouter();
  const { theme, themeConfig, themeMetrics } = useTheme();
  const { language } = useAppLanguage();
  const themedCardStyle = useMemo(
    () => passedCardStyle ?? getThemedCardStyle(theme, themeConfig, themeMetrics),
    [passedCardStyle, theme, themeConfig, themeMetrics]
  );
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const showCategoryBadges = themeConfig.showCategoryBadges !== false;
  const showCardDescriptions = themeConfig.showCardDescriptions !== false;

  return (
    <View
      style={[
        styles.cardWrap,
        themedCardStyle,
        isFrameless && {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Open ${translateToolShortTitle(tool.slug, tool.shortTitle, language)}`}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        style={pressableStyle([
          styles.card,
          isFrameless && { paddingHorizontal: 0 },
        ])}
      >
        <ThemedIconBadge
          name={toolEmojiToIonicon(tool.icon)}
          accentColor={categoryColor}
          baseSize={42}
          iconSize={20}
          style={{ marginRight: Math.round(12 * (themeMetrics?.spacingScale ?? 1)) }}
        />
        <View style={styles.cardBody}>
          {showCategoryBadges && (
            <View style={styles.categoryPillWrap}>
              <View
                style={[styles.categoryDot, { backgroundColor: categoryColor }]}
              />
              <Text style={[styles.categoryPillText, { color: categoryColor }, { flexShrink: 1 }]}>
                {(
                  getCategoryInfo(tool.category)?.name || tool.category
                ).toUpperCase()}
              </Text>
            </View>
          )}
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            {translateToolShortTitle(tool.slug, tool.shortTitle, language)}
          </Text>
          {showCardDescriptions && (
            <Text style={[styles.description, { color: theme.textSecondary }]}>
              {tool.description}
            </Text>
          )}
        </View>
        <Pressable
          android_ripple={androidRipple(theme.rippleColor, true)}
          accessibilityRole="button"
          accessibilityLabel={`Unpin ${translateToolShortTitle(tool.slug, tool.shortTitle, language)}`}
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
          <ThemedIcon name="bookmark" size={18} color={theme.gold} />
        </Pressable>
      </Pressable>
    </View>
  );
});

export default function SavedScreen() {
  const router = useRouter();
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts, resetThemeConfig } = useTheme();
  const { language, t } = useAppLanguage();
  const styles = useMemo(
    () => createSavedStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const themedCardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const insets = useSafeAreaInsets();
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(14 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const bottomClearance =
    Math.round(28 * (themeMetrics?.spacingScale ?? 1)) +
    floatClearance +
    insets.bottom;
  const headingTransform = themeConfig.headingTransform || "none";
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const showCardIcons =
    themeConfig.showCardIcons !== false && themeConfig.iconBadgeStyle !== "hidden";
  const showCardDescriptions = themeConfig.showCardDescriptions !== false;
  const showTrailingArrows = themeConfig.showTrailingArrows !== false;
  const [saved, setSaved] = useState<string[]>([]);
  const lastSavedRawRef = useRef<string | null | undefined>(undefined);
  const popular = useMemo(() => getPopularTools(4), []);

  const loadSaved = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("kh-saved-tools");
      if (value === lastSavedRawRef.current) return;
      const parsed = parseSavedTools(value);
      const serialized = serializeSavedTools(parsed);
      lastSavedRawRef.current = value && !value.trim().startsWith("[") ? serialized : value;
      setSaved(parsed);
      // Migrate legacy comma-separated string to JSON array if needed
      if (value && !value.trim().startsWith("[")) {
        await AsyncStorage.setItem("kh-saved-tools", serialized);
      }
    } catch {
      lastSavedRawRef.current = null;
      setSaved([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadSaved();
    }, [loadSaved])
  );

  const savedRef = useRef(saved);
  savedRef.current = saved;

  const handleRemove = useCallback((slug: string) => {
    const updated = savedRef.current.filter((s) => s !== slug);
    savedRef.current = updated;
    setSaved(updated);
    const serialized = serializeSavedTools(updated);
    lastSavedRawRef.current = serialized;
    AsyncStorage.setItem("kh-saved-tools", serialized).catch(() => {});
  }, []);

  const handleClearAll = useCallback(() => {
    triggerHaptic(12);
    Alert.alert(
      t("saved.clearAlertTitle"),
      "Remove all saved tool shortcuts from your device?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear All",
          style: "destructive",
          onPress: async () => {
            try {
              lastSavedRawRef.current = null;
              setSaved([]);
              await AsyncStorage.removeItem("kh-saved-tools");
            } catch {}
          },
        },
      ]
    );
  }, [t]);

  const handleManageAdPrivacy = useCallback(async () => {
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
  }, []);

  const handleClearAllAppData = useCallback(() => {
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
              const allKeys = await AsyncStorage.getAllKeys();
              const preserveKeys = new Set([
                "kh-appwrite-session-secret",
                "kh-appwrite-fallback-cookies",
                "kh-appwrite-user-cache",
                "kh-app-language",
              ]);
              const toRemove = allKeys.filter((k) => !preserveKeys.has(k));
              if (toRemove.length > 0) {
                await AsyncStorage.multiRemove(toRemove);
              }
              resetThemeConfig();
              lastSavedRawRef.current = null;
              setSaved([]);
            } catch {}
          },
        },
      ]
    );
  }, [resetThemeConfig]);

  const tools = useMemo(
    () =>
      saved
        .map((slug) => TOOLS.find((tool) => tool.slug === slug))
        .filter(Boolean) as (typeof TOOLS)[number][],
    [saved]
  );

  const clearRightAction = useMemo(
    () =>
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
      ) : undefined,
    [tools.length, handleClearAll, theme.rippleColor, theme.kenyaRedLight, styles.clearBtn, styles.clearBtnText]
  );

  return (
    <SafeAreaView
      key={`screen-${theme.isDark ? "d" : "l"}-${themeConfig?.presetId || "def"}-${themeConfig?.surfaceStyle || "elev"}`}
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title={t("saved.title")}
        subtitle={t("saved.subtitle")}
        rightAction={clearRightAction}
      />

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: screenPadPx, paddingBottom: bottomClearance },
        ]}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
      >
        <Pressable
          onPress={() => router.push("/account")}
          style={({ pressed }) => [
            themedCardStyle,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 14,
              marginBottom: 14,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
            <ThemedIconBadge name="person-circle-outline" accentColor={theme.gold} baseSize={40} iconSize={20} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.textPrimary, fontWeight: "700", fontSize: 14 }}>
                {t("saved.accountTitle")}
              </Text>
              <Text style={{ color: theme.textSecondary, fontSize: 12, marginTop: 1 }}>
                {t("saved.accountSub")}
              </Text>
            </View>
          </View>
          <ThemedIcon name="chevron-forward" size={18} color={theme.textMuted} />
        </Pressable>

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
                  themedCardStyle={themedCardStyle}
                  onRemove={handleRemove}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={styles.empty}>
            <ThemedIconBadge
              name="bookmark-outline"
              accentColor={theme.gold}
              baseSize={64}
              iconSize={30}
            />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
              {t("saved.emptyTitle")}
            </Text>
            <Text
              style={[styles.emptySubtitle, { color: theme.textSecondary }]}
            >
              {t("saved.emptyHelp")}
            </Text>

            <Text style={[styles.suggestHeading, { color: theme.gold, textTransform: headingTransform }]}>
              {t("saved.popularSuggestions")}
            </Text>
            <View style={styles.suggestList}>
              {popular.map((item) => (
                <View
                  key={item.slug}
                  style={[
                    styles.suggestCardWrap,
                    themedCardStyle,
                    isFrameless && {
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderBottomColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    accessibilityRole="button"
                    accessibilityLabel={`Open ${translateToolShortTitle(item.slug, item.shortTitle, language)}`}
                    style={pressableStyle([
                      styles.suggestCard,
                      isFrameless && { paddingHorizontal: 0 },
                    ])}
                    onPress={() =>
                      router.push({
                        pathname: "/tools/[slug]",
                        params: { slug: item.slug },
                      })
                    }
                  >
                    <ThemedIconBadge
                      name={toolEmojiToIonicon(item.icon)}
                      accentColor={categoryColorMap[item.category] || theme.gold}
                      baseSize={38}
                      iconSize={18}
                    />
                    <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                      <Text
                        style={[
                          styles.suggestTitle,
                          { color: theme.textPrimary },
                        ]}
                      >
                        {translateToolShortTitle(item.slug, item.shortTitle, language)}
                      </Text>
                      {showCardDescriptions && (
                        <Text
                          style={[styles.suggestDesc, { color: theme.textMuted }]}
                        >
                          {item.description}
                        </Text>
                      )}
                    </View>
                    {showTrailingArrows && (
                      <ThemedIcon
                        name="arrow-forward"
                        size={16}
                        color={theme.textMuted}
                      />
                    )}
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
                isFrameless && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Privacy Policy"
                style={pressableStyle([
                  styles.suggestCard,
                  isFrameless && { paddingHorizontal: 0 },
                ])}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/privacy/").catch(() => {});
                }}
              >
                <ThemedIconBadge name="shield-checkmark-outline" accentColor={theme.kenyaGreenLight} baseSize={36} iconSize={18} />
                <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Privacy Policy
                  </Text>
                  {showCardDescriptions && (
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                      Kenya Data Protection Act 2019 & local-only data practices
                    </Text>
                  )}
                </View>
                {showTrailingArrows && (
                  <ThemedIcon name="open-outline" size={16} color={theme.textMuted} />
                )}
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
                isFrameless && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Terms of Service"
                style={pressableStyle([
                  styles.suggestCard,
                  isFrameless && { paddingHorizontal: 0 },
                ])}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/terms/").catch(() => {});
                }}
              >
                <ThemedIconBadge name="document-text-outline" accentColor={theme.gold} baseSize={36} iconSize={18} />
                <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Terms of Service
                  </Text>
                  {showCardDescriptions && (
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                      Independent utility disclaimer & usage terms
                    </Text>
                  )}
                </View>
                {showTrailingArrows && (
                  <ThemedIcon name="open-outline" size={16} color={theme.textMuted} />
                )}
              </Pressable>
            </View>

            {Boolean(getMobileAdsModule()) && (
            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
                isFrameless && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="button"
                accessibilityLabel="Manage Ad Privacy"
                style={pressableStyle([
                  styles.suggestCard,
                  isFrameless && { paddingHorizontal: 0 },
                ])}
                onPress={handleManageAdPrivacy}
              >
                <ThemedIconBadge name="options-outline" accentColor={theme.sky} baseSize={36} iconSize={18} />
                <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Manage Ad Privacy
                  </Text>
                  {showCardDescriptions && (
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                      Review or update your Google AdMob consent preferences
                    </Text>
                  )}
                </View>
                {showTrailingArrows && (
                  <ThemedIcon name="chevron-forward" size={16} color={theme.textMuted} />
                )}
              </Pressable>
            </View>
            )}

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
                isFrameless && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="link"
                accessibilityLabel="Contact & Support"
                style={pressableStyle([
                  styles.suggestCard,
                  isFrameless && { paddingHorizontal: 0 },
                ])}
                onPress={() => {
                  triggerHaptic(8);
                  Linking.openURL("https://kenyahub.me/contact/").catch(() => {});
                }}
              >
                <ThemedIconBadge name="mail-outline" accentColor={theme.kenyaGreenLight} baseSize={36} iconSize={18} />
                <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                  <Text style={[styles.suggestTitle, { color: theme.textPrimary }]}>
                    Contact & Support
                  </Text>
                  {showCardDescriptions && (
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                      Report statutory rate updates, bugs, or data inquiries
                    </Text>
                  )}
                </View>
                {showTrailingArrows && (
                  <ThemedIcon name="open-outline" size={16} color={theme.textMuted} />
                )}
              </Pressable>
            </View>

            <View
              style={[
                styles.suggestCardWrap,
                themedCardStyle,
                isFrameless
                  ? {
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderBottomColor: `${theme.kenyaRedLight}45`,
                    }
                  : { borderColor: `${theme.kenyaRedLight}45` },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="button"
                accessibilityLabel="Clear All App Data"
                style={pressableStyle([
                  styles.suggestCard,
                  isFrameless && { paddingHorizontal: 0 },
                ])}
                onPress={handleClearAllAppData}
              >
                <ThemedIconBadge name="trash-outline" accentColor={theme.kenyaRedLight} baseSize={36} iconSize={18} />
                <View style={{ flex: 1, marginLeft: showCardIcons ? 12 : 0 }}>
                  <Text style={[styles.suggestTitle, { color: theme.kenyaRedLight }]}>
                    Clear All App Data
                  </Text>
                  {showCardDescriptions && (
                    <Text style={[styles.suggestDesc, { color: theme.textMuted }]}>
                      Erase all offline saved tools, language progress, and preferences
                    </Text>
                  )}
                </View>
                {showTrailingArrows && (
                  <ThemedIcon name="chevron-forward" size={16} color={theme.kenyaRedLight} />
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
