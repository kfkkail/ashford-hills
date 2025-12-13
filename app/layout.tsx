import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ashford Hills",
  description:
    "Welcome to Ashford Hills, a beautiful residential neighborhood. Homeowners Association information and community resources.",
  openGraph: {
    title: "Ashford Hills",
    siteName: "Ashford Hills",
    description:
      "Welcome to Ashford Hills, a beautiful residential neighborhood. Homeowners Association information and community resources.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Ashford Hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashford Hills",
    description:
      "Welcome to Ashford Hills, a beautiful residential neighborhood. Homeowners Association information and community resources.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
