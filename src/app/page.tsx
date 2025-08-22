'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxSection from "@/components/layout/ParallaxSection";
import VideoBanner from "@/components/layout/VideoBanner";
import { ArrowDown, ArrowRight, ArrowUp, Calendar, Monitor, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from "@/components/ui/Carousel"
import ServicesSection from '@/components/layout/ServiceSection';
import ClientCarousel from '@/components/ui/ClientCarousel';
import LogoCarouselSection from '@/components/ui/LogoCarouselSection';
import TaglineSection from '@/components/layout/tagline-section';

export default function Home() {

  return (
    <>
      <ParallaxProvider>
        <VideoBanner
          desktopVideo="/video/home/DEMO REEL.mp4"
          mobileVideo="/video/home/Demo reel vertical.mp4"
        />

        <ClientCarousel />

        {/* Hero section */}
        <section className="bg-black text-white px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Texto animado desde la izquierda al hacer scroll */}
            <motion.div
              className="flex-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-6xl font-bold leading-tight text-red-500 mb-6">
                Empower your ideas,<br />
                Boost your success.
              </h1>
              <p className="text-base md:text-xl text-white/90">
                Somos un equipo estratega y<br />
                comercial, aliados de tu marca.
              </p>
            </motion.div>

            {/* Logo animado desde la derecha al hacer scroll */}
            <motion.div
              className="block md:flex items-end"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                title="Logo"
                src="/img/logos/logo_rojo.png"
                alt="Logo Proyecta"
                className="object-contain w-[60px] md:w-[120px] h-auto"
              />
            </motion.div>
          </div>

          {/* Flecha abajo */}
          <div className="flex justify-center mt-12">
            <Link href="#portfolio" scroll={true}>
              <ArrowDown
                size={32}
                className="text-white hover:text-red-500 transition transform hover:translate-y-1 animate-bounce"
              />
            </Link>
          </div>
        </section>


        {/* Parallax Section */}
        <section id='portfolio'>
        <ParallaxSection
         media="/video/home/home_acuario.mp4"
         logoSrc="/img/logos/logo_acuario.png"
         title="¡Somos llenos de vida!"
         description="Branding y concepto rector de campaña. Posicionamiento de marca a través de marketing digital."
         href='/acuario' 
         />         

        <ParallaxSection
         media="/img/home/mazatun.webp"
         logoSrc="/img/logos/logo_mazatun.png"
         title="¡El sabor de toda la vida!"
         description="Desarrollo del concepto rector y estratégico para la campaña nacional."
         href='/mazatun' 
         />

        <ParallaxSection
         media="/img/home/gaviana.webp"
         logoSrc="/img/logos/logo_gaviana.png"
         title="Tu casa de playa"
         description="Manejo de redes sociales, campañas de marketing digital y desarrollo web para complejo turístico en Mazatlán."
         href='/gavias' 
        />

        <ParallaxSection
         media="/img/home/palamares.webp"
         logoSrc="/img/logos/logo_palmares.png"
         title="El sabor de Sinaloa"
         description="Desarrollo de campañas publicitarias y comunicación gráfica para posicionamiento en RRSS."
         href='/palmares' 
         />

        </section>
      </ParallaxProvider>

          

      {/* What we do */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">WHAT WE DO</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos una agencia de marketing, motivados por las metas de nuestras marcas aliadas. Expertos en marketing,
              relaciones públicas, publicidad, estrategias digitales y web.
            </p> */}
            <TaglineSection tagline="What we do" className="" />  
          </motion.div>

          <ServicesSection />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Services List - Right Side */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >              

              {/* All Projects Link */}
              <div className="pt-8 border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-4 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    
                    {/* Link a todos los proyectos */}
                    <div className="flex justify-center md:justify-start">
                      <Link
                        href="/projects"
                        className="flex items-center gap-3 text-red-500 hover:text-red-400 transition-colors group"
                      >
                        <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
                        <span className="text-lg lg:text-2xl font-medium">Todos los proyectos</span>
                      </Link>
                    </div>

                    {/* Flecha hacia arriba */}
                    <div className="flex justify-center md:justify-end">
                      <Link href="#" scroll={true} className="group">
                        <ArrowUp
                          size={32}
                          className="text-white hover:text-red-500 transition transform group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* LogosSection */}
      <div className="flex justify-center items-center text-red-500 text-xl
      lg:text-4xl px-6">
        Marcas que han confiado en nosotros
      </div>
      <LogoCarouselSection />

    </>
  );
}
