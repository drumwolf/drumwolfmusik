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
        
        {/* Overlay - using bg-black/30 syntax instead */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Navigation Content */}
        <nav className="relative z-20 h-full max-w-4xl mx-auto px-8 flex items-center">
          <div className="flex justify-between items-center font-sans w-full">
            <Link href="/" className="text-2xl md:text-2xl lg:text-3xl font-display font-black leading-[0.85] tracking-tighter mb-2 text-white">
              drumwolfmusik
            </Link>
            <div className="space-x-6">
              <Link href="/posts" className="hover:text-blue-400 text-white drop-shadow-lg">Articles</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
