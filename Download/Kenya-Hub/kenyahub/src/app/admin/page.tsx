/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { account, verifyAdminAccount } from "@/lib/appwrite";
import Link from "next/link";
import DynamicIcon from "@/components/ui/DynamicIcon";
import {
  getContributionStats,
  subscribeContributions,
  syncCloudContributions,
} from "@/lib/contributions";

export default function AdminDashboard() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingContributions, setPendingContributions] = useState(0);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const email = await verifyAdminAccount();
        if (email) {
          setUser(email);
          await syncCloudContributions();
          setPendingContributions(getContributionStats().pending);
        } else if (
          process.env.NODE_ENV === "development" &&
          process.env.NEXT_PUBLIC_DEV_ADMIN === "true"
        ) {
          setUser("admin@kenyahub.local (Dev Mode)");
        } else {
          setUser(null);
        }
      } catch {
        if (
          process.env.NODE_ENV === "development" &&
          process.env.NEXT_PUBLIC_DEV_ADMIN === "true"
        ) {
          setUser("admin@kenyahub.local (Dev Mode)");
        } else {
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    setPendingContributions(getContributionStats().pending);
    const unsubscribe = subscribeContributions((items) => {
      setPendingContributions(getContributionStats(items).pending);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
    } catch {
      /* ignore */
    }
    window.location.href = "/admin/login";
  };

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-text-secondary">
          Please{" "}
          <Link href="/admin/login/" className="text-gold">
            sign in
          </Link>{" "}
          to access the admin panel.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex w-64 flex-col bg-bg-card border-r border-border md:fixed h-full p-5 space-y-2">
        <div className="text-sm font-bold text-gold mb-4 flex items-center gap-2">
          <DynamicIcon emoji="📊" className="w-5 h-5 text-gold" />
          <span>KenyaHub Admin</span>
        </div>
        <Link href="/admin/" className="px-3 py-2 rounded-lg text-xs font-semibold bg-gold/15 text-gold">
          Dashboard
        </Link>
        <Link href="/admin/posts/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Blog Posts
        </Link>
        <Link href="/admin/translations/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Translations
        </Link>
        <Link href="/admin/settings/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Settings
        </Link>
      </aside>
      <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div>
              <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2 flex items-center gap-2">
                <DynamicIcon emoji="📊" className="w-6 h-6 text-gold" /> Admin Dashboard
              </h1>
              <p className="text-text-muted">Manage your KenyaHub content and community contributions</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <span className="text-sm text-text-secondary break-all">{user}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg border border-kenya-red/50 text-kenya-red-light hover:bg-kenya-red/10 transition-colors text-sm font-medium w-full sm:w-auto text-center"
              >
                Sign Out
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/admin/posts/"
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <DynamicIcon emoji="📝" className="w-6 h-6 text-gold" />
                  <h2 className="text-lg font-semibold text-text-primary">Blog Posts</h2>
                </div>
                <p className="text-sm text-text-secondary">
                  Create, edit, and manage blog posts
                </p>
              </div>
              <span className="text-xs text-gold font-medium mt-4">Manage Posts →</span>
            </Link>

            <Link
              href="/admin/translations/"
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <DynamicIcon emoji="🗣️" className="w-6 h-6 text-gold" />
                    <h2 className="text-lg font-semibold text-text-primary">Language Contributions</h2>
                  </div>
                  {pendingContributions > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30">
                      {pendingContributions} Pending
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary">
                  Review, approve, and merge community-submitted vocabulary across all 23 Kenyan languages
                </p>
              </div>
              <span className="text-xs text-gold font-medium mt-4 flex items-center gap-1">
                <span>Review &amp; Approve</span>
                <span>→</span>
              </span>
            </Link>

            <Link
              href="/admin/settings/"
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <DynamicIcon emoji="⚙️" className="w-6 h-6 text-gold" />
                  <h2 className="text-lg font-semibold text-text-primary">Settings</h2>
                </div>
                <p className="text-sm text-text-secondary">
                  Security and account settings
                </p>
              </div>
              <span className="text-xs text-gold font-medium mt-4">View Settings →</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
