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
          <View style={{ flex: 1 }}>
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

// 2. Small Claims Court Calculator
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
          Mandatory statutory resolution: 60 Days · Max Jurisdiction: KES
          1,000,000
        </Text>
      </View>

      <ShareCopyBar
        title="Small Claims Court Filing Fee Assessment"
        summaryText={`Claim Amount: KES ${calc.amount.toLocaleString()}\nJurisdiction Status: ${
          calc.isEligible
            ? "Eligible for Small Claims Court (60-day statutory timeline)"
            : "Exceeds KES 1,000,000 limit (File in Chief Magistrate's Court)"
        }\nJudiciary e-Filing Fee: KES ${calc.fee.toLocaleString()}`}
        shareLabel="Share Filing Fee Summary"
      />

      <View style={styles.card}>
        <Text style={[styles.subHeading, { color: theme.kenyaGreenLight }]}>
          ✓ Claims Handled by Small Claims Court
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

// 3. NTSA Logbook Transfer Calculator
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

      <ShareCopyBar
        title={`NTSA Logbook Transfer (${calc.label})`}
        summaryText={`Vehicle Category: ${calc.label}\nNTSA Transfer Fee: KES ${calc.transfer.toLocaleString()}\nPurchase Tax: KES ${calc.tax.toLocaleString()}\nCopy of Records + eCitizen Convenience: KES ${calc.searchAndPlatform.toLocaleString()}\nTotal Payable: KES ${calc.total.toLocaleString()}`}
        shareLabel="Share Transfer Cost"
      />
    </View>
  );
}

// 4. Boma Yangu Housing Calculator
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
    const deposit = cost * 0.1;
    const principal = Math.max(0, cost - deposit);
    const r = tier.interestRate / 12;
    const n = tier.maxTermYears * 12;
    const monthly =
      principal > 0 && r > 0
        ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : 0;
    const relief = Math.min(9000, monthly * 0.15);
    return {
      cost,
      deposit,
      monthly,
      relief,
      net: Math.max(0, monthly - relief),
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
          10% Deposit: KES {Math.round(calc.deposit).toLocaleString()} · Gross
          TPS: KES {Math.round(calc.monthly).toLocaleString()} · 15% Tax Relief:
          −KES {Math.round(calc.relief).toLocaleString()}
        </Text>
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
        summaryText={`Unit Price: KES ${calc.cost.toLocaleString()}\n10% Deposit: KES ${Math.round(calc.deposit).toLocaleString()}\nGross Monthly TPS (${(tier.interestRate * 100).toFixed(0)}% for ${tier.maxTermYears} yrs): KES ${Math.round(calc.monthly).toLocaleString()}\n15% Affordable Housing Tax Relief: −KES ${Math.round(calc.relief).toLocaleString()}\nEffective Net Monthly Cost: KES ${Math.round(calc.net).toLocaleString()}`}
        shareLabel="Share Boma Yangu Plan"
      />
    </View>
  );
}

// 5. Rental Income Tax Calculator
export function RentalTaxTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [rentText, setRentText] = useState("85000");

  const calc = useMemo(() => {
    const rent = Math.max(
      0,
      parseInt(rentText.replace(/[^0-9]/g, ""), 10) || 0
    );
    const annualRent = rent * 12;
    const isBelowMriMin = annualRent > 0 && annualRent < 288000;
    const isAboveMriMax = annualRent > (rentalData.mriThresholdAnnual || 15000000);
    const tax = isBelowMriMin ? 0 : rent * (rentalData.mriRate || 0.075);
    const retained = Math.max(0, rent - tax);
    const statusLabel =
      annualRent === 0
        ? "Enter monthly rent above"
        : isBelowMriMin
        ? "Exempt (Below KES 288,000/yr / KES 24,000/mo MRI floor)"
        : isAboveMriMax
        ? "Exceeds KES 15M/yr — File under normal Income Tax"
        : "✓ Qualifies for simplified 7.5% MRI (Due 20th of next month)";
    return { rent, annualRent, tax, retained, isBelowMriMin, isAboveMriMax, statusLabel };
  }, [rentText]);

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

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.gold,
          }}
        >
          MONTHLY 7.5% MRI TAX DUE
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Outfit_800ExtraBold",
            color: theme.textPrimary,
          }}
        >
          KES {Math.round(calc.tax).toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Net Rent Retained: KES {Math.round(calc.retained).toLocaleString()} ·
          {calc.statusLabel}
        </Text>
      </View>

      <BreakdownBar
        title="Net Rent Retained (92.5%) vs KRA MRI Tax (7.5%)"
        segments={[
          {
            label: "Net Rent Retained",
            value: Math.round(calc.retained),
            color: theme.kenyaGreenLight,
          },
          {
            label: "7.5% KRA MRI Tax",
            value: Math.round(calc.tax),
            color: theme.kenyaRedLight,
          },
        ]}
      />

      <ShareCopyBar
        title="KRA Monthly Rental Income (MRI) 7.5% Tax Summary"
        summaryText={`Gross Monthly Rent: KES ${calc.rent.toLocaleString()}\nKRA 7.5% MRI Tax Due (by 20th): KES ${Math.round(calc.tax).toLocaleString()}\nNet Landlord Rent Retained: KES ${Math.round(calc.retained).toLocaleString()}`}
        shareLabel="Share MRI Tax Summary"
      />
    </View>
  );
}

// 6. Landlord Tenant Rights & Statutory Demand Notice Generator (MOB-12, UX-11)
export function LandlordTenantTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [tenantName, setTenantName] = useState("Jane Wanjiku");
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
      `TAKE FURTHER NOTICE that unless the sum of KES ${formattedDeposit} is refunded via M-Pesa/bank transfer within seven (7) days of this notice, I shall institute recovery proceedings in the Small Claims Court of Kenya under the Small Claims Court Act (2016) for the principal sum plus filing costs without further reference to you.`,
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
        <TextInput
          value={tenantName}
          onChangeText={setTenantName}
          placeholder="e.g. Jane Wanjiku"
          placeholderTextColor={theme.textMuted}
          style={[styles.searchBar, { color: theme.textPrimary }]}
        />

        <Text style={styles.detailLabel}>Landlord / Caretaker / Agency Name</Text>
        <TextInput
          value={landlordName}
          onChangeText={setLandlordName}
          placeholder="e.g. Sunrise Properties Ltd"
          placeholderTextColor={theme.textMuted}
          style={[styles.searchBar, { color: theme.textPrimary }]}
        />

        <Text style={styles.detailLabel}>Apartment / House & Estate</Text>
        <TextInput
          value={unitNumber}
          onChangeText={setUnitNumber}
          placeholder="e.g. House B4, Kilimani"
          placeholderTextColor={theme.textMuted}
          style={[styles.searchBar, { color: theme.textPrimary }]}
        />

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
        <TextInput
          value={vacateDate}
          onChangeText={setVacateDate}
          placeholder="e.g. 30th September 2026"
          placeholderTextColor={theme.textMuted}
          style={[styles.searchBar, { color: theme.textPrimary }]}
        />

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

// 7. Domestic Worker Wage Tool
export function DomesticWageTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [zoneIdx, setZoneIdx] = useState(0);

  const z = domesticData.zones[zoneIdx] || domesticData.zones[0];
  const sha = Math.max(300, Math.round(z.monthlyMinimum * 0.0275));
  const nssf = domesticData.statutoryDeductions?.nssfTier1Matching || 420;
  const net = z.monthlyMinimum - sha - nssf;

  const contractSummary = useMemo(
    () =>
      [
        `DOMESTIC WORKER (HOUSEHELP) STATUTORY WAGE & CONTRACT SUMMARY`,
        `Zone: ${z.name}`,
        `Gazetted Monthly Minimum Gross Wage: KES ${z.monthlyMinimum.toLocaleString()}`,
        `Daily Rate: KES ${z.dailyRate} · Hourly Rate: KES ${z.hourlyRate}`,
        `Employee SHA Deduction (2.75% / min KES 300): −KES ${sha.toLocaleString()}`,
        `Employee NSSF Tier I Deduction: −KES ${nssf.toLocaleString()}`,
        `Net Take-Home Pay to Worker: KES ${Math.round(net).toLocaleString()}`,
        `Statutory Leave Entitlements: ${domesticData.statutoryDeductions.leaveDaysAnnual} paid annual leave days, ${domesticData.statutoryDeductions.paidMaternityMonths} months maternity leave, 1 rest day per week.`,
      ].join("\n"),
    [z, sha, nssf, net]
  );

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Municipality / Location Zone</Text>
      <ExpandablePillRow
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        {domesticData.zones.map((item, idx) => (
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
          KES {z.monthlyMinimum.toLocaleString()}
        </Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Daily: KES {z.dailyRate} · SHA: −KES {sha} · NSSF: −KES {nssf} · Net
          Take-Home: KES {Math.round(net).toLocaleString()}
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
            label: "SHA + NSSF",
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

// 8. Airtime Drain & USSD Tool
export function AirtimeDrainTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [netIdx, setNetIdx] = useState(0);

  const net = airtimeData.networks[netIdx] || airtimeData.networks[0];

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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
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

      <View style={[styles.card, { borderColor: theme.kenyaGreenLight }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
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
    },
    badgeText: { fontSize: 10, fontFamily: "Outfit_800ExtraBold" },
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
