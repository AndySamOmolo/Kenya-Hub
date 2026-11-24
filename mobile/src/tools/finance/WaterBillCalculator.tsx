import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { StatCard, Row, createStyles } from "./shared";
import waterData from "../../shared/data/water-tariffs.json";

const WASREB_REGULATORY_LEVY_RATE = 0.04; // 4% WASREB regulatory levy on water consumption

/** 8. Water Bill Calculator (mirrors kenyahub/src/app/tools/water-bill-calculator/page.tsx) */
export function WaterBillCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [utilityId, setUtilityId] = useState("ncwsc");
  const [unitsText, setUnitsText] = useState("15");
  const [connectedToSewer, setConnectedToSewer] = useState(true);
  const consumption = Math.max(0, Number(unitsText.replace(/,/g, "")) || 0);

  const calc = useMemo(() => {
    const rawUtility =
      waterData.utilities.find((u) => u.id === utilityId) ||
      waterData.utilities[0];

    const utility = rawUtility;

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

    const sewerageCharge = connectedToSewer
      ? Math.round(waterCharge * utility.sewerageRate)
      : 0;
    const meterRent = utility.meterRent;
    const wasrebLevy = Math.round((waterCharge + sewerageCharge) * WASREB_REGULATORY_LEVY_RATE);
    const total = waterCharge + sewerageCharge + meterRent + wasrebLevy;

    return {
      utility,
      waterCharge,
      sewerageCharge,
      meterRent,
      wasrebLevy,
      total,
      breakdown,
    };
  }, [utilityId, consumption, connectedToSewer]);

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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.bgCard,
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 12,
            paddingRight: 10,
          }}
        >
          <TextInput
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
            style={[styles.textInput, { flex: 1, minWidth: 0 }]}
          />
          {unitsText !== "" && unitsText !== "0" && (
            <Pressable
              onPress={() => setUnitsText("")}
              accessibilityRole="button"
              accessibilityLabel="Clear water consumption"
              hitSlop={8}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
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

      {/* County Sewer Line Toggle */}
      <Pressable
        onPress={() => setConnectedToSewer((v) => !v)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: connectedToSewer }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingVertical: 4,
        }}
      >
        <Ionicons
          name={connectedToSewer ? "checkbox" : "square-outline"}
          size={20}
          color={theme.gold}
        />
        <Text style={{ fontSize: 13, color: theme.textPrimary, fontWeight: "600", flex: 1 }}>
          Connected to County Sewer Line ({Math.round(calc.utility.sewerageRate * 100)}% sewerage charge)
        </Text>
      </Pressable>

      <StatCard
        label="ESTIMATED MONTHLY WATER BILL"
        value={`KES ${calc.total.toLocaleString()}`}
        highlight
        subtext={`${calc.utility.name} · ${consumption} m³ · Meter Rent KES ${calc.meterRent}`}
      />

      <Text style={styles.subHeading}>Bill Breakdown (WASREB Tariff)</Text>
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
          label={`Sewerage Charge (${connectedToSewer ? Math.round(calc.utility.sewerageRate * 100) : 0}%)`}
          value={`KES ${calc.sewerageCharge.toLocaleString()}`}
        />
        <Row
          label="Monthly Meter Rent (1/2-inch Domestic)"
          value={`KES ${calc.meterRent.toLocaleString()}`}
        />
        <Row
          label="WASREB Regulatory Levy (4%)"
          value={`KES ${calc.wasrebLevy.toLocaleString()}`}
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
