"use client";

import { useState, useEffect } from "react";
import { account } from "@/lib/appwrite";
import Link from "next/link";

export default function AdminSettingsPage() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const u = await account.get();
        setUser(u.email);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setUpdating(true);
    setError("");
    setSuccess("");

    try {
      await account.updatePassword(newPassword, oldPassword);
      setSuccess("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Failed to update password: ${message}`);
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      window.location.href = "/admin/login";
    } catch {
      // Fallback if session already invalid
      window.location.href = "/admin/login";
    }
  };

  if (loading) {
    return <div className="max-w-md mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-8 text-center">
        <p className="text-text-secondary mb-4">Please sign in to access settings.</p>
        <Link href="/admin/login" className="btn-primary">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            ⚙️ Settings
          </h1>
          <Link href="/admin/posts" className="text-sm text-gold hover:text-gold-light">
            ← Back to Posts
          </Link>
        </div>
        <p className="text-text-muted text-sm">Signed in as <strong className="text-text-primary">{user}</strong></p>
      </header>

      <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Change Password</h2>
        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="oldPassword">
              Current Password
            </label>
            <input
              id="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="newPassword">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="input-field"
            />
          </div>

          {error && <p className="text-sm text-kenya-red-light">{error}</p>}
          {success && <p className="text-sm text-kenya-green-light">{success}</p>}

          <button
            type="submit"
            disabled={updating || !oldPassword || !newPassword || !confirmPassword}
            className="btn-primary w-full disabled:opacity-50 mt-2"
          >
            {updating ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>

      <div className="bg-bg-card border border-kenya-red/30 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-text-primary mb-2">Logout</h2>
        <p className="text-sm text-text-secondary mb-4">Sign out of your admin session on this device.</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 w-full rounded-lg border border-kenya-red/50 text-kenya-red-light hover:bg-kenya-red/10 transition-colors text-sm font-medium"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
