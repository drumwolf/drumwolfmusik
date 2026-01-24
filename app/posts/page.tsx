import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function PostsPage() {
  const posts = getAllPosts('posts')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 bg-gray-600 text-white text-center py-1 rounded-sm shadow">
        Posts
      </h1>
      <div className="space-y-8 px-4">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(post.date).toLocaleDateString()} · {post.readingTime}
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