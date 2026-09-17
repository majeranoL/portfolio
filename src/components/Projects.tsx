import { projects } from "../lib/content";
import { Reveal } from "./Reveal";
import { ProjectPreview } from "./ProjectPreview";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">03 / Projects</p>
        </Reveal>
        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 100}>
              <article className="project-row">
                <div className="project-visual" aria-hidden="true">
                  <span className="project-index">
                    {"0"}
                    {index + 1}
                  </span>
                  <ProjectPreview
                    name={project.name}
                    demoUrl={project.demo}
                    index={index}
                  />
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span className="project-role">{project.role}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="project-stack">
                    {project.stack.map((item) => (
                      <li key={item} className="badge">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"Live ->"}
                    </a>
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"Repo ->"}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}