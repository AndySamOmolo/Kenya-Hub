import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import matatuData from "../../src/shared/data/matatu-routes.json";

export default function MatatuRouteScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const route = Object.values(matatuData.routes).flat().find((item) => item.slug === slug);
  if (!route) return <View style={styles.screen}><Text style={styles.heading}>Route not found</Text></View>;
  return <><Stack.Screen options={{ headerShown: true, title: route.name, headerStyle: { backgroundColor: "#111a2b" }, headerTintColor: "#f4f7fb" }} /><ScrollView style={styles.screen} contentContainerStyle={styles.content}><Text style={styles.heading}>{route.name}</Text><Text style={styles.meta}>KES {route.fareMin}–{route.fareMax} · {route.saccoName}</Text><Text style={styles.meta}>{route.terminusA} → {route.terminusB}</Text><Text style={styles.section}>Stages</Text>{route.stages.map((stage) => <View key={stage.order} style={styles.stage}><Text style={styles.number}>{stage.order}</Text><Text style={styles.stageName}>{stage.name}</Text></View>)}<Text style={styles.note}>Fares and operating details can change. Confirm at the stage before travelling.</Text></ScrollView></>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220" },
  content: { padding: 20, paddingBottom: 40 },
  heading: { color: "#f4f7fb", fontSize: 28, fontWeight: "800", marginTop: 12 },
  meta: { color: "#aeb9c9", fontSize: 16, marginTop: 8 },
  section: { color: "#d6a52c", fontSize: 20, fontWeight: "800", marginTop: 28, marginBottom: 10 },
  stage: { flexDirection: "row", alignItems: "center", backgroundColor: "#111a2b", borderRadius: 10, padding: 13, marginBottom: 8 },
  number: { color: "#111827", backgroundColor: "#d6a52c", width: 26, height: 26, borderRadius: 13, textAlign: "center", paddingTop: 4, fontWeight: "800", marginRight: 12 },
  stageName: { color: "#f4f7fb", fontWeight: "700" },
  note: { color: "#aeb9c9", lineHeight: 22, marginTop: 22 },
});
