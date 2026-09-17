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
- Stack & Skills: branded tech (React, Next.js, TS, JS, HTML5, CSS3, Tailwind, Node, Express, PHP, Jira, Postman, Git, GitHub) are now clickable skill-chips with devicon CDN color logos + hover effects linking to official sites; PayMongo chip self-hosts its favicon (public/icons/paymongo.ico); non-brand skills (QA concepts, REST API, AI Triage, Multi-Role) stay plain badges. content.ts stack restructured with StackItem type. Lint/typecheck/build pass.
- Hover highlights switched from accent green to var(--text-primary): near-white in dark mode, readable dark in light mode. Applied to nav underline, theme toggle, project index/arrow/link underline, education-school underline, cert-card border/name/verify, skill chips, contact phone + email/phone underline. Static accents (logo, terminal prompt, roles, company/school names) left green. Kept DOTGothic16. Lint/typecheck/build pass.
- Fixed DOTGothic16 never loading: Google Fonts family is case-sensitive "DotGothic16" (lowercase ot, capital G); all-caps "DOTGothic16" was silently dropped from the 200 response so headings fell back to system-ui. Corrected the URL in index.html and the family name in tokens.css --font-display. Verified the URL now serves DotGothic16 + Inter + JetBrains Mono. Lint/typecheck/build pass.
- DotGothic16 was rendering as heavy lines, not dots: it only ships weight 400 but display headings forced 500-700, so browsers painted faux-bold over the dot structure. Set hero-title/hero-role/section-title/project-index/project-name/experience-title/education-degree/education-card-title to font-weight 400, letter-spacing 0, plus a grouped font-synthesis:none rule. No NDot restore. Lint/typecheck/build pass.
- DotGothic16 fundamentally can't render as dots (Latin glyphs are connected pixel strokes), so display font swapped to Doto (Google Fonts): every glyph is discrete round dots on a 6x10 matrix, closest legal match to Nothing NDot wordmark. index.html loads family=Doto:wght@400; --font-display now "Doto". Headings already at weight 400/tracking 0/font-synthesis none for clean separated dots. Lint/typecheck/build pass.
- Hero name ("Lian Karlo Majerano", 18 chars) was wrapping to 2 lines at up to 7rem inside the 1200px container. Reduced hero-title to clamp(2.4rem, 7vw, 5rem), added 0.03em letter-spacing for a wider feel, and white-space:nowrap from >=768px so it stays one line without overflowing phones. Lint/typecheck/build pass.
- Light-mode dot-matrix headings were hard to read, so added a --text-heading token (#f2f2f2 dark, pure #000 light) applied to display headings (hero-title, section-title, project-index/name, experience-title, education titles) for max contrast; hero-role stays gray for hierarchy. Weight stays 400 so dots don't merge. Lint/typecheck/build pass.
- Light-mode readability pass: --text-primary now pure #000 and --text-secondary #171717 (near-black) so gray body text is readable. Removed the now-redundant --text-heading token and its grouped color rule; display headings inherit --text-primary. Dark mode tokens untouched. Lint/typecheck/build pass.
- Small Doto display headings (h2 section-title, h3 project-name/experience-title/education-degree/education-card-title) looked optically grey in light mode. Loaded Doto weight 600 and scoped [data-theme="light"] font-weight:600 on those headings only, since Doto's weight axis increases dot size/density for darker, readable dots. Dark mode stays 400; hero h1 stays 400. Lint/typecheck/build pass.
- St. Dominic College of Asia school link color changed from theme green (--accent-strong) to solid red #dc2626 (school color); only one school entry so it's safe. Hover underline untouched. Lint/typecheck/build pass.
- Stack & Skills enlarged (~30%): skill-chips 0.8rem text / 0.5rem 1.1rem padding / 20px logos, stack-items gap 0.85rem, plain-skill .badge scoped up inside .stack-items (Project-card badges unchanged), group names 0.85rem / 0.14em, grid min column 240px. Lint/typecheck/build pass.