import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Link from 'next/link'
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'drumwolfmusik - Music Blog',
  description: 'In-depth music coverage, interviews, and scene overviews',
  keywords: ['music blog', 'band interviews', 'music scenes', 'album reviews'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        <main className="max-w-4xl mx-auto font-sans bg-white min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}