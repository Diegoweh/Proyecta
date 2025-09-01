// app/mazalife/layout.tsx  (SERVER)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazalife | Caso de éxito — Proyecta",
  description:
    "Mazalife es un grupo de experiencias en Mazatlán: museo, tirolesa, avistamiento de ballenas, safari, city tour y más. Estrategia creativa, medios y resultados.",
  alternates: { canonical: "https://proyecta.com.mx/mazalife" },
  openGraph: {
    type: "article",
    url: "https://proyecta.com.mx/mazalife",
    title: "Mazalife | Caso de éxito — Proyecta",
    description:
      "Grupo de experiencias en Mazatlán: museo, tirolesa, avistamiento de ballenas, safari, city tour y más.",
    images: [
      { url: "https://proyecta.com.mx/og/mazalife.jpg", width: 1200, height: 630 },
    ],
    siteName: "Proyecta",
  },
  twitter: { card: "summary_large_image" },
};

export default function MazalifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
