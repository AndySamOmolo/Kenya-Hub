import React, { useState, useMemo } from "react";
import { useRouter } from "expo-router";
import {
  Platform,
  Pressable,
  ScrollView,
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

function RouteCard({
  route,
}: {
  route: RouteItem & { townId?: string; townName?: string };
}) {
  const router = useRouter();
  const { theme } = useTheme();
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
        onPress={() =>
          router.push({
            pathname: "/matatu/[slug]",
            params: { slug: route.slug },
          })
        }
        style={styles.route}
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
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Text
                style={[styles.routeText, { color: theme.textPrimary, flex: 1 }]}
                numberOfLines={1}
              >
                {route.name}
              </Text>
              {route.townName && (
                <View
                  style={{
                    backgroundColor: theme.surfaceContainerHigh,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9.5,
                      fontWeight: "700",
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
              <Text
                style={[styles.saccoText, { color: theme.textSecondary }]}
                numberOfLines={1}
              >
                {route.saccoName}
              </Text>
              {route.stages && (
                <Text style={{ fontSize: 11, color: theme.textMuted }}>
                  · {route.stages.length} stages
                </Text>
              )}
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
}

export default function MatatuScreen() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedTown, setSelectedTown] = useState<string>("all");
  const [saccoFilter, setSaccoFilter] = useState<string>("all");
  const [fareFilter, setFareFilter] = useState<
    "all" | "under50" | "50to100" | "above100"
  >("all");
  const [sortBy, setSortBy] = useState<"route" | "fare" | "stages" | "name">(
    "route"
  );

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
      if (fareFilter === "under50" && r.fareMax > 50) return false;
      if (
        fareFilter === "50to100" &&
        (r.fareMax < 50 || r.fareMin > 100)
      )
        return false;
      if (fareFilter === "above100" && r.fareMax <= 100) return false;

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
      if (sortBy === "fare") return a.fareMin - b.fareMin || a.fareMax - b.fareMax;
      if (sortBy === "stages")
        return (b.stages?.length || 0) - (a.stages?.length || 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (a.routeNumber || "").localeCompare(b.routeNumber || "", undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  }, [allRoutes, search, selectedTown, saccoFilter, fareFilter, sortBy]);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="Matatu Routes & Fares"
        subtitle={`${allRoutes.length} routes · ${totalStages} stages · ${availableSaccos.length} SACCOs`}
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
        {/* Material 3 Search Bar */}
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: theme.surfaceContainerHigh,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <Ionicons name="search" size={20} color={theme.gold} />
          <TextInput
            placeholder="Search route, stage, or SACCO (e.g. Rongai, 44)..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={20}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Town Filter Chips */}
        {towns.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.townChipsRow}
          >
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
                <View
                  key={t.slug}
                  style={[
                    styles.townChipWrap,
                    active
                      ? {
                          backgroundColor: theme.primaryContainer,
                          borderColor: theme.gold,
                        }
                      : {
                          backgroundColor: theme.surfaceContainer,
                          borderColor: theme.outlineVariant,
                        },
                  ]}
                >
                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() => {
                      setSelectedTown(t.slug);
                      setSaccoFilter("all");
                    }}
                    style={styles.townChip}
                  >
                    {active && (
                      <Ionicons
                        name="checkmark"
                        size={14}
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
                </View>
              );
            })}
          </ScrollView>
        )}

        {/* Fare Range & Sort Controls (mirrors web TownMatatuView) */}
        <View style={styles.filterSubRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 6 }}
          >
            {(
              [
                { id: "all", label: "All Fares" },
                { id: "under50", label: "< KES 50" },
                { id: "50to100", label: "KES 50–100" },
                { id: "above100", label: "> KES 100" },
              ] as const
            ).map((f) => {
              const active = fareFilter === f.id;
              return (
                <Pressable
                  key={f.id}
                  onPress={() => setFareFilter(f.id)}
                  style={[
                    styles.miniFilterChip,
                    {
                      backgroundColor: active
                        ? `${theme.gold}25`
                        : theme.surfaceContainer,
                      borderColor: active ? theme.gold : theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "700",
                      color: active ? theme.gold : theme.textSecondary,
                    }}
                  >
                    {f.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View
            style={[
              styles.segmentedGroup,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            {(
              [
                { id: "route", label: "R#" },
                { id: "fare", label: "Fare" },
                { id: "stages", label: "Stages" },
                { id: "name", label: "A–Z" },
              ] as const
            ).map((opt) => {
              const active = sortBy === opt.id;
              return (
                <Pressable
                  key={opt.id}
                  onPress={() => setSortBy(opt.id)}
                  style={[
                    styles.segmentBtn,
                    active && { backgroundColor: theme.primaryContainer },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 10.5,
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
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* SACCO Filter Pills */}
        {availableSaccos.length > 1 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 6, marginBottom: 12 }}
          >
            {["all", ...availableSaccos].map((sacco) => {
              const active = saccoFilter === sacco;
              return (
                <Pressable
                  key={sacco}
                  onPress={() => setSaccoFilter(sacco)}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 8,
                    borderWidth: 1,
                    backgroundColor: active
                      ? theme.primaryContainer
                      : theme.surfaceContainer,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "600",
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
          </ScrollView>
        )}

        <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
          Showing {filteredRoutes.length} of {allRoutes.length} routes
        </Text>

        {filteredRoutes.map((route, i) => (
          <RouteCard key={`${route.townId}-${route.slug}-${i}`} route={route} />
        ))}

        {filteredRoutes.length === 0 && (
          <View style={styles.empty}>
            <Ionicons name="bus-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No routes found
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try adjusting your search query, SACCO, or fare filter.
            </Text>
          </View>
        )}

        {/* About Kenya Matatu Routes & Public Transport (from web matatu/page.tsx & matatu-routes.json) */}
        <View
          style={[
            styles.aboutCard,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <Text style={[styles.aboutHeading, { color: theme.gold }]}>
            About Kenya Matatu Routes & Public Transport
          </Text>
          <Text style={[styles.aboutParagraph, { color: theme.textSecondary }]}>
            Matatus are the heart of Kenya&apos;s public transport ecosystem.
            These 14-seater minibuses and 33+ seater buses connect Central
            Business Districts to suburbs, satellite towns, and rural markets in
            Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and beyond.
          </Text>
          <Text style={[styles.aboutParagraph, { color: theme.textSecondary }]}>
            Every matatu route in Kenya is operated under SACCOs (Savings and
            Credit Co-operatives) licensed by NTSA (National Transport and
            Safety Authority). Fares are market-driven and fluctuate based on
            peak rush hours (morning/evening), weather conditions, and fuel
            price adjustments.
          </Text>
          {notes.map((n, idx) => (
            <View key={idx} style={styles.noteRow}>
              <Text style={{ color: theme.gold, fontWeight: "900" }}>•</Text>
              <Text style={[styles.noteText, { color: theme.textSecondary }]}>
                {n}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 16,
    height: 48,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  townChipsRow: {
    paddingTop: 10,
    gap: 8,
  },
  townChipWrap: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  townChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
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
    gap: 8,
  },
  miniFilterChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
  },
  segmentedGroup: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  segmentBtn: {
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  resultsCount: {
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
    minWidth: 44,
    height: 44,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  routeNumText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 12,
  },
  trailingCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  routeBody: {
    flex: 1,
  },
  routeText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15.5,
    marginBottom: 5,
  },
  routeMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  fareBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  fareText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  saccoText: {
    fontSize: 12,
    flexShrink: 1,
  },
  empty: {
    alignItems: "center",
    paddingVertical: 48,
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
    maxWidth: 240,
  },
  aboutCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginTop: 10,
    gap: 8,
  },
  aboutHeading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    marginBottom: 2,
  },
  aboutParagraph: {
    fontSize: 12.5,
    lineHeight: 18,
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
});
