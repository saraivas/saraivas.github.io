# ADR 0001: Static site with plain HTML, CSS and JS (no build step)

- Status: accepted
- Date: 2026-10-20

## Context

This repository is my public portfolio, published with GitHub Pages. The previous
version (2022, kept in the git tag `v2022-frontend`) was a single page from my
front-end phase. The new site needs six pages, Portuguese and English, a few
interactive elements, and it must be easy to maintain and to host for free.

## Options considered

1. **Plain HTML, CSS and JS, no build.** What is in the repo is what is served.
   - Pros: zero tooling, instant deploy on GitHub Pages, nothing to break.
   - Cons: shared pieces (header, footer) are repeated across pages.
2. **Static site generator (Astro or similar).** Layouts, components, per-page generation.
   - Pros: no duplication, can generate real `/pt/` and `/en/` pages.
   - Cons: a build step and a CI deploy workflow for a site with six pages.
3. **React / Next.js.** Rejected: far more machinery than the content needs.

## Decision

Option 1. The site is plain HTML, CSS and JS. All copy lives in `assets/js/data.js`,
and `assets/js/i18n.js` swaps the language in the browser and remembers the choice.

## Consequences

- Header and footer are duplicated in each HTML file. Acceptable at six pages.
- The English version is rendered by JavaScript, so search engines index one
  language per URL. If search visibility in English becomes important, I will
  revisit this and move to Option 2 with separate `/en/` pages.
- Fonts are loaded from Google Fonts. A visitor without access gets the system fonts defined in `--font-*`.
- No build means no new dependency to keep pinned or audited.
