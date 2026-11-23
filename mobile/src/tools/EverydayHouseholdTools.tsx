import React, { useState, useMemo, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useTheme,
  getThemedCardStyle,
  getThemedInputStyle,
  triggerHaptic,
  pressableStyle,
  type ThemeColors,
} from "../theme";
import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { ThemedIcon } from "../components/ThemedIcon";
import everydayData from "../shared/data/kenya-everyday-tools-2026.json";

const HARAMBEE_PLEDGES_KEY = "kenyahub_funeral_harambee_pledges_v1";

function parseNum(val: string): number {
  const cleaned = val.replace(/[^0-9.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function parseIntClean(val: string): number {
  const cleaned = val.replace(/[^0-9]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function fmtKes(amount: number): string {
  return `KES ${Math.round(amount).toLocaleString()}`;
}

function useEverydayToolTheme() {
  const { theme, isDark, themeConfig, themeMetrics } = useTheme();
  const cardBase = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const inputBase = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const styles = useMemo(() => createStyles(theme), [theme]);
  const warnColor = isDark ? "#FBBF24" : "#92400E";
  const warnBorder = isDark ? "#F59E0B66" : "#92400E66";
  const warnBg = isDark ? "#F59E0B1A" : "#92400E14";
  return { theme, isDark, cardBase, inputBase, styles, warnColor, warnBorder, warnBg };
}

// ============================================================================
// 1. School Fee Cap Auditor (MoE Special Gazette Notice No. 1449 of 2026)
// ============================================================================
export function SchoolFeeCapAuditorTool() {
  const { theme, cardBase, inputBase, styles, warnColor, warnBorder, warnBg } =
    useEverydayToolTheme();
  const data = everydayData.schoolFeeCaps;

  const [categoryId, setCategoryId] = useState(data.categories[1].id);
  const [billedInput, setBilledInput] = useState("65000");
  const [flaggedLevies, setFlaggedLevies] = useState<Record<number, boolean>>({});

  const category = useMemo(
    () => data.categories.find((c) => c.id === categoryId) ?? data.categories[0],
    [categoryId, data.categories]
  );

  const audit = useMemo(() => {
    const billed = parseIntClean(billedInput);
    const legalCap = category.parentCapKes;
    const overcharge = Math.max(0, billed - legalCap);
    const savingsOrOver = billed - legalCap;
    const termLabels = ["Term 1 (50%)", "Term 2 (30%)", "Term 3 (20%)"];
    const terms = data.termSplits.map((ratio, idx) => {
      const capTerm = Math.round(legalCap * ratio);
      const billedTerm = Math.round(billed * ratio);
      return {
        label: termLabels[idx],
        ratioPct: Math.round(ratio * 100),
        capTerm,
        billedTerm,
        diff: Math.max(0, billedTerm - capTerm),
      };
    });
    const flaggedCount = Object.values(flaggedLevies).filter(Boolean).length;
    return { billed, legalCap, overcharge, savingsOrOver, terms, flaggedCount };
  }, [billedInput, category, data.termSplits, flaggedLevies]);

  const isViolation = audit.overcharge > 0 || audit.flaggedCount > 0;

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>School Category ({data.gazetteReference})</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.categories.map((cat) => {
          const active = cat.id === categoryId;
          return (
            <Pressable
              key={cat.id}
              onPress={() => {
                triggerHaptic(6);
                setCategoryId(cat.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {cat.id === "day"
                  ? "Public Day (KES 0)"
                  : cat.id === "cluster1-urban"
                  ? "Cluster 1 Urban (53,554)"
                  : cat.id === "other-boarding"
                  ? "Other Boarding (40,535)"
                  : "Special Needs (12,790)"}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Annual Fee Billed by School (KES)</Text>
          <TextInput
            value={billedInput}
            onChangeText={(t) => setBilledInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            placeholder="e.g. 65000"
            placeholderTextColor={theme.textMuted}
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.kpiRow}>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            {
              borderColor:
                audit.overcharge > 0 ? `${theme.kenyaRedLight}66` : `${theme.kenyaGreenLight}66`,
              backgroundColor:
                audit.overcharge > 0 ? `${theme.kenyaRedLight}16` : `${theme.kenyaGreenLight}16`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>
            {audit.overcharge > 0 ? "ILLEGAL OVERCHARGE" : "CAP COMPLIANCE"}
          </Text>
          <Text
            style={[
              styles.kpiValue,
              { color: audit.overcharge > 0 ? theme.kenyaRedLight : theme.kenyaGreenLight },
            ]}
          >
            {audit.overcharge > 0 ? `+${fmtKes(audit.overcharge)}` : "Within Legal Cap"}
          </Text>
          <Text style={styles.kpiSub}>
            Max Parent Cap: {fmtKes(audit.legalCap)}/yr
          </Text>
        </View>

        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>GOK CAPITATION</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {fmtKes(category.gokCapitationKes)}
          </Text>
          <Text style={styles.kpiSub}>
            Total Annual: {fmtKes(category.totalAnnualKes)}
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>{category.label}</Text>
          <View style={[styles.badge, { borderColor: theme.gold, backgroundColor: `${theme.gold}1A` }]}>
            <Text style={[styles.badgeText, { color: theme.gold }]}>50 / 30 / 20 Split</Text>
          </View>
        </View>
        <Text style={styles.cardSub}>{category.notes}</Text>

        <View style={styles.listGap}>
          {audit.terms.map((t) => (
            <View key={t.label} style={[styles.subRow, { borderColor: theme.border }]}>
              <View style={styles.flexTitle}>
                <Text style={styles.rowLabel}>{t.label}</Text>
                <Text style={styles.cardSub}>Legal Cap: {fmtKes(t.capTerm)}</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.amountText}>Billed: {fmtKes(t.billedTerm)}</Text>
                {t.diff > 0 && (
                  <Text style={[styles.smallAlert, { color: theme.kenyaRedLight }]}>
                    +{fmtKes(t.diff)} over cap
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[
          cardBase,
          styles.card,
          audit.flaggedCount > 0 && { borderColor: warnBorder, backgroundColor: warnBg },
        ]}
      >
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>
            Flagged Illegal Levies on Fee Structure
          </Text>
          <Text style={[styles.badgeText, { color: audit.flaggedCount > 0 ? warnColor : theme.textMuted }]}>
            {audit.flaggedCount}/{data.illegalLevies.length} flagged
          </Text>
        </View>
        <View style={styles.listGap}>
          {data.illegalLevies.map((levy, idx) => {
            const checked = Boolean(flaggedLevies[idx]);
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setFlaggedLevies((prev) => ({ ...prev, [idx]: !prev[idx] }));
                }}
                style={styles.checkRow}
              >
                <ThemedIcon
                  name={checked ? "alert-circle" : "square-outline"}
                  size={18}
                  color={checked ? theme.kenyaRedLight : theme.textMuted}
                />
                <Text style={[styles.checkText, checked && { color: theme.kenyaRedLight }]}>
                  {levy}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View
        style={[
          cardBase,
          styles.card,
          isViolation && { borderColor: `${theme.kenyaRedLight}55` },
        ]}
      >
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Official Reporting Channels</Text>
          <ThemedIcon name="shield-checkmark-outline" size={16} color={theme.kenyaGreenLight} />
        </View>
        <Text style={styles.cardSub}>MoE Toll-Free Hotline: {data.reportingChannels.moeHotline}</Text>
        <Text style={styles.cardSub}>Ombudsman: {data.reportingChannels.ombudsman}</Text>
        <Text style={styles.cardSub}>Local Escalation: {data.reportingChannels.countyOffice}</Text>
      </View>
    </View>
  );
}

// ============================================================================
// 2. Cooking Fuel Comparator & EPC Payback Engine
// ============================================================================
type FuelKey = "lpg" | "kerosene" | "charcoal" | "electricityEpc";

export function CookingFuelComparatorTool() {
  const { theme, cardBase, inputBase, styles } = useEverydayToolTheme();
  const data = everydayData.cookingFuel;

  const [dishId, setDishId] = useState(data.dishes[0].id);
  const [currentFuel, setCurrentFuel] = useState<"lpg" | "kerosene" | "charcoal">("charcoal");
  const [mealsPerWeek, setMealsPerWeek] = useState("10");
  const [epcPriceInput, setEpcPriceInput] = useState(String(data.epcPriceBenchmarkKes));
  const [lpgPerKg, setLpgPerKg] = useState(String(data.fuels.lpg.kesPerKg));
  const [keroPerL, setKeroPerL] = useState(String(data.fuels.kerosene.kesPerLitre));
  const [charcoalPerKg, setCharcoalPerKg] = useState(String(data.fuels.charcoal.kesPerKg));
  const [kplcPerKwh, setKplcPerKwh] = useState(String(data.fuels.electricityEpc.kesPerKwh));

  const dish = useMemo(
    () => data.dishes.find((d) => d.id === dishId) ?? data.dishes[0],
    [dishId, data.dishes]
  );

  const calc = useMemo(() => {
    const mpw = Math.max(1, parseNum(mealsPerWeek));
    const monthlyMeals = mpw * 4.33;
    const epcPrice = Math.max(0, parseIntClean(epcPriceInput));
    const rates = {
      lpg: parseNum(lpgPerKg) || data.fuels.lpg.kesPerKg,
      kerosene: parseNum(keroPerL) || data.fuels.kerosene.kesPerLitre,
      charcoal: parseNum(charcoalPerKg) || data.fuels.charcoal.kesPerKg,
      electricityEpc: parseNum(kplcPerKwh) || data.fuels.electricityEpc.kesPerKwh,
    };

    const rows: {
      key: FuelKey;
      label: string;
      perDish: number;
      monthly: number;
      annual: number;
      usageNote: string;
    }[] = [
      {
        key: "electricityEpc",
        label: data.fuels.electricityEpc.label,
        perDish: dish.epcKwh * rates.electricityEpc,
        monthly: dish.epcKwh * rates.electricityEpc * monthlyMeals,
        annual: dish.epcKwh * rates.electricityEpc * monthlyMeals * 12,
        usageNote: `${dish.epcKwh} kWh/dish • ${dish.epcMinutes} min`,
      },
      {
        key: "lpg",
        label: data.fuels.lpg.label,
        perDish: dish.lpgKg * rates.lpg,
        monthly: dish.lpgKg * rates.lpg * monthlyMeals,
        annual: dish.lpgKg * rates.lpg * monthlyMeals * 12,
        usageNote: `${dish.lpgKg} kg LPG/dish`,
      },
      {
        key: "charcoal",
        label: data.fuels.charcoal.label,
        perDish: dish.charcoalKg * rates.charcoal,
        monthly: dish.charcoalKg * rates.charcoal * monthlyMeals,
        annual: dish.charcoalKg * rates.charcoal * monthlyMeals * 12,
        usageNote: `${dish.charcoalKg} kg charcoal/dish • ${dish.charcoalMinutes} min`,
      },
      {
        key: "kerosene",
        label: data.fuels.kerosene.label,
        perDish: dish.keroseneL * rates.kerosene,
        monthly: dish.keroseneL * rates.kerosene * monthlyMeals,
        annual: dish.keroseneL * rates.kerosene * monthlyMeals * 12,
        usageNote: `${dish.keroseneL} L kerosene/dish`,
      },
    ].sort((a, b) => a.monthly - b.monthly);

    const epcRow = rows.find((r) => r.key === "electricityEpc")!;
    const currentRow = rows.find((r) => r.key === currentFuel)!;
    const monthlySavings = Math.max(0, currentRow.monthly - epcRow.monthly);
    const paybackMonths = monthlySavings > 0 ? epcPrice / monthlySavings : null;
    const timeSavedMin = Math.max(0, dish.charcoalMinutes - dish.epcMinutes);

    return { rows, epcRow, currentRow, monthlySavings, paybackMonths, timeSavedMin, monthlyMeals };
  }, [dish, currentFuel, mealsPerWeek, epcPriceInput, lpgPerKg, keroPerL, charcoalPerKg, kplcPerKwh, data.fuels]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Kenyan Dish Benchmark</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.dishes.map((d) => {
          const active = d.id === dishId;
          return (
            <Pressable
              key={d.id}
              onPress={() => {
                triggerHaptic(6);
                setDishId(d.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {d.label.split("(")[0].trim()}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={styles.sectionLabel}>Your Current Primary Fuel (for EPC Payback)</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "charcoal", label: "Charcoal" },
            { id: "lpg", label: "LPG Gas" },
            { id: "kerosene", label: "Kerosene" },
          ] as const
        ).map((f) => {
          const active = currentFuel === f.id;
          return (
            <Pressable
              key={f.id}
              onPress={() => {
                triggerHaptic(6);
                setCurrentFuel(f.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{f.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Meals / Week</Text>
          <TextInput
            value={mealsPerWeek}
            onChangeText={(t) => setMealsPerWeek(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputCol}>
          <Text style={styles.label}>EPC Price (KES)</Text>
          <TextInput
            value={epcPriceInput}
            onChangeText={(t) => setEpcPriceInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>KPLC/kWh</Text>
          <TextInput
            value={kplcPerKwh}
            onChangeText={(t) => setKplcPerKwh(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>LPG/kg</Text>
          <TextInput
            value={lpgPerKg}
            onChangeText={(t) => setLpgPerKg(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Kero/L</Text>
          <TextInput
            value={keroPerL}
            onChangeText={(t) => setKeroPerL(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Charc/kg</Text>
          <TextInput
            value={charcoalPerKg}
            onChangeText={(t) => setCharcoalPerKg(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.kpiRow}>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
          ]}
        >
          <Text style={styles.kpiLabel}>MONTHLY SAVINGS (EPC)</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {fmtKes(calc.monthlySavings)}/mo
          </Text>
          <Text style={styles.kpiSub}>
            Saves {fmtKes(calc.monthlySavings * 12)}/yr vs {currentFuel.toUpperCase()}
          </Text>
        </View>

        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>EPC PAYBACK PERIOD</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {calc.paybackMonths !== null ? `${calc.paybackMonths.toFixed(1)} months` : "N/A"}
          </Text>
          <Text style={styles.kpiSub}>
            Saves {calc.timeSavedMin} min/dish vs charcoal
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>
            Monthly Fuel Comparison ({Math.round(calc.monthlyMeals)} meals/mo)
          </Text>
          <Text style={styles.cardSub}>{dish.label}</Text>
        </View>
        <View style={styles.listGap}>
          {calc.rows.map((r, idx) => (
            <View
              key={r.key}
              style={[
                styles.subRow,
                {
                  borderColor: idx === 0 ? `${theme.kenyaGreenLight}66` : theme.border,
                },
              ]}
            >
              <View style={styles.flexTitle}>
                <View style={styles.rowBetween}>
                  <Text style={[styles.rowLabel, styles.flexTitle]}>{r.label}</Text>
                  {idx === 0 && (
                    <View
                      style={[
                        styles.badge,
                        {
                          borderColor: theme.kenyaGreenLight,
                          backgroundColor: `${theme.kenyaGreenLight}1A`,
                        },
                      ]}
                    >
                      <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>
                        CHEAPEST
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={styles.cardSub}>
                  {r.usageNote} • KES {r.perDish.toFixed(1)}/dish
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={[styles.amountText, idx === 0 && { color: theme.kenyaGreenLight }]}>
                  {fmtKes(r.monthly)}/mo
                </Text>
                <Text style={styles.cardSub}>{fmtKes(r.annual)}/yr</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 3. Auctioneer Fee Shield (Auctioneers Act Cap 526 — Fourth Schedule)
// ============================================================================
export function AuctioneerFeeShieldTool() {
  const { theme, cardBase, inputBase, styles, warnColor, warnBorder, warnBg } =
    useEverydayToolTheme();
  const data = everydayData.auctioneerCap526;

  const [assetType, setAssetType] = useState<"movable" | "immovable">("movable");
  const [debtInput, setDebtInput] = useState("150000");
  const [demandedInput, setDemandedInput] = useState("45000");
  const [includeProclamation, setIncludeProclamation] = useState(true);
  const [redFlags, setRedFlags] = useState<Record<number, boolean>>({});

  const calc = useMemo(() => {
    const debt = parseIntClean(debtInput);
    const demanded = parseIntClean(demandedInput);
    const bands =
      assetType === "movable" ? data.movableCommissionBands : data.immovableCommissionBands;

    let remaining = debt;
    let prevCap = 0;
    let commission = 0;
    const bandRows = bands.map((b) => {
      if (remaining <= 0) {
        return { label: b.label, ratePct: b.rate * 100, slice: 0, fee: 0 };
      }
      const width = b.upToKes !== null ? b.upToKes - prevCap : Infinity;
      const slice = Math.min(remaining, width);
      const fee = Math.round(slice * b.rate);
      commission += fee;
      remaining -= slice;
      if (b.upToKes !== null) prevCap = b.upToKes;
      return { label: b.label, ratePct: b.rate * 100, slice, fee };
    });

    const attendance =
      assetType === "movable"
        ? data.attendanceFees.movableKes
        : data.attendanceFees.immovableKes;
    const proclamation = includeProclamation ? data.proclamationFeeKes : 0;
    const ceiling = commission + attendance + proclamation;
    const overcharge = Math.max(0, demanded - ceiling);
    const flagCount = Object.values(redFlags).filter(Boolean).length;

    return { debt, demanded, bandRows, commission, attendance, proclamation, ceiling, overcharge, flagCount };
  }, [assetType, debtInput, demandedInput, includeProclamation, redFlags, data]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Attachment Category ({data.statute})</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "movable", label: "Movable Goods / Rent Distress" },
            { id: "immovable", label: "Immovable Property (Land)" },
          ] as const
        ).map((opt) => {
          const active = assetType === opt.id;
          return (
            <Pressable
              key={opt.id}
              onPress={() => {
                triggerHaptic(6);
                setAssetType(opt.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{opt.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Debt / Warrant Value (KES)</Text>
          <TextInput
            value={debtInput}
            onChangeText={(t) => setDebtInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Auctioneer Demand (KES)</Text>
          <TextInput
            value={demandedInput}
            onChangeText={(t) => setDemandedInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <Pressable
        onPress={() => {
          triggerHaptic(6);
          setIncludeProclamation((p) => !p);
        }}
        style={[cardBase, styles.card]}
      >
        <View style={styles.rowBetween}>
          <View style={[styles.checkRow, styles.flexTitle]}>
            <ThemedIcon
              name={includeProclamation ? "checkbox" : "square-outline"}
              size={18}
              color={includeProclamation ? theme.kenyaGreenLight : theme.textMuted}
            />
            <Text style={styles.rowLabel}>Include Proclamation Fee (KES 2,000)</Text>
          </View>
          <Text style={styles.cardSub}>
            {includeProclamation ? fmtKes(data.proclamationFeeKes) : "KES 0"}
          </Text>
        </View>
      </Pressable>

      <View style={styles.kpiRow}>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>CAP 526 LEGAL CEILING</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>{fmtKes(calc.ceiling)}</Text>
          <Text style={styles.kpiSub}>Non-cumulative graduated ceiling</Text>
        </View>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            {
              borderColor:
                calc.overcharge > 0 ? `${theme.kenyaRedLight}66` : `${theme.kenyaGreenLight}66`,
              backgroundColor:
                calc.overcharge > 0 ? `${theme.kenyaRedLight}16` : `${theme.kenyaGreenLight}16`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>
            {calc.overcharge > 0 ? "EXCESS / ILLEGAL DEMAND" : "DEMAND STATUS"}
          </Text>
          <Text
            style={[
              styles.kpiValue,
              { color: calc.overcharge > 0 ? theme.kenyaRedLight : theme.kenyaGreenLight },
            ]}
          >
            {calc.overcharge > 0 ? `+${fmtKes(calc.overcharge)}` : "Within Scale"}
          </Text>
          <Text style={styles.kpiSub}>
            {calc.overcharge > 0 ? "Contest via Court Taxation" : "Verify ALB license & warrant"}
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Fourth Schedule Breakdown</Text>
          <Text style={styles.amountText}>{fmtKes(calc.ceiling)}</Text>
        </View>
        <View style={styles.listGap}>
          {calc.bandRows.map((b) => (
            <View key={b.label} style={[styles.subRow, { borderColor: theme.border }]}>
              <View style={styles.flexTitle}>
                <Text style={styles.rowLabel}>{b.label}</Text>
                <Text style={styles.cardSub}>
                  {b.ratePct}% on {fmtKes(b.slice)}
                </Text>
              </View>
              <Text style={styles.amountText}>{fmtKes(b.fee)}</Text>
            </View>
          ))}
          <View style={[styles.subRow, { borderColor: theme.border }]}>
            <Text style={[styles.rowLabel, styles.flexTitle]}>
              Attendance Fee ({assetType === "movable" ? "Movable" : "Immovable"})
            </Text>
            <Text style={styles.amountText}>{fmtKes(calc.attendance)}</Text>
          </View>
          <View style={[styles.subRow, { borderColor: theme.border }]}>
            <Text style={[styles.rowLabel, styles.flexTitle]}>Proclamation Fee</Text>
            <Text style={styles.amountText}>{fmtKes(calc.proclamation)}</Text>
          </View>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Mandatory Statutory Notice Periods</Text>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Movable Proclamation Notice</Text>
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              {data.statutoryNoticeDays.movableProclamationDays} Days
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Rent Distress Sale Notice</Text>
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              {data.statutoryNoticeDays.rentDistressSaleDays} Days
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Immovable Redemption Notice</Text>
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              {data.statutoryNoticeDays.immovableRedemptionDays} Days
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          cardBase,
          styles.card,
          calc.flagCount > 0 && { borderColor: warnBorder, backgroundColor: warnBg },
        ]}
      >
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Illegality Red Flags Check</Text>
          <Text style={[styles.badgeText, { color: calc.flagCount > 0 ? warnColor : theme.textMuted }]}>
            {calc.flagCount}/{data.illegalityRedFlags.length} spotted
          </Text>
        </View>
        <View style={styles.listGap}>
          {data.illegalityRedFlags.map((flag, idx) => {
            const on = Boolean(redFlags[idx]);
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setRedFlags((p) => ({ ...p, [idx]: !p[idx] }));
                }}
                style={styles.checkRow}
              >
                <ThemedIcon
                  name={on ? "warning" : "square-outline"}
                  size={18}
                  color={on ? theme.kenyaRedLight : theme.textMuted}
                />
                <Text style={[styles.checkText, on && { color: theme.kenyaRedLight }]}>{flag}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Legally Exempt Property (Cannot Be Attached)</Text>
        <View style={styles.listGap}>
          {data.exemptProperty.map((item, idx) => (
            <View key={idx} style={styles.checkRow}>
              <ThemedIcon name="shield-outline" size={16} color={theme.kenyaGreenLight} />
              <Text style={styles.checkText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 4. Law of Succession (Cap 160) Intestate Share & ARO Probate Estimator
// ============================================================================
interface PolygamousHouse {
  id: string;
  label: string;
  children: string;
  hasWife: boolean;
}

export function SuccessionCap160Tool() {
  const { theme, cardBase, inputBase, styles } = useEverydayToolTheme();
  const data = everydayData.successionCap160;

  const [regime, setRegime] = useState<"s35" | "s38" | "s39" | "s40">("s35");
  const [estateInput, setEstateInput] = useState("5000000");
  const [childrenInput, setChildrenInput] = useState("3");
  const [houses, setHouses] = useState<PolygamousHouse[]>([
    { id: "h1", label: "1st House", children: "3", hasWife: true },
    { id: "h2", label: "2nd House", children: "2", hasWife: true },
  ]);
  const [checklist, setChecklist] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const sectionInfo = useMemo(() => {
    const map = { s35: 0, s38: 1, s39: 2, s40: 3 };
    return data.sections[map[regime]];
  }, [regime, data.sections]);

  const calc = useMemo(() => {
    const estate = parseIntClean(estateInput);
    const numChildren = Math.max(1, parseIntClean(childrenInput));

    // ARO Probate Legal Fee calculation (graduated)
    let rem = estate;
    let prev = 0;
    let rawFee = 0;
    for (const band of data.aroProbateFeeBands) {
      if (rem <= 0) break;
      const width = band.upToKes !== null ? band.upToKes - prev : Infinity;
      const slice = Math.min(rem, width);
      rawFee += slice * band.rate;
      rem -= slice;
      if (band.upToKes !== null) prev = band.upToKes;
    }
    const minFee = data.aroProbateFeeBands[0].minFeeKes ?? 30000;
    const baseProbateFee = estate > 0 ? Math.max(minFee, Math.round(rawFee)) : 0;
    const probateWithVat = Math.round(baseProbateFee * (1 + data.vatRate));

    // Polygamous units (Section 40)
    const houseResults = houses.map((h) => {
      const kids = parseIntClean(h.children);
      const units = kids + (h.hasWife ? 1 : 0);
      return { ...h, kids, units };
    });
    const totalUnits = houseResults.reduce((s, h) => s + h.units, 0);
    const houseShares = houseResults.map((h) => {
      const pct = totalUnits > 0 ? (h.units / totalUnits) * 100 : 0;
      const amount = totalUnits > 0 ? Math.round((estate * h.units) / totalUnits) : 0;
      return { ...h, pct, amount };
    });

    const perChildAmount = Math.round(estate / numChildren);
    const perChildPct = 100 / numChildren;

    return {
      estate,
      numChildren,
      baseProbateFee,
      probateWithVat,
      houseShares,
      totalUnits,
      perChildAmount,
      perChildPct,
    };
  }, [estateInput, childrenInput, houses, data.aroProbateFeeBands, data.vatRate]);

  const addHouse = () => {
    triggerHaptic(6);
    setHouses((prev) => [
      ...prev,
      { id: `h-${Date.now()}`, label: `House ${prev.length + 1}`, children: "1", hasWife: true },
    ]);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Intestate Family Scenario ({data.statute})</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "s35", label: "s.35 Monogamous (Spouse + Kids)" },
            { id: "s38", label: "s.38 Children Only" },
            { id: "s40", label: "s.40 Polygamous Houses" },
            { id: "s39", label: "s.39 No Spouse / Kids" },
          ] as const
        ).map((item) => {
          const active = regime === item.id;
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                triggerHaptic(6);
                setRegime(item.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Net Estate Value (KES)</Text>
          <TextInput
            value={estateInput}
            onChangeText={(t) => setEstateInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        {(regime === "s35" || regime === "s38") && (
          <View style={styles.inputColSmall}>
            <Text style={styles.label}>Children</Text>
            <TextInput
              value={childrenInput}
              onChangeText={(t) => setChildrenInput(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              style={[inputBase, styles.input]}
            />
          </View>
        )}
      </View>

      {regime === "s40" && (
        <View style={[cardBase, styles.card]}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardTitle, styles.flexTitle]}>Polygamous Houses (Section 40)</Text>
            <Pressable onPress={addHouse} style={styles.chipBtn}>
              <Text style={[styles.chipBtnText, { color: theme.gold }]}>+ Add House</Text>
            </Pressable>
          </View>
          <View style={styles.listGap}>
            {houses.map((h, idx) => (
              <View key={h.id} style={[styles.subRow, { borderColor: theme.border }]}>
                <View style={styles.flexTitle}>
                  <Text style={styles.rowLabel}>{h.label}</Text>
                  <Pressable
                    onPress={() => {
                      triggerHaptic(6);
                      setHouses((prev) =>
                        prev.map((x) => (x.id === h.id ? { ...x, hasWife: !x.hasWife } : x))
                      );
                    }}
                    style={[styles.checkRow, { marginTop: 4 }]}
                  >
                    <ThemedIcon
                      name={h.hasWife ? "checkbox" : "square-outline"}
                      size={16}
                      color={h.hasWife ? theme.kenyaGreenLight : theme.textMuted}
                    />
                    <Text style={styles.cardSub}>Surviving Wife (+1 unit)</Text>
                  </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                  <Text style={styles.cardSub}>Kids:</Text>
                  <TextInput
                    value={h.children}
                    onChangeText={(t) =>
                      setHouses((prev) =>
                        prev.map((x) =>
                          x.id === h.id ? { ...x, children: t.replace(/[^0-9]/g, "") } : x
                        )
                      )
                    }
                    keyboardType="numeric"
                    style={[inputBase, styles.miniInput]}
                  />
                  {houses.length > 2 && (
                    <Pressable
                      onPress={() => {
                        triggerHaptic(6);
                        setHouses((prev) => prev.filter((_, i) => i !== idx));
                      }}
                    >
                      <ThemedIcon name="trash-outline" size={16} color={theme.kenyaRedLight} />
                    </Pressable>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      <View style={styles.kpiRow}>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>APPLICABLE STATUTE</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>{sectionInfo.section}</Text>
          <Text style={styles.kpiSub}>
            {data.gazetteObjectionDays}d Gazette • {data.confirmationWaitMonths}mo Confirmation
          </Text>
        </View>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>ARO PROBATE FEE RANGE</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {fmtKes(calc.baseProbateFee)} – {fmtKes(calc.probateWithVat)}
          </Text>
          <Text style={styles.kpiSub}>Excl. vs Incl. 16% VAT</Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Statutory Distribution ({sectionInfo.section})</Text>
        <Text style={styles.cardSub}>{sectionInfo.rule}</Text>

        <View style={styles.listGap}>
          {regime === "s35" && (
            <>
              <View style={[styles.subRow, { borderColor: theme.border }]}>
                <View style={styles.flexTitle}>
                  <Text style={styles.rowLabel}>Surviving Spouse</Text>
                  <Text style={styles.cardSub}>Personal effects absolutely + Life interest in residue</Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(calc.estate)}</Text>
              </View>
              <View style={[styles.subRow, { borderColor: theme.border }]}>
                <View style={styles.flexTitle}>
                  <Text style={styles.rowLabel}>
                    Each Child ({calc.numChildren} equal remainder shares)
                  </Text>
                  <Text style={styles.cardSub}>
                    {calc.perChildPct.toFixed(1)}% each upon termination of life interest
                  </Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(calc.perChildAmount)}</Text>
              </View>
            </>
          )}

          {regime === "s38" && (
            <View style={[styles.subRow, { borderColor: theme.border }]}>
              <View style={styles.flexTitle}>
                <Text style={styles.rowLabel}>
                  Equal Share per Child ({calc.numChildren} children)
                </Text>
                <Text style={styles.cardSub}>
                  {calc.perChildPct.toFixed(1)}% each (sons & daughters equally)
                </Text>
              </View>
              <Text style={styles.amountText}>{fmtKes(calc.perChildAmount)}</Text>
            </View>
          )}

          {regime === "s40" &&
            calc.houseShares.map((h) => (
              <View key={h.id} style={[styles.subRow, { borderColor: theme.border }]}>
                <View style={styles.flexTitle}>
                  <Text style={styles.rowLabel}>
                    {h.label} ({h.units}/{calc.totalUnits} units)
                  </Text>
                  <Text style={styles.cardSub}>
                    {h.kids} child(ren){h.hasWife ? " + 1 surviving wife" : ""} • {h.pct.toFixed(1)}%
                  </Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(h.amount)}</Text>
              </View>
            ))}

          {regime === "s39" && (
            <View style={[styles.subRow, { borderColor: theme.border }]}>
              <Text style={[styles.cardSub, styles.flexTitle]}>
                1. Father → 2. Mother → 3. Full Siblings → 4. Half Siblings → 5. Relatives to 6th degree → 6. Consolidated Fund ({fmtKes(calc.estate)})
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Probate & Administration Checklist</Text>
          <Text style={styles.cardSub}>
            {Object.values(checklist).filter(Boolean).length}/{data.paChecklist.length} ready
          </Text>
        </View>
        <View style={styles.listGap}>
          {data.paChecklist.map((item, idx) => {
            const done = Boolean(checklist[idx]);
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setChecklist((p) => ({ ...p, [idx]: !p[idx] }));
                }}
                style={styles.checkRow}
              >
                <ThemedIcon
                  name={done ? "checkbox" : "square-outline"}
                  size={18}
                  color={done ? theme.kenyaGreenLight : theme.textMuted}
                />
                <Text style={styles.checkText}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 5. Duka / Hustle Margin, Shrinkage & Nairobi UBP Sinking Fund
// ============================================================================
export function DukaHustleUbpTool() {
  const { theme, cardBase, inputBase, styles } = useEverydayToolTheme();
  const data = everydayData.dukaUbp;

  const [presetId, setPresetId] = useState(data.hustlePresets[0].id);
  const [tierId, setTierId] = useState(data.hustlePresets[0].defaultTierId);
  const [dailySales, setDailySales] = useState(String(data.hustlePresets[0].dailySalesBenchmarkKes));
  const [marginPct, setMarginPct] = useState(String(data.hustlePresets[0].grossMarginPct));
  const [spoilagePct, setSpoilagePct] = useState(String(data.hustlePresets[0].spoilagePct));
  const [rent, setRent] = useState(String(data.hustlePresets[0].monthlyRentKes));
  const [utilities, setUtilities] = useState(String(data.hustlePresets[0].monthlyUtilitiesKes));
  const [daysPerMonth, setDaysPerMonth] = useState("26");
  const [addons, setAddons] = useState<Record<number, boolean>>({ 0: true });

  const applyPreset = (id: string) => {
    const p = data.hustlePresets.find((x) => x.id === id);
    if (!p) return;
    triggerHaptic(6);
    setPresetId(p.id);
    setTierId(p.defaultTierId);
    setDailySales(String(p.dailySalesBenchmarkKes));
    setMarginPct(String(p.grossMarginPct));
    setSpoilagePct(String(p.spoilagePct));
    setRent(String(p.monthlyRentKes));
    setUtilities(String(p.monthlyUtilitiesKes));
  };

  const tier = useMemo(
    () => data.nairobiUbpTiers.find((t) => t.id === tierId) ?? data.nairobiUbpTiers[0],
    [tierId, data.nairobiUbpTiers]
  );

  const calc = useMemo(() => {
    const dSales = parseIntClean(dailySales);
    const days = Math.max(1, Math.min(31, parseIntClean(daysPerMonth) || 26));
    const margin = Math.min(100, Math.max(0, parseNum(marginPct)));
    const spoil = Math.min(100, Math.max(0, parseNum(spoilagePct)));
    const mRent = parseIntClean(rent);
    const mUtil = parseIntClean(utilities);

    const addonsTotal = data.complianceAddons.reduce(
      (sum, a, idx) => sum + (addons[idx] ? a.typicalKes : 0),
      0
    );
    const annualPermitTotal = tier.defaultFeeKes + data.applicationFeeKes + addonsTotal;
    const monthlySinkingFund = Math.ceil(annualPermitTotal / 12);
    const dailySinkingFund = Math.ceil(annualPermitTotal / (days * 12));

    const monthlySales = dSales * days;
    const grossProfit = Math.round(monthlySales * (margin / 100));
    const shrinkageLoss = Math.round(monthlySales * (spoil / 100));
    const fixedCosts = mRent + mUtil + monthlySinkingFund;
    const netProfit = grossProfit - shrinkageLoss - fixedCosts;

    const effectiveMargin = (margin - spoil) / 100;
    const dailyBreakEven =
      effectiveMargin > 0 ? Math.ceil(fixedCosts / days / effectiveMargin) : 0;

    return {
      monthlySales,
      grossProfit,
      shrinkageLoss,
      fixedCosts,
      netProfit,
      annualPermitTotal,
      monthlySinkingFund,
      dailySinkingFund,
      dailyBreakEven,
      days,
    };
  }, [dailySales, daysPerMonth, marginPct, spoilagePct, rent, utilities, tier, addons, data]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Hustle Preset</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.hustlePresets.map((p) => {
          const active = p.id === presetId;
          return (
            <Pressable
              key={p.id}
              onPress={() => applyPreset(p.id)}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{p.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={styles.sectionLabel}>{data.county}</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.nairobiUbpTiers.map((t) => {
          const active = t.id === tierId;
          return (
            <Pressable
              key={t.id}
              onPress={() => {
                triggerHaptic(6);
                setTierId(t.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {t.label.split("(")[0].trim()} ({fmtKes(t.defaultFeeKes)})
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Daily Sales (KES)</Text>
          <TextInput
            value={dailySales}
            onChangeText={(t) => setDailySales(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Margin %</Text>
          <TextInput
            value={marginPct}
            onChangeText={(t) => setMarginPct(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Shrinkage %</Text>
          <TextInput
            value={spoilagePct}
            onChangeText={(t) => setSpoilagePct(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Monthly Rent</Text>
          <TextInput
            value={rent}
            onChangeText={(t) => setRent(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Utilities/Mo</Text>
          <TextInput
            value={utilities}
            onChangeText={(t) => setUtilities(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Days/Mo</Text>
          <TextInput
            value={daysPerMonth}
            onChangeText={(t) => setDaysPerMonth(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.kpiRow}>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            {
              borderColor:
                calc.netProfit >= 0 ? `${theme.kenyaGreenLight}66` : `${theme.kenyaRedLight}66`,
              backgroundColor:
                calc.netProfit >= 0 ? `${theme.kenyaGreenLight}16` : `${theme.kenyaRedLight}16`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>NET MONTHLY PROFIT</Text>
          <Text
            style={[
              styles.kpiValue,
              { color: calc.netProfit >= 0 ? theme.kenyaGreenLight : theme.kenyaRedLight },
            ]}
          >
            {fmtKes(calc.netProfit)}
          </Text>
          <Text style={styles.kpiSub}>
            Break-even: {fmtKes(calc.dailyBreakEven)}/day
          </Text>
        </View>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>UBP SINKING FUND</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {fmtKes(calc.dailySinkingFund)}/day
          </Text>
          <Text style={styles.kpiSub}>
            {fmtKes(calc.monthlySinkingFund)}/mo • {fmtKes(calc.annualPermitTotal)}/yr
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Monthly P&L Snapshot ({calc.days} operating days)</Text>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Gross Monthly Sales</Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.monthlySales)}</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Gross Profit ({marginPct}%)</Text>
            <Text style={[styles.rowLabel, { color: theme.kenyaGreenLight }]}>
              +{fmtKes(calc.grossProfit)}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Spoilage / Shrinkage Loss ({spoilagePct}%)
            </Text>
            <Text style={[styles.rowLabel, { color: theme.kenyaRedLight }]}>
              -{fmtKes(calc.shrinkageLoss)}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Rent + Utilities + UBP Sinking Fund
            </Text>
            <Text style={[styles.rowLabel, { color: theme.kenyaRedLight }]}>
              -{fmtKes(calc.fixedCosts)}
            </Text>
          </View>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Compliance Add-ons (Annual)</Text>
          <Text style={styles.cardSub}>+{fmtKes(data.applicationFeeKes)} app fee incl.</Text>
        </View>
        <View style={styles.listGap}>
          {data.complianceAddons.map((addon, idx) => {
            const on = Boolean(addons[idx]);
            return (
              <Pressable
                key={addon.name}
                onPress={() => {
                  triggerHaptic(6);
                  setAddons((p) => ({ ...p, [idx]: !p[idx] }));
                }}
                style={styles.rowBetween}
              >
                <View style={[styles.checkRow, styles.flexTitle]}>
                  <ThemedIcon
                    name={on ? "checkbox" : "square-outline"}
                    size={18}
                    color={on ? theme.kenyaGreenLight : theme.textMuted}
                  />
                  <Text style={styles.checkText}>{addon.name}</Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(addon.typicalKes)}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 6. Funeral & Harambee Planner (KUFH/KUTRRH Tariff + AsyncStorage Pledges)
// ============================================================================
interface PledgeItem {
  id: string;
  name: string;
  amount: number;
  paid: boolean;
}

const DEFAULT_PLEDGES: PledgeItem[] = [
  { id: "p-1", name: "Immediate Family Pool", amount: 60000, paid: true },
  { id: "p-2", name: "Workplace / Chama Group", amount: 45000, paid: false },
];

export function FuneralHarambeePlannerTool() {
  const { theme, cardBase, inputBase, styles, warnColor, warnBorder, warnBg } =
    useEverydayToolTheme();
  const data = everydayData.funeralHarambee;

  const [tierId, setTierId] = useState(data.costTiers[1].id);
  const [ageGroup, setAgeGroup] = useState<"adult" | "child">("adult");
  const [morgueDaysInput, setMorgueDaysInput] = useState("10");
  const [includePostmortem, setIncludePostmortem] = useState(false);
  const [realizationInput, setRealizationInput] = useState(
    String(data.defaultPledgeRealizationPct)
  );

  const [pledges, setPledges] = useState<PledgeItem[]>(DEFAULT_PLEDGES);
  const [loadedPledges, setLoadedPledges] = useState(false);
  const [contributorName, setContributorName] = useState("");
  const [contributorAmt, setContributorAmt] = useState("");
  const [clearanceChecks, setClearanceChecks] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem(HARAMBEE_PLEDGES_KEY)
      .then((raw) => {
        if (!mounted) return;
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setPledges(parsed);
          } catch {}
        }
        setLoadedPledges(true);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loadedPledges) return;
    AsyncStorage.setItem(HARAMBEE_PLEDGES_KEY, JSON.stringify(pledges)).catch(() => {});
  }, [pledges, loadedPledges]);

  const addPledge = useCallback(() => {
    const amt = parseIntClean(contributorAmt);
    if (!contributorName.trim() || amt <= 0) return;
    triggerHaptic(8);
    setPledges((prev) => [
      { id: `p-${Date.now()}`, name: contributorName.trim(), amount: amt, paid: false },
      ...prev,
    ]);
    setContributorName("");
    setContributorAmt("");
  }, [contributorName, contributorAmt]);

  const tier = useMemo(
    () => data.costTiers.find((t) => t.id === tierId) ?? data.costTiers[1],
    [tierId, data.costTiers]
  );

  const calc = useMemo(() => {
    const days = Math.max(1, parseIntClean(morgueDaysInput) || 1);
    const key = ageGroup === "adult" ? "adultKes" : "childKes";
    let baseMorgue = 0;
    let extraDays = 0;
    let penaltyMorgue = 0;

    if (days <= 1) {
      baseMorgue = data.morgueRates.transit0To24h[key];
    } else if (days <= 10) {
      baseMorgue = data.morgueRates.days1To10Flat[key];
    } else {
      baseMorgue = data.morgueRates.days1To10Flat[key];
      extraDays = days - 10;
      penaltyMorgue = extraDays * data.morgueRates.day11PlusPerDay[key];
    }

    const postmortem = includePostmortem ? data.morgueRates.privatePostmortemKes : 0;
    const morgueTotal = baseMorgue + penaltyMorgue + postmortem;
    const funeralItemsTotal =
      tier.coffinKes +
      tier.hearseKes +
      tier.tentsChairsKes +
      tier.cateringKes +
      tier.paProgrammesFlowersKes;
    const totalBudget = morgueTotal + funeralItemsTotal;

    const realPct = Math.min(100, Math.max(0, parseNum(realizationInput)));
    const totalPledged = pledges.reduce((s, p) => s + p.amount, 0);
    const totalPaid = pledges.reduce((s, p) => s + (p.paid ? p.amount : 0), 0);
    const pendingPledges = totalPledged - totalPaid;
    const projectedCash = totalPaid + Math.round(pendingPledges * (realPct / 100));
    const fundingGap = Math.max(0, totalBudget - projectedCash);
    const surplus = Math.max(0, projectedCash - totalBudget);

    return {
      days,
      baseMorgue,
      extraDays,
      penaltyMorgue,
      postmortem,
      morgueTotal,
      totalBudget,
      totalPledged,
      totalPaid,
      pendingPledges,
      projectedCash,
      fundingGap,
      surplus,
    };
  }, [morgueDaysInput, ageGroup, includePostmortem, tier, realizationInput, pledges, data.morgueRates]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Funeral Cost Tier</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.costTiers.map((t) => {
          const active = t.id === tierId;
          return (
            <Pressable
              key={t.id}
              onPress={() => {
                triggerHaptic(6);
                setTierId(t.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{t.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Category</Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {(["adult", "child"] as const).map((g) => (
              <Pressable
                key={g}
                onPress={() => {
                  triggerHaptic(6);
                  setAgeGroup(g);
                }}
                style={[
                  styles.chipBtn,
                  ageGroup === g && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
                ]}
              >
                <Text style={[styles.chipBtnText, ageGroup === g && { color: theme.gold }]}>
                  {g === "adult" ? "Adult" : "Child"}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Morgue Days</Text>
          <TextInput
            value={morgueDaysInput}
            onChangeText={(t) => setMorgueDaysInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Pledge Realiz. %</Text>
          <TextInput
            value={realizationInput}
            onChangeText={(t) => setRealizationInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <Pressable
        onPress={() => {
          triggerHaptic(6);
          setIncludePostmortem((p) => !p);
        }}
        style={[cardBase, styles.card]}
      >
        <View style={styles.rowBetween}>
          <View style={[styles.checkRow, styles.flexTitle]}>
            <ThemedIcon
              name={includePostmortem ? "checkbox" : "square-outline"}
              size={18}
              color={includePostmortem ? theme.kenyaGreenLight : theme.textMuted}
            />
            <Text style={styles.rowLabel}>Private Postmortem Fee</Text>
          </View>
          <Text style={styles.amountText}>
            {includePostmortem ? fmtKes(data.morgueRates.privatePostmortemKes) : "KES 0"}
          </Text>
        </View>
      </Pressable>

      <View style={styles.kpiRow}>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>TOTAL FUNERAL BUDGET</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>{fmtKes(calc.totalBudget)}</Text>
          <Text style={styles.kpiSub}>Morgue: {fmtKes(calc.morgueTotal)}</Text>
        </View>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            {
              borderColor:
                calc.fundingGap > 0 ? `${theme.kenyaRedLight}66` : `${theme.kenyaGreenLight}66`,
              backgroundColor:
                calc.fundingGap > 0 ? `${theme.kenyaRedLight}16` : `${theme.kenyaGreenLight}16`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>
            {calc.fundingGap > 0 ? "PROJECTED SHORTFALL" : "BUDGET COVERED"}
          </Text>
          <Text
            style={[
              styles.kpiValue,
              { color: calc.fundingGap > 0 ? theme.kenyaRedLight : theme.kenyaGreenLight },
            ]}
          >
            {calc.fundingGap > 0 ? fmtKes(calc.fundingGap) : `+${fmtKes(calc.surplus)}`}
          </Text>
          <Text style={styles.kpiSub}>Projected Cash: {fmtKes(calc.projectedCash)}</Text>
        </View>
      </View>

      {calc.extraDays > 0 && (
        <View style={[cardBase, styles.card, { borderColor: warnBorder, backgroundColor: warnBg }]}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardTitle, styles.flexTitle, { color: warnColor }]}>
              Day 11+ Morgue Penalty Active (+{calc.extraDays} extra days)
            </Text>
            <Text style={[styles.amountText, { color: warnColor }]}>
              +{fmtKes(calc.penaltyMorgue)}
            </Text>
          </View>
          <Text style={styles.cardSub}>
            Days 1–10 flat tariff is {fmtKes(calc.baseMorgue)}. Day 11+ incurs{" "}
            {fmtKes(
              ageGroup === "adult"
                ? data.morgueRates.day11PlusPerDay.adultKes
                : data.morgueRates.day11PlusPerDay.childKes
            )}
            /day.
          </Text>
        </View>
      )}

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Itemized Budget ({tier.label})</Text>
        <View style={styles.listGap}>
          {[
            { label: `Morgue (${calc.days} days)`, val: calc.morgueTotal },
            { label: "Coffin / Casket", val: tier.coffinKes },
            { label: "Hearse & Transport", val: tier.hearseKes },
            { label: "Tents & Chairs", val: tier.tentsChairsKes },
            { label: "Catering & Refreshments", val: tier.cateringKes },
            { label: "PA System, Programmes & Flowers", val: tier.paProgrammesFlowersKes },
          ].map((row) => (
            <View key={row.label} style={styles.rowBetween}>
              <Text style={[styles.cardSub, styles.flexTitle]}>{row.label}</Text>
              <Text style={styles.rowLabel}>{fmtKes(row.val)}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>Harambee Pledge Tracker (Saved)</Text>
          <Text style={styles.cardSub}>
            Paid {fmtKes(calc.totalPaid)} / {fmtKes(calc.totalPledged)}
          </Text>
        </View>

        <View style={[styles.inputRow, { marginTop: 8 }]}>
          <TextInput
            value={contributorName}
            onChangeText={setContributorName}
            placeholder="Contributor / Group"
            placeholderTextColor={theme.textMuted}
            style={[inputBase, styles.input, { flex: 1.4, minWidth: 120 }]}
          />
          <TextInput
            value={contributorAmt}
            onChangeText={(t) => setContributorAmt(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            placeholder="KES"
            placeholderTextColor={theme.textMuted}
            style={[inputBase, styles.input, { flex: 1, minWidth: 80 }]}
          />
          <Pressable onPress={addPledge} style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Add</Text>
          </Pressable>
        </View>

        <View style={styles.listGap}>
          {pledges.map((p) => (
            <View key={p.id} style={[styles.subRow, { borderColor: theme.border }]}>
              <View style={styles.flexTitle}>
                <Text style={styles.rowLabel}>{p.name}</Text>
                <Text
                  style={[
                    styles.cardSub,
                    { color: p.paid ? theme.kenyaGreenLight : warnColor },
                  ]}
                >
                  {p.paid ? "Paid (100%)" : `Pending (${realizationInput}% est.)`}
                </Text>
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
                <Text style={styles.amountText}>{fmtKes(p.amount)}</Text>
                <Pressable
                  onPress={() => {
                    triggerHaptic(6);
                    setPledges((prev) =>
                      prev.map((x) => (x.id === p.id ? { ...x, paid: !x.paid } : x))
                    );
                  }}
                  style={styles.chipBtn}
                >
                  <Text style={styles.chipBtnText}>{p.paid ? "Mark Pending" : "Mark Paid"}</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    triggerHaptic(6);
                    setPledges((prev) => prev.filter((x) => x.id !== p.id));
                  }}
                >
                  <ThemedIcon name="trash-outline" size={16} color={theme.kenyaRedLight} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Burial Clearance Checklist</Text>
        <View style={styles.listGap}>
          {data.burialChecklist.map((item, idx) => {
            const checked = Boolean(clearanceChecks[idx]);
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setClearanceChecks((p) => ({ ...p, [idx]: !p[idx] }));
                }}
                style={styles.checkRow}
              >
                <ThemedIcon
                  name={checked ? "checkbox" : "square-outline"}
                  size={18}
                  color={checked ? theme.kenyaGreenLight : theme.textMuted}
                />
                <Text style={styles.checkText}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

function createStyles(theme: ThemeColors) {
  return StyleSheet.create({
    wrap: { gap: 12 },
    sectionLabel: {
      fontSize: 11,
      fontWeight: "800",
      color: theme.textMuted,
      textTransform: "uppercase",
      letterSpacing: 0.4,
    },
    label: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.textMuted,
      marginBottom: 4,
      textTransform: "uppercase",
    },
    pillRow: { flexDirection: "row", alignItems: "center", gap: 6 },
    pillBtn: {
      paddingHorizontal: 11,
      paddingVertical: 7,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.bgElevated,
    },
    pillText: { fontSize: 11.5, fontWeight: "700", color: theme.textSecondary },
    inputRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, alignItems: "flex-end" },
    inputCol: { flexGrow: 1, flexBasis: "45%", minWidth: 130 },
    inputColSmall: { flexGrow: 1, flexBasis: "22%", minWidth: 74 },
    input: {
      color: theme.text,
      paddingHorizontal: 11,
      paddingVertical: 9,
      fontSize: 13,
      fontWeight: "600",
    },
    miniInput: {
      color: theme.text,
      paddingHorizontal: 8,
      paddingVertical: 6,
      fontSize: 13,
      fontWeight: "700",
      width: 52,
      textAlign: "center",
    },
    primaryBtn: {
      backgroundColor: theme.gold,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 12,
    },
    primaryBtnText: { color: "#000", fontWeight: "800", fontSize: 12.5 },
    kpiRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
    kpiCard: { flexGrow: 1, flexBasis: "45%", minWidth: 140, padding: 12 },
    kpiLabel: { fontSize: 10, fontWeight: "800", color: theme.textMuted, letterSpacing: 0.4 },
    kpiValue: { fontSize: 16, fontWeight: "900", color: theme.text, marginTop: 4 },
    kpiSub: { fontSize: 11, color: theme.textSecondary, marginTop: 2 },
    card: { padding: 12 },
    rowBetween: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    flexTitle: { flexShrink: 1, minWidth: 130 },
    cardTitle: { fontSize: 13.5, fontWeight: "800", color: theme.text },
    cardSub: { fontSize: 11.5, color: theme.textSecondary, marginTop: 2 },
    rowLabel: { fontSize: 12.5, fontWeight: "700", color: theme.text },
    amountText: { fontSize: 13, fontWeight: "800", color: theme.gold },
    smallAlert: { fontSize: 11, fontWeight: "700", marginTop: 2 },
    listGap: { marginTop: 10, gap: 8 },
    subRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      paddingTop: 8,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    badge: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 999,
      borderWidth: 1,
    },
    badgeText: { fontSize: 10.5, fontWeight: "800" },
    checkRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
    checkText: { flex: 1, fontSize: 12, color: theme.text, lineHeight: 17 },
    chipBtn: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.bgElevated,
    },
    chipBtnText: { fontSize: 11, fontWeight: "700", color: theme.textSecondary },
  });
}
