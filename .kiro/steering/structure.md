# Project Structure

## Root Organization
```
mtinfo-website/          # Main Next.js application
├── src/                 # Source code (baseUrl configured)
│   └── app/            # Next.js App Router pages
├── public/             # Static assets
├── package.json        # Dependencies and scripts
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.mjs   # ESLint configuration
└── postcss.config.mjs  # PostCSS/Tailwind configuration
```

## Source Structure
- **src/app/** - App Router pages and layouts
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind
  - `favicon.ico` - Site favicon

## Import Conventions
- Use path aliases: `@/components/*` and `@/styles/*`
- Relative imports from `src/` base directory
- TypeScript strict mode enforced

## File Naming
- React components: PascalCase (e.g., `MyComponent.tsx`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Styles: kebab-case or camelCase
- Config files: lowercase with extensions