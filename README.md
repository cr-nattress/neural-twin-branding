# NeuroTwin

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-blue) ![Next.js](https://img.shields.io/badge/next.js-16-black)

**Create your AI-powered digital persona. Chat with a version of yourself that captures your unique perspective.**

## Overview

NeuroTwin is a cutting-edge platform that transforms your personality, knowledge, and expertise into an interactive AI-powered digital persona. Whether you're an individual looking to explore your own thinking or an organization seeking to preserve institutional knowledge, NeuroTwin enables you to create, interact with, and share intelligent digital twins that authentically represent your perspective.

This repository contains the **official marketing landing page** built with modern web technologies, featuring a stunning animated neural network background and comprehensive product information.

---

## ✨ Key Features

- 🧠 **AI-Powered Persona Creation** - Advanced algorithms analyze your information to build an authentic digital twin
- 💬 **Interactive Conversations** - Chat naturally with your digital twin and explore how it thinks
- 📚 **Knowledge Preservation** - Capture and share your expertise with others
- 🏢 **Enterprise Ready** - Solutions for both individuals and organizations
- 🎨 **Modern Design** - Beautiful, responsive interface with animated neural network visualization
- ⚡ **Optimized Performance** - Built on Next.js 16 with minimal dependencies and blazing-fast load times
- 🔒 **TypeScript Safe** - Full type safety with strict TypeScript configuration

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/neural-twin-branding.git
cd neural-twin-branding

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` in your browser. The site will reload automatically as you make changes.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Run linting checks
npm run lint
```

---

## 📖 Usage Examples

### Development Workflow

The project uses Next.js App Router with React 19 and TypeScript. Here's a typical workflow:

**1. Modify the Homepage**

Edit `app/page.tsx` to update marketing content:

```typescript
'use client'

import { NeuralBackground } from './components/NeuralBackground'

export default function Home() {
  const handleLoginRedirect = () => {
    const appUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://neuro-twin-app.netlify.app/'
    window.location.href = appUrl
  }

  return (
    <div className="min-h-screen bg-white">
      <NeuralBackground />
      {/* Rest of your content */}
    </div>
  )
}
```

**2. Add Styling with Tailwind CSS**

Use utility-first classes for responsive, maintainable styling:

```typescript
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
      Your Section Title
    </h3>
  </div>
</section>
```

**3. Customize the Neural Background Animation**

Edit `app/components/NeuralBackground.tsx` to adjust:
- Animation timing and easing
- Neural network node colors and positions
- Gradient effects and glow intensity
- Responsive sizing parameters

---

## 🏗️ Project Architecture

```
neural-twin-branding/
├── app/                              # Next.js App Router
│   ├── page.tsx                     # Marketing homepage
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles & animations
│   └── components/
│       └── NeuralBackground.tsx     # Animated SVG background
├── public/                          # Static assets (if needed)
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS customization
├── next.config.mjs                  # Next.js configuration
└── CLAUDE.md                        # AI assistant guidance
```

### Component Structure

The landing page follows a standard marketing layout:

```
HomePage (page.tsx)
├── Navigation Bar
├── Hero Section
├── How It Works (3 key steps)
├── Powerful Applications (Individual & Organization use cases)
├── Call-to-Action Section
└── Footer (Product, Company, Legal, Connect)
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16 | React meta-framework with SSR |
| **UI Library** | React 19 | Component-based UI |
| **Styling** | Tailwind CSS 3 | Utility-first CSS framework |
| **Language** | TypeScript 5 | Type-safe JavaScript |
| **CSS Processing** | PostCSS 12 | CSS vendor prefixing |

---

## 🎯 For Individuals

Transform your personality and expertise:
- 🔍 **Self-Exploration** - Understand your own thinking patterns and perspective
- 🎓 **Personal Coaching** - Create an AI mentor that embodies your teaching philosophy
- 📢 **Share Knowledge** - Help others learn from your expertise
- 💾 **Legacy Creation** - Preserve your perspective for the future

## 🏢 For Organizations

Capture and leverage institutional knowledge:
- 📊 **Knowledge Capture** - Document expert decision-making and organizational wisdom
- 🎯 **Expert Personas** - Enable employees to access expert-level guidance
- 📚 **Training & Development** - Accelerate employee onboarding with AI mentors
- 🤖 **Customer Service** - Deploy AI-powered support that reflects your brand voice

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Optional: Configure app URLs for different environments
NODE_ENV=development  # Automatically set by npm scripts
```

### Code Quality

The project enforces:
- ✅ **TypeScript Strict Mode** - Catches type errors at compile time
- ✅ **ESLint** - Code quality and consistency checks
- ✅ **Responsive Design** - Mobile-first, tested across breakpoints
- ✅ **Performance** - Next.js optimizations for fast load times

### Styling Guidelines

Use Tailwind CSS utility classes consistently:

```typescript
// ✅ Good: Responsive classes with semantic structure
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">

// ❌ Avoid: Inline styles or custom CSS for common patterns
<div style={{display: 'grid', gap: '24px'}}>
```

---

## 📦 Dependencies

**Production (3 packages - lightweight):**
- `next` ^16.0.0 - React framework
- `react` ^19.0.0 - UI library
- `react-dom` ^19.0.0 - DOM rendering

**Development (6 packages):**
- `typescript` ^5.0.0 - Type checking
- `tailwindcss` ^3.0.0 - Styling
- `autoprefixer` ^10.0.0 - CSS vendor prefixes
- `@types/node`, `@types/react`, `@types/react-dom` - TypeScript definitions

Minimal dependencies = faster builds, smaller bundle, fewer security concerns.

---

## 🚀 Deployment

### Deploy to Netlify (Recommended)

```bash
# Build the project
npm run build

# Push to GitHub and connect to Netlify
# Netlify will automatically detect Next.js and deploy
```

**Environment variables on Netlify:**
- `NODE_VERSION`: 18 (or your preferred version)
- `NEXT_PUBLIC_*`: Frontend environment variables

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel provides optimal Next.js deployment with automatic optimizations.

---

## 🤝 Contributing

We welcome contributions! Whether it's bug fixes, feature requests, or documentation improvements, your help makes NeuroTwin better.

### Getting Started

1. **Fork the repository** - Click the fork button on GitHub
2. **Clone your fork** - `git clone https://github.com/yourusername/neural-twin-branding.git`
3. **Create a feature branch** - `git checkout -b feature/amazing-feature`
4. **Install dependencies** - `npm install`
5. **Start development** - `npm run dev`

### Making Changes

- Keep changes focused and atomic (one feature per PR)
- Follow the existing code style and Tailwind conventions
- Test responsive design across different screen sizes
- Update documentation if adding new features
- Write meaningful commit messages

### Submitting a Pull Request

1. Push to your feature branch
2. Create a [Pull Request](https://github.com/yourusername/neural-twin-branding/pulls) with a clear description
3. Include screenshots of visual changes
4. Link any related issues
5. Wait for code review and CI checks

### Areas for Contribution

- 🎨 **Design & UX** - Improve the visual design and user experience
- 📝 **Content** - Update marketing copy and messaging
- 🐛 **Bug Fixes** - Report and fix issues
- 📚 **Documentation** - Improve guides and examples
- ⚡ **Performance** - Optimize load times and animations
- 🧪 **Testing** - Add unit and E2E tests
- ♿ **Accessibility** - Improve a11y compliance

### Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for everyone.

---

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Guidance for AI assistants working with this codebase
- **[Next.js Docs](https://nextjs.org/docs)** - Official Next.js documentation
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling framework reference
- **[React Docs](https://react.dev)** - React 19 documentation

---

## 🐛 Reporting Issues

Found a bug? Help us improve:

1. Check if the issue already exists
2. Create a [GitHub Issue](https://github.com/yourusername/neural-twin-branding/issues) with:
   - Clear title describing the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Browser/environment details
   - Screenshots if relevant

---

## 🙋 Support & Community

- 💬 **GitHub Discussions** - Ask questions and share ideas (when enabled)
- 🐦 **Twitter** - Follow [@NeuroTwin](https://twitter.com) for updates
- 📧 **Email** - Contact support@neurotwin.io
- 💬 **Discord** - Join our community (coming soon)

---

## 📈 Roadmap

Future enhancements planned:

- [ ] Interactive demo on landing page
- [ ] Blog section for thought leadership
- [ ] Pricing calculator
- [ ] Case studies and testimonials
- [ ] Video tutorials
- [ ] Mobile app promotion
- [ ] Advanced analytics dashboard
- [ ] Integration showcase

See [Issues](https://github.com/yourusername/neural-twin-branding/issues) for the full list of planned features and known issues.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2025 NeuroTwin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

## 🙏 Acknowledgments

- Built with [Next.js 16](https://nextjs.org) - The React Framework for Production
- Styled with [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- Powered by [React 19](https://react.dev) - The JavaScript UI library
- Type-safe with [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types

Special thanks to our contributors, supporters, and the open-source community.

---

## 📊 Project Stats

- **Built with** Next.js 16 + React 19 + TypeScript
- **Size** Minimal with only 3 production dependencies
- **Performance** Optimized for speed with Next.js built-in optimizations
- **Type Safety** 100% TypeScript with strict mode
- **Browser Support** All modern browsers (ES2020+)
- **License** MIT

---

**Ready to create your digital twin?** [Visit NeuroTwin](https://neuro-twin-app.netlify.app/) to get started.

---

*Last updated: October 2025 | [Report an issue](https://github.com/yourusername/neural-twin-branding/issues) | [Suggest improvements](https://github.com/yourusername/neural-twin-branding/discussions)*
