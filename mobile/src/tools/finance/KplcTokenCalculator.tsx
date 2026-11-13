import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import kplcData from "../../shared/data/kplc-tariff.json";

/** 3. KPLC Token Calculator (mirrors kenyahub/src/app/tools/kplc-token-calculator/page.tsx) */
export function KplcTokenCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [amountText, setAmountText] = useState("1000");
  const amountPaid = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const result = useMemo(() => {
    const fixedCharge = kplcData.fixedCharge ?? 0;
    const vatRate = (kplcData.levies.vat || 16) / 100;
    const fixedChargeWithVat = fixedCharge * (1 + vatRate);

    const levyPerUnit =
      (kplcData.levies.repLevy || 0) +
      (kplcData.levies.refLevy || 0) +
      (kplcData.levies.epraLevy || 0) +
      (kplcData.levies.warcLevy || 0);
    const fccPerUnit = kplcData.fuelCostCharge.rate;
    const ferfa = kplcData.forexAdjustment.rate;

    const amountForUnits = Math.max(0, amountPaid - fixedChargeWithVat);

    let remainingAmount = amountForUnits;
    let totalUnits = 0;
    const breakdown: {
      band: string;
      units: number;
      rate: number;
      cost: number;
    }[] = [];

    for (const band of kplcData.energyBands || []) {
      if (remainingAmount <= 0) break;
      const bandMax = band.max ?? 100000;
      const bandMin = band.min;
      const bandCapacity = bandMin === 0 ? bandMax : bandMax - bandMin + 1;

      const unitCostBeforeVat = band.rate + levyPerUnit + fccPerUnit + ferfa;
      const unitCostWithVat = unitCostBeforeVat * (1 + vatRate);

      const maxUnitsInBand = Math.min(
        bandCapacity,
        Math.floor(remainingAmount / unitCostWithVat)
      );
      const costForBand = maxUnitsInBand * unitCostWithVat;

      if (maxUnitsInBand > 0) {
        breakdown.push({
          band: band.label,
          units: maxUnitsInBand,
          rate: band.rate,
          cost: Math.round(costForBand * 100) / 100,
        });
        totalUnits += maxUnitsInBand;
        remainingAmount -= costForBand;
      }
    }

    const totalEnergyCost = breakdown.reduce(
      (sum, b) => sum + b.units * b.rate,
      0
    );
    const totalLevies = totalUnits * levyPerUnit;
    const totalFCC = totalUnits * (fccPerUnit + ferfa);
    const totalVAT =
      (totalEnergyCost + totalLevies + totalFCC) * vatRate +
      fixedCharge * vatRate;

    return {
      totalUnits,
      fixedCharge,
      fixedChargeVat: Math.round(fixedCharge * vatRate * 100) / 100,
      totalEnergyCost: Math.round(totalEnergyCost * 100) / 100,
      totalLevies: Math.round(totalLevies * 100) / 100,
      totalFCC: Math.round(totalFCC * 100) / 100,
      totalVAT: Math.round(totalVAT * 100) / 100,
      breakdown,
      effectiveCostPerUnit:
        totalUnits > 0 ? Math.round((amountPaid / totalUnits) * 100) / 100 : 0,
    };
  }, [amountPaid]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Amount to Purchase (KES)"
        value={amountText}
        onChangeText={setAmountText}
      />

      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {[500, 1000, 2000, 3500, 5000, 10000].map((amt) => (
          <Pressable
            key={amt}
            onPress={() => setAmountText(String(amt))}
            style={[
              styles.pillBtn,
              amountPaid === amt && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                amountPaid === amt && styles.pillBtnTextActive,
              ]}
            >
              KES {amt.toLocaleString()}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <StatCard
        label="UNITS YOU WILL RECEIVE"
        value={`${result.totalUnits.toLocaleString()} kWh`}
        highlight
        subtext={
          result.totalUnits > 0
            ? `KES ${result.effectiveCostPerUnit.toFixed(2)} effective cost/unit · EPRA 2023–2026 Domestic Tariffs`
            : "Enter an amount to calculate KPLC prepaid units"
        }
      />

      <Text style={styles.subHeading}>Where Your Money Goes</Text>
      <View style={styles.card}>
        {result.fixedCharge > 0 && (
          <Row
            label="Fixed Standing Charge (Monthly)"
            value={`KES ${result.fixedCharge.toFixed(2)}`}
          />
        )}
        <Row
          label={`Base Energy Charges (${result.totalUnits} kWh)`}
          value={`KES ${result.totalEnergyCost.toFixed(2)}`}
        />
        <Row
          label="Levies & Inflation Adj. (REP + IA + EPRA + WRA)"
          value={`KES ${result.totalLevies.toFixed(2)}`}
        />
        <Row
          label="Fuel Cost + Forex Adjustment (FCC + FERFA)"
          value={`KES ${result.totalFCC.toFixed(2)}`}
        />
        <Row
          label="16% Value Added Tax (VAT)"
          value={`KES ${result.totalVAT.toFixed(2)}`}
          isDeduction
        />
        <Row
          label="Total Units Received"
          value={`${result.totalUnits} kWh`}
          isTotal
        />
      </View>

      {result.breakdown.length > 0 && (
        <>
          <Text style={styles.subHeading}>Tariff Band Breakdown</Text>
          <View style={styles.card}>
            {result.breakdown.map((b, i) => (
              <Row
                key={i}
                label={`${b.band} (${b.units} kWh)`}
                value={`KES ${b.rate.toFixed(2)}/kWh`}
              />
            ))}
          </View>
        </>
      )}

      <Text style={styles.subHeading}>KPLC Domestic Tariff Bands</Text>
      <View style={styles.card}>
        {kplcData.energyBands.map((band, i) => (
          <Row
            key={i}
            label={band.label}
            value={`KES ${band.rate.toFixed(2)} / kWh`}
          />
        ))}
        <Row
          label="Fuel Cost Charge (FCC)"
          value={`KES ${kplcData.fuelCostCharge.rate.toFixed(2)} / kWh`}
        />
        <Row
          label="Forex Adjustment (FERFA)"
          value={`KES ${kplcData.forexAdjustment.rate.toFixed(2)} / kWh`}
        />
      </View>
    </View>
  );
}

