import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import helbData from "../../shared/data/helb-rates.json";

/** 4. HELB Loan Calculator (mirrors kenyahub/src/app/tools/helb-calculator/page.tsx) */
export function HelbCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const currentYear = 2026;
  const [loanText, setLoanText] = useState("240000");
  const [yearBorrowed, setYearBorrowed] = useState<number>(2018);
  const [salaryText, setSalaryText] = useState("50000");

  const loanAmount = Math.max(0, Number(loanText.replace(/,/g, "")) || 0);
  const grossSalary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const results = useMemo(() => {
    const yearsSinceBorrow = Math.max(0, currentYear - yearBorrowed);
    const totalInterest = Math.round(
      loanAmount * (helbData.interestRate / 100) * yearsSinceBorrow
    );
    const currentBalance = loanAmount + totalInterest;

    const monthlyBySalary = Math.round(
      grossSalary * (helbData.minimumSalaryPercent / 100)
    );
    const monthlyObligation = Math.max(
      helbData.minimumMonthly,
      monthlyBySalary
    );

    const monthsToRepay =
      monthlyObligation > 0
        ? Math.ceil(currentBalance / monthlyObligation)
        : 0;
    const yearsToRepay = Math.round((monthsToRepay / 12) * 10) / 10;
    const completionYear = currentYear + Math.ceil(yearsToRepay);
    const latePenalty = Math.round(
      currentBalance * (helbData.latePenaltyPercent / 100)
    );

    return {
      loanAmount,
      yearsSinceBorrow,
      totalInterest,
      currentBalance,
      monthlyObligation,
      monthsToRepay,
      yearsToRepay,
      completionYear,
      latePenalty,
    };
  }, [loanAmount, yearBorrowed, grossSalary]);

  const yearsList = useMemo(
    () => Array.from({ length: 20 }, (_, i) => currentYear - i),
    []
  );

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Total Loan Amount Borrowed (KES)"
        value={loanText}
        onChangeText={setLoanText}
        subtext="Sum of all HELB disbursements over your study period"
      />

      <Text style={styles.inputLabel}>Year First Borrowed ({yearBorrowed})</Text>
      <ExpandablePillRow contentContainerStyle={{ gap: 6, paddingBottom: 4 }}>
        {yearsList.map((yr) => (
          <Pressable
            key={yr}
            onPress={() => setYearBorrowed(yr)}
            style={[
              styles.pillBtn,
              yearBorrowed === yr && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                yearBorrowed === yr && styles.pillBtnTextActive,
              ]}
            >
              {yr}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput
        label="Monthly Gross Salary (KES)"
        value={salaryText}
        onChangeText={setSalaryText}
        subtext={`Statutory deduction is ${helbData.minimumSalaryPercent}% of gross salary or min KES ${helbData.minimumMonthly.toLocaleString()}`}
      />

      <StatCard
        label="MONTHLY HELB REPAYMENT OBLIGATION"
        value={`KES ${results.monthlyObligation.toLocaleString()} / mo`}
        highlight
        subtext={`Repayment Period: ~${results.yearsToRepay} yrs (${results.monthsToRepay} mos) · Projected Completion: ${results.completionYear}`}
      />

      <Text style={styles.subHeading}>Repayment Breakdown</Text>
      <View style={styles.card}>
        <Row
          label="Original Loan Principal"
          value={`KES ${results.loanAmount.toLocaleString()}`}
        />
        <Row
          label={`Accrued Interest (${helbData.interestRate}% × ${results.yearsSinceBorrow} yrs)`}
          value={`+ KES ${results.totalInterest.toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Estimated Current Balance"
          value={`KES ${results.currentBalance.toLocaleString()}`}
          isTotal
        />
        <Row
          label="Monthly Repayment"
          value={`KES ${results.monthlyObligation.toLocaleString()}`}
        />
        <Row
          label="Projected Completion Year"
          value={`${results.completionYear}`}
          isPositive
        />
        <Row
          label={`Late Payment Penalty (${helbData.latePenaltyPercent}% if defaulted)`}
          value={`+ KES ${results.latePenalty.toLocaleString()}`}
          isDeduction
        />
      </View>
    </View>
  );
}

