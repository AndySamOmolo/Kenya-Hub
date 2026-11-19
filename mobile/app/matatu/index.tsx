import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../../src/theme";
import matatuData from "../../src/shared/data/matatu-routes.json";

interface RouteItem {
  slug: string;
  routeNumber?: string;
  number?: string;
  name: string;
  terminusA?: string;
  terminusB?: string;
  fareMin: number;
  fareMax: number;
  operatingHours?: string;
  saccoName: string;
  verified?: boolean;
  town?: string;
  stages?: any[];
}

const RouteCard = React.memo(function RouteCard({
  route,
}: {
  route: RouteItem & { townId?: string; townName?: string };
}) {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const rNum = route.routeNumber || route.number || "—";

  return (
    <View
      style={[
        styles.routeWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        accessibilityRole="button"
        accessibilityLabel={`Open Route ${rNum} ${route.name}`}
        onPress={() => {
          triggerHaptic(8);
          router.push({
            pathname: "/matatu/[slug]",
            params: { slug: route.slug },
          });
        }}
        style={pressableStyle(styles.route)}
      >
        <View style={styles.routeTopRow}>
          <View
            style={[
              styles.routeIcon,
              {
                backgroundColor: theme.primaryContainer,
                borderColor: `${theme.gold}40`,
              },
            ]}
          >
            <Text style={[styles.routeNumText, { color: theme.gold }]}>
              {rNum}
            </Text>
          </View>
          <View style={styles.routeBody}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Text
                style={[styles.routeText, { color: theme.textPrimary, flex: 1 }]}
              >
                {route.name}
              </Text>
              {route.townName && (
                <View
                  style={{
                    backgroundColor: theme.surfaceContainerHigh,
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                    borderRadius: 999,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.textSecondary,
                    }}
                  >
                    {route.townName}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.routeMetaRow}>
              <View
                style={[
                  styles.fareBadge,
                  {
                    backgroundColor: theme.primaryContainer,
                    borderColor: `${theme.gold}45`,
                  },
                ]}
              >
                <Text
                  style={[styles.fareText, { color: theme.onPrimaryContainer }]}
                >
                  KES {route.fareMin}–{route.fareMax}
                </Text>
              </View>
              {route.operatingHours ? (
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 11, color: theme.textMuted, fontWeight: "500" }}
                >
                  {route.operatingHours}
                </Text>
              ) : null}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 4 }}>
              <Text
                numberOfLines={1}
                style={[styles.saccoText, { color: theme.textSecondary, flexShrink: 1 }]}
              >
                {route.saccoName}
              </Text>
              {route.stages ? (
                <Text style={{ fontSize: 11, color: theme.textMuted, flexShrink: 0 }}>
                  • {route.stages.length} stages
                </Text>
              ) : null}
            </View>
          </View>
          <View
            style={[
              styles.trailingCircle,
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
      </Pressable>
    </View>
  );
});

export default function MatatuScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const params = useLocalSearchParams<{ town?: string; q?: string }>();
  const [search, setSearch] = useState(params.q ?? "");
  const [selectedTown, setSelectedTown] = useState<string>(params.town || "all");
  const [saccoFilter, setSaccoFilter] = useState<string>("all");
  const scrollRef = useRef<any>(null);
  const [sortBy, setSortBy] = useState<"route" | "stages" | "name">("route");

  useEffect(() => {
    if (params.town) {
      setSelectedTown(params.town);
      setSaccoFilter("all");
    }
    if (params.q !== undefined) {
      setSearch(params.q);
    }
  }, [params.town, params.q]);

  const towns = (matatuData as any).towns || [];
  const allRoutesByTown = (matatuData as any).routes || {};
  const notes: string[] = (matatuData as any).notes || [];

  const allRoutes: (RouteItem & { townId: string; townName: string })[] =
    useMemo(() => {
      const list: (RouteItem & { townId: string; townName: string })[] = [];
      for (const [townId, routes] of Object.entries(allRoutesByTown)) {
        const townObj = towns.find(
          (t: any) => t.slug === townId || t.id === townId
        );
        const townName = townObj ? townObj.name : townId;
        for (const r of routes as RouteItem[]) {
          list.push({ ...r, townId, townName });
        }
      }
      return list;
    }, [allRoutesByTown, towns]);

  const totalStages = useMemo(
    () => allRoutes.reduce((s, r) => s + (r.stages?.length || 0), 0),
    [allRoutes]
  );

  const availableSaccos = useMemo(() => {
    const base =
      selectedTown === "all"
        ? allRoutes
        : allRoutes.filter(
            (r) =>
              r.townId === selectedTown ||
              r.townName.toLowerCase() === selectedTown.toLowerCase()
          );
    return Array.from(new Set(base.map((r) => r.saccoName))).sort();
  }, [allRoutes, selectedTown]);

  const filteredRoutes = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = allRoutes.filter((r) => {
      const matchesTown =
        selectedTown === "all" ||
        r.townId === selectedTown ||
        (r as any).town === selectedTown ||
        r.townName.toLowerCase() === selectedTown.toLowerCase();
      if (!matchesTown) return false;

      if (saccoFilter !== "all" && r.saccoName !== saccoFilter) return false;

      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        (r.routeNumber && r.routeNumber.toLowerCase().includes(q)) ||
        (r.terminusA && r.terminusA.toLowerCase().includes(q)) ||
        (r.terminusB && r.terminusB.toLowerCase().includes(q)) ||
        r.saccoName.toLowerCase().includes(q) ||
        (r.stages &&
          r.stages.some((s: any) =>
            typeof s === "string"
              ? s.toLowerCase().includes(q)
              : s?.name?.toLowerCase().includes(q)
          ))
      );
    });

    return [...list].sort((a, b) => {
      if (sortBy === "stages")
        return (b.stages?.length || 0) - (a.stages?.length || 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (a.routeNumber || "").localeCompare(b.routeNumber || "", undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  }, [allRoutes, search, selectedTown, saccoFilter, sortBy]);

  return (
    <SafeAreaView
      key={isDark ? "dark" : "light"}
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right", "bottom"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title="Matatu Routes & Fares"
        subtitle={`${allRoutes.length} routes · ${totalStages} stages · ${availableSaccos.length} SACCOs`}
        onBack={() =>
          router.canGoBack() ? router.back() : router.replace("/(tabs)")
        }
      />

      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.surfaceContainerLow,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        {/* Material 3 Search Bar (Stable key across theme switches - UX-5) */}
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: theme.surfaceContainerHigh,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <Ionicons name="search" size={18} color={theme.gold} />
          <TextInput
            multiline={false}
            accessibilityLabel="Search matatu route, stage, or SACCO"
            placeholder="Search route, stage, or SACCO..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
            numberOfLines={1}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {search.length > 0 && (
            <Pressable
              onPress={() => setSearch("")}
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              hitSlop={8}
            >
              <Ionicons
                name="close-circle"
                size={18}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Horizontal Scrolling Pill Bar for Cities */}
        {towns.length > 0 && (
          <ExpandablePillRow contentContainerStyle={styles.townChipsRow}>
            {[
              { slug: "all", name: `All Cities (${allRoutes.length})` },
              ...towns
                .filter((t: any) => t.isActive)
                .map((t: any) => ({
                  slug: t.slug || t.id,
                  name: `${t.name} (${t.routeCount || ""})`,
                })),
            ].map((t: any) => {
              const active = selectedTown === t.slug;
              return (
                <Pressable
                  key={t.slug}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    triggerHaptic(8);
                    setSelectedTown(t.slug);
                    setSaccoFilter("all");
                  }}
                  style={pressableStyle([
                    styles.townChip,
                    active
                      ? {
                          backgroundColor: theme.primaryContainer,
                          borderColor: theme.gold,
                        }
                      : {
                          backgroundColor: theme.surfaceContainer,
                          borderColor: theme.outlineVariant,
                        },
                  ])}
                >
                  {active && (
                    <Ionicons
                      name="checkmark"
                      size={13}
                      color={theme.onPrimaryContainer}
                    />
                  )}
                  <Text
                    style={[
                      styles.townChipText,
                      {
                        color: active
                          ? theme.onPrimaryContainer
                          : theme.textSecondary,
                      },
                    ]}
                  >
                    {t.name}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>
        )}

        {/* Sort Controls */}
        <View style={styles.filterSubRow}>
          <Text
            style={{
              fontSize: 10.5,
              fontFamily: "Inter_600SemiBold",
              color: theme.textMuted,
              letterSpacing: 0.6,
            }}
          >
            SORT BY
          </Text>
          <ExpandablePillRow
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            {(
              [
                { id: "route", label: "Route #" },
                { id: "stages", label: "Stages" },
                { id: "name", label: "A–Z" },
              ] as const
            ).map((opt) => {
              const active = sortBy === opt.id;
              return (
                <Pressable
                  key={opt.id}
                  onPress={() => {
                    triggerHaptic(8);
                    setSortBy(opt.id);
                  }}
                  style={pressableStyle({
                    paddingHorizontal: 13,
                    paddingVertical: 5,
                    borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: active
                      ? theme.primaryContainer
                      : theme.surfaceContainer,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  })}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "Outfit_700Bold",
                      color: active
                        ? theme.onPrimaryContainer
                        : theme.textSecondary,
                    }}
                  >
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>
        </View>
      </View>

      <FlatList
        ref={scrollRef}
        data={filteredRoutes}
        keyExtractor={(item, index) => `${item.townId}-${item.slug}-${index}`}
        renderItem={({ item }) => <RouteCard route={item} />}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={5}
        removeClippedSubviews={Platform.OS === "android"}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <>
            {/* SACCO Filter Pills */}
            {availableSaccos.length > 1 && (
              <ExpandablePillRow
                contentContainerStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                {["all", ...availableSaccos].map((sacco) => {
                  const active = saccoFilter === sacco;
                  return (
                    <Pressable
                      key={sacco}
                      onPress={() => {
                        triggerHaptic(8);
                        setSaccoFilter(sacco);
                      }}
                      style={pressableStyle({
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        borderRadius: 999,
                        borderWidth: 1,
                        backgroundColor: active
                          ? theme.primaryContainer
                          : theme.surfaceContainer,
                        borderColor: active ? theme.gold : theme.outlineVariant,
                      })}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: "Inter_600SemiBold",
                          color: active
                            ? theme.onPrimaryContainer
                            : theme.textSecondary,
                        }}
                      >
                        {sacco === "all"
                          ? `All SACCOs (${availableSaccos.length})`
                          : sacco}
                      </Text>
                    </Pressable>
                  );
                })}
              </ExpandablePillRow>
            )}

            <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
              Showing {filteredRoutes.length} of {allRoutes.length} routes
            </Text>
          </>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="bus-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No routes found
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try adjusting your search query, city, or SACCO filter.
            </Text>
          </View>
        }
        ListFooterComponent={
          <View
            style={[
              styles.aboutCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
                marginTop: 16,
              },
            ]}
          >
            <Text style={[styles.aboutHeading, { color: theme.gold }]}>
              About Kenya Matatu Routes & Public Transport
            </Text>
            <Text
              style={[styles.aboutParagraph, { color: theme.textSecondary }]}
            >
              Matatus are the heart of Kenya&apos;s public transport ecosystem.
              These 14-seater minibuses and 33+ seater buses connect Central
              Business Districts to suburbs, satellite towns, and rural markets
              in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and beyond.
            </Text>
            <Text
              style={[styles.aboutParagraph, { color: theme.textSecondary }]}
            >
              Every matatu route in Kenya is operated under SACCOs (Savings and
              Credit Co-operatives) licensed by NTSA (National Transport and
              Safety Authority). Fares are market-driven and fluctuate based on
              peak rush hours (morning/evening), weather conditions, and fuel
              price adjustments.
            </Text>
            {notes.map((n, idx) => (
              <View key={idx} style={styles.noteRow}>
                <Text style={{ color: theme.gold, fontFamily: "Outfit_800ExtraBold" }}>
                  •
                </Text>
                <Text style={[styles.noteText, { color: theme.textSecondary }]}>
                  {n}
                </Text>
              </View>
            ))}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 12,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    height: "100%",
    marginLeft: 8,
    marginRight: 6,
    fontFamily: "Inter_500Medium",
    fontSize: 13.5,
    paddingVertical: 0,
    paddingHorizontal: 0,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  townChipsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 2,
  },
  townChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  townChipText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  filterSubRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  resultsCount: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    marginBottom: 12,
  },
  routeWrap: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  route: {
    padding: 15,
  },
  routeTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  routeIcon: {
    minWidth: 46,
    height: 46,
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  routeNumText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 13,
  },
  routeBody: {
    flex: 1,
    marginRight: 8,
  },
  routeText: {
    fontSize: 15,
    fontFamily: "Outfit_700Bold",
  },
  routeMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  fareBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  fareText: {
    fontSize: 11,
    fontFamily: "Outfit_700Bold",
  },
  saccoText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  trailingCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    alignItems: "center",
    paddingVertical: 48,
    gap: 8,
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 17,
  },
  emptySubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    textAlign: "center",
  },
  aboutCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 10,
  },
  aboutHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  aboutParagraph: {
    fontFamily: "Inter_400Regular",
    fontSize: 12.5,
    lineHeight: 19,
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
});
