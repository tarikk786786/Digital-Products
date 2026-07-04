import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://intimacyacademy.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Ultimate Digital Learning Library | Intimacy Academy",
    template: "%s | Intimacy Academy",
  },
  description:
    "Premium digital courses and ebooks for transforming relationships and intimacy. Expert-led video lessons, downloadable guides, and lifetime access. Join 15,000+ happy couples.",

  keywords: [
    "intimacy courses",
    "relationship ebooks",
    "digital learning",
    "couples courses",
    "intimacy academy",
    "relationship improvement",
    "communication mastery",
    "online courses India",
    "premium ebooks",
    "relationship education",
  ],

  authors: [{ name: "Intimacy Academy" }],
  creator: "Intimacy Academy",
  publisher: "Intimacy Academy",

  alternates: {
    canonical: "/",
  },

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
    locale: "en_IN",
    url: "/",
    siteName: "Intimacy Academy",
    title: "Ultimate Digital Learning Library | Intimacy Academy",
    description:
      "Premium digital courses and ebooks for transforming relationships and intimacy. Expert-led video lessons, downloadable guides, and lifetime access.",
    images: [
      {
        url: "/assets/banner3-6c6ec6feb9977bf8c65c24d81c4cd99b.jpeg",
        width: 1200,
        height: 630,
        alt: "Intimacy Academy - Premium Digital Learning Library",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ultimate Digital Learning Library | Intimacy Academy",
    description:
      "Premium digital courses and ebooks for transforming relationships. Join 15,000+ happy couples.",
    images: ["/assets/banner3-6c6ec6feb9977bf8c65c24d81c4cd99b.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Intimacy Academy",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/intimacy_logo-removebg-preview-e1770614014749.png`,
  description:
    "Transforming relationships and intimacy through premium digital education.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Intimacy Academy",
  url: BASE_URL,
  description:
    "Premium digital courses and ebooks for transforming relationships and intimacy.",
  publisher: {
    "@type": "Organization",
    name: "Intimacy Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
