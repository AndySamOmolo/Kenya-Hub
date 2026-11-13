import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../theme";
import { styles } from "./shared";
import countiesData from "../../shared/data/counties.json";

// ─── 3. WARD & CONSTITUENCY FINDER TOOL ───
export function WardConstituencyFinderTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme } = useTheme();
  const [selectedSlug, setSelectedSlug] = useState("nairobi");

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"order" | "alpha">("order");

  const currentCounty = useMemo(() => {
    return (
      countiesData.counties.find((c) => c.slug === selectedSlug) ||
      countiesData.counties[0]
    );
  }, [selectedSlug]);

  const filteredConstituencies = useMemo(() => {
    const q = search.trim().toLowerCase();
    const indexed = currentCounty.constituencies.map((name, i) => ({
      name,
      num: i + 1,
    }));
    const list = !q
      ? indexed
      : indexed.filter((c) => c.name.toLowerCase().includes(q));
    if (sortBy === "alpha") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [currentCounty, search, sortBy]);

  const density = useMemo(() => {
    if (!currentCounty.area) return 0;
    return Math.round(currentCounty.population / currentCounty.area);
  }, [currentCounty]);

  return (
    <View style={styles.toolWrap}>
      {/* County Selector Pills */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Select County ({countiesData.counties.length} available)
      </Text>
      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        {countiesData.counties.map((c) => {
          const active = c.slug === selectedSlug;
          return (
            <Pressable
              key={c.code}
              onPress={() => setSelectedSlug(c.slug)}
              style={[
                styles.langPill,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.langPillText,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {String(c.code).padStart(3, "0")} · {c.name}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* County Statistics Card */}
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <Text style={[styles.infoTitle, { color: theme.textPrimary }]}>
            {currentCounty.name} County (#{String(currentCounty.code).padStart(3, "0")})
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold }}>
            HQ: {currentCounty.capital}
          </Text>
        </View>
        <View style={[styles.leadersGrid, { marginTop: 8 }]}>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Population (2019)</Text>
            <Text style={[styles.leaderVal, { color: theme.textPrimary }]}>
              {currentCounty.population.toLocaleString()}
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Land Area</Text>
            <Text style={[styles.leaderVal, { color: theme.textPrimary }]}>
              {currentCounty.area.toLocaleString()} km²
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Pop. Density</Text>
            <Text style={[styles.leaderVal, { color: theme.sky }]}>
              {density.toLocaleString()} / km²
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Constituencies</Text>
            <Text style={[styles.leaderVal, { color: theme.gold }]}>
              {currentCounty.constituencies.length}
            </Text>
          </View>
        </View>
      </View>

      {/* Leadership Card */}
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.infoTitle, { color: theme.textPrimary }]}>
          {currentCounty.name} County Leadership
        </Text>
        <View style={styles.leadersGrid}>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
              Governor
            </Text>
            <Text style={[styles.leaderVal, { color: theme.kenyaGreenLight }]}>
              {currentCounty.governor}
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
              Deputy Governor
            </Text>
            <Text style={[styles.leaderVal, { color: theme.textPrimary }]}>
              {currentCounty.deputyGovernor || "—"}
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
              Senator
            </Text>
            <Text style={[styles.leaderVal, { color: theme.sky }]}>
              {currentCounty.senator || "—"}
            </Text>
          </View>
          <View style={styles.leaderItem}>
            <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
              Woman Rep
            </Text>
            <Text style={[styles.leaderVal, { color: theme.gold }]}>
              {currentCounty.womenRep || "—"}
            </Text>
          </View>
        </View>
      </View>

      {/* Constituencies Filter & Sort */}
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <View
          style={[
            styles.searchBox,
            { backgroundColor: theme.bgCard, borderColor: theme.border, flex: 1 },
          ]}
        >
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            key={`ti-3-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
            placeholder="Filter constituencies..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
        </View>
        {([
          { key: "order", label: "# Order" },
          { key: "alpha", label: "A–Z" },
        ] as const).map((opt) => (
          <Pressable
            key={opt.key}
            onPress={() => setSortBy(opt.key)}
            style={[
              styles.catPill,
              {
                backgroundColor: sortBy === opt.key ? theme.gold : theme.bgCard,
                borderColor: sortBy === opt.key ? theme.gold : theme.border,
                height: 42,
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[
                styles.catPillText,
                { color: sortBy === opt.key ? theme.kenyaBlack : theme.textSecondary },
              ]}
            >
              {opt.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={[styles.countLabel, { color: theme.textMuted }]}>
        {filteredConstituencies.length} Constituencies in {currentCounty.name}
      </Text>

      <View style={styles.constituenciesGrid}>
        {filteredConstituencies.map((c) => (
          <View
            key={c.num}
            style={[
              styles.constituencyBox,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={[styles.numberCircle, { backgroundColor: `${theme.gold}20` }]}>
              <Text style={[styles.numberCircleText, { color: theme.gold }]}>
                {c.num}
              </Text>
            </View>
            <Text style={[styles.constituencyTitle, { color: theme.textPrimary }]}>
              {c.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

