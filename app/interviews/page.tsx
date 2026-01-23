import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function PostsPage() {
  const interviews = getAllPosts('interviews')

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Interviews</h1>
      <div className="space-y-8">
        {interviews.map(interview => (
          <article key={interview.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/interviews/${interview.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {interview.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(interview.date).toLocaleDateString()} · {interview.readingTime}
            </div>
            <p className="text-gray-700">{interview.description}</p>
            {interview.tags && (
              <div className="mt-2 flex gap-2">
                {interview.tags.map(tag => (
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