import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { KESInput, StatCard, Row, createStyles } from "./shared";
import mpesaData from "../../shared/data/mpesa-tariffs.json";

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
  const [includeWithdrawal, setIncludeWithdrawal] = useState(false);
  const amount = Math.max(0, Number(amountText.replace(/,/g, "")) || 0);

  const txTypes = mpesaData.transactionTypes as Record<
    MpesaTxType,
    { label: string; bands: { min: number; max: number; fee: number; note?: string }[] }
  >;

  const results = useMemo(() => {
    const baseFee = calcMpesaFee(amount, tab);
    const withdrawFee = includeWithdrawal ? calcMpesaFee(amount, "withdrawAgent") : 0;
    const fee =
      baseFee === null
        ? null
        : baseFee + (withdrawFee !== null ? withdrawFee : 0);
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
  }, [amount, tab, txTypes, includeWithdrawal]);

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
      <ExpandablePillRow contentContainerStyle={styles.pillSelector}>
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
      </ExpandablePillRow>

      <Pressable
        onPress={() => setIncludeWithdrawal((v) => !v)}
        style={[
          styles.tipCard,
          includeWithdrawal && { borderColor: theme.gold, backgroundColor: `${theme.gold}24` },
        ]}
      >
        <Ionicons
          name={includeWithdrawal ? "checkbox" : "square-outline"}
          size={18}
          color={theme.gold}
        />
        <Text style={[styles.tipText, { fontWeight: "700" }]}>
          Add Agent Withdrawal Fee ({calcMpesaFee(amount, "withdrawAgent") !== null ? `KES ${calcMpesaFee(amount, "withdrawAgent")}` : "N/A"}) so recipient gets exact KES {amount.toLocaleString()} cash
        </Text>
      </Pressable>

      <StatCard
        label={includeWithdrawal ? "TOTAL SEND + AGENT WITHDRAWAL FEE" : "M-PESA TRANSACTION FEE"}
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

