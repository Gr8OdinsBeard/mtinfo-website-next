# Technology Stack

## Framework & Runtime
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript development
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing with Tailwind plugin
- **Geist Font** - Vercel's optimized font family

## Development Tools
- **ESLint** - Code linting with Next.js and TypeScript rules
- **Turbopack** - Fast bundler for development

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
pnpm dev            # Alternative with pnpm
```

### Build & Deploy
```bash
npm run build       # Production build
npm run start       # Start production server
npm run lint        # Run ESLint checks
```

## Configuration Notes
- Uses App Router (not Pages Router)
- TypeScript strict mode enabled
- Base URL set to `src/` for cleaner imports
- Path aliases configured for `@/styles/*` and `@/components/*`
- ES2017 target for broad browser compatibility