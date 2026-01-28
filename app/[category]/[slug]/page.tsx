import * as runtime from 'react/jsx-runtime'

import { compile, run } from '@mdx-js/mdx'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponents } from '@/mdx-components'
import { getDate } from '@/utils/date'

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

  // Compile the MDX content (frontmatter already stripped by gray-matter)
  const compiled = String(await compile(post.content, {
    outputFormat: 'function-body',
  }))

  const mdxComponents = useMDXComponents({})
  const { default: MDXContent } = await run(compiled, {
    ...runtime,
    useMDXComponents: () => mdxComponents,
  } as any)

  return (
    <article className="pb-8">
      <div className="px-8">
        <header className="mb-8 pt-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-700 mb-2">
            {getDate(post.date)} · {post.readingTime}
          </div>
          <p className="text-gray-700 mb-2">{post.description}</p>
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
        <hr className="border-gray-300 mb-8" />
        <div className="prose prose-lg max-w-none">
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </article>
  )
}