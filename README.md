<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="120" height="120" />
</p>

<h1 align="center">React 19 Playground</h1>

<p align="center">
  <strong>A hands-on sandbox for exploring modern React 19 features, patterns, and best practices.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19.2" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.9" />
  <img src="https://img.shields.io/badge/React_Compiler-1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Compiler" />
</p>

---

## About

**React 19 Playground** is a living lab built for experimenting with the latest React ecosystem. Each page is a self-contained feature demo — a place to break things, learn how they work under the hood, and build intuition for modern React patterns.

Built on the bleeding edge: **Vite 8** with Rolldown, the official **React Compiler** for automatic memoization, and **React Router 7** for type-safe routing.

## Features

| Page | What it explores |
|------|-----------------|
| **React 19 Overview** | Compiler, new hooks & APIs overview with interactive cat animations |
| **useEffect** | Side effects, data fetching, loading & error states |
| **useEffectEvent** | Stable callbacks inside Effects without stale closures |
| **use()** | Reading Promises during render with Suspense & ErrorBoundary |
| **Activity** | Hiding UI while preserving component state |
| **Form Actions** | Form submission with pending state and error handling |
| **FlexBox** | Interactive flexbox playground with live CSS output |
| **FlexBox Cards** | Responsive card grid layouts |
| **SVG Icons** | SVG as React components via vite-plugin-svgr |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19.2 |
| **Build** | Vite 8 + Rolldown |
| **Language** | TypeScript 5.9 |
| **Optimization** | React Compiler (automatic memoization) |
| **Routing** | React Router 7 |
| **Styling** | SASS (modern compiler) |
| **SVG** | vite-plugin-svgr |
| **Linting** | ESLint 10 + typescript-eslint |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/msverlovych/react-features.git
cd react-features

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start exploring.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check + production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
  components/       # Reusable UI (Navbar, Footer, Card, Loader, ErrorBoundary)
  layouts/          # Page layout wrappers (fixed header/footer, centered content)
  pages/            # Feature demo pages (one folder per route)
  router/           # Route definitions
  sass/             # Global styles, variables, mixins
  assets/           # Static assets (images, SVGs)
```

## License

This project is for learning and experimentation purposes.

---

<p align="center">
  Built with curiosity and <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="16" height="16" /> by <a href="https://github.com/msverlovych">msverlovych</a>
</p>
