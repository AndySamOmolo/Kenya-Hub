import { ExpandablePillRow } from "../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, ThemeColors } from "../theme";
import platesData from "../shared/data/number-plate-prefixes.json";
import prefixesData from "../shared/data/mobile-prefixes.json";
import holidaysData from "../shared/data/public-holidays.json";
import finesData from "../shared/data/traffic-fines.json";
import postalData from "../shared/data/postal-codes.json";
import dlData from "../shared/data/driving-license-guide.json";
import passportData from "../shared/data/passport-id-fees.json";
import matatuData from "../shared/data/matatu-routes.json";
import { MatatuMap } from "../components/MatatuMap";
import { useRouter } from "expo-router";

/** 1. Number Plate Decoder (mirrors kenyahub/src/app/tools/number-plate-decoder/page.tsx) */
export function NumberPlateDecoder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [plate, setPlate] = useState("KDA 123A");
  const [seriesSearch, setSeriesSearch] = useState("");
  const clean = plate.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

  const result = useMemo(() => {
    if (clean.length < 2) return null;

    for (const sp of platesData.specialPlates as any[]) {
      if (clean.startsWith(sp.prefix) || (sp.prefix === "CG" && clean.includes("CG"))) {
        return {
          category: `${sp.type} (${sp.prefix})`,
          year: "Official / Institutional Series",
          county: sp.type,
          badgeColor: theme.kenyaGreenLight,
          type: sp.description,
        };
      }
    }

    const prefix = clean.substring(0, 3);
    const match = (platesData.prefixes as any[]).find((p) => p.prefix === prefix);
    if (match) {
      return {
        category: "Private / Civilian Motor Vehicle",
        prefix: match.prefix,
        year: match.yearRange,
        county: match.county,
        badgeColor: theme.gold,
        type: `Registered in ${match.county}, approximately ${match.yearRange}`,
      };
    }

    return {
      category: "Civilian Motor Vehicle (Recent / Custom Series)",
      prefix: prefix.length === 3 ? prefix : clean,
      year: "Recent NTSA Allocation",
      county: "Nairobi (Centralized NTSA Registry)",
      badgeColor: theme.gold,
      type: "Registered under NTSA TIMS Digital System",
    };
  }, [clean, theme]);

  const filteredSeries = useMemo(() => {
    const q = seriesSearch.trim().toLowerCase();
    const list = platesData.prefixes as any[];
    if (!q) return list.slice(-24).reverse();
    return list.filter(
      (p) =>
        p.prefix.toLowerCase().includes(q) ||
        p.yearRange.toLowerCase().includes(q) ||
        p.county.toLowerCase().includes(q)
    );
  }, [seriesSearch]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Vehicle Number Plate</Text>
        <TextInput
          value={plate}
          onChangeText={setPlate}
          placeholder="e.g. KDA 456B, GK 123A, 47 CG 001A"
          placeholderTextColor={theme.textMuted}
          autoCapitalize="characters"
          style={styles.textInputPlate}
        />
      </View>

      {result && (
        <View style={styles.card}>
          <View style={styles.plateDisplay}>
            <View style={styles.plateFlag}>
              <View style={{ height: 4, backgroundColor: "#000" }} />
              <View style={{ height: 4, backgroundColor: "#BE2126" }} />
              <View style={{ height: 4, backgroundColor: "#006B3F" }} />
            </View>
            <Text style={styles.plateDisplayText}>{plate.toUpperCase() || "KENYA"}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Plate Category</Text>
            <Text style={[styles.rowValue, { color: result.badgeColor }]}>
              {result.category}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Registration Period</Text>
            <Text style={styles.rowValue}>{result.year}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Primary Issuing Hub</Text>
            <Text style={styles.rowValue}>{result.county}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Details</Text>
            <Text style={styles.rowValue}>{result.type}</Text>
          </View>
        </View>
      )}

      {/* Kenya Plate Types Reference Table */}
      <Text style={styles.subHeading}>Kenya Plate Types & Colors</Text>
      <View style={styles.card}>
        {(platesData.plateTypes as any[]).map((pt, i) => (
          <View
            key={i}
            style={[
              styles.tableRow,
              {
                borderBottomWidth:
                  i === platesData.plateTypes.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                {pt.type}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textMuted }}>{pt.description}</Text>
            </View>
            <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.gold }}>
              {pt.color}
            </Text>
          </View>
        ))}
      </View>

      {/* Special / Government Plate Prefixes */}
      <Text style={styles.subHeading}>Special & Government Plate Prefixes</Text>
      <View style={styles.card}>
        {(platesData.specialPlates as any[]).map((sp, i) => (
          <View
            key={i}
            style={[
              styles.tableRow,
              {
                borderBottomWidth:
                  i === platesData.specialPlates.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderBottomColor: theme.border,
              },
            ]}
          >
            <View style={{ width: 52 }}>
              <Text style={{ fontSize: 13, fontWeight: "900", color: theme.gold }}>
                {sp.prefix}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12.5, fontWeight: "700", color: theme.textPrimary }}>
                {sp.type}
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                {sp.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Civilian Series Timeline Lookup */}
      <Text style={styles.subHeading}>
        Civilian Plate Series Timeline ({platesData.prefixes.length} Series)
      </Text>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={seriesSearch}
          onChangeText={setSeriesSearch}
          placeholder="Search prefix or year (e.g. KDA)..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.card}>
        {filteredSeries.map((item, idx) => (
          <View key={item.prefix + idx} style={styles.tableRow}>
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold, width: 56 }}>
              {item.prefix}
            </Text>
            <Text style={{ fontSize: 12.5, color: theme.textPrimary, flex: 1 }}>
              {item.yearRange}
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary }}>{item.county}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/** 2. Mobile Prefix Finder (mirrors kenyahub/src/app/tools/mobile-number-prefix/page.tsx) */
export function MobilePrefixFinder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [num, setNum] = useState("0722123456");
  const clean = num.trim().replace(/[^0-9]/g, "");

  const carrier = useMemo(() => {
    let prefix = clean.substring(0, 4);
    if (clean.startsWith("254")) {
      prefix = "0" + clean.substring(3, 6);
    }
    if (prefix.length < 4 || !prefix.startsWith("0")) return null;
    for (const net of prefixesData.networks) {
      if (net.prefixes.includes(prefix)) {
        return { ...net, matchedPrefix: prefix };
      }
    }
    return {
      name: "Unknown / Unallocated Prefix",
      color: theme.textMuted,
      matchedPrefix: prefix,
      prefixes: [],
      ussdCodes: [],
    };
  }, [clean, theme.textMuted]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Phone Number or Prefix</Text>
        <TextInput
          value={num}
          onChangeText={setNum}
          placeholder="e.g. 0722 123 456 or +254 733 123 456"
          placeholderTextColor={theme.textMuted}
          keyboardType="phone-pad"
          style={styles.textInput}
        />
      </View>

      {carrier ? (
        <View style={styles.card}>
          <View style={styles.carrierHeader}>
            <View
              style={[
                styles.carrierDot,
                { backgroundColor: carrier.color || theme.gold },
              ]}
            />
            <Text style={styles.carrierTitle}>{carrier.name}</Text>
            <View
              style={{
                marginLeft: "auto",
                backgroundColor: `${carrier.color || theme.gold}25`,
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "800",
                  color: carrier.color || theme.gold,
                }}
              >
                Prefix: {carrier.matchedPrefix}
              </Text>
            </View>
          </View>
          <Text style={styles.carrierDesc}>
            Prefix {carrier.matchedPrefix} is allocated to {carrier.name} under the
            Communications Authority of Kenya numbering plan.
          </Text>

          {carrier.ussdCodes && carrier.ussdCodes.length > 0 && (
            <View style={{ marginTop: 14 }}>
              <Text style={styles.ussdHeading}>Useful USSD Codes:</Text>
              {carrier.ussdCodes.map((u: any, i: number) => (
                <View key={i} style={styles.ussdRow}>
                  <Text style={styles.ussdCode}>{u.code}</Text>
                  <Text style={styles.ussdDesc}>{u.description}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={{ color: theme.textSecondary, fontSize: 12.5 }}>
            Enter at least 4 digits starting with 07, 01, or +254 to identify the mobile
            network.
          </Text>
        </View>
      )}

      {/* Full Network Prefix Directory (from web mobile-number-prefix/page.tsx) */}
      <Text style={styles.subHeading}>Kenya Network Prefix Directory</Text>
      {prefixesData.networks.map((net) => (
        <View key={net.name} style={styles.card}>
          <View style={styles.carrierHeader}>
            <View style={[styles.carrierDot, { backgroundColor: net.color }]} />
            <Text style={styles.carrierTitle}>{net.name}</Text>
            <Text style={{ marginLeft: "auto", fontSize: 11, color: theme.textMuted }}>
              {net.prefixes.length} prefixes
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {net.prefixes.map((p) => (
              <View
                key={p}
                style={{
                  backgroundColor: theme.bgElevated,
                  borderWidth: 1,
                  borderColor: theme.border,
                  borderRadius: 6,
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                }}
              >
                <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary }}>
                  {p}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Kenya Emergency Numbers */}
      <Text style={styles.subHeading}>Kenya Emergency Numbers</Text>
      <View style={styles.card}>
        {prefixesData.emergencyNumbers.map((en) => (
          <View key={en.number} style={styles.tableRow}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                color: theme.kenyaRedLight,
                width: 70,
              }}
            >
              {en.number}
            </Text>
            <Text style={[styles.rowValue, { flex: 1, textAlign: "right" }]}>
              {en.service}
            </Text>
          </View>
        ))}
      </View>

      {/* International Dialing Guide */}
      <Text style={styles.subHeading}>International Dialing Guide</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold, marginBottom: 2 }}>
          From Kenya to International:
        </Text>
        <Text style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 10 }}>
          {prefixesData.internationalDialing.fromKenya}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold, marginBottom: 2 }}>
          From Abroad to Kenya ({prefixesData.countryCode}):
        </Text>
        <Text style={{ fontSize: 12, color: theme.textSecondary }}>
          {prefixesData.internationalDialing.toKenya}
        </Text>
      </View>
    </View>
  );
}

/** 3. Public Holidays Tool (mirrors kenyahub/src/app/tools/public-holidays/page.tsx) */
function daysUntilHoliday(dateStr: string) {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function PublicHolidaysTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedYear, setSelectedYear] = useState<"2025" | "2026" | "2027">("2026");
  const holidays =
    (holidaysData.holidays as any)[selectedYear] ||
    holidaysData.holidays["2026"] ||
    [];

  const nextHoliday = useMemo(() => {
    const all = Object.values(holidaysData.holidays).flat() as {
      date: string;
      name: string;
      description: string;
    }[];
    const upcoming = all
      .filter((h) => daysUntilHoliday(h.date) >= 0)
      .sort((a, b) => daysUntilHoliday(a.date) - daysUntilHoliday(b.date));
    return upcoming[0] || null;
  }, []);

  return (
    <View style={styles.toolWrap}>
      {/* Next Public Holiday Countdown Banner */}
      {nextHoliday && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: `${theme.gold}14`,
              borderColor: `${theme.gold}45`,
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 10.5,
              fontWeight: "800",
              color: theme.textSecondary,
              letterSpacing: 0.8,
            }}
          >
            NEXT PUBLIC HOLIDAY
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "Outfit_800ExtraBold",
              fontWeight: "900",
              color: theme.kenyaGreenLight,
              marginTop: 4,
            }}
          >
            {nextHoliday.name}
          </Text>
          <Text style={{ fontSize: 12, color: theme.textSecondary, marginTop: 2 }}>
            {new Date(nextHoliday.date + "T00:00:00").toLocaleDateString("en-KE", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Outfit_800ExtraBold",
              fontWeight: "900",
              color: theme.gold,
              marginTop: 6,
            }}
          >
            {daysUntilHoliday(nextHoliday.date) === 0
              ? "🎉 Today!"
              : `${daysUntilHoliday(nextHoliday.date)} days away`}
          </Text>
        </View>
      )}

      {/* Year Toggle */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        {(["2025", "2026", "2027"] as const).map((yr) => (
          <Pressable
            key={yr}
            onPress={() => setSelectedYear(yr)}
            style={{
              flex: 1,
              paddingVertical: 9,
              borderRadius: 999,
              borderWidth: 1,
              alignItems: "center",
              backgroundColor: selectedYear === yr ? theme.gold : theme.bgCard,
              borderColor: selectedYear === yr ? theme.gold : theme.border,
            }}
          >
            <Text
              style={{
                fontSize: 12.5,
                fontWeight: "800",
                color: selectedYear === yr ? theme.kenyaBlack : theme.textPrimary,
              }}
            >
              {yr} ({((holidaysData.holidays as any)[yr] || []).length})
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.subHeading}>
        Gazetted Kenyan Public Holidays ({selectedYear})
      </Text>
      {holidays.map((h: any, i: number) => {
        const d = new Date(h.date + "T00:00:00");
        const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
        const monthShort = d.toLocaleDateString("en-US", { month: "short" });
        const dayNum = d.getDate();
        const diff = daysUntilHoliday(h.date);
        const isToday = diff === 0;
        const isPast = diff < 0;

        return (
          <View
            key={i}
            style={[
              styles.holidayCard,
              isToday && { borderColor: theme.gold, backgroundColor: `${theme.gold}10` },
              isPast && { opacity: 0.72 },
            ]}
          >
            <View style={styles.holidayDateBox}>
              <Text style={styles.holidayDayName}>{monthShort}</Text>
              <Text style={styles.holidayDateNum}>{dayNum}</Text>
              <Text style={{ fontSize: 9, color: theme.textMuted }}>{dayName}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Text style={styles.holidayName}>{h.name}</Text>
                {isToday && (
                  <View
                    style={{
                      backgroundColor: theme.gold,
                      paddingHorizontal: 6,
                      paddingVertical: 1,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 9,
                        fontWeight: "900",
                        color: theme.kenyaBlack,
                      }}
                    >
                      TODAY
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.holidayDesc}>{h.description}</Text>
            </View>
            <View style={{ marginLeft: 8, alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: isToday
                    ? theme.gold
                    : isPast
                    ? theme.textMuted
                    : theme.kenyaGreenLight,
                }}
              >
                {isToday ? "Today!" : isPast ? "Passed" : `${diff}d`}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

/** 4. Traffic Fines Tool (mirrors kenyahub/src/app/tools/traffic-fines/page.tsx) */
export function TrafficFinesTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "fineDesc" | "fineAsc" | "points">(
    "default"
  );
  const categories = finesData.categories || [];

  const filteredOffences = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list: any[] = [];
    for (const cat of categories) {
      if (selectedCat !== "all" && cat.id !== selectedCat) continue;
      for (const off of cat.offences) {
        if (
          !q ||
          off.offence.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          list.push({ ...off, categoryName: cat.name, categoryIcon: cat.icon });
        }
      }
    }
    if (sortBy === "fineDesc") return [...list].sort((a, b) => b.fine - a.fine);
    if (sortBy === "fineAsc") return [...list].sort((a, b) => a.fine - b.fine);
    if (sortBy === "points")
      return [...list].sort((a, b) => b.demeritPoints - a.demeritPoints);
    return list;
  }, [search, selectedCat, sortBy, categories]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search traffic offences..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* Category Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <Pressable
          onPress={() => setSelectedCat("all")}
          style={[
            styles.categoryChip,
            {
              backgroundColor: selectedCat === "all" ? theme.gold : theme.bgCard,
              borderColor: selectedCat === "all" ? theme.gold : theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.categoryChipText,
              { color: selectedCat === "all" ? theme.kenyaBlack : theme.textPrimary },
            ]}
          >
            All Categories
          </Text>
        </Pressable>
        {categories.map((cat) => {
          const active = selectedCat === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => setSelectedCat(cat.id)}
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
                {cat.icon} {cat.name}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort By Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 11, color: theme.textMuted }}>
          Showing {filteredOffences.length} offences
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "default", label: "Category" },
              { id: "fineDesc", label: "Highest Fine" },
              { id: "fineAsc", label: "Lowest Fine" },
              { id: "points", label: "Demerits" },
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

      {filteredOffences.map((item: any, i: number) => (
        <View key={i} style={styles.fineCard}>
          <View style={styles.fineTop}>
            <Text style={styles.fineTitle}>{item.offence}</Text>
            <View style={styles.fineBadge}>
              <Text style={styles.fineBadgeText}>
                KES {item.fine.toLocaleString()}
              </Text>
            </View>
          </View>
          <View style={styles.fineBottom}>
            <Text style={styles.fineCat}>
              {item.categoryIcon} {item.categoryName} · Demerit:{" "}
              <Text style={{ color: theme.gold, fontWeight: "700" }}>
                {item.demeritPoints} pts
              </Text>
            </Text>
            <Text
              style={[
                styles.arrestText,
                {
                  color: item.arrestable
                    ? theme.kenyaRedLight
                    : theme.kenyaGreenLight,
                },
              ]}
            >
              {item.arrestable ? "Arrestable / Court" : "Instant Fine"}
            </Text>
          </View>
          {item.additionalPenalty && (
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              + {item.additionalPenalty}
            </Text>
          )}
        </View>
      ))}

      {/* NTSA Demerit Points System (from web traffic-fines/page.tsx) */}
      <Text style={styles.subHeading}>
        NTSA Demerit Points System (Max {finesData.demeritPointSystem.maxPoints} Points)
      </Text>
      <View style={styles.card}>
        {finesData.demeritPointSystem.consequences.map((c, idx) => (
          <View key={idx} style={styles.tableRow}>
            <Text style={{ fontSize: 12.5, fontWeight: "800", color: theme.gold, width: 90 }}>
              {c.points} pts
            </Text>
            <Text style={{ fontSize: 12, color: theme.textSecondary, flex: 1 }}>
              {c.action}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/** 5. Postal Codes Lookup (mirrors kenyahub/src/app/tools/kenya-postal-codes/page.tsx) */
export function PostalCodesTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const [sortBy, setSortBy] = useState<"code" | "town" | "county">("code");
  const list = postalData.codes || [];

  const counties = useMemo(
    () => Array.from(new Set(list.map((item: any) => item.county))).sort(),
    [list]
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const res = list.filter((p: any) => {
      if (selectedCounty !== "all" && p.county !== selectedCounty) return false;
      if (!query) return true;
      return (
        p.code.toLowerCase().includes(query) ||
        (p.town && p.town.toLowerCase().includes(query)) ||
        (p.county && p.county.toLowerCase().includes(query))
      );
    });
    return [...res].sort((a: any, b: any) => {
      if (sortBy === "town") return a.town.localeCompare(b.town);
      if (sortBy === "county")
        return a.county.localeCompare(b.county) || a.code.localeCompare(b.code);
      return a.code.localeCompare(b.code);
    });
  }, [q, selectedCounty, sortBy, list]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Search postal code, town, or county..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {q.length > 0 && (
          <Pressable onPress={() => setQ("")}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* County Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {["all", ...counties].map((c) => {
          const active = selectedCounty === c;
          return (
            <Pressable
              key={c}
              onPress={() => setSelectedCounty(c)}
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
                {c === "all" ? "All Counties" : c}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort Row */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={styles.subHeading}>
          Showing {filtered.length} Post Offices
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { id: "code", label: "Code" },
              { id: "town", label: "Town A–Z" },
              { id: "county", label: "County" },
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

      {filtered.map((item: any, i: number) => (
        <View key={item.code + i} style={styles.postalCard}>
          <View style={styles.postalCodeBox}>
            <Text style={styles.postalCodeText}>{item.code}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.postalOffice}>{item.town}</Text>
            <Text style={styles.postalCounty}>
              {item.county} County {item.region ? `· ${item.region}` : ""}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

/** 6. Driving License Guide (mirrors kenyahub/src/app/tools/driving-license-guide/page.tsx) */
export function DrivingLicenseTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [activeTab, setActiveTab] = useState<"classes" | "process">("classes");
  const _mountRef = useRef(false);
  useEffect(() => {
    if (!_mountRef.current) { _mountRef.current = true; return; }
    onScrollToTop?.();
  }, [activeTab, onScrollToTop]);

  return (
    <View style={styles.toolWrap}>
      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.bgCard,
          borderRadius: 12,
          padding: 4,
          borderWidth: 1,
          borderColor: theme.border,
        }}
      >
        <Pressable
          onPress={() => setActiveTab("classes")}
          style={{
            flex: 1,
            paddingVertical: 9,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: activeTab === "classes" ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: "800",
              color: activeTab === "classes" ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            License Classes
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("process")}
          style={{
            flex: 1,
            paddingVertical: 9,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: activeTab === "process" ? theme.gold : "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: "800",
              color: activeTab === "process" ? theme.kenyaBlack : theme.textSecondary,
            }}
          >
            Application Process
          </Text>
        </Pressable>
      </View>

      {activeTab === "classes" ? (
        <>
          <Text style={styles.subHeading}>
            Estimated Total Cost (Including Driving School)
          </Text>
          <View style={styles.card}>
            {Object.values(dlData.totalEstimatedCost).map((cost: any, i: number) => (
              <View key={i} style={styles.tableRow}>
                <Text style={styles.rowLabel}>{cost.label}</Text>
                <Text style={[styles.rowValue, { color: theme.kenyaGreenLight }]}>
                  KES {cost.min.toLocaleString()} – KES {cost.max.toLocaleString()}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.subHeading}>
            NTSA Driving License Classes (A through G)
          </Text>
          {dlData.licenseClasses.map((cls, i) => (
            <View key={i} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, flex: 1 }}>
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: `${theme.gold}20`,
                      borderWidth: 1,
                      borderColor: `${theme.gold}40`,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "900", color: theme.gold }}>
                      {cls.class}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        color: theme.textPrimary,
                      }}
                    >
                      {cls.name}
                    </Text>
                    <Text style={{ fontSize: 11, color: theme.textMuted }}>
                      Min Age: {cls.minimumAge}+ years
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 10, color: theme.textMuted }}>NTSA Fee</Text>
                  <Text style={{ fontSize: 14, fontWeight: "900", color: theme.gold }}>
                    KES {cls.fee.toLocaleString()}
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12.5, color: theme.textSecondary, marginBottom: 8 }}>
                {cls.description}
              </Text>
              <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 8, gap: 4 }}>
                <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary }}>
                  Requirements:
                </Text>
                {cls.requirements.map((req, j) => (
                  <Text key={j} style={{ fontSize: 11.5, color: theme.textSecondary }}>
                    • {req}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.subHeading}>Step-by-Step Application Process</Text>
          {dlData.applicationProcess.map((step, i) => (
            <View key={i} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
                  <View
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      backgroundColor: `${theme.gold}20`,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 12, fontWeight: "900", color: theme.gold }}>
                      {step.step}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: theme.textPrimary,
                      flex: 1,
                    }}
                  >
                    {step.title}
                  </Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: "700", color: theme.gold }}>
                  {step.cost}
                </Text>
              </View>
              <Text style={{ fontSize: 12.5, color: theme.textSecondary, lineHeight: 18 }}>
                {step.description}
              </Text>
              {step.documents.length > 0 && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 8,
                  }}
                >
                  {step.documents.map((doc, j) => (
                    <View
                      key={j}
                      style={{
                        backgroundColor: `${theme.gold}15`,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 6,
                      }}
                    >
                      <Text style={{ fontSize: 11, color: theme.textPrimary }}>
                        {doc}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}

          <Text style={styles.subHeading}>Smart Driving License Renewal Info</Text>
          <View style={styles.card}>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Validity Period</Text>
              <Text style={styles.rowValue}>{dlData.renewalProcess.renewalPeriod}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Smart DL Renewal Fee</Text>
              <Text style={[styles.rowValue, { color: theme.gold }]}>
                KES {dlData.renewalProcess.renewalFee.toLocaleString()}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowLabel}>Late Renewal Penalty</Text>
              <Text style={[styles.rowValue, { color: theme.kenyaRedLight }]}>
                {dlData.renewalProcess.lateRenewalPenalty}
              </Text>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 8, marginTop: 4 }}>
              <Text style={{ fontSize: 11.5, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
                Required for Renewal:
              </Text>
              {dlData.renewalProcess.requirements.map((req, i) => (
                <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary }}>
                  • {req}
                </Text>
              ))}
            </View>
          </View>
        </>
      )}
    </View>
  );
}

/** 7. Passport & ID Fees (mirrors kenyahub/src/app/tools/passport-id-fees/page.tsx) */
export function PassportFeesTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const passportTypes = passportData.passport?.types || [];
  const passportSteps = passportData.passport?.applicationProcess || [];
  const passportDocs = passportData.passport?.requiredDocuments || [];
  const nationalIdTypes = passportData.nationalId?.types || [];
  const nationalIdDocs = passportData.nationalId?.requiredDocuments || [];
  const otherDocs = passportData.otherDocuments || [];
  const hudumaLocations = passportData.hudumaLocations || [];

  return (
    <View style={styles.toolWrap}>
      {/* 1. Passport Fees */}
      <Text style={styles.subHeading}>Passport Fees (Apply via eCitizen)</Text>
      <View style={styles.card}>
        {passportTypes.map((f: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 10,
              borderBottomWidth: i === passportTypes.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 13.5, fontWeight: "800", color: theme.textPrimary, flex: 1 }}>
                {f.type}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "900", color: theme.gold }}>
                KES {f.fee.toLocaleString()}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 2 }}>
              {f.eligibility}
            </Text>
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              Processing: {f.processingTime}
            </Text>
          </View>
        ))}
      </View>

      {/* 2. Passport Application Process & Required Documents */}
      <Text style={styles.subHeading}>Passport Application Process</Text>
      <View style={styles.card}>
        {passportSteps.map((step: string, i: number) => (
          <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                backgroundColor: `${theme.gold}20`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: "900", color: theme.gold }}>
                {i + 1}
              </Text>
            </View>
            <Text style={{ fontSize: 12.5, color: theme.textSecondary, flex: 1, lineHeight: 18 }}>
              {step}
            </Text>
          </View>
        ))}
        <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10, marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
            Required Documents:
          </Text>
          {passportDocs.map((doc: string, i: number) => (
            <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginBottom: 2 }}>
              • {doc}
            </Text>
          ))}
        </View>
      </View>

      {/* 3. National ID Processing Fees */}
      <Text style={styles.subHeading}>National ID Processing Fees (NRB)</Text>
      <View style={styles.card}>
        {nationalIdTypes.map((idItem: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 10,
              borderBottomWidth: i === nationalIdTypes.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 13.5, fontWeight: "800", color: theme.textPrimary }}>
                {idItem.type}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "900", color: theme.kenyaGreenLight }}>
                {idItem.fee === 0 ? "Free" : `KES ${idItem.fee.toLocaleString()}`}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textSecondary, marginTop: 2 }}>
              {idItem.notes}
            </Text>
            <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
              Processing: {idItem.processingTime}
            </Text>
          </View>
        ))}
        <View style={{ borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10, marginTop: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textPrimary, marginBottom: 4 }}>
            Required for First-Time ID Applicants:
          </Text>
          {nationalIdDocs.map((doc: string, i: number) => (
            <Text key={i} style={{ fontSize: 11.5, color: theme.textSecondary, marginBottom: 2 }}>
              • {doc}
            </Text>
          ))}
        </View>
      </View>

      {/* 4. Other Civil Registry Fees */}
      <Text style={styles.subHeading}>Other Civil Registry Fees</Text>
      <View style={styles.card}>
        {otherDocs.map((doc: any, i: number) => (
          <View
            key={i}
            style={{
              paddingVertical: 8,
              borderBottomWidth: i === otherDocs.length - 1 ? 0 : 1,
              borderBottomColor: theme.border,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: theme.textPrimary }}>
                {doc.type}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme.gold }}>
                {doc.fee === 0 ? "Free" : `KES ${doc.fee.toLocaleString()}`}
              </Text>
            </View>
            <Text style={{ fontSize: 11.5, color: theme.textMuted, marginTop: 2 }}>
              {doc.description}
            </Text>
          </View>
        ))}
      </View>

      {/* 5. Huduma Centres */}
      <Text style={styles.subHeading}>Huduma Centres Nationwide</Text>
      <View style={styles.card}>
        {hudumaLocations.map((loc: string, i: number) => (
          <Text key={i} style={{ fontSize: 12, color: theme.textSecondary, paddingVertical: 3 }}>
            • {loc}
          </Text>
        ))}
      </View>
    </View>
  );
}

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
  const _mountRef = useRef(false);
  useEffect(() => {
    if (!_mountRef.current) { _mountRef.current = true; return; }
    onScrollToTop?.();
  }, [selectedTown, selectedRouteSlug, onScrollToTop]);

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
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
                  🗺️ Interactive Route Map
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

const createStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    inputGroup: {
      marginBottom: 6,
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 6,
    },
    textInput: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: "700",
      color: theme.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    textInputPlate: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      fontSize: 18,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      letterSpacing: 2,
      color: theme.gold,
      paddingHorizontal: 14,
      paddingVertical: 12,
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
    },
    plateDisplay: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      borderWidth: 3,
      borderColor: "#000000",
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 14,
      alignSelf: "center",
    },
    plateFlag: {
      width: 14,
      marginRight: 10,
      gap: 1,
    },
    plateDisplayText: {
      fontSize: 20,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: "#000000",
      letterSpacing: 2,
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingVertical: 8,
      gap: 12,
    },
    rowLabel: {
      fontSize: 13,
      color: theme.textSecondary,
      flexShrink: 0,
      maxWidth: "46%",
    },
    rowValue: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.textPrimary,
      flex: 1,
      textAlign: "right",
    },
    carrierHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 6,
    },
    carrierDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    carrierTitle: {
      fontSize: 15,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.textPrimary,
    },
    carrierDesc: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    ussdHeading: {
      fontSize: 12,
      fontWeight: "800",
      color: theme.gold,
      marginBottom: 6,
    },
    ussdRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 4,
    },
    ussdCode: {
      fontSize: 12,
      fontWeight: "800",
      color: theme.gold,
    },
    ussdDesc: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    subHeading: {
      fontSize: 13,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "800",
      color: theme.gold,
      letterSpacing: 0.5,
      marginTop: 4,
    },
    holidayCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    holidayDateBox: {
      width: 52,
      height: 54,
      borderRadius: 12,
      backgroundColor: `${theme.gold}15`,
      borderWidth: 1,
      borderColor: `${theme.gold}30`,
      alignItems: "center",
      justifyContent: "center",
    },
    holidayDayName: {
      fontSize: 10,
      fontWeight: "700",
      color: theme.gold,
      textTransform: "uppercase",
    },
    holidayDateNum: {
      fontSize: 15,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.textPrimary,
    },
    holidayName: {
      fontSize: 14,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.textPrimary,
    },
    holidayDesc: {
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: 2,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      height: 44,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 13,
      color: theme.textPrimary,
    },
    fineCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 12,
      gap: 6,
    },
    fineTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10,
    },
    fineTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.textPrimary,
      flex: 1,
    },
    fineBadge: {
      backgroundColor: `${theme.kenyaRed}20`,
      borderWidth: 1,
      borderColor: `${theme.kenyaRed}40`,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    fineBadgeText: {
      fontSize: 11,
      fontWeight: "800",
      color: theme.kenyaRedLight,
    },
    fineBottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    fineCat: {
      fontSize: 11,
      color: theme.textMuted,
    },
    arrestText: {
      fontSize: 11,
      fontWeight: "700",
    },
    postalCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    postalCodeBox: {
      backgroundColor: `${theme.gold}15`,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
    },
    postalCodeText: {
      fontSize: 13,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.gold,
    },
    postalOffice: {
      fontSize: 14,
      fontWeight: "700",
      color: theme.textPrimary,
    },
    postalCounty: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    categoryChip: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 999,
      borderWidth: 1,
    },
    categoryChipText: {
      fontSize: 12,
      fontWeight: "800",
    },
    quickRouteBtn: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
    },
    quickRouteText: {
      fontSize: 11,
      fontWeight: "800",
    },
    routeBadge: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
      borderWidth: 1,
    },
    routeBadgeText: {
      fontSize: 10,
      fontWeight: "800",
    },
    verifiedTag: {
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 6,
    },
    verifiedTagText: {
      fontSize: 10,
      fontWeight: "800",
    },
    openCorridorBtn: {
      marginTop: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      paddingVertical: 11,
      borderRadius: 12,
    },
    openCorridorText: {
      fontSize: 13,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: "#1A1108",
    },
  });
