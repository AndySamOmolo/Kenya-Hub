import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme";
import {
  getMobileAdsModule,
  getMobileAdsState,
  initializeMobileAdsWithConsent,
} from "../lib/mobile-ads";

interface CompliantAdBannerProps {
  /** Production AdMob Banner Unit ID (ignored in __DEV__, where TestIds.ADAPTIVE_BANNER is forced). */
  unitId?: string;
  /** Set false on empty states, error screens, or modal overlays to suppress rendering. */
  visible?: boolean;
}

export function CompliantAdBanner({
  unitId,
  visible = true,
}: CompliantAdBannerProps) {
  const { theme } = useTheme();
  const [ready, setReady] = useState(() => {
    const s = getMobileAdsState();
    return s.sdkAvailable && s.initialized && s.canRequestAds;
  });
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!visible) return;
    let active = true;
    void initializeMobileAdsWithConsent().then((state) => {
      if (active) {
        setReady(state.sdkAvailable && state.initialized && state.canRequestAds);
      }
    });
    return () => {
      active = false;
    };
  }, [visible]);

  if (!visible || !ready || failed) return null;

  const gma = getMobileAdsModule();
  if (!gma) return null;

  const { BannerAd, BannerAdSize, TestIds } = gma;
  const resolvedUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : unitId;
  if (!resolvedUnitId) return null;

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
        },
      ]}
      accessible
      accessibilityLabel="Advertisement"
    >
      <Text style={[styles.adLabel, { color: theme.textMuted }]}>
        ADVERTISEMENT
      </Text>
      <BannerAd
        unitId={resolvedUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: false }}
        onAdFailedToLoad={() => setFailed(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16, // >= 16dp separation from nearby buttons, inputs & tabs
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  adLabel: {
    fontFamily: "Inter_500Medium",
    fontSize: 9.5,
    letterSpacing: 1.1,
    marginBottom: 4,
  },
});
