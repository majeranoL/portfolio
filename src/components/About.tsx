import { site } from "../lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">01 / About</p>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <h2 className="section-title">{site.about.headline}</h2>
            <p className="section-text">{site.about.paragraph}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="terminal" aria-hidden="true">
              <p className="terminal-head">{site.whoami.name}</p>
              {site.whoami.lines.map((line) => (
                <p key={line} className="terminal-line">
                  <span className="terminal-prompt">{"$"}</span>
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}