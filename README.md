# Personal Portfolio

A minimal, pure HTML/CSS/JS portfolio website with Tailwind CSS 4.

## Structure

```
├── index.html        # Main HTML file
├── js/main.js        # JavaScript logic and data
├── src/input.css     # Tailwind CSS source
├── styles/output.css # Compiled CSS (generated)
├── icon.png          # Favicon
└── package.json      # Build scripts
```

## Development

Install dependencies:

```bash
npm install
```

Watch for CSS changes:

```bash
npm run dev
```

Serve locally:

```bash
npm run serve
```

## Build

Compile and minify CSS:

```bash
npm run build:css
```

## Deployment

Upload `index.html`, `js/`, `styles/output.css`, and `icon.png` to any static host.
