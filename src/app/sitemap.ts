// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://proyecta.com.mx/", lastModified: new Date() },
    { url: "https://proyecta.com.mx/projects", lastModified: new Date() },
    { url: "https://proyecta.com.mx/gavias", lastModified: new Date() },
    { url: "https://proyecta.com.mx/acuario", lastModified: new Date() },
    { url: "https://proyecta.com.mx/mazalife", lastModified: new Date() },
    { url: "https://proyecta.com.mx/mazatun", lastModified: new Date() },
    { url: "https://proyecta.com.mx/palmares", lastModified: new Date() },
    // agrega el resto de rutas
  ];
}