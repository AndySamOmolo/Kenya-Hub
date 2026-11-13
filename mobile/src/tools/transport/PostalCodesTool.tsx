import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import postalData from "../../shared/data/postal-codes.json";

/** 5. Postal Codes Lookup (mirrors kenyahub/src/app/tools/kenya-postal-codes/page.tsx) */
export function PostalCodesTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const [sortBy, setSortBy] = useState<"code" | "town" | "county">("code");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 40;
  const list = postalData.codes || [];

  useEffect(() => {
    setPage(1);
  }, [q, selectedCounty, sortBy]);

  const counties = useMemo(
    () => Array.from(new Set(list.map((item: any) => item.county))).sort(),
    [list]
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const res = list.filter((p: any) => {
      if (selectedCounty !== "all" && p.county !== selectedCounty) return false;
      if (!query) return true;
      return (
        p.code.toLowerCase().includes(query) ||
        (p.town && p.town.toLowerCase().includes(query)) ||
        (p.county && p.county.toLowerCase().includes(query))
      );
    });
    return [...res].sort((a: any, b: any) => {
      if (sortBy === "town") return a.town.localeCompare(b.town);
      if (sortBy === "county")
        return a.county.localeCompare(b.county) || a.code.localeCompare(b.code);
      return a.code.localeCompare(b.code);
    });
  }, [q, selectedCounty, sortBy, list]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
            key={`ti-5-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={q}
          onChangeText={setQ}
          placeholder="Search postal code, town, or county..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {q.length > 0 && (
          <Pressable onPress={() => setQ("")}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* County Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {["all", ...counties].map((c) => {
          const active = selectedCounty === c;
          return (
            <Pressable
              key={c}
              onPress={() => setSelectedCounty(c)}
              style={[
                styles.categoryChip,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {c === "all" ? "All Counties" : c}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort Row */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={styles.subHeading}>
          Showing {Math.min(filtered.length, page * PAGE_SIZE)} of {filtered.length} Post Offices
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "code", label: "Code" },
              { id: "town", label: "Town A–Z" },
              { id: "county", label: "County" },
            ] as const
          ).map((s) => {
            const active = sortBy === s.id;
            return (
              <Pressable
                key={s.id}
                onPress={() => setSortBy(s.id)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 8,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 10.5,
                    fontWeight: "700",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {s.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {filtered.slice(0, page * PAGE_SIZE).map((item: any, i: number) => (
        <View key={item.code + i} style={styles.postalCard}>
          <View style={styles.postalCodeBox}>
            <Text style={styles.postalCodeText}>{item.code}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.postalOffice}>{item.town}</Text>
            <Text style={styles.postalCounty}>
              {item.county} County {item.region ? `· ${item.region}` : ""}
            </Text>
          </View>
        </View>
      ))}
      {filtered.length > page * PAGE_SIZE && (
        <Pressable
          onPress={() => setPage((p) => p + 1)}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: theme.gold,
            backgroundColor: `${theme.gold}18`,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text style={{ fontSize: 12.5, fontWeight: "800", color: theme.gold }}>
            Load More Post Offices ({filtered.length - page * PAGE_SIZE} remaining)
          </Text>
        </Pressable>
      )}
    </View>
  );
}

