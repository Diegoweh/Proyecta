"use client";
import React from "react";
import { Parallax } from "@/components/layout/Parallax";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });

  return (
    <>
      <Parallax speed={1} className="self-start mb-20">
        <img src="https://picsum.photos/600/400?random=1" alt="Image 1" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-2} className="self-end overflow-hidden mb-20">
        <img src="https://picsum.photos/600/400?random=2" alt="Image 2" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-1} className="self-center mb-20">
        <img src="https://picsum.photos/400/600?random=3" alt="Image 3" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-3} className="self-start mb-20">
        <img src="https://picsum.photos/600/400?random=4" alt="Image 4" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-2} className="self-end mb-20">
        <img src="https://picsum.photos/600/400?random=5" alt="Image 5" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={2} className="self-start mb-20">
        <img src="https://picsum.photos/600/400?random=6" alt="Image 6" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-1} className="self-center mb-20">
        <img src="https://picsum.photos/400/600?random=7" alt="Image 7" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={1} className="self-end mb-20">
        <img src="https://picsum.photos/600/400?random=8" alt="Image 8" className="w-full rounded-xl h-auto" />
        </Parallax>

        <Parallax speed={-12} className="self-start mb-20">
        <img src="https://picsum.photos/600/400?random=9" alt="Image 9" className="w-full rounded-xl h-auto" id="last-image" />
        </Parallax>

        <Parallax speed={-1} className="self-center mb-20">
        <img src="https://picsum.photos/400/600?random=10" alt="Image 10" className="w-full rounded-xl h-auto" />
        </Parallax>


    </>
  );
};

export default ImageList;