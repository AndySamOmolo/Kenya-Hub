import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import matatuData from "../../src/shared/data/matatu-routes.json";

export default function MatatuScreen() {
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}><Text style={styles.heading}>Matatu routes</Text><Text style={styles.description}>Offline route references for Nairobi and other towns. Check with the stage before travelling.</Text>{matatuData.towns.map((town) => <View key={town.slug} style={styles.town}><Text style={styles.townTitle}>{town.name}</Text>{(matatuData.routes[town.slug as keyof typeof matatuData.routes] ?? []).slice(0, 8).map((route) => <Link key={route.slug} href={{ pathname: "/matatu/[slug]", params: { slug: route.slug } }} style={styles.route}><Text style={styles.routeText}>{route.name}</Text><Text style={styles.routeMeta}>KES {route.fareMin}–{route.fareMax} · {route.saccoName}</Text></Link>)}</View>)}</ScrollView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220" },
  content: { padding: 20, paddingTop: 56, paddingBottom: 40 },
  heading: { color: "#f4f7fb", fontSize: 28, fontWeight: "800" },
  description: { color: "#aeb9c9", lineHeight: 23, marginTop: 8, marginBottom: 20 },
  town: { marginBottom: 22 },
  townTitle: { color: "#d6a52c", fontSize: 20, fontWeight: "800", marginBottom: 8 },
  route: { backgroundColor: "#111a2b", borderColor: "#26344a", borderWidth: 1, borderRadius: 10, padding: 13, marginBottom: 8 },
  routeText: { color: "#f4f7fb", fontWeight: "700" },
  routeMeta: { color: "#8b98ad", marginTop: 4, fontSize: 13 },
});
