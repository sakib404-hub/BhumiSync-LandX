"use client";

import { GitBranch, Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const AuditPipelineStepper = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 text-white">
          <GitBranch className="w-4 h-4 text-sky-400" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            {t("validateDeed.pipelineTitle")}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          {t("validateDeed.pipelineProgress")}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Stage 1: Cleared */}
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-emerald-500/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
            <Check className="w-4 h-4 font-bold" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              {t("validateDeed.pipe1Title")}
            </div>
            <div className="text-[11px] text-emerald-400 font-medium">
              {t("validateDeed.pipe1Desc")}
            </div>
          </div>
        </div>

        {/* Stage 2: Blocked Node */}
        <div className="p-3.5 rounded-xl bg-red-500/15 border-2 border-red-500/50 flex items-center gap-3 shadow-[0_0_16px_rgba(239,68,68,0.25)]">
          <div className="w-8 h-8 rounded-full bg-red-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
            !
          </div>
          <div>
            <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
              <span>{t("validateDeed.pipe2Title")}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            </div>
            <div className="text-[11px] text-red-300 font-semibold">
              {t("validateDeed.pipe2Desc")}
            </div>
          </div>
        </div>

        {/* Stage 3: Future Dimmed */}
        <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/10 flex items-center gap-3 opacity-60">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-slate-400 text-xs font-semibold shrink-0">
            3
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400">
              {t("validateDeed.pipe3Title")}
            </div>
            <div className="text-[11px] text-slate-500">
              {t("validateDeed.pipe3Desc")}
            </div>
          </div>
        </div>

        {/* Stage 4: Future Dimmed */}
        <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/10 flex items-center gap-3 opacity-60">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-slate-400 text-xs font-semibold shrink-0">
            4
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400">
              {t("validateDeed.pipe4Title")}
            </div>
            <div className="text-[11px] text-slate-500">
              {t("validateDeed.pipe4Desc")}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
