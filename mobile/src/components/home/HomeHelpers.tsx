import React from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, categoryColorMap, androidRipple } from "../../theme";
import { TOOLS, getCategoryInfo } from "../../shared/lib/tools-registry";
import { DynamicIcon } from "../DynamicIcon";
import { styles } from "./styles";

export const COURSE_NAMES: Record<string, string> = {
  swahili: "Kiswahili",
  kikuyu: "Gĩkũyũ",
  luo: "Dholuo",
  kalenjin: "Kalenjin",
  luhya: "Luluhya",
  kamba: "Kĩkamba",
  kisii: "Ekegusii",
  meru: "Kĩmĩĩrũ",
  maasai: "Maa (Maasai)",
  mijikenda: "Kigiriama",
  somali: "Af-Soomaali",
  turkana: "Ng'aturkana",
  teso: "Ateso",
  embu: "Kĩembu",
  taita: "Kidawida",
  taveta: "Kitaveta",
  pokomo: "Kipokomo",
  borana: "Afaan Borana",
  rendille: "Af-Rendille",
  samburu: "Sampur",
  ilchamus: "Ilchamus",
  pokot: "Pökoot",
  daasanach: "Daasanach",
};

export function renderInlineMarkdown(text: string, theme: any, baseStyle: any): React.ReactNode[] {
  const cleaned = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
  const tokenRegex = /(\*\*\*[\s\S]+?\*\*\*|\*\*(?:\\\*|[^*]|\*[^*]+\*)+?\*\*|\*[^*\n]+?\*|`[^`]+`)/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = tokenRegex.exec(cleaned)) !== null) {
    if (match.index > lastIdx) {
      nodes.push(cleaned.slice(lastIdx, match.index));
    }
    const raw = match[0];
    if (raw.startsWith("***") && raw.endsWith("***")) {
      nodes.push(
        <Text
          key={key++}
          style={[baseStyle, { fontFamily: "Outfit_700Bold", fontStyle: "italic", color: theme.textPrimary }]}
        >
          {raw.slice(3, -3)}
        </Text>
      );
    } else if (raw.startsWith("**") && raw.endsWith("**")) {
      const inner = raw.slice(2, -2);
      const subParts = inner.split(/(\*[^*]+\*)/g);
      nodes.push(
        <Text key={key++} style={[baseStyle, { fontFamily: "Outfit_700Bold", color: theme.textPrimary }]}>
          {subParts.map((sp, sIdx) =>
            sp.startsWith("*") && sp.endsWith("*") ? (
              <Text key={sIdx} style={{ fontStyle: "italic", color: theme.gold }}>
                {sp.slice(1, -1)}
              </Text>
            ) : (
              sp
            )
          )}
        </Text>
      );
    } else if (raw.startsWith("*") && raw.endsWith("*")) {
      nodes.push(
        <Text key={key++} style={[baseStyle, { fontStyle: "italic", color: theme.textPrimary }]}>
          {raw.slice(1, -1)}
        </Text>
      );
    } else if (raw.startsWith("`") && raw.endsWith("`")) {
      nodes.push(
        <Text
          key={key++}
          style={[
            baseStyle,
            {
              fontFamily: Platform.OS === "android" ? "monospace" : "Courier",
              backgroundColor: theme.surfaceContainerHigh,
              color: theme.gold,
              fontSize: 12,
            },
          ]}
        >
          {" "}{raw.slice(1, -1)}{" "}
        </Text>
      );
    }
    lastIdx = tokenRegex.lastIndex;
  }
  if (lastIdx < cleaned.length) {
    nodes.push(cleaned.slice(lastIdx));
  }
  return nodes;
}

export function BlogMarkdownContent({ content, theme }: { content: string; theme: any }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  const bodyStyle = {
    fontSize: 13.5,
    lineHeight: 21,
    color: theme.textSecondary,
  };

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push(
        <View
          key={`hr-${i}`}
          style={{
            height: 1,
            backgroundColor: theme.outlineVariant,
            marginVertical: 8,
          }}
        />
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <Text
          key={`h2-${i}`}
          style={{
            fontFamily: "Outfit_700Bold",
            fontSize: 17,
            color: theme.gold,
            marginTop: 10,
            marginBottom: 2,
          }}
        >
          {renderInlineMarkdown(trimmed.slice(3), theme, { fontSize: 17, color: theme.gold })}
        </Text>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <Text
          key={`h3-${i}`}
          style={{
            fontFamily: "Outfit_700Bold",
            fontSize: 15,
            color: theme.textPrimary,
            marginTop: 6,
            marginBottom: 2,
          }}
        >
          {renderInlineMarkdown(trimmed.slice(4), theme, { fontSize: 15, color: theme.textPrimary })}
        </Text>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <View
          key={`quote-${i}`}
          style={{
            borderLeftWidth: 3,
            borderLeftColor: theme.gold,
            backgroundColor: `${theme.gold}12`,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
            marginVertical: 4,
          }}
        >
          <Text style={[bodyStyle, { fontStyle: "italic", color: theme.textPrimary }]}>
            {renderInlineMarkdown(quoteLines.join(" "), theme, bodyStyle)}
          </Text>
        </View>
      );
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const rowStr = lines[i].trim();
        if (!/^\|[\s\-:|]+\|$/.test(rowStr)) {
          const cells = rowStr
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim());
          tableRows.push(cells);
        }
        i++;
      }
      if (tableRows.length > 0) {
        blocks.push(
          <View
            key={`tbl-${i}`}
            style={{
              borderWidth: 1,
              borderColor: theme.outlineVariant,
              borderRadius: 10,
              overflow: "hidden",
              marginVertical: 6,
            }}
          >
            {tableRows.map((row, rIdx) => (
              <View
                key={`tr-${rIdx}`}
                style={{
                  flexDirection: "row",
                  backgroundColor:
                    rIdx === 0 ? theme.surfaceContainerHigh : "transparent",
                  borderBottomWidth: rIdx < tableRows.length - 1 ? 1 : 0,
                  borderBottomColor: theme.outlineVariant,
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  gap: 6,
                }}
              >
                {row.map((cell, cIdx) => (
                  <Text
                    key={`tc-${cIdx}`}
                    style={{
                      flex: 1,
                      fontSize: 11.5,
                      lineHeight: 16,
                      fontFamily: rIdx === 0 ? "Outfit_700Bold" : undefined,
                      color: rIdx === 0 ? theme.gold : theme.textSecondary,
                    }}
                  >
                    {renderInlineMarkdown(cell, theme, {
                      fontSize: 11.5,
                      color: rIdx === 0 ? theme.gold : theme.textSecondary,
                    })}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        );
      }
      continue;
    }

    const bulletMatch = rawLine.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (bulletMatch) {
      const indent = bulletMatch[1].length >= 2 ? 16 : 0;
      const marker = /^\d+\./.test(bulletMatch[2]) ? bulletMatch[2] : indent > 0 ? "◦" : "•";
      const itemText = bulletMatch[3];
      blocks.push(
        <View
          key={`li-${i}`}
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingLeft: indent,
            gap: 8,
            marginVertical: 2,
          }}
        >
          <Text style={{ color: theme.gold, fontFamily: "Outfit_700Bold", fontSize: 13, lineHeight: 21 }}>
            {marker}
          </Text>
          <Text style={[bodyStyle, { flex: 1 }]}>
            {renderInlineMarkdown(itemText, theme, bodyStyle)}
          </Text>
        </View>
      );
      i++;
      continue;
    }

    const paraLines: string[] = [trimmed];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^(\s*)([-*]|\d+\.)\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push(
      <Text key={`p-${i}`} style={bodyStyle}>
        {renderInlineMarkdown(paraLines.join(" "), theme, bodyStyle)}
      </Text>
    );
  }

  return <View style={{ gap: 8 }}>{blocks}</View>;
}

/** Compact 2-Column Bento Tile for Android Home Screen (no web source footer clutter) */
export function PopularToolRow({
  tool,
  isPinned,
  onTogglePin,
}: {
  tool: (typeof TOOLS)[0];
  isPinned: boolean;
  onTogglePin: (slug: string) => void;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const categoryColor = categoryColorMap[tool.category] || theme.gold;
  const catInfo = getCategoryInfo(tool.category);

  return (
    <View
      style={[
        styles.popularToolCard,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: isPinned ? `${theme.gold}55` : theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: tool.slug },
          })
        }
        style={styles.popularToolPressable}
      >
        <View
          style={[
            styles.popularToolIconWrap,
            {
              backgroundColor: `${categoryColor}1A`,
              borderColor: `${categoryColor}35`,
            },
          ]}
        >
          <DynamicIcon emoji={tool.icon} size={22} color={categoryColor} />
        </View>
        <View style={styles.popularToolBody}>
          <View
            style={[
              styles.miniCategoryPill,
              {
                backgroundColor: `${categoryColor}18`,
                alignSelf: "flex-start",
                marginBottom: 3,
              },
            ]}
          >
            <Text style={[styles.miniCategoryText, { color: categoryColor }]}>
              {catInfo?.name || tool.category}
            </Text>
          </View>
          <Text
            style={[styles.popularToolTitle, { color: theme.textPrimary }]}
          >
            {tool.shortTitle || tool.title}
          </Text>
          <Text
            style={[styles.popularToolDesc, { color: theme.textSecondary, marginTop: 2 }]}
            numberOfLines={2}
          >
            {tool.description}
          </Text>
        </View>
        <View style={styles.popularToolActions}>
          <Pressable
            onPress={() => onTogglePin(tool.slug)}
            hitSlop={10}
            style={[
              styles.popularToolPinBtn,
              {
                backgroundColor: isPinned
                  ? `${theme.gold}22`
                  : theme.surfaceContainerHigh,
              },
            ]}
          >
            <Ionicons
              name={isPinned ? "bookmark" : "bookmark-outline"}
              size={15}
              color={isPinned ? theme.gold : theme.textMuted}
            />
          </Pressable>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={theme.textMuted}
          />
        </View>
      </Pressable>
    </View>
  );
}

export const ROTATING_LANGUAGES = [
  { id: "swahili", name: "Kiswahili", greeting: "Jambo!", region: "Swahili Coast" },
  { id: "luo", name: "Dholuo", greeting: "Oyawore!", region: "Lake Victoria Basin" },
  { id: "kalenjin", name: "Kalenjin", greeting: "Chamgei!", region: "Great Rift Valley" },
  { id: "kikuyu", name: "Gĩkũyũ", greeting: "Mwohoro!", region: "Mount Kenya Highlands" },
  { id: "luhya", name: "Luluhya", greeting: "Mulembe!", region: "Western Forest Lands" },
  { id: "kamba", name: "Kĩkamba", greeting: "Ũmũvoo!", region: "Ukambani Hills" },
  { id: "maasai", name: "Maa (Maasai)", greeting: "Sopa!", region: "Mara-Amboseli Plains" },
  { id: "somali", name: "Af-Soomaali", greeting: "Nabad!", region: "Northern Frontier" },
  { id: "turkana", name: "Ng'aturkana", greeting: "Mata!", region: "Jade Sea Basin" },
  { id: "mijikenda", name: "Kigiriama", greeting: "Vidze!", region: "Coastal Kaya Forests" },
  { id: "meru", name: "Kĩmĩĩrũ", greeting: "Muuga!", region: "Nyambene Slopes" },
  { id: "kisii", name: "Ekegusii", greeting: "Bwakire!", region: "Gusii Highlands" },
  { id: "borana", name: "Afaan Borana", greeting: "Nagaa!", region: "Marsabit Plateau" },
  { id: "embu", name: "Kĩembu", greeting: "Mwega!", region: "Mount Kenya South" },
  { id: "taita", name: "Kidawida", greeting: "Mwashuma!", region: "Taita Cloud Hills" },
];

export const SUPER_APP_LAUNCHER_ITEMS = [
  {
    id: "paye",
    label: "PAYE Tax",
    icon: "calculator" as const,
    color: "#2FA463",
    route: "/tools/[slug]" as const,
    params: { slug: "paye-calculator" },
  },
  {
    id: "mpesa",
    label: "M-Pesa Fees",
    icon: "phone-portrait" as const,
    color: "#10B981",
    route: "/tools/[slug]" as const,
    params: { slug: "mpesa-fee-calculator" },
  },
  {
    id: "kplc",
    label: "KPLC Tokens",
    icon: "flash" as const,
    color: "#F59E0B",
    route: "/tools/[slug]" as const,
    params: { slug: "kplc-token-calculator" },
  },
  {
    id: "translator",
    label: "Translator",
    icon: "language" as const,
    color: "#EC4899",
    route: "/tools/[slug]" as const,
    params: { slug: "kenyan-translator" },
  },
  {
    id: "learn",
    label: "Learn",
    icon: "school" as const,
    color: "#C8961E",
    route: "/tools/[slug]" as const,
    params: { slug: "learn" },
  },
  {
    id: "matatu",
    label: "Matatu Fares",
    icon: "bus" as const,
    color: "#0EA5E9",
    route: "/(tabs)/matatu" as const,
  },
  {
    id: "county",
    label: "47 Counties",
    icon: "map" as const,
    color: "#8B5CF6",
    route: "/(tabs)/county" as const,
  },
  {
    id: "all",
    label: `All ${TOOLS.length} Tools`,
    icon: "grid" as const,
    color: "#EF4444",
    route: "/(tabs)/tools" as const,
  },
];


export function SUPER_APP_APP_TILES(
  items: Array<{
    id: string;
    label: string;
    icon: any;
    color: string;
    route: any;
    params?: any;
  }>,
  router: ReturnType<typeof useRouter>,
  theme: any
) {
  return items.map((item) => (
    <Pressable
      key={item.id}
      android_ripple={androidRipple(theme.rippleColor, true)}
      onPress={() => {
        if (item.params) {
          router.push({
            pathname: item.route,
            params: item.params,
          });
        } else {
          router.push(item.route as any);
        }
      }}
      style={styles.launcherTile}
    >
      <View
        style={[
          styles.launcherSquircle,
          {
            backgroundColor: `${item.color}1C`,
            borderColor: `${item.color}40`,
          },
        ]}
      >
        <Ionicons name={item.icon} size={22} color={item.color} />
      </View>
      <Text
        style={[styles.launcherLabel, { color: theme.textPrimary }]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
      >
        {item.label}
      </Text>
    </Pressable>
  ));
}

