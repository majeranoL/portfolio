import { stack } from "../lib/content";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">04 / Stack &amp; Skills</p>
        </Reveal>
        <div className="stack-grid">
          {stack.map((group, index) => (
            <Reveal key={group.group} delay={index * 100}>
              <div className="stack-group">
                <h3 className="stack-group-name">{group.group}</h3>
                <ul className="stack-items">
                  {group.items.map((item) =>
                    item.url ? (
                      <li key={item.name}>
                        <a
                          className="skill-chip"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.logo && (
                            <img
                              className="skill-chip-logo"
                              src={item.logo}
                              alt=""
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          )}
                          {item.name}
                        </a>
                      </li>
                    ) : (
                      <li key={item.name} className="badge">
                        {item.name}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}