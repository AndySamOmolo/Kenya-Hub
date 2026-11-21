import { useSyncExternalStore } from "react";

/**
 * Returns `true` after hydration (i.e., on the client).
 *
 * Uses `useSyncExternalStore` instead of `useState(false)` + `useEffect` →
 * avoids the `react-hooks/set-state-in-effect` lint error while remaining
 * SSR‑safe (returns `false` during server rendering).
 */
const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function useMounted(): boolean {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}
