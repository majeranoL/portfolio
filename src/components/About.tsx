import { site } from "../lib/content";
import { Reveal } from "./Reveal";
import { Terminal } from "./Terminal";

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
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}