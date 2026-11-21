/**
 * mobile/src/lib/mobile-audio.ts
 *
 * Verified Native-Speaker Audio Playback Dispatcher for KenyaHub Mobile (Android).
 *
 * Policy:
 * - Plays audio ONLY when a verified recording URL (`entry.audioFile`) exists
 *   from trusted open-access sources (via shared `getVerifiedAudioUrl`).
 * - Never falls back to synthetic Text-to-Speech.
 */

import {
  getVerifiedAudioUrl,
  hasVerifiedAudio,
  type AudioPlayableEntry,
} from "../shared/lib/language-audio";

export { getVerifiedAudioUrl, hasVerifiedAudio, type AudioPlayableEntry };

type AudioHostHandler = {
  play: (url: string) => void;
  stop: () => void;
};

let activeHost: AudioHostHandler | null = null;

export function registerAudioPlaybackHandler(
  handler: AudioHostHandler | null
): void {
  activeHost = handler;
}

export function stopVerifiedAudio(): void {
  try {
    activeHost?.stop();
  } catch {
    // ignore playback stop errors
  }
}

/**
 * Plays verified native-speaker audio for a dictionary or course entry.
 * Returns true if a verified HTTPS recording URL was dispatched to the player.
 */
export function playVerifiedAudio(entry?: AudioPlayableEntry | null): boolean {
  const verifiedUrl = getVerifiedAudioUrl(entry);
  if (!verifiedUrl || !activeHost) {
    return false;
  }
  try {
    activeHost.play(verifiedUrl);
    return true;
  } catch {
    return false;
  }
}
