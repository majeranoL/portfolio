import { site, resume } from "../lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <Reveal>
          <p className="hero-status">
            <span className="hero-status-dot" />
            <span>
              {"$ dev_status: "}
              {site.status}
            </span>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="hero-title glow">
            {site.name}
            <span className="hero-role">{site.role}</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <a
            className="hero-cta"
            href={resume.path}
            download={resume.filename}
          >
            <span className="hero-cta-icon" aria-hidden="true">
              {"↓"}
            </span>
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}