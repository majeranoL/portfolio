import { experience } from "../lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">02 / Experience</p>
        </Reveal>
        <div className="experience-list">
          {experience.map((role, index) => (
            <Reveal key={role.title} delay={index * 100}>
              <article className="experience-item">
                <header className="experience-head">
                  <div>
                    <h3 className="experience-title">{role.title}</h3>
                    <p className="experience-company">{role.company}</p>
                  </div>
                  <span className="experience-period">{role.period}</span>
                </header>
                <ul className="experience-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}