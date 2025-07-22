import React from "react";
import { Parallax } from "@/components/layout/Parallax";
import { useLenis } from "@studio-freight/react-lenis";

export interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
  speed: number;
  position: "start" | "center" | "end";
  id?: string;
  className?: string; // Nueva prop para clases personalizadas por imagen
}

interface ImageListProps {
  images: ProjectImage[];
  className?: string;
}

const ImageList: React.FC<ImageListProps> = ({ images, className }) => {
  useLenis(() => {});

  return (
    <div className={`flex flex-col items-center gap-12 md:gap-16 ${className}`}>
      {images.map((image, index) => (
        <Parallax
          key={index}
          speed={image.speed}
          className={`w-full flex ${
            image.position === "start"
              ? "justify-start"
              : image.position === "end"
              ? "justify-end"
              : "justify-center"
          }`}
        >
          <div className={`relative group ${image.className || ""}`}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              id={image.id}
              className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01] object-cover max-h-[80vh]"
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
              </div>
            )}
          </div>
        </Parallax>
      ))}
    </div>
  );
};

export default ImageList;