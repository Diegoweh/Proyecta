'use client';

import React, { useEffect, useRef, useState } from 'react';
import ImageList from '@/components/layout/ImageList'; // ajusta esta ruta según dónde esté el archivo
import SmoothScrolling from '@/components/layout/SmoothScrolling';
import { ProjectImage } from '@/components/layout/ImageList';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';


// caorusel
interface CarouselProps {
  images: string[];
  initialX?: number;
}

const GenericCarousel = ({ images, initialX = 0 }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const nextIndex = (currentIndex + 1) % images.length;
        const scrollAmount = container.offsetWidth * nextIndex;

        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });

        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <motion.div
      className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-md"
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        ref={containerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover snap-start"
          />
        ))}
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (

    <>
    <div className="text-red-500 text-center mb-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold">
        Gran Acuario Mazatlán
      </h1>
      <p className="mt-4 text-base md:text-lg text-white max-w-2xl mx-auto">
        El más grande de México y más importante en Latinoamérica, dedicado al Mar de Cortés.
      </p>
    </div>

      {/* Video animado con Framer Motion */}
      <motion.div
        className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover"
          src="/video/projects/acuario/logoAcuarioAnimacion.mp4" // Reemplaza con tu ruta o URL
          autoPlay
          muted
          loop
          playsInline
          poster="/images/preview.jpg" // opcional
        />
      </motion.div>

      {/* Imágenes con animación */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
        {/* Imagen izquierda */}
        <motion.img
          src="/img/projects/acuario/acuario1.webp" // Reemplaza con tu imagen
          alt="Diseño Izquierda"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Imagen derecha */}
        <motion.img
          src="/img/projects/acuario/acuario2.webp" // Reemplaza con tu imagen
          alt="Diseño Derecha"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* two images carousel with text */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Carrusel izquierda */}
          <GenericCarousel 
            images={["/img/projects/acuario/dato1.webp", "/img/projects/acuario/dato2.webp"]} 
            initialX={-60} 
          />

          {/* Texto a la derecha */}
          <motion.div
            className="w-full md:w-1/2 text-left text-red-500"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              El más grande de México y más importante en Latinoamérica, dedicado al Mar de Cortés
            </h2>
            <p className="text-base md:text-lg text-white text-center">
              Desarrollamos branding y concepto rector de campaña. Realizamos manual de marca con el fin de presentar los elementos de identidad gráfica de la marca GAM, la gama de aplicaciones de uso y materiales diversos.
            </p>
          </motion.div>
        </div>
      </div>


      {/* Video animado con Framer Motion */}
      <motion.div
        className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover"
          src="/video/projects/acuario/videoWeb.mp4" // Reemplaza con tu ruta o URL
          autoPlay
          muted
          loop
          playsInline
          poster="/images/preview.jpg" // opcional
        />
      </motion.div>

      {/* set de 3 imgs */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          
          {/* Imagen izquierda */}
          <motion.img
            src="/img/projects/acuario/gam8.webp" // Reemplaza con tu imagen
            alt="Imagen izquierda"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Dos imágenes derechas en columna */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.img
              src="/img/projects/acuario/gam6.webp" // Imagen superior derecha
              alt="Imagen derecha superior"
              className="w-full rounded-2xl shadow-md object-cover h-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/img/projects/acuario/gam7.webp" // Imagen inferior derecha
              alt="Imagen derecha inferior"
              className="w-full rounded-2xl shadow-md object-cover h-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* Video animado con Framer Motion */}
      <motion.div
        className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover"
          src="/video/projects/acuario/videocel.mp4" // Reemplaza con tu ruta o URL
          autoPlay
          muted
          loop
          playsInline
          poster="/images/preview.jpg" // opcional
        />
      </motion.div>

      {/* two images carousel with text */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Texto a la izquierda */}
          <motion.div
            className="w-full md:w-1/2 text-left text-red-500"
            initial={{ opacity: 0, x: -60 }} // entra desde la izquierda ahora
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Posicionamiento de marca a través de marketing digital
            </h2>
            <p className="text-base md:text-lg text-white text-center">
              Desarrollamos materiales museográficos: señalética, infografías y cajas de luz, entre otros. Realizamos la producción del video comercial para la campaña nacional de lanzamiento. Trabajamos RRSS, página web y newsletter digital a través de mailing.
            </p>
          </motion.div>

          {/* Carrusel a la derecha */}
          <GenericCarousel 
            images={["/img/projects/acuario/dato3.webp", "/img/projects/acuario/dato4.webp"]} 
            initialX={60} 
          />
        </div>
      </div>

      {/* Video animado con Framer Motion */}
      <motion.div
        className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover"
          src="/video/projects/acuario/video acuario.mp4" // Reemplaza con tu ruta o URL
          autoPlay
          muted
          loop
          playsInline
          poster="/images/preview.jpg" // opcional
        />
      </motion.div>

      {/* 2 Imágenes con animación */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
        {/* Imagen izquierda */}
        <motion.img
          src="/img/projects/acuario/vacuario1.webp" // Reemplaza con tu imagen
          alt="Diseño Izquierda"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Imagen derecha */}
        <motion.img
          src="/img/projects/acuario/vacuario2.webp" // Reemplaza con tu imagen
          alt="Diseño Derecha"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
          
          {/* Link a todos los proyectos */}
          <Link
            href="/projects"
            className="flex items-center gap-3 text-red-500 hover:text-red-400 transition-colors group"
          >
            <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
            <span className="text-lg lg:text-2xl font-medium">Volver a todos los proyectos</span>
          </Link>

          {/* Flecha hacia arriba */}
          <Link href="#" scroll={true} className="group">
            <ArrowUp
              size={32}
              className="text-white hover:text-red-500 transition transform group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>   
 
    </>
  );
};

export default Page;
