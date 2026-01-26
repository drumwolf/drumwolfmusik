import { ArrowUpRight, Disc } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 10)

  return (
    <>
      <Image src="/images/cover_photo.jpg" width={896} height={192} alt="Musik" className="w-full h-48 object-cover mb-8" />

      {/* Featured Grid */}
      <section className="space-y-8 px-8 py-8">
        <div className="flex items-end justify-between mb-16 border-b-2 border-primary pb-4">
          <h2 className="text-2xl font-display font-bold uppercase">Latest Features</h2>
          <Link href="/posts" className="font-mono uppercase text-sm border-b border-current hover:text-accent pb-1 hidden md:block">
            View Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.slug} className={`group`}>
              <Link href={`/${post.category}/${post.slug}`}>
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-primary mb-6 brutal-shadow group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all duration-300">
                  <Image 
                    src={`/images/${post.slug}.jpg`}
                    width="10"
                    height="10"
                    alt="Vinyl Record" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 font-mono text-xs uppercase border border-primary text-black">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase">
                    <Disc className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-sm uppercase underline decoration-2 decoration-accent underline-offset-4">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}