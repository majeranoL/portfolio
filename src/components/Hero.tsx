import { site } from "../lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
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
      </div>
    </section>
  );
}