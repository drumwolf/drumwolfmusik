import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/Header'
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="max-w-4xl mx-auto font-sans bg-white min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
