import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, useRouter } from "expo-router";
import { Animated, Modal, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { triggerHaptic, useTheme } from "../../src/theme";
import {
  hexToRgba,
  getContrastInk,
  type IconPackStyle,
  type MenuIndicatorStyle,
  type TabBarStyle,
} from "../../src/lib/theme-engine";
import { ThemedIcon, type IoniconName } from "../../src/components/ThemedIcon";
import { useAppLanguage, type TranslationKey } from "../../src/lib/i18n";

const QUICK_JUMP_ITEMS: readonly { labelKey: TranslationKey; icon: IoniconName; route: string }[] = [
  { labelKey: "nav.home", icon: "home-outline", route: "/" },
  { labelKey: "nav.learn", icon: "school-outline", route: "/learn" },
  { labelKey: "nav.tools", icon: "grid-outline", route: "/tools" },
  { labelKey: "nav.counties", icon: "map-outline", route: "/county" },
  { labelKey: "nav.saved", icon: "bookmark-outline", route: "/saved" },
  { labelKey: "nav.account", icon: "person-circle-outline", route: "/account" },
  { labelKey: "nav.settings", icon: "settings-outline", route: "/settings" },
];

const QuickJumpMenu = React.memo(function QuickJumpMenu({
  quickPos,
  bottomOffset,
  iconScale,
  iconPack,
  reduceMotion,
  gold,
  outlineVariant,
  surfaceContainer,
  surfaceContainerLow,
  textPrimary,
  headingFont,
  bodyFont,
}: {
  quickPos: "bottom-right" | "bottom-left";
  bottomOffset: number;
  iconScale: number;
  iconPack: IconPackStyle;
  reduceMotion: boolean;
  gold: string;
  outlineVariant: string;
  surfaceContainer: string;
  surfaceContainerLow: string;
  textPrimary: string;
  headingFont: string;
  bodyFont: string;
}) {
  const router = useRouter();
  const { t } = useAppLanguage();
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => {
          triggerHaptic(8);
          setQuickMenuOpen(true);
        }}
        accessibilityRole="button"
        accessibilityLabel="Open quick navigation menu"
        style={[
          styles.quickFabWrap,
          {
            bottom: bottomOffset,
            right: quickPos === "bottom-right" ? 16 : undefined,
            left: quickPos === "bottom-left" ? 16 : undefined,
          },
        ]}
      >
        <View
          style={[
            styles.quickFab,
            {
              backgroundColor: gold,
              borderColor: outlineVariant,
            },
          ]}
        >
          <ThemedIcon
            name="apps"
            size={Math.round(20 * iconScale)}
            color={getContrastInk(gold)}
            pack={iconPack}
            scaleWithTheme={false}
          />
        </View>
      </Pressable>

      <Modal
        visible={quickMenuOpen}
        transparent
        animationType={reduceMotion ? "none" : "fade"}
        onRequestClose={() => setQuickMenuOpen(false)}
      >
        <Pressable
          style={styles.quickBackdrop}
          onPress={() => setQuickMenuOpen(false)}
        >
          <View
            onStartShouldSetResponder={() => true}
            style={[
              styles.quickSheet,
              {
                backgroundColor: surfaceContainer,
                borderColor: outlineVariant,
              },
            ]}
          >
            <Text style={[styles.quickTitle, { color: textPrimary, fontFamily: headingFont }]}>
              {t("nav.quickJump")}
            </Text>
            <View style={styles.quickGrid}>
              {QUICK_JUMP_ITEMS.map((item) => (
                <Pressable
                  key={item.route}
                  onPress={() => {
                    triggerHaptic(6);
                    setQuickMenuOpen(false);
                    router.push(item.route as any);
                  }}
                  style={styles.quickTileWrap}
                >
                  <View
                    style={[
                      styles.quickTile,
                      {
                        backgroundColor: surfaceContainerLow,
                        borderColor: outlineVariant,
                      },
                    ]}
                  >
                    <ThemedIcon
                      name={item.icon}
                      size={Math.round(20 * iconScale)}
                      color={gold}
                      pack={iconPack}
                      scaleWithTheme={false}
                    />
                    <Text style={[styles.quickTileText, { color: textPrimary, fontFamily: bodyFont }]}>
                      {t(item.labelKey)}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
});

const M3TabIcon = React.memo(function M3TabIcon({
  name,
  focused,
  color,
  indicatorColor,
  goldColor,
  outlineColor,
  compact = false,
  extraSmall = false,
  tabBarStyleMode = "classic",
  indicatorStyle = "pill",
  iconScale = 1.0,
  iconPack = "outline",
  showIcon = true,
  reduceMotion = false,
}: {
  name: IoniconName;
  focused: boolean;
  color: string;
  indicatorColor: string;
  goldColor: string;
  outlineColor: string;
  compact?: boolean;
  extraSmall?: boolean;
  tabBarStyleMode?: TabBarStyle;
  indicatorStyle?: MenuIndicatorStyle;
  iconScale?: number;
  iconPack?: IconPackStyle;
  showIcon?: boolean;
  reduceMotion?: boolean;
}) {
  const focusAnim = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    if (reduceMotion) {
      focusAnim.setValue(focused ? 1 : 0);
      return;
    }
    if (focused) {
      Animated.spring(focusAnim, {
        toValue: 1,
        tension: 220,
        friction: 16,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(focusAnim, {
        toValue: 0,
        duration: 140,
        useNativeDriver: true,
      }).start();
    }
  }, [focused, reduceMotion, focusAnim]);

  const iconScaleAnim = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.92, 1.06],
  });
  const iconOpacityAnim = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.78, 1],
  });

  const effectiveIndicator: MenuIndicatorStyle = indicatorStyle;
  const usesTopAccent = tabBarStyleMode === "top-accent";
  const isBracket = effectiveIndicator === "bracket";
  const showTopAccent = focused && usesTopAccent;
  const showPill = focused && !usesTopAccent && effectiveIndicator === "pill";
  const showFilledBox = focused && !usesTopAccent && effectiveIndicator === "filled-box";
  const showOutline = focused && !usesTopAccent && effectiveIndicator === "outline";
  const showGlow = focused && !usesTopAccent && effectiveIndicator === "glow";
  const showDot = focused && !usesTopAccent && effectiveIndicator === "dot";
  const showUnderline = focused && !usesTopAccent && effectiveIndicator === "underline";
  const showHankoSeal = focused && !usesTopAccent && effectiveIndicator === "hanko-seal";
  const showPlinthLift = focused && !usesTopAccent && effectiveIndicator === "plinth-lift";
  const showVernierLoupe = focused && !usesTopAccent && effectiveIndicator === "vernier-loupe";

  const resolvedPack: IconPackStyle =
    focused && iconPack === "outline" ? "filled" : iconPack;

  if (!showIcon) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 6,
          marginBottom: 2,
        }}
      >
        {focused && showDot ? (
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 999,
              backgroundColor: goldColor,
            }}
          />
        ) : focused ? (
          <View
            style={{
              width: showTopAccent ? 24 : 20,
              height: 2.5,
              borderRadius: 999,
              backgroundColor: goldColor,
            }}
          />
        ) : null}
      </View>
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: usesTopAccent ? 4 : 0,
      }}
    >
      {showTopAccent && (
        <View
          style={{
            position: "absolute",
            top: 0,
            width: 28,
            height: 3,
            borderRadius: 999,
            backgroundColor: goldColor,
          }}
        />
      )}
      <Animated.View
        style={[
          styles.iconPill,
          compact && { width: 42, height: 26, borderRadius: 13 },
          extraSmall && { width: 40, height: 24, borderRadius: 12 },
          showPill && { backgroundColor: indicatorColor },
          showFilledBox && {
            backgroundColor: goldColor,
            borderRadius: 10,
            width: extraSmall ? 42 : compact ? 44 : 52,
          },
          showOutline && {
            borderWidth: 1.5,
            borderColor: goldColor,
            backgroundColor: "transparent",
          },
          showGlow && {
            backgroundColor: hexToRgba(goldColor, 0.16),
            borderWidth: 1,
            borderColor: hexToRgba(goldColor, 0.44),
          },
          showHankoSeal && {
            borderWidth: 1.75,
            borderColor: goldColor,
            borderRadius: 3,
            backgroundColor: hexToRgba(goldColor, 0.1),
            width: extraSmall ? 34 : 38,
          },
          showPlinthLift && {
            backgroundColor: goldColor,
            borderRadius: 0,
            borderWidth: 1.5,
            borderColor: outlineColor,
            borderBottomWidth: 3.5,
            width: extraSmall ? 42 : 48,
          },
          showVernierLoupe && {
            borderWidth: 1.5,
            borderColor: goldColor,
            borderTopWidth: 2.5,
            borderRadius: 2,
            backgroundColor: hexToRgba(goldColor, 0.15),
            width: extraSmall ? 42 : 48,
          },
          tabBarStyleMode === "docked-cards" && !focused && {
            borderWidth: 1,
            borderColor: hexToRgba(outlineColor, 0.33),
            borderRadius: 10,
          },
          {
            opacity: iconOpacityAnim,
            transform: [{ scale: iconScaleAnim }],
          },
        ]}
      >
        <ThemedIcon
          name={name}
          color={(showFilledBox || showPlinthLift) ? getContrastInk(goldColor) : color}
          size={Math.round((extraSmall ? 18 : compact ? 19 : 21) * Math.max(0.75, Math.min(1.3, iconScale)))}
          pack={resolvedPack}
          scaleWithTheme={false}
        />
      </Animated.View>
      {showDot && (
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 999,
            backgroundColor: goldColor,
            marginTop: 2,
          }}
        />
      )}
      {showUnderline && (
        <View
          style={{
            width: 22,
            height: 2.5,
            borderRadius: 999,
            backgroundColor: goldColor,
            marginTop: 2,
          }}
        />
      )}
    </View>
  );
});

export default function TabLayout() {
  const { theme, themeConfig, themeMetrics, themeKey, resolvedFonts } = useTheme();
  const { t } = useAppLanguage();
  const insets = useSafeAreaInsets();

  const bottomInset = Math.max(insets.bottom, Platform.OS === "android" ? 16 : 24);
  const tabBarStyleMode: TabBarStyle = themeConfig.tabBarStyle || "classic";
  const indicatorStyle: MenuIndicatorStyle = themeConfig.menuIndicatorStyle || "pill";
  const effectiveIndicator: MenuIndicatorStyle = indicatorStyle;
  const usesTopAccent = tabBarStyleMode === "top-accent";
  const isBracket = effectiveIndicator === "bracket";
  const iconPack: IconPackStyle = themeConfig.iconPack || "outline";
  const showTabIcons = themeConfig.showTabIcons !== false;
  const effectiveTabLabels = !showTabIcons ? true : themeConfig.tabBarLabels !== false;
  const showLabels = !showTabIcons ? true : effectiveTabLabels && tabBarStyleMode !== "minimal";
  const isFloating = tabBarStyleMode === "floating-pill" || tabBarStyleMode === "segmented";
  const isCompact = tabBarStyleMode === "compact" || tabBarStyleMode === "minimal";
  const isExtraSmall = themeConfig.tabBarSize === "xs";
  const baseHeight =
    themeConfig.tabBarSize && themeConfig.tabBarSize !== "md"
      ? themeMetrics.tabBarHeightPx
      : isCompact
      ? 54
      : Platform.OS === "android"
      ? 64
      : 62;
  const iconScale = themeMetrics?.iconScale ?? 1.0;
  const tabBarHeight = isFloating ? baseHeight : baseHeight + bottomInset;
  const quickPos = themeConfig.quickMenuPosition || "off";
  const fontScale = themeMetrics?.fontScale ?? 1;

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      lazy: true,
      freezeOnBlur: true,
      sceneStyle: { backgroundColor: theme.bgPrimary },
      tabBarActiveTintColor: theme.gold,
      tabBarInactiveTintColor: theme.textSecondary,
      tabBarShowLabel: showLabels,
      tabBarHideOnKeyboard: true,
      tabBarAllowFontScaling: false,
      tabBarBackground: () => (
        <View
          key={`${themeKey}-${tabBarStyleMode}-${indicatorStyle}-${showTabIcons ? "ic" : "tx"}`}
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:
                tabBarStyleMode === "segmented"
                  ? theme.surfaceContainerHigh
                  : theme.surfaceContainer,
              borderRadius:
                tabBarStyleMode === "floating-pill"
                  ? 26
                  : tabBarStyleMode === "segmented"
                  ? 16
                  : 0,
            },
          ]}
        />
      ),
      tabBarStyle: [
        styles.tabBar,
        {
          backgroundColor:
            tabBarStyleMode === "segmented"
              ? theme.surfaceContainerHigh
              : theme.surfaceContainer,
          borderTopColor: theme.outlineVariant,
          minHeight: tabBarHeight,
          paddingBottom: isFloating ? (isExtraSmall ? 5 : 8) : bottomInset,
          paddingTop: isExtraSmall ? 3 : isCompact ? 5 : 8,
        },
        isFloating && {
          position: "absolute" as const,
          left: 14,
          right: 14,
          bottom: Math.max(10, bottomInset),
          borderRadius: tabBarStyleMode === "segmented" ? 16 : 26,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: theme.outlineVariant,
          elevation: 20,
          zIndex: 10,
        },
        tabBarStyleMode === "docked-cards" && {
          paddingHorizontal: 8,
        },
        tabBarStyleMode === "braun-detent" && {
          borderTopWidth: 2,
          borderTopColor: theme.outline,
          backgroundColor: theme.surfaceContainerHigh,
          paddingHorizontal: 6,
        },
        tabBarStyleMode === "swiss-timetable" && {
          borderTopWidth: 3,
          borderTopColor: theme.textPrimary,
          backgroundColor: theme.isDark ? theme.bgPrimary : theme.surfaceContainerLowest,
        },
        tabBarStyleMode === "solari-flap" && {
          borderTopWidth: 2,
          borderTopColor: theme.gold,
          backgroundColor: theme.bgSecondary,
          paddingHorizontal: 6,
        },
        tabBarStyleMode === "porcelain-wells" && {
          borderTopWidth: 1,
          borderTopColor: theme.outlineVariant,
          backgroundColor: theme.surfaceContainerLow,
          paddingHorizontal: 8,
        },
      ],
      tabBarLabelStyle: [
        styles.tabLabel,
        {
          fontSize: !showTabIcons
            ? Math.round(12 * Math.max(0.85, Math.min(1.2, fontScale)))
            : Math.round((isExtraSmall || isCompact ? 10 : 11) * Math.max(0.85, Math.min(1.2, fontScale))),
          fontFamily: resolvedFonts.heading,
        },
        !showTabIcons && { marginTop: 0 },
      ],
      tabBarIconStyle: !showTabIcons ? { maxHeight: 8, marginBottom: 0 } : undefined,
      tabBarItemStyle: styles.tabItem,
    }),
    [
      theme.bgPrimary,
      theme.gold,
      theme.textSecondary,
      theme.surfaceContainerHigh,
      theme.surfaceContainer,
      theme.outlineVariant,
      showLabels,
      showTabIcons,
      themeKey,
      tabBarStyleMode,
      indicatorStyle,
      tabBarHeight,
      isFloating,
      isExtraSmall,
      isCompact,
      bottomInset,
      fontScale,
      resolvedFonts.heading,
    ]
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <Tabs screenOptions={screenOptions}>
        <Tabs.Screen
          name="index"
          options={{
            title: t("nav.home"),
            tabBarAccessibilityLabel: "Home tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "home" : "home-outline"}
                color={focused && !usesTopAccent && effectiveIndicator === "pill" ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                extraSmall={isExtraSmall}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
                iconPack={iconPack}
                showIcon={showTabIcons}
                reduceMotion={Boolean(themeConfig.reduceMotion)}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: t("nav.learn"),
            tabBarAccessibilityLabel: "Learn Kenyan Languages tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "school" : "school-outline"}
                color={focused && !usesTopAccent && effectiveIndicator === "pill" ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                extraSmall={isExtraSmall}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
                iconPack={iconPack}
                showIcon={showTabIcons}
                reduceMotion={Boolean(themeConfig.reduceMotion)}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tools"
          options={{
            title: t("nav.tools"),
            tabBarAccessibilityLabel: "Calculators and Tools tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "grid" : "grid-outline"}
                color={focused && !usesTopAccent && effectiveIndicator === "pill" ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                extraSmall={isExtraSmall}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
                iconPack={iconPack}
                showIcon={showTabIcons}
                reduceMotion={Boolean(themeConfig.reduceMotion)}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="matatu"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="county"
          options={{
            title: t("nav.counties"),
            tabBarAccessibilityLabel: "47 Kenyan Counties tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "map" : "map-outline"}
                color={focused && !usesTopAccent && effectiveIndicator === "pill" ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                extraSmall={isExtraSmall}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
                iconPack={iconPack}
                showIcon={showTabIcons}
                reduceMotion={Boolean(themeConfig.reduceMotion)}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: t("nav.saved"),
            tabBarAccessibilityLabel: "Pinned and Saved Tools tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "bookmark" : "bookmark-outline"}
                color={focused && !usesTopAccent && effectiveIndicator === "pill" ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                extraSmall={isExtraSmall}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
                iconPack={iconPack}
                showIcon={showTabIcons}
                reduceMotion={Boolean(themeConfig.reduceMotion)}
              />
            ),
          }}
        />
      </Tabs>

      {isFloating && (
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: Math.max(10, bottomInset) + Math.round(tabBarHeight * 0.5),
            backgroundColor: hexToRgba(theme.bgPrimary, 0.94),
            zIndex: 0,
          }}
        />
      )}

      {quickPos !== "off" && (
        <QuickJumpMenu
          quickPos={quickPos}
          bottomOffset={tabBarHeight + (isFloating ? Math.max(10, bottomInset) : 0) + 16}
          iconScale={iconScale}
          iconPack={iconPack}
          reduceMotion={Boolean(themeConfig.reduceMotion)}
          gold={theme.gold}
          outlineVariant={theme.outlineVariant}
          surfaceContainer={theme.surfaceContainer}
          surfaceContainerLow={theme.surfaceContainerLow}
          textPrimary={theme.textPrimary}
          headingFont={resolvedFonts.heading}
          bodyFont={resolvedFonts.body}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
    elevation: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  iconPill: {
    width: 50,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    letterSpacing: 0.2,
    marginTop: 4,
  },
  tabItem: {
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  quickFabWrap: {
    position: "absolute",
    zIndex: 20,
  },
  quickFab: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 14,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  quickBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.48)",
    justifyContent: "flex-end",
    padding: 16,
  },
  quickSheet: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    gap: 12,
  },
  quickTitle: {
    fontSize: 16,
  },
  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  quickTileWrap: {
    width: "30.5%",
  },
  quickTile: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  quickTileText: {
    fontSize: 12,
  },
});
