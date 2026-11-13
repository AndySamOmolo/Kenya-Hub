import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import waterData from "../../shared/data/water-tariffs.json";

/** 8. Water Bill Calculator (mirrors kenyahub/src/app/tools/water-bill-calculator/page.tsx) */
export function WaterBillCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [utilityId, setUtilityId] = useState("ncwsc");
  const [unitsText, setUnitsText] = useState("15");
  const consumption = Math.max(0, Number(unitsText) || 0);

  const calc = useMemo(() => {
    const utility =
      waterData.utilities.find((u) => u.id === utilityId) ||
      waterData.utilities[0];
    let waterCharge = 0;
    const breakdown: {
      band: string;
      units: number;
      rate: number;
      amount: number;
    }[] = [];
    let remaining = consumption;

    for (const band of utility.bands) {
      if (remaining <= 0) break;
      const bandMax = band.max ?? Infinity;
      const bandSize =
        band.max !== null
          ? bandMax - (band.min === 0 ? 0 : band.min - 1)
          : Infinity;
      const unitsInBand = Math.min(remaining, bandSize);
      const amount = Math.round(unitsInBand * band.rate);
      waterCharge += amount;
      breakdown.push({
        band: band.label,
        units: unitsInBand,
        rate: band.rate,
        amount,
      });
      remaining -= unitsInBand;
    }

    const sewerageCharge = Math.round(waterCharge * utility.sewerageRate);
    const meterRent = utility.meterRent;
    const total = waterCharge + sewerageCharge + meterRent;

    return {
      utility,
      waterCharge,
      sewerageCharge,
      meterRent,
      total,
      breakdown,
    };
  }, [utilityId, consumption]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.inputLabel}>Select Water Utility</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {waterData.utilities.map((u) => (
          <Pressable
            key={u.id}
            onPress={() => setUtilityId(u.id)}
            style={[
              styles.pillBtn,
              utilityId === u.id && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                utilityId === u.id && styles.pillBtnTextActive,
              ]}
            >
              {u.city}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>
          Monthly Water Consumption (Cubic Meters / m³)
        </Text>
        <TextInput
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          keyboardType="numeric"
          value={unitsText === "0" ? "" : unitsText}
          onChangeText={(txt) => {
            const cleaned = txt.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
            setUnitsText(cleaned === "0" ? "" : cleaned);
          }}
          placeholder="0"
          placeholderTextColor={theme.textMuted}
          style={[
            styles.textInput,
            {
              backgroundColor: theme.bgCard,
              borderWidth: 1,
              borderColor: theme.border,
              borderRadius: 12,
            },
          ]}
        />
      </View>

      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {[6, 10, 15, 25, 40, 60].map((m3) => (
          <Pressable
            key={m3}
            onPress={() => setUnitsText(String(m3))}
            style={[
              styles.pillBtn,
              consumption === m3 && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                consumption === m3 && styles.pillBtnTextActive,
              ]}
            >
              {m3} m³
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <StatCard
        label="ESTIMATED MONTHLY WATER BILL"
        value={`KES ${calc.total.toLocaleString()}`}
        highlight
        subtext={`${calc.utility.name} · ${consumption} m³ consumed`}
      />

      <Text style={styles.subHeading}>Bill Breakdown</Text>
      <View style={styles.card}>
        {calc.breakdown.map((b, i) => (
          <Row
            key={i}
            label={`${b.band} (${b.units} m³ × KES ${b.rate}/m³)`}
            value={`KES ${b.amount.toLocaleString()}`}
          />
        ))}
        <Row
          label="Water Consumption Charge"
          value={`KES ${calc.waterCharge.toLocaleString()}`}
        />
        <Row
          label={`Sewerage Charge (${Math.round(
            calc.utility.sewerageRate * 100
          )}%)`}
          value={`KES ${calc.sewerageCharge.toLocaleString()}`}
        />
        <Row
          label="Monthly Meter Rent"
          value={`KES ${calc.meterRent.toLocaleString()}`}
        />
        <Row
          label="Total Monthly Bill"
          value={`KES ${calc.total.toLocaleString()}`}
          isTotal
        />
      </View>
    </View>
  );
}

