import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import housingData from "../../shared/data/housing-levy-rates.json";

/** 5. Housing Levy Calculator (mirrors kenyahub/src/app/tools/housing-levy-calculator/page.tsx) */
export function HousingLevyCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("100000");
  const [showAnnual, setShowAnnual] = useState(false);
  const gross = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const mult = showAnnual ? 12 : 1;
  const employee = Math.round(gross * (housingData.employeeRate / 100) * mult);
  const employer = Math.round(gross * (housingData.employerRate / 100) * mult);
  const totalRemitted = employee + employer;

  return (
    <View style={styles.toolWrap}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.bgCard,
          borderRadius: 10,
          padding: 3,
          borderWidth: 1,
          borderColor: theme.border,
          alignSelf: "flex-end",
        }}
      >
        <Pressable
          onPress={() => setShowAnnual(false)}
          style={{
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 8,
            backgroundColor: !showAnnual ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "800",
              color: !showAnnual ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Monthly
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShowAnnual(true)}
          style={{
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 8,
            backgroundColor: showAnnual ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "800",
              color: showAnnual ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Annual
          </Text>
        </Pressable>
      </View>

      <KESInput
        label="Monthly Gross Salary (KES)"
        value={salaryText}
        onChangeText={setSalaryText}
      />

      <StatCard
        label={`${showAnnual ? "ANNUAL" : "MONTHLY"} EMPLOYEE LEVY (1.5%)`}
        value={`KES ${employee.toLocaleString()}`}
        highlight
        subtext={`Employer Match (1.5%): KES ${employer.toLocaleString()} · Total to Housing Fund: KES ${totalRemitted.toLocaleString()}`}
      />

      <Text style={styles.subHeading}>Impact on Your Pay</Text>
      <View style={styles.card}>
        <Row
          label="Gross Salary"
          value={`KES ${(gross * mult).toLocaleString()}`}
        />
        <Row
          label={`Employee Levy (${housingData.employeeRate}%)`}
          value={`− KES ${employee.toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Pre-Tax Allowable Deduction (PAYE Relief)"
          value={`+ KES ${employee.toLocaleString()}`}
          isPositive
        />
        <Row
          label={`Employer Levy (${housingData.employerRate}%)`}
          value={`KES ${employer.toLocaleString()}`}
        />
        <Row
          label="Total to Affordable Housing Fund (3.0%)"
          value={`KES ${totalRemitted.toLocaleString()}`}
          isTotal
        />
      </View>
    </View>
  );
}

