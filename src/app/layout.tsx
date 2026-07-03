import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimate Digital Learning Library | Intimacy Academy",
  description: "Premium digital courses and ebooks for transforming relationships and intimacy.",
  openGraph: {
    title: "Ultimate Digital Learning Library | Intimacy Academy",
    description: "Premium digital courses and ebooks for transforming relationships and intimacy.",
    images: ["/assets/banner3-6c6ec6feb9977bf8c65c24d81c4cd99b.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
