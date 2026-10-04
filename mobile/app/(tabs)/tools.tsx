import { useMemo, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TOOLS, TOOL_CATEGORIES } from "../../src/shared/lib/tools-registry";

export default function ToolsScreen() {
  const params = useLocalSearchParams<{ category?: string }>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.category ?? "all");
  const filtered = useMemo(() => TOOLS.filter((tool) => {
    const matchesCategory = category === "all" || tool.category === category;
    const haystack = `${tool.title} ${tool.description} ${tool.keywords.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  }), [category, query]);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>All tools</Text>
      <TextInput value={query} onChangeText={setQuery} placeholder="Search tools" placeholderTextColor="#718096" style={styles.search} />
      <FlatList horizontal data={[{ id: "all", name: "All", icon: "🧰" }, ...TOOL_CATEGORIES]} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters} renderItem={({ item }) => (
        <Text onPress={() => setCategory(item.id)} style={[styles.filter, category === item.id && styles.activeFilter]}>{item.icon} {item.name}</Text>
      )} />
      <FlatList data={filtered} keyExtractor={(item) => item.slug} contentContainerStyle={styles.list} renderItem={({ item }) => (
        <Link href={{ pathname: "/tools/[slug]", params: { slug: item.slug } }} style={styles.card}>
          <Text style={styles.icon}>{item.icon}</Text><View style={styles.body}><Text style={styles.title}>{item.shortTitle}</Text><Text style={styles.description}>{item.description}</Text><Text style={styles.source}>Source: {item.dataSource}</Text></View>
        </Link>
      )} ListEmptyComponent={<Text style={styles.empty}>No tools match your search.</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220", paddingTop: 56 },
  heading: { color: "#f4f7fb", fontSize: 28, fontWeight: "800", paddingHorizontal: 20 },
  search: { margin: 16, padding: 14, borderRadius: 12, backgroundColor: "#111a2b", color: "#f4f7fb", borderColor: "#26344a", borderWidth: 1, fontSize: 16 },
  filters: { paddingHorizontal: 16, gap: 8, paddingBottom: 12 },
  filter: { color: "#aeb9c9", backgroundColor: "#111a2b", paddingVertical: 9, paddingHorizontal: 12, borderRadius: 20, overflow: "hidden" },
  activeFilter: { color: "#111827", backgroundColor: "#d6a52c", fontWeight: "800" },
  list: { padding: 16, paddingTop: 4, paddingBottom: 36 },
  card: { flexDirection: "row", padding: 14, marginBottom: 10, borderRadius: 14, borderWidth: 1, borderColor: "#26344a", backgroundColor: "#111a2b" },
  icon: { fontSize: 28, marginRight: 12 },
  body: { flex: 1 },
  title: { color: "#f4f7fb", fontSize: 16, fontWeight: "800" },
  description: { color: "#aeb9c9", lineHeight: 19, marginTop: 4 },
  source: { color: "#d6a52c", fontSize: 12, marginTop: 7 },
  empty: { color: "#aeb9c9", textAlign: "center", marginTop: 40 },
});
