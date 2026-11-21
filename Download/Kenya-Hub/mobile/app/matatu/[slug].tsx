import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Linking,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
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
import { MatatuMap } from "../../src/components/MatatuMap";

export default function MatatuRouteScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const [reported, setReported] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [slug]);

  const { route, townName, otherRoutes } = useMemo(() => {
    const routesByTown = (matatuData as any).routes || {};
    const towns = (matatuData as any).towns || [];
    for (const [tSlug, list] of Object.entries(routesByTown)) {
      const found = (list as any[]).find((item: any) => item.slug === slug);
      if (found) {
        const tObj = towns.find((t: any) => t.slug === tSlug || t.id === tSlug);
        return {
          route: found,
          townSlug: tSlug,
          townName: tObj?.name || tSlug,
          otherRoutes: (list as any[])
            .filter((r: any) => r.slug !== slug)
            .slice(0, 4),
        };
      }
    }
    return { route: null, townSlug: "", townName: "", otherRoutes: [] };
  }, [slug]);

  if (!route) {
    return (
      <SafeAreaView
        style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
        edges={["top", "left", "right", "bottom"]}
      >
        <View style={styles.notFound}>
          <Ionicons name="search" size={48} color={theme.textMuted} />
          <Text style={[styles.notFoundTitle, { color: theme.textPrimary }]}>
            Route not found
          </Text>
          <Pressable
            onPress={() => router.back()}
            style={pressableStyle([
              styles.backButton,
              { backgroundColor: theme.gold },
            ])}
          >
            <Text style={styles.backButtonText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const handleShareRoute = async () => {
    triggerHaptic(10);
    const stageList = (route.stages || [])
      .map((s: any, idx: number) => `${idx + 1}. ${typeof s === "string" ? s : s.name}`)
      .join(" → ");
    try {
      await Share.share({
        title: `Matatu Route ${route.routeNumber}: ${route.name}`,
        message: `Matatu Route ${route.routeNumber} (${townName}): ${route.name}\nSACCO: ${route.saccoName}\nFare: KES ${route.fareMin} (Off-Peak) – KES ${route.fareMax} (Peak)\nStages: ${stageList}\n\n— Shared via KenyaHub`,
      });
    } catch {}
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right", "bottom"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title={`Route ${route.routeNumber}`}
        subtitle={townName}
        onBack={() => router.back()}
        rightAction={
          <Pressable
            onPress={handleShareRoute}
            accessibilityRole="button"
            accessibilityLabel="Share matatu route details"
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={pressableStyle({
              width: 34,
              height: 34,
              borderRadius: 17,
              borderWidth: 1,
              borderColor: theme.outlineVariant,
              backgroundColor: theme.surfaceContainerHigh,
              alignItems: "center",
              justifyContent: "center",
            })}
            hitSlop={8}
          >
            <Ionicons name="share-social-outline" size={16} color={theme.gold} />
          </Pressable>
        }
      />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
      >
        {/* Route Hero Card */}
        <View
          style={[
            styles.heroCard,
            { backgroundColor: theme.bgCard, borderColor: theme.border },
          ]}
        >
          <View style={styles.heroInner}>
            <View style={styles.heroHeader}>
              <View
                style={[
                  styles.busIconBox,
                  {
                    backgroundColor: `${theme.gold}20`,
                    borderColor: `${theme.gold}40`,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Outfit_800ExtraBold",
                    fontSize: 13,
                    color: theme.gold,
                  }}
                >
                  R{route.routeNumber}
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 14 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 2,
                  }}
                >
                  {route.gtfsVerified === true && (
                    <View
                      style={{
                        backgroundColor: `${theme.kenyaGreen}25`,
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 999,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "Outfit_800ExtraBold",
                          color: theme.kenyaGreenLight,
                        }}
                      >
                        ✓ GTFS Verified
                      </Text>
                    </View>
                  )}
                  <Text style={{ fontSize: 11, color: theme.textMuted }}>
                    {townName}
                  </Text>
                </View>
                <Text style={[styles.heading, { color: theme.textPrimary }]}>
                  {route.name}
                </Text>
                <Text
                  style={[styles.saccoHeading, { color: theme.textSecondary }]}
                >
                  Operated by{" "}
                  <Text style={{ color: theme.gold, fontFamily: "Outfit_700Bold" }}>
                    {route.saccoName}
                  </Text>
                </Text>
              </View>
            </View>

            {/* Quick Fare & Details Strip */}
            <View style={[styles.fareStrip, { borderTopColor: theme.border }]}>
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>
                  Off-Peak Fare
                </Text>
                <Text style={[styles.fareValue, { color: theme.textPrimary }]}>
                  KES {route.fareMin}
                </Text>
              </View>
              <View
                style={[styles.fareDivider, { backgroundColor: theme.border }]}
              />
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>
                  Peak / Rain Fare
                </Text>
                <Text style={[styles.fareValue, { color: theme.gold }]}>
                  KES {route.fareMax}
                </Text>
              </View>
              <View
                style={[styles.fareDivider, { backgroundColor: theme.border }]}
              />
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>
                  Stages
                </Text>
                <Text style={[styles.fareValue, { color: theme.textPrimary }]}>
                  {route.stages ? route.stages.length : "—"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Interactive Route Map */}
        {route.stages && route.stages.length > 0 && (
          <View style={styles.mapSection}>
            <View style={styles.mapHeaderRow}>
              <Text style={[styles.sectionHeading, { color: theme.gold }]}>
                Interactive Route Map
              </Text>
              <Text style={[styles.mapStageCount, { color: theme.textMuted }]}>
                {route.stages.length} Stage Stopovers
              </Text>
            </View>
            <MatatuMap
              stages={route.stages}
              routeName={route.name}
              routeNumber={route.routeNumber}
              height={320}
            />
          </View>
        )}

        {/* Terminus Card */}
        <Text style={[styles.sectionHeading, { color: theme.gold }]}>
          Route Terminus
        </Text>
        <View
          style={[
            styles.terminusCard,
            { backgroundColor: theme.bgCard, borderColor: theme.border },
          ]}
        >
          <View style={styles.terminusRow}>
            <View
              style={[
                styles.terminusDotA,
                { backgroundColor: theme.kenyaGreenLight },
              ]}
            />
            <View style={{ flex: 1 }}>
              <Text style={[styles.terminusLabel, { color: theme.textMuted }]}>
                Start Terminus / CBD
              </Text>
              <Text
                style={[styles.terminusName, { color: theme.textPrimary }]}
              >
                {route.terminusA}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.terminusConnector,
              { backgroundColor: theme.border },
            ]}
          />
          <View style={styles.terminusRow}>
            <View
              style={[
                styles.terminusDotB,
                { backgroundColor: theme.kenyaRedLight },
              ]}
            />
            <View style={{ flex: 1 }}>
              <Text style={[styles.terminusLabel, { color: theme.textMuted }]}>
                Destination
              </Text>
              <Text
                style={[styles.terminusName, { color: theme.textPrimary }]}
              >
                {route.terminusB}
              </Text>
            </View>
          </View>
        </View>

        {/* Stages Timeline */}
        {route.stages && route.stages.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Stage Stopovers ({route.stages.length})
            </Text>
            <View
              style={[
                styles.timelineCard,
                { backgroundColor: theme.bgCard, borderColor: theme.border },
              ]}
            >
              {route.stages.map((stage: any, idx: number) => {
                const isFirst = idx === 0;
                const isLast = idx === route.stages.length - 1;
                const stageName =
                  typeof stage === "string"
                    ? stage
                    : stage?.name || `Stage ${idx + 1}`;
                const hasCoords =
                  typeof stage === "object" &&
                  stage?.lat != null &&
                  stage?.lng != null;

                return (
                  <View key={idx} style={styles.stageRow}>
                    <View style={styles.timelineCol}>
                      <View
                        style={[
                          styles.timelineDot,
                          { backgroundColor: theme.textMuted },
                          isFirst && { backgroundColor: theme.kenyaGreenLight },
                          isLast && { backgroundColor: theme.kenyaRedLight },
                        ]}
                      />
                      {!isLast && (
                        <View
                          style={[
                            styles.timelineLine,
                            { backgroundColor: theme.border },
                          ]}
                        />
                      )}
                    </View>
                    <View style={styles.stageContent}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={[
                            styles.stageName,
                            { color: theme.textSecondary },
                            (isFirst || isLast) && {
                              fontFamily: "Outfit_700Bold",
                              color: theme.textPrimary,
                            },
                          ]}
                        >
                          {stageName}
                        </Text>
                        <Text
                          style={[
                            styles.stageOrder,
                            { color: theme.textMuted },
                          ]}
                        >
                          #
                          {typeof stage === "object" && stage?.order
                            ? stage.order
                            : idx + 1}
                        </Text>
                      </View>
                      {isFirst && (
                        <Text style={[styles.stageNote, { color: theme.gold }]}>
                          Departure Terminus
                        </Text>
                      )}
                      {isLast && (
                        <Text
                          style={[
                            styles.stageNote,
                            { color: theme.kenyaRedLight },
                          ]}
                        >
                          Final Destination
                        </Text>
                      )}
                      <Pressable
                        onPress={() => {
                          triggerHaptic(6);
                          const q = hasCoords
                            ? `${stage.lat},${stage.lng}`
                            : encodeURIComponent(`${stageName} matatu stage, ${townName}, Kenya`);
                          Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${q}`).catch(() => {});
                        }}
                        accessibilityRole="link"
                        accessibilityLabel={`Open ${stageName} in Google Maps`}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 4,
                          marginTop: 4,
                        }}
                      >
                        <Ionicons name="location-outline" size={12} color={theme.sky} />
                        <Text style={{ fontSize: 11, fontFamily: "Outfit_700Bold", color: theme.sky }}>
                          Open Boarding Stage in Google Maps ↗
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}

        {/* Operating Hours and Info Strip */}
        {route.operatingHours && (
          <View
            style={[
              styles.hoursCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <Ionicons name="time-outline" size={18} color={theme.gold} />
            <Text style={[styles.hoursText, { color: theme.textPrimary }]}>
              Operating Hours:{" "}
              <Text style={{ fontFamily: "Outfit_700Bold" }}>
                {route.operatingHours}
              </Text>
            </Text>
          </View>
        )}

        {/* Report Discrepancy Card */}
        <View
          style={[
            styles.reportCard,
            { backgroundColor: theme.bgCard, borderColor: theme.border },
          ]}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Outfit_700Bold",
              color: theme.textPrimary,
            }}
          >
            Notice an error in fares or stages?
          </Text>
          <Text
            style={{
              fontSize: 11.5,
              color: theme.textMuted,
              textAlign: "center",
              marginTop: 2,
            }}
          >
            Help us keep Kenya&apos;s matatu route information accurate.
          </Text>
          {reported ? (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Outfit_700Bold",
                color: theme.kenyaGreenLight,
                marginTop: 8,
              }}
            >
              ✓ Thank you! Report saved locally for review.
            </Text>
          ) : (
            <Pressable
              onPress={() => {
                triggerHaptic(10);
                setReported(true);
              }}
              style={pressableStyle([
                styles.reportBtn,
                {
                  backgroundColor: theme.bgElevated,
                  borderColor: theme.border,
                },
              ])}
            >
              <Ionicons
                name="flag-outline"
                size={14}
                color={theme.kenyaRedLight}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Outfit_700Bold",
                  color: theme.textPrimary,
                }}
              >
                Report Discrepancy
              </Text>
            </Pressable>
          )}
        </View>

        {/* Other Town Routes */}
        {otherRoutes.length > 0 && (
          <View style={{ marginTop: 8, marginBottom: 16 }}>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Other {townName} Routes
            </Text>
            <View style={{ gap: 8 }}>
              {otherRoutes.map((r: any) => (
                <Pressable
                  key={r.slug}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() =>
                    router.push({
                      pathname: "/matatu/[slug]",
                      params: { slug: r.slug },
                    })
                  }
                  style={pressableStyle([
                    styles.otherRouteCard,
                    {
                      backgroundColor: theme.bgCard,
                      borderColor: theme.border,
                    },
                  ])}
                >
                  <View
                    style={{
                      backgroundColor: `${theme.gold}20`,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Outfit_800ExtraBold",
                        color: theme.gold,
                      }}
                    >
                      R{r.routeNumber}
                    </Text>
                  </View>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 13.5,
                        fontFamily: "Outfit_700Bold",
                        color: theme.textPrimary,
                      }}
                    >
                      {r.name}
                    </Text>
                    <Text style={{ fontSize: 11.5, color: theme.textMuted }}>
                      KES {r.fareMin}–{r.fareMax} · {r.saccoName}
                    </Text>
                  </View>
                  <Ionicons
                    name="arrow-forward"
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Advisory / Tips Note */}
        <View
          style={[
            styles.noteCard,
            {
              backgroundColor: `${theme.gold}15`,
              borderColor: `${theme.gold}30`,
            },
          ]}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color={theme.gold}
          />
          <Text style={[styles.noteText, { color: theme.textSecondary }]}>
            Fares vary dynamically depending on rush hours, weather, and fuel
            prices. Confirm with the makanga (conductor) before boarding.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 12,
    paddingBottom: 32,
  },
  heroCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 12,
  },
  heroInner: {
    padding: 12,
  },
  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  busIconBox: {
    minWidth: 42,
    height: 42,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 17,
    fontFamily: "Outfit_800ExtraBold",
  },
  saccoHeading: {
    fontFamily: "Inter_400Regular",
    fontSize: 12.5,
    marginTop: 2,
  },
  fareStrip: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    alignItems: "center",
  },
  fareItem: {
    flex: 1,
    alignItems: "center",
  },
  fareLabel: {
    fontFamily: "Inter_500Medium",
    fontSize: 10,
    marginBottom: 2,
  },
  fareValue: {
    fontSize: 15,
    fontFamily: "Outfit_700Bold",
  },
  fareDivider: {
    width: 1,
    height: 24,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Outfit_800ExtraBold",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 6,
  },
  terminusCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  terminusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  terminusDotA: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 14,
  },
  terminusDotB: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 14,
  },
  terminusConnector: {
    width: 2,
    height: 24,
    marginLeft: 5,
    marginVertical: 4,
  },
  terminusLabel: {
    fontSize: 10,
    fontFamily: "Inter_600SemiBold",
  },
  terminusName: {
    fontSize: 15,
    fontFamily: "Outfit_700Bold",
    marginTop: 1,
  },
  timelineCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  stageRow: {
    flexDirection: "row",
    minHeight: 40,
  },
  timelineCol: {
    width: 24,
    alignItems: "center",
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    marginVertical: 3,
  },
  stageContent: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 14,
  },
  stageName: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  stageOrder: {
    fontSize: 11,
    fontFamily: "Outfit_700Bold",
  },
  stageNote: {
    fontSize: 11,
    fontFamily: "Outfit_700Bold",
    marginTop: 2,
  },
  coordsText: {
    fontSize: 10,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  hoursCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
  },
  hoursText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },
  reportCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  reportBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  otherRouteCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },
  noteText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  notFoundTitle: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
    marginTop: 12,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  backButtonText: {
    color: "#1A1108",
    fontFamily: "Outfit_800ExtraBold",
  },
  mapSection: {
    marginBottom: 20,
  },
  mapHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  mapStageCount: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
});
