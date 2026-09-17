import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const FALLBACK_WIPE_MS = 1800;

type Theme = "dark" | "light";

export type Origin = { x: number; y: number };

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
}

function getInitialTheme(): Theme {
  const stored = readStoredTheme();
  if (stored) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getNextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

function getWipeMs(): number {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--wipe-duration")
    .trim();
  const seconds = parseFloat(value);
  return Number.isFinite(seconds) ? seconds * 1000 : FALLBACK_WIPE_MS;
}

function restartRingAnimation(ring: HTMLElement | null) {
  if (!ring) return;
  ring.classList.remove("theme-ring--run");
  void ring.offsetWidth;
  ring.classList.add("theme-ring--run");
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggleTheme = useCallback((origin?: Origin) => {
    const root = document.documentElement;
    if (origin) {
      root.style.setProperty("--origin-x", `${origin.x}px`);
      root.style.setProperty("--origin-y", `${origin.y}px`);
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTheme((current) => getNextTheme(current));
      return;
    }
    const ring = root.querySelector<HTMLElement>(".theme-ring");
    const supportViewTransition = typeof document.startViewTransition === "function";
    if (supportViewTransition) {
      restartRingAnimation(ring);
      const transition = document.startViewTransition(() => {
        setTheme((current) => getNextTheme(current));
      });
      transition.finished.catch(() => undefined).finally(() => {
        ring?.classList.remove("theme-ring--run");
      });
      return;
    }
    restartRingAnimation(ring);
    setTheme((current) => getNextTheme(current));
    window.setTimeout(() => {
      ring?.classList.remove("theme-ring--run");
    }, getWipeMs());
  }, []);

  return { theme, toggleTheme };
}