import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts().slice(0, 10)

  return (
    <>
      <img src="/images/cover_photo.jpg" alt="Musik" className="w-full h-48 object-cover mb-8" />
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/${post.category}/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(post.date).toLocaleDateString()} · {post.readingTime}
              {post.band && ` · ${post.band}`}
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
    </>
  )
}