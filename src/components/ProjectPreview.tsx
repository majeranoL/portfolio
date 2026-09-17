import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const VIEWPORT_WIDTH = 1024;
const VIEWPORT_HEIGHT = 768;

interface ProjectPreviewProps {
  name: string;
  demoUrl: string;
  index: number;
}

export function ProjectPreview({ name, demoUrl, index }: ProjectPreviewProps) {
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const update = () => {
      setScale(frame.clientWidth / VIEWPORT_WIDTH);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className={`project-shot project-shot--${index % 2}${
        loaded ? " is-loaded" : ""
      }`}
      style={{ "--preview-scale": scale } as CSSProperties}
    >
      <div className="project-shot-bar">
        <span className="project-shot-dot" />
        <span className="project-shot-dot" />
        <span className="project-shot-dot" />
        <span className="project-shot-name">{name}</span>
      </div>
      <div className="project-shot-body">
        <span className="project-shot-big" />
        <span className="project-shot-line" />
        <span className="project-shot-line project-shot-line--short" />
        <span className="project-shot-pills">
          <span className="project-shot-pill" />
          <span className="project-shot-pill" />
          <span className="project-shot-pill" />
        </span>
      </div>
      <iframe
        className="project-shot-iframe"
        src={demoUrl}
        title={`${name} live preview`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        style={{
          width: `${VIEWPORT_WIDTH}px`,
          height: `${VIEWPORT_HEIGHT}px`,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}