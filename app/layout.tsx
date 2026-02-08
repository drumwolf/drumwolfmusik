import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Footer from '@/components/Footer'
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
  title: 'drumwolfmusik - Underground Sounds, Then and Now',
  description: 'In-depth music coverage, interviews, and scene overviews',
  keywords: ['music blog', 'band interviews', 'music scenes', 'album reviews'],
  metadataBase: new URL('https://drumwolf.org'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'DmRG2D2ucbT9CfGoQngzrImZSTavAS9Qkxw0E_1gPkM',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Google Analytics - only load in production */}
        {isProduction && (
          <>
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
          </>
        )}
        <Header />
        <main className="content-width bg-white flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
