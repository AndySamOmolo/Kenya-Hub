import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "../theme";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const { colors, isDark } = useTheme();

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const flagW = isSmall ? 28 : isLarge ? 42 : 34;
  const flagH = Math.round(flagW * 0.68);
  const flagRadius = isSmall ? 6 : isLarge ? 9 : 7;
  const fontSize = isSmall ? 18 : isLarge ? 26 : 21;

  return (
    <View style={styles.container}>
      {/* Crisp full-bleed rounded Kenya flag emblem */}
      <View
        style={[
          styles.flagFrame,
          {
            width: flagW,
            height: flagH,
            borderRadius: flagRadius,
            borderColor: isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(26, 22, 18, 0.14)",
            backgroundColor: isDark ? "#1C1916" : "#FFFFFF",
          },
        ]}
      >
        <Image
          source={require("../../assets/kenya-flag.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {showText && (
        <View style={styles.textWrap}>
          <Text
            numberOfLines={1}
            style={[
              styles.brandText,
              {
                fontSize,
              },
            ]}
          >
            <Text style={{ color: isDark ? colors.kenyaGreenLight : colors.kenyaGreen }}>Kenya</Text>
            <Text style={{ color: colors.gold }}>H</Text>
            <Text style={{ color: colors.kenyaRed }}>ub</Text>
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
    gap: 9,
  },
  flagFrame: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  textWrap: {
    justifyContent: "center",
  },
  brandText: {
    fontFamily: "Outfit_900Black",
    fontWeight: "900",
    letterSpacing: -0.4,
  },
});
