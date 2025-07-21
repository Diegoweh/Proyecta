"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// You can replace these with your actual SVG imports or components
const websiteSvg = `<svg width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#ff0000" rx="10"/><text x="100" y="100" textAnchor="middle" fill="white">Website</text></svg>`
const mobileSvg = `<svg width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#ff0000" rx="10"/><text x="100" y="100" textAnchor="middle" fill="white">Mobile</text></svg>`
const designSvg = `<svg width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#ff0000" rx="10"/><text x="100" y="100" textAnchor="middle" fill="white">Design</text></svg>`
const seoSvg = `<svg width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#ff0000" rx="10"/><text x="100" y="100" textAnchor="middle" fill="white">SEO</text></svg>`
const advertisingSvg = `<svg width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#ff0000" rx="10"/><text x="100" y="100" textAnchor="middle" fill="white">Ads</text></svg>`

interface ServicesProps {
  className?: string
  // You can add translation props here if needed
  translations?: {
    websites: { title: string; content: string }
    apps: { title: string; content: string }
    uiux: { title: string; content: string }
    seo: { title: string; content: string }
    advertising: { title: string; content: string }
    services: string
  }
}

export default function ServicesSection({ className = "", translations }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Default translations - replace with your actual content
  const defaultTranslations = {
    websites: {
      title: "Websites",
      content: "Creamos sitios a la medida que combinan UX inteligente, visuales poderosos y alto rendimiento. Pensados para tu marca. Optimizados para lograr resultados. Más que sitios web: experiencias digitales que inspiran confianza y generan acción.",
    },
    apps: {
      title: "Social",
      content: "Creamos estrategias sociales que van más allá del posteo. Conectan, generan conversación y construyen comunidad. En cada plataforma, con cada formato, con cada mensaje. Nos enfocamos en la relevancia, el storytelling y resultados que se reflejan en el crecimiento real de la marca.",
    },
    uiux: {
      title: "Design",
      content: "Diseñamos sistemas visuales que amplifican la voz de tu marca. Desde identidad y editorial hasta digital y empaque, cada pieza es intencional, poderosa y pensada para conectar. Cada elemento busca elevar la percepción y coherencia de tu marca en todos sus puntos de contacto.",
    },
    seo: {
      title: "SEO",
      content: "Optimizamos tu presencia en buscadores. SEO técnico, de contenido y en página, trabajando en conjunto para aumentar visibilidad y crecimiento orgánico. Alineamos la estrategia de búsqueda con tus objetivos de negocio para atraer al público correcto de forma constante.",
    },
    advertising: {
      title: "Advertising",
      content: "Diseñamos campañas que convierten. Con segmentación precisa y narrativa creativa, transformamos la atención en acción e impacto real. Nuestras campañas combinan rendimiento con emoción para lograr mensajes que inspiran y persuaden.",
    },
    services: "Servicios",
  }

  const t = translations || defaultTranslations

  const points = [
    {
      title: t.websites.title,
      content: t.websites.content,
      image: websiteSvg,
    },
    {
      title: t.apps.title,
      content: t.apps.content,
      image: mobileSvg,
    },
    {
      title: t.uiux.title,
      content: t.uiux.content,
      image: designSvg,
    },
    {
      title: t.seo.title,
      content: t.seo.content,
      image: seoSvg,
    },
    {
      title: t.advertising.title,
      content: t.advertising.content,
      image: advertisingSvg,
    },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const init = () => {
      const pointElements = gsap.utils.toArray(".point") as gsap.DOMTarget[]
      const indicators = gsap.utils.toArray(".indicator") as gsap.DOMTarget[]
      const height = 100 * pointElements.length

      gsap.set(".indicators", { display: "flex" })

      const tl = gsap.timeline({
        duration: pointElements.length,
        scrollTrigger: {
          trigger: "#services",
          start: "top center",
          end: "+=" + height + "%",
          scrub: 0.5,
          markers: false,
          id: "points",
          immediateRender: false,
        },
      })

      const pinner = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section .wrapper",
          start: "top top",
          end: "+=" + height + "%",
          scrub: 0.5,
          pin: ".services-section .wrapper",
          pinSpacing: true,
          id: "pinning",
          markers: false,
          snap: {
            snapTo: [0, 0.25, 0.5, 0.7, 0.9],
            duration: { min: 0.1, max: 0.1 },
            delay: 1,
            inertia: false,
            directional: false,
            ease: "power1.inOut",
          },
        },
      })

      pointElements.forEach((elem, i) => {
        gsap.set(elem, { position: "absolute", top: 0 })

        tl.to(indicators[i], { backgroundColor: "white", duration: 0.25 }, i)
        tl.from((elem as HTMLElement).querySelector("svg"), { autoAlpha: 0 }, i)
        tl.from((elem as HTMLElement).querySelector("article"), { autoAlpha: 0, translateY: 100 }, i)

        if (i != pointElements.length - 1) {
          tl.to(indicators[i], { backgroundColor: "#333333", duration: 0.25 }, i + 0.75)
          tl.to((elem as HTMLElement).querySelector("article"), { autoAlpha: 0, translateY: -100 }, i + 0.75)
          tl.to((elem as HTMLElement).querySelector("svg"), { autoAlpha: 0 }, i + 0.75)
        }
      })
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(init, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`section home-dark-section services-section relative ${className}`}
    >
      <div ref={wrapperRef} className="wrapper col-span-12 h-screen w-full text-white">
        <h2 className="sr-only">{t.services}</h2>

        <div className="indicators absolute left-0 top-0 mt-[10vh] hidden h-[80vh] w-1 flex-col justify-between gap-2">
          {points.map((_, index) => (
            <div key={index} className="indicator w-full grow bg-[#333333]" />
          ))}
        </div>

        {points.map(({ title, content, image }, index) => (
          <div
            key={index}
            className="point flex h-screen w-full flex-col items-center justify-center gap-x-20 gap-y-12 p-16 pr-0 md:flex-row lg:gap-x-40"
          >
            {/* <div className="hidden w-full max-w-80 lg:block">
              <div dangerouslySetInnerHTML={{ __html: image }} />
            </div> */}
            <article className="flex flex-col gap-14">
              <h3 className="faq font-display text-4xl text-red-500 uppercase md:text-5xl lg:text-6xl">{title}</h3>
              <p className="max-w-2xl text-xl" dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
