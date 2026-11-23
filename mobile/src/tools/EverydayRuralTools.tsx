import React, { useDeferredValue, useState, useMemo } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
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

function parseIsoDate(iso: string): Date | null {
  const m = iso.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  return Number.isNaN(d.getTime()) ? null : d;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date.getTime());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date.getTime());
  d.setUTCMonth(d.getUTCMonth() + months);
  return d;
}

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function useRuralToolTheme() {
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
// 1. 47-County Rainwater Harvesting & Tank Sizer
// ============================================================================
type RoofType = keyof typeof everydayData.rainwater.roofRunoffCoefficients;

export function RainwaterTankSizerTool() {
  const { theme, cardBase, inputBase, styles } = useRuralToolTheme();
  const data = everydayData.rainwater;

  const [countySearch, setCountySearch] = useState("");
  const deferredCountySearch = useDeferredValue(countySearch);
  const [countyCode, setCountyCode] = useState(47); // Nairobi default
  const [roofType, setRoofType] = useState<RoofType>("mabati");
  const [roofAreaInput, setRoofAreaInput] = useState("100");
  const [householdInput, setHouseholdInput] = useState("5");
  const [litresPerPersonInput, setLitresPerPersonInput] = useState("40");

  const filteredCounties = useMemo(() => {
    const q = deferredCountySearch.trim().toLowerCase();
    if (!q) return data.counties;
    return data.counties.filter(
      (c) => c.name.toLowerCase().includes(q) || String(c.code) === q
    );
  }, [deferredCountySearch, data.counties]);

  const county = useMemo(
    () => data.counties.find((c) => c.code === countyCode) ?? data.counties[46],
    [countyCode, data.counties]
  );

  const calc = useMemo(() => {
    const area = Math.max(1, parseNum(roofAreaInput));
    const people = Math.max(1, parseIntClean(householdInput));
    const lpp = Math.max(5, parseIntClean(litresPerPersonInput));
    const coeff = data.roofRunoffCoefficients[roofType];
    const netFactor = coeff * (1 - data.firstFlushLossPct / 100);

    const mamLitres = Math.round(area * county.mamMm * netFactor);
    const ondLitres = Math.round(area * county.ondMm * netFactor);
    const annualLitres = Math.round(area * county.annualMm * netFactor);

    const dailyDemandL = people * lpp;
    const drySpellDemandL = dailyDemandL * county.drySpellDays;
    const targetStorageL = Math.min(drySpellDemandL, Math.max(mamLitres, ondLitres));

    const recommendedTank =
      data.tankBenchmarks.find((t) => t.litres >= targetStorageL) ??
      data.tankBenchmarks[data.tankBenchmarks.length - 1];
    const tankUnits = Math.max(1, Math.ceil(targetStorageL / recommendedTank.litres));
    const estimatedBudgetKes = tankUnits * recommendedTank.priceKes;

    return {
      coeff,
      mamLitres,
      ondLitres,
      annualLitres,
      dailyDemandL,
      drySpellDemandL,
      targetStorageL,
      recommendedTank,
      tankUnits,
      estimatedBudgetKes,
    };
  }, [roofAreaInput, householdInput, litresPerPersonInput, roofType, county, data]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Select Kenyan County (All 47 Counties)</Text>
      <TextInput
        value={countySearch}
        onChangeText={setCountySearch}
        placeholder="Search county (e.g. Kiambu, Kisumu)..."
        placeholderTextColor={theme.textMuted}
        style={[inputBase, styles.input]}
      />
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {filteredCounties.map((c) => {
          const active = c.code === countyCode;
          return (
            <Pressable
              key={c.code}
              onPress={() => {
                triggerHaptic(6);
                setCountyCode(c.code);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {c.name} ({c.annualMm}mm)
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={styles.sectionLabel}>Roof Material (Runoff Coefficient)</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "mabati", label: "Mabati (0.90)" },
            { id: "tile", label: "Clay/Stone Tile (0.85)" },
            { id: "concrete", label: "Concrete (0.80)" },
            { id: "thatch", label: "Thatch (0.25)" },
          ] as const
        ).map((r) => {
          const active = roofType === r.id;
          return (
            <Pressable
              key={r.id}
              onPress={() => {
                triggerHaptic(6);
                setRoofType(r.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{r.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Roof Area (m²)</Text>
          <TextInput
            value={roofAreaInput}
            onChangeText={(t) => setRoofAreaInput(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>People</Text>
          <TextInput
            value={householdInput}
            onChangeText={(t) => setHouseholdInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>L / Person / Day</Text>
          <TextInput
            value={litresPerPersonInput}
            onChangeText={(t) => setLitresPerPersonInput(t.replace(/[^0-9]/g, ""))}
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
            { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
          ]}
        >
          <Text style={styles.kpiLabel}>ANNUAL HARVESTABLE YIELD</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {calc.annualLitres.toLocaleString()} L
          </Text>
          <Text style={styles.kpiSub}>
            {county.name}: {county.annualMm} mm/yr (5% first-flush deducted)
          </Text>
        </View>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>RECOMMENDED TANK BUDGET</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {fmtKes(calc.estimatedBudgetKes)}
          </Text>
          <Text style={styles.kpiSub}>
            {calc.tankUnits}× {calc.recommendedTank.litres.toLocaleString()}L tank
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Seasonal Yield & Dry-Spell Buffer ({county.name})</Text>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              MAM Long Rains ({county.mamMm} mm)
            </Text>
            <Text style={styles.rowLabel}>{calc.mamLitres.toLocaleString()} L</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              OND Short Rains ({county.ondMm} mm)
            </Text>
            <Text style={styles.rowLabel}>{calc.ondLitres.toLocaleString()} L</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Dry-Spell Need ({county.drySpellDays} days × {calc.dailyDemandL} L/day)
            </Text>
            <Text style={styles.amountText}>{calc.drySpellDemandL.toLocaleString()} L</Text>
          </View>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>2026 Retail Tank Benchmarks</Text>
        <View style={styles.listGap}>
          {data.tankBenchmarks.map((t) => {
            const isRec = t.litres === calc.recommendedTank.litres;
            const daysLast = Math.floor(t.litres / Math.max(1, calc.dailyDemandL));
            return (
              <View
                key={t.litres}
                style={[
                  styles.subRow,
                  { borderColor: isRec ? `${theme.gold}88` : theme.border },
                ]}
              >
                <View style={styles.flexTitle}>
                  <View style={styles.rowBetween}>
                    <Text style={[styles.rowLabel, styles.flexTitle]}>
                      {t.litres.toLocaleString()} Litres Tank
                    </Text>
                    {isRec && (
                      <View
                        style={[
                          styles.badge,
                          { borderColor: theme.gold, backgroundColor: `${theme.gold}1A` },
                        ]}
                      >
                        <Text style={[styles.badgeText, { color: theme.gold }]}>BEST FIT</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.cardSub}>
                    Covers ~{daysLast} dry days • KES {(t.priceKes / t.litres).toFixed(2)}/L
                  </Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(t.priceKes)}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 2. NFSP Fertilizer & Seed Break-Even Calculator
// ============================================================================
export function FertilizerSeedBreakevenTool() {
  const { theme, cardBase, inputBase, styles } = useRuralToolTheme();
  const data = everydayData.fertilizerSeed;

  const [cropId, setCropId] = useState(data.crops[0].id);
  const [acresInput, setAcresInput] = useState("2");
  const [channel, setChannel] = useState<"evoucher" | "commercial">("evoucher");
  const [priceInput, setPriceInput] = useState(String(data.crops[0].defaultFarmgatePriceKes));

  const crop = useMemo(
    () => data.crops.find((c) => c.id === cropId) ?? data.crops[0],
    [cropId, data.crops]
  );

  const selectCrop = (id: string) => {
    const found = data.crops.find((c) => c.id === id);
    if (!found) return;
    triggerHaptic(6);
    setCropId(found.id);
    setPriceInput(String(found.defaultFarmgatePriceKes));
  };

  const calc = useMemo(() => {
    const acres = Math.max(0.25, parseNum(acresInput));
    const sellingPrice = Math.max(1, parseNum(priceInput));

    const seedKg = acres * crop.seedKgPerAcre;
    const seedCost = Math.round(seedKg * crop.seedPricePerKgKes);

    const plantBags = acres * crop.plantingBagsPerAcre;
    const topBags = acres * crop.topDressBagsPerAcre;
    const totalBags = plantBags + topBags;

    const plantCommRate =
      crop.plantingFertType === "NPK"
        ? data.fertilizerPrices50kgKes.commercialNpk
        : data.fertilizerPrices50kgKes.commercialDap;
    const topCommRate =
      crop.topDressFertType === "CAN" ? data.fertilizerPrices50kgKes.commercialCan : 0;

    const evoucherFertCost = Math.round(totalBags * data.fertilizerPrices50kgKes.evoucher);
    const commercialFertCost = Math.round(plantBags * plantCommRate + topBags * topCommRate);
    const subsidySavings = Math.max(0, commercialFertCost - evoucherFertCost);

    const otherCosts = Math.round(acres * crop.otherCostsPerAcreKes);
    const activeFertCost = channel === "evoucher" ? evoucherFertCost : commercialFertCost;
    const totalCost = seedCost + activeFertCost + otherCosts;
    const altTotalCost =
      seedCost + (channel === "evoucher" ? commercialFertCost : evoucherFertCost) + otherCosts;

    const breakEvenTotal = totalCost / sellingPrice;
    const breakEvenPerAcre = breakEvenTotal / acres;

    const scenarios = (["low", "avg", "high"] as const).map((tierKey) => {
      const yieldPerAcre = crop.yieldRange[tierKey];
      const totalUnits = yieldPerAcre * acres;
      const revenue = Math.round(totalUnits * sellingPrice);
      const netProfit = revenue - totalCost;
      return {
        key: tierKey,
        label: tierKey === "low" ? "Low Yield" : tierKey === "avg" ? "Average Yield" : "High Yield",
        yieldPerAcre,
        totalUnits,
        revenue,
        netProfit,
      };
    });

    return {
      acres,
      seedKg,
      seedCost,
      totalBags,
      evoucherFertCost,
      commercialFertCost,
      subsidySavings,
      otherCosts,
      activeFertCost,
      totalCost,
      altTotalCost,
      breakEvenTotal,
      breakEvenPerAcre,
      scenarios,
    };
  }, [acresInput, priceInput, crop, channel, data.fertilizerPrices50kgKes]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Crop & KALRO Spacing</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.crops.map((c) => {
          const active = c.id === cropId;
          return (
            <Pressable
              key={c.id}
              onPress={() => selectCrop(c.id)}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {c.label.split("(")[0].trim()}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={styles.sectionLabel}>Fertilizer Purchase Channel</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "evoucher", label: "NFSP e-Voucher (KES 2,500/bag)" },
            { id: "commercial", label: "Commercial Agrovet Price" },
          ] as const
        ).map((ch) => {
          const active = channel === ch.id;
          return (
            <Pressable
              key={ch.id}
              onPress={() => {
                triggerHaptic(6);
                setChannel(ch.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{ch.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Farm Area (Acres)</Text>
          <TextInput
            value={acresInput}
            onChangeText={(t) => setAcresInput(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Farmgate Price / {crop.unitLabel}</Text>
          <TextInput
            value={priceInput}
            onChangeText={(t) => setPriceInput(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.kpiRow}>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>BREAK-EVEN YIELD</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {calc.breakEvenPerAcre.toFixed(1)} {crop.unitLabel}/ac
          </Text>
          <Text style={styles.kpiSub}>
            Total: {calc.breakEvenTotal.toFixed(1)} {crop.unitLabel}s
          </Text>
        </View>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
          ]}
        >
          <Text style={styles.kpiLabel}>NFSP E-VOUCHER SAVING</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {fmtKes(calc.subsidySavings)}
          </Text>
          <Text style={styles.kpiSub}>
            vs Commercial ({calc.totalBags.toFixed(1)} × 50kg bags)
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.cardTitle, styles.flexTitle]}>{crop.label}</Text>
          <View style={[styles.badge, { borderColor: theme.gold, backgroundColor: `${theme.gold}1A` }]}>
            <Text style={[styles.badgeText, { color: theme.gold }]}>Spacing: {crop.spacing}</Text>
          </View>
        </View>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Certified Seed ({calc.seedKg.toFixed(1)} kg)
            </Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.seedCost)}</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Fertilizer ({crop.plantingFertType}
              {crop.topDressFertType !== "None" ? ` + ${crop.topDressFertType}` : ""})
            </Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.activeFertCost)}</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Land Prep, Weeding & Harvesting
            </Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.otherCosts)}</Text>
          </View>
          <View style={[styles.subRow, { borderColor: theme.border }]}>
            <Text style={[styles.rowLabel, styles.flexTitle]}>
              Total Season Cost ({channel === "evoucher" ? "e-Voucher" : "Commercial"})
            </Text>
            <Text style={styles.amountText}>{fmtKes(calc.totalCost)}</Text>
          </View>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Harvest Profit Scenarios ({calc.acres} acres)</Text>
        <View style={styles.listGap}>
          {calc.scenarios.map((s) => (
            <View key={s.key} style={[styles.subRow, { borderColor: theme.border }]}>
              <View style={styles.flexTitle}>
                <Text style={styles.rowLabel}>
                  {s.label} ({s.yieldPerAcre} {crop.unitLabel}/ac)
                </Text>
                <Text style={styles.cardSub}>
                  Gross Revenue: {fmtKes(s.revenue)} ({s.totalUnits.toLocaleString()} {crop.unitLabel}s)
                </Text>
              </View>
              <Text
                style={[
                  styles.amountText,
                  { color: s.netProfit >= 0 ? theme.kenyaGreenLight : theme.kenyaRedLight },
                ]}
              >
                {s.netProfit >= 0 ? `+${fmtKes(s.netProfit)}` : fmtKes(s.netProfit)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 3. KALRO Dairy Ration & KES/Litre Margin Calculator
// ============================================================================
export function DairyRationMarginTool() {
  const { theme, cardBase, inputBase, styles } = useRuralToolTheme();
  const data = everydayData.dairyRation;

  const [breedId, setBreedId] = useState(data.breeds[0].id);
  const [cowsInput, setCowsInput] = useState("2");
  const [yieldInput, setYieldInput] = useState(String(data.breeds[0].typicalYieldL));
  const [payoutInput, setPayoutInput] = useState(String(data.milkPayoutBenchmarkKesPerL));
  const [dairyMealKg, setDairyMealKg] = useState(4);
  const [useSilage, setUseSilage] = useState(true);

  const breed = useMemo(
    () => data.breeds.find((b) => b.id === breedId) ?? data.breeds[0],
    [breedId, data.breeds]
  );

  const selectBreed = (id: string) => {
    const found = data.breeds.find((b) => b.id === id);
    if (!found) return;
    triggerHaptic(6);
    setBreedId(found.id);
    setYieldInput(String(found.typicalYieldL));
  };

  const calc = useMemo(() => {
    const cows = Math.max(1, parseIntClean(cowsInput));
    const yieldL = Math.max(1, parseNum(yieldInput));
    const payout = Math.max(1, parseNum(payoutInput));

    const baseForageCost = breed.dailyForageKg * data.forageCostPerKgKes;
    const silageSavingPerCowDay = useSilage ? baseForageCost * data.silageSavingsFactor : 0;
    const forageCost = baseForageCost - silageSavingPerCowDay;
    const mealCost = dairyMealKg * data.dairyMealPricePerKgKes;
    const mineralCost = data.mineralSaltCostPerDayKes;

    const dailyFeedPerCow = forageCost + mealCost + mineralCost;
    const dailyRevPerCow = yieldL * payout;
    const dailyMarginPerCow = dailyRevPerCow - dailyFeedPerCow;

    const feedCostPerLitre = dailyFeedPerCow / yieldL;
    const marginPerLitre = dailyMarginPerCow / yieldL;

    const herdDailyMilk = cows * yieldL;
    const herdMonthlyMargin = Math.round(dailyMarginPerCow * cows * 30);
    const herdMonthlySilageSavings = Math.round(silageSavingPerCowDay * cows * 30);

    return {
      cows,
      yieldL,
      forageCost,
      mealCost,
      mineralCost,
      dailyFeedPerCow,
      dailyRevPerCow,
      dailyMarginPerCow,
      feedCostPerLitre,
      marginPerLitre,
      herdDailyMilk,
      herdMonthlyMargin,
      herdMonthlySilageSavings,
    };
  }, [cowsInput, yieldInput, payoutInput, dairyMealKg, useSilage, breed, data]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Dairy Breed (KALRO Baseline)</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.breeds.map((b) => {
          const active = b.id === breedId;
          return (
            <Pressable
              key={b.id}
              onPress={() => selectBreed(b.id)}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>
                {b.label} ({b.typicalYieldL}L/d)
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <Text style={styles.sectionLabel}>Dairy Meal Ration (kg / cow / day @ KES 45/kg)</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {data.dairyMealTiersKg.map((kg) => {
          const active = kg === dairyMealKg;
          return (
            <Pressable
              key={kg}
              onPress={() => {
                triggerHaptic(6);
                setDairyMealKg(kg);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{kg} kg</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.inputRow}>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Milking Cows</Text>
          <TextInput
            value={cowsInput}
            onChangeText={(t) => setCowsInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Yield (L/Cow)</Text>
          <TextInput
            value={yieldInput}
            onChangeText={(t) => setYieldInput(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Payout (KES/L)</Text>
          <TextInput
            value={payoutInput}
            onChangeText={(t) => setPayoutInput(t.replace(/[^0-9.]/g, ""))}
            keyboardType="decimal-pad"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <Pressable
        onPress={() => {
          triggerHaptic(6);
          setUseSilage((p) => !p);
        }}
        style={[cardBase, styles.card]}
      >
        <View style={styles.rowBetween}>
          <View style={[styles.checkRow, styles.flexTitle]}>
            <ThemedIcon
              name={useSilage ? "checkbox" : "square-outline"}
              size={18}
              color={useSilage ? theme.kenyaGreenLight : theme.textMuted}
            />
            <Text style={styles.rowLabel}>Home-Grown Maize Silage (-25% forage cost)</Text>
          </View>
          <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>
            {useSilage ? `Saves ${fmtKes(calc.herdMonthlySilageSavings)}/mo` : "Off"}
          </Text>
        </View>
      </Pressable>

      <View style={styles.kpiRow}>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            {
              borderColor:
                calc.marginPerLitre >= 0 ? `${theme.kenyaGreenLight}66` : `${theme.kenyaRedLight}66`,
              backgroundColor:
                calc.marginPerLitre >= 0 ? `${theme.kenyaGreenLight}16` : `${theme.kenyaRedLight}16`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>NET MARGIN PER LITRE</Text>
          <Text
            style={[
              styles.kpiValue,
              { color: calc.marginPerLitre >= 0 ? theme.kenyaGreenLight : theme.kenyaRedLight },
            ]}
          >
            KES {calc.marginPerLitre.toFixed(1)}/L
          </Text>
          <Text style={styles.kpiSub}>
            Feed Cost: KES {calc.feedCostPerLitre.toFixed(1)}/L
          </Text>
        </View>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>HERD MONTHLY NET</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {fmtKes(calc.herdMonthlyMargin)}
          </Text>
          <Text style={styles.kpiSub}>
            {calc.herdDailyMilk.toFixed(1)} L/day ({calc.cows} cows)
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>
          KALRO Daily Ration Plan ({breed.label}, ~{breed.bodyWeightKg} kg)
        </Text>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Fresh Forage / Napier ({breed.dailyForageKg} kg/cow)
            </Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.forageCost)}/day</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>
              Dairy Meal Concentrate ({dairyMealKg} kg/cow)
            </Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.mealCost)}/day</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Mineral Salt / Lick</Text>
            <Text style={styles.rowLabel}>{fmtKes(calc.mineralCost)}/day</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Clean Drinking Water Target</Text>
            <Text style={[styles.rowLabel, { color: theme.gold }]}>{breed.dailyWaterL} L/cow/day</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 4. Agricultural Land Subdivision Planner (Cap 302 LCB 6-Month Countdown)
// ============================================================================
export function LandSubdivisionPlannerTool() {
  const { theme, cardBase, inputBase, styles, warnColor, warnBorder, warnBg } = useRuralToolTheme();
  const data = everydayData.landSubdivision;

  const [agreementDate, setAgreementDate] = useState("2026-10-01");
  const [plotsInput, setPlotsInput] = useState("4");
  const [lcbRoute, setLcbRoute] = useState<"regular" | "special">("regular");
  const [includeSurveyor, setIncludeSurveyor] = useState(true);
  const [stepsDone, setStepsDone] = useState<Record<number, boolean>>({ 0: true });

  const calc = useMemo(() => {
    const plots = Math.max(2, parseIntClean(plotsInput));
    const parsed = parseIsoDate(agreementDate);
    const now = new Date();
    const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

    let deadlineStr = "Invalid date (YYYY-MM-DD)";
    let daysLeft: number | null = null;
    if (parsed) {
      const deadline = addDays(parsed, data.lcbVoidCliffDays);
      deadlineStr = fmtDate(deadline);
      daysLeft = Math.ceil((deadline.getTime() - todayUtc.getTime()) / 86_400_000);
    }

    const lcbFee =
      lcbRoute === "regular" ? data.fees.regularLcbKes : data.fees.specialLcbKes;
    const lcbDays =
      lcbRoute === "regular" ? data.fees.regularLcbDays : data.fees.specialLcbDays;
    const newTitlesFee = plots * data.fees.newTitlePerPlotKes;
    const statutoryTotal =
      data.fees.officialSearchKes +
      data.fees.mapSearchKes +
      lcbFee +
      data.fees.mutationRimMinKes +
      newTitlesFee;
    const surveyorEst = includeSurveyor ? plots * data.fees.licensedSurveyorPerPlotEstimateKes : 0;
    const grandTotal = statutoryTotal + surveyorEst;

    return {
      plots,
      deadlineStr,
      daysLeft,
      lcbFee,
      lcbDays,
      newTitlesFee,
      statutoryTotal,
      surveyorEst,
      grandTotal,
    };
  }, [agreementDate, plotsInput, lcbRoute, includeSurveyor, data]);

  const isExpired = calc.daysLeft !== null && calc.daysLeft < 0;
  const isUrgent = calc.daysLeft !== null && calc.daysLeft >= 0 && calc.daysLeft <= 30;

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>LCB Consent Route ({data.statute})</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "regular", label: "Regular LCB (KES 3,000 • ~30d)" },
            { id: "special", label: "Special LCB (KES 10,000 • ~2d)" },
          ] as const
        ).map((opt) => {
          const active = lcbRoute === opt.id;
          return (
            <Pressable
              key={opt.id}
              onPress={() => {
                triggerHaptic(6);
                setLcbRoute(opt.id);
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
          <Text style={styles.label}>Agreement Date (YYYY-MM-DD)</Text>
          <TextInput
            value={agreementDate}
            onChangeText={setAgreementDate}
            placeholder="2026-10-01"
            placeholderTextColor={theme.textMuted}
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Resulting Plots</Text>
          <TextInput
            value={plotsInput}
            onChangeText={(t) => setPlotsInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <Pressable
        onPress={() => {
          triggerHaptic(6);
          setIncludeSurveyor((p) => !p);
        }}
        style={[cardBase, styles.card]}
      >
        <View style={styles.rowBetween}>
          <View style={[styles.checkRow, styles.flexTitle]}>
            <ThemedIcon
              name={includeSurveyor ? "checkbox" : "square-outline"}
              size={18}
              color={includeSurveyor ? theme.kenyaGreenLight : theme.textMuted}
            />
            <Text style={styles.rowLabel}>Include Licensed Surveyor Estimate (KES 12,000/plot)</Text>
          </View>
          <Text style={styles.amountText}>{fmtKes(calc.surveyorEst)}</Text>
        </View>
      </Pressable>

      <View style={styles.kpiRow}>
        <View
          style={[
            cardBase,
            styles.kpiCard,
            isExpired
              ? { borderColor: `${theme.kenyaRedLight}66`, backgroundColor: `${theme.kenyaRedLight}16` }
              : isUrgent
              ? { borderColor: warnBorder, backgroundColor: warnBg }
              : { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
          ]}
        >
          <Text style={styles.kpiLabel}>CAP 302 6-MONTH VOID CLIFF</Text>
          <Text
            style={[
              styles.kpiValue,
              {
                color: isExpired
                  ? theme.kenyaRedLight
                  : isUrgent
                  ? warnColor
                  : theme.kenyaGreenLight,
              },
            ]}
          >
            {calc.daysLeft === null
              ? "Check Date"
              : isExpired
              ? `VOID (${Math.abs(calc.daysLeft)}d past)`
              : `${calc.daysLeft} days left`}
          </Text>
          <Text style={styles.kpiSub}>Deadline: {calc.deadlineStr}</Text>
        </View>

        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>EST. TOTAL BUDGET</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>{fmtKes(calc.grandTotal)}</Text>
          <Text style={styles.kpiSub}>Statutory: {fmtKes(calc.statutoryTotal)}</Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Ministry of Lands Charter Fee Breakdown</Text>
        <View style={styles.listGap}>
          {[
            { label: "Official Title Search", val: data.fees.officialSearchKes },
            { label: "Registry Index Map (RIM) Search", val: data.fees.mapSearchKes },
            {
              label: `LCB Consent (${lcbRoute === "regular" ? "Regular" : "Special"} • ~${calc.lcbDays}d)`,
              val: calc.lcbFee,
            },
            { label: "Mutation & RIM Amendment (Min)", val: data.fees.mutationRimMinKes },
            { label: `New Title Deeds (${calc.plots} × KES 3,500)`, val: calc.newTitlesFee },
            ...(includeSurveyor
              ? [{ label: `Licensed Surveyor (${calc.plots} plots)`, val: calc.surveyorEst }]
              : []),
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
          <Text style={[styles.cardTitle, styles.flexTitle]}>Subdivision Compliance Checklist</Text>
          <Text style={styles.cardSub}>
            {Object.values(stepsDone).filter(Boolean).length}/{data.checklist.length} done
          </Text>
        </View>
        <View style={styles.listGap}>
          {data.checklist.map((step, idx) => {
            const done = Boolean(stepsDone[idx]);
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(6);
                  setStepsDone((p) => ({ ...p, [idx]: !p[idx] }));
                }}
                style={styles.checkRow}
              >
                <ThemedIcon
                  name={done ? "checkbox" : "square-outline"}
                  size={18}
                  color={done ? theme.kenyaGreenLight : theme.textMuted}
                />
                <Text style={styles.checkText}>{step}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 5. Biogas Digester Sizer & Fuel Payback Calculator
// ============================================================================
export function BiogasDigesterSizerTool() {
  const { theme, cardBase, inputBase, styles } = useRuralToolTheme();
  const data = everydayData.biogas;

  const [cowsInput, setCowsInput] = useState("3");
  const [peopleInput, setPeopleInput] = useState("5");
  const [mealsInput, setMealsInput] = useState("3");
  const [fuelSpendInput, setFuelSpendInput] = useState("4500");

  const calc = useMemo(() => {
    const cows = Math.max(1, parseIntClean(cowsInput));
    const people = Math.max(1, parseIntClean(peopleInput));
    const meals = Math.max(1, parseIntClean(mealsInput));
    const monthlySpend = parseIntClean(fuelSpendInput);

    const dungKgPerDay = cows * data.dungPerCowKgPerDay;
    const dailyGasM3 = cows * data.gasPerCowPerDayM3;
    const dailyGasLitres = dailyGasM3 * 1000;

    const dailyDemandM3 = (people * meals * data.biogasLitresPerPersonPerMeal) / 1000;
    const coveragePct = Math.min(100, Math.round((dailyGasM3 / Math.max(0.01, dailyDemandM3)) * 100));

    const firewoodSavedKgDay = dailyGasLitres / data.biogasLitresPerKgFirewood;
    const charcoalSavedKgDay = dailyGasLitres / data.biogasLitresPerKgCharcoal;

    const recommendedKit =
      data.prefabKits.find((k) => cows <= k.maxCows) ??
      data.prefabKits[data.prefabKits.length - 1];

    const effectiveMonthlySavings = Math.round(monthlySpend * (coveragePct / 100));
    const paybackMonths =
      effectiveMonthlySavings > 0 ? recommendedKit.priceKes / effectiveMonthlySavings : null;

    return {
      cows,
      dungKgPerDay,
      dailyGasM3,
      dailyDemandM3,
      coveragePct,
      firewoodSavedKgDay,
      charcoalSavedKgDay,
      recommendedKit,
      effectiveMonthlySavings,
      paybackMonths,
    };
  }, [cowsInput, peopleInput, mealsInput, fuelSpendInput, data]);

  return (
    <View style={styles.wrap}>
      <View style={styles.inputRow}>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Zero-Grazed Cows</Text>
          <TextInput
            value={cowsInput}
            onChangeText={(t) => setCowsInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>People</Text>
          <TextInput
            value={peopleInput}
            onChangeText={(t) => setPeopleInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
        <View style={styles.inputColSmall}>
          <Text style={styles.label}>Meals/Day</Text>
          <TextInput
            value={mealsInput}
            onChangeText={(t) => setMealsInput(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            style={[inputBase, styles.input]}
          />
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputCol}>
          <Text style={styles.label}>Current Monthly Cooking Fuel Spend (KES)</Text>
          <TextInput
            value={fuelSpendInput}
            onChangeText={(t) => setFuelSpendInput(t.replace(/[^0-9]/g, ""))}
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
            { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
          ]}
        >
          <Text style={styles.kpiLabel}>DAILY BIOGAS OUTPUT</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {calc.dailyGasM3.toFixed(1)} m³/day
          </Text>
          <Text style={styles.kpiSub}>
            Covers {calc.coveragePct}% of {calc.dailyDemandM3.toFixed(2)} m³ need
          </Text>
        </View>
        <View style={[cardBase, styles.kpiCard]}>
          <Text style={styles.kpiLabel}>EST. KIT PAYBACK</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {calc.paybackMonths !== null ? `${calc.paybackMonths.toFixed(1)} months` : "N/A"}
          </Text>
          <Text style={styles.kpiSub}>
            Saves ~{fmtKes(calc.effectiveMonthlySavings)}/mo
          </Text>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Daily Feedstock & Fuel Offset</Text>
        <View style={styles.listGap}>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Fresh Cow Dung Input</Text>
            <Text style={styles.rowLabel}>{calc.dungKgPerDay} kg/day (+ 1:1 water)</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Firewood Displaced</Text>
            <Text style={styles.rowLabel}>{calc.firewoodSavedKgDay.toFixed(1)} kg/day</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={[styles.cardSub, styles.flexTitle]}>Charcoal Displaced</Text>
            <Text style={styles.rowLabel}>{calc.charcoalSavedKgDay.toFixed(1)} kg/day</Text>
          </View>
        </View>
      </View>

      <View style={[cardBase, styles.card]}>
        <Text style={styles.cardTitle}>Prefab Digester Kits (Kenya 2026 Benchmarks)</Text>
        <View style={styles.listGap}>
          {data.prefabKits.map((kit) => {
            const isRec = kit.id === calc.recommendedKit.id;
            return (
              <View
                key={kit.id}
                style={[
                  styles.subRow,
                  { borderColor: isRec ? `${theme.gold}88` : theme.border },
                ]}
              >
                <View style={styles.flexTitle}>
                  <View style={styles.rowBetween}>
                    <Text style={[styles.rowLabel, styles.flexTitle]}>
                      {kit.sizeM3} m³ Digester ({kit.minCows}–{kit.maxCows} cows)
                    </Text>
                    {isRec && (
                      <View
                        style={[
                          styles.badge,
                          { borderColor: theme.gold, backgroundColor: `${theme.gold}1A` },
                        ]}
                      >
                        <Text style={[styles.badgeText, { color: theme.gold }]}>RECOMMENDED</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.cardSub}>
                    Up to {kit.dailyGasM3} m³/day • Fits {kit.householdFit}
                  </Text>
                </View>
                <Text style={styles.amountText}>{fmtKes(kit.priceKes)}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 6. Livestock Gestation & KEVEVAPI / DVS Vaccination Calendar
// ============================================================================
type SpeciesKey = "cattle" | "goat" | "sheep" | "pig" | "poultry";

export function LivestockVaccineCalendarTool() {
  const { theme, cardBase, inputBase, styles, warnColor } = useRuralToolTheme();
  const data = everydayData.livestockCalendar;

  const [species, setSpecies] = useState<SpeciesKey>("cattle");
  const [serviceDate, setServiceDate] = useState("2026-10-15");
  const [lastVaccDate, setLastVaccDate] = useState("2026-09-01");
  const [hatchDate, setHatchDate] = useState("2026-11-10");

  const calc = useMemo(() => {
    const now = new Date();
    const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

    if (species === "poultry") {
      const hDate = parseIsoDate(hatchDate);
      const schedule = data.poultrySchedule.map((item) => {
        if (!hDate) {
          return { ...item, dueDateStr: "Invalid date", daysDiff: null as number | null };
        }
        const due = addDays(hDate, item.day - 1);
        const diff = Math.ceil((due.getTime() - todayUtc.getTime()) / 86_400_000);
        return { ...item, dueDateStr: fmtDate(due), daysDiff: diff };
      });
      const nextDose = schedule.find((s) => s.daysDiff !== null && s.daysDiff >= 0) ?? null;
      return { isPoultry: true as const, schedule, nextDose };
    }

    const gestDays = data.gestationDays[species];
    const sDate = parseIsoDate(serviceDate);
    const vDate = parseIsoDate(lastVaccDate);

    const birthDate = sDate ? addDays(sDate, gestDays) : null;
    const daysToBirth = birthDate
      ? Math.ceil((birthDate.getTime() - todayUtc.getTime()) / 86_400_000)
      : null;
    const dryOffDate = species === "cattle" && birthDate ? addDays(birthDate, -60) : null;

    const vaccines = data.ruminantVaccines
      .filter((v) => v.species.includes(species))
      .map((v) => {
        if (v.intervalMonths === 0) {
          return { ...v, nextDateStr: "Lifelong (One-Time ITM)", status: "once" as const };
        }
        if (!vDate) {
          return { ...v, nextDateStr: "Enter valid date", status: "unknown" as const };
        }
        const next = addMonths(vDate, v.intervalMonths);
        const diff = Math.ceil((next.getTime() - todayUtc.getTime()) / 86_400_000);
        const status = diff < 0 ? ("overdue" as const) : diff <= 14 ? ("soon" as const) : ("ok" as const);
        return { ...v, nextDateStr: fmtDate(next), status, diff };
      });

    return {
      isPoultry: false as const,
      gestDays,
      birthDateStr: birthDate ? fmtDate(birthDate) : "Invalid date",
      daysToBirth,
      dryOffStr: dryOffDate ? fmtDate(dryOffDate) : null,
      vaccines,
    };
  }, [species, serviceDate, lastVaccDate, hatchDate, data]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionLabel}>Livestock Species ({data.source})</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillRow}>
        {(
          [
            { id: "cattle", label: "Cattle (283d)" },
            { id: "goat", label: "Goat (150d)" },
            { id: "sheep", label: "Sheep (150d)" },
            { id: "pig", label: "Pig (114d)" },
            { id: "poultry", label: "Poultry (Day 1–Wk 16)" },
          ] as const
        ).map((sp) => {
          const active = species === sp.id;
          return (
            <Pressable
              key={sp.id}
              onPress={() => {
                triggerHaptic(6);
                setSpecies(sp.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && { borderColor: theme.gold, backgroundColor: `${theme.gold}22` },
              ])}
            >
              <Text style={[styles.pillText, active && { color: theme.gold }]}>{sp.label}</Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {calc.isPoultry ? (
        <>
          <View style={styles.inputRow}>
            <View style={styles.inputCol}>
              <Text style={styles.label}>Chick Hatch / Arrival Date (YYYY-MM-DD)</Text>
              <TextInput
                value={hatchDate}
                onChangeText={setHatchDate}
                placeholder="2026-11-10"
                placeholderTextColor={theme.textMuted}
                style={[inputBase, styles.input]}
              />
            </View>
          </View>

          <View style={styles.kpiRow}>
            <View style={[cardBase, styles.kpiCard]}>
              <Text style={styles.kpiLabel}>NEXT POULTRY VACCINE</Text>
              <Text style={[styles.kpiValue, { color: theme.gold }]}>
                {calc.nextDose ? calc.nextDose.label : "Schedule Complete"}
              </Text>
              <Text style={styles.kpiSub}>
                {calc.nextDose ? `${calc.nextDose.dueDateStr} • ${calc.nextDose.vaccine}` : "All 8 milestones passed"}
              </Text>
            </View>
          </View>

          <View style={[cardBase, styles.card]}>
            <Text style={styles.cardTitle}>KEVEVAPI / DVS Poultry Schedule</Text>
            <View style={styles.listGap}>
              {calc.schedule.map((item) => {
                const isPast = item.daysDiff !== null && item.daysDiff < 0;
                const isSoon = item.daysDiff !== null && item.daysDiff >= 0 && item.daysDiff <= 7;
                return (
                  <View key={item.day} style={[styles.subRow, { borderColor: theme.border }]}>
                    <View style={styles.flexTitle}>
                      <Text style={styles.rowLabel}>
                        {item.label}: {item.vaccine}
                      </Text>
                      <Text style={styles.cardSub}>Route: {item.route}</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text
                        style={[
                          styles.amountText,
                          {
                            color: isPast
                              ? theme.textMuted
                              : isSoon
                              ? warnColor
                              : theme.kenyaGreenLight,
                          },
                        ]}
                      >
                        {item.dueDateStr}
                      </Text>
                      {item.daysDiff !== null && (
                        <Text style={styles.cardSub}>
                          {isPast ? `${Math.abs(item.daysDiff)}d ago` : `In ${item.daysDiff}d`}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.inputRow}>
            <View style={styles.inputCol}>
              <Text style={styles.label}>Service / AI Date (YYYY-MM-DD)</Text>
              <TextInput
                value={serviceDate}
                onChangeText={setServiceDate}
                placeholder="2026-10-15"
                placeholderTextColor={theme.textMuted}
                style={[inputBase, styles.input]}
              />
            </View>
            <View style={styles.inputCol}>
              <Text style={styles.label}>Last Herd Vaccine (YYYY-MM-DD)</Text>
              <TextInput
                value={lastVaccDate}
                onChangeText={setLastVaccDate}
                placeholder="2026-09-01"
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
                { borderColor: `${theme.kenyaGreenLight}66`, backgroundColor: `${theme.kenyaGreenLight}16` },
              ]}
            >
              <Text style={styles.kpiLabel}>EXPECTED BIRTH DATE</Text>
              <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
                {calc.birthDateStr}
              </Text>
              <Text style={styles.kpiSub}>
                {calc.gestDays} days gestation
                {calc.daysToBirth !== null
                  ? calc.daysToBirth >= 0
                    ? ` • ${calc.daysToBirth}d left`
                    : ` • ${Math.abs(calc.daysToBirth)}d past`
                  : ""}
              </Text>
            </View>
            {calc.dryOffStr && (
              <View style={[cardBase, styles.kpiCard]}>
                <Text style={styles.kpiLabel}>COW DRY-OFF DATE</Text>
                <Text style={[styles.kpiValue, { color: theme.gold }]}>{calc.dryOffStr}</Text>
                <Text style={styles.kpiSub}>60 days before calving</Text>
              </View>
            )}
          </View>

          <View style={[cardBase, styles.card]}>
            <View style={styles.rowBetween}>
              <Text style={[styles.cardTitle, styles.flexTitle]}>
                KEVEVAPI / DVS Vaccine Reminders
              </Text>
              <ThemedIcon name="medkit-outline" size={16} color={theme.kenyaGreenLight} />
            </View>
            <View style={styles.listGap}>
              {calc.vaccines.map((v) => (
                <View key={v.id} style={[styles.subRow, { borderColor: theme.border }]}>
                  <View style={styles.flexTitle}>
                    <Text style={styles.rowLabel}>{v.name}</Text>
                    <Text style={styles.cardSub}>{v.notes}</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={[
                        styles.amountText,
                        {
                          color:
                            v.status === "overdue"
                              ? theme.kenyaRedLight
                              : v.status === "soon"
                              ? warnColor
                              : theme.kenyaGreenLight,
                        },
                      ]}
                    >
                      {v.nextDateStr}
                    </Text>
                    <Text style={styles.cardSub}>
                      {v.intervalMonths === 0 ? "Single dose" : `Every ${v.intervalMonths} mo`}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </>
      )}
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
    inputColSmall: { flexGrow: 1, flexBasis: "28%", minWidth: 88 },
    input: {
      color: theme.text,
      paddingHorizontal: 11,
      paddingVertical: 9,
      fontSize: 13,
      fontWeight: "600",
    },
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
  });
}
