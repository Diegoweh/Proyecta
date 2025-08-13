"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

interface TaglineSectionProps {
  className?: string
  tagline: string
}

export default function TaglineSection({ className = "", tagline }: TaglineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const linePathRef = useRef<SVGPathElement>(null)
  const arrowRef = useRef<SVGPathElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const arrowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin)

    const init = () => {
      const linePath = linePathRef.current
      const arrow = arrowRef.current
      const taglineElement = taglineRef.current
      const arrowsElement = arrowsRef.current

      if (!linePath || !arrow || !taglineElement || !arrowsElement) return

      // Set initial state
      gsap.set(linePath, { drawSVG: 0 })

      // Create timeline for arrow animation
      const arrowTimeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: arrowsElement,
            start: "center bottom",
            end: "center center",
            markers: false,
            scrub: 1,
          },
        })
        .to(
          linePath,
          {
            drawSVG: "100%",
          },
          "<",
        )
        .to(
          arrow,
          {
            opacity: 1,
            duration: 0.1,
          },
          "<",
        )
        .to(
          arrow,
          {
            motionPath: {
              path: linePath,
              align: linePath,
              alignOrigin: [0.5, 0.5],
              autoRotate: 30,
            },
          },
          0,
        )

      // Split text and animate
      const split = new SplitText(taglineElement, { type: "lines" })

      split.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            markers: false,
            scrub: 1,
            start: "top bottom-=20%",
            end: "bottom bottom-=10%",
          },
        })
      })

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        split.revert()
      }
    }

    const cleanup = init()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className={`section tagline-section relative bg-black text-white ${className}`}>
      <div ref={arrowsRef} className="tagline-arrows">
        <svg
          strokeLinecap="round"
          className="h-[15rem] w-[15rem] rotate-45 md:w-[20rem] md:rotate-0 lg:w-[25rem]"
          strokeLinejoin="round"
          viewBox="0 0 550 330"
        >
          <path
            ref={linePathRef}
            id="tagline-arrow-path"
            fill="none"
            stroke="#ef4444"
            strokeWidth="10"
            d="M8.5,7.8C46.3,67,121.7,185.5,265.5,185.9c42.8,0.1,120.5-55.9-25.2-120.3
              C79-5.8,177.6,164.1,222.3,207.7c59.1,49.9,83.8,62.1,162.6,96.8"
          />
          <path
            ref={arrowRef}
            className="opacity-0"
            id="tagline-arrow"
            stroke="white"
            strokeWidth="12"
            d="M465.7 172.9l47.1 6-29.8 33.3-17.3-39.3z"
          />
        </svg>
      </div>
      <div className="text col-span-12 flex justify-center font-light">
        <p
          ref={taglineRef}
          id="services-tagline"
          className="max-w-5xl text-center text-4xl md:text-5xl lg:text-7xl tagline-text"
        >
          {tagline}
        </p>
      </div>

      <style jsx>{`
    .tagline-text :global(div) {
        background: linear-gradient(to right, #ef4444 50%, #252525 50%);
        background-size: 200% 100%;
        background-position-x: 100%;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1.2;
        transition: background-position-x 0.3s ease;
    }
    `}</style>

    </div>
  )
}
