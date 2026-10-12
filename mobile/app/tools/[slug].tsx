import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
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
} from "../../src/theme";
import {
  TOOLS,
  getRelatedTools,
} from "../../src/shared/lib/tools-registry";

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
} from "../../src/tools/FinanceTools";

import {
  NumberPlateDecoder,
  MobilePrefixFinder,
  PublicHolidaysTool,
  TrafficFinesTool,
  PostalCodesTool,
  DrivingLicenseTool,
  PassportFeesTool,
} from "../../src/tools/TransportGovernmentTools";

import {
  CbcGradeAgeTool,
  KcseCalculatorTool,
  KikuyuProverbsTool,
  KcseRankingsTool,
  SchoolTermsTool,
} from "../../src/tools/EducationCultureTools";

import { LanguageLearningTool } from "../../src/tools/LanguageCourseTool";

import {
  KenyanTranslatorTool,
  SolarRoiTool,
  WardConstituencyFinderTool,
  CbcCurriculumTool,
  KuccpsClusterTool,
} from "../../src/tools/AdvancedTools";

import { ReferenceDirectoryTool } from "../../src/tools/ReferenceDirectoryTool";

export default function ToolDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const tool = TOOLS.find((item) => item.slug === slug);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (tool) {
      AsyncStorage.getItem("kh-saved-tools").then((value) =>
        setSaved(value?.split(",").includes(tool.slug) ?? false)
      );
    }
  }, [tool]);

  if (!tool) {
    return (
      <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]}>
        <View style={styles.notFound}>
          <Ionicons name="search" size={48} color={theme.textMuted} />
          <Text style={[styles.notFoundTitle, { color: theme.textPrimary }]}>Tool not found</Text>
          <Pressable onPress={() => router.back()} style={[styles.backButton, { backgroundColor: theme.gold }]}>
            <Text style={[styles.backButtonText, { color: theme.kenyaBlack }]}>Go back</Text>
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

  const related = getRelatedTools(tool.slug, 3);
  const categoryColor = categoryColorMap[tool.category] || theme.gold;

  const renderToolComponent = () => {
    switch (tool.slug) {
      // Finance & Tax
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
      case "solar-roi-calculator":
        return <SolarRoiTool />;

      // Transport & Government
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

      // Education & Culture
      case "cbc-grade-age":
        return <CbcGradeAgeTool />;
      case "cbc-curriculum":
        return <CbcCurriculumTool />;
      case "kuccps-cluster-calculator":
        return <KuccpsClusterTool />;
      case "kcse-grade-calculator":
        return <KcseCalculatorTool />;
      case "kikuyu-proverbs":
        return <KikuyuProverbsTool />;
      case "kenyan-translator":
        return <KenyanTranslatorTool />;
      case "learn":
        return <LanguageLearningTool />;
      case "kcse-school-rankings":
        return <KcseRankingsTool />;
      case "school-terms":
        return <SchoolTermsTool />;

      case "matatu-routes":
        return (
          <View style={[styles.matatuPromoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="bus" size={32} color={theme.gold} />
            <Text style={[styles.matatuPromoTitle, { color: theme.textPrimary }]}>
              Full Matatu Routes Explorer
            </Text>
            <Text style={[styles.matatuPromoDesc, { color: theme.textSecondary }]}>
              View stage itineraries, corridors, off-peak/peak fares, and SACCO operators in our dedicated Matatu hub.
            </Text>
            <Pressable
              onPress={() => router.push("/(tabs)/matatu")}
              style={[styles.matatuPromoBtn, { backgroundColor: theme.gold }]}
            >
              <Text style={[styles.matatuPromoBtnText, { color: theme.kenyaBlack }]}>Open Matatu Hub</Text>
              <Ionicons name="arrow-forward" size={16} color={theme.kenyaBlack} />
            </Pressable>
          </View>
        );

      // Universal Directory Reference for all other tools
      default:
        return <ReferenceDirectoryTool slug={tool.slug} />;
    }
  };

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Top Navbar */}
      <View style={[styles.navBar, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <Pressable onPress={() => router.back()} style={[styles.navBackBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]} hitSlop={12}>
          <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.navTitle, { color: theme.textPrimary }]} numberOfLines={1}>
            {tool.shortTitle}
          </Text>
          <Text style={[styles.navSub, { color: theme.gold }]}>KenyaHub Tool</Text>
        </View>
        <Pressable onPress={toggleSaved} style={[styles.navPinBtn, { backgroundColor: `${theme.gold}20` }]} hitSlop={12}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={theme.gold}
          />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Tool Shell Header matching website */}
        <View style={[styles.toolHeaderCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.toolHeaderInner}>
            {/* Breadcrumbs */}
            <View style={styles.breadcrumbs}>
              <Text style={[styles.breadcrumbItem, { color: theme.textMuted }]}>Home</Text>
              <Text style={[styles.breadcrumbDivider, { color: theme.textMuted }]}>›</Text>
              <Text style={[styles.breadcrumbItem, { color: theme.textMuted }]}>Tools</Text>
              <Text style={[styles.breadcrumbDivider, { color: theme.textMuted }]}>›</Text>
              <Text style={[styles.breadcrumbItem, { color: theme.gold }]} numberOfLines={1}>
                {tool.shortTitle}
              </Text>
            </View>

            {/* Title & Icon */}
            <View style={styles.heroRow}>
              <View style={[styles.heroIconBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Text style={styles.heroEmoji}>{tool.icon}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>{tool.title}</Text>
              </View>
            </View>

            <Text style={[styles.heroDescription, { color: theme.textSecondary }]}>{tool.description}</Text>

            {/* Meta Badges */}
            <View style={[styles.badgesRow, { borderTopColor: theme.border }]}>
              <View
                style={[
                  styles.categoryBadge,
                  {
                    backgroundColor: `${categoryColor}15`,
                    borderColor: `${categoryColor}35`,
                  },
                ]}
              >
                <View style={[styles.badgeDot, { backgroundColor: categoryColor }]} />
                <Text style={[styles.categoryBadgeText, { color: categoryColor }]}>
                  {tool.category.replace("-", " & ").toUpperCase()}
                </Text>
              </View>

              <View style={[styles.sourceTag, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="shield-checkmark" size={12} color={theme.gold} />
                <Text style={[styles.sourceTagText, { color: theme.textMuted }]} numberOfLines={1}>
                  {tool.dataSource}
                </Text>
              </View>

              <View style={[styles.sourceTag, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="cloud-offline" size={12} color={theme.kenyaGreenLight} />
                <Text style={[styles.sourceTagText, { color: theme.kenyaGreenLight }]}>
                  100% Offline
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ── TOOL INTERACTIVE COMPONENT ── */}
        <View style={styles.interactiveArea}>{renderToolComponent()}</View>

        {/* ── RELATED TOOLS SECTION ── */}
        {related.length > 0 && (
          <View style={styles.relatedSection}>
            <Text style={[styles.relatedHeading, { color: theme.gold }]}>Related Tools</Text>
            {related.map((rel) => (
              <Pressable
                key={rel.slug}
                onPress={() =>
                  router.push({
                    pathname: "/tools/[slug]",
                    params: { slug: rel.slug },
                  })
                }
                style={[styles.relatedCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
              >
                <Text style={styles.relatedEmoji}>{rel.icon}</Text>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={[styles.relatedTitle, { color: theme.textPrimary }]}>{rel.shortTitle}</Text>
                  <Text style={[styles.relatedDesc, { color: theme.textMuted }]} numberOfLines={1}>
                    {rel.description}
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={theme.textMuted}
                />
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  navBackBtn: {
    padding: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  navTitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  navSub: {
    fontSize: 11,
    fontWeight: "600",
  },
  navPinBtn: {
    padding: 8,
    borderRadius: 10,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  toolHeaderCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 20,
  },
  toolHeaderInner: {
    padding: 18,
  },
  breadcrumbs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },
  breadcrumbItem: {
    fontSize: 11,
    fontWeight: "600",
  },
  breadcrumbDivider: {
    fontSize: 11,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroEmoji: {
    fontSize: 24,
  },
  heroTitle: {
    fontSize: 19,
    fontWeight: "800",
    lineHeight: 25,
  },
  heroDescription: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 10,
  },
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  badgeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  sourceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  sourceTagText: {
    fontSize: 10,
  },
  interactiveArea: {
    marginBottom: 24,
  },
  matatuPromoCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    gap: 10,
  },
  matatuPromoTitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  matatuPromoDesc: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  matatuPromoBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 6,
  },
  matatuPromoBtnText: {
    fontSize: 14,
    fontWeight: "800",
  },
  relatedSection: {
    marginTop: 12,
    gap: 10,
  },
  relatedHeading: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  relatedCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  relatedEmoji: {
    fontSize: 22,
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  relatedDesc: {
    fontSize: 11,
    marginTop: 2,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  notFoundTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 12,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  backButtonText: {
    fontWeight: "800",
  },
});
