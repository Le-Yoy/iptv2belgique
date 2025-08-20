// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PandaStreamTV - 5000+ Channels in 4K/8K | Premium IPTV Service',
  description:
    "Europe's #1 IPTV service with 5000+ channels in 4K/8K quality. Netflix, Disney+, Sports & more. Setup in 10 minutes. No contracts. From €6/month.",
  keywords:
    'IPTV, IPTV Belgium, IPTV France, IPTV Netherlands, IPTV Germany, 4K streaming, sports streaming, Netflix, Disney+',
  authors: [{ name: 'PandaStreamTV' }],
  openGraph: {
    title: 'PandaStreamTV - Premium IPTV Service',
    description:
      '5000+ channels in 4K/8K. All sports, movies & series. From €6/month.',
    url: 'https://pandastreamtv.com',
    siteName: 'PandaStreamTV',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PandaStreamTV - Premium IPTV Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaStreamTV - 5000+ Channels in 4K/8K',
    description: 'Premium IPTV service with instant setup. From €6/month.',
    images: ['/og-image.jpg'],
  },
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
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
