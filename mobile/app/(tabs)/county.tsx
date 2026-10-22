import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import {
  Platform,
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
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
} from "../../src/theme";
import countiesData from "../../src/shared/data/counties.json";
import budgetsData from "../../src/shared/data/county-budgets.json";
import rainfallData from "../../src/shared/data/rainfall-patterns.json";
import hospitalsData from "../../src/shared/data/nhif-hospitals.json";
import postalData from "../../src/shared/data/postal-codes.json";

type CountyHubTab = "directory" | "budgets" | "constituencies" | "climate" | "compare";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export default function CountyScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<CountyHubTab>("directory");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "code" | "name" | "population" | "area" | "budget" | "rainfall"
  >("code");
  const [compareSlugA, setCompareSlugA] = useState("nairobi");
  const [compareSlugB, setCompareSlugB] = useState("mombasa");

  const notes: string[] = (countiesData as any).notes || [];

  const enrichedCounties = useMemo(() => {
    const budgetMap = new Map<number, any>();
    for (const b of (budgetsData as any).budgets || []) {
      budgetMap.set(Number(b.code), b);
    }
    const rainMap = new Map<number, any>();
    for (const r of (rainfallData as any).counties || []) {
      rainMap.set(Number(r.code), r);
    }

    return countiesData.counties.map((c) => {
      const budget = budgetMap.get(c.code) || null;
      const rain = rainMap.get(c.code) || null;
      const density = c.area > 0 ? Math.round(c.population / c.area) : 0;
      const hospitalsCount = ((hospitalsData as any).hospitals || []).filter(
        (h: any) => h.county.toLowerCase() === c.name.toLowerCase()
      ).length;
      const postalCount = ((postalData as any).codes || []).filter(
        (p: any) => p.county.toLowerCase() === c.name.toLowerCase()
      ).length;
      return {
        ...c,
        density,
        budget,
        rain,
        hospitalsCount,
        postalCount,
      };
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = !q
      ? enrichedCounties
      : enrichedCounties.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.capital.toLowerCase().includes(q) ||
            c.governor.toLowerCase().includes(q) ||
            (c.senator && c.senator.toLowerCase().includes(q)) ||
            (c.womenRep && c.womenRep.toLowerCase().includes(q)) ||
            String(c.code).padStart(3, "0").includes(q) ||
            c.constituencies.some((con) => con.toLowerCase().includes(q))
        );

    return [...list].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "population") return b.population - a.population;
      if (sortBy === "area") return b.area - a.area;
      if (sortBy === "budget") return (b.budget?.allocation || 0) - (a.budget?.allocation || 0);
      if (sortBy === "rainfall") return (b.rain?.annualRainfall || 0) - (a.rain?.annualRainfall || 0);
      return a.code - b.code;
    });
  }, [query, enrichedCounties, sortBy]);

  const nationalTotals = useMemo(() => {
    const budgets = (budgetsData as any).budgets || [];
    const totalAlloc = budgets.reduce((s: number, b: any) => s + (b.allocation || 0), 0);
    const totalOsr = budgets.reduce((s: number, b: any) => s + (b.ownSourceRevenue || 0), 0);
    const avgAbs =
      budgets.length > 0
        ? (budgets.reduce((s: number, b: any) => s + (b.absorptionRate || 0), 0) / budgets.length).toFixed(1)
        : "0";
    return { totalAlloc, totalOsr, avgAbs };
  }, []);

  const countyA = useMemo(
    () => enrichedCounties.find((c) => c.slug === compareSlugA) || enrichedCounties[46],
    [enrichedCounties, compareSlugA]
  );
  const countyB = useMemo(
    () => enrichedCounties.find((c) => c.slug === compareSlugB) || enrichedCounties[0],
    [enrichedCounties, compareSlugB]
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="47 Counties Hub"
        subtitle={`Budgets · 290 Constituencies · Climate · Compare`}
      />

      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.surfaceContainerLow,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        {/* Consolidated Mode Tabs */}
        <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6, paddingBottom: 10 }}>
          {([
            { id: "directory", label: "🏛️ Directory" },
            { id: "budgets", label: "📊 Budgets (FY 25/26)" },
            { id: "constituencies", label: "🗳️ 290 Constituencies" },
            { id: "climate", label: "🌧️ Climate & Rain" },
            { id: "compare", label: "⚖️ Compare 2" },
          ] as const).map((tab) => {
            const active = activeTab === tab.id;
            return (
              <Pressable
                key={tab.id}
                onPress={() => setActiveTab(tab.id)}
                style={[
                  styles.modeChip,
                  {
                    backgroundColor: active ? theme.gold : theme.surfaceContainerHigh,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Outfit_700Bold",
                    color: active ? theme.kenyaBlack : theme.textPrimary,
                  }}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        {activeTab !== "compare" && (
          <>
            <View
              style={[
                styles.searchBar,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons name="search" size={20} color={theme.gold} />
              <TextInput
                placeholder="Search county, governor, or HQ..."
                numberOfLines={1}
                placeholderTextColor={theme.textMuted}
                value={query}
                onChangeText={setQuery}
                style={[styles.searchInput, { color: theme.textPrimary }]}
              />
              {query.length > 0 && (
                <Pressable onPress={() => setQuery("")} hitSlop={8}>
                  <Ionicons name="close-circle" size={20} color={theme.textMuted} />
                </Pressable>
              )}
            </View>

            {/* Sort By Row */}
            <View style={styles.sortRow}>
              <Text style={[styles.sortLabel, { color: theme.textMuted }]}>SORT BY</Text>
              <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                {(
                  [
                    { id: "code", label: "Code" },
                    { id: "name", label: "A–Z" },
                    { id: "population", label: "Pop." },
                    { id: "area", label: "Area" },
                    { id: "budget", label: "Budget" },
                    { id: "rainfall", label: "Rain" },
                  ] as const
                ).map((option) => {
                  const active = sortBy === option.id;
                  return (
                    <Pressable
                      key={option.id}
                      onPress={() => setSortBy(option.id)}
                      style={[
                        styles.segmentBtn,
                        {
                          backgroundColor: active ? theme.primaryContainer : theme.surfaceContainer,
                          borderRadius: 999,
                          borderWidth: 1,
                          borderColor: active ? theme.gold : theme.outlineVariant,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.segmentText,
                          {
                            color: active ? theme.onPrimaryContainer : theme.textSecondary,
                          },
                        ]}
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </ExpandablePillRow>
            </View>
          </>
        )}
      </View>

      <ScrollView
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {/* National Summary Strip */}
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 14 }}>
          <View style={[styles.miniStat, { backgroundColor: theme.surfaceContainer, borderColor: theme.outlineVariant }]}>
            <Text style={{ fontSize: 9, fontWeight: "800", color: theme.textMuted }}>EQUITABLE SHARE</Text>
            <Text style={{ fontSize: 14, fontWeight: "900", color: theme.gold }}>
              KES {(nationalTotals.totalAlloc / 1000).toFixed(1)}B
            </Text>
          </View>
          <View style={[styles.miniStat, { backgroundColor: theme.surfaceContainer, borderColor: theme.outlineVariant }]}>
            <Text style={{ fontSize: 9, fontWeight: "800", color: theme.textMuted }}>OWN REVENUE</Text>
            <Text style={{ fontSize: 14, fontWeight: "900", color: theme.sky }}>
              KES {(nationalTotals.totalOsr / 1000).toFixed(1)}B
            </Text>
          </View>
          <View style={[styles.miniStat, { backgroundColor: theme.surfaceContainer, borderColor: theme.outlineVariant }]}>
            <Text style={{ fontSize: 9, fontWeight: "800", color: theme.textMuted }}>AVG ABSORPTION</Text>
            <Text style={{ fontSize: 14, fontWeight: "900", color: theme.kenyaGreenLight }}>
              {nationalTotals.avgAbs}%
            </Text>
          </View>
        </View>

        {/* TAB 1: DIRECTORY */}
        {activeTab === "directory" && (
          <>
            <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
              Showing {filtered.length} of 47 counties · Tap any county for full dashboard
            </Text>
            {filtered.map((item) => {
              const codeFormatted = String(item.code).padStart(3, "0");
              return (
                <View
                  key={item.code}
                  style={[
                    styles.countyCardWrap,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={styles.countyCard}
                    onPress={() => router.push(`/county/${item.slug}` as any)}
                  >
                    <View style={styles.cardHeaderRow}>
                      <View
                        style={[
                          styles.codeBadge,
                          {
                            backgroundColor: theme.primaryContainer,
                            borderColor: `${theme.gold}40`,
                          },
                        ]}
                      >
                        <Text style={[styles.codeText, { color: theme.onPrimaryContainer }]}>
                          {codeFormatted}
                        </Text>
                      </View>
                      <View style={{ flex: 1, marginLeft: 12 }}>
                        <Text style={[styles.countyName, { color: theme.textPrimary }]}>
                          {item.name} County
                        </Text>
                        <Text style={[styles.countyCapital, { color: theme.textSecondary }]}>
                          HQ: <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>{item.capital}</Text>
                          {" · "}
                          {item.area.toLocaleString()} km² ({item.density}/km²)
                        </Text>
                      </View>
                      <View style={[styles.trailingCircle, { backgroundColor: theme.surfaceContainerHigh }]}>
                        <Ionicons name="arrow-forward" size={16} color={theme.textSecondary} />
                      </View>
                    </View>

                    <View style={[styles.cardInfoRow, { borderTopColor: theme.outlineVariant }]}>
                      <View style={[styles.infoPill, { backgroundColor: theme.surfaceContainerHigh, borderColor: theme.outlineVariant }]}>
                        <Ionicons name="person-circle-outline" size={14} color={theme.gold} />
                        <Text style={[styles.infoPillText, { color: theme.textSecondary }]} >
                          Gov. {item.governor}
                        </Text>
                      </View>
                      <View style={[styles.infoPill, { backgroundColor: theme.surfaceContainerHigh, borderColor: theme.outlineVariant }]}>
                        <Ionicons name="people-outline" size={14} color={theme.sky} />
                        <Text style={[styles.infoPillText, { color: theme.textSecondary }]}>
                          {item.population >= 1000000
                            ? `${(item.population / 1000000).toFixed(2)}M`
                            : `${Math.round(item.population / 1000)}k`}
                        </Text>
                      </View>
                      {item.budget && (
                        <View style={[styles.infoPill, { backgroundColor: theme.surfaceContainerHigh, borderColor: theme.outlineVariant }]}>
                          <Ionicons name="cash-outline" size={14} color={theme.kenyaGreenLight} />
                          <Text style={[styles.infoPillText, { color: theme.kenyaGreenLight, fontWeight: "700" }]}>
                            KES {item.budget.allocation.toLocaleString()}M ({item.budget.absorptionRate}%)
                          </Text>
                        </View>
                      )}
                      {item.rain && (
                        <View style={[styles.infoPill, { backgroundColor: theme.surfaceContainerHigh, borderColor: theme.outlineVariant }]}>
                          <Ionicons name="rainy-outline" size={14} color={theme.sky} />
                          <Text style={[styles.infoPillText, { color: theme.textSecondary }]}>
                            {item.rain.annualRainfall} mm/yr
                          </Text>
                        </View>
                      )}
                    </View>
                  </Pressable>
                </View>
              );
            })}
          </>
        )}

        {/* TAB 2: BUDGETS & ABSORPTION */}
        {activeTab === "budgets" && (
          <>
            <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
              FY 2025/26 County Budgets & Absorption Rates ({filtered.length} counties)
            </Text>
            {filtered.map((item) => {
              const b = item.budget;
              if (!b) return null;
              return (
                <Pressable
                  key={item.code}
                  onPress={() => router.push(`/county/${item.slug}` as any)}
                  style={[
                    styles.countyCardWrap,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                      padding: 14,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={[styles.countyName, { color: theme.textPrimary }]}>
                      {String(item.code).padStart(3, "0")}. {item.name} County
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "800", color: theme.kenyaGreenLight }}>
                      {b.absorptionRate}% Absorbed
                    </Text>
                  </View>
                  <View style={{ height: 6, backgroundColor: theme.surfaceContainerHigh, borderRadius: 4, marginVertical: 8, overflow: "hidden" }}>
                    <View
                      style={{
                        height: "100%",
                        width: `${Math.min(100, b.absorptionRate)}%`,
                        backgroundColor: theme.kenyaGreenLight,
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                      Share: <Text style={{ fontWeight: "700", color: theme.textPrimary }}>KES {b.allocation.toLocaleString()}M</Text>
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                      OSR: <Text style={{ fontWeight: "700", color: theme.gold }}>KES {b.ownSourceRevenue.toLocaleString()}M</Text>
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                      Spent: <Text style={{ fontWeight: "700", color: theme.kenyaGreenLight }}>KES {b.expenditure.toLocaleString()}M</Text>
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </>
        )}

        {/* TAB 3: CONSTITUENCIES & ELECTED LEADERS */}
        {activeTab === "constituencies" && (
          <>
            <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
              Elected Leaders & 290 Constituencies across {filtered.length} counties
            </Text>
            {filtered.map((item) => (
              <Pressable
                key={item.code}
                onPress={() => router.push(`/county/${item.slug}` as any)}
                style={[
                  styles.countyCardWrap,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                    padding: 14,
                    gap: 8,
                  },
                ]}
              >
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={[styles.countyName, { color: theme.textPrimary }]}>
                    {String(item.code).padStart(3, "0")}. {item.name} County
                  </Text>
                  <Text style={{ fontSize: 11, fontWeight: "700", color: theme.gold }}>
                    {item.constituencies.length} Constituencies →
                  </Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                  <Text style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}>
                    Gov: <Text style={{ fontWeight: "700", color: theme.kenyaGreenLight }}>{item.governor}</Text>
                  </Text>
                  <Text style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}>
                    Dep: <Text style={{ fontWeight: "700", color: theme.textPrimary }}>{item.deputyGovernor}</Text>
                  </Text>
                  <Text style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}>
                    Sen: <Text style={{ fontWeight: "700", color: theme.sky }}>{item.senator}</Text>
                  </Text>
                  <Text style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}>
                    W.Rep: <Text style={{ fontWeight: "700", color: theme.gold }}>{item.womenRep}</Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
                  {item.constituencies.map((con, idx) => (
                    <View
                      key={idx}
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 6,
                        backgroundColor: theme.surfaceContainerHigh,
                        borderWidth: 1,
                        borderColor: theme.outlineVariant,
                      }}
                    >
                      <Text style={{ fontSize: 11, color: theme.textPrimary }}>
                        {idx + 1}. {con}
                      </Text>
                    </View>
                  ))}
                </View>
              </Pressable>
            ))}
          </>
        )}

        {/* TAB 4: CLIMATE & RAINFALL */}
        {activeTab === "climate" && (
          <>
            <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
              12-Month Rainfall & Climate Zones ({filtered.length} counties)
            </Text>
            {filtered.map((item) => {
              const r = item.rain;
              if (!r) return null;
              return (
                <Pressable
                  key={item.code}
                  onPress={() => router.push(`/county/${item.slug}` as any)}
                  style={[
                    styles.countyCardWrap,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                      padding: 14,
                      gap: 8,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                      <Text style={[styles.countyName, { color: theme.textPrimary }]}>
                        {String(item.code).padStart(3, "0")}. {item.name} County
                      </Text>
                      <Text style={{ fontSize: 11, color: theme.textSecondary }}>{r.climateZone}</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: "800", color: theme.sky }}>
                      {r.annualRainfall} mm/yr
                    </Text>
                  </View>
                  {r.monthly && (
                    <View style={{ flexDirection: "row", gap: 2 }}>
                      {MONTH_KEYS.map((mk, idx) => {
                        const mm = r.monthly[mk] || 0;
                        return (
                          <View
                            key={mk}
                            style={{
                              flex: 1,
                              paddingVertical: 4,
                              borderRadius: 4,
                              alignItems: "center",
                              backgroundColor:
                                mm >= 150
                                  ? "rgba(26, 139, 209, 0.28)"
                                  : mm >= 70
                                  ? "rgba(26, 139, 209, 0.14)"
                                  : theme.surfaceContainerHigh,
                            }}
                          >
                            <Text style={{ fontSize: 7.5, color: theme.textMuted }}>{MONTHS[idx]}</Text>
                            <Text style={{ fontSize: 8, fontWeight: "800", color: theme.textPrimary }}>{mm}</Text>
                          </View>
                        );
                      })}
                    </View>
                  )}
                  <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                    Long Rains: {r.longRains} · Short Rains: {r.shortRains}
                  </Text>
                </Pressable>
              );
            })}
          </>
        )}

        {/* TAB 5: COMPARE 2 COUNTIES */}
        {activeTab === "compare" && countyA && countyB && (
          <View
            style={[
              styles.notesCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Text style={[styles.notesHeading, { color: theme.gold }]}>
              Compare Two Counties Side-by-Side
            </Text>
            <Text style={{ fontSize: 11, color: theme.textSecondary }}>
              Select First County ({countyA.name}):
            </Text>
            <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              {enrichedCounties.map((c) => (
                <Pressable
                  key={`a-${c.slug}`}
                  onPress={() => setCompareSlugA(c.slug)}
                  style={[
                    styles.modeChip,
                    {
                      backgroundColor: compareSlugA === c.slug ? theme.gold : theme.surfaceContainerHigh,
                      borderColor: compareSlugA === c.slug ? theme.gold : theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "700",
                      color: compareSlugA === c.slug ? theme.kenyaBlack : theme.textPrimary,
                    }}
                  >
                    {String(c.code).padStart(3, "0")} {c.name}
                  </Text>
                </Pressable>
              ))}
            </ExpandablePillRow>

            <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
              Select Second County ({countyB.name}):
            </Text>
            <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              {enrichedCounties.map((c) => (
                <Pressable
                  key={`b-${c.slug}`}
                  onPress={() => setCompareSlugB(c.slug)}
                  style={[
                    styles.modeChip,
                    {
                      backgroundColor: compareSlugB === c.slug ? theme.kenyaGreenLight : theme.surfaceContainerHigh,
                      borderColor: compareSlugB === c.slug ? theme.kenyaGreenLight : theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "700",
                      color: compareSlugB === c.slug ? theme.kenyaBlack : theme.textPrimary,
                    }}
                  >
                    {String(c.code).padStart(3, "0")} {c.name}
                  </Text>
                </Pressable>
              ))}
            </ExpandablePillRow>

            <View style={{ marginTop: 8, borderTopWidth: 1, borderTopColor: theme.outlineVariant, paddingTop: 8, gap: 8 }}>
              {[
                { label: "Capital HQ", a: countyA.capital, b: countyB.capital },
                { label: "Governor", a: countyA.governor, b: countyB.governor },
                { label: "Senator", a: countyA.senator || "—", b: countyB.senator || "—" },
                { label: "Woman Rep", a: countyA.womenRep || "—", b: countyB.womenRep || "—" },
                { label: "Population", a: countyA.population.toLocaleString(), b: countyB.population.toLocaleString() },
                { label: "Land Area", a: `${countyA.area.toLocaleString()} km²`, b: `${countyB.area.toLocaleString()} km²` },
                { label: "Density", a: `${countyA.density}/km²`, b: `${countyB.density}/km²` },
                { label: "Constituencies", a: `${countyA.constituencies.length}`, b: `${countyB.constituencies.length}` },
                { label: "FY 25/26 Share", a: `KES ${(countyA.budget?.allocation || 0).toLocaleString()}M`, b: `KES ${(countyB.budget?.allocation || 0).toLocaleString()}M` },
                { label: "Own Revenue", a: `KES ${(countyA.budget?.ownSourceRevenue || 0).toLocaleString()}M`, b: `KES ${(countyB.budget?.ownSourceRevenue || 0).toLocaleString()}M` },
                { label: "Absorption %", a: `${countyA.budget?.absorptionRate || 0}%`, b: `${countyB.budget?.absorptionRate || 0}%` },
                { label: "Annual Rainfall", a: `${countyA.rain?.annualRainfall || 0} mm`, b: `${countyB.rain?.annualRainfall || 0} mm` },
              ].map((row) => (
                <View key={row.label} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 4, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: theme.outlineVariant }}>
                  <Text style={{ fontSize: 11, color: theme.textMuted, flex: 1 }}>{row.label}</Text>
                  <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.gold, flex: 1, textAlign: "center" }}>{row.a}</Text>
                  <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.kenyaGreenLight, flex: 1, textAlign: "right" }}>{row.b}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* About the Data Notes */}
        {notes.length > 0 && (
          <View
            style={[
              styles.notesCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Text style={[styles.notesHeading, { color: theme.gold }]}>
              About Kenya&apos;s 47 Counties
            </Text>
            {notes.map((n, idx) => (
              <View key={idx} style={styles.noteRow}>
                <Text style={{ color: theme.gold, fontWeight: "900" }}>•</Text>
                <Text style={[styles.noteText, { color: theme.textSecondary }]}>
                  {n}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  modeChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 16,
    height: 46,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 13.5 },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 8,
  },
  sortLabel: { fontFamily: "Outfit_700Bold", fontSize: 10, letterSpacing: 1 },
  segmentBtn: { paddingHorizontal: 10, paddingVertical: 5 },
  segmentText: { fontFamily: "Outfit_700Bold", fontSize: 11 },
  listContent: { padding: 16, paddingBottom: 32 },
  miniStat: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
  },
  resultsCount: { fontSize: 12, marginBottom: 12 },
  countyCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  countyCard: { padding: 15 },
  cardHeaderRow: { flexDirection: "row", alignItems: "center" },
  codeBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: { fontFamily: "Outfit_800ExtraBold", fontSize: 13 },
  trailingCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  countyName: { fontFamily: "Outfit_700Bold", fontSize: 16 },
  countyCapital: { fontSize: 12, marginTop: 1 },
  cardInfoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  infoPillText: { fontSize: 11 },
  notesCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginTop: 8,
    gap: 8,
  },
  notesHeading: { fontFamily: "Outfit_700Bold", fontSize: 14, marginBottom: 2 },
  noteRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  noteText: { flex: 1, fontSize: 12, lineHeight: 17 },
});
