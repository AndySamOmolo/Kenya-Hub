"use client";

import { useState, useEffect } from "react";
import { account, verifyAdminAccount } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import DynamicIcon from "@/components/ui/DynamicIcon";

const LOCKOUT_KEY = "kh_admin_login_lockout";
const MAX_ATTEMPTS = 5;
const COOLDOWN_MS = 60_000;

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lockedUntil, setLockedUntil] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LOCKOUT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.lockedUntil && parsed.lockedUntil > Date.now()) {
          setLockedUntil(parsed.lockedUntil);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockedUntil > Date.now()) {
      const secs = Math.ceil((lockedUntil - Date.now()) / 1000);
      setError(`Too many failed attempts. Please wait ${secs}s before trying again.`);
      return;
    }

    setLoading(true);
    setError("");

    try {
      await account.createEmailPasswordSession(email.trim(), password);
      const adminEmail = await verifyAdminAccount();
      if (!adminEmail) {
        await account.deleteSession("current").catch(() => {});
        setError("This account does not have administrator privileges.");
        return;
      }
      sessionStorage.removeItem(LOCKOUT_KEY);
      router.push("/admin");
    } catch {
      try {
        const raw = sessionStorage.getItem(LOCKOUT_KEY);
        const parsed = raw ? JSON.parse(raw) : { attempts: 0, lockedUntil: 0 };
        const attempts = (parsed.attempts || 0) + 1;
        const nextLock = attempts >= MAX_ATTEMPTS ? Date.now() + COOLDOWN_MS : 0;
        sessionStorage.setItem(
          LOCKOUT_KEY,
          JSON.stringify({ attempts: nextLock ? 0 : attempts, lockedUntil: nextLock })
        );
        if (nextLock) {
          setLockedUntil(nextLock);
          setError("Too many failed attempts. Locked for 60 seconds.");
        } else {
          setError("Invalid credentials");
        }
      } catch {
        setError("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <DynamicIcon emoji="🔐" className="w-6 h-6 text-gold" />
            <h1 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Admin Login
            </h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="input-field"
                placeholder="admin@kenyahub.me"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <p className="text-sm text-kenya-red-light" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading || lockedUntil > Date.now()}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}