import Image from 'next/image'
import Link from 'next/link'
import Search from '@/components/Search'
import { SearchProvider } from '@/contexts/SearchContextProvider'
import SearchablePostGrid from '@/components/SearchablePostGrid'
import { Zap } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().map(({ content: _content, ...rest }) => rest)

  return (
    <SearchProvider>
      <section className="relative overflow-hidden border-b-2 border-primary h-48">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/images/cover_photo.jpg'}
            alt="Drumwolf cover"
            width={1024}
            height={192}
            className="w-full h-full object-cover filter contrast-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute z-12 top-2 right-0 w-71 hidden md:block">
          <Search />
        </div>
        <div className="relative z-10 px-8 h-full flex flex-col justify-end pb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black leading-[0.85] tracking-tighter mb-2 text-white">
            drumwolfmusik
          </h1>
          <div className="flex items-center gap-2 md:gap-4 text-white font-mono text-xs md:text-sm uppercase tracking-wider">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
            <span className="leading-tight">Alternative and Indie Musical Sounds, past and present</span>
          </div>
        </div>
      </section>

      <div className="px-8 pt-6 md:hidden">
        <Search />
      </div>

      {/* Featured Grid */}
      <section className="space-y-8 px-8 py-8">
        <div className="flex items-end justify-between border-b-2 border-primary pb-4">
          <h2 className="text-2xl font-display font-bold uppercase">Latest Spew</h2>
          <Link href="/posts" className="font-mono uppercase text-sm border-b border-current hover:text-accent pb-1 hidden md:block">
            View Articles
          </Link>
        </div>

        <SearchablePostGrid posts={posts} />
      </section>
    </SearchProvider>
  )
}
