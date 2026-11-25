import React, { useDeferredValue, useState, useMemo } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, triggerHaptic } from "../../theme";
import { createStyles } from "./shared";
import platesData from "../../shared/data/number-plate-prefixes.json";

interface PlateStyle {
  bg: string;
  text: string;
  border: string;
  label: string;
}

/** 1. Number Plate Decoder (mirrors kenyahub/src/app/tools/number-plate-decoder/page.tsx) */
export function NumberPlateDecoder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [plate, setPlate] = useState("KDA 123A");
  const [platePosition, setPlatePosition] = useState<"front" | "rear">("front");
  const [seriesSearch, setSeriesSearch] = useState("");
  const deferredSeriesSearch = useDeferredValue(seriesSearch);
  const normalizedSpaces = plate.trim().toUpperCase().replace(/\s+/g, " ");
  const clean = normalizedSpaces.replace(/[^A-Z0-9]/g, "");

  const result = useMemo(() => {
    if (clean.length < 2) return null;

    // 1. Diplomatic Corps: e.g. "29 CD 1K", "40 CD 12K", "112 CD 5K"
    const cdMatch = normalizedSpaces.match(/^(\d+)\s+CD\s+(\d+[A-Z]?)$/) || clean.match(/^(\d+)CD(\d+[A-Z]?)$/);
    if (cdMatch) {
      const missionNo = cdMatch[1];
      return {
        classification: "Diplomatic Corps",
        origin: `Mission #${missionNo}`,
        year: "— (Diplomatic Series)",
        details: `Accredited Diplomatic Mission #${missionNo} — Red plate with white lettering (Ministry of Foreign Affairs & NTSA)`,
        badgeColor: "#EF4444",
        plateStyle: {
          bg: "#BE2126",
          text: "#FFFFFF",
          border: "#7F1D1D",
          label: "Diplomatic (Red Plate)",
        } as PlateStyle,
      };
    }

    // 2. Consular Corps: e.g. "29 CC 1K"
    const ccMatch = normalizedSpaces.match(/^(\d+)\s+CC\s+(\d+[A-Z]?)$/) || clean.match(/^(\d+)CC(\d+[A-Z]?)$/);
    if (ccMatch) {
      const missionNo = ccMatch[1];
      return {
        classification: "Consular Corps",
        origin: `Mission #${missionNo}`,
        year: "— (Consular Series)",
        details: `Accredited Consular Mission #${missionNo} — Red plate with white lettering`,
        badgeColor: "#EF4444",
        plateStyle: {
          bg: "#BE2126",
          text: "#FFFFFF",
          border: "#7F1D1D",
          label: "Consular (Red Plate)",
        } as PlateStyle,
      };
    }

    // 3. United Nations: e.g. "UN 1234", "40 UN 12K"
    if (clean.startsWith("UN") || /^\d+UN\d+/.test(clean)) {
      return {
        classification: "United Nations Agency",
        origin: "UNON / Diplomatic Nairobi",
        year: "— (UN Series)",
        details: "United Nations & Specialized Agencies — UN Blue plate with white lettering",
        badgeColor: "#38BDF8",
        plateStyle: {
          bg: "#0284C7",
          text: "#FFFFFF",
          border: "#075985",
          label: "UN Agency (Blue Plate)",
        } as PlateStyle,
      };
    }

    // 4. County Government: e.g. "47 CG 001A" or "047 CG 001A" (never match civilian KCG)
    const cgMatch =
      normalizedSpaces.match(/^(0?[1-9]|[1-3]\d|4[0-7])\s+CG\b/) ||
      clean.match(/^(0?[1-9]|[1-3]\d|4[0-7])CG/);
    if (cgMatch) {
      const countyNo = cgMatch ? `County #${cgMatch[1].padStart(3, "0")}` : "County Government";
      return {
        classification: "County Government (CG)",
        origin: countyNo,
        year: "Official County Allocation",
        details: `Devolved County Government official vehicle (${countyNo}) — Green/White plate`,
        badgeColor: theme.kenyaGreenLight,
        plateStyle: {
          bg: "#006B3F",
          text: "#FFFFFF",
          border: "#064E3B",
          label: "County Govt (Green Plate)",
        } as PlateStyle,
      };
    }

    // 5. National Government (GK) & KDF
    if (clean.startsWith("GK")) {
      return {
        classification: "Government of Kenya (GK)",
        origin: "National Government Registry",
        year: "Official / Institutional Series",
        details: "National Government Ministry / Parastatal vehicle — Blue-trimmed white/yellow plate",
        badgeColor: theme.sky,
        plateStyle: {
          bg: "#FFFFFF",
          text: "#1D4ED8",
          border: "#1D4ED8",
          label: "GK Official Plate",
        } as PlateStyle,
      };
    }

    if (clean.startsWith("KDF") || clean.startsWith("KA") && /^\d+$/.test(clean.slice(2))) {
      return {
        classification: "Kenya Defence Forces (KDF)",
        origin: "Ministry of Defence",
        year: "Military Series",
        details: "Kenya Defence Forces military vehicle — Black plate with white lettering",
        badgeColor: theme.gold,
        plateStyle: {
          bg: "#111827",
          text: "#FFFFFF",
          border: "#374151",
          label: "KDF (Black Plate)",
        } as PlateStyle,
      };
    }

    // 6. Other Special Plates from dataset
    for (const sp of platesData.specialPlates as any[]) {
      if (clean.startsWith(sp.prefix)) {
        return {
          classification: `${sp.type} (${sp.prefix})`,
          origin: sp.type,
          year: "Official / Institutional Series",
          details: sp.description,
          badgeColor: theme.kenyaGreenLight,
          plateStyle: {
            bg: "#FFFFFF",
            text: "#111111",
            border: "#111111",
            label: `${sp.prefix} Series`,
          } as PlateStyle,
        };
      }
    }

    // 7. Civilian Motor Vehicle
    const civilianStyle: PlateStyle =
      platePosition === "front"
        ? { bg: "#FFFFFF", text: "#111111", border: "#111111", label: "Front Plate (White)" }
        : { bg: "#FACC15", text: "#111111", border: "#854D0E", label: "Rear Plate (Yellow)" };

    const prefix = clean.substring(0, 3);
    const match = (platesData.prefixes as any[]).find((p) => p.prefix === prefix);
    if (match) {
      return {
        classification: "Private / Civilian Motor Vehicle",
        origin: match.county,
        year: match.yearRange,
        details: `Registered in ${match.county}, approximately ${match.yearRange} (NTSA Civilian Series)`,
        badgeColor: theme.gold,
        plateStyle: civilianStyle,
      };
    }

    return {
      classification: "Civilian Motor Vehicle (Recent / Custom Series)",
      origin: "Nairobi (Centralized NTSA Registry)",
      year: "Recent NTSA Allocation",
      details: "Registered under NTSA TIMS Digital System",
      badgeColor: theme.gold,
      plateStyle: civilianStyle,
    };
  }, [clean, normalizedSpaces, platePosition, theme]);

  const [showAllSeries, setShowAllSeries] = useState(false);

  const filteredSeries = useMemo(() => {
    const q = deferredSeriesSearch.trim().toLowerCase();
    const list = platesData.prefixes as any[];
    if (!q) return list.slice(-24).reverse();
    return list.filter(
      (p) =>
        p.prefix.toLowerCase().includes(q) ||
        p.yearRange.toLowerCase().includes(q) ||
        p.county.toLowerCase().includes(q)
    );
  }, [deferredSeriesSearch]);

  const displayedSeries = useMemo(
    () => (showAllSeries ? filteredSeries : filteredSeries.slice(0, 24)),
    [filteredSeries, showAllSeries]
  );

  const isCivilian = result?.classification.includes("Civilian");

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Vehicle Number Plate</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            multiline={false}
            numberOfLines={1}
            value={plate}
            onChangeText={setPlate}
            placeholder="e.g. KDA 456B, 29 CD 1K, 47 CG 001A"
            placeholderTextColor={theme.textMuted}
            autoCapitalize="characters"
            style={[styles.textInputPlate, { paddingHorizontal: 38 }]}
          />
          {plate.length > 0 && (
            <Pressable
              onPress={() => setPlate("")}
              accessibilityRole="button"
              accessibilityLabel="Clear number plate"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={20} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
        {/* Quick Sample Plates */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
          {["KDA 123A", "29 CD 1K", "47 CG 001A", "GK B123", "UN 402K"].map((sample) => (
            <Pressable
              key={sample}
              onPress={() => {
                triggerHaptic(6);
                setPlate(sample);
              }}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: plate.toUpperCase() === sample ? theme.gold : theme.border,
                backgroundColor:
                  plate.toUpperCase() === sample ? `${theme.gold}22` : theme.bgElevated,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: plate.toUpperCase() === sample ? theme.gold : theme.textSecondary,
                }}
              >
                {sample}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {result && (
        <View style={styles.card}>
          {/* Authentic Kenyan Number Plate Visual */}
          <View
            style={[
              styles.plateDisplay,
              {
                backgroundColor: result.plateStyle.bg,
                borderColor: result.plateStyle.border,
                borderWidth: 2,
              },
            ]}
          >
            <View style={styles.plateFlag}>
              <View style={{ height: 4, backgroundColor: "#000" }} />
              <View style={{ height: 4, backgroundColor: "#BE2126" }} />
              <View style={{ height: 4, backgroundColor: "#006B3F" }} />
            </View>
            <Text style={[styles.plateDisplayText, { color: result.plateStyle.text }]}>
              {plate.toUpperCase() || "KENYA"}
            </Text>
          </View>

          {/* Front (White) vs Rear (Yellow) Toggle for Civilian Plates */}
          {isCivilian && (
            <View style={{ flexDirection: "row", gap: 6, marginBottom: 8 }}>
              <Pressable
                onPress={() => setPlatePosition("front")}
                style={{
                  flex: 1,
                  paddingVertical: 6,
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  borderColor: platePosition === "front" ? theme.gold : theme.border,
                  backgroundColor: platePosition === "front" ? `${theme.gold}20` : theme.bgElevated,
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: "700", color: platePosition === "front" ? theme.gold : theme.textSecondary }}>
                  Front Plate (White)
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setPlatePosition("rear")}
                style={{
                  flex: 1,
                  paddingVertical: 6,
                  borderRadius: 8,
                  borderWidth: 1,
                  alignItems: "center",
                  borderColor: platePosition === "rear" ? theme.gold : theme.border,
                  backgroundColor: platePosition === "rear" ? `${theme.gold}20` : theme.bgElevated,
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: "700", color: platePosition === "rear" ? theme.gold : theme.textSecondary }}>
                  Rear Plate (Yellow)
                </Text>
              </Pressable>
            </View>
          )}

          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Classification</Text>
            <Text style={[styles.rowValue, { color: result.badgeColor }]}>
              {result.classification}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Registration Origin</Text>
            <Text style={styles.rowValue}>{result.origin}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Registration Period</Text>
            <Text style={styles.rowValue}>{result.year}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Details</Text>
            <Text style={styles.rowValue}>{result.details}</Text>
          </View>
        </View>
      )}

      {/* Kenya Plate Types Reference Table */}
      <Text style={styles.subHeading}>Kenya Plate Types & Colors</Text>
      <View style={styles.card}>
        {(platesData.plateTypes as any[]).map((pt, i) => (
          <View
            key={i}
            style={[
              styles.tableRow,
              {
                borderBottomWidth:
                  i === platesData.plateTypes.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                {pt.type}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textMuted }}>{pt.description}</Text>
            </View>
            <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.gold }}>
              {pt.color}
            </Text>
          </View>
        ))}
      </View>

      {/* Special / Government Plate Prefixes */}
      <Text style={styles.subHeading}>Special & Government Plate Prefixes</Text>
      <View style={styles.card}>
        {(platesData.specialPlates as any[]).map((sp, i) => (
          <View
            key={i}
            style={[
              styles.tableRow,
              {
                borderBottomWidth:
                  i === platesData.specialPlates.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <View style={{ width: 52 }}>
              <Text style={{ fontSize: 13, fontWeight: "900", color: theme.gold }}>
                {sp.prefix}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12.5, fontWeight: "700", color: theme.textPrimary }}>
                {sp.type}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                {sp.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Civilian Series Timeline Lookup */}
      <Text style={styles.subHeading}>
        Civilian Plate Series Timeline ({platesData.prefixes.length} Series)
      </Text>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          multiline={false}
          numberOfLines={1}
          value={seriesSearch}
          onChangeText={(txt) => { setSeriesSearch(txt); setShowAllSeries(false); }}
          placeholder="Search prefix or year (e.g. KDA)..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {seriesSearch.length > 0 && (
          <Pressable
            onPress={() => setSeriesSearch("")}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            hitSlop={8}
          >
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>
      <View style={styles.card}>
        {displayedSeries.map((item, idx) => (
          <View key={`${item.prefix}-${item.yearRange}-${idx}`} style={styles.tableRow}>
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold, width: 56 }}>
              {item.prefix}
            </Text>
            <Text style={{ fontSize: 12.5, color: theme.textPrimary, flex: 1 }}>
              {item.yearRange}
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary }}>{item.county}</Text>
          </View>
        ))}
        {filteredSeries.length > 24 && (
          <Pressable
            onPress={() => setShowAllSeries((prev) => !prev)}
            accessibilityRole="button"
            style={{
              marginTop: 8,
              paddingVertical: 9,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: theme.gold,
              backgroundColor: `${theme.gold}18`,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold }}>
              {showAllSeries
                ? "Show fewer series"
                : `Show more (${filteredSeries.length - 24} more series)`}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
