"use client";

import { useState, useEffect } from "react";
import { account } from "@/lib/appwrite";
import Link from "next/link";

export default function AdminDashboard() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await account.get();
        setUser(user.email);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await account.deleteSession("current");
    window.location.href = "/admin/login";
  };

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-text-secondary">Please <Link href="/admin/login" className="text-gold">sign in</Link> to access the admin panel.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            📊 Admin Dashboard
          </h1>
          <p className="text-text-muted">Manage your KenyaHub content</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-text-secondary">{user}</span>
          <button onClick={handleLogout} className="btn-outline">
            Sign Out
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/admin/posts"
          className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📝</span>
            <h2 className="text-lg font-semibold text-text-primary">Blog Posts</h2>
          </div>
          <p className="text-sm text-text-secondary">
            Create, edit, and manage blog posts
          </p>
        </Link>
      </div>
    </div>
  );
}