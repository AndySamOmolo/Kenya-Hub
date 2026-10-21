import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, ThemeColors } from "../theme";

// Import directory datasets
import hospitalsData from "../shared/data/nhif-hospitals.json";
import parksData from "../shared/data/national-parks.json";
import customsData from "../shared/data/customs-restricted-items.json";
import cropsData from "../shared/data/crop-planting-calendar.json";
import agrovetsData from "../shared/data/agrovets.json";
import foodsData from "../shared/data/kenyan-foods-nutrition.json";
import soilsData from "../shared/data/soil-types.json";
import rainfallData from "../shared/data/rainfall-patterns.json";
import budgetsData from "../shared/data/county-budgets.json";
import livestockData from "../shared/data/livestock-prices.json";
import agentsData from "../shared/data/real-estate-agents.json";
import trademarkData from "../shared/data/trademark-fees.json";
import forestsData from "../shared/data/forest-reserves.json";
import econData from "../shared/data/economic-calendar.json";
import vaccinesData from "../shared/data/vaccination-schedule.json";
import bodiesData from "../shared/data/professional-bodies.json";
import fertilizerData from "../shared/data/fertilizer-subsidy.json";
import languagesData from "../shared/data/kenya-languages.json";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const HOSPITAL_LEVELS_INFO = [
  { level: "Level 1", name: "Community Health Unit", desc: "Community Health Promoters (CHPs) — basic preventive & promotive care" },
  { level: "Level 2", name: "Dispensary / Clinic", desc: "Outpatient primary care, immunization & antenatal services" },
  { level: "Level 3", name: "Health Centre", desc: "Maternity, basic laboratory, minor surgery & inpatient observation" },
  { level: "Level 4", name: "Sub-County / Primary Hospital", desc: "Comprehensive medical, surgical, C-section & inpatient care" },
  { level: "Level 5", name: "County Referral Hospital", desc: "Specialized regional referral, ICU, imaging & specialist clinics" },
  { level: "Level 6", name: "National Teaching & Referral", desc: "KNH, MTRH, KUTRRH — tertiary sub-specialty & national referral care" },
];

export function ReferenceDirectoryTool({ slug }: { slug: string }) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [search, setSearch] = useState("");

  // Shared filter/sort states used across specific tools
  const [filterA, setFilterA] = useState("All");
  const [filterB, setFilterB] = useState("All");
  const [filterC, setFilterC] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [sortAsc, setSortAsc] = useState(false);

  // Tool-specific interactive states
  // 1. Child Growth & Vaccination Schedule
  const [childAgeMonths, setChildAgeMonths] = useState("6");
  const [childGender, setChildGender] = useState<"boys" | "girls">("boys");

  // 2. Trademark & IP Cost Calculator
  const [ipType, setIpType] = useState("trademark");
  const [tmClasses, setTmClasses] = useState("1");

  // 3. Crop Planting Calendar
  const [cropRegion, setCropRegion] = useState("highlands");

  // 4. Forest Reserves Hiking toggle
  const [hikingOnly, setHikingOnly] = useState(false);

  // ─── TOOL 1: CHILD GROWTH & VACCINATION SCHEDULE ───
  if (slug === "child-growth-schedule") {
    const ageNum = Math.max(0, Math.min(60, parseInt(childAgeMonths, 10) || 0));
    const weightTable: any[] = (vaccinesData as any).weightByAge?.[childGender] || [];
    const milestones: any[] = (vaccinesData as any).milestones || [];
    const schedule: any[] = (vaccinesData as any).vaccinationSchedule || [];

    // Find closest weight row
    const closestWeight = weightTable.reduce((prev, curr) =>
      Math.abs(curr.ageMonths - ageNum) < Math.abs(prev.ageMonths - ageNum) ? curr : prev
    , weightTable[0] || { ageMonths: 0, minKg: 2.5, medianKg: 3.3, maxKg: 4.4 });

    // Next vaccine visit
    const nextStage = schedule.find((s) => s.ageMonths >= ageNum) || schedule[schedule.length - 1];

    return (
      <View style={styles.toolWrap}>
        {/* Interactive Child Age & Gender Card */}
        <View style={styles.card}>
          <Text style={styles.subHeading}>Child Growth & Immunization Checker (WHO / MOH KEPI)</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.detailLabel}>Child Age (Months: 0–60)</Text>
              <TextInput
                value={childAgeMonths}
                onChangeText={setChildAgeMonths}
                keyboardType="numeric"
                style={[styles.searchBar, { marginTop: 4, fontWeight: "800", color: theme.textPrimary }]}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.detailLabel}>Sex</Text>
              <View style={{ flexDirection: "row", gap: 6, marginTop: 4 }}>
                {(["boys", "girls"] as const).map((g) => (
                  <Pressable
                    key={g}
                    onPress={() => setChildGender(g)}
                    style={[
                      styles.pillBtn,
                      { flex: 1, alignItems: "center" },
                      childGender === g && styles.pillBtnActive,
                    ]}
                  >
                    <Text style={[styles.pillBtnText, childGender === g && styles.pillBtnTextActive]}>
                      {g === "boys" ? "Boy" : "Girl"}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 6 }}>
            {[0, 2, 3, 6, 9, 12, 18, 24, 36, 60].map((m) => (
              <Pressable
                key={m}
                onPress={() => setChildAgeMonths(String(m))}
                style={[styles.pillBtn, ageNum === m && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, ageNum === m && styles.pillBtnTextActive]}>
                  {m === 0 ? "Birth" : `${m}m`}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Expected Weight & Next Vaccine Summary */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={[styles.card, { flex: 1, borderColor: theme.gold }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>
              WHO WEIGHT ({closestWeight?.ageMonths}M {childGender.toUpperCase()})
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "900", color: theme.textPrimary }}>
              {closestWeight?.medianKg} kg
            </Text>
            <Text style={{ fontSize: 11, color: theme.textSecondary }}>
              Normal: {closestWeight?.minKg} – {closestWeight?.maxKg} kg
            </Text>
          </View>
          <View style={[styles.card, { flex: 1, borderColor: theme.kenyaGreenLight }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.kenyaGreenLight }}>
              NEXT VACCINE VISIT
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "900", color: theme.textPrimary }}>
              {nextStage?.age}
            </Text>
            <Text style={{ fontSize: 11, color: theme.textSecondary }} >
              {(nextStage?.vaccines || []).map((v: any) => v.name).join(", ")}
            </Text>
          </View>
        </View>

        {/* Developmental Milestones */}
        <Text style={styles.subHeading}>Developmental Milestones by Age</Text>
        <View style={styles.card}>
          {milestones.map((ms: any, idx: number) => {
            const passed = ageNum >= ms.ageMonths;
            return (
              <View
                key={idx}
                style={{
                  paddingVertical: 8,
                  borderBottomWidth: idx < milestones.length - 1 ? 1 : 0,
                  borderBottomColor: theme.border,
                  gap: 4,
                }}
              >
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ fontSize: 13, fontWeight: "800", color: passed ? theme.gold : theme.textPrimary }}>
                    {ms.age} ({ms.ageMonths} months)
                  </Text>
                  <View
                    style={[
                      styles.badge,
                      {
                        backgroundColor: passed ? "rgba(47,164,99,0.15)" : `${theme.sky}20`,
                        borderColor: passed ? theme.kenyaGreenLight : theme.sky,
                      },
                    ]}
                  >
                    <Text style={[styles.badgeText, { color: passed ? theme.kenyaGreenLight : theme.sky }]}>
                      {passed ? "✓ Reached / Current" : "Upcoming"}
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                  • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Motor: </Text>
                  {(ms.motor || []).join(", ")}
                </Text>
                <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                  • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Social & Language: </Text>
                  {[...(ms.social || []), ...(ms.language || [])].join(", ")}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Complete KEPI Vaccination Schedule */}
        <Text style={styles.subHeading}>Complete MOH KEPI Vaccination Schedule (Free at Public Clinics)</Text>
        {schedule.map((stage: any, sIdx: number) => (
          <View key={sIdx} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.cardTitle}>{stage.age}</Text>
              <View style={[styles.badge, { backgroundColor: `${theme.kenyaGreenLight}20`, borderColor: theme.kenyaGreenLight }]}>
                <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>
                  {(stage.vaccines || []).length} Vaccines
                </Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              {(stage.vaccines || []).map((v: any, vIdx: number) => (
                <View key={vIdx} style={{ paddingVertical: 4, borderBottomWidth: vIdx < stage.vaccines.length - 1 ? 1 : 0, borderBottomColor: theme.border }}>
                  <Text style={{ fontSize: 13, fontWeight: "700", color: theme.gold }}>
                    {v.name} — {v.fullName}
                  </Text>
                  <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>
                    Protects against: {v.protectsAgainst} · Route: {v.route} ({v.site})
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 2: TRADEMARK & IP COST CALCULATOR ───
  if (slug === "trademark-cost-kenya") {
    const feesObj: Record<string, any> = (trademarkData as any).fees || {};
    const ipKeys = Object.keys(feesObj);
    const activeIp = feesObj[ipType] || feesObj.trademark || {};
    const numClasses = Math.max(1, Math.min(45, parseInt(tmClasses, 10) || 1));
    const contact = (trademarkData as any).kipiContact || {};

    const totalCost = useMemo(() => {
      if (ipType === "trademark") {
        // Search (3000) + Application (4000) + Ad (3000) + Reg (2000) = 12,000 for 1st class, + 9,000 per extra class
        const firstClassTotal = (activeIp.steps || []).reduce((s: number, st: any) => s + (Number(st.amount) || 0), 0);
        const extraClassesCost = (numClasses - 1) * 9000;
        return firstClassTotal + extraClassesCost;
      }
      return (activeIp.steps || []).reduce((s: number, st: any) => s + (Number(st.amount) || 0), 0);
    }, [ipType, activeIp, numClasses]);

    return (
      <View style={styles.toolWrap}>
        <Text style={styles.subHeading}>Select Intellectual Property Type (KIPI & KECOBO)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {ipKeys.map((k) => {
            const active = ipType === k;
            return (
              <Pressable
                key={k}
                onPress={() => setIpType(k)}
                style={[styles.pillBtn, active && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                  {feesObj[k].title || k}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {ipType === "trademark" && (
          <View style={styles.card}>
            <Text style={styles.detailLabel}>Number of Nice Classification Classes (1–45)</Text>
            <View style={{ flexDirection: "row", gap: 8, alignItems: "center", marginTop: 4 }}>
              <TextInput
                value={tmClasses}
                onChangeText={setTmClasses}
                keyboardType="numeric"
                style={[styles.searchBar, { flex: 1, fontWeight: "800", color: theme.textPrimary }]}
              />
              {[1, 2, 3, 5].map((n) => (
                <Pressable
                  key={n}
                  onPress={() => setTmClasses(String(n))}
                  style={[styles.pillBtn, numClasses === n && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, numClasses === n && styles.pillBtnTextActive]}>
                    {n} {n === 1 ? "Class" : "Classes"}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Summary Card */}
        <View style={[styles.card, { borderColor: theme.gold }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold, letterSpacing: 0.8 }}>
            ESTIMATED STATUTORY FILING FEES ({activeIp.title?.toUpperCase()})
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>
            KES {totalCost.toLocaleString()}
          </Text>
          <Text style={{ fontSize: 12, color: theme.textSecondary }}>
            Processing Time: {activeIp.processingTime} · Validity: {activeIp.validityYears} Years
          </Text>
        </View>

        {/* Step-by-Step Fees */}
        <Text style={styles.subHeading}>Step-by-Step Statutory Fee Breakdown</Text>
        <View style={styles.card}>
          {(activeIp.steps || []).map((st: any, idx: number) => (
            <View
              key={idx}
              style={{
                paddingVertical: 8,
                borderBottomWidth: idx < activeIp.steps.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary, flex: 1 }}>
                  {idx + 1}. {st.item}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                  KES {Number(st.amount).toLocaleString()}
                </Text>
              </View>
              {st.note && (
                <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>{st.note}</Text>
              )}
            </View>
          ))}
          <View style={{ paddingTop: 8, borderTopWidth: 1, borderTopColor: theme.border, gap: 4 }}>
            {activeIp.renewalFee ? (
              <Text style={{ fontSize: 12, color: theme.kenyaGreenLight, fontWeight: "700" }}>
                Renewal Fee: KES {Number(activeIp.renewalFee).toLocaleString()} ({activeIp.renewalNote})
              </Text>
            ) : null}
            {activeIp.annualMaintenance ? (
              <Text style={{ fontSize: 12, color: theme.sky, fontWeight: "700" }}>
                Annual Maintenance: {activeIp.annualMaintenance}
              </Text>
            ) : null}
          </View>
        </View>

        {/* KIPI Contact Info */}
        {contact.name && (
          <View style={styles.card}>
            <Text style={styles.subHeading}>Official Registration Office</Text>
            <Text style={styles.cardTitle}>{contact.name}</Text>
            <Text style={styles.cardSubtitle}>{contact.address}</Text>
            <Text style={{ fontSize: 12, color: theme.gold, fontWeight: "600" }}>
              Phone: {contact.phone} · Email: {contact.email} · Web: {contact.website}
            </Text>
          </View>
        )}
      </View>
    );
  }

  // ─── TOOL 3: CROP PLANTING CALENDAR ───
  if (slug === "crop-planting-calendar") {
    const regions: any[] = (cropsData as any).regions || [];
    const crops: any[] = (cropsData as any).crops || [];
    const categories = useMemo(() => {
      const set = new Set<string>(crops.map((c) => c.category));
      return ["All", ...Array.from(set)];
    }, [crops]);

    const filteredCrops = useMemo(() => {
      const q = search.trim().toLowerCase();
      return crops.filter((c) => {
        const matchCat = filterA === "All" || c.category === filterA;
        const matchQ =
          !q ||
          c.name.toLowerCase().includes(q) ||
          (c.swahili && c.swahili.toLowerCase().includes(q)) ||
          (c.tips && c.tips.toLowerCase().includes(q));
        return matchCat && matchQ;
      });
    }, [crops, filterA, search]);

    const currentRegionObj = regions.find((r) => r.id === cropRegion) || regions[0];

    return (
      <View style={styles.toolWrap}>
        <Text style={styles.subHeading}>Select Farming Agro-Ecological Region</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {regions.map((r) => {
            const active = r.id === cropRegion;
            return (
              <Pressable
                key={r.id}
                onPress={() => setCropRegion(r.id)}
                style={[styles.pillBtn, active && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                  {r.name.split("(")[0].trim()}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        {currentRegionObj && (
          <Text style={{ fontSize: 11, color: theme.textMuted }}>
            Active Region: <Text style={{ color: theme.gold, fontWeight: "700" }}>{currentRegionObj.name}</Text>
          </Text>
        )}

        {/* Search & Category Filter */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search crop by English or Swahili name..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setFilterA(cat)}
              style={[styles.pillBtn, filterA === cat && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === cat && styles.pillBtnTextActive]}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.subHeading}>
          Crop Planting & Harvesting Schedule ({filteredCrops.length} Crops)
        </Text>

        {filteredCrops.map((c: any) => {
          const regSeason = c.seasons?.[cropRegion] || c.seasons?.highlands || {};
          const lr = regSeason.longRains || {};
          const sr = regSeason.shortRains || {};
          return (
            <View key={c.id || c.name} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>
                    {c.icon ? `${c.icon} ` : ""}{c.name} {c.swahili ? `(${c.swahili})` : ""}
                  </Text>
                  <Text style={styles.cardSubtitle}>
                    Maturity: {c.maturityDays} days · Altitude: {c.altitudeM}m · Temp: {c.optimalTempC}°C
                  </Text>
                </View>
                <View style={[styles.badge, { backgroundColor: `${theme.kenyaGreenLight}20`, borderColor: theme.kenyaGreenLight }]}>
                  <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>{c.category}</Text>
                </View>
              </View>

              {/* 12-Month Visual Planting / Harvesting Grid */}
              <View style={{ flexDirection: "row", gap: 2, marginTop: 4 }}>
                {MONTHS.map((m) => {
                  const isPlant =
                    (lr.plant && lr.plant.includes(m)) || (sr.plant && sr.plant.includes(m));
                  const isHarvest =
                    (lr.harvest && lr.harvest.includes(m)) || (sr.harvest && sr.harvest.includes(m));
                  return (
                    <View
                      key={m}
                      style={{
                        flex: 1,
                        paddingVertical: 4,
                        borderRadius: 4,
                        alignItems: "center",
                        backgroundColor: isPlant
                          ? "rgba(47, 164, 99, 0.28)"
                          : isHarvest
                          ? "rgba(200, 150, 30, 0.28)"
                          : theme.bgSecondary,
                      }}
                    >
                      <Text style={{ fontSize: 8, fontWeight: "800", color: theme.textPrimary }}>{m}</Text>
                      <Text style={{ fontSize: 7, color: isPlant ? theme.kenyaGreenLight : isHarvest ? theme.gold : theme.textMuted }}>
                        {isPlant ? "🌱" : isHarvest ? "🌾" : "·"}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.detailsList}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Long Rains (Plant → Harvest):</Text>
                  <Text style={[styles.detailValue, { color: theme.kenyaGreenLight }]}>
                    {lr.plant || "—"} → {lr.harvest || "—"}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Short Rains (Plant → Harvest):</Text>
                  <Text style={[styles.detailValue, { color: theme.gold }]}>
                    {sr.plant || "—"} → {sr.harvest || "—"}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Spacing & Seed Rate:</Text>
                  <Text style={styles.detailValue}>
                    {c.spacingCm} cm · {c.seedRateKgPerAcre}
                  </Text>
                </View>
                {Array.isArray(c.intercropWith) && c.intercropWith.length > 0 && (
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Intercrop With:</Text>
                    <Text style={styles.detailValue}>{c.intercropWith.join(", ")}</Text>
                  </View>
                )}
                {c.tips && (
                  <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4, fontStyle: "italic" }}>
                    💡 Agronomist Tip: {c.tips}
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  // ─── TOOL 4: KENYA RAINFALL PATTERNS (47 COUNTIES + 12-MONTH BREAKDOWN) ───
  if (slug === "kenya-rainfall-patterns") {
    const counties: any[] = (rainfallData as any).counties || [];
    const zones = useMemo(() => {
      const set = new Set<string>(counties.map((c) => c.climateZone));
      return ["All", ...Array.from(set)];
    }, [counties]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = counties.filter((c) => {
        const matchZone = filterA === "All" || c.climateZone === filterA;
        const matchQ =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.climateZone.toLowerCase().includes(q);
        return matchZone && matchQ;
      });

      return [...list].sort((a, b) => {
        if (sortBy === "wettest" || sortBy === "default") return b.annualRainfall - a.annualRainfall;
        if (sortBy === "driest") return a.annualRainfall - b.annualRainfall;
        return a.name.localeCompare(b.name);
      });
    }, [counties, filterA, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search county or climate zone..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {zones.map((z) => (
            <Pressable
              key={z}
              onPress={() => setFilterA(z)}
              style={[styles.pillBtn, filterA === z && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === z && styles.pillBtnTextActive]}>{z}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.subHeading}>{filtered.length} Counties</Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "wettest", label: "Wettest" },
              { key: "driest", label: "Driest" },
              { key: "alpha", label: "Name A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "wettest" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {filtered.map((c: any) => (
          <View key={c.code} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  {String(c.code).padStart(3, "0")}. {c.name} County
                </Text>
                <Text style={styles.cardSubtitle}>{c.climateZone}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.sky}20`, borderColor: theme.sky }]}>
                <Text style={[styles.badgeText, { color: theme.sky }]}>{c.annualRainfall} mm/yr</Text>
              </View>
            </View>

            {/* 12-Month Rainfall Breakdown Grid */}
            {c.monthly && (
              <View style={{ flexDirection: "row", gap: 2, marginTop: 4 }}>
                {MONTH_KEYS.map((mk, idx) => {
                  const mm = c.monthly[mk] || 0;
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
                            : theme.bgSecondary,
                      }}
                    >
                      <Text style={{ fontSize: 8, fontWeight: "700", color: theme.textMuted }}>
                        {MONTHS[idx]}
                      </Text>
                      <Text style={{ fontSize: 8, fontWeight: "800", color: theme.textPrimary }}>
                        {mm}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}

            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Long Rains:</Text>
                <Text style={styles.detailValue}>{c.longRains}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Short Rains:</Text>
                <Text style={styles.detailValue}>{c.shortRains}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Dry Season:</Text>
                <Text style={styles.detailValue}>{c.drySeason}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 5: KENYAN FOOD NUTRITION GUIDE ───
  if (slug === "kenyan-food-nutrition") {
    const foods: any[] = (foodsData as any).foods || [];
    const categories = useMemo(() => {
      const set = new Set<string>(foods.map((f) => f.category));
      return ["All", ...Array.from(set)];
    }, [foods]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = foods.filter((f) => {
        const matchCat = filterA === "All" || f.category === filterA;
        const matchQ =
          !q ||
          f.name.toLowerCase().includes(q) ||
          (f.note && f.note.toLowerCase().includes(q));
        return matchCat && matchQ;
      });

      const activeSort = sortBy === "default" ? "calories" : sortBy;
      return [...list].sort((a, b) => {
        let cmp = 0;
        if (activeSort === "name") cmp = a.name.localeCompare(b.name);
        else cmp = (b[activeSort] || 0) - (a[activeSort] || 0);
        return sortAsc ? -cmp : cmp;
      });
    }, [foods, filterA, search, sortBy, sortAsc]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search Kenyan food (e.g. Ugali, Githeri, Sukuma, Omena)..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        {/* Category Filter */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setFilterA(cat)}
              style={[styles.pillBtn, filterA === cat && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === cat && styles.pillBtnTextActive]}>
                {cat.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Sort Controls */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {([
              { key: "calories", label: "Calories" },
              { key: "protein", label: "Protein" },
              { key: "carbs", label: "Carbs" },
              { key: "fat", label: "Fat" },
              { key: "fibre", label: "Fibre" },
              { key: "name", label: "Name" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "calories" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Pressable
            onPress={() => setSortAsc(!sortAsc)}
            style={[styles.pillBtn, { borderColor: theme.gold }]}
          >
            <Text style={[styles.pillBtnText, { color: theme.gold }]}>
              {sortAsc ? "↑ Low–High" : "↓ High–Low"}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.subHeading}>
          Showing {filtered.length} Kenyan Foods (per 100g serving)
        </Text>

        {filtered.map((f: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{f.name}</Text>
                <Text style={styles.cardSubtitle}>{f.note} · Serving: {f.serving}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>{f.calories} kcal</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8, borderTopWidth: 1, borderTopColor: theme.border }}>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 10, color: theme.textMuted }}>PROTEIN</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: theme.kenyaGreenLight }}>{f.protein}g</Text>
              </View>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 10, color: theme.textMuted }}>CARBS</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: theme.sky }}>{f.carbs}g</Text>
              </View>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 10, color: theme.textMuted }}>FAT</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>{f.fat}g</Text>
              </View>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 10, color: theme.textMuted }}>FIBRE</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", color: theme.textPrimary }}>{f.fibre}g</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 6: COUNTY BUDGET TRACKER ───
  if (slug === "county-budget-tracker") {
    const budgets: any[] = (budgetsData as any).budgets || [];
    const fy = (budgetsData as any).fiscalYear || "2025/26";

    const totals = useMemo(() => {
      const alloc = budgets.reduce((s, b) => s + (b.allocation || 0), 0);
      const osr = budgets.reduce((s, b) => s + (b.ownSourceRevenue || 0), 0);
      const exp = budgets.reduce((s, b) => s + (b.expenditure || 0), 0);
      const avgAbs = budgets.length > 0
        ? (budgets.reduce((s, b) => s + (b.absorptionRate || 0), 0) / budgets.length).toFixed(1)
        : "0";
      return { alloc, osr, exp, avgAbs };
    }, [budgets]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = !q
        ? budgets
        : budgets.filter((b) => b.county.toLowerCase().includes(q));

      const activeSort = sortBy === "default" ? "allocation" : sortBy;
      return [...list].sort((a, b) => {
        let cmp = 0;
        if (activeSort === "county") cmp = a.county.localeCompare(b.county);
        else cmp = (b[activeSort] || 0) - (a[activeSort] || 0);
        return sortAsc ? -cmp : cmp;
      });
    }, [budgets, search, sortBy, sortAsc]);

    return (
      <View style={styles.toolWrap}>
        {/* 4 National Summary Cards */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, paddingVertical: 10 }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>EQUITABLE SHARE</Text>
            <Text style={{ fontSize: 16, fontWeight: "900", color: theme.gold }}>
              KES {(totals.alloc / 1000).toFixed(1)}B
            </Text>
          </View>
          <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, paddingVertical: 10 }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>OWN-SOURCE REV</Text>
            <Text style={{ fontSize: 16, fontWeight: "900", color: theme.sky }}>
              KES {(totals.osr / 1000).toFixed(1)}B
            </Text>
          </View>
          <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, paddingVertical: 10 }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>EXPENDITURE</Text>
            <Text style={{ fontSize: 16, fontWeight: "900", color: theme.kenyaGreenLight }}>
              KES {(totals.exp / 1000).toFixed(1)}B
            </Text>
          </View>
          <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, paddingVertical: 10 }]}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>AVG ABSORPTION</Text>
            <Text style={{ fontSize: 16, fontWeight: "900", color: theme.textPrimary }}>
              {totals.avgAbs}%
            </Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search county budget..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        {/* Sort Controls */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {([
              { key: "allocation", label: "Allocation" },
              { key: "ownSourceRevenue", label: "Own Revenue" },
              { key: "expenditure", label: "Expenditure" },
              { key: "absorptionRate", label: "Absorption %" },
              { key: "county", label: "County A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "allocation" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Pressable
            onPress={() => setSortAsc(!sortAsc)}
            style={[styles.pillBtn, { borderColor: theme.gold }]}
          >
            <Text style={[styles.pillBtnText, { color: theme.gold }]}>
              {sortAsc ? "↑ Asc" : "↓ Desc"}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.subHeading}>
          FY {fy} County Budgets ({filtered.length} Counties — KES Millions)
        </Text>

        {filtered.map((b: any) => (
          <View key={b.code} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  {String(b.code).padStart(3, "0")}. {b.county} County
                </Text>
                <Text style={styles.cardSubtitle}>
                  Total Revenue: KES {Number(b.totalRevenue).toLocaleString()}M
                </Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>{b.absorptionRate}% Absorbed</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Equitable Share Allocation:</Text>
                <Text style={styles.detailValue}>KES {Number(b.allocation).toLocaleString()}M</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Own-Source Revenue (OSR):</Text>
                <Text style={styles.detailValue}>KES {Number(b.ownSourceRevenue).toLocaleString()}M</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Actual Expenditure:</Text>
                <Text style={[styles.detailValue, { color: theme.kenyaGreenLight }]}>
                  KES {Number(b.expenditure).toLocaleString()}M
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 7: FOREST RESERVES DIRECTORY ───
  if (slug === "forest-reserves-kenya") {
    const forests: any[] = (forestsData as any).forests || [];
    const ecosystems = useMemo(() => {
      const set = new Set<string>(forests.map((f) => f.ecosystem));
      return ["All", ...Array.from(set)];
    }, [forests]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = forests.filter((f) => {
        const matchEco = filterA === "All" || f.ecosystem === filterA;
        const matchHike = !hikingOnly || Boolean(f.hiking);
        const matchQ =
          !q ||
          f.name.toLowerCase().includes(q) ||
          f.county.toLowerCase().includes(q) ||
          (f.biodiversity && f.biodiversity.toLowerCase().includes(q));
        return matchEco && matchHike && matchQ;
      });

      const activeSort = sortBy === "default" ? "largest" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "largest") return b.sizeHa - a.sizeHa;
        if (activeSort === "smallest") return a.sizeHa - b.sizeHa;
        return a.name.localeCompare(b.name);
      });
    }, [forests, filterA, hikingOnly, search, sortBy]);

    const totalHa = useMemo(() => filtered.reduce((s, f) => s + (f.sizeHa || 0), 0), [filtered]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search forest reserve, county, or wildlife..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {ecosystems.map((e) => (
            <Pressable
              key={e}
              onPress={() => setFilterA(e)}
              style={[styles.pillBtn, filterA === e && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === e && styles.pillBtnTextActive]}>{e}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "largest", label: "Largest ha" },
              { key: "smallest", label: "Smallest ha" },
              { key: "alpha", label: "Name A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "largest" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
          <Pressable
            onPress={() => setHikingOnly(!hikingOnly)}
            style={[styles.pillBtn, hikingOnly && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, hikingOnly && styles.pillBtnTextActive]}>
              🥾 Hiking Open Only
            </Text>
          </Pressable>
        </View>

        <Text style={styles.subHeading}>
          {filtered.length} Gazetted Forests ({totalHa.toLocaleString()} Hectares Total)
        </Text>

        {filtered.map((f: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{f.name}</Text>
                <Text style={styles.cardSubtitle}>
                  {f.county} County · {Number(f.sizeHa).toLocaleString()} ha
                </Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.kenyaGreenLight}20`, borderColor: theme.kenyaGreenLight }]}>
                <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>{f.ecosystem}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Hiking & Trails:</Text>
                <Text style={[styles.detailValue, { color: f.hiking ? theme.kenyaGreenLight : theme.textMuted }]}>
                  {f.hiking ? "✓ Open for Hiking & Ecotourism" : "Conservation Only"}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Key Biodiversity:</Text>
                <Text style={styles.detailValue}>{f.biodiversity}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 8: SHA / SHIF HOSPITAL FINDER ───
  if (slug === "nhif-hospital-finder") {
    const hospitals: any[] = (hospitalsData as any).hospitals || [];
    const counties = useMemo(() => {
      const set = new Set<string>(hospitals.map((h) => h.county));
      return ["All", ...Array.from(set).sort()];
    }, [hospitals]);
    const types = useMemo(() => {
      const set = new Set<string>(hospitals.map((h) => h.type));
      return ["All", ...Array.from(set).sort()];
    }, [hospitals]);
    const levels = ["All", "Level 6", "Level 5", "Level 4"];

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = hospitals.filter((h) => {
        const matchCounty = filterA === "All" || h.county === filterA;
        const matchType = filterB === "All" || h.type === filterB;
        const matchLevel = filterC === "All" || `Level ${h.level}` === filterC;
        const matchQ =
          !q ||
          h.name.toLowerCase().includes(q) ||
          h.county.toLowerCase().includes(q) ||
          (h.services && h.services.some((s: string) => s.toLowerCase().includes(q)));
        return matchCounty && matchType && matchLevel && matchQ;
      });

      const activeSort = sortBy === "default" ? "level" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "level") return b.level - a.level;
        if (activeSort === "county") return a.county.localeCompare(b.county);
        return a.name.localeCompare(b.name);
      });
    }, [hospitals, filterA, filterB, filterC, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search SHA / SHIF hospital, county, or service (e.g. Dialysis, ICU)..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        {/* County Filter */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {counties.map((c) => (
            <Pressable
              key={c}
              onPress={() => setFilterA(c)}
              style={[styles.pillBtn, filterA === c && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === c && styles.pillBtnTextActive]}>
                {c === "All" ? "All Counties" : c}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Facility Type & Level Filters */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 6 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {types.map((t) => (
              <Pressable
                key={t}
                onPress={() => setFilterB(t)}
                style={[styles.pillBtn, filterB === t && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, filterB === t && styles.pillBtnTextActive]}>{t}</Text>
              </Pressable>
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {levels.map((lv) => (
              <Pressable
                key={lv}
                onPress={() => setFilterC(lv)}
                style={[styles.pillBtn, filterC === lv && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, filterC === lv && styles.pillBtnTextActive]}>{lv}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Text style={styles.subHeading}>
          SHA / SHIF Contracted Facilities ({filtered.length})
        </Text>

        {filtered.map((h: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{h.name}</Text>
                <Text style={styles.cardSubtitle}>{h.county} County · {h.type}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>Level {h.level}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Services:</Text>
                <Text style={styles.detailValue}>{(h.services || []).join(", ")}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Emergency Phone:</Text>
                <Text style={[styles.detailValue, { color: theme.gold }]}>{h.phone || "—"}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* Hospital Levels in Kenya Reference Card */}
        <Text style={[styles.subHeading, { marginTop: 6 }]}>KEPH Hospital Levels in Kenya (Levels 1–6)</Text>
        <View style={styles.card}>
          {HOSPITAL_LEVELS_INFO.map((lv, idx) => (
            <View
              key={lv.level}
              style={{
                paddingVertical: 6,
                borderBottomWidth: idx < HOSPITAL_LEVELS_INFO.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold }}>
                {lv.level}: {lv.name}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>{lv.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  // ─── TOOL 9: REAL ESTATE AGENT CHECKER (EARB) ───
  if (slug === "real-estate-agent-checker") {
    const sampleAgents: any[] = (agentsData as any).sampleAgents || [];
    const steps: any[] = (agentsData as any).verificationSteps || [];
    const redFlags: string[] = (agentsData as any).redFlags || [];
    const contact = (agentsData as any).earbContact || {};

    const filteredAgents = useMemo(() => {
      const q = search.trim().toLowerCase();
      if (!q) return sampleAgents;
      return sampleAgents.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.county.toLowerCase().includes(q) ||
          a.specialization.toLowerCase().includes(q)
      );
    }, [sampleAgents, search]);

    return (
      <View style={styles.toolWrap}>
        {/* Fraud Warning Banner */}
        <View style={[styles.card, { borderColor: theme.kenyaRedLight, backgroundColor: "rgba(190, 33, 38, 0.1)" }]}>
          <Text style={{ fontSize: 12, fontWeight: "800", color: theme.kenyaRedLight }}>
            ⚠️ PROPERTY FRAUD ALERT (ESTATE AGENTS ACT CAP 533)
          </Text>
          <Text style={{ fontSize: 11, color: theme.textPrimary, lineHeight: 16 }}>
            Under Kenyan law, it is a criminal offense to practice as an estate agent without a current Annual Practicing Certificate from the Estate Agents Registration Board (EARB). Never pay viewing fees or deposit money into a personal M-Pesa account.
          </Text>
        </View>

        {/* How to Verify an Agent (4 Steps) */}
        <Text style={styles.subHeading}>How to Verify an Estate Agent in Kenya (4 Steps)</Text>
        <View style={styles.card}>
          {steps.map((st: any) => (
            <View
              key={st.step}
              style={{
                paddingVertical: 6,
                borderBottomWidth: st.step < steps.length ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                Step {st.step}: {st.title}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>
                {st.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Search Sample Verified Firms */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search sample EARB registered firms..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.subHeading}>Sample EARB Registered Real Estate Firms ({filteredAgents.length})</Text>
        {filteredAgents.map((a: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{a.name}</Text>
                <Text style={styles.cardSubtitle}>{a.type} · {a.county} County</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: "rgba(47,164,99,0.18)", borderColor: theme.kenyaGreenLight }]}>
                <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>✓ EARB Registered</Text>
              </View>
            </View>
            <Text style={{ fontSize: 12, color: theme.textSecondary }}>
              Specialization: <Text style={{ color: theme.textPrimary, fontWeight: "700" }}>{a.specialization}</Text>
            </Text>
          </View>
        ))}

        {/* Red Flags */}
        <Text style={styles.subHeading}>Common Real Estate Scam Red Flags</Text>
        <View style={styles.card}>
          {redFlags.map((flag, idx) => (
            <Text key={idx} style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 4 }}>
              🚩 {flag}
            </Text>
          ))}
        </View>

        {/* EARB Contact */}
        {contact.name && (
          <View style={styles.card}>
            <Text style={styles.subHeading}>EARB Official Contact</Text>
            <Text style={styles.cardTitle}>{contact.name}</Text>
            <Text style={styles.cardSubtitle}>{contact.address}</Text>
            <Text style={{ fontSize: 12, color: theme.gold, fontWeight: "600" }}>
              Phone: {contact.phone} · Email: {contact.email} · Portal: {contact.website}
            </Text>
          </View>
        )}
      </View>
    );
  }

  // ─── TOOL 10: FERTILIZER SUBSIDY GUIDE ───
  if (slug === "fertilizer-subsidy-guide") {
    const ferts: any[] = (fertilizerData as any).fertilizers || [];
    const howToRegister: any[] = (fertilizerData as any).howToRegister || [];
    const eligibility: string[] = (fertilizerData as any).eligibility || [];
    const collectionPoints: string[] = (fertilizerData as any).collectionPoints || [];

    return (
      <View style={styles.toolWrap}>
        <Text style={styles.subHeading}>Subsidized vs Commercial Market Fertilizer Prices (50kg Bag)</Text>
        {ferts.map((f: any, idx: number) => {
          const saving = (f.marketPrice || 0) - (f.subsidizedPrice || 0);
          return (
            <View key={idx} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{f.name} ({f.formula})</Text>
                  <Text style={styles.cardSubtitle}>{f.use}</Text>
                </View>
                <View style={[styles.badge, { backgroundColor: "rgba(47,164,99,0.2)", borderColor: theme.kenyaGreenLight }]}>
                  <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>
                    KES {Number(f.subsidizedPrice).toLocaleString()}
                  </Text>
                </View>
              </View>
              <View style={styles.detailsList}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Market Price (50kg):</Text>
                  <Text style={styles.detailValue}>
                    KES {Number(f.marketPrice).toLocaleString()} (Save KES {saving.toLocaleString()})
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Best Crops:</Text>
                  <Text style={styles.detailValue}>{(f.bestFor || []).join(", ")}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Application Rate:</Text>
                  <Text style={styles.detailValue}>{f.application}</Text>
                </View>
              </View>
            </View>
          );
        })}

        {/* How to Register */}
        <Text style={styles.subHeading}>How to Register for e-Voucher Fertilizer (5 Steps)</Text>
        <View style={styles.card}>
          {howToRegister.map((st: any) => (
            <View
              key={st.step}
              style={{
                paddingVertical: 6,
                borderBottomWidth: st.step < howToRegister.length ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                Step {st.step}: {st.title}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>{st.description}</Text>
            </View>
          ))}
        </View>

        {/* Eligibility & Collection Points */}
        <Text style={styles.subHeading}>Eligibility & NCPB Collection Depots</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold }}>Eligibility Requirements:</Text>
          {eligibility.map((e, i) => (
            <Text key={i} style={{ fontSize: 11, color: theme.textSecondary }}>✓ {e}</Text>
          ))}
          <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginTop: 8 }}>
            Major NCPB Depots ({collectionPoints.length}):
          </Text>
          <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
            {collectionPoints.join(" · ")}
          </Text>
        </View>
      </View>
    );
  }

  // ─── TOOL 11: LIVESTOCK MARKET PRICES ───
  if (slug === "livestock-market-prices") {
    const livestock: any[] = (livestockData as any).livestock || [];
    const marketsDir: any[] = (livestockData as any).markets || [];

    const flatRows = useMemo(() => {
      const rows: any[] = [];
      for (const l of livestock) {
        for (const p of l.prices || []) {
          rows.push({
            type: l.type,
            icon: l.icon || "🐄",
            unit: l.unit || "per head",
            market: p.market,
            minPrice: p.minPrice,
            maxPrice: p.maxPrice,
            avgPrice: Math.round((p.minPrice + p.maxPrice) / 2),
          });
        }
      }
      return rows;
    }, [livestock]);

    const types = useMemo(() => ["All", ...livestock.map((l) => l.type)], [livestock]);
    const marketNames = useMemo(() => {
      const set = new Set<string>(flatRows.map((r) => r.market));
      return ["All", ...Array.from(set).sort()];
    }, [flatRows]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = flatRows.filter((r) => {
        const matchType = filterA === "All" || r.type === filterA;
        const matchMkt = filterB === "All" || r.market === filterB;
        const matchQ =
          !q ||
          r.type.toLowerCase().includes(q) ||
          r.market.toLowerCase().includes(q);
        return matchType && matchMkt && matchQ;
      });

      const activeSort = sortBy === "default" ? "max" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "max") return b.maxPrice - a.maxPrice;
        if (activeSort === "min") return a.minPrice - b.minPrice;
        return a.market.localeCompare(b.market);
      });
    }, [flatRows, filterA, filterB, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search livestock breed or market..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {types.map((t) => (
            <Pressable
              key={t}
              onPress={() => setFilterA(t)}
              style={[styles.pillBtn, filterA === t && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === t && styles.pillBtnTextActive]}>{t}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {marketNames.map((m) => (
            <Pressable
              key={m}
              onPress={() => setFilterB(m)}
              style={[styles.pillBtn, filterB === m && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterB === m && styles.pillBtnTextActive]}>
                {m === "All" ? "All Markets" : m}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.subHeading}>{filtered.length} Market Quotes</Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "max", label: "Highest Price" },
              { key: "min", label: "Lowest Price" },
              { key: "market", label: "Market A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "max" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {filtered.map((r, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{r.icon} {r.type}</Text>
                <Text style={styles.cardSubtitle}>Market: {r.market} · {r.unit}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>
                  KES {r.minPrice.toLocaleString()} – {r.maxPrice.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {/* Major Livestock Markets Directory */}
        <Text style={[styles.subHeading, { marginTop: 6 }]}>Major Livestock Markets & Auction Days</Text>
        <View style={styles.card}>
          {marketsDir.map((m: any, idx: number) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 6,
                borderBottomWidth: idx < marketsDir.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary }}>
                {m.name} ({m.county})
              </Text>
              <Text style={{ fontSize: 11, color: theme.gold, fontWeight: "700" }}>{m.day}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  // ─── TOOL 12: NATIONAL PARKS DIRECTORY ───
  if (slug === "national-parks-directory") {
    const parks: any[] = (parksData as any).parks || [];
    const regions = useMemo(() => {
      const set = new Set<string>(parks.map((p) => p.region));
      return ["All", ...Array.from(set).sort()];
    }, [parks]);
    const types = useMemo(() => {
      const set = new Set<string>(parks.map((p) => p.type));
      return ["All", ...Array.from(set).sort()];
    }, [parks]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = parks.filter((p) => {
        const matchReg = filterA === "All" || p.region === filterA;
        const matchType = filterB === "All" || p.type === filterB;
        const matchQ =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.county.toLowerCase().includes(q) ||
          (p.wildlife && p.wildlife.some((w: string) => w.toLowerCase().includes(q)));
        return matchReg && matchType && matchQ;
      });

      const activeSort = sortBy === "default" ? "name" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "size") return b.sizeKm2 - a.sizeKm2;
        if (activeSort === "fee") return b.feeCitizenAdult - a.feeCitizenAdult;
        return a.name.localeCompare(b.name);
      });
    }, [parks, filterA, filterB, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search park, county, or wildlife (e.g. Rhino, Flamingo)..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {regions.map((r) => (
            <Pressable
              key={r}
              onPress={() => setFilterA(r)}
              style={[styles.pillBtn, filterA === r && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === r && styles.pillBtnTextActive]}>
                {r === "All" ? "All Regions" : r}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 6 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
            {types.map((t) => (
              <Pressable
                key={t}
                onPress={() => setFilterB(t)}
                style={[styles.pillBtn, filterB === t && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, filterB === t && styles.pillBtnTextActive]}>{t}</Text>
              </Pressable>
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "name", label: "A–Z" },
              { key: "size", label: "Size km²" },
              { key: "fee", label: "Citizen Fee" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "name" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.subHeading}>KWS Parks & Game Reserves ({filtered.length})</Text>

        {filtered.map((p: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{p.name}</Text>
                <Text style={styles.cardSubtitle}>
                  {p.county} County · {p.region} ({Number(p.sizeKm2).toLocaleString()} km²)
                </Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.kenyaGreenLight}20`, borderColor: theme.kenyaGreenLight }]}>
                <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>{p.type}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>EA Citizen (Adult / Child):</Text>
                <Text style={[styles.detailValue, { color: theme.gold }]}>
                  KES {p.feeCitizenAdult} / KES {p.feeCitizenChild}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>EA Resident (Adult / Child):</Text>
                <Text style={styles.detailValue}>
                  KES {p.feeResidentAdult} / KES {p.feeResidentChild}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Non-Resident (Adult / Child):</Text>
                <Text style={styles.detailValue}>
                  {p.nonResidentCurrency || "USD"} {p.feeNonResidentAdult} / {p.feeNonResidentChild}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Key Wildlife:</Text>
                <Text style={styles.detailValue}>{(p.wildlife || []).join(", ")}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Highlights & Best Season:</Text>
                <Text style={styles.detailValue}>{p.highlights} ({p.bestSeason})</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 13: LANGUAGES OF KENYA ───
  if (slug === "kenya-languages") {
    const languages: any[] = (languagesData as any).languages || [];
    const official: any[] = (languagesData as any).officialLanguages || [];
    const families = ["All", "Bantu", "Nilotic", "Cushitic"];

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = languages.filter((l) => {
        const matchFam = filterA === "All" || l.family === filterA;
        const matchQ =
          !q ||
          l.name.toLowerCase().includes(q) ||
          (l.counties && l.counties.some((c: string) => c.toLowerCase().includes(q))) ||
          (l.notes && l.notes.toLowerCase().includes(q));
        return matchFam && matchQ;
      });

      const activeSort = sortBy === "default" ? "speakers" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "speakers") return b.speakers - a.speakers;
        return a.name.localeCompare(b.name);
      });
    }, [languages, filterA, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        {/* Official Languages Cards */}
        <Text style={styles.subHeading}>Official & National Languages of Kenya</Text>
        <View style={styles.card}>
          {official.map((o: any, idx: number) => (
            <View
              key={o.name}
              style={{
                paddingVertical: 6,
                borderBottomWidth: idx < official.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                {o.name} — {o.status}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>{o.notes}</Text>
            </View>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search language or county..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 6 }}>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {families.map((f) => (
              <Pressable
                key={f}
                onPress={() => setFilterA(f)}
                style={[styles.pillBtn, filterA === f && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, filterA === f && styles.pillBtnTextActive]}>{f}</Text>
              </Pressable>
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "speakers", label: "Speakers" },
              { key: "name", label: "Name A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "speakers" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.subHeading}>Kenyan Languages ({filtered.length})</Text>

        {filtered.map((l: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{l.name}</Text>
                <Text style={styles.cardSubtitle}>{l.notes}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>{l.family}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Estimated Speakers:</Text>
                <Text style={styles.detailValue}>{Number(l.speakers).toLocaleString()}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Primary Counties:</Text>
                <Text style={styles.detailValue}>{(l.counties || []).join(", ")}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 14: ECONOMIC CALENDAR ───
  if (slug === "economic-calendar") {
    const events: any[] = (econData as any).events || [];
    const categories = useMemo(() => {
      const set = new Set<string>(events.map((e) => e.category));
      return ["All", ...Array.from(set)];
    }, [events]);
    const frequencies = useMemo(() => {
      const set = new Set<string>(events.map((e) => e.frequency));
      return ["All", ...Array.from(set)];
    }, [events]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      return events.filter((e) => {
        const matchCat = filterA === "All" || e.category === filterA;
        const matchFreq = filterB === "All" || e.frequency === filterB;
        const matchQ =
          !q ||
          e.name.toLowerCase().includes(q) ||
          e.agency.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q);
        return matchCat && matchFreq && matchQ;
      });
    }, [events, filterA, filterB, search]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search CBK, KNBS, EPRA, or Treasury event..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {categories.map((c) => (
            <Pressable
              key={c}
              onPress={() => setFilterA(c)}
              style={[styles.pillBtn, filterA === c && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === c && styles.pillBtnTextActive]}>{c}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {frequencies.map((f) => (
            <Pressable
              key={f}
              onPress={() => setFilterB(f)}
              style={[styles.pillBtn, filterB === f && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterB === f && styles.pillBtnTextActive]}>
                {f === "All" ? "All Frequencies" : f}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.subHeading}>Kenya Economic Data Releases ({filtered.length})</Text>
        {filtered.map((e: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{e.name}</Text>
                <Text style={styles.cardSubtitle}>{e.agency} · {e.category}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.sky}20`, borderColor: theme.sky }]}>
                <Text style={[styles.badgeText, { color: theme.sky }]}>{e.frequency}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Release Schedule:</Text>
                <Text style={[styles.detailValue, { color: theme.gold }]}>{e.typicalDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>What It Tracks:</Text>
                <Text style={styles.detailValue}>{e.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 15: KENYA SOIL TYPES ───
  if (slug === "kenya-soil-types") {
    const soils: any[] = (soilsData as any).soilTypes || [];
    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      return soils.filter((s) => {
        const matchType = filterA === "All" || s.name === filterA;
        const matchQ =
          !q ||
          s.name.toLowerCase().includes(q) ||
          (s.whereFound && s.whereFound.some((w: string) => w.toLowerCase().includes(q))) ||
          (s.bestCrops && s.bestCrops.some((c: string) => c.toLowerCase().includes(q)));
        return matchType && matchQ;
      });
    }, [soils, filterA, search]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search soil type, county, or crop..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {["All", ...soils.map((s) => s.name)].map((nm) => (
            <Pressable
              key={nm}
              onPress={() => setFilterA(nm)}
              style={[styles.pillBtn, filterA === nm && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === nm && styles.pillBtnTextActive]}>
                {nm === "All" ? "All Soil Types" : nm.split("(")[0].trim()}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.subHeading}>Kenya Agricultural Soil Profiles ({filtered.length})</Text>
        {filtered.map((s: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{s.name}</Text>
                <Text style={styles.cardSubtitle}>{s.characteristics}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>pH {s.ph}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Fertility & Drainage:</Text>
                <Text style={styles.detailValue}>{s.fertility} fertility · {s.drainage} drainage</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Where Found:</Text>
                <Text style={styles.detailValue}>{(s.whereFound || []).join(", ")}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Best Crops:</Text>
                <Text style={[styles.detailValue, { color: theme.kenyaGreenLight }]}>
                  {(s.bestCrops || []).join(", ")}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Common Deficiencies:</Text>
                <Text style={styles.detailValue}>{s.commonDeficiencies}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>How to Improve:</Text>
                <Text style={styles.detailValue}>{s.improvement}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 16: KENYA CUSTOMS RESTRICTED ITEMS ───
  if (slug === "kenya-customs-restricted-items") {
    const categories: any[] = (customsData as any).categories || [];
    const flatItems = useMemo(() => {
      const list: any[] = [];
      for (const cat of categories) {
        for (const it of cat.items || []) {
          list.push({
            catId: cat.id,
            catTitle: cat.title,
            catDesc: cat.description,
            item: it.item,
            law: it.law,
            permit: it.permit,
          });
        }
      }
      return list;
    }, [categories]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      return flatItems.filter((it) => {
        const matchCat = filterA === "All" || it.catId === filterA;
        const matchQ =
          !q ||
          it.item.toLowerCase().includes(q) ||
          (it.law && it.law.toLowerCase().includes(q)) ||
          (it.permit && it.permit.toLowerCase().includes(q));
        return matchCat && matchQ;
      });
    }, [flatItems, filterA, search]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search item, permit agency (KCAA, KEPHIS, PPB)..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Pressable
            onPress={() => setFilterA("All")}
            style={[styles.pillBtn, filterA === "All" && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, filterA === "All" && styles.pillBtnTextActive]}>All Categories</Text>
          </Pressable>
          {categories.map((cat) => (
            <Pressable
              key={cat.id}
              onPress={() => setFilterA(cat.id)}
              style={[styles.pillBtn, filterA === cat.id && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === cat.id && styles.pillBtnTextActive]}>
                {cat.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.subHeading}>KRA Customs Rules & Allowances ({filtered.length})</Text>
        {filtered.map((it, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{it.item}</Text>
                <Text style={styles.cardSubtitle}>{it.catTitle}</Text>
              </View>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: it.catId === "prohibited" ? "rgba(190,33,38,0.18)" : `${theme.gold}20`,
                    borderColor: it.catId === "prohibited" ? theme.kenyaRedLight : theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: it.catId === "prohibited" ? theme.kenyaRedLight : theme.gold },
                  ]}
                >
                  {it.catId === "prohibited" ? "Banned" : it.catId === "restricted" ? "Permit Req." : "Allowance"}
                </Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Governing Law:</Text>
                <Text style={styles.detailValue}>{it.law}</Text>
              </View>
              {it.permit && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Issuing Authority:</Text>
                  <Text style={[styles.detailValue, { color: theme.gold }]}>{it.permit}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 17: AGROVET FINDER ───
  if (slug === "agrovet-finder") {
    const agrovets: any[] = (agrovetsData as any).agrovets || [];
    const counties = useMemo(() => {
      const set = new Set<string>(agrovets.map((a) => a.county));
      return ["All", ...Array.from(set).sort()];
    }, [agrovets]);

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = agrovets.filter((a) => {
        const matchCounty = filterA === "All" || a.county === filterA;
        const matchQ =
          !q ||
          a.name.toLowerCase().includes(q) ||
          a.town.toLowerCase().includes(q) ||
          a.county.toLowerCase().includes(q) ||
          (a.specialties && a.specialties.some((s: string) => s.toLowerCase().includes(q)));
        return matchCounty && matchQ;
      });

      const activeSort = sortBy === "default" ? "name" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "county") return a.county.localeCompare(b.county);
        return a.name.localeCompare(b.name);
      });
    }, [agrovets, filterA, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search agrovet, town, county, or input specialty..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          {counties.map((c) => (
            <Pressable
              key={c}
              onPress={() => setFilterA(c)}
              style={[styles.pillBtn, filterA === c && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, filterA === c && styles.pillBtnTextActive]}>
                {c === "All" ? "All Counties" : c}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.subHeading}>KEPHIS / PCPB Licensed Agrovets ({filtered.length})</Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "name", label: "Name A–Z" },
              { key: "county", label: "County A–Z" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "name" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {filtered.map((a: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{a.name}</Text>
                <Text style={styles.cardSubtitle}>{a.town}, {a.county} County</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.kenyaGreenLight}20`, borderColor: theme.kenyaGreenLight }]}>
                <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>✓ Licensed</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Specialties:</Text>
                <Text style={styles.detailValue}>{(a.specialties || []).join(", ")}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Phone:</Text>
                <Text style={[styles.detailValue, { color: theme.gold }]}>{a.phone}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  // ─── TOOL 18: PROFESSIONAL BODIES DIRECTORY ───
  if (slug === "professional-bodies-kenya") {
    const bodies: any[] = (bodiesData as any).bodies || [];

    const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();
      const list = !q
        ? bodies
        : bodies.filter(
            (b) =>
              b.name.toLowerCase().includes(q) ||
              b.abbreviation.toLowerCase().includes(q) ||
              b.profession.toLowerCase().includes(q)
          );

      const activeSort = sortBy === "default" ? "abbr" : sortBy;
      return [...list].sort((a, b) => {
        if (activeSort === "name") return a.name.localeCompare(b.name);
        if (activeSort === "profession") return a.profession.localeCompare(b.profession);
        return a.abbreviation.localeCompare(b.abbreviation);
      });
    }, [bodies, search, sortBy]);

    return (
      <View style={styles.toolWrap}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search board (LSK, EBK, ICPAK, KMPDC, BORAQS)..."
            placeholderTextColor={theme.textMuted}
            style={styles.searchInput}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.subHeading}>Statutory Professional Bodies ({filtered.length})</Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {([
              { key: "abbr", label: "Acronym" },
              { key: "name", label: "Board Name" },
              { key: "profession", label: "Profession" },
            ] as const).map((opt) => {
              const active = (sortBy === "default" ? "abbr" : sortBy) === opt.key;
              return (
                <Pressable
                  key={opt.key}
                  onPress={() => setSortBy(opt.key)}
                  style={[styles.pillBtn, active && styles.pillBtnActive]}
                >
                  <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>{opt.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {filtered.map((b: any, idx: number) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{b.name} ({b.abbreviation})</Text>
                <Text style={styles.cardSubtitle}>{b.profession} · {b.actOfParliament}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                <Text style={[styles.badgeText, { color: theme.gold }]}>{b.abbreviation}</Text>
              </View>
            </View>
            <View style={styles.detailsList}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Registration Fee:</Text>
                <Text style={styles.detailValue}>{b.registrationFee}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Annual Renewal:</Text>
                <Text style={styles.detailValue}>{b.annualRenewal}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Requirements:</Text>
                <Text style={styles.detailValue}>{(b.requirements || []).join(" · ")}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Verification Portal:</Text>
                <Text style={[styles.detailValue, { color: theme.sky }]}>{b.verificationUrl || b.website}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.toolWrap}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>KenyaHub Offline Reference</Text>
        <Text style={styles.cardSubtitle}>All datasets are bundled for 100% offline access.</Text>
      </View>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    toolWrap: { gap: 12 },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 14,
      height: 44,
    },
    searchInput: { flex: 1, marginLeft: 8, color: colors.textPrimary, fontSize: 13 },
    subHeading: { fontSize: 13, fontWeight: "800", color: colors.gold, letterSpacing: 0.5 },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      gap: 8,
    },
    cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
    cardTitle: { fontSize: 15, fontWeight: "700", color: colors.textPrimary },
    cardSubtitle: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
    badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, borderWidth: 1 },
    badgeText: { fontSize: 10, fontWeight: "800" },
    detailsList: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 8, gap: 6 },
    detailRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
    detailLabel: { fontSize: 12, color: colors.textMuted, fontWeight: "600" },
    detailValue: { fontSize: 12, color: colors.textPrimary, fontWeight: "600", flex: 1, textAlign: "right" },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 999,
    },
    pillBtnActive: {
      backgroundColor: colors.gold,
      borderColor: colors.gold,
    },
    pillBtnText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.textSecondary,
    },
    pillBtnTextActive: {
      color: colors.kenyaBlack,
    },
    empty: { alignItems: "center", paddingVertical: 36 },
    emptyTitle: { fontSize: 14, color: colors.textMuted, marginTop: 8 },
  });
}
