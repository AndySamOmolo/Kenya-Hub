import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useDynamicStyles,
  androidRipple,
  pressableStyle,
  triggerHaptic,
  type ThemeColors,
} from "../theme";
import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { KESInput, BreakdownBar, ShareCopyBar } from "./finance/shared";

import shaData from "../shared/data/sha-benefit-data.json";
import sccData from "../shared/data/small-claims-data.json";
import ntsaData from "../shared/data/ntsa-transfer-data.json";
import bomaData from "../shared/data/boma-yangu-data.json";
import rentalData from "../shared/data/rental-tax-data.json";
import tenantData from "../shared/data/tenant-rights-data.json";
import domesticData from "../shared/data/domestic-wage-data.json";
import airtimeData from "../shared/data/airtime-drain-data.json";

const SMART_DL_CLASSES = [
  { code: "A1 / A2 / A3", desc: "Motorcycles, Boda Bodas & Tuk-Tuks (3-wheelers)" },
  { code: "B1 / B2 / B3", desc: "Private Saloon Cars, Light Vans & Professional B3" },
  { code: "C1 / C2 / CE", desc: "Commercial Trucks (Light, Heavy & Articulated Trailers)" },
  { code: "D1 / D2 / D3", desc: "PSV Matatus (14-seater), Mini-Buses (15–33) & Large Buses (34+)" },
  { code: "E", desc: "Special Professional / Articulated Heavy Combination Vehicles" },
  { code: "F", desc: "Persons with Disabilities (Adapted Motor Vehicles)" },
  { code: "G", desc: "Industrial, Construction & Agricultural Plant / Tractors" },
];

// Helper: Kenya graduated annual individual income tax (Finance Act 2023/2026)
function calcAnnualGraduatedTax(annualNet: number): number {
  if (annualNet <= 0) return 0;
  let tax = 0;
  let rem = annualNet;
  const bands: [number, number][] = [
    [288_000, 0.1],
    [100_000, 0.25],
    [5_612_000, 0.3],
    [3_600_000, 0.325],
    [Infinity, 0.35],
  ];
  for (const [width, rate] of bands) {
    if (rem <= 0) break;
    const chunk = Math.min(rem, width);
    tax += chunk * rate;
    rem -= chunk;
  }
  const personalRelief = 28_800; // KES 2,400/mo
  return Math.max(0, Math.round(tax - personalRelief));
}

// 1. SHA Health Benefits Explorer
export function ShaBenefitEstimatorTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedLevel, setSelectedLevel] = useState(
    shaData.facilityLevels[2].level
  );

  const activeLevel =
    shaData.facilityLevels.find((l) => l.level === selectedLevel) ||
    shaData.facilityLevels[0];

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>
        Facility Accreditation Level (SHA Levels 2–6)
      </Text>
      <ExpandablePillRow
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        {shaData.facilityLevels.map((lvl) => {
          const active = lvl.level === selectedLevel;
          return (
            <Pressable
              key={lvl.level}
              onPress={() => {
                triggerHaptic(8);
                setSelectedLevel(lvl.level);
              }}
              style={pressableStyle([
                styles.pillBtn,
                active && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[styles.pillBtnText, active && styles.pillBtnTextActive]}
              >
                {lvl.level}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.gold,
              }}
            >
              {activeLevel.level}
            </Text>
            <Text style={styles.cardTitle}>{activeLevel.name}</Text>
          </View>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: "rgba(47,164,99,0.18)",
                borderColor: theme.kenyaGreenLight,
              },
            ]}
          >
            <Text
              style={[styles.badgeText, { color: theme.kenyaGreenLight }]}
            >
              {activeLevel.copay}
            </Text>
          </View>
        </View>

        <Text style={[styles.subHeading, { marginTop: 6 }]}>
          Covered Services:
        </Text>
        <View style={{ gap: 4 }}>
          {activeLevel.services.map((srv, idx) => (
            <Text
              key={idx}
              style={{ fontSize: 12, color: theme.textSecondary }}
            >
              •{" "}
              <Text
                style={{
                  color: theme.textPrimary,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                {srv}
              </Text>
            </Text>
          ))}
        </View>
      </View>

      <Text style={styles.subHeading}>Key Specialized SHA Packages</Text>
      {shaData.packages.map((pkg) => (
        <View key={pkg.id} style={styles.card}>
          <Text style={styles.cardTitle}>{pkg.name}</Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.gold,
              marginTop: 2,
            }}
          >
            {pkg.coveredAmount}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: theme.textSecondary,
              marginTop: 2,
            }}
          >
            {pkg.notes}
          </Text>
        </View>
      ))}
    </View>
  );
}

// 2. Small Claims Court Calculator (Small Claims Court Act No. 2 of 2016 s.34)
export function SmallClaimsTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [claimText, setClaimText] = useState("75000");

  const calc = useMemo(() => {
    const amount = Math.max(
      0,
      parseInt(claimText.replace(/[^0-9]/g, ""), 10) || 0
    );
    const isEligible = amount > 0 && amount <= sccData.maxClaimLimit;
    if (amount <= 0) return { amount: 0, isEligible: false, fee: 0 };
    let fee = 200;
    for (const t of sccData.filingFeeSchedule) {
      if (amount >= t.min && amount <= t.max) {
        fee = t.fee;
        break;
      }
    }
    if (amount > sccData.maxClaimLimit) fee = 2500;
    return { amount, isEligible, fee };
  }, [claimText]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Disputed / Claim Amount (KES)"
        value={claimText}
        onChangeText={setClaimText}
        presets={[
          { label: "KES 25K", value: "25000" },
          { label: "KES 75K", value: "75000" },
          { label: "KES 250K", value: "250000" },
          { label: "KES 600K", value: "600000" },
          { label: "KES 1M", value: "1000000" },
          { label: "KES 1.5M", value: "1500000" },
        ]}
      />

      <View
        style={[
          styles.card,
          {
            borderColor: calc.isEligible ? theme.gold : theme.kenyaRedLight,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: calc.isEligible ? theme.gold : theme.kenyaRedLight,
          }}
        >
          {calc.isEligible
            ? "JUDICIARY SMALL CLAIMS E-FILING FEE"
            : "EXCEEDS KES 1M SMALL CLAIMS LIMIT — FILE IN MAGISTRATE'S COURT"}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {calc.fee.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          {calc.isEligible
            ? "Statutory disposal timeline: 60 days under Small Claims Court Act (No. 2 of 2016) s.34 · Max Jurisdiction: KES 1,000,000"
            : "Disposal timeline: Chief Magistrate's Court (typically 6–18+ months) — exceeds KES 1,000,000 jurisdiction under Small Claims Court Act (No. 2 of 2016)"}
        </Text>
      </View>

      <ShareCopyBar
        title="Small Claims Court Filing Fee Assessment"
        summaryText={`Claim Amount: KES ${calc.amount.toLocaleString()}\nJurisdiction Status: ${
          calc.isEligible
            ? "Eligible for Small Claims Court (60-day statutory disposal under Small Claims Court Act No. 2 of 2016 s.34)"
            : "Exceeds KES 1,000,000 limit (File in Chief Magistrate's Court)"
        }\nJudiciary e-Filing Fee: KES ${calc.fee.toLocaleString()}`}
        shareLabel="Share Filing Fee Summary"
      />

      <View style={styles.card}>
        <Text style={[styles.subHeading, { color: theme.kenyaGreenLight }]}>
          ✓ Claims Handled by Small Claims Court (Act No. 2 of 2016)
        </Text>
        {sccData.qualifyingClaimTypes.map((q, i) => (
          <Text
            key={i}
            style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}
          >
            • {q}
          </Text>
        ))}
      </View>
    </View>
  );
}

// 3. NTSA Logbook Transfer Calculator (+ Smart DL Classes D, E, F)
export function NtsaTransferTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedCcIndex, setSelectedCcIndex] = useState(2);
  const [isMotorcycle, setIsMotorcycle] = useState(false);

  const calc = useMemo(() => {
    if (isMotorcycle) {
      const transfer = ntsaData.motorcycle.transferFee;
      const tax = ntsaData.motorcycle.purchaseTax;
      const searchAndPlatform =
        ntsaData.onlineSearchFee + ntsaData.platformFee;
      const total = transfer + tax + searchAndPlatform;
      return {
        transfer,
        tax,
        searchAndPlatform,
        total,
        label: "Motorcycle / Boda (All cc)",
      };
    }
    const band =
      ntsaData.transferFeeBands[selectedCcIndex] ||
      ntsaData.transferFeeBands[0];
    const searchAndPlatform = ntsaData.onlineSearchFee + ntsaData.platformFee;
    const total = band.transferFee + band.purchaseTax + searchAndPlatform;
    return {
      transfer: band.transferFee,
      tax: band.purchaseTax,
      searchAndPlatform,
      total,
      label: `${band.minCc}–${band.maxCc} cc`,
    };
  }, [selectedCcIndex, isMotorcycle]);

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 6 }}>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setIsMotorcycle(false);
          }}
          style={pressableStyle([
            styles.pillBtn,
            !isMotorcycle && styles.pillBtnActive,
            { flex: 1, alignItems: "center" },
          ])}
        >
          <Text
            style={[
              styles.pillBtnText,
              !isMotorcycle && styles.pillBtnTextActive,
            ]}
          >
            Motor Vehicle
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setIsMotorcycle(true);
          }}
          style={pressableStyle([
            styles.pillBtn,
            isMotorcycle && styles.pillBtnActive,
            { flex: 1, alignItems: "center" },
          ])}
        >
          <Text
            style={[
              styles.pillBtnText,
              isMotorcycle && styles.pillBtnTextActive,
            ]}
          >
            Motorcycle / Boda
          </Text>
        </Pressable>
      </View>

      {!isMotorcycle && (
        <View style={styles.card}>
          <Text style={styles.detailLabel}>Select Engine Rating (cc)</Text>
          <ExpandablePillRow
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 6,
            }}
          >
            {ntsaData.transferFeeBands.map((b, idx) => (
              <Pressable
                key={idx}
                onPress={() => {
                  triggerHaptic(8);
                  setSelectedCcIndex(idx);
                }}
                style={pressableStyle([
                  styles.pillBtn,
                  selectedCcIndex === idx && styles.pillBtnActive,
                ])}
              >
                <Text
                  style={[
                    styles.pillBtnText,
                    selectedCcIndex === idx && styles.pillBtnTextActive,
                  ]}
                >
                  {b.minCc}–{b.maxCc} cc
                </Text>
              </Pressable>
            ))}
          </ExpandablePillRow>
        </View>
      )}

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          TOTAL ECITIZEN / TIMS TRANSFER COST
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {calc.total.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Transfer: KES {calc.transfer.toLocaleString()} · Tax: KES{" "}
          {calc.tax.toLocaleString()} · Search/eCitizen: KES{" "}
          {calc.searchAndPlatform.toLocaleString()}
        </Text>
      </View>

      <BreakdownBar
        title="NTSA Transfer Cost Breakdown"
        segments={[
          {
            label: "Transfer Fee",
            value: calc.transfer,
            color: theme.gold,
          },
          {
            label: "Purchase Tax",
            value: calc.tax,
            color: theme.kenyaGreenLight,
          },
          {
            label: "Search & eCitizen",
            value: calc.searchAndPlatform,
            color: theme.sky,
          },
        ]}
      />

      {/* NTSA Smart Driving License Classes Reference (incl. Classes D, E, F) */}
      <View style={styles.card}>
        <Text style={styles.subHeading}>NTSA Smart Driving License (DL) Classes</Text>
        {SMART_DL_CLASSES.map((cls) => (
          <View
            key={cls.code}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 10,
              paddingVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: theme.border,
            }}
          >
            <Text style={{ width: 78, fontSize: 12, fontFamily: "Outfit_800ExtraBold", color: theme.gold }}>
              Class {cls.code}
            </Text>
            <Text style={{ flex: 1, fontSize: 11.5, color: theme.textSecondary }}>
              {cls.desc}
            </Text>
          </View>
        ))}
      </View>

      <ShareCopyBar
        title={`NTSA Logbook Transfer (${calc.label})`}
        summaryText={`Vehicle Category: ${calc.label}\nNTSA Transfer Fee: KES ${calc.transfer.toLocaleString()}\nPurchase Tax: KES ${calc.tax.toLocaleString()}\nCopy of Records + eCitizen Convenience: KES ${calc.searchAndPlatform.toLocaleString()}\nTotal Payable: KES ${calc.total.toLocaleString()}`}
        shareLabel="Share Transfer Cost"
      />
    </View>
  );
}

// 4. Boma Yangu Housing Calculator (Fixed 1.5% levy copy + clickable bomayangu.go.ke)
export function BomaYanguTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [priceText, setPriceText] = useState("2400000");

  const tier = bomaData.tiers[selectedTierIndex] || bomaData.tiers[0];

  const calc = useMemo(() => {
    const cost = Math.max(
      0,
      parseInt(priceText.replace(/[^0-9]/g, ""), 10) || 0
    );
    const depositPct = tier.sampleUnits?.[0]?.depositPercent ?? 0.1;
    const deposit = cost * depositPct;
    const principal = Math.max(0, cost - deposit);
    const r = tier.interestRate / 12;
    const n = tier.maxTermYears * 12;
    const monthly =
      principal > 0 && r > 0
        ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : 0;
    // Tax Laws (Amendment) Act, 2024 repealed s.30A 15% credit
    const relief = 0;
    return {
      cost,
      depositPct,
      deposit,
      monthly,
      relief,
      net: monthly,
    };
  }, [priceText, tier]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Housing Programme Tier</Text>
      <ExpandablePillRow
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        {bomaData.tiers.map((t, idx) => (
          <Pressable
            key={t.tier}
            onPress={() => {
              triggerHaptic(8);
              setSelectedTierIndex(idx);
            }}
            style={pressableStyle([
              styles.pillBtn,
              selectedTierIndex === idx && styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                selectedTierIndex === idx && styles.pillBtnTextActive,
              ]}
            >
              {t.tier} ({(t.interestRate * 100).toFixed(0)}%)
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <KESInput
        label="Unit Purchase Price (KES)"
        value={priceText}
        onChangeText={setPriceText}
        presets={[
          { label: "KES 1.2M", value: "1200000" },
          { label: "KES 2.4M", value: "2400000" },
          { label: "KES 3.6M", value: "3600000" },
          { label: "KES 4.8M", value: "4800000" },
        ]}
      />

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          MONTHLY REPAYMENT (AFTER KRA RELIEF)
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {Math.round(calc.net).toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          {Math.round(calc.depositPct * 100)}% Deposit: KES {Math.round(calc.deposit).toLocaleString()} · Monthly TPS: KES {Math.round(calc.monthly).toLocaleString()}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={{ fontSize: 11.5, color: theme.textSecondary, lineHeight: 17 }}>
          Note: Under the Tax Laws (Amendment) Act 2024, the mandatory 1.5% Affordable Housing Levy is an allowable deduction before PAYE rather than a separate tax credit. Register and track deposits on the official portal:
        </Text>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            Linking.openURL("https://bomayangu.go.ke").catch(() => {});
          }}
          accessibilityRole="link"
          style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 4 }}
        >
          <Ionicons name="open-outline" size={14} color={theme.gold} />
          <Text style={{ fontSize: 12.5, fontFamily: "Outfit_700Bold", color: theme.gold, textDecorationLine: "underline" }}>
            bomayangu.go.ke ↗
          </Text>
        </Pressable>
      </View>

      <BreakdownBar
        title="Monthly TPS Payment vs 15% Affordable Housing Tax Relief"
        segments={[
          {
            label: "Net Monthly Out-of-Pocket",
            value: Math.round(calc.net),
            color: theme.kenyaGreenLight,
          },
          {
            label: "15% KRA PAYE Relief",
            value: Math.round(calc.relief),
            color: theme.gold,
          },
        ]}
      />

      <ShareCopyBar
        title={`Boma Yangu (${tier.tier}) Repayment Breakdown`}
        summaryText={`Unit Price: KES ${calc.cost.toLocaleString()}\n10% Deposit: KES ${Math.round(calc.deposit).toLocaleString()}\nGross Monthly TPS (${(tier.interestRate * 100).toFixed(0)}% for ${tier.maxTermYears} yrs): KES ${Math.round(calc.monthly).toLocaleString()}\n15% Affordable Housing Tax Relief: −KES ${Math.round(calc.relief).toLocaleString()}\nEffective Net Monthly Cost: KES ${Math.round(calc.net).toLocaleString()}\nPortal: https://bomayangu.go.ke`}
        shareLabel="Share Boma Yangu Plan"
      />
    </View>
  );
}

// 5. Rental Income Tax Calculator (MRI 7.5% vs Net Graduated Income Tax — KRA iTax)
export function RentalTaxTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [rentText, setRentText] = useState("85000");
  const [expenseText, setExpenseText] = useState("25000");

  const calc = useMemo(() => {
    const rent = Math.max(
      0,
      parseInt(rentText.replace(/[^0-9]/g, ""), 10) || 0
    );
    const expenses = Math.max(
      0,
      parseInt(expenseText.replace(/[^0-9]/g, ""), 10) || 0
    );
    const annualRent = rent * 12;
    const annualExpenses = expenses * 12;
    const annualNet = Math.max(0, annualRent - annualExpenses);
    const mriMinAnnual = (rentalData as any).mriMinAnnual || 288000;
    const isBelowMriMin = annualRent > 0 && annualRent <= mriMinAnnual;
    const isAboveMriMax = annualRent > (rentalData.mriThresholdAnnual || 15000000);
    const isEligibleMri = annualRent > mriMinAnnual && !isAboveMriMax;
    const mriTaxMonthly = isEligibleMri ? Math.round(rent * (rentalData.mriRate || 0.075)) : 0;
    const mriTaxAnnual = mriTaxMonthly * 12;
    const netGraduatedAnnual = calcAnnualGraduatedTax(annualNet);
    const netGraduatedMonthly = Math.round(netGraduatedAnnual / 12);
    const retained = Math.max(0, rent - (isEligibleMri ? mriTaxMonthly : netGraduatedMonthly));
    const savingsDiff = Math.abs(mriTaxAnnual - netGraduatedAnnual);
    const betterRegime = isAboveMriMax
      ? "Net Graduated Income Tax (Mandatory > KES 15M/yr)"
      : isBelowMriMin
      ? "Outside MRI — Declare on Annual Income Tax Return"
      : mriTaxAnnual <= netGraduatedAnnual
      ? `7.5% MRI saves KES ${savingsDiff.toLocaleString()}/yr`
      : `Net Graduated Tax saves KES ${savingsDiff.toLocaleString()}/yr`;

    const statusLabel =
      annualRent === 0
        ? "Enter monthly rent above"
        : isBelowMriMin
        ? "Outside MRI (≤ KES 288,000/yr) — Declare on Annual Income Tax Return"
        : isAboveMriMax
        ? "Ineligible (> KES 15M/yr) — File under normal Net Income Tax on KRA iTax"
        : "✓ Qualifies for simplified 7.5% MRI on KRA iTax (Due 20th of next month)";
    return {
      rent,
      expenses,
      annualRent,
      annualNet,
      mriTaxMonthly,
      mriTaxAnnual,
      netGraduatedMonthly,
      netGraduatedAnnual,
      retained,
      betterRegime,
      isBelowMriMin,
      isAboveMriMax,
      statusLabel,
    };
  }, [rentText, expenseText]);

  return (
    <View style={styles.toolWrap}>
      <KESInput
        label="Gross Monthly Rent Collected (KES)"
        value={rentText}
        onChangeText={setRentText}
        presets={[
          { label: "KES 35K", value: "35000" },
          { label: "KES 85K", value: "85000" },
          { label: "KES 150K", value: "150000" },
          { label: "KES 300K", value: "300000" },
          { label: "KES 600K", value: "600000" },
        ]}
      />

      <KESInput
        label="Deductible Monthly Expenses (Repairs, Mortgage Interest, Agent Fees)"
        value={expenseText}
        onChangeText={setExpenseText}
        subtext="Used only for Net Graduated Income Tax comparison (MRI allows zero deductions)"
      />

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          MONTHLY 7.5% MRI TAX DUE (KRA iTax)
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {calc.mriTaxMonthly.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Net Rent Retained: KES {calc.retained.toLocaleString()} · {calc.statusLabel}
        </Text>
      </View>

      {/* MRI 7.5% vs Net Graduated Income Tax Comparison */}
      <View style={styles.card}>
        <Text style={styles.subHeading}>MRI (7.5% Gross) vs Net Graduated Tax (ITA)</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, paddingVertical: 4 }}>
          <Text style={{ fontSize: 12, color: theme.textSecondary, flexGrow: 1, flexShrink: 1, minWidth: 150 }}>7.5% MRI (Annual on Gross)</Text>
          <Text style={{ fontSize: 12.5, fontFamily: "Outfit_700Bold", color: theme.textPrimary, flexShrink: 1 }}>
            KES {calc.mriTaxAnnual.toLocaleString()}/yr
          </Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, paddingVertical: 4 }}>
          <Text style={{ fontSize: 12, color: theme.textSecondary, flexGrow: 1, flexShrink: 1, minWidth: 150 }}>
            Net Graduated Tax (on KES {calc.annualNet.toLocaleString()} net)
          </Text>
          <Text style={{ fontSize: 12.5, fontFamily: "Outfit_700Bold", color: theme.textPrimary, flexShrink: 1 }}>
            KES {calc.netGraduatedAnnual.toLocaleString()}/yr
          </Text>
        </View>
        <Text style={{ fontSize: 11.5, fontFamily: "Outfit_700Bold", color: theme.kenyaGreenLight, marginTop: 4 }}>
          Recommendation: {calc.betterRegime}
        </Text>
        <Text style={{ fontSize: 10.5, color: theme.textMuted, marginTop: 2 }}>
          File monthly MRI returns by the 20th of the following month via KRA iTax (itax.kra.go.ke). Turnover Tax does not apply to rental income under ITA s.12C.
        </Text>
      </View>

      <BreakdownBar
        title="Net Rent Retained (92.5%) vs KRA MRI Tax (7.5%)"
        segments={[
          {
            label: "Net Rent Retained",
            value: calc.retained,
            color: theme.kenyaGreenLight,
          },
          {
            label: "7.5% KRA MRI Tax",
            value: calc.mriTaxMonthly,
            color: theme.kenyaRedLight,
          },
        ]}
      />

      <ShareCopyBar
        title="KRA Rental Income Tax (MRI vs Net) Summary"
        summaryText={`Gross Monthly Rent: KES ${calc.rent.toLocaleString()}\nDeductible Monthly Expenses: KES ${calc.expenses.toLocaleString()}\n7.5% MRI Tax: KES ${calc.mriTaxMonthly.toLocaleString()}/mo (KES ${calc.mriTaxAnnual.toLocaleString()}/yr)\nNet Graduated Income Tax: KES ${calc.netGraduatedMonthly.toLocaleString()}/mo (KES ${calc.netGraduatedAnnual.toLocaleString()}/yr)\nVerdict: ${calc.betterRegime}\nFile via KRA iTax (itax.kra.go.ke)`}
        shareLabel="Share Rental Tax Summary"
      />
    </View>
  );
}

// 6. Landlord Tenant Rights & Statutory Demand Notice Generator (MOB-12, UX-11)
export function LandlordTenantTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [tenantName, setTenantName] = useState("");
  const [landlordName, setLandlordName] = useState("Sunrise Properties Ltd");
  const [unitNumber, setUnitNumber] = useState("House B4, Kilimani");
  const [depositAmount, setDepositAmount] = useState("45000");
  const [vacateDate, setVacateDate] = useState("30th September 2026");

  const formattedDeposit = useMemo(() => {
    const n = parseInt(depositAmount.replace(/[^0-9]/g, ""), 10) || 0;
    return n.toLocaleString();
  }, [depositAmount]);

  const demandNoticeText = useMemo(() => {
    return [
      `STATUTORY DEMAND NOTICE FOR REFUND OF TENANCY DEPOSIT`,
      `To: ${landlordName || "[Landlord / Managing Agent]"}`,
      `From: ${tenantName || "[Tenant Name]"} (Former Tenant — ${unitNumber || "[House/Unit]"})`,
      ``,
      `TAKE NOTICE that having vacated ${unitNumber || "the premises"} on ${vacateDate || "[Date]"} after giving due contractual notice and handing over vacant possession in good tenantable repair (fair wear and tear excepted), my refundable security deposit of KES ${formattedDeposit} remains unlawfully withheld past the ${tenantData.statutoryRefundDays}-day window.`,
      ``,
      `Under Kenyan tenancy law, the Rent Restriction Act (Cap 296), and established Small Claims Court precedents, standard wear-and-tear repainting is the landlord's obligation and cannot be deducted from a tenant's security deposit.`,
      ``,
      `TAKE FURTHER NOTICE that unless the sum of KES ${formattedDeposit} is refunded via M-Pesa/bank transfer within seven (7) days of this notice, I shall institute recovery proceedings in the Small Claims Court of Kenya under the Small Claims Court Act (No. 2 of 2016) for the principal sum plus filing costs without further reference to you.`,
    ].join("\n");
  }, [tenantName, landlordName, unitNumber, formattedDeposit, vacateDate]);

  return (
    <View style={styles.toolWrap}>
      <View style={[styles.card, { borderColor: theme.kenyaRedLight }]}>
        <Text style={[styles.subHeading, { color: theme.kenyaRedLight }]}>
          ✕ Illegal Landlord Actions in Kenya
        </Text>
        {tenantData.illegalActions.map((a, i) => (
          <Text
            key={i}
            style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}
          >
            • {a}
          </Text>
        ))}
      </View>

      <View style={[styles.card, { borderColor: theme.kenyaGreenLight }]}>
        <Text style={[styles.subHeading, { color: theme.kenyaGreenLight }]}>
          ✓ Lawful Deposit Deductions
        </Text>
        {tenantData.lawfulDeductions.map((d, i) => (
          <Text
            key={i}
            style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}
          >
            • {d}
          </Text>
        ))}
      </View>

      {/* Interactive Statutory Demand Notice Generator (UX-11, MOB-12) */}
      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={styles.subHeading}>
          Statutory 7-Day Rent Deposit Demand Notice Generator
        </Text>

        <Text style={styles.detailLabel}>Tenant Full Name</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            value={tenantName}
            onChangeText={setTenantName}
            placeholder="e.g. Jane Wanjiku"
            placeholderTextColor={theme.textMuted}
            style={[styles.searchBar, { color: theme.textPrimary, paddingRight: 36 }]}
          />
          {tenantName.length > 0 && (
            <Pressable
              onPress={() => setTenantName("")}
              accessibilityRole="button"
              accessibilityLabel="Clear tenant name"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        <Text style={styles.detailLabel}>Landlord / Caretaker / Agency Name</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            value={landlordName}
            onChangeText={setLandlordName}
            placeholder="e.g. Sunrise Properties Ltd"
            placeholderTextColor={theme.textMuted}
            style={[styles.searchBar, { color: theme.textPrimary, paddingRight: 36 }]}
          />
          {landlordName.length > 0 && (
            <Pressable
              onPress={() => setLandlordName("")}
              accessibilityRole="button"
              accessibilityLabel="Clear landlord name"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        <Text style={styles.detailLabel}>Apartment / House & Estate</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            value={unitNumber}
            onChangeText={setUnitNumber}
            placeholder="e.g. House B4, Kilimani"
            placeholderTextColor={theme.textMuted}
            style={[styles.searchBar, { color: theme.textPrimary, paddingRight: 36 }]}
          />
          {unitNumber.length > 0 && (
            <Pressable
              onPress={() => setUnitNumber("")}
              accessibilityRole="button"
              accessibilityLabel="Clear apartment or unit number"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        <KESInput
          label="Withheld Deposit Amount (KES)"
          value={depositAmount}
          onChangeText={setDepositAmount}
          presets={[
            { label: "KES 15K", value: "15000" },
            { label: "KES 30K", value: "30000" },
            { label: "KES 45K", value: "45000" },
            { label: "KES 75K", value: "75000" },
          ]}
        />

        <Text style={styles.detailLabel}>Date Vacated</Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            value={vacateDate}
            onChangeText={setVacateDate}
            placeholder="e.g. 30th September 2026"
            placeholderTextColor={theme.textMuted}
            style={[styles.searchBar, { color: theme.textPrimary, paddingRight: 36 }]}
          />
          {vacateDate.length > 0 && (
            <Pressable
              onPress={() => setVacateDate("")}
              accessibilityRole="button"
              accessibilityLabel="Clear date vacated"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        <View
          style={{
            marginTop: 6,
            padding: 12,
            borderRadius: 12,
            backgroundColor: theme.surfaceContainerHigh,
            borderWidth: 1,
            borderColor: theme.outlineVariant,
          }}
        >
          <Text
            style={{
              fontSize: 11.5,
              fontFamily: "Inter_400Regular",
              color: theme.textPrimary,
              lineHeight: 17.5,
            }}
          >
            {demandNoticeText}
          </Text>
        </View>

        <ShareCopyBar
          title="Statutory Rent Deposit Demand Notice"
          summaryText={demandNoticeText}
          shareLabel="Share / Send Demand Notice (WhatsApp / Email)"
        />
      </View>
    </View>
  );
}

// Legal Notice No. 95 (May 2026) — +12% Statutory Domestic Minimum Wages (Nakuru & Eldoret in Cities)
const LN95_ZONES = [
  {
    id: "cities",
    name: "Cities (Nairobi, Mombasa, Kisumu, Nakuru, Eldoret)",
    monthlyMinimum: 18047,
    dailyRate: 867,
    hourlyRate: 104,
  },
  {
    id: "municipalities",
    name: "Former Municipalities & Town Councils (Thika, Nyeri, Kisii, Malindi, Kakamega)",
    monthlyMinimum: 16651,
    dailyRate: 800,
    hourlyRate: 96,
  },
  {
    id: "rural",
    name: "All Other Areas / Rural Counties",
    monthlyMinimum: 11483,
    dailyRate: 552,
    hourlyRate: 66,
  },
];

// 7. Domestic Worker Wage Tool (Legal Notice No. 95 May 2026, 15/115 housing extraction, unified NSSF)
export function DomesticWageTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [zoneIdx, setZoneIdx] = useState(0);
  const [isLiveIn, setIsLiveIn] = useState(false);

  const zones = useMemo(() => {
    const syncedCities = domesticData.zones?.[0];
    if (syncedCities && syncedCities.monthlyMinimum >= 18047) {
      return domesticData.zones;
    }
    return LN95_ZONES;
  }, []);

  const z = zones[zoneIdx] || zones[0];
  // Legal Notice No. 108 of 2026: monthlyMinimum is Basic Pay (exclusive of 15% housing allowance).
  // Live-In receives full basic minimum; Live-Out receives basic + 15% housing allowance.
  const basicWage = Math.round(z.monthlyMinimum);
  const housingAllowance = isLiveIn ? 0 : Math.round(basicWage * 0.15);
  const grossPayable = basicWage + housingAllowance;
  const consolidatedGross = Math.round(basicWage * 1.15);

  const sha = Math.max(300, Math.round(grossPayable * 0.0275));
  const nssfCap = domesticData.statutoryDeductions.nssfMaxMonthly || 6480;
  const nssf = Math.min(nssfCap, Math.round(grossPayable * 0.06));
  const ahlRate = (domesticData.statutoryDeductions as any).ahlRate ?? 0.015;
  const ahl = Math.round(grossPayable * ahlRate);
  const net = Math.max(0, grossPayable - sha - nssf - ahl);

  const contractSummary = useMemo(
    () =>
      [
        `DOMESTIC WORKER (HOUSEHELP) STATUTORY WAGE & CONTRACT SUMMARY (LEGAL NOTICE NO. 95, MAY 2026)`,
        `Zone: ${z.name}`,
        `Arrangement: ${isLiveIn ? "Live-In (Employer Housed — 15/115 Housing Allowance Extracted)" : "Live-Out (Consolidated Minimum Wage)"}`,
        `Consolidated Statutory Minimum: KES ${consolidatedGross.toLocaleString()}`,
        `Extracted 15% Housing Element (15/115): KES ${housingAllowance.toLocaleString()} · Basic Wage: KES ${basicWage.toLocaleString()}`,
        `Applicable Gross Cash Wage: KES ${grossPayable.toLocaleString()} (Daily: KES ${z.dailyRate} · Hourly: KES ${z.hourlyRate})`,
        `Employee SHA Deduction (2.75% / min KES 300): −KES ${sha.toLocaleString()}`,
        `Employee NSSF Deduction (6% Unified Rate): −KES ${nssf.toLocaleString()}`,
        `Net Take-Home Pay to Worker: KES ${Math.round(net).toLocaleString()}`,
        `Statutory Leave Entitlements: ${domesticData.statutoryDeductions.leaveDaysAnnual} paid annual leave days, ${domesticData.statutoryDeductions.paidMaternityMonths} months maternity leave, 1 rest day per week.`,
      ].join("\n"),
    [z, isLiveIn, consolidatedGross, housingAllowance, basicWage, grossPayable, sha, nssf, net]
  );

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Municipality / Location Zone (Legal Notice No. 95, May 2026)</Text>
      <ExpandablePillRow
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        {zones.map((item, idx) => (
          <Pressable
            key={item.id}
            onPress={() => {
              triggerHaptic(8);
              setZoneIdx(idx);
            }}
            style={pressableStyle([
              styles.pillBtn,
              zoneIdx === idx && styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                zoneIdx === idx && styles.pillBtnTextActive,
              ]}
            >
              {item.name.split("(")[0].trim()}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <Text style={{ fontSize: 11.5, color: theme.textSecondary }}>
        Covers: {z.name}
      </Text>

      {/* Live-Out vs Live-In Toggle */}
      <View style={{ flexDirection: "row", gap: 6 }}>
        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setIsLiveIn(false);
          }}
          style={pressableStyle([
            styles.pillBtn,
            !isLiveIn && styles.pillBtnActive,
            { flex: 1, alignItems: "center" },
          ])}
        >
          <Text style={[styles.pillBtnText, !isLiveIn && styles.pillBtnTextActive]}>
            Live-Out (Consolidated)
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            triggerHaptic(6);
            setIsLiveIn(true);
          }}
          style={pressableStyle([
            styles.pillBtn,
            isLiveIn && styles.pillBtnActive,
            { flex: 1, alignItems: "center" },
          ])}
        >
          <Text style={[styles.pillBtnText, isLiveIn && styles.pillBtnTextActive]}>
            Live-In (Employer Housed)
          </Text>
        </Pressable>
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          GAZETTED LEGAL MINIMUM WAGE ({z.name.split("(")[0].trim().toUpperCase()})
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {grossPayable.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          15/115 Housing Element: KES {housingAllowance.toLocaleString()} · Basic: KES {basicWage.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>
          Daily: KES {z.dailyRate} · SHA (2.75%): −KES {sha.toLocaleString()} · NSSF (6%): −KES {nssf.toLocaleString()} · Net Take-Home: KES {Math.round(net).toLocaleString()}
        </Text>
      </View>

      <BreakdownBar
        title="Domestic Worker Net Pay vs Statutory SHA & NSSF"
        segments={[
          {
            label: "Worker Net Pay",
            value: Math.round(net),
            color: theme.kenyaGreenLight,
          },
          {
            label: "SHA + NSSF (6%)",
            value: Math.round(sha + nssf),
            color: theme.gold,
          },
        ]}
      />

      <ShareCopyBar
        title="Domestic Worker Compliant Wage & Contract Summary"
        summaryText={contractSummary}
        shareLabel="Share Wage & Contract Summary"
      />
    </View>
  );
}

// 8. Airtime Drain & USSD Tool (Reconciled Safaricom USSD codes + 1-tap Dial Now)
export function AirtimeDrainTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [netIdx, setNetIdx] = useState(0);

  const net = airtimeData.networks[netIdx] || airtimeData.networks[0];
  const isSafaricom = net.name.toLowerCase().includes("safaricom");
  const promoOptOutUssd = (net as any).stopPromoUSSD || (isSafaricom ? "*456*9*5#" : "*100#");
  const promoOptOutStep = isSafaricom
    ? "Dial *456*9*5# (Official Safaricom Promotional SMS & Marketing Opt-Out) or send 'STOP' to the specific shortcode."
    : net.stopAllPromoSMS;

  const dialUssd = (code: string) => {
    triggerHaptic(10);
    Linking.openURL(`tel:${encodeURIComponent(code)}`).catch(() => {});
  };

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 6 }}>
        {airtimeData.networks.map((n, idx) => (
          <Pressable
            key={n.name}
            onPress={() => {
              triggerHaptic(8);
              setNetIdx(idx);
            }}
            style={pressableStyle([
              styles.pillBtn,
              netIdx === idx && styles.pillBtnActive,
              { flex: 1, alignItems: "center" },
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                netIdx === idx && styles.pillBtnTextActive,
              ]}
            >
              {n.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.gold,
              }}
            >
              UNSUBSCRIBE AIRTIME-DRAINING SMS
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.textPrimary,
              }}
            >
              {net.checkSubscriptionsUSSD}
            </Text>
          </View>
          <Pressable
            onPress={() => dialUssd(net.checkSubscriptionsUSSD)}
            accessibilityRole="button"
            accessibilityLabel={`Dial ${net.checkSubscriptionsUSSD}`}
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle({
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: theme.gold,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
            })}
          >
            <Ionicons name="call" size={14} color={theme.kenyaBlack} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.kenyaBlack,
              }}
            >
              Dial Now
            </Text>
          </Pressable>
        </View>
        <Text
          style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 4 }}
        >
          {net.checkSubscriptionsStep}
        </Text>
      </View>

      <View style={[styles.card, { borderColor: theme.sky }]}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.sky,
              }}
            >
              STOP PROMOTIONAL & MARKETING SMS
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.textPrimary,
              }}
            >
              {promoOptOutUssd}
            </Text>
          </View>
          <Pressable
            onPress={() => dialUssd(promoOptOutUssd)}
            accessibilityRole="button"
            accessibilityLabel={`Dial ${promoOptOutUssd}`}
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle({
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: theme.sky,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
            })}
          >
            <Ionicons name="call" size={14} color="#FFFFFF" />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Outfit_800ExtraBold",
                color: "#FFFFFF",
              }}
            >
              Dial Now
            </Text>
          </Pressable>
        </View>
        <Text
          style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 4 }}
        >
          {promoOptOutStep}
        </Text>
      </View>

      <View style={[styles.card, { borderColor: theme.kenyaGreenLight }]}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.kenyaGreenLight,
              }}
            >
              CHECK NUMBERS LINKED TO YOUR ID
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.textPrimary,
              }}
            >
              {net.checkLinkedSIMsUSSD}
            </Text>
          </View>
          <Pressable
            onPress={() => dialUssd(net.checkLinkedSIMsUSSD)}
            accessibilityRole="button"
            accessibilityLabel={`Dial ${net.checkLinkedSIMsUSSD}`}
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle({
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: theme.kenyaGreenLight,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
            })}
          >
            <Ionicons name="call" size={14} color={theme.kenyaBlack} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Outfit_800ExtraBold",
                color: theme.kenyaBlack,
              }}
            >
              Dial Now
            </Text>
          </Pressable>
        </View>
        <Text
          style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 4 }}
        >
          {(net as any).checkLinkedSIMsStep ||
            "Dial *106# to verify all mobile numbers registered under your National ID."}
        </Text>
      </View>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    toolWrap: { gap: 12 },
    subHeading: {
      fontSize: 12.5,
      fontFamily: "Outfit_800ExtraBold",
      color: colors.gold,
      letterSpacing: 0.5,
    },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      gap: 6,
    },
    cardTop: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8,
    },
    cardTitle: {
      fontSize: 15,
      fontFamily: "Outfit_700Bold",
      color: colors.textPrimary,
      flexShrink: 1,
    },
    badge: {
      paddingHorizontal: 9,
      paddingVertical: 3,
      borderRadius: 999,
      borderWidth: 1,
      alignSelf: "flex-start",
      flexShrink: 1,
    },
    badgeText: { fontSize: 10, fontFamily: "Outfit_800ExtraBold", flexShrink: 1 },
    searchBar: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      height: 44,
      fontFamily: "Inter_600SemiBold",
      fontSize: 13.5,
    },
    detailLabel: {
      fontSize: 11,
      fontFamily: "Outfit_700Bold",
      color: colors.textMuted,
      marginTop: 4,
    },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 999,
    },
    pillBtnActive: { backgroundColor: colors.gold, borderColor: colors.gold },
    pillBtnText: {
      fontSize: 11,
      fontFamily: "Outfit_700Bold",
      color: colors.textSecondary,
    },
    pillBtnTextActive: { color: colors.kenyaBlack },
  });
}
