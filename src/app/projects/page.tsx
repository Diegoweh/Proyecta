"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Page = () => {
  return (
    <div className="text-white bg-black min-h-screen">

      {/* Acuario   */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center space-y-8 text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Nuestros Proyectos
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Descubre algunos de los proyectos más importantes en los que hemos colaborado, impulsando experiencias únicas en Mazatlán y más allá.
        </motion.p>


        {/* Contenedor del video + overlay */}
        <div className="relative w-full aspect-video max-w-full mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
            className="w-full h-full object-cover"
            src="/video/projects/gam.mp4"
            autoPlay
            loop
            muted
            playsInline
            >
            Tu navegador no soporta el video.
            </video>

            {/* Overlay posicionado dentro del contenedor */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 text-left   p-4 rounded-md max-w-xs">
            <h4 className="text-sm">Gran Acuario Mazatlán</h4>
            <h3 className="text-lg md:text-2xl font-bold">¡Somos llenos de vida!</h3>
            <a
                href="/acuario"                
                className="mt-1 inline-flex items-center text-sm underline underline-offset-4"
            >
                Ver caso de estudio →
            </a>
            </div>
        </div>
      </section>


      {/* Mazatun, Gavias & Palamares */}
      <section className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imagen izquierda grande */}
        <div className="relative group aspect-[3/4] md:aspect-auto">
          <img
            src="/img/projects/6.webp"
            alt="Mazatún"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
          <div className="absolute bottom-6 left-6 z-10">
            <h4 className="text-sm">Mazatún</h4>
            <h3 className="text-2xl font-bold">El sabor de toda la vida</h3>
            <a
              href="/mazatun"
              className="mt-2 inline-flex items-center text-sm underline underline-offset-4"
            >
              Ver caso de estudio →
            </a>
          </div>
        </div>

        {/* Dos imágenes derechas */}
        <div className="flex flex-col gap-4">
          {/* Superior */}
          <div className="relative group aspect-[16/9]">
            <img
              src="/img/projects/lasgavias.webp"
              alt="Las Gavias"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
            <div className="absolute bottom-6 left-6 z-10">
              <h4 className="text-sm">Las Gavias Grand</h4>
              <h3 className="text-2xl font-bold">Bienvenido a nuestro mundo</h3>
              <a
                href="/gavias"
                className="mt-2 inline-flex items-center text-sm underline underline-offset-4"
              >
                Ver caso de estudio →
              </a>
            </div>
          </div>

          {/* Inferior */}
          <div className="relative group aspect-[16/9]">
            <img
              src="/img/projects/4_palmares.webp"
              alt="Palmarés"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
            <div className="absolute bottom-6 left-6 z-10">
              <h4 className="text-sm">Palmarés</h4>
              <h3 className="text-2xl font-bold">El sabor de Sinaloa</h3>
              <a
                href="/palmares"
                className="mt-2 inline-flex items-center text-sm underline underline-offset-4"
              >
                Ver caso de estudio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Page;
