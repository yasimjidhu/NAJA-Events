import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naja-events.vercel.app'),
  title: "Naja Events | Premium Light & Sound Solutions for Events",
  description: "Professional light and sound rental services for weddings, concerts, corporate events & festivals. Premium audio systems, dynamic lighting design & complete event production. 15+ years experience. Book now!",
  keywords: [
    "light and sound rental",
    "event production services",
    "wedding lighting",
    "concert sound systems",
    "corporate event AV",
    "professional audio rental",
    "stage lighting design",
    "event equipment rental",
    "DJ sound system",
    "festival production",
    "Naja Events",
  ],
  authors: [{ name: "Naja Events" }],
  creator: "Naja Events",
  publisher: "Naja Events",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naja-events.vercel.app",
    title: "Naja Events | Premium Light & Sound Solutions",
    description: "Professional light and sound rental services for all events. Premium equipment, expert team, 15+ years experience.",
    siteName: "Naja Events",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Naja Events - Professional Light and Sound Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naja Events | Premium Light & Sound Solutions",
    description: "Professional light and sound rental services for all events. Premium equipment, expert team, 15+ years experience.",
    images: ["/images/hero.png"],
    creator: "@najaevents",
  },
  alternates: {
    canonical: "https://naja-events.vercel.app",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Events & Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffaa00" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
