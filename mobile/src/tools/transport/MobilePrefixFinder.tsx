import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import prefixesData from "../../shared/data/mobile-prefixes.json";

/** 2. Mobile Prefix Finder (mirrors kenyahub/src/app/tools/mobile-number-prefix/page.tsx) */
export function MobilePrefixFinder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [num, setNum] = useState("0722123456");
  const clean = num.trim().replace(/[^0-9]/g, "");

  const carrier = useMemo(() => {
    let prefix = clean.substring(0, 4);
    if (clean.startsWith("254")) {
      prefix = "0" + clean.substring(3, 6);
    }
    if (prefix.length < 4 || !prefix.startsWith("0")) return null;
    for (const net of prefixesData.networks) {
      if (net.prefixes.includes(prefix)) {
        return { ...net, matchedPrefix: prefix };
      }
    }
    return {
      name: "Unknown / Unallocated Prefix",
      color: theme.textMuted,
      matchedPrefix: prefix,
      prefixes: [],
      ussdCodes: [],
    };
  }, [clean, theme.textMuted]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Phone Number or Prefix</Text>
        <TextInput
            key={`ti-3-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={num}
          onChangeText={setNum}
          placeholder="e.g. 0722 123 456 or +254 733 123 456"
          placeholderTextColor={theme.textMuted}
          keyboardType="phone-pad"
          style={styles.textInput}
        />
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

      {/* Full Network Prefix Directory (from web mobile-number-prefix/page.tsx) */}
      <Text style={styles.subHeading}>Kenya Network Prefix Directory</Text>
      {prefixesData.networks.map((net) => (
        <View key={net.name} style={styles.card}>
          <View style={styles.carrierHeader}>
            <View style={[styles.carrierDot, { backgroundColor: net.color }]} />
            <Text style={styles.carrierTitle}>{net.name}</Text>
            <Text style={{ marginLeft: "auto", fontSize: 11, color: theme.textMuted }}>
              {net.prefixes.length} prefixes
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {net.prefixes.map((p) => (
              <View
                key={p}
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
              </View>
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

