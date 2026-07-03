# drumwolfmusik

A music editorial platform covering alternative and indie music, past and present. Features articles, interviews, and webcasts organized by category.

**Live site:** https://drumwolf.org

Developed using an AI-assisted workflow with Claude Code.

## Stack

- **Next.js 16** (App Router) — framework with server components and middleware
- **TypeScript** — end-to-end type safety
- **MDX** — content authoring with embedded React components
- **Tailwind CSS v4** — styling
- **Supabase** — authentication and user profiles (via `@supabase/ssr`)
- **Radix UI** — accessible UI primitives
- **Firebase Hosting** — static deployment

## Features

- MDX content pipeline with frontmatter parsing via `gray-matter`
- Dynamic routing by category and slug (`/[category]/[slug]`)
- Static site generation for all content pages
- Reading time calculation on each post
- Supabase Auth with SSR — login, signup, and user profiles
- Next.js middleware for route protection on authenticated pages
- Search with React Context
- Media embeds: YouTube, Bandcamp, MixCloud
- SEO: auto-generated sitemap and robots.txt
- URL redirects for legacy post paths (in both `next.config.ts` and `firebase.json`)

## Project Structure

```
drumwolfmusik/
├── app/                      # Next.js App Router
│   ├── [category]/[slug]/    # Dynamic post pages
│   ├── auth/                 # Auth server actions + OAuth callback
│   ├── login/                # Login page
│   ├── signup/               # Signup page
│   ├── profile/              # User profile pages
│   ├── posts/                # Posts listing
│   ├── interviews/           # Interviews listing
│   ├── webcasts/             # Webcasts listing
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt
│   └── layout.tsx            # Root layout
├── components/               # React components
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Search.tsx
│   ├── SearchablePostGrid.tsx
│   ├── BandcampEmbed.tsx
│   ├── MixCloudEmbed.tsx
│   ├── YouTubeEmbed.tsx
│   └── ui/                   # Radix UI-based primitives
├── content/                  # MDX source files
│   ├── posts/
│   ├── interviews/
│   └── webcasts/
├── contexts/                 # React context providers
│   ├── LoginContextProvider.tsx
│   └── SearchContextProvider.tsx
├── lib/                      # Data access and utilities
│   ├── posts.ts              # MDX parsing and post queries
│   ├── profile.ts            # User profile queries
│   └── supabase/             # Supabase client (server + client + admin)
├── middleware.ts              # Route protection
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project (for auth)

### Environment variables

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deployment

```bash
npm run build
firebase deploy
```

## Content Management

Posts are written in MDX and stored in `/content/` by category. Each file includes frontmatter:

```mdx
---
title: "Post Title"
slug: "post-slug"
date: "2026-01-26"
category: "posts"
image: "/images/cover.jpg"
---

Post content here...
```

The `slug` field in frontmatter is the canonical URL identifier. Filename-based slugs are supported as a fallback for older posts.
