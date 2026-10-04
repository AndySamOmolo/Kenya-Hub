import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d6a52c",
        tabBarInactiveTintColor: "#8b98ad",
        tabBarStyle: { backgroundColor: "#111a2b", borderTopColor: "#26344a" },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="tools" options={{ title: "Tools", tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="matatu" options={{ title: "Matatu", tabBarIcon: ({ color, size }) => <Ionicons name="bus-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon: ({ color, size }) => <Ionicons name="bookmark-outline" color={color} size={size} /> }} />
    </Tabs>
  );
}
