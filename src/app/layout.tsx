import type { Metadata } from 'next';
import './globals.compiled.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import SiteNav from '@/components/ui/SiteNav';
import GlobalSpotlight from '@/components/ui/GlobalSpotlight';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://anjimaraj.com'),
  title: {
    default: 'Amar — Marketing · Media · Creativity',
    template: '%s | Amar',
  },
  description: 'Helping brands communicate better through marketing, media and creativity. Strategic storytelling, digital campaigns, social media, AI marketing, and creative production.',
  keywords: ['Digital Marketing', 'Marketing Strategy', 'Social Media', 'Content Marketing', 'AI Marketing', 'Creative Production', 'Brand Marketing', 'Amar'],
  authors: [{ name: 'Amar' }],
  creator: 'Amar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.SITE_URL || 'https://anjimaraj.com',
    siteName: 'Amar',
    title: 'Amar — Marketing · Media · Creativity',
    description: 'Helping brands communicate better through marketing, media and creativity.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amar — Marketing · Media · Creativity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amar — Marketing · Media · Creativity',
    description: 'Helping brands communicate better through marketing, media and creativity.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amar',
  jobTitle: 'Marketing & Creative Professional',
  description: 'Helping brands communicate better through marketing, media and creativity.',
  url: process.env.SITE_URL || 'https://anjimaraj.com',
  sameAs: [
    'https://instagram.com/ima.janlie',
    'https://youtube.com/@anjima',
  ],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Turtle Pi'
    }
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'MarketLube'
    },
    {
      '@type': 'Organization',
      name: 'Iluzia Lab'
    }
  ],
  knowsAbout: [
    'Digital Marketing',
    'Marketing Strategy',
    'Social Media Marketing',
    'Content Marketing',
    'AI Marketing',
    'Creative Production',
    'Brand Marketing',
    'Video Production',
  ],
};

import CookieBanner from '@/components/ui/CookieBanner';
import Spotlight from '@/components/ui/Spotlight';
import GlobalNoise from '@/components/ui/GlobalNoise';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <SiteNav />
          <CustomCursor />
          <GlobalSpotlight />
                    {children}
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
