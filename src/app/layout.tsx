import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import ScrollProgress from "@/components/fx/ScrollProgress";
import Analytics from "@/components/fx/Analytics";
import JsonLd from "@/components/JsonLd";
import { agentJsonLd } from "@/lib/schema";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-raw",
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-raw",
  display: "swap",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script-raw",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.home.title, template: "%s" },
  description: SEO.home.description,
  applicationName: "Chris Karapatsakis Real Estate",
  authors: [{ name: BRAND.name }],
  keywords: [
    "Canton MI listing agent",
    "sell my house Canton MI",
    "Plymouth MI real estate agent",
    "Northville MI listing agent",
    "South Lyon MI realtor",
    "what is my home worth Canton",
    "free home valuation Plymouth MI",
    "Chris Karapatsakis",
    "Remerica Hometown III",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND.name,
    title: SEO.home.title,
    description: SEO.home.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="min-h-screen bg-paper text-stone antialiased overflow-x-hidden">
        <JsonLd data={agentJsonLd()} />
        <Analytics />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
