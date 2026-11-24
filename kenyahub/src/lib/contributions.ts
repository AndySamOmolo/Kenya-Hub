import seedContributions from "@/data/contributions.json";
import { databases, storage } from "@/lib/appwrite";
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
  customLanguageName?: string;
  audioFileId?: string;
  audioUrl?: string;
  audioMimeType?: string;
  syncedToR2?: boolean;
  cloudDocId?: string;
}

export const CONTRIBUTION_AUDIO_BUCKET_ID = "contribution-audio";

const STORAGE_KEY = "kenyahub_contributions_v1";
const EVENT_NAME = "kenyahub_contributions_updated";
const DATABASE_ID = "kenyahub-db";
const CONTRIBUTIONS_COLLECTION_ID = "contributions";
const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "6a3290500003e21b7fe1";
const MAX_AUDIO_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB

/**
 * Build a direct Appwrite Storage view URL for an uploaded contribution audio file.
 */
export function getContributionAudioUrl(fileId: string): string {
  return `${APPWRITE_ENDPOINT}/storage/buckets/${CONTRIBUTION_AUDIO_BUCKET_ID}/files/${encodeURIComponent(
    fileId
  )}/view?project=${APPWRITE_PROJECT_ID}`;
}

function getExtensionForMime(mimeType: string): string {
  const normalized = mimeType.toLowerCase();
  if (normalized.includes("mp4") || normalized.includes("m4a")) return "m4a";
  if (normalized.includes("mpeg") || normalized.includes("mp3")) return "mp3";
  if (normalized.includes("ogg")) return "ogg";
  if (normalized.includes("wav")) return "wav";
  if (normalized.includes("aac")) return "aac";
  if (normalized.includes("flac")) return "flac";
  return "webm";
}

function isAppwriteSchemaError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const record = err as { code?: unknown; message?: unknown; response?: { code?: unknown } };
  const code = record.code ?? record.response?.code;
  const message = String(record.message ?? "");
  return (
    code === 400 ||
    /unknown attribute|invalid document structure|attribute not found/i.test(message)
  );
}

function buildFallbackContext(
  baseContext?: string,
  customLanguageName?: string,
  audioFileId?: string
): string | null {
  const parts: string[] = [];
  const trimmedBase = (baseContext || "").trim();
  if (trimmedBase) parts.push(trimmedBase);
  if (customLanguageName && customLanguageName.trim() && !/\[Custom Language:/i.test(trimmedBase)) {
    parts.push(`[Custom Language: ${customLanguageName.trim()}]`);
  }
  if (audioFileId && audioFileId.trim() && !/\[AudioFileId:/i.test(trimmedBase)) {
    parts.push(`[AudioFileId: ${audioFileId.trim()}]`);
  }
  return parts.length > 0 ? parts.join(" ") : null;
}

function parseContextMetadata(rawContext?: string): {
  cleanContext?: string;
  customLanguageName?: string;
  audioFileId?: string;
} {
  if (!rawContext) return {};
  const customLangMatch = rawContext.match(/\[Custom Language:\s*([^\]]+)\]/i);
  const audioIdMatch = rawContext.match(/\[AudioFileId:\s*([^\]]+)\]/i);
  const cleaned = rawContext
    .replace(/\[Custom Language:\s*[^\]]+\]/gi, "")
    .replace(/\[AudioFileId:\s*[^\]]+\]/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  return {
    cleanContext: cleaned || undefined,
    customLanguageName: customLangMatch?.[1]?.trim() || undefined,
    audioFileId: audioIdMatch?.[1]?.trim() || undefined,
  };
}

/**
 * Upload an optional pronunciation audio recording or file (capped at 5 MB)
 * to Appwrite Storage (`contribution-audio` bucket).
 */
export async function uploadContributionAudio(
  file: File | Blob,
  filename?: string
): Promise<{ fileId: string; viewUrl: string } | null> {
  if (typeof window === "undefined" || !file) return null;
  if (file.size <= 0 || file.size > MAX_AUDIO_UPLOAD_BYTES) {
    console.warn(
      `Contribution audio rejected: size ${file.size} bytes exceeds 5 MB limit or is empty.`
    );
    return null;
  }

  try {
    const mimeType = file.type || "audio/webm";
    const resolvedName =
      filename?.trim() ||
      (file instanceof File && file.name ? file.name : `contribution-${Date.now()}.${getExtensionForMime(mimeType)}`);
    const uploadFile =
      file instanceof File && file.name === resolvedName
        ? file
        : new File([file], resolvedName, { type: mimeType });

    const created = await storage.createFile(
      CONTRIBUTION_AUDIO_BUCKET_ID,
      ID.unique(),
      uploadFile
    );
    return {
      fileId: created.$id,
      viewUrl: getContributionAudioUrl(created.$id),
    };
  } catch (err) {
    console.error("Failed to upload contribution audio:", err);
    return null;
  }
}

/**
 * Retrieve contributions list across all Kenyan languages,
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

async function createCloudContribution(item: ContributionItem): Promise<string | null> {
  if (typeof window === "undefined") return null;

  const corePayload = {
    language: item.language,
    type: item.type,
    english: item.english,
    translation: item.translation,
    pronunciation: item.pronunciation || null,
    context: item.context || null,
    category: item.category || "phrases",
    contributorName: item.contributorName || "Community Contributor",
    contributorEmail: item.contributorEmail || null,
    submittedAt: item.submittedAt,
    status: "pending",
  };

  const extendedPayload: Record<string, unknown> = {
    ...corePayload,
    ...(item.customLanguageName ? { customLanguageName: item.customLanguageName } : {}),
    ...(item.audioFileId ? { audioFileId: item.audioFileId } : {}),
    ...(item.audioUrl ? { audioUrl: item.audioUrl } : {}),
    ...(item.audioMimeType ? { audioMimeType: item.audioMimeType } : {}),
  };

  try {
    const doc = await databases.createDocument(
      DATABASE_ID,
      CONTRIBUTIONS_COLLECTION_ID,
      ID.unique(),
      extendedPayload
    );
    return doc.$id;
  } catch (err) {
    if (isAppwriteSchemaError(err)) {
      try {
        const fallbackDoc = await databases.createDocument(
          DATABASE_ID,
          CONTRIBUTIONS_COLLECTION_ID,
          ID.unique(),
          {
            ...corePayload,
            context: buildFallbackContext(
              item.context,
              item.customLanguageName,
              item.audioFileId
            ),
          }
        );
        return fallbackDoc.$id;
      } catch {
        return null;
      }
    }
    return null;
  }
}

/**
 * Submit a new contribution asynchronously to Appwrite Cloud (with HTTP 400 schema fallback)
 * and persist locally with `cloudDocId` so it never duplicates on sync.
 */
export async function addContributionAsync(
  data: Omit<ContributionItem, "id" | "submittedAt" | "status" | "mergedToDictionary">
): Promise<ContributionItem> {
  const submittedAt = new Date().toISOString();
  const resolvedAudioUrl =
    data.audioUrl || (data.audioFileId ? getContributionAudioUrl(data.audioFileId) : undefined);

  const newItem: ContributionItem = {
    ...data,
    audioUrl: resolvedAudioUrl,
    id: `contrib-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    submittedAt,
    status: "pending",
    mergedToDictionary: false,
  };

  const cloudDocId = await createCloudContribution(newItem);
  if (cloudDocId) {
    newItem.cloudDocId = cloudDocId;
  }

  const current = getStoredContributions();
  saveStoredContributions([newItem, ...current]);
  return newItem;
}

/**
 * Submit a new contribution locally and asynchronously sync to Appwrite Cloud if available.
 * Kept synchronous for existing callers.
 */
export function addContribution(
  data: Omit<ContributionItem, "id" | "submittedAt" | "status" | "mergedToDictionary">
): ContributionItem {
  const current = getStoredContributions();
  const submittedAt = new Date().toISOString();
  const resolvedAudioUrl =
    data.audioUrl || (data.audioFileId ? getContributionAudioUrl(data.audioFileId) : undefined);

  const newItem: ContributionItem = {
    ...data,
    audioUrl: resolvedAudioUrl,
    id: `contrib-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    submittedAt,
    status: "pending",
    mergedToDictionary: false,
  };

  const updated = [newItem, ...current];
  saveStoredContributions(updated);

  if (typeof window !== "undefined") {
    createCloudContribution(newItem)
      .then((cloudDocId) => {
        if (!cloudDocId) return;
        const latest = getStoredContributions();
        let patched = false;
        const next = latest.map((item) => {
          if (item.id === newItem.id && !item.cloudDocId) {
            patched = true;
            return { ...item, cloudDocId };
          }
          return item;
        });
        if (patched) {
          saveStoredContributions(next);
        }
      })
      .catch(() => {
        // Offline or collection not yet pushed; local copy is already persisted
      });
  }

  return newItem;
}

/**
 * Fetch cloud contributions from Appwrite (paginated up to 200) and merge/update with local store.
 */
export async function syncCloudContributions(): Promise<ContributionItem[]> {
  const local = getStoredContributions();
  if (typeof window === "undefined") return local;

  try {
    const allDocs: Record<string, unknown>[] = [];
    const PAGE_SIZE = 100;
    const MAX_DOCS = 200;

    for (let offset = 0; offset < MAX_DOCS; offset += PAGE_SIZE) {
      const res = await databases.listDocuments(DATABASE_ID, CONTRIBUTIONS_COLLECTION_ID, [
        Query.orderDesc("submittedAt"),
        Query.limit(PAGE_SIZE),
        ...(offset > 0 ? [Query.offset(offset)] : []),
      ]);
      if (!res.documents || res.documents.length === 0) break;
      allDocs.push(...(res.documents as unknown as Record<string, unknown>[]));
      if (res.documents.length < PAGE_SIZE) break;
    }

    if (allDocs.length === 0) return local;

    const merged = [...local];
    let changed = false;

    const makeCompositeKey = (lang: string, eng: string, trans: string) =>
      `${lang.toLowerCase()}::${eng.toLowerCase()}::${trans.toLowerCase()}`;

    const indexByCloudId = new Map<string, number>();
    const indexByComposite = new Map<string, number>();

    merged.forEach((item, idx) => {
      if (item.cloudDocId) indexByCloudId.set(item.cloudDocId, idx);
      indexByCloudId.set(item.id, idx);
      indexByComposite.set(makeCompositeKey(item.language, item.english, item.translation), idx);
    });

    const newItems: ContributionItem[] = [];

    for (const d of allDocs) {
      const cloudDocId = String(d.$id || "");
      const lang = String(d.language || "Swahili");
      const eng = String(d.english || "");
      const trans = String(d.translation || "");
      const type = (d.type as ContributionItem["type"]) || "new_word";
      const rawContext = d.context ? String(d.context) : undefined;
      const parsedMeta = parseContextMetadata(rawContext);

      const customLanguageName =
        (d.customLanguageName ? String(d.customLanguageName) : undefined) ||
        parsedMeta.customLanguageName;
      const audioFileId =
        (d.audioFileId ? String(d.audioFileId) : undefined) || parsedMeta.audioFileId;
      const audioUrl =
        (d.audioUrl ? String(d.audioUrl) : undefined) ||
        (audioFileId ? getContributionAudioUrl(audioFileId) : undefined);
      const audioMimeType = d.audioMimeType ? String(d.audioMimeType) : undefined;
      const syncedToR2 = typeof d.syncedToR2 === "boolean" ? d.syncedToR2 : undefined;
      const cloudStatus = (d.status as ContributionItem["status"]) || "pending";
      const reviewedAt = d.reviewedAt ? String(d.reviewedAt) : undefined;
      const reviewedBy = d.reviewedBy ? String(d.reviewedBy) : undefined;
      const reviewNotes = d.reviewNotes ? String(d.reviewNotes) : undefined;
      const mergedToDictionary =
        typeof d.mergedToDictionary === "boolean" ? d.mergedToDictionary : undefined;

      const compositeKey = makeCompositeKey(lang, eng, trans);
      const existingIdx =
        (cloudDocId && indexByCloudId.has(cloudDocId)
          ? indexByCloudId.get(cloudDocId)
          : undefined) ?? indexByComposite.get(compositeKey);

      if (existingIdx !== undefined) {
        const currentItem = merged[existingIdx];
        const nextItem: ContributionItem = {
          ...currentItem,
          cloudDocId: cloudDocId || currentItem.cloudDocId,
          status: cloudStatus,
          customLanguageName: customLanguageName ?? currentItem.customLanguageName,
          audioFileId: audioFileId ?? currentItem.audioFileId,
          audioUrl: audioUrl ?? currentItem.audioUrl,
          audioMimeType: audioMimeType ?? currentItem.audioMimeType,
          syncedToR2: syncedToR2 ?? currentItem.syncedToR2,
          reviewedAt: reviewedAt ?? currentItem.reviewedAt,
          reviewedBy: reviewedBy ?? currentItem.reviewedBy,
          reviewNotes: reviewNotes ?? currentItem.reviewNotes,
          mergedToDictionary: mergedToDictionary ?? currentItem.mergedToDictionary,
        };

        if (
          nextItem.status !== currentItem.status ||
          nextItem.cloudDocId !== currentItem.cloudDocId ||
          nextItem.customLanguageName !== currentItem.customLanguageName ||
          nextItem.audioFileId !== currentItem.audioFileId ||
          nextItem.audioUrl !== currentItem.audioUrl ||
          nextItem.syncedToR2 !== currentItem.syncedToR2 ||
          nextItem.reviewedAt !== currentItem.reviewedAt ||
          nextItem.reviewedBy !== currentItem.reviewedBy ||
          nextItem.reviewNotes !== currentItem.reviewNotes ||
          nextItem.mergedToDictionary !== currentItem.mergedToDictionary
        ) {
          merged[existingIdx] = nextItem;
          changed = true;
        }
      } else if (type === "reviewer" || (eng && trans)) {
        const item: ContributionItem = {
          id: cloudDocId || `cloud-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          cloudDocId: cloudDocId || undefined,
          language: lang,
          type,
          english: eng,
          translation: trans,
          pronunciation: d.pronunciation ? String(d.pronunciation) : undefined,
          context: parsedMeta.cleanContext,
          category: d.category ? String(d.category) : "phrases",
          contributorName: String(d.contributorName || "Community Contributor"),
          contributorEmail: d.contributorEmail ? String(d.contributorEmail) : undefined,
          submittedAt: String(d.submittedAt || new Date().toISOString()),
          status: cloudStatus,
          reviewedAt,
          reviewedBy,
          reviewNotes,
          mergedToDictionary: mergedToDictionary ?? false,
          customLanguageName,
          audioFileId,
          audioUrl,
          audioMimeType,
          syncedToR2,
        };
        newItems.push(item);
        if (cloudDocId) indexByCloudId.set(cloudDocId, -1);
        indexByComposite.set(compositeKey, -1);
        changed = true;
      }
    }

    const finalList = newItems.length > 0 ? [...newItems, ...merged] : merged;
    if (changed) {
      saveStoredContributions(finalList);
    }
    return finalList;
  } catch {
    return local;
  }
}

async function persistCloudContributionUpdate(
  item: ContributionItem,
  updates: Partial<ContributionItem>
): Promise<void> {
  if (typeof window === "undefined") return;
  const docId = item.cloudDocId || item.id;
  if (!docId) return;

  const coreAllowedKeys: (keyof ContributionItem)[] = [
    "language",
    "type",
    "english",
    "translation",
    "pronunciation",
    "context",
    "category",
    "contributorName",
    "contributorEmail",
    "status",
  ];

  const extendedAllowedKeys: (keyof ContributionItem)[] = [
    ...coreAllowedKeys,
    "reviewedAt",
    "reviewedBy",
    "reviewNotes",
    "mergedToDictionary",
    "customLanguageName",
    "audioFileId",
    "audioUrl",
    "audioMimeType",
    "syncedToR2",
  ];

  const buildPayload = (keys: (keyof ContributionItem)[], useFallbackContext = false) => {
    const payload: Record<string, unknown> = {};
    for (const key of keys) {
      if (key in updates && updates[key] !== undefined) {
        payload[key] = updates[key];
      }
    }
    if (useFallbackContext && ("context" in updates || item.customLanguageName || item.audioFileId)) {
      payload.context = buildFallbackContext(
        updates.context ?? item.context,
        updates.customLanguageName ?? item.customLanguageName,
        updates.audioFileId ?? item.audioFileId
      );
    }
    return payload;
  };

  const extendedPayload = buildPayload(extendedAllowedKeys, false);
  if (Object.keys(extendedPayload).length === 0) return;

  try {
    await databases.updateDocument(
      DATABASE_ID,
      CONTRIBUTIONS_COLLECTION_ID,
      docId,
      extendedPayload
    );
  } catch (err) {
    if (isAppwriteSchemaError(err)) {
      const corePayload = buildPayload(coreAllowedKeys, true);
      if (Object.keys(corePayload).length === 0) return;
      try {
        await databases.updateDocument(
          DATABASE_ID,
          CONTRIBUTIONS_COLLECTION_ID,
          docId,
          corePayload
        );
      } catch {
        // Ignore offline or local-only seed record update errors
      }
    }
  }
}

/**
 * Update an existing contribution (e.g. status, edits, notes, review metadata)
 * locally and persist changes back to Appwrite Cloud asynchronously.
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
    persistCloudContributionUpdate(updatedItem, updates).catch(() => {
      // Ignore background cloud sync failures
    });
  }
  return updatedItem;
}

/**
 * Delete a contribution by ID locally and remove from Appwrite Cloud asynchronously.
 */
export function deleteContribution(id: string): boolean {
  const current = getStoredContributions();
  const targetItem = current.find((item) => item.id === id);
  const filtered = current.filter((item) => item.id !== id);
  if (filtered.length !== current.length) {
    saveStoredContributions(filtered);
    if (typeof window !== "undefined" && targetItem) {
      const docId = targetItem.cloudDocId || targetItem.id;
      if (docId) {
        databases
          .deleteDocument(DATABASE_ID, CONTRIBUTIONS_COLLECTION_ID, docId)
          .catch(() => {
            // Ignore offline or local-only seed record deletion errors
          });
      }
    }
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
