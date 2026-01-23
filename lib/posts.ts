import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Post, PostMetadata } from '@/types/blog'

const contentDirectory = path.join(process.cwd(), 'content')

export function getPostSlugs(category: string): string[] {
  const categoryPath = path.join(contentDirectory, category)
  if (!fs.existsSync(categoryPath)) {
    return []
  }
  return fs.readdirSync(categoryPath).filter(file => file.endsWith('.mdx'))
}

export function getPostBySlug(category: string, slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug: realSlug,
    content,
    readingTime: stats.text,
    ...(data as PostMetadata),
  }
}

export function getAllPosts(category?: string): Post[] {
  const categories = category ? [category] : ['posts', 'interviews', 'scenes']
  const posts: Post[] = []

  categories.forEach(cat => {
    const slugs = getPostSlugs(cat)
    const categoryPosts = slugs.map(slug => getPostBySlug(cat, slug))
    posts.push(...categoryPosts)
  })

  return posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}
