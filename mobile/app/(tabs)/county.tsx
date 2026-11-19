import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useMemo, useRef, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Pressable,
  Modal,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../../src/theme";
import countiesData from "../../src/shared/data/counties.json";
import budgetsData from "../../src/shared/data/county-budgets.json";
import rainfallData from "../../src/shared/data/rainfall-patterns.json";
import hospitalsData from "../../src/shared/data/nhif-hospitals.json";
import postalData from "../../src/shared/data/postal-codes.json";

type CountyHubTab =
  | "directory"
  | "budgets"
  | "constituencies"
  | "climate"
  | "compare";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MONTH_KEYS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function normalizeCountyKey(name: string): string {
  return String(name || "")
    .toLowerCase()
    .replace(/['’\-]+/g, "")
    .replace(/\s+/g, "")
    .trim();
}

// Precompute static lookups once at module level for instant tab loads
const HOSPITAL_COUNT_MAP = new Map<string, number>();
for (const h of (hospitalsData as any).hospitals || []) {
  const k = normalizeCountyKey(h.county);
  HOSPITAL_COUNT_MAP.set(k, (HOSPITAL_COUNT_MAP.get(k) || 0) + 1);
}

const POSTAL_COUNT_MAP = new Map<string, number>();
for (const p of (postalData as any).codes || []) {
  const k = normalizeCountyKey(p.county);
  POSTAL_COUNT_MAP.set(k, (POSTAL_COUNT_MAP.get(k) || 0) + 1);
}

const BUDGET_MAP = new Map<number, any>();
for (const b of (budgetsData as any).budgets || []) {
  BUDGET_MAP.set(Number(b.code), b);
}

const RAIN_MAP = new Map<number, any>();
for (const r of (rainfallData as any).counties || []) {
  RAIN_MAP.set(Number(r.code), r);
}

const STATIC_ENRICHED_COUNTIES = countiesData.counties.map((c) => ({
  ...c,
  density: c.area > 0 ? Math.round(c.population / c.area) : 0,
  budget: BUDGET_MAP.get(c.code) || null,
  rain: RAIN_MAP.get(c.code) || null,
  hospitalsCount: HOSPITAL_COUNT_MAP.get(normalizeCountyKey(c.name)) || 0,
  postalCount: POSTAL_COUNT_MAP.get(normalizeCountyKey(c.name)) || 0,
}));

const NATIONAL_TOTALS = (() => {
  const budgets = (budgetsData as any).budgets || [];
  const totalAlloc = budgets.reduce(
    (s: number, b: any) => s + (b.allocation || 0),
    0
  );
  const totalOsr = budgets.reduce(
    (s: number, b: any) => s + (b.ownSourceRevenue || 0),
    0
  );
  const avgAbs =
    budgets.length > 0
      ? (
          budgets.reduce((s: number, b: any) => s + (b.absorptionRate || 0), 0) /
          budgets.length
        ).toFixed(1)
      : "0";
  return { totalAlloc, totalOsr, avgAbs };
})();

const DirectoryCardItem = React.memo(function DirectoryCardItem({
  item,
  router,
  theme,
}: {
  item: any;
  router: any;
  theme: any;
}) {
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
        accessibilityRole="button"
        accessibilityLabel={`Open ${item.name} County profile`}
        style={pressableStyle(styles.countyCard)}
        onPress={() => {
          triggerHaptic(8);
          router.push(`/county/${item.slug}` as any);
        }}
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
            <Text
              style={[styles.countyCapital, { color: theme.textSecondary }]}
            >
              HQ:{" "}
              <Text
                style={{
                  color: theme.textPrimary,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                {item.capital}
              </Text>
              {" · "}
              {item.area.toLocaleString()} km² ({item.density}/km²)
            </Text>
          </View>
          <View
            style={[
              styles.trailingCircle,
              { backgroundColor: theme.surfaceContainerHigh },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={16}
              color={theme.textSecondary}
            />
          </View>
        </View>

        <View
          style={[styles.cardInfoRow, { borderTopColor: theme.outlineVariant }]}
        >
          <View
            style={[
              styles.infoPill,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Ionicons
              name="person-circle-outline"
              size={14}
              color={theme.gold}
            />
            <Text
              style={[styles.infoPillText, { color: theme.textSecondary }]}
              numberOfLines={1}
            >
              Gov. {item.governor}
            </Text>
          </View>
          <View
            style={[
              styles.infoPill,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Ionicons name="people-outline" size={14} color={theme.sky} />
            <Text style={[styles.infoPillText, { color: theme.textSecondary }]}>
              {item.population >= 1000000
                ? `${(item.population / 1000000).toFixed(2)}M`
                : `${Math.round(item.population / 1000)}k`}
            </Text>
          </View>
          {item.budget && (
            <View
              style={[
                styles.infoPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons
                name="cash-outline"
                size={14}
                color={theme.kenyaGreenLight}
              />
              <Text
                style={[
                  styles.infoPillText,
                  { color: theme.kenyaGreenLight, fontFamily: "Outfit_700Bold" },
                ]}
              >
                KES {item.budget.allocation.toLocaleString()}M (
                {item.budget.absorptionRate}%)
              </Text>
            </View>
          )}
          {item.rain && (
            <View
              style={[
                styles.infoPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons name="rainy-outline" size={14} color={theme.sky} />
              <Text
                style={[styles.infoPillText, { color: theme.textSecondary }]}
              >
                {item.rain.annualRainfall} mm/yr
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
});

function renderBudgetCard(item: any, router: any, theme: any) {
  const b = item.budget;
  if (!b) return null;
  return (
    <Pressable
      key={item.code}
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
          padding: 14,
        },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.countyName, { color: theme.textPrimary }]}>
          {String(item.code).padStart(3, "0")}. {item.name} County
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.kenyaGreenLight,
          }}
        >
          {b.absorptionRate}% Absorbed
        </Text>
      </View>
      <View
        style={{
          height: 6,
          backgroundColor: theme.surfaceContainerHigh,
          borderRadius: 4,
          marginVertical: 8,
          overflow: "hidden",
        }}
      >
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
          Share:{" "}
          <Text style={{ fontFamily: "Outfit_700Bold", color: theme.textPrimary }}>
            KES {b.allocation.toLocaleString()}M
          </Text>
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          OSR:{" "}
          <Text style={{ fontFamily: "Outfit_700Bold", color: theme.gold }}>
            KES {b.ownSourceRevenue.toLocaleString()}M
          </Text>
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          Spent:{" "}
          <Text
            style={{
              fontFamily: "Outfit_700Bold",
              color: theme.kenyaGreenLight,
            }}
          >
            KES {b.expenditure.toLocaleString()}M
          </Text>
        </Text>
      </View>
    </Pressable>
  );
}

function renderConstituencyCard(item: any, router: any, theme: any) {
  return (
    <Pressable
      key={item.code}
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
          padding: 14,
          gap: 8,
        },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.countyName, { color: theme.textPrimary }]}>
          {String(item.code).padStart(3, "0")}. {item.name} County
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Outfit_700Bold",
            color: theme.gold,
          }}
        >
          {item.constituencies.length} Constituencies →
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        <Text
          style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
        >
          Gov:{" "}
          <Text
            style={{
              fontFamily: "Outfit_700Bold",
              color: theme.kenyaGreenLight,
            }}
          >
            {item.governor}
          </Text>
        </Text>
        <Text
          style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
        >
          Dep:{" "}
          <Text
            style={{ fontFamily: "Outfit_700Bold", color: theme.textPrimary }}
          >
            {item.deputyGovernor}
          </Text>
        </Text>
        {item.senator && (
          <Text
            style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
          >
            Sen:{" "}
            <Text style={{ fontFamily: "Outfit_700Bold", color: theme.sky }}>
              {item.senator}
            </Text>
          </Text>
        )}
        {item.womenRep && (
          <Text
            style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
          >
            WR:{" "}
            <Text style={{ fontFamily: "Outfit_700Bold", color: theme.gold }}>
              {item.womenRep}
            </Text>
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
          marginTop: 4,
        }}
      >
        {item.constituencies.map((con: string) => (
          <View
            key={con}
            style={{
              paddingHorizontal: 8,
              paddingVertical: 3,
              borderRadius: 6,
              backgroundColor: theme.surfaceContainerHigh,
              borderWidth: 1,
              borderColor: theme.outlineVariant,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: theme.textSecondary,
                fontFamily: "Inter_600SemiBold",
              }}
            >
              {con}
            </Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

function renderClimateCard(item: any, router: any, theme: any) {
  const r = item.rain;
  if (!r) return null;
  return (
    <Pressable
      key={item.code}
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
          padding: 14,
          gap: 8,
        },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={[styles.countyName, { color: theme.textPrimary }]}>
            {String(item.code).padStart(3, "0")}. {item.name} County
          </Text>
          <Text style={{ fontSize: 11, color: theme.textSecondary }}>
            {r.climateZone}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.sky,
          }}
        >
          {r.annualRainfall} mm/yr
        </Text>
      </View>
      {(r.monthly || r.monthlyAvg) && (
        <View style={{ flexDirection: "row", gap: 2 }}>
          {MONTH_KEYS.map((mk, idx) => {
            const mm = r.monthly?.[mk] ?? r.monthlyAvg?.[idx] ?? 0;
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
                      ? "rgba(47, 164, 99, 0.22)"
                      : "rgba(200, 150, 30, 0.12)",
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    fontFamily: "Outfit_700Bold",
                    color: theme.textMuted,
                  }}
                >
                  {MONTHS[idx]}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Outfit_800ExtraBold",
                    color: theme.textPrimary,
                  }}
                >
                  {mm}
                </Text>
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
}

export default function CountyScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { height: windowHeight } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState<CountyHubTab>("directory");
  const scrollRef = useRef<ScrollView>(null);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "code" | "name" | "population" | "area" | "budget" | "rainfall"
  >("code");
  const [compareSlugA, setCompareSlugA] = useState("nairobi");
  const [compareSlugB, setCompareSlugB] = useState("mombasa");
  const [pickerTarget, setPickerTarget] = useState<"A" | "B" | null>(null);
  const [pickerSearch, setPickerSearch] = useState("");

  const notes: string[] = (countiesData as any).notes || [];
  const enrichedCounties = STATIC_ENRICHED_COUNTIES;

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
      if (sortBy === "budget")
        return (b.budget?.allocation || 0) - (a.budget?.allocation || 0);
      if (sortBy === "rainfall")
        return (b.rain?.annualRainfall || 0) - (a.rain?.annualRainfall || 0);
      return a.code - b.code;
    });
  }, [query, enrichedCounties, sortBy]);

  const pickerFiltered = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();
    if (!q) return enrichedCounties;
    return enrichedCounties.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        String(c.code).padStart(3, "0").includes(q)
    );
  }, [pickerSearch, enrichedCounties]);

  const nationalTotals = NATIONAL_TOTALS;

  const countyA = useMemo(
    () =>
      enrichedCounties.find((c) => c.slug === compareSlugA) ||
      enrichedCounties[46],
    [enrichedCounties, compareSlugA]
  );
  const countyB = useMemo(
    () =>
      enrichedCounties.find((c) => c.slug === compareSlugB) ||
      enrichedCounties[0],
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
        subtitle="Budgets · 290 Constituencies · Climate · Compare"
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
        <ExpandablePillRow
          threshold={4}
          fadeColor={theme.surfaceContainerLow}
          style={{ marginBottom: activeTab !== "compare" ? 8 : 2 }}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          {(
            [
              {
                id: "directory",
                label: "Directory",
                icon: "grid-outline" as const,
              },
              {
                id: "budgets",
                label: "Budgets (FY 25/26)",
                icon: "wallet-outline" as const,
              },
              {
                id: "constituencies",
                label: "290 Constituencies",
                icon: "people-outline" as const,
              },
              {
                id: "climate",
                label: "Climate & Rain",
                icon: "rainy-outline" as const,
              },
              {
                id: "compare",
                label: "Compare 2",
                icon: "git-compare-outline" as const,
              },
            ] as const
          ).map((tab) => {
            const active = activeTab === tab.id;
            return (
              <Pressable
                key={tab.id}
                accessibilityRole="tab"
                accessibilityState={{ selected: active }}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => {
                  triggerHaptic(8);
                  setActiveTab(tab.id);
                }}
                style={pressableStyle([
                  styles.modeChip,
                  {
                    backgroundColor: active
                      ? theme.gold
                      : theme.surfaceContainer,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  },
                ])}
              >
                <Ionicons
                  name={tab.icon}
                  size={13}
                  color={active ? theme.kenyaBlack : theme.gold}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 18,
                    paddingBottom: 1,
                    includeFontPadding: false,
                    textAlignVertical: "center",
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
              <Ionicons name="search" size={18} color={theme.gold} />
              <TextInput
                multiline={false}
                accessibilityLabel="Search county, governor, or headquarters"
                placeholder="Search county, governor, or HQ..."
                numberOfLines={1}
                placeholderTextColor={theme.textMuted}
                value={query}
                onChangeText={setQuery}
                style={[styles.searchInput, { color: theme.textPrimary }]}
              />
              {query.length > 0 && (
                <Pressable
                  onPress={() => setQuery("")}
                  accessibilityRole="button"
                  accessibilityLabel="Clear county search"
                  hitSlop={8}
                >
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}
            </View>

            {/* Sort By Row */}
            <View style={styles.sortRow}>
              <Text style={[styles.sortLabel, { color: theme.textMuted }]}>
                SORT BY
              </Text>
              <ExpandablePillRow
                style={{ flex: 1 }}
                showExpandButton={false}
                fadeColor={theme.surfaceContainerLow}
                contentContainerStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
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
                      accessibilityRole="button"
                      accessibilityState={{ selected: active }}
                      onPress={() => {
                        triggerHaptic(8);
                        setSortBy(option.id);
                      }}
                      style={pressableStyle([
                        styles.segmentBtn,
                        {
                          backgroundColor: active
                            ? theme.primaryContainer
                            : theme.surfaceContainer,
                          borderColor: active
                            ? theme.gold
                            : theme.outlineVariant,
                        },
                      ])}
                    >
                      <Text
                        style={[
                          styles.segmentText,
                          {
                            color: active
                              ? theme.onPrimaryContainer
                              : theme.textSecondary,
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

      {activeTab === "compare" ? (
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          overScrollMode="always"
        >
          {/* TAB 5: COMPARE 2 COUNTIES WITH SEARCHABLE BOTTOM-SHEET PICKER & PROPORTION BARS (UX-12) */}
          {countyA && countyB && (
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
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_400Regular",
                  color: theme.textSecondary,
                }}
              >
                Tap either card to open the searchable 47-county picker, or swap
                counties in 1 tap.
              </Text>

              {/* Side-by-Side Selector Cards + Swap Button (UX-12) */}
              <View style={styles.compareSelectorRow}>
                <Pressable
                  onPress={() => {
                    triggerHaptic(8);
                    setPickerSearch("");
                    setPickerTarget("A");
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={`Select First County, currently ${countyA.name}`}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle([
                    styles.compareSelectorCard,
                    {
                      backgroundColor: `${theme.gold}15`,
                      borderColor: theme.gold,
                    },
                  ])}
                >
                  <Text
                    style={{
                      fontSize: 9.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.gold,
                      letterSpacing: 0.6,
                    }}
                  >
                    COUNTY A ({String(countyA.code).padStart(3, "0")})
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "Outfit_800ExtraBold",
                        color: theme.textPrimary,
                        flex: 1,
                      }}
                      numberOfLines={1}
                    >
                      {countyA.name}
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      size={16}
                      color={theme.gold}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 10.5,
                      color: theme.textSecondary,
                      marginTop: 2,
                    }}
                    numberOfLines={1}
                  >
                    HQ: {countyA.capital}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    triggerHaptic(10);
                    const prevA = compareSlugA;
                    setCompareSlugA(compareSlugB);
                    setCompareSlugB(prevA);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel="Swap County A and County B"
                  style={pressableStyle([
                    styles.swapCountiesBtn,
                    {
                      backgroundColor: theme.surfaceContainerHigh,
                      borderColor: theme.outlineVariant,
                    },
                  ])}
                >
                  <Ionicons
                    name="swap-horizontal"
                    size={18}
                    color={theme.gold}
                  />
                </Pressable>

                <Pressable
                  onPress={() => {
                    triggerHaptic(8);
                    setPickerSearch("");
                    setPickerTarget("B");
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={`Select Second County, currently ${countyB.name}`}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle([
                    styles.compareSelectorCard,
                    {
                      backgroundColor: `${theme.kenyaGreenLight}15`,
                      borderColor: theme.kenyaGreenLight,
                    },
                  ])}
                >
                  <Text
                    style={{
                      fontSize: 9.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.kenyaGreenLight,
                      letterSpacing: 0.6,
                    }}
                  >
                    COUNTY B ({String(countyB.code).padStart(3, "0")})
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "Outfit_800ExtraBold",
                        color: theme.textPrimary,
                        flex: 1,
                      }}
                      numberOfLines={1}
                    >
                      {countyB.name}
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      size={16}
                      color={theme.kenyaGreenLight}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 10.5,
                      color: theme.textSecondary,
                      marginTop: 2,
                    }}
                    numberOfLines={1}
                  >
                    HQ: {countyB.capital}
                  </Text>
                </Pressable>
              </View>

              <View
                style={{
                  marginTop: 8,
                  borderTopWidth: 1,
                  borderTopColor: theme.outlineVariant,
                  paddingTop: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: 6,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.outlineVariant,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10.5,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.textMuted,
                      flex: 1.2,
                      textAlign: "left",
                    }}
                  >
                    METRIC
                  </Text>
                  <Text
                    style={{
                      fontSize: 10.5,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.gold,
                      flex: 1,
                      textAlign: "right",
                    }}
                  >
                    {countyA.name.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10.5,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.kenyaGreenLight,
                      flex: 1,
                      textAlign: "right",
                    }}
                  >
                    {countyB.name.toUpperCase()}
                  </Text>
                </View>
                {[
                  {
                    label: "Capital HQ",
                    a: countyA.capital,
                    b: countyB.capital,
                  },
                  {
                    label: "Governor",
                    a: countyA.governor,
                    b: countyB.governor,
                  },
                  {
                    label: "Senator",
                    a: countyA.senator || "—",
                    b: countyB.senator || "—",
                  },
                  {
                    label: "Woman Rep",
                    a: countyA.womenRep || "—",
                    b: countyB.womenRep || "—",
                  },
                  {
                    label: "Population",
                    a: countyA.population.toLocaleString(),
                    b: countyB.population.toLocaleString(),
                    numA: countyA.population,
                    numB: countyB.population,
                  },
                  {
                    label: "Land Area",
                    a: `${countyA.area.toLocaleString()} km²`,
                    b: `${countyB.area.toLocaleString()} km²`,
                    numA: countyA.area,
                    numB: countyB.area,
                  },
                  {
                    label: "Density",
                    a: `${countyA.density}/km²`,
                    b: `${countyB.density}/km²`,
                    numA: countyA.density,
                    numB: countyB.density,
                  },
                  {
                    label: "Constituencies",
                    a: `${countyA.constituencies.length}`,
                    b: `${countyB.constituencies.length}`,
                    numA: countyA.constituencies.length,
                    numB: countyB.constituencies.length,
                  },
                  {
                    label: "FY 25/26 Share",
                    a: `KES ${(countyA.budget?.allocation || 0).toLocaleString()}M`,
                    b: `KES ${(countyB.budget?.allocation || 0).toLocaleString()}M`,
                    numA: countyA.budget?.allocation || 0,
                    numB: countyB.budget?.allocation || 0,
                  },
                  {
                    label: "Own Revenue",
                    a: `KES ${(countyA.budget?.ownSourceRevenue || 0).toLocaleString()}M`,
                    b: `KES ${(countyB.budget?.ownSourceRevenue || 0).toLocaleString()}M`,
                    numA: countyA.budget?.ownSourceRevenue || 0,
                    numB: countyB.budget?.ownSourceRevenue || 0,
                  },
                  {
                    label: "Absorption %",
                    a: `${countyA.budget?.absorptionRate || 0}%`,
                    b: `${countyB.budget?.absorptionRate || 0}%`,
                    numA: countyA.budget?.absorptionRate || 0,
                    numB: countyB.budget?.absorptionRate || 0,
                  },
                  {
                    label: "Annual Rainfall",
                    a: `${countyA.rain?.annualRainfall || 0} mm`,
                    b: `${countyB.rain?.annualRainfall || 0} mm`,
                    numA: countyA.rain?.annualRainfall || 0,
                    numB: countyB.rain?.annualRainfall || 0,
                  },
                ].map((row) => {
                  const totalNum = (row.numA || 0) + (row.numB || 0);
                  const pctA =
                    totalNum > 0
                      ? Math.max(8, Math.min(92, ((row.numA || 0) / totalNum) * 100))
                      : 0;
                  return (
                    <View
                      key={row.label}
                      style={{
                        paddingVertical: 6,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: theme.outlineVariant,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 11,
                            color: theme.textMuted,
                            flex: 1.2,
                            textAlign: "left",
                          }}
                        >
                          {row.label}
                        </Text>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: "Outfit_700Bold",
                            color: theme.textPrimary,
                            flex: 1,
                            textAlign: "right",
                          }}
                        >
                          {row.a}
                        </Text>
                        <Text
                          style={{
                            fontSize: 11,
                            fontFamily: "Outfit_700Bold",
                            color: theme.textPrimary,
                            flex: 1,
                            textAlign: "right",
                          }}
                        >
                          {row.b}
                        </Text>
                      </View>
                      {totalNum > 0 && (
                        <View
                          style={{
                            height: 4,
                            borderRadius: 2,
                            overflow: "hidden",
                            flexDirection: "row",
                            backgroundColor: theme.surfaceContainerHigh,
                            marginTop: 4,
                            gap: 2,
                          }}
                        >
                          <View
                            style={{
                              flex: pctA,
                              backgroundColor: theme.gold,
                            }}
                          />
                          <View
                            style={{
                              flex: 100 - pctA,
                              backgroundColor: theme.kenyaGreenLight,
                            }}
                          />
                        </View>
                      )}
                    </View>
                  );
                })}
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
                  <Text
                    style={{
                      color: theme.gold,
                      fontFamily: "Outfit_800ExtraBold",
                    }}
                  >
                    •
                  </Text>
                  <Text
                    style={[styles.noteText, { color: theme.textSecondary }]}
                  >
                    {n}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      ) : (
        <FlatList
          data={filtered}
          extraData={[activeTab, theme]}
          keyExtractor={(item) => `${activeTab}-${item.code}`}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          overScrollMode="always"
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          windowSize={7}
          removeClippedSubviews={Platform.OS === "android"}
          ListHeaderComponent={
            <>
              {/* National Summary Strip */}
              <View style={{ flexDirection: "row", gap: 8, marginBottom: 12 }}>
                <View
                  style={[
                    styles.miniStat,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 8.5,
                      fontFamily: "Outfit_700Bold",
                      letterSpacing: 0.4,
                      color: theme.textMuted,
                    }}
                  >
                    EQUITABLE SHARE
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.gold,
                      marginTop: 2,
                    }}
                  >
                    KES {(nationalTotals.totalAlloc / 1000).toFixed(1)}B
                  </Text>
                </View>
                <View
                  style={[
                    styles.miniStat,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 8.5,
                      fontFamily: "Outfit_700Bold",
                      letterSpacing: 0.4,
                      color: theme.textMuted,
                    }}
                  >
                    OWN REVENUE
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.sky,
                      marginTop: 2,
                    }}
                  >
                    KES {(nationalTotals.totalOsr / 1000).toFixed(1)}B
                  </Text>
                </View>
                <View
                  style={[
                    styles.miniStat,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 8.5,
                      fontFamily: "Outfit_700Bold",
                      letterSpacing: 0.4,
                      color: theme.textMuted,
                    }}
                  >
                    AVG ABSORPTION
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.kenyaGreenLight,
                      marginTop: 2,
                    }}
                  >
                    {nationalTotals.avgAbs}%
                  </Text>
                </View>
              </View>

              <Text style={[styles.countText, { color: theme.textMuted }]}>
                Showing {filtered.length} of 47 counties
              </Text>
            </>
          }
          renderItem={({ item }) => {
            if (activeTab === "budgets")
              return renderBudgetCard(item, router, theme);
            if (activeTab === "constituencies")
              return renderConstituencyCard(item, router, theme);
            if (activeTab === "climate")
              return renderClimateCard(item, router, theme);
            return (
              <DirectoryCardItem item={item} router={router} theme={theme} />
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Ionicons
                name="search-outline"
                size={44}
                color={theme.textMuted}
              />
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
                No counties match &ldquo;{query}&rdquo;
              </Text>
            </View>
          }
        />
      )}

      {/* Searchable 47-County Picker Modal for Compare Tab (UX-12) */}
      <Modal
        visible={pickerTarget !== null}
        animationType="slide"
        transparent
        accessibilityViewIsModal={true}
        onRequestClose={() => setPickerTarget(null)}
      >
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.pickerSheet,
              {
                maxHeight: Math.round(windowHeight * 0.78),
                backgroundColor: theme.bgPrimary,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View style={styles.pickerHeaderRow}>
              <Text style={[styles.pickerTitle, { color: theme.textPrimary }]}>
                Select County {pickerTarget === "A" ? "A" : "B"}
              </Text>
              <Pressable
                onPress={() => setPickerTarget(null)}
                accessibilityRole="button"
                accessibilityLabel="Close county picker"
                hitSlop={10}
              >
                <Ionicons name="close-circle" size={24} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.searchBar,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                  marginBottom: 10,
                },
              ]}
            >
              <Ionicons name="search" size={18} color={theme.gold} />
              <TextInput
                value={pickerSearch}
                onChangeText={setPickerSearch}
                placeholder="Type county name, code (001-047) or HQ..."
                placeholderTextColor={theme.textMuted}
                style={[styles.searchInput, { color: theme.textPrimary }]}
                autoFocus
              />
              {pickerSearch.length > 0 && (
                <Pressable onPress={() => setPickerSearch("")} hitSlop={8}>
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}
            </View>

            <FlatList
              data={pickerFiltered}
              keyExtractor={(item) => `pick-${item.slug}`}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                const isSelected =
                  (pickerTarget === "A" && compareSlugA === item.slug) ||
                  (pickerTarget === "B" && compareSlugB === item.slug);
                return (
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() => {
                      triggerHaptic(8);
                      if (pickerTarget === "A") setCompareSlugA(item.slug);
                      else if (pickerTarget === "B") setCompareSlugB(item.slug);
                      setPickerTarget(null);
                    }}
                    style={pressableStyle([
                      styles.pickerRow,
                      {
                        backgroundColor: isSelected
                          ? theme.primaryContainer
                          : "transparent",
                        borderBottomColor: theme.outlineVariant,
                      },
                    ])}
                  >
                    <View
                      style={[
                        styles.codeBadge,
                        {
                          backgroundColor: theme.surfaceContainerHigh,
                          borderColor: theme.outlineVariant,
                          width: 38,
                          height: 32,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: "Outfit_800ExtraBold",
                          color: theme.gold,
                        }}
                      >
                        {String(item.code).padStart(3, "0")}
                      </Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Outfit_700Bold",
                          color: theme.textPrimary,
                        }}
                      >
                        {item.name} County
                      </Text>
                      <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                        HQ: {item.capital} · Pop.{" "}
                        {item.population.toLocaleString()}
                      </Text>
                    </View>
                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color={theme.gold}
                      />
                    )}
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  modeChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    borderWidth: 1,
    paddingHorizontal: 13,
    height: 42,
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    height: "100%",
    marginLeft: 8,
    marginRight: 6,
    fontFamily: "Inter_500Medium",
    fontSize: 13,
    paddingVertical: 0,
    paddingHorizontal: 0,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sortLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    letterSpacing: 0.7,
  },
  segmentBtn: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
  },
  segmentText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  listContent: {
    padding: 16,
    paddingBottom: 36,
    gap: 10,
  },
  miniStat: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
  },
  countText: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    marginBottom: 2,
  },
  countyCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  countyCard: {
    padding: 14,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 14,
  },
  countyName: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15.5,
  },
  countyCapital: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    marginTop: 2,
  },
  trailingCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
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
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  infoPillText: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
  },
  notesCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 10,
  },
  notesHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 48,
    gap: 8,
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  compareSelectorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  compareSelectorCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 11,
  },
  swapCountiesBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "flex-end",
  },
  pickerSheet: {
    height: "78%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    padding: 16,
  },
  pickerHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  pickerTitle: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 18,
  },
  pickerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});
