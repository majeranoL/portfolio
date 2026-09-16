export const site = {
  name: "Your Name",
  role: "Full-Stack Developer",
  status: "available for work",
  email: "hello@example.com",
  whoami: {
    name: "$ whoami",
    lines: ["a builder", "ship it, then polish it"],
  },
  about: {
    headline: "I build products that live on the web.",
    paragraph:
      "Short paragraph about who you are, what you care about, and how you approach the work. Replace this copy in src/lib/content.ts.",
  },
  contact: {
    headline: "Got a problem to solve?",
  },
  footer: {
    note: "built with the void",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    name: "Project One",
    year: "2025",
    description:
      "A short line describing the problem it solved and the outcome. Swap this copy in src/lib/content.ts.",
    stack: ["React", "TypeScript", "Node"],
    href: "#",
  },
  {
    name: "Project Two",
    year: "2024",
    description:
      "Another short line describing the second featured project and why it mattered.",
    stack: ["Rust", "Tauri", "SQLite"],
    href: "#",
  },
] as const;

export const stack = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Vite", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node", "PostgreSQL", "REST"],
  },
  {
    group: "Tooling",
    items: ["Git", "Docker", "Railway", "Neon"],
  },
] as const;