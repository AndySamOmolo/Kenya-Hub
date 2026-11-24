"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ID, type Models } from "appwrite";
import { account } from "@/lib/appwrite";

export type AuthUser = Models.User<Models.Preferences>;

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  authError: string | null;
  refreshUser: () => Promise<void>;
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
  authError: null,
  refreshUser: async () => {},
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const refreshUser = useCallback(async () => {
    try {
      const current = await account.get();
      if (current && current.email) {
        setUser(current);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshUser();
  }, [refreshUser]);

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
    }
  }, []);

  const clearError = useCallback(() => setAuthError(null), []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      authError,
      refreshUser,
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
      authError,
      refreshUser,
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
