import { useEffect, useRef, useState } from "react";
import { site, experience, projects, stack, resume } from "../lib/content";

type OutputLine = { text: string; accent?: boolean };

type HistoryEntry = {
  input: string;
  output: readonly OutputLine[];
};

const buildOutput = (cmd: string): readonly OutputLine[] => {
  switch (cmd) {
    case "help":
      return [
        { text: "available commands:" },
        { text: "  whoami     about     experience   projects" },
        { text: "  stack      contact   ls           cat resume.txt" },
        { text: "  clear" },
      ];
    case "whoami":
      return [
        { text: `name: ${site.name}`, accent: true },
        { text: `role: ${site.role}` },
        ...site.whoami.lines.map((line) => ({ text: `- ${line}` })),
      ];
    case "about":
      return [{ text: site.about.headline }, { text: `  ${site.about.paragraph}` }];
    case "experience":
      return experience.map((role) => ({
        text: `• ${role.title} — ${role.company} (${role.period})`,
      }));
    case "projects":
      return projects.flatMap((project) => [
        { text: `• ${project.name} (${project.year}) — ${project.role}` },
        { text: `  demo: ${project.demo}` },
      ]);
    case "stack":
      return stack.flatMap((group) => [
        { text: `[${group.group}]`, accent: true },
        { text: `  ${group.items.map((item) => item.name).join(", ")}` },
      ]);
    case "contact":
      return [
        { text: `email: ${site.email}` },
        { text: `phone: ${site.phone}` },
        { text: `socials: ${site.contact.socials.map((s) => s.label).join(", ")}` },
        { text: "→ jump to: #contact" },
      ];
    case "ls":
      return [
        { text: "~/portfolio" },
        { text: "  about.txt" },
        { text: "  experience.log" },
        { text: "  stack.yaml" },
        { text: "  projects/" },
        { text: "  contact.md" },
        { text: `  resume.pdf` },
      ];
    case "cat resume.txt":
      return [
        { text: `# ${site.name}`, accent: true },
        { text: site.role },
        { text: "  - BS Information Technology" },
        { text: "  - SQA Specialist @ Xurpas Inc." },
        { text: "  - Sole Developer @ CommunityOS" },
        { text: `→ download: ${resume.path}` },
      ];
    case "clear":
      return [{ text: "\u00A0" }];
    default:
      return [{ text: `command not found: ${cmd} — type 'help'` }];
  }
};

export function Terminal() {
  const [history, setHistory] = useState<readonly HistoryEntry[]>(() => [
    {
      input: "whoami",
      output: site.whoami.lines.map((line) => ({ text: line })),
    },
  ]);
  const [value, setValue] = useState("");
  const [past, setPast] = useState<readonly string[]>([]);
  const [pastIndex, setPastIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const focusInput = () => inputRef.current?.focus();

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    setHistory((prev) => [
      ...prev,
      { input: cmd, output: buildOutput(cmd) },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cmd = value.trim();
    if (!cmd) return;
    run(cmd);
    setPast((prev) => [...prev, cmd]);
    setPastIndex(-1);
    setValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    if (past.length === 0) return;
    const next = event.key === "ArrowUp" ? pastIndex + 1 : pastIndex - 1;
    const clamped = Math.max(-1, Math.min(next, past.length - 1));
    setPastIndex(clamped);
    setValue(clamped === -1 ? "" : past[past.length - 1 - clamped] ?? "");
  };

  return (
    <div className="terminal terminal-interactive" onClick={focusInput}>
      <p className="terminal-head">{site.whoami.name}</p>
      <div
        ref={outputRef}
        className="terminal-output"
        role="log"
        aria-live="polite"
      >
        {history.map((entry, index) => (
          <div key={index}>
            <p className="terminal-line">
              <span className="terminal-prompt">{"$"}</span>
              <span className="terminal-command">{entry.input}</span>
            </p>
            {entry.output.map((line, lineIndex) => (
              <p
                key={lineIndex}
                className={
                  line.accent
                    ? "terminal-line terminal-line--accent"
                    : "terminal-line terminal-line--out"
                }
              >
                {line.text}
              </p>
            ))}
          </div>
        ))}
      </div>
      <form className="terminal-input-line" onSubmit={handleSubmit}>
        <span className="terminal-prompt">{"$"}</span>
        <input
          ref={inputRef}
          className="terminal-input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Terminal command"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        <span className="terminal-caret" aria-hidden="true" />
      </form>
    </div>
  );
}