'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <header className="border-b border-gray-200 bg-gray-300">
      <nav className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center font-sans">
            <Link href="/" className="text-2xl font-bold">drumwolfmusik</Link>
            <div className="space-x-6">
            <Link href="/posts" className="hover:text-blue-600">Posts</Link>
            {/* <Link href="/interviews" className="hover:text-blue-600">Interviews</Link>
            <Link href="/scenes" className="hover:text-blue-600">Scenes</Link> */}
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
