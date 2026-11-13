import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import insuranceData from "../../shared/data/vehicle-insurance-rates.json";

/** 7. Vehicle Insurance Calculator (mirrors kenyahub/src/app/tools/vehicle-insurance-calculator/page.tsx) */
export function VehicleInsuranceCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [vehicleClass, setVehicleClass] = useState("private");
  const [valText, setValText] = useState("1500000");
  const value = Math.max(0, Number(valText.replace(/,/g, "")) || 0);

  const selectedClass = useMemo(
    () =>
      insuranceData.vehicleClasses.find((c) => c.id === vehicleClass) ||
      insuranceData.vehicleClasses[0],
    [vehicleClass]
  );

  const results = useMemo(() => {
    const thirdPartyMin = selectedClass.thirdParty.minimumPremium;
    const compRateMin = selectedClass.comprehensive.rateMin;
    const compRateMax = selectedClass.comprehensive.rateMax;
    const compMin = Math.max(
      selectedClass.comprehensive.minimumPremium,
      Math.round(value * (compRateMin / 100))
    );
    const compMax = Math.max(
      selectedClass.comprehensive.minimumPremium,
      Math.round(value * (compRateMax / 100))
    );
    return {
      thirdPartyMin,
      compMin,
      compMax,
      compRateMin,
      compRateMax,
    };
  }, [selectedClass, value]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.inputLabel}>Vehicle Class</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {insuranceData.vehicleClasses.map((vc) => (
          <Pressable
            key={vc.id}
            onPress={() => setVehicleClass(vc.id)}
            style={[
              styles.pillBtn,
              vehicleClass === vc.id && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                vehicleClass === vc.id && styles.pillBtnTextActive,
              ]}
            >
              {vc.name}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>
      <Text style={styles.inputHint}>{selectedClass.description}</Text>

      <KESInput
        label="Vehicle Market Value (KES) — for Comprehensive Quote"
        value={valText}
        onChangeText={setValText}
      />

      <StatCard
        label="COMPREHENSIVE ANNUAL PREMIUM (ESTIMATE)"
        value={`KES ${results.compMin.toLocaleString()} – ${results.compMax.toLocaleString()}`}
        highlight
        subtext={`${results.compRateMin}%–${results.compRateMax}% of value · Third Party Minimum: KES ${results.thirdPartyMin.toLocaleString()}/yr`}
      />

      <Text style={styles.subHeading}>Coverage Comparison</Text>
      <View style={styles.card}>
        <Row
          label="Third Party Only (Minimum Legal)"
          value={`KES ${results.thirdPartyMin.toLocaleString()} / yr`}
          isPositive
        />
        <Row
          label="Comprehensive Estimate Range"
          value={`KES ${results.compMin.toLocaleString()} – ${results.compMax.toLocaleString()}`}
          isTotal
        />
        <Row label="Third party injury / death" value="✓ Both TPO & Comp." />
        <Row label="Third party property damage" value="✓ Both TPO & Comp." />
        <Row label="Own vehicle accident damage" value="✓ Comprehensive Only" />
        <Row label="Theft & fire protection" value="✓ Comprehensive Only" />
        <Row label="Windscreen cover" value="✓ Comprehensive Only" />
      </View>

      <Text style={styles.subHeading}>Optional Add-On Covers</Text>
      <View style={styles.card}>
        {insuranceData.additionalCovers.map((cover, idx) => (
          <View
            key={idx}
            style={{
              paddingVertical: 8,
              borderBottomWidth:
                idx === insuranceData.additionalCovers.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "700",
                  color: theme.textPrimary,
                }}
              >
                {cover.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "700",
                  color: theme.gold,
                }}
              >
                {cover.premium}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11.5,
                color: theme.textSecondary,
                marginTop: 2,
              }}
            >
              {cover.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

