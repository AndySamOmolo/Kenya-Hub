import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useDeferredValue, useMemo, useRef, useState } from "react";
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
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
  getThemedCardStyle,
  getThemedInputStyle,
} from "../../src/theme";
import { getContrastInk, type ThemeConfig, type ThemeMetrics } from "../../src/lib/theme-engine";
import { ThemedIcon, ThemedIconBadge } from "../../src/components/ThemedIcon";
import countiesData from "../../src/shared/data/counties.json";
import budgetsData from "../../src/shared/data/county-budgets.json";
import rainfallData from "../../src/shared/data/rainfall-patterns.json";
import hospitalsData from "../../src/shared/data/nhif-hospitals.json";
import postalData from "../../src/shared/data/postal-codes.json";
import solarData from "../../src/shared/data/solar-irradiance.json";
import soilsData from "../../src/shared/data/soil-types.json";
import parksData from "../../src/shared/data/national-parks.json";
import agrovetsData from "../../src/shared/data/agrovets.json";

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
const POSTAL_TOWNS_MAP = new Map<string, string[]>();
for (const p of (postalData as any).codes || []) {
  const k = normalizeCountyKey(p.county);
  POSTAL_COUNT_MAP.set(k, (POSTAL_COUNT_MAP.get(k) || 0) + 1);
  if (p.town) {
    const cleanTown = String(p.town).replace(/\s+GPO$/i, "").trim();
    const list = POSTAL_TOWNS_MAP.get(k) || [];
    if (cleanTown && !list.includes(cleanTown)) {
      list.push(cleanTown);
      POSTAL_TOWNS_MAP.set(k, list);
    }
  }
}

const SOLAR_MAP = new Map<string, { regionName: string; irradiance: number }>();
for (const reg of (solarData as any).regions || []) {
  for (const cname of reg.counties || []) {
    SOLAR_MAP.set(normalizeCountyKey(cname), {
      regionName: reg.name,
      irradiance: Number(reg.irradiance) || 0,
    });
  }
}

const PARKS_COUNT_MAP = new Map<string, number>();
for (const pk of (parksData as any).parks || []) {
  const k = normalizeCountyKey(pk.county);
  PARKS_COUNT_MAP.set(k, (PARKS_COUNT_MAP.get(k) || 0) + 1);
}

const AGROVETS_COUNT_MAP = new Map<string, number>();
for (const ag of (agrovetsData as any).agrovets || []) {
  const k = normalizeCountyKey(ag.county);
  AGROVETS_COUNT_MAP.set(k, (AGROVETS_COUNT_MAP.get(k) || 0) + 1);
}

// Official IEBC County Assembly Wards per county (total 1,450)
const WARDS_BY_CODE: Record<number, number> = {
  1: 30, 2: 20, 3: 35, 4: 15, 5: 10, 6: 20, 7: 30, 8: 30, 9: 30, 10: 20,
  11: 10, 12: 45, 13: 15, 14: 20, 15: 40, 16: 40, 17: 30, 18: 25, 19: 30, 20: 20,
  21: 35, 22: 60, 23: 30, 24: 20, 25: 15, 26: 25, 27: 30, 28: 20, 29: 30, 30: 30,
  31: 15, 32: 55, 33: 30, 34: 25, 35: 30, 36: 25, 37: 60, 38: 25, 39: 45, 40: 35,
  41: 30, 42: 35, 43: 40, 44: 40, 45: 45, 46: 20, 47: 85,
};

const URBAN_UTILITIES_SUMMARY: Record<string, string> = {
  nairobi: "Urban Utilities (NCWSC Water, KPLC, Huduma)",
  mombasa: "Urban Utilities (MOWASSCO Water, KPLC, Huduma)",
};

function getSoilAndCropsSummary(
  countyName: string,
  slug: string,
  climateZone?: string
): string {
  if (URBAN_UTILITIES_SUMMARY[slug]) return URBAN_UTILITIES_SUMMARY[slug];
  const targetNorm = normalizeCountyKey(countyName);
  const matched = ((soilsData as any).soilTypes || []).filter((st: any) =>
    (st.counties || []).some((cn: string) => {
      const cnNorm = normalizeCountyKey(cn);
      return cnNorm === targetNorm || cnNorm.includes(targetNorm);
    })
  );
  if (matched.length > 0) {
    const primary = matched[0];
    const shortSoil = String(primary.name || "").split(" (")[0];
    const crops = (primary.bestCrops || []).slice(0, 3).join(", ");
    return crops ? `${shortSoil} · ${crops}` : shortSoil;
  }
  const cz = (climateZone || "").toLowerCase();
  if (cz.includes("arid")) return "Arid Soils · Livestock, Sorghum, Millet";
  if (cz.includes("highland")) return "Volcanic Loam · Maize, Wheat, Dairy";
  if (cz.includes("lake")) return "Alluvial / Loam · Rice, Sugarcane, Fish";
  return "Mixed Loams · Maize, Beans, Livestock";
}

const BUDGET_MAP = new Map<number, any>();
for (const b of (budgetsData as any).budgets || []) {
  BUDGET_MAP.set(Number(b.code), b);
}

const RAIN_MAP = new Map<number, any>();
for (const r of (rainfallData as any).counties || []) {
  const vals = MONTH_KEYS.map((mk, idx) =>
    Number(r.monthly?.[mk] ?? r.monthlyAvg?.[idx] ?? 0)
  );
  const monthlySum = vals.reduce((acc, v) => acc + v, 0);
  let peakIdx = 0;
  let dryIdx = 0;
  for (let i = 1; i < vals.length; i++) {
    if (vals[i] > vals[peakIdx]) peakIdx = i;
    if (vals[i] < vals[dryIdx]) dryIdx = i;
  }
  RAIN_MAP.set(Number(r.code), {
    ...r,
    annualRainfall: monthlySum > 0 ? Math.round(monthlySum) : r.annualRainfall,
    peakMonth: `${MONTHS[peakIdx]} (${vals[peakIdx]} mm)`,
    driestMonth: `${MONTHS[dryIdx]} (${vals[dryIdx]} mm)`,
  });
}

const STATIC_ENRICHED_COUNTIES = countiesData.counties.map((c) => {
  const k = normalizeCountyKey(c.name);
  const rain = RAIN_MAP.get(c.code) || null;
  const solar = SOLAR_MAP.get(k) || null;
  const postalTowns = POSTAL_TOWNS_MAP.get(k) || [];
  const townPool =
    postalTowns.length >= 2
      ? postalTowns.slice(0, 3)
      : Array.from(new Set([c.capital, ...c.constituencies.slice(0, 2)]));
  return {
    ...c,
    density: c.area > 0 ? Math.round(c.population / c.area) : 0,
    wards: WARDS_BY_CODE[c.code] || 0,
    region: solar?.regionName || "Kenya",
    solarIrradiance: solar?.irradiance || 0,
    budget: BUDGET_MAP.get(c.code) || null,
    rain,
    soilCropsSummary: getSoilAndCropsSummary(c.name, c.slug, rain?.climateZone),
    majorTownsSummary: townPool.join(", "),
    hospitalsCount: HOSPITAL_COUNT_MAP.get(k) || 0,
    postalCount: POSTAL_COUNT_MAP.get(k) || 0,
    parksCount: PARKS_COUNT_MAP.get(k) || 0,
    agrovetsCount: AGROVETS_COUNT_MAP.get(k) || 0,
  };
});

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
  themeConfig,
  resolvedFonts,
  themedCardStyle,
  styles,
}: {
  item: any;
  router: any;
  theme: any;
  themeConfig: ThemeConfig;
  resolvedFonts: { heading: string; body: string; bold: string };
  themedCardStyle: ReturnType<typeof getThemedCardStyle>;
  styles: ReturnType<typeof createCountyStyles>;
}) {
  const codeFormatted = String(item.code).padStart(3, "0");
  const popFormatted =
    item.population >= 1000000
      ? `${(item.population / 1000000).toFixed(2)}M`
      : `${Math.round(item.population / 1000)}k`;
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const showCardIcons =
    themeConfig.showCardIcons !== false && themeConfig.iconBadgeStyle !== "hidden";
  const showCardDescriptions = themeConfig.showCardDescriptions !== false;
  const showTrailingArrows = themeConfig.showTrailingArrows !== false;

  return (
    <View
      style={[
        styles.countyCardWrap,
        themedCardStyle,
        isFrameless && {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Open ${item.name} County profile`}
        style={pressableStyle([
          styles.countyCard,
          isFrameless && { paddingHorizontal: 0 },
        ])}
        onPress={() => {
          triggerHaptic(8);
          router.push(`/county/${item.slug}` as any);
        }}
      >
        <View style={styles.cardHeaderRow}>
          <ThemedIconBadge
            label={codeFormatted}
            accentColor={theme.gold}
            baseSize={40}
          />
          <View style={{ flex: 1, marginLeft: showCardIcons ? 11 : 0, minWidth: 0 }}>
            <Text
              style={[styles.countyName, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {item.name} County
            </Text>
            <Text
              style={[styles.countyCapital, { color: theme.textSecondary }]}
              numberOfLines={1}
            >
              HQ:{" "}
              <Text
                style={{
                  color: theme.textPrimary,
                  fontFamily: resolvedFonts.bold,
                }}
              >
                {item.capital}
              </Text>
              {showCardDescriptions && (
                <>
                  {" · "}
                  {item.area.toLocaleString()} km² · {item.constituencies.length} Const.
                </>
              )}
            </Text>
          </View>
          {showTrailingArrows && (
            <View
              style={[
                styles.trailingCircle,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <ThemedIcon
                name="chevron-forward"
                size={15}
                color={theme.gold}
              />
            </View>
          )}
        </View>

        {/* Clean Governor Row */}
        {showCardDescriptions && (
          <View style={styles.governorRow}>
            <ThemedIcon name="person-outline" size={13} color={theme.gold} />
            <Text
              style={[styles.governorText, { color: theme.textSecondary }]}
              numberOfLines={1}
            >
              Gov.{" "}
              <Text style={{ color: theme.textPrimary, fontFamily: resolvedFonts.bold }}>
                {item.governor}
              </Text>
            </Text>
          </View>
        )}

        {/* Structured 3-Column Metrics Strip */}
        <View
          style={[
            styles.countyMetricsStrip,
            {
              backgroundColor: theme.surfaceContainerHigh,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <View style={styles.countyMetricCell}>
            <Text style={[styles.countyMetricLabel, { color: theme.textMuted }]}>
              POPULATION
            </Text>
            <Text
              style={[styles.countyMetricValue, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {popFormatted}
            </Text>
          </View>

          <View
            style={[
              styles.countyMetricDivider,
              { backgroundColor: theme.outlineVariant },
            ]}
          />

          <View style={[styles.countyMetricCell, { flex: 1.35 }]}>
            <Text style={[styles.countyMetricLabel, { color: theme.textMuted }]}>
              FY 25/26 BUDGET
            </Text>
            <Text
              style={[styles.countyMetricValue, { color: theme.kenyaGreenLight }]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {item.budget
                ? `KES ${item.budget.allocation.toLocaleString()}M`
                : "—"}
            </Text>
          </View>

          <View
            style={[
              styles.countyMetricDivider,
              { backgroundColor: theme.outlineVariant },
            ]}
          />

          <View style={styles.countyMetricCell}>
            <Text style={[styles.countyMetricLabel, { color: theme.textMuted }]}>
              RAINFALL
            </Text>
            <Text
              style={[styles.countyMetricValue, { color: theme.sky }]}
              numberOfLines={1}
            >
              {item.rain ? `${item.rain.annualRainfall} mm` : "—"}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
});

const BudgetCardItem = React.memo(function BudgetCardItem({
  item,
  router,
  theme,
  resolvedFonts,
  themedCardStyle,
  styles,
}: {
  item: any;
  router: any;
  theme: any;
  resolvedFonts: { heading: string; body: string; bold: string };
  themedCardStyle: ReturnType<typeof getThemedCardStyle>;
  styles: ReturnType<typeof createCountyStyles>;
}) {
  const b = item.budget;
  if (!b) return null;
  return (
    <Pressable
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        themedCardStyle,
        { padding: 14 },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text style={[styles.countyName, { color: theme.textPrimary, flexShrink: 1 }]}>
          {String(item.code).padStart(3, "0")}. {item.name} County
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: resolvedFonts.heading,
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
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 6 }}>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          Share:{" "}
          <Text style={{ fontFamily: resolvedFonts.heading, color: theme.textPrimary }}>
            KES {b.allocation.toLocaleString()}M
          </Text>
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          OSR:{" "}
          <Text style={{ fontFamily: resolvedFonts.heading, color: theme.gold }}>
            KES {b.ownSourceRevenue.toLocaleString()}M
          </Text>
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          Spent:{" "}
          <Text
            style={{
              fontFamily: resolvedFonts.heading,
              color: theme.kenyaGreenLight,
            }}
          >
            KES {b.expenditure.toLocaleString()}M
          </Text>
        </Text>
      </View>
    </Pressable>
  );
});

const ConstituencyCardItem = React.memo(function ConstituencyCardItem({
  item,
  router,
  theme,
  resolvedFonts,
  themedCardStyle,
  styles,
}: {
  item: any;
  router: any;
  theme: any;
  resolvedFonts: { heading: string; body: string; bold: string };
  themedCardStyle: ReturnType<typeof getThemedCardStyle>;
  styles: ReturnType<typeof createCountyStyles>;
}) {
  return (
    <Pressable
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        themedCardStyle,
        { padding: 14, gap: 8 },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text style={[styles.countyName, { color: theme.textPrimary, flexShrink: 1 }]}>
          {String(item.code).padStart(3, "0")}. {item.name} County
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontFamily: resolvedFonts.heading,
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
              fontFamily: resolvedFonts.heading,
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
            style={{ fontFamily: resolvedFonts.heading, color: theme.textPrimary }}
          >
            {item.deputyGovernor}
          </Text>
        </Text>
        {item.senator && (
          <Text
            style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
          >
            Sen:{" "}
            <Text style={{ fontFamily: resolvedFonts.heading, color: theme.sky }}>
              {item.senator}
            </Text>
          </Text>
        )}
        {item.womenRep && (
          <Text
            style={{ fontSize: 11, color: theme.textSecondary, width: "48%" }}
          >
            WR:{" "}
            <Text style={{ fontFamily: resolvedFonts.heading, color: theme.gold }}>
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
                fontFamily: resolvedFonts.bold,
              }}
            >
              {con}
            </Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
});

const ClimateCardItem = React.memo(function ClimateCardItem({
  item,
  router,
  theme,
  resolvedFonts,
  themedCardStyle,
  styles,
}: {
  item: any;
  router: any;
  theme: any;
  resolvedFonts: { heading: string; body: string; bold: string };
  themedCardStyle: ReturnType<typeof getThemedCardStyle>;
  styles: ReturnType<typeof createCountyStyles>;
}) {
  const r = item.rain;
  if (!r) return null;
  return (
    <Pressable
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => router.push(`/county/${item.slug}` as any)}
      style={pressableStyle([
        styles.countyCardWrap,
        themedCardStyle,
        { padding: 14, gap: 8 },
      ])}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 150 }}>
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
            fontFamily: resolvedFonts.heading,
            color: theme.sky,
          }}
        >
          {r.annualRainfall} mm/yr
        </Text>
      </View>
      {(r.monthly || r.monthlyAvg) && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {MONTH_KEYS.map((mk, idx) => {
            const mm = r.monthly?.[mk] ?? r.monthlyAvg?.[idx] ?? 0;
            return (
              <View
                key={mk}
                style={{
                  width: "15.5%",
                  paddingVertical: 5,
                  borderRadius: 6,
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
                    fontSize: 10,
                    fontFamily: resolvedFonts.heading,
                    color: theme.textMuted,
                  }}
                >
                  {MONTHS[idx]}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: resolvedFonts.heading,
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
});

const PickerCountyRow = React.memo(function PickerCountyRow({
  item,
  isSelected,
  onSelect,
  theme,
  resolvedFonts,
  styles,
}: {
  item: any;
  isSelected: boolean;
  onSelect: (slug: string) => void;
  theme: any;
  resolvedFonts: { heading: string; body: string; bold: string };
  styles: ReturnType<typeof createCountyStyles>;
}) {
  return (
    <Pressable
      android_ripple={androidRipple(theme.rippleColor)}
      onPress={() => onSelect(item.slug)}
      style={pressableStyle([
        styles.pickerRow,
        {
          backgroundColor: isSelected ? theme.primaryContainer : "transparent",
          borderBottomColor: theme.outlineVariant,
        },
      ])}
    >
      <ThemedIconBadge
        label={String(item.code).padStart(3, "0")}
        accentColor={theme.gold}
        baseSize={36}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: resolvedFonts.heading,
            color: theme.textPrimary,
          }}
        >
          {item.name} County
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          HQ: {item.capital} · Pop. {item.population.toLocaleString()}
        </Text>
      </View>
      {isSelected && (
        <ThemedIcon name="checkmark-circle" size={20} color={theme.gold} />
      )}
    </Pressable>
  );
});

export default function CountyScreen() {
  const router = useRouter();
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts } = useTheme();
  const styles = useMemo(
    () => createCountyStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const themedCardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const themedInputStyle = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const insets = useSafeAreaInsets();
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(14 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const bottomClearance =
    Math.round(32 * (themeMetrics?.spacingScale ?? 1)) +
    floatClearance +
    insets.bottom;
  const headingTransform = themeConfig.headingTransform || "none";
  const goldInk = getContrastInk(theme.gold);
  const { height: windowHeight } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState<CountyHubTab>("directory");
  const scrollRef = useRef<ScrollView>(null);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [sortBy, setSortBy] = useState<
    "code" | "name" | "population" | "area" | "budget" | "rainfall"
  >("code");
  const [compareSlugA, setCompareSlugA] = useState("nairobi");
  const [compareSlugB, setCompareSlugB] = useState("mombasa");
  const [pickerTarget, setPickerTarget] = useState<"A" | "B" | null>(null);
  const [pickerSearch, setPickerSearch] = useState("");
  const deferredPickerSearch = useDeferredValue(pickerSearch);

  const notes: string[] = (countiesData as any).notes || [];
  const enrichedCounties = STATIC_ENRICHED_COUNTIES;

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
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
  }, [deferredQuery, enrichedCounties, sortBy]);

  const listExtraData = useMemo(
    () => ({ activeTab, isDark, themeConfig, themeMetrics, resolvedFonts, themedCardStyle }),
    [activeTab, isDark, themeConfig, themeMetrics, resolvedFonts, themedCardStyle]
  );

  const keyExtractor = useCallback(
    (item: any) => `${activeTab}-${item.code}`,
    [activeTab]
  );

  const renderCountyItem = useCallback(
    ({ item }: { item: any }) => {
      if (activeTab === "budgets")
        return <BudgetCardItem item={item} router={router} theme={theme} resolvedFonts={resolvedFonts} themedCardStyle={themedCardStyle} styles={styles} />;
      if (activeTab === "constituencies")
        return <ConstituencyCardItem item={item} router={router} theme={theme} resolvedFonts={resolvedFonts} themedCardStyle={themedCardStyle} styles={styles} />;
      if (activeTab === "climate")
        return <ClimateCardItem item={item} router={router} theme={theme} resolvedFonts={resolvedFonts} themedCardStyle={themedCardStyle} styles={styles} />;
      return <DirectoryCardItem item={item} router={router} theme={theme} themeConfig={themeConfig} resolvedFonts={resolvedFonts} themedCardStyle={themedCardStyle} styles={styles} />;
    },
    [activeTab, router, theme, themeConfig, resolvedFonts, themedCardStyle, styles]
  );

  const pickerFiltered = useMemo(() => {
    const q = deferredPickerSearch.trim().toLowerCase();
    if (!q) return enrichedCounties;
    return enrichedCounties.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        String(c.code).padStart(3, "0").includes(q)
    );
  }, [deferredPickerSearch, enrichedCounties]);

  const pickerKeyExtractor = useCallback((item: any) => `pick-${item.slug}`, []);

  const handleSelectPickerCounty = useCallback(
    (slug: string) => {
      triggerHaptic(8);
      if (pickerTarget === "A") setCompareSlugA(slug);
      else if (pickerTarget === "B") setCompareSlugB(slug);
      setPickerTarget(null);
    },
    [pickerTarget]
  );

  const renderPickerItem = useCallback(
    ({ item }: { item: any }) => {
      const isSelected =
        (pickerTarget === "A" && compareSlugA === item.slug) ||
        (pickerTarget === "B" && compareSlugB === item.slug);
      return (
        <PickerCountyRow
          item={item}
          isSelected={isSelected}
          onSelect={handleSelectPickerCounty}
          theme={theme}
          resolvedFonts={resolvedFonts}
          styles={styles}
        />
      );
    },
    [pickerTarget, compareSlugA, compareSlugB, handleSelectPickerCounty, theme, resolvedFonts, styles]
  );

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

  const countyListHeader = useMemo(
    () => (
            <>
              {/* National Summary Strip */}
              <View style={{ flexDirection: "row", gap: 6, marginBottom: 8 }}>
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
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.75}
                    style={{
                      fontSize: 9.5,
                      fontFamily: resolvedFonts.heading,
                      letterSpacing: 0.3,
                      color: theme.textMuted,
                    }}
                  >
                    EQUITABLE SHARE
                  </Text>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                    style={{
                      fontSize: 15,
                      fontFamily: resolvedFonts.heading,
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
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.75}
                    style={{
                      fontSize: 9.5,
                      fontFamily: resolvedFonts.heading,
                      letterSpacing: 0.3,
                      color: theme.textMuted,
                    }}
                  >
                    OWN REVENUE
                  </Text>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                    style={{
                      fontSize: 15,
                      fontFamily: resolvedFonts.heading,
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
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.75}
                    style={{
                      fontSize: 9.5,
                      fontFamily: resolvedFonts.heading,
                      letterSpacing: 0.3,
                      color: theme.textMuted,
                    }}
                  >
                    ABSORPTION
                  </Text>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                    style={{
                      fontSize: 15,
                      fontFamily: resolvedFonts.heading,
                      color: theme.kenyaGreenLight,
                      marginTop: 2,
                    }}
                  >
                    {nationalTotals.avgAbs}%
                  </Text>
                </View>
              </View>

              {query.trim().length > 0 && (
                <Text style={[styles.countText, { color: theme.textMuted }]}>
                  Showing {filtered.length} of 47 counties
                </Text>
              )}
            </>
    ),
    [
      styles.miniStat,
      styles.countText,
      theme.surfaceContainer,
      theme.outlineVariant,
      theme.textMuted,
      theme.gold,
      theme.sky,
      theme.kenyaGreenLight,
      resolvedFonts.heading,
      nationalTotals.totalAlloc,
      nationalTotals.totalOsr,
      nationalTotals.avgAbs,
      query,
      filtered.length,
    ]
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
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
          style={{ marginBottom: activeTab !== "compare" ? 4 : 2 }}
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
                <ThemedIcon
                  name={tab.icon}
                  size={13}
                  color={active ? goldInk : theme.gold}
                />
                <Text
                  style={{
                    fontSize: 11.5,
                    lineHeight: 16,
                    paddingBottom: 0,
                    includeFontPadding: false,
                    textAlignVertical: "center",
                    fontFamily: resolvedFonts.heading,
                    color: active ? goldInk : theme.textPrimary,
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
                themedInputStyle,
              ]}
            >
              <ThemedIcon name="search" size={16} color={theme.gold} />
              <TextInput
                multiline={false}
                accessibilityLabel="Search county or headquarters"
                placeholder="Search county or HQ..."
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
                  <ThemedIcon
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
                  gap: 6,
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
          contentContainerStyle={[
            styles.listContent,
            { paddingHorizontal: screenPadPx, paddingBottom: bottomClearance },
          ]}
          showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
          persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
          keyboardShouldPersistTaps="handled"
          overScrollMode="always"
        >
          {/* TAB 5: COMPARE 2 COUNTIES WITH SEARCHABLE BOTTOM-SHEET PICKER & PROPORTION BARS (UX-12) */}
          {countyA && countyB && (
            <View
              style={[
                styles.notesCard,
                themedCardStyle,
              ]}
            >
              <Text style={[styles.notesHeading, { color: theme.gold, textTransform: headingTransform }]}>
                Compare Two Counties Side-by-Side
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: resolvedFonts.body,
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
                      fontFamily: resolvedFonts.heading,
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
                        fontFamily: resolvedFonts.heading,
                        color: theme.textPrimary,
                        flex: 1,
                      }}
                      numberOfLines={1}
                    >
                      {countyA.name}
                    </Text>
                    <ThemedIcon
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
                  <ThemedIcon
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
                      fontFamily: resolvedFonts.heading,
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
                        fontFamily: resolvedFonts.heading,
                        color: theme.textPrimary,
                        flex: 1,
                      }}
                      numberOfLines={1}
                    >
                      {countyB.name}
                    </Text>
                    <ThemedIcon
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

              {/* Head-to-Head Summary Strip */}
              {(() => {
                const totalBudgetA =
                  (countyA.budget?.allocation || 0) +
                  (countyA.budget?.ownSourceRevenue || 0);
                const totalBudgetB =
                  (countyB.budget?.allocation || 0) +
                  (countyB.budget?.ownSourceRevenue || 0);
                const osrA = countyA.budget?.ownSourceRevenue || 0;
                const osrB = countyB.budget?.ownSourceRevenue || 0;
                const absA = countyA.budget?.absorptionRate || 0;
                const absB = countyB.budget?.absorptionRate || 0;
                const rainA = countyA.rain?.annualRainfall || 0;
                const rainB = countyB.rain?.annualRainfall || 0;
                const osrPctA =
                  totalBudgetA > 0 ? (osrA / totalBudgetA) * 100 : 0;
                const osrPctB =
                  totalBudgetB > 0 ? (osrB / totalBudgetB) * 100 : 0;
                const perCapA =
                  countyA.population > 0
                    ? Math.round(
                        ((countyA.budget?.allocation || 0) * 1_000_000) /
                          countyA.population
                      )
                    : 0;
                const perCapB =
                  countyB.population > 0
                    ? Math.round(
                        ((countyB.budget?.allocation || 0) * 1_000_000) /
                          countyB.population
                      )
                    : 0;

                const leaders = [
                  {
                    metric: "Population",
                    valA: countyA.population,
                    valB: countyB.population,
                  },
                  {
                    metric: "Total Budget",
                    valA: totalBudgetA,
                    valB: totalBudgetB,
                  },
                  {
                    metric: "Own Revenue",
                    valA: osrA,
                    valB: osrB,
                  },
                  {
                    metric: "Absorption",
                    valA: absA,
                    valB: absB,
                  },
                  {
                    metric: "Rainfall",
                    valA: rainA,
                    valB: rainB,
                  },
                ];

                type CompareRow = {
                  label: string;
                  a: string;
                  b: string;
                  numA?: number;
                  numB?: number;
                };
                const sections: {
                  title: string;
                  icon: string;
                  rows: CompareRow[];
                }[] = [
                  {
                    title: "Governance & Leadership",
                    icon: "business-outline",
                    rows: [
                      {
                        label: "County Code",
                        a: String(countyA.code).padStart(3, "0"),
                        b: String(countyB.code).padStart(3, "0"),
                      },
                      {
                        label: "Capital HQ",
                        a: countyA.capital,
                        b: countyB.capital,
                      },
                      {
                        label: "Region",
                        a: countyA.region,
                        b: countyB.region,
                      },
                      {
                        label: "Governor",
                        a: countyA.governor,
                        b: countyB.governor,
                      },
                      {
                        label: "Deputy Gov.",
                        a: countyA.deputyGovernor || "—",
                        b: countyB.deputyGovernor || "—",
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
                        label: "Constituencies",
                        a: `${countyA.constituencies.length}`,
                        b: `${countyB.constituencies.length}`,
                        numA: countyA.constituencies.length,
                        numB: countyB.constituencies.length,
                      },
                      {
                        label: "Wards",
                        a: `${countyA.wards}`,
                        b: `${countyB.wards}`,
                        numA: countyA.wards,
                        numB: countyB.wards,
                      },
                    ],
                  },
                  {
                    title: "Demographics & Geography",
                    icon: "people-outline",
                    rows: [
                      {
                        label: "Population (KNBS)",
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
                        a: `${countyA.density.toLocaleString()}/km²`,
                        b: `${countyB.density.toLocaleString()}/km²`,
                        numA: countyA.density,
                        numB: countyB.density,
                      },
                      {
                        label: "Major Towns",
                        a: countyA.majorTownsSummary,
                        b: countyB.majorTownsSummary,
                      },
                    ],
                  },
                  {
                    title: "FY 25/26 Public Finance",
                    icon: "wallet-outline",
                    rows: [
                      {
                        label: "Equitable Share",
                        a: `KES ${(countyA.budget?.allocation || 0).toLocaleString()}M`,
                        b: `KES ${(countyB.budget?.allocation || 0).toLocaleString()}M`,
                        numA: countyA.budget?.allocation || 0,
                        numB: countyB.budget?.allocation || 0,
                      },
                      {
                        label: "Own-Source Rev.",
                        a: `KES ${osrA.toLocaleString()}M`,
                        b: `KES ${osrB.toLocaleString()}M`,
                        numA: osrA,
                        numB: osrB,
                      },
                      {
                        label: "Total Budget",
                        a: `KES ${totalBudgetA.toLocaleString()}M`,
                        b: `KES ${totalBudgetB.toLocaleString()}M`,
                        numA: totalBudgetA,
                        numB: totalBudgetB,
                      },
                      {
                        label: "OSR Self-Reliance",
                        a: `${osrPctA.toFixed(1)}%`,
                        b: `${osrPctB.toFixed(1)}%`,
                        numA: osrPctA,
                        numB: osrPctB,
                      },
                      {
                        label: "Budget Absorption",
                        a: `${absA}%`,
                        b: `${absB}%`,
                        numA: absA,
                        numB: absB,
                      },
                      {
                        label: "Share Per Capita",
                        a: `KES ${perCapA.toLocaleString()}`,
                        b: `KES ${perCapB.toLocaleString()}`,
                        numA: perCapA,
                        numB: perCapB,
                      },
                    ],
                  },
                  {
                    title: "Climate, Solar & Agriculture",
                    icon: "sunny-outline",
                    rows: [
                      {
                        label: "Annual Rainfall",
                        a: `${rainA.toLocaleString()} mm/yr`,
                        b: `${rainB.toLocaleString()} mm/yr`,
                        numA: rainA,
                        numB: rainB,
                      },
                      {
                        label: "Peak Rainy Month",
                        a: countyA.rain?.peakMonth || "—",
                        b: countyB.rain?.peakMonth || "—",
                      },
                      {
                        label: "Driest Month",
                        a: countyA.rain?.driestMonth || "—",
                        b: countyB.rain?.driestMonth || "—",
                      },
                      {
                        label: "Climate Zone",
                        a: countyA.rain?.climateZone || "—",
                        b: countyB.rain?.climateZone || "—",
                      },
                      {
                        label: "Solar Irradiance",
                        a: `${countyA.solarIrradiance.toFixed(1)} kWh/m²/d`,
                        b: `${countyB.solarIrradiance.toFixed(1)} kWh/m²/d`,
                        numA: countyA.solarIrradiance,
                        numB: countyB.solarIrradiance,
                      },
                      {
                        label: "Soil & Crops / Urban",
                        a: countyA.soilCropsSummary,
                        b: countyB.soilCropsSummary,
                      },
                    ],
                  },
                  {
                    title: "Health, Parks & Civic Infrastructure",
                    icon: "medkit-outline",
                    rows: [
                      {
                        label: "SHA/NHIF Hospitals",
                        a: `${countyA.hospitalsCount}`,
                        b: `${countyB.hospitalsCount}`,
                        numA: countyA.hospitalsCount,
                        numB: countyB.hospitalsCount,
                      },
                      {
                        label: "Postal Codes",
                        a: `${countyA.postalCount}`,
                        b: `${countyB.postalCount}`,
                        numA: countyA.postalCount,
                        numB: countyB.postalCount,
                      },
                      {
                        label: "Parks & Reserves",
                        a: `${countyA.parksCount}`,
                        b: `${countyB.parksCount}`,
                        numA: countyA.parksCount,
                        numB: countyB.parksCount,
                      },
                      {
                        label: "Registered Agrovets",
                        a: `${countyA.agrovetsCount}`,
                        b: `${countyB.agrovetsCount}`,
                        numA: countyA.agrovetsCount,
                        numB: countyB.agrovetsCount,
                      },
                    ],
                  },
                ];

                return (
                  <>
                    {/* Head-to-Head Leader Badges */}
                    <View style={styles.h2hStrip}>
                      {leaders.map((item) => {
                        const aWins = item.valA > item.valB;
                        const bWins = item.valB > item.valA;
                        const winnerName = aWins
                          ? countyA.name
                          : bWins
                          ? countyB.name
                          : "Tie";
                        const accent = aWins
                          ? theme.gold
                          : bWins
                          ? theme.kenyaGreenLight
                          : theme.textMuted;
                        return (
                          <View
                            key={item.metric}
                            style={[
                              styles.h2hBadge,
                              {
                                backgroundColor: aWins
                                  ? `${theme.gold}14`
                                  : bWins
                                  ? `${theme.kenyaGreenLight}14`
                                  : theme.surfaceContainerHigh,
                                borderColor: aWins
                                  ? `${theme.gold}55`
                                  : bWins
                                  ? `${theme.kenyaGreenLight}55`
                                  : theme.outlineVariant,
                              },
                            ]}
                          >
                            <View
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: accent,
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 10,
                                fontFamily: resolvedFonts.bold,
                                color: theme.textSecondary,
                              }}
                            >
                              {item.metric}:{" "}
                              <Text
                                style={{
                                  fontFamily: resolvedFonts.heading,
                                  color: accent,
                                }}
                              >
                                {winnerName}
                              </Text>
                            </Text>
                          </View>
                        );
                      })}
                    </View>

                    {/* Column Legend */}
                    <View
                      style={{
                        marginTop: 6,
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
                            fontFamily: resolvedFonts.heading,
                            color: theme.textMuted,
                            flex: 1.15,
                            textAlign: "left",
                          }}
                        >
                          METRIC
                        </Text>
                        <Text
                          style={{
                            fontSize: 10.5,
                            fontFamily: resolvedFonts.heading,
                            color: theme.gold,
                            flex: 1,
                            textAlign: "right",
                          }}
                          numberOfLines={1}
                        >
                          {countyA.name.toUpperCase()}
                        </Text>
                        <Text
                          style={{
                            fontSize: 10.5,
                            fontFamily: resolvedFonts.heading,
                            color: theme.kenyaGreenLight,
                            flex: 1,
                            textAlign: "right",
                          }}
                          numberOfLines={1}
                        >
                          {countyB.name.toUpperCase()}
                        </Text>
                      </View>

                      {/* 5 Grouped Sections */}
                      {sections.map((section, sIdx) => (
                        <View
                          key={section.title}
                          style={{ marginTop: sIdx === 0 ? 8 : 14 }}
                        >
                          <View
                            style={[
                              styles.compareSectionHeader,
                              {
                                backgroundColor: theme.surfaceContainerHigh,
                                borderColor: theme.outlineVariant,
                              },
                            ]}
                          >
                            <ThemedIcon
                              name={section.icon}
                              size={13}
                              color={theme.gold}
                            />
                            <Text
                              style={[
                                styles.compareSectionTitle,
                                { color: theme.textPrimary, textTransform: headingTransform },
                              ]}
                            >
                              {section.title}
                            </Text>
                          </View>
                          {section.rows.map((row) => {
                            const hasNums =
                              row.numA !== undefined && row.numB !== undefined;
                            const numA = row.numA || 0;
                            const numB = row.numB || 0;
                            const totalNum = numA + numB;
                            const pctA =
                              totalNum > 0
                                ? numA === 0
                                  ? 0
                                  : numB === 0
                                  ? 100
                                  : Math.max(
                                      6,
                                      Math.min(94, (numA / totalNum) * 100)
                                    )
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
                                    gap: 6,
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontSize: 11,
                                      color: theme.textMuted,
                                      flex: 1.15,
                                      textAlign: "left",
                                    }}
                                  >
                                    {row.label}
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: 11,
                                      fontFamily: resolvedFonts.heading,
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
                                      fontFamily: resolvedFonts.heading,
                                      color: theme.textPrimary,
                                      flex: 1,
                                      textAlign: "right",
                                    }}
                                  >
                                    {row.b}
                                  </Text>
                                </View>
                                {hasNums && totalNum > 0 && (
                                  <View
                                    style={{
                                      height: 4,
                                      borderRadius: 2,
                                      overflow: "hidden",
                                      flexDirection: "row",
                                      backgroundColor:
                                        theme.surfaceContainerHigh,
                                      marginTop: 4,
                                      gap: pctA > 0 && pctA < 100 ? 2 : 0,
                                    }}
                                  >
                                    {pctA > 0 && (
                                      <View
                                        style={{
                                          flex: pctA,
                                          backgroundColor: theme.gold,
                                        }}
                                      />
                                    )}
                                    {100 - pctA > 0 && (
                                      <View
                                        style={{
                                          flex: 100 - pctA,
                                          backgroundColor:
                                            theme.kenyaGreenLight,
                                        }}
                                      />
                                    )}
                                  </View>
                                )}
                              </View>
                            );
                          })}
                        </View>
                      ))}
                    </View>

                    {/* Side-by-Side Quick Profile Links */}
                    <View style={styles.compareProfileRow}>
                      <Pressable
                        android_ripple={androidRipple(theme.rippleColor)}
                        accessibilityRole="button"
                        accessibilityLabel={`Explore ${countyA.name} County profile`}
                        onPress={() => {
                          triggerHaptic(8);
                          router.push(`/county/${countyA.slug}` as any);
                        }}
                        style={pressableStyle([
                          styles.compareProfileBtn,
                          {
                            backgroundColor: `${theme.gold}18`,
                            borderColor: theme.gold,
                          },
                        ])}
                      >
                        <Text
                          style={[
                            styles.compareProfileBtnText,
                            { color: theme.textPrimary },
                          ]}
                          numberOfLines={1}
                        >
                          Explore {countyA.name} →
                        </Text>
                      </Pressable>
                      <Pressable
                        android_ripple={androidRipple(theme.rippleColor)}
                        accessibilityRole="button"
                        accessibilityLabel={`Explore ${countyB.name} County profile`}
                        onPress={() => {
                          triggerHaptic(8);
                          router.push(`/county/${countyB.slug}` as any);
                        }}
                        style={pressableStyle([
                          styles.compareProfileBtn,
                          {
                            backgroundColor: `${theme.kenyaGreenLight}18`,
                            borderColor: theme.kenyaGreenLight,
                          },
                        ])}
                      >
                        <Text
                          style={[
                            styles.compareProfileBtnText,
                            { color: theme.textPrimary },
                          ]}
                          numberOfLines={1}
                        >
                          Explore {countyB.name} →
                        </Text>
                      </Pressable>
                    </View>
                  </>
                );
              })()}
            </View>
          )}

          {/* About the Data Notes */}
          {notes.length > 0 && (
            <View
              style={[
                styles.notesCard,
                themedCardStyle,
              ]}
            >
              <Text style={[styles.notesHeading, { color: theme.gold, textTransform: headingTransform }]}>
                About Kenya&apos;s 47 Counties
              </Text>
              {notes.map((n, idx) => (
                <View key={idx} style={styles.noteRow}>
                  <Text
                    style={{
                      color: theme.gold,
                      fontFamily: resolvedFonts.heading,
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
          extraData={listExtraData}
          keyExtractor={keyExtractor}
          contentContainerStyle={[
            styles.listContent,
            { paddingHorizontal: screenPadPx, paddingBottom: bottomClearance },
          ]}
          showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
          persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
          keyboardShouldPersistTaps="handled"
          overScrollMode="always"
          initialNumToRender={8}
          maxToRenderPerBatch={6}
          updateCellsBatchingPeriod={40}
          windowSize={5}
          removeClippedSubviews={Platform.OS === "android"}
          ListHeaderComponent={countyListHeader}
          renderItem={renderCountyItem}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <ThemedIcon
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
      {pickerTarget !== null && (
      <Modal
        visible={true}
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
              <Text style={[styles.pickerTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
                Select County {pickerTarget === "A" ? "A" : "B"}
              </Text>
              <Pressable
                onPress={() => setPickerTarget(null)}
                accessibilityRole="button"
                accessibilityLabel="Close county picker"
                hitSlop={10}
              >
                <ThemedIcon name="close-circle" size={24} color={theme.textMuted} />
              </Pressable>
            </View>

            <View
              style={[
                styles.searchBar,
                themedInputStyle,
                { marginBottom: 10 },
              ]}
            >
              <ThemedIcon name="search" size={18} color={theme.gold} />
              <TextInput
                value={pickerSearch}
                onChangeText={setPickerSearch}
                placeholder="Search county, code, or HQ..."
                placeholderTextColor={theme.textMuted}
                style={[styles.searchInput, { color: theme.textPrimary }]}
                autoFocus
              />
              {pickerSearch.length > 0 && (
                <Pressable onPress={() => setPickerSearch("")} hitSlop={8}>
                  <ThemedIcon
                    name="close-circle"
                    size={18}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}
            </View>

            <FlatList
              data={pickerFiltered}
              keyExtractor={pickerKeyExtractor}
              keyboardShouldPersistTaps="handled"
              initialNumToRender={8}
              maxToRenderPerBatch={6}
              windowSize={5}
              updateCellsBatchingPeriod={40}
              removeClippedSubviews={Platform.OS === "android"}
              showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
              persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
              renderItem={renderPickerItem}
            />
          </View>
        </View>
      </Modal>
      )}
    </SafeAreaView>
  );
}

function createCountyStyles(
  metrics?: ThemeMetrics,
  fonts?: { heading: string; body: string; bold: string }
) {
  const cardRadiusPx = metrics?.cardRadiusPx ?? 14;
  const radiusRatio = cardRadiusPx / 14;
  const r = (base: number) => Math.round(base * radiusRatio);
  const bw = metrics?.borderWidthPx ?? 1;
  const bwThick = bw === 0 ? 0 : Number((bw * 1.5).toFixed(2));
  const spacingScale = metrics?.spacingScale ?? 1;
  const sp = (v: number) => Number((v * spacingScale).toFixed(1));
  const fontScale = metrics?.fontScale ?? 1;
  const lineHeightScale = metrics?.lineHeightScale ?? 1;
  const fs = (v: number) => Number((v * fontScale).toFixed(1));
  const lh = (v: number) => Math.round(v * fontScale * lineHeightScale);
  const isDefaultFonts =
    !fonts ||
    (fonts.heading === "Outfit_700Bold" &&
      fonts.body === "Inter_400Regular" &&
      fonts.bold === "Inter_700Bold");
  const hf = (fallback = "Outfit_700Bold") =>
    isDefaultFonts ? fallback : fonts.heading;
  const bf = (fallback = "Inter_400Regular") =>
    isDefaultFonts ? fallback : fonts.body;

  return StyleSheet.create({
    container: { flex: 1 },
    header: {
      paddingHorizontal: sp(14),
      paddingTop: sp(4),
      paddingBottom: sp(6),
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    modeChip: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(10),
      paddingVertical: sp(5),
      minHeight: 28,
      borderRadius: 999,
      borderWidth: bw,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: r(17),
      borderWidth: bw,
      paddingHorizontal: sp(11),
      minHeight: Math.max(42, Math.round(42 * spacingScale)),
      marginBottom: sp(4),
    },
    searchInput: {
      flex: 1,
      minWidth: 0,
      marginLeft: sp(8),
      marginRight: sp(6),
      fontFamily: bf("Inter_500Medium"),
      fontSize: fs(12.5),
      paddingVertical: 0,
      paddingHorizontal: 0,
      textAlignVertical: "center",
      includeFontPadding: false,
    },
    sortRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
    },
    sortLabel: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
      letterSpacing: 0.7,
    },
    segmentBtn: {
      paddingHorizontal: sp(9),
      paddingVertical: sp(4),
      minHeight: 26,
      borderRadius: 999,
      borderWidth: bw,
    },
    segmentText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11),
      lineHeight: lh(15),
    },
    listContent: {
      paddingHorizontal: sp(14),
      paddingTop: sp(10),
      paddingBottom: sp(32),
      gap: sp(8),
    },
    miniStat: {
      flex: 1,
      borderRadius: r(10),
      borderWidth: bw,
      paddingVertical: sp(8),
      paddingHorizontal: sp(6),
      alignItems: "center",
      justifyContent: "center",
    },
    countText: {
      fontFamily: bf("Inter_500Medium"),
      fontSize: fs(12),
      marginBottom: 2,
    },
    countyCardWrap: {
      borderRadius: r(16),
      borderWidth: bw,
    },
    countyCard: {
      padding: sp(13),
      gap: sp(9),
    },
    cardHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    codeBadge: {
      width: 40,
      height: 40,
      borderRadius: r(11),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    codeText: {
      fontFamily: hf("Outfit_800ExtraBold"),
      fontSize: fs(13.5),
      letterSpacing: 0.3,
    },
    countyName: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(15.5),
      lineHeight: lh(20),
    },
    countyCapital: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11.5),
      marginTop: 2,
    },
    trailingCircle: {
      width: 28,
      height: 28,
      borderRadius: 14,
      borderWidth: StyleSheet.hairlineWidth,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: sp(6),
    },
    governorRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
      paddingHorizontal: 2,
    },
    governorText: {
      flex: 1,
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11.5),
    },
    countyMetricsStrip: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: r(11),
      borderWidth: StyleSheet.hairlineWidth,
      paddingVertical: sp(7.5),
      paddingHorizontal: sp(8),
    },
    countyMetricCell: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: sp(4),
    },
    countyMetricDivider: {
      width: StyleSheet.hairlineWidth,
      height: 22,
      opacity: 0.6,
    },
    countyMetricLabel: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(8.5),
      letterSpacing: 0.5,
    },
    countyMetricValue: {
      fontFamily: hf("Outfit_800ExtraBold"),
      fontSize: fs(12),
      marginTop: 1.5,
    },
    cardInfoRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: sp(6),
      marginTop: sp(10),
      paddingTop: sp(10),
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    infoPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(8),
      paddingVertical: sp(4),
      borderRadius: r(8),
      borderWidth: bw,
    },
    infoPillText: {
      fontFamily: bf("Inter_500Medium"),
      fontSize: fs(11),
    },
    notesCard: {
      borderRadius: r(16),
      borderWidth: bw,
      padding: sp(16),
      gap: sp(10),
    },
    notesHeading: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(15),
    },
    noteRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: sp(8),
    },
    noteText: {
      flex: 1,
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12),
      lineHeight: lh(18),
    },
    emptyWrap: {
      alignItems: "center",
      paddingVertical: sp(48),
      gap: sp(8),
    },
    emptyTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(16),
    },
    compareSelectorRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(8),
      marginTop: sp(4),
    },
    compareSelectorCard: {
      flex: 1,
      borderRadius: r(14),
      borderWidth: bwThick,
      padding: sp(11),
    },
    swapCountiesBtn: {
      width: 38,
      height: 38,
      borderRadius: 19,
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    h2hStrip: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: sp(6),
      marginTop: sp(4),
    },
    h2hBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(8),
      paddingVertical: sp(4),
      borderRadius: 999,
      borderWidth: bw,
    },
    compareSectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
      paddingHorizontal: sp(9),
      paddingVertical: sp(5),
      borderRadius: r(8),
      borderWidth: StyleSheet.hairlineWidth,
      marginBottom: sp(4),
    },
    compareSectionTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11.5),
      letterSpacing: 0.2,
    },
    compareProfileRow: {
      flexDirection: "row",
      gap: sp(8),
      marginTop: sp(12),
    },
    compareProfileBtn: {
      flex: 1,
      borderRadius: r(12),
      borderWidth: bw,
      paddingVertical: sp(10),
      paddingHorizontal: sp(10),
      alignItems: "center",
      justifyContent: "center",
    },
    compareProfileBtnText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(12),
    },
    modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.65)",
      justifyContent: "flex-end",
    },
    pickerSheet: {
      height: "78%",
      borderTopLeftRadius: r(24),
      borderTopRightRadius: r(24),
      borderTopWidth: bw,
      padding: sp(16),
    },
    pickerHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: sp(12),
    },
    pickerTitle: {
      fontFamily: hf("Outfit_800ExtraBold"),
      fontSize: fs(18),
    },
    pickerRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: sp(10),
      paddingHorizontal: sp(8),
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderRadius: r(10),
    },
  });
}
