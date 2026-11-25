// ============================================================
// Zero-Dependency Procedural Web Audio API Sound Effects & Haptics
// Provides crisp tactile audio chimes and mobile vibration feedback
// ============================================================

const SFX_MUTE_KEY = "kh-game-sfx-muted";

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (isSfxMuted()) return null;
  try {
    if (!audioCtx) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch {
    return null;
  }
}

export function isSfxMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(SFX_MUTE_KEY) === "true";
  } catch {
    return false;
  }
}

export function isGameSfxMuted(): boolean {
  return isSfxMuted();
}

export function setGameSfxMuted(muted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SFX_MUTE_KEY, String(Boolean(muted)));
  } catch {
    // Ignore storage errors
  }
}

export function toggleSfxMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const next = !isSfxMuted();
    localStorage.setItem(SFX_MUTE_KEY, String(next));
    return next;
  } catch {
    return false;
  }
}

export function triggerHaptic(pattern: number | number[] = 12): void {
  if (typeof window === "undefined" || isSfxMuted()) return;
  try {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(pattern);
    }
  } catch {
    // Ignore unsupported vibration
  }
}

function playTone(
  freq: number,
  startTimeOffset: number,
  duration: number,
  type: OscillatorType = "triangle",
  gainPeak = 0.14
): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = ctx.currentTime + startTimeOffset;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0.001, start);
    gain.gain.linearRampToValueAtTime(gainPeak, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.01);
  } catch {
    // Ignore audio context errors
  }
}

/** Crisp tile / card flip click */
export function playFlipClick(): void {
  triggerHaptic(8);
  playTone(680, 0, 0.045, "sine", 0.06);
}

export function playKeyTapSfx(): void {
  playFlipClick();
}

/** Warm ascending major third chime on correct answer (C5 -> E5) */
export function playCorrectChime(): void {
  triggerHaptic(15);
  playTone(523.25, 0, 0.11, "triangle", 0.14);
  playTone(659.25, 0.075, 0.16, "triangle", 0.16);
}

export function playCorrectSfx(): void {
  playCorrectChime();
}

/** Pitch-shifted arpeggio scaling with streak combo count */
export function playComboChime(streak = 5): void {
  triggerHaptic([12, 30, 18]);
  const semitoneShift = Math.min(12, Math.max(0, streak - 1));
  const mult = Math.pow(2, semitoneShift / 12);
  playTone(523.25 * mult, 0, 0.09, "triangle", 0.14);
  playTone(659.25 * mult, 0.065, 0.09, "triangle", 0.15);
  playTone(783.99 * mult, 0.13, 0.18, "triangle", 0.17);
}

export function playStreakSfx(streak = 5): void {
  playComboChime(streak);
}

/** Soft low double-pulse on wrong answer */
export function playWrongThud(): void {
  triggerHaptic([30, 40, 35]);
  playTone(175, 0, 0.12, "sine", 0.15);
  playTone(138, 0.09, 0.16, "sine", 0.15);
}

export function playWrongSfx(): void {
  playWrongThud();
}

/** Triumphant 4-note chord fanfare on Lesson / Game victory or Badge unlock */
export function playVictoryFanfare(): void {
  triggerHaptic([20, 40, 30, 40, 50]);
  playTone(523.25, 0, 0.12, "triangle", 0.15);     // C5
  playTone(659.25, 0.09, 0.12, "triangle", 0.15);  // E5
  playTone(783.99, 0.18, 0.14, "triangle", 0.16);  // G5
  playTone(1046.5, 0.28, 0.32, "triangle", 0.18);  // C6
}

export function playCelebrationSfx(): void {
  playVictoryFanfare();
}

export function playBadgeUnlockSfx(): void {
  playVictoryFanfare();
}
