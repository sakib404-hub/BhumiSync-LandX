"use client";

import * as React from "react";
import gsap from "gsap";

export const AmbientLightSweep = () => {
  const sweepRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sweepRef.current) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = sweepRef.current;

    const ctx = gsap.context(() => {
      // Master timeline for repeating sudden light sweeps
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
        defaults: { ease: "power2.inOut" },
      });

      // Starts above viewport, blooms into luminous opacity, sweeps down smoothly, fades out
      tl.set(element, { y: "-40vh", opacity: 0 })
        .to(element, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.in",
        })
        .to(
          element,
          {
            y: "130vh",
            duration: 3.2,
            ease: "power1.inOut",
          },
          "-=0.3"
        )
        .to(
          element,
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sweepRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[1] will-change-transform opacity-0 flex flex-col items-center justify-center overflow-visible"
      style={{ transform: "translateY(-40vh)" }}
    >
      {/* Outer Atmospheric Aura (Soft, broad, line-free diffusion) */}
      <div className="w-[90vw] max-w-[1400px] h-[480px] rounded-[100%] bg-gradient-to-b from-sky-400/15 via-cyan-400/15 to-transparent blur-[120px]" />

      {/* Radiant Mid-Layer Luminous Core */}
      <div className="w-[65vw] max-w-[900px] h-[300px] -mt-[390px] rounded-full bg-sky-400/20 blur-[100px]" />

      {/* Concentrated Celestial Inner Glow Wash */}
      <div className="w-[40vw] max-w-[550px] h-[180px] -mt-[240px] rounded-full bg-cyan-300/25 blur-[80px]" />
    </div>
  );
};
