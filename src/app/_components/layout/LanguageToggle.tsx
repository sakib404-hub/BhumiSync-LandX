"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/[0.14] bg-[#0a1526]/60 p-0.5 backdrop-blur-md shadow-inner">
      <div className="flex items-center pl-2 pr-1 text-slate-400">
        <Globe className="h-3.5 w-3.5 text-sky-400" />
      </div>

      {/* English Toggle Option */}
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "text-[#081324] font-bold"
            : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
        }`}
        aria-label="Switch to English"
      >
        {language === "en" && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.5)]"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      {/* Bangla Toggle Option */}
      <button
        type="button"
        onClick={() => setLanguage("bn")}
        className={`relative rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          language === "bn"
            ? "text-[#081324] font-bold"
            : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
        }`}
        aria-label="Switch to Bangla"
      >
        {language === "bn" && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.5)]"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        )}
        <span className="relative z-10">বাং</span>
      </button>
    </div>
  );
};
