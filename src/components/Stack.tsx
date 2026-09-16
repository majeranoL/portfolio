import { stack } from "../lib/content";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">03 / Stack &amp; Skills</p>
        </Reveal>
        <div className="stack-grid">
          {stack.map((group, index) => (
            <Reveal key={group.group} delay={index * 100}>
              <div className="stack-group">
                <h3 className="stack-group-name">{group.group}</h3>
                <ul className="stack-items">
                  {group.items.map((item) => (
                    <li key={item} className="badge">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}