import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, triggerHaptic } from "../../theme";
import { createStyles } from "./shared";
import prefixesData from "../../shared/data/mobile-prefixes.json";

const EQUITEL_FALLBACK = {
  name: "Equitel (Finserve / Equity)",
  color: "#8B4513",
  prefixes: ["0763", "0764", "0765", "0766"],
  ussdCodes: [
    { code: "*247#", description: "Equitel Mobile Banking & EazzyBanking" },
    { code: "*100#", description: "Check Equitel Balance & Bundles" },
    { code: "*106#", description: "Verify SIMs Registered Under Your ID" },
  ],
};

/** 2. Mobile Prefix Finder (mirrors kenyahub/src/app/tools/mobile-number-prefix/page.tsx) */
export function MobilePrefixFinder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [num, setNum] = useState("0722123456");
  const [selectedNet, setSelectedNet] = useState<string>("All");
  const clean = num.trim().replace(/[^0-9]/g, "");

  // Ensure Equitel (0763–0766) is always included alongside synced networks
  const allNetworks = useMemo(() => {
    const base = [...(prefixesData.networks as any[])];
    const hasEquitel = base.some((n) =>
      String(n.name || "").toLowerCase().includes("equitel")
    );
    if (!hasEquitel) {
      base.push(EQUITEL_FALLBACK);
    }
    return base;
  }, []);

  const carrier = useMemo(() => {
    let p = clean;
    if (p.startsWith("00254")) p = p.slice(5);
    else if (p.startsWith("254")) p = p.slice(3);
    if (p.startsWith("0")) p = p.slice(1);
    if (/^[17]/.test(p)) p = "0" + p;
    const prefix = p.substring(0, 4);
    if (prefix.length < 4 || !prefix.startsWith("0")) return null;
    for (const net of allNetworks) {
      if (net.prefixes.includes(prefix)) {
        return { ...net, matchedPrefix: prefix, isAllocated: true };
      }
    }
    return {
      name: "Unknown / Unallocated Prefix",
      isAllocated: false,
      color: theme.textMuted,
      matchedPrefix: prefix,
      prefixes: [],
      ussdCodes: [],
    };
  }, [clean, allNetworks, theme.textMuted]);

  const visibleNetworks = useMemo(() => {
    if (selectedNet === "All") return allNetworks;
    return allNetworks.filter((n) => n.name === selectedNet);
  }, [allNetworks, selectedNet]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Phone Number or Prefix</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            multiline={false}
            numberOfLines={1}
            value={num}
            onChangeText={setNum}
            placeholder="e.g. 0722 123 456, 0763, or 0110..."
            placeholderTextColor={theme.textMuted}
            keyboardType="phone-pad"
            style={[styles.textInput, { paddingRight: 38 }]}
          />
          {num.length > 0 && (
            <Pressable
              onPress={() => setNum("")}
              accessibilityRole="button"
              accessibilityLabel="Clear phone number"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
      </View>

      {carrier ? (
        <View style={styles.card}>
          <View style={styles.carrierHeader}>
            <View
              style={[
                styles.carrierDot,
                { backgroundColor: carrier.color || theme.gold },
              ]}
            />
            <Text style={styles.carrierTitle}>{carrier.name}</Text>
            <View
              style={{
                marginLeft: "auto",
                backgroundColor: `${carrier.color || theme.gold}25`,
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "800",
                  color: carrier.color || theme.gold,
                }}
              >
                Prefix: {carrier.matchedPrefix}
              </Text>
            </View>
          </View>
          <Text style={styles.carrierDesc}>
            Prefix {carrier.matchedPrefix} is allocated to {carrier.name} under the
            Communications Authority of Kenya numbering plan.
          </Text>

          {carrier.ussdCodes && carrier.ussdCodes.length > 0 && (
            <View style={{ marginTop: 14 }}>
              <Text style={styles.ussdHeading}>Useful USSD Codes:</Text>
              {carrier.ussdCodes.map((u: any, i: number) => (
                <View key={i} style={styles.ussdRow}>
                  <Text style={styles.ussdCode}>{u.code}</Text>
                  <Text style={styles.ussdDesc}>{u.description}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={{ color: theme.textSecondary, fontSize: 12.5 }}>
            Enter at least 4 digits starting with 07, 01, or +254 to identify the mobile
            network.
          </Text>
        </View>
      )}

      {/* Full Network Prefix Directory with Carrier Filter Pills (incl. Equitel 0763–0766) */}
      <Text style={styles.subHeading}>Kenya Network Prefix Directory</Text>
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", gap: 6, paddingBottom: 4 }}>
        {["All", ...allNetworks.map((n) => n.name)].map((tabName) => {
          const active = selectedNet === tabName;
          return (
            <Pressable
              key={tabName}
              onPress={() => {
                triggerHaptic(6);
                setSelectedNet(tabName);
              }}
              style={{
                paddingHorizontal: 11,
                paddingVertical: 6,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: active ? theme.gold : theme.border,
                backgroundColor: active ? theme.gold : theme.bgCard,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: active ? theme.kenyaBlack : theme.textSecondary,
                }}
              >
                {tabName.split("(")[0].trim()}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {visibleNetworks.map((net) => (
        <View key={net.name} style={styles.card}>
          <View style={styles.carrierHeader}>
            <View style={[styles.carrierDot, { backgroundColor: net.color }]} />
            <Text style={styles.carrierTitle}>{net.name}</Text>
            <Text style={{ marginLeft: "auto", fontSize: 11, color: theme.textMuted }}>
              {net.prefixes.length} prefixes
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {net.prefixes.map((p: string) => (
              <Pressable
                key={p}
                onPress={() => {
                  triggerHaptic(6);
                  setNum(`${p}123456`);
                }}
                style={{
                  backgroundColor: theme.bgElevated,
                  borderWidth: 1,
                  borderColor: theme.border,
                  borderRadius: 6,
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                }}
              >
                <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary }}>
                  {p}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}

      {/* Kenya Emergency Numbers */}
      <Text style={styles.subHeading}>Kenya Emergency Numbers</Text>
      <View style={styles.card}>
        {prefixesData.emergencyNumbers.map((en) => (
          <View key={en.number} style={styles.tableRow}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                color: theme.kenyaRedLight,
                width: 70,
              }}
            >
              {en.number}
            </Text>
            <Text style={[styles.rowValue, { flex: 1, textAlign: "right" }]}>
              {en.service}
            </Text>
          </View>
        ))}
      </View>

      {/* International Dialing Guide */}
      <Text style={styles.subHeading}>International Dialing Guide</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold, marginBottom: 2 }}>
          From Kenya to International:
        </Text>
        <Text style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 10 }}>
          {prefixesData.internationalDialing.fromKenya}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold, marginBottom: 2 }}>
          From Abroad to Kenya ({prefixesData.countryCode}):
        </Text>
        <Text style={{ fontSize: 12, color: theme.textSecondary }}>
          {prefixesData.internationalDialing.toKenya}
        </Text>
      </View>
    </View>
  );
}
