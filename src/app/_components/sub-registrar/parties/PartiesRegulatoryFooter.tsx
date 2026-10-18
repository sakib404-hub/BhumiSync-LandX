"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PartiesRegulatoryFooter = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 pt-2">
      {/* Institutional Regulatory Note Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-4 bg-slate-950/40 backdrop-blur-xl border border-white/10 flex items-start gap-3 shadow-sm"
      >
        <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-xs text-slate-300 leading-relaxed">
          <span className="font-bold text-white mr-1.5">
            {t("partiesRegistry.regRuleTitle")}
          </span>
          <span>{t("partiesRegistry.regRuleDesc")}</span>
        </div>
      </motion.div>

      {/* Institutional Bottom Authority Signature Footer */}
      <footer className="pt-4 pb-6 border-t border-white/10 text-slate-400 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-medium">
            {t("partiesRegistry.footerNode")}
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-sky-400/90 font-mono text-[11px]">
            {t("partiesRegistry.footerLedgerStatus")}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium flex-wrap">
          <button
            type="button"
            className="hover:text-sky-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{t("partiesRegistry.bylaws")}</span>
          </button>
          <button
            type="button"
            className="hover:text-sky-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t("partiesRegistry.nidGateway")}</span>
          </button>
          <button
            type="button"
            className="hover:text-sky-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{t("partiesRegistry.clearance")}</span>
          </button>
          <span className="text-slate-600 font-mono text-[11px]">
            {t("partiesRegistry.versionTag")}
          </span>
        </div>
      </footer>
    </div>
  );
};
