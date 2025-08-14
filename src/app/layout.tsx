import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PandaStreamTV - Premium IPTV for Europe | 5000+ Channels in 4K',
  description:
    'Premium IPTV service with 5000+ live channels, 4K quality, and 24/7 support. Watch sports, movies, news, and kids content on any device. Free trial available.',
  keywords:
    'IPTV, streaming, Belgium, France, Netherlands, Germany, Premier League, 4K, live TV',
  openGraph: {
    title: 'PandaStreamTV - Premium IPTV for Europe',
    description:
      'Stream 5000+ channels in stunning 4K quality with instant setup and 24/7 support.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
