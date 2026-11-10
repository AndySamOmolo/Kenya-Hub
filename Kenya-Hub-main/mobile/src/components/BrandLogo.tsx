import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "../theme";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const { isDark } = useTheme();

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const badgeSize = isSmall ? 30 : isLarge ? 48 : 36;
  const flagW = isSmall ? 20 : isLarge ? 32 : 24;
  const flagH = Math.round(flagW * (2 / 3));
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
            backgroundColor: isDark ? "rgba(200, 150, 30, 0.15)" : "rgba(200, 150, 30, 0.1)",
            borderColor: isDark ? "rgba(200, 150, 30, 0.4)" : "rgba(200, 150, 30, 0.45)",
          },
        ]}
      >
        {/* Official Kenya Flag matching website's /kenya-flag.svg */}
        <Image
          source={require("../../assets/kenya-flag.png")}
          style={{
            width: flagW,
            height: flagH,
            borderRadius: 1.5,
          }}
          resizeMode="cover"
        />
      </View>

      {/* Brand Text: KenyaHub matching website's .gradient-text-kenya */}
      {showText && (
        <View style={styles.textWrap}>
          <Text
            style={[
              styles.brandText,
              {
                fontSize,
              },
            ]}
          >
            <Text style={{ color: isDark ? "#2FA463" : "#006B3F" }}>Kenya</Text>
            <Text style={{ color: "#C8961E" }}>H</Text>
            <Text style={{ color: "#BE2126" }}>ub</Text>
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
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
    overflow: "hidden",
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

