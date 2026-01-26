'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <header className="relative border-b border-gray-200 overflow-hidden">
      <div className="relative h-20">
        {/* Background Image */}
        <Image 
          src="/images/cover_photo.jpg" 
          alt="Cover" 
          fill
          className="object-cover"
          style={{ position: 'absolute' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Navigation Content */}
        <nav className="relative z-20 h-full max-w-4xl mx-auto px-8 flex items-center">
          <div className="flex justify-between items-center font-sans w-full">
            <Link href="/" className="text-2xl font-display font-black drop-shadow-lg leading-[0.85] tracking-tighter text-white">drumwolfmusik</Link>
            <Link href="/posts" className="hover:text-blue-400 text-white drop-shadow-lg leading-none">Articles</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
