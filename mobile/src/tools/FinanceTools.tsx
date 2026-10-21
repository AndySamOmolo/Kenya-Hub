import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, ThemeColors } from "../theme";
import payeData from "../shared/data/paye-bands.json";
import mpesaData from "../shared/data/mpesa-tariffs.json";
import kplcData from "../shared/data/kplc-tariff.json";
import helbData from "../shared/data/helb-rates.json";
import housingData from "../shared/data/housing-levy-rates.json";
import stampData from "../shared/data/stamp-duty-rates.json";
import insuranceData from "../shared/data/vehicle-insurance-rates.json";
import waterData from "../shared/data/water-tariffs.json";

function KESInput({
  label,
  value,
  onChangeText,
  placeholder = "e.g. 50,000",
  subtext,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  subtext?: string;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputBox}>
        <View style={styles.kesPrefixBox}>
          <Text style={styles.kesPrefix}>KES</Text>
        </View>
        <TextInput
          keyboardType="numeric"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          style={styles.textInput}
        />
      </View>
      {subtext ? <Text style={styles.inputHint}>{subtext}</Text> : null}
    </View>
  );
}

function StatCard({
  label,
  value,
  highlight = false,
  subtext,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  subtext?: string;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={[styles.statCard, highlight && styles.statCardHighlight]}>
      <Text style={[styles.statLabel, highlight && { color: theme.gold }]}>
        {label}
      </Text>
      <Text
        style={[
          styles.statValue,
          highlight && { color: theme.gold, fontSize: 22 },
        ]}
      >
        {value}
      </Text>
      {subtext && <Text style={styles.statSubtext}>{subtext}</Text>}
    </View>
  );
}

function Row({
  label,
  value,
  isDeduction = false,
  isPositive = false,
  isTotal = false,
}: {
  label: string;
  value: string;
  isDeduction?: boolean;
  isPositive?: boolean;
  isTotal?: boolean;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View
      style={[
        styles.tableRow,
        isTotal && {
          borderTopWidth: 1,
          borderTopColor: theme.borderLight,
          paddingTop: 10,
        },
      ]}
    >
      <Text
        style={[
          styles.rowLabel,
          isTotal && { fontWeight: "800", color: theme.textPrimary },
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.rowValue,
          isDeduction && { color: theme.kenyaRedLight },
          isPositive && { color: theme.kenyaGreenLight },
          isTotal && { fontWeight: "800", color: theme.gold, fontSize: 15 },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

/** 1. PAYE Calculator (mirrors kenyahub/src/app/tools/paye-calculator/page.tsx) */
export function PayeCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("100000");
  const [showAnnual, setShowAnnual] = useState(false);
  const salary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

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
      Math.round(gross * ((payeData.housingLevy.employeeRate || 1.5) / 100) * 100) /
      100;

    const sha =
      gross > 0
        ? Math.max(
            300,
            Math.round(gross * ((payeData.sha.rate || 2.75) / 100) * 100) / 100
          )
        : 0;

    const taxableIncome = Math.max(0, gross - totalNssf - sha - housingLevy);

    let grossTax = 0;
    for (const band of payeData.payeBands) {
      const upper = band.max ?? Infinity;
      if (taxableIncome > band.min) {
        const taxableInBand =
          Math.min(taxableIncome, upper) - (band.min > 0 ? band.min - 1 : 0);
        if (taxableInBand > 0) {
          grossTax += taxableInBand * (band.rate / 100);
        }
      }
    }

    const personalRelief = payeData.personalRelief || 2400;
    const netPaye = Math.max(0, grossTax - personalRelief);
    const totalDeductions = netPaye + sha + housingLevy + totalNssf;
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
  }, [salary, showAnnual]);

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
            Annual (12 Mos)
          </Text>
        </Pressable>
      </View>

      <KESInput
        label="Monthly Gross Salary (KES)"
        value={salaryText}
        onChangeText={setSalaryText}
      />

      {/* Quick Salary Presets */}
      <View style={styles.pillSelector}>
        {[30000, 50000, 80000, 100000, 200000, 500000].map((amt) => (
          <Pressable
            key={amt}
            onPress={() => setSalaryText(String(amt))}
            style={[
              styles.pillBtn,
              salary === amt && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                salary === amt && styles.pillBtnTextActive,
              ]}
            >
              {amt >= 1000 ? `KES ${amt / 1000}K` : amt}
            </Text>
          </Pressable>
        ))}
      </View>

      <StatCard
        label={`NET TAKE-HOME PAY (${showAnnual ? "ANNUAL" : "MONTHLY"})`}
        value={`KES ${Math.round(calc.netSalary).toLocaleString()}`}
        highlight
        subtext={`Effective PAYE rate: ${calc.effectiveTaxRate}% · Total deductions: KES ${Math.round(calc.totalDeductions).toLocaleString()}`}
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

      {/* PAYE Tax Bands Reference Table (mirrors web paye-calculator/page.tsx) */}
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

/** 2. M-Pesa Fee Calculator (mirrors kenyahub/src/app/tools/mpesa-fee-calculator/page.tsx) */
type MpesaTxType =
  | "sendRegistered"
  | "sendUnregistered"
  | "withdrawAgent"
  | "withdrawATM"
  | "buyGoods"
  | "payBill";

function calcMpesaFee(amount: number, type: MpesaTxType): number | null {
  const bands = (mpesaData.transactionTypes as any)[type]?.bands || [];
  for (const b of bands) {
    if (amount >= b.min && amount <= b.max) return b.fee;
  }
  return null;
}

function findMpesaSavingTip(amount: number, type: MpesaTxType): string | null {
  const bands = (mpesaData.transactionTypes as any)[type]?.bands || [];
  for (let i = 0; i < bands.length - 1; i++) {
    const currentBand = bands[i];
    const nextBand = bands[i + 1];
    if (amount >= nextBand.min && amount <= nextBand.min + 100) {
      if (currentBand.fee < nextBand.fee) {
        return `Sending KES ${currentBand.max.toLocaleString()} instead of KES ${amount.toLocaleString()} would save you KES ${(
          nextBand.fee - currentBand.fee
        ).toLocaleString()} in fees (same band boundary).`;
      }
    }
  }
  return null;
}

export function MpesaCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [amountText, setAmountText] = useState("1000");
  const [tab, setTab] = useState<MpesaTxType>("sendRegistered");
  const amount = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const txTypes = mpesaData.transactionTypes as Record<
    MpesaTxType,
    { label: string; bands: { min: number; max: number; fee: number; note?: string }[] }
  >;

  const results = useMemo(() => {
    const fee = calcMpesaFee(amount, tab);
    const savingTip = findMpesaSavingTip(amount, tab);
    const totalCost = fee !== null ? amount + fee : null;
    const allFees = (Object.entries(txTypes) as [MpesaTxType, any][]).map(
      ([key, val]) => ({
        key,
        label: val.label,
        fee: calcMpesaFee(amount, key),
      })
    );
    return { fee, savingTip, totalCost, allFees };
  }, [amount, tab, txTypes]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Transaction Amount (KES)"
        value={amountText}
        onChangeText={setAmountText}
        subtext={`Max single transaction: KES ${mpesaData.limits.maxSingleTransaction.toLocaleString()}`}
      />

      {/* All 6 Transaction Type Selector Pills */}
      <Text style={styles.inputLabel}>Transaction Type</Text>
      <View style={styles.pillSelector}>
        {(Object.entries(txTypes) as [MpesaTxType, any][]).map(([id, info]) => (
          <Pressable
            key={id}
            onPress={() => setTab(id)}
            style={[styles.pillBtn, tab === id && styles.pillBtnActive]}
          >
            <Text
              style={[
                styles.pillBtnText,
                tab === id && styles.pillBtnTextActive,
              ]}
            >
              {info.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <StatCard
        label="M-PESA TRANSACTION FEE"
        value={
          results.fee === null
            ? "Out of Range"
            : results.fee === 0
            ? "FREE (KES 0)"
            : `KES ${results.fee.toLocaleString()}`
        }
        highlight
        subtext={
          results.totalCost !== null
            ? `Amount: KES ${amount.toLocaleString()} · Total Cost: KES ${results.totalCost.toLocaleString()}`
            : `Check minimum/maximum band limits below`
        }
      />

      {/* Smart Saving Tip */}
      {results.savingTip && (
        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={18} color={theme.gold} />
          <Text style={styles.tipText}>{results.savingTip}</Text>
        </View>
      )}

      {/* Fee Comparison Across All 6 Transaction Types */}
      <Text style={styles.subHeading}>
        Fee Comparison for KES {amount.toLocaleString()}
      </Text>
      <View style={styles.card}>
        {results.allFees.map((item) => (
          <Row
            key={item.key}
            label={`${item.label}${item.key === tab ? " ← Selected" : ""}`}
            value={
              item.fee === null
                ? "N/A"
                : item.fee === 0
                ? "FREE"
                : `KES ${item.fee.toLocaleString()}`
            }
            isPositive={item.fee === 0}
            isTotal={item.key === tab}
          />
        ))}
      </View>

      {/* Full M-Pesa Tariff Table for Selected Type */}
      <Text style={styles.subHeading}>
        Full M-Pesa Tariff — {txTypes[tab].label}
      </Text>
      <View style={styles.card}>
        {txTypes[tab].bands.map((band, idx) => {
          const isActive = amount >= band.min && amount <= band.max;
          return (
            <Row
              key={idx}
              label={`KES ${band.min.toLocaleString()} – KES ${band.max.toLocaleString()}${
                isActive ? " ← Your amount" : ""
              }`}
              value={band.fee === 0 ? "FREE" : `KES ${band.fee.toLocaleString()}`}
              isPositive={band.fee === 0}
              isTotal={isActive}
            />
          );
        })}
      </View>

      {/* M-Pesa Transaction Limits */}
      <Text style={styles.subHeading}>M-Pesa Transaction Limits</Text>
      <View style={styles.card}>
        <Row
          label="Maximum Account Balance"
          value={`KES ${mpesaData.limits.maxBalance.toLocaleString()}`}
        />
        <Row
          label="Maximum Daily Transaction Total"
          value={`KES ${mpesaData.limits.maxTransactionPerDay.toLocaleString()}`}
        />
        <Row
          label="Maximum Single Transaction"
          value={`KES ${mpesaData.limits.maxSingleTransaction.toLocaleString()}`}
        />
        <Row
          label="Minimum Agent Withdrawal"
          value={`KES ${mpesaData.limits.minWithdrawAgent.toLocaleString()}`}
        />
        <Row
          label="Minimum ATM Withdrawal"
          value={`KES ${mpesaData.limits.minWithdrawATM.toLocaleString()}`}
        />
        <Row label="Receiving Money" value="Always FREE" isPositive isTotal />
      </View>
    </View>
  );
}

/** 3. KPLC Token Calculator (mirrors kenyahub/src/app/tools/kplc-token-calculator/page.tsx) */
export function KplcTokenCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [amountText, setAmountText] = useState("1000");
  const amountPaid = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const result = useMemo(() => {
    const fixedCharge = kplcData.fixedCharge ?? 0;
    const vatRate = (kplcData.levies.vat || 16) / 100;
    const fixedChargeWithVat = fixedCharge * (1 + vatRate);

    const levyPerUnit =
      (kplcData.levies.repLevy || 0) +
      (kplcData.levies.refLevy || 0) +
      (kplcData.levies.epraLevy || 0) +
      (kplcData.levies.warcLevy || 0);
    const fccPerUnit = kplcData.fuelCostCharge.rate;
    const ferfa = kplcData.forexAdjustment.rate;

    const amountForUnits = Math.max(0, amountPaid - fixedChargeWithVat);

    let remainingAmount = amountForUnits;
    let totalUnits = 0;
    const breakdown: {
      band: string;
      units: number;
      rate: number;
      cost: number;
    }[] = [];

    for (const band of kplcData.energyBands || []) {
      if (remainingAmount <= 0) break;
      const bandMax = band.max ?? 100000;
      const bandMin = band.min;
      const bandCapacity = bandMax - bandMin + 1;

      const unitCostBeforeVat = band.rate + levyPerUnit + fccPerUnit + ferfa;
      const unitCostWithVat = unitCostBeforeVat * (1 + vatRate);

      const maxUnitsInBand = Math.min(
        bandCapacity,
        Math.floor(remainingAmount / unitCostWithVat)
      );
      const costForBand = maxUnitsInBand * unitCostWithVat;

      if (maxUnitsInBand > 0) {
        breakdown.push({
          band: band.label,
          units: maxUnitsInBand,
          rate: band.rate,
          cost: Math.round(costForBand * 100) / 100,
        });
        totalUnits += maxUnitsInBand;
        remainingAmount -= costForBand;
      }
    }

    const totalEnergyCost = breakdown.reduce(
      (sum, b) => sum + b.units * b.rate,
      0
    );
    const totalLevies = totalUnits * levyPerUnit;
    const totalFCC = totalUnits * (fccPerUnit + ferfa);
    const totalVAT =
      (totalEnergyCost + totalLevies + totalFCC) * vatRate +
      fixedCharge * vatRate;

    return {
      totalUnits,
      fixedCharge,
      fixedChargeVat: Math.round(fixedCharge * vatRate * 100) / 100,
      totalEnergyCost: Math.round(totalEnergyCost * 100) / 100,
      totalLevies: Math.round(totalLevies * 100) / 100,
      totalFCC: Math.round(totalFCC * 100) / 100,
      totalVAT: Math.round(totalVAT * 100) / 100,
      breakdown,
      effectiveCostPerUnit:
        totalUnits > 0 ? Math.round((amountPaid / totalUnits) * 100) / 100 : 0,
    };
  }, [amountPaid]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Amount to Purchase (KES)"
        value={amountText}
        onChangeText={setAmountText}
      />

      <View style={styles.pillSelector}>
        {[500, 1000, 2000, 3500, 5000, 10000].map((amt) => (
          <Pressable
            key={amt}
            onPress={() => setAmountText(String(amt))}
            style={[
              styles.pillBtn,
              amountPaid === amt && styles.pillBtnActive,
            ]}
          >
            <Text
              style={[
                styles.pillBtnText,
                amountPaid === amt && styles.pillBtnTextActive,
              ]}
            >
              KES {amt.toLocaleString()}
            </Text>
          </Pressable>
        ))}
      </View>

      <StatCard
        label="UNITS YOU WILL RECEIVE"
        value={`${result.totalUnits.toLocaleString()} kWh`}
        highlight
        subtext={
          result.totalUnits > 0
            ? `KES ${result.effectiveCostPerUnit.toFixed(2)} effective cost/unit · EPRA 2023–2026 Domestic Tariffs`
            : "Enter an amount to calculate KPLC prepaid units"
        }
      />

      <Text style={styles.subHeading}>Where Your Money Goes</Text>
      <View style={styles.card}>
        <Row
          label="Fixed Standing Charge (Monthly)"
          value={`KES ${result.fixedCharge.toFixed(2)}`}
        />
        <Row
          label={`Energy Charges (${result.totalUnits} kWh)`}
          value={`KES ${result.totalEnergyCost.toFixed(2)}`}
        />
        <Row
          label="Levies (REP + EPRA + WARMA)"
          value={`KES ${result.totalLevies.toFixed(2)}`}
        />
        <Row
          label="Fuel Cost + Forex Adjustment (FCC + FERFA)"
          value={`KES ${result.totalFCC.toFixed(2)}`}
        />
        <Row
          label="16% Value Added Tax (VAT)"
          value={`KES ${result.totalVAT.toFixed(2)}`}
          isDeduction
        />
        <Row
          label="Total Units Received"
          value={`${result.totalUnits} kWh`}
          isTotal
        />
      </View>

      {result.breakdown.length > 0 && (
        <>
          <Text style={styles.subHeading}>Tariff Band Breakdown</Text>
          <View style={styles.card}>
            {result.breakdown.map((b, i) => (
              <Row
                key={i}
                label={`${b.band} (${b.units} kWh)`}
                value={`KES ${b.rate.toFixed(2)}/kWh`}
              />
            ))}
          </View>
        </>
      )}

      <Text style={styles.subHeading}>KPLC Domestic Tariff Bands</Text>
      <View style={styles.card}>
        {kplcData.energyBands.map((band, i) => (
          <Row
            key={i}
            label={band.label}
            value={`KES ${band.rate.toFixed(2)} / kWh`}
          />
        ))}
        <Row
          label="Fuel Cost Charge (FCC)"
          value={`KES ${kplcData.fuelCostCharge.rate.toFixed(2)} / kWh`}
        />
        <Row
          label="Forex Adjustment (FERFA)"
          value={`KES ${kplcData.forexAdjustment.rate.toFixed(2)} / kWh`}
        />
      </View>
    </View>
  );
}

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
    const completionYear = Math.min(
      currentYear + Math.ceil(yearsToRepay),
      currentYear + helbData.maxRepaymentYears
    );
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 6, paddingBottom: 4 }}
      >
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
      </ScrollView>

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

/** 6. Stamp Duty Calculator (mirrors kenyahub/src/app/tools/stamp-duty-calculator/page.tsx) */
function calcConveyancing(value: number) {
  let totalFee = 0;
  const breakdown: { band: string; amount: number }[] = [];
  let remaining = value;

  for (const band of stampData.conveyancingFees) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandMin = band.min;
    const taxableInBand = Math.min(remaining, bandMax - bandMin + 1);
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

      <View style={styles.pillSelector}>
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
      </View>

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
      <View style={styles.pillSelector}>
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
      </View>
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
      <View style={styles.pillSelector}>
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
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>
          Monthly Water Consumption (Cubic Meters / m³)
        </Text>
        <TextInput
          keyboardType="numeric"
          value={unitsText}
          onChangeText={setUnitsText}
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

      <View style={styles.pillSelector}>
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
      </View>

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

const createStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    inputGroup: {
      marginBottom: 4,
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 6,
    },
    inputHint: {
      fontSize: 11,
      color: theme.textMuted,
      marginTop: 4,
    },
    inputBox: {
      flexDirection: "row",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      overflow: "hidden",
      alignItems: "center",
    },
    kesPrefixBox: {
      backgroundColor: `${theme.gold}15`,
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRightWidth: 1,
      borderRightColor: theme.border,
    },
    kesPrefix: {
      fontSize: 12,
      fontWeight: "800",
      color: theme.gold,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    statCard: {
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 16,
      alignItems: "center",
    },
    statCardHighlight: {
      backgroundColor: `${theme.gold}12`,
      borderColor: `${theme.gold}40`,
    },
    statLabel: {
      fontSize: 11,
      fontWeight: "800",
      letterSpacing: 1,
      color: theme.textSecondary,
      marginBottom: 4,
    },
    statValue: {
      fontSize: 20,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.textPrimary,
    },
    statSubtext: {
      fontSize: 11,
      color: theme.textMuted,
      marginTop: 4,
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
      gap: 8,
    },
    rowLabel: {
      fontSize: 12.5,
      color: theme.textSecondary,
      flex: 1,
    },
    rowValue: {
      fontSize: 12.5,
      fontWeight: "700",
      color: theme.textPrimary,
    },
    subHeading: {
      fontSize: 13,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "800",
      color: theme.gold,
      letterSpacing: 0.5,
      marginTop: 6,
    },
    pillSelector: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 4,
    },
    pillBtn: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 10,
    },
    pillBtnActive: {
      backgroundColor: theme.gold,
      borderColor: theme.gold,
    },
    pillBtnText: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
    },
    pillBtnTextActive: {
      color: theme.kenyaBlack,
    },
    tipCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: `${theme.gold}15`,
      borderWidth: 1,
      borderColor: `${theme.gold}35`,
      borderRadius: 12,
      padding: 12,
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      color: theme.textPrimary,
      lineHeight: 17,
    },
  });
