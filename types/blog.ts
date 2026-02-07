export interface PostMetadata {
  title: string
  date: string
  slug?: string
  description: string
  author?: string
  tags?: string[]
  category: 'posts' | 'interviews' | 'scenes'
  band?: string
  location?: string
}

export interface Post extends PostMetadata {
  slug: string
  content: string
  readingTime: string
}
