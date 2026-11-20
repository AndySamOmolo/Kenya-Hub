import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import stampData from "../../shared/data/stamp-duty-rates.json";

const VAT_RATE = 0.16;

// Advocates (Remuneration) (Amendment) Order 2014 — Schedule 1 (Scale 1: Sales & Purchases)
// On KES 5,000,000: 1M @ 2.0% (20,000) + 4M @ 1.75% (70,000) = KES 90,000 (+ 16% VAT = KES 104,400)
const ARO_2014_SCALE_1 = [
  { min: 0, max: 1_000_000, rate: 2.0, label: "Up to KES 1M (2.0%)" },
  { min: 1_000_001, max: 5_000_000, rate: 1.75, label: "KES 1M – 5M (1.75%)" },
  { min: 5_000_001, max: 20_000_000, rate: 1.5, label: "KES 5M – 20M (1.5%)" },
  { min: 20_000_001, max: 100_000_000, rate: 1.25, label: "KES 20M – 100M (1.25%)" },
  { min: 100_000_001, max: Infinity, rate: 1.0, label: "Above KES 100M (1.0%)" },
];
const ARO_2014_MIN_FEE = 35_000;

/** 6. Stamp Duty Calculator (mirrors kenyahub/src/app/tools/stamp-duty-calculator/page.tsx) */
function calcConveyancingAro2014(value: number) {
  let totalFee = 0;
  const breakdown: { band: string; amount: number }[] = [];
  let remaining = value;

  for (const band of ARO_2014_SCALE_1) {
    if (remaining <= 0) break;
    const width =
      band.max === Infinity
        ? Infinity
        : band.min === 0
        ? band.max
        : band.max - band.min + 1;
    const taxableInBand = Math.min(remaining, width);
    if (taxableInBand > 0) {
      const fee = Math.round(taxableInBand * (band.rate / 100));
      totalFee += fee;
      breakdown.push({ band: band.label, amount: fee });
    }
    remaining -= taxableInBand;
  }

  if (totalFee < ARO_2014_MIN_FEE && value > 0) {
    totalFee = ARO_2014_MIN_FEE;
  }

  const vat = Math.round(totalFee * VAT_RATE);
  return { baseFee: totalFee, vat, totalWithVat: totalFee + vat, breakdown };
}

export function StampDutyCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [valueText, setValueText] = useState("5000000");
  const [isUrban, setIsUrban] = useState(true);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);
  const value = Math.max(0, Number(valueText.replace(/,/g, "")) || 0);

  const results = useMemo(() => {
    const rate = isFirstTimeBuyer
      ? 0
      : isUrban
      ? stampData.stampDuty.urban
      : stampData.stampDuty.rural;
    const stampDuty = Math.round(value * (rate / 100));
    const conveyancing = calcConveyancingAro2014(value);
    const registrationFee = stampData.otherCosts.registrationFee;
    const searchFee = stampData.otherCosts.searchFee;
    const consent = stampData.otherCosts.consentToTransfer;
    const total =
      stampDuty +
      conveyancing.totalWithVat +
      registrationFee +
      searchFee +
      consent;
    const percentOfValue =
      value > 0 ? Math.round((total / value) * 10000) / 100 : 0;

    return {
      rate,
      stampDuty,
      conveyancingBase: conveyancing.baseFee,
      conveyancingVat: conveyancing.vat,
      conveyancingTotal: conveyancing.totalWithVat,
      conveyancingBreakdown: conveyancing.breakdown,
      registrationFee,
      searchFee,
      consent,
      total,
      percentOfValue,
    };
  }, [value, isUrban, isFirstTimeBuyer]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Property Value (KES)"
        value={valueText}
        onChangeText={setValueText}
      />

      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        <Pressable
          onPress={() => setIsUrban(true)}
          style={[styles.pillBtn, isUrban && styles.pillBtnActive]}
        >
          <Text
            style={[styles.pillBtnText, isUrban && styles.pillBtnTextActive]}
          >
            Urban / Municipality (4%)
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIsUrban(false)}
          style={[styles.pillBtn, !isUrban && styles.pillBtnActive]}
        >
          <Text
            style={[styles.pillBtnText, !isUrban && styles.pillBtnTextActive]}
          >
            Rural Land (2%)
          </Text>
        </Pressable>
      </ExpandablePillRow>

      {/* First-Time Buyer Exemption Toggle */}
      <Pressable
        onPress={() => setIsFirstTimeBuyer(!isFirstTimeBuyer)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingVertical: 6,
        }}
      >
        <Ionicons
          name={isFirstTimeBuyer ? "checkbox" : "square-outline"}
          size={20}
          color={theme.gold}
        />
        <Text
          style={{
            fontSize: 13,
            color: theme.textPrimary,
            fontWeight: "600",
            flex: 1,
          }}
        >
          First-time home buyer under Affordable Housing scheme (AHF Stamp Duty Exempt)
        </Text>
      </Pressable>

      <StatCard
        label="TOTAL PROPERTY TRANSFER COST"
        value={`KES ${results.total.toLocaleString()}`}
        highlight
        subtext={`${results.percentOfValue}% of value · Stamp Duty: KES ${results.stampDuty.toLocaleString()} · Legal + VAT: KES ${results.conveyancingTotal.toLocaleString()}`}
      />

      <Text style={styles.subHeading}>Cost Breakdown (ARO 2014 Scale 1 + 16% VAT)</Text>
      <View style={styles.card}>
        <Row
          label="Declared Property Value"
          value={`KES ${value.toLocaleString()}`}
        />
        <Row
          label={`Stamp Duty (${results.rate}%)${
            isFirstTimeBuyer ? " — AHF EXEMPT" : ""
          }`}
          value={`KES ${results.stampDuty.toLocaleString()}`}
          isPositive={isFirstTimeBuyer}
        />
        <Row
          label="LSK Conveyancing Legal Fees (ARO 2014 Scale 1)"
          value={`KES ${results.conveyancingBase.toLocaleString()}`}
        />
        <Row
          label="16% VAT on Legal Fees"
          value={`KES ${results.conveyancingVat.toLocaleString()}`}
        />
        <Row
          label="Total Legal Fees (incl. 16% VAT)"
          value={`KES ${results.conveyancingTotal.toLocaleString()}`}
        />
        <Row
          label="Land Registry Registration Fee"
          value={`KES ${results.registrationFee.toLocaleString()}`}
        />
        <Row
          label="Official Land Search Fee"
          value={`KES ${results.searchFee.toLocaleString()}`}
        />
        <Row
          label="Consent to Transfer Fee"
          value={`KES ${results.consent.toLocaleString()}`}
        />
        <Row
          label="Total Transfer Cost"
          value={`KES ${results.total.toLocaleString()}`}
          isTotal
        />
      </View>
    </View>
  );
}
