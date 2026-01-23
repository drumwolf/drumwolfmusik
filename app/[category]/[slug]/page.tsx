import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    category: post.category,
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const post = getPostBySlug(category, slug)
  
  return {
    title: `${post.title} | drumwolfmusik`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params
  const post = getPostBySlug(category, slug)
  
  if (!post) {
    notFound()
  }

  // Dynamic import of MDX content
  let MDXContent
  try {
    const module = await import(`@/content/${category}/${slug}.mdx`)
    MDXContent = module.default
  } catch (error) {
    console.error('Error loading MDX:', error)
    notFound()
  }

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          {new Date(post.date).toLocaleDateString()} · {post.readingTime}
          {post.band && ` · ${post.band}`}
        </div>
        {post.tags && (
          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm bg-gray-200 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none">
        <MDXContent />
      </div>
    </article>
  )
}