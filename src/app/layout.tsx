import type { Metadata, ResolvingMetadata } from 'next';
import './globals.compiled.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import SiteNav from '@/components/ui/SiteNav';
import GlobalSpotlight from '@/components/ui/GlobalSpotlight';
import { client } from '@/sanity/client';
import CookieBanner from '@/components/ui/CookieBanner';

export async function generateMetadata(): Promise<Metadata> {
  let seoData = null;
  try {
    seoData = await client.fetch(`*[_type == "globalSeo"][0]{
      siteTitle,
      siteDescription,
      "ogImageUrl": ogImage.asset->url,
      keywords
    }`);
  } catch (e) {
    console.error("Sanity fetch failed for SEO.", e);
  }

  const title = seoData?.siteTitle || 'Anjima Raj — Marketing · Media · Creativity';
  const description = seoData?.siteDescription || 'Helping brands communicate better through marketing, media and creativity.';
  
  return {
    metadataBase: new URL(process.env.SITE_URL || 'https://anjimaraj.com'),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: seoData?.keywords || ['Digital Marketing', 'Marketing Strategy', 'Social Media', 'Content Marketing', 'AI Marketing', 'Creative Production', 'Brand Marketing'],
    authors: [{ name: 'Anjima Raj' }],
    creator: 'Anjima Raj',
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: process.env.SITE_URL || 'https://anjimaraj.com',
      siteName: title,
      title: title,
      description: description,
      images: [
        {
          url: seoData?.ogImageUrl || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [seoData?.ogImageUrl || '/images/og-image.jpg'],
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
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anjima Raj',
  jobTitle: 'Marketing & Creative Professional',
  url: process.env.SITE_URL || 'https://anjimaraj.com',
  sameAs: [
    'https://instagram.com/ima.janlie',
    'https://youtube.com/@anjima',
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let theme = null;
  try {
    theme = await client.fetch(`*[_type == "globalTheme"][0]{ colors }`);
  } catch (e) {
    console.error("Sanity fetch failed for theme.", e);
  }
  
  // Set up CSS variables based on CMS theme, fallback to defaults
  const colors = theme?.colors || {};
  const themeVars = `
    :root {
      --color-ink: ${colors.ink || '#050505'};
      --color-paper: ${colors.paper || '#f4f4f0'};
      --accent: ${colors.accent || '#ff0050'};
      --color-ink-light: ${colors.inkLight || '#1a1a1a'};
      --color-paper-dim: ${colors.paperDim || '#e0e0dc'};
    }
  `;

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
        <style dangerouslySetInnerHTML={{ __html: themeVars }} />
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
