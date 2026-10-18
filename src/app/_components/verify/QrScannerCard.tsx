"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import { ScanLine, QrCode, Upload, Loader2 } from "lucide-react";

export const QrScannerCard = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isScanning, setIsScanning] = useState(false);

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      router.push("/verify/qr");
    }, 700);
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-6 sm:p-7 flex flex-col justify-between space-y-5"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/25 flex items-center justify-center shrink-0">
              <ScanLine className="h-5 w-5 text-sky-400" />
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
              {t("verify.scanTitle")}
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-400/25 text-sky-300 shrink-0">
            {t("verify.scanVersion")}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 leading-normal">
          {t("verify.scanSubtitle")}
        </p>

        {/* Viewfinder Target Window */}
        <div
          onClick={triggerScan}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") triggerScan();
          }}
          className="relative w-full aspect-square max-h-52 rounded-xl bg-slate-950/80 border border-white/15 p-4 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:border-sky-400/50 transition-colors"
        >
          {/* Corner Target Brackets */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

          {/* Glowing Animated Laser Scanning Line */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                top: ["8%", "88%", "8%"],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]"
            />
          )}

          {/* QR Graphic Mockup */}
          <div className="w-24 h-24 rounded-xl bg-slate-900/90 border border-sky-400/30 flex flex-col items-center justify-center p-2.5 relative shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:scale-105 transition-transform">
            <div className="grid grid-cols-4 gap-1.5 w-full h-full opacity-60">
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/40 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/20 rounded-sm" />
              <span className="bg-sky-400/30 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/50 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/20 rounded-sm" />
              <span className="bg-sky-400/70 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/50 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
              <span className="bg-sky-400/30 rounded-sm" />
              <span className="bg-sky-400 rounded-sm" />
            </div>
            <QrCode className="h-9 w-9 text-sky-400 absolute drop-shadow-[0_0_10px_#38bdf8]" />
          </div>

          <div className="mt-3 text-center">
            <span className="text-xs text-slate-400 group-hover:text-sky-300 transition-colors">
              {isScanning ? (
                <span className="inline-flex items-center gap-1.5 text-sky-300 font-semibold animate-pulse">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-sky-300" />
                  Scanning...
                </span>
              ) : (
                t("verify.cameraHint")
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={triggerScan}
          disabled={isScanning}
          className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <Upload className="h-4 w-4 text-sky-400 shrink-0" />
          <span>{t("verify.uploadBtn")}</span>
        </button>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/70 px-3 py-1 rounded-full border border-white/10 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            {t("verify.encryptedTag")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
