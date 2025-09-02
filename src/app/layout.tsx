import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proyecta.com.mx"),
  title: "Proyecta Igniting Marketing | Branding, Websites y Marketing.",
  description: "Agencia de marketing digital en México: estrategia y creatividad para impulsar tu marca con SEO, SEM, Google, Meta y TikTok. Generamos campañas medibles que aumentan ventas, fidelidad y crecimiento.",
  keywords: [
    "agencia de marketing",
    "marketing digital",
    "agencia de publicidad",
    "gestión de medios",
    "compra de medios",
    "plan de medios",
    "SEO",
    "SEM",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "TikTok Ads",
    "performance marketing",
    "growth marketing",
    "branding",
    "identidad de marca",
    "diseño gráfico",
    "creatividades",
    "social media",
    "content marketing",
    "email marketing",
    "automatización de marketing",
    "analítica",
    "medición de conversiones",
    "ecommerce",
    "Shopify",
    "turismo",
    "Mazatlán",
    "Sinaloa",
    "México",
    "Proyecta"
  ],
  alternates: { canonical: "https://proyecta.com.mx" },
  openGraph: {
    type: "website",
    url: "https://proyecta.com.mx",
    title: "Proyecta Igniting Marketing",
    description: "Branding, Websites y Marketing.",
    siteName: "Proyecta",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }]
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png"
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
