'use client';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { a } from 'framer-motion/client';

interface ParallaxItemProps {
  media: string;
  height?: string; // eg: 'h-[100vh]' or 'h-[80vh]'
  intensity?: number; // parallax factor
  overlay?: boolean;
  videoProps?: React.ComponentPropsWithoutRef<'video'>;
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({
  media,
  height = 'h-screen',
  intensity = 30, // react-scroll-parallax recomienda entre 10 y 40 para efectos suaves
  overlay = false,
  videoProps = {},
}) => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(media.endsWith('.mp4') || media.endsWith('.webm'));
  }, [media]);

  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <Parallax translateY={[-intensity, intensity]} className="absolute top-0 left-0 w-full h-full">
        {isVideo ? (
        <><Link href={'/'}>
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
        </Link></>
        ) : (
        <><Link href={'/'}>
          <img
            src={media}
            alt="Parallax media"
            className="w-full h-full object-cover"
          />
          </Link></>
        )}
      </Parallax>

      {overlay && (
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      )}
    </div>
  );
};

export default ParallaxItem;
