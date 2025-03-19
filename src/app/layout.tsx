import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Haus - Best Pizza in Bicol",
  description: "Experience authentic Italian pizza in Bicol with Pizza Haus. Fresh ingredients, traditional recipes, and the best pizza experience in the region.",
  keywords: "pizza, italian food, bicol pizza, pizza restaurant, pizza delivery, pizza haus",
  openGraph: {
    title: "Pizza Haus - Authentic Italian Pizza in Bicol",
    description: "Experience authentic Italian pizza in Bicol with Pizza Haus. Fresh ingredients, traditional recipes, and the best pizza experience in the region.",
    type: "website",
    locale: "en_US",
    siteName: "Pizza Haus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Haus - Authentic Italian Pizza in Bicol",
    description: "Experience authentic Italian pizza in Bicol with Pizza Haus. Fresh ingredients, traditional recipes, and the best pizza experience in the region.",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'mask-icon',
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
