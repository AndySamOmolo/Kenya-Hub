import seedContributions from "@/data/contributions.json";
import { databases } from "@/lib/appwrite";
import { ID, Query } from "appwrite";

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
const DATABASE_ID = "kenyahub-db";
const CONTRIBUTIONS_COLLECTION_ID = "contributions";

/**
 * Retrieve contributions list across all 23 Kenyan languages,
 * initializing with seed data if not yet stored in localStorage.
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
 * Submit a new contribution locally and asynchronously sync to Appwrite Cloud if available.
 */
export function addContribution(
  data: Omit<ContributionItem, "id" | "submittedAt" | "status" | "mergedToDictionary">
): ContributionItem {
  const current = getStoredContributions();
  const submittedAt = new Date().toISOString();
  const newItem: ContributionItem = {
    ...data,
    id: `contrib-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    submittedAt,
    status: "pending",
    mergedToDictionary: false,
  };

  const updated = [newItem, ...current];
  saveStoredContributions(updated);

  if (typeof window !== "undefined") {
    databases
      .createDocument(DATABASE_ID, CONTRIBUTIONS_COLLECTION_ID, ID.unique(), {
        language: newItem.language,
        type: newItem.type,
        english: newItem.english,
        translation: newItem.translation,
        pronunciation: newItem.pronunciation || null,
        context: newItem.context || null,
        category: newItem.category || "phrases",
        contributorName: newItem.contributorName || "Community Contributor",
        contributorEmail: newItem.contributorEmail || null,
        submittedAt: newItem.submittedAt,
        status: "pending",
      })
      .catch(() => {
        // Offline or collection not yet pushed; local copy is already persisted
      });
  }

  return newItem;
}

/**
 * Fetch cloud contributions from Appwrite (when authenticated as admin) and merge with local store.
 */
export async function syncCloudContributions(): Promise<ContributionItem[]> {
  const local = getStoredContributions();
  if (typeof window === "undefined") return local;

  try {
    const res = await databases.listDocuments(DATABASE_ID, CONTRIBUTIONS_COLLECTION_ID, [
      Query.orderDesc("submittedAt"),
      Query.limit(100),
    ]);
    if (!res.documents || res.documents.length === 0) return local;

    const existingKeys = new Set(
      local.map(
        (i) =>
          `${i.language.toLowerCase()}::${i.english.toLowerCase()}::${i.translation.toLowerCase()}`
      )
    );
    const merged = [...local];
    let added = false;

    for (const doc of res.documents) {
      const d = doc as Record<string, unknown>;
      const lang = String(d.language || "swahili");
      const eng = String(d.english || "");
      const trans = String(d.translation || "");
      const key = `${lang.toLowerCase()}::${eng.toLowerCase()}::${trans.toLowerCase()}`;
      if (eng && trans && !existingKeys.has(key)) {
        existingKeys.add(key);
        merged.unshift({
          id: String(d.$id || `cloud-${Date.now()}`),
          language: lang,
          type: (d.type as ContributionItem["type"]) || "new_word",
          english: eng,
          translation: trans,
          pronunciation: d.pronunciation ? String(d.pronunciation) : undefined,
          context: d.context ? String(d.context) : undefined,
          category: d.category ? String(d.category) : "phrases",
          contributorName: String(d.contributorName || "Community Contributor"),
          contributorEmail: d.contributorEmail ? String(d.contributorEmail) : undefined,
          submittedAt: String(d.submittedAt || new Date().toISOString()),
          status: (d.status as ContributionItem["status"]) || "pending",
          mergedToDictionary: false,
        });
        added = true;
      }
    }

    if (added) {
      saveStoredContributions(merged);
    }
    return merged;
  } catch {
    return local;
  }
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
