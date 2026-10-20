import React from "react";
import { useRouter } from "expo-router";
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
  TOOL_CATEGORIES,
  getPopularTools,
} from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function ToolCard({ tool }: { tool: (typeof TOOLS)[0] }) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[tool.category] || theme.gold;

  return (
    <View
      style={[
        styles.toolCardWrap,
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
            params: { slug: tool.slug },
          })
        }
        style={styles.toolCard}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.toolIconBox,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}38`,
              },
            ]}
          >
            <DynamicIcon emoji={tool.icon} size={22} color={categoryColor} />
          </View>
          <View style={{ flex: 1, marginLeft: 14 }}>
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
          <View
            style={[
              styles.trailingIconCircle,
              { backgroundColor: theme.surfaceContainerHigh },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={16}
              color={theme.textSecondary}
            />
          </View>
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
            { borderTopColor: theme.outlineVariant },
          ]}
        >
          <View style={styles.sourceTag}>
            <Ionicons
              name="shield-checkmark"
              size={13}
              color={theme.kenyaGreenLight}
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
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const popular = getPopularTools(6);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        rightAction={
          <View
            style={[
              styles.offlineChip,
              {
                backgroundColor: theme.secondaryContainer,
                borderColor: `${theme.kenyaGreenLight}40`,
              },
            ]}
          >
            <Ionicons
              name="cloud-done"
              size={13}
              color={theme.onSecondaryContainer}
            />
            <Text
              style={[
                styles.offlineChipText,
                { color: theme.onSecondaryContainer },
              ]}
            >
              Offline
            </Text>
          </View>
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Material 3 Search Bar Trigger */}
        <View style={styles.searchSection}>
          <Pressable
            android_ripple={androidRipple(theme.rippleColor)}
            onPress={() => router.push("/(tabs)/tools")}
            style={[
              styles.m3SearchBar,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Ionicons name="search" size={20} color={theme.gold} />
            <Text
              style={[styles.m3SearchPlaceholder, { color: theme.textSecondary }]}
              numberOfLines={1}
            >
              Search PAYE, M-Pesa, KPLC, Languages...
            </Text>
            <View
              style={[
                styles.m3SearchBadge,
                { backgroundColor: theme.primaryContainer },
              ]}
            >
              <Text
                style={[
                  styles.m3SearchBadgeText,
                  { color: theme.onPrimaryContainer },
                ]}
              >
                {TOOLS.length}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Material 3 Hero Banner Card */}
        <View style={styles.heroWrap}>
          <View
            style={[
              styles.heroCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View
              style={[
                styles.statusPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={styles.pulsingDot}>
                <View style={styles.pulsingDotInner} />
              </View>
              <Text
                style={[styles.statusPillText, { color: theme.textSecondary }]}
              >
                {TOOLS.length}+ tools · Free forever · Official data
              </Text>
            </View>

            <Text style={[styles.heroHeadline, { color: theme.textPrimary }]}>
              The tools <Text style={{ color: theme.gold }}>every Kenyan</Text>{" "}
              needs, in one place
            </Text>

            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              Calculate net salary, explore the CBC curriculum, learn Kenyan
              languages, and check M-Pesa tariffs offline.
            </Text>

            <View style={styles.heroButtons}>
              <View style={styles.btnFilledWrap}>
                <Pressable
                  android_ripple={androidRipple("rgba(0,0,0,0.18)")}
                  onPress={() => router.push("/(tabs)/tools")}
                  style={[styles.btnFilled, { backgroundColor: theme.gold }]}
                >
                  <Ionicons
                    name="apps"
                    size={16}
                    color={theme.kenyaBlack}
                  />
                  <Text style={styles.btnFilledText}>All Tools</Text>
                </Pressable>
              </View>

              <View
                style={[
                  styles.btnTonalWrap,
                  {
                    backgroundColor: theme.surfaceContainerHigh,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() =>
                    router.push({
                      pathname: "/tools/[slug]",
                      params: { slug: "learn" },
                    })
                  }
                  style={styles.btnTonal}
                >
                  <Ionicons name="school" size={16} color={theme.gold} />
                  <Text
                    style={[styles.btnTonalText, { color: theme.textPrimary }]}
                  >
                    Learn Languages
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Material 3 Quick Action Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickChipsScroll}
        >
          {[
            { slug: "paye-calculator", label: "PAYE Salary", icon: "calculator" as const },
            { slug: "mpesa-fee-calculator", label: "M-Pesa Fees", icon: "phone-portrait" as const },
            { slug: "kplc-token-calculator", label: "KPLC Tokens", icon: "flash" as const },
            { slug: "learn", label: "Language Courses", icon: "chatbubbles" as const },
            { slug: "kenyan-translator", label: "Translator", icon: "language" as const },
            { slug: "number-plate-decoder", label: "Number Plates", icon: "car" as const },
          ].map((action) => (
            <View
              key={action.slug}
              style={[
                styles.assistChipWrap,
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
                    params: { slug: action.slug },
                  })
                }
                style={styles.assistChip}
              >
                <Ionicons name={action.icon} size={15} color={theme.gold} />
                <Text
                  style={[styles.assistChipText, { color: theme.textPrimary }]}
                >
                  {action.label}
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        {/* Popular Tools */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              MOST USED
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Featured Kenyan Tools
            </Text>
          </View>
          <Pressable
            android_ripple={androidRipple(theme.rippleColor, true)}
            onPress={() => router.push("/(tabs)/tools")}
            style={styles.seeAllBtn}
          >
            <Text style={[styles.seeAllText, { color: theme.gold }]}>
              See all ({TOOLS.length})
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
              PUBLIC DIRECTORIES
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Transit & Devolved Counties
            </Text>
          </View>
        </View>

        <View style={styles.hubsRow}>
          <View
            style={[
              styles.hubCardWrap,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Pressable
              android_ripple={androidRipple(theme.rippleColor)}
              style={styles.hubCard}
              onPress={() => router.push("/(tabs)/matatu")}
            >
              <View
                style={[
                  styles.hubIconBox,
                  { backgroundColor: theme.primaryContainer },
                ]}
              >
                <Ionicons name="bus" size={24} color={theme.gold} />
              </View>
              <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
                Matatu Routes
              </Text>
              <Text style={[styles.hubDesc, { color: theme.textSecondary }]}>
                100+ routes, stages & peak/off-peak fares
              </Text>
              <View style={styles.hubLink}>
                <Text style={[styles.hubLinkText, { color: theme.gold }]}>
                  Open Transit
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.gold} />
              </View>
            </Pressable>
          </View>

          <View
            style={[
              styles.hubCardWrap,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <Pressable
              android_ripple={androidRipple(theme.rippleColor)}
              style={styles.hubCard}
              onPress={() => router.push("/(tabs)/county")}
            >
              <View
                style={[
                  styles.hubIconBox,
                  { backgroundColor: "rgba(26, 139, 209, 0.16)" },
                ]}
              >
                <Ionicons name="map" size={24} color={theme.sky} />
              </View>
              <Text style={[styles.hubTitle, { color: theme.textPrimary }]}>
                47 Counties
              </Text>
              <Text style={[styles.hubDesc, { color: theme.textSecondary }]}>
                Governors, capitals & sub-counties
              </Text>
              <View style={styles.hubLink}>
                <Text style={[styles.hubLinkText, { color: theme.sky }]}>
                  Explore Map
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.sky} />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Categories */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              BROWSE BY TOPIC
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              10 Tool Categories
            </Text>
          </View>
        </View>

        <View style={styles.categoriesGrid}>
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            const catColor = categoryColorMap[cat.id] || theme.gold;

            return (
              <View
                key={cat.id}
                style={[
                  styles.categoryCardWrap,
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
                      pathname: "/(tabs)/tools",
                      params: { category: cat.id },
                    })
                  }
                  style={styles.categoryCard}
                >
                  <View style={styles.categoryCardTop}>
                    <View
                      style={[
                        styles.catIconWrap,
                        {
                          backgroundColor: `${catColor}18`,
                          borderColor: `${catColor}35`,
                        },
                      ]}
                    >
                      <DynamicIcon emoji={cat.icon} size={20} color={catColor} />
                    </View>
                    <View
                      style={[
                        styles.catBadge,
                        {
                          backgroundColor: theme.surfaceContainerHigh,
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
              </View>
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
  offlineChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
  },
  offlineChipText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  scrollContent: {
    paddingBottom: 36,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  m3SearchBar: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  m3SearchPlaceholder: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_500Medium",
  },
  m3SearchBadge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 12,
  },
  m3SearchBadgeText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  heroWrap: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  heroCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    elevation: Platform.OS === "android" ? 2 : 0,
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
    fontFamily: "Inter_600SemiBold",
  },
  heroHeadline: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 25,
    lineHeight: 32,
    marginBottom: 8,
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
  btnFilledWrap: {
    borderRadius: 20,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  btnFilled: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 20,
  },
  btnFilledText: {
    fontFamily: "Outfit_700Bold",
    color: "#1A1108",
    fontSize: 13,
  },
  btnTonalWrap: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  btnTonal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  btnTonalText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
  },
  quickChipsScroll: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 4,
    gap: 8,
  },
  assistChipWrap: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  assistChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  assistChipText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginTop: 20,
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
    fontFamily: "Outfit_700Bold",
  },
  toolList: {
    paddingHorizontal: 16,
    gap: 10,
  },
  toolCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  toolCard: {
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolIconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trailingIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Outfit_700Bold",
    letterSpacing: 0.6,
  },
  toolTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  toolDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 8,
  },
  cardFooterRow: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  sourceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  sourceText: {
    fontSize: 11,
  },
  hubsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
  },
  hubCardWrap: {
    flex: 1,
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  hubCard: {
    padding: 16,
  },
  hubIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  hubTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    marginBottom: 3,
  },
  hubDesc: {
    fontSize: 11.5,
    lineHeight: 16,
    marginBottom: 12,
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
  categoryCardWrap: {
    width: "48.2%",
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  categoryCard: {
    padding: 14,
  },
  categoryCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  catIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  catBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  catBadgeText: {
    fontSize: 10,
    fontFamily: "Outfit_700Bold",
  },
  catTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    marginBottom: 2,
  },
  catDescription: {
    fontSize: 10.5,
    lineHeight: 14.5,
  },
});
