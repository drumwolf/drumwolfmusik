import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/Header'
import type { Metadata } from "next";
import Script from "next/script"

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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QXYRPWDR0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0QXYRPWDR0');
          `}
        </Script>
        <Header />
        <main className="max-w-4xl mx-auto font-sans bg-white min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
