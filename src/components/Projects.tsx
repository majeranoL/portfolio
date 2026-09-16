import { projects } from "../lib/content";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">02 / Projects</p>
        </Reveal>
        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 100}>
              <a className="project-row" href={project.href}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-index">
                    {"0"}
                    {index + 1}
                  </span>
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-arrow">{"->"}</span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-stack">
                    {project.stack.map((item) => (
                      <li key={item} className="badge">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}