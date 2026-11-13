import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import stampData from "../../shared/data/stamp-duty-rates.json";

/** 6. Stamp Duty Calculator (mirrors kenyahub/src/app/tools/stamp-duty-calculator/page.tsx) */
function calcConveyancing(value: number) {
  let totalFee = 0;
  const breakdown: { band: string; amount: number }[] = [];
  let remaining = value;

  for (const band of stampData.conveyancingFees) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandMin = band.min;
    const taxableInBand = Math.min(remaining, bandMin === 0 ? bandMax : bandMax - bandMin + 1);
    if (taxableInBand > 0) {
      const fee = Math.round(taxableInBand * (band.rate / 100));
      totalFee += fee;
      breakdown.push({ band: band.label, amount: fee });
    }
    remaining -= taxableInBand;
  }

  const minFee = stampData.conveyancingFees[0]?.minimumFee ?? 0;
  if (totalFee < minFee && value > 0) totalFee = minFee;

  return { total: totalFee, breakdown };
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
    const conveyancing = calcConveyancing(value);
    const registrationFee = stampData.otherCosts.registrationFee;
    const searchFee = stampData.otherCosts.searchFee;
    const consent = stampData.otherCosts.consentToTransfer;
    const total =
      stampDuty + conveyancing.total + registrationFee + searchFee + consent;
    const percentOfValue =
      value > 0 ? Math.round((total / value) * 10000) / 100 : 0;

    return {
      rate,
      stampDuty,
      conveyancing: conveyancing.total,
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
          }}
        >
          First-time home buyer under Affordable Housing scheme (AHF Stamp Duty Exempt)
        </Text>
      </Pressable>

      <StatCard
        label="TOTAL PROPERTY TRANSFER COST"
        value={`KES ${results.total.toLocaleString()}`}
        highlight
        subtext={`${results.percentOfValue}% of property value · Stamp Duty: KES ${results.stampDuty.toLocaleString()}`}
      />

      <Text style={styles.subHeading}>Cost Breakdown</Text>
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
          label="LSK Conveyancing Legal Fees"
          value={`KES ${results.conveyancing.toLocaleString()}`}
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

