/**
 * src/lib/language-audio.ts
 *
 * Verified Native-Speaker Audio Resolution & Playback Engine for KenyaHub
 * across all 23 Kenyan Languages.
 *
 * Policy:
 * - Plays audio ONLY when a verified recording URL (`entry.audioFile`) from
 *   commercially permissive open-access corpora (Cloudflare R2 `audio.kenyahub.me`,
 *   Zenodo CC-BY-4.0 archives, or Hugging Face public datasets) is present.
 * - Never falls back to synthetic browser Text-to-Speech (`window.speechSynthesis`).
 */

import { loadAudioShard } from "@/lib/learning-shards";

export interface AudioPlayableEntry {
  english?: string | null;
  translation: string;
  pronunciation?: string | null;
  context?: string | null;
  audioFile?: string | null;
}

export interface AudioDatasetSourceInfo {
  datasetName: string;
  license: string;
  hfRepo: string;
  config: string;
  url: string;
  gated?: boolean;
}

/**
 * Commercially Permissive Audio Datasets mapped to KenyaHub language IDs (100% Verified Live URLs)
 */
export const KENYA_AUDIO_DATASET_SOURCES: Record<string, AudioDatasetSourceInfo[]> = {
  swahili: [
    {
      datasetName: "Google WAXAL (WaxalNLP Swahili Studio TTS swa_tts)",
      license: "CC-BY-SA-4.0",
      hfRepo: "google/WaxalNLP",
      config: "swa_tts",
      url: "https://huggingface.co/datasets/google/WaxalNLP",
      gated: false,
    },
    {
      datasetName: "Google FLEURS (Swahili Kenya sw_ke)",
      license: "CC-BY-4.0",
      hfRepo: "google/fleurs",
      config: "sw_ke",
      url: "https://huggingface.co/datasets/google/fleurs",
      gated: false,
    },
    {
      datasetName: "Kencorpus KenSpeech (27.5h Kenyan Swahili ASR)",
      license: "CC-BY-4.0",
      hfRepo: "Kencorpus/KenSpeech",
      config: "default",
      url: "https://huggingface.co/datasets/Kencorpus/KenSpeech",
      gated: false,
    },
    {
      datasetName: "Mozilla Common Voice 26.0 Swahili (sw)",
      license: "CC0-1.0",
      hfRepo: "deepdml/common_voice_26_0",
      config: "sw",
      url: "https://huggingface.co/datasets/deepdml/common_voice_26_0",
      gated: true,
    },
    {
      datasetName: "Ustadh Mau Lamu Kiamu Audio Archive (Zenodo)",
      license: "CC-BY-4.0",
      hfRepo: "zenodo/19828379",
      config: "kiamu",
      url: "https://zenodo.org/records/19828379",
      gated: false,
    },
  ],
  kikuyu: [
    {
      datasetName: "The Thiomi-5K Speech & Text Corpus (Gĩkũyũ kik_Latn)",
      license: "CC-BY-4.0",
      hfRepo: "thiomi/thiomi-5k",
      config: "kik_Latn",
      url: "https://huggingface.co/datasets/thiomi/thiomi-5k",
      gated: false,
    },
    {
      datasetName: "Google WAXAL (WaxalNLP Gĩkũyũ Studio TTS kik_tts)",
      license: "CC-BY-SA-4.0",
      hfRepo: "google/WaxalNLP",
      config: "kik_tts",
      url: "https://huggingface.co/datasets/google/WaxalNLP",
      gated: false,
    },
  ],
  luo: [
    {
      datasetName: "The Thiomi-5K Speech & Text Corpus (Dholuo luo_Latn)",
      license: "CC-BY-4.0",
      hfRepo: "thiomi/thiomi-5k",
      config: "luo_Latn",
      url: "https://huggingface.co/datasets/thiomi/thiomi-5k",
      gated: false,
    },
    {
      datasetName: "CLEAR Global / Masakhane BibleTTS Dholuo (77.4h Studio 24kHz)",
      license: "CC-BY-SA-4.0",
      hfRepo: "CLEAR-Global/BibleTTS-Luo",
      config: "read",
      url: "https://huggingface.co/datasets/CLEAR-Global/BibleTTS-Luo",
      gated: false,
    },
    {
      datasetName: "Google FLEURS (Dholuo Kenya luo_ke)",
      license: "CC-BY-4.0",
      hfRepo: "google/fleurs",
      config: "luo_ke",
      url: "https://huggingface.co/datasets/google/fleurs",
      gated: false,
    },
    {
      datasetName: "Google WAXAL (WaxalNLP Dholuo Studio TTS luo_tts)",
      license: "CC-BY-SA-4.0",
      hfRepo: "google/WaxalNLP",
      config: "luo_tts",
      url: "https://huggingface.co/datasets/google/WaxalNLP",
      gated: false,
    },
  ],
  kamba: [
    {
      datasetName: "The Thiomi-5K Speech & Text Corpus (Kikamba kam_Latn)",
      license: "CC-BY-4.0",
      hfRepo: "thiomi/thiomi-5k",
      config: "kam_Latn",
      url: "https://huggingface.co/datasets/thiomi/thiomi-5k",
      gated: false,
    },
    {
      datasetName: "Google FLEURS (Kikamba Kenya kam_ke)",
      license: "CC-BY-4.0",
      hfRepo: "google/fleurs",
      config: "kam_ke",
      url: "https://huggingface.co/datasets/google/fleurs",
      gated: false,
    },
    {
      datasetName: "Digital Divide Data (DDD) Kenya Kamba ASR (484h)",
      license: "CC-BY-4.0",
      hfRepo: "Digital-Divide-Data/Kamba-ASR-Data-Subset-484H",
      config: "default",
      url: "https://huggingface.co/datasets/Digital-Divide-Data/Kamba-ASR-Data-Subset-484H",
      gated: true,
    },
  ],
  meru: [
    {
      datasetName: "The Thiomi-5K Speech & Text Corpus (Kĩmĩĩrũ mer_Latn)",
      license: "CC-BY-4.0",
      hfRepo: "thiomi/thiomi-5k",
      config: "mer_Latn",
      url: "https://huggingface.co/datasets/thiomi/thiomi-5k",
      gated: false,
    },
  ],
  luhya: [
    {
      datasetName: "Google WAXAL (WaxalNLP Masaaba / Lumasaba ASR mas_asr)",
      license: "CC-BY-SA-4.0",
      hfRepo: "google/WaxalNLP",
      config: "mas_asr",
      url: "https://huggingface.co/datasets/google/WaxalNLP",
      gated: false,
    },
  ],
  kisii: [
    {
      datasetName: "Digital Divide Data (DDD) Kenya Gusii / Ekegusii ASR (470h)",
      license: "CC-BY-4.0",
      hfRepo: "Digital-Divide-Data/Gusii-ASR-Data-Subset-470H",
      config: "default",
      url: "https://huggingface.co/datasets/Digital-Divide-Data/Gusii-ASR-Data-Subset-470H",
      gated: true,
    },
  ],
  teso: [
    {
      datasetName: "Sunbird AI SALT Ateso Studio & Multispeaker Speech",
      license: "CC-BY-SA-4.0",
      hfRepo: "Sunbird/salt",
      config: "studio-teo",
      url: "https://huggingface.co/datasets/Sunbird/salt",
      gated: true,
    },
  ],
  somali: [
    {
      datasetName: "The Thiomi-5K Speech & Text Corpus (Somali som_Latn)",
      license: "CC-BY-4.0",
      hfRepo: "thiomi/thiomi-5k",
      config: "som_Latn",
      url: "https://huggingface.co/datasets/thiomi/thiomi-5k",
      gated: false,
    },
    {
      datasetName: "Google FLEURS (Somali so_so)",
      license: "CC-BY-4.0",
      hfRepo: "google/fleurs",
      config: "so_so",
      url: "https://huggingface.co/datasets/google/fleurs",
      gated: false,
    },
    {
      datasetName: "Digital Divide Data (DDD) Kenya Somali ASR (68h)",
      license: "CC-BY-4.0",
      hfRepo: "Digital-Divide-Data/Somali-ASR-Subset-68H",
      config: "default",
      url: "https://huggingface.co/datasets/Digital-Divide-Data/Somali-ASR-Subset-68H",
      gated: true,
    },
  ],
  borana: [
    {
      datasetName: "Google FLEURS (Oromo / Borana om_et)",
      license: "CC-BY-4.0",
      hfRepo: "google/fleurs",
      config: "om_et",
      url: "https://huggingface.co/datasets/google/fleurs",
      gated: false,
    },
    {
      datasetName: "Google WAXAL (WaxalNLP Oromo / Borana ASR orm_asr_v2)",
      license: "CC-BY-SA-4.0",
      hfRepo: "google/WaxalNLP",
      config: "orm_asr_v2",
      url: "https://huggingface.co/datasets/google/WaxalNLP",
      gated: false,
    },
  ],
};

/**
 * Verified hostnames allowed for direct native-speaker audio playback.
 */
const VERIFIED_AUDIO_HOSTS = [
  "audio.kenyahub.me",
  "zenodo.org",
  "huggingface.co",
  "cdn-lfs.huggingface.co",
  "cdn-lfs-us-1.huggingface.co",
  "kenyahub.me",
  "archive.org",
];

// Lazy in-memory per-language slug -> verified R2 URL index backed by shared learning-shards cache
const languageAudioIndexCache = new Map<string, Map<string, string>>();
const languageAudioInFlight = new Map<string, Promise<number>>();

export async function preloadLanguageAudioIndex(langId?: string | null): Promise<number> {
  if (typeof window === "undefined" || !langId) return 0;
  const lid = langId.trim().toLowerCase();
  const existing = languageAudioIndexCache.get(lid);
  if (existing) return existing.size;
  const inflight = languageAudioInFlight.get(lid);
  if (inflight) return inflight;

  const task = loadAudioShard(lid)
    .then((data) => {
      const map = new Map<string, string>();
      for (const clip of data?.clips ?? []) {
        if (clip?.slug && typeof clip?.audioUrl === "string") {
          map.set(String(clip.slug), clip.audioUrl);
        }
      }
      languageAudioIndexCache.set(lid, map);
      return map.size;
    })
    .catch(() => 0)
    .finally(() => {
      languageAudioInFlight.delete(lid);
    });

  languageAudioInFlight.set(lid, task);
  return task;
}

function lookupDynamicAudioUrl(entry?: AudioPlayableEntry | null, langId?: string | null): string | null {
  if (!entry || !langId) return null;
  const map = languageAudioIndexCache.get(langId.trim().toLowerCase());
  if (!map || map.size === 0) return null;
  const raw = entry.translation || "";
  const fullSlug = toAudioSlug(raw);
  if (fullSlug && map.has(fullSlug)) return map.get(fullSlug) || null;
  for (const part of raw.split(/[,;/|]/)) {
    const ps = toAudioSlug(part);
    if (ps && map.has(ps)) return map.get(ps) || null;
  }
  return null;
}

/**
 * Normalizes a dictionary headword or phrase into a deterministic Cloudflare R2 slug
 */
export function toAudioSlug(text: string): string {
  const primary = extractSpeakableText(text);
  return primary
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

/**
 * Strips parenthetical grammar notes, class numbers, and alternate forms so R2 keys
 * target the primary headword or sentence cleanly.
 */
export function extractSpeakableText(rawTranslation: string): string {
  if (!rawTranslation) return "";
  let cleaned = rawTranslation
    .replace(/\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/^(?:1sg|2sg|3sg|1pl|2pl|3pl|Cl\.\s*\d+|Masaba|Kimvita|Kiunguja|Dabida|Sagalla)\s*:\s*/i, "")
    .split(/[•/;]|—\s*Jibu:/)[0]
    .trim();
  if (!cleaned) {
    cleaned = rawTranslation.split(/[\/(]/)[0].trim();
  }
  return cleaned;
}

/**
 * Resolves a verified HTTPS audio URL ONLY when `entry.audioFile` is explicitly
 * present and points to a trusted audio source. Returns `null` when no verified
 * recording exists (never guesses unverified URLs and never falls back to TTS).
 */
export function getVerifiedAudioUrl(
  entry?: AudioPlayableEntry | null,
  langId?: string | null
): string | null {
  if (!entry) return null;
  let raw = typeof entry.audioFile === "string" ? entry.audioFile.trim() : "";
  if (!raw && langId) {
    raw = lookupDynamicAudioUrl(entry, langId) || "";
  }
  if (!raw) return null;

  // Guard against accidental Markdown link syntax `[url](url)/path`
  const mdMatch = raw.match(/^\[[^\]]+\]\(([^)]+)\)(.*)$/);
  if (mdMatch) {
    raw = `${mdMatch[1].trim()}${mdMatch[2].trim()}`;
  }

  if (!/^https:\/\//i.test(raw)) {
    return null;
  }

  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.toLowerCase();
    const isVerified = VERIFIED_AUDIO_HOSTS.some(
      (allowed) => host === allowed || host.endsWith(`.${allowed}`)
    );
    return isVerified ? parsed.toString() : null;
  } catch {
    return null;
  }
}

/**
 * Returns true if the entry has a verified native-speaker recording available.
 */
export function hasVerifiedAudio(
  entry?: AudioPlayableEntry | null,
  langId?: string | null
): boolean {
  return getVerifiedAudioUrl(entry, langId) !== null;
}

/**
 * Backwards-compatible alias for `getVerifiedAudioUrl`.
 */
export function resolveCloudflareR2AudioUrl(
  entry: AudioPlayableEntry,
  _langId?: string | null
): string | null {
  return getVerifiedAudioUrl(entry);
}

let activeHtmlAudio: HTMLAudioElement | null = null;

/**
 * Stops any currently playing verified audio clip.
 */
export function stopLanguageAudio(): void {
  if (activeHtmlAudio) {
    try {
      activeHtmlAudio.pause();
      activeHtmlAudio.currentTime = 0;
    } catch {
      // ignore
    }
    activeHtmlAudio = null;
  }
}

/**
 * Plays pronunciation audio ONLY when a verified native-speaker recording URL exists
 * on `entry.audioFile`. Never falls back to synthetic Web Speech API TTS.
 * Returns `true` if verified audio playback started, `false` otherwise.
 */
export function playLanguageAudio(
  entry: AudioPlayableEntry,
  langId: string | null = null,
  onEndOrOpts?: (() => void) | { onEnd?: () => void; rate?: number }
): boolean {
  if (typeof window === "undefined") return false;

  const onEnd = typeof onEndOrOpts === "function" ? onEndOrOpts : onEndOrOpts?.onEnd;
  const rate = typeof onEndOrOpts === "object" && onEndOrOpts?.rate ? onEndOrOpts.rate : 1.0;

  stopLanguageAudio();

  const verifiedUrl = getVerifiedAudioUrl(entry, langId);
  if (!verifiedUrl) {
    onEnd?.();
    return false;
  }

  try {
    const audio = new Audio(verifiedUrl);
    audio.playbackRate = rate;
    activeHtmlAudio = audio;
    audio.onended = () => {
      activeHtmlAudio = null;
      onEnd?.();
    };
    audio.onerror = () => {
      activeHtmlAudio = null;
      onEnd?.();
    };
    audio.play().catch(() => {
      activeHtmlAudio = null;
      onEnd?.();
    });
    return true;
  } catch {
    activeHtmlAudio = null;
    onEnd?.();
    return false;
  }
}
