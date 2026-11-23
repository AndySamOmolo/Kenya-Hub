/**
 * Lazy-loaded per-language audio shards for KenyaHub Android.
 * Fetches the full R2 audio index shard from https://kenyahub.me/data/learning/audio/<langId>.json
 * and falls back cleanly to the 40 bundled offline preview clips in open-corpus-index.json.
 */

import openCorpusIndex from "../shared/data/open-corpus-index.json";

export interface MobileAudioShardClip {
  slug: string;
  label: string;
  transcript?: string;
  english?: string;
  verifiedTranscript?: boolean;
  audioUrl: string;
}

const audioShardCache = new Map<string, Promise<MobileAudioShardClip[]>>();

export function getBundledAudioPreview(languageId: string): MobileAudioShardClip[] {
  const lid = (languageId || "").trim().toLowerCase();
  const langData = (openCorpusIndex as any)?.languages?.[lid];
  const samples = langData?.nativeAudioSamples;
  return Array.isArray(samples) ? (samples as MobileAudioShardClip[]) : [];
}

export async function loadMobileAudioShard(
  languageId: string
): Promise<MobileAudioShardClip[]> {
  const lid = (languageId || "").trim().toLowerCase();
  if (!lid) return [];
  const fallback = getBundledAudioPreview(lid);

  if (!audioShardCache.has(lid)) {
    const url = `https://kenyahub.me/data/learning/audio/${encodeURIComponent(lid)}.json`;
    const p = fetch(url)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const clips = data && Array.isArray(data.clips) ? data.clips : null;
        if (clips && clips.length > 0) {
          return clips as MobileAudioShardClip[];
        }
        return fallback;
      })
      .catch(() => fallback);
    audioShardCache.set(lid, p);
  }

  return audioShardCache.get(lid)!;
}
