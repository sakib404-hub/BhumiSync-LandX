"use client";

import { motion } from "framer-motion";
import { Link2, CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SealChainLedger = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 sm:p-6 mb-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <Link2 className="w-4 h-4" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t("deedDossier.sealChainTitle")}
          </h3>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t("deedDossier.sealChainBadge")}
          </span>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          {t("deedDossier.consensusState")}
        </span>
      </div>

      {/* Chain Nodes Layout */}
      <div className="flex flex-col md:flex-row items-stretch gap-4 relative">
        {/* Node 1: Genesis Notarization Block */}
        <div className="flex-1 p-4 rounded-xl bg-slate-900/60 border border-white/15 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-sky-300 font-mono">
                {t("deedDossier.node1Block")}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {t("deedDossier.node1Badge")}
              </span>
            </div>

            <h4 className="text-sm font-bold text-white">
              {t("deedDossier.node1Title")}
            </h4>

            <div className="bg-slate-950/80 p-2.5 rounded-lg border border-white/10 my-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                {t("deedDossier.blockHash")}
              </span>
              <code className="text-xs text-sky-300 font-mono select-all break-all block mt-0.5">
                0x8f3b9ce4a1610dc89270bb34e912ca872e4a1d892
              </code>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t("deedDossier.node1Footer")}</span>
          </div>
        </div>

        {/* Central Lock Connector Symbol */}
        <div className="hidden md:flex flex-col items-center justify-center px-1">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-sky-400/50 text-sky-400 flex items-center justify-center shadow-[0_0_14px_rgba(56,189,248,0.4)]">
            <Lock className="w-4 h-4" />
          </div>
          <div className="w-0.5 h-8 bg-gradient-to-b from-sky-400 to-sky-600 my-1" />
        </div>

        {/* Node 2: Escrow Title Lock Inscription */}
        <div className="flex-1 p-4 rounded-xl bg-slate-900/60 border border-white/15 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-sky-300 font-mono">
                {t("deedDossier.node2Block")}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30">
                {t("deedDossier.node2Badge")}
              </span>
            </div>

            <h4 className="text-sm font-bold text-white">
              {t("deedDossier.node2Title")}
            </h4>

            <div className="bg-slate-950/80 p-2.5 rounded-lg border border-white/10 my-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                {t("deedDossier.inscriptionHash")}
              </span>
              <code className="text-xs text-sky-200 font-mono select-all break-all block mt-0.5">
                0x4a12ec89bf718820c78a109e5309d0124a9e310f
              </code>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{t("deedDossier.node2Footer")}</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
