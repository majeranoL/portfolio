import { education, certifications } from "../lib/content";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">06 / Education &amp; Certifications</p>
        </Reveal>
        {education.map((entry, index) => (
          <Reveal key={entry.institution} delay={index * 100}>
            <div className="education-entry">
              <h3 className="education-degree">{entry.degree}</h3>
              <a
                className="education-school"
                href={entry.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.institution}
              </a>
              <p className="education-honors">{entry.honors}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={100}>
          <div className="education-entry">
            <h3 className="education-card-title">Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  className="cert-card"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="cert-card-image"
                    src={cert.image}
                    alt={cert.name}
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                  <span className="cert-card-name">{cert.name}</span>
                  <span className="cert-verify">
                    <svg
                      viewBox="0 0 13 22"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 5) rotate(46)" />
                      <path d="M0 -4.3C2.3 -2.8 2.3 2.8 0 4.3C-2.3 2.8 -2.3 -2.8 0 -4.3Z" transform="translate(4.6 11) rotate(14)" />
                      <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 17) rotate(-30)" />
                    </svg>
                    <span className="cert-verify-label">Verify</span>
                    <span className="cert-verify-mirror">
                      <svg
                        viewBox="0 0 13 22"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 5) rotate(46)" />
                        <path d="M0 -4.3C2.3 -2.8 2.3 2.8 0 4.3C-2.3 2.8 -2.3 -2.8 0 -4.3Z" transform="translate(4.6 11) rotate(14)" />
                        <path d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z" transform="translate(8 17) rotate(-30)" />
                      </svg>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}