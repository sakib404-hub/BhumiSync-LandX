"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const ParcelLedgerPeek = () => {
  const { t, language } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/15 border border-sky-400/25 text-sky-300 shrink-0">
            <Activity className="h-4 w-4" />
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {t("ledger.title")}
          </h2>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <Badge variant="verified" className="px-2.5 sm:px-3 py-1 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
            {t("ledger.verified")}
          </Badge>
          <Link
            href="/verify/plot/452-1"
            className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-200 transition-colors shrink-0"
          >
            <span>{t("ledger.dossier")}</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <motion.div
        whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
      >
        <Card level={1} className="rounded-2xl p-4 sm:p-6 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 text-left">
            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.mouzaDaag")}
              </span>
              <p className="text-white font-medium text-sm">
                {language === "bn" ? "সিন-সাভার • ৪৫২/১" : "SYN-Savar • 452/1"}
              </p>
              <span className="text-[11px] text-slate-400 block">{t("ledger.plotClass")}</span>
            </div>

            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.khatianRef")}
              </span>
              <p className="text-white font-medium text-sm">
                {language === "bn" ? "১১৮৭ (বিএস রেকর্ড)" : "1187 (BS Record)"}
              </p>
              <span className="text-[11px] text-emerald-400 font-mono block">
                {language === "bn" ? "জে.এল নং: ৮৯" : t("ledger.jlNo")}
              </span>
            </div>

            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.sellerReg")}
              </span>
              <p className="text-white font-medium text-sm truncate">
                {language === "bn" ? "রহিম উদ্দিন" : "SYN Rahim Uddin"}
              </p>
              <span className="text-[11px] text-slate-400 font-mono block truncate">
                NID: SYN-NID-A10021
              </span>
            </div>

            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.buyerReg")}
              </span>
              <p className="text-white font-medium text-sm truncate">
                {language === "bn" ? "করিম হোসেন" : "SYN Karim Hossain"}
              </p>
              <span className="text-[11px] text-slate-400 font-mono block truncate">
                NID: SYN-NID-B20045
              </span>
            </div>

            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.shareTransferred")}
              </span>
              <p className="text-sky-400 font-mono font-bold text-sm">
                {language === "bn" ? "০.২৫০০ (৪ আনা)" : "0.2500 (4 anna)"}
              </p>
              <span className="text-[11px] text-[#94a3b8] block font-mono">
                {language === "bn" ? "অবশিষ্ট হিস্যা: ০.২৫০০" : t("ledger.sellerBal")}
              </span>
            </div>

            <div className="space-y-1 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
              <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
                {t("ledger.instrumentCase")}
              </span>
              <p className="text-white font-mono text-sm truncate">
                {language === "bn" ? "দলিল SYN-D-0001" : "SYN-D-0001"}
              </p>
              <span className="text-[11px] text-sky-300 font-mono block truncate">
                {language === "bn" ? "কেস MUT-2026-000001" : "MUT-2026-000001"}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.section>
);
};
