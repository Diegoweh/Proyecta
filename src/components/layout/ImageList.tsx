import React from "react";
import { Parallax } from "@/components/layout/Parallax";
import { useLenis } from "@studio-freight/react-lenis";

export interface ProjectImage {
  src: string;
  alt: string;
  title?: string; // Opcional para incluir un título
  speed: number;
  position: "start" | "center" | "end";
  id?: string;
}

interface ImageListProps {
  images: ProjectImage[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  useLenis(() => {});

  return (
    <div className="flex flex-col items-center">
      {images.map((image, index) => (
        <Parallax
          key={index}
          speed={image.speed}
          className={`self-${image.position} mb-10`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            id={image.id}
            className="w-auto h-auto rounded-xl"
          />
        </Parallax>
      ))}
    </div>
  );
};

export default ImageList;
