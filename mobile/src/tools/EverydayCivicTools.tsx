import React, { useEffect, useMemo, useState } from "react";
import {
  Linking,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  getThemedCardStyle,
  getThemedInputStyle,
  pressableStyle,
  triggerHaptic,
  type ThemeColors,
} from "../theme";
import { ExpandablePillRow } from "../components/ExpandablePillRow";
import everydayData from "../shared/data/kenya-everyday-tools-2026.json";

const HUDUMA_BAG_STORAGE_KEY = "kenyahub_ecitizen_huduma_bag_v1";

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString()}`;
}

function parseNumeric(raw: string): number {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function createSharedStyles(theme: ThemeColors) {
  return StyleSheet.create({
    wrap: {
      gap: 12,
    },
    sectionTitle: {
      fontSize: 13.5,
      fontWeight: "800",
      color: theme.textPrimary,
      letterSpacing: 0.2,
    },
    label: {
      fontSize: 11.5,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 4,
    },
    card: {
      padding: 13,
      gap: 8,
    },
    rowWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    rowStartWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 8,
    },
    titleShrink: {
      fontSize: 13.5,
      fontWeight: "700",
      color: theme.textPrimary,
      flexShrink: 1,
    },
    subText: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 17,
      flexShrink: 1,
    },
    mutedText: {
      fontSize: 11.5,
      color: theme.textMuted,
      lineHeight: 16,
      flexShrink: 1,
    },
    kpiGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    kpiBox: {
      flexGrow: 1,
      flexBasis: 145,
      padding: 12,
      gap: 3,
    },
    kpiLabel: {
      fontSize: 10.5,
      fontWeight: "800",
      color: theme.textMuted,
      letterSpacing: 0.4,
    },
    kpiValue: {
      fontSize: 17,
      fontWeight: "800",
      color: theme.textPrimary,
    },
    badge: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 999,
      borderWidth: 1,
      alignSelf: "flex-start",
    },
    badgeText: {
      fontSize: 11,
      fontWeight: "800",
    },
    pillRowContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    pillBtn: {
      paddingHorizontal: 11,
      paddingVertical: 7,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.outlineVariant,
      backgroundColor: theme.surfaceContainerLow,
    },
    pillBtnActive: {
      borderColor: theme.gold,
      backgroundColor: theme.primaryContainer,
    },
    pillBtnText: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
    },
    pillBtnTextActive: {
      color: theme.onPrimaryContainer,
    },
    inputBase: {
      paddingHorizontal: 11,
      paddingVertical: 9,
      fontSize: 13.5,
      color: theme.textPrimary,
    },
    inputRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    inputCol: {
      flexGrow: 1,
      flexBasis: 140,
      minWidth: 130,
    },
    primaryBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: theme.kenyaGreen,
    },
    primaryBtnText: {
      fontSize: 13,
      fontWeight: "800",
      color: "#FFFFFF",
    },
    secondaryBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingHorizontal: 12,
      paddingVertical: 9,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.outlineVariant,
      backgroundColor: theme.surfaceContainerHigh,
    },
    secondaryBtnText: {
      fontSize: 12.5,
      fontWeight: "700",
      color: theme.textPrimary,
    },
    checkRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      paddingVertical: 6,
    },
    checkBox: {
      width: 20,
      height: 20,
      borderRadius: 6,
      borderWidth: 1.5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1,
    },
  });
}

// ============================================================================
// 1. eCitizen & Huduma Centre Docs Planner
// ============================================================================
type PassportMode = "normal" | "lost" | "mutilated";

export function EcitizenDocsPlannerTool() {
  const { theme, themeConfig, themeMetrics } = useTheme();
  const styles = useMemo(() => createSharedStyles(theme), [theme]);
  const cardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );

  const docs = everydayData.ecitizenDocs.documents;
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "national-id-new",
    "good-conduct",
  ]);
  const [passportMode, setPassportMode] = useState<PassportMode>("normal");
  const [lateBirthCert, setLateBirthCert] = useState(false);
  const [packedMap, setPackedMap] = useState<Record<string, boolean>>({});
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(HUDUMA_BAG_STORAGE_KEY)
      .then((raw) => {
        if (!active || !raw) return;
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setPackedMap(parsed);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setStorageReady(true);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    AsyncStorage.setItem(HUDUMA_BAG_STORAGE_KEY, JSON.stringify(packedMap)).catch(
      () => {}
    );
  }, [packedMap, storageReady]);

  const toggleDoc = (id: string) => {
    triggerHaptic(8);
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getDocFee = (doc: (typeof docs)[number]): number => {
    if (doc.id === "epassport-66") {
      if (passportMode === "lost") return doc.lostFeeKes ?? doc.feeKes;
      if (passportMode === "mutilated") return doc.mutilatedFeeKes ?? doc.feeKes;
      return doc.feeKes;
    }
    if (doc.id === "birth-certificate") {
      return lateBirthCert ? doc.lateFeeKes ?? doc.feeKes : doc.feeKes;
    }
    return doc.feeKes;
  };

  const selectedDocs = useMemo(
    () => docs.filter((d) => selectedIds.includes(d.id)),
    [docs, selectedIds]
  );

  const totalPaybillKes = useMemo(
    () => selectedDocs.reduce((sum, d) => sum + getDocFee(d), 0),
    [selectedDocs, passportMode, lateBirthCert]
  );

  const maxTurnaroundDays = useMemo(
    () =>
      selectedDocs.reduce((max, d) => Math.max(max, d.turnaroundDays), 0),
    [selectedDocs]
  );

  const checklistItems = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const d of selectedDocs) {
      for (const req of d.requiredDocs) {
        if (!seen.has(req)) {
          seen.add(req);
          list.push(req);
        }
      }
    }
    if (totalPaybillKes > 0) {
      const paybillLine = `M-Pesa Paybill 222222 confirmation SMS (${formatKes(totalPaybillKes)})`;
      if (!seen.has(paybillLine)) {
        list.unshift(paybillLine);
      }
    }
    return list;
  }, [selectedDocs, totalPaybillKes]);

  const packedCount = useMemo(
    () => checklistItems.filter((item) => packedMap[item]).length,
    [checklistItems, packedMap]
  );

  const togglePacked = (item: string) => {
    triggerHaptic(6);
    setPackedMap((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const resetChecklist = () => {
    triggerHaptic(8);
    setPackedMap({});
  };

  const handleShare = async () => {
    triggerHaptic(8);
    const docLines = selectedDocs
      .map((d) => `- ${d.label}: ${formatKes(getDocFee(d))} (${d.turnaroundDays} days)`)
      .join("\n");
    const bagLines = checklistItems
      .map((item) => `${packedMap[item] ? "[x]" : "[ ]"} ${item}`)
      .join("\n");
    const message = [
      "eCitizen & Huduma Centre Visit Plan",
      `Paybill 222222 Total: ${formatKes(totalPaybillKes)}`,
      `Max Turnaround: ${maxTurnaroundDays} working days`,
      "",
      "Selected Documents:",
      docLines || "None selected",
      "",
      "Huduma Bag Checklist:",
      bagLines || "No items",
    ].join("\n");
    try {
      await Share.share({ message });
    } catch {
      // User cancelled share sheet
    }
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.kpiGrid}>
        <View
          style={[
            cardStyle,
            styles.kpiBox,
            {
              borderColor: `${theme.kenyaGreenLight}66`,
              backgroundColor: `${theme.kenyaGreenLight}14`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>PAYBILL 222222 TOTAL</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {formatKes(totalPaybillKes)}
          </Text>
          <Text style={styles.mutedText}>
            {selectedDocs.length} document{selectedDocs.length === 1 ? "" : "s"} selected
          </Text>
        </View>
        <View style={[cardStyle, styles.kpiBox]}>
          <Text style={styles.kpiLabel}>HUDUMA BAG READY</Text>
          <Text style={styles.kpiValue}>
            {packedCount} / {checklistItems.length}
          </Text>
          <Text style={styles.mutedText}>
            Est. {maxTurnaroundDays || 0} working days max
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        1. Select Documents for Your eCitizen / Huduma Visit
      </Text>
      {docs.map((doc) => {
        const active = selectedIds.includes(doc.id);
        const fee = getDocFee(doc);
        return (
          <Pressable
            key={doc.id}
            onPress={() => toggleDoc(doc.id)}
            style={pressableStyle([
              cardStyle,
              styles.card,
              active && {
                borderColor: theme.gold,
                backgroundColor: theme.primaryContainer,
              },
            ])}
          >
            <View style={styles.rowWrap}>
              <View style={[styles.rowStartWrap, { flexShrink: 1, flexGrow: 1, minWidth: 160 }]}>
                <Ionicons
                  name={active ? "checkbox" : "square-outline"}
                  size={20}
                  color={active ? theme.gold : theme.textMuted}
                />
                <Text style={styles.titleShrink}>{doc.label}</Text>
              </View>
              <View
                style={[
                  styles.badge,
                  {
                    borderColor:
                      fee === 0 ? `${theme.kenyaGreenLight}77` : `${theme.gold}77`,
                    backgroundColor:
                      fee === 0
                        ? `${theme.kenyaGreenLight}1C`
                        : `${theme.gold}1C`,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: fee === 0 ? theme.kenyaGreenLight : theme.gold },
                  ]}
                >
                  {fee === 0 ? "FREE (KES 0)" : formatKes(fee)}
                </Text>
              </View>
            </View>
            <Text style={styles.mutedText}>
              {doc.agency} • {doc.turnaroundDays} days
              {doc.legalAuthority ? ` • ${doc.legalAuthority}` : ""}
            </Text>

            {active && doc.id === "epassport-66" && (
              <View style={{ marginTop: 4 }}>
                <Text style={styles.label}>Passport Application Type</Text>
                <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
                  {(
                    [
                      { id: "normal", label: `New/Renewal (${formatKes(doc.feeKes)})` },
                      {
                        id: "lost",
                        label: `Lost (${formatKes(doc.lostFeeKes ?? doc.feeKes)})`,
                      },
                      {
                        id: "mutilated",
                        label: `Mutilated (${formatKes(doc.mutilatedFeeKes ?? doc.feeKes)})`,
                      },
                    ] as const
                  ).map((opt) => {
                    const chosen = passportMode === opt.id;
                    return (
                      <Pressable
                        key={opt.id}
                        onPress={() => {
                          triggerHaptic(6);
                          setPassportMode(opt.id);
                        }}
                        style={pressableStyle([
                          styles.pillBtn,
                          chosen && styles.pillBtnActive,
                        ])}
                      >
                        <Text
                          style={[
                            styles.pillBtnText,
                            chosen && styles.pillBtnTextActive,
                          ]}
                        >
                          {opt.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ExpandablePillRow>
              </View>
            )}

            {active && doc.id === "birth-certificate" && (
              <View style={{ marginTop: 4 }}>
                <Text style={styles.label}>Registration Timing</Text>
                <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
                  <Pressable
                    onPress={() => {
                      triggerHaptic(6);
                      setLateBirthCert(false);
                    }}
                    style={pressableStyle([
                      styles.pillBtn,
                      !lateBirthCert && styles.pillBtnActive,
                    ])}
                  >
                    <Text
                      style={[
                        styles.pillBtnText,
                        !lateBirthCert && styles.pillBtnTextActive,
                      ]}
                    >
                      Current ({formatKes(doc.feeKes)})
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      triggerHaptic(6);
                      setLateBirthCert(true);
                    }}
                    style={pressableStyle([
                      styles.pillBtn,
                      lateBirthCert && styles.pillBtnActive,
                    ])}
                  >
                    <Text
                      style={[
                        styles.pillBtnText,
                        lateBirthCert && styles.pillBtnTextActive,
                      ]}
                    >
                      Late Reg ({formatKes(doc.lateFeeKes ?? 700)})
                    </Text>
                  </Pressable>
                </ExpandablePillRow>
                {lateBirthCert && doc.lateBreakdown && (
                  <Text style={[styles.mutedText, { marginTop: 4 }]}>
                    {doc.lateBreakdown}
                  </Text>
                )}
              </View>
            )}
          </Pressable>
        );
      })}

      <View style={[cardStyle, styles.card]}>
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            2. Huduma Bag Checklist (Saved Offline)
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${theme.sky}77`,
                backgroundColor: `${theme.sky}1C`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: theme.sky }]}>
              {packedCount}/{checklistItems.length} Packed
            </Text>
          </View>
        </View>

        {checklistItems.length === 0 ? (
          <Text style={styles.subText}>
            Select at least one document above to generate your Huduma bag
            checklist.
          </Text>
        ) : (
          checklistItems.map((item) => {
            const checked = !!packedMap[item];
            return (
              <Pressable
                key={item}
                onPress={() => togglePacked(item)}
                style={styles.checkRow}
              >
                <View
                  style={[
                    styles.checkBox,
                    {
                      borderColor: checked
                        ? theme.kenyaGreenLight
                        : theme.outline,
                      backgroundColor: checked
                        ? theme.kenyaGreenLight
                        : "transparent",
                    },
                  ]}
                >
                  {checked && (
                    <Ionicons name="checkmark" size={13} color="#FFFFFF" />
                  )}
                </View>
                <Text
                  style={[
                    styles.subText,
                    checked && {
                      textDecorationLine: "line-through",
                      color: theme.textMuted,
                    },
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })
        )}

        <View style={[styles.rowStartWrap, { marginTop: 4 }]}>
          <Pressable
            onPress={handleShare}
            style={pressableStyle([styles.primaryBtn, { flexGrow: 1 }])}
          >
            <Ionicons name="share-social-outline" size={16} color="#FFFFFF" />
            <Text style={styles.primaryBtnText}>Share Visit Plan</Text>
          </Pressable>
          <Pressable
            onPress={resetChecklist}
            style={pressableStyle(styles.secondaryBtn)}
          >
            <Ionicons
              name="refresh-outline"
              size={15}
              color={theme.textPrimary}
            />
            <Text style={styles.secondaryBtnText}>Reset Bag</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 2. TVET (KNQF Levels 4-6) & KMTC Pathway Matcher
// ============================================================================
const MEAN_GRADES = ["C", "C-", "D+", "D", "D-", "E"] as const;
const SUBJECT_GRADES = [
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "E",
] as const;

const GRADE_POINTS: Record<string, number> = {
  E: 1,
  "D-": 2,
  D: 3,
  "D+": 4,
  "C-": 5,
  C: 6,
  "C+": 7,
  "B-": 8,
  B: 9,
  "B+": 10,
  "A-": 11,
  A: 12,
};

const KMTC_SUBJECT_MIN: Record<
  string,
  { lang: string; bio: string; sci: string }
> = {
  "dip-nursing": { lang: "C", bio: "C", sci: "C-" },
  "dip-clinical-med": { lang: "C", bio: "C", sci: "C-" },
  "cert-nursing": { lang: "C-", bio: "C-", sci: "D+" },
  "cert-nutrition": { lang: "D+", bio: "D+", sci: "D+" },
  "cert-ortho-trauma": { lang: "C-", bio: "C-", sci: "D+" },
  "cert-public-health": { lang: "D+", bio: "D+", sci: "D" },
  "cert-mortuary": { lang: "D", bio: "D", sci: "D-" },
};

export function TvetKmtcPathwayTool() {
  const { theme, isDark, themeConfig, themeMetrics } = useTheme();
  const styles = useMemo(() => createSharedStyles(theme), [theme]);
  const cardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );

  const [meanGrade, setMeanGrade] = useState<string>("C-");
  const [langGrade, setLangGrade] = useState<string>("C-");
  const [bioGrade, setBioGrade] = useState<string>("C-");
  const [sciGrade, setSciGrade] = useState<string>("D+");

  const { knqfLevels, kmtcProgrammes } = everydayData.tvetKmtc;
  const warningColor = isDark ? "#FBBF24" : "#92400E";

  const eligibleKnqf = useMemo(
    () => knqfLevels.filter((lvl) => lvl.eligibleGrades.includes(meanGrade)),
    [knqfLevels, meanGrade]
  );

  const highestKnqf = eligibleKnqf[eligibleKnqf.length - 1] ?? knqfLevels[0];

  const kmtcMatches = useMemo(() => {
    const meanPts = GRADE_POINTS[meanGrade] ?? 1;
    const langPts = GRADE_POINTS[langGrade] ?? 1;
    const bioPts = GRADE_POINTS[bioGrade] ?? 1;
    const sciPts = GRADE_POINTS[sciGrade] ?? 1;

    return kmtcProgrammes.map((prog) => {
      const reqMean = GRADE_POINTS[prog.minMeanGrade] ?? 6;
      const subj = KMTC_SUBJECT_MIN[prog.id] ?? {
        lang: prog.minMeanGrade,
        bio: prog.minMeanGrade,
        sci: prog.minMeanGrade,
      };
      const meanOk = meanPts >= reqMean;
      const langOk = langPts >= (GRADE_POINTS[subj.lang] ?? 1);
      const bioOk = bioPts >= (GRADE_POINTS[subj.bio] ?? 1);
      const sciOk = sciPts >= (GRADE_POINTS[subj.sci] ?? 1);

      const missing: string[] = [];
      if (!meanOk) missing.push(`Mean ${prog.minMeanGrade}`);
      if (!langOk) missing.push(`Eng/Kis ${subj.lang}`);
      if (!bioOk) missing.push(`Bio ${subj.bio}`);
      if (!sciOk) missing.push(`Chem/Phy/Math ${subj.sci}`);

      const status: "eligible" | "subject-gap" | "upgrade" =
        meanOk && langOk && bioOk && sciOk
          ? "eligible"
          : meanOk
          ? "subject-gap"
          : "upgrade";

      return { ...prog, status, missing };
    });
  }, [kmtcProgrammes, meanGrade, langGrade, bioGrade, sciGrade]);

  const directKmtcCount = kmtcMatches.filter(
    (p) => p.status === "eligible"
  ).length;

  const upgradeLadder = useMemo(() => {
    const pts = GRADE_POINTS[meanGrade] ?? 1;
    if (pts <= 2) {
      return [
        {
          step: "Step 1 • Months 1–12",
          title: "KNQF Level 4 — Artisan Certificate (TVETA / KNEC)",
          detail:
            "Enroll in Plumbing, Electrical Wireman, Masonry, Welding, Tailoring, or Hairdressing at a Vocational Training Centre (VTC) with grade E or D-.",
        },
        {
          step: "Step 2 • Months 13–36",
          title: "Upgrade to KNQF Level 5 — Craft Certificate",
          detail:
            "Use your KNEC Artisan pass to articulate directly into a 2-year Craft Certificate at a Technical Training Institute (TTI), then progress to Level 6 Diploma.",
        },
      ];
    }
    if (pts <= 4) {
      return [
        {
          step: "Step 1 • Years 1–2",
          title: "KNQF Level 5 — Craft Certificate or KMTC Certificate",
          detail:
            "Qualifies for KUCCPS TVET Craft courses (D/D+) and KMTC Certificate in Public Health (D+) or Mortuary Science (D).",
        },
        {
          step: "Step 2 • Years 3–5",
          title: "Upgrade to KNQF Level 6 — Diploma (TVET / KMTC)",
          detail:
            "Progress with KNQF credit transfer into a 3-year Diploma (Engineering, ICT, Agriculture, or Health Sciences) with HELB TVET loan eligibility.",
        },
      ];
    }
    if (pts === 5) {
      return [
        {
          step: "Step 1 • Years 1–3",
          title: "KNQF Level 6 TVET Diploma or KMTC Certificate (C-)",
          detail:
            "Direct entry to National Polytechnic Diplomas (C-) and KMTC Certificate programmes (Community Health Nursing, Nutrition, Orthopaedic & Trauma Medicine).",
        },
        {
          step: "Step 2 • Articulation",
          title: "Upgrade to KMTC Diploma or University Degree (Level 7)",
          detail:
            "KMTC Certificate graduates upgrade to Diploma in 1.5–2 years; TVET Diploma holders enter Bachelor's Degrees at Year 2 with credit exemptions.",
        },
      ];
    }
    return [
      {
        step: "Step 1 • Years 1–3",
        title: "Direct Entry — KMTC Diploma (KRCHN / Clinical Med) & Level 6",
        detail:
          "Mean Grade C unlocks top KMTC Diplomas (subject to Bio/Eng/Kis C & Chem/Phy/Math C-) plus all National Polytechnic Diplomas.",
      },
      {
        step: "Step 2 • Years 4–6",
        title: "Articulate to KNQF Level 7 — Bachelor's Degree",
        detail:
          "Transition directly into BSc Nursing, Clinical Medicine, or Engineering degree programmes via KNQA credit transfer.",
      },
    ];
  }, [meanGrade]);

  return (
    <View style={styles.wrap}>
      <View style={[cardStyle, styles.card]}>
        <Text style={styles.label}>KCSE Mean Grade (C to E)</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {MEAN_GRADES.map((g) => {
            const active = meanGrade === g;
            return (
              <Pressable
                key={g}
                onPress={() => {
                  triggerHaptic(8);
                  setMeanGrade(g);
                }}
                style={pressableStyle([
                  styles.pillBtn,
                  active && styles.pillBtnActive,
                ])}
              >
                <Text
                  style={[
                    styles.pillBtnText,
                    active && styles.pillBtnTextActive,
                  ]}
                >
                  {g}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        <Text style={[styles.label, { marginTop: 6 }]}>
          English / Kiswahili (Best Language)
        </Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {SUBJECT_GRADES.map((g) => (
            <Pressable
              key={`lang-${g}`}
              onPress={() => {
                triggerHaptic(6);
                setLangGrade(g);
              }}
              style={pressableStyle([
                styles.pillBtn,
                langGrade === g && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  langGrade === g && styles.pillBtnTextActive,
                ]}
              >
                {g}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>

        <Text style={[styles.label, { marginTop: 4 }]}>Biology Grade</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {SUBJECT_GRADES.map((g) => (
            <Pressable
              key={`bio-${g}`}
              onPress={() => {
                triggerHaptic(6);
                setBioGrade(g);
              }}
              style={pressableStyle([
                styles.pillBtn,
                bioGrade === g && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  bioGrade === g && styles.pillBtnTextActive,
                ]}
              >
                {g}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>

        <Text style={[styles.label, { marginTop: 4 }]}>
          Chemistry / Physics / Maths (Best Cluster Subject)
        </Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {SUBJECT_GRADES.map((g) => (
            <Pressable
              key={`sci-${g}`}
              onPress={() => {
                triggerHaptic(6);
                setSciGrade(g);
              }}
              style={pressableStyle([
                styles.pillBtn,
                sciGrade === g && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  sciGrade === g && styles.pillBtnTextActive,
                ]}
              >
                {g}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>
      </View>

      <View style={styles.kpiGrid}>
        <View
          style={[
            cardStyle,
            styles.kpiBox,
            {
              borderColor: `${theme.kenyaGreenLight}66`,
              backgroundColor: `${theme.kenyaGreenLight}14`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>HIGHEST KNQF ENTRY</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            Level {highestKnqf.level}
          </Text>
          <Text style={styles.mutedText}>{highestKnqf.name}</Text>
        </View>
        <View style={[cardStyle, styles.kpiBox]}>
          <Text style={styles.kpiLabel}>ELIGIBLE KMTC COURSES</Text>
          <Text style={styles.kpiValue}>
            {directKmtcCount} / {kmtcProgrammes.length}
          </Text>
          <Text style={styles.mutedText}>
            With {meanGrade} + selected subjects
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>KNQF Levels 4–6 Eligibility</Text>
      {knqfLevels.map((lvl) => {
        const ok = lvl.eligibleGrades.includes(meanGrade);
        return (
          <View key={lvl.level} style={[cardStyle, styles.card]}>
            <View style={styles.rowWrap}>
              <Text style={styles.titleShrink}>
                KNQF Level {lvl.level}: {lvl.name}
              </Text>
              <View
                style={[
                  styles.badge,
                  {
                    borderColor: ok
                      ? `${theme.kenyaGreenLight}77`
                      : `${theme.outline}77`,
                    backgroundColor: ok
                      ? `${theme.kenyaGreenLight}1C`
                      : theme.surfaceContainerHigh,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: ok ? theme.kenyaGreenLight : theme.textMuted },
                  ]}
                >
                  {ok ? "Direct Entry" : `Min ${lvl.minKcse}`}
                </Text>
              </View>
            </View>
            <Text style={styles.mutedText}>
              Duration: {lvl.durationMonths} months • Min KCSE: {lvl.minKcse}
            </Text>
            <Text style={styles.subText}>{lvl.upgradePath}</Text>
          </View>
        );
      })}

      <Text style={styles.sectionTitle}>KMTC 2026 Programme Matcher</Text>
      {kmtcMatches.map((prog) => {
        const badgeColor =
          prog.status === "eligible"
            ? theme.kenyaGreenLight
            : prog.status === "subject-gap"
            ? warningColor
            : theme.textMuted;
        const badgeLabel =
          prog.status === "eligible"
            ? "Eligible Now"
            : prog.status === "subject-gap"
            ? "Subject Gap"
            : `Needs ${prog.minMeanGrade}`;
        return (
          <View key={prog.id} style={[cardStyle, styles.card]}>
            <View style={styles.rowWrap}>
              <Text style={styles.titleShrink}>{prog.name}</Text>
              <View
                style={[
                  styles.badge,
                  {
                    borderColor: `${badgeColor}77`,
                    backgroundColor: `${badgeColor}18`,
                  },
                ]}
              >
                <Text style={[styles.badgeText, { color: badgeColor }]}>
                  {badgeLabel}
                </Text>
              </View>
            </View>
            <Text style={styles.mutedText}>
              KNQF Level {prog.knqfLevel} • {prog.durationYears} yrs • Min Mean{" "}
              {prog.minMeanGrade}
            </Text>
            <Text style={styles.subText}>Key subjects: {prog.keySubjects}</Text>
            {prog.missing.length > 0 && (
              <Text style={[styles.mutedText, { color: badgeColor }]}>
                Gap: {prog.missing.join(" • ")}
              </Text>
            )}
          </View>
        );
      })}

      <Text style={styles.sectionTitle}>Your 2-Step Upgrade Ladder</Text>
      {upgradeLadder.map((item, idx) => (
        <View
          key={idx}
          style={[
            cardStyle,
            styles.card,
            { borderLeftWidth: 3, borderLeftColor: theme.gold },
          ]}
        >
          <View style={styles.rowWrap}>
            <Text style={styles.titleShrink}>{item.title}</Text>
            <View
              style={[
                styles.badge,
                {
                  borderColor: `${theme.gold}77`,
                  backgroundColor: `${theme.gold}1A`,
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: theme.gold }]}>
                {item.step}
              </Text>
            </View>
          </View>
          <Text style={styles.subText}>{item.detail}</Text>
        </View>
      ))}
    </View>
  );
}

// ============================================================================
// 3. Used Car eLogbook & True Ownership Cost Checker (June 2026 NTSA Rules)
// ============================================================================
type CheckState = "pending" | "ok" | "flag";
const CRITICAL_CHECK_INDICES = new Set([0, 1, 2, 3, 9]);

export function UsedCarElogbookTool() {
  const { theme, isDark, themeConfig, themeMetrics } = useTheme();
  const styles = useMemo(() => createSharedStyles(theme), [theme]);
  const cardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const inputStyle = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );

  const carData = everydayData.usedCarElogbook;
  const warningColor = isDark ? "#FBBF24" : "#92400E";

  const [mfgYear, setMfgYear] = useState("2015");
  const [carPrice, setCarPrice] = useState("1250000");
  const [fuelType, setFuelType] = useState<"petrol" | "diesel">("petrol");
  const [monthlyKm, setMonthlyKm] = useState("1200");
  const [kmPerLitre, setKmPerLitre] = useState("13");
  const [insuranceType, setInsuranceType] = useState<"comprehensive" | "tpo">(
    "comprehensive"
  );
  const [annualService, setAnnualService] = useState("48000");
  const [transferFee, setTransferFee] = useState("3000");
  const [checks, setChecks] = useState<Record<number, CheckState>>({});

  const audit = useMemo(() => {
    const yearNum = Math.max(1980, Math.min(2026, Math.round(parseNumeric(mfgYear)) || 2015));
    const ageYears = 2026 - yearNum;
    const over15Years = ageYears > carData.comprehensiveAgeCutoffYears;

    let okCount = 0;
    let flagCount = 0;
    let criticalFlagged = false;

    carData.redFlagChecks.forEach((_, idx) => {
      const st = checks[idx] ?? "pending";
      if (st === "ok") okCount += 1;
      if (st === "flag") {
        flagCount += 1;
        if (CRITICAL_CHECK_INDICES.has(idx)) criticalFlagged = true;
      }
    });

    const pendingCount = carData.redFlagChecks.length - okCount - flagCount;

    let verdict: "SAFE" | "NEGOTIATE" | "WALK AWAY" = "SAFE";
    let verdictReason =
      pendingCount === 0
        ? "All 10 NTSA & physical checks cleared within 15-year insurance limit."
        : `No red flags yet (${pendingCount} checks still unverified on-site).`;

    if (criticalFlagged || flagCount >= 2) {
      verdict = "WALK AWAY";
      verdictReason = criticalFlagged
        ? "Critical title/eLogbook/VIN/encumbrance red flag detected — do not pay deposit."
        : `${flagCount} red flags detected on-site — high fraud or mechanical loss risk.`;
    } else if (flagCount === 1 || over15Years) {
      verdict = "NEGOTIATE";
      verdictReason = over15Years
        ? `Vehicle is ${ageYears} yrs old (exceeds 15-yr comprehensive insurance cutoff) — price in TPO-only risk.`
        : "1 non-critical red flag found — negotiate repair/compliance discount before paying.";
    }

    return {
      ageYears,
      over15Years,
      okCount,
      flagCount,
      pendingCount,
      verdict,
      verdictReason,
    };
  }, [mfgYear, checks, carData]);

  const ownership = useMemo(() => {
    const price = parseNumeric(carPrice);
    const kmMo = parseNumeric(monthlyKm);
    const kml = Math.max(1, parseNumeric(kmPerLitre) || 13);
    const fuelPrice =
      fuelType === "petrol"
        ? carData.epraFuelKesPerL.petrol
        : carData.epraFuelKesPerL.diesel;
    const annualFuel = Math.round(((kmMo * 12) / kml) * fuelPrice);

    const effectiveInsType = audit.over15Years ? "tpo" : insuranceType;
    const annualInsurance =
      effectiveInsType === "tpo"
        ? carData.insuranceMinKes.tpo
        : Math.max(carData.insuranceMinKes.comprehensive, Math.round(price * 0.04));

    const annualServ = Math.round(parseNumeric(annualService));
    const year1Transfer =
      carData.formViiCopyOfRecordsKes +
      carData.eStickerFeeKes +
      Math.round(parseNumeric(transferFee));

    const recurringAnnual = annualFuel + annualInsurance + annualServ;
    const year1Total = recurringAnnual + year1Transfer;
    const monthlyRunning = Math.round(recurringAnnual / 12);
    const costPerKm = kmMo > 0 ? Math.round((recurringAnnual / (kmMo * 12)) * 10) / 10 : 0;

    return {
      annualFuel,
      annualInsurance,
      effectiveInsType,
      annualServ,
      year1Transfer,
      recurringAnnual,
      year1Total,
      monthlyRunning,
      costPerKm,
    };
  }, [
    carPrice,
    monthlyKm,
    kmPerLitre,
    fuelType,
    insuranceType,
    annualService,
    transferFee,
    audit.over15Years,
    carData,
  ]);

  const verdictColor =
    audit.verdict === "WALK AWAY"
      ? theme.kenyaRedLight
      : audit.verdict === "NEGOTIATE"
      ? warningColor
      : theme.kenyaGreenLight;

  const setCheck = (idx: number, state: CheckState) => {
    triggerHaptic(6);
    setChecks((prev) => ({
      ...prev,
      [idx]: prev[idx] === state ? "pending" : state,
    }));
  };

  return (
    <View style={styles.wrap}>
      <View
        style={[
          cardStyle,
          styles.card,
          {
            borderColor: `${verdictColor}77`,
            backgroundColor: `${verdictColor}16`,
          },
        ]}
      >
        <View style={styles.rowWrap}>
          <Text style={[styles.titleShrink, { color: verdictColor }]}>
            Yard Verdict: {audit.verdict}
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${verdictColor}88`,
                backgroundColor: `${verdictColor}22`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: verdictColor }]}>
              {audit.flagCount} Flags • {audit.okCount}/10 OK
            </Text>
          </View>
        </View>
        <Text style={styles.subText}>{audit.verdictReason}</Text>
        <Text style={styles.mutedText}>
          June 10, 2026 NTSA eLogbook Rules: Form VII {formatKes(carData.formViiCopyOfRecordsKes)} • e-Sticker {formatKes(carData.eStickerFeeKes)} • Seller OTP expires in {carData.otpExpiryDays} days • Transfer within {carData.transferDeadlineDays} days.
        </Text>
      </View>

      <View style={[cardStyle, styles.card]}>
        <Text style={styles.sectionTitle}>Vehicle & Age Cutoff Check</Text>
        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Manufacture Year</Text>
            <TextInput
              value={mfgYear}
              onChangeText={(t) => setMfgYear(t.replace(/[^0-9]/g, "").slice(0, 4))}
              keyboardType="numeric"
              placeholder="2015"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Asking Price (KES)</Text>
            <TextInput
              value={carPrice}
              onChangeText={(t) => setCarPrice(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholder="1250000"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.mutedText}>
            Vehicle age: {audit.ageYears} years (2026)
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: audit.over15Years
                  ? `${theme.kenyaRedLight}77`
                  : `${theme.kenyaGreenLight}77`,
                backgroundColor: audit.over15Years
                  ? `${theme.kenyaRedLight}1C`
                  : `${theme.kenyaGreenLight}1C`,
              },
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                {
                  color: audit.over15Years
                    ? theme.kenyaRedLight
                    : theme.kenyaGreenLight,
                },
              ]}
            >
              {audit.over15Years
                ? ">15 Yrs • TPO Insurance Only"
                : "≤15 Yrs • Comprehensive Eligible"}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        1. On-Site NTSA eLogbook & Mechanical Red-Flag Scorer
      </Text>
      {carData.redFlagChecks.map((checkText, idx) => {
        const st = checks[idx] ?? "pending";
        const isCritical = CRITICAL_CHECK_INDICES.has(idx);
        return (
          <View key={idx} style={[cardStyle, styles.card]}>
            <View style={styles.rowWrap}>
              <Text style={styles.titleShrink}>
                #{idx + 1} {isCritical ? "• Critical" : "• Standard"}
              </Text>
              <View style={styles.rowStartWrap}>
                <Pressable
                  onPress={() => setCheck(idx, "ok")}
                  style={pressableStyle([
                    styles.pillBtn,
                    st === "ok" && {
                      borderColor: theme.kenyaGreenLight,
                      backgroundColor: `${theme.kenyaGreenLight}22`,
                    },
                  ])}
                >
                  <Text
                    style={[
                      styles.pillBtnText,
                      st === "ok" && { color: theme.kenyaGreenLight },
                    ]}
                  >
                    Verified OK
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setCheck(idx, "flag")}
                  style={pressableStyle([
                    styles.pillBtn,
                    st === "flag" && {
                      borderColor: theme.kenyaRedLight,
                      backgroundColor: `${theme.kenyaRedLight}22`,
                    },
                  ])}
                >
                  <Text
                    style={[
                      styles.pillBtnText,
                      st === "flag" && { color: theme.kenyaRedLight },
                    ]}
                  >
                    Red Flag
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.subText}>{checkText}</Text>
          </View>
        );
      })}

      <View style={[cardStyle, styles.card]}>
        <Text style={styles.sectionTitle}>
          2. True Annual Ownership Cost (Fuel + Insurance + Service + Transfer)
        </Text>

        <Text style={styles.label}>Fuel Type (EPRA Pump Price)</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setFuelType("petrol");
            }}
            style={pressableStyle([
              styles.pillBtn,
              fuelType === "petrol" && styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                fuelType === "petrol" && styles.pillBtnTextActive,
              ]}
            >
              Petrol (KES {carData.epraFuelKesPerL.petrol}/L)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setFuelType("diesel");
            }}
            style={pressableStyle([
              styles.pillBtn,
              fuelType === "diesel" && styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                fuelType === "diesel" && styles.pillBtnTextActive,
              ]}
            >
              Diesel (KES {carData.epraFuelKesPerL.diesel}/L)
            </Text>
          </Pressable>
        </ExpandablePillRow>

        <Text style={[styles.label, { marginTop: 4 }]}>Insurance Cover</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setInsuranceType("comprehensive");
            }}
            style={pressableStyle([
              styles.pillBtn,
              insuranceType === "comprehensive" &&
                !audit.over15Years &&
                styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                insuranceType === "comprehensive" &&
                  !audit.over15Years &&
                  styles.pillBtnTextActive,
              ]}
            >
              Comprehensive (~4%, min 25K)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              triggerHaptic(6);
              setInsuranceType("tpo");
            }}
            style={pressableStyle([
              styles.pillBtn,
              (insuranceType === "tpo" || audit.over15Years) &&
                styles.pillBtnActive,
            ])}
          >
            <Text
              style={[
                styles.pillBtnText,
                (insuranceType === "tpo" || audit.over15Years) &&
                  styles.pillBtnTextActive,
              ]}
            >
              Third-Party Only (min 5K)
            </Text>
          </Pressable>
        </ExpandablePillRow>

        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Monthly Distance (km)</Text>
            <TextInput
              value={monthlyKm}
              onChangeText={(t) => setMonthlyKm(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Efficiency (km/L)</Text>
            <TextInput
              value={kmPerLitre}
              onChangeText={(t) => setKmPerLitre(t.replace(/[^0-9.]/g, ""))}
              keyboardType="decimal-pad"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Annual Service (KES)</Text>
            <TextInput
              value={annualService}
              onChangeText={(t) => setAnnualService(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>NTSA Transfer Fee (KES)</Text>
            <TextInput
              value={transferFee}
              onChangeText={(t) => setTransferFee(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>

        <View style={styles.kpiGrid}>
          <View style={[cardStyle, styles.kpiBox]}>
            <Text style={styles.kpiLabel}>YEAR-1 TOTAL COST</Text>
            <Text style={[styles.kpiValue, { color: theme.gold }]}>
              {formatKes(ownership.year1Total)}
            </Text>
            <Text style={styles.mutedText}>
              Incl. Form VII + e-Sticker + Transfer
            </Text>
          </View>
          <View style={[cardStyle, styles.kpiBox]}>
            <Text style={styles.kpiLabel}>MONTHLY RUNNING</Text>
            <Text style={styles.kpiValue}>
              {formatKes(ownership.monthlyRunning)}/mo
            </Text>
            <Text style={styles.mutedText}>
              ~KES {ownership.costPerKm}/km recurring
            </Text>
          </View>
        </View>

        <View style={styles.rowWrap}>
          <Text style={styles.subText}>Annual Fuel</Text>
          <Text style={styles.titleShrink}>{formatKes(ownership.annualFuel)}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.subText}>
            Insurance ({ownership.effectiveInsType === "tpo" ? "TPO" : "Comprehensive"})
          </Text>
          <Text style={styles.titleShrink}>
            {formatKes(ownership.annualInsurance)}
          </Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.subText}>Annual Service & Maintenance</Text>
          <Text style={styles.titleShrink}>{formatKes(ownership.annualServ)}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.subText}>
            Year-1 Transfer (Form VII 550 + e-Sticker 750 + NTSA)
          </Text>
          <Text style={styles.titleShrink}>
            {formatKes(ownership.year1Transfer)}
          </Text>
        </View>
      </View>
    </View>
  );
}

// ============================================================================
// 4. Child Maintenance & Co-Parenting Calculator (Children Act 2022 Cap 141)
// ============================================================================
type CustodianMode = "parentA" | "parentB" | "shared";

export function ChildMaintenanceTool() {
  const { theme, themeConfig, themeMetrics } = useTheme();
  const styles = useMemo(() => createSharedStyles(theme), [theme]);
  const cardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const inputStyle = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );

  const cmData = everydayData.childMaintenance;

  const [incomeA, setIncomeA] = useState("95000");
  const [incomeB, setIncomeB] = useState("65000");
  const [custodian, setCustodian] = useState<CustodianMode>("parentB");
  const [termlyFees, setTermlyFees] = useState("0");
  const [expenses, setExpenses] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const cat of cmData.expenseCategories) {
      init[cat.id] = String(cat.defaultMonthlyKes);
    }
    return init;
  });
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  const calc = useMemo(() => {
    const incA = Math.max(0, parseNumeric(incomeA));
    const incB = Math.max(0, parseNumeric(incomeB));
    const totalIncome = incA + incB;
    const shareA = totalIncome > 0 ? incA / totalIncome : 0.5;
    const shareB = totalIncome > 0 ? incB / totalIncome : 0.5;

    const monthlySum = cmData.expenseCategories.reduce(
      (sum, cat) => sum + parseNumeric(expenses[cat.id] ?? "0"),
      0
    );
    const termlyMonthlyEq = Math.round((parseNumeric(termlyFees) * 3) / 12);
    const totalMonthly = monthlySum + termlyMonthlyEq;
    const parentAShareKes = Math.round(totalMonthly * shareA);
    const parentBShareKes = Math.max(0, totalMonthly - parentAShareKes);

    return {
      shareAPct: Math.round(shareA * 100),
      shareBPct: Math.round(shareB * 100),
      termlyMonthlyEq,
      totalMonthly,
      parentAShareKes,
      parentBShareKes,
    };
  }, [incomeA, incomeB, expenses, termlyFees, cmData.expenseCategories]);

  const handleShare = async () => {
    triggerHaptic(8);
    const lines = cmData.expenseCategories
      .map((c) => `- ${c.label}: ${formatKes(parseNumeric(expenses[c.id] ?? "0"))}/mo`)
      .join("\n");
    const message = [
      "Child Maintenance Split (Children Act 2022, Cap 141 s.110 & s.114)",
      `Total Monthly Child Needs: ${formatKes(calc.totalMonthly)}`,
      `Parent A (${calc.shareAPct}%): ${formatKes(calc.parentAShareKes)}/mo`,
      `Parent B (${calc.shareBPct}%): ${formatKes(calc.parentBShareKes)}/mo`,
      calc.termlyMonthlyEq > 0
        ? `Includes Termly Fees Equivalent: ${formatKes(calc.termlyMonthlyEq)}/mo`
        : "",
      "",
      "Monthly Expense Breakdown:",
      lines,
    ]
      .filter(Boolean)
      .join("\n");
    try {
      await Share.share({ message });
    } catch {
      // Cancelled
    }
  };

  return (
    <View style={styles.wrap}>
      <View style={[cardStyle, styles.card]}>
        <Text style={styles.sectionTitle}>
          1. Net Monthly Incomes (Cap 141 s.110 / s.114 Split)
        </Text>
        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Parent A Net Income (KES)</Text>
            <TextInput
              value={incomeA}
              onChangeText={(t) => setIncomeA(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Parent B Net Income (KES)</Text>
            <TextInput
              value={incomeB}
              onChangeText={(t) => setIncomeB(t.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 4 }]}>Primary Custody</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {(
            [
              { id: "parentB", label: "Parent B (Custodial)" },
              { id: "parentA", label: "Parent A (Custodial)" },
              { id: "shared", label: "Shared Custody" },
            ] as const
          ).map((opt) => (
            <Pressable
              key={opt.id}
              onPress={() => {
                triggerHaptic(6);
                setCustodian(opt.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                custodian === opt.id && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  custodian === opt.id && styles.pillBtnTextActive,
                ]}
              >
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>
      </View>

      <View style={styles.kpiGrid}>
        <View
          style={[
            cardStyle,
            styles.kpiBox,
            {
              borderColor: `${theme.kenyaGreenLight}66`,
              backgroundColor: `${theme.kenyaGreenLight}14`,
            },
          ]}
        >
          <Text style={styles.kpiLabel}>PARENT A ({calc.shareAPct}%)</Text>
          <Text style={[styles.kpiValue, { color: theme.kenyaGreenLight }]}>
            {formatKes(calc.parentAShareKes)}
          </Text>
          <Text style={styles.mutedText}>
            {custodian === "parentB"
              ? "Monthly transfer to Parent B"
              : "Proportional monthly share"}
          </Text>
        </View>
        <View style={[cardStyle, styles.kpiBox]}>
          <Text style={styles.kpiLabel}>PARENT B ({calc.shareBPct}%)</Text>
          <Text style={[styles.kpiValue, { color: theme.gold }]}>
            {formatKes(calc.parentBShareKes)}
          </Text>
          <Text style={styles.mutedText}>
            {custodian === "parentA"
              ? "Monthly transfer to Parent A"
              : "Proportional monthly share"}
          </Text>
        </View>
      </View>

      <View style={[cardStyle, styles.card]}>
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            2. Editable Monthly & Termly Child Expenses
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${theme.gold}77`,
                backgroundColor: `${theme.gold}1A`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              Total: {formatKes(calc.totalMonthly)}/mo
            </Text>
          </View>
        </View>

        {cmData.expenseCategories.map((cat) => (
          <View key={cat.id} style={styles.rowWrap}>
            <Text style={[styles.subText, { flexGrow: 1, minWidth: 150 }]}>
              {cat.label}
            </Text>
            <TextInput
              value={expenses[cat.id] ?? "0"}
              onChangeText={(t) =>
                setExpenses((prev) => ({
                  ...prev,
                  [cat.id]: t.replace(/[^0-9]/g, ""),
                }))
              }
              keyboardType="numeric"
              placeholderTextColor={theme.textMuted}
              style={[
                inputStyle,
                styles.inputBase,
                { width: 112, textAlign: "right" },
              ]}
            />
          </View>
        ))}

        <View style={[styles.rowWrap, { marginTop: 4 }]}>
          <View style={{ flexShrink: 1, flexGrow: 1, minWidth: 150 }}>
            <Text style={styles.titleShrink}>
              Extra Termly Fees (per term × 3/yr)
            </Text>
            <Text style={styles.mutedText}>
              Adds {formatKes(calc.termlyMonthlyEq)}/mo equivalent
            </Text>
          </View>
          <TextInput
            value={termlyFees}
            onChangeText={(t) => setTermlyFees(t.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor={theme.textMuted}
            style={[
              inputStyle,
              styles.inputBase,
              { width: 112, textAlign: "right" },
            ]}
          />
        </View>
      </View>

      <View style={[cardStyle, styles.card]}>
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            3. PRA (s.33) & Affidavit of Means Checklist
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${theme.kenyaRedLight}77`,
                backgroundColor: `${theme.kenyaRedLight}18`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: theme.kenyaRedLight }]}>
              Contempt Cap: {formatKes(cmData.contemptFineCeilingKes)}
            </Text>
          </View>
        </View>
        <Text style={styles.mutedText}>
          {cmData.statute}: {cmData.sections.s33}
        </Text>

        {cmData.checklist.map((item, idx) => {
          const checked = !!checkedDocs[idx];
          return (
            <Pressable
              key={idx}
              onPress={() => {
                triggerHaptic(6);
                setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }));
              }}
              style={styles.checkRow}
            >
              <View
                style={[
                  styles.checkBox,
                  {
                    borderColor: checked ? theme.kenyaGreenLight : theme.outline,
                    backgroundColor: checked
                      ? theme.kenyaGreenLight
                      : "transparent",
                  },
                ]}
              >
                {checked && (
                  <Ionicons name="checkmark" size={13} color="#FFFFFF" />
                )}
              </View>
              <Text
                style={[
                  styles.subText,
                  checked && {
                    textDecorationLine: "line-through",
                    color: theme.textMuted,
                  },
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          onPress={handleShare}
          style={pressableStyle([styles.primaryBtn, { marginTop: 4 }])}
        >
          <Ionicons name="share-social-outline" size={16} color="#FFFFFF" />
          <Text style={styles.primaryBtnText}>Share Maintenance Split</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ============================================================================
// 5. Article 49 Arrest Rights, 24-Hour Rule & IPOA 1559 Companion
// ============================================================================
function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function formatDateInput(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function formatTimeInput(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

function formatHumanDateTime(d: Date): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} • ${pad2(
    d.getHours()
  )}:${pad2(d.getMinutes())}`;
}

function computeCourtDeadline(arrest: Date): {
  raw24h: Date;
  courtDeadline: Date;
  rolledOver: boolean;
  reason: string;
} {
  const raw24h = new Date(arrest.getTime() + 24 * 60 * 60 * 1000);
  const day = raw24h.getDay(); // 0=Sun, 6=Sat
  const mins = raw24h.getHours() * 60 + raw24h.getMinutes();

  // Ordinary court hours: Mon-Fri, 08:00 - 17:00
  if (day === 6) {
    // Saturday -> Monday 17:00
    const next = new Date(raw24h);
    next.setDate(next.getDate() + 2);
    next.setHours(17, 0, 0, 0);
    return {
      raw24h,
      courtDeadline: next,
      rolledOver: true,
      reason: "24h ends on Saturday — rolls over to end of Monday court day (17:00).",
    };
  }
  if (day === 0) {
    // Sunday -> Monday 17:00
    const next = new Date(raw24h);
    next.setDate(next.getDate() + 1);
    next.setHours(17, 0, 0, 0);
    return {
      raw24h,
      courtDeadline: next,
      rolledOver: true,
      reason: "24h ends on Sunday — rolls over to end of Monday court day (17:00).",
    };
  }
  if (mins > 17 * 60) {
    // After 17:00 on a weekday -> next court day 17:00
    const next = new Date(raw24h);
    next.setDate(next.getDate() + (day === 5 ? 3 : 1));
    next.setHours(17, 0, 0, 0);
    return {
      raw24h,
      courtDeadline: next,
      rolledOver: true,
      reason:
        day === 5
          ? "24h ends after Friday 17:00 — rolls over to end of Monday court day (17:00)."
          : "24h ends after 17:00 court hours — rolls over to end of next court day (17:00).",
    };
  }
  if (mins < 8 * 60) {
    // Early morning weekday before 08:00 -> end of same court day 17:00
    const next = new Date(raw24h);
    next.setHours(17, 0, 0, 0);
    return {
      raw24h,
      courtDeadline: next,
      rolledOver: true,
      reason:
        "24h ends before 08:00 court hours — must be produced before end of that court day (17:00).",
    };
  }
  return {
    raw24h,
    courtDeadline: raw24h,
    rolledOver: false,
    reason: "24h falls within ordinary Mon–Fri court hours (08:00–17:00).",
  };
}

export function Article49RightsTool() {
  const { theme, isDark, themeConfig, themeMetrics } = useTheme();
  const styles = useMemo(() => createSharedStyles(theme), [theme]);
  const cardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const inputStyle = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );

  const art49 = everydayData.article49Rights;
  const warningColor = isDark ? "#FBBF24" : "#92400E";

  const [arrestDateStr, setArrestDateStr] = useState(() =>
    formatDateInput(new Date())
  );
  const [arrestTimeStr, setArrestTimeStr] = useState(() =>
    formatTimeInput(new Date())
  );
  const [langMode, setLangMode] = useState<"bilingual" | "en" | "sw">(
    "bilingual"
  );

  // Offline Incident Builder fields
  const [station, setStation] = useState("");
  const [obNumber, setObNumber] = useState("");
  const [officerInfo, setOfficerInfo] = useState("");
  const [personName, setPersonName] = useState("");
  const [incidentNotes, setIncidentNotes] = useState("");

  const deadlineInfo = useMemo(() => {
    const [y, m, d] = arrestDateStr.split("-").map(Number);
    const [hh, mm] = arrestTimeStr.split(":").map(Number);
    const valid =
      Number.isFinite(y) &&
      Number.isFinite(m) &&
      Number.isFinite(d) &&
      Number.isFinite(hh) &&
      Number.isFinite(mm) &&
      m >= 1 &&
      m <= 12 &&
      d >= 1 &&
      d <= 31;
    const arrestDate = valid
      ? new Date(y, m - 1, d, Math.min(23, Math.max(0, hh)), Math.min(59, Math.max(0, mm)))
      : new Date();

    const computed = computeCourtDeadline(arrestDate);
    const diffMs = computed.courtDeadline.getTime() - Date.now();
    const isOverdue = diffMs < 0;
    const absHrs = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60));
    const absMins = Math.floor((Math.abs(diffMs) % (1000 * 60 * 60)) / (1000 * 60));

    return {
      arrestDate,
      ...computed,
      isOverdue,
      remainingLabel: isOverdue
        ? `OVERDUE by ${absHrs}h ${absMins}m`
        : `${absHrs}h ${absMins}m remaining`,
    };
  }, [arrestDateStr, arrestTimeStr]);

  const applyPreset = (preset: "now" | "2h" | "fri18" | "sat10") => {
    triggerHaptic(6);
    const now = new Date();
    if (preset === "now") {
      setArrestDateStr(formatDateInput(now));
      setArrestTimeStr(formatTimeInput(now));
      return;
    }
    if (preset === "2h") {
      const d = new Date(now.getTime() - 2 * 60 * 60 * 1000);
      setArrestDateStr(formatDateInput(d));
      setArrestTimeStr(formatTimeInput(d));
      return;
    }
    if (preset === "fri18") {
      const d = new Date(now);
      const diffToFri = (5 - d.getDay() + 7) % 7;
      d.setDate(d.getDate() + diffToFri);
      d.setHours(18, 0, 0, 0);
      setArrestDateStr(formatDateInput(d));
      setArrestTimeStr("18:00");
      return;
    }
    const d = new Date(now);
    const diffToSat = (6 - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + diffToSat);
    d.setHours(10, 0, 0, 0);
    setArrestDateStr(formatDateInput(d));
    setArrestTimeStr("10:00");
  };

  const buildIncidentText = () => {
    return [
      "ARTICLE 49 ARREST & IPOA INCIDENT LOG",
      `Arrested Person: ${personName.trim() || "Not specified"}`,
      `Police Station / Location: ${station.trim() || "Not specified"}`,
      `OB Number: ${obNumber.trim() || "Not yet issued"}`,
      `Officer Name / Service No.: ${officerInfo.trim() || "Not disclosed"}`,
      `Arrest Time: ${formatHumanDateTime(deadlineInfo.arrestDate)}`,
      `Art. 49(1)(f) Court Deadline: ${formatHumanDateTime(deadlineInfo.courtDeadline)} (${deadlineInfo.remainingLabel})`,
      incidentNotes.trim() ? `Notes: ${incidentNotes.trim()}` : "",
      "",
      `IPOA 24/7 Toll-Free: ${art49.ipoa.tollFree}`,
      `IPOA WhatsApp: ${art49.ipoa.whatsapp}`,
      `IPOA Email: ${art49.ipoa.email}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleShareIncident = async () => {
    triggerHaptic(8);
    try {
      await Share.share({ message: buildIncidentText() });
    } catch {
      // Cancelled
    }
  };

  const handleCallIpoa = () => {
    triggerHaptic(8);
    Linking.openURL(`tel:${art49.ipoa.tollFree}`).catch(() => {});
  };

  const handleWhatsAppIpoa = () => {
    triggerHaptic(8);
    const waDigits = `254${art49.ipoa.whatsapp.replace(/[^0-9]/g, "").replace(/^0/, "")}`;
    const encoded = encodeURIComponent(buildIncidentText());
    Linking.openURL(`https://wa.me/${waDigits}?text=${encoded}`).catch(() => {});
  };

  return (
    <View style={styles.wrap}>
      <View
        style={[
          cardStyle,
          styles.card,
          {
            borderColor: deadlineInfo.isOverdue
              ? `${theme.kenyaRedLight}88`
              : `${theme.kenyaGreenLight}66`,
            backgroundColor: deadlineInfo.isOverdue
              ? `${theme.kenyaRedLight}18`
              : `${theme.kenyaGreenLight}14`,
          },
        ]}
      >
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            Art. 49(1)(f) Court Deadline
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: deadlineInfo.isOverdue
                  ? `${theme.kenyaRedLight}88`
                  : `${theme.kenyaGreenLight}88`,
                backgroundColor: deadlineInfo.isOverdue
                  ? `${theme.kenyaRedLight}24`
                  : `${theme.kenyaGreenLight}22`,
              },
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                {
                  color: deadlineInfo.isOverdue
                    ? theme.kenyaRedLight
                    : theme.kenyaGreenLight,
                },
              ]}
            >
              {deadlineInfo.remainingLabel}
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.kpiValue,
            {
              color: deadlineInfo.isOverdue
                ? theme.kenyaRedLight
                : theme.textPrimary,
            },
          ]}
        >
          {formatHumanDateTime(deadlineInfo.courtDeadline)}
        </Text>
        <Text style={styles.subText}>{deadlineInfo.reason}</Text>
        {deadlineInfo.rolledOver && (
          <Text style={[styles.mutedText, { color: warningColor }]}>
            Raw 24h mark: {formatHumanDateTime(deadlineInfo.raw24h)} (weekend / after-hours rollover applied)
          </Text>
        )}
      </View>

      <View style={[cardStyle, styles.card]}>
        <Text style={styles.sectionTitle}>1. 24-Hour Court Deadline Calculator</Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {(
            [
              { id: "now", label: "Arrest Now" },
              { id: "2h", label: "2 Hours Ago" },
              { id: "fri18", label: "Fri 18:00 (Weekend)" },
              { id: "sat10", label: "Sat 10:00 (Weekend)" },
            ] as const
          ).map((p) => (
            <Pressable
              key={p.id}
              onPress={() => applyPreset(p.id)}
              style={pressableStyle(styles.pillBtn)}
            >
              <Text style={styles.pillBtnText}>{p.label}</Text>
            </Pressable>
          ))}
        </ExpandablePillRow>

        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Arrest Date (YYYY-MM-DD)</Text>
            <TextInput
              value={arrestDateStr}
              onChangeText={setArrestDateStr}
              placeholder="2026-11-24"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Arrest Time (24h HH:MM)</Text>
            <TextInput
              value={arrestTimeStr}
              onChangeText={setArrestTimeStr}
              placeholder="14:30"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>
      </View>

      <View style={[cardStyle, styles.card]}>
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            2. Constitutional Protections (Art. 49)
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${theme.gold}77`,
                backgroundColor: `${theme.gold}1A`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: theme.gold }]}>
              Art. 49(1)(h) & 49(2)
            </Text>
          </View>
        </View>
        <Text style={styles.subText}>• {art49.rules.twentyFourHourRule}</Text>
        <Text style={styles.subText}>• {art49.rules.bailAndBondRule}</Text>
        <Text style={styles.subText}>• {art49.rules.pettyOffenceNoRemandRule}</Text>

        <Text style={[styles.label, { marginTop: 6 }]}>
          Rights Scripts Language
        </Text>
        <ExpandablePillRow contentContainerStyle={styles.pillRowContent}>
          {(
            [
              { id: "bilingual", label: "Swahili + English" },
              { id: "sw", label: "Kiswahili Only" },
              { id: "en", label: "English Only" },
            ] as const
          ).map((opt) => (
            <Pressable
              key={opt.id}
              onPress={() => {
                triggerHaptic(6);
                setLangMode(opt.id);
              }}
              style={pressableStyle([
                styles.pillBtn,
                langMode === opt.id && styles.pillBtnActive,
              ])}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  langMode === opt.id && styles.pillBtnTextActive,
                ]}
              >
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>
      </View>

      {art49.scripts.map((s) => (
        <View key={s.id} style={[cardStyle, styles.card]}>
          <View style={styles.rowWrap}>
            <Text style={styles.titleShrink}>{s.title}</Text>
            <View
              style={[
                styles.badge,
                {
                  borderColor: `${theme.sky}77`,
                  backgroundColor: `${theme.sky}18`,
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: theme.sky }]}>
                Art. 49 Script
              </Text>
            </View>
          </View>
          {(langMode === "bilingual" || langMode === "sw") && (
            <Text style={[styles.subText, { color: theme.textPrimary }]}>
              Kiswahili: "{s.swahili}"
            </Text>
          )}
          {(langMode === "bilingual" || langMode === "en") && (
            <Text style={styles.subText}>English: "{s.english}"</Text>
          )}
        </View>
      ))}

      <View style={[cardStyle, styles.card]}>
        <View style={styles.rowWrap}>
          <Text style={styles.titleShrink}>
            3. Offline IPOA 1559 Incident Builder
          </Text>
          <View
            style={[
              styles.badge,
              {
                borderColor: `${theme.kenyaRedLight}77`,
                backgroundColor: `${theme.kenyaRedLight}18`,
              },
            ]}
          >
            <Text style={[styles.badgeText, { color: theme.kenyaRedLight }]}>
              {art49.ipoa.hours}
            </Text>
          </View>
        </View>

        <View style={styles.rowStartWrap}>
          <Pressable
            onPress={handleCallIpoa}
            style={pressableStyle([
              styles.secondaryBtn,
              {
                flexGrow: 1,
                borderColor: `${theme.kenyaRedLight}66`,
                backgroundColor: `${theme.kenyaRedLight}18`,
              },
            ])}
          >
            <Ionicons name="call-outline" size={16} color={theme.kenyaRedLight} />
            <Text
              style={[styles.secondaryBtnText, { color: theme.kenyaRedLight }]}
            >
              Call IPOA {art49.ipoa.tollFree}
            </Text>
          </Pressable>
          <Pressable
            onPress={handleWhatsAppIpoa}
            style={pressableStyle([
              styles.secondaryBtn,
              {
                flexGrow: 1,
                borderColor: `${theme.kenyaGreenLight}66`,
                backgroundColor: `${theme.kenyaGreenLight}18`,
              },
            ])}
          >
            <Ionicons
              name="logo-whatsapp"
              size={16}
              color={theme.kenyaGreenLight}
            />
            <Text
              style={[
                styles.secondaryBtnText,
                { color: theme.kenyaGreenLight },
              ]}
            >
              WhatsApp {art49.ipoa.whatsapp}
            </Text>
          </Pressable>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Police Station / Location</Text>
            <TextInput
              value={station}
              onChangeText={setStation}
              placeholder="e.g. Central Police Station"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>OB Number</Text>
            <TextInput
              value={obNumber}
              onChangeText={setObNumber}
              placeholder="e.g. OB 42/24/11/2026"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Officer Name / Service No.</Text>
            <TextInput
              value={officerInfo}
              onChangeText={setOfficerInfo}
              placeholder="Name or badge/service no."
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
          <View style={styles.inputCol}>
            <Text style={styles.label}>Arrested Person Name</Text>
            <TextInput
              value={personName}
              onChangeText={setPersonName}
              placeholder="Full name"
              placeholderTextColor={theme.textMuted}
              style={[inputStyle, styles.inputBase]}
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Incident Notes / Witnesses</Text>
          <TextInput
            value={incidentNotes}
            onChangeText={setIncidentNotes}
            multiline
            numberOfLines={3}
            placeholder="Reason, bail requested, witnesses..."
            placeholderTextColor={theme.textMuted}
            style={[
              inputStyle,
              styles.inputBase,
              { minHeight: 74, textAlignVertical: "top" },
            ]}
          />
        </View>

        <Pressable
          onPress={handleShareIncident}
          style={pressableStyle(styles.primaryBtn)}
        >
          <Ionicons name="share-social-outline" size={16} color="#FFFFFF" />
          <Text style={styles.primaryBtnText}>
            1-Tap Share Incident to Family / Advocate / IPOA
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
