import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

type Theme = "dark" | "light";

export type Origin = { x: number; y: number };

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getNextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback((origin?: Origin) => {
    const root = document.documentElement;
    if (origin) {
      root.style.setProperty("--origin-x", `${origin.x}px`);
      root.style.setProperty("--origin-y", `${origin.y}px`);
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startTransition = document.startViewTransition;
    if (typeof startTransition !== "function" || reduced) {
      setTheme((current) => getNextTheme(current));
      return;
    }
    startTransition(() => {
      setTheme((current) => getNextTheme(current));
    });
  }, []);

  return { theme, toggleTheme };
}