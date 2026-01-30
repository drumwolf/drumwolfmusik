import Link from 'next/link'
import { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { getDate } from '@/utils/date'

export const metadata: Metadata = {
  title: 'Posts | drumwolfmusik',
  description: 'Browse all music posts and articles',
  alternates: {
    canonical: '/posts',
  },
}

export default function PostsPage() {
  const posts = getAllPosts('posts')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 bg-gray-600 text-white text-center py-1 shadow">
        Posts
      </h1>
      <div className="space-y-8 px-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-2">
              {getDate(post.date)} · {post.readingTime}
            </div>
            <p className="text-gray-700">{post.description}</p>
            {post.tags && (
              <div className="mt-2 flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
