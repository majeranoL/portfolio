import { useEffect, useState } from "react";
import { site, navLinks, resume } from "../lib/content";
import { ThemeToggle } from "./ThemeToggle";
import type { Origin } from "../hooks/useTheme";

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: (origin: Origin) => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top">
          <span className="nav-logo-mark">{"//"}</span>
          <span>{site.name}</span>
        </a>
        <button
          type="button"
          className={open ? "nav-burger nav-burger--open" : "nav-burger"}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Primary">
          <ul
            id="nav-menu"
            className={open ? "nav-links nav-links--open" : "nav-links"}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="nav-resume"
                href={resume.path}
                download={resume.filename}
              >
                {"↓ resume"}
              </a>
            </li>
            <li>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}