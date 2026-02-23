# Premium Dark Portfolio

A high-end personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark, minimal, premium aesthetic inspired by modern design portfolios
- Smooth scroll-based and hover animations using Framer Motion
- Clear storytelling: **problem → solution → result** for each project
- Data-driven content via `src/data/portfolio.js`
- Fully responsive from mobile to large desktop

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. Open the URL printed in the terminal (usually `http://localhost:5173`).

## Customizing Your Portfolio

All personal content lives in:

```text
src/data/portfolio.js
```

Update:

- **`name`** – Your name
- **`headline`** – Your big bold statement
- **`subheadline`** – One-line summary of what you do
- **`background`** – Short storytelling-style background
- **`skills`** – Skill groups and items
- **`targetRoles`** – Roles you're targeting
- **`projects`** – Array of projects, each with:
  - `title`
  - `context`
  - `problem`
  - `solution`
  - `result`
  - `tags` (optional)
- **`email`** – Contact email
- **`linkedIn`** – LinkedIn profile URL

## Deploying

### Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) and create a new project from your repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### Netlify

1. Push this project to GitHub.
2. Go to [Netlify](https://netlify.com) and create a new site from your repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

Both platforms auto-detect Vite and work with no extra configuration.

## Notes

- Global styles and layout primitives live in `src/index.css`.
- Sections and layout components are in `src/components`.
- Animations use Framer Motion with sensible defaults and reduced-motion–friendly patterns.

