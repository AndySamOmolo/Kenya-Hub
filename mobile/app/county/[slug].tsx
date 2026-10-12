import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe } from "../../src/theme";
import countiesData from "../../src/shared/data/counties.json";

interface County {
  code: number;
  name: string;
  slug: string;
  capital: string;
  governor: string;
  deputyGovernor?: string;
  senator?: string;
  womenRep?: string;
  website?: string;
  phone?: string;
  population: number;
  area: number;
  constituencies: string[];
}

export default function CountyDetailScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const county: County | undefined = countiesData.counties.find(
    (c) => c.slug === slug || String(c.code) === slug
  );

  if (!county) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.bgPrimary }]}>
        <View style={[styles.headerBar, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
          <Pressable onPress={() => router.back()} style={[styles.backButton, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
            <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
          </Pressable>
          <Text style={[styles.headerBarTitle, { color: theme.textPrimary }]}>County Not Found</Text>
        </View>
        <View style={styles.notFoundWrap}>
          <Text style={{ color: theme.textSecondary, fontSize: 16 }}>
            The requested county could not be found.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const codeFormatted = String(county.code).padStart(3, "0");
  const density =
    county.area > 0 ? Math.round(county.population / county.area) : 0;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bgPrimary }]} edges={["top", "left", "right"]}>
      <KenyaStripe />

      {/* Top Navbar */}
      <View style={[styles.headerBar, { backgroundColor: theme.bgSecondary, borderBottomColor: theme.border }]}>
        <Pressable onPress={() => router.back()} style={[styles.backButton, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={[styles.headerBarTitle, { color: theme.textPrimary }]} numberOfLines={1}>
            {county.name} County
          </Text>
          <Text style={[styles.headerBarSubtitle, { color: theme.textSecondary }]}>County {codeFormatted}</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={styles.heroBody}>
            <View style={styles.heroRow}>
              <View style={[styles.heroBadge, { backgroundColor: `${theme.gold}20`, borderColor: `${theme.gold}40` }]}>
                <Text style={[styles.heroBadgeText, { color: theme.gold }]}>{codeFormatted}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 14 }}>
                <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>{county.name}</Text>
                <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
                  Capital: <Text style={{ color: theme.gold, fontWeight: "700" }}>{county.capital}</Text>
                </Text>
              </View>
            </View>

            {/* Quick Stats Grid */}
            <View style={[styles.statsGrid, { borderTopColor: theme.border }]}>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="people" size={18} color={theme.sky} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {county.population.toLocaleString()}
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Population</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="map" size={18} color={theme.kenyaGreenLight} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {county.area.toLocaleString()} km²
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Land Area</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="analytics" size={18} color={theme.gold} />
                <Text style={[styles.statBoxValue, { color: theme.textPrimary }]}>
                  {density} / km²
                </Text>
                <Text style={[styles.statBoxLabel, { color: theme.textMuted }]}>Density</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Leadership Section */}
        <Text style={[styles.sectionHeading, { color: theme.gold }]}>County Leadership</Text>
        <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
          <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
            <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
              <Ionicons name="ribbon-outline" size={18} color={theme.gold} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Governor</Text>
              <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.governor}</Text>
            </View>
          </View>

          {county.deputyGovernor && (
            <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="person-outline" size={18} color={theme.sky} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Deputy Governor</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.deputyGovernor}</Text>
              </View>
            </View>
          )}

          {county.senator && (
            <View style={[styles.leaderRow, { borderBottomColor: theme.border }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="shield-outline" size={18} color={theme.kenyaGreenLight} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Senator</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.senator}</Text>
              </View>
            </View>
          )}

          {county.womenRep && (
            <View style={[styles.leaderRow, { borderBottomWidth: 0 }]}>
              <View style={[styles.leaderIconWrap, { backgroundColor: theme.bgElevated, borderColor: theme.border }]}>
                <Ionicons name="heart-outline" size={18} color={theme.kenyaRedLight} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.leaderRole, { color: theme.textMuted }]}>Woman Representative</Text>
                <Text style={[styles.leaderName, { color: theme.textPrimary }]}>{county.womenRep}</Text>
              </View>
            </View>
          )}
        </View>

        {/* Constituencies / Sub-counties */}
        <View style={styles.subcountiesHeaderRow}>
          <Text style={[styles.sectionHeading, { color: theme.gold }]}>
            Constituencies ({county.constituencies.length})
          </Text>
        </View>
        <View style={styles.constituenciesWrap}>
          {county.constituencies.map((c, i) => (
            <View key={i} style={[styles.constituencyChip, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              <Text style={[styles.constituencyNumber, { color: theme.gold, backgroundColor: `${theme.gold}18` }]}>{i + 1}</Text>
              <Text style={[styles.constituencyText, { color: theme.textPrimary }]}>{c}</Text>
            </View>
          ))}
        </View>

        {/* Contact & Official Info */}
        {(county.phone || county.website) && (
          <>
            <Text style={[styles.sectionHeading, { color: theme.gold }]}>Official Contacts</Text>
            <View style={[styles.infoCard, { backgroundColor: theme.bgCard, borderColor: theme.border }]}>
              {county.phone && (
                <Pressable
                  style={[styles.contactRow, { borderBottomColor: theme.border }]}
                  onPress={() => Linking.openURL(`tel:${county.phone}`)}
                >
                  <Ionicons name="call-outline" size={18} color={theme.gold} />
                  <Text style={[styles.contactText, { color: theme.textPrimary }]}>{county.phone}</Text>
                  <Ionicons name="open-outline" size={16} color={theme.textMuted} />
                </Pressable>
              )}
              {county.website && (
                <Pressable
                  style={[styles.contactRow, { borderBottomWidth: 0 }]}
                  onPress={() => Linking.openURL(county.website!)}
                >
                  <Ionicons name="globe-outline" size={18} color={theme.sky} />
                  <Text style={[styles.contactText, { color: theme.textPrimary }]} numberOfLines={1}>
                    {county.website}
                  </Text>
                  <Ionicons name="open-outline" size={16} color={theme.textMuted} />
                </Pressable>
              )}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  headerBarTitle: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  headerBarSubtitle: {
    fontSize: 12,
    marginTop: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  heroCard: {
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 16,
  },
  heroBody: {
    padding: 18,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroBadge: {
    width: 52,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroBadgeText: {
    fontSize: 18,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "900",
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
  },
  heroSubtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  statsGrid: {
    flexDirection: "row",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    gap: 8,
  },
  statBox: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  statBoxValue: {
    fontSize: 13,
    fontFamily: "Outfit_700Bold",
    fontWeight: "800",
    marginTop: 6,
    textAlign: "center",
  },
  statBoxLabel: {
    fontSize: 10,
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Outfit_800ExtraBold",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 10,
    marginTop: 12,
  },
  infoCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 14,
  },
  leaderRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
  },
  leaderIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
  },
  leaderRole: {
    fontSize: 11,
    fontWeight: "600",
  },
  leaderName: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 1,
  },
  subcountiesHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  constituenciesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  constituencyChip: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  constituencyNumber: {
    fontSize: 10,
    fontWeight: "800",
    marginRight: 6,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  constituencyText: {
    fontSize: 12,
    fontWeight: "600",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  contactText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
  },
  notFoundWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
