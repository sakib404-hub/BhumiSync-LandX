"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";

export const VerifyPortalHeader = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 backdrop-blur-md shadow-[0_0_12px_rgba(56,189,248,0.15)]">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
        <span className="text-sky-300 font-mono text-xs tracking-wider uppercase font-semibold">
          {t("verify.badge")}
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {t("verify.title")}
      </h1>

      <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
        {t("verify.subtitle")}
      </p>
    </motion.section>
  );
};
