"use client"

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

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
            className="w-full flex-shrink-0 object-cover snap-start transform scale-90"
          />
        ))}
      </div>
    </motion.div>
  );
}

const page = () => {
  return (
    <>

    {/* Title */}
    <div className="text-red-500 text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold">
        Las Gavias Resorts
      </h1>
      <p className="mt-4 text-base md:text-lg text-white max-w-2xl mx-auto">
      Manejo de redes sociales, campañas de marketing digital y desarrollo web para complejo turístico en Mazatlán.
      </p>
    </div>

    {/* Image banner */}
    {/* <div className="px-4">
    <motion.div
      className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src="/img/projects/gavias/1.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-cover"
      />
    </motion.div>
    </div> */}

    {/* Image banner */}
    <div className="px-4">
    <motion.div
        className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        <img
        src="/img/projects/gavias/2.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-cover"
        />
    </motion.div>
    </div>

    {/* two images carousel with text */}
    <div className="mt-12 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Carrusel izquierda */}
        <GenericCarousel 
            images={["/img/projects/gavias/dato25.png", "/img/projects/gavias/dato26.png"]} 
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
            Trabajo de publicidad de exteriores y contenido digital
            </h2>
            <p className="text-base md:text-lg text-white text-center">
            se trabajaron campañas para generar visitas y registros de prospectos interesados en la compra del inmueble.
            </p>
        </motion.div>
        </div>
    </div>

    {/* 2 Imágenes con animación */}
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
        {/* Imagen izquierda */}
        <motion.img
        src="/img/projects/gavias/3.webp" // Reemplaza con tu imagen
        alt="Diseño Izquierda"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        />

        {/* Imagen derecha */}
        <motion.img
        src="/img/projects/gavias/4.webp" // Reemplaza con tu imagen
        alt="Diseño Derecha"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        />
    </div>

    {/* Image banner */}
    <div className="px-4">
    <motion.div
      className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src="/img/projects/gavias/7.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-cover"
      />
    </motion.div>
    </div>

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
            Mazatún nos cuenta como nos ha acompañado
            </h2>
            <p className="text-base md:text-lg text-white text-center">
            a lo largo de los años como un producto básico para el consumo, concientizando los beneficios alimentarios que ofrece a todas las familias mexicanas.
            </p>
        </motion.div>

        {/* Carrusel a la derecha */}
        <GenericCarousel 
            images={["/img/projects/gavias/dato27.png", "/img/projects/gavias/dato28.png"]} 
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
        src="/video/projects/gavias/6.mp4" // Reemplaza con tu ruta o URL
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
        src="/img/projects/gavias/8.webp" // Reemplaza con tu imagen
        alt="Diseño Izquierda"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        />

        {/* Imagen derecha */}
        <motion.img
        src="/img/projects/gavias/9.webp" // Reemplaza con tu imagen
        alt="Diseño Derecha"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        />
    </div>

    {/* Image banner */}
    <div className="px-4">
    <motion.div
      className="mt-8 w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src="/img/projects/gavias/5.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-cover"
      />
    </motion.div>
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
        src="/video/projects/gavias/5.mp4" // Reemplaza con tu ruta o URL
        autoPlay
        muted
        loop
        playsInline
        poster="/images/preview.jpg" // opcional
    />
    </motion.div>

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
  )
}

export default page