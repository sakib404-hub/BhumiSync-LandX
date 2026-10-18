"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import { Lock, MapPin, ArrowRight } from "lucide-react";

export const LiveLedgerPreviewBar = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      label: t("verify.colMouza"),
      val: t("verify.colMouzaVal"),
      sub: t("verify.colMouzaSub"),
      highlight: false,
    },
    {
      label: t("verify.colDaag"),
      val: t("verify.colDaagVal"),
      sub: t("verify.colDaagSub"),
      highlight: true,
    },
    {
      label: t("verify.colKhatian"),
      val: t("verify.colKhatianVal"),
      sub: t("verify.colKhatianSub"),
      highlight: false,
    },
    {
      label: t("verify.colSeller"),
      val: t("verify.colSellerVal"),
      sub: t("verify.colSellerSub"),
      highlight: false,
    },
    {
      label: t("verify.colBuyer"),
      val: t("verify.colBuyerVal"),
      sub: t("verify.colBuyerSub"),
      highlight: false,
    },
    {
      label: t("verify.colShare"),
      val: t("verify.colShareVal"),
      sub: t("verify.colShareSub"),
      highlight: true,
    },
    {
      label: t("verify.colCase"),
      val: t("verify.colCaseVal"),
      sub: t("verify.colCaseSub"),
      highlight: false,
    },
  ];

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-5 sm:p-6 space-y-5"
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#56e5a9] shrink-0" />
          <div className="space-y-0.5">
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold block">
              {t("verify.previewBadge")}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {t("verify.previewTitle")}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Status Chip 1: PASS */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t("verify.statusPass")}
          </span>

          {/* Status Chip 2: LOCKED Escrow */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.25)] shrink-0">
            <Lock className="h-3 w-3 text-sky-300" />
            {t("verify.statusLocked")}
          </span>
        </div>
      </div>

      {/* 7-Column Ledger Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-slate-950/70 border border-white/10 space-y-1 hover:border-white/20 transition-colors"
          >
            <span className="text-[11px] font-medium text-slate-400 block truncate">
              {item.label}
            </span>
            <span
              className={`text-sm font-bold block truncate ${
                item.highlight ? "text-sky-300" : "text-white"
              }`}
            >
              {item.val}
            </span>
            <span className="text-[10px] text-slate-400 block truncate font-mono">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Audit Sub-row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
            {t("verify.jurisdiction")}
          </span>
          <span className="hidden md:inline font-mono text-[11px] text-slate-500">
            {t("verify.blockVerified")}
          </span>
        </div>

        <Link
          href="/verify/qr"
          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold text-xs transition-colors group"
        >
          <span>{t("verify.inspectDossier")}</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.section>
  );
};
