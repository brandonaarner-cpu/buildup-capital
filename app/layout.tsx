import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "BuildUp Capital - Fast, Flexible Financing for Real Estate & Business",
    template: "%s | BuildUp Capital"
  },
  description: "BuildUp Capital provides fast, flexible financing solutions for real estate investors and small businesses. Get approved in 24-48 hours with our streamlined lending process.",
  keywords: ["business lending", "real estate financing", "bridge loans", "SBA loans", "asset-based lending", "rehab loans", "flip financing"],
  authors: [{ name: "BuildUp Capital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildup.capital",
    siteName: "BuildUp Capital",
    title: "BuildUp Capital - Fast, Flexible Financing",
    description: "Fast, flexible financing solutions for real estate investors and small businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildUp Capital - Fast, Flexible Financing",
    description: "Fast, flexible financing solutions for real estate investors and small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
