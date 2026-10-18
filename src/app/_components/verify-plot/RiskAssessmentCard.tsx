"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Lock,
  CheckCircle2,
  Fingerprint,
  Search,
} from "lucide-react";

export const RiskAssessmentCard = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.42)] p-6 sm:p-7 space-y-5 relative overflow-hidden"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {t("plot.riskTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t("plot.riskDesc")}
            </p>
          </div>
        </div>

        {/* Grade Beacon */}
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/40 text-amber-300 self-start sm:self-auto shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          {t("plot.riskGrade")}
        </span>
      </div>

      {/* Reason Badges / Tags */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        <div className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-amber-400" />
          <span>{t("plot.tagMutation")}</span>
        </div>

        <div className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300 flex items-center gap-2">
          <Lock className="h-4 w-4 shrink-0 text-sky-400" />
          <span>{t("plot.tagEscrow")}</span>
        </div>

        <div className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{t("plot.tagClear")}</span>
        </div>
      </div>

      {/* Bottom Action Buttons Cluster */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link href="/verify/qr">
          <button
            type="button"
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Fingerprint className="h-4 w-4 stroke-[2.5]" />
            <span>{t("plot.viewSealsBtn")}</span>
          </button>
        </Link>

        <Link href="/how-it-works">
          <button
            type="button"
            className="bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Search className="h-4 w-4 text-sky-400" />
            <span>{t("plot.inspectCaseBtn")}</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
