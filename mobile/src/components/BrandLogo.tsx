import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../theme";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const { theme } = useTheme();

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const badgeSize = isSmall ? 30 : isLarge ? 48 : 36;
  const flagW = isSmall ? 20 : isLarge ? 32 : 24;
  const flagH = isSmall ? 13 : isLarge ? 21 : 16;
  const fontSize = isSmall ? 16 : isLarge ? 26 : 20;

  return (
    <View style={styles.container}>
      {/* Glow Aura Ring matching website: rounded-full bg-gradient-to-br from-kenya-green via-gold to-kenya-red */}
      <View
        style={[
          styles.emblemRing,
          {
            width: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize / 2,
            backgroundColor: `${theme.gold}20`,
            borderColor: `${theme.gold}50`,
          },
        ]}
      >
        {/* Flag element matching website's /kenya-flag.svg */}
        <View
          style={[
            styles.flagBadge,
            {
              width: flagW,
              height: flagH,
            },
          ]}
        >
          {/* Top Black Stripe */}
          <View style={[styles.flagStripe, { backgroundColor: "#0C0A08" }]} />
          {/* White Fimbriation */}
          <View style={[styles.flagStripeNarrow, { backgroundColor: "#FAF7F2" }]} />
          {/* Middle Red Stripe */}
          <View style={[styles.flagStripe, { backgroundColor: "#BE2126" }]} />
          {/* White Fimbriation */}
          <View style={[styles.flagStripeNarrow, { backgroundColor: "#FAF7F2" }]} />
          {/* Bottom Green Stripe */}
          <View style={[styles.flagStripe, { backgroundColor: "#006B3F" }]} />

          {/* Central Maasai Traditional Shield */}
          <View style={styles.shieldCenter}>
            <View style={[styles.spearLine, { backgroundColor: theme.gold }]} />
            <View style={styles.shieldOval}>
              <View style={styles.shieldDot} />
            </View>
            <View style={[styles.spearLine, { backgroundColor: theme.gold }]} />
          </View>
        </View>
      </View>

      {/* Brand Text: KenyaHub */}
      {showText && (
        <View style={styles.textWrap}>
          <Text
            style={[
              styles.brandText,
              {
                fontSize,
                color: theme.textPrimary,
              },
            ]}
          >
            Kenya<Text style={{ color: theme.gold }}>Hub</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  emblemRing: {
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#C8961E",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  flagBadge: {
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    flexDirection: "column",
  },
  flagStripe: {
    flex: 3,
    width: "100%",
  },
  flagStripeNarrow: {
    flex: 0.7,
    width: "100%",
  },
  shieldCenter: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  shieldOval: {
    width: 9,
    height: 12,
    borderRadius: 4.5,
    backgroundColor: "#BE2126",
    borderWidth: 0.8,
    borderColor: "#FAF7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  shieldDot: {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: "#FAF7F2",
  },
  spearLine: {
    width: 1.2,
    height: 3,
    borderRadius: 0.6,
  },
  textWrap: {
    justifyContent: "center",
  },
  brandText: {
    fontFamily: "Outfit_900Black",
    fontWeight: "900",
    letterSpacing: -0.5,
  },
});
