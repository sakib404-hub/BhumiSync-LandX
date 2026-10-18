"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  PieChart,
  Clock,
  Lock,
  User,
  UserPlus,
  Users,
  CheckCircle2,
  RefreshCw,
  Info,
} from "lucide-react";

export const OwnershipShareCard = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-6 sm:p-7 space-y-6"
    >
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/25 flex items-center justify-center shrink-0">
            <PieChart className="h-5 w-5 text-sky-400" />
          </span>
          <div className="space-y-0.5">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              {t("plot.sharesTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t("plot.sharesSubtitle")}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/70 border border-white/10 text-xs font-semibold text-sky-300 self-start sm:self-auto shrink-0">
          <Clock className="h-3.5 w-3.5 text-sky-400" />
          <span>{t("plot.auditStateLocked")}</span>
        </div>
      </div>

      {/* STACKED HORIZONTAL SHARE BAR */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
          <span>{t("plot.spectrumTitle")}</span>
          <span className="text-sky-300 font-mono font-bold">{t("plot.spectrumTotal")}</span>
        </div>

        {/* Segmented Progress Bar */}
        <div className="w-full h-9 rounded-xl bg-slate-950/80 border border-white/15 p-1 flex gap-1 relative overflow-visible backdrop-blur-md">
          {/* Segment 1: Free (25%) */}
          <div
            onMouseEnter={() => setActiveTooltip("free")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="h-full rounded-lg bg-slate-700/70 hover:bg-slate-700 transition-all flex items-center justify-center text-[11px] text-white font-semibold relative cursor-pointer"
            style={{ width: "25%" }}
          >
            <span className="truncate px-1.5">{t("plot.segFree")}</span>
            {activeTooltip === "free" && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/20 text-white text-[10px] px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap z-30 pointer-events-none">
                {t("plot.segFreeTooltip")}
              </div>
            )}
          </div>

          {/* Segment 2: Locked (25%) */}
          <div
            onMouseEnter={() => setActiveTooltip("locked")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="h-full rounded-lg bg-sky-400 text-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.55)] border border-sky-300 flex items-center justify-center gap-1 text-[11px] font-bold relative cursor-pointer animate-pulse"
            style={{ width: "25%" }}
          >
            <Lock className="h-3 w-3 text-slate-950 shrink-0" />
            <span className="truncate px-1">{t("plot.segLocked")}</span>
            {activeTooltip === "locked" && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-sky-400 text-sky-300 text-[10px] px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap z-30 pointer-events-none font-medium">
                {t("plot.segLockedTooltip")}
              </div>
            )}
          </div>

          {/* Segment 3: Co-sharers (50%) */}
          <div
            onMouseEnter={() => setActiveTooltip("cosharers")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="h-full rounded-lg bg-slate-800/80 hover:bg-slate-800 transition-all flex items-center justify-center text-[11px] text-slate-300 font-medium relative cursor-pointer"
            style={{ width: "50%" }}
          >
            <span className="truncate px-1.5">{t("plot.segCoSharers")}</span>
            {activeTooltip === "cosharers" && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/20 text-slate-200 text-[10px] px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap z-30 pointer-events-none">
                {t("plot.segCoSharersTooltip")}
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-white/20 inline-block" />
            <span>{t("plot.legendFree")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] inline-block" />
            <span className="text-sky-300 font-semibold">{t("plot.legendLocked")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-white/10 inline-block" />
            <span>{t("plot.legendCoSharers")}</span>
          </div>
        </div>
      </div>

      {/* COMPACT OWNERSHIP LEDGER TABLE */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60 backdrop-blur-md">
        <table className="w-full min-w-[580px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/90 border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <th className="py-3 px-4">{t("plot.thOwner")}</th>
              <th className="py-3 px-3 text-right">{t("plot.thTotal")}</th>
              <th className="py-3 px-3 text-right">{t("plot.thLocked")}</th>
              <th className="py-3 px-3 text-right">{t("plot.thAvailable")}</th>
              <th className="py-3 px-4 text-center">{t("plot.thStatus")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs text-slate-200">
            {/* Row 1: Seller */}
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-3.5 px-4 font-medium flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/10 shrink-0">
                  <User className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-bold text-white">{t("plot.ownerSeller")}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{t("plot.ownerSellerNid")}</div>
                </div>
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-300">
                {t("plot.ownerSellerTotal")}
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-sky-400 font-semibold">
                {t("plot.ownerSellerLocked")}
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-white font-semibold">
                {t("plot.ownerSellerAvail")}
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300 inline-flex items-center gap-1.5 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                  <Lock className="h-3 w-3" />
                  <span>{t("plot.ownerSellerStatus")}</span>
                </span>
              </td>
            </tr>

            {/* Row 2: Buyer */}
            <tr className="hover:bg-white/[0.03] transition-colors bg-sky-500/[0.03]">
              <td className="py-3.5 px-4 font-medium flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-sky-500/15 text-sky-400 border border-sky-400/25 shrink-0">
                  <UserPlus className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-bold text-white">{t("plot.ownerBuyer")}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{t("plot.ownerBuyerNid")}</div>
                </div>
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-sky-300 font-semibold">
                {t("plot.ownerBuyerTotal")}
              </td>
              <td className="py-3.5 px-3 text-right text-[11px] text-sky-400 font-medium">
                {t("plot.ownerBuyerLocked")}
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-400">
                {t("plot.ownerBuyerAvail")}
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300 inline-flex items-center gap-1.5">
                  <RefreshCw className="h-3 w-3 animate-spin text-sky-400" />
                  <span>{t("plot.ownerBuyerStatus")}</span>
                </span>
              </td>
            </tr>

            {/* Row 3: Co-Sharer Heirs */}
            <tr className="hover:bg-white/[0.03] transition-colors">
              <td className="py-3.5 px-4 font-medium flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 shrink-0">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-bold text-white">{t("plot.ownerHeirs")}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{t("plot.ownerHeirsNid")}</div>
                </div>
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-300">
                {t("plot.ownerHeirsTotal")}
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-slate-500">
                {t("plot.ownerHeirsLocked")}
              </td>
              <td className="py-3.5 px-3 text-right font-mono tabular-nums text-emerald-400 font-bold">
                {t("plot.ownerHeirsAvail")}
              </td>
              <td className="py-3.5 px-4 text-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{t("plot.ownerHeirsStatus")}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Brief Context Footnote */}
      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
        <Info className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t("plot.footnote")}
        </p>
      </div>
    </motion.div>
  );
};
