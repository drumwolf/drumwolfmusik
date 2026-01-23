import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <header className="border-b border-gray-200">
          <nav className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center font-sans">
              <a href="/" className="text-2xl font-bold">drumwolfmusik</a>
              <div className="space-x-6">
                <a href="/posts" className="hover:text-blue-600">Posts</a>
                <a href="/interviews" className="hover:text-blue-600">Interviews</a>
                <a href="/scenes" className="hover:text-blue-600">Scenes</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8 font-sans">
          {children}
        </main>
      </body>
    </html>
  )
}