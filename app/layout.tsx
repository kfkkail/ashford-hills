import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://ashfordhillsgranger.org');

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ashford Hills | Granger, Indiana | Homeowners Association",
  description:
    "Ashford Hills is a beautiful residential neighborhood in Granger, Indiana. 32 custom homes, established in the 1990s, with active HOA management. Located near Notre Dame, Knollwood Country Club, and excellent schools.",
  keywords: [
    "Ashford Hills",
    "Granger Indiana",
    "HOA",
    "Homeowners Association",
    "Granger neighborhoods",
    "Notre Dame area",
    "Knollwood community",
    "residential neighborhood",
    "South Bend area homes",
  ],
  authors: [{ name: "Ashford Hills HOA" }],
  openGraph: {
    title: "Ashford Hills HOA | Granger, Indiana",
    siteName: "Ashford Hills",
    description:
      "A beautiful residential neighborhood in Granger, Indiana with 32 custom homes, active HOA, and prime location near Notre Dame.",
    type: "website",
    url: baseUrl,
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Ashford Hills neighborhood in Granger, Indiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashford Hills HOA | Granger, Indiana",
    description:
      "A beautiful residential neighborhood in Granger, Indiana with 32 custom homes and active HOA management.",
    images: [`${baseUrl}/hero.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
