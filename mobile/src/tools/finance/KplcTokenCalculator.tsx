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
  const [tariffMode, setTariffMode] = useState<"lifeline" | "ordinary" | "commercial">("lifeline");
  const amountPaid = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const result = useMemo(() => {
    const fixedCharge = kplcData.fixedCharge ?? 0;
    const vatRate = (kplcData.levies.vat || 16) / 100;
    const fixedChargeWithVat = fixedCharge * (1 + vatRate);

    const fccPerUnit = kplcData.fuelCostCharge.rate;
    const ferfa = kplcData.forexAdjustment.rate;
    const iaPerUnit = kplcData.levies.refLevy || 0;
    const epraLevy = kplcData.levies.epraLevy || 0;
    const wraLevy = kplcData.levies.warcLevy || 0;
    const repRate = (kplcData.levies as any).repLevyRate ?? 0.05;

    const amountForUnits = Math.max(0, amountPaid - fixedChargeWithVat);
    const bandIdx = tariffMode === "lifeline" ? 0 : tariffMode === "ordinary" ? 1 : 2;
    const selectedBand =
      (kplcData.energyBands || [])[bandIdx] ||
      (kplcData.energyBands || [])[0] || { label: "Domestic Lifeline", rate: 12.23 };
    const baseRate = selectedBand.rate;
    const repPerUnit = baseRate * repRate;

    // 16% VAT applies ONLY to Base Energy + FCC + FERFA + Inflation Adjustment
    const vatablePerUnit = baseRate + fccPerUnit + ferfa + iaPerUnit;
    const vatPerUnit = vatablePerUnit * vatRate;
    const exemptLeviesPerUnit = repPerUnit + epraLevy + wraLevy;
    const totalCostPerUnit = vatablePerUnit + vatPerUnit + exemptLeviesPerUnit;

    const rawUnits = totalCostPerUnit > 0 ? amountForUnits / totalCostPerUnit : 0;
    const totalUnits = Math.round(rawUnits * 100) / 100;
    const breakdown: {
      band: string;
      units: number;
      rate: number;
      cost: number;
    }[] =
      totalUnits > 0
        ? [
            {
              band: selectedBand.label,
              units: totalUnits,
              rate: baseRate,
              cost: Math.round(amountForUnits * 100) / 100,
            },
          ]
        : [];

    const totalEnergyCost = rawUnits * baseRate;
    const totalLevies = rawUnits * (exemptLeviesPerUnit + iaPerUnit);
    const totalFCC = rawUnits * (fccPerUnit + ferfa);
    const totalVAT = rawUnits * vatPerUnit;

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
  }, [amountPaid, tariffMode]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>EPRA Tariff Category</Text>
      <ExpandablePillRow style={{ marginBottom: 4 }}>
        {(
          [
            { id: "lifeline", label: "DC1 Lifeline" },
            { id: "ordinary", label: "DC2 Ordinary" },
            { id: "commercial", label: "SC1 Commercial" },
          ] as const
        ).map((t) => {
          const active = tariffMode === t.id;
          return (
            <Pressable
              key={t.id}
              onPress={() => setTariffMode(t.id)}
              style={[
                styles.presetChip,
                active && {
                  backgroundColor: theme.primaryContainer,
                  borderColor: theme.gold,
                },
              ]}
            >
              <Text
                style={[
                  styles.presetChipText,
                  active && { color: theme.gold, fontFamily: "Outfit_700Bold" },
                ]}
              >
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <KESInput
        label="Amount to Purchase (KES)"
        value={amountText}
        onChangeText={setAmountText}
      />

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

