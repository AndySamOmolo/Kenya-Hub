import React, { useState, useMemo, useRef } from "react";
import { useRouter } from "expo-router";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe } from "../../src/theme";
import { BrandLogo } from "../../src/components/BrandLogo";
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

function RouteCard({ route }: { route: RouteItem }) {
  const router = useRouter();
  const { theme } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/matatu/[slug]",
            params: { slug: route.slug },
          })
        }
        onPressIn={() =>
          Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start()
        }
        onPressOut={() =>
          Animated.spring(scale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
          }).start()
        }
        style={[
          styles.route,
          {
            backgroundColor: theme.bgCard,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={[styles.routeIcon, { backgroundColor: `${theme.gold}15`, borderColor: `${theme.gold}30` }]}>
          <Ionicons name="bus" size={20} color={theme.gold} />
        </View>
        <View style={styles.routeBody}>
          <Text style={[styles.routeText, { color: theme.textPrimary }]} numberOfLines={1}>
            {route.name}
          </Text>
          <View style={styles.routeMetaRow}>
            <View style={[styles.fareBadge, { backgroundColor: `${theme.gold}20`, borderColor: `${theme.gold}40` }]}>
              <Text style={[styles.fareText, { color: theme.gold }]}>
                KES {route.fareMin}–{route.fareMax}
              </Text>
            </View>
            <Text style={[styles.saccoText, { color: theme.textSecondary }]} numberOfLines={1}>
              {route.saccoName}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
      </Pressable>
    </Animated.View>
  );
}

export default function MatatuScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedTown, setSelectedTown] = useState<string>("all");

  const towns = (matatuData as any).towns || [];
  const allRoutesByTown = (matatuData as any).routes || {};

  // Flatten all routes with their town
  const allRoutes: (RouteItem & { townName: string })[] = useMemo(() => {
    const list: (RouteItem & { townName: string })[] = [];
    for (const [townId, routes] of Object.entries(allRoutesByTown)) {
      const townObj = towns.find((t: any) => t.id === townId);
      const townName = townObj ? townObj.name : townId;
      for (const r of routes as RouteItem[]) {
        list.push({ ...r, townName });
      }
    }
    return list;
  }, [allRoutesByTown, towns]);

  const filteredRoutes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allRoutes.filter((r) => {
      const matchesTown =
        selectedTown === "all" ||
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
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <View style={styles.headerTop}>
          <BrandLogo size="sm" showText={false} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.heading, { color: theme.textPrimary }]}>Matatu Routes & Fares</Text>
            <Text style={[styles.description, { color: theme.textSecondary }]}>
              Nairobi stages, corridors, operators & fare guide
            </Text>
          </View>
          <Pressable
            onPress={toggleTheme}
            style={[styles.themeBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}
            hitSlop={8}
          >
            <Ionicons name={isDark ? "sunny-outline" : "moon-outline"} size={16} color={theme.gold} />
          </Pressable>
        </View>

        {/* Search */}
        <View style={[styles.searchBar, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            placeholder="Search route, destination, or SACCO (e.g. Rongai, 44)..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")} hitSlop={8}>
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>

        {/* Stats Bar */}
        <View style={[styles.statsRow, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, { color: theme.gold }]}>{allRoutes.length}</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Total Routes</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, { color: theme.gold }]}>{towns.length}</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Towns & Hubs</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCard}>
            <View style={styles.offlineWrap}>
              <Ionicons
                name="cloud-offline-outline"
                size={14}
                color={theme.kenyaGreenLight}
              />
              <Text
                style={[
                  styles.statNumber,
                  { color: theme.kenyaGreenLight, marginLeft: 4 },
                ]}
              >
                Offline
              </Text>
            </View>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>100% Ready</Text>
          </View>
        </View>
      </View>

      {/* Route List */}
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
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No routes found</Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try searching with another destination or corridor
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
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  busIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  themeBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 20,
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14,
  },
  statLabel: {
    fontSize: 10,
    marginTop: 1,
  },
  statDivider: {
    width: 1,
    height: 20,
  },
  offlineWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  resultsCount: {
    fontSize: 12,
    marginBottom: 12,
  },
  route: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  routeIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  routeBody: {
    flex: 1,
  },
  routeText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    marginBottom: 4,
  },
  routeMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  fareBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  fareText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  saccoText: {
    fontSize: 11,
    flex: 1,
  },
  empty: {
    alignItems: "center",
    paddingVertical: 50,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    marginTop: 4,
  },
});
