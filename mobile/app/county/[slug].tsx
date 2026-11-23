import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
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
import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import countiesData from "../../src/shared/data/counties.json";
import budgetsData from "../../src/shared/data/county-budgets.json";
import rainfallData from "../../src/shared/data/rainfall-patterns.json";
import soilsData from "../../src/shared/data/soil-types.json";
import hospitalsData from "../../src/shared/data/nhif-hospitals.json";
import postalData from "../../src/shared/data/postal-codes.json";
import rankingsData from "../../src/shared/data/kcse-rankings.json";
import parksData from "../../src/shared/data/national-parks.json";
import forestsData from "../../src/shared/data/forest-reserves.json";
import agrovetsData from "../../src/shared/data/agrovets.json";
import languagesData from "../../src/shared/data/kenya-languages.json";

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

const URBAN_COUNTIES = new Set(["nairobi", "mombasa"]);

const URBAN_UTILITIES: Record<string, { title: string; detail: string; url: string }[]> = {
  nairobi: [
    { title: "Nairobi City Water (NCWSC)", detail: "Water billing, new connections & bursts · Paybill 444400 · *888#", url: "https://www.nairobiwater.co.ke" },
    { title: "Kenya Power (KPLC Nairobi)", detail: "Prepaid tokens, outage reports & meter queries · *977#", url: "https://kplc.co.ke" },
    { title: "Huduma Centres (GPO, City Square, Makadara, Eastleigh, Kibra)", detail: "National ID, KRA PIN, SHA/SHIF, NSSF, Birth Certificates & Business Permits", url: "https://www.hudumakenya.go.ke" },
    { title: "NairobiPay / eCitizen County Services", detail: "Parking, land rates, unified business permits & county health", url: "https://nairobiservices.go.ke" },
  ],
  mombasa: [
    { title: "Mombasa Water (MOWASSCO)", detail: "Water billing, meter reading & sewer services · Paybill 888880", url: "https://www.mombasawater.co.ke" },
    { title: "Kenya Power (KPLC Coast Region)", detail: "Prepaid tokens, outage reports & fault escalation · *977#", url: "https://kplc.co.ke" },
    { title: "Huduma Centre Mombasa (GPO Treasury Square)", detail: "National ID, KRA PIN, SHA/SHIF, NSSF & Civil Registration", url: "https://www.hudumakenya.go.ke" },
    { title: "Mombasa County e-Services", detail: "Parking, land rates, single business permits & port-city licensing", url: "https://eservices.mombasa.go.ke" },
  ],
};

// Geographic bordering counties map (replaces sequential county code links)
const COUNTY_NEIGHBORS: Record<string, string[]> = {
  nairobi: ["kiambu", "kajiado", "machakos"],
  mombasa: ["kilifi", "kwale"],
  kisumu: ["siaya", "vihiga", "nandi", "kericho", "nyamira", "homa-bay"],
  nakuru: ["nyandarua", "laikipia", "baringo", "kericho", "bomet", "narok", "kajiado", "kiambu"],
  kiambu: ["nairobi", "kajiado", "nakuru", "nyandarua", "muranga", "machakos"],
  "uasin-gishu": ["trans-nzoia", "elgeyo-marakwet", "baringo", "kericho", "nandi", "kakamega"],
  kajiado: ["nairobi", "kiambu", "nakuru", "narok", "makueni", "machakos", "taita-taveta"],
  machakos: ["nairobi", "kiambu", "muranga", "embu", "kitui", "makueni", "kajiado"],
  kilifi: ["mombasa", "kwale", "taita-taveta", "tana-river"],
  kwale: ["mombasa", "kilifi", "taita-taveta"],
  laikipia: ["samburu", "isiolo", "meru", "nyeri", "nyandarua", "nakuru", "baringo"],
  nyeri: ["laikipia", "meru", "kirinyaga", "muranga", "nyandarua"],
  meru: ["isiolo", "tharaka-nithi", "kirinyaga", "nyeri", "laikipia"],
  kakamega: ["bungoma", "trans-nzoia", "uasin-gishu", "nandi", "vihiga", "siaya", "busia"],
  kisii: ["nyamira", "homa-bay", "migori", "narok"],
  turkana: ["west-pokot", "baringo", "samburu", "marsabit"],
};

const COUNTY_TO_MATATU_TOWN: Record<string, string> = {
  nairobi: "nairobi",
  mombasa: "mombasa",
  kisumu: "kisumu",
  nakuru: "nakuru",
  "uasin-gishu": "eldoret",
  kiambu: "thika",
};

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

export default function CountyDetailScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const scrollRef = useRef<ScrollView>(null);
  const sectionOffsetsRef = useRef<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState("overview");
  const [visibleCount, setVisibleCount] = useState(30);
  const [postalVisibleCount, setPostalVisibleCount] = useState(30);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    setActiveSection("overview");
    setVisibleCount(30);
    setPostalVisibleCount(30);
  }, [slug]);

  const county: County | undefined = countiesData.counties.find(
    (c) => c.slug === slug || String(c.code) === slug
  );

  const countyBudget = useMemo(
    () =>
      county
        ? ((budgetsData as any).budgets || []).find(
            (b: any) =>
              b.code === county.code ||
              b.county.toLowerCase() === county.name.toLowerCase()
          )
        : null,
    [county]
  );

  const countyRainfall = useMemo(
    () =>
      county
        ? ((rainfallData as any).counties || []).find(
            (r: any) =>
              r.code === county.code ||
              r.name.toLowerCase() === county.name.toLowerCase()
          )
        : null,
    [county]
  );

  const countySoils = useMemo(
    () =>
      county
        ? ((soilsData as any).soilTypes || []).filter((s: any) =>
            (s.counties || s.whereFound || []).some((w: string) =>
              w.toLowerCase().includes(county.name.toLowerCase())
            )
          )
        : [],
    [county]
  );

  const normalizeCountyName = (val: string) =>
    String(val || "")
      .toLowerCase()
      .replace(/['’\-]+/g, "")
      .replace(/\s+/g, "")
      .trim();

  const filteredHospitals = useMemo(
    () =>
      county
        ? ((hospitalsData as any).hospitals || []).filter(
            (h: any) =>
              normalizeCountyName(h.county) === normalizeCountyName(county.name)
          )
        : [],
    [county]
  );
  const countyHospitals = filteredHospitals;

  const filteredPostal = useMemo(
    () =>
      county
        ? ((postalData as any).codes || []).filter(
            (p: any) =>
              normalizeCountyName(p.county) === normalizeCountyName(county.name)
          )
        : [],
    [county]
  );
  const countyPostalCodes = filteredPostal;

  const countySchools = useMemo(
    () =>
      county
        ? ((rankingsData as any).schools || []).filter(
            (s: any) => s.county.toLowerCase() === county.name.toLowerCase()
          )
        : [],
    [county]
  );

  const countyParks = useMemo(
    () =>
      county
        ? ((parksData as any).parks || []).filter((p: any) =>
            p.county.toLowerCase().includes(county.name.toLowerCase())
          )
        : [],
    [county]
  );

  const countyForests = useMemo(
    () =>
      county
        ? ((forestsData as any).forests || []).filter((f: any) =>
            f.county.toLowerCase().includes(county.name.toLowerCase())
          )
        : [],
    [county]
  );

  const countyAgrovets = useMemo(
    () =>
      county
        ? ((agrovetsData as any).agrovets || []).filter(
            (a: any) => a.county.toLowerCase() === county.name.toLowerCase()
          )
        : [],
    [county]
  );

  const countyLanguages = useMemo(
    () =>
      county
        ? ((languagesData as any).languages || []).filter((l: any) =>
            (l.counties || []).some((cn: string) =>
              cn.toLowerCase().includes(county.name.toLowerCase())
            )
          )
        : [],
    [county]
  );

  const computedAnnualRainfall = useMemo(() => {
    if (!countyRainfall) return null;
    const sum = MONTH_KEYS.reduce(
      (acc, mk, idx) =>
        acc + Number(countyRainfall.monthly?.[mk] ?? countyRainfall.monthlyAvg?.[idx] ?? 0),
      0
    );
    return sum > 0 ? Math.round(sum) : countyRainfall.annualRainfall;
  }, [countyRainfall]);

  const borderingCounties = useMemo(() => {
    if (!county) return [];
    const neighborSlugs = COUNTY_NEIGHBORS[county.slug];
    if (neighborSlugs && neighborSlugs.length > 0) {
      return neighborSlugs
        .map((ns) => countiesData.counties.find((c) => c.slug === ns))
        .filter(Boolean) as County[];
    }
    return countiesData.counties
      .filter((c) => c.slug !== county.slug)
      .slice(0, 4);
  }, [county]);

  if (!county) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.bgPrimary }]}
        edges={["top", "left", "right", "bottom"]}
      >
        <View
          style={[
            styles.headerBar,
            {
              backgroundColor: theme.bgSecondary,
              borderBottomColor: theme.border,
            },
          ]}
        >
          <Pressable
            onPress={() => router.back()}
            style={[
              styles.backButton,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
          </Pressable>
          <Text style={[styles.headerBarTitle, { color: theme.textPrimary }]}>
            County Not Found
          </Text>
        </View>
        <View style={styles.notFoundWrap}>
          <Text style={{ color: theme.textSecondary, fontSize: 16 }}>
            The requested county could not be found.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const isUrbanCounty = URBAN_COUNTIES.has(county.slug);

  const codeFormatted = String(county.code).padStart(3, "0");
  const density =
    county.area > 0 ? Math.round(county.population / county.area) : 0;
  const matatuTown = COUNTY_TO_MATATU_TOWN[county.slug] || "all";

  const jumpSections = [
    { id: "overview", label: "Overview" },
    { id: "leadership", label: "Leadership" },
    ...(countyBudget ? [{ id: "budget", label: "Budget" }] : []),
    ...(countyRainfall ? [{ id: "climate", label: "Climate" }] : []),
    { id: "constituencies", label: `Constituencies (${county.constituencies.length})` },
    ...(countyHospitals.length > 0
      ? [{ id: "hospitals", label: `SHA Hospitals (${countyHospitals.length})` }]
      : []),
    ...(countyPostalCodes.length > 0
      ? [{ id: "postal", label: "Postal Codes" }]
      : []),
    { id: "services", label: "Services" },
  ];

  const handleJumpToSection = (secId: string) => {
    triggerHaptic(8);
    setActiveSection(secId);
    if (secId === "overview") {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }
    const y = sectionOffsetsRef.current[secId];
    if (typeof y === "number") {
      scrollRef.current?.scrollTo({ y: Math.max(0, y - 10), animated: true });
    }
  };

  const quickServices = [
    {
      title: "Pay County Rates & Single Business Permit",
      subtitle: "eCitizen & Official County Portal",
      icon: "card-outline" as const,
      action: () =>
        Linking.openURL(county.website || "https://ecitizen.go.ke").catch(() => {}),
    },
    {
      title: "County Budget & Expenditure Tracker",
      subtitle: "Compare All 47 County Allocations",
      icon: "bar-chart-outline" as const,
      action: () => router.push("/(tabs)/county"),
    },
    {
      title: "SHA / SHIF Benefit & Contribution Estimator",
      subtitle: "Calculate Monthly SHIF Deductions & Facility Cover",
      icon: "medkit-outline" as const,
      action: () =>
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: "sha-benefit-estimator" },
        }),
    },
    {
      title: "Matatu Routes, Stages & SACCO Fares",
      subtitle:
        matatuTown !== "all"
          ? `Browse ${county.capital} & ${county.name} Matatu Routes`
          : "Explore Verified Kenyan Matatu Routes & Fares",
      icon: "bus-outline" as const,
      action: () =>
        router.push({
          pathname: "/matatu",
          params: { town: matatuTown },
        }),
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right", "bottom"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title={`${county.name} County`}
        subtitle={`County ${codeFormatted} · HQ: ${county.capital}`}
        onBack={() => router.back()}
      />

      {/* Sticky Section Jump-Pills Bar (UX-12) */}
      <View
        style={{
          backgroundColor: theme.surfaceContainerLow,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.outlineVariant,
          paddingHorizontal: 14,
          paddingVertical: 6,
        }}
      >
        <ExpandablePillRow
          fadeColor={theme.surfaceContainerLow}
          showExpandButton={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          {jumpSections.map((sec) => {
            const active = activeSection === sec.id;
            return (
              <Pressable
                key={sec.id}
                onPress={() => handleJumpToSection(sec.id)}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle({
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                })}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Outfit_700Bold",
                    color: active
                      ? theme.onPrimaryContainer
                      : theme.textSecondary,
                  }}
                >
                  {sec.label}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
      >
        {/* Compact County KPI Strip */}
        <View
          style={[
            styles.heroCard,
            { backgroundColor: theme.bgCard, borderColor: theme.border },
          ]}
        >
          <View style={styles.heroBody}>
            {countyRainfall && (
              <Text
                style={{
                  fontSize: 11,
                  color: theme.sky,
                  marginBottom: 8,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                {countyRainfall.climateZone} · {computedAnnualRainfall} mm/yr
              </Text>
            )}

            {/* Compact Quick Stats Strip */}
            <View style={styles.statsGrid}>
              <View
                style={[
                  styles.statBox,
                  {
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.statBoxLabel, { color: theme.textMuted }]}
                >
                  POPULATION
                </Text>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.8}
                  style={[styles.statBoxValue, { color: theme.sky }]}
                >
                  {county.population.toLocaleString()}
                </Text>
              </View>
              <View
                style={[
                  styles.statBox,
                  {
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.statBoxLabel, { color: theme.textMuted }]}
                >
                  LAND AREA
                </Text>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.8}
                  style={[styles.statBoxValue, { color: theme.kenyaGreenLight }]}
                >
                  {county.area.toLocaleString()} km²
                </Text>
              </View>
              <View
                style={[
                  styles.statBox,
                  {
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.statBoxLabel, { color: theme.textMuted }]}
                >
                  DENSITY
                </Text>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.8}
                  style={[styles.statBoxValue, { color: theme.gold }]}
                >
                  {density}/km²
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Leadership Section */}
        <View
          onLayout={(e) => {
            sectionOffsetsRef.current.leadership = e.nativeEvent.layout.y;
          }}
        >
          <Text style={[styles.sectionHeading, { color: theme.gold }]}>
            Elected County Leadership
          </Text>
          <View
            style={[
              styles.infoCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View
              style={[styles.leaderRow, { borderBottomColor: theme.border }]}
            >
              <View
                style={[
                  styles.leaderIconWrap,
                  {
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Ionicons name="ribbon-outline" size={18} color={theme.gold} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
                  Governor
                </Text>
                <Text
                  style={[styles.leaderName, { color: theme.textPrimary }]}
                >
                  {county.governor}
                </Text>
              </View>
            </View>

            {county.deputyGovernor && (
              <View
                style={[styles.leaderRow, { borderBottomColor: theme.border }]}
              >
                <View
                  style={[
                    styles.leaderIconWrap,
                    {
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Ionicons name="person-outline" size={18} color={theme.sky} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
                    Deputy Governor
                  </Text>
                  <Text
                    style={[styles.leaderName, { color: theme.textPrimary }]}
                  >
                    {county.deputyGovernor}
                  </Text>
                </View>
              </View>
            )}

            {county.senator && (
              <View
                style={[styles.leaderRow, { borderBottomColor: theme.border }]}
              >
                <View
                  style={[
                    styles.leaderIconWrap,
                    {
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Ionicons
                    name="shield-outline"
                    size={18}
                    color={theme.kenyaGreenLight}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
                    Senator
                  </Text>
                  <Text
                    style={[styles.leaderName, { color: theme.textPrimary }]}
                  >
                    {county.senator}
                  </Text>
                </View>
              </View>
            )}

            {county.womenRep && (
              <View style={[styles.leaderRow, { borderBottomWidth: 0 }]}>
                <View
                  style={[
                    styles.leaderIconWrap,
                    {
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Ionicons
                    name="heart-outline"
                    size={18}
                    color={theme.kenyaRedLight}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.leaderRole, { color: theme.textMuted }]}>
                    Woman Representative
                  </Text>
                  <Text
                    style={[styles.leaderName, { color: theme.textPrimary }]}
                  >
                    {county.womenRep}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* County Budget Snapshot (FY 2025/26) */}
        {countyBudget && (
          <View
            onLayout={(e) => {
              sectionOffsetsRef.current.budget = e.nativeEvent.layout.y;
            }}
          >
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              County Budget & Absorption (FY{" "}
              {(budgetsData as any).fiscalYear || "2025/26"})
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 8,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontSize: 12.5, color: theme.textSecondary, flexShrink: 1 }}>
                  Equitable Share Allocation
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Outfit_700Bold",
                    color: theme.textPrimary,
                  }}
                >
                  KES {Number(countyBudget.allocation).toLocaleString()}M
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 8,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontSize: 12.5, color: theme.textSecondary, flexShrink: 1 }}>
                  Own-Source Revenue (OSR)
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Outfit_700Bold",
                    color: theme.gold,
                  }}
                >
                  KES {Number(countyBudget.ownSourceRevenue).toLocaleString()}M
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 8,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontSize: 12.5, color: theme.textSecondary, flexShrink: 1 }}>
                  Total County Revenue
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Outfit_700Bold",
                    color: theme.textPrimary,
                  }}
                >
                  KES {Number(countyBudget.totalRevenue).toLocaleString()}M
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 8,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontSize: 12.5, color: theme.textSecondary, flexShrink: 1 }}>
                  Actual Expenditure
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Outfit_700Bold",
                    color: theme.kenyaGreenLight,
                  }}
                >
                  KES {Number(countyBudget.expenditure).toLocaleString()}M
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 8,
                  paddingTop: 8,
                  marginTop: 4,
                  borderTopWidth: 1,
                  borderTopColor: theme.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 12.5,
                    fontFamily: "Outfit_700Bold",
                    color: theme.textPrimary,
                    flexShrink: 1,
                  }}
                >
                  Budget Absorption Rate
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Outfit_800ExtraBold",
                    color:
                      countyBudget.absorptionRate >= 80
                        ? theme.kenyaGreenLight
                        : theme.gold,
                  }}
                >
                  {countyBudget.absorptionRate}%
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Climate & 12-Month Rainfall Breakdown */}
        {countyRainfall && (
          <View
            onLayout={(e) => {
              sectionOffsetsRef.current.climate = e.nativeEvent.layout.y;
            }}
          >
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Climate & 12-Month Rainfall ({computedAnnualRainfall}{" "}
              mm/yr)
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                  gap: 8,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 12.5,
                  fontFamily: "Outfit_700Bold",
                  color: theme.sky,
                }}
              >
                Zone: {countyRainfall.climateZone}
              </Text>
              <Text style={{ fontSize: 11.5, color: theme.textSecondary }}>
                Long Rains: {countyRainfall.longRains} · Short Rains:{" "}
                {countyRainfall.shortRains} · Dry: {countyRainfall.drySeason}
              </Text>
              {(countyRainfall.monthly || countyRainfall.monthlyAvg) && (
                <View style={{ flexDirection: "row", gap: 2, marginTop: 4 }}>
                  {MONTH_KEYS.map((mk, idx) => {
                    const mm =
                      countyRainfall.monthly?.[mk] ??
                      countyRainfall.monthlyAvg?.[idx] ??
                      0;
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
                              : theme.bgElevated,
                        }}
                      >
                        <Text style={{ fontSize: 7.5, color: theme.textMuted }}>
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
            </View>
          </View>
        )}

        {/* Constituencies / Sub-counties */}
        <View
          onLayout={(e) => {
            sectionOffsetsRef.current.constituencies = e.nativeEvent.layout.y;
          }}
        >
          <View style={styles.subcountiesHeaderRow}>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Parliamentary Constituencies ({county.constituencies.length})
            </Text>
          </View>
          <View style={styles.constituenciesWrap}>
            {county.constituencies.map((c, i) => (
              <View
                key={i}
                style={[
                  styles.constituencyChip,
                  { backgroundColor: theme.bgCard, borderColor: theme.border },
                ]}
              >
                <Text
                  style={[
                    styles.constituencyNumber,
                    { color: theme.gold, backgroundColor: `${theme.gold}18` },
                  ]}
                >
                  {i + 1}
                </Text>
                <Text
                  style={[
                    styles.constituencyText,
                    { color: theme.textPrimary },
                  ]}
                >
                  {c}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Urban Utilities & Civic Services (Nairobi & Mombasa) OR Agricultural Soils & Crops */}
        {isUrbanCounty ? (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Urban Utilities & Civic Services ({county.name})
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                  gap: 10,
                },
              ]}
            >
              {(URBAN_UTILITIES[county.slug] || []).map((u, idx, arr) => (
                <Pressable
                  key={u.title}
                  onPress={() => Linking.openURL(u.url).catch(() => {})}
                  style={{
                    paddingBottom: idx < arr.length - 1 ? 8 : 0,
                    borderBottomWidth: idx < arr.length - 1 ? 1 : 0,
                    borderBottomColor: theme.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.textPrimary,
                    }}
                  >
                    {u.title} ↗
                  </Text>
                  <Text
                    style={{
                      fontSize: 11.5,
                      color: theme.textSecondary,
                      marginTop: 2,
                    }}
                  >
                    {u.detail}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        ) : countySoils.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Agricultural Soils & Best Crops ({countySoils.length})
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                  gap: 10,
                },
              ]}
            >
              {countySoils.map((s: any, idx: number) => (
                <View
                  key={idx}
                  style={{
                    paddingBottom: idx < countySoils.length - 1 ? 8 : 0,
                    borderBottomWidth: idx < countySoils.length - 1 ? 1 : 0,
                    borderBottomColor: theme.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.textPrimary,
                    }}
                  >
                    {s.name} (pH {s.pH || s.ph} · {s.fertility} fertility)
                  </Text>
                  <Text
                    style={{
                      fontSize: 11.5,
                      color: theme.kenyaGreenLight,
                      marginTop: 2,
                    }}
                  >
                    Best Crops: {(s.bestCrops || []).join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* SHA / SHIF Hospitals in County */}
        {countyHospitals.length > 0 && (
          <View
            onLayout={(e) => {
              sectionOffsetsRef.current.hospitals = e.nativeEvent.layout.y;
            }}
          >
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              SHA / SHIF Accredited Hospitals in {county.name} (
              {countyHospitals.length})
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                  gap: 8,
                },
              ]}
            >
              {filteredHospitals.slice(0, visibleCount).map((h: any, idx: number, arr: any[]) => (
                <View
                  key={`${h.name}-${h.subcounty || ""}-${h.level || ""}`}
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    paddingBottom: idx < arr.length - 1 ? 8 : 0,
                    borderBottomWidth: idx < arr.length - 1 ? 1 : 0,
                    borderBottomColor: theme.border,
                  }}
                >
                  <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "Outfit_700Bold",
                        color: theme.textPrimary,
                      }}
                    >
                      {h.name}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      {h.type} ·{" "}
                      {h.services?.length
                        ? h.services.slice(0, 3).join(", ")
                        : `${h.subcounty || county.name} Sub-County · SHA Accredited`}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.gold,
                    }}
                  >
                    Level {h.level}
                  </Text>
                </View>
              ))}
              {filteredHospitals.length > visibleCount && (
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    triggerHaptic(8);
                    setVisibleCount((prev) => prev + 30);
                  }}
                  style={pressableStyle({
                    marginTop: 8,
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: theme.gold,
                    alignItems: "center",
                    backgroundColor: `${theme.gold}14`,
                  })}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Outfit_700Bold",
                      color: theme.gold,
                    }}
                  >
                    Load More ({filteredHospitals.length - visibleCount} remaining)
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* Postal Codes in County */}
        {countyPostalCodes.length > 0 && (
          <View
            onLayout={(e) => {
              sectionOffsetsRef.current.postal = e.nativeEvent.layout.y;
            }}
          >
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Posta Kenya Postal Codes in {county.name} (
              {countyPostalCodes.length})
            </Text>
            <View style={styles.constituenciesWrap}>
              {filteredPostal.slice(0, postalVisibleCount).map((p: any) => (
                <View
                  key={`${p.code}-${p.town}`}
                  style={[
                    styles.constituencyChip,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <Text
                    style={[
                      styles.constituencyNumber,
                      { color: theme.gold, backgroundColor: `${theme.gold}18` },
                    ]}
                  >
                    {p.code}
                  </Text>
                  <Text
                    style={[
                      styles.constituencyText,
                      { color: theme.textPrimary },
                    ]}
                  >
                    {p.town}
                  </Text>
                </View>
              ))}
            </View>
            {filteredPostal.length > postalVisibleCount && (
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => {
                  triggerHaptic(8);
                  setPostalVisibleCount((prev) => prev + 30);
                }}
                style={pressableStyle({
                  marginBottom: 14,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: theme.gold,
                  alignItems: "center",
                  backgroundColor: `${theme.gold}14`,
                })}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Outfit_700Bold",
                    color: theme.gold,
                  }}
                >
                  Load More ({filteredPostal.length - postalVisibleCount} remaining)
                </Text>
              </Pressable>
            )}
          </View>
        )}

        {/* Top Schools, Parks, Forests, Agrovets & Languages */}
        {(countySchools.length > 0 ||
          countyParks.length > 0 ||
          countyForests.length > 0 ||
          countyAgrovets.length > 0 ||
          countyLanguages.length > 0) && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Schools, Parks, Agrovets & Languages in {county.name}
            </Text>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                  padding: 14,
                  gap: 8,
                },
              ]}
            >
              {countySchools.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  <Text
                    style={{
                      fontFamily: "Outfit_700Bold",
                      color: theme.textPrimary,
                    }}
                  >
                    Top KCSE Schools:{" "}
                  </Text>
                  {countySchools
                    .map((s: any) => `${s.name} (${s.meanScore.toFixed(2)})`)
                    .join(" · ")}
                </Text>
              )}
              {(countyParks.length > 0 || countyForests.length > 0) && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  <Text
                    style={{
                      fontFamily: "Outfit_700Bold",
                      color: theme.textPrimary,
                    }}
                  >
                    Parks & Forests:{" "}
                  </Text>
                  {[
                    ...countyParks.map((p: any) => p.name),
                    ...countyForests.map((f: any) => f.name),
                  ].join(" · ")}
                </Text>
              )}
              {countyAgrovets.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  <Text
                    style={{
                      fontFamily: "Outfit_700Bold",
                      color: theme.textPrimary,
                    }}
                  >
                    Licensed Agrovets:{" "}
                  </Text>
                  {countyAgrovets
                    .map((a: any) => `${a.name} (${a.town})`)
                    .join(" · ")}
                </Text>
              )}
              {countyLanguages.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  <Text
                    style={{
                      fontFamily: "Outfit_700Bold",
                      color: theme.textPrimary,
                    }}
                  >
                    Local Languages:{" "}
                  </Text>
                  {countyLanguages.map((l: any) => l.name).join(", ")}
                </Text>
              )}
            </View>
          </>
        )}

        {/* Quick Services */}
        <View
          onLayout={(e) => {
            sectionOffsetsRef.current.services = e.nativeEvent.layout.y;
          }}
        >
          <Text style={[styles.sectionHeading, { color: theme.gold }]}>
            Quick County Services & Tools
          </Text>
          <View
            style={[
              styles.infoCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            {quickServices.map((srv, idx) => (
              <Pressable
                key={idx}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={srv.action}
                style={pressableStyle([
                  styles.contactRow,
                  {
                    borderBottomColor: theme.border,
                    borderBottomWidth:
                      idx === quickServices.length - 1 ? 0 : 1,
                  },
                ])}
              >
                <View
                  style={[
                    styles.leaderIconWrap,
                    {
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                      marginRight: 4,
                    },
                  ]}
                >
                  <Ionicons name={srv.icon} size={18} color={theme.gold} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 13.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.textPrimary,
                    }}
                  >
                    {srv.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: theme.textMuted,
                      marginTop: 1,
                    }}
                  >
                    {srv.subtitle}
                  </Text>
                </View>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={theme.textMuted}
                />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Geographically Bordering Counties */}
        {borderingCounties.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Bordering Counties ({borderingCounties.length})
            </Text>
            <View style={styles.constituenciesWrap}>
              {borderingCounties.map((nb) => (
                <Pressable
                  key={nb.slug}
                  onPress={() => {
                    triggerHaptic(8);
                    router.push(`/county/${nb.slug}` as any);
                  }}
                  style={[
                    styles.constituencyChip,
                    { backgroundColor: theme.bgCard, borderColor: theme.border },
                  ]}
                >
                  <Text
                    style={[
                      styles.constituencyNumber,
                      { color: theme.gold, backgroundColor: `${theme.gold}18` },
                    ]}
                  >
                    {String(nb.code).padStart(3, "0")}
                  </Text>
                  <Text style={[styles.constituencyText, { color: theme.textPrimary }]}>
                    {nb.name} →
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}

        {/* Contact & Official Info */}
        {(county.phone || county.website) && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Official Contacts & Switchboard
            </Text>
            <View
              style={[
                styles.infoCard,
                { backgroundColor: theme.bgCard, borderColor: theme.border },
              ]}
            >
              {county.phone && (
                <Pressable
                  style={pressableStyle([
                    styles.contactRow,
                    { borderBottomColor: theme.border },
                  ])}
                  onPress={() => Linking.openURL(`tel:${county.phone}`).catch(() => {})}
                >
                  <Ionicons name="call-outline" size={18} color={theme.gold} />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[styles.contactText, { color: theme.textPrimary }]}
                    >
                      {county.phone}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      Official switchboard for {county.name} County
                    </Text>
                  </View>
                  <Ionicons
                    name="open-outline"
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}
              {county.website && (
                <Pressable
                  style={pressableStyle([
                    styles.contactRow,
                    { borderBottomWidth: 0 },
                  ])}
                  onPress={() => Linking.openURL(county.website!).catch(() => {})}
                >
                  <Ionicons name="globe-outline" size={18} color={theme.sky} />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[styles.contactText, { color: theme.textPrimary }]}
                    >
                      {county.website}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      Official County Government Portal
                    </Text>
                  </View>
                  <Ionicons
                    name="open-outline"
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  headerBarTitle: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
  },
  content: {
    padding: 12,
    paddingBottom: 36,
  },
  heroCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 10,
  },
  heroBody: { padding: 10 },
  heroRow: { flexDirection: "row", alignItems: "center" },
  heroBadge: {
    width: 52,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroBadgeText: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: "Outfit_800ExtraBold",
  },
  heroSubtitle: { fontSize: 13, marginTop: 2 },
  statsGrid: {
    flexDirection: "row",
    gap: 6,
  },
  statBox: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  statBoxValue: {
    fontSize: 14,
    fontFamily: "Outfit_800ExtraBold",
    marginTop: 2,
    textAlign: "center",
  },
  statBoxLabel: {
    fontSize: 9.5,
    fontFamily: "Outfit_700Bold",
    letterSpacing: 0.3,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Outfit_800ExtraBold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 10,
    marginTop: 12,
  },
  infoCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 14,
  },
  leaderRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
  },
  leaderIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
  },
  leaderRole: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  leaderName: { fontSize: 14, fontFamily: "Outfit_700Bold", marginTop: 1 },
  subcountiesHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  constituenciesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  constituencyChip: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    maxWidth: "100%",
  },
  constituencyNumber: {
    fontSize: 10,
    fontFamily: "Outfit_800ExtraBold",
    marginRight: 6,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  constituencyText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
    flexShrink: 1,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  contactText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    flex: 1,
    flexShrink: 1,
  },
  notFoundWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
