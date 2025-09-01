// app/gavias/layout.tsx  (SERVER)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaviana Resort | Caso de éxito — Proyecta",
  description: "Estrategia de verano para Gaviana: creatividades, pauta y resultados.",
  alternates: { canonical: "https://proyecta.com.mx/gavias" },
  openGraph: {
    type: "article",
    url: "https://proyecta.com.mx/gavias",
    title: "Gaviana Resort | Caso de éxito — Proyecta",
    description: "Estrategia de verano para Gaviana.",
    images: [{ url: "https://proyecta.com.mx/og/gavias.jpg", width: 1200, height: 630 }],
    siteName: "Proyecta",
  },
  twitter: { card: "summary_large_image" },
};

export default function GaviasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
