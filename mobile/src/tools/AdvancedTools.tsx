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

  // Flatten entries
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
      {/* Language Selector Pills */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Select Language ({ALL_DICTS.length} available)
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalPills}
      >
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
      </ScrollView>

      {/* Language Info Banner */}
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

      {/* Search Input */}
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

      {/* Category Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalPills}
      >
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
      </ScrollView>

      {/* Vocabulary Results */}
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

  const results = useMemo(() => {
    const billNum = Math.max(500, parseFloat(monthlyBill) || 0);
    const region = solarData.regions.find((r) => r.id === regionId) || solarData.regions[0];
    const irradiance = region.irradiance;
    const monthlyKwh = billNum / d.kplcAvgRatePerKwh;
    const dailyKwh = monthlyKwh / 30;
    const systemSizeKw = dailyKwh / (irradiance * d.panelEfficiency * (1 - d.systemLosses));
    const recommendedSize = Math.ceil(systemSizeKw * 10) / 10;
    const systemCost = Math.round(recommendedSize * d.avgCostPerKw);
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
      recommendedSize,
      systemCost,
      effectiveSavings,
      paybackYears: Math.round(paybackYears * 10) / 10,
      cumulativeSavings: Math.round(cumulativeSavings),
      netProfit,
      roofArea,
    };
  }, [monthlyBill, regionId, d]);

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
          {[2000, 5000, 10000, 20000].map((amount) => (
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

  const currentCounty = useMemo(() => {
    return (
      countiesData.counties.find((c) => c.slug === selectedSlug) ||
      countiesData.counties[0]
    );
  }, [selectedSlug]);

  const filteredConstituencies = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return currentCounty.constituencies;
    return currentCounty.constituencies.filter((c) =>
      c.toLowerCase().includes(q)
    );
  }, [currentCounty, search]);

  return (
    <View style={styles.toolWrap}>
      {/* County Selector Pills */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Select County ({countiesData.counties.length} available)
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalPills}
      >
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
                {c.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

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

      {/* Constituencies Filter */}
      <View
        style={[
          styles.searchBox,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          placeholder="Filter constituencies / wards..."
          placeholderTextColor={theme.textMuted}
          value={search}
          onChangeText={setSearch}
          style={[styles.searchInput, { color: theme.textPrimary }]}
        />
      </View>

      <Text style={[styles.countLabel, { color: theme.textMuted }]}>
        {filteredConstituencies.length} Constituencies in {currentCounty.name}
      </Text>

      <View style={styles.constituenciesGrid}>
        {filteredConstituencies.map((c, idx) => (
          <View
            key={idx}
            style={[
              styles.constituencyBox,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={[styles.numberCircle, { backgroundColor: `${theme.gold}20` }]}>
              <Text style={[styles.numberCircleText, { color: theme.gold }]}>
                {idx + 1}
              </Text>
            </View>
            <Text style={[styles.constituencyTitle, { color: theme.textPrimary }]}>
              {c}
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

  const level = useMemo(() => {
    return cbcData.levels.find((l) => l.id === levelId) || cbcData.levels[0];
  }, [levelId]);

  return (
    <View style={styles.toolWrap}>
      {/* Level Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalPills}
      >
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
      </ScrollView>

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
      </View>

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
    </View>
  );
}

// ─── 5. KUCCPS CLUSTER POINTS CALCULATOR TOOL ───
export function KuccpsClusterTool() {
  const { theme } = useTheme();
  const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>({
    Mathematics: "A",
    English: "A-",
    Kiswahili: "B+",
    Biology: "A-",
    Physics: "B+",
    Chemistry: "A",
  });

  const gradePoints: Record<string, number> = kuccpsData.gradePoints as any;

  const clusterResults = useMemo(() => {
    return kuccpsData.clusters.map((cluster: any) => {
      let totalWeight = 0;
      const breakdown: { subject: string; grade: string; weighted: number }[] = [];

      for (const req of cluster.subjects) {
        const options = req.name.split("/").map((s: string) => s.trim());
        let bestGrade = "";
        let bestPoints = 0;

        for (const opt of options) {
          if (selectedGrades[opt] && gradePoints[selectedGrades[opt]] > bestPoints) {
            bestGrade = selectedGrades[opt];
            bestPoints = gradePoints[selectedGrades[opt]];
          }
        }

        if (bestPoints > 0) {
          const weighted = bestPoints * req.weight;
          totalWeight += weighted;
          breakdown.push({
            subject: req.name,
            grade: bestGrade,
            weighted,
          });
        }
      }

      return {
        id: cluster.id,
        name: cluster.name,
        typicalCutoff: cluster.typicalCutoff,
        courses: cluster.courses,
        totalWeight: Math.round(totalWeight * 10) / 10,
        breakdown,
      };
    });
  }, [selectedGrades, gradePoints]);

  return (
    <View style={styles.toolWrap}>
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Set Your Core KCSE Subject Grades
      </Text>

      <View style={styles.subjectsGrid}>
        {["Mathematics", "English", "Kiswahili", "Biology", "Physics", "Chemistry"].map(
          (subj) => (
            <View
              key={subj}
              style={[
                styles.subjCard,
                { backgroundColor: theme.bgCard, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.subjName, { color: theme.textPrimary }]}>
                {subj}
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.gradeScroll}
              >
                {grades.slice(0, 7).map((g) => {
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
              </ScrollView>
            </View>
          )
        )}
      </View>

      <Text style={[styles.sectionLabel, { color: theme.textSecondary, marginTop: 16 }]}>
        Calculated Cluster Points Across Degree Programmes
      </Text>

      <View style={styles.entriesList}>
        {clusterResults.map((c) => (
          <View
            key={c.id}
            style={[
              styles.entryCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={styles.clusterHeaderRow}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.clusterName, { color: theme.textPrimary }]}>
                  {c.name}
                </Text>
                <Text style={[styles.clusterCutoff, { color: theme.textMuted }]}>
                  Typical Cutoff: {c.typicalCutoff} pts
                </Text>
              </View>
              <View style={[styles.clusterBadge, { backgroundColor: `${theme.gold}20` }]}>
                <Text style={[styles.clusterPointsText, { color: theme.gold }]}>
                  {c.totalWeight} pts
                </Text>
              </View>
            </View>

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
          </View>
        ))}
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
    flexWrap: "wrap",
    gap: 8,
  },
  regionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    width: "48%",
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
    width: "48%",
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
    width: "48%",
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
    fontSize: 13,
    fontWeight: "700",
    width: 100,
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
