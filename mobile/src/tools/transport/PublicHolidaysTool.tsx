import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import { DynamicIcon } from "../../components/DynamicIcon";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles, daysUntilHoliday } from "./shared";
import holidaysData from "../../shared/data/public-holidays.json";

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
              ? "Today!"
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

