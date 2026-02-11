'use client'

import "../app/globals.css";

import { ArrowUpRight, Disc } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import { SearchablePost } from '@/types/blog'
import { getDateString } from '@/utils/date'
import { useSearch } from '@/contexts/SearchContextProvider'

interface SearchablePostGridProps {
  posts: SearchablePost[]
}

export default function SearchablePostGrid({ posts }: SearchablePostGridProps) {
  const { debouncedQuery } = useSearch()

  const isSearching = debouncedQuery.trim().length > 0
  const needle = debouncedQuery.trim().toLowerCase()

  const filtered = isSearching
    ? posts.filter(post => {
        const haystack = [
          post.title,
          post.description,
          ...(post.tags ?? []),
        ].join(' ').toLowerCase()
        return haystack.includes(needle)
      })
    : posts.slice(0, 3)

  return (
    <>
      {isSearching && (
        <>
          <p className="font-mono text-sm text-muted-foreground mb-6">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'} found
          </p>
          {filtered.length === 0 ? (
            <div className="content-width md:w-screen">
              <p className="font-mono text-sm text-muted-foreground">
                No results found for &ldquo;{debouncedQuery.trim()}&rdquo;
              </p>
            </div>
          ) : (<></>)}
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(post => (
          <article key={post.slug} className="group">
            <Link href={`/${post.category}/${post.slug}`}>
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-primary mb-6 brutal-shadow group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all duration-300">
                <Image
                  src={`/images/${post.date}.jpg`}
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
                  <span>{getDateString(post.date)}</span>
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
    </>
  )
}
