import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToTarget(target: string): boolean {
  if (!lenis) return false;
  lenis.scrollTo(target);
  return true;
}

export function scrollToTop(): boolean {
  if (!lenis) return false;
  lenis.scrollTo(0);
  return true;
}

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    lenis = new Lenis({ lerp: 0.12, autoRaf: true });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}