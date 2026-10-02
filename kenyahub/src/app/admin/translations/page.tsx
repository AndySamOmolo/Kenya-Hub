/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { account } from "@/lib/appwrite";
import Link from "next/link";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CustomSelect from "@/components/ui/CustomSelect";
import {
  Check,
  X,
  Search,
  RefreshCw,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Trash2,
  Edit2,
  Clock,
  ExternalLink,
  Copy,
  CheckCheck,
  FileCode,
  RotateCcw,
} from "lucide-react";
import {
  getStoredContributions,
  updateContribution,
  deleteContribution,
  subscribeContributions,
  resetStoredContributions,
  type ContributionItem,
} from "@/lib/contributions";

const STANDARD_CATEGORIES = [
  { id: "greetings", name: "Greetings & Farewells" },
  { id: "numbers", name: "Numbers" },
  { id: "family", name: "Family & Relationships" },
  { id: "food", name: "Food & Dining" },
  { id: "animals", name: "Animals & Pastoralism" },
  { id: "nature", name: "Nature & Environment" },
  { id: "home", name: "Home & Village" },
  { id: "phrases", name: "Common Phrases" },
  { id: "body", name: "Body & Health" },
  { id: "time", name: "Time & Calendar" },
  { id: "travel", name: "Travel & Directions" },
  { id: "shopping", name: "Market & Trade" },
  { id: "emergency", name: "Emergency & Safety" },
];

export default function AdminTranslationsPage() {
  const [user, setUser] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("pending");
  const [languageFilter, setLanguageFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Edit / Review modal state
  const [editingItem, setEditingItem] = useState<ContributionItem | null>(null);
  const [editEnglish, setEditEnglish] = useState("");
  const [editTranslation, setEditTranslation] = useState("");
  const [editPronunciation, setEditPronunciation] = useState("");
  const [editContext, setEditContext] = useState("");
  const [editCategory, setEditCategory] = useState("phrases");
  const [editNotes, setEditNotes] = useState("");

  // Export JSON modal state
  const [exportModalLanguage, setExportModalLanguage] = useState<string | null>(null);
  const [hasCopiedExport, setHasCopiedExport] = useState(false);

  const showToast = useCallback((text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3500);
  }, []);

  // Check auth
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const u = await account.get();
        setUser(u.email);
      } catch {
        // Allow dev mode access during local testing if cloud session is unauthenticated
        if (process.env.NODE_ENV === "development") {
          setUser("admin@kenyahub.local (Dev Mode)");
        } else {
          setUser(null);
        }
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Load contributions from store
  const loadContributions = useCallback(() => {
    setLoading(true);
    try {
      const items = getStoredContributions();
      setContributions(items);
    } catch (err) {
      console.error("Failed to load contributions:", err);
      showToast("Failed to fetch contributions", "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadContributions();
    const unsubscribe = subscribeContributions((items) => {
      setContributions(items);
    });
    return unsubscribe;
  }, [loadContributions]);

  // Unique languages in contributions
  const uniqueLanguages = useMemo(() => {
    const set = new Set<string>();
    contributions.forEach((c) => set.add(c.language));
    return Array.from(set).sort();
  }, [contributions]);

  // Filtered contributions
  const filteredContributions = useMemo(() => {
    return contributions.filter((item) => {
      if (statusFilter !== "all" && item.status !== statusFilter) return false;
      if (languageFilter !== "all" && item.language.toLowerCase() !== languageFilter.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesEnglish = item.english?.toLowerCase().includes(q);
        const matchesTranslation = item.translation?.toLowerCase().includes(q);
        const matchesContributor = item.contributorName?.toLowerCase().includes(q);
        const matchesLang = item.language?.toLowerCase().includes(q);
        if (!matchesEnglish && !matchesTranslation && !matchesContributor && !matchesLang) {
          return false;
        }
      }
      return true;
    });
  }, [contributions, statusFilter, languageFilter, searchQuery]);

  // Counts
  const stats = useMemo(() => {
    return {
      total: contributions.length,
      pending: contributions.filter((c) => c.status === "pending").length,
      approved: contributions.filter((c) => c.status === "approved").length,
      rejected: contributions.filter((c) => c.status === "rejected").length,
    };
  }, [contributions]);

  // Approve action
  const handleApprove = (item: ContributionItem, mergeToDict = true) => {
    setActionLoadingId(item.id);
    try {
      const updated = updateContribution(item.id, {
        status: "approved",
        mergedToDictionary: mergeToDict,
        category: item.category || "phrases",
        reviewedBy: user || "Admin Editor",
        reviewedAt: new Date().toISOString(),
      });

      if (updated) {
        showToast(
          mergeToDict
            ? `Approved "${item.english}" (${item.translation}) for ${item.language}!`
            : `Approved contribution for ${item.language}`
        );
      } else {
        showToast("Error updating contribution", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Error while approving", "error");
    } finally {
      setActionLoadingId(null);
    }
  };

  // Reject action
  const handleReject = (item: ContributionItem) => {
    const reason = prompt(`Reason for rejecting "${item.english}" in ${item.language}:`, "Duplicate or inaccurate spelling");
    if (reason === null) return;

    setActionLoadingId(item.id);
    try {
      const updated = updateContribution(item.id, {
        status: "rejected",
        reviewNotes: reason,
        reviewedBy: user || "Admin Editor",
        reviewedAt: new Date().toISOString(),
      });

      if (updated) {
        showToast(`Rejected contribution for ${item.language}`, "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to reject contribution", "error");
    } finally {
      setActionLoadingId(null);
    }
  };

  // Delete action
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this contribution?")) return;

    setActionLoadingId(id);
    try {
      const success = deleteContribution(id);
      if (success) {
        showToast("Contribution permanently removed");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to delete contribution", "error");
    } finally {
      setActionLoadingId(null);
    }
  };

  // Reset to seed data
  const handleResetSeed = () => {
    if (!confirm("Reset contributions back to default seed data? Any new additions will be restored to defaults.")) return;
    resetStoredContributions();
    showToast("Contributions reset to default seed data");
  };

  // Open edit modal
  const openEditModal = (item: ContributionItem) => {
    setEditingItem(item);
    setEditEnglish(item.english || "");
    setEditTranslation(item.translation || "");
    setEditPronunciation(item.pronunciation || "");
    setEditContext(item.context || "");
    setEditCategory(item.category || "phrases");
    setEditNotes(item.reviewNotes || "");
  };

  // Save edit
  const handleSaveEdit = (e: React.FormEvent, approveNow = false, mergeNow = false) => {
    e.preventDefault();
    if (!editingItem) return;

    setActionLoadingId(editingItem.id);
    try {
      const updated = updateContribution(editingItem.id, {
        english: editEnglish,
        translation: editTranslation,
        pronunciation: editPronunciation,
        context: editContext,
        category: editCategory,
        reviewNotes: editNotes,
        ...(approveNow ? {
          status: "approved",
          mergedToDictionary: mergeNow,
          reviewedBy: user || "Admin Editor",
          reviewedAt: new Date().toISOString(),
        } : {}),
      });

      if (updated) {
        setEditingItem(null);
        showToast(
          mergeNow
            ? `Updated, approved, and merged "${editEnglish}" into ${editingItem.language}!`
            : "Contribution details updated successfully"
        );
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to save changes", "error");
    } finally {
      setActionLoadingId(null);
    }
  };

  // Computed export JSON for approved items in selected language
  const exportJsonContent = useMemo(() => {
    if (!exportModalLanguage) return "";
    const approvedForLang = contributions.filter(
      (c) => c.status === "approved" && c.language.toLowerCase() === exportModalLanguage.toLowerCase()
    );

    const formattedEntries = approvedForLang.map((c) => ({
      english: c.english,
      translation: c.translation,
      pronunciation: c.pronunciation || "",
      context: c.context || "",
      audioFile: null,
      category: c.category || "phrases",
    }));

    return JSON.stringify(formattedEntries, null, 2);
  }, [contributions, exportModalLanguage]);

  const handleCopyExportJson = () => {
    if (!exportJsonContent) return;
    navigator.clipboard.writeText(exportJsonContent);
    setHasCopiedExport(true);
    setTimeout(() => setHasCopiedExport(false), 2500);
  };

  if (authLoading) {
    return <div className="max-w-6xl mx-auto px-4 py-8 text-text-muted">Verifying credentials...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <DynamicIcon emoji="🔐" className="w-12 h-12 text-gold mx-auto mb-3" />
        <h2 className="text-xl font-bold text-text-primary mb-2">Admin Sign In Required</h2>
        <p className="text-sm text-text-secondary mb-6">
          Please sign in to your administrator account to review and approve community language contributions.
        </p>
        <Link href="/admin/login" className="btn-primary inline-flex">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-bottom duration-200 ${
            toastMessage.type === "success"
              ? "bg-kenya-green text-white"
              : "bg-kenya-red text-white"
          }`}
        >
          {toastMessage.type === "success" ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin" className="text-xs text-gold hover:underline flex items-center gap-1 font-medium">
              <ArrowLeft className="w-3 h-3" />
              <span>Admin Dashboard</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2.5">
            <DynamicIcon emoji="🗣️" className="w-7 h-7 text-gold" />
            <span>Language Contributions Approval</span>
          </h1>
          <p className="text-xs text-text-muted mt-1">
            Review, verify, and approve community-submitted vocabulary into KenyaHub dictionaries
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={loadContributions}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated border border-border text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
          <button
            type="button"
            onClick={handleResetSeed}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated border border-border text-text-muted hover:text-text-primary flex items-center gap-1 transition-colors"
            title="Reset to default seed contributions"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
          <Link
            href="/tools/kenyan-translator"
            target="_blank"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gold text-kenya-black hover:bg-gold-light flex items-center gap-1.5 font-semibold transition-colors"
          >
            <span>Open Translator</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div
          onClick={() => setStatusFilter("all")}
          className={`bg-bg-card border rounded-xl p-4 cursor-pointer transition-all ${
            statusFilter === "all" ? "border-gold/50 bg-gold/5" : "border-border hover:border-gold/30"
          }`}
        >
          <p className="text-[0.65rem] uppercase tracking-wider text-text-muted font-medium">Total Submitted</p>
          <p className="text-2xl font-extrabold text-text-primary mt-1">{stats.total}</p>
        </div>
        <div
          onClick={() => setStatusFilter("pending")}
          className={`bg-bg-card border rounded-xl p-4 cursor-pointer transition-all ${
            statusFilter === "pending" ? "border-gold bg-gold/5 shadow-sm" : "border-border hover:border-gold/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[0.65rem] uppercase tracking-wider text-gold font-bold">Pending Review</p>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          </div>
          <p className="text-2xl font-extrabold text-gold mt-1">{stats.pending}</p>
        </div>
        <div
          onClick={() => setStatusFilter("approved")}
          className={`bg-bg-card border rounded-xl p-4 cursor-pointer transition-all ${
            statusFilter === "approved" ? "border-kenya-green bg-kenya-green/5 shadow-sm" : "border-border hover:border-kenya-green/50"
          }`}
        >
          <p className="text-[0.65rem] uppercase tracking-wider text-kenya-green-light font-bold">Approved</p>
          <p className="text-2xl font-extrabold text-kenya-green-light mt-1">{stats.approved}</p>
        </div>
        <div
          onClick={() => setStatusFilter("rejected")}
          className={`bg-bg-card border rounded-xl p-4 cursor-pointer transition-all ${
            statusFilter === "rejected" ? "border-kenya-red bg-kenya-red/5" : "border-border hover:border-kenya-red/50"
          }`}
        >
          <p className="text-[0.65rem] uppercase tracking-wider text-text-muted font-medium">Rejected</p>
          <p className="text-2xl font-extrabold text-text-secondary mt-1">{stats.rejected}</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-bg-card border border-border rounded-xl p-4 space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-bg-elevated p-1 rounded-lg border border-border overflow-x-auto">
            {[
              { id: "all", label: "All" },
              { id: "pending", label: `Pending (${stats.pending})` },
              { id: "approved", label: `Approved (${stats.approved})` },
              { id: "rejected", label: `Rejected (${stats.rejected})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  statusFilter === tab.id
                    ? "bg-gold text-kenya-black shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Language Filter */}
          <div className="flex items-center gap-2">
            <div className="w-full md:w-56">
              <CustomSelect
                value={languageFilter}
                onValueChange={setLanguageFilter}
                options={[
                  { value: "all", label: "All Languages" },
                  ...uniqueLanguages.map((l) => ({ value: l, label: l })),
                ]}
                id="admin-lang-filter"
              />
            </div>
            {languageFilter !== "all" && (
              <button
                type="button"
                onClick={() => setExportModalLanguage(languageFilter)}
                className="px-2.5 py-2 rounded-lg bg-bg-elevated border border-border text-xs text-gold font-medium hover:border-gold flex items-center gap-1.5 transition-colors shrink-0"
                title="View & copy approved JSON for this language"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">JSON</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by English term, native word, or contributor name..."
            className="input-field text-xs w-full !pl-10 !pr-10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 rounded-full bg-bg-elevated absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-text-muted hover:text-text-primary"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Contributions List */}
      <div className="space-y-3">
        {loading ? (
          <div className="bg-bg-card border border-border rounded-xl p-12 text-center text-text-muted text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-gold" />
            <span>Loading contributions...</span>
          </div>
        ) : filteredContributions.length === 0 ? (
          <div className="bg-bg-card border border-border rounded-xl p-12 text-center space-y-2">
            <DynamicIcon emoji="📭" className="w-10 h-10 mx-auto text-text-muted" />
            <p className="text-sm font-semibold text-text-primary">No contributions found</p>
            <p className="text-xs text-text-muted max-w-sm mx-auto">
              {searchQuery || statusFilter !== "all" || languageFilter !== "all"
                ? "Try adjusting your search query or filters."
                : "All caught up! No pending contributions waiting for review."}
            </p>
          </div>
        ) : (
          filteredContributions.map((item) => {
            const isPending = item.status === "pending";
            const isApproved = item.status === "approved";
            const isRejected = item.status === "rejected";
            const isActionLoading = actionLoadingId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-bg-card border rounded-xl p-4 sm:p-5 transition-all ${
                  isPending
                    ? "border-gold/30 hover:border-gold/60 shadow-sm"
                    : isApproved
                    ? "border-kenya-green/30"
                    : "border-border opacity-75"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  {/* Left: Info */}
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Language Badge */}
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{item.language}</span>
                      </span>

                      {/* Type Badge */}
                      <span className="px-2 py-0.5 rounded-md text-[0.65rem] bg-bg-elevated border border-border text-text-secondary uppercase font-semibold">
                        {item.type.replace("_", " ")}
                      </span>

                      {/* Category Badge */}
                      {item.category && (
                        <span className="px-2 py-0.5 rounded-md text-[0.65rem] bg-bg-elevated text-text-muted">
                          📁 {item.category}
                        </span>
                      )}

                      {/* Status Badge */}
                      {isPending && (
                        <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Pending Review</span>
                        </span>
                      )}
                      {isApproved && (
                        <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-kenya-green/15 text-kenya-green-light border border-kenya-green/30 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Approved</span>
                        </span>
                      )}
                      {isRejected && (
                        <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-kenya-red/15 text-kenya-red-light border border-kenya-red/30 flex items-center gap-1">
                          <X className="w-3 h-3" />
                          <span>Rejected</span>
                        </span>
                      )}

                      {/* Merged to live dictionary badge */}
                      {item.mergedToDictionary && (
                        <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold" />
                          <span>Approved &amp; Merged</span>
                        </span>
                      )}
                    </div>

                    {/* Word / Term Highlight */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <div className="bg-bg-elevated/60 rounded-lg p-2.5 border border-border/50">
                        <p className="text-[0.6rem] uppercase tracking-wider text-text-muted font-medium">English Meaning</p>
                        <p className="text-sm font-bold text-text-primary mt-0.5">{item.english || "N/A (Volunteer)"}</p>
                      </div>
                      <div className="bg-bg-elevated/60 rounded-lg p-2.5 border border-border/50">
                        <p className="text-[0.6rem] uppercase tracking-wider text-gold font-medium">
                          {item.language} Translation
                        </p>
                        <p className="text-sm font-bold text-gold mt-0.5">{item.translation || "N/A"}</p>
                        {item.pronunciation && (
                          <p className="text-[0.65rem] text-text-muted italic mt-0.5">/{item.pronunciation}/</p>
                        )}
                      </div>
                    </div>

                    {/* Context / Dialect / Notes */}
                    {item.context && (
                      <p className="text-xs text-text-secondary bg-bg-elevated/30 rounded-md px-2.5 py-1.5 border border-border/40">
                        <span className="text-text-muted font-medium">Notes / Dialect:</span> {item.context}
                      </p>
                    )}

                    {/* Contributor Metadata */}
                    <div className="flex flex-wrap items-center gap-3 text-[0.65rem] text-text-muted pt-1">
                      <span>Submitted by: <strong className="text-text-primary">{item.contributorName}</strong></span>
                      {item.contributorEmail && (
                        <span>Email: <a href={`mailto:${item.contributorEmail}`} className="text-gold hover:underline">{item.contributorEmail}</a></span>
                      )}
                      <span>Date: {new Date(item.submittedAt).toLocaleDateString("en-KE", { dateStyle: "medium" })}</span>
                      {item.reviewedBy && (
                        <span className="text-emerald-400">Reviewed by {item.reviewedBy}</span>
                      )}
                      {item.reviewNotes && (
                        <span className="text-amber-400">Note: &ldquo;{item.reviewNotes}&rdquo;</span>
                      )}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-end gap-2 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-border/60 shrink-0">
                    {isPending ? (
                      <>
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => handleApprove(item, true)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-kenya-green hover:bg-emerald-600 text-white transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50"
                          title="Approve and mark ready for dictionary"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve &amp; Merge</span>
                        </button>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={isActionLoading}
                            onClick={() => openEditModal(item)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated hover:bg-border text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
                            title="Edit details before approving"
                          >
                            <Edit2 className="w-3 h-3" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            disabled={isActionLoading}
                            onClick={() => handleReject(item)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-kenya-red-light hover:bg-kenya-red/10 border border-kenya-red/30 transition-colors flex items-center gap-1"
                          >
                            <X className="w-3 h-3" />
                            <span>Reject</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        {isApproved && !item.mergedToDictionary && (
                          <button
                            type="button"
                            disabled={isActionLoading}
                            onClick={() => handleApprove(item, true)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-gold/15 hover:bg-gold/25 text-gold border border-gold/30 transition-colors flex items-center gap-1"
                          >
                            <Sparkles className="w-3 h-3" />
                            <span>Merge</span>
                          </button>
                        )}
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => openEditModal(item)}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated hover:bg-border text-text-secondary transition-colors"
                          title="Edit contribution details"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => handleDelete(item.id)}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-kenya-red hover:bg-kenya-red/10 transition-colors"
                          title="Delete record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ═══════════════════════════════════════ */}
      {/* ── EDIT / VERIFY MODAL ── */}
      {/* ═══════════════════════════════════════ */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-kenya-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-bg-card border border-border rounded-2xl w-full max-w-lg p-5 sm:p-6 shadow-2xl relative my-auto animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setEditingItem(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center text-text-muted hover:text-text-primary"
            >
              <X className="w-4 h-4" />
            </button>

            <form onSubmit={(e) => handleSaveEdit(e, false, false)} className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  Edit &amp; Verify Contribution
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Language: <strong className="text-gold">{editingItem.language}</strong> (Submitted by {editingItem.contributorName})
                </p>
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  English Word / Phrase
                </label>
                <input
                  type="text"
                  value={editEnglish}
                  onChange={(e) => setEditEnglish(e.target.value)}
                  required
                  className="input-field text-sm w-full"
                />
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  {editingItem.language} Translation
                </label>
                <input
                  type="text"
                  value={editTranslation}
                  onChange={(e) => setEditTranslation(e.target.value)}
                  required
                  className="input-field text-sm w-full"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                    Pronunciation Guide
                  </label>
                  <input
                    type="text"
                    value={editPronunciation}
                    onChange={(e) => setEditPronunciation(e.target.value)}
                    className="input-field text-xs w-full"
                  />
                </div>
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                    Target Category
                  </label>
                  <CustomSelect
                    value={editCategory}
                    onValueChange={setEditCategory}
                    options={STANDARD_CATEGORIES.map((c) => ({ value: c.id, label: `${c.name} (${c.id})` }))}
                    id="edit-category-select"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  Context / Dialect Notes
                </label>
                <input
                  type="text"
                  value={editContext}
                  onChange={(e) => setEditContext(e.target.value)}
                  className="input-field text-xs w-full"
                />
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  Editorial Review Notes
                </label>
                <input
                  type="text"
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="e.g. Verified by native speaker, standardized spelling"
                  className="input-field text-xs w-full"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-text-primary bg-bg-elevated"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSaveEdit(e, true, true)}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-kenya-green hover:bg-emerald-600 text-white flex items-center gap-1.5 shadow-md"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save, Approve &amp; Merge</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════ */}
      {/* ── EXPORT APPROVED JSON MODAL ── */}
      {/* ═══════════════════════════════════════ */}
      {exportModalLanguage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-kenya-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-bg-card border border-border rounded-2xl w-full max-w-xl p-5 sm:p-6 shadow-2xl relative my-auto animate-in zoom-in-95 duration-150 space-y-4">
            <button
              type="button"
              onClick={() => setExportModalLanguage(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center text-text-muted hover:text-text-primary"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <DynamicIcon emoji="📜" className="w-5 h-5 text-gold" />
                <h3 className="text-base sm:text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  Approved Entries JSON — {exportModalLanguage}
                </h3>
              </div>
              <p className="text-xs text-text-muted mt-1">
                Copy and paste these approved entries directly into{" "}
                <code className="text-gold font-mono">src/data/dictionaries/{exportModalLanguage.toLowerCase()}.json</code>
              </p>
            </div>

            <div className="relative">
              <pre className="p-3 bg-bg-elevated border border-border rounded-xl text-[0.7rem] font-mono text-text-secondary overflow-x-auto max-h-72 select-all">
                {exportJsonContent || "// No approved words for this language yet"}
              </pre>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-[0.65rem] text-text-muted">
                {contributions.filter((c) => c.status === "approved" && c.language.toLowerCase() === exportModalLanguage.toLowerCase()).length} approved entry(ies)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExportModalLanguage(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-text-primary bg-bg-elevated"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleCopyExportJson}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gold text-kenya-black hover:bg-gold-light flex items-center gap-1.5 shadow-sm"
                >
                  {hasCopiedExport ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{hasCopiedExport ? "Copied!" : "Copy JSON"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

