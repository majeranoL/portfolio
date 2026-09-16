import { site } from "../lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <Reveal>
          <p className="section-label">04 / Contact</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="section-title glow contact-title">
            {site.contact.headline}
          </h2>
          <div className="contact-links">
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="contact-phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}