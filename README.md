# YL Cleaning & Contracting Website

## Project Overview

This project is a professional, responsive website for **YL Cleaning & Contracting**, built to showcase cleaning and contracting services with a luxury, minimalistic aesthetic inspired by high-end brands.

## Motivation

I tackled this project to:

* **Practice modern web development** with React, Vite, and TypeScript.
* **Master utility‑first styling** using Tailwind CSS.
* **Solidify my understanding of version control** and GitHub workflows.
* **Implement continuous integration and deployment (CI/CD)** via GitHub Actions and Vercel.

## What I Learned

1. **Git & GitHub**

   * Initialized repositories, wrote meaningful commit messages, managed `.gitignore` and `.gitattributes` for cross‑platform consistency.
   * Created branches for feature work and merged via pull requests.

2. **React & TypeScript**

   * Built a component‑based UI structure with React Router for multi‑page navigation.
   * Enforced type safety with TypeScript, and learned to resolve case‑sensitive import issues.

3. **Tailwind CSS**

   * Configured Tailwind with Vite: set up `tailwind.config.ts`, PostCSS plugin, and VS Code IntelliSense.
   * Developed custom themes (fonts, colors) and responsive layouts with utility classes.

4. **CI/CD**

   * Wrote a GitHub Actions workflow to lint and build on each push/PR.
   * Deployed automatically to Vercel with zero‑configuration builds.

## Project Structure

```
client/
├─ public/              # Static assets (logo, images)
├─ src/
│  ├─ assets/           # Image imports (if any)
│  ├─ components/       # Reusable UI components (Navbar, Layout, Logo)
│  ├─ pages/            # Route components (Home, Services, Pricing, Contact, Reviews, About)
│  ├─ index.css         # Tailwind directives & font imports
│  ├─ main.tsx          # React entry point with BrowserRouter
│  └─ App.tsx           # Route definitions wrapped in Layout
├─ tailwind.config.ts   # Tailwind configuration and content paths
├─ postcss.config.js    # PostCSS plugins (Tailwind, Autoprefixer)
├─ tsconfig.json        # TypeScript compiler options
└─ .github/workflows/   # CI pipeline definitions
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/kentylee/YLC.git
   cd YLC/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview the production build**

   ```bash
   npm run preview
   ```

## Deployment

This site is deployed on [Vercel](https://vercel.com) and will automatically redeploy on every push to `main`.

## License

This project is provided for learning and demonstration purposes.
