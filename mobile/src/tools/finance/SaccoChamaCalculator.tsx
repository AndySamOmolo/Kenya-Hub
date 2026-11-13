import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import saccoData from "../../shared/data/sacco-chama-rates.json";

/** 11. SACCO Dividend, Loan & Chama Calculator */
export function SaccoChamaCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedSaccoId, setSelectedSaccoId] = useState(saccoData.topSaccos[0].id);
  const [sharesText, setSharesText] = useState("40000");
  const [depositsText, setDepositsText] = useState("250000");
  const [monthlyText, setMonthlyText] = useState("15000");

  const sacco = saccoData.topSaccos.find((s) => s.id === selectedSaccoId) || saccoData.topSaccos[0];
  const shares = Math.max(0, Number(sharesText.replace(/,/g, "")) || 0);
  const opening = Math.max(0, Number(depositsText.replace(/,/g, "")) || 0);
  const monthly = Math.max(0, Number(monthlyText.replace(/,/g, "")) || 0);

  const calc = useMemo(() => {
    const grossDiv = shares * (sacco.dividendRate / 100);
    const grossReb = opening * (sacco.rebateRate / 100) + monthly * 12 * (sacco.rebateRate / 100) * (6.5 / 12);
    const grossTotal = grossDiv + grossReb;
    const wht = grossTotal * saccoData.withholdingTaxRate;
    const netPayout = grossTotal - wht;
    const yearEndDeposits = opening + monthly * 12;
    const maxLoan = yearEndDeposits * sacco.loanMultiplier;
    const r = sacco.monthlyInterestReducing / 100;
    const monthlyRepay = maxLoan > 0 ? (maxLoan * r * Math.pow(1 + r, 36)) / (Math.pow(1 + r, 36) - 1) : 0;
    return { grossDiv, grossReb, wht, netPayout, yearEndDeposits, maxLoan, monthlyRepay };
  }, [shares, opening, monthly, sacco]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.inputLabel}>Select SASRA DT-SACCO Benchmark</Text>
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        {saccoData.topSaccos.map((s) => (
          <Pressable
            key={s.id}
            onPress={() => setSelectedSaccoId(s.id)}
            style={[styles.pillBtn, selectedSaccoId === s.id && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, selectedSaccoId === s.id && styles.pillBtnTextActive]}>
              {s.name.replace(" SACCO", "")}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput label="Share Capital (KES)" value={sharesText} onChangeText={setSharesText} />
      <KESInput label="Opening BOSA Deposits (KES)" value={depositsText} onChangeText={setDepositsText} />
      <KESInput label="Monthly BOSA Contribution (KES)" value={monthlyText} onChangeText={setMonthlyText} />

      <StatCard
        label="NET ANNUAL DIVIDEND + REBATE"
        value={`KES ${Math.round(calc.netPayout).toLocaleString()}`}
        highlight
        subtext={`Max BOSA Loan (${sacco.loanMultiplier}×): KES ${Math.round(calc.maxLoan).toLocaleString()}`}
      />

      <Text style={styles.subHeading}>{sacco.name} Breakdown</Text>
      <View style={styles.card}>
        <Row label={`Share Capital Dividend (${sacco.dividendRate}%)`} value={`KES ${Math.round(calc.grossDiv).toLocaleString()}`} />
        <Row label={`Weighted BOSA Interest Rebate (${sacco.rebateRate}%)`} value={`KES ${Math.round(calc.grossReb).toLocaleString()}`} />
        <Row label="Withholding Tax (5% WHT)" value={`− KES ${Math.round(calc.wht).toLocaleString()}`} isDeduction />
        <Row label="Net FOSA Cash Payout" value={`KES ${Math.round(calc.netPayout).toLocaleString()}`} isPositive />
        <Row label="36-Month Loan Repayment (1%/mo reducing)" value={`KES ${Math.round(calc.monthlyRepay).toLocaleString()}/mo`} isTotal />
      </View>
    </View>
  );
}

