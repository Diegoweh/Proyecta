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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Portfolio ${current + 1}`}
            className="w-full h-auto rounded"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel
