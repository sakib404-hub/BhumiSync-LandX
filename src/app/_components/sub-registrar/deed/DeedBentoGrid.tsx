"use client";

import { motion } from "framer-motion";
import {
  Users,
  Fingerprint,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  PieChart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DeedBentoGrid = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Card 1: Parties Involved */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {t("deedDossier.cardParties")}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {t("deedDossier.cardBiometricBadge")}
            </span>
          </div>

          {/* Parties List */}
          <div className="flex flex-col gap-3">
            {/* Seller */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t("deedDossier.partySeller")}
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <Fingerprint className="w-3.5 h-3.5" />
                  {t("deedDossier.verifiedBio")}
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                SYN Rahim Uddin
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-0.5">
                <span>NID: SYN-NID-A10021</span>
                <span className="text-sky-300 font-semibold">{t("deedDossier.sellerShare")}</span>
              </div>
            </div>

            {/* Buyer */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t("deedDossier.partyBuyer")}
                </span>
                <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t("deedDossier.transfereeBadge")}
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                SYN Karim Hossain
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-0.5">
                <span>NID: SYN-NID-B20045</span>
                <span>{t("deedDossier.buyerCity")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 1 Footer */}
        <p className="pt-3 mt-3 border-t border-white/10 text-xs text-slate-400">
          {t("deedDossier.partiesFooter")}
        </p>
      </motion.div>

      {/* Card 2: Plot & Khatian Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {t("deedDossier.cardSpecs")}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {t("deedDossier.cleanTitleBadge")}
            </span>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.specMouza")}
              </span>
              <span className="text-xs sm:text-sm text-white font-semibold">
                {t("deedDossier.specMouzaVal")}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.specDaag")}
              </span>
              <span className="text-xs sm:text-sm text-sky-300 font-mono font-bold">
                {t("deedDossier.specDaagVal")}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.specKhatian")}
              </span>
              <span className="text-xs sm:text-sm text-white font-mono font-semibold">
                {t("deedDossier.specKhatianVal")}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.specGazette")}
              </span>
              <span className="text-xs sm:text-sm text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t("deedDossier.specGazetteVal")}
              </span>
            </div>
          </div>

          <div className="p-2.5 mt-2.5 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-400">
              {t("deedDossier.specJurisdiction")}
            </span>
            <span className="text-xs text-white font-medium truncate">
              {t("deedDossier.specJurisdictionVal")}
            </span>
          </div>
        </div>

        {/* Card 2 Footer */}
        <p className="pt-3 mt-3 border-t border-white/10 text-xs text-slate-400">
          {t("deedDossier.specsFooter")}
        </p>
      </motion.div>

      {/* Card 3: Share & Area Converted */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-sky-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {t("deedDossier.cardShare")}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30">
              {t("deedDossier.locked50Badge")}
            </span>
          </div>

          {/* Metrics Row */}
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.transactedShareLabel")}
              </span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono">
                  0.2500
                </span>
                <span className="text-xs text-slate-400">
                  {t("deedDossier.transactedShareSub")}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {t("deedDossier.areaEquivalentLabel")}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white block mt-0.5">
                {t("deedDossier.areaEquivalentVal")}
              </span>
              <span className="text-[11px] text-slate-400">
                {t("deedDossier.areaSqFt")}
              </span>
            </div>
          </div>

          {/* Visual proportional share indicator bar */}
          <div className="mt-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">{t("deedDossier.sellerRetained")}</span>
              <span className="text-sky-300 font-semibold">{t("deedDossier.buyerEscrow")}</span>
            </div>

            <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex p-0.5 border border-white/15">
              <div
                className="h-full bg-slate-500 rounded-l-full"
                style={{ width: "50%" }}
                title="0.2500 Retained Freehold"
              />
              <div
                className="h-full bg-sky-400 rounded-r-full shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                style={{ width: "50%" }}
                title="0.2500 Locked in Sovereign Escrow"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{t("deedDossier.freeholdLabel")}</span>
              <span className="text-sky-300 font-medium">{t("deedDossier.encumberedLabel")}</span>
            </div>
          </div>
        </div>

        {/* Card 3 Footer */}
        <p className="pt-3 mt-3 border-t border-white/10 text-xs text-slate-400">
          {t("deedDossier.shareFooter")}
        </p>
      </motion.div>
    </div>
  );
};
