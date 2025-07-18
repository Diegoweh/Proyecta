import React from "react";

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
];

export default function ClientCarousel() {
  return (
    <section className="client-carousel overflow-hidden py-2 bg-zinc-950">
      <div className="carousel-track">
        <ul className="carousel-list">
          {logos.concat(logos).map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Cliente ${index}`} title="logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
