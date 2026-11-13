import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import passportData from "../../shared/data/passport-id-fees.json";

/** 7. Passport & ID Fees (mirrors kenyahub/src/app/tools/passport-id-fees/page.tsx) */
export function PassportFeesTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const passportTypes = passportData.passport?.types || [];
  const passportSteps = passportData.passport?.applicationProcess || [];
  const passportDocs = passportData.passport?.requiredDocuments || [];
  const nationalIdTypes = passportData.nationalId?.types || [];
  const nationalIdDocs = passportData.nationalId?.requiredDocuments || [];
  const otherDocs = passportData.otherDocuments || [];
  const hudumaLocations = passportData.hudumaLocations || [];

  return (
    <View style={styles.toolWrap}>
      {/* 1. Passport Fees */}
      <Text style={styles.subHeading}>Passport Fees (Apply via eCitizen)</Text>
      <View style={styles.card}>
        {passportTypes.map((f: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 10,
              borderBottomWidth: i === passportTypes.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 13.5, fontWeight: "800", color: theme.textPrimary, flex: 1 }}>
                {f.type}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "900", color: theme.gold }}>
                KES {f.fee.toLocaleString()}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 2 }}>
              {f.eligibility}
            </Text>
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              Processing: {f.processingTime}
            </Text>
          </View>
        ))}
      </View>

      {/* 2. Passport Application Process & Required Documents */}
      <Text style={styles.subHeading}>Passport Application Process</Text>
      <View style={styles.card}>
        {passportSteps.map((step: string, i: number) => (
          <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                backgroundColor: `${theme.gold}20`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: "900", color: theme.gold }}>
                {i + 1}
              </Text>
            </View>
            <Text style={{ fontSize: 12.5, color: theme.textSecondary, flex: 1, lineHeight: 18 }}>
              {step}
            </Text>
          </View>
        ))}
        <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10, marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
            Required Documents:
          </Text>
          {passportDocs.map((doc: string, i: number) => (
            <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginBottom: 2 }}>
              • {doc}
            </Text>
          ))}
        </View>
      </View>

      {/* 3. National ID Processing Fees */}
      <Text style={styles.subHeading}>National ID Processing Fees (NRB)</Text>
      <View style={styles.card}>
        {nationalIdTypes.map((idItem: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 10,
              borderBottomWidth: i === nationalIdTypes.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 13.5, fontWeight: "800", color: theme.textPrimary }}>
                {idItem.type}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "900", color: theme.kenyaGreenLight }}>
                {idItem.fee === 0 ? "Free" : `KES ${idItem.fee.toLocaleString()}`}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 2 }}>
              {idItem.notes}
            </Text>
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              Processing: {idItem.processingTime}
            </Text>
          </View>
        ))}
        <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10, marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
            Required for First-Time ID Applicants:
          </Text>
          {nationalIdDocs.map((doc: string, i: number) => (
            <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginBottom: 2 }}>
              • {doc}
            </Text>
          ))}
        </View>
      </View>

      {/* 4. Other Civil Registry Fees */}
      <Text style={styles.subHeading}>Other Civil Registry Fees</Text>
      <View style={styles.card}>
        {otherDocs.map((doc: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 8,
              borderBottomWidth: i === otherDocs.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                {doc.type}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                {doc.fee === 0 ? "Free" : `KES ${doc.fee.toLocaleString()}`}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textMuted, marginTop: 2 }}>
              {doc.description}
            </Text>
          </View>
        ))}
      </View>

      {/* 5. Huduma Centres */}
      <Text style={styles.subHeading}>Huduma Centres Nationwide</Text>
      <View style={styles.card}>
        {hudumaLocations.map((loc: string, i: number) => (
          <Text key={i} style={{ fontSize: 12, color: theme.textSecondary, paddingVertical: 3 }}>
            • {loc}
          </Text>
        ))}
      </View>
    </View>
  );
}

