import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartButton from "@/components/ui/CartButton";

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coral-bracelet.vercel.app"),

  title: {
    default: "Coral Bracelet | Wear Your Dreams",
    template: "%s | Coral Bracelet",
  },

  description:
    "Discover handcrafted bracelets by Coral Bracelet, created to celebrate ambition, confidence, self-love and personal growth.",

  keywords: [
    "Coral Bracelet",
    "handmade bracelets",
    "handcrafted jewelry",
    "women bracelets",
    "fashion bracelets",
    "self love bracelet",
    "dream bracelet",
    "success bracelet",
    "handmade jewelry India",
  ],

  authors: [
    {
      name: "Coral Bracelet",
    },
  ],

  creator: "Coral Bracelet",
  publisher: "Coral Bracelet",

  openGraph: {
    title: "Coral Bracelet | Wear Your Dreams",
    description:
      "Handcrafted bracelets made to remind you to believe in yourself and wear your dreams.",
    url: "https://coral-bracelet.vercel.app",
    siteName: "Coral Bracelet",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Coral Bracelet | Wear Your Dreams",
    description:
      "Handcrafted bracelets created with love, ambition and self-belief.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  themeColor: "#6E3CBC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${manrope.variable} antialiased`}
      >
        {children}

        <WhatsAppButton />
        <CartButton />
      </body>
    </html>
  );
}