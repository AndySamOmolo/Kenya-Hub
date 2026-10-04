import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TOOLS, TOOL_CATEGORIES } from "../../src/shared/lib/tools-registry";

export default function HomeScreen() {
  const popular = TOOLS.slice(0, 8);
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.brand}>KenyaHub</Text>
      <Text style={styles.title}>Useful Kenya tools, wherever you are.</Text>
      <Text style={styles.subtitle}>Free calculators, guides, directories, and matatu routes that work offline.</Text>
      <Link href="/(tabs)/tools" style={styles.primaryButton}>Browse all {TOOLS.length} tools</Link>
      <Text style={styles.sectionTitle}>Popular tools</Text>
      {popular.map((tool) => (
        <Link key={tool.slug} href={{ pathname: "/tools/[slug]", params: { slug: tool.slug } }} style={styles.card}>
          <Text style={styles.icon}>{tool.icon}</Text>
          <View style={styles.cardBody}><Text style={styles.cardTitle}>{tool.shortTitle}</Text><Text style={styles.cardText}>{tool.description}</Text></View>
        </Link>
      ))}
      <Text style={styles.sectionTitle}>Browse by category</Text>
      <View style={styles.categoryGrid}>
        {TOOL_CATEGORIES.map((category) => <Link key={category.id} href={{ pathname: "/(tabs)/tools", params: { category: category.id } }} style={styles.category}><Text style={styles.icon}>{category.icon}</Text><Text style={styles.categoryText}>{category.name}</Text></Link>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220" },
  content: { padding: 20, paddingTop: 56, paddingBottom: 36 },
  brand: { color: "#d6a52c", fontSize: 18, fontWeight: "800", letterSpacing: 1 },
  title: { color: "#f4f7fb", fontSize: 30, fontWeight: "800", marginTop: 14, lineHeight: 36 },
  subtitle: { color: "#aeb9c9", fontSize: 16, lineHeight: 24, marginTop: 12 },
  primaryButton: { backgroundColor: "#d6a52c", color: "#111827", fontWeight: "800", padding: 15, borderRadius: 12, textAlign: "center", marginTop: 22, overflow: "hidden" },
  sectionTitle: { color: "#f4f7fb", fontSize: 20, fontWeight: "800", marginTop: 30, marginBottom: 12 },
  card: { backgroundColor: "#111a2b", borderColor: "#26344a", borderWidth: 1, borderRadius: 14, padding: 14, marginBottom: 10, flexDirection: "row", alignItems: "center" },
  icon: { fontSize: 28, marginRight: 12 },
  cardBody: { flex: 1 },
  cardTitle: { color: "#f4f7fb", fontWeight: "700", fontSize: 16 },
  cardText: { color: "#8b98ad", marginTop: 4, lineHeight: 19 },
  categoryGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  category: { backgroundColor: "#111a2b", borderRadius: 12, padding: 13, width: "48%", minHeight: 92 },
  categoryText: { color: "#f4f7fb", fontWeight: "700", marginTop: 6 },
});
