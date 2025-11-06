# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NeuroTwin Marketing Landing Page** - A Next.js-based marketing site for NeuroTwin, a digital persona creation platform. The site features an animated neural network background, product information, use cases, and a CTA to the main application.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, minimal dependencies (3 production packages)

## Essential Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:3000)
npm run lint            # Run ESLint checks
npm run build           # Create production build
npm run start           # Start production server
```

### Common Tasks
```bash
npm install             # Install dependencies
npm ls                  # View dependency tree
npm outdated           # Check for outdated packages
npm audit              # Security audit
```

## Architecture Overview

### Directory Structure
- **`app/`** - Next.js App Router (React 19 with Server/Client Components)
  - `page.tsx` - Marketing homepage (223 lines, client component)
  - `layout.tsx` - Root layout with metadata and fonts
  - `globals.css` - Global styles and CSS animations
  - `components/NeuralBackground.tsx` - SVG-based neural network animation (500 lines)

### Key Design Decisions

1. **Client Components** - Both `page.tsx` and `NeuralBackground.tsx` use `'use client'` to enable interactive login redirects

2. **Environment-Based Routing** - App URL changes based on NODE_ENV:
   - Development: `http://localhost:3000`
   - Production: `https://neuro-twin-app.netlify.app/`

3. **Styling Architecture**:
   - **Tailwind CSS** for utility-first styling
   - **PostCSS + Autoprefixer** for CSS processing
   - **SVG animations** for neural network background with custom CSS keyframes
   - **Color scheme**: Primary blue (#2563eb), Secondary purple (#9333ea)

4. **SVG Background Animation** - The `NeuralBackground` component creates an interactive animated neural network using:
   - Linear gradients for depth
   - CSS keyframe animations with staggered delays
   - Gaussian blur filters for glow effects
   - Responsive sizing to parent container

### Component Hierarchy
```
RootLayout (layout.tsx)
  └── HomePage (page.tsx) [use client]
      ├── NeuralBackground (components/NeuralBackground.tsx) [use client]
      └── Marketing Sections
          ├── Navigation
          ├── Hero Section
          ├── Features/How it Works
          ├── Use Cases
          ├── CTA Section
          └── Footer
```

## Code Patterns & Conventions

### TypeScript Configuration
- Strict mode enabled
- Target: ES2020
- Path alias: `@` refers to root directory
- React JSX: `react-jsx`

### State & Event Handling
- Modern React hooks (useState, useEffect)
- Event handlers for login redirects using environment-based URLs
- Client component boundary clearly defined with `'use client'`

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- SVG background scales responsively
- Flex/Grid layouts for content organization

## Dependencies

**Production (3):**
- `next` ^16.0.0
- `react` ^19.0.0
- `react-dom` ^19.0.0

**Development (6):**
- `typescript` ^5.0.0
- `tailwindcss` ^3.0.0
- `autoprefixer` ^10.0.0
- `@types/node`, `@types/react`, `@types/react-dom`

**Note:** Minimal dependency footprint keeps the build fast and secure.

## Configuration Files

- **`next.config.mjs`** - Next.js configuration with strict mode enabled
- **`tsconfig.json`** - TypeScript with strict mode and ES2020 target
- **`tailwind.config.ts`** - Tailwind CSS with custom color palette
- **`postcss.config.js`** - PostCSS with Tailwind and Autoprefixer

## Current Limitations & Gaps

- **No testing framework** - Consider adding Jest/Vitest if expanding features
- **No E2E testing** - Could benefit from Playwright/Cypress for marketing page interactions
- **No API routes** - Currently static marketing site; add `/api` routes if backend integration needed
- **No error boundaries** - Consider adding React Error Boundaries for production resilience
- **No environment validation** - App URLs are hardcoded; consider using a config file or env validation

## Common Development Tasks

### Adding a New Section to Homepage
1. Create JSX/TSX section in `app/page.tsx`
2. Style with Tailwind utility classes
3. Use responsive classes for mobile-first design: `sm:`, `md:`, `lg:`

### Modifying the Neural Background
- Edit SVG markup in `app/components/NeuralBackground.tsx`
- Adjust CSS animations in the `<style>` tag within the component
- Animation timing and easing can be tweaked in keyframe definitions
- Color gradients are defined in `<linearGradient>` elements

### Adding Fonts or Global Styles
- Import fonts in `app/layout.tsx` (Next.js font optimization)
- Add global CSS to `app/globals.css`
- Component-scoped styles use Tailwind class utilities

### Environment Variables
- Create `.env.local` for local overrides (not in git)
- Access in code via `process.env.NODE_ENV` or add typed env vars in `next-env.d.ts`
- Production build uses standard environment

## Deployment

- **Primary App:** Deployed to Netlify at `https://neuro-twin-app.netlify.app/`
- **Marketing Site:** This repository (deployment target to be configured)
- **Build Output:** `.next/` directory contains optimized production build
- **Static Files:** Automatically optimized by Next.js

## Performance Considerations

- Next.js App Router provides automatic code splitting
- Tailwind CSS is purged and minified in production
- SVG animations use CSS transforms (GPU-accelerated)
- Image optimization via Next.js Image component (if needed)
- Minimal dependencies reduce bundle size and load time

## Useful Development Patterns

### Redirecting Based on Environment
```typescript
const appUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://neuro-twin-app.netlify.app/'

router.push(appUrl)
```

### Creating Responsive Tailwind Layouts
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

### Client Component Interactions
```typescript
'use client'

import { useState } from 'react'

export default function Component() {
  const [state, setState] = useState(false)
  // ...
}
```
