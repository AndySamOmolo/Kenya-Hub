import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { useDynamicStyles, pressableStyle, triggerHaptic } from "../../theme";
import {
  KESInput,
  StatCard,
  Row,
  BreakdownBar,
  ShareCopyBar,
  createStyles,
} from "./shared";
import payeData from "../../shared/data/paye-bands.json";

/** 1. PAYE Calculator (mirrors kenyahub/src/app/tools/paye-calculator/page.tsx) */
export function PayeCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("100000");
  const [mode, setMode] = useState<"grossToNet" | "netToGross">("grossToNet");
  const [pensionText, setPensionText] = useState("");
  const [mortgageText, setMortgageText] = useState("");
  const [insuranceText, setInsuranceText] = useState("");
  const [showReliefs, setShowReliefs] = useState(false);
  const [showAnnual, setShowAnnual] = useState(false);
  const inputAmount = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);
  const pension = Math.max(0, Number(pensionText.replace(/,/g, "")) || 0);
  const mortgage = Math.min(
    30000,
    Math.max(0, Number(mortgageText.replace(/,/g, "")) || 0)
  );
  const insurancePrem = Math.max(
    0,
    Number(insuranceText.replace(/,/g, "")) || 0
  );
  const insuranceRelief = Math.min(5000, Math.round(insurancePrem * 0.15));

  const computeFromGross = (g: number) => {
    const t1 =
      Math.min(g, payeData.nssf.tier1Limit || 9000) *
      ((payeData.nssf.rate || 6) / 100);
    const t2 =
      Math.max(
        0,
        Math.min(g, payeData.nssf.tier2Limit || 108000) -
          (payeData.nssf.tier1Limit || 9000)
      ) *
      ((payeData.nssf.rate || 6) / 100);
    const nssf = Math.round((t1 + t2) * 100) / 100;
    const hLevy =
      Math.round(
        g * ((payeData.housingLevy.employeeRate || 1.5) / 100) * 100
      ) / 100;
    const shaVal =
      g > 0
        ? Math.max(
            300,
            Math.round(g * ((payeData.sha.rate || 2.75) / 100) * 100) / 100
          )
        : 0;
    const allowablePension = Math.max(0, Math.min(30000 - nssf, pension));
    const taxInc = Math.max(0, g - nssf - shaVal - hLevy - allowablePension - mortgage);
    let gTax = 0;
    for (const band of payeData.payeBands) {
      const upper = band.max ?? Infinity;
      if (taxInc >= band.min) {
        const inBand =
          Math.min(taxInc, upper) - (band.min > 0 ? band.min - 1 : 0);
        if (inBand > 0) gTax += inBand * (band.rate / 100);
      }
    }
    const pRelief = payeData.personalRelief || 2400;
    const nPaye = Math.max(0, gTax - pRelief - insuranceRelief);
    const totDed = nPaye + shaVal + hLevy + nssf + pension;
    return g - totDed;
  };

  const salary = useMemo(() => {
    if (mode === "grossToNet" || inputAmount <= 0) return inputAmount;
    let lo = inputAmount;
    let hi = (inputAmount + pension) * 2.2 + 50000;
    const maxHi = Math.max(1e10, lo * 10);
    while (computeFromGross(hi) < inputAmount && hi < maxHi) {
      hi *= 2;
    }
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      if (computeFromGross(mid) < inputAmount) lo = mid;
      else hi = mid;
    }
    return Math.round((lo + hi) / 2);
  }, [inputAmount, mode, pension, mortgage, insuranceRelief]);

  const calc = useMemo(() => {
    const gross = salary;
    const nssfTier1Limit = payeData.nssf.tier1Limit || 9000;
    const nssfTier2Limit = payeData.nssf.tier2Limit || 108000;
    const nssfRate = (payeData.nssf.rate || 6) / 100;
    const nssfTier1 = Math.min(gross, nssfTier1Limit) * nssfRate;
    const nssfTier2 =
      Math.max(0, Math.min(gross, nssfTier2Limit) - nssfTier1Limit) * nssfRate;
    const totalNssf = Math.round((nssfTier1 + nssfTier2) * 100) / 100;

    const housingLevy =
      Math.round(
        gross * ((payeData.housingLevy.employeeRate || 1.5) / 100) * 100
      ) / 100;

    const sha =
      gross > 0
        ? Math.max(
            300,
            Math.round(gross * ((payeData.sha.rate || 2.75) / 100) * 100) / 100
          )
        : 0;

    const allowablePension = Math.max(0, Math.min(30000 - totalNssf, pension));
    const taxableIncome = Math.max(
      0,
      gross - totalNssf - sha - housingLevy - allowablePension - mortgage
    );

    let grossTax = 0;
    for (const band of payeData.payeBands) {
      const upper = band.max ?? Infinity;
      if (taxableIncome >= band.min) {
        const taxableInBand =
          Math.min(taxableIncome, upper) - (band.min > 0 ? band.min - 1 : 0);
        if (taxableInBand > 0) {
          grossTax += taxableInBand * (band.rate / 100);
        }
      }
    }

    const personalRelief = payeData.personalRelief || 2400;
    const netPaye = Math.max(0, grossTax - personalRelief - insuranceRelief);
    const totalDeductions = netPaye + sha + housingLevy + totalNssf + pension;
    const netSalary = Math.max(0, gross - totalDeductions);
    const effectiveTaxRate =
      gross > 0 ? Math.round((netPaye / gross) * 10000) / 100 : 0;

    const employerNssf = totalNssf;
    const employerHousing = housingLevy;
    const totalEmployerCost = gross + employerNssf + employerHousing;

    const mult = showAnnual ? 12 : 1;

    return {
      gross: gross * mult,
      totalNssf: totalNssf * mult,
      housingLevy: housingLevy * mult,
      sha: sha * mult,
      pension: pension * mult,
      taxableIncome: taxableIncome * mult,
      grossTax: grossTax * mult,
      personalRelief: personalRelief * mult,
      netPaye: netPaye * mult,
      totalDeductions: totalDeductions * mult,
      netSalary: netSalary * mult,
      effectiveTaxRate,
      employerNssf: employerNssf * mult,
      employerHousing: employerHousing * mult,
      totalEmployerCost: totalEmployerCost * mult,
    };
  }, [salary, showAnnual, pension, mortgage, insuranceRelief]);

  const shareSummary = useMemo(
    () =>
      [
        `Period: ${showAnnual ? "Annual (12 Months)" : "Monthly"}`,
        `Gross Salary: KES ${Math.round(calc.gross).toLocaleString()}`,
        `Net Take-Home Pay: KES ${Math.round(calc.netSalary).toLocaleString()}`,
        `PAYE (Income Tax): KES ${Math.round(calc.netPaye).toLocaleString()} (${calc.effectiveTaxRate}%)`,
        `SHA / SHIF (2.75%): KES ${Math.round(calc.sha).toLocaleString()}`,
        `NSSF (Tier I & II): KES ${Math.round(calc.totalNssf).toLocaleString()}`,
        `Housing Levy (1.5%): KES ${Math.round(calc.housingLevy).toLocaleString()}`,
        `Total Deductions: KES ${Math.round(calc.totalDeductions).toLocaleString()}`,
      ].join("\n"),
    [calc, showAnnual]
  );

  return (
    <View style={styles.toolWrap}>
      {/* Monthly / Annual Toggle */}
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
          onPress={() => {
            triggerHaptic(8);
            setShowAnnual(false);
          }}
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
              fontFamily: "Outfit_800ExtraBold",
              color: !showAnnual ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Monthly
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setShowAnnual(true);
          }}
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
              fontFamily: "Outfit_800ExtraBold",
              color: showAnnual ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Annual (12 Mos)
          </Text>
        </Pressable>
      </View>

      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setMode("grossToNet");
          }}
          style={pressableStyle([
            styles.pillBtn,
            mode === "grossToNet" && styles.pillBtnActive,
          ])}
        >
          <Text
            style={[
              styles.pillBtnText,
              mode === "grossToNet" && styles.pillBtnTextActive,
            ]}
          >
            Gross → Net Pay
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setMode("netToGross");
          }}
          style={pressableStyle([
            styles.pillBtn,
            mode === "netToGross" && styles.pillBtnActive,
          ])}
        >
          <Text
            style={[
              styles.pillBtnText,
              mode === "netToGross" && styles.pillBtnTextActive,
            ]}
          >
            Target Net → Gross (Reverse)
          </Text>
        </Pressable>
      </ExpandablePillRow>

      <KESInput
        label={
          mode === "grossToNet"
            ? "Monthly Gross Salary (KES)"
            : "Target Monthly Take-Home Net Pay (KES)"
        }
        value={salaryText}
        onChangeText={setSalaryText}
        presets={[
          { label: "KES 30K", value: "30000" },
          { label: "KES 50K", value: "50000" },
          { label: "KES 80K", value: "80000" },
          { label: "KES 100K", value: "100000" },
          { label: "KES 200K", value: "200000" },
          { label: "KES 500K", value: "500000" },
        ]}
      />

      <Pressable
        onPress={() => {
          triggerHaptic(8);
          setShowReliefs((v) => !v);
        }}
        style={{ alignSelf: "flex-start", marginBottom: 4 }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          {showReliefs
            ? "− Hide Tax Reliefs (Pension, Mortgage & Insurance)"
            : "+ Add Tax-Deductible Pension, Mortgage or Insurance"}
        </Text>
      </Pressable>
      {showReliefs && (
        <View style={{ gap: 8 }}>
          <KESInput
            label="Pension Contribution (Max KES 30k/mo deductible)"
            value={pensionText}
            onChangeText={setPensionText}
            presets={[
              { label: "KES 5K", value: "5000" },
              { label: "KES 10K", value: "10000" },
              { label: "KES 20K", value: "20000" },
              { label: "KES 30K", value: "30000" },
            ]}
          />
          <KESInput
            label="Mortgage Interest (Max KES 30k/mo deductible)"
            value={mortgageText}
            onChangeText={setMortgageText}
            presets={[
              { label: "KES 10K", value: "10000" },
              { label: "KES 20K", value: "20000" },
              { label: "KES 30K", value: "30000" },
            ]}
          />
          <KESInput
            label="Life/Education/Health Insurance Premium (15% relief)"
            value={insuranceText}
            onChangeText={setInsuranceText}
            presets={[
              { label: "KES 5K", value: "5000" },
              { label: "KES 15K", value: "15000" },
              { label: "KES 33.3K", value: "33334" },
            ]}
          />
        </View>
      )}

      <StatCard
        label={`NET TAKE-HOME PAY (${showAnnual ? "ANNUAL" : "MONTHLY"})`}
        value={`KES ${Math.round(calc.netSalary).toLocaleString()}`}
        highlight
        subtext={`Effective PAYE rate: ${calc.effectiveTaxRate}% · Total deductions: KES ${Math.round(calc.totalDeductions).toLocaleString()}`}
      />

      {/* Visual Salary Proportion Bar (UX-11) */}
      <BreakdownBar
        title="Salary Distribution (Take-Home vs Statutory Deductions)"
        segments={[
          {
            label: "Net Pay",
            value: Math.round(calc.netSalary),
            color: theme.kenyaGreenLight,
          },
          {
            label: "PAYE Tax",
            value: Math.round(calc.netPaye),
            color: theme.kenyaRedLight,
          },
          {
            label: "SHA + NSSF + AHL",
            value: Math.round(calc.sha + calc.totalNssf + calc.housingLevy),
            color: theme.gold,
          },
        ]}
      />

      {/* 1-Tap Share Payslip Breakdown (MOB-12, UX-11) */}
      <ShareCopyBar
        title="Kenya 2026 PAYE Payslip Breakdown"
        summaryText={shareSummary}
        shareLabel="Share Payslip Breakdown"
      />

      <Text style={styles.subHeading}>Deductions Breakdown</Text>
      <View style={styles.card}>
        <Row
          label="Gross Salary"
          value={`KES ${Math.round(calc.gross).toLocaleString()}`}
        />
        <Row
          label="PAYE (Income Tax)"
          value={`− KES ${Math.round(calc.netPaye).toLocaleString()}`}
          isDeduction
        />
        <Row
          label="SHA / SHIF (2.75%)"
          value={`− KES ${Math.round(calc.sha).toLocaleString()}`}
          isDeduction
        />
        <Row
          label="NSSF (Employee Tier I & II)"
          value={`− KES ${Math.round(calc.totalNssf).toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Housing Levy (1.5%)"
          value={`− KES ${Math.round(calc.housingLevy).toLocaleString()}`}
          isDeduction
        />
        {calc.pension > 0 && (
          <Row
            label="Voluntary Pension Contribution"
            value={`− KES ${Math.round(calc.pension).toLocaleString()}`}
            isDeduction
          />
        )}
        <Row
          label="Taxable Income (after pre-tax deductions)"
          value={`KES ${Math.round(calc.taxableIncome).toLocaleString()}`}
        />
        <Row
          label="Personal Tax Relief Applied"
          value={`KES ${Math.round(calc.personalRelief).toLocaleString()}`}
          isPositive
        />
        <Row
          label="Total Deductions"
          value={`− KES ${Math.round(calc.totalDeductions).toLocaleString()}`}
          isDeduction
        />
        <Row
          label="Net Take-Home Pay"
          value={`KES ${Math.round(calc.netSalary).toLocaleString()}`}
          isTotal
        />
      </View>

      {/* Employer Additional Costs */}
      <Text style={styles.subHeading}>Employer Additional Costs</Text>
      <View style={styles.card}>
        <Row
          label="NSSF (Employer Match)"
          value={`KES ${Math.round(calc.employerNssf).toLocaleString()}`}
        />
        <Row
          label="Housing Levy (Employer 1.5%)"
          value={`KES ${Math.round(calc.employerHousing).toLocaleString()}`}
        />
        <Row
          label="Total Cost to Employer"
          value={`KES ${Math.round(calc.totalEmployerCost).toLocaleString()}`}
          isTotal
        />
      </View>

      {/* PAYE Tax Bands Reference Table */}
      <Text style={styles.subHeading}>
        PAYE Tax Bands — FY {payeData.fiscalYear}
      </Text>
      <View style={styles.card}>
        {payeData.payeBands.map((band, i) => (
          <Row
            key={i}
            label={`KES ${band.min.toLocaleString()} – ${
              band.max ? `KES ${band.max.toLocaleString()}` : "Above"
            } (${band.label})`}
            value={`${band.rate}%`}
          />
        ))}
        <Row
          label="Personal Relief"
          value={`KES ${payeData.personalRelief.toLocaleString()}/month`}
          isPositive
        />
        <Row
          label="Insurance Relief"
          value={`${payeData.insuranceRelief.rate}% (Max KES ${payeData.insuranceRelief.maxPerMonth.toLocaleString()}/mo)`}
        />
        <Row
          label="Disability Tax Exemption"
          value={`Up to KES ${payeData.disabilityExemption.maxPerMonth.toLocaleString()}/mo`}
          isTotal
        />
      </View>
    </View>
  );
}
