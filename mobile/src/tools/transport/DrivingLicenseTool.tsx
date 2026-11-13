import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import dlData from "../../shared/data/driving-license-guide.json";

/** 6. Driving License Guide (mirrors kenyahub/src/app/tools/driving-license-guide/page.tsx) */
export function DrivingLicenseTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [activeTab, setActiveTab] = useState<"classes" | "process">("classes");


  return (
    <View style={styles.toolWrap}>
      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.bgCard,
          borderRadius: 12,
          padding: 4,
          borderWidth: 1,
          borderColor: theme.border,
        }}
      >
        <Pressable
          onPress={() => setActiveTab("classes")}
          style={{
            flex: 1,
            paddingVertical: 9,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: activeTab === "classes" ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: "800",
              color: activeTab === "classes" ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            License Classes
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("process")}
          style={{
            flex: 1,
            paddingVertical: 9,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: activeTab === "process" ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: "800",
              color: activeTab === "process" ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Application Process
          </Text>
        </Pressable>
      </View>

      {activeTab === "classes" ? (
        <>
          <Text style={styles.subHeading}>
            Estimated Total Cost (Including Driving School)
          </Text>
          <View style={styles.card}>
            {Object.values(dlData.totalEstimatedCost).map((cost: any, i: number) => (
              <View key={i} style={styles.tableRow}>
                <Text style={styles.rowLabel}>{cost.label}</Text>
                <Text style={[styles.rowValue, { color: theme.kenyaGreenLight }]}>
                  KES {cost.min.toLocaleString()} – KES {cost.max.toLocaleString()}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.subHeading}>
            NTSA Driving License Classes (A through G)
          </Text>
          {dlData.licenseClasses.map((cls, i) => (
            <View key={i} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, flex: 1 }}>
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: `${theme.gold}20`,
                      borderWidth: 1,
                      borderColor: `${theme.gold}40`,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "900", color: theme.gold }}>
                      {cls.class}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        color: theme.textPrimary,
                      }}
                    >
                      {cls.name}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      Min Age: {cls.minimumAge}+ years
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 10, color: theme.textMuted }}>NTSA Fee</Text>
                  <Text style={{ fontSize: 14, fontWeight: "900", color: theme.gold }}>
                    KES {cls.fee.toLocaleString()}
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12.5, color: theme.textSecondary, marginBottom: 8 }}>
                {cls.description}
              </Text>
              <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 8, gap: 4 }}>
                <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary }}>
                  Requirements:
                </Text>
                {cls.requirements.map((req, j) => (
                  <Text key={j} style={{ fontSize: 11.5, color: theme.textSecondary }}>
                    • {req}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.subHeading}>Step-by-Step Application Process</Text>
          {dlData.applicationProcess.map((step, i) => (
            <View key={i} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
                  <View
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      backgroundColor: `${theme.gold}20`,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 12, fontWeight: "900", color: theme.gold }}>
                      {step.step}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: theme.textPrimary,
                      flex: 1,
                    }}
                  >
                    {step.title}
                  </Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold }}>
                  {step.cost}
                </Text>
              </View>
              <Text style={{ fontSize: 12.5, color: theme.textSecondary, lineHeight: 18 }}>
                {step.description}
              </Text>
              {step.documents.length > 0 && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 8,
                  }}
                >
                  {step.documents.map((doc, j) => (
                    <View
                      key={j}
                      style={{
                        backgroundColor: `${theme.gold}15`,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 6,
                      }}
                    >
                      <Text style={{ fontSize: 11, color: theme.textPrimary }}>
                        {doc}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}

          <Text style={styles.subHeading}>Smart Driving License Renewal Info</Text>
          <View style={styles.card}>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Validity Period</Text>
              <Text style={styles.rowValue}>{dlData.renewalProcess.renewalPeriod}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Smart DL Renewal Fee</Text>
              <Text style={[styles.rowValue, { color: theme.gold }]}>
                KES {dlData.renewalProcess.renewalFee.toLocaleString()}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Late Renewal Penalty</Text>
              <Text style={[styles.rowValue, { color: theme.kenyaRedLight }]}>
                {dlData.renewalProcess.lateRenewalPenalty}
              </Text>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 8, marginTop: 4 }}>
              <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
                Required for Renewal:
              </Text>
              {dlData.renewalProcess.requirements.map((req, i) => (
                <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary }}>
                  • {req}
                </Text>
              ))}
            </View>
          </View>
        </>
      )}
    </View>
  );
}

