import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  categoryColorMap,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
} from "../../src/theme";
import {
  TOOLS,
  getRelatedTools,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import toolGuidesData from "../../src/shared/data/tool-guides.json";
import { DynamicIcon } from "../../src/components/DynamicIcon";

// Interactive Tools
import {
  PayeCalculator,
  MpesaCalculator,
  KplcTokenCalculator,
  HelbCalculator,
  HousingLevyCalculator,
  StampDutyCalculator,
  VehicleInsuranceCalculator,
  WaterBillCalculator,
  KraCarImportCalculator,
  MjengoConstructionCalculator,
  SaccoChamaCalculator,
} from "../../src/tools/FinanceTools";

import {
  NumberPlateDecoder,
  MobilePrefixFinder,
  PublicHolidaysTool,
  TrafficFinesTool,
  PostalCodesTool,
  DrivingLicenseTool,
  PassportFeesTool,
  MatatuRoutesTool,
} from "../../src/tools/TransportGovernmentTools";

import {
  CbcGradeAgeTool,
  KcseCalculatorTool,
  KikuyuProverbsTool,
  KcseRankingsTool,
  SchoolTermsTool,
} from "../../src/tools/EducationCultureTools";

import { LanguageLearningTool } from "../../src/tools/LanguageCourseTool";
import { KenyanTranslatorTool } from "../../src/tools/KenyanTranslatorTool";
import {
  SolarRoiTool,
  WardConstituencyFinderTool,
  CbcCurriculumTool,
  KuccpsClusterTool,
} from "../../src/tools/AdvancedTools";
import { ReferenceDirectoryTool } from "../../src/tools/ReferenceDirectoryTool";

interface ToolGuideEntry {
  faq?: { question: string; answer: string }[];
  notesTitle?: string;
  notes?: string[];
}

export default function ToolDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const tool = TOOLS.find((item) => item.slug === slug);
  const [saved, setSaved] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    if (tool) {
      AsyncStorage.getItem("kh-saved-tools").then((value) =>
        setSaved(value?.split(",").includes(tool.slug) ?? false)
      );
      AsyncStorage.getItem("kh-tool-visits")
        .then((raw) => {
          const parsed = raw ? JSON.parse(raw) : {};
          const counts =
            parsed && typeof parsed === "object" ? parsed : {};
          counts[tool.slug] = (Number(counts[tool.slug]) || 0) + 1;
          return AsyncStorage.setItem("kh-tool-visits", JSON.stringify(counts));
        })
        .catch(() => {
          // ignore storage errors
        });
    }
  }, [tool]);

  if (!tool) {
    return (
      <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]}>
        <View style={styles.notFound}>
          <Ionicons name="search" size={48} color={theme.textMuted} />
          <Text style={[styles.notFoundTitle, { color: theme.textPrimary }]}>
            Tool not found
          </Text>
          <Pressable
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: theme.gold }]}
          >
            <Text style={[styles.backButtonText, { color: theme.kenyaBlack }]}>
              Go back
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const toggleSaved = async () => {
    const current =
      (await AsyncStorage.getItem("kh-saved-tools"))?.split(",").filter(Boolean) ?? [];
    const next = saved
      ? current.filter((item) => item !== tool.slug)
      : [...new Set([...current, tool.slug])];
    await AsyncStorage.setItem("kh-saved-tools", next.join(","));
    setSaved(!saved);
  };

  const related = getRelatedTools(tool.slug, 4);
  const categoryInfo = getCategoryInfo(tool.category);
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const guide: ToolGuideEntry =
    ((toolGuidesData as any)?.guides?.[tool.slug] as ToolGuideEntry) ||
    ((toolGuidesData as any)?.tools?.[tool.slug] as ToolGuideEntry) ||
    {};
  const faqs = guide.faq || [];
  const notes = guide.notes || [];
  const notesTitle = guide.notesTitle || "Important Notes & About the Data";
  const frequencyLabel =
    tool.updateFrequency === "static"
      ? "Verified 2026 Reference"
      : tool.updateFrequency === "annual"
      ? "Updated for 2026"
      : tool.updateFrequency === "periodic"
      ? "Updated periodically"
      : "Live data";

  const renderToolComponent = () => {
    switch (tool.slug) {
      case "paye-calculator":
        return <PayeCalculator />;
      case "mpesa-fee-calculator":
        return <MpesaCalculator />;
      case "kplc-token-calculator":
        return <KplcTokenCalculator />;
      case "helb-calculator":
        return <HelbCalculator />;
      case "housing-levy-calculator":
        return <HousingLevyCalculator />;
      case "stamp-duty-calculator":
        return <StampDutyCalculator />;
      case "vehicle-insurance-calculator":
        return <VehicleInsuranceCalculator />;
      case "water-bill-calculator":
        return <WaterBillCalculator />;
      case "kra-car-import-calculator":
        return <KraCarImportCalculator />;
      case "mjengo-construction-calculator":
        return <MjengoConstructionCalculator />;
      case "sacco-chama-calculator":
        return <SaccoChamaCalculator />;
      case "solar-roi-calculator":
        return <SolarRoiTool />;
      case "number-plate-decoder":
        return <NumberPlateDecoder />;
      case "mobile-number-prefix":
        return <MobilePrefixFinder />;
      case "public-holidays":
        return <PublicHolidaysTool />;
      case "traffic-fines":
        return <TrafficFinesTool />;
      case "kenya-postal-codes":
        return <PostalCodesTool />;
      case "driving-license-guide":
        return <DrivingLicenseTool />;
      case "passport-id-fees":
        return <PassportFeesTool />;
      case "ward-constituency-finder":
        return <WardConstituencyFinderTool />;
      case "cbc-grade-age":
        return <CbcGradeAgeTool />;
      case "cbc-curriculum":
        return <CbcCurriculumTool />;
      case "kuccps-cluster-calculator":
        return <KuccpsClusterTool />;
      case "kcse-grade-calculator":
        return <KcseCalculatorTool />;
      case "kikuyu-proverbs":
        return <LanguageLearningTool />;
      case "kenyan-translator":
        return <KenyanTranslatorTool />;
      case "learn":
        return <LanguageLearningTool />;
      case "kcse-school-rankings":
        return <KcseRankingsTool />;
      case "school-terms":
        return <SchoolTermsTool />;
      case "matatu-routes":
        return <MatatuRoutesTool />;
      default:
        return <ReferenceDirectoryTool slug={tool.slug} />;
    }
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title={tool.shortTitle}
        subtitle={
          categoryInfo?.name.toUpperCase() ||
          tool.category.replace("-", " & ").toUpperCase()
        }
        onBack={() => router.back()}
        rightAction={
          <Pressable
            onPress={toggleSaved}
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={[
              styles.pinIconBtn,
              {
                backgroundColor: saved
                  ? theme.primaryContainer
                  : theme.surfaceContainerHigh,
                borderColor: saved ? theme.gold : theme.outlineVariant,
              },
            ]}
            hitSlop={8}
          >
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={20}
              color={theme.gold}
            />
          </Pressable>
        }
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Material 3 Tool Info Banner (mirrors web ToolShell header) */}
        {tool.slug !== "learn" && (
          <View
            style={[
              styles.toolHeaderCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View style={styles.heroRow}>
              <View
                style={[
                  styles.heroIconBox,
                  {
                    backgroundColor: `${categoryColor}1A`,
                    borderColor: `${categoryColor}38`,
                  },
                ]}
              >
                <DynamicIcon emoji={tool.icon} size={26} color={categoryColor} />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>
                  {tool.title}
                </Text>
                <Text
                  style={[styles.heroDescription, { color: theme.textSecondary }]}
                >
                  {tool.description}
                </Text>
              </View>
            </View>

            <View
              style={[styles.badgesRow, { borderTopColor: theme.outlineVariant }]}
            >
              {categoryInfo && (
                <View
                  style={[
                    styles.sourceTag,
                    {
                      backgroundColor: `${categoryColor}16`,
                      borderColor: `${categoryColor}35`,
                    },
                  ]}
                >
                  <DynamicIcon
                    emoji={categoryInfo.icon}
                    size={12}
                    color={categoryColor}
                  />
                  <Text
                    style={[
                      styles.sourceText,
                      { color: categoryColor, fontWeight: "700" },
                    ]}
                  >
                    {categoryInfo.name}
                  </Text>
                </View>
              )}

              <View
                style={[
                  styles.sourceTag,
                  {
                    backgroundColor: theme.surfaceContainerHigh,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Ionicons
                  name="shield-checkmark"
                  size={13}
                  color={theme.kenyaGreenLight}
                />
                <Text style={[styles.sourceText, { color: theme.textSecondary }]}>
                  {tool.dataSource}
                </Text>
              </View>

              <View
                style={[
                  styles.sourceTag,
                  {
                    backgroundColor: theme.surfaceContainerHigh,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Ionicons name="sync-outline" size={12} color={theme.gold} />
                <Text style={[styles.sourceText, { color: theme.textMuted }]}>
                  {frequencyLabel}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Interactive Tool Component */}
        <View style={styles.toolContentWrap}>{renderToolComponent()}</View>

        {/* Important Notes / About the Data Section */}
        {tool.slug !== "learn" && notes.length > 0 && (
          <View
            style={[
              styles.notesSectionCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View style={styles.notesHeaderRow}>
              <View
                style={[
                  styles.notesIconBadge,
                  { backgroundColor: `${theme.gold}1A` },
                ]}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={18}
                  color={theme.gold}
                />
              </View>
              <Text style={[styles.notesTitle, { color: theme.textPrimary }]}>
                {notesTitle}
              </Text>
            </View>
            <View style={styles.notesList}>
              {notes.map((note, idx) => (
                <View key={idx} style={styles.noteRow}>
                  <Text style={[styles.noteBullet, { color: theme.gold }]}>
                    •
                  </Text>
                  <Text
                    style={[styles.noteText, { color: theme.textSecondary }]}
                  >
                    {note}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Frequently Asked Questions Section */}
        {tool.slug !== "learn" && faqs.length > 0 && (
          <View style={styles.faqSection}>
            <View style={styles.faqHeaderRow}>
              <View
                style={[
                  styles.notesIconBadge,
                  { backgroundColor: `${theme.gold}1A` },
                ]}
              >
                <Ionicons
                  name="help-circle-outline"
                  size={18}
                  color={theme.gold}
                />
              </View>
              <Text style={[styles.faqHeading, { color: theme.textPrimary }]}>
                Frequently Asked Questions
              </Text>
            </View>

            <View style={styles.faqList}>
              {faqs.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <View
                    key={idx}
                    style={[
                      styles.faqCard,
                      {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: isOpen
                          ? `${theme.gold}50`
                          : theme.outlineVariant,
                      },
                    ]}
                  >
                    <Pressable
                      android_ripple={androidRipple(theme.rippleColor)}
                      onPress={() => setOpenFaqIdx(isOpen ? null : idx)}
                      style={styles.faqQuestionRow}
                    >
                      <Text
                        style={[
                          styles.faqQuestionText,
                          { color: isOpen ? theme.gold : theme.textPrimary },
                        ]}
                      >
                        {item.question}
                      </Text>
                      <Ionicons
                        name={isOpen ? "chevron-up" : "chevron-down"}
                        size={18}
                        color={isOpen ? theme.gold : theme.textMuted}
                      />
                    </Pressable>
                    {isOpen && (
                      <View
                        style={[
                          styles.faqAnswerBox,
                          { borderTopColor: theme.outlineVariant },
                        ]}
                      >
                        <Text
                          style={[
                            styles.faqAnswerText,
                            { color: theme.textSecondary },
                          ]}
                        >
                          {item.answer}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/* Related Tools */}
        {related.length > 0 && (
          <View style={styles.relatedSection}>
            <Text style={[styles.relatedHeading, { color: theme.gold }]}>
              RELATED TOOLS
            </Text>
            <View style={styles.relatedList}>
              {related.map((rel) => {
                const relColor = categoryColorMap[rel.category] || theme.gold;
                const relCat = getCategoryInfo(rel.category);
                return (
                  <View
                    key={rel.slug}
                    style={[
                      styles.relatedCardWrap,
                      {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
                  >
                    <Pressable
                      android_ripple={androidRipple(theme.rippleColor)}
                      onPress={() =>
                        router.push({
                          pathname: "/tools/[slug]",
                          params: { slug: rel.slug },
                        })
                      }
                      style={styles.relatedCard}
                    >
                      <View
                        style={[
                          styles.relatedIconBox,
                          { backgroundColor: `${relColor}1A` },
                        ]}
                      >
                        <DynamicIcon emoji={rel.icon} size={20} color={relColor} />
                      </View>
                      <View style={{ flex: 1, marginLeft: 12 }}>
                        <Text
                          style={[
                            styles.relatedTitle,
                            { color: theme.textPrimary },
                          ]}
                        >
                          {rel.shortTitle}
                        </Text>
                        <Text
                          style={[
                            styles.relatedDesc,
                            { color: theme.textSecondary },
                          ]}
                          
                        >
                          {rel.description}
                        </Text>
                        {relCat && (
                          <Text
                            style={{
                              fontSize: 10,
                              color: relColor,
                              fontWeight: "700",
                              marginTop: 2,
                            }}
                          >
                            {relCat.name}
                          </Text>
                        )}
                      </View>
                      <Ionicons
                        name="arrow-forward"
                        size={16}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  pinIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  toolHeaderCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  heroIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 18,
    lineHeight: 23,
  },
  heroDescription: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 4,
  },
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  sourceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  sourceText: { fontSize: 11 },
  toolContentWrap: { marginBottom: 20 },
  notesSectionCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    gap: 10,
  },
  notesHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  notesIconBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  notesTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    flex: 1,
  },
  notesList: { gap: 8 },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  noteBullet: {
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 19,
  },
  noteText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 18,
  },
  faqSection: { marginBottom: 20 },
  faqHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  faqHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  faqList: { gap: 8 },
  faqCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  faqQuestionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 10,
  },
  faqQuestionText: {
    flex: 1,
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    lineHeight: 19,
  },
  faqAnswerBox: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  faqAnswerText: {
    fontSize: 12.5,
    lineHeight: 18.5,
  },
  relatedSection: { marginTop: 4 },
  relatedHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  relatedList: { gap: 8 },
  relatedCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  relatedCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  relatedIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  relatedTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
  relatedDesc: {
    fontSize: 11.5,
    marginTop: 1,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  notFoundTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 18,
    marginTop: 12,
  },
  backButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backButtonText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
});
