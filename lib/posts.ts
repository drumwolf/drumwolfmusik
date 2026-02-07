import { Post, PostMetadata } from '@/types/blog'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export function getPostSlugs(category: string): string[] {
  const categoryPath = path.join(contentDirectory, category)
  if (!fs.existsSync(categoryPath)) {
    return []
  }
  return fs.readdirSync(categoryPath).filter(file => file.endsWith('.mdx'))
}

export function getPostBySlug(category: string, slug: string): Post {
  // First, try to find by frontmatter slug
  const allSlugs = getPostSlugs(category)
  
  for (const filename of allSlugs) {
    const fullPath = path.join(contentDirectory, category, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatterSlug = (data as PostMetadata).slug
    
    // If this post has a frontmatter slug that matches, use it
    if (frontmatterSlug === slug) {
      const stats = readingTime(content)
      return {
        slug: frontmatterSlug,
        content,
        readingTime: stats.text,
        ...(data as PostMetadata),
      }
    }
  }
  
  // Fallback: try filename-based slug (for backwards compatibility)
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`)
  
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug: (data as PostMetadata).slug || realSlug,
      content,
      readingTime: stats.text,
      ...(data as PostMetadata),
    }
  }
  
  throw new Error(`Post not found: ${category}/${slug}`)
}

export function getAllPosts(category?: string): Post[] {
  // const categories = category ? [category] : ['posts', 'interviews', 'scenes']
  const categories = category ? [category] : ['posts']
  const posts: Post[] = []

  categories.forEach(cat => {
    const slugs = getPostSlugs(cat)
    const categoryPosts = slugs.map(slug => getPostBySlug(cat, slug))
    posts.push(...categoryPosts)
  })

  return posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}
