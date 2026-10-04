import { useCallback, useState } from "react";
import { Link, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, StyleSheet, Text } from "react-native";
import { TOOLS } from "../../src/shared/lib/tools-registry";

export default function SavedScreen() {
  const [saved, setSaved] = useState<string[]>([]);
  useFocusEffect(useCallback(() => { AsyncStorage.getItem("kh-saved-tools").then((value) => setSaved(value?.split(",").filter(Boolean) ?? [])); }, []));
  const tools = saved.map((slug) => TOOLS.find((tool) => tool.slug === slug)).filter(Boolean);
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}><Text style={styles.heading}>Saved tools</Text>{tools.length ? tools.map((tool) => <Link key={tool!.slug} href={{ pathname: "/tools/[slug]", params: { slug: tool!.slug } }} style={styles.card}><Text style={styles.icon}>{tool!.icon}</Text><Text style={styles.title}>{tool!.shortTitle}</Text></Link>) : <Text style={styles.empty}>Save tools for quick offline access.</Text>}</ScrollView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220" },
  content: { padding: 20, paddingTop: 56 },
  heading: { color: "#f4f7fb", fontSize: 28, fontWeight: "800", marginBottom: 18 },
  card: { backgroundColor: "#111a2b", borderColor: "#26344a", borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: "row", alignItems: "center" },
  icon: { fontSize: 26, marginRight: 12 },
  title: { color: "#f4f7fb", fontWeight: "700", fontSize: 16 },
  empty: { color: "#aeb9c9", fontSize: 16, lineHeight: 24 },
});
