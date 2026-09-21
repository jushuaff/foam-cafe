import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/foam";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sample Coffee | Café Design Concept",
  description: businessInfo.description,
  keywords: [
    "Sample Coffee Baguio",
    "Baguio cafe",
    "coffee shop Baguio",
    "24 hour cafe Baguio",
    "specialty coffee Baguio",
    "cafe design concept",
    "Baguio coffee shop",
  ],
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sample Coffee Baguio",
    description: businessInfo.description,
    url: "https://example.com",
    siteName: "Sample Coffee",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Coffee Baguio",
    description: businessInfo.description,
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f1ea] text-[#1f1c1a]">
        {children}
      </body>
    </html>
  );
}
