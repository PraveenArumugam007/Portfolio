# Portfolio

Personal portfolio website for Praveen A — Angular Developer with 3+ years of experience building scalable SPAs and high-performance web applications.

🌐 **Hosted:** [https://praveen-portfolio.example](https://praveen-portfolio.example)

## Features

- ✨ Fully responsive design with dark/light theme toggle
- 🎨 Smooth reveal animations on scroll
- 📱 Mobile-first approach with progressive enhancement
- ♿ Accessible markup and ARIA labels
- 🚀 Performance optimized with fast page loads
- 📧 Contact form integration (EmailJS ready)
- 🎯 SEO-friendly with structured data

## Tech Stack

- **Framework:** Astro 4.0+
- **Styling:** CSS3 with CSS custom properties
- **Interactivity:** Vanilla JavaScript
- **Animations:** CSS transitions and keyframes
- **Icons:** Emoji-based (theme-aware)

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main portfolio page
├── styles/
│   └── global.css           # Global styles and animations
└── env.d.ts                 # TypeScript definitions

public/
├── profile.jpeg             # Profile photo
└── resume.pdf               # Downloadable resume
```

## Sections

1. **Professional Summary** — Overview with 3+ years badge
2. **Skills & Technologies** — Chip-based skill display
3. **Professional Experience** — Work history and achievements
4. **Project Highlights** — Featured projects
5. **Education** — Degree and CGPA
6. **Awards & Certifications** — Industry recognition
7. **Contact** — Location, email, phone, and contact form

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Output: `./dist/`

### Preview

```bash
npm run preview
```

## Deployment

### GitHub Actions (Development Branch)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the `Development` branch.

**Workflow file:** `.github/workflows/deploy.yml`

#### Setup:

1. Create and push to a `Development` branch
2. Enable GitHub Pages in repository Settings → Pages
3. Select `gh-pages` branch as the deployment source
4. Update the `site` URL in `astro.config.mjs` to your domain

The pipeline:
- Installs dependencies
- Builds the Astro project
- Deploys the `dist/` folder to GitHub Pages

## Customization

### Theme

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: #44d9ff;
  --primary-alt: #ff6d70;
  --text: #e9f1ff;
  /* ...more variables */
}
```

### Content

Update page content in `src/pages/index.astro`

### Config

- **Site URL:** `astro.config.mjs`
- **EmailJS:** Update service IDs in the contact form script

## Contact

- 📧 Email: [praveenrumugam.job@gmail.com](mailto:praveenrumugam.job@gmail.com)
- 📱 Phone: +91 7418794326
- 📍 Location: Ettaiyapuram, India

## License

Personal portfolio — All rights reserved.
