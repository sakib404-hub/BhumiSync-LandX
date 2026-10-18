"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  MapPin,
  Lock,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Info,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HoldingDossierCard = () => {
  const { t, language } = useLanguage();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden flex flex-col justify-between"
    >
      {/* Top Ambient Highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-6 relative z-10">
        {/* Card Header & Status Badges */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t("citizenLand.holdingTitle")}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {t("citizenLand.holdingLocation")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-300 text-xs font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]">
              <Lock className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              {t("citizenLand.badgeLocked")}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-slate-300 text-xs font-medium">
              {t("citizenLand.badgeDeedEscrowed")}
            </span>
          </div>
        </div>

        {/* Interactive Share Distribution Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-semibold text-slate-200">
              {t("citizenLand.shareAllocTitle")}
            </span>
            <span className="text-white font-mono font-bold">
              {t("citizenLand.shareAllocTotal")}
            </span>
          </div>

          {/* Horizontal Stacked Meter */}
          <div className="relative h-8 w-full rounded-full bg-slate-950/80 p-1 border border-white/15 flex gap-1 shadow-inner overflow-hidden">
            {/* Retained Free Share (50%) */}
            <div
              onMouseEnter={() => setActiveTooltip("retained")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="h-full w-1/2 rounded-l-full bg-slate-800/90 hover:bg-slate-700/90 border border-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-300 font-mono tracking-wider transition-all duration-200 cursor-pointer select-none"
            >
              {t("citizenLand.shareUnrestrictedBar")}
            </div>

            {/* Escrowed Share (50%) */}
            <div
              onMouseEnter={() => setActiveTooltip("escrowed")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="h-full w-1/2 rounded-r-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 font-bold text-[10px] sm:text-xs tracking-wider shadow-[0_0_16px_rgba(56,189,248,0.4)] flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer select-none"
            >
              <Lock className="w-3 h-3 text-slate-950" />
              <span>{t("citizenLand.shareEscrowedBar")}</span>
            </div>
          </div>

          {/* Interactive Share Tooltip Alert */}
          <AnimatePresence>
            {activeTooltip && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs p-2.5 rounded-xl bg-slate-950/90 border border-sky-400/30 text-sky-300 flex items-center gap-2"
              >
                <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                {activeTooltip === "retained"
                  ? language === "bn"
                    ? "০.২৫০০ হিস্যা (৪ আনা) সম্পূর্ণরূপে মুক্ত ও সংরক্ষিত।"
                    : "0.2500 share (4 anna) retained free and clear of all claims."
                  : language === "bn"
                    ? "০.২৫০০ হিস্যা (৪ আনা) দলিল SYN-D-0001 মূলে ক্রেতা করিম হোসেনের বরাদ্দে লক রয়েছে।"
                    : "0.2500 share (4 anna) locked in escrow for buyer SYN Karim Hossain."}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Labels Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="w-3 h-3 rounded-full bg-slate-700 mt-1 border border-white/20 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  {t("citizenLand.retainedFreeTitle")}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  {t("citizenLand.retainedFreeDesc")}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-500/10 border border-sky-400/30 shadow-[0_0_14px_rgba(56,189,248,0.12)]">
              <div className="w-3 h-3 rounded-full bg-sky-400 mt-1 shadow-[0_0_8px_#38bdf8] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-sky-300">
                  {t("citizenLand.escrowedTitle")}
                </span>
                <span className="text-[11px] text-slate-300 mt-0.5">
                  {t("citizenLand.escrowedDesc")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Meta Grid (4 attributes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 p-4 rounded-xl bg-slate-950/60 border border-white/10 shadow-inner">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">{t("citizenLand.deedNo")}</span>
            <span className="text-sm font-mono font-bold text-white mt-0.5">SYN-D-0001</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">{t("citizenLand.jurisdiction")}</span>
            <span className="text-sm font-medium text-white mt-0.5">
              {t("citizenLand.jurisdictionVal")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">{t("citizenLand.mutationCase")}</span>
            <span className="text-sm font-mono font-bold text-sky-300 mt-0.5">
              MUT-2026-000001
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">{t("citizenLand.genesisSeal")}</span>
            <span className="text-sm font-mono font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
              0x8f3b...e4a1
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </span>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-white/10 relative z-10">
        <Link
          href="/verify/qr"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-slate-950" />
          <span>{t("citizenLand.viewDossier")}</span>
        </Link>

        <Link
          href="/verify/plot/452-1"
          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium hover:scale-[1.02] active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-sky-400" />
          <span>{t("citizenLand.mapPin")}</span>
        </Link>
      </div>
    </motion.div>
  );
};
