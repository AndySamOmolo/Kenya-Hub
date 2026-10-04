import { useEffect, useMemo, useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TOOLS } from "../../src/shared/lib/tools-registry";
import payeData from "../../src/shared/data/paye-bands.json";
import mpesaData from "../../src/shared/data/mpesa-tariffs.json";

function Money({ value }: { value: number }) {
  return <Text style={styles.resultValue}>KES {Math.round(value).toLocaleString("en-KE")}</Text>;
}

function PayeTool() {
  const [gross, setGross] = useState("100000");
  const result = useMemo(() => {
    const salary = Math.max(0, Number(gross) || 0);
    let tax = 0;
    for (const band of payeData.payeBands) {
      const upper = band.max ?? Infinity;
      tax += Math.max(0, Math.min(salary, upper) - band.min + (band.min === 0 ? 1 : 0)) * (band.rate / 100);
      if (salary <= upper) break;
    }
    const sha = salary * (payeData.sha.rate / 100);
    const housing = salary * (payeData.housingLevy.employeeRate / 100);
    const nssf = Math.min(salary, payeData.nssf.tier2Limit) * (payeData.nssf.rate / 100);
    return { paye: Math.max(0, tax - payeData.personalRelief), sha, housing, nssf, net: salary - Math.max(0, tax - payeData.personalRelief) - sha - housing - nssf };
  }, [gross]);
  return <View><Text style={styles.label}>Monthly gross salary</Text><TextInput keyboardType="numeric" value={gross} onChangeText={setGross} style={styles.input} /><View style={styles.resultCard}><Text style={styles.resultLabel}>Estimated net pay</Text><Money value={result.net} /><Text style={styles.breakdown}>PAYE {Math.round(result.paye).toLocaleString()} · SHA {Math.round(result.sha).toLocaleString()} · NSSF {Math.round(result.nssf).toLocaleString()} · Housing Levy {Math.round(result.housing).toLocaleString()}</Text></View></View>;
}

function MpesasTool() {
  const [amount, setAmount] = useState("1000");
  const [type, setType] = useState<keyof typeof mpesaData.transactionTypes>("sendRegistered");
  const fee = useMemo(() => {
    const value = Number(amount) || 0;
    const bands = mpesaData.transactionTypes[type].bands;
    return bands.find((band) => value >= band.min && value <= band.max)?.fee ?? 0;
  }, [amount, type]);
  return <View><Text style={styles.label}>Transaction amount</Text><TextInput keyboardType="numeric" value={amount} onChangeText={setAmount} style={styles.input} /><View style={styles.choiceRow}>{(["sendRegistered", "withdrawAgent", "withdrawATM"] as const).map((item) => <TouchableOpacity key={item} onPress={() => setType(item)} style={[styles.choice, type === item && styles.choiceActive]}><Text style={styles.choiceText}>{item === "sendRegistered" ? "Send" : item === "withdrawAgent" ? "Agent" : "ATM"}</Text></TouchableOpacity>)}</View><View style={styles.resultCard}><Text style={styles.resultLabel}>Estimated fee</Text><Money value={fee} /></View></View>;
}

export default function ToolDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const tool = TOOLS.find((item) => item.slug === slug);
  const [saved, setSaved] = useState(false);
  useEffect(() => { if (tool) AsyncStorage.getItem("kh-saved-tools").then((value) => setSaved(value?.split(",").includes(tool.slug) ?? false)); }, [tool]);
  if (!tool) return <View style={styles.screen}><Text style={styles.title}>Tool not found</Text></View>;
  const toggleSaved = async () => { const current = (await AsyncStorage.getItem("kh-saved-tools"))?.split(",").filter(Boolean) ?? []; const next = saved ? current.filter((item) => item !== tool.slug) : [...new Set([...current, tool.slug])]; await AsyncStorage.setItem("kh-saved-tools", next.join(",")); setSaved(!saved); };
  return <><Stack.Screen options={{ headerShown: true, title: tool.shortTitle, headerStyle: { backgroundColor: "#111a2b" }, headerTintColor: "#f4f7fb" }} /><ScrollView style={styles.screen} contentContainerStyle={styles.content}><Text style={styles.heroIcon}>{tool.icon}</Text><Text style={styles.heading}>{tool.title}</Text><Text style={styles.description}>{tool.description}</Text><TouchableOpacity onPress={toggleSaved} style={styles.save}><Text style={styles.saveText}>{saved ? "★ Saved tool" : "☆ Save tool"}</Text></TouchableOpacity><View style={styles.divider} />{tool.slug === "paye-calculator" ? <PayeTool /> : tool.slug === "mpesa-fee-calculator" ? <MpesasTool /> : <View style={styles.offlineCard}><Text style={styles.resultLabel}>Available offline</Text><Text style={styles.offlineText}>This tool’s KenyaHub reference data is bundled into the app, so it remains available without mobile data.</Text><Text style={styles.source}>Official source: {tool.dataSource}</Text></View>}</ScrollView></>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1220" },
  content: { padding: 20, paddingBottom: 40 },
  heroIcon: { fontSize: 46, marginTop: 12 },
  heading: { color: "#f4f7fb", fontSize: 27, fontWeight: "800", marginTop: 12, lineHeight: 34 },
  title: { color: "#f4f7fb", fontSize: 20, fontWeight: "800" },
  description: { color: "#aeb9c9", fontSize: 16, lineHeight: 24, marginTop: 10 },
  save: { alignSelf: "flex-start", backgroundColor: "#26344a", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14, marginTop: 18 },
  saveText: { color: "#d6a52c", fontWeight: "800" },
  divider: { height: 1, backgroundColor: "#26344a", marginVertical: 24 },
  label: { color: "#f4f7fb", fontWeight: "700", marginBottom: 8 },
  input: { backgroundColor: "#111a2b", borderColor: "#26344a", borderWidth: 1, borderRadius: 10, color: "#f4f7fb", padding: 14, fontSize: 18 },
  resultCard: { backgroundColor: "#162238", borderRadius: 14, padding: 18, marginTop: 18 },
  resultLabel: { color: "#aeb9c9", fontSize: 14 },
  resultValue: { color: "#d6a52c", fontSize: 30, fontWeight: "800", marginTop: 5 },
  breakdown: { color: "#aeb9c9", lineHeight: 21, marginTop: 10 },
  choiceRow: { flexDirection: "row", gap: 8, marginTop: 12 },
  choice: { flex: 1, backgroundColor: "#111a2b", padding: 12, borderRadius: 9, alignItems: "center" },
  choiceActive: { backgroundColor: "#8b6d1d" },
  choiceText: { color: "#f4f7fb", fontWeight: "700" },
  offlineCard: { backgroundColor: "#111a2b", borderRadius: 14, padding: 18 },
  offlineText: { color: "#f4f7fb", fontSize: 16, lineHeight: 24, marginTop: 8 },
  source: { color: "#d6a52c", fontSize: 13, lineHeight: 20, marginTop: 14 },
});
