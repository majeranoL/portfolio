# Activity Log

## 2026-09-16

- Initialized git repo (main branch) with Vite-compatible .gitignore.
- Scaffolded Vite + React + TS portfolio project ("Vanta Noir" design).
- Added dual-mode theme tokens (vanta black dark + off-white light) in src/styles/tokens.css.
- Built useTheme hook (localStorage + prefers-color-scheme) and ThemeToggle.
- Built sections: Nav, Hero, About (terminal card), Projects, Stack, Contact, Footer.
- Added signature effects: grain overlay, hero/CTA accent glow, cursor glow, fade-up reveals.
- Typecheck, lint, and production build all pass. Dev server verified.
- Placeholder copy lives in src/lib/content.ts (site name, email, projects).

## 2026-09-17

- Pushed repo to public GitHub: https://github.com/majeranoL/portfolio.
- Centralized all remaining copy into src/lib/content.ts (about, contact, footer); components no longer hardcode strings.
- Decided content stays hardcoded in content.ts (no backend/CMS/json). Git repo: main. Pending local commits need manual git push (config hard-denies push).

## 2026-09-17 (2)

- Expanded portfolio with real resume content: real name/title/email/phone, professional summary about, Experience section (2 Xurpas roles), Education & Certifications section, projects (CommunityOS + Animal911 with repo/demo links + feature highlights), 5-group stack.
- New components: Experience.tsx, Education.tsx. Contact now shows phone. Nav has 5 links.
- Committed 363dc04. Typecheck, lint, build pass.

## 2026-09-17 (3)

- Added circular theme-switch wipe: dark/light toggle now expands radially from the button using the View Transitions API + clip-path circle keyframe. Falls back to instant toggle when unsupported or prefers-reduced-motion. Committed 6e6cbbc.