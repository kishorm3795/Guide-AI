import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: "AI & Productivity Tools Directory",
    template: '%s | AI Tools Directory'
  },
  description: "Discover the best AI tools for productivity, writing, automation, research, and more. Curated directory of 50+ AI tools with reviews, comparisons, and recommendations.",
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  authors: [{ name: 'AI Tools Team', url: 'https://yourdomain.com/about' }],
  creator: '@yourtwitterhandle',
  publisher: 'AI Tools Directory',
  keywords: ['AI tools', 'productivity tools', 'ChatGPT', 'AI writing', 'automation', 'research tools'],
  classification: 'AI Tools Directory',
  referrer: 'origin-when-cross-origin',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AI & Productivity Tools Directory - 50+ Curated AI Tools',
    description: 'Discover the best AI tools for productivity, writing, automation, research, and more. Reviews, comparisons, and expert recommendations.',
    url: 'https://yourdomain.com',
    siteName: 'AI Tools Directory',
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Tools Directory - Best AI Productivity Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Productivity Tools Directory',
    description: 'Discover 50+ curated AI tools for productivity, writing, and automation.',
    creator: '@yourtwitterhandle',
    images: ['/og-image-home.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
