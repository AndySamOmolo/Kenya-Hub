import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import matatuData from "../../shared/data/matatu-routes.json";
import { MatatuMap } from "../../components/MatatuMap";
import { useRouter } from "expo-router";

/** 8. Matatu Routes Explorer Tool */
export function MatatuRoutesTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const router = useRouter();
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedTown, setSelectedTown] = useState<string>("nairobi");
  const [search, setSearch] = useState("");
  const [fareFilter, setFareFilter] = useState<"all" | "under50" | "50to100" | "above100">("all");
  const [sortBy, setSortBy] = useState<"route" | "fare" | "stages">("route");

  const activeTowns = useMemo(() => {
    return matatuData.towns.filter((t: any) => t.isActive);
  }, []);

  const townRoutes = useMemo(() => {
    const list = (matatuData.routes as Record<string, any[]>)[selectedTown] || [];
    return list;
  }, [selectedTown]);

  const [selectedRouteSlug, setSelectedRouteSlug] = useState<string>(
    townRoutes[0]?.slug || "111-ngong"
  );


  const filteredRoutes = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = townRoutes.filter((r: any) => {
      if (fareFilter === "under50" && r.fareMax > 50) return false;
      if (fareFilter === "50to100" && (r.fareMax < 50 || r.fareMin > 100))
        return false;
      if (fareFilter === "above100" && r.fareMax <= 100) return false;

      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        r.routeNumber.toLowerCase().includes(q) ||
        r.terminusA.toLowerCase().includes(q) ||
        r.terminusB.toLowerCase().includes(q) ||
        r.saccoName.toLowerCase().includes(q) ||
        (Array.isArray(r.stages) &&
          r.stages.some((s: any) =>
            (typeof s === "string" ? s : s?.name || "")
              .toLowerCase()
              .includes(q)
          ))
      );
    });

    return [...list].sort((a: any, b: any) => {
      if (sortBy === "fare") return a.fareMin - b.fareMin || a.fareMax - b.fareMax;
      if (sortBy === "stages")
        return (b.stages?.length || 0) - (a.stages?.length || 0);
      return String(a.routeNumber).localeCompare(String(b.routeNumber), undefined, {
        numeric: true,
      });
    });
  }, [townRoutes, search, fareFilter, sortBy]);

  const activeRoute = useMemo(() => {
    return (
      filteredRoutes.find((r: any) => r.slug === selectedRouteSlug) ||
      filteredRoutes[0] ||
      townRoutes[0]
    );
  }, [filteredRoutes, townRoutes, selectedRouteSlug]);

  return (
    <View style={styles.toolWrap}>
      {/* Town Pills */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {activeTowns.map((town: any) => {
          const active = town.slug === selectedTown;
          return (
            <Pressable
              key={town.slug}
              onPress={() => {
                setSelectedTown(town.slug);
                const first = ((matatuData.routes as any)[town.slug] || [])[0];
                if (first) setSelectedRouteSlug(first.slug);
              }}
              style={[
                styles.categoryChip,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {town.name} ({town.routeCount})
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Search Route */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
            key={`ti-6-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          placeholder={`Search ${selectedTown} route, stage, or SACCO...`}
          placeholderTextColor={theme.textMuted}
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* Fare & Sort Controls */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "all", label: "All" },
              { id: "under50", label: "<50" },
              { id: "50to100", label: "50–100" },
              { id: "above100", label: ">100" },
            ] as const
          ).map((f) => {
            const active = fareFilter === f.id;
            return (
              <Pressable
                key={f.id}
                onPress={() => setFareFilter(f.id)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 8,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 10.5,
                    fontWeight: "700",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {f.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "route", label: "Route #" },
              { id: "fare", label: "Fare" },
              { id: "stages", label: "Stages" },
            ] as const
          ).map((s) => {
            const active = sortBy === s.id;
            return (
              <Pressable
                key={s.id}
                onPress={() => setSortBy(s.id)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 8,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 10.5,
                    fontWeight: "700",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {s.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Route Quick Selector Scroll */}
      <View>
        <Text style={[styles.subHeading, { marginBottom: 6 }]}>
          Select Route ({filteredRoutes.length} available)
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          {filteredRoutes.map((r: any) => {
            const active = r.slug === activeRoute?.slug;
            return (
              <Pressable
                key={r.slug}
                onPress={() => setSelectedRouteSlug(r.slug)}
                style={[
                  styles.quickRouteBtn,
                  {
                    backgroundColor: active ? theme.gold : theme.bgElevated,
                    borderColor: active ? theme.gold : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.quickRouteText,
                    { color: active ? theme.kenyaBlack : theme.textPrimary },
                  ]}
                >
                  {r.routeNumber}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Active Route Detail Card */}
      {activeRoute && (
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <View
                  style={[
                    styles.routeBadge,
                    { backgroundColor: `${theme.gold}20`, borderColor: theme.gold },
                  ]}
                >
                  <Text style={[styles.routeBadgeText, { color: theme.gold }]}>
                    Route {activeRoute.routeNumber}
                  </Text>
                </View>
                {activeRoute.verified && (
                  <View
                    style={[
                      styles.verifiedTag,
                      { backgroundColor: `${theme.kenyaGreen}20` },
                    ]}
                  >
                    <Text
                      style={[
                        styles.verifiedTagText,
                        { color: theme.kenyaGreenLight },
                      ]}
                    >
                      ✓ Verified
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.holidayName}>{activeRoute.name}</Text>
              <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
                Operated by{" "}
                <Text style={{ color: theme.textSecondary, fontWeight: "700" }}>
                  {activeRoute.saccoName}
                </Text>
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 10,
                  color: theme.textMuted,
                  textTransform: "uppercase",
                }}
              >
                Fare
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_800ExtraBold",
                  fontWeight: "900",
                  color: theme.gold,
                }}
              >
                KES {activeRoute.fareMin}–{activeRoute.fareMax}
              </Text>
            </View>
          </View>

          {activeRoute.stages && activeRoute.stages.length > 0 && (
            <View style={{ marginVertical: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold }}>
                  Interactive Route Map
                </Text>
                <Text style={{ fontSize: 11, color: theme.textMuted }}>
                  {activeRoute.stages.length} Stages
                </Text>
              </View>
              <MatatuMap
                stages={activeRoute.stages}
                routeName={activeRoute.name}
                routeNumber={activeRoute.routeNumber}
                height={260}
              />
            </View>
          )}

          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Departure / CBD</Text>
            <Text style={[styles.rowValue, { color: theme.kenyaGreenLight }]}>
              {activeRoute.terminusA}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Destination</Text>
            <Text style={[styles.rowValue, { color: theme.kenyaRedLight }]}>
              {activeRoute.terminusB}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Hours</Text>
            <Text style={styles.rowValue}>{activeRoute.operatingHours}</Text>
          </View>

          <Pressable
            onPress={() => router.push(`/matatu/${activeRoute.slug}` as any)}
            style={[styles.openCorridorBtn, { backgroundColor: theme.gold }]}
          >
            <Text style={styles.openCorridorText}>
              View Full Corridor & Stages Itinerary
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#1A1108" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

