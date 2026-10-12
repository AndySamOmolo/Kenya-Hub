import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe } from "../../src/theme";
import matatuData from "../../src/shared/data/matatu-routes.json";
import { MatatuMap } from "../../src/components/MatatuMap";

export default function MatatuRouteScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const route = Object.values(matatuData.routes)
    .flat()
    .find((item: any) => item.slug === slug) as any;

  if (!route) {
    return (
      <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]}>
        <View style={styles.notFound}>
          <Ionicons name="search" size={48} color={theme.textMuted} />
          <Text style={[styles.notFoundTitle, { color: theme.textPrimary }]}>Route not found</Text>
          <Pressable onPress={() => router.back()} style={[styles.backButton, { backgroundColor: theme.gold }]}>
            <Text style={styles.backButtonText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Header Bar */}
      <View style={[styles.headerBar, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <Pressable onPress={() => router.back()} style={[styles.navBackBtn, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.navBarTitle, { color: theme.textPrimary }]} numberOfLines={1}>
            {route.name}
          </Text>
          <Text style={[styles.navBarSubtitle, { color: theme.gold }]}>
            {route.saccoName || "Nairobi Matatu"}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Route Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.heroInner}>
            <View style={styles.heroHeader}>
              <View style={[styles.busIconBox, { backgroundColor: `${theme.gold}20`, borderColor: `${theme.gold}40` }]}>
                <Ionicons name="bus" size={26} color={theme.gold} />
              </View>
              <View style={{ flex: 1, marginLeft: 14 }}>
                <Text style={[styles.heading, { color: theme.textPrimary }]}>{route.name}</Text>
                <Text style={[styles.saccoHeading, { color: theme.textSecondary }]}>
                  Operated by <Text style={{ color: theme.gold, fontWeight: "700" }}>{route.saccoName}</Text>
                </Text>
              </View>
            </View>

            {/* Quick Fare & Details Strip */}
            <View style={[styles.fareStrip, { borderTopColor: theme.border }]}>
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>Off-Peak Fare</Text>
                <Text style={[styles.fareValue, { color: theme.textPrimary }]}>KES {route.fareMin}</Text>
              </View>
              <View style={[styles.fareDivider, { backgroundColor: theme.border }]} />
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>Peak Fare</Text>
                <Text style={[styles.fareValue, { color: theme.gold }]}>
                  KES {route.fareMax}
                </Text>
              </View>
              <View style={[styles.fareDivider, { backgroundColor: theme.border }]} />
              <View style={styles.fareItem}>
                <Text style={[styles.fareLabel, { color: theme.textMuted }]}>Stages</Text>
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
              height={300}
            />
          </View>
        )}

        {/* Terminus Card */}
        <Text style={[styles.sectionHeading, { color: theme.gold }]}>Route Terminus</Text>
        <View style={[styles.terminusCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.terminusRow}>
            <View style={[styles.terminusDotA, { backgroundColor: theme.kenyaGreenLight }]} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.terminusLabel, { color: theme.textMuted }]}>Departure / CBD</Text>
              <Text style={[styles.terminusName, { color: theme.textPrimary }]}>{route.terminusA}</Text>
            </View>
          </View>
          <View style={[styles.terminusConnector, { backgroundColor: theme.border }]} />
          <View style={styles.terminusRow}>
            <View style={[styles.terminusDotB, { backgroundColor: theme.kenyaRedLight }]} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.terminusLabel, { color: theme.textMuted }]}>Destination</Text>
              <Text style={[styles.terminusName, { color: theme.textPrimary }]}>{route.terminusB}</Text>
            </View>
          </View>
        </View>

        {/* Stages Timeline */}
        {route.stages && route.stages.length > 0 && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>
              Route Stages ({route.stages.length})
            </Text>
            <View style={[styles.timelineCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              {route.stages.map((stage: any, idx: number) => {
                const isFirst = idx === 0;
                const isLast = idx === route.stages.length - 1;
                const stageName = typeof stage === "string" ? stage : (stage?.name || `Stage ${idx + 1}`);
                const hasCoords = typeof stage === "object" && stage?.lat != null && stage?.lng != null;

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
                      {!isLast && <View style={[styles.timelineLine, { backgroundColor: theme.border }]} />}
                    </View>
                    <View style={styles.stageContent}>
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text
                          style={[
                            styles.stageName,
                            { color: theme.textSecondary },
                            (isFirst || isLast) && { fontWeight: "700", color: theme.textPrimary },
                          ]}
                        >
                          {stageName}
                        </Text>
                        <Text style={[styles.stageOrder, { color: theme.textMuted }]}>
                          #{typeof stage === "object" && stage?.order ? stage.order : idx + 1}
                        </Text>
                      </View>
                      {isFirst && (
                        <Text style={[styles.stageNote, { color: theme.gold }]}>Origin Stage / Departure</Text>
                      )}
                      {isLast && (
                        <Text style={[styles.stageNote, { color: theme.kenyaRedLight }]}>Final Terminus</Text>
                      )}
                      {hasCoords && (
                        <Text style={[styles.coordsText, { color: theme.textMuted }]}>
                          {stage.lat.toFixed(4)}, {stage.lng.toFixed(4)}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}

        {/* Operating Hours and Info Strip */}
        {route.operatingHours && (
          <View style={[styles.hoursCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="time-outline" size={18} color={theme.gold} />
            <Text style={[styles.hoursText, { color: theme.textPrimary }]}>
              Operating Hours: <Text style={{ fontWeight: "700" }}>{route.operatingHours}</Text>
            </Text>
          </View>
        )}

        {/* Advisory / Tips Note */}
        <View style={[styles.noteCard, { backgroundColor: `${theme.gold}15`, borderColor: `${theme.gold}30` }]}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color={theme.gold}
          />
          <Text style={[styles.noteText, { color: theme.textSecondary }]}>
            Fares vary dynamically depending on rush hours, weather, and fuel prices. Confirm with the makanga (conductor) before boarding.
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
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  navBackBtn: {
    padding: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  navBarTitle: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  navBarSubtitle: {
    fontSize: 12,
    fontWeight: "600",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  heroCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 20,
  },
  heroInner: {
    padding: 18,
  },
  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  busIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  saccoHeading: {
    fontSize: 13,
    marginTop: 2,
  },
  fareStrip: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    alignItems: "center",
  },
  fareItem: {
    flex: 1,
    alignItems: "center",
  },
  fareLabel: {
    fontSize: 10,
    marginBottom: 2,
  },
  fareValue: {
    fontSize: 15,
    fontFamily: "Outfit_700Bold",
    fontWeight: "800",
  },
  fareDivider: {
    width: 1,
    height: 24,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
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
    fontWeight: "600",
  },
  terminusName: {
    fontSize: 15,
    fontWeight: "700",
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
    fontWeight: "600",
  },
  stageOrder: {
    fontSize: 11,
    fontWeight: "700",
  },
  stageNote: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 2,
  },
  coordsText: {
    fontSize: 10,
    marginTop: 2,
  },
  hoursCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 16,
  },
  hoursText: {
    fontSize: 13,
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
    color: "#1A1108",
    fontWeight: "800",
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
    fontWeight: "600",
  },
});
