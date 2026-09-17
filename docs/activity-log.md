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

## 2026-09-17 (4)

- Selection highlight now matches page background (--bg) per theme; selected letters keep text color with a subtle currentColor glow instead of the green bar.
- Self-hosted NDot 55 (Nothing/Colophon dot-matrix, fan-archive source public/fonts/NDot-55.woff2) and pointed --font-display at it for headings; removed Space Grotesk from Google Fonts. Lint/typecheck/build pass.
- Replaced NDot 55 with Google Fonts DOTGothic16 for --font-display (headings); NDot looked rough. Deleted public/fonts, dropped the @font-face block. Lint/typecheck/build pass.
- Headings (hero, section titles, project/experience/education names) rendered uppercase via text-transform.
- Split Education into two cards: school (institution links to stdominiccollege.edu.ph) and a separate Certifications card where Certiport badges link to their Credly public URLs in new tabs. content.ts now exports certifications as {name,url}. Lint/typecheck/build pass.
- Upgraded certifications to clickable cards: each displays its Credly badge image + cert name as a responsive grid card link (new tab). content.ts certifications now carry an image field. Lint/typecheck/build pass.
- Removed Certiport prefix from cert names and added a centered squiggle "Verify" footer (mirrored dot-squiggles flanking the label) to each cert card, accent on hover. Lint/typecheck/build pass.