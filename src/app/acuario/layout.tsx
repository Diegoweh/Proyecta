// app/acuario/layout.tsx  (SERVER)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gran Acuario Mazatlán | Caso de éxito — Proyecta",
  description:
    "Estrategia integral para el Gran Acuario Mazatlán: creatividad, medios y resultados.",
  alternates: { canonical: "https://proyecta.com.mx/acuario" },
  openGraph: {
    type: "article",
    url: "https://proyecta.com.mx/acuario",
    title: "Gran Acuario Mazatlán | Caso de éxito — Proyecta",
    description:
      "Estrategia integral para el Gran Acuario Mazatlán: creatividad, medios y resultados.",
    images: [{ url: "https://proyecta.com.mx/og/acuario.jpg", width: 1200, height: 630 }],
    siteName: "Proyecta",
  },
  twitter: { card: "summary_large_image" },
};

export default function AcuarioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
