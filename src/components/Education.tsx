import { education } from "../lib/content";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">05 / Education &amp; Certifications</p>
        </Reveal>
        {education.map((entry, index) => (
          <Reveal key={entry.institution} delay={index * 100}>
            <div className="education-entry">
              <h3 className="education-degree">{entry.degree}</h3>
              <p className="education-school">{entry.institution}</p>
              <p className="education-honors">{entry.honors}</p>
              <ul className="education-certs">
                {entry.certifications.map((cert) => (
                  <li key={cert} className="badge">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}