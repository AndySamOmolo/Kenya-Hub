import React, { useState, useMemo } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
} from "../../src/theme";
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

export default function CountyScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const counties: County[] = countiesData.counties;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return counties;
    return counties.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.governor.toLowerCase().includes(q) ||
        String(c.code).padStart(2, "0").includes(q)
    );
  }, [query, counties]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="47 Counties of Kenya"
        subtitle="290 constituencies · Devolved governments"
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
            placeholder="Search by county, capital, governor, or code..."
            placeholderTextColor={theme.textMuted}
            value={query}
            onChangeText={setQuery}
            style={[styles.searchInput, { color: theme.textPrimary }]}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={20}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.resultsCount, { color: theme.textMuted }]}>
          Showing {filtered.length} of {counties.length} counties
        </Text>

        {filtered.map((item) => {
          const codeFormatted = String(item.code).padStart(3, "0");
          return (
            <View
              key={item.code}
              style={[
                styles.countyCardWrap,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                style={styles.countyCard}
                onPress={() => router.push(`/county/${item.slug}` as any)}
              >
                <View style={styles.cardHeaderRow}>
                  <View
                    style={[
                      styles.codeBadge,
                      {
                        backgroundColor: theme.primaryContainer,
                        borderColor: `${theme.gold}40`,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.codeText,
                        { color: theme.onPrimaryContainer },
                      ]}
                    >
                      {codeFormatted}
                    </Text>
                  </View>
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text
                      style={[styles.countyName, { color: theme.textPrimary }]}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.countyCapital,
                        { color: theme.textSecondary },
                      ]}
                    >
                      Capital:{" "}
                      <Text
                        style={{ color: theme.textPrimary, fontWeight: "600" }}
                      >
                        {item.capital}
                      </Text>
                    </Text>
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

                <View
                  style={[
                    styles.cardInfoRow,
                    { borderTopColor: theme.outlineVariant },
                  ]}
                >
                  <View
                    style={[
                      styles.infoPill,
                      {
                        backgroundColor: theme.surfaceContainerHigh,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
                  >
                    <Ionicons
                      name="person-circle-outline"
                      size={14}
                      color={theme.gold}
                    />
                    <Text
                      style={[
                        styles.infoPillText,
                        { color: theme.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      Gov. {item.governor}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.infoPill,
                      {
                        backgroundColor: theme.surfaceContainerHigh,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
                  >
                    <Ionicons
                      name="people-outline"
                      size={14}
                      color={theme.sky}
                    />
                    <Text
                      style={[
                        styles.infoPillText,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {item.population
                        ? item.population >= 1000000
                          ? `${(item.population / 1000000).toFixed(1)}M`
                          : `${Math.round(item.population / 1000)}k`
                        : "—"}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.infoPill,
                      {
                        backgroundColor: theme.surfaceContainerHigh,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
                  >
                    <Ionicons
                      name="map-outline"
                      size={14}
                      color={theme.kenyaGreenLight}
                    />
                    <Text
                      style={[
                        styles.infoPillText,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {item.constituencies.length} Sub-counties
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        })}

        {filtered.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
              No counties found
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.textMuted }]}>
              Try searching with a different name, governor, or county code
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  resultsCount: {
    fontSize: 12,
    marginBottom: 12,
  },
  countyCardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  countyCard: {
    padding: 15,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 13,
  },
  trailingCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  countyName: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  countyCapital: {
    fontSize: 12,
    marginTop: 1,
  },
  cardInfoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  infoPillText: {
    fontSize: 11,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 48,
  },
  emptyTitle: {
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
    maxWidth: 240,
  },
});
