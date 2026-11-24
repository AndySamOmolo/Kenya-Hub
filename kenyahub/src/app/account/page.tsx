"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, Mail, ShieldCheck, User, ArrowRight, BookOpen, Wrench, Eye, EyeOff, KeyRound, CheckCircle2, RefreshCw } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function AccountPage() {
  const {
    user,
    loading,
    syncing,
    syncSummary,
    authError,
    syncUserData,
    signInWithEmail,
    signUpWithEmail,
    sendPasswordRecovery,
    completePasswordRecovery,
    signOut,
    clearError,
  } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot" | "reset">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [recoveryParams, setRecoveryParams] = useState<{ userId: string; secret: string } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("userId");
    const sec = params.get("secret");
    if (uid && sec) {
      setRecoveryParams({ userId: uid, secret: sec });
      setMode("reset");
    }
  }, []);

  const switchMode = (next: "signin" | "signup" | "forgot") => {
    setMode(next);
    clearError();
    setLocalError(null);
    setSuccessMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMsg(null);
    clearError();

    if (mode === "forgot") {
      if (!email.trim() || !email.includes("@")) {
        setLocalError("Please enter a valid email address.");
        return;
      }
      setSubmitting(true);
      try {
        const ok = await sendPasswordRecovery(email);
        if (ok) {
          setSuccessMsg("Password reset link sent! Check your inbox and spam folder.");
        }
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (mode === "reset" && recoveryParams) {
      if (password.length < 8) {
        setLocalError("New password must be at least 8 characters.");
        return;
      }
      if (password !== confirmPassword) {
        setLocalError("Passwords do not match.");
        return;
      }
      setSubmitting(true);
      try {
        const ok = await completePasswordRecovery(recoveryParams.userId, recoveryParams.secret, password);
        if (ok) {
          setSuccessMsg("Password updated! You can now sign in with your new password.");
          setPassword("");
          setConfirmPassword("");
          setRecoveryParams(null);
          setMode("signin");
        }
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setLocalError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setLocalError("Password must be at least 8 characters.");
      return;
    }
    if (mode === "signup") {
      if (name.trim().length < 2) {
        setLocalError("Please enter your full name.");
        return;
      }
      if (password !== confirmPassword) {
        setLocalError("Passwords do not match.");
        return;
      }
    }

    setSubmitting(true);
    try {
      if (mode === "signin") {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(name, email, password);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="glass rounded-2xl p-8 border border-border-default">
          <div className="w-10 h-10 rounded-full border-2 border-gold border-t-transparent animate-spin mx-auto mb-4" />
          <p className="text-sm text-text-secondary">Checking your KenyaHub session...</p>
        </div>
      </div>
    );
  }

  if (user) {
    const initials = (user.name || user.email || "KH")
      .split(/\s+/)
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="glass rounded-2xl p-6 sm:p-8 border border-border-default shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-default">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 text-gold flex items-center justify-center text-xl font-bold font-[family-name:var(--font-outfit)]">
                {initials}
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  {user.name || "KenyaHub Member"}
                </h1>
                <p className="text-sm text-text-secondary flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                  {user.email}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <ShieldCheck className="w-3.5 h-3.5" />
              {user.emailVerification ? "Verified Account" : "Active Session"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            <Link
              href="/tools/learn/"
              className="flex items-center justify-between p-4 rounded-xl bg-bg-elevated border border-border-default hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-sm font-semibold text-text-primary">Language Courses</div>
                  <div className="text-xs text-text-secondary">Continue 23 Kenyan languages</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted" />
            </Link>
            <Link
              href="/tools/"
              className="flex items-center justify-between p-4 rounded-xl bg-bg-elevated border border-border-default hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-sm font-semibold text-text-primary">All 50 Kenya Tools</div>
                  <div className="text-xs text-text-secondary">Finance, civic & daily calculators</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted" />
            </Link>
          </div>

          <div className="mb-6 p-4 rounded-xl bg-bg-elevated/80 border border-border-default flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-text-primary">Cloud Account Sync</div>
              <div className="text-xs text-text-secondary mt-0.5">
                {syncSummary
                  ? `Synced ${syncSummary.pinnedCount} pinned tools & ${syncSummary.languagesSynced} language courses to your Appwrite account.`
                  : "Pinned tools, language progress, KSL signs & preferences sync automatically with your account."}
              </div>
            </div>
            <button
              type="button"
              disabled={syncing}
              onClick={() => void syncUserData()}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gold/15 text-gold border border-gold/30 hover:bg-gold/25 disabled:opacity-50 transition-colors cursor-pointer shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
              {syncing ? "Syncing..." : "Sync Now"}
            </button>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border-default">
            <span className="text-xs text-text-muted">Signed in via Appwrite Cloud</span>
            <button
              type="button"
              onClick={() => void signOut()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-red-500/10 text-red-400 border border-red-500/25 hover:bg-red-500/20 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="glass rounded-2xl p-6 sm:p-8 border border-border-default shadow-lg">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center mx-auto mb-3">
            {mode === "forgot" || mode === "reset" ? <KeyRound className="w-6 h-6" /> : <User className="w-6 h-6" />}
          </div>
          <h1 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
            {mode === "signin"
              ? "Sign in to KenyaHub"
              : mode === "signup"
              ? "Create your KenyaHub account"
              : mode === "forgot"
              ? "Reset your password"
              : "Choose a new password"}
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            {mode === "forgot"
              ? "Enter your email and we'll send a password reset link."
              : mode === "reset"
              ? "Enter a new password of at least 8 characters."
              : "Sign in or create an account with your email and password."}
          </p>
        </div>

        {(authError || localError) && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-xs text-red-300">
            {localError || authError}
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{successMsg}</span>
          </div>
        )}

        {(mode === "signin" || mode === "signup") && (
          <>
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-bg-elevated border border-border-default mb-5">
              <button
                type="button"
                onClick={() => switchMode("signin")}
                className={`py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  mode === "signin" ? "bg-gold text-black" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={`py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  mode === "signup" ? "bg-gold text-black" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Create Account
              </button>
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5">Full Name</label>
              <input
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Wanjiku Kamau"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-elevated border border-border-default text-sm text-text-primary focus:outline-none focus:border-gold"
              />
            </div>
          )}

          {mode !== "reset" && (
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5">Email Address</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-elevated border border-border-default text-sm text-text-primary focus:outline-none focus:border-gold"
              />
            </div>
          )}

          {mode !== "forgot" && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-text-secondary">
                  {mode === "reset" ? "New Password" : "Password"}
                </label>
                {mode === "signin" && (
                  <button
                    type="button"
                    onClick={() => switchMode("forgot")}
                    className="text-xs font-medium text-gold hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl bg-bg-elevated border border-border-default text-sm text-text-primary focus:outline-none focus:border-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {(mode === "signup" || mode === "reset") && (
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full px-3.5 py-2.5 rounded-xl bg-bg-elevated border border-border-default text-sm text-text-primary focus:outline-none focus:border-gold"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-xl bg-gold text-black font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
          >
            {submitting
              ? "Please wait..."
              : mode === "signin"
              ? "Sign In"
              : mode === "signup"
              ? "Create Account"
              : mode === "forgot"
              ? "Send Reset Link"
              : "Update Password"}
          </button>

          {(mode === "forgot" || mode === "reset") && (
            <button
              type="button"
              onClick={() => switchMode("signin")}
              className="w-full py-2 text-xs font-semibold text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              ← Back to Sign In
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
