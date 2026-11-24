"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ID, type Models } from "appwrite";
import { account } from "@/lib/appwrite";

export type AuthUser = Models.User<Models.Preferences>;

export interface CloudSyncSummary {
  pinnedCount: number;
  languagesSynced: number;
  lastSyncedAt: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  syncing: boolean;
  syncSummary: CloudSyncSummary | null;
  authError: string | null;
  refreshUser: () => Promise<void>;
  syncUserData: () => Promise<CloudSyncSummary | null>;
  signInWithEmail: (email: string, password: string) => Promise<boolean>;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<boolean>;
  sendPasswordRecovery: (email: string) => Promise<boolean>;
  completePasswordRecovery: (userId: string, secret: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: false,
  syncing: false,
  syncSummary: null,
  authError: null,
  refreshUser: async () => {},
  syncUserData: async () => null,
  signInWithEmail: async () => false,
  signUpWithEmail: async () => false,
  sendPasswordRecovery: async () => false,
  completePasswordRecovery: async () => false,
  signOut: async () => {},
  clearError: () => {},
});

function formatAuthError(err: unknown, fallback: string): string {
  if (err && typeof err === "object") {
    const type = "type" in err ? String((err as { type?: unknown }).type || "") : "";
    const msg = "message" in err ? String((err as { message?: unknown }).message || "") : "";
    if (type === "user_already_exists" || /already exists/i.test(msg)) {
      return "An account with this email already exists. Try signing in or resetting your password.";
    }
    if (type === "user_invalid_credentials" || /invalid credentials/i.test(msg)) {
      return "Incorrect email or password. Double-check your details or use Forgot Password.";
    }
    if (type === "general_rate_limit_exceeded" || /rate limit/i.test(msg)) {
      return "Too many attempts. Please wait a minute and try again.";
    }
    if (/failed to fetch|network|paused|unavailable/i.test(msg)) {
      return "Account service is temporarily unavailable. Please try again shortly.";
    }
    if (msg) return msg;
  }
  return fallback;
}

function safeParseJson<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function mergeAndSyncWebPrefs(): Promise<CloudSyncSummary | null> {
  if (typeof window === "undefined") return null;
  try {
    const remotePrefs = (await account.getPrefs()) as Record<string, unknown>;

    // 1. Merge pinned tools (union of local + cloud)
    const localPinned = safeParseJson<unknown>(localStorage.getItem("kh-pinned-tools"), []);
    const localPinnedList = Array.isArray(localPinned)
      ? localPinned.filter((s): s is string => typeof s === "string")
      : [];
    const remotePinnedList = Array.isArray(remotePrefs.pinnedTools)
      ? remotePrefs.pinnedTools.filter((s): s is string => typeof s === "string")
      : [];
    const mergedPinned = Array.from(new Set([...remotePinnedList, ...localPinnedList])).slice(0, 50);
    localStorage.setItem("kh-pinned-tools", JSON.stringify(mergedPinned));
    if (JSON.stringify(mergedPinned) !== JSON.stringify(localPinnedList)) { window.dispatchEvent(new CustomEvent("kh-pinned-tools-updated", { detail: { source: "cloud-sync" } })); }

    // 2. Merge last visited language
    const localLang = localStorage.getItem("kenyahub_last_visited_lang") || "";
    const remoteLang = typeof remotePrefs.lastVisitedLang === "string" ? remotePrefs.lastVisitedLang : "";
    const mergedLang = localLang || remoteLang;
    if (mergedLang && !localLang) {
      localStorage.setItem("kenyahub_last_visited_lang", mergedLang);
    }

    // 3. Merge saved KSL signs
    const localKsl = safeParseJson<unknown>(localStorage.getItem("kenyahub_ksl_saved_v1"), []);
    const localKslList = Array.isArray(localKsl)
      ? localKsl.filter((s): s is string => typeof s === "string")
      : [];
    const remoteKslList = Array.isArray(remotePrefs.savedKslSigns)
      ? remotePrefs.savedKslSigns.filter((s): s is string => typeof s === "string")
      : [];
    const mergedKsl = Array.from(new Set([...remoteKslList, ...localKslList])).slice(0, 100);
    if (mergedKsl.length > 0) {
      localStorage.setItem("kenyahub_ksl_saved_v1", JSON.stringify(mergedKsl));
    }

    // 4. Merge tool visit counts (keep max per slug)
    const localVisits = safeParseJson<Record<string, number>>(localStorage.getItem("kh-tool-visits"), {});
    const remoteVisits =
      remotePrefs.toolVisits && typeof remotePrefs.toolVisits === "object" && !Array.isArray(remotePrefs.toolVisits)
        ? (remotePrefs.toolVisits as Record<string, number>)
        : {};
    const mergedVisits: Record<string, number> = { ...remoteVisits };
    if (localVisits && typeof localVisits === "object" && !Array.isArray(localVisits)) {
      for (const [slug, count] of Object.entries(localVisits)) {
        const n = Number(count) || 0;
        if (n > (Number(mergedVisits[slug]) || 0)) mergedVisits[slug] = n;
      }
    }
    localStorage.setItem("kh-tool-visits", JSON.stringify(mergedVisits));

    // 5. Merge per-language learning progress summaries (keep higher XP & union of completed lessons)
    const remoteLearn =
      remotePrefs.learnProgress && typeof remotePrefs.learnProgress === "object" && !Array.isArray(remotePrefs.learnProgress)
        ? (remotePrefs.learnProgress as Record<string, { xp?: number; streak?: number; completedLessons?: string[] }>)
        : {};
    const mergedLearn: Record<string, { xp: number; streak: number; completedLessons: string[] }> = {};
    for (const [lid, val] of Object.entries(remoteLearn)) {
      if (val && typeof val === "object") {
        mergedLearn[lid] = {
          xp: Number(val.xp) || 0,
          streak: Number(val.streak) || 0,
          completedLessons: Array.isArray(val.completedLessons)
            ? val.completedLessons.filter((x): x is string => typeof x === "string")
            : [],
        };
      }
    }
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("kh-learn-progress-")) continue;
      const lid = k.slice("kh-learn-progress-".length);
      const localObj = safeParseJson<Record<string, unknown> | null>(localStorage.getItem(k), null);
      if (!localObj || typeof localObj !== "object" || Array.isArray(localObj)) continue;
      const prev = mergedLearn[lid] || { xp: 0, streak: 0, completedLessons: [] };
      const localLessons = Array.isArray(localObj.completedLessons)
        ? localObj.completedLessons.filter((x): x is string => typeof x === "string")
        : [];
      const merged = {
        xp: Math.max(prev.xp, Number(localObj.xp) || 0),
        streak: Math.max(prev.streak, Number(localObj.streak) || 0),
        completedLessons: Array.from(new Set([...prev.completedLessons, ...localLessons])).slice(0, 200),
      };
      mergedLearn[lid] = merged;
      if (merged.xp > (Number(localObj.xp) || 0) || merged.completedLessons.length > localLessons.length) {
        localStorage.setItem(k, JSON.stringify({ ...localObj, ...merged }));
      }
    }

    const theme = localStorage.getItem("kh-theme") || (typeof remotePrefs.theme === "string" ? remotePrefs.theme : "dark");
    const lastSyncedAt = new Date().toISOString();

    await account.updatePrefs({
      ...remotePrefs,
      pinnedTools: mergedPinned,
      lastVisitedLang: mergedLang,
      savedKslSigns: mergedKsl,
      toolVisits: mergedVisits,
      learnProgress: mergedLearn,
      theme,
      lastSyncedAt,
    });

    return {
      pinnedCount: mergedPinned.length,
      languagesSynced: Object.keys(mergedLearn).length,
      lastSyncedAt,
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncSummary, setSyncSummary] = useState<CloudSyncSummary | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  const syncUserData = useCallback(async (): Promise<CloudSyncSummary | null> => {
    setSyncing(true);
    try {
      const summary = await mergeAndSyncWebPrefs();
      if (summary) setSyncSummary(summary);
      return summary;
    } finally {
      setSyncing(false);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const current = await account.get();
      if (current && current.email) {
        setUser(current);
        void syncUserData();
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [syncUserData]);

  useEffect(() => {
    void refreshUser();
  }, [refreshUser]);

  // Auto-sync pinned tool changes to Appwrite prefs when signed in
  useEffect(() => {
    if (!user || typeof window === "undefined") return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onPinnedChanged = (ev?: Event) => {
      if ((ev as CustomEvent)?.detail?.source === "cloud-sync") return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        void mergeAndSyncWebPrefs().then((s) => {
          if (s) setSyncSummary(s);
        });
      }, 1200);
    };
    window.addEventListener("kh-pinned-tools-updated", onPinnedChanged);
    return () => {
      window.removeEventListener("kh-pinned-tools-updated", onPinnedChanged);
      if (timer) clearTimeout(timer);
    };
  }, [user]);

  const signInWithEmail = useCallback(async (email: string, password: string): Promise<boolean> => {
    setAuthError(null);
    try {
      await account.createEmailPasswordSession(email.trim().toLowerCase(), password);
      await refreshUser();
      return true;
    } catch (err) {
      setAuthError(formatAuthError(err, "Invalid email or password."));
      return false;
    }
  }, [refreshUser]);

  const signUpWithEmail = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    setAuthError(null);
    const cleanEmail = email.trim().toLowerCase();
    try {
      await account.create(ID.unique(), cleanEmail, password, name.trim());
      await account.createEmailPasswordSession(cleanEmail, password);
      await refreshUser();
      return true;
    } catch (err) {
      setAuthError(formatAuthError(err, "Could not create account. Password must be at least 8 characters."));
      return false;
    }
  }, [refreshUser]);

  const sendPasswordRecovery = useCallback(async (email: string): Promise<boolean> => {
    setAuthError(null);
    const origin = typeof window !== "undefined" ? window.location.origin : "https://kenyahub.me";
    try {
      await account.createRecovery(email.trim().toLowerCase(), `${origin}/account/`);
      return true;
    } catch (err) {
      setAuthError(formatAuthError(err, "Could not send password reset email."));
      return false;
    }
  }, []);

  const completePasswordRecovery = useCallback(
    async (userId: string, secret: string, password: string): Promise<boolean> => {
      setAuthError(null);
      try {
        await account.updateRecovery(userId, secret, password);
        return true;
      } catch (err) {
        setAuthError(formatAuthError(err, "Reset link expired or invalid. Please request a new one."));
        return false;
      }
    },
    []
  );

  const signOut = useCallback(async () => {
    setAuthError(null);
    try {
      await account.deleteSession("current");
    } catch {
      // Clear local state even if session already expired
    } finally {
      setUser(null);
      setSyncSummary(null);
    }
  }, []);

  const clearError = useCallback(() => setAuthError(null), []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      syncing,
      syncSummary,
      authError,
      refreshUser,
      syncUserData,
      signInWithEmail,
      signUpWithEmail,
      sendPasswordRecovery,
      completePasswordRecovery,
      signOut,
      clearError,
    }),
    [
      user,
      loading,
      syncing,
      syncSummary,
      authError,
      refreshUser,
      syncUserData,
      signInWithEmail,
      signUpWithEmail,
      sendPasswordRecovery,
      completePasswordRecovery,
      signOut,
      clearError,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
