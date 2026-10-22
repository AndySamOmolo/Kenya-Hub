import { ExpandablePillRow } from "../components/ExpandablePillRow";
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
import { useTheme } from "../theme";

// Data imports
import swahiliDict from "../shared/data/dictionaries/swahili.json";
import kikuyuDict from "../shared/data/dictionaries/kikuyu.json";
import luoDict from "../shared/data/dictionaries/luo.json";
import kalenjinDict from "../shared/data/dictionaries/kalenjin.json";
import luhyaDict from "../shared/data/dictionaries/luhya.json";
import kambaDict from "../shared/data/dictionaries/kamba.json";
import meruDict from "../shared/data/dictionaries/meru.json";
import maasaiDict from "../shared/data/dictionaries/maasai.json";
import kisiiDict from "../shared/data/dictionaries/kisii.json";
import somaliDict from "../shared/data/dictionaries/somali.json";
import turkanaDict from "../shared/data/dictionaries/turkana.json";
import mijikendaDict from "../shared/data/dictionaries/mijikenda.json";
import tesoDict from "../shared/data/dictionaries/teso.json";

import solarData from "../shared/data/solar-irradiance.json";
import countiesData from "../shared/data/counties.json";
import cbcData from "../shared/data/cbc-curriculum.json";
import kuccpsData from "../shared/data/kuccps-clusters.json";

// ─── 1. KENYAN TRANSLATOR TOOL (13 LANGUAGES) ───
const ALL_DICTS: any[] = [
  swahiliDict,
  kikuyuDict,
  luoDict,
  kalenjinDict,
  luhyaDict,
  kambaDict,
  meruDict,
  maasaiDict,
  kisiiDict,
  somaliDict,
  turkanaDict,
  mijikendaDict,
  tesoDict,
];

export function KenyanTranslatorTool() {
  const { theme } = useTheme();
  const [selectedLang, setSelectedLang] = useState("swahili");
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const currentDict = useMemo(() => {
    return ALL_DICTS.find((d) => d.languageId === selectedLang) || swahiliDict;
  }, [selectedLang]);

  const allEntries = useMemo(() => {
    const list: {
      category: string;
      categoryName: string;
      english: string;
      translation: string;
      pronunciation: string;
      context?: string;
    }[] = [];

    for (const cat of currentDict.categories || []) {
      for (const e of cat.entries || []) {
        list.push({
          category: cat.id,
          categoryName: cat.name,
          english: e.english,
          translation: e.translation,
          pronunciation: e.pronunciation,
          context: e.context,
        });
      }
    }
    return list;
  }, [currentDict]);

  const filteredEntries = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allEntries.filter((item) => {
      const matchCat = selectedCat === "all" || item.category === selectedCat;
      const matchSearch =
        !q ||
        item.english.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        (item.context && item.context.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [allEntries, search, selectedCat]);

  return (
    <View style={styles.toolWrap}>
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Select Language ({ALL_DICTS.length} available)
      </Text>
      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        {ALL_DICTS.map((d) => {
          const active = d.languageId === selectedLang;
          return (
            <Pressable
              key={d.languageId}
              onPress={() => {
                setSelectedLang(d.languageId);
                setSelectedCat("all");
              }}
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
                {d.languageName.split("(")[0].trim()}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <View style={styles.infoHeaderRow}>
          <Text style={[styles.infoTitle, { color: theme.textPrimary }]}>
            {currentDict.languageName}
          </Text>
          <View style={[styles.badgePill, { backgroundColor: `${theme.gold}20` }]}>
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              {currentDict.family?.toUpperCase() || "BANTU"}
            </Text>
          </View>
        </View>
        <Text style={[styles.infoDesc, { color: theme.textSecondary }]}>
          {currentDict.contributorNote}
        </Text>
      </View>

      <View
        style={[
          styles.searchBox,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          placeholder={`Search ${currentDict.languageName.split(" ")[0]} or English word...`}
          placeholderTextColor={theme.textMuted}
          value={search}
          onChangeText={setSearch}
          style={[styles.searchInput, { color: theme.textPrimary }]}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        <Pressable
          onPress={() => setSelectedCat("all")}
          style={[
            styles.catPill,
            {
              backgroundColor: selectedCat === "all" ? theme.gold : theme.bgElevated,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.catPillText,
              { color: selectedCat === "all" ? theme.kenyaBlack : theme.textSecondary },
            ]}
          >
            All Words ({allEntries.length})
          </Text>
        </Pressable>
        {(currentDict.categories || []).map((cat: any) => {
          const active = cat.id === selectedCat;
          return (
            <Pressable
              key={cat.id}
              onPress={() => setSelectedCat(cat.id)}
              style={[
                styles.catPill,
                {
                  backgroundColor: active ? theme.gold : theme.bgElevated,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.catPillText,
                  { color: active ? theme.kenyaBlack : theme.textSecondary },
                ]}
              >
                {cat.icon} {cat.name}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={[styles.countLabel, { color: theme.textMuted }]}>
        Showing {filteredEntries.length} phrases & words
      </Text>

      <View style={styles.entriesList}>
        {filteredEntries.map((e, idx) => (
          <View
            key={idx}
            style={[
              styles.entryCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={styles.entryHeaderRow}>
              <Text style={[styles.entryEnglish, { color: theme.textPrimary }]}>
                {e.english}
              </Text>
              <Text style={[styles.entryCategory, { color: theme.textMuted }]}>
                {e.categoryName}
              </Text>
            </View>
            <View style={styles.entryTranslationRow}>
              <Text style={[styles.entryTranslation, { color: theme.gold }]}>
                {e.translation}
              </Text>
            </View>
            {e.pronunciation ? (
              <View style={styles.pronounceRow}>
                <Ionicons name="volume-medium-outline" size={14} color={theme.sky} />
                <Text style={[styles.pronounceText, { color: theme.sky }]}>
                  {e.pronunciation}
                </Text>
              </View>
            ) : null}
            {e.context ? (
              <Text style={[styles.entryContext, { color: theme.textSecondary }]}>
                {e.context}
              </Text>
            ) : null}
          </View>
        ))}

        {filteredEntries.length === 0 && (
          <View style={styles.emptyWrap}>
            <Ionicons name="book-outline" size={36} color={theme.textMuted} />
            <Text style={[styles.emptyText, { color: theme.textMuted }]}>
              No matching vocabulary words found
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

// ─── 2. SOLAR ROI CALCULATOR TOOL ───
export function SolarRoiTool() {
  const { theme } = useTheme();
  const d = solarData.systemDefaults;
  const [monthlyBill, setMonthlyBill] = useState("5000");
  const [regionId, setRegionId] = useState("nairobi");
  const [costPerKw, setCostPerKw] = useState(String(d.avgCostPerKw || 130000));

  const results = useMemo(() => {
    const billNum = Math.max(500, parseFloat(monthlyBill) || 0);
    const customCostPerKw = Math.max(50000, parseFloat(costPerKw) || d.avgCostPerKw);
    const region = solarData.regions.find((r) => r.id === regionId) || solarData.regions[0];
    const irradiance = region.irradiance;
    const monthlyKwh = Math.round(billNum / d.kplcAvgRatePerKwh);
    const dailyKwh = monthlyKwh / 30;
    const systemSizeKw = dailyKwh / (irradiance * d.panelEfficiency * (1 - d.systemLosses));
    const recommendedSize = Math.ceil(systemSizeKw * 10) / 10;
    const systemCost = Math.round(recommendedSize * customCostPerKw);
    const monthlyGeneration = Math.round(
      recommendedSize * irradiance * d.panelEfficiency * (1 - d.systemLosses) * 30
    );
    const monthlySavings = Math.round(monthlyGeneration * d.kplcAvgRatePerKwh);
    const effectiveSavings = Math.min(monthlySavings, billNum);
    const paybackYears = systemCost / (effectiveSavings * 12);
    let cumulativeSavings = 0;
    for (let y = 1; y <= d.systemLifespan; y++) {
      const degradation = Math.pow(1 - d.annualDegradation, y - 1);
      cumulativeSavings += effectiveSavings * 12 * degradation;
    }
    const netProfit = Math.round(cumulativeSavings - systemCost);
    const roofArea = Math.round(recommendedSize * d.panelAreaPerKw * 10) / 10;

    return {
      region,
      irradiance,
      monthlyKwh,
      monthlyGeneration,
      recommendedSize,
      systemCost,
      effectiveSavings,
      paybackYears: Math.round(paybackYears * 10) / 10,
      cumulativeSavings: Math.round(cumulativeSavings),
      netProfit,
      roofArea,
    };
  }, [monthlyBill, regionId, costPerKw, d]);

  return (
    <View style={styles.toolWrap}>
      {/* Monthly Bill Input */}
      <View
        style={[
          styles.cardBox,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.fieldLabel, { color: theme.textSecondary }]}>
          Current Monthly Electricity Bill (KES)
        </Text>
        <View style={styles.kesInputRow}>
          <Text style={[styles.kesPrefix, { color: theme.gold }]}>KES</Text>
          <TextInput
            keyboardType="numeric"
            value={monthlyBill}
            onChangeText={setMonthlyBill}
            style={[styles.bigInput, { color: theme.textPrimary }]}
          />
        </View>
        <View style={styles.presetRow}>
          {[2000, 5000, 10000, 20000, 50000].map((amount) => (
            <Pressable
              key={amount}
              onPress={() => setMonthlyBill(String(amount))}
              style={[
                styles.presetBtn,
                {
                  backgroundColor:
                    monthlyBill === String(amount) ? theme.gold : theme.bgElevated,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.presetText,
                  {
                    color:
                      monthlyBill === String(amount)
                        ? theme.kenyaBlack
                        : theme.textPrimary,
                  },
                ]}
              >
                {amount >= 1000 ? `${amount / 1000}k` : amount}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Adjustable System Cost per kW */}
      <View
        style={[
          styles.cardBox,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.fieldLabel, { color: theme.textSecondary }]}>
          System Cost per kW (KES — Typical KES 110k–180k)
        </Text>
        <View style={styles.kesInputRow}>
          <Text style={[styles.kesPrefix, { color: theme.gold, fontSize: 16 }]}>KES</Text>
          <TextInput
            keyboardType="numeric"
            value={costPerKw}
            onChangeText={setCostPerKw}
            style={[styles.bigInput, { color: theme.textPrimary, fontSize: 20 }]}
          />
        </View>
        <View style={styles.presetRow}>
          {[110000, 130000, 150000, 180000].map((c) => (
            <Pressable
              key={c}
              onPress={() => setCostPerKw(String(c))}
              style={[
                styles.presetBtn,
                {
                  backgroundColor:
                    costPerKw === String(c) ? theme.gold : theme.bgElevated,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.presetText,
                  {
                    color:
                      costPerKw === String(c) ? theme.kenyaBlack : theme.textPrimary,
                  },
                ]}
              >
                {c / 1000}k/kW
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Location Selector */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Your Location (Solar Irradiance Zone)
      </Text>
      <View style={styles.regionGrid}>
        {solarData.regions.map((r) => {
          const active = r.id === regionId;
          return (
            <Pressable
              key={r.id}
              onPress={() => setRegionId(r.id)}
              style={[
                styles.regionBtn,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.regionName,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {r.name}
              </Text>
              <Text
                style={[
                  styles.regionIrradiance,
                  { color: active ? theme.kenyaBlack : theme.textMuted },
                ]}
              >
                {r.irradiance} kWh/m²/day
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Results Cards */}
      <View
        style={[
          styles.resultsCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.resultsHeader, { color: theme.gold }]}>
          SOLAR ESTIMATES & RETURN ON INVESTMENT
        </Text>

        <View style={styles.statsTwoCol}>
          <View style={styles.statCol}>
            <Text style={[styles.statColLabel, { color: theme.textMuted }]}>
              Recommended Size
            </Text>
            <Text style={[styles.statColVal, { color: theme.textPrimary }]}>
              {results.recommendedSize} kW
            </Text>
            <Text style={[styles.statColSub, { color: theme.textMuted }]}>
              ~{results.roofArea} m² roof space
            </Text>
          </View>
          <View style={styles.statCol}>
            <Text style={[styles.statColLabel, { color: theme.textMuted }]}>
              Estimated Cost
            </Text>
            <Text style={[styles.statColVal, { color: theme.gold }]}>
              KES {results.systemCost.toLocaleString()}
            </Text>
            <Text style={[styles.statColSub, { color: theme.textMuted }]}>
              Turnkey installation
            </Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        <View style={styles.statsTwoCol}>
          <View style={styles.statCol}>
            <Text style={[styles.statColLabel, { color: theme.textMuted }]}>
              Monthly Savings
            </Text>
            <Text style={[styles.statColVal, { color: theme.kenyaGreenLight }]}>
              KES {results.effectiveSavings.toLocaleString()}
            </Text>
            <Text style={[styles.statColSub, { color: theme.textMuted }]}>
              Off your KPLC bill
            </Text>
          </View>
          <View style={styles.statCol}>
            <Text style={[styles.statColLabel, { color: theme.textMuted }]}>
              Payback Period
            </Text>
            <Text style={[styles.statColVal, { color: theme.textPrimary }]}>
              {results.paybackYears} Years
            </Text>
            <Text style={[styles.statColSub, { color: theme.textMuted }]}>
              20+ yrs free power after
            </Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        {/* Detailed System Breakdown Table */}
        <View style={{ gap: 6 }}>
          {[
            { label: "Current Monthly Consumption", val: `~${results.monthlyKwh} kWh / month` },
            { label: "Estimated Solar Generation", val: `~${results.monthlyGeneration} kWh / month` },
            { label: "Solar Irradiance (${results.region.name})".replace("${results.region.name}", results.region.name), val: `${results.irradiance} kWh/m²/day` },
            { label: "Roof Area Needed", val: `~${results.roofArea} m² (${Math.ceil(results.recommendedSize * 2)} panels)` },
            { label: "25-Year Cumulative Savings", val: `KES ${results.cumulativeSavings.toLocaleString()}` },
          ].map((row) => (
            <View key={row.label} style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 3 }}>
              <Text style={{ fontSize: 12, color: theme.textSecondary }}>{row.label}</Text>
              <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary }}>{row.val}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.highlightBox, { backgroundColor: `${theme.kenyaGreenLight}15` }]}>
          <Text style={[styles.highlightLabel, { color: theme.kenyaGreenLight }]}>
            25-Year Net Profit: KES {results.netProfit.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
}

// ─── 3. WARD & CONSTITUENCY FINDER TOOL ───
export function WardConstituencyFinderTool() {
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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

// ─── 4. CBC CURRICULUM EXPLORER TOOL ───
export function CbcCurriculumTool() {
  const { theme } = useTheme();
  const [levelId, setLevelId] = useState(cbcData.levels[0].id);

  const level: any = useMemo(() => {
    return cbcData.levels.find((l) => l.id === levelId) || cbcData.levels[0];
  }, [levelId]);

  const gradeAgeMapping: any[] = (cbcData as any).gradeAgeMapping || [];

  return (
    <View style={styles.toolWrap}>
      {/* Level Selector */}
      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        {cbcData.levels.map((l) => {
          const active = l.id === levelId;
          return (
            <Pressable
              key={l.id}
              onPress={() => setLevelId(l.id)}
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
                {l.name}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Level Card */}
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.infoTitle, { color: theme.textPrimary }]}>
          {level.name}
        </Text>
        <Text style={[styles.levelSub, { color: theme.gold }]}>
          {level.grades.join(", ")} • Ages {level.ageRange} • {level.duration}
        </Text>
        <Text style={[styles.levelOld, { color: theme.textMuted }]}>
          Old 8-4-4 equivalent: {level.previousSystem}
        </Text>
        {level.assessment && (
          <Text style={[styles.infoDesc, { color: theme.textSecondary, marginTop: 4 }]}>
            <Text style={{ fontWeight: "800", color: theme.sky }}>Assessment: </Text>
            {level.assessment}
          </Text>
        )}
      </View>

      {/* Senior Secondary Pathways (when viewing Senior Secondary or available) */}
      {Array.isArray(level.pathways) && level.pathways.length > 0 && (
        <>
          <Text style={[styles.sectionLabel, { color: theme.gold }]}>
            Senior Secondary Career Pathways (Grades 10–12)
          </Text>
          <View style={styles.entriesList}>
            {level.pathways.map((pw: any, pIdx: number) => (
              <View
                key={pIdx}
                style={[
                  styles.entryCard,
                  { backgroundColor: theme.bgCard, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.areaName, { color: theme.gold }]}>{pw.name}</Text>
                <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
                  <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Core: </Text>
                  {Array.isArray(pw.core) ? pw.core.join(", ") : ""}
                </Text>
                <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
                  <Text style={{ fontWeight: "700", color: theme.kenyaGreenLight }}>Electives: </Text>
                  {Array.isArray(pw.electives) ? pw.electives.join(", ") : ""}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {/* Learning Areas */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Learning Areas ({level.learningAreas?.length || 0})
      </Text>

      <View style={styles.entriesList}>
        {(level.learningAreas || []).map((area: any, idx: number) => (
          <View
            key={idx}
            style={[
              styles.entryCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={styles.areaHeaderRow}>
              <View style={[styles.areaNumber, { backgroundColor: `${theme.gold}20` }]}>
                <Text style={[styles.areaNumberText, { color: theme.gold }]}>
                  {idx + 1}
                </Text>
              </View>
              <Text style={[styles.areaName, { color: theme.textPrimary }]}>
                {area.name}
              </Text>
            </View>
            <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
              {area.description}
            </Text>
          </View>
        ))}
      </View>

      {/* CBC vs 8-4-4 Grade-Age Comparison Table */}
      <Text style={[styles.sectionLabel, { color: theme.gold, marginTop: 8 }]}>
        CBC (2-6-3-3-3) vs Old 8-4-4 System Comparison
      </Text>
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        {gradeAgeMapping.map((row: any, idx: number) => (
          <View
            key={row.cbcGrade}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 7,
              borderBottomWidth: idx < gradeAgeMapping.length - 1 ? 1 : 0,
              borderBottomColor: theme.border,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "800", color: theme.textPrimary, flex: 1 }}>
              {row.cbcGrade} ({row.age} yrs)
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary, flex: 1 }}>
              {row.old844}
            </Text>
            <Text style={{ fontSize: 11, fontWeight: "700", color: theme.gold, flex: 1, textAlign: "right" }}>
              {row.level}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── 5. KUCCPS CLUSTER POINTS CALCULATOR TOOL ───
export function KuccpsClusterTool() {
  const { theme } = useTheme();
  const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
  const allSubjects: string[] = (kuccpsData as any).subjects || [
    "Mathematics",
    "English",
    "Kiswahili",
    "Biology",
    "Physics",
    "Chemistry",
    "History & Government",
    "Geography",
    "CRE",
    "Business Studies",
    "Agriculture",
    "Computer Studies",
  ];

  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [sortBy, setSortBy] = useState<"points" | "id" | "cutoff">("points");
  const [expandedCluster, setExpandedCluster] = useState<number | null>(1);

  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>({
    Mathematics: "A",
    English: "A-",
    Kiswahili: "B+",
    Biology: "A-",
    Physics: "B+",
    Chemistry: "A",
    "History & Government": "B+",
    "Business Studies": "A-",
  });

  const gradePoints: Record<string, number> = kuccpsData.gradePoints as any;

  const displayedSubjects = showAllSubjects ? allSubjects : allSubjects.slice(0, 8);

  const summary = useMemo(() => {
    const entries = Object.entries(selectedGrades).filter(([_, g]) => Boolean(g));
    const totalPts = entries.reduce((sum, [_, g]) => sum + (gradePoints[g] || 0), 0);
    const meanPts = entries.length > 0 ? (totalPts / entries.length).toFixed(2) : "0.00";
    return { count: entries.length, totalPts, meanPts };
  }, [selectedGrades, gradePoints]);

  const clusterResults = useMemo(() => {
    const list = kuccpsData.clusters.map((cluster: any) => {
      let totalWeight = 0;
      const usedSubjects = new Set<string>();
      const breakdown: {
        reqName: string;
        matchedSubject: string;
        grade: string;
        points: number;
        weight: number;
        weighted: number;
      }[] = [];

      for (const req of cluster.subjects) {
        let bestGrade = "";
        let bestPoints = 0;
        let matchedSubject = req.name;

        if (req.name.toLowerCase().includes("any other")) {
          // Pick the highest unused subject grade
          for (const [subj, g] of Object.entries(selectedGrades)) {
            if (!g || usedSubjects.has(subj)) continue;
            const pts = gradePoints[g] || 0;
            if (pts > bestPoints) {
              bestPoints = pts;
              bestGrade = g;
              matchedSubject = subj;
            }
          }
        } else {
          const options = req.name.split("/").map((s: string) => s.trim());
          for (const opt of options) {
            if (selectedGrades[opt] && !usedSubjects.has(opt)) {
              const pts = gradePoints[selectedGrades[opt]] || 0;
              if (pts > bestPoints) {
                bestPoints = pts;
                bestGrade = selectedGrades[opt];
                matchedSubject = opt;
              }
            }
          }
        }

        if (bestPoints > 0) {
          usedSubjects.add(matchedSubject);
          const weighted = bestPoints * req.weight;
          totalWeight += weighted;
          breakdown.push({
            reqName: req.name,
            matchedSubject,
            grade: bestGrade,
            points: bestPoints,
            weight: req.weight,
            weighted: Math.round(weighted * 10) / 10,
          });
        }
      }

      const minCutoffNum = parseFloat(String(cluster.typicalCutoff).split("–")[0]) || 30;

      return {
        id: cluster.id,
        name: cluster.name,
        typicalCutoff: cluster.typicalCutoff,
        minCutoffNum,
        courses: cluster.courses,
        totalWeight: Math.round(totalWeight * 10) / 10,
        breakdown,
      };
    });

    return [...list].sort((a, b) => {
      if (sortBy === "points") return b.totalWeight - a.totalWeight;
      if (sortBy === "cutoff") return a.minCutoffNum - b.minCutoffNum;
      return a.id - b.id;
    });
  }, [selectedGrades, gradePoints, sortBy]);

  const highestClusterWeight = useMemo(() => {
    return clusterResults.reduce((max, c) => Math.max(max, c.totalWeight), 0);
  }, [clusterResults]);

  return (
    <View style={styles.toolWrap}>
      {/* Summary Row */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View style={[styles.infoCard, { flex: 1, backgroundColor: theme.bgCard, borderColor: theme.border, alignItems: "center" }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>SUBJECTS</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.textPrimary }}>{summary.count}</Text>
        </View>
        <View style={[styles.infoCard, { flex: 1, backgroundColor: theme.bgCard, borderColor: theme.border, alignItems: "center" }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>MEAN POINTS</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.sky }}>{summary.meanPts}</Text>
        </View>
        <View style={[styles.infoCard, { flex: 1, backgroundColor: theme.bgCard, borderColor: theme.border, alignItems: "center" }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>TOP CLUSTER</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.gold }}>{highestClusterWeight} / 48</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Select Your KCSE Subject Grades ({displayedSubjects.length} / {allSubjects.length})
        </Text>
        <Pressable
          onPress={() => setShowAllSubjects(!showAllSubjects)}
          style={[styles.catPill, { backgroundColor: theme.bgCard, borderColor: theme.gold }]}
        >
          <Text style={{ fontSize: 11, fontWeight: "800", color: theme.gold }}>
            {showAllSubjects ? "Show Core 8" : `Show All ${allSubjects.length} Subjects`}
          </Text>
        </Pressable>
      </View>

      <View style={styles.subjectsGrid}>
        {displayedSubjects.map((subj) => (
          <View
            key={subj}
            style={[
              styles.subjCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.subjName, { color: theme.textPrimary }]} >
              {subj}
            </Text>
            <View style={[styles.gradeScroll, { flexDirection: "row", flexWrap: "wrap" }]}>
              <Pressable
                onPress={() =>
                  setSelectedGrades((prev) => {
                    const next = { ...prev };
                    delete next[subj];
                    return next;
                  })
                }
                style={[
                  styles.gradeBtn,
                  {
                    backgroundColor: !selectedGrades[subj] ? theme.bgSecondary : theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={[styles.gradeBtnText, { color: theme.textMuted }]}>—</Text>
              </Pressable>
              {grades.map((g) => {
                const active = selectedGrades[subj] === g;
                return (
                  <Pressable
                    key={g}
                    onPress={() =>
                      setSelectedGrades((prev) => ({ ...prev, [subj]: g }))
                    }
                    style={[
                      styles.gradeBtn,
                      {
                        backgroundColor: active ? theme.gold : theme.bgElevated,
                        borderColor: theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.gradeBtnText,
                        {
                          color: active ? theme.kenyaBlack : theme.textPrimary,
                        },
                      ]}
                    >
                      {g}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </View>

      {/* Sort Controls */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Degree Clusters ({clusterResults.length})
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {([
            { key: "points", label: "Highest Pts" },
            { key: "id", label: "Cluster #" },
            { key: "cutoff", label: "Lowest Cutoff" },
          ] as const).map((opt) => (
            <Pressable
              key={opt.key}
              onPress={() => setSortBy(opt.key)}
              style={[
                styles.catPill,
                {
                  backgroundColor: sortBy === opt.key ? theme.gold : theme.bgCard,
                  borderColor: sortBy === opt.key ? theme.gold : theme.border,
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
      </View>

      <View style={styles.entriesList}>
        {clusterResults.map((c) => {
          const isExpanded = expandedCluster === c.id;
          return (
            <Pressable
              key={c.id}
              onPress={() => setExpandedCluster(isExpanded ? null : c.id)}
              style={[
                styles.entryCard,
                { backgroundColor: theme.bgCard, borderColor: theme.border },
              ]}
            >
              <View style={styles.clusterHeaderRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.clusterName, { color: theme.textPrimary }]}>
                    Cluster {c.id}: {c.name}
                  </Text>
                  <Text style={[styles.clusterCutoff, { color: theme.textMuted }]}>
                    Typical Cutoff: {c.typicalCutoff} pts · Tap for weight breakdown
                  </Text>
                </View>
                <View style={[styles.clusterBadge, { backgroundColor: `${theme.gold}20` }]}>
                  <Text style={[styles.clusterPointsText, { color: theme.gold }]}>
                    {c.totalWeight} / 48
                  </Text>
                </View>
              </View>

              {isExpanded && c.breakdown.length > 0 && (
                <View style={{ marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: theme.border, gap: 4 }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: theme.gold }}>
                    SUBJECT WEIGHT BREAKDOWN
                  </Text>
                  {c.breakdown.map((b, bIdx) => (
                    <View key={bIdx} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 11, color: theme.textSecondary, flex: 1 }}>
                        {b.reqName} ({b.matchedSubject})
                      </Text>
                      <Text style={{ fontSize: 11, fontWeight: "700", color: theme.textPrimary }}>
                        {b.grade} ({b.points} × {b.weight} = {b.weighted})
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              <View style={styles.coursesRow}>
                {c.courses.map((course: string, idx: number) => (
                  <View
                    key={idx}
                    style={[
                      styles.courseChip,
                      { backgroundColor: theme.bgElevated, borderColor: theme.border },
                    ]}
                  >
                    <Text style={[styles.courseChipText, { color: theme.textSecondary }]}>
                      {course}
                    </Text>
                  </View>
                ))}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolWrap: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  horizontalPills: {
    gap: 8,
    paddingVertical: 4,
  },
  langPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  langPillText: {
    fontSize: 13,
    fontWeight: "700",
  },
  infoCard: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  infoHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  badgePill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
  },
  infoDesc: {
    fontSize: 12,
    lineHeight: 17,
  },
  searchBox: {
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
  catPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  catPillText: {
    fontSize: 12,
    fontWeight: "600",
  },
  countLabel: {
    fontSize: 12,
  },
  entriesList: {
    gap: 10,
  },
  entryCard: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entryEnglish: {
    fontSize: 15,
    fontWeight: "700",
  },
  entryCategory: {
    fontSize: 11,
  },
  entryTranslationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  entryTranslation: {
    fontSize: 18,
    fontWeight: "800",
  },
  pronounceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  pronounceText: {
    fontSize: 12,
    fontWeight: "600",
  },
  entryContext: {
    fontSize: 11,
    fontStyle: "italic",
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 8,
  },
  emptyText: {
    fontSize: 13,
  },

  // Solar styles
  cardBox: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "600",
  },
  kesInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  kesPrefix: {
    fontSize: 20,
    fontWeight: "800",
  },
  bigInput: {
    fontSize: 26,
    fontWeight: "900",
    flex: 1,
  },
  presetRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  presetBtn: {
    flex: 1,
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  presetText: {
    fontSize: 12,
    fontWeight: "700",
  },
  regionGrid: {
    flexDirection: "row",
    gap: 8,
  },
  regionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
  },
  regionName: {
    fontSize: 13,
    fontWeight: "700",
  },
  regionIrradiance: {
    fontSize: 10,
    marginTop: 2,
  },
  resultsCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  resultsHeader: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  statsTwoCol: {
    flexDirection: "row",
    gap: 12,
  },
  statCol: {
    flex: 1,
    gap: 2,
  },
  statColLabel: {
    fontSize: 11,
  },
  statColVal: {
    fontSize: 18,
    fontWeight: "800",
  },
  statColSub: {
    fontSize: 10,
  },
  divider: {
    height: 1,
    width: "100%",
  },
  highlightBox: {
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  highlightLabel: {
    fontSize: 13,
    fontWeight: "800",
  },

  // Ward styles
  leadersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  leaderItem: {
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
    gap: 2,
  },
  leaderRole: {
    fontSize: 10,
    textTransform: "uppercase",
  },
  leaderVal: {
    fontSize: 13,
    fontWeight: "700",
  },
  constituenciesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  constituencyBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
  },
  numberCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  numberCircleText: {
    fontSize: 10,
    fontWeight: "800",
  },
  constituencyTitle: {
    fontSize: 12,
    fontWeight: "600",
    flex: 1,
  },

  // CBC styles
  levelSub: {
    fontSize: 13,
    fontWeight: "700",
  },
  levelOld: {
    fontSize: 11,
  },
  areaHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  areaNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  areaNumberText: {
    fontSize: 11,
    fontWeight: "800",
  },
  areaName: {
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
  },
  areaDesc: {
    fontSize: 12,
    lineHeight: 17,
  },

  // KUCCPS styles
  subjectsGrid: {
    gap: 8,
  },
  subjCard: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subjName: {
    fontSize: 12,
    fontWeight: "700",
    width: 110,
  },
  gradeScroll: {
    gap: 6,
  },
  gradeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  gradeBtnText: {
    fontSize: 12,
    fontWeight: "800",
  },
  clusterHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clusterName: {
    fontSize: 14,
    fontWeight: "700",
  },
  clusterCutoff: {
    fontSize: 11,
    marginTop: 2,
  },
  clusterBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  clusterPointsText: {
    fontSize: 14,
    fontWeight: "900",
  },
  coursesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  courseChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  courseChipText: {
    fontSize: 11,
  },
});
