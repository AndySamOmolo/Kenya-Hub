import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
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
import clustersData from "../shared/data/kuccps-clusters.json";
import fertilizerData from "../shared/data/fertilizer-subsidy.json";
import languagesData from "../shared/data/kenya-languages.json";

interface DirectoryItem {
  id?: string | number;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  details: { label: string; value: string }[];
}

export function ReferenceDirectoryTool({ slug }: { slug: string }) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [search, setSearch] = useState("");

  const dataset = useMemo<{ title: string; subtitle: string; items: DirectoryItem[] }>(() => {
    switch (slug) {
      case "nhif-hospital-finder": {
        const list = (hospitalsData as any).hospitals || [];
        return {
          title: "SHA / SHIF Accredited Health Facilities",
          subtitle: "Social Health Authority recognized hospitals across Kenya",
          items: list.map((h: any, i: number) => ({
            id: i,
            title: h.name,
            subtitle: `${h.county} County · ${h.subcounty || ""}`,
            badge: `Level ${h.level}`,
            badgeColor: h.level >= 5 ? theme.gold : theme.sky,
            details: [
              { label: "Facility Type", value: String(h.type || "Hospital") },
              { label: "County", value: String(h.county || "Kenya") },
              { label: "SHA / SHIF Status", value: h.nhifAccredited ? "Accredited" : "Standard" },
            ],
          })),
        };
      }

      case "national-parks-directory": {
        const list = (parksData as any).parks || [];
        return {
          title: "National Parks & Game Reserves",
          subtitle: "Kenya Wildlife Service (KWS) protected conservancies",
          items: list.map((p: any, i: number) => ({
            id: i,
            title: p.name,
            subtitle: `${p.county} County · ${p.region} (${p.sizeKm2} km²)`,
            badge: p.type,
            badgeColor: theme.kenyaGreenLight,
            details: [
              { label: "Citizen Entry (Adult / Child)", value: `KES ${p.feeCitizenAdult} / KES ${p.feeCitizenChild}` },
              { label: "Non-Resident Adult", value: `${p.nonResidentCurrency || "USD"} ${p.feeNonResidentAdult}` },
              { label: "Best Season", value: String(p.bestSeason || "Year-round") },
              { label: "Key Wildlife", value: Array.isArray(p.wildlife) ? p.wildlife.slice(0, 5).join(", ") : "" },
              { label: "Highlights", value: String(p.highlights || "") },
            ],
          })),
        };
      }

      case "kenya-customs-restricted-items": {
        const categories = (customsData as any).categories || [];
        const items: DirectoryItem[] = [];
        for (const cat of categories) {
          for (const item of cat.items || []) {
            items.push({
              title: item.item,
              subtitle: cat.title,
              badge: cat.id === "prohibited" ? "Banned" : "Permit Req.",
              badgeColor: cat.id === "prohibited" ? theme.kenyaRedLight : theme.gold,
              details: [
                { label: "Governing Law", value: String(item.law || "KRA Customs Act") },
                ...(item.permit ? [{ label: "Issuing Authority", value: String(item.permit) }] : []),
                { label: "Import Status", value: String(cat.description || "") },
              ],
            });
          }
        }
        return {
          title: "Kenya Customs Restricted & Prohibited Goods",
          subtitle: "KRA Customs and Border Control guidelines",
          items,
        };
      }

      case "crop-planting-calendar": {
        const crops = (cropsData as any).crops || [];
        return {
          title: "Kenyan Crop Planting Calendar",
          subtitle: "Planting, maturity, altitude & rainfall requirements by crop",
          items: crops.map((c: any, i: number) => {
            const hl = c.seasons?.highlands?.longRains;
            const sr = c.seasons?.highlands?.shortRains;
            return {
              id: i,
              title: `${c.icon ? c.icon + " " : ""}${c.name}`,
              subtitle: c.description || "Kenyan Crop Guide",
              badge: c.category || "Crop",
              badgeColor: theme.kenyaGreenLight,
              details: [
                { label: "Long Rains (Highlands)", value: hl ? `Plant ${hl.plant} → Harvest ${hl.harvest}` : "Feb–Apr → Jul–Sep" },
                { label: "Short Rains", value: sr ? `Plant ${sr.plant} → Harvest ${sr.harvest}` : "Oct–Nov → Jan–Feb" },
                { label: "Maturity Period", value: `${c.maturityDays || "90–120"} days` },
                { label: "Optimal Altitude & Rain", value: `${c.optimalAltitude || "1000–2400m"} · ${c.optimalRainfall || "600–1200mm"}` },
                { label: "Spacing & Seed Rate", value: `${c.spacingCm || "Standard"} · ${c.seedRateKgPerAcre || "10"} kg/acre` },
              ],
            };
          }),
        };
      }

      case "agrovet-finder": {
        const list = (agrovetsData as any).agrovets || [];
        return {
          title: "Licensed Agrovets in Kenya",
          subtitle: "Certified seeds, veterinary medicines & farm inputs",
          items: list.map((a: any, i: number) => ({
            id: i,
            title: a.name,
            subtitle: `${a.town}, ${a.county} County`,
            badge: a.county,
            badgeColor: theme.gold,
            details: [
              { label: "Location", value: `${a.town}, ${a.county}` },
              { label: "Contact Phone", value: String(a.phone || "Available in store") },
              { label: "Key Services", value: Array.isArray(a.services) ? a.services.join(", ") : "" },
            ],
          })),
        };
      }

      case "kenyan-food-nutrition": {
        const list = (foodsData as any).foods || [];
        return {
          title: "Traditional Kenyan Foods & Nutrition",
          subtitle: "Calories, protein, carbohydrates, fat & fibre per 100g serving",
          items: list.map((f: any, i: number) => ({
            id: i,
            title: f.name,
            subtitle: f.note || "Kenyan Cuisine",
            badge: `${f.calories} kcal`,
            badgeColor: theme.gold,
            details: [
              { label: "Serving Size", value: String(f.serving || "100g") },
              { label: "Protein / Carbs", value: `${f.protein}g protein · ${f.carbs}g carbs` },
              { label: "Fat / Dietary Fibre", value: `${f.fat}g fat · ${f.fibre}g fibre` },
              { label: "Category", value: String(f.category || "Staple").toUpperCase() },
            ],
          })),
        };
      }

      case "kenya-soil-types": {
        const list = (soilsData as any).soilTypes || [];
        return {
          title: "Kenya Soil Types & Suitability",
          subtitle: "Agricultural soil classification across 47 counties",
          items: list.map((s: any, i: number) => ({
            id: i,
            title: s.name,
            subtitle: s.description || "Soil profile",
            badge: `pH ${s.pH || "5.5–6.5"}`,
            badgeColor: theme.earthLight,
            details: [
              { label: "Texture & Fertility", value: `${s.texture || "Loam"} · ${s.fertility || "Moderate"} fertility` },
              { label: "Best Crops", value: Array.isArray(s.bestCrops) ? s.bestCrops.join(", ") : "" },
              { label: "Key Counties", value: Array.isArray(s.counties) ? s.counties.slice(0, 5).join(", ") : "" },
            ],
          })),
        };
      }

      case "kenya-rainfall-patterns": {
        const list = (rainfallData as any).counties || [];
        return {
          title: "Kenya Rainfall Patterns by County (47 Counties)",
          subtitle: "Annual rainfall (mm), long rains, short rains & climate zones",
          items: list.map((r: any, i: number) => ({
            id: r.code || i,
            title: `${r.name} County`,
            subtitle: `Climate Zone: ${r.climateZone}`,
            badge: `${r.annualRainfall} mm/yr`,
            badgeColor: theme.sky,
            details: [
              { label: "Long Rains Season", value: String(r.longRains || "March – May") },
              { label: "Short Rains Season", value: String(r.shortRains || "October – December") },
              { label: "Dry Season", value: String(r.drySeason || "January – February") },
            ],
          })),
        };
      }

      case "county-budget-tracker": {
        const list = (budgetsData as any).budgets || [];
        return {
          title: `County Budget Allocations (${(budgetsData as any).fiscalYear || "2023/24"})`,
          subtitle: "Controller of Budget (COB) revenue & absorption rates (KES Millions)",
          items: list.map((b: any, i: number) => ({
            id: b.code || i,
            title: `${b.code}. ${b.county} County`,
            subtitle: `Total Revenue: KES ${Number(b.totalRevenue).toLocaleString()}M`,
            badge: `${b.absorptionRate}% Absorbed`,
            badgeColor: theme.gold,
            details: [
              { label: "Equitable Share Allocation", value: `KES ${Number(b.allocation).toLocaleString()}M` },
              { label: "Own-Source Revenue (OSR)", value: `KES ${Number(b.ownSourceRevenue).toLocaleString()}M` },
              { label: "Actual Expenditure", value: `KES ${Number(b.expenditure).toLocaleString()}M` },
            ],
          })),
        };
      }

      case "livestock-market-prices": {
        const list = (livestockData as any).livestock || [];
        const items: DirectoryItem[] = [];
        for (const l of list) {
          for (const p of l.prices || []) {
            items.push({
              title: `${l.icon ? l.icon + " " : ""}${l.type} — ${p.market}`,
              subtitle: `Unit: ${l.unit || "per head"}`,
              badge: `Avg KES ${Number(p.avgPrice || p.maxPrice).toLocaleString()}`,
              badgeColor: theme.gold,
              details: [
                { label: "Price Range", value: `KES ${Number(p.minPrice).toLocaleString()} – KES ${Number(p.maxPrice).toLocaleString()}` },
                { label: "Market", value: String(p.market) },
              ],
            });
          }
        }
        return {
          title: "Livestock Market Prices Across Kenya",
          subtitle: "Indicative cattle, goat, sheep, camel & poultry prices by market",
          items,
        };
      }

      case "fertilizer-subsidy-guide": {
        const ferts = (fertilizerData as any).fertilizers || [];
        return {
          title: "National Fertilizer Subsidy Programme (NCPB)",
          subtitle: "Subsidized 50kg bag prices vs. commercial market rates",
          items: ferts.map((f: any, i: number) => ({
            id: i,
            title: `${f.name} (${f.formula})`,
            subtitle: f.use,
            badge: `KES ${Number(f.subsidizedPrice).toLocaleString()}`,
            badgeColor: theme.kenyaGreenLight,
            details: [
              { label: "Market Price (50kg)", value: `KES ${Number(f.marketPrice).toLocaleString()} (Save KES ${Number(f.marketPrice - f.subsidizedPrice).toLocaleString()})` },
              { label: "Best Crops", value: Array.isArray(f.bestFor) ? f.bestFor.join(", ") : "" },
              { label: "Application Guide", value: String(f.application || "") },
            ],
          })),
        };
      }

      case "real-estate-agent-checker": {
        const list = (agentsData as any).sampleAgents || [];
        return {
          title: "Estate Agents Registration Board (EARB) Directory",
          subtitle: "Verify licensed real estate firms & property valuers in Kenya",
          items: list.map((a: any, i: number) => ({
            id: i,
            title: a.name,
            subtitle: `${a.type} · ${a.county} County`,
            badge: a.registered ? "EARB Licensed" : "Unverified",
            badgeColor: a.registered ? theme.kenyaGreenLight : theme.kenyaRedLight,
            details: [
              { label: "Specialization", value: String(a.specialization || "Real Estate") },
              { label: "County", value: String(a.county || "Nairobi") },
              { label: "Verification Portal", value: "earb.go.ke" },
            ],
          })),
        };
      }

      case "trademark-cost-kenya": {
        const feesObj = (trademarkData as any).fees || {};
        const items: DirectoryItem[] = [];
        for (const [key, cat] of Object.entries(feesObj) as [string, any][]) {
          for (const step of cat.steps || []) {
            items.push({
              title: step.item,
              subtitle: cat.title || key,
              badge: `KES ${Number(step.amount).toLocaleString()}`,
              badgeColor: theme.gold,
              details: [
                { label: "Category", value: String(cat.title || key) },
                { label: "Processing Time", value: String(cat.processingTime || "12–18 months") },
                ...(step.note ? [{ label: "Statutory Note", value: String(step.note) }] : []),
              ],
            });
          }
        }
        return {
          title: "KIPI Trademark, Patent & Copyright Fees",
          subtitle: "Kenya Industrial Property Institute (KIPI) official fee schedule",
          items,
        };
      }

      case "forest-reserves-kenya": {
        const list = (forestsData as any).forests || [];
        return {
          title: "Gazetted Forest Reserves in Kenya (KFS)",
          subtitle: "Indigenous water towers, montane forests & coastal reserves",
          items: list.map((f: any, i: number) => ({
            id: i,
            title: f.name,
            subtitle: `${f.county} · ${Number(f.sizeHa).toLocaleString()} hectares`,
            badge: f.ecosystem || "Forest",
            badgeColor: theme.kenyaGreenLight,
            details: [
              { label: "Hiking & Ecotourism", value: f.hiking ? "Open for Hiking & Trails" : "Conservation Only" },
              { label: "Biodiversity Highlights", value: String(f.biodiversity || "") },
            ],
          })),
        };
      }

      case "economic-calendar": {
        const list = (econData as any).events || [];
        return {
          title: "Kenya Economic Calendar (KNBS, CBK & EPRA)",
          subtitle: "Scheduled macroeconomic data releases and policy announcements",
          items: list.map((e: any, i: number) => ({
            id: i,
            title: e.name,
            subtitle: `${e.agency} · ${e.category}`,
            badge: e.frequency || "Monthly",
            badgeColor: theme.sky,
            details: [
              { label: "Release Schedule", value: String(e.typicalDate || "Monthly") },
              { label: "What It Tracks", value: String(e.description || "") },
            ],
          })),
        };
      }

      case "child-growth-schedule": {
        const schedule = (vaccinesData as any).vaccinationSchedule || [];
        const items: DirectoryItem[] = [];
        for (const stage of schedule) {
          for (const v of stage.vaccines || []) {
            items.push({
              title: `${v.name} (${v.fullName})`,
              subtitle: `Schedule: ${stage.age}`,
              badge: stage.age,
              badgeColor: theme.kenyaGreenLight,
              details: [
                { label: "Protects Against", value: String(v.protectsAgainst || "") },
                { label: "Administration Route", value: String(v.route || "") },
                { label: "Public Hospital Cost", value: "FREE under MOH KEPI" },
              ],
            });
          }
        }
        return {
          title: "MOH Kenya Child Vaccination Schedule (KEPI)",
          subtitle: "Official Ministry of Health immunization timetable from birth",
          items,
        };
      }

      case "professional-bodies-kenya": {
        const list = (bodiesData as any).bodies || [];
        return {
          title: "Statutory Professional Bodies in Kenya",
          subtitle: "Licensing boards, registration fees & practitioner verification",
          items: list.map((b: any, i: number) => ({
            id: i,
            title: `${b.name} (${b.abbreviation})`,
            subtitle: b.profession,
            badge: b.abbreviation,
            badgeColor: theme.gold,
            details: [
              { label: "Registration Fee", value: String(b.registrationFee || "—") },
              { label: "Annual Renewal", value: String(b.renewalFee || "—") },
              { label: "Official Website", value: String(b.website || "") },
            ],
          })),
        };
      }

      case "kuccps-cluster-calculator": {
        const list = (clustersData as any).clusters || [];
        return {
          title: "KUCCPS Degree Cluster Subjects & Cutoffs",
          subtitle: "Required KCSE subjects and weights for university placement",
          items: list.map((c: any, i: number) => ({
            id: c.id || i,
            title: c.name,
            subtitle: Array.isArray(c.courses) ? c.courses.join(" · ") : "",
            badge: `Cutoff ${c.typicalCutoff}`,
            badgeColor: theme.sky,
            details: [
              {
                label: "Cluster Subjects",
                value: Array.isArray(c.subjects)
                  ? c.subjects.map((s: any) => `${s.name} (×${s.weight})`).join(", ")
                  : "",
              },
              { label: "Typical Cutoff Range", value: `${c.typicalCutoff} points` },
            ],
          })),
        };
      }

      case "kenya-languages": {
        const list = (languagesData as any).languages || [];
        return {
          title: "Languages of Kenya Directory",
          subtitle: "Bantu, Nilotic & Cushitic languages spoken across Kenya",
          items: list.map((l: any, i: number) => ({
            id: i,
            title: l.name,
            subtitle: `${l.notes || ""}`,
            badge: String(l.family || "").toUpperCase(),
            badgeColor: theme.gold,
            details: [
              { label: "Estimated Speakers", value: Number(l.speakers || 0).toLocaleString() },
              { label: "Primary Counties", value: Array.isArray(l.counties) ? l.counties.join(", ") : "" },
            ],
          })),
        };
      }

      default: {
        return {
          title: "Official Kenya Guide & Reference",
          subtitle: "Authentic data collected from official Kenyan sources",
          items: [
            {
              title: "Offline Ready",
              subtitle: "All datasets are stored directly within KenyaHub",
              badge: "Offline",
              badgeColor: theme.kenyaGreenLight,
              details: [
                { label: "Access", value: "100% Free · No internet required" },
                { label: "Source Verification", value: "Government Gazette & Ministry publications" },
              ],
            },
          ],
        };
      }
    }
  }, [slug, theme]);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return dataset.items;
    return dataset.items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.details.some(
          (d) =>
            d.label.toLowerCase().includes(q) ||
            d.value.toLowerCase().includes(q)
        )
    );
  }, [dataset.items, search]);

  return (
    <View style={styles.toolWrap}>
      {dataset.items.length > 2 && (
        <View style={[styles.searchBar, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder={`Search ${dataset.items.length} records...`}
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")} hitSlop={8}>
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
      )}

      <Text style={[styles.subHeading, { color: theme.gold }]}>
        {dataset.title} ({filteredItems.length})
      </Text>

      {filteredItems.map((item, idx) => (
        <View key={item.id ?? idx} style={[styles.card, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.cardTop}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>{item.title}</Text>
              {item.subtitle && (
                <Text style={[styles.cardSubtitle, { color: theme.textSecondary }]}>{item.subtitle}</Text>
              )}
            </View>
            {item.badge && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: `${item.badgeColor || theme.gold}20`,
                    borderColor: `${item.badgeColor || theme.gold}40`,
                  },
                ]}
              >
                <Text style={[styles.badgeText, { color: item.badgeColor || theme.gold }]}>
                  {item.badge}
                </Text>
              </View>
            )}
          </View>

          {item.details.length > 0 && (
            <View style={[styles.detailsList, { borderTopColor: theme.border }]}>
              {item.details.map((d, dIdx) => (
                <View key={dIdx} style={styles.detailRow}>
                  <Text style={[styles.detailLabel, { color: theme.textMuted }]}>{d.label}:</Text>
                  <Text style={[styles.detailValue, { color: theme.textPrimary }]}>{d.value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}

      {filteredItems.length === 0 && (
        <View style={styles.empty}>
          <Ionicons name="search-outline" size={40} color={theme.textMuted} />
          <Text style={[styles.emptyTitle, { color: theme.textMuted }]}>No matching entries found</Text>
        </View>
      )}
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
      borderRadius: 999,
      paddingHorizontal: 14,
      height: 44,
    },
    searchInput: { flex: 1, marginLeft: 8, color: colors.textPrimary, fontSize: 13 },
    subHeading: { fontSize: 13, fontWeight: "800", color: colors.gold, letterSpacing: 0.5 },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      gap: 10,
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
    empty: { alignItems: "center", paddingVertical: 36 },
    emptyTitle: { fontSize: 14, color: colors.textMuted, marginTop: 8 },
  });
}
