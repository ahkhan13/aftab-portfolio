# Aftab Husain | Developer Portfolio

Personal portfolio website for Aftab Husain, Software Engineer (Node.js, NestJS, TypeScript, AWS, Generative AI). All content comes from his resume.

**Tech stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion

## Features

- Sections: Hero, About, Skills, Experience, Projects, Contact
- Dark theme, responsive layout, mobile menu
- Scroll animations (disabled for visitors who prefer reduced motion)
- SEO: meta tags, Open Graph, Twitter card, JSON-LD Person data
- Downloadable resume (PDF)

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
```

## Project structure

```
index.html        SEO meta tags, JSON-LD, font
public/           favicon.svg, Aftab_Resume.pdf
src/data.ts       All portfolio content (edit this file to update the site)
src/App.tsx       Sections and UI components
src/index.css     Tailwind setup and base styles
```

## Updating content

- **Text, skills, experience, projects:** edit `src/data.ts`.
- **Project links:** add `link: 'https://...'` to a project in `src/data.ts`; a "View project" button appears on its card.
- **Resume:** replace `public/Aftab_Resume.pdf`, keeping the same file name.
- **Colors and fonts:** change the Tailwind classes in `src/App.tsx` or `tailwind.config.js`.

## Deployment

The build output in `dist/` is a static site.

- **Vercel / Netlify:** import the repository. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** build, then publish the `dist/` folder. If the site is served from a sub-path, set `base` in `vite.config.ts`.

After deploying, add `<link rel="canonical" href="https://your-domain/" />` to `index.html`.

## Contact

- Email: aftab.husain3355@gmail.com
- LinkedIn: https://www.linkedin.com/in/aftab-husain-6a077b221/
- GitHub: https://github.com/ahkhan13
