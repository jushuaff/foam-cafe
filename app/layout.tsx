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

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

export const metadata: Metadata = {
  title: "Foam Coffee Baguio | Specialty Coffee, Food & Late-Night Café",
  description:
    "Discover Foam Coffee in Baguio City. Explore signature coffee, pastries and all-day meals, and find the Travelite and Legarda branches.",
  keywords: [
    "Foam Coffee Baguio",
    "Baguio cafe",
    "coffee shop Baguio",
    "24 hour cafe Baguio",
    "specialty coffee Baguio",
    "Legarda cafe",
    "Baguio coffee shop",
  ],
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Foam Coffee Baguio",
    description: businessInfo.description,
    url: "https://example.com",
    siteName: "Foam Coffee",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foam Coffee Baguio",
    description: businessInfo.description,
  },
  robots: isDemoMode
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CafeOrCoffeeShop",
        name: "Foam Coffee",
        image: [
          "https://example.com/images/places/hero.svg",
        ],
        telephone: "09776023750",
        email: "foamcoffeeph@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Baguio City",
          addressRegion: "Benguet",
          addressCountry: "PH",
        },
        description:
          "Foam Coffee is a Baguio coffee and café concept with signature drinks, pastries and all-day meals.",
        url: "https://example.com",
      },
      {
        "@type": "CafeOrCoffeeShop",
        name: "Foam Coffee – Travelite",
        telephone: "09776023750",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Upper Ground Floor, Travelite Hotel, Shuntug Road",
          addressLocality: "Baguio City",
          addressRegion: "Benguet",
          addressCountry: "PH",
        },
        openingHours: "Mo-Su 00:00-23:59",
        url: "https://example.com",
      },
      {
        "@type": "CafeOrCoffeeShop",
        name: "Foam Coffee + Roastery – Legarda",
        telephone: "09776023750",
        address: {
          "@type": "PostalAddress",
          streetAddress: "15 Bukaneg Street",
          addressLocality: "Baguio City",
          addressRegion: "Benguet",
          addressCountry: "PH",
        },
        openingHours: "Mo-Su 07:00-01:00",
        url: "https://example.com",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f1ea] text-[#1f1c1a]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
