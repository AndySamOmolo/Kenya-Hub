import React, { useState } from "react";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { triggerHaptic, useTheme } from "../../src/theme";
import type { MenuIndicatorStyle, TabBarStyle } from "../../src/lib/theme-engine";

const M3TabIcon = React.memo(function M3TabIcon({
  name,
  focused,
  color,
  indicatorColor,
  goldColor,
  outlineColor,
  compact = false,
  tabBarStyleMode = "classic",
  indicatorStyle = "pill",
  iconScale = 1.0,
}: {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  color: string;
  indicatorColor: string;
  goldColor: string;
  outlineColor: string;
  compact?: boolean;
  tabBarStyleMode?: TabBarStyle;
  indicatorStyle?: MenuIndicatorStyle;
  iconScale?: number;
}) {
  const effectiveIndicator: MenuIndicatorStyle =
    tabBarStyleMode === "top-accent"
      ? "underline"
      : tabBarStyleMode === "docked-cards"
      ? "filled-box"
      : tabBarStyleMode === "segmented"
      ? "filled-box"
      : tabBarStyleMode === "minimal" && indicatorStyle === "pill"
      ? "dot"
      : indicatorStyle;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {focused && tabBarStyleMode === "top-accent" && (
        <View
          style={{
            position: "absolute",
            top: -8,
            width: 28,
            height: 3,
            borderRadius: 999,
            backgroundColor: goldColor,
          }}
        />
      )}
      <View
        style={[
          styles.iconPill,
          compact && { width: 42, height: 26, borderRadius: 13 },
          focused && effectiveIndicator === "pill" && { backgroundColor: indicatorColor },
          focused && effectiveIndicator === "filled-box" && {
            backgroundColor: goldColor,
            borderRadius: 10,
            width: compact ? 44 : 52,
          },
          focused && effectiveIndicator === "outline" && {
            borderWidth: 1.5,
            borderColor: goldColor,
            backgroundColor: "transparent",
          },
          focused && effectiveIndicator === "glow" && {
            backgroundColor: `${goldColor}28`,
            borderWidth: 1,
            borderColor: `${goldColor}70`,
          },
          tabBarStyleMode === "docked-cards" && !focused && {
            borderWidth: 1,
            borderColor: `${outlineColor}55`,
            borderRadius: 10,
          },
        ]}
      >
        <Ionicons
          name={name}
          color={focused && effectiveIndicator === "filled-box" ? "#1A1108" : color}
          size={Math.round((compact ? 19 : 21) * Math.max(0.75, Math.min(1.3, iconScale)))}
        />
      </View>
      {focused && effectiveIndicator === "dot" && (
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
      {focused && effectiveIndicator === "underline" && tabBarStyleMode !== "top-accent" && (
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
  const { theme, isDark, themeConfig, themeMetrics, themeKey, resolvedFonts } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  const bottomInset = Math.max(insets.bottom, Platform.OS === "android" ? 10 : 24);
  const tabBarStyleMode: TabBarStyle = themeConfig.tabBarStyle || "classic";
  const indicatorStyle: MenuIndicatorStyle = themeConfig.menuIndicatorStyle || "pill";
  const showLabels = themeConfig.tabBarLabels !== false && tabBarStyleMode !== "minimal";
  const isFloating = tabBarStyleMode === "floating-pill" || tabBarStyleMode === "segmented";
  const isCompact = tabBarStyleMode === "compact" || tabBarStyleMode === "minimal";
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

  return (
    <View style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          lazy: true,
          freezeOnBlur: false,
          sceneStyle: { backgroundColor: theme.bgPrimary },
          tabBarActiveTintColor: theme.gold,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarShowLabel: showLabels,
          tabBarHideOnKeyboard: true,
          tabBarAllowFontScaling: true,
          tabBarBackground: () => (
            <View
              key={`${themeKey}-${tabBarStyleMode}-${indicatorStyle}`}
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
              paddingBottom: isFloating ? 8 : bottomInset,
              paddingTop: isCompact ? 5 : 8,
            },
            isFloating && {
              position: "absolute",
              left: 14,
              right: 14,
              bottom: Math.max(10, bottomInset),
              borderRadius: tabBarStyleMode === "segmented" ? 16 : 26,
              borderWidth: 1,
              borderTopWidth: 1,
              borderColor: theme.outlineVariant,
              elevation: 20,
            },
            tabBarStyleMode === "docked-cards" && {
              paddingHorizontal: 8,
            },
          ],
          tabBarLabelStyle: [
            styles.tabLabel,
            {
              fontSize: Math.round((isCompact ? 10 : 11) * Math.max(0.85, Math.min(1.2, themeMetrics?.fontScale ?? 1))),
              fontFamily: resolvedFonts.heading,
            },
          ],
          tabBarItemStyle: styles.tabItem,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarAccessibilityLabel: "Home tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "home" : "home-outline"}
                color={focused ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: "Learn",
            tabBarAccessibilityLabel: "Learn Kenyan Languages tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "school" : "school-outline"}
                color={focused ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tools"
          options={{
            title: "Tools",
            tabBarAccessibilityLabel: "Calculators and Tools tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "grid" : "grid-outline"}
                color={focused ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
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
            title: "Counties",
            tabBarAccessibilityLabel: "47 Kenyan Counties tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "map" : "map-outline"}
                color={focused ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            tabBarAccessibilityLabel: "Pinned and Saved Tools tab",
            tabBarIcon: ({ color, focused }) => (
              <M3TabIcon
                name={focused ? "bookmark" : "bookmark-outline"}
                color={focused ? theme.onPrimaryContainer : color}
                focused={focused}
                indicatorColor={theme.primaryContainer}
                goldColor={theme.gold}
                outlineColor={theme.outlineVariant}
                compact={isCompact}
                tabBarStyleMode={tabBarStyleMode}
                indicatorStyle={indicatorStyle}
                iconScale={iconScale}
              />
            ),
          }}
        />
      </Tabs>

      {quickPos !== "off" && (
        <>
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              setQuickMenuOpen(true);
            }}
            accessibilityRole="button"
            accessibilityLabel="Open quick navigation menu"
            style={[
              styles.quickFab,
              {
                backgroundColor: theme.gold,
                borderColor: theme.outlineVariant,
                bottom: tabBarHeight + 16,
                right: quickPos === "bottom-right" ? 16 : undefined,
                left: quickPos === "bottom-left" ? 16 : undefined,
              },
            ]}
          >
            <Ionicons name="apps" size={Math.round(20 * iconScale)} color="#1A1108" />
          </Pressable>

          <Modal
            visible={quickMenuOpen}
            transparent
            animationType="fade"
            onRequestClose={() => setQuickMenuOpen(false)}
          >
            <Pressable
              style={styles.quickBackdrop}
              onPress={() => setQuickMenuOpen(false)}
            >
              <View
                style={[
                  styles.quickSheet,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Text style={[styles.quickTitle, { color: theme.textPrimary, fontFamily: resolvedFonts.heading }]}>
                  Quick Jump Menu
                </Text>
                <View style={styles.quickGrid}>
                  {(
                    [
                      { label: "Home", icon: "home-outline", route: "/" },
                      { label: "Learn", icon: "school-outline", route: "/learn" },
                      { label: "Tools", icon: "grid-outline", route: "/tools" },
                      { label: "Counties", icon: "map-outline", route: "/county" },
                      { label: "Saved", icon: "bookmark-outline", route: "/saved" },
                      { label: "Settings", icon: "settings-outline", route: "/settings" },
                    ] as const
                  ).map((item) => (
                    <Pressable
                      key={item.route}
                      onPress={() => {
                        triggerHaptic(6);
                        setQuickMenuOpen(false);
                        router.push(item.route as any);
                      }}
                      style={[
                        styles.quickTile,
                        {
                          backgroundColor: theme.surfaceContainerLow,
                          borderColor: theme.outlineVariant,
                        },
                      ]}
                    >
                      <Ionicons name={item.icon} size={20} color={theme.gold} />
                      <Text style={[styles.quickTileText, { color: theme.textPrimary, fontFamily: resolvedFonts.body }]}>
                        {item.label}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </Pressable>
          </Modal>
        </>
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
  quickFab: {
    position: "absolute",
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
  quickTile: {
    width: "30.5%",
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
