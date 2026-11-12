# mudrkaplan.com

Single-page website of a general practitioner's office (MUDr. Vlastislav Kaplan). All visible content is in Czech; keep it in Czech, including diacritics.

## How it works

- Plain static site: `index.html`, `index.css`, and one small JS file. No build step, no package manager, no framework, no tests.
- Hosted on GitHub Pages with the custom domain from `CNAME` (`mudrkaplan.com`). Pushing to the published branch is the deploy; there is nothing else to run.
- Formatting is Prettier defaults: after editing run `npx prettier@3 --write index.html index.css *.js`.
- To preview, open `index.html` in a browser, or run `python3 -m http.server` in the repo root.
- Libraries come from CDNs in `<head>`: Bootstrap 5.3 (CSS + JS bundle) and Font Awesome 5 (`<i class="fas fa-…">` icons). Do not add a bundler or npm for this site.

## Branches

- `pages` holds the newest version of the site and is believed to be the branch GitHub Pages publishes (verify in repo Settings → Pages before relying on it).
- `main` is behind `pages` (older page, missing `carouselCustomBehaviour.js`). Before editing, check which branch is checked out and compare with `git log main..origin/pages`.
- `preprod` and `zaloha` ("backup") are older snapshots.

## Images

- Images are not stored in the repo. Each one is uploaded to Google Photos first, and the page uses its direct `https://lh3.googleusercontent.com/pw/…` link in `src`.
- The suffix after `=` sets the served size: `=w2400` means 2400 px wide. Use a smaller value (for example `=w400` for logos) rather than downloading a huge image into a small box.
- These links cannot be generated or verified from the repo. When a new image is needed, ask the user for the link; never invent one or reuse a link for a different picture.
- Exception: `favicon.svg` lives in the repo and is linked from `<head>`.

## Page structure

Sections are anchored by `id` and linked from the navbar, so renaming an `id` means updating the nav link too: `#profile`, `#open-hours`, `#services`, `#emergency-care`, `#psychosomatic-medicine`, `#insurance-contacts` (the footer with insurer logos).

- Office hours are one `.row.row-striped` block per weekday, copy-pasted. The doctor works in three places (Dolní Bousov, Mladá Boleslav, Všejany), each with its own address, map link, phone and nurse, so a change to one place has to be repeated in every weekday block that uses it.
- A temporary notice (for example "the office is closed on these days") is the `.info-message` alert block right below `<header>`. It stays in the file commented out; uncomment it and edit the text when a notice is needed, comment it out again afterwards.
- Opening hours exist twice: in the visible `#open-hours` section and in the JSON-LD block in `<head>` (what search engines read). Change both together, including addresses and phone numbers.
- The profile is a three-slide carousel (`#carouselProfile`: contacts, education, bio) that the visitor pages through with arrows; the owner wants it kept that way, not flattened into one block. `carouselCustomBehaviour.js` hides the prev/next arrow on its first/last slide and throws if that element is missing.
- `closeNavbarMenuOnLinkClick.js` closes the opened phone menu after a nav link is tapped.

- Service icons are Font Awesome `<i>` tags inside `.icon-square` boxes. Font Awesome is loaded as CSS (solid + brands only), so regular-style `far` icons will not render.
- All scripts in `<head>` use `defer`; keep it that way so nothing blocks rendering.

## Styling

- The palette and shared shadow/radius are CSS variables at the top of `index.css` (`--deft-blue`, `--ucla-blue`, `--powder-blue`, `--raisin-black`, `--color-blue-0` for the page background, plus `--soft-shadow` and `--corner-radius`). Use them instead of hard-coded colours, and do not add new colour constants without asking: change the existing values instead.
- Every section is `<div class="container mb-5 col-xxl-8" id="…">` with an `<h2 class="section-title">` and its content in a white `.hero` card. Follow that pattern for new sections.
- Heading levels: the only `<h1>` is the doctor's name; section titles are `<h2>`, weekday/town names `<h3 class="day-name">`, place names `<h4 class="place-name">`.
- Bootstrap here is version 5: use `ms-`/`me-`/`text-end`, not the Bootstrap 4 `ml-`/`mr-`/`text-right`.
- Prefer Bootstrap utility classes in the HTML; add to `index.css` only what Bootstrap cannot do.
