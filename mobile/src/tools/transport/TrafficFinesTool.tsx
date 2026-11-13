import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import finesData from "../../shared/data/traffic-fines.json";

/** 4. Traffic Fines Tool (mirrors kenyahub/src/app/tools/traffic-fines/page.tsx) */
export function TrafficFinesTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "fineDesc" | "fineAsc" | "points">(
    "default"
  );
  const categories = finesData.categories || [];

  const filteredOffences = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list: any[] = [];
    for (const cat of categories) {
      if (selectedCat !== "all" && cat.id !== selectedCat) continue;
      for (const off of cat.offences) {
        if (
          !q ||
          off.offence.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          list.push({ ...off, categoryName: cat.name, categoryIcon: cat.icon });
        }
      }
    }
    if (sortBy === "fineDesc") return [...list].sort((a, b) => b.fine - a.fine);
    if (sortBy === "fineAsc") return [...list].sort((a, b) => a.fine - b.fine);
    if (sortBy === "points")
      return [...list].sort((a, b) => b.demeritPoints - a.demeritPoints);
    return list;
  }, [search, selectedCat, sortBy, categories]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
            key={`ti-4-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={search}
          onChangeText={setSearch}
          placeholder="Search traffic offences..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* Category Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <Pressable
          onPress={() => setSelectedCat("all")}
          style={[
            styles.categoryChip,
            {
              backgroundColor: selectedCat === "all" ? theme.gold : theme.bgCard,
              borderColor: selectedCat === "all" ? theme.gold : theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.categoryChipText,
              { color: selectedCat === "all" ? theme.kenyaBlack : theme.textPrimary },
            ]}
          >
            All Categories
          </Text>
        </Pressable>
        {categories.map((cat) => {
          const active = selectedCat === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => setSelectedCat(cat.id)}
              style={[
                styles.categoryChip,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <DynamicIcon emoji={cat.icon} size={13} color={active ? theme.kenyaBlack : theme.gold} />
                <Text
                  style={[
                    styles.categoryChipText,
                    { color: active ? theme.kenyaBlack : theme.textPrimary },
                  ]}
                >
                  {cat.name}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort By Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 11, color: theme.textMuted }}>
          Showing {filteredOffences.length} offences
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "default", label: "Category" },
              { id: "fineDesc", label: "Highest Fine" },
              { id: "fineAsc", label: "Lowest Fine" },
              { id: "points", label: "Demerits" },
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

      {filteredOffences.map((item: any, i: number) => (
        <View key={i} style={styles.fineCard}>
          <View style={styles.fineTop}>
            <Text style={styles.fineTitle}>{item.offence}</Text>
            <View style={styles.fineBadge}>
              <Text style={styles.fineBadgeText}>
                KES {item.fine.toLocaleString()}
              </Text>
            </View>
          </View>
          <View style={styles.fineBottom}>
            <Text style={styles.fineCat}>
              {item.categoryName} · Demerit:{" "}
              <Text style={{ color: theme.gold, fontWeight: "700" }}>
                {item.demeritPoints} pts
              </Text>
            </Text>
            <Text
              style={[
                styles.arrestText,
                {
                  color: item.arrestable
                    ? theme.kenyaRedLight
                    : theme.kenyaGreenLight,
                },
              ]}
            >
              {item.arrestable ? "Arrestable / Court" : "Instant Fine"}
            </Text>
          </View>
          {item.additionalPenalty && (
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              + {item.additionalPenalty}
            </Text>
          )}
        </View>
      ))}

      {/* NTSA Demerit Points System (from web traffic-fines/page.tsx) */}
      <Text style={styles.subHeading}>
        NTSA Demerit Points System (Max {finesData.demeritPointSystem.maxPoints} Points)
      </Text>
      <View style={styles.card}>
        {finesData.demeritPointSystem.consequences.map((c, idx) => (
          <View key={idx} style={styles.tableRow}>
            <Text style={{ fontSize: 12.5, fontWeight: "800", color: theme.gold, width: 90 }}>
              {c.points} pts
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary, flex: 1 }}>
              {c.action}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

