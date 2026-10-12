import React, { useRef } from "react";
import { useRouter } from "expo-router";
import {
  Animated,
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
  TOOL_CATEGORIES,
  getPopularTools,
} from "../../src/shared/lib/tools-registry";

function ToolCard({ tool }: { tool: (typeof TOOLS)[0] }) {
  const router = useRouter();
  const { theme } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  const categoryColor = categoryColorMap[tool.category] || theme.gold;

  const onPressIn = () =>
    Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start();
  const onPressOut = () =>
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[
          styles.toolCard,
          {
            backgroundColor: theme.bgCard,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.toolIconBox,
              {
                backgroundColor: theme.bgSecondary,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.toolEmoji}>{tool.icon}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View style={styles.categoryPillWrap}>
              <View
                style={[
                  styles.categoryDot,
                  { backgroundColor: categoryColor },
                ]}
              />
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {tool.category.replace("-", " & ").toUpperCase()}
              </Text>
            </View>
            <Text
              style={[styles.toolTitle, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {tool.shortTitle}
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.textMuted}
          />
        </View>

        <Text
          style={[styles.toolDesc, { color: theme.textSecondary }]}
          numberOfLines={2}
        >
          {tool.description}
        </Text>

        <View
          style={[
            styles.cardFooterRow,
            { borderTopColor: theme.border },
          ]}
        >
          <View style={styles.sourceTag}>
            <Ionicons
              name="shield-checkmark-outline"
              size={12}
              color={theme.textMuted}
            />
            <Text
              style={[styles.sourceText, { color: theme.textMuted }]}
              numberOfLines={1}
            >
              {tool.dataSource}
            </Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();
  const popular = getPopularTools(6);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      {/* Top Header Bar with Theme Toggle */}
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: theme.bgSecondary,
            borderBottomColor: theme.border,
          },
        ]}
      >
        <View style={styles.brandGroup}>
          <View
            style={[
              styles.brandDot,
              { backgroundColor: theme.gold },
            ]}
          />
          <Text style={[styles.brandText, { color: theme.textPrimary }]}>
            KenyaHub
          </Text>
        </View>

        {/* Light / Dark Mode Toggle Button */}
        <Pressable
          onPress={toggleTheme}
          style={[
            styles.themeToggleBtn,
            {
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
            },
          ]}
          hitSlop={8}
        >
          <Ionicons
            name={isDark ? "sunny-outline" : "moon-outline"}
            size={18}
            color={theme.gold}
          />
          <Text style={[styles.themeToggleText, { color: theme.textPrimary }]}>
            {isDark ? "Light" : "Dark"}
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View
          style={[
            styles.heroSection,
            {
              backgroundColor: theme.bgSecondary,
              borderBottomColor: theme.border,
            },
          ]}
        >
          <View style={styles.heroInner}>
            {/* Status Pill */}
            <View
              style={[
                styles.statusPill,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: theme.border,
                },
              ]}
            >
              <View style={styles.pulsingDot}>
                <View style={styles.pulsingDotInner} />
              </View>
              <Text
                style={[
                  styles.statusPillText,
                  { color: theme.textSecondary },
                ]}
              >
                {TOOLS.length}+ tools · Free forever · Official data
              </Text>
            </View>

            {/* Headline */}
            <Text style={[styles.heroHeadline, { color: theme.textPrimary }]}>
              The tools{" "}
              <Text style={{ color: theme.gold }}>every Kenyan</Text> needs, in one place
            </Text>

            <Text
              style={[
                styles.heroSubtitle,
                { color: theme.textSecondary },
              ]}
            >
              Calculate your net salary, explore CBC curriculum, decode number plates, check M-Pesa fees — all powered by official Kenyan government data.
            </Text>

            {/* Buttons */}
            <View style={styles.heroButtons}>
              <Pressable
                onPress={() => router.push("/(tabs)/tools")}
                style={[
                  styles.btnGold,
                  { backgroundColor: theme.gold },
                ]}
              >
                <Text style={styles.btnGoldText}>Explore All Tools</Text>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={theme.kenyaBlack}
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/tools/[slug]",
                    params: { slug: "paye-calculator" },
                  })
                }
                style={[
                  styles.btnOutline,
                  {
                    borderColor: theme.borderLight,
                    backgroundColor: theme.bgCard,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.btnOutlineText,
                    { color: theme.textPrimary },
                  ]}
                >
                  PAYE Calculator
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Pillars Row */}
        <View style={styles.pillarsRow}>
          <View
            style={[
              styles.pillarCard,
              {
                backgroundColor: theme.bgCard,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="location"
              size={20}
              color={theme.kenyaGreenLight}
            />
            <Text style={[styles.pillarTitle, { color: theme.textPrimary }]}>
              100% Kenyan
            </Text>
            <Text style={[styles.pillarDesc, { color: theme.textMuted }]}>
              Real KRA & CBK data
            </Text>
          </View>
          <View
            style={[
              styles.pillarCard,
              {
                backgroundColor: theme.bgCard,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons name="shield-checkmark" size={20} color={theme.gold} />
            <Text style={[styles.pillarTitle, { color: theme.textPrimary }]}>
              Official Sources
            </Text>
            <Text style={[styles.pillarDesc, { color: theme.textMuted }]}>
              Government verified
            </Text>
          </View>
          <View
            style={[
              styles.pillarCard,
              {
                backgroundColor: theme.bgCard,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons name="cloud-offline" size={20} color={theme.sky} />
            <Text style={[styles.pillarTitle, { color: theme.textPrimary }]}>
              Offline Ready
            </Text>
            <Text style={[styles.pillarDesc, { color: theme.textMuted }]}>
              Works without data
            </Text>
          </View>
        </View>

        {/* Popular Tools */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              MOST POPULAR
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Tools Kenyans Love
            </Text>
          </View>
          <Pressable
            onPress={() => router.push("/(tabs)/tools")}
            style={styles.seeAllBtn}
          >
            <Text style={[styles.seeAllText, { color: theme.gold }]}>
              All {TOOLS.length}
            </Text>
            <Ionicons name="arrow-forward" size={14} color={theme.gold} />
          </Pressable>
        </View>

        <View style={styles.toolList}>
          {popular.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </View>

        {/* Explore Hubs */}
        <View style={[styles.sectionHeader, { marginTop: 22 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              EXPLORE KENYA
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Transport & Counties
            </Text>
          </View>
        </View>

        <View style={styles.hubsRow}>
          <Pressable
            style={[
              styles.hubCard,
              {
                backgroundColor: theme.bgCard,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push("/(tabs)/matatu")}
          >
            <View
              style={[
                styles.hubIconBox,
                { backgroundColor: "rgba(200, 150, 30, 0.15)" },
              ]}
            >
              <Ionicons name="bus" size={24} color={theme.gold} />
            </View>
            <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
              Nairobi Matatus
            </Text>
            <Text style={[styles.hubDesc, { color: theme.textMuted }]}>
              100+ routes, stages & fares
            </Text>
            <View style={styles.hubLink}>
              <Text style={[styles.hubLinkText, { color: theme.gold }]}>
                Open Routes
              </Text>
              <Ionicons name="chevron-forward" size={14} color={theme.gold} />
            </View>
          </Pressable>

          <Pressable
            style={[
              styles.hubCard,
              {
                backgroundColor: theme.bgCard,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push("/(tabs)/county")}
          >
            <View
              style={[
                styles.hubIconBox,
                { backgroundColor: "rgba(26, 139, 209, 0.15)" },
              ]}
            >
              <Ionicons name="business" size={24} color={theme.sky} />
            </View>
            <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
              47 Counties
            </Text>
            <Text style={[styles.hubDesc, { color: theme.textMuted }]}>
              Governors & demographics
            </Text>
            <View style={styles.hubLink}>
              <Text style={[styles.hubLinkText, { color: theme.sky }]}>
                Browse Counties
              </Text>
              <Ionicons name="chevron-forward" size={14} color={theme.sky} />
            </View>
          </Pressable>
        </View>

        {/* Categories */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              CATEGORIES
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              10 Categories, One App
            </Text>
          </View>
        </View>

        <View style={styles.categoriesGrid}>
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            const catColor = categoryColorMap[cat.id] || theme.gold;

            return (
              <Pressable
                key={cat.id}
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/tools",
                    params: { category: cat.id },
                  })
                }
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: theme.bgCard,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View style={styles.categoryCardTop}>
                  <Text style={styles.catEmoji}>{cat.icon}</Text>
                  <View
                    style={[
                      styles.catBadge,
                      {
                        backgroundColor: theme.bgSecondary,
                        borderColor: theme.border,
                      },
                    ]}
                  >
                    <Text style={[styles.catBadgeText, { color: catColor }]}>
                      {count}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.catTitle, { color: theme.textPrimary }]}>
                  {cat.name}
                </Text>
                <Text
                  style={[styles.catDescription, { color: theme.textMuted }]}
                  numberOfLines={2}
                >
                  {cat.description}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  brandGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  brandDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  brandText: {
    fontFamily: "Outfit_900Black",
    fontSize: 18,
    letterSpacing: -0.3,
  },
  themeToggleBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
  },
  themeToggleText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    borderBottomWidth: 1,
  },
  heroInner: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 22,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
  },
  pulsingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#006B3F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  pulsingDotInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#2FA463",
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: "600",
  },
  heroHeadline: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 26,
    lineHeight: 33,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 18,
  },
  heroButtons: {
    flexDirection: "row",
    gap: 10,
  },
  btnGold: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  btnGoldText: {
    fontFamily: "Outfit_700Bold",
    color: "#1A1108",
    fontSize: 14,
  },
  btnOutline: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: "center",
  },
  btnOutlineText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
  pillarsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  pillarCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
  },
  pillarTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    marginTop: 6,
    textAlign: "center",
  },
  pillarDesc: {
    fontSize: 9,
    marginTop: 2,
    textAlign: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 12,
  },
  sectionOverline: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  sectionTitle: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 19,
  },
  seeAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: "700",
  },
  toolList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  toolCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  toolEmoji: {
    fontSize: 22,
  },
  categoryPillWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 2,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryPillText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  toolTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  toolDesc: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 8,
  },
  cardFooterRow: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  sourceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sourceText: {
    fontSize: 10,
  },
  hubsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
  },
  hubCard: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
  },
  hubIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  hubTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    marginBottom: 2,
  },
  hubDesc: {
    fontSize: 11,
    lineHeight: 15,
    marginBottom: 10,
  },
  hubLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  hubLinkText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 10,
  },
  categoryCard: {
    width: "48.2%",
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
  },
  categoryCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  catEmoji: {
    fontSize: 22,
  },
  catBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  catBadgeText: {
    fontSize: 10,
    fontWeight: "800",
  },
  catTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
    marginBottom: 2,
  },
  catDescription: {
    fontSize: 10,
    lineHeight: 14,
  },
});
