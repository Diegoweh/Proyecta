'use client';

import React from 'react';
import ImageList from '@/components/layout/ImageList'; // ajusta esta ruta según dónde esté el archivo
import SmoothScrolling from '@/components/layout/SmoothScrolling';
import { ProjectImage } from '@/components/layout/ImageList';

const acuarioImages: ProjectImage[] = [
  {
    src: "/img/projects/acuario/gam3.webp",
    alt: "Acuario Mazatlán",
    title: "Acuario Mazatlán",
    speed: 0.8,  // Reducido ligeramente para un movimiento más suave
    position: "center",
  },
  {
    src: "/img/projects/acuario/gam1.webp",
    alt: "Vista desde la piscina",
    speed: 1.5,  // Reducido de 2 a 1.5 para menos velocidad
    title: "Acuario Mazatlán",
    position: "start",
  },
  {
    src: "/img/projects/acuario/gam2.webp",
    alt: "Lobby principal",
    speed: -2.5, // Cambiado drásticamente de -20 a -2.5 para evitar movimiento excesivo
    title: "Acuario Mazatlán",
    position: "end",
  },
  {
    src: "/img/projects/acuario/gam4.webp",
    alt: "Zona lounge",
    speed: -0.8, // Ajustado para coincidir con el positivo similar
    title: "Acuario Mazatlán",
    position: "start",
  },
  {
    src: "/img/projects/acuario/gam6.webp",
    alt: "Lobby principal",
    speed: -1.8, // Reducido de -3 a -1.8 para más suavidad
    title: "Acuario Mazatlán",
    position: "end",
  },
  {
    src: "/img/projects/acuario/gam8.webp",
    alt: "Zona lounge",
    speed: 1.8,  // Ajustado para coincidir con el negativo similar
    title: "Acuario Mazatlán",
    position: "start",
  },
  {
    src: "/img/projects/acuario/gam7.webp",
    alt: "Habitación deluxe",
    speed: -0.6, // Reducido ligeramente para movimiento más sutil
    title: "Acuario Mazatlán",
    position: "center",
  },
  {
    src: "/img/projects/acuario/gam5.webp",
    alt: "Vista desde la piscina",
    speed: 0.6,  // Cambiado de -1 a 0.6 para variación positiva
    title: "Acuario Mazatlán",
    position: "start",
  },
];

const Page = () => {
  return (
    <SmoothScrolling>
      <div className="bg-white py-12 text-black">
        <div className="text-red-500 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Acuario Mazatlán
          </h1>
        </div>

        {/* Lista de imágenes animadas con parallax */}
        <div className="flex flex-col items-center px-2">
        <ImageList images={acuarioImages}/>
        </div>

        

      </div>
    </SmoothScrolling>
  );
};

export default Page;
