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
  title: "Proyecta Igniting Marketing | Creatividad, Medios y Resultados.",
  description: "En Proyecta te ayudamos a escalar tu marca con estrategias creativas, gestión de medios y un enfoque en resultados reales. Somos tu agencia de marketing aliada para llevar tu negocio al siguiente nivel.",
  alternates: { canonical: "https://proyecta.com.mx" },
  openGraph: {
    type: "website",
    url: "https://proyecta.com.mx",
    title: "Proyecta Igniting Marketing",
    description: "Creatividad, Medios y Resultados.",
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
