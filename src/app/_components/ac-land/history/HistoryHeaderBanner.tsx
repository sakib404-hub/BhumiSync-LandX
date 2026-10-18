"use client";

import { useState } from "react";
import { ShieldCheck, Download, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const HistoryHeaderBanner = () => {
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }, 1200);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>{t("mutationHistory.tagline")}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t("mutationHistory.title")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            {t("mutationHistory.subtitle")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="rounded-xl px-4 py-2.5 bg-slate-900/60 backdrop-blur-xl border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center gap-2 active:scale-[0.98] disabled:opacity-60"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
            ) : (
              <Download className="w-4 h-4 text-sky-400" />
            )}
            <span>
              {isExporting ? t("mutationHistory.exporting") : t("mutationHistory.exportCsv")}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-xl bg-teal-500/20 border border-teal-400/40 text-teal-200 flex items-center gap-2 text-xs sm:text-sm shadow-[0_0_16px_rgba(20,184,166,0.3)]"
          >
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{t("mutationHistory.exported")}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
