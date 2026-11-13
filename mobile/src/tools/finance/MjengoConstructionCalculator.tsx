import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import mjengoData from "../../shared/data/mjengo-construction-rates.json";

/** 10. Mjengo Construction & Building Material Calculator */
export function MjengoConstructionCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [sqmText, setSqmText] = useState("130");
  const [regionId, setRegionId] = useState(mjengoData.regions[0].id);
  const [finishId, setFinishId] = useState(mjengoData.finishTiers[1].id);

  const region = mjengoData.regions.find((r) => r.id === regionId) || mjengoData.regions[0];
  const finish = mjengoData.finishTiers.find((f) => f.id === finishId) || mjengoData.finishTiers[1];
  const sqm = Math.max(15, Number(sqmText.replace(/,/g, "")) || 130);

  const calc = useMemo(() => {
    const ratePerSqm = finish.costPerSqm * region.multiplier;
    const totalCost = sqm * ratePerSqm;
    const stones = Math.ceil(sqm * 2.55 * 13.5);
    const cement = Math.ceil(sqm * 4.4);
    const sand = Math.ceil(sqm * 0.58);
    const ballast = Math.ceil(sqm * 0.48);
    const steel = Math.ceil(sqm * 0.85);
    const mabati = Math.ceil((sqm * 1.38) / 2.4);
    return { ratePerSqm, totalCost, stones, cement, sand, ballast, steel, mabati };
  }, [sqm, region, finish]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.inputLabel}>House Size Presets</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {mjengoData.housePresets.map((p) => (
          <Pressable
            key={p.id}
            onPress={() => setSqmText(String(p.sqm))}
            style={[styles.pillBtn, sqm === p.sqm && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, sqm === p.sqm && styles.pillBtnTextActive]}>
              {p.name} ({p.sqm}m²)
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput
        label="Custom Plinth / Floor Area (Square Meters — m²)"
        value={sqmText}
        onChangeText={setSqmText}
        prefix="m²"
        placeholder="130"
      />

      <Text style={styles.inputLabel}>Region & Quarry Zone</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {mjengoData.regions.map((r) => (
          <Pressable
            key={r.id}
            onPress={() => setRegionId(r.id)}
            style={[styles.pillBtn, regionId === r.id && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, regionId === r.id && styles.pillBtnTextActive]}>
              {r.name.split("(")[0].trim()}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <Text style={styles.inputLabel}>Finish Tier</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {mjengoData.finishTiers.map((f) => (
          <Pressable
            key={f.id}
            onPress={() => setFinishId(f.id)}
            style={[styles.pillBtn, finishId === f.id && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, finishId === f.id && styles.pillBtnTextActive]}>
              {f.name.split("(")[0].trim()}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <StatCard
        label="ESTIMATED TOTAL MJENGO COST"
        value={`KES ${Math.round(calc.totalCost).toLocaleString()}`}
        highlight
        subtext={`${sqm} m² @ KES ${Math.round(calc.ratePerSqm).toLocaleString()}/m²`}
      />

      <Text style={styles.subHeading}>Key Materials Estimate (Bill of Quantities)</Text>
      <View style={styles.card}>
        <Row label="9×9 Machine-Cut Quarry Stones" value={`${calc.stones.toLocaleString()} pcs`} />
        <Row label="50kg Cement Bags (32.5R / 42.5N)" value={`${calc.cement.toLocaleString()} bags`} />
        <Row label="Clean River Sand" value={`${calc.sand} tonnes`} />
        <Row label="Crushed Ballast" value={`${calc.ballast} tonnes`} />
        <Row label="High-Tensile Steel Bars (D12/D16)" value={`${calc.steel} lengths`} />
        <Row label="28-Gauge Mabati Sheets (3m)" value={`${calc.mabati} sheets`} isTotal />
      </View>
    </View>
  );
}

