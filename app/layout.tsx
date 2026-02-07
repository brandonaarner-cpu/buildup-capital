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
    default: "BuildUp Capital | Fast Bridge Loans for Real Estate & Business",
    template: "%s | BuildUp Capital"
  },
  description: "Private bridge loans secured by real estate. Rehab, acquisition, asset-backed, and SBA bridge capital. Fast closings. Conservative underwriting. Average 7-day close.",
  keywords: ["bridge loans", "real estate financing", "rehab loans", "acquisition loans", "asset-backed lending", "SBA bridge loans", "private lending", "fix and flip loans"],
  authors: [{ name: "BuildUp Capital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildup.capital",
    siteName: "BuildUp Capital",
    title: "BuildUp Capital - Fast, Asset-Backed Capital",
    description: "Private bridge loans for acquisitions, renovations, and complex borrowers. Collateral discipline. Creative structure. Fast closings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildUp Capital - Fast, Asset-Backed Capital",
    description: "Private bridge loans for acquisitions, renovations, and complex borrowers. Average 7-day close.",
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
