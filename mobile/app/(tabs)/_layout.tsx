import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import { useTheme } from "../../src/theme";

function M3TabIcon({
  name,
  focused,
  color,
  indicatorColor,
}: {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  color: string;
  indicatorColor: string;
}) {
  return (
    <View
      style={[
        styles.iconPill,
        focused && { backgroundColor: indicatorColor },
      ]}
    >
      <Ionicons name={name} color={color} size={21} />
    </View>
  );
}

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: theme.bgPrimary },
        tabBarActiveTintColor: theme.gold,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: false,
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: theme.surfaceContainer,
            borderTopColor: theme.outlineVariant,
          },
        ],
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "school" : "school-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tools"
        options={{
          title: "Tools",
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "grid" : "grid-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
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
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "map" : "map-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "bookmark" : "bookmark-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: StyleSheet.hairlineWidth,
    minHeight: Platform.OS === "android" ? 74 : 88,
    paddingBottom: Platform.OS === "android" ? 10 : 26,
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
});
