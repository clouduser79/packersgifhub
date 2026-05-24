# Packers GIF Hub

Packers GIF Hub is a responsive web portfolio for Packers Pain GIF art, built with HTML, CSS, and JavaScript. It showcases featured GIFs, provides a browsable library, and includes a modal preview experience for viewing animations in fullscreen.

## Features

- Dark green and gold Packers-inspired visual design
- Hero section with animated GIF preview columns
- Featured GIF strip with click-to-open modal preview
- Library page generated from `files.json`
- Story and About sections with creator details and social links
- Responsive layout for smaller screens

## Project structure

- `index.html` — main site markup and page structure
- `style.css` — styling, layout, responsive rules, and animations
- `script.js` — page navigation, modal logic, and library rendering
- `files.json` — list of GIF filenames used to build the library grid
- `gifFolder/` — GIF assets used throughout the site
- `views.jpg`, `myLogo.png` — supporting images for the About and Story pages

## Running locally

Because the site loads `files.json` using `fetch()`, run a local server instead of opening `index.html` directly in the browser.

```bash
cd C:/Users/shawn/Projects/gifPortfolio
python -m http.server
```

Then open:

```text
http://localhost:8000
```

## Notes

- The library page is populated dynamically from `files.json`.
- Clicking any GIF opens it in a fullscreen modal overlay.
- The project is intended for showcasing Packers-themed digital GIF content.