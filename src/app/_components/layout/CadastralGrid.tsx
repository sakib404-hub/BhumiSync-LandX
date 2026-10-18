"use client";

import { memo } from "react";

export const CadastralGrid = memo(() => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Precision Cadastral Coordinate SVG Lattice */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, black 45%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, black 45%, transparent 95%)",
        }}
      >
        <defs>
          {/* Minor 40px cadastral daag boundary cell */}
          <pattern
            id="cadastral-minor"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(56, 189, 248, 0.035)"
              strokeWidth="0.75"
            />
          </pattern>

          {/* Major 200px survey sector with precision crosshairs */}
          <pattern
            id="cadastral-major"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <rect width="200" height="200" fill="url(#cadastral-minor)" />
            <path
              d="M 200 0 L 0 0 0 200"
              fill="none"
              stroke="rgba(56, 189, 248, 0.08)"
              strokeWidth="1"
            />
            {/* Sector Crosshairs (+) */}
            <path
              d="M -5 0 L 5 0 M 0 -5 L 0 5"
              fill="none"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth="1.2"
            />
            <path
              d="M 195 0 L 205 0 M 200 -5 L 200 5"
              fill="none"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth="1.2"
            />
            <path
              d="M -5 200 L 5 200 M 0 195 L 0 205"
              fill="none"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth="1.2"
            />
            <path
              d="M 195 200 L 205 200 M 200 195 L 200 205"
              fill="none"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth="1.2"
            />
            {/* Center sub-marker dot */}
            <circle cx="100" cy="100" r="1" fill="rgba(56, 189, 248, 0.18)" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#cadastral-major)" />
      </svg>

      {/* 2. Cadastral Survey Marginalia / Ambient Coordinates */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-40 font-mono text-[9px] tracking-widest text-sky-400/40 uppercase">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 animate-pulse" />
            <span>GRID: LAT 23° 51&apos; 42&quot; N • LON 90° 15&quot; 38&quot; E</span>
          </div>
          <div className="hidden md:block">
            <span>CADASTRAL DATUM: BGD-1983 / WGS-84</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="hidden sm:block">
            <span>MOUZA SHEET: SAVAR-04 • JL NO: 89</span>
          </div>
          <div>
            <span>CRYPTOGRAPHIC CADASTRAL PROTOCOL • 1:1200 SCALE</span>
          </div>
        </div>
      </div>
    </div>
  );
});

CadastralGrid.displayName = "CadastralGrid";
