import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
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
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
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
  isTotal = false,
}: {
  label: string;
  value: string;
  isDeduction?: boolean;
  isTotal?: boolean;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View
      style={[
        styles.tableRow,
        isTotal && { borderTopWidth: 1, borderTopColor: theme.borderLight, paddingTop: 10 },
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
          isTotal && { fontWeight: "800", color: theme.gold, fontSize: 15 },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

/** 1. PAYE Calculator */
export function PayeCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("80000");
  const salary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const calc = useMemo(() => {
    // 1. NSSF (New NSSF Act Tier 1 & 2)
    const nssfTier1Limit = 7000;
    const nssfTier2Limit = 36000;
    const nssfTier1 = Math.min(salary, nssfTier1Limit) * 0.06;
    const nssfTier2 = Math.max(0, Math.min(salary, nssfTier2Limit) - nssfTier1Limit) * 0.06;
    const totalNssf = Math.min(2160, nssfTier1 + nssfTier2);

    // 2. Affordable Housing Levy (1.5% of gross)
    const housingLevy = salary * 0.015;

    // 3. SHA / SHIF (2.75% of gross, min 300)
    const sha = Math.max(300, salary * 0.0275);

    // 4. Taxable Income
    const taxableIncome = Math.max(0, salary - totalNssf);

    // 5. PAYE Tax Bands
    let grossTax = 0;
    for (const band of payeData.payeBands) {
      const upper = band.max ?? Infinity;
      if (taxableIncome > band.min) {
        const taxableInBand = Math.min(taxableIncome, upper) - band.min;
        grossTax += taxableInBand * (band.rate / 100);
      }
    }

    // 6. Reliefs (Personal relief KES 2,400 + Housing relief 15% of AHL)
    const personalRelief = payeData.personalRelief || 2400;
    const housingRelief = housingLevy * 0.15;
    const netPaye = Math.max(0, grossTax - personalRelief - housingRelief);

    // Total deductions & Net Salary
    const totalDeductions = netPaye + sha + housingLevy + totalNssf;
    const netSalary = Math.max(0, salary - totalDeductions);

    return {
      totalNssf,
      housingLevy,
      sha,
      taxableIncome,
      grossTax,
      personalRelief,
      housingRelief,
      netPaye,
      totalDeductions,
      netSalary,
    };
  }, [salary]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Gross Monthly Salary"
        value={salaryText}
        onChangeText={setSalaryText}
      />

      <StatCard
        label="TAKE-HOME NET SALARY"
        value={`KES ${Math.round(calc.netSalary).toLocaleString()}`}
        highlight
        subtext={`Total deductions: KES ${Math.round(calc.totalDeductions).toLocaleString()}`}
      />

      <Text style={styles.subHeading}>Itemized Deductions (KRA Bands)</Text>
      <View style={styles.card}>
        <Row label="Gross Salary" value={`KES ${salary.toLocaleString()}`} />
        <Row label="NSSF Contribution (Tier I & II)" value={`- KES ${Math.round(calc.totalNssf).toLocaleString()}`} isDeduction />
        <Row label="Taxable Pay" value={`KES ${Math.round(calc.taxableIncome).toLocaleString()}`} />
        <Row label="PAYE Tax (after reliefs)" value={`- KES ${Math.round(calc.netPaye).toLocaleString()}`} isDeduction />
        <Row label="Social Health Auth. (SHA 2.75%)" value={`- KES ${Math.round(calc.sha).toLocaleString()}`} isDeduction />
        <Row label="Affordable Housing Levy (1.5%)" value={`- KES ${Math.round(calc.housingLevy).toLocaleString()}`} isDeduction />
        <Row label="Total Statutory Deductions" value={`KES ${Math.round(calc.totalDeductions).toLocaleString()}`} isTotal />
      </View>
    </View>
  );
}

/** 2. M-Pesa Fee Calculator */
export function MpesaCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [amountText, setAmountText] = useState("3500");
  const [tab, setTab] = useState<"send_registered" | "withdraw_agent" | "withdraw_atm" | "paybill">("send_registered");
  const amount = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const tariff = useMemo(() => {
    const list = (mpesaData as any)[tab] || [];
    const match = list.find((item: any) => amount >= item.min && amount <= (item.max ?? Infinity));
    const fee = match ? match.fee : 0;
    const totalCost = amount + fee;

    return {
      fee,
      totalCost,
      tier: match ? `KES ${match.min.toLocaleString()} – ${match.max?.toLocaleString() ?? "Max"}` : "Standard",
    };
  }, [amount, tab]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Transaction Amount"
        value={amountText}
        onChangeText={setAmountText}
      />

      {/* Type Selector Tabs */}
      <View style={styles.pillSelector}>
        {[
          { id: "send_registered", label: "Send Money" },
          { id: "withdraw_agent", label: "Agent Withdraw" },
          { id: "withdraw_atm", label: "ATM" },
          { id: "paybill", label: "Paybill" },
        ].map((item) => (
          <Pressable
            key={item.id}
            onPress={() => setTab(item.id as any)}
            style={[styles.pillBtn, tab === item.id && styles.pillBtnActive]}
          >
            <Text
              style={[
                styles.pillBtnText,
                tab === item.id && styles.pillBtnTextActive,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <StatCard
        label="M-PESA TRANSACTION CHARGE"
        value={tariff.fee === 0 ? "FREE (KES 0)" : `KES ${tariff.fee.toLocaleString()}`}
        highlight
        subtext={`Total deduction from M-Pesa: KES ${tariff.totalCost.toLocaleString()}`}
      />

      <View style={styles.card}>
        <Row label="Transaction Amount" value={`KES ${amount.toLocaleString()}`} />
        <Row label="Safaricom Tariff Charge" value={`KES ${tariff.fee.toLocaleString()}`} isDeduction={tariff.fee > 0} />
        <Row label="Tariff Tier Band" value={tariff.tier} />
        <Row label="Total Withdrawn / Sent" value={`KES ${tariff.totalCost.toLocaleString()}`} isTotal />
      </View>

      {/* Savings Tip */}
      <View style={styles.tipCard}>
        <Ionicons name="bulb-outline" size={18} color={theme.gold} />
        <Text style={styles.tipText}>
          Tip: Sending KES 100 or less to any M-Pesa customer is completely free.
        </Text>
      </View>
    </View>
  );
}

/** 3. KPLC Token Calculator */
export function KplcTokenCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [amountText, setAmountText] = useState("1000");
  const amount = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const result = useMemo(() => {
    const fixed = 0; // Prepaid domestic
    const vatRate = 0.16;
    const leviesPerKwh =
      kplcData.levies.repLevy +
      kplcData.levies.refLevy +
      kplcData.levies.epraLevy +
      kplcData.levies.warcLevy;
    const fcc = kplcData.fuelCostCharge.rate;
    const ferfa = kplcData.forexAdjustment.rate;

    // Approximate unit calculation
    // Base domestic rate ~15.80/kWh + variable ~4.60 + 16% VAT = ~23.5 KES/unit
    const avgCostPerKwhWithVat = (15.80 + leviesPerKwh + fcc + ferfa) * (1 + vatRate);
    const estimatedUnits = amount > 0 ? (amount / avgCostPerKwhWithVat).toFixed(1) : "0.0";
    const vatAmount = (amount * 0.16) / 1.16;
    const netEnergyCost = amount - vatAmount;

    return {
      estimatedUnits,
      vatAmount: Math.round(vatAmount),
      netEnergyCost: Math.round(netEnergyCost),
      fccRate: fcc,
      ferfaRate: ferfa,
    };
  }, [amount]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Amount Paid for Tokens"
        value={amountText}
        onChangeText={setAmountText}
      />

      <StatCard
        label="ESTIMATED KPLC UNITS (kWh)"
        value={`${result.estimatedUnits} Units`}
        highlight
        subtext={`Based on current EPRA gazetted domestic tariffs`}
      />

      <View style={styles.card}>
        <Row label="Token Payment Amount" value={`KES ${amount.toLocaleString()}`} />
        <Row label="Net Energy Cost" value={`KES ${result.netEnergyCost.toLocaleString()}`} />
        <Row label="16% Value Added Tax (VAT)" value={`KES ${result.vatAmount.toLocaleString()}`} isDeduction />
        <Row label="Fuel Cost Charge (FCC)" value={`KES ${result.fccRate}/kWh`} />
        <Row label="Forex Adjustment (FERFA)" value={`KES ${result.ferfaRate}/kWh`} />
        <Row label="Total Units Received" value={`${result.estimatedUnits} kWh`} isTotal />
      </View>
    </View>
  );
}

/** 4. HELB Loan Calculator */
export function HelbCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("60000");
  const salary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const monthlyDeduction = useMemo(() => {
    if (salary <= 0) return 0;
    // Statutory HELB deduction is min 1,500 or graduated ~10%
    return Math.max(1500, Math.round(salary * 0.05));
  }, [salary]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Gross Monthly Salary"
        value={salaryText}
        onChangeText={setSalaryText}
      />

      <StatCard
        label="STATUTORY HELB DEDUCTION"
        value={`KES ${monthlyDeduction.toLocaleString()} / mo`}
        highlight
        subtext="4% per annum simple interest on outstanding balance"
      />

      <View style={styles.card}>
        <Row label="Gross Salary" value={`KES ${salary.toLocaleString()}`} />
        <Row label="Monthly HELB Deduction" value={`KES ${monthlyDeduction.toLocaleString()}`} isDeduction />
        <Row label="Annual Repayment Total" value={`KES ${(monthlyDeduction * 12).toLocaleString()}`} />
        <Row label="Interest Rate" value="4% Simple Interest" />
        <Row label="Grace Period" value="1 Year after completion" isTotal />
      </View>
    </View>
  );
}

/** 5. Housing Levy Calculator */
export function HousingLevyCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [salaryText, setSalaryText] = useState("75000");
  const salary = Math.max(0, Number(salaryText.replace(/,/g, "")) || 0);

  const employee = Math.round(salary * 0.015);
  const employer = Math.round(salary * 0.015);
  const totalMonthly = employee + employer;

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Gross Monthly Salary"
        value={salaryText}
        onChangeText={setSalaryText}
      />

      <StatCard
        label="MONTHLY EMPLOYEE LEVY (1.5%)"
        value={`KES ${employee.toLocaleString()}`}
        highlight
        subtext={`Total with Employer Match: KES ${totalMonthly.toLocaleString()}`}
      />

      <View style={styles.card}>
        <Row label="Employee Contribution (1.5%)" value={`KES ${employee.toLocaleString()}`} isDeduction />
        <Row label="Employer Match (1.5%)" value={`KES ${employer.toLocaleString()}`} />
        <Row label="Total Monthly Remitted" value={`KES ${totalMonthly.toLocaleString()}`} isTotal />
        <Row label="Annual Contribution (12 mo)" value={`KES ${(totalMonthly * 12).toLocaleString()}`} />
      </View>
    </View>
  );
}

/** 6. Stamp Duty Calculator */
export function StampDutyCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [valueText, setValueText] = useState("5000000");
  const [isUrban, setIsUrban] = useState(true);
  const value = Math.max(0, Number(valueText.replace(/,/g, "")) || 0);

  const rate = isUrban ? 4 : 2;
  const stampDuty = Math.round((value * rate) / 100);
  const registrationFee = 5000;
  const total = stampDuty + registrationFee;

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Property Purchase Price / Value"
        value={valueText}
        onChangeText={setValueText}
      />

      <View style={styles.pillSelector}>
        <Pressable
          onPress={() => setIsUrban(true)}
          style={[styles.pillBtn, isUrban && styles.pillBtnActive]}
        >
          <Text style={[styles.pillBtnText, isUrban && styles.pillBtnTextActive]}>
            Urban / Municipality (4%)
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIsUrban(false)}
          style={[styles.pillBtn, !isUrban && styles.pillBtnActive]}
        >
          <Text style={[styles.pillBtnText, !isUrban && styles.pillBtnTextActive]}>
            Rural Land (2%)
          </Text>
        </Pressable>
      </View>

      <StatCard
        label="STAMP DUTY PAYABLE"
        value={`KES ${stampDuty.toLocaleString()}`}
        highlight
        subtext={`Rate applied: ${rate}% of property valuation`}
      />

      <View style={styles.card}>
        <Row label="Declared Property Value" value={`KES ${value.toLocaleString()}`} />
        <Row label={`Stamp Duty (${rate}%)`} value={`KES ${stampDuty.toLocaleString()}`} />
        <Row label="Land Registry Filing Fee" value="KES 5,000" />
        <Row label="Official Search Fee" value="KES 520" />
        <Row label="Total Statutory Transfer Cost" value={`KES ${(total + 520).toLocaleString()}`} isTotal />
      </View>
    </View>
  );
}

/** 7. Vehicle Insurance Calculator */
export function VehicleInsuranceCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [valText, setValText] = useState("1500000");
  const value = Math.max(0, Number(valText.replace(/,/g, "")) || 0);

  const comprehensiveRate = 0.05; // 5%
  const comprehensive = Math.max(35000, Math.round(value * comprehensiveRate));
  const thirdParty = 7500;

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Vehicle Market Value"
        value={valText}
        onChangeText={setValText}
      />

      <StatCard
        label="COMPREHENSIVE PREMIUM (ESTIMATED)"
        value={`KES ${comprehensive.toLocaleString()}`}
        highlight
        subtext="Covers own damage, theft, fire, third party liability"
      />

      <View style={styles.card}>
        <Row label="Vehicle Valuation" value={`KES ${value.toLocaleString()}`} />
        <Row label="Comprehensive Annual Rate" value="5.0% (approx 4.0% – 6.0%)" />
        <Row label="Comprehensive Annual Premium" value={`KES ${comprehensive.toLocaleString()}`} isTotal />
        <Row label="Third Party Only (TPO) Legal Minimum" value={`KES ${thirdParty.toLocaleString()}`} />
        <Row label="Training Levy & PCF" value="Included in premium" />
      </View>
    </View>
  );
}

/** 8. Water Bill Calculator */
export function WaterBillCalculator() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [unitsText, setUnitsText] = useState("15");
  const units = Math.max(0, Number(unitsText) || 0);

  const calc = useMemo(() => {
    // Nairobi NCWSC tiered
    let waterCost = 0;
    if (units <= 6) {
      waterCost = units * 3.18;
    } else if (units <= 20) {
      waterCost = 6 * 3.18 + (units - 6) * 47;
    } else {
      waterCost = 6 * 3.18 + 14 * 47 + (units - 20) * 55;
    }
    const sewerage = waterCost * 0.75;
    const meterRent = 100;
    const total = waterCost + sewerage + meterRent;

    return {
      waterCost: Math.round(waterCost),
      sewerage: Math.round(sewerage),
      meterRent,
      total: Math.round(total),
    };
  }, [units]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Water Consumed (Cubic Meters / m³)</Text>
        <TextInput
          keyboardType="numeric"
          value={unitsText}
          onChangeText={setUnitsText}
          style={[styles.textInput, { borderWidth: 1, borderColor: theme.border, borderRadius: 12, paddingHorizontal: 14 }]}
        />
      </View>

      <StatCard
        label="TOTAL ESTIMATED WATER BILL"
        value={`KES ${calc.total.toLocaleString()}`}
        highlight
        subtext="Nairobi City Water & Sewerage Company (NCWSC) Rates"
      />

      <View style={styles.card}>
        <Row label={`Water Consumption (${units} m³)`} value={`KES ${calc.waterCost.toLocaleString()}`} />
        <Row label="Sewerage Charge (75% of water)" value={`KES ${calc.sewerage.toLocaleString()}`} />
        <Row label="Monthly Meter Rent" value={`KES ${calc.meterRent.toLocaleString()}`} />
        <Row label="Total Payable" value={`KES ${calc.total.toLocaleString()}`} isTotal />
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
      marginBottom: 6,
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 6,
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
    },
    rowLabel: {
      fontSize: 13,
      color: theme.textSecondary,
      flex: 1,
    },
    rowValue: {
      fontSize: 13,
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
      backgroundColor: `${theme.gold}12`,
      borderWidth: 1,
      borderColor: `${theme.gold}30`,
      borderRadius: 12,
      padding: 12,
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 16,
    },
  });
