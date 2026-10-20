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
  name: string;
  number?: string;
  fareMin: number;
  fareMax: number;
  saccoName: string;
  town?: string;
  stages?: string[];
}

function RouteCard({ route }: { route: RouteItem & { townName?: string } }) {
  const router = useRouter();
  const { theme } = useTheme();

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
        <View
          style={[
            styles.routeIcon,
            {
              backgroundColor: theme.primaryContainer,
              borderColor: `${theme.gold}40`,
            },
          ]}
        >
          <Ionicons name="bus" size={20} color={theme.gold} />
        </View>
        <View style={styles.routeBody}>
          <Text
            style={[styles.routeText, { color: theme.textPrimary }]}
            numberOfLines={1}
          >
            {route.name}
          </Text>
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
      </Pressable>
    </View>
  );
}

export default function MatatuScreen() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedTown, setSelectedTown] = useState<string>("all");

  const towns = (matatuData as any).towns || [];
  const allRoutesByTown = (matatuData as any).routes || {};

  const allRoutes: (RouteItem & { townId: string; townName: string })[] =
    useMemo(() => {
      const list: (RouteItem & { townId: string; townName: string })[] = [];
      for (const [townId, routes] of Object.entries(allRoutesByTown)) {
        const townObj = towns.find((t: any) => t.id === townId);
        const townName = townObj ? townObj.name : townId;
        for (const r of routes as RouteItem[]) {
          list.push({ ...r, townId, townName });
        }
      }
      return list;
    }, [allRoutesByTown, towns]);

  const filteredRoutes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allRoutes.filter((r) => {
      const matchesTown =
        selectedTown === "all" ||
        r.townId === selectedTown ||
        (r as any).town === selectedTown ||
        r.townName.toLowerCase() === selectedTown.toLowerCase();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.saccoName.toLowerCase().includes(q) ||
        (r.stages &&
          r.stages.some((s: any) =>
            typeof s === "string"
              ? s.toLowerCase().includes(q)
              : s?.name?.toLowerCase().includes(q)
          ));
      return matchesTown && matchesSearch;
    });
  }, [allRoutes, search, selectedTown]);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="Matatu Routes & Fares"
        subtitle={`${allRoutes.length} routes across ${towns.length} hubs`}
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
            {[{ id: "all", name: "All Towns" }, ...towns].map((t: any) => {
              const active = selectedTown === t.id;
              return (
                <View
                  key={t.id}
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
                    onPress={() => setSelectedTown(t.id)}
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
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
          Showing {filteredRoutes.length} of {allRoutes.length} routes
        </Text>

        {filteredRoutes.map((route, i) => (
          <RouteCard key={`${route.slug}-${i}`} route={route} />
        ))}

        {filteredRoutes.length === 0 && (
          <View style={styles.empty}>
            <Ionicons name="bus-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No routes found
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try searching with another stage, destination, or corridor.
            </Text>
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
    flexDirection: "row",
    alignItems: "center",
  },
  routeIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
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
    flex: 1,
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
});
