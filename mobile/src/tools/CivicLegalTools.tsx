import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, ThemeColors } from "../theme";
import { ExpandablePillRow } from "../components/ExpandablePillRow";

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
  const [selectedLevel, setSelectedLevel] = useState(shaData.facilityLevels[2].level);

  const activeLevel =
    shaData.facilityLevels.find((l) => l.level === selectedLevel) || shaData.facilityLevels[0];

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Facility Accreditation Level (SHA Levels 2–6)</Text>
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {shaData.facilityLevels.map((lvl) => {
          const active = lvl.level === selectedLevel;
          return (
            <Pressable
              key={lvl.level}
              onPress={() => setSelectedLevel(lvl.level)}
              style={[styles.pillBtn, active && styles.pillBtnActive]}
            >
              <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                {lvl.level}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11, fontWeight: "800", color: theme.gold }}>{activeLevel.level}</Text>
            <Text style={styles.cardTitle}>{activeLevel.name}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: "rgba(47,164,99,0.18)", borderColor: theme.kenyaGreenLight }]}>
            <Text style={[styles.badgeText, { color: theme.kenyaGreenLight }]}>{activeLevel.copay}</Text>
          </View>
        </View>

        <Text style={[styles.subHeading, { marginTop: 6 }]}>Covered Services:</Text>
        <View style={{ gap: 4 }}>
          {activeLevel.services.map((srv, idx) => (
            <Text key={idx} style={{ fontSize: 12, color: theme.textSecondary }}>
              • <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>{srv}</Text>
            </Text>
          ))}
        </View>
      </View>

      <Text style={styles.subHeading}>Key Specialized SHA Packages</Text>
      {shaData.packages.map((pkg) => (
        <View key={pkg.id} style={styles.card}>
          <Text style={styles.cardTitle}>{pkg.name}</Text>
          <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold, marginTop: 2 }}>{pkg.coveredAmount}</Text>
          <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 2 }}>{pkg.notes}</Text>
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
    const amount = Math.max(0, parseInt(claimText.replace(/[^0-9]/g, ""), 10) || 0);
    const isEligible = amount > 0 && amount <= sccData.maxClaimLimit;
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
      <View style={styles.card}>
        <Text style={styles.detailLabel}>Enter Disputed / Claim Amount (KES)</Text>
        <TextInput
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={claimText}
          onChangeText={setClaimText}
          keyboardType="numeric"
          placeholder="e.g. 75000"
          placeholderTextColor={theme.textMuted}
          style={[styles.searchBar, { marginTop: 6, fontWeight: "800", color: theme.textPrimary }]}
        />
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>JUDICIARY E-FILING FEE</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>KES {calc.fee.toLocaleString()}</Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary }}>
          Mandatory statutory resolution: 60 Days · Limit: KES 1,000,000
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.subHeading, { color: theme.kenyaGreenLight }]}>✓ Claims Handled by Small Claims Court</Text>
        {sccData.qualifyingClaimTypes.map((q, i) => (
          <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}>• {q}</Text>
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
      const total = transfer + tax + ntsaData.onlineSearchFee + ntsaData.platformFee;
      return { transfer, tax, total };
    }
    const band = ntsaData.transferFeeBands[selectedCcIndex] || ntsaData.transferFeeBands[0];
    const total = band.transferFee + band.purchaseTax + ntsaData.onlineSearchFee + ntsaData.platformFee;
    return { transfer: band.transferFee, tax: band.purchaseTax, total };
  }, [selectedCcIndex, isMotorcycle]);

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 6 }}>
        <Pressable
          onPress={() => setIsMotorcycle(false)}
          style={[styles.pillBtn, !isMotorcycle && styles.pillBtnActive, { flex: 1, alignItems: "center" }]}
        >
          <Text style={[styles.pillBtnText, !isMotorcycle && styles.pillBtnTextActive]}>Motor Vehicle</Text>
        </Pressable>
        <Pressable
          onPress={() => setIsMotorcycle(true)}
          style={[styles.pillBtn, isMotorcycle && styles.pillBtnActive, { flex: 1, alignItems: "center" }]}
        >
          <Text style={[styles.pillBtnText, isMotorcycle && styles.pillBtnTextActive]}>Motorcycle / Boda</Text>
        </Pressable>
      </View>

      {!isMotorcycle && (
        <View style={styles.card}>
          <Text style={styles.detailLabel}>Select Engine Rating (cc)</Text>
          <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 6 }}>
            {ntsaData.transferFeeBands.map((b, idx) => (
              <Pressable
                key={idx}
                onPress={() => setSelectedCcIndex(idx)}
                style={[styles.pillBtn, selectedCcIndex === idx && styles.pillBtnActive]}
              >
                <Text style={[styles.pillBtnText, selectedCcIndex === idx && styles.pillBtnTextActive]}>
                  {b.minCc}–{b.maxCc} cc
                </Text>
              </Pressable>
            ))}
          </ExpandablePillRow>
        </View>
      )}

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>TOTAL ECITIZEN / TIMS TRANSFER COST</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>KES {calc.total.toLocaleString()}</Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Transfer: KES {calc.transfer.toLocaleString()} · Tax: KES {calc.tax.toLocaleString()} · Search: KES 550
        </Text>
      </View>
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
    const cost = Math.max(0, parseInt(priceText.replace(/[^0-9]/g, ""), 10) || 0);
    const deposit = cost * 0.10;
    const principal = Math.max(0, cost - deposit);
    const r = tier.interestRate / 12;
    const n = tier.maxTermYears * 12;
    const monthly =
      principal > 0 && r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;
    const relief = Math.min(9000, monthly * 0.15);
    return { deposit, monthly, relief, net: Math.max(0, monthly - relief) };
  }, [priceText, tier]);

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Housing Programme Tier</Text>
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {bomaData.tiers.map((t, idx) => (
          <Pressable
            key={t.tier}
            onPress={() => setSelectedTierIndex(idx)}
            style={[styles.pillBtn, selectedTierIndex === idx && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, selectedTierIndex === idx && styles.pillBtnTextActive]}>
              {t.tier} ({(t.interestRate * 100).toFixed(0)}%)
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <View style={styles.card}>
        <Text style={styles.detailLabel}>Unit Purchase Price (KES)</Text>
        <TextInput
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={priceText}
          onChangeText={setPriceText}
          keyboardType="numeric"
          style={[styles.searchBar, { marginTop: 6, fontWeight: "800", color: theme.textPrimary }]}
        />
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>MONTHLY REPAYMENT (AFTER KRA RELIEF)</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>KES {Math.round(calc.net).toLocaleString()}</Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Gross: KES {Math.round(calc.monthly).toLocaleString()} · 15% Tax Relief: −KES {Math.round(calc.relief).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

// 5. Rental Income Tax Calculator
export function RentalTaxTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [rentText, setRentText] = useState("85000");

  const calc = useMemo(() => {
    const rent = Math.max(0, parseInt(rentText.replace(/[^0-9]/g, ""), 10) || 0);
    const tax = rent * 0.075;
    return { rent, tax };
  }, [rentText]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.card}>
        <Text style={styles.detailLabel}>Gross Monthly Rent Collected (KES)</Text>
        <TextInput
            key={`ti-3-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={rentText}
          onChangeText={setRentText}
          keyboardType="numeric"
          style={[styles.searchBar, { marginTop: 6, fontWeight: "800", color: theme.textPrimary }]}
        />
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>MONTHLY 7.5% MRI TAX DUE</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>KES {Math.round(calc.tax).toLocaleString()}</Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Statutory due date: 20th of every month on KRA iTax
        </Text>
      </View>
    </View>
  );
}

// 6. Landlord Tenant Rights Tool
export function LandlordTenantTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={styles.toolWrap}>
      <View style={[styles.card, { borderColor: theme.kenyaRedLight }]}>
        <Text style={[styles.subHeading, { color: theme.kenyaRedLight }]}>✕ Illegal Landlord Actions in Kenya</Text>
        {tenantData.illegalActions.map((a, i) => (
          <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}>• {a}</Text>
        ))}
      </View>

      <View style={[styles.card, { borderColor: theme.kenyaGreenLight }]}>
        <Text style={[styles.subHeading, { color: theme.kenyaGreenLight }]}>✓ Lawful Deposit Deductions</Text>
        {tenantData.lawfulDeductions.map((d, i) => (
          <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 3 }}>• {d}</Text>
        ))}
      </View>
    </View>
  );
}

// 7. Domestic Worker Wage Tool
export function DomesticWageTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [zoneIdx, setZoneIdx] = useState(0);

  const z = domesticData.zones[zoneIdx] || domesticData.zones[0];
  const sha = z.monthlyMinimum * 0.0275;
  const net = z.monthlyMinimum - sha - 420;

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Municipality / Location Zone</Text>
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {domesticData.zones.map((item, idx) => (
          <Pressable
            key={item.id}
            onPress={() => setZoneIdx(idx)}
            style={[styles.pillBtn, zoneIdx === idx && styles.pillBtnActive]}
          >
            <Text style={[styles.pillBtnText, zoneIdx === idx && styles.pillBtnTextActive]}>
              {item.name.split("(")[0].trim()}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>GAZETTED LEGAL MINIMUM WAGE</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>KES {z.monthlyMinimum.toLocaleString()}</Text>
        <Text style={{ fontSize: 11, color: theme.textSecondary, marginTop: 4 }}>
          Daily: KES {z.dailyRate} · Employee Net: KES {Math.round(net).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

// 8. Airtime Drain & USSD Tool
export function AirtimeDrainTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [netIdx, setNetIdx] = useState(0);

  const net = airtimeData.networks[netIdx] || airtimeData.networks[0];

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 6 }}>
        {airtimeData.networks.map((n, idx) => (
          <Pressable
            key={n.name}
            onPress={() => setNetIdx(idx)}
            style={[styles.pillBtn, netIdx === idx && styles.pillBtnActive, { flex: 1, alignItems: "center" }]}
          >
            <Text style={[styles.pillBtnText, netIdx === idx && styles.pillBtnTextActive]}>{n.name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={[styles.card, { borderColor: theme.gold }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.gold }}>UNSUBSCRIBE AIRTIME-DRAINING SMS</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>{net.checkSubscriptionsUSSD}</Text>
        <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 4 }}>{net.checkSubscriptionsStep}</Text>
      </View>

      <View style={[styles.card, { borderColor: theme.kenyaGreenLight }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", color: theme.kenyaGreenLight }}>CHECK NUMBERS LINKED TO YOUR ID</Text>
        <Text style={{ fontSize: 24, fontWeight: "900", color: theme.textPrimary }}>{net.checkLinkedSIMsUSSD}</Text>
        <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 4 }}>{net.checkLinkedSIMsStep}</Text>
      </View>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    toolWrap: { gap: 12 },
    subHeading: { fontSize: 12.5, fontWeight: "800", color: colors.gold, letterSpacing: 0.5 },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      gap: 6,
    },
    cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: colors.textPrimary, flexShrink: 1 },
    badge: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 999, borderWidth: 1 },
    badgeText: { fontSize: 10, fontWeight: "800" },
    searchBar: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      height: 44,
    },
    detailLabel: { fontSize: 11, fontWeight: "700", color: colors.textMuted },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 999,
    },
    pillBtnActive: { backgroundColor: colors.gold, borderColor: colors.gold },
    pillBtnText: { fontSize: 11, fontWeight: "700", color: colors.textSecondary },
    pillBtnTextActive: { color: colors.kenyaBlack },
  });
}
