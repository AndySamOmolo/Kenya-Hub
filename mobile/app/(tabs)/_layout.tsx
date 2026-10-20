import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useTheme, androidRipple } from "../../src/theme";

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
        tabBarActiveTintColor: theme.gold,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: theme.surfaceContainer,
            borderTopColor: theme.outlineVariant,
          },
        ],
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarButton: (props) => (
          <Pressable
            {...(props as any)}
            android_ripple={androidRipple(theme.rippleColor, true)}
          />
        ),
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
          title: "Matatu",
          tabBarIcon: ({ color, focused }) => (
            <M3TabIcon
              name={focused ? "bus" : "bus-outline"}
              color={focused ? theme.onPrimaryContainer : color}
              focused={focused}
              indicatorColor={theme.primaryContainer}
            />
          ),
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
    height: Platform.OS === "android" ? 76 : 88,
    paddingBottom: Platform.OS === "android" ? 10 : 26,
    paddingTop: 8,
    elevation: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  iconPill: {
    width: 64,
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
