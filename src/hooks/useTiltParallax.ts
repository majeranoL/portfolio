import { useEffect, useState } from "react";

const STORAGE_KEY = "tilt";

type OrientationConstructor = {
  requestPermission?: () => Promise<string>;
};

const isTiltActive = () => localStorage.getItem(STORAGE_KEY) === "on";

const orientationApi = () =>
  window.DeviceOrientationEvent as unknown as OrientationConstructor | undefined;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function useTiltParallax() {
  const [enabled, setEnabled] = useState(isTiltActive);

  useEffect(() => {
    if (!enabled) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(false);
      return;
    }
    if (!window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }

    let rafId = 0;
    let baseline: { gamma: number; beta: number } | null = null;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      rafId = 0;
      const root = document.documentElement;
      root.style.setProperty("--tilt-x", `${pendingX.toFixed(1)}px`);
      root.style.setProperty("--tilt-y", `${pendingY.toFixed(1)}px`);
    };

    const onOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma == null || event.beta == null) return;
      if (!baseline) baseline = { gamma: event.gamma, beta: event.beta };
      const range = 44;
      const dx = clamp(event.gamma - baseline.gamma, -range, range);
      const dy = clamp(event.beta - baseline.beta, -range, range);
      pendingX = (dx / range) * 48;
      pendingY = (dy / range) * 48;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    const attach = () => {
      window.addEventListener("deviceorientation", onOrientation);
    };

    const cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("deviceorientation", onOrientation);
      const root = document.documentElement;
      root.style.removeProperty("--tilt-x");
      root.style.removeProperty("--tilt-y");
    };

    const permission = orientationApi()?.requestPermission;
    if (typeof permission === "function") {
      if (isTiltActive()) attach();
    } else {
      attach();
    }

    return cleanup;
  }, [enabled]);

  const requestTilt = () => {
    if (enabled) return;
    const activate = () => {
      localStorage.setItem(STORAGE_KEY, "on");
      setEnabled(true);
    };
    const permission = orientationApi()?.requestPermission;
    if (typeof permission === "function") {
      permission()
        .then((state) => {
          if (state === "granted") activate();
        })
        .catch(() => undefined);
    } else {
      activate();
    }
  };

  return { enabled, requestTilt };
}