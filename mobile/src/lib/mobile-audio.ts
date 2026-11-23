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

export interface MobileAudioState {
  url: string | null;
  playing: boolean;
  loading: boolean;
  currentTime: number;
  duration: number;
  rate: number;
}

type AudioStateListener = (state: MobileAudioState) => void;

type AudioHostHandler = {
  play: (url: string, rate?: number) => void;
  pause: () => void;
  resume: () => void;
  seek: (seconds: number) => void;
  skip: (deltaSeconds: number) => void;
  setRate: (rate: number) => void;
  stop: () => void;
};

let activeHost: AudioHostHandler | null = null;
let currentState: MobileAudioState = {
  url: null,
  playing: false,
  loading: false,
  currentTime: 0,
  duration: 0,
  rate: 1,
};

const listeners = new Set<AudioStateListener>();

export function emitMobileAudioState(patch: Partial<MobileAudioState>): void {
  currentState = { ...currentState, ...patch };
  listeners.forEach((cb) => {
    try {
      cb(currentState);
    } catch {
      // ignore listener errors
    }
  });
}

export function getMobileAudioState(): MobileAudioState {
  return currentState;
}

export function subscribeMobileAudioState(
  listener: AudioStateListener
): () => void {
  listeners.add(listener);
  listener(currentState);
  return () => {
    listeners.delete(listener);
  };
}

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
  emitMobileAudioState({
    url: null,
    playing: false,
    loading: false,
    currentTime: 0,
    duration: 0,
  });
}

export function pauseVerifiedAudio(): void {
  try {
    activeHost?.pause();
  } catch {
    // ignore
  }
}

export function resumeVerifiedAudio(): void {
  try {
    activeHost?.resume();
  } catch {
    // ignore
  }
}

export function seekVerifiedAudio(seconds: number): void {
  try {
    activeHost?.seek(Math.max(0, seconds));
  } catch {
    // ignore
  }
}

export function skipVerifiedAudio(deltaSeconds: number): void {
  try {
    activeHost?.skip(deltaSeconds);
  } catch {
    // ignore
  }
}

export function setVerifiedAudioRate(rate: number): void {
  const safeRate = Math.max(0.5, Math.min(2, rate));
  emitMobileAudioState({ rate: safeRate });
  try {
    activeHost?.setRate(safeRate);
  } catch {
    // ignore
  }
}

/**
 * Plays verified native-speaker audio for a dictionary or course entry.
 * Returns true if a verified HTTPS recording URL was dispatched to the player.
 */
export function playVerifiedAudio(
  entry?: AudioPlayableEntry | null,
  rate?: number
): boolean {
  const verifiedUrl = getVerifiedAudioUrl(entry);
  if (!verifiedUrl || !activeHost) {
    return false;
  }
  const targetRate = typeof rate === "number" ? rate : currentState.rate || 1;
  emitMobileAudioState({
    url: verifiedUrl,
    loading: true,
    playing: false,
    currentTime: currentState.url === verifiedUrl ? currentState.currentTime : 0,
    duration: currentState.url === verifiedUrl ? currentState.duration : 0,
    rate: targetRate,
  });
  try {
    activeHost.play(verifiedUrl, targetRate);
    return true;
  } catch {
    emitMobileAudioState({ loading: false, playing: false });
    return false;
  }
}
