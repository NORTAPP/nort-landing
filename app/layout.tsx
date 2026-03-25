import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans, Goldman, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

const goldman = Goldman({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-heading',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nort.trade'),
  title: 'NORT — AI-Powered Prediction Market Signals',
  description: 'NORT makes Polymarket trading easy. A real-time signals engine ranks the best opportunities by momentum and volume — then lets you ask AI for a plain-English breakdown before you trade. Free to start.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: 'https://nort.trade',
    title: 'NORT — AI-Powered Prediction Market Signals',
    description: 'NORT makes Polymarket trading easy. A real-time signals engine ranks the best opportunities by momentum and volume — then lets you ask AI for a plain-English breakdown before you trade. Free to start.',
    siteName: 'NORT',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NORT — AI Prediction Market Signals',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NORT — AI-Powered Prediction Market Signals',
    description: 'NORT makes Polymarket trading easy. Real-time signals ranked by momentum and volume — ask AI for advice before you trade. Free to start.',
    images: ['/images/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NORT',
  url: 'https://nort.trade',
  description: 'NORT makes Polymarket trading easy. A real-time signals engine ranks the best opportunities by momentum and volume — then lets you ask AI for a plain-English breakdown before you trade.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free — full access during beta' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} ${goldman.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
