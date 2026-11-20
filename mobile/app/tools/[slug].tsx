import {
  EtimsMpesaReconcilerTool,
  OdpcHrRetentionVaultTool,
  EudrCoopGeojsonPackagerTool,
  IcmsLandedCostArbitrageTool,
  ShaClaimScrubberTool,
  PpraEgpTenderSerializerTool,
  KjseaPathwayEngineTool,
  ArdhisasaCadTitleAuditorTool,
} from "../../src/tools/KenyaUtilityTools2026";
import {
  ShaBenefitEstimatorTool,
  SmallClaimsTool,
  NtsaTransferTool,
  BomaYanguTool,
  RentalTaxTool,
  LandlordTenantTool,
  DomesticWageTool,
  AirtimeDrainTool,
} from "../../src/tools/CivicLegalTools";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Linking,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useTheme,
  categoryColorMap,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
  parseSavedTools,
  serializeSavedTools,
} from "../../src/theme";
import {
  TOOLS,
  getRelatedTools,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import {
  STATIC_BLOG_POSTS,
  type StaticBlogPost,
} from "../../src/shared/data/blog-posts";
import toolGuidesData from "../../src/shared/data/tool-guides.json";
import { DynamicIcon } from "../../src/components/DynamicIcon";
import { BlogMarkdownContent } from "../../src/components/home/HomeHelpers";

// Active Interactive Tools
import {
  PayeCalculator,
  MpesaCalculator,
  KplcTokenCalculator,
  HelbCalculator,
  StampDutyCalculator,
  WaterBillCalculator,
  KraCarImportCalculator,
  MjengoConstructionCalculator,
  SaccoChamaCalculator,
} from "../../src/tools/FinanceTools";

import {
  NumberPlateDecoder,
  MobilePrefixFinder,
  TrafficFinesTool,
} from "../../src/tools/TransportGovernmentTools";

import { KcseCalculatorTool } from "../../src/tools/EducationCultureTools";

import { LanguageLearningTool } from "../../src/tools/LanguageCourseTool";
import { KenyanTranslatorTool } from "../../src/tools/KenyanTranslatorTool";
import {
  CbcCurriculumTool,
  KuccpsClusterTool,
} from "../../src/tools/AdvancedTools";

interface WorkedExampleEntry {
  title: string;
  scenario: string;
  steps: string[];
  takeaway: string;
}

interface ToolGuideEntry {
  notesTitle?: string;
  overview?: string[];
  howItWorks?: string[];
  workedExample?: WorkedExampleEntry;
  complianceTips?: string[];
  notes?: string[];
  faq?: { question: string; answer: string }[];
}

const TOOL_TO_BLOG_MAP: Record<string, string[]> = {
  learn: [
    "cbc-curriculum-explained-for-parents",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "kenyan-translator": [
    "cbc-curriculum-explained-for-parents",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "paye-calculator": [
    "how-paye-tax-works-in-kenya",
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "mpesa-fee-calculator": [
    "understanding-mpesa-transaction-fees",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "sacco-chama-calculator": [
    "sacco-loans-dividends-chama-guide-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
  ],
  "helb-calculator": [
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
    "cbc-curriculum-explained-for-parents",
  ],
  "stamp-duty-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "cbc-curriculum": [
    "cbc-curriculum-explained-for-parents",
    "guide-to-kenyan-public-holidays-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "kuccps-cluster-calculator": [
    "cbc-curriculum-explained-for-parents",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "kcse-grade-calculator": [
    "cbc-curriculum-explained-for-parents",
    "how-paye-tax-works-in-kenya",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "kra-car-import-calculator": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "how-paye-tax-works-in-kenya",
    "understanding-mpesa-transaction-fees",
  ],
  "number-plate-decoder": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "traffic-fines": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "mjengo-construction-calculator": [
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "kplc-token-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "understanding-mpesa-transaction-fees",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "water-bill-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "mobile-number-prefix": [
    "understanding-mpesa-transaction-fees",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "sha-benefit-estimator": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "small-claims-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "ntsa-transfer-calculator": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
  ],
  "boma-yangu-calculator": [
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "rental-tax-calculator": [
    "how-paye-tax-works-in-kenya",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
  ],
  "landlord-tenant-rights": [
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "domestic-wage-calculator": [
    "how-paye-tax-works-in-kenya",
    "sha-shif-health-insurance-kenya-complete-guide-2026",
  ],
  "airtime-drain-guide": [
    "understanding-mpesa-transaction-fees",
    "guide-to-kenyan-public-holidays-2026",
  ],
};

function getRelatedBlogPosts(toolSlug: string, limit = 3): StaticBlogPost[] {
  const results: StaticBlogPost[] = [];
  const seen = new Set<string>();
  for (const bSlug of TOOL_TO_BLOG_MAP[toolSlug] || []) {
    const found = STATIC_BLOG_POSTS.find((p) => p.slug === bSlug);
    if (found && !seen.has(found.slug)) {
      results.push(found);
      seen.add(found.slug);
    }
  }
  for (const p of STATIC_BLOG_POSTS) {
    if (results.length >= limit) break;
    if (!seen.has(p.slug)) {
      results.push(p);
      seen.add(p.slug);
    }
  }
  return results.slice(0, limit);
}

export default function ToolDetailScreen() {
  const { slug, lang, tab } = useLocalSearchParams<{
    slug: string;
    lang?: string;
    tab?: string;
  }>();
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const safeTop = Math.max(insets.top, Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 0);
  const effectiveSlug = slug === "cbc-grade-age" ? "cbc-curriculum" : slug;
  const tool = TOOLS.find((item) => item.slug === effectiveSlug);
  const isLanguageCourseScreen = tool?.slug === "learn";
  const [saved, setSaved] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [showFullGuide, setShowFullGuide] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedPost, setSelectedPost] = useState<StaticBlogPost | null>(null);
  const [readerProgress, setReaderProgress] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  const scrollYRef = useRef(0);
  const viewportHeightRef = useRef(700);
  const toolWrapLayoutRef = useRef({ y: 0, height: 0 });

  const resetToPageTop = useCallback(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    requestAnimationFrame(() =>
      scrollRef.current?.scrollTo({ y: 0, animated: false })
    );
    setTimeout(
      () => scrollRef.current?.scrollTo({ y: 0, animated: false }),
      50
    );
  }, []);

  const scrollToTop = useCallback(() => {
    const targetY = Math.max(0, toolWrapLayoutRef.current.y - 12);
    if (scrollYRef.current > targetY + 120) {
      scrollRef.current?.scrollTo({ y: targetY, animated: true });
    }
  }, []);

  useEffect(() => {
    if (slug === "matatu-routes") {
      router.replace("/matatu");
      return;
    }
    resetToPageTop();
  }, [slug, resetToPageTop, router]);

  useEffect(() => {
    if (tool) {
      AsyncStorage.getItem("kh-saved-tools")
        .then((value) => setSaved(parseSavedTools(value).includes(tool.slug)))
        .catch(() => {});
      AsyncStorage.getItem("kh-tool-visits")
        .then((raw) => {
          const parsed = raw ? JSON.parse(raw) : {};
          const counts =
            parsed && typeof parsed === "object" ? parsed : {};
          counts[tool.slug] = (Number(counts[tool.slug]) || 0) + 1;
          return AsyncStorage.setItem(
            "kh-tool-visits",
            JSON.stringify(counts)
          );
        })
        .catch(() => {});
    }
  }, [tool]);

  const handleBlogLinkNavigation = useCallback(
    (href: string) => {
      const clean = href.trim();
      if (clean.startsWith("http://") || clean.startsWith("https://")) {
        if (/^https?:\/\/(www\.)?kenyahub\.me\//i.test(clean)) {
          const pathPart = clean.replace(/^https?:\/\/(www\.)?kenyahub\.me/i, "") || "/";
          handleBlogLinkNavigation(pathPart);
          return;
        }
        Linking.openURL(clean).catch(() => {});
        return;
      }
      const pathOnly = clean.split("?")[0].replace(/\/+$/, "");
      if (pathOnly.startsWith("/tools/learn/")) {
        const lId = pathOnly.replace("/tools/learn/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: "learn", lang: lId },
        });
        return;
      }
      if (pathOnly.startsWith("/tools/")) {
        const targetSlug = pathOnly.replace("/tools/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: targetSlug },
        });
        return;
      }
      if (pathOnly.startsWith("/county/")) {
        const cSlug = pathOnly.replace("/county/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/county/[slug]",
          params: { slug: cSlug },
        });
        return;
      }
      if (pathOnly.startsWith("/matatu/")) {
        const mSlug = pathOnly.replace("/matatu/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/matatu/[slug]",
          params: { slug: mSlug },
        });
        return;
      }
      if (pathOnly === "/matatu") {
        setSelectedPost(null);
        router.push("/matatu");
      }
    },
    [router]
  );

  const relatedBlogPosts = useMemo(
    () => (tool ? getRelatedBlogPosts(tool.slug, 3) : []),
    [tool?.slug]
  );

  if (!tool) {
    return (
      <SafeAreaView
      key={isDark ? "dark" : "light"}
        style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
        edges={["top", "left", "right", "bottom"]}
      >
        <View style={styles.notFound}>
          <Ionicons name="search" size={48} color={theme.textMuted} />
          <Text style={[styles.notFoundTitle, { color: theme.textPrimary }]}>
            Tool not found
          </Text>
          <Pressable
            onPress={() => router.back()}
            style={pressableStyle([
              styles.backButton,
              { backgroundColor: theme.gold },
            ])}
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
    triggerHaptic(12);
    const current = parseSavedTools(
      await AsyncStorage.getItem("kh-saved-tools")
    );
    const next = saved
      ? current.filter((item) => item !== tool.slug)
      : [...new Set([...current, tool.slug])];
    await AsyncStorage.setItem("kh-saved-tools", serializeSavedTools(next));
    setSaved(!saved);
  };

  const related = getRelatedTools(tool.slug, 4);
  const categoryInfo = getCategoryInfo(tool.category);
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const guide: ToolGuideEntry =
    ((toolGuidesData as any)?.guides?.[tool.slug] as ToolGuideEntry) ||
    ((toolGuidesData as any)?.tools?.[tool.slug] as ToolGuideEntry) ||
    {};
  const overview = guide.overview || [];
  const howItWorks = guide.howItWorks || [];
  const workedExample = guide.workedExample;
  const complianceTips = guide.complianceTips || [];
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
      case "stamp-duty-calculator":
        return <StampDutyCalculator />;
      case "water-bill-calculator":
        return <WaterBillCalculator />;
      case "kra-car-import-calculator":
        return <KraCarImportCalculator />;
      case "mjengo-construction-calculator":
        return <MjengoConstructionCalculator />;
      case "sacco-chama-calculator":
        return <SaccoChamaCalculator />;
      case "number-plate-decoder":
        return <NumberPlateDecoder />;
      case "mobile-number-prefix":
        return <MobilePrefixFinder />;
      case "traffic-fines":
        return <TrafficFinesTool onScrollToTop={scrollToTop} />;
      case "cbc-curriculum":
        return <CbcCurriculumTool onScrollToTop={scrollToTop} />;
      case "kuccps-cluster-calculator":
        return <KuccpsClusterTool onScrollToTop={scrollToTop} />;
      case "kcse-grade-calculator":
        return <KcseCalculatorTool />;
      case "kenyan-translator":
        return <KenyanTranslatorTool onScrollToTop={scrollToTop} />;
      case "learn":
        return (
          <LanguageLearningTool
            onScrollToTop={scrollToTop}
            initialLanguageId={lang}
            initialTab={tab as any}
          />
        );
      case "sha-benefit-estimator":
        return <ShaBenefitEstimatorTool />;
      case "small-claims-calculator":
        return <SmallClaimsTool />;
      case "ntsa-transfer-calculator":
        return <NtsaTransferTool />;
      case "boma-yangu-calculator":
        return <BomaYanguTool />;
      case "rental-tax-calculator":
        return <RentalTaxTool />;
      case "landlord-tenant-rights":
        return <LandlordTenantTool />;
      case "domestic-wage-calculator":
        return <DomesticWageTool />;
      case "airtime-drain-guide":
        return <AirtimeDrainTool />;
      case "etims-mpesa-reconciler":
        return <EtimsMpesaReconcilerTool />;
      case "odpc-hr-retention-vault":
        return <OdpcHrRetentionVaultTool />;
      case "eudr-coop-geojson-packager":
        return <EudrCoopGeojsonPackagerTool />;
      case "icms-landed-cost-arbitrage":
        return <IcmsLandedCostArbitrageTool />;
      case "sha-claim-scrubber":
        return <ShaClaimScrubberTool />;
      case "ppra-egp-tender-serializer":
        return <PpraEgpTenderSerializerTool />;
      case "kjsea-pathway-engine":
        return <KjseaPathwayEngineTool />;
      case "ardhisasa-cad-title-auditor":
        return <ArdhisasaCadTitleAuditorTool />;
      default:
        return <AirtimeDrainTool />;
    }
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary, paddingTop: insets.top === 0 ? safeTop : 0 }]}
      edges={["top", "left", "right", "bottom"]}
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
            accessibilityRole="button"
            accessibilityLabel={
              saved ? `Unpin ${tool.shortTitle}` : `Pin ${tool.shortTitle}`
            }
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={pressableStyle([
              styles.pinIconBtn,
              {
                backgroundColor: saved
                  ? theme.primaryContainer
                  : theme.surfaceContainerHigh,
                borderColor: saved ? theme.gold : theme.outlineVariant,
              },
            ])}
            hitSlop={8}
          >
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={17}
              color={theme.gold}
            />
          </Pressable>
        }
      />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          scrollYRef.current = y;
          if (y > 700 && !showBackToTop) setShowBackToTop(true);
          else if (y <= 700 && showBackToTop) setShowBackToTop(false);
        }}
        onLayout={(e) => {
          viewportHeightRef.current = e.nativeEvent.layout.height;
        }}
      >
        {/* Material 3 Tool Info Banner */}
        {!isLanguageCourseScreen && (
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
                <DynamicIcon
                  emoji={tool.icon}
                  size={26}
                  color={categoryColor}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>
                  {tool.title}
                </Text>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.heroDescription,
                    { color: theme.textSecondary },
                  ]}
                >
                  {tool.description}
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.badgesRow,
                { borderTopColor: theme.outlineVariant },
              ]}
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
                      { color: categoryColor, fontFamily: "Outfit_700Bold" },
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
                <Text
                  style={[styles.sourceText, { color: theme.textSecondary }]}
                >
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
        <View
          style={styles.toolContentWrap}
          onLayout={(e) => {
            const { y, height } = e.nativeEvent.layout;
            toolWrapLayoutRef.current = { y, height };
            const toolBottom = y + height;
            if (
              scrollYRef.current > y + 80 &&
              toolBottom - scrollYRef.current <
                viewportHeightRef.current * 0.35
            ) {
              scrollRef.current?.scrollTo({
                y: Math.max(0, y - 12),
                animated: true,
              });
            }
          }}
        >
          {renderToolComponent()}
        </View>

        {/* Rich Statutory Guide: Overview, How It Works, Worked Example & Compliance Tips (MOB-8) */}
        {!isLanguageCourseScreen &&
          (overview.length > 0 ||
            howItWorks.length > 0 ||
            workedExample ||
            complianceTips.length > 0) && (
            <View
              style={[
                styles.notesSectionCard,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                onPress={() => {
                  triggerHaptic(8);
                  setShowFullGuide((v) => !v);
                }}
                style={styles.notesHeaderRow}
              >
                <View
                  style={[
                    styles.notesIconBadge,
                    { backgroundColor: `${theme.gold}1A` },
                  ]}
                >
                  <Ionicons
                    name="book-outline"
                    size={18}
                    color={theme.gold}
                  />
                </View>
                <Text style={[styles.notesTitle, { color: theme.textPrimary }]}>
                  How It Works, Worked Example & Statutory Guide
                </Text>
                <Ionicons
                  name={showFullGuide ? "chevron-up" : "chevron-down"}
                  size={18}
                  color={theme.textMuted}
                />
              </Pressable>

              {showFullGuide && (
                <View style={{ gap: 12, marginTop: 4 }}>
                  {overview.map((para, pIdx) => (
                    <Text
                      key={`ov-${pIdx}`}
                      style={[styles.noteText, { color: theme.textSecondary }]}
                    >
                      {para}
                    </Text>
                  ))}

                  {howItWorks.length > 0 && (
                    <View style={{ gap: 6 }}>
                      <Text
                        style={{
                          fontFamily: "Outfit_700Bold",
                          fontSize: 13.5,
                          color: theme.gold,
                        }}
                      >
                        Step-by-Step Guide
                      </Text>
                      {howItWorks.map((step, sIdx) => (
                        <View key={`hiw-${sIdx}`} style={styles.noteRow}>
                          <Text
                            style={[styles.noteBullet, { color: theme.gold }]}
                          >
                            {sIdx + 1}.
                          </Text>
                          <Text
                            style={[
                              styles.noteText,
                              { color: theme.textSecondary },
                            ]}
                          >
                            {step}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {workedExample && (
                    <View
                      style={{
                        padding: 12,
                        borderRadius: 14,
                        backgroundColor: theme.surfaceContainerHigh,
                        borderWidth: 1,
                        borderColor: `${theme.gold}40`,
                        gap: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Outfit_800ExtraBold",
                          fontSize: 13.5,
                          color: theme.gold,
                        }}
                      >
                        Worked Example: {workedExample.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Inter_500Medium",
                          fontSize: 12,
                          color: theme.textPrimary,
                          lineHeight: 17.5,
                        }}
                      >
                        {workedExample.scenario}
                      </Text>
                      {(workedExample.steps || []).map((st, idx) => (
                        <View key={`we-${idx}`} style={styles.noteRow}>
                          <Text
                            style={[
                              styles.noteBullet,
                              { color: theme.kenyaGreenLight },
                            ]}
                          >
                            •
                          </Text>
                          <Text
                            style={[
                              styles.noteText,
                              { color: theme.textSecondary },
                            ]}
                          >
                            {st}
                          </Text>
                        </View>
                      ))}
                      {workedExample.takeaway && (
                        <Text
                          style={{
                            fontFamily: "Inter_600SemiBold",
                            fontSize: 12,
                            color: theme.kenyaGreenLight,
                            marginTop: 2,
                          }}
                        >
                          Key Takeaway: {workedExample.takeaway}
                        </Text>
                      )}
                    </View>
                  )}

                  {complianceTips.length > 0 && (
                    <View style={{ gap: 6 }}>
                      <Text
                        style={{
                          fontFamily: "Outfit_700Bold",
                          fontSize: 13.5,
                          color: theme.sky,
                        }}
                      >
                        Statutory Compliance Tips
                      </Text>
                      {complianceTips.map((tip, tIdx) => (
                        <View key={`ct-${tIdx}`} style={styles.noteRow}>
                          <Text
                            style={[styles.noteBullet, { color: theme.sky }]}
                          >
                            ✓
                          </Text>
                          <Text
                            style={[
                              styles.noteText,
                              { color: theme.textSecondary },
                            ]}
                          >
                            {tip}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              )}
            </View>
          )}

        {/* Important Notes / About the Data Section */}
        {!isLanguageCourseScreen && notes.length > 0 && (
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
        {!isLanguageCourseScreen && faqs.length > 0 && (
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
                      onPress={() => {
                        triggerHaptic(6);
                        setOpenFaqIdx(isOpen ? null : idx);
                      }}
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

        {/* Related Kenyan Guides & Worked Articles (UX-13) */}
        {!isLanguageCourseScreen && relatedBlogPosts.length > 0 && (
          <View style={[styles.relatedSection, { marginBottom: 20 }]}>
            <Text style={[styles.relatedHeading, { color: theme.gold }]}>
              RELATED KENYAN GUIDES & WORKED ARTICLES
            </Text>
            <View style={styles.relatedList}>
              {relatedBlogPosts.map((post) => (
                <View
                  key={post.slug}
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
                    onPress={() => {
                      triggerHaptic(8);
                      setReaderProgress(0);
                      setSelectedPost(post);
                    }}
                    style={pressableStyle(styles.relatedCard)}
                  >
                    <View
                      style={[
                        styles.relatedIconBox,
                        { backgroundColor: `${theme.gold}18` },
                      ]}
                    >
                      <Ionicons
                        name="newspaper-outline"
                        size={19}
                        color={theme.gold}
                      />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text
                        style={[
                          styles.relatedTitle,
                          { color: theme.textPrimary },
                        ]}
                        numberOfLines={2}
                      >
                        {post.title}
                      </Text>
                      <Text
                        style={[
                          styles.relatedDesc,
                          { color: theme.textSecondary },
                        ]}
                        numberOfLines={2}
                      >
                        {post.excerpt}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: theme.gold,
                          fontFamily: "Outfit_700Bold",
                          marginTop: 3,
                        }}
                      >
                        Read Offline Guide · {post.readTime} min read
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color={theme.textMuted}
                    />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Related Tools */}
        {!isLanguageCourseScreen && related.length > 0 && (
          <View style={styles.relatedSection}>
            <Text style={[styles.relatedHeading, { color: theme.gold }]}>
              RELATED TOOLS
            </Text>
            <View style={styles.relatedList}>
              {tool.category === "transport-travel" && (
                <View
                  style={[
                    styles.relatedCardWrap,
                    {
                      backgroundColor: theme.surfaceContainer,
                      borderColor: `${theme.gold}55`,
                    },
                  ]}
                >
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() => router.push("/matatu")}
                    style={pressableStyle(styles.relatedCard)}
                  >
                    <View
                      style={[
                        styles.relatedIconBox,
                        { backgroundColor: "rgba(14, 165, 233, 0.16)" },
                      ]}
                    >
                      <Ionicons name="bus" size={20} color="#0EA5E9" />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text
                        style={[
                          styles.relatedTitle,
                          { color: theme.textPrimary },
                        ]}
                      >
                        Matatu Routes & SACCO Fares
                      </Text>
                      <Text
                        style={[
                          styles.relatedDesc,
                          { color: theme.textSecondary },
                        ]}
                      >
                        Interactive stage maps, route numbers, and off-peak/peak
                        fares across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret &
                        Thika.
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#0EA5E9",
                          fontFamily: "Outfit_700Bold",
                          marginTop: 2,
                        }}
                      >
                        Transport & Travel Hub
                      </Text>
                    </View>
                    <Ionicons
                      name="arrow-forward"
                      size={16}
                      color={theme.textMuted}
                    />
                  </Pressable>
                </View>
              )}

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
                      style={pressableStyle(styles.relatedCard)}
                    >
                      <View
                        style={[
                          styles.relatedIconBox,
                          { backgroundColor: `${relColor}1A` },
                        ]}
                      >
                        <DynamicIcon
                          emoji={rel.icon}
                          size={20}
                          color={relColor}
                        />
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
                              fontFamily: "Outfit_700Bold",
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

      {/* Floating Back-to-Top Pill Button (UX-10) */}
      {showBackToTop && (
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            scrollRef.current?.scrollTo({ y: 0, animated: true });
          }}
          accessibilityRole="button"
          accessibilityLabel="Scroll back to top"
          android_ripple={androidRipple(theme.rippleColor)}
          style={pressableStyle([
            styles.fabTopBtn,
            {
              backgroundColor: theme.gold,
              borderColor: theme.kenyaBlack,
            },
          ])}
        >
          <Ionicons name="arrow-up" size={16} color={theme.kenyaBlack} />
          <Text style={[styles.fabTopText, { color: theme.kenyaBlack }]}>
            Top
          </Text>
        </Pressable>
      )}

      {/* Full-Screen Offline Blog Guide Reader Modal (UX-13) */}
      <Modal
        visible={!!selectedPost}
        animationType="slide"
        accessibilityViewIsModal={true}
        onRequestClose={() => setSelectedPost(null)}
      >
        <SafeAreaView
          style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
          edges={["top", "left", "right", "bottom"]}
        >
          <KenyaStripe />
          <AndroidTopAppBar
            title={selectedPost?.title || "Guide"}
            subtitle={
              selectedPost
                ? `${selectedPost.author} · ${selectedPost.readTime} min read`
                : ""
            }
            onBack={() => setSelectedPost(null)}
          />
          <View
            style={{
              height: 3,
              width: "100%",
              backgroundColor: theme.surfaceContainerHigh,
            }}
          >
            <View
              style={{
                height: "100%",
                width: `${Math.min(100, Math.max(4, readerProgress * 100))}%`,
                backgroundColor: theme.gold,
              }}
            />
          </View>

          {selectedPost && (
            <ScrollView
              contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={(e) => {
                const { contentOffset, contentSize, layoutMeasurement } =
                  e.nativeEvent;
                const maxScroll = Math.max(
                  1,
                  contentSize.height - layoutMeasurement.height
                );
                setReaderProgress(
                  Math.min(1, Math.max(0, contentOffset.y / maxScroll))
                );
              }}
            >
              <View
                style={[
                  styles.notesSectionCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                    marginBottom: 16,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Outfit_800ExtraBold",
                    fontSize: 20,
                    color: theme.textPrimary,
                    lineHeight: 26,
                  }}
                >
                  {selectedPost.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: theme.textSecondary,
                    marginTop: 4,
                    lineHeight: 19,
                  }}
                >
                  {selectedPost.excerpt}
                </Text>
              </View>

              <View
                style={[
                  styles.notesSectionCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <BlogMarkdownContent
                  content={selectedPost.content}
                  theme={theme}
                  onNavigateLink={handleBlogLinkNavigation}
                />
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  pinIconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    padding: 10,
    paddingBottom: 96,
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
    fontFamily: "Inter_400Regular",
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
  sourceText: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
  },
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
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 13,
    lineHeight: 19,
  },
  noteText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12.5,
    lineHeight: 18.5,
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
    fontFamily: "Inter_400Regular",
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
    fontFamily: "Inter_400Regular",
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
  fabTopBtn: {
    position: "absolute",
    bottom: 20,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  fabTopText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 12,
  },
});
