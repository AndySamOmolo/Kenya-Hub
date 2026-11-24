import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DEFAULT_THEME_CONFIG,
  parseThemeConfigJson,
  type ThemeConfig,
} from "./theme-engine";

const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "6a3290500003e21b7fe1";
const APPWRITE_DATABASE_ID = "kenyahub-db";
const CONTRIBUTIONS_COLLECTION_ID = "contributions";
const CONTRIBUTION_AUDIO_BUCKET_ID = "contribution-audio";

const SESSION_STORAGE_KEY = "kh-appwrite-session-secret";
const FALLBACK_COOKIE_KEY = "kh-appwrite-fallback-cookies";
const USER_CACHE_KEY = "kh-appwrite-user-cache";

const THEME_CONFIG_STORAGE_KEY = "kh-theme-config";
const SAVED_THEMES_STORAGE_KEY = "kh-saved-themes";
const HUDUMA_BAG_STORAGE_KEY = "kenyahub_ecitizen_huduma_bag_v1";
const HARAMBEE_PLEDGES_KEY = "kenyahub_funeral_harambee_pledges_v1";

export interface MobileAuthUser {
  $id: string;
  name: string;
  email: string;
  emailVerification?: boolean;
}

interface StoredAuthCredentials {
  sessionSecret: string | null;
  fallbackCookies: string | null;
}

interface SyncedSavedTheme {
  id: string;
  name: string;
  createdAt: string;
  swatches: [string, string, string, string];
  config: ThemeConfig;
}

interface SyncedHarambeePledge {
  id: string;
  name: string;
  amount?: number;
  pledged?: number;
  paid: boolean | number;
  [key: string]: unknown;
}

async function getStoredCredentials(): Promise<StoredAuthCredentials> {
  try {
    const [sessionSecret, fallbackCookies] = await Promise.all([
      AsyncStorage.getItem(SESSION_STORAGE_KEY),
      AsyncStorage.getItem(FALLBACK_COOKIE_KEY),
    ]);
    return { sessionSecret, fallbackCookies };
  } catch {
    return { sessionSecret: null, fallbackCookies: null };
  }
}

async function storeCredentials(
  creds: { sessionSecret?: string | null; fallbackCookies?: string | null } | null
): Promise<void> {
  try {
    if (!creds) {
      await AsyncStorage.multiRemove([
        SESSION_STORAGE_KEY,
        FALLBACK_COOKIE_KEY,
        USER_CACHE_KEY,
      ]);
      return;
    }
    if (creds.sessionSecret) {
      await AsyncStorage.setItem(SESSION_STORAGE_KEY, creds.sessionSecret);
    }
    if (creds.fallbackCookies) {
      await AsyncStorage.setItem(FALLBACK_COOKIE_KEY, creds.fallbackCookies);
    }
  } catch {
    // Ignore storage errors
  }
}

function formatMobileAuthError(
  data: Record<string, unknown>,
  status: number
): string {
  const type = typeof data.type === "string" ? data.type : "";
  const msg = typeof data.message === "string" ? data.message : "";
  if (type === "user_already_exists" || /already exists/i.test(msg)) {
    return "An account with this email already exists. Try signing in or resetting your password.";
  }
  if (type === "user_invalid_credentials" || /invalid credentials/i.test(msg)) {
    return "Incorrect email or password. Double-check your details or tap Forgot Password.";
  }
  if (type === "general_rate_limit_exceeded" || status === 429) {
    return "Too many attempts. Please wait a minute and try again.";
  }
  if (/paused|unavailable/i.test(msg) || status >= 500) {
    return "Account service is temporarily unavailable. Please try again shortly.";
  }
  return msg || `Request failed (HTTP ${status})`;
}

async function appwriteRequest<T>(
  path: string,
  options: {
    method?: string;
    body?: Record<string, unknown>;
    useStoredAuth?: boolean;
  } = {}
): Promise<{ data: T; headers: Headers }> {
  const useAuth = options.useStoredAuth !== false;
  const creds = useAuth
    ? await getStoredCredentials()
    : { sessionSecret: null, fallbackCookies: null };
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Appwrite-Project": APPWRITE_PROJECT_ID,
    "X-Appwrite-Response-Format": "1.6.0",
  };
  if (creds.sessionSecret) {
    headers["X-Appwrite-Session"] = creds.sessionSecret;
  } else if (creds.fallbackCookies) {
    headers["X-Fallback-Cookies"] = creds.fallbackCookies;
  }

  let res: Response;
  try {
    res = await fetch(`${APPWRITE_ENDPOINT}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      credentials: "include",
    });
  } catch {
    throw new Error(
      "Could not reach KenyaHub account server. Check your internet connection."
    );
  }

  if (res.status === 204) {
    return { data: {} as T, headers: res.headers };
  }

  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    // non-JSON response
  }

  if (!res.ok) {
    throw new Error(formatMobileAuthError(data, res.status));
  }

  return { data: data as T, headers: res.headers };
}

export async function getCachedUser(): Promise<MobileAuthUser | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      typeof parsed.$id === "string" &&
      typeof parsed.email === "string"
    ) {
      return parsed as MobileAuthUser;
    }
  } catch {
    // Ignore
  }
  return null;
}

export async function getCurrentUser(): Promise<MobileAuthUser | null> {
  const creds = await getStoredCredentials();
  if (!creds.sessionSecret && !creds.fallbackCookies) return null;
  try {
    const { data: user } = await appwriteRequest<MobileAuthUser>("/account");
    if (user && user.$id && user.email) {
      try {
        await AsyncStorage.setItem(USER_CACHE_KEY, JSON.stringify(user));
      } catch {
        // Ignore
      }
      return user;
    }
    return null;
  } catch {
    return await getCachedUser();
  }
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<MobileAuthUser> {
  const { data: session, headers } = await appwriteRequest<{
    secret?: string;
    $id?: string;
  }>("/account/sessions/email", {
    method: "POST",
    body: { email: email.trim().toLowerCase(), password },
    useStoredAuth: false,
  });

  const fallbackCookies = headers.get("x-fallback-cookies");
  const sessionSecret =
    typeof session.secret === "string" && session.secret
      ? session.secret
      : null;

  await storeCredentials({ sessionSecret, fallbackCookies });

  const { data: user } = await appwriteRequest<MobileAuthUser>("/account");
  try {
    await AsyncStorage.setItem(USER_CACHE_KEY, JSON.stringify(user));
  } catch {
    // Ignore
  }
  return user;
}

export async function signUpWithEmail(
  name: string,
  email: string,
  password: string
): Promise<MobileAuthUser> {
  const uniqueId = `kh_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
  const cleanEmail = email.trim().toLowerCase();
  await appwriteRequest("/account", {
    method: "POST",
    body: {
      userId: uniqueId,
      email: cleanEmail,
      password,
      name: name.trim(),
    },
    useStoredAuth: false,
  });
  return signInWithEmail(cleanEmail, password);
}

export async function sendPasswordRecovery(email: string): Promise<void> {
  await appwriteRequest("/account/recovery", {
    method: "POST",
    body: {
      email: email.trim().toLowerCase(),
      url: "https://kenyahub.me/account/",
    },
    useStoredAuth: false,
  });
}

export async function signOutMobile(): Promise<void> {
  try {
    await appwriteRequest("/account/sessions/current", { method: "DELETE" });
  } catch {
    // Ignore network/expired errors
  }
  await storeCredentials(null);
}

export interface MobileCloudSyncSummary {
  pinnedCount: number;
  languagesSynced: number;
  themeSynced: boolean;
  savedThemesCount: number;
  favoritesCount: number;
  lastSyncedAt: string;
  syncedThemeConfig: ThemeConfig | null;
}

function safeJson<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function parseSavedThemesList(input: unknown): SyncedSavedTheme[] {
  if (!Array.isArray(input)) return [];
  const valid: SyncedSavedTheme[] = [];
  for (const item of input) {
    if (
      !item ||
      typeof item !== "object" ||
      Array.isArray(item) ||
      typeof (item as Record<string, unknown>).id !== "string" ||
      typeof (item as Record<string, unknown>).name !== "string"
    ) {
      continue;
    }
    const rec = item as Record<string, unknown>;
    const cfgRaw =
      typeof rec.config === "string"
        ? rec.config
        : JSON.stringify(rec.config || {});
    const parsedCfg = parseThemeConfigJson(cfgRaw);
    if (!parsedCfg) continue;
    const rawSwatches = Array.isArray(rec.swatches) ? rec.swatches : [];
    const swatches: [string, string, string, string] =
      rawSwatches.length === 4 &&
      rawSwatches.every((s) => typeof s === "string")
        ? [rawSwatches[0], rawSwatches[1], rawSwatches[2], rawSwatches[3]]
        : ["#0E0C0A", "#1E1A17", "#C8961E", "#006B3F"];
    valid.push({
      id: rec.id as string,
      name: rec.name as string,
      createdAt:
        typeof rec.createdAt === "string"
          ? rec.createdAt
          : new Date().toISOString(),
      swatches,
      config: parsedCfg,
    });
  }
  return valid;
}

function parseHarambeePledgesList(input: unknown): SyncedHarambeePledge[] {
  if (!Array.isArray(input)) return [];
  const result: SyncedHarambeePledge[] = [];
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const rec = item as Record<string, unknown>;
    const id =
      typeof rec.id === "string" && rec.id.trim()
        ? rec.id.trim()
        : `pledge-${i}`;
    const name = typeof rec.name === "string" ? rec.name : "Contributor";
    result.push({
      ...rec,
      id,
      name,
      paid:
        typeof rec.paid === "boolean"
          ? rec.paid
          : Number(rec.paid) || 0,
    });
  }
  return result;
}

function isDefaultThemeConfig(cfg: ThemeConfig): boolean {
  try {
    return JSON.stringify(cfg) === JSON.stringify(DEFAULT_THEME_CONFIG);
  } catch {
    return false;
  }
}

export async function syncMobileUserData(): Promise<MobileCloudSyncSummary | null> {
  const creds = await getStoredCredentials();
  if (!creds.sessionSecret && !creds.fallbackCookies) return null;
  try {
    const { data: remotePrefs } = await appwriteRequest<Record<string, unknown>>(
      "/account/prefs"
    );
    const pairs = await AsyncStorage.multiGet([
      THEME_CONFIG_STORAGE_KEY,
      SAVED_THEMES_STORAGE_KEY,
      "kh-saved-tools",
      "kh-translator-favs",
      "kh-translator-recent",
      "kh-language-progress-v2",
      "kenyahub_last_visited_lang_v1",
      "kh-tool-visits",
      HUDUMA_BAG_STORAGE_KEY,
      HARAMBEE_PLEDGES_KEY,
    ]);
    const localMap = new Map(pairs);

    // 1. Active mobile theme config (kh-theme-config)
    const localThemeRaw = localMap.get(THEME_CONFIG_STORAGE_KEY) ?? null;
    const localThemeCfg = localThemeRaw
      ? parseThemeConfigJson(localThemeRaw)
      : null;
    const remoteThemeRaw = remotePrefs.mobileThemeConfig;
    const remoteThemeCfg = remoteThemeRaw
      ? parseThemeConfigJson(
          typeof remoteThemeRaw === "string"
            ? remoteThemeRaw
            : JSON.stringify(remoteThemeRaw)
        )
      : null;

    let mergedThemeConfig: ThemeConfig | null = null;
    if (localThemeCfg && remoteThemeCfg) {
      mergedThemeConfig = isDefaultThemeConfig(localThemeCfg)
        ? remoteThemeCfg
        : localThemeCfg;
    } else {
      mergedThemeConfig = localThemeCfg || remoteThemeCfg || null;
    }

    // 2. Saved custom themes (kh-saved-themes, capped at 10)
    const localSavedThemes = parseSavedThemesList(
      safeJson<unknown>(localMap.get(SAVED_THEMES_STORAGE_KEY) ?? null, [])
    );
    const remoteSavedThemes = parseSavedThemesList(
      remotePrefs.mobileSavedThemes
    );
    const savedThemesById = new Map<string, SyncedSavedTheme>();
    for (const t of remoteSavedThemes) {
      savedThemesById.set(t.id, t);
    }
    for (const t of localSavedThemes) {
      savedThemesById.set(t.id, t);
    }
    let mergedSavedThemes = Array.from(savedThemesById.values())
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, 10);

    // 3. Pinned tools (kh-saved-tools)
    const localPinnedRaw = safeJson<unknown>(
      localMap.get("kh-saved-tools") ?? null,
      []
    );
    const localPinned = Array.isArray(localPinnedRaw)
      ? localPinnedRaw.filter((s): s is string => typeof s === "string")
      : [];
    const remotePinned = Array.isArray(remotePrefs.pinnedTools)
      ? remotePrefs.pinnedTools.filter((s): s is string => typeof s === "string")
      : [];
    const mergedPinned = Array.from(
      new Set([...remotePinned, ...localPinned])
    ).slice(0, 50);

    // 4. Translator favorites (kh-translator-favs)
    const localFavsRaw = safeJson<unknown>(
      localMap.get("kh-translator-favs") ?? null,
      []
    );
    const localFavs = Array.isArray(localFavsRaw)
      ? localFavsRaw.filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0
        )
      : [];
    const remoteFavs = Array.isArray(remotePrefs.translatorFavs)
      ? remotePrefs.translatorFavs.filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0
        )
      : [];
    const mergedFavs = Array.from(
      new Set([...localFavs, ...remoteFavs])
    ).slice(0, 200);

    // 5. Translator recent searches (kh-translator-recent, capped at 20)
    const localRecentRaw = safeJson<unknown>(
      localMap.get("kh-translator-recent") ?? null,
      []
    );
    const localRecent = Array.isArray(localRecentRaw)
      ? localRecentRaw.filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0
        )
      : [];
    const remoteRecent = Array.isArray(remotePrefs.translatorRecent)
      ? remotePrefs.translatorRecent.filter(
          (s): s is string => typeof s === "string" && s.trim().length > 0
        )
      : [];
    const recentSeen = new Set<string>();
    const mergedRecent: string[] = [];
    for (const q of [...localRecent, ...remoteRecent]) {
      const k = q.trim().toLowerCase();
      if (!k || recentSeen.has(k)) continue;
      recentSeen.add(k);
      mergedRecent.push(q.trim());
      if (mergedRecent.length >= 20) break;
    }

    // 6. Last visited language (kenyahub_last_visited_lang_v1)
    const localLang = localMap.get("kenyahub_last_visited_lang_v1") || "";
    const remoteLang =
      typeof remotePrefs.lastVisitedLang === "string"
        ? remotePrefs.lastVisitedLang
        : "";
    const mergedLang = localLang || remoteLang;

    // 7. Tool visits (kh-tool-visits)
    const localVisits = safeJson<Record<string, number>>(
      localMap.get("kh-tool-visits") ?? null,
      {}
    );
    const remoteVisits =
      remotePrefs.toolVisits &&
      typeof remotePrefs.toolVisits === "object" &&
      !Array.isArray(remotePrefs.toolVisits)
        ? (remotePrefs.toolVisits as Record<string, number>)
        : {};
    const mergedVisits: Record<string, number> = { ...remoteVisits };
    if (
      localVisits &&
      typeof localVisits === "object" &&
      !Array.isArray(localVisits)
    ) {
      for (const [slug, count] of Object.entries(localVisits)) {
        const n = Number(count) || 0;
        if (n > (Number(mergedVisits[slug]) || 0)) mergedVisits[slug] = n;
      }
    }

    // 8. Language learning progress (kh-language-progress-v2)
    const localLearn = safeJson<Record<string, Record<string, unknown>>>(
      localMap.get("kh-language-progress-v2") ?? null,
      {}
    );
    const remoteLearn =
      remotePrefs.learnProgress &&
      typeof remotePrefs.learnProgress === "object" &&
      !Array.isArray(remotePrefs.learnProgress)
        ? (remotePrefs.learnProgress as Record<
            string,
            { xp?: number; streak?: number; completedLessons?: string[] }
          >)
        : {};
    const mergedLearnSummary: Record<
      string,
      { xp: number; streak: number; completedLessons: string[] }
    > = {};
    const mergedLocalLearn: Record<string, Record<string, unknown>> =
      localLearn && typeof localLearn === "object" && !Array.isArray(localLearn)
        ? { ...localLearn }
        : {};
    const allLangIds = new Set([
      ...Object.keys(remoteLearn),
      ...Object.keys(mergedLocalLearn),
    ]);
    for (const lid of allLangIds) {
      const r = remoteLearn[lid];
      const l = mergedLocalLearn[lid];
      const rLessons = Array.isArray(r?.completedLessons)
        ? r.completedLessons.filter((x): x is string => typeof x === "string")
        : [];
      const lLessons = Array.isArray(l?.completedLessons)
        ? l.completedLessons.filter((x): x is string => typeof x === "string")
        : [];
      const summary = {
        xp: Math.max(Number(r?.xp) || 0, Number(l?.xp) || 0),
        streak: Math.max(Number(r?.streak) || 0, Number(l?.streak) || 0),
        completedLessons: Array.from(
          new Set([...rLessons, ...lLessons])
        ).slice(0, 200),
      };
      mergedLearnSummary[lid] = summary;
      mergedLocalLearn[lid] = {
        ...(l && typeof l === "object" ? l : {}),
        ...summary,
      };
    }

    // 9. Huduma checklist (kenyahub_ecitizen_huduma_bag_v1)
    const localHudumaRaw = safeJson<unknown>(
      localMap.get(HUDUMA_BAG_STORAGE_KEY) ?? null,
      {}
    );
    const localHuduma =
      localHudumaRaw &&
      typeof localHudumaRaw === "object" &&
      !Array.isArray(localHudumaRaw)
        ? (localHudumaRaw as Record<string, unknown>)
        : {};
    const remoteHuduma =
      remotePrefs.hudumaBag &&
      typeof remotePrefs.hudumaBag === "object" &&
      !Array.isArray(remotePrefs.hudumaBag)
        ? (remotePrefs.hudumaBag as Record<string, unknown>)
        : {};
    const mergedHuduma: Record<string, boolean> = {};
    const hudumaKeys = Array.from(
      new Set([...Object.keys(remoteHuduma), ...Object.keys(localHuduma)])
    ).slice(0, 120);
    for (const k of hudumaKeys) {
      if (Boolean(localHuduma[k]) || Boolean(remoteHuduma[k])) {
        mergedHuduma[k] = true;
      }
    }

    // 10. Harambee pledges (HARAMBEE_PLEDGES_KEY, capped at 50)
    const localPledges = parseHarambeePledgesList(
      safeJson<unknown>(localMap.get(HARAMBEE_PLEDGES_KEY) ?? null, [])
    );
    const remotePledges = parseHarambeePledgesList(
      remotePrefs.harambeePledges
    );
    const pledgesById = new Map<string, SyncedHarambeePledge>();
    for (const p of remotePledges) {
      pledgesById.set(p.id, p);
    }
    for (const p of localPledges) {
      pledgesById.set(p.id, p);
    }
    let mergedPledges = Array.from(pledgesById.values()).slice(0, 50);

    // Persist merged data back to local AsyncStorage
    const writes: [string, string][] = [
      ["kh-saved-tools", JSON.stringify(mergedPinned)],
      ["kh-translator-favs", JSON.stringify(mergedFavs)],
      ["kh-translator-recent", JSON.stringify(mergedRecent)],
      ["kh-tool-visits", JSON.stringify(mergedVisits)],
      [HUDUMA_BAG_STORAGE_KEY, JSON.stringify(mergedHuduma)],
    ];
    if (mergedThemeConfig) {
      writes.push([THEME_CONFIG_STORAGE_KEY, JSON.stringify(mergedThemeConfig)]);
      if (
        mergedThemeConfig.mode === "light" ||
        mergedThemeConfig.mode === "dark"
      ) {
        writes.push(["kh-theme", mergedThemeConfig.mode]);
      }
    }
    if (mergedSavedThemes.length > 0) {
      writes.push([SAVED_THEMES_STORAGE_KEY, JSON.stringify(mergedSavedThemes)]);
    }
    if (Object.keys(mergedLocalLearn).length > 0) {
      writes.push([
        "kh-language-progress-v2",
        JSON.stringify(mergedLocalLearn),
      ]);
    }
    if (mergedLang) {
      writes.push(["kenyahub_last_visited_lang_v1", mergedLang]);
    }
    if (mergedPledges.length > 0) {
      writes.push([HARAMBEE_PLEDGES_KEY, JSON.stringify(mergedPledges)]);
    }
    await AsyncStorage.multiSet(writes);

    // Guard against Appwrite's 64 KB account prefs limit
    const lastSyncedAt = new Date().toISOString();
    const buildPrefsPayload = (
      themesCap: SyncedSavedTheme[],
      pledgesCap: SyncedHarambeePledge[]
    ): Record<string, unknown> => ({
      ...remotePrefs,
      ...(mergedThemeConfig ? { mobileThemeConfig: mergedThemeConfig } : {}),
      mobileSavedThemes: themesCap,
      pinnedTools: mergedPinned,
      translatorFavs: mergedFavs,
      translatorRecent: mergedRecent,
      lastVisitedLang: mergedLang,
      toolVisits: mergedVisits,
      learnProgress: mergedLearnSummary,
      hudumaBag: mergedHuduma,
      harambeePledges: pledgesCap,
      lastSyncedAt,
    });

    let nextPrefs = buildPrefsPayload(mergedSavedThemes, mergedPledges);
    if (JSON.stringify(nextPrefs).length > 60000 && mergedSavedThemes.length > 5) {
      mergedSavedThemes = mergedSavedThemes.slice(0, 5);
      nextPrefs = buildPrefsPayload(mergedSavedThemes, mergedPledges);
    }
    if (JSON.stringify(nextPrefs).length > 60000 && mergedPledges.length > 25) {
      mergedPledges = mergedPledges.slice(0, 25);
      nextPrefs = buildPrefsPayload(mergedSavedThemes, mergedPledges);
    }

    await appwriteRequest("/account/prefs", {
      method: "PATCH",
      body: { prefs: nextPrefs },
    });

    return {
      pinnedCount: mergedPinned.length,
      languagesSynced: Object.keys(mergedLearnSummary).length,
      themeSynced: Boolean(mergedThemeConfig),
      savedThemesCount: mergedSavedThemes.length,
      favoritesCount: mergedFavs.length,
      lastSyncedAt,
      syncedThemeConfig: mergedThemeConfig,
    };
  } catch {
    return null;
  }
}

export interface UploadedContributionAudio {
  fileId: string;
  viewUrl: string;
}

export async function uploadContributionAudioMobile(
  base64Data: string,
  mimeType: string,
  filename: string
): Promise<UploadedContributionAudio | null> {
  if (!base64Data || !base64Data.trim()) return null;
  try {
    const cleanMime = mimeType?.trim() || "audio/webm";
    const safeFilename = filename?.trim() || `pronunciation_${Date.now()}.webm`;
    const dataUri = base64Data.startsWith("data:")
      ? base64Data
      : `data:${cleanMime};base64,${base64Data}`;

    const fileId = `aud_${Date.now().toString(36)}_${Math.random()
      .toString(36)
      .slice(2, 8)}`;

    const formData = new FormData();
    formData.append("fileId", fileId);
    formData.append("file", {
      uri: dataUri,
      name: safeFilename,
      type: cleanMime,
    } as unknown as Blob);

    const creds = await getStoredCredentials();
    const headers: Record<string, string> = {
      "X-Appwrite-Project": APPWRITE_PROJECT_ID,
      "X-Appwrite-Response-Format": "1.6.0",
    };
    if (creds.sessionSecret) {
      headers["X-Appwrite-Session"] = creds.sessionSecret;
    } else if (creds.fallbackCookies) {
      headers["X-Fallback-Cookies"] = creds.fallbackCookies;
    }

    const res = await fetch(
      `${APPWRITE_ENDPOINT}/storage/buckets/${CONTRIBUTION_AUDIO_BUCKET_ID}/files`,
      {
        method: "POST",
        headers,
        body: formData,
        credentials: "include",
      }
    );

    if (!res.ok) return null;
    const data = (await res.json()) as Record<string, unknown>;
    const resolvedId =
      typeof data.$id === "string" && data.$id ? data.$id : fileId;
    const viewUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${CONTRIBUTION_AUDIO_BUCKET_ID}/files/${resolvedId}/view?project=${APPWRITE_PROJECT_ID}`;
    return { fileId: resolvedId, viewUrl };
  } catch {
    return null;
  }
}

export interface MobileContributionPayload {
  language: string;
  customLanguageName?: string;
  type?: "new_word" | "correction" | "pronunciation" | "reviewer";
  english: string;
  translation: string;
  pronunciation?: string;
  context?: string;
  category?: string;
  contributorName?: string;
  contributorEmail?: string;
  audioFileId?: string;
  audioMimeType?: string;
  submittedAt?: string;
}

export interface SubmitContributionResult {
  synced: boolean;
  documentId?: string;
  usedFallback?: boolean;
}

export async function submitContributionToAppwrite(
  payload: MobileContributionPayload
): Promise<SubmitContributionResult> {
  const documentId = `ctb_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
  const submittedAt = payload.submittedAt || new Date().toISOString();
  const baseLanguage = payload.language.trim() || "Swahili";
  const customLanguageName = payload.customLanguageName?.trim() || "";
  const audioFileId = payload.audioFileId?.trim() || "";
  const audioMimeType = payload.audioMimeType?.trim() || "";

  const fullData: Record<string, unknown> = {
    language: baseLanguage,
    type: payload.type || "new_word",
    english: payload.english.trim(),
    translation: payload.translation.trim(),
    pronunciation: payload.pronunciation?.trim() || null,
    context: payload.context?.trim() || null,
    category: payload.category?.trim() || "phrases",
    contributorName: payload.contributorName?.trim() || "Community Contributor",
    contributorEmail: payload.contributorEmail?.trim() || null,
    submittedAt,
    status: "pending",
  };

  if (customLanguageName) {
    fullData.customLanguageName = customLanguageName;
  }
  if (audioFileId) {
    fullData.audioFileId = audioFileId;
  }
  if (audioMimeType) {
    fullData.audioMimeType = audioMimeType;
  }

  const creds = await getStoredCredentials();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Appwrite-Project": APPWRITE_PROJECT_ID,
    "X-Appwrite-Response-Format": "1.6.0",
  };
  if (creds.sessionSecret) {
    headers["X-Appwrite-Session"] = creds.sessionSecret;
  } else if (creds.fallbackCookies) {
    headers["X-Fallback-Cookies"] = creds.fallbackCookies;
  }

  const url = `${APPWRITE_ENDPOINT}/databases/${APPWRITE_DATABASE_ID}/collections/${CONTRIBUTIONS_COLLECTION_ID}/documents`;

  const postDoc = async (docData: Record<string, unknown>) =>
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ documentId, data: docData }),
      credentials: "include",
    });

  try {
    const res = await postDoc(fullData);
    if (res.ok) {
      const json = (await res.json().catch(() => ({}))) as Record<
        string,
        unknown
      >;
      return {
        synced: true,
        documentId:
          typeof json.$id === "string" && json.$id ? json.$id : documentId,
        usedFallback: false,
      };
    }

    // Automatic fallback to core 11 attributes if Appwrite returns HTTP 400
    // (e.g. optional columns customLanguageName / audioFileId / audioMimeType not yet pushed)
    if (res.status === 400) {
      const contextParts: string[] = [];
      if (payload.context?.trim()) {
        contextParts.push(payload.context.trim());
      }
      if (customLanguageName) {
        contextParts.push(`[Custom Language: ${customLanguageName}]`);
      }
      if (audioFileId) {
        contextParts.push(
          `[AudioFileId: ${audioFileId}${audioMimeType ? ` (${audioMimeType})` : ""}]`
        );
      }

      const coreData: Record<string, unknown> = {
        language: baseLanguage,
        type: payload.type || "new_word",
        english: payload.english.trim(),
        translation: payload.translation.trim(),
        pronunciation: payload.pronunciation?.trim() || null,
        context: contextParts.length > 0 ? contextParts.join(" ") : null,
        category: payload.category?.trim() || "phrases",
        contributorName:
          payload.contributorName?.trim() || "Community Contributor",
        contributorEmail: payload.contributorEmail?.trim() || null,
        submittedAt,
        status: "pending",
      };

      const retryRes = await postDoc(coreData);
      if (retryRes.ok) {
        const json = (await retryRes.json().catch(() => ({}))) as Record<
          string,
          unknown
        >;
        return {
          synced: true,
          documentId:
            typeof json.$id === "string" && json.$id ? json.$id : documentId,
          usedFallback: true,
        };
      }
    }

    return { synced: false };
  } catch {
    return { synced: false };
  }
}
