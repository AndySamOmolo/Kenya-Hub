import React, { useMemo } from "react";
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
import { useTheme, KenyaStripe, AndroidTopAppBar } from "../../src/theme";
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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

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

  const county: County | undefined = countiesData.counties.find(
    (c) => c.slug === slug || String(c.code) === slug
  );

  if (!county) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.bgPrimary }]}>
        <View style={[styles.headerBar, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
          <Pressable onPress={() => router.back()} style={[styles.backButton, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
          </Pressable>
          <Text style={[styles.headerBarTitle, { color: theme.textPrimary }]}>County Not Found</Text>
        </View>
        <View style={styles.notFoundWrap}>
          <Text style={{ color: theme.textSecondary, fontSize: 16 }}>
            The requested county could not be found.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const codeFormatted = String(county.code).padStart(3, "0");
  const density = county.area > 0 ? Math.round(county.population / county.area) : 0;

  const countyBudget = useMemo(
    () =>
      ((budgetsData as any).budgets || []).find(
        (b: any) => b.code === county.code || b.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countyRainfall = useMemo(
    () =>
      ((rainfallData as any).counties || []).find(
        (r: any) => r.code === county.code || r.name.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countySoils = useMemo(
    () =>
      ((soilsData as any).soilTypes || []).filter((s: any) =>
        (s.whereFound || []).some((w: string) => w.toLowerCase().includes(county.name.toLowerCase()))
      ),
    [county]
  );

  const countyHospitals = useMemo(
    () =>
      ((hospitalsData as any).hospitals || []).filter(
        (h: any) => h.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countyPostalCodes = useMemo(
    () =>
      ((postalData as any).codes || []).filter(
        (p: any) => p.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countySchools = useMemo(
    () =>
      ((rankingsData as any).schools || []).filter(
        (s: any) => s.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countyParks = useMemo(
    () =>
      ((parksData as any).parks || []).filter((p: any) =>
        p.county.toLowerCase().includes(county.name.toLowerCase())
      ),
    [county]
  );

  const countyForests = useMemo(
    () =>
      ((forestsData as any).forests || []).filter((f: any) =>
        f.county.toLowerCase().includes(county.name.toLowerCase())
      ),
    [county]
  );

  const countyAgrovets = useMemo(
    () =>
      ((agrovetsData as any).agrovets || []).filter(
        (a: any) => a.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  const countyLanguages = useMemo(
    () =>
      ((languagesData as any).languages || []).filter((l: any) =>
        (l.counties || []).some((cn: string) => cn.toLowerCase().includes(county.name.toLowerCase()))
      ),
    [county]
  );

  const quickServices = [
    {
      title: "Pay County Rates & Single Business Permit",
      subtitle: "eCitizen & Official County Portal",
      icon: "card-outline" as const,
      action: () => Linking.openURL(county.website || "https://ecitizen.go.ke"),
    },
    {
      title: "County Budget & Expenditure Tracker",
      subtitle: "Compare All 47 County Allocations",
      icon: "bar-chart-outline" as const,
      action: () => router.push("/(tabs)/county"),
    },
    {
      title: "SHA / SHIF Accredited Hospitals",
      subtitle: "Search Accredited Facilities in Kenya",
      icon: "medkit-outline" as const,
      action: () =>
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: "nhif-hospital-finder" },
        }),
    },
    {
      title: "Posta Kenya Postal Codes",
      subtitle: "Search All P.O. Box Codes",
      icon: "mail-outline" as const,
      action: () =>
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: "kenya-postal-codes" },
        }),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      <AndroidTopAppBar
        title={`${county.name} County`}
        subtitle={`County ${codeFormatted} · HQ: ${county.capital}`}
        onBack={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.heroBody}>
            <View style={styles.heroRow}>
              <View style={[styles.heroBadge, { backgroundColor: `${theme.gold}20`, borderColor: `${theme.gold}40` }]}>
                <Text style={[styles.heroBadgeText, { color: theme.gold }]}>{codeFormatted}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 14 }}>
                <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>{county.name} County</Text>
                <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
                  Headquarters: <Text style={{ color: theme.gold, fontWeight: "700" }}>{county.capital}</Text>
                </Text>
                {countyRainfall && (
                  <Text style={{ fontSize: 11, color: theme.sky, marginTop: 2, fontWeight: "600" }}>
                    {countyRainfall.climateZone} · {countyRainfall.annualRainfall} mm/yr
                  </Text>
                )}
              </View>
            </View>

            {/* Quick Stats Grid */}
            <View style={[styles.statsGrid, { borderTopColor: theme.border }]}>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="people" size={18} color={theme.sky} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {county.population.toLocaleString()}
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Population</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="map" size={18} color={theme.kenyaGreenLight} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {county.area.toLocaleString()} km²
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Land Area</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="analytics" size={18} color={theme.gold} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {density} / km²
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Density</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Leadership Section */}
        <Text style={[styles.sectionHeading, { color: theme.gold }]}>Elected County Leadership</Text>
        <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
            <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
              <Ionicons name="ribbon-outline" size={18} color={theme.gold} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Governor</Text>
              <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.governor}</Text>
            </View>
          </View>

          {county.deputyGovernor && (
            <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="person-outline" size={18} color={theme.sky} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Deputy Governor</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.deputyGovernor}</Text>
              </View>
            </View>
          )}

          {county.senator && (
            <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="shield-outline" size={18} color={theme.kenyaGreenLight} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Senator</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.senator}</Text>
              </View>
            </View>
          )}

          {county.womenRep && (
            <View style={[styles.leaderRow, { borderBottomWidth: 0 }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="heart-outline" size={18} color={theme.kenyaRedLight} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Woman Representative</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.womenRep}</Text>
              </View>
            </View>
          )}
        </View>

        {/* County Budget Snapshot (FY 2025/26) */}
        {countyBudget && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              County Budget & Absorption (FY {(budgetsData as any).fiscalYear || "2025/26"})
            </Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border, padding: 14 }]}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>Equitable Share Allocation</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                  KES {Number(countyBudget.allocation).toLocaleString()}M
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>Own-Source Revenue (OSR)</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.gold }}>
                  KES {Number(countyBudget.ownSourceRevenue).toLocaleString()}M
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>Total County Revenue</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                  KES {Number(countyBudget.totalRevenue).toLocaleString()}M
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
                <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>Actual Expenditure</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.kenyaGreenLight }}>
                  KES {Number(countyBudget.expenditure).toLocaleString()}M
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8, marginTop: 4, borderTopWidth: 1, borderTopColor: theme.border }}>
                <Text style={{ fontSize: 12.5, fontWeight: "700", color: theme.textPrimary }}>Budget Absorption Rate</Text>
                <Text style={{ fontSize: 14, fontWeight: "900", color: countyBudget.absorptionRate >= 80 ? theme.kenyaGreenLight : theme.gold }}>
                  {countyBudget.absorptionRate}%
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Climate & 12-Month Rainfall Breakdown */}
        {countyRainfall && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Climate & 12-Month Rainfall ({countyRainfall.annualRainfall} mm/yr)
            </Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border, padding: 14, gap: 8 }]}>
              <Text style={{ fontSize: 12.5, fontWeight: "700", color: theme.sky }}>
                Zone: {countyRainfall.climateZone}
              </Text>
              <Text style={{ fontSize: 11.5, color: theme.textSecondary }}>
                Long Rains: {countyRainfall.longRains} · Short Rains: {countyRainfall.shortRains} · Dry: {countyRainfall.drySeason}
              </Text>
              {countyRainfall.monthly && (
                <View style={{ flexDirection: "row", gap: 2, marginTop: 4 }}>
                  {MONTH_KEYS.map((mk, idx) => {
                    const mm = countyRainfall.monthly[mk] || 0;
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
                        <Text style={{ fontSize: 7.5, color: theme.textMuted }}>{MONTHS[idx]}</Text>
                        <Text style={{ fontSize: 8, fontWeight: "800", color: theme.textPrimary }}>{mm}</Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          </>
        )}

        {/* Constituencies / Sub-counties */}
        <View style={styles.subcountiesHeaderRow}>
          <Text style={[styles.sectionHeading, { color: theme.gold }]}>
            Parliamentary Constituencies ({county.constituencies.length})
          </Text>
        </View>
        <View style={styles.constituenciesWrap}>
          {county.constituencies.map((c, i) => (
            <View key={i} style={[styles.constituencyChip, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <Text style={[styles.constituencyNumber, { color: theme.gold, backgroundColor: `${theme.gold}18` }]}>{i + 1}</Text>
              <Text style={[styles.constituencyText, { color: theme.textPrimary }]}>{c}</Text>
            </View>
          ))}
        </View>

        {/* Agricultural Soils & Crops */}
        {countySoils.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Agricultural Soils & Best Crops ({countySoils.length})
            </Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border, padding: 14, gap: 10 }]}>
              {countySoils.map((s: any, idx: number) => (
                <View
                  key={idx}
                  style={{
                    paddingBottom: idx < countySoils.length - 1 ? 8 : 0,
                    borderBottomWidth: idx < countySoils.length - 1 ? 1 : 0,
                    borderBottomColor: theme.border,
                  }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "800", color: theme.textPrimary }}>
                    {s.name} (pH {s.ph} · {s.fertility} fertility)
                  </Text>
                  <Text style={{ fontSize: 11.5, color: theme.kenyaGreenLight, marginTop: 2 }}>
                    Best Crops: {(s.bestCrops || []).join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* SHA / SHIF Hospitals in County */}
        {countyHospitals.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              SHA / SHIF Accredited Hospitals in {county.name} ({countyHospitals.length})
            </Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border, padding: 14, gap: 8 }]}>
              {countyHospitals.map((h: any, idx: number) => (
                <View
                  key={idx}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: idx < countyHospitals.length - 1 ? 8 : 0,
                    borderBottomWidth: idx < countyHospitals.length - 1 ? 1 : 0,
                    borderBottomColor: theme.border,
                  }}
                >
                  <View style={{ flex: 1, paddingRight: 8 }}>
                    <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>{h.name}</Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      {h.type} · {(h.services || []).slice(0, 3).join(", ")}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: theme.gold }}>Level {h.level}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Postal Codes in County */}
        {countyPostalCodes.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Posta Kenya Postal Codes in {county.name} ({countyPostalCodes.length})
            </Text>
            <View style={styles.constituenciesWrap}>
              {countyPostalCodes.map((p: any, idx: number) => (
                <View key={idx} style={[styles.constituencyChip, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
                  <Text style={[styles.constituencyNumber, { color: theme.gold, backgroundColor: `${theme.gold}18` }]}>
                    {p.code}
                  </Text>
                  <Text style={[styles.constituencyText, { color: theme.textPrimary }]}>{p.town}</Text>
                </View>
              ))}
            </View>
          </>
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
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border, padding: 14, gap: 8 }]}>
              {countySchools.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  🏆 <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Top KCSE Schools: </Text>
                  {countySchools.map((s: any) => `${s.name} (${s.meanScore.toFixed(2)})`).join(" · ")}
                </Text>
              )}
              {(countyParks.length > 0 || countyForests.length > 0) && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  🦁 <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Parks & Forests: </Text>
                  {[...countyParks.map((p: any) => p.name), ...countyForests.map((f: any) => f.name)].join(" · ")}
                </Text>
              )}
              {countyAgrovets.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  🏪 <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Licensed Agrovets: </Text>
                  {countyAgrovets.map((a: any) => `${a.name} (${a.town})`).join(" · ")}
                </Text>
              )}
              {countyLanguages.length > 0 && (
                <Text style={{ fontSize: 12, color: theme.textSecondary }}>
                  🗣️ <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Local Languages: </Text>
                  {countyLanguages.map((l: any) => l.name).join(", ")}
                </Text>
              )}
            </View>
          </>
        )}

        {/* Quick Services */}
        <Text style={[styles.sectionHeading, { color: theme.gold }]}>Quick County Services & Tools</Text>
        <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          {quickServices.map((srv, idx) => (
            <Pressable
              key={idx}
              onPress={srv.action}
              style={[
                styles.contactRow,
                {
                  borderBottomColor: theme.border,
                  borderBottomWidth: idx === quickServices.length - 1 ? 0 : 1,
                },
              ]}
            >
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border, marginRight: 4 }]}>
                <Ionicons name={srv.icon} size={18} color={theme.gold} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 13.5, fontWeight: "700", color: theme.textPrimary }}>
                  {srv.title}
                </Text>
                <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 1 }}>
                  {srv.subtitle}
                </Text>
              </View>
              <Ionicons name="arrow-forward" size={16} color={theme.textMuted} />
            </Pressable>
          ))}
        </View>

        {/* Contact & Official Info */}
        {(county.phone || county.website) && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>Official Contacts & Switchboard</Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              {county.phone && (
                <Pressable
                  style={[styles.contactRow, { borderBottomColor: theme.border }]}
                  onPress={() => Linking.openURL(`tel:${county.phone}`)}
                >
                  <Ionicons name="call-outline" size={18} color={theme.gold} />
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.contactText, { color: theme.textPrimary }]}>{county.phone}</Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>Official switchboard for {county.name} County</Text>
                  </View>
                  <Ionicons name="open-outline" size={16} color={theme.textMuted} />
                </Pressable>
              )}
              {county.website && (
                <Pressable
                  style={[styles.contactRow, { borderBottomWidth: 0 }]}
                  onPress={() => Linking.openURL(county.website!)}
                >
                  <Ionicons name="globe-outline" size={18} color={theme.sky} />
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.contactText, { color: theme.textPrimary }]} >
                      {county.website}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>Official County Government Portal</Text>
                  </View>
                  <Ionicons name="open-outline" size={16} color={theme.textMuted} />
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
    fontWeight: "800",
  },
  headerBarSubtitle: {
    fontSize: 12,
    marginTop: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  heroCard: {
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 16,
  },
  heroBody: { padding: 18 },
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
    fontWeight: "900",
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  heroSubtitle: { fontSize: 13, marginTop: 2 },
  statsGrid: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    gap: 8,
  },
  statBox: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  statBoxValue: {
    fontSize: 13,
    fontFamily: "Outfit_700Bold",
    fontWeight: "800",
    marginTop: 6,
    textAlign: "center",
  },
  statBoxLabel: { fontSize: 10, marginTop: 2 },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
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
  leaderRole: { fontSize: 11, fontWeight: "600" },
  leaderName: { fontSize: 14, fontWeight: "700", marginTop: 1 },
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
  },
  constituencyNumber: {
    fontSize: 10,
    fontWeight: "800",
    marginRight: 6,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  constituencyText: { fontSize: 12, fontWeight: "600" },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  contactText: { fontSize: 13, fontWeight: "600" },
  notFoundWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
