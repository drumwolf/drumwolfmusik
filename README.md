# drumwolfmusik

A modern music editorial platform featuring alternative and indie music content, both past and present.

🔗 **Live Site:** [drumwolf.org](https://drumwolf.org)

## Overview

drumwolfmusik is a content-focused music blog built with Next.js 16 and TypeScript. The site uses MDX for content management, allowing rich formatting and embedded components within blog posts. It features a clean, responsive design with a focus on readability and performance.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Content:** MDX (Markdown + JSX)
- **Styling:** Tailwind CSS
- **Deployment:** Firebase Hosting
- **Font:** Geist (Vercel)

## Features

- ✨ Static site generation with Next.js App Router
- 📝 MDX content management for rich, component-based posts
- 🎨 Responsive design with Tailwind CSS
- 🚀 Optimized performance and SEO
- 📱 Mobile-first approach
- 🔗 Dynamic routing for blog posts and categories
- 📊 Sitemap generation
- 🎯 TypeScript for type safety

## Project Structure
```
drumwolfmusik/
├── app/                  # Next.js App Router pages
│   ├── [category]/      # Dynamic category pages
│   ├── posts/           # Blog post listing
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── YouTubeEmbed.tsx
├── content/            # MDX blog posts
│   └── posts/
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── public/             # Static assets
    └── images/
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/drumwolf/drumwolfmusik.git

# Navigate to project directory
cd drumwolfmusik

# Install dependencies
npm install
```

### Development
```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build
```bash
# Create production build
npm run build

# Generate static export
npm run export
```

### Deployment

The site is deployed to Firebase Hosting. To deploy:
```bash
# Build and deploy
npm run build
firebase deploy
```

## Content Management

Blog posts are written in MDX format and stored in `/content/posts/`. Each post includes:

- Frontmatter metadata (title, date, category, image)
- Rich content with Markdown formatting
- Embedded React components (YouTube embeds, etc.)

Example post structure:
```mdx
---
title: "Post Title"
date: "2026-01-26"
category: "posts"
image: "/images/2026-01-26.jpg"
---

Post content goes here...
```

## Key Features Implemented

### Dynamic Routing
- Category-based routing (`/[category]/[slug]`)
- Static path generation for all posts
- SEO-optimized metadata for each page

### Content System
- MDX parsing with custom components
- Frontmatter metadata extraction
- Category-based organization
- Date-sorted post listing

### Performance
- Static site generation (SSG)
- Optimized images
- Font optimization with next/font
- Minimal JavaScript payload

## Development Decisions

**Why Next.js App Router?** 
- Modern React Server Components
- Built-in SEO optimization
- File-based routing
- Static site generation support

**Why MDX?**
- Combines Markdown simplicity with React component power
- Easy content authoring
- Ability to embed interactive elements

**Why Static Export?**
- Fast hosting on Firebase
- No server required
- Excellent performance
- Low hosting costs

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Font: [Geist](https://vercel.com/font) by Vercel
- Deployed on [Firebase Hosting](https://firebase.google.com/products/hosting)

## Author

John Lee ([@drumwolf](https://github.com/drumwolf))

## License

This project is open source and available for reference.
