import { site, navLinks } from "../lib/content";
import { ThemeToggle } from "./ThemeToggle";
import type { Origin } from "../hooks/useTheme";

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: (origin: Origin) => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top">
          <span className="nav-logo-mark">{"//"}</span>
          <span>{site.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}