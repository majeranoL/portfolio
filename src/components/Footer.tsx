import { site } from "../lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-meta">
          {"© "}
          {year}
          {" "}
          {site.name}
        </span>
        <span className="footer-meta">{site.footer.note}</span>
        <div className="footer-right">
          <span className="footer-status">
            <span className="footer-status-dot" aria-hidden="true" />
            available for work
          </span>
          <button className="footer-top" type="button" onClick={scrollToTop}>
            {"↑ top"}
          </button>
        </div>
      </div>
    </footer>
  );
}