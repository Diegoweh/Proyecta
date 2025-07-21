import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/home/slider1.webp",
  "/img/home/slider2.webp",
  "/img/home/slider3.webp",
  "/img/home/slider4.webp",
  "/img/home/slider5.webp",
  "/img/home/slider6.webp",
  "/img/home/slider7.webp",  
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Precargar imágenes
  useEffect(() => {
    const loadImages = () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      setIsLoaded(true);
    };
    loadImages();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Contenedor con relación de aspecto fijo (ajusta según tus imágenes) */}
      <div className="relative w-full aspect-[16/9]">
        {isLoaded ? (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`Portfolio ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Curva de easing suave
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/placeholder.jpg'; // Fallback si la imagen no carga
              }}
            />
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        )}
      </div>
    </div>
  );
};

export default Carousel;