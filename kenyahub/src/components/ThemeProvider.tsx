/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useMounted } from "@/lib/useMounted";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function applyThemeToDocument(next: Theme, atomic: boolean) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const other: Theme = next === "dark" ? "light" : "dark";
  const domAlreadyMatches =
    root.getAttribute("data-theme") === next &&
    root.classList.contains(next) &&
    !root.classList.contains(other);

  let storageMatches = false;
  try {
    storageMatches = localStorage.getItem("kh-theme") === next;
  } catch {
    storageMatches = true;
  }

  if (domAlreadyMatches && storageMatches && !atomic) {
    return;
  }

  if (atomic) {
    root.classList.add("theme-switching");
  }

  if (!domAlreadyMatches) {
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
  }

  if (!storageMatches) {
    try {
      localStorage.setItem("kh-theme", next);
    } catch {
      // ignore storage errors
    }
  }

  if (atomic) {
    // Force synchronous reflow so every surface repaints atomically in 1 frame
    void root.offsetHeight;
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeRef = useRef<Theme>("dark");
  const mounted = useMounted();

  useEffect(() => {
    let resolved: Theme = "dark";
    try {
      const stored = localStorage.getItem("kh-theme") as Theme | null;
      if (stored === "light" || stored === "dark") {
        resolved = stored;
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        resolved = "light";
      }
    } catch {
      // keep default dark
    }
    themeRef.current = resolved;
    setTheme(resolved);
    applyThemeToDocument(resolved, false);
  }, []);

  useEffect(() => {
    if (mounted) {
      themeRef.current = theme;
      applyThemeToDocument(theme, false);
    }
  }, [theme, mounted]);

  const toggle = useCallback(() => {
    const currentIsDark =
      typeof document !== "undefined"
        ? document.documentElement.classList.contains("dark") ||
          document.documentElement.getAttribute("data-theme") === "dark"
        : themeRef.current === "dark";
    const next: Theme = currentIsDark ? "light" : "dark";
    themeRef.current = next;
    applyThemeToDocument(next, true);
    setTheme(next);
  }, []);

  const contextValue = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
