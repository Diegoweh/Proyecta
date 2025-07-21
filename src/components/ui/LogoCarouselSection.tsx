'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const logos = [
  "/img/logos/Logotipos_2023-01.png",
  "/img/logos/Logotipos_2023-02.png",
  "/img/logos/Logotipos_2023-03.png",
  "/img/logos/Logotipos_2023-04.png",
  "/img/logos/Logotipos_2023-05.png",
  "/img/logos/Logotipos_2023-06.png",
  "/img/logos/Logotipos_2023-07.png",
  "/img/logos/Logotipos_2023-08.png",
  "/img/logos/Logotipos_2023-09.png",
  "/img/logos/Logotipos_2023-10.png",
  "/img/logos/Logotipos_2023-11.png",
  "/img/logos/Logotipos_2023-12.png",
  "/img/logos/Logotipos_2023-13.png",
  "/img/logos/Logotipos_2023-14.png",
  "/img/logos/Logotipos_2023-15.png",
  "/img/logos/Logotipos_2023-16.png",
  "/img/logos/Logotipos_2023-17.png",
  "/img/logos/Logotipos_2023-18.png",
  "/img/logos/Logotipos_2023-19.png",
  "/img/logos/Logotipos_2023-20.png",
  "/img/logos/Logotipos_2023-21.png",
  "/img/logos/Logotipos_2023-22.png",
  "/img/logos/Logotipos_2023-23.png",
  "/img/logos/Logotipos_2023-24.png",
  "/img/logos/Logotipos_2023-25.png",
  "/img/logos/Logotipos_2023-26.png",
  "/img/logos/Logotipos_2023-27.png",
  "/img/logos/Logotipos_2023-28.png",
  "/img/logos/Logotipos_2023-29.png",
  "/img/logos/Logotipos_2023-30.png",
  "/img/logos/Logotipos_2023-31.png",
  "/img/logos/Logotipos_2023-32.png",
  "/img/logos/Logotipos_2023-33.png",
  "/img/logos/Logotipos_2023-34.png",
  "/img/logos/Logotipos_2023-35.png",
  "/img/logos/Logotipos_2023-36.png",
  "/img/logos/Logotipos_2023-37.png",
  "/img/logos/Logotipos_2023-38.png",
  "/img/logos/Logotipos_2023-39.png",
  "/img/logos/Logotipos_2023-40.png",
];

const LogoCarouselSection = () => {
  const firstHalf = logos.slice(0, 20);
  const secondHalf = logos.slice(20, 40);

  return (
    <section className="bg-black py-10">
      {/* Desktop: todos los logos visibles */}
      <div className="hidden md:grid grid-cols-8 gap-8 justify-items-center items-center max-w-6xl mx-auto px-4">
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="w-40 h-20 object-contain grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* Mobile: carousel de 2 bloques de 20 logos */}
      <div className="md:hidden max-w-sm mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {[firstHalf, secondHalf].map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-3 gap-4 py-6">
                {group.map((src, i) => (
                  <div key={i} className="flex justify-center items-center h-20">
                    <img
                      src={src}
                      alt={`Logo ${groupIndex * 20 + i + 1}`}
                      className="w-30 h-20 object-contain grayscale opacity-70 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoCarouselSection;
