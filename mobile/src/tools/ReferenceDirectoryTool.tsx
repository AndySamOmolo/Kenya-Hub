import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, colors } from "../theme";

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

interface DirectoryItem {
  id?: string | number;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  details: { label: string; value: string }[];
}

export function ReferenceDirectoryTool({ slug }: { slug: string }) {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");

  const dataset = useMemo<{ title: string; subtitle: string; items: DirectoryItem[] }>(() => {
    switch (slug) {
      case "nhif-hospital-finder": {
        const list = (hospitalsData as any).hospitals || [];
        return {
          title: "Accredited Health Facilities",
          subtitle: "NHIF & SHA recognized hospitals across Kenya",
          items: list.map((h: any, i: number) => ({
            id: i,
            title: h.name,
            subtitle: `${h.county} County · ${h.subcounty || ""}`,
            badge: `Level ${h.level}`,
            badgeColor: h.level >= 5 ? colors.gold : colors.sky,
            details: [
              { label: "Facility Type", value: h.type },
              { label: "County", value: h.county },
              { label: "SHA/NHIF Status", value: h.nhifAccredited ? "Accredited" : "Standard" },
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
            subtitle: `${p.county} County · ${p.region}`,
            badge: p.type,
            badgeColor: colors.kenyaGreenLight,
            details: [
              { label: "Citizen Adult Fee", value: `KES ${p.feeCitizenAdult}` },
              { label: "Best Season", value: p.bestSeason },
              { label: "Key Wildlife", value: (p.wildlife || []).slice(0, 4).join(", ") },
              { label: "Highlights", value: p.highlights || "" },
            ],
          })),
        };
      }

      case "kenya-customs-restricted-items": {
        const categories = (customsData as any).categories || [];
        const items: DirectoryItem[] = [];
        for (const cat of categories) {
          for (const item of cat.items) {
            items.push({
              title: item.item,
              subtitle: cat.title,
              badge: cat.id === "prohibited" ? "Banned" : "Permit Req.",
              badgeColor: cat.id === "prohibited" ? colors.kenyaRedLight : colors.gold,
              details: [
                { label: "Governing Law", value: item.law },
                { label: "Import Status", value: cat.description },
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
          subtitle: "Planting and harvesting seasons by agro-ecological zones",
          items: crops.map((c: any, i: number) => ({
            id: i,
            title: c.name,
            subtitle: c.scientificName || "Crop Guide",
            badge: c.category || "Crops",
            badgeColor: colors.kenyaGreenLight,
            details: [
              { label: "Long Rains (Planting)", value: c.longRainsPlanting || c.plantingSeason || "March – April" },
              { label: "Short Rains (Planting)", value: c.shortRainsPlanting || "October – November" },
              { label: "Harvest Period", value: c.harvestSeason || c.maturityMonths || "3–4 months" },
              { label: "Best Counties", value: Array.isArray(c.suitableCounties) ? c.suitableCounties.slice(0, 4).join(", ") : (c.counties || "") },
            ],
          })),
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
            badgeColor: colors.gold,
            details: [
              { label: "Location", value: a.location || a.town },
              { label: "Contact Phone", value: a.phone || "Available in store" },
              { label: "Key Products", value: (a.services || a.products || []).join(", ") },
            ],
          })),
        };
      }

      case "kenyan-food-nutrition": {
        const list = (foodsData as any).foods || [];
        return {
          title: "Traditional Kenyan Foods & Nutrition",
          subtitle: "Nutritional values, calories & micronutrients",
          items: list.map((f: any, i: number) => ({
            id: i,
            title: f.name,
            subtitle: f.localName ? `Local: ${f.localName}` : "Kenyan Cuisine",
            badge: f.category || "Food",
            badgeColor: colors.gold,
            details: [
              { label: "Calories (per 100g)", value: `${f.calories || f.energy || "—"} kcal` },
              { label: "Protein", value: `${f.protein || "—"} g` },
              { label: "Key Nutrients", value: f.healthBenefits || f.nutrients || "Rich in dietary fiber" },
            ],
          })),
        };
      }

      case "kenya-soil-types": {
        const list = (soilsData as any).soilTypes || (soilsData as any).soils || [];
        return {
          title: "Kenya Soil Types & Suitability",
          subtitle: "Agricultural soil classification across 47 counties",
          items: list.map((s: any, i: number) => ({
            id: i,
            title: s.name,
            subtitle: s.characteristics || "Soil profile",
            badge: "Soil",
            badgeColor: colors.earthLight,
            details: [
              { label: "Best Crops", value: Array.isArray(s.suitableCrops) ? s.suitableCrops.join(", ") : (s.crops || "") },
              { label: "Key Regions", value: Array.isArray(s.regions) ? s.regions.join(", ") : (s.counties || "") },
              { label: "Fertility", value: s.fertility || "Moderate to High" },
            ],
          })),
        };
      }

      case "kenya-rainfall-patterns": {
        const list = (rainfallData as any).regions || (rainfallData as any).patterns || [];
        return {
          title: "Kenya Rainfall Patterns & Seasons",
          subtitle: "Meteorological annual rainfall distribution",
          items: list.map((r: any, i: number) => ({
            id: i,
            title: r.region || r.county || "Region",
            subtitle: `Annual: ${r.annualRainfall || r.averageRainfall || "Varies"} mm`,
            badge: r.climateType || "Climate",
            badgeColor: colors.sky,
            details: [
              { label: "Long Rains Period", value: r.longRains || "March – May" },
              { label: "Short Rains Period", value: r.shortRains || "October – December" },
              { label: "Counties Covered", value: Array.isArray(r.counties) ? r.counties.slice(0, 4).join(", ") : "" },
            ],
          })),
        };
      }

      case "county-budget-tracker": {
        const list = (budgetsData as any).counties || (budgetsData as any).budgets || [];
        return {
          title: "County Budget Allocations",
          subtitle: "Controller of Budget devolved government expenditures",
          items: list.map((b: any, i: number) => ({
            id: i,
            title: `${b.county || b.name} County Budget`,
            subtitle: `Fiscal Year: ${b.financialYear || "2024/2025"}`,
            badge: "Devolved",
            badgeColor: colors.gold,
            details: [
              { label: "Total Allocation", value: `KES ${b.totalBudget || b.allocation || "—"}` },
              { label: "Development Budget", value: `KES ${b.developmentBudget || "—"}` },
              { label: "Recurrent Budget", value: `KES ${b.recurrentBudget || "—"}` },
            ],
          })),
        };
      }

      case "livestock-market-prices": {
        const list = (livestockData as any).prices || (livestockData as any).livestock || [];
        return {
          title: "Livestock Market Prices",
          subtitle: "Current indicative animal prices in Kenyan markets",
          items: list.map((l: any, i: number) => ({
            id: i,
            title: l.animal || l.type || "Livestock",
            subtitle: l.market || "Kenya National Average",
            badge: `KES ${l.price || l.averagePrice || "—"}`,
            badgeColor: colors.gold,
            details: [
              { label: "Price Range", value: `KES ${l.minPrice || "—"} to ${l.maxPrice || "—"}` },
              { label: "Primary Markets", value: l.markets || "Kajiado, Garissa, Isiolo, Dagoretti" },
            ],
          })),
        };
      }

      case "fertilizer-subsidy-guide": {
        return {
          title: "Government Subsidized Fertilizer (NCPB)",
          subtitle: "Registration, voucher codes & collection centers",
          items: [
            {
              title: "Subsidized Fertilizer Price: KES 2,500 / 50kg bag",
              subtitle: "National Cereals and Produce Board (NCPB)",
              badge: "KES 2,500",
              badgeColor: colors.kenyaGreenLight,
              details: [
                { label: "Standard Commercial Price", value: "KES 6,500 – 7,000" },
                { label: "Subsidy Savings per Bag", value: "KES 4,000 – 4,500" },
                { label: "Eligibility", value: "Registered in Kenya National Farmer Registry" },
                { label: "How to Register", value: "Dial *316# on your mobile phone" },
              ],
            },
            {
              title: "Available Fertilizer Types",
              subtitle: "Planting and Top-Dressing varieties",
              badge: "NPK & CAN",
              badgeColor: colors.gold,
              details: [
                { label: "Planting Fertilizers", value: "NPK 17:17:17, DAP, NPK 23:23:0" },
                { label: "Top-Dressing Fertilizers", value: "CAN, Urea" },
                { label: "Distribution Centers", value: "NCPB Depots and verified KNTC Agrovets" },
              ],
            },
          ],
        };
      }

      case "real-estate-agent-checker": {
        const list = (agentsData as any).agents || [];
        return {
          title: "Estate Agents Registration Board (EARB)",
          subtitle: "Registered and licensed real estate agents in Kenya",
          items: list.map((a: any, i: number) => ({
            id: i,
            title: a.name || a.firm,
            subtitle: `Registration No: ${a.regNo || "Licensed"}`,
            badge: "EARB Licensed",
            badgeColor: colors.kenyaGreenLight,
            details: [
              { label: "Location", value: `${a.town || a.county || "Kenya"}` },
              { label: "Practicing Status", value: "Active / Licensed" },
            ],
          })),
        };
      }

      case "trademark-cost-kenya": {
        const fees = (trademarkData as any).fees || [];
        return {
          title: "Kenya Industrial Property Institute (KIPI) Fees",
          subtitle: "Trademark registration, renewal and opposition costs",
          items: fees.map((f: any, i: number) => ({
            id: i,
            title: f.service || f.description || "KIPI Fee",
            subtitle: f.category || "Trademark",
            badge: `KES ${f.fee ? f.fee.toLocaleString() : "—"}`,
            badgeColor: colors.gold,
            details: [
              { label: "Official Form", value: f.form || "TM Form" },
              { label: "Applicable Schedule", value: f.schedule || "First Schedule" },
            ],
          })),
        };
      }

      case "forest-reserves-kenya": {
        const list = (forestsData as any).forests || (forestsData as any).reserves || [];
        return {
          title: "Kenya Forest Reserves (KFS)",
          subtitle: "Gazetted state forests and water catchments",
          items: list.map((f: any, i: number) => ({
            id: i,
            title: f.name,
            subtitle: `${f.county} County · ${f.sizeKm2 || f.areaHa || ""} ha`,
            badge: "Protected",
            badgeColor: colors.kenyaGreenLight,
            details: [
              { label: "Management", value: "Kenya Forest Service (KFS)" },
              { label: "Ecosystem Type", value: f.type || "Indigenous montane forest" },
            ],
          })),
        };
      }

      case "economic-calendar": {
        const list = (econData as any).releases || (econData as any).events || [];
        return {
          title: "Kenya Economic Data Releases",
          subtitle: "Scheduled releases from KNBS, CBK and Treasury",
          items: list.map((e: any, i: number) => ({
            id: i,
            title: e.event || e.indicator || "Economic Release",
            subtitle: e.source || "KNBS / CBK",
            badge: e.frequency || "Monthly",
            badgeColor: colors.sky,
            details: [
              { label: "Announcement Date", value: e.date || e.schedule || "Scheduled" },
              { label: "Significance", value: e.significance || "High Impact" },
            ],
          })),
        };
      }

      case "child-growth-schedule": {
        const list = (vaccinesData as any).schedule || (vaccinesData as any).vaccines || [];
        return {
          title: "Kenya Expanded Programme on Immunization (KEPI)",
          subtitle: "Child vaccination and health milestones schedule",
          items: list.map((v: any, i: number) => ({
            id: i,
            title: v.vaccine || v.name || "Vaccination",
            subtitle: `Recommended Age: ${v.age || v.timing || "Infancy"}`,
            badge: v.age || "KEPI",
            badgeColor: colors.kenyaGreenLight,
            details: [
              { label: "Prevents Against", value: v.prevents || v.diseases || "Childhood illnesses" },
              { label: "Administration Route", value: v.route || "Oral / Injection" },
              { label: "Cost", value: "FREE at all Public Health Facilities" },
            ],
          })),
        };
      }

      case "professional-bodies-kenya": {
        const list = (bodiesData as any).bodies || [];
        return {
          title: "Statutory Professional Bodies in Kenya",
          subtitle: "Regulators and licensing boards by sector",
          items: list.map((b: any, i: number) => ({
            id: i,
            title: b.name,
            subtitle: b.acronym ? `(${b.acronym})` : "",
            badge: b.sector || "Regulator",
            badgeColor: colors.gold,
            details: [
              { label: "Enacting Statute", value: b.act || "Act of Parliament" },
              { label: "Official Website", value: b.website || "Available online" },
            ],
          })),
        };
      }

      case "kuccps-cluster-calculator": {
        const list = (clustersData as any).clusters || [];
        return {
          title: "KUCCPS Degree Cluster Points Explorer",
          subtitle: "Cluster subjects and degree programmes in Kenyan Universities",
          items: list.map((c: any, i: number) => ({
            id: i,
            title: `Cluster ${c.clusterNumber || c.id}: ${c.name}`,
            subtitle: c.faculty || "University Degree Field",
            badge: "KUCCPS",
            badgeColor: colors.sky,
            details: [
              { label: "Core Required Subjects", value: Array.isArray(c.coreSubjects) ? c.coreSubjects.join(", ") : (c.subjects || "") },
              { label: "Cut-off Points (Indicative)", value: c.cutoff || "35.00 – 43.00" },
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
              badgeColor: colors.kenyaGreenLight,
              details: [
                { label: "Access", value: "100% Free · No internet required" },
                { label: "Source Verification", value: "Government Gazette & Ministry publications" },
              ],
            },
          ],
        };
      }
    }
  }, [slug]);

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
      {/* Search Input */}
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
                <Text
                  style={[
                    styles.badgeText,
                    { color: item.badgeColor || theme.gold },
                  ]}
                >
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

const styles = StyleSheet.create({
  toolWrap: {
    gap: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: colors.textPrimary,
    fontSize: 13,
  },
  subHeading: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.gold,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 10,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
  },
  detailsList: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
    gap: 6,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailLabel: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: "600",
  },
  detailValue: {
    fontSize: 12,
    color: colors.textPrimary,
    fontWeight: "600",
    maxWidth: "60%",
    textAlign: "right",
  },
  empty: {
    alignItems: "center",
    paddingVertical: 36,
  },
  emptyTitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 8,
  },
});
