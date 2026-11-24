import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AppLanguage = "en" | "sw";

export const APP_LANGUAGE_STORAGE_KEY = "kh-app-language";

const DICT = {
  // Navigation & Tabs
  "nav.home": { en: "Home", sw: "Nyumbani" },
  "nav.learn": { en: "Learn", sw: "Jifunze" },
  "nav.tools": { en: "Tools", sw: "Zana" },
  "nav.counties": { en: "Counties", sw: "Kaunti" },
  "nav.saved": { en: "Saved", sw: "Zilizohifadhiwa" },
  "nav.account": { en: "Account", sw: "Akaunti" },
  "nav.settings": { en: "Settings", sw: "Mipangilio" },
  "nav.quickJump": { en: "Quick Jump Menu", sw: "Menyu ya Haraka" },
  "nav.back": { en: "Back", sw: "Rudi" },

  // Language Switcher
  "lang.title": { en: "App Language", sw: "Lugha ya Programu" },
  "lang.subtitle": {
    en: "Switch interface between English and Kiswahili",
    sw: "Badilisha lugha kati ya Kiingereza na Kiswahili",
  },
  "lang.english": { en: "English", sw: "Kiingereza (English)" },
  "lang.swahili": { en: "Kiswahili", sw: "Kiswahili" },

  // Home Screen
  "home.searchPlaceholder": {
    en: "Search tools, courses...",
    sw: "Tafuta zana, kozi...",
  },
  "home.popularTools": { en: "Popular Tools", sw: "Zana Maarufu" },
  "home.allTools": { en: "All Tools", sw: "Zana Zote" },
  "home.exploreAll": { en: "Explore All", sw: "Tazama Zote" },
  "home.seeAll": { en: "See all", sw: "Ona zote" },
  "home.continueLearning": { en: "Continue Learning", sw: "Endelea Kujifunza" },
  "home.quickAccess": { en: "Quick Access", sw: "Ufikiaji wa Haraka" },
  "home.publicHolidays": { en: "Kenyan Public Holidays", sw: "Sikukuu za Umma Kenya" },
  "home.publicHolidaysSub": {
    en: "Statutory National & Religious Holidays",
    sw: "Sikukuu Rasmi za Kitaifa na Kidini",
  },
  "home.guidesAndArticles": { en: "Guides & Articles", sw: "Miongozo na Makala" },
  "home.countySpotlight": { en: "County Spotlight", sw: "Angazia Kaunti" },
  "home.pinnedTools": { en: "Pinned Tools", sw: "Zana Zilizobandikwa" },

  // Tools Tab
  "tools.allTitle": { en: "All Tools", sw: "Zana Zote" },
  "tools.searchPlaceholder": { en: "Search tools...", sw: "Tafuta zana..." },
  "tools.allCategories": { en: "All", sw: "Zote" },
  "tools.noResults": { en: "No tools found", sw: "Hakuna zana iliyopatikana" },
  "tools.clearSearch": { en: "Clear search", sw: "Futa utafutaji" },
  "tools.offlineReady": { en: "100% Offline Ready", sw: "Inafanya kazi bila mtandao" },
  "tools.pinTool": { en: "Pin Tool", sw: "Bandika Zana" },
  "tools.pinned": { en: "Pinned", sw: "Imebandikwa" },
  "tools.guide": { en: "Guide", sw: "Mwongozo" },
  "tools.sources": { en: "Sources", sw: "Vyanzo" },
  "tools.relatedTools": { en: "Related Tools", sw: "Zana Zinazohusiana" },
  "tools.openTool": { en: "Open", sw: "Fungua" },

  // Learn Tab
  "learn.title": { en: "Learn Hub", sw: "Kituo cha Kujifunza" },
  "learn.subtitle": {
    en: "23 Kenyan Languages · Proverbs · Audio & KSL",
    sw: "Lugha 23 za Kenya · Methali · Sauti na KSL",
  },
  "learn.translator": { en: "23-Language Translator", sw: "Mtafsiri wa Lugha 23" },

  // Counties Tab
  "counties.title": { en: "47 Counties Hub", sw: "Kaunti 47 za Kenya" },
  "counties.subtitle": {
    en: "Budgets · 290 Constituencies · Climate · Compare",
    sw: "Bajeti · Majimbo 290 · Hali ya Hewa · Linganisha",
  },
  "counties.searchPlaceholder": {
    en: "Search county or HQ...",
    sw: "Tafuta kaunti au makao makuu...",
  },
  "counties.searchDetailedPlaceholder": {
    en: "Search county, code, or HQ...",
    sw: "Tafuta kaunti, nambari, au makao makuu...",
  },
  "counties.compare": { en: "Compare", sw: "Linganisha" },
  "counties.population": { en: "Population", sw: "Idadi ya Watu" },
  "counties.area": { en: "Area", sw: "Eneo" },
  "counties.capital": { en: "HQ", sw: "Makao Makuu" },

  // Saved Tab
  "saved.title": { en: "Pinned Tools", sw: "Zana Zilizohifadhiwa" },
  "saved.subtitle": {
    en: "Saved offline for 1-tap access",
    sw: "Zimehifadhiwa kwa ufikiaji wa haraka",
  },
  "saved.clearAll": { en: "Clear All", sw: "Futa Zote" },
  "saved.emptyTitle": { en: "No pinned tools yet", sw: "Bado hujabandika zana" },
  "saved.emptyDesc": {
    en: "Pin your favorite calculators and guides for instant 1-tap access offline.",
    sw: "Bandika vikokotoo na miongozo unayopenda kwa ufikiaji wa haraka hata bila mtandao.",
  },
  "saved.browseTools": { en: "Browse All Tools", sw: "Vinjari Zana Zote" },
  "saved.suggestedTitle": { en: "Quick-Pin Popular Tools", sw: "Bandika Zana Maarufu Haraka" },
  "saved.accountCardTitle": { en: "KenyaHub Cloud Account", sw: "Akaunti ya Wingu ya KenyaHub" },
  "saved.accountCardDesc": {
    en: "Sign in to sync your pinned tools, themes & language progress.",
    sw: "Ingia kusawazisha zana zako, mandhari na maendeleo ya lugha.",
  },

  // Settings Screen
  "settings.title": { en: "Settings & Theming", sw: "Mipangilio na Mandhari" },
  "settings.subtitle": {
    en: "Customize language, appearance, colors & layout",
    sw: "Binafsisha lugha, mwonekano, rangi na mpangilio",
  },

  // Account Screen
  "account.title": { en: "Account", sw: "Akaunti" },
  "account.subtitleSignedIn": {
    en: "Synced with Appwrite Cloud",
    sw: "Imesawazishwa na Wingu la Appwrite",
  },
  "account.subtitleSignedOut": {
    en: "Sign in to sync themes, progress & tools",
    sw: "Ingia kusawazisha mandhari, maendeleo na zana",
  },
  "account.checking": {
    en: "Checking your KenyaHub account...",
    sw: "Inakagua akaunti yako ya KenyaHub...",
  },
  "account.memberFallback": { en: "KenyaHub Member", sw: "Mwanachama wa KenyaHub" },
  "account.activeSession": { en: "Active Appwrite Session", sw: "Kipindi Hai cha Appwrite" },
  "account.cloudSyncTitle": { en: "Cloud Account Sync", sw: "Usawazishaji wa Akaunti ya Wingu" },
  "account.cloudSyncDesc": {
    en: "Themes, pinned tools, language XP, favorites & checklists",
    sw: "Mandhari, zana zilizobandikwa, alama za lugha na orodha",
  },
  "account.statPinned": { en: "Pinned Tools", sw: "Zana Zilizobandikwa" },
  "account.statLanguages": { en: "Languages", sw: "Lugha" },
  "account.statSavedThemes": { en: "Saved Themes", sw: "Mandhari Zilizohifadhiwa" },
  "account.statActiveTheme": { en: "Active Theme", sw: "Mandhari ya Sasa" },
  "account.synced": { en: "Synced", sw: "Imesawazishwa" },
  "account.local": { en: "Local", sw: "Kwenye Kifaa" },
  "account.syncNow": { en: "Sync Now", sw: "Sawazisha Sasa" },
  "account.syncing": { en: "Syncing...", sw: "Inasawazisha..." },
  "account.continueLearning": {
    en: "Continue Language Learning",
    sw: "Endelea Kujifunza Lugha",
  },
  "account.customizeTheme": {
    en: "Customize App Theme",
    sw: "Binafsisha Mandhari ya Programu",
  },
  "account.signOut": { en: "Sign Out", sw: "Ondoka" },
  "account.signingOut": { en: "Signing out...", sw: "Inaondoka..." },
  "account.welcomeBack": { en: "Welcome back", sw: "Karibu tena" },
  "account.createTitle": { en: "Create KenyaHub Account", sw: "Fungua Akaunti ya KenyaHub" },
  "account.resetTitle": { en: "Reset Password", sw: "Weka Nenosiri Upya" },
  "account.forgotSubtitle": {
    en: "Enter your email and Appwrite will send you a password reset link.",
    sw: "Weka barua pepe yako na Appwrite itakutumia kiungo cha kuweka nenosiri upya.",
  },
  "account.authSubtitle": {
    en: "Back up your themes, pinned tools, favorites & language progress across devices.",
    sw: "Hifadhi mandhari yako, zana zilizobandikwa, vipendwa na maendeleo ya lugha kwenye vifaa vyako vyote.",
  },
  "account.signInTab": { en: "Sign In", sw: "Ingia" },
  "account.createTab": { en: "Create Account", sw: "Fungua Akaunti" },
  "account.fullName": { en: "Full Name", sw: "Jina Kamili" },
  "account.fullNamePlaceholder": { en: "Wanjiku Kamau", sw: "Wanjiku Kamau" },
  "account.email": { en: "Email Address", sw: "Barua Pepe" },
  "account.emailPlaceholder": { en: "you@example.com", sw: "wewe@mfano.com" },
  "account.password": { en: "Password", sw: "Nenosiri" },
  "account.passwordPlaceholder": {
    en: "At least 8 characters",
    sw: "Angalau herufi 8",
  },
  "account.forgotPassword": { en: "Forgot password?", sw: "Umesahau nenosiri?" },
  "account.confirmPassword": { en: "Confirm Password", sw: "Thibitisha Nenosiri" },
  "account.confirmPasswordPlaceholder": {
    en: "Re-enter password",
    sw: "Andika tena nenosiri",
  },
  "account.pleaseWait": { en: "Please wait...", sw: "Tafadhali subiri..." },
  "account.sendResetLink": { en: "Send Reset Link", sw: "Tuma Kiungo cha Kuweka Upya" },
  "account.backToSignIn": { en: "← Back to Sign In", sw: "← Rudi Kuingia" },
  "account.syncPerks": {
    en: "Your custom themes, pinned tools, dictionary favorites & language progress sync automatically once signed in.",
    sw: "Mandhari yako maalum, zana zilizobandikwa, vipendwa vya kamusi na maendeleo ya lugha husawazishwa kiotomatiki ukishaingia.",
  },
  "account.errInvalidEmail": {
    en: "Enter a valid email address.",
    sw: "Weka anwani sahihi ya barua pepe.",
  },
  "account.errPasswordShort": {
    en: "Password must be at least 8 characters.",
    sw: "Nenosiri lazima liwe na angalau herufi 8.",
  },
  "account.errNameShort": {
    en: "Please enter your full name.",
    sw: "Tafadhali weka jina lako kamili.",
  },
  "account.errPasswordMismatch": {
    en: "Passwords do not match.",
    sw: "Manenosiri hayafanani.",
  },
  "account.resetSent": {
    en: "Password reset link sent! Check your email inbox.",
    sw: "Kiungo cha kuweka nenosiri upya kimetumwa! Angalia barua pepe yako.",
  },
  "account.errAuthFailed": {
    en: "Authentication failed.",
    sw: "Uthibitishaji umeshindikana.",
  },

  // Contribute a Word Modal
  "contrib.title": { en: "Contribute a Word", sw: "Changia Neno" },
  "contrib.subtitle": {
    en: "Contribute words or phrases in any Kenyan language for admin review and dictionary inclusion. A local receipt is also saved on your device.",
    sw: "Changia maneno au misemo katika lugha yoyote ya Kenya ili yakaguliwe na kuongezwa kwenye kamusi. Nakala pia huhifadhiwa kwenye kifaa chako.",
  },
  "contrib.languageLabel": { en: "Kenyan Language *", sw: "Lugha ya Kenya *" },
  "contrib.otherLang": {
    en: "Other Kenyan Language (Specify)",
    sw: "Lugha Nyingine ya Kenya (Taja)",
  },
  "contrib.submitBtn": { en: "Submit Contribution", sw: "Tuma Mchango" },
  "contrib.submitting": { en: "Submitting...", sw: "Inatuma..." },
  "contrib.fillRequiredHint": {
    en: "Enter both the English word and its translation to send.",
    sw: "Weka neno la Kiingereza na tafsiri yake ili uweze kutuma.",
  },
  "contrib.successTitle": { en: "Asante Sana!", sw: "Asante Sana!" },

  // Error Boundary
  "error.title": { en: "Something went wrong", sw: "Hitilafu imetokea" },
  "error.message": {
    en: "We ran into an unexpected issue loading this screen. Tap Try again to recover.",
    sw: "Tumekumbana na tatizo la ghafla kupakia ukurasa huu. Gusa Jaribu tena kuendelea.",
  },
  "error.tryAgain": { en: "Try again", sw: "Jaribu tena" },
  "error.goHome": { en: "Go Home", sw: "Nenda Nyumbani" },
} as const;

export type TranslationKey = keyof typeof DICT;

const CATEGORY_SW: Record<string, string> = {
  "language-learning": "Lugha, Methali na Utamaduni",
  "finance-tax": "Fedha, Kodi na SACCO",
  "education-cbc": "Elimu na CBC",
  "transport-travel": "Usafiri na Magari",
  "business-investment": "Ujenzi na Mjengo",
  "utilities-energy": "Huduma na Nishati",
  "government-legal": "Serikali na Haki za Kisheria",
  "health-wellness": "Afya na SHA",
};

const TOOL_SHORT_SW: Record<string, string> = {
  "etims-mpesa-reconciler": "Kinga ya eTIMS-M-Pesa",
  "odpc-hr-retention-vault": "Kifaa cha ODPC HR",
  "eudr-coop-geojson-packager": "Kifurushi cha EUDR GeoJSON",
  "icms-landed-cost-arbitrage": "Ulinganisho wa Ushuru iCMS",
  "sha-claim-scrubber": "Ukaguzi wa Madai ya SHA",
  "ppra-egp-tender-serializer": "Kipanga Zabuni za e-GP",
  "kjsea-pathway-engine": "Kikokotoo cha KJSEA 20-20-60",
  "ardhisasa-cad-title-auditor": "Ukaguzi wa Hati Ardhisasa",
  learn: "Jifunze Lugha za Kenya",
  "kenyan-translator": "Mtafsiri wa Lugha 23",
  "paye-calculator": "Kikokotoo cha Mshahara PAYE",
  "mpesa-fee-calculator": "Ada za M-Pesa",
  "sacco-chama-calculator": "Mikopo ya SACCO na Chama",
  "helb-calculator": "Kikokotoo cha HELB",
  "stamp-duty-calculator": "Ushuru wa Stempu",
  "cbc-curriculum": "Mtaala wa CBC na Umri",
  "kuccps-cluster-calculator": "Alama za KUCCPS",
  "kcse-grade-calculator": "Kikokotoo cha KCSE",
  "kra-car-import-calculator": "Ushuru wa Kuagiza Gari",
  "number-plate-decoder": "Mtafsiri wa Nambari za Gari",
  "traffic-fines": "Faini za Trafiki NTSA",
  "mjengo-construction-calculator": "Gharama za Ujenzi (Mjengo)",
  "kplc-token-calculator": "Kikokotoo cha Tokeni KPLC",
  "water-bill-calculator": "Kikokotoo cha Bili ya Maji",
  "sha-benefit-estimator": "Manufaa ya Afya SHA",
  "small-claims-calculator": "Mahakama ya Madai Madogo",
  "ntsa-transfer-calculator": "Uhamisho wa Logbook NTSA",
  "boma-yangu-calculator": "Nyumba za Boma Yangu",
  "rental-tax-calculator": "Kodi ya Mapato ya Kodi",
  "landlord-tenant-rights": "Haki za Mpangaji na Amana",
  "domestic-wage-calculator": "Mshahara na Mkataba wa Mfanyakazi",
  "airtime-drain-guide": "Kinga ya Salio na SIM USSD",
  "mobile-number-prefix": "Kitambulishi cha Mtandao wa Simu",
  "school-fee-cap-auditor": "Ukaguzi wa Karo ya Shule",
  "cooking-fuel-comparator": "Ulinganisho wa Nishati ya Kupikia",
  "auctioneer-fee-shield": "Kinga ya Ada za Dalali",
  "succession-cap160-calculator": "Urithi (Sheria Cap 160)",
  "duka-hustle-ubp-calculator": "Biashara ya Duka na UBP",
  "funeral-harambee-planner": "Mpango wa Mazishi na Harambee",
  "rainwater-tank-sizer": "Ukubwa wa Tangi la Mvua",
  "fertilizer-seed-breakeven": "Faida ya Mbolea na Mbegu",
  "dairy-ration-margin": "Chakula na Faida ya Ng'ombe wa Maziwa",
  "land-subdivision-planner": "Ugawaji wa Ardhi na LCB",
  "biogas-digester-sizer": "Ukubwa wa Mtambo wa Biogesi",
  "livestock-vaccine-calendar": "Kalenda ya Chanjo ya Mifugo",
  "ecitizen-docs-planner": "Nyaraka na Ada za eCitizen",
  "tvet-kmtc-pathway-matcher": "Mlinganishi wa TVET na KMTC",
  "used-car-elogbook-checker": "Ukaguzi wa eLogbook ya Gari",
  "child-maintenance-calculator": "Matunzo ya Mtoto",
  "article49-rights-companion": "Haki za Kifungu cha 49",
};

interface AppLanguageContextValue {
  language: AppLanguage;
  isSwahili: boolean;
  setLanguage: (lang: AppLanguage) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const defaultTranslate = (key: TranslationKey): string => DICT[key]?.en ?? key;

const AppLanguageContext = createContext<AppLanguageContextValue>({
  language: "en",
  isSwahili: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: defaultTranslate,
});

export function AppLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<AppLanguage>("en");

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(APP_LANGUAGE_STORAGE_KEY)
      .then((stored) => {
        if (!active) return;
        if (stored === "sw" || stored === "en") {
          setLanguageState(stored);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const setLanguage = useCallback((lang: AppLanguage) => {
    setLanguageState(lang);
    AsyncStorage.setItem(APP_LANGUAGE_STORAGE_KEY, lang).catch(() => {});
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: AppLanguage = prev === "sw" ? "en" : "sw";
      AsyncStorage.setItem(APP_LANGUAGE_STORAGE_KEY, next).catch(() => {});
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const entry = DICT[key];
      if (!entry) return key;
      return language === "sw" ? entry.sw : entry.en;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      isSwahili: language === "sw",
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <AppLanguageContext.Provider value={value}>
      {children}
    </AppLanguageContext.Provider>
  );
}

export function useAppLanguage(): AppLanguageContextValue {
  return useContext(AppLanguageContext);
}

export function translateCategoryName(
  categoryId: string,
  fallback: string,
  language: AppLanguage
): string {
  if (language !== "sw") return fallback;
  return CATEGORY_SW[categoryId] || fallback;
}

export function translateToolShortTitle(
  slug: string,
  fallback: string,
  language: AppLanguage
): string {
  if (language !== "sw") return fallback;
  return TOOL_SHORT_SW[slug] || fallback;
}
