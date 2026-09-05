# Kusina ni Venus

A responsive restaurant landing page and menu website for Kusina ni Venus, built with Vue 3 and Vite.

## Features

- Modern homepage with hero section, best sellers, about section, and contact info
- Menu page with category-based item listings
- Responsive layout for desktop, tablet, and mobile screens
- Clean routing for Home and Menu pages

## Tech Stack

- Vue 3
- Vite
- Vue Router

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173
   ```

## Production Build

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## GitHub Pages Deployment

To deploy the app to GitHub Pages, you can use a GitHub Pages workflow or deploy the generated `dist` output to a `gh-pages` branch.

Example commands:

```bash
npm run build
```

Then publish the `dist` output using your preferred static hosting method.

## Project Structure

```bash
src/
  components/
  data/
  router/
  views/
  App.vue
  main.js
  style.css
```

## Repository

This project is hosted on GitHub and can be pushed with:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Notes

This project is intended for a restaurant brand website and can be customized further with:
- real menu pricing updates
- contact details and map links
- social media links
- reservation or order call-to-action buttons
