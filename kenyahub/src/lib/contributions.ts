import seedContributions from "@/data/contributions.json";

export interface ContributionItem {
  id: string;
  language: string;
  type: "new_word" | "correction" | "pronunciation" | "reviewer";
  english: string;
  translation: string;
  pronunciation?: string;
  context?: string;
  category?: string;
  contributorName: string;
  contributorEmail?: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  reviewedAt?: string;
  reviewedBy?: string;
  reviewNotes?: string;
  mergedToDictionary?: boolean;
}

const STORAGE_KEY = "kenyahub_contributions_v1";
const EVENT_NAME = "kenyahub_contributions_updated";

/**
 * Retrieve contributions list, initializing with seed data if not yet stored in localStorage.
 */
export function getStoredContributions(): ContributionItem[] {
  if (typeof window === "undefined") {
    return (seedContributions as ContributionItem[]) || [];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = (seedContributions as ContributionItem[]) || [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.error("Error reading stored contributions:", err);
  }

  return (seedContributions as ContributionItem[]) || [];
}

/**
 * Persist contributions to localStorage and broadcast an update event.
 */
export function saveStoredContributions(items: ContributionItem[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: items }));
  } catch (err) {
    console.error("Error saving contributions to localStorage:", err);
  }
}

/**
 * Submit a new contribution.
 */
export function addContribution(
  data: Omit<ContributionItem, "id" | "submittedAt" | "status" | "mergedToDictionary">
): ContributionItem {
  const current = getStoredContributions();
  const newItem: ContributionItem = {
    ...data,
    id: `contrib-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toISOString(),
    status: "pending",
    mergedToDictionary: false,
  };

  const updated = [newItem, ...current];
  saveStoredContributions(updated);
  return newItem;
}

/**
 * Update an existing contribution (e.g. status, edits, notes, review metadata).
 */
export function updateContribution(
  id: string,
  updates: Partial<ContributionItem>
): ContributionItem | null {
  const current = getStoredContributions();
  let updatedItem: ContributionItem | null = null;

  const updated = current.map((item) => {
    if (item.id === id) {
      updatedItem = {
        ...item,
        ...updates,
      };
      return updatedItem;
    }
    return item;
  });

  if (updatedItem) {
    saveStoredContributions(updated);
  }
  return updatedItem;
}

/**
 * Delete a contribution by ID.
 */
export function deleteContribution(id: string): boolean {
  const current = getStoredContributions();
  const filtered = current.filter((item) => item.id !== id);
  if (filtered.length !== current.length) {
    saveStoredContributions(filtered);
    return true;
  }
  return false;
}

/**
 * Reset stored contributions to default initial dataset.
 */
export function resetStoredContributions(): ContributionItem[] {
  const initial = (seedContributions as ContributionItem[]) || [];
  saveStoredContributions(initial);
  return initial;
}

/**
 * Calculate contribution counts.
 */
export function getContributionStats(items?: ContributionItem[]): {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
} {
  const list = items || getStoredContributions();
  return {
    total: list.length,
    pending: list.filter((i) => i.status === "pending").length,
    approved: list.filter((i) => i.status === "approved").length,
    rejected: list.filter((i) => i.status === "rejected").length,
  };
}

/**
 * Subscribe to contribution changes across components.
 */
export function subscribeContributions(callback: (items: ContributionItem[]) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = () => {
    callback(getStoredContributions());
  };

  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener("storage", handler);
  };
}
