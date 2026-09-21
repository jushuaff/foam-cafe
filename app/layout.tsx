import type { Metadata } from "next";
import "./globals.css";
import { businessInfo, seoKeywords } from "@/data/concept";

export const metadata: Metadata = {
  title: "Sample Coffee | Café Design Concept",
  description: businessInfo.description,
  keywords: seoKeywords,
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sample Coffee | Design Concept",
    description: businessInfo.description,
    url: "https://example.com",
    siteName: "Sample Coffee",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Coffee | Design Concept",
    description: businessInfo.description,
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[#f7f1ea] text-[#1f1c1a]">
        {children}
      </body>
    </html>
  );
}
