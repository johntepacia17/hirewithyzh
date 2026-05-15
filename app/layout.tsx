import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hirewithyzh.com"),
  title: {
    default: "hirewithyzh | Hire with Ease",
    template: "%s | hirewithyzh"
  },
  description:
    "A personal recruitment agency connecting companies with vetted Filipino remote talent.",
  openGraph: {
    title: "hirewithyzh | Hire with Ease",
    description:
      "Top Filipino talent for global companies, delivered through a personal recruitment experience.",
    url: "https://hirewithyzh.com",
    siteName: "hirewithyzh",
    type: "website"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${bodyFont.variable} ${jetBrainsMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
