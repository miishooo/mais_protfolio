# Mais Fahad — Portfolio (plain HTML / CSS / JS)

This folder is the active portfolio source. Open `index.html` in a browser, or serve the folder. The Figma preview already serves it through Vite; React, React Router, and Tailwind are not used. The original `../src/` files are retained only as a reference.

- `index.html, work.html, project.html, tech.html, about.html, contact.html, 404.html` — page structure, including editable card and case-study `<template>` elements in Work and Project
- `css/style.css` — ALL styling (table of contents + design tokens at the top)
- `js/script.js` — ALL JavaScript (nav, project data, Work grid/filter, case-study page, contact form)

Add or edit a project: edit the `projects` array in `js/script.js`; it appears on `work.html` and at `project.html?id=<id>`.
If a project introduces a new color, add its matching `data-c1`, `data-c2`, or other theme selector alongside the existing themes in `css/style.css`. Theme colors and RGB values are defined there, so JavaScript never writes inline styling.
Nav and footer are repeated in every HTML file; edit them in each page.

From the repository root, `pnpm run build` produces a standalone `dist/` folder containing the HTML pages, `css/style.css`, and `js/script.js`. These files need no framework or build tool to run. Existing extensionless URLs are supported by the development/preview server; on static hosting, use the `.html` links or configure equivalent redirects and `404.html` as the error page.

The contact form preserves the original demonstration behavior: it shows sending and success states but does not deliver email or call a backend.
