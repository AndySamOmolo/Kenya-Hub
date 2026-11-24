import { Platform } from "react-native";

/** Set EXPO_PUBLIC_ADMOB_BANNER_ANDROID in .env / EAS secrets after registering KenyaHub in Google AdMob. */
const PROD_UNIT_RE = /^ca-app-pub-5895990873842803\/\d{10}$/;
function sanitizeProdUnitId(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  return PROD_UNIT_RE.test(trimmed) ? trimmed : undefined;
}

export const ADMOB_BANNER_UNIT_ID: string | undefined =
  Platform.OS === "android"
    ? sanitizeProdUnitId(process.env.EXPO_PUBLIC_ADMOB_BANNER_ANDROID)
    : sanitizeProdUnitId(process.env.EXPO_PUBLIC_ADMOB_BANNER_IOS);

export interface MobileAdsState {
  sdkAvailable: boolean;
  initialized: boolean;
  canRequestAds: boolean;
  privacyOptionsRequired: boolean;
  requestNonPersonalizedAdsOnly: boolean;
}

import type { ComponentType } from "react";

interface ConsentInfoResult {
  isConsentFormAvailable?: boolean;
  canRequestAds: boolean;
  privacyOptionsRequirementStatus: string;
}

interface GmaModule {
  default: () => { initialize: () => Promise<unknown> };
  AdsConsent: {
    requestInfoUpdate: () => Promise<ConsentInfoResult>;
    loadAndShowConsentFormIfRequired: () => Promise<ConsentInfoResult>;
    showPrivacyOptionsForm: () => Promise<ConsentInfoResult>;
  };
  AdsConsentPrivacyOptionsRequirementStatus: {
    REQUIRED: string;
  };
  BannerAd: ComponentType<{
    unitId: string;
    size: string;
    requestOptions?: { requestNonPersonalizedAdsOnly?: boolean };
    onAdFailedToLoad?: () => void;
  }>;
  BannerAdSize: {
    ANCHORED_ADAPTIVE_BANNER: string;
  };
  TestIds: {
    ADAPTIVE_BANNER: string;
  };
}

let cachedModule: GmaModule | null | undefined;
let initPromise: Promise<MobileAdsState> | null = null;
let currentState: MobileAdsState = {
  sdkAvailable: false,
  initialized: false,
  canRequestAds: false,
  privacyOptionsRequired: false,
  requestNonPersonalizedAdsOnly: true,
};

export function getMobileAdsModule(): GmaModule | null {
  if (Platform.OS === "web") return null;
  if (cachedModule !== undefined) return cachedModule;
  try {
    // Dynamic require prevents crash in Expo Go / unit tests without native binary
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("react-native-google-mobile-ads") as GmaModule;
    cachedModule = mod?.default ? mod : null;
  } catch {
    cachedModule = null;
  }
  return cachedModule;
}

export function getMobileAdsState(): MobileAdsState {
  return currentState;
}

export async function initializeMobileAdsWithConsent(): Promise<MobileAdsState> {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const gma = getMobileAdsModule();
    if (!gma) {
      currentState = {
        sdkAvailable: false,
        initialized: false,
        canRequestAds: false,
        privacyOptionsRequired: false,
        requestNonPersonalizedAdsOnly: true,
      };
      return currentState;
    }

    const { default: mobileAds, AdsConsent, AdsConsentPrivacyOptionsRequirementStatus } = gma;

    let canRequestAds = false;
    let privacyOptionsRequired = false;

    try {
      const consentInfo = await AdsConsent.requestInfoUpdate();
      if (consentInfo.isConsentFormAvailable) {
        const formResult = await AdsConsent.loadAndShowConsentFormIfRequired();
        canRequestAds = formResult.canRequestAds;
        privacyOptionsRequired =
          formResult.privacyOptionsRequirementStatus ===
          AdsConsentPrivacyOptionsRequirementStatus.REQUIRED;
      } else {
        canRequestAds = consentInfo.canRequestAds;
        privacyOptionsRequired =
          consentInfo.privacyOptionsRequirementStatus ===
          AdsConsentPrivacyOptionsRequirementStatus.REQUIRED;
      }
    } catch {
      // Offline or UMP unavailable: do not crash app boot; fall back to non-blocking state
      canRequestAds = false;
      privacyOptionsRequired = false;
    }

    let initialized = false;
    if (canRequestAds) {
      try {
        await mobileAds().initialize();
        initialized = true;
      } catch {
        initialized = false;
      }
    }

    let requestNonPersonalizedAdsOnly = true;
    try {
      if (typeof (AdsConsent as any).getUserChoices === "function") {
        const choices = await (AdsConsent as any).getUserChoices();
        requestNonPersonalizedAdsOnly = !Boolean(choices?.selectPersonalizedAds);
      }
    } catch {
      requestNonPersonalizedAdsOnly = true;
    }

    currentState = {
      sdkAvailable: true,
      initialized,
      canRequestAds,
      privacyOptionsRequired,
      requestNonPersonalizedAdsOnly,
    };
    if (!initialized) {
      initPromise = null;
    }
    return currentState;
  })();

  return initPromise;
}

export async function showAdPrivacyOptionsForm(): Promise<boolean> {
  const gma = getMobileAdsModule();
  if (!gma) return false;
  try {
    const result = await gma.AdsConsent.showPrivacyOptionsForm();
    currentState = {
      ...currentState,
      canRequestAds: result.canRequestAds,
      privacyOptionsRequired:
        result.privacyOptionsRequirementStatus ===
        gma.AdsConsentPrivacyOptionsRequirementStatus.REQUIRED,
    };
    if (result.canRequestAds && !currentState.initialized) {
      await gma.default().initialize();
      currentState = { ...currentState, initialized: true };
    }
    return true;
  } catch {
    return false;
  }
}
