import React from "react";
import {
  View,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  type ThemeColors,
} from "../theme";
import {
  hexToRgba,
  getContrastInk,
  type IconBadgeStyle,
  type IconPackStyle,
  type ThemeConfig,
} from "../lib/theme-engine";

export type IoniconName = keyof typeof Ionicons.glyphMap;

const GLYPH_MAP: Record<string, number> | undefined = (
  Ionicons as unknown as { glyphMap?: Record<string, number> }
)?.glyphMap;

function hasGlyph(candidate: string): candidate is IoniconName {
  if (!GLYPH_MAP) return true;
  return Object.prototype.hasOwnProperty.call(GLYPH_MAP, candidate);
}

/**
 * Safely resolves an Ionicons glyph name for the active IconPackStyle,
 * always checking Ionicons.glyphMap so an invalid glyph name is never passed.
 */
export function resolveIoniconName(rawName: string, pack: IconPackStyle): IoniconName {
  const trimmed = (rawName || "").trim();
  const base = trimmed.replace(/-(outline|sharp)$/, "");

  const candidates: string[] =
    pack === "outline"
      ? [`${base}-outline`, trimmed, base, "ellipse-outline"]
      : pack === "sharp"
      ? [`${base}-sharp`, base, trimmed, "square-sharp"]
      : [base, trimmed, `${base}-outline`, "ellipse"];

  for (const candidate of candidates) {
    if (candidate && hasGlyph(candidate)) {
      return candidate as IoniconName;
    }
  }
  return "ellipse-outline";
}

export interface ThemedIconProps {
  name: string;
  size?: number;
  color?: string;
  pack?: IconPackStyle;
  scaleWithTheme?: boolean;
  overrideTheme?: ThemeColors;
  overrideConfig?: ThemeConfig;
  style?: StyleProp<TextStyle>;
}

/**
 * Theme-aware Ionicons renderer obeying iconPack ("outline" | "filled" | "sharp" | "duotone")
 * and optional iconScale from ThemeConfig.
 */
export const ThemedIcon = React.memo(function ThemedIcon({
  name,
  size = 20,
  color,
  pack,
  scaleWithTheme = true,
  overrideTheme,
  overrideConfig,
  style,
}: ThemedIconProps) {
  const ctx = useTheme();
  const activeTheme = overrideTheme ?? ctx.theme;
  const activeConfig = overrideConfig ?? ctx.themeConfig;
  const activePack: IconPackStyle = pack ?? activeConfig.iconPack ?? "outline";
  const resolvedColor = color ?? activeTheme.textPrimary;

  const rawScale = Number.isFinite(activeConfig.iconScale) ? activeConfig.iconScale : 1.0;
  const clampedScale = Math.max(0.8, Math.min(1.25, rawScale));
  const resolvedSize = scaleWithTheme ? Math.round(size * clampedScale) : size;

  if (activePack === "duotone") {
    const filledGlyph = resolveIoniconName(name, "filled");
    const outlineGlyph = resolveIoniconName(name, "outline");
    if (filledGlyph === outlineGlyph) {
      return (
        <Ionicons
          name={outlineGlyph}
          size={resolvedSize}
          color={resolvedColor}
          style={style}
        />
      );
    }
    return (
      <View
        style={{
          width: resolvedSize,
          height: resolvedSize,
          alignItems: "center",
          justifyContent: "center",
        }}
        accessible={false}
      >
        <Ionicons
          name={filledGlyph}
          size={resolvedSize}
          color={resolvedColor}
          style={[
            {
              position: "absolute",
              opacity: 0.24,
            },
            style,
          ]}
        />
        <Ionicons
          name={outlineGlyph}
          size={resolvedSize}
          color={resolvedColor}
          style={style}
        />
      </View>
    );
  }

  const resolvedGlyph = resolveIoniconName(name, activePack);
  return (
    <Ionicons
      name={resolvedGlyph}
      size={resolvedSize}
      color={resolvedColor}
      style={style}
    />
  );
});

function normalizeBadgeStyle(style: IconBadgeStyle | undefined): IconBadgeStyle {
  switch (style) {
    case "outline":
      return "monogram-frame";
    case "filled":
    case "duotone-wash":
      return "split-disc";
    case "soft-square":
    case "monochrome-ink":
      return "recessed-well";
    case "accent-solid":
      return "ink-seal";
    case "keycap":
      return "ceramic-tile";
    case "hairline-ring":
      return "soft-circle";
    case "minimal":
      return "bare-glyph";
    case "soft-circle":
    case "recessed-well":
    case "postage-stamp":
    case "split-disc":
    case "monogram-frame":
    case "ceramic-tile":
    case "tilted-lozenge":
    case "ink-seal":
    case "bare-glyph":
    case "hidden":
      return style;
    default:
      return "soft-circle";
  }
}

export interface ThemedIconBadgeProps {
  name?: string;
  label?: string;
  accentColor?: string;
  baseSize?: number;
  iconSize?: number;
  overrideTheme?: ThemeColors;
  overrideConfig?: ThemeConfig;
  forceVisible?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Composable Android-safe icon badge implementing all 9 creative container treatments
 * with elevation: 0 on every inner/clipped layer so Skia never renders gray artifacts.
 */
export const ThemedIconBadge = React.memo(function ThemedIconBadge({
  name,
  label,
  accentColor,
  baseSize = 36,
  iconSize,
  overrideTheme,
  overrideConfig,
  forceVisible = false,
  style,
}: ThemedIconBadgeProps) {
  const ctx = useTheme();
  const activeTheme = overrideTheme ?? ctx.theme;
  const activeConfig = overrideConfig ?? ctx.themeConfig;
  if (!forceVisible && (activeConfig.iconBadgeStyle === "hidden" || activeConfig.showCardIcons === false)) {
    return null;
  }
  const accent = accentColor || activeTheme.gold;

  const rawScale = Number.isFinite(activeConfig.iconScale) ? activeConfig.iconScale : 1.0;
  const clampedScale = Math.max(0.82, Math.min(1.25, rawScale));
  const size = Math.round(baseSize * clampedScale);
  const resolvedIconSize = Math.round((iconSize ?? Math.round(baseSize * 0.5)) * clampedScale);
  const badgeStyle = normalizeBadgeStyle(activeConfig.iconBadgeStyle);

  const renderInnerContent = (glyphColor: string) => {
    if (label !== undefined && label !== "") {
      return (
        <Text
          numberOfLines={1}
          style={{
            color: glyphColor,
            fontSize: Math.max(10, Math.round(resolvedIconSize * 0.68)),
            fontWeight: "700",
            fontVariant: ["tabular-nums"],
            includeFontPadding: false,
          }}
        >
          {label}
        </Text>
      );
    }
    if (!name) return null;
    return (
      <ThemedIcon
        name={name}
        size={resolvedIconSize}
        color={glyphColor}
        scaleWithTheme={false}
        overrideTheme={activeTheme}
        overrideConfig={activeConfig}
      />
    );
  };

  switch (badgeStyle) {
    case "recessed-well":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size * 0.26),
              backgroundColor: activeTheme.surfaceContainerLowest,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: activeTheme.outlineVariant,
              borderTopWidth: 1.5,
              borderTopColor: activeTheme.isDark
                ? "rgba(0, 0, 0, 0.52)"
                : hexToRgba(activeTheme.outline, 0.36),
              elevation: 0,
            },
            style,
          ]}
        >
          {renderInnerContent(accent)}
        </View>
      );

    case "postage-stamp":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: 4,
              backgroundColor: activeTheme.surfaceContainerLow,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: activeTheme.outline,
              padding: 2,
              elevation: 0,
            },
            style,
          ]}
        >
          <View
            style={[
              badgeBaseStyles.center,
              {
                width: "100%",
                height: "100%",
                borderRadius: 2,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: hexToRgba(accent, 0.34),
                backgroundColor: hexToRgba(accent, 0.06),
                elevation: 0,
              },
            ]}
          >
            {renderInnerContent(accent)}
          </View>
        </View>
      );

    case "split-disc":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size / 2),
              backgroundColor: hexToRgba(accent, 0.1),
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: hexToRgba(accent, 0.28),
              overflow: "hidden",
              elevation: 0,
            },
            style,
          ]}
        >
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: Math.round(size / 2),
              backgroundColor: hexToRgba(accent, 0.18),
              bottom: -Math.round(size * 0.38),
              right: -Math.round(size * 0.24),
              elevation: 0,
            }}
          />
          {renderInnerContent(accent)}
        </View>
      );

    case "monogram-frame":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: 4,
              backgroundColor: "transparent",
              borderWidth: 1.25,
              borderColor: activeTheme.outline,
              padding: 2,
              elevation: 0,
            },
            style,
          ]}
        >
          <View
            style={[
              badgeBaseStyles.center,
              {
                width: "100%",
                height: "100%",
                borderRadius: 2,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: hexToRgba(accent, 0.42),
                elevation: 0,
              },
            ]}
          >
            {renderInnerContent(accent)}
          </View>
        </View>
      );

    case "ceramic-tile":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size * 0.24),
              backgroundColor: activeTheme.bgCard,
              borderWidth: 1,
              borderColor: activeTheme.outlineVariant,
              borderBottomWidth: 2.5,
              borderBottomColor: activeTheme.isDark ? "#000000" : activeTheme.outline,
              borderTopColor: activeTheme.isDark
                ? "rgba(255, 255, 255, 0.10)"
                : "rgba(255, 255, 255, 0.85)",
              elevation: 0,
            },
            style,
          ]}
        >
          {renderInnerContent(accent)}
        </View>
      );

    case "tilted-lozenge": {
      const diamondSize = Math.round(size * 0.72);
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              elevation: 0,
            },
            style,
          ]}
        >
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              width: diamondSize,
              height: diamondSize,
              borderRadius: Math.round(size * 0.16),
              backgroundColor: hexToRgba(accent, 0.15),
              borderWidth: 1,
              borderColor: hexToRgba(accent, 0.36),
              transform: [{ rotate: "45deg" }],
              elevation: 0,
            }}
          />
          {renderInnerContent(accent)}
        </View>
      );
    }

    case "ink-seal": {
      const inkColor = getContrastInk(accent);
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size / 2),
              backgroundColor: accent,
              padding: 2,
              elevation: 0,
            },
            style,
          ]}
        >
          <View
            style={[
              badgeBaseStyles.center,
              {
                width: "100%",
                height: "100%",
                borderRadius: Math.round(size / 2),
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: hexToRgba(inkColor, 0.3),
                elevation: 0,
              },
            ]}
          >
            {renderInnerContent(inkColor)}
          </View>
        </View>
      );
    }

    case "bare-glyph":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              backgroundColor: "transparent",
              elevation: 0,
            },
            style,
          ]}
        >
          {renderInnerContent(accent)}
        </View>
      );

    case "hidden":
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size * 0.28),
              backgroundColor: "transparent",
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: activeTheme.outlineVariant,
              elevation: 0,
            },
            style,
          ]}
        >
          <Ionicons
            name="eye-off-outline"
            size={resolvedIconSize}
            color={activeTheme.textMuted}
          />
        </View>
      );

    case "soft-circle":
    default:
      return (
        <View
          style={[
            badgeBaseStyles.center,
            {
              width: size,
              height: size,
              borderRadius: Math.round(size / 2),
              backgroundColor: hexToRgba(accent, 0.14),
              elevation: 0,
            },
            style,
          ]}
        >
          {renderInnerContent(accent)}
        </View>
      );
  }
});

const badgeBaseStyles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
