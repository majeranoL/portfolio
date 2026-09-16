import { useEffect, useState } from "react";

type Point = { x: number; y: number };

export function useCursorGlow(): Point {
  const [point, setPoint] = useState<Point>({ x: -200, y: -200 });

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window ||
      window.matchMedia("(hover: none)").matches;
    if (hasTouch) return;

    const onMove = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--cursor-x", `${point.x}px`);
    root.style.setProperty("--cursor-y", `${point.y}px`);
  }, [point]);

  return point;
}