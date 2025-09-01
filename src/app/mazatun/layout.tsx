// app/mazatun/layout.tsx  (SERVER)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazatun | Caso de éxito — Proyecta",
  description:
    "Proyecto para Mazatun en Mazatlán: estrategia creativa, gestión de medios y enfoque en resultados.",
  alternates: { canonical: "https://proyecta.com.mx/mazatun" },
  openGraph: {
    type: "article",
    url: "https://proyecta.com.mx/mazatun",
    title: "Mazatun | Caso de éxito — Proyecta",
    description:
      "Estrategia creativa, medios y resultados para Mazatun en Mazatlán.",
    images: [
      { url: "https://proyecta.com.mx/og/mazatun.jpg", width: 1200, height: 630 },
    ],
    siteName: "Proyecta",
  },
  twitter: { card: "summary_large_image" },
};

export default function MazatunLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
