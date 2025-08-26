'use client';

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
};

const mazatun = () => {
  return (
    <>

    {/* Title */}
    <div className="text-red-500 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mazatun
          </h1>
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
        src="/img/projects/mazatun/1.webp" // Reemplaza con tu ruta
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
          images={["/img/projects/mazatun/dato3.png", "/img/projects/mazatun/dato4.png"]} 
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
            El proceso creativo para la creación
          </h2>
          <p className="text-base md:text-lg text-white text-center">
            gira entorno a la frase de campaña “El sabor de toda la vida” frase que representa el sentimiento de la unión familiar.
          </p>
        </motion.div>
      </div>
    </div>

    {/* 2 Imágenes con animación */}
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
      {/* Imagen izquierda */}
      <motion.img
        src="/img/projects/mazatun/2.webp" // Reemplaza con tu imagen
        alt="Diseño Izquierda"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Imagen derecha */}
      <motion.img
        src="/img/projects/mazatun/3.webp" // Reemplaza con tu imagen
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
        src="/img/projects/mazatun/7.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-cover"
      />
    </motion.div>
    </div>

    {/* 2 images with animation */}
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
      {/* Imagen izquierda */}
      <motion.img
        src="/img/projects/mazatun/5.webp" // Reemplaza con tu imagen
        alt="Diseño Izquierda"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Imagen derecha */}
      <motion.img
        src="/img/projects/mazatun/6.webp" // Reemplaza con tu imagen
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
          images={["/img/projects/mazatun/dato5.png", "/img/projects/mazatun/dato6.png"]} 
          initialX={60} 
        />
      </div>
    </div>

    {/* 2 images with animation */}
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
      {/* Imagen izquierda */}
      <motion.img
        src="/img/projects/mazatun/9.webp" // Reemplaza con tu imagen
        alt="Diseño Izquierda"
        className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Imagen derecha */}
      <motion.img
        src="/img/projects/mazatun/10.webp" // Reemplaza con tu imagen
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
        src="/img/projects/mazatun/13.webp" // Reemplaza con tu ruta
        alt="Imagen destacada"
        className="w-full h-full object-contain"
      />
    </motion.div>
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
  )
}

export default mazatun