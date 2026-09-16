import { site } from "../lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-meta">
          {"~ "}
          {site.name}
          {" — "}
          {year}
        </span>
        <span className="footer-meta">{site.footer.note}</span>
      </div>
    </footer>
  );
}