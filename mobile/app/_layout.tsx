import { Stack, ErrorBoundaryProps } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#0b1220" } }} />
    </>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KenyaHub could not open</Text>
      <Text style={styles.message}>{error.message}</Text>
      <Text onPress={retry} style={styles.retry}>Try again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1220", justifyContent: "center", padding: 24 },
  title: { color: "#f4f7fb", fontSize: 22, fontWeight: "800" },
  message: { color: "#aeb9c9", marginTop: 12, lineHeight: 21 },
  retry: { color: "#d6a52c", fontWeight: "800", marginTop: 20 },
});
