"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export const AmbientMouseSpotlight = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointerInside, setIsPointerInside] = useState(false);

  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);

  // Buttery-smooth spring interpolation to prevent erratic jumps and create fluid physical inertia
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(rawMouseX, springConfig);
  const smoothY = useSpring(rawMouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    if (shouldReduceMotion) return;

    // Check if device supports hover/fine pointer (ignore touchscreens to preserve battery)
    if (window.matchMedia("(hover: none)").matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isPointerInside) setIsPointerInside(true);

      // Expose CSS variables for interactive card borders
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handlePointerLeave = () => {
      setIsPointerInside(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [shouldReduceMotion, rawMouseX, rawMouseY, isPointerInside]);

  if (!mounted || shouldReduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden select-none"
    >
      {/* 1. Primary Diffused Celestial Spotlight (Broad Ambient Pool) */}
      <motion.div
        className="absolute rounded-full opacity-0 pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          width: 700,
          height: 700,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.03) 45%, transparent 75%)",
          opacity: isPointerInside ? 1 : 0,
        }}
      />

      {/* 2. Concentrated Refraction Core (Highlights Card Borders on Proximity) */}
      <motion.div
        className="absolute rounded-full opacity-0 pointer-events-none transition-opacity duration-500 ease-out"
        style={{
          width: 300,
          height: 300,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(56, 189, 248, 0.02) 50%, transparent 80%)",
          opacity: isPointerInside ? 1 : 0,
        }}
      />
    </div>
  );
};
