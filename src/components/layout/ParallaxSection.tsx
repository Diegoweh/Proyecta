'use client';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ParallaxItemProps {
  media: string;
  height?: string;
  intensity?: number;
  overlay?: boolean;
  videoProps?: React.ComponentPropsWithoutRef<'video'>;
  logoSrc?: string;
  title?: string;
  description?: string;
  href?: string; // 👈 nuevo prop para el link
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({
  media,
  height = 'h-screen',
  intensity = 30,
  overlay = false,
  videoProps = {},
  logoSrc,
  title,
  description,
  href = '/', // 👈 valor por defecto
}) => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(media.endsWith('.mp4') || media.endsWith('.webm'));
  }, [media]);

  return (
    <Link href={href} className={`relative ${height} w-full overflow-hidden block`}>
      {/* Parallax media */}
      <Parallax
        translateY={[-intensity, intensity]}
        className="absolute top-0 left-0 w-full h-full"
      >
        {isVideo ? (
          <video
            {...videoProps}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={media} type={`video/${media.split('.').pop()}`} />
            Tu navegador no soporta el video.
          </video>
        ) : (
          <img
            src={media}
            alt="Parallax media"
            className="w-full h-full object-cover"
          />
        )}
      </Parallax>

      {/* Overlay opcional */}
      {overlay && (
        <div className="absolute inset-0 bg-black/100 opacity-50 z-10" />
      )}

      {/* Contenido sobrepuesto */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        {logoSrc && (
          <img
            src={logoSrc}
            alt="Logo"
            className="w-50 h-50 lg:w-65 lg:h-65 mb-2 object-contain"
          />
        )}
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-2xl max-w-xl drop-shadow-md">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ParallaxItem;
