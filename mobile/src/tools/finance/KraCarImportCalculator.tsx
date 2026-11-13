import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import crspData from "../../shared/data/kra-car-import-crsp.json";

/** 9. KRA Car Import Duty & CRSP Calculator */
export function KraCarImportCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedModelId, setSelectedModelId] = useState(crspData.popularModels[0].id);
  const [ageIndex, setAgeIndex] = useState(7);
  const [cifUsdText, setCifUsdText] = useState(String(crspData.popularModels[0].avgCifUsd));

  const preset = useMemo(
    () => crspData.popularModels.find((m) => m.id === selectedModelId) || crspData.popularModels[0],
    [selectedModelId]
  );

  const calc = useMemo(() => {
    const crsp = preset.crspKes;
    const cc = preset.cc;
    const fuel = preset.fuel;
    const depBand = crspData.depreciationBands[ageIndex] || crspData.depreciationBands[7];
    const depRate = depBand.rate;

    let exciseRate = crspData.rates.exciseSmallPetrol;
    if (fuel === "petrol")
      exciseRate = cc > 1500 ? crspData.rates.exciseLargePetrol : crspData.rates.exciseSmallPetrol;
    else if (fuel === "diesel")
      exciseRate = cc > 2500 ? crspData.rates.exciseLargeDiesel : crspData.rates.exciseSmallDiesel;

    const taxMult =
      (1 + crspData.rates.importDuty) * (1 + exciseRate) * (1 + crspData.rates.vat) +
      crspData.rates.idf +
      crspData.rates.rdl;
    const customsValue = (crsp / (taxMult * 1.08)) * (1 - depRate);
    const importDuty = customsValue * crspData.rates.importDuty;
    const exciseDuty = (customsValue + importDuty) * exciseRate;
    const vat = (customsValue + importDuty + exciseDuty) * crspData.rates.vat;
    const idf = customsValue * crspData.rates.idf;
    const rdl = customsValue * crspData.rates.rdl;
    const totalKraDuty = importDuty + exciseDuty + vat + idf + rdl;
    const ntsaFee =
      (crspData.ntsaRegistration.find((r) => cc <= r.maxCc) || crspData.ntsaRegistration[5]).fee;
    const portAndKebs = crspData.rates.kebsInspectionKes + crspData.rates.portClearingKes;
    const cifKes = (Math.max(0, Number(cifUsdText) || preset.avgCifUsd)) * 129;
    const totalLanded = cifKes + totalKraDuty + ntsaFee + portAndKebs;

    return {
      crsp,
      depBand,
      customsValue,
      importDuty,
      exciseDuty,
      vat,
      idf,
      rdl,
      totalKraDuty,
      ntsaFee,
      portAndKebs,
      cifKes,
      totalLanded,
    };
  }, [preset, ageIndex, cifUsdText]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.inputLabel}>Select Popular Kenyan Import Vehicle</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {crspData.popularModels.map((m) => (
          <Pressable
            key={m.id}
            onPress={() => {
              setSelectedModelId(m.id);
              setCifUsdText(String(m.avgCifUsd));
            }}
            style={[styles.pillBtn, selectedModelId === m.id && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, selectedModelId === m.id && styles.pillBtnTextActive]}>
              {m.make} {m.model.split(" ")[0]}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput
        label="Vehicle CIF Price (USD — Cost, Insurance & Freight to Mombasa)"
        value={cifUsdText}
        onChangeText={setCifUsdText}
        prefix="USD"
        placeholder={String(preset.avgCifUsd)}
        subtext={`KRA Base CRSP: KES ${preset.crspKes.toLocaleString()} · ${preset.cc}cc ${preset.fuel}`}
      />

      <Text style={styles.inputLabel}>Vehicle Age (Depreciation Band)</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {crspData.depreciationBands.map((b, idx) => (
          <Pressable
            key={b.label}
            onPress={() => setAgeIndex(idx)}
            style={[styles.pillBtn, ageIndex === idx && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, ageIndex === idx && styles.pillBtnTextActive]}>
              {Math.round(b.rate * 100)}% ({b.minYears}–{b.maxYears}y)
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <StatCard
        label="TOTAL KRA PORT TAXES"
        value={`KES ${Math.round(calc.totalKraDuty).toLocaleString()}`}
        highlight
        subtext={`Estimated Total On-the-Road: KES ${Math.round(calc.totalLanded).toLocaleString()}`}
      />

      <Text style={styles.subHeading}>KRA Duty & Clearance Breakdown</Text>
      <View style={styles.card}>
        <Row label="KRA Base CRSP" value={`KES ${Math.round(calc.crsp).toLocaleString()}`} />
        <Row label={`Depreciated Customs Value (${Math.round(calc.depBand.rate * 100)}%)`} value={`KES ${Math.round(calc.customsValue).toLocaleString()}`} />
        <Row label="Import Duty (35%)" value={`KES ${Math.round(calc.importDuty).toLocaleString()}`} isDeduction />
        <Row label="Excise Duty" value={`KES ${Math.round(calc.exciseDuty).toLocaleString()}`} isDeduction />
        <Row label="VAT (16%)" value={`KES ${Math.round(calc.vat).toLocaleString()}`} isDeduction />
        <Row label="IDF (2.5%) + RDL (2.0%)" value={`KES ${Math.round(calc.idf + calc.rdl).toLocaleString()}`} isDeduction />
        <Row label="NTSA Registration + KEBS/Port" value={`KES ${Math.round(calc.ntsaFee + calc.portAndKebs).toLocaleString()}`} />
        <Row label="Total On-the-Road Landed Cost" value={`KES ${Math.round(calc.totalLanded).toLocaleString()}`} isTotal />
      </View>
    </View>
  );
}

