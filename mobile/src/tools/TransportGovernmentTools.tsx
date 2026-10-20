import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
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

/** 1. Number Plate Decoder */
export function NumberPlateDecoder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [plate, setPlate] = useState("KDA 123A");
  const clean = plate.trim().toUpperCase().replace(/\s+/g, "");

  const result = useMemo(() => {
    if (!clean) return null;

    // Check special plates
    if (clean.startsWith("GK")) {
      return {
        category: "Government of Kenya (GK)",
        year: "Permanent Govt Series",
        county: "National Government",
        badgeColor: theme.kenyaGreenLight,
        type: "Official Government Vehicle",
      };
    }
    if (clean.includes("CG")) {
      return {
        category: "County Government (CG)",
        year: "Post-2013 Devolved Govt",
        county: "Devolved County Government",
        badgeColor: theme.sky,
        type: "County Official Vehicle",
      };
    }
    if (clean.includes("CD")) {
      return {
        category: "Diplomatic Corps (CD)",
        year: "Foreign Mission / Embassy",
        county: "Diplomatic",
        badgeColor: theme.kenyaRedLight,
        type: "Foreign Diplomat",
      };
    }

    // Standard civilian plate: prefix is 3 letters (e.g. KDA, KCA, KAA)
    const prefix = clean.substring(0, 3);
    const match = (platesData.prefixes as any[]).find((p) => p.prefix === prefix);
    if (match) {
      return {
        category: "Civilian Motor Vehicle",
        prefix: match.prefix,
        year: match.yearRange,
        county: match.county,
        badgeColor: theme.gold,
        type: `Issued during ${match.yearRange}`,
      };
    }

    return {
      category: "Civilian Motor Vehicle (Recent / Unlisted)",
      prefix: prefix.length === 3 ? prefix : clean,
      year: "Recent NTSA Allocation",
      county: "Kenya",
      badgeColor: theme.gold,
      type: "Registered under NTSA Digital System",
    };
  }, [clean, theme]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Vehicle Number Plate</Text>
        <TextInput
          value={plate}
          onChangeText={setPlate}
          placeholder="e.g. KDA 456B, GK 123A, 47 CG 001"
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
            <Text style={styles.plateDisplayText}>{clean || "KENYA"}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Category</Text>
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
            <Text style={styles.rowLabel}>Identification</Text>
            <Text style={styles.rowValue}>{result.type}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

/** 2. Mobile Prefix Finder */
export function MobilePrefixFinder() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [num, setNum] = useState("0722123456");
  const clean = num.trim().replace(/[^0-9]/g, "");

  const carrier = useMemo(() => {
    let prefix = clean.substring(0, 4);
    if (clean.startsWith("254")) {
      prefix = "0" + clean.substring(3, 6);
    }
    for (const net of prefixesData.networks) {
      if (net.prefixes.includes(prefix)) {
        return net;
      }
    }
    return null;
  }, [clean]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Enter Phone Number or Prefix</Text>
        <TextInput
          value={num}
          onChangeText={setNum}
          placeholder="e.g. 0722, 0733, 0110..."
          placeholderTextColor={theme.textMuted}
          keyboardType="numeric"
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
            <Text style={styles.carrierTitle}>{carrier.name} Kenya</Text>
          </View>
          <Text style={styles.carrierDesc}>
            Prefix belongs to {carrier.name} mobile telecommunication network.
          </Text>

          {carrier.ussdCodes && (
            <View style={{ marginTop: 14 }}>
              <Text style={styles.ussdHeading}>Official USSD Codes:</Text>
              {carrier.ussdCodes.slice(0, 4).map((u: any, i: number) => (
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
          <Text style={{ color: theme.textSecondary }}>
            Enter at least 4 digits (e.g. 0722 or 0733) to identify the cellular carrier.
          </Text>
        </View>
      )}
    </View>
  );
}

/** 3. Public Holidays Tool */
export function PublicHolidaysTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedYear, setSelectedYear] = useState<"2025" | "2026" | "2027">("2026");
  const holidays = (holidaysData.holidays as any)[selectedYear] || holidaysData.holidays["2026"] || [];

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {(["2025", "2026", "2027"] as const).map((yr) => (
          <Pressable
            key={yr}
            onPress={() => setSelectedYear(yr)}
            style={{
              flex: 1,
              paddingVertical: 8,
              borderRadius: 999,
              borderWidth: 1,
              alignItems: "center",
              backgroundColor: selectedYear === yr ? theme.gold : theme.bgCard,
              borderColor: selectedYear === yr ? theme.gold : theme.border,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "800", color: selectedYear === yr ? theme.kenyaBlack : theme.textPrimary }}>
              {yr}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.subHeading}>Gazetted Kenyan Public Holidays ({selectedYear})</Text>
      {holidays.map((h: any, i: number) => {
        const d = new Date(h.date);
        const dayName = d.toLocaleDateString("en-US", { weekday: "short" });

        return (
          <View key={i} style={styles.holidayCard}>
            <View style={styles.holidayDateBox}>
              <Text style={styles.holidayDayName}>{dayName}</Text>
              <Text style={styles.holidayDateNum}>{h.date.substring(5)}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.holidayName}>{h.name}</Text>
              <Text style={styles.holidayDesc}>{h.description}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

/** 4. Traffic Fines Tool */
export function TrafficFinesTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [search, setSearch] = useState("");
  const categories = finesData.categories || [];

  const allOffences = useMemo(() => {
    const list: any[] = [];
    for (const cat of categories) {
      for (const off of cat.offences) {
        list.push({ ...off, categoryName: cat.name });
      }
    }
    return list;
  }, [categories]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allOffences.slice(0, 15);
    return allOffences.filter(
      (o) =>
        o.offence.toLowerCase().includes(q) ||
        o.categoryName.toLowerCase().includes(q)
    );
  }, [search, allOffences]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search offenses (speeding, license, insurance)..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.subHeading}>
        NTSA & Traffic Act Instant Fines Schedule
      </Text>

      {filtered.map((item: any, i: number) => (
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
            <Text style={styles.fineCat}>{item.categoryName}</Text>
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
              {item.arrestable ? "Court Appearance / Bail" : "Instant Fine (No Arrest)"}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

/** 5. Postal Codes Lookup */
export function PostalCodesTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const list = postalData.codes || [];

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return list.slice(0, 15);
    return list.filter(
      (p: any) =>
        p.code.toLowerCase().includes(query) ||
        (p.town && p.town.toLowerCase().includes(query)) ||
        (p.county && p.county.toLowerCase().includes(query))
    );
  }, [q, list]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Search by postal code, town, or county..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.subHeading}>
        Showing {filtered.length} Postal Codes
      </Text>

      {filtered.map((item: any, i: number) => (
        <View key={i} style={styles.postalCard}>
          <View style={styles.postalCodeBox}>
            <Text style={styles.postalCodeText}>{item.code}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.postalOffice}>{item.town}</Text>
            <Text style={styles.postalCounty}>{item.county} County</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

/** 6. Driving License Guide */
export function DrivingLicenseTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>NTSA Driving License Fees & Process</Text>
      <View style={styles.card}>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>Provisional Driving License (PDL)</Text>
          <Text style={styles.rowValue}>KES 650</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>Driving Test Booking</Text>
          <Text style={styles.rowValue}>KES 1,050</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>New Smart DL (3 Years Validity)</Text>
          <Text style={styles.rowValue}>KES 3,050</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>Annual DL Renewal (Old Booklet)</Text>
          <Text style={styles.rowValue}>KES 600</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>3-Year DL Renewal</Text>
          <Text style={styles.rowValue}>KES 1,400</Text>
        </View>
      </View>

      <View style={styles.tipCard}>
        <Ionicons name="globe-outline" size={18} color={theme.gold} />
        <Text style={styles.tipText}>
          All applications and biometric appointment bookings are submitted through your eCitizen account via NTSA Portal.
        </Text>
      </View>
    </View>
  );
}

/** 7. Passport & ID Fees */
export function PassportFeesTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const fees = passportData.passport?.types || [];

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>
        Department of Immigration Passport & ID Fees
      </Text>
      <View style={styles.card}>
        {fees.map((f: any, i: number) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.rowLabel}>{f.type}</Text>
            <Text style={styles.rowValue}>KES {f.fee.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      <View style={styles.tipCard}>
        <Ionicons name="information-circle-outline" size={18} color={theme.gold} />
        <Text style={styles.tipText}>
          Passport renewals and applications require an eCitizen application form, tracking invoice, and biometric appointment at Nyayo House or regional immigration offices.
        </Text>
      </View>
    </View>
  );
}

/** 8. Matatu Routes Explorer Tool */
export function MatatuRoutesTool() {
  const router = useRouter();
  const { theme, styles } = useDynamicStyles(createStyles);
  const [selectedTown, setSelectedTown] = useState<string>("nairobi");
  const [search, setSearch] = useState("");

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

  const activeRoute = useMemo(() => {
    return (
      townRoutes.find((r: any) => r.slug === selectedRouteSlug) ||
      townRoutes[0]
    );
  }, [townRoutes, selectedRouteSlug]);

  const filteredRoutes = useMemo(() => {
    if (!search.trim()) return townRoutes;
    const q = search.toLowerCase();
    return townRoutes.filter(
      (r: any) =>
        r.name.toLowerCase().includes(q) ||
        r.routeNumber.toLowerCase().includes(q) ||
        r.terminusA.toLowerCase().includes(q) ||
        r.terminusB.toLowerCase().includes(q) ||
        (Array.isArray(r.stages) &&
          r.stages.some((s: any) =>
            (typeof s === "string" ? s : s?.name || "").toLowerCase().includes(q)
          ))
    );
  }, [townRoutes, search]);

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
                {town.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Search Route */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          placeholder={`Search ${selectedTown} route or destination...`}
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

      {/* Route Quick Selector Scroll */}
      <View>
        <Text style={[styles.subHeading, { marginBottom: 6 }]}>
          Select Route ({filteredRoutes.length} available)
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          {filteredRoutes.slice(0, 8).map((r: any) => {
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
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <View style={[styles.routeBadge, { backgroundColor: `${theme.gold}20`, borderColor: theme.gold }]}>
                  <Text style={[styles.routeBadgeText, { color: theme.gold }]}>
                    Route {activeRoute.routeNumber}
                  </Text>
                </View>
                {activeRoute.verified && (
                  <View style={[styles.verifiedTag, { backgroundColor: `${theme.kenyaGreen}20` }]}>
                    <Text style={[styles.verifiedTagText, { color: theme.kenyaGreenLight }]}>
                      ✓ Verified
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.holidayName}>{activeRoute.name}</Text>
              <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
                Operated by <Text style={{ color: theme.textSecondary, fontWeight: "700" }}>{activeRoute.saccoName}</Text>
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontSize: 10, color: theme.textMuted, textTransform: "uppercase" }}>Fare</Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_800ExtraBold", fontWeight: "900", color: theme.gold }}>
                KES {activeRoute.fareMin}–{activeRoute.fareMax}
              </Text>
            </View>
          </View>

          {/* Interactive Leaflet Route Map */}
          {activeRoute.stages && activeRoute.stages.length > 0 && (
            <View style={{ marginVertical: 12 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
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

          {/* Terminus Strip */}
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Departure / CBD</Text>
            <Text style={[styles.rowValue, { color: theme.kenyaGreenLight }]}>{activeRoute.terminusA}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Destination</Text>
            <Text style={[styles.rowValue, { color: theme.kenyaRedLight }]}>{activeRoute.terminusB}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.rowLabel}>Hours</Text>
            <Text style={styles.rowValue}>{activeRoute.operatingHours}</Text>
          </View>

          {/* Link to Full Corridor Details */}
          <Pressable
            onPress={() => router.push(`/matatu/${activeRoute.slug}` as any)}
            style={[styles.openCorridorBtn, { backgroundColor: theme.gold }]}
          >
            <Text style={styles.openCorridorText}>View Full Corridor & Stages Itinerary</Text>
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
      alignItems: "center",
      paddingVertical: 8,
    },
    rowLabel: {
      fontSize: 13,
      color: theme.textSecondary,
      flex: 1,
    },
    rowValue: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.textPrimary,
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
      fontSize: 16,
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
      backgroundColor: `${theme.gold}15`,
      borderWidth: 1,
      borderColor: `${theme.gold}30`,
      borderRadius: 10,
      paddingVertical: 6,
      alignItems: "center",
    },
    holidayDayName: {
      fontSize: 10,
      fontWeight: "800",
      color: theme.gold,
    },
    holidayDateNum: {
      fontSize: 12,
      fontWeight: "800",
      color: theme.textPrimary,
    },
    holidayName: {
      fontSize: 14,
      fontFamily: "Outfit_700Bold",
      fontWeight: "700",
      color: theme.textPrimary,
    },
    holidayDesc: {
      fontSize: 11,
      color: theme.textMuted,
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
      height: 42,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      color: theme.textPrimary,
      fontSize: 13,
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
      alignItems: "center",
      gap: 10,
    },
    fineTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.textPrimary,
      flex: 1,
    },
    fineBadge: {
      backgroundColor: `${theme.gold}15`,
      borderWidth: 1,
      borderColor: `${theme.gold}30`,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
    },
    fineBadgeText: {
      fontSize: 11,
      fontWeight: "800",
      color: theme.gold,
    },
    fineBottom: {
      flexDirection: "row",
      justifyContent: "space-between",
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
      width: 58,
      backgroundColor: `${theme.sky}15`,
      borderWidth: 1,
      borderColor: `${theme.sky}30`,
      borderRadius: 8,
      paddingVertical: 6,
      alignItems: "center",
    },
    postalCodeText: {
      fontSize: 13,
      fontWeight: "800",
      color: theme.sky,
    },
    postalOffice: {
      fontSize: 14,
      fontFamily: "Outfit_700Bold",
      fontWeight: "700",
      color: theme.textPrimary,
    },
    postalCounty: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: 1,
    },
    tipCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: `${theme.gold}12`,
      borderWidth: 1,
      borderColor: `${theme.gold}30`,
      borderRadius: 12,
      padding: 12,
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 16,
    },
    categoryChip: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth: 1,
    },
    categoryChipText: {
      fontSize: 12,
      fontWeight: "700",
    },
    quickRouteBtn: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      borderWidth: 1,
    },
    quickRouteText: {
      fontSize: 12,
      fontWeight: "800",
    },
    routeBadge: {
      paddingHorizontal: 6,
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
      fontWeight: "700",
    },
    openCorridorBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    openCorridorText: {
      fontSize: 12,
      fontWeight: "800",
      color: "#1A1108",
    },
  });
