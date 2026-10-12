import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe } from "../../src/theme";
import { BrandLogo } from "../../src/components/BrandLogo";
import countiesData from "../../src/shared/data/counties.json";

interface County {
  code: number;
  name: string;
  slug: string;
  capital: string;
  governor: string;
  deputyGovernor?: string;
  senator?: string;
  womenRep?: string;
  website?: string;
  phone?: string;
  population: number;
  area: number;
  constituencies: string[];
}

export default function CountyScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const counties: County[] = countiesData.counties;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return counties;
    return counties.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.governor.toLowerCase().includes(q) ||
        String(c.code).padStart(2, "0").includes(q)
    );
  }, [query, counties]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <View style={styles.headerTop}>
          <BrandLogo size="sm" showText={false} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>County Governments</Text>
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
              All 47 devolved governments of Kenya
            </Text>
          </View>
          <Pressable
            onPress={toggleTheme}
            style={[styles.themeBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
            hitSlop={8}
          >
            <Ionicons name={isDark ? "sunny-outline" : "moon-outline"} size={16} color={theme.gold} />
          </Pressable>
        </View>

        {/* Search Input */}
        <View style={[styles.searchBar, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            placeholder="Search by county, capital, governor, or code..."
            placeholderTextColor={theme.textMuted}
            value={query}
            onChangeText={setQuery}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        {/* Stats strip */}
        <View style={[styles.statsStrip, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.gold }]}>47</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Counties</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.gold }]}>290</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Constituencies</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.gold }]}>50M+</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Total Pop.</Text>
          </View>
        </View>
      </View>

      {/* Counties List */}
      <ScrollView
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
          Showing {filtered.length} of {counties.length} counties
        </Text>

        {filtered.map((item) => {
          const codeFormatted = String(item.code).padStart(3, "0");
          return (
            <Pressable
              key={item.code}
              style={({ pressed }) => [
                styles.countyCard,
                {
                  backgroundColor: pressed ? theme.bgCardHover : theme.bgCard,
                  borderColor: pressed ? theme.gold : theme.border,
                },
              ]}
              onPress={() => router.push(`/county/${item.slug}` as any)}
            >
              <View style={styles.cardHeaderRow}>
                <View style={[styles.codeBadge, { backgroundColor: `${theme.gold}18`, borderColor: `${theme.gold}35` }]}>
                  <Text style={[styles.codeText, { color: theme.gold }]}>{codeFormatted}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.countyName, { color: theme.textPrimary }]}>{item.name}</Text>
                  <Text style={[styles.countyCapital, { color: theme.textSecondary }]}>
                    Headquarters: <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>{item.capital}</Text>
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={theme.textMuted}
                />
              </View>

              <View style={[styles.cardInfoRow, { borderTopColor: theme.border }]}>
                <View style={[styles.infoPill, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                  <Ionicons name="person-circle-outline" size={14} color={theme.gold} />
                  <Text style={[styles.infoPillText, { color: theme.textSecondary }]} numberOfLines={1}>
                    Gov. {item.governor}
                  </Text>
                </View>
                <View style={[styles.infoPill, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                  <Ionicons name="people-outline" size={14} color={theme.sky} />
                  <Text style={[styles.infoPillText, { color: theme.textSecondary }]}>
                    {item.population ? (item.population >= 1000000 ? `${(item.population / 1000000).toFixed(1)}M` : `${Math.round(item.population / 1000)}k`) : "—"}
                  </Text>
                </View>
                <View style={[styles.infoPill, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                  <Ionicons name="map-outline" size={14} color={theme.kenyaGreenLight} />
                  <Text style={[styles.infoPillText, { color: theme.textSecondary }]}>
                    {item.constituencies.length} Sub-counties
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}

        {filtered.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No counties found</Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try searching with a different name, governor, or county code
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  themeBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 20,
  },
  headerSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
  },
  statsStrip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
  statLabel: {
    fontSize: 10,
    marginTop: 1,
  },
  statDivider: {
    width: 1,
    height: 20,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  resultsCount: {
    fontSize: 12,
    marginBottom: 12,
  },
  countyCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBadge: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 13,
  },
  countyName: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  countyCapital: {
    fontSize: 12,
    marginTop: 1,
  },
  cardInfoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
  },
  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
  },
  infoPillText: {
    fontSize: 11,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 48,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
    maxWidth: 240,
  },
});
