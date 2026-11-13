import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import platesData from "../../shared/data/number-plate-prefixes.json";

/** 1. Number Plate Decoder (mirrors kenyahub/src/app/tools/number-plate-decoder/page.tsx) */
export function NumberPlateDecoder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [plate, setPlate] = useState("KDA 123A");
  const [seriesSearch, setSeriesSearch] = useState("");
  const clean = plate.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

  const result = useMemo(() => {
    if (clean.length < 2) return null;

    for (const sp of platesData.specialPlates as any[]) {
      if (clean.startsWith(sp.prefix) || (sp.prefix === "CG" && clean.includes("CG"))) {
        return {
          category: `${sp.type} (${sp.prefix})`,
          year: "Official / Institutional Series",
          county: sp.type,
          badgeColor: theme.kenyaGreenLight,
          type: sp.description,
        };
      }
    }

    const prefix = clean.substring(0, 3);
    const match = (platesData.prefixes as any[]).find((p) => p.prefix === prefix);
    if (match) {
      return {
        category: "Private / Civilian Motor Vehicle",
        prefix: match.prefix,
        year: match.yearRange,
        county: match.county,
        badgeColor: theme.gold,
        type: `Registered in ${match.county}, approximately ${match.yearRange}`,
      };
    }

    return {
      category: "Civilian Motor Vehicle (Recent / Custom Series)",
      prefix: prefix.length === 3 ? prefix : clean,
      year: "Recent NTSA Allocation",
      county: "Nairobi (Centralized NTSA Registry)",
      badgeColor: theme.gold,
      type: "Registered under NTSA TIMS Digital System",
    };
  }, [clean, theme]);

  const filteredSeries = useMemo(() => {
    const q = seriesSearch.trim().toLowerCase();
    const list = platesData.prefixes as any[];
    if (!q) return list.slice(-24).reverse();
    return list.filter(
      (p) =>
        p.prefix.toLowerCase().includes(q) ||
        p.yearRange.toLowerCase().includes(q) ||
        p.county.toLowerCase().includes(q)
    );
  }, [seriesSearch]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Vehicle Number Plate</Text>
        <TextInput
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={plate}
          onChangeText={setPlate}
          placeholder="e.g. KDA 456B, GK 123A, 47 CG 001A"
          placeholderTextColor={theme.textMuted}
          autoCapitalize="characters"
          style={styles.textInputPlate}
        />
      </View>

      {result && (
        <View style={styles.card}>
          <View style={styles.plateDisplay}>
            <View style={styles.plateFlag}>
              <View style={{ height: 4, backgroundColor: "#000" }} />
              <View style={{ height: 4, backgroundColor: "#BE2126" }} />
              <View style={{ height: 4, backgroundColor: "#006B3F" }} />
            </View>
            <Text style={styles.plateDisplayText}>{plate.toUpperCase() || "KENYA"}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Plate Category</Text>
            <Text style={[styles.rowValue, { color: result.badgeColor }]}>
              {result.category}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Registration Period</Text>
            <Text style={styles.rowValue}>{result.year}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Primary Issuing Hub</Text>
            <Text style={styles.rowValue}>{result.county}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Details</Text>
            <Text style={styles.rowValue}>{result.type}</Text>
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
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={seriesSearch}
          onChangeText={setSeriesSearch}
          placeholder="Search prefix or year (e.g. KDA)..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.card}>
        {filteredSeries.map((item, idx) => (
          <View key={item.prefix + idx} style={styles.tableRow}>
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold, width: 56 }}>
              {item.prefix}
            </Text>
            <Text style={{ fontSize: 12.5, color: theme.textPrimary, flex: 1 }}>
              {item.yearRange}
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary }}>{item.county}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

