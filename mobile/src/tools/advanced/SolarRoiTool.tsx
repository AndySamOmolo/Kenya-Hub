import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../theme";
import { styles } from "./shared";
import solarData from "../../shared/data/solar-irradiance.json";

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
    const systemSizeKw = dailyKwh / (irradiance * (1 - d.systemLosses));
    const recommendedSize = Math.ceil(systemSizeKw * 10) / 10;
    const systemCost = Math.round(recommendedSize * customCostPerKw);
    const monthlyGeneration = Math.round(
      recommendedSize * irradiance * (1 - d.systemLosses) * 30
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
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
            keyboardType="numeric"
            value={monthlyBill === "0" ? "" : monthlyBill}
            onChangeText={(txt) => {
              const cleaned = txt.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
              setMonthlyBill(cleaned === "0" ? "" : cleaned);
            }}
            placeholder="0"
            placeholderTextColor={theme.textMuted}
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
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
            keyboardType="numeric"
            value={costPerKw === "0" ? "" : costPerKw}
            onChangeText={(txt) => {
              const cleaned = txt.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
              setCostPerKw(cleaned === "0" ? "" : cleaned);
            }}
            placeholder="130000"
            placeholderTextColor={theme.textMuted}
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

