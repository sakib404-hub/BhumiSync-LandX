"use client";

import { useState } from "react";
import {
  FileCheck2,
  MapPin,
  BookOpen,
  Building,
  User,
  CreditCard,
  PieChart,
  Square,
  UserCheck,
  Clock,
  Shield,
  RotateCw,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface FormProps {
  onRecheck?: () => void;
}

export const DeedParameterForm = ({ onRecheck }: FormProps) => {
  const { t, language } = useLanguage();

  const [mouzaPlot, setMouzaPlot] = useState("Mouza SYN-Savar • Daag 452/1");
  const [khatian, setKhatian] = useState("1187 (BS)");
  const [sellerName, setSellerName] = useState("SYN Rahim Uddin");
  const [sellerNid, setSellerNid] = useState("SYN-NID-A10021");
  const [share, setShare] = useState("0.2500 (4 anna)");
  const [area, setArea] = useState("12.5 Decimals (0.125 Acre)");
  const [buyerInfo, setBuyerInfo] = useState("SYN-NID-B20045 • SYN Karim Hossain");
  const [isChecking, setIsChecking] = useState(false);

  const handleCrossCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      if (onRecheck) onRecheck();
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="p-5 sm:p-6 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-5"
    >
      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {t("validateDeed.formTitle")}
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30">
            {t("validateDeed.preCheckBadge")}
          </span>
        </div>
        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
          {t("validateDeed.formSubtitle")}
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={(e) => { e.preventDefault(); handleCrossCheck(); }} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* 1. Mouza / Plot */}
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
              <span>{t("validateDeed.fieldMouza")}</span>
              <span className="text-slate-500 font-mono text-[10px]">CAD-PLOT-ID</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={mouzaPlot}
                onChange={(e) => setMouzaPlot(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white font-mono text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <MapPin className="w-4 h-4 absolute right-3 top-3 text-sky-400 pointer-events-none" />
            </div>
          </div>

          {/* 2. Khatian Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldKhatian")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={khatian}
                onChange={(e) => setKhatian(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white font-mono text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <BookOpen className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 3. Jurisdiction (Read-only) */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldJurisdiction")}
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value="Savar Sub-Registry"
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/40 border border-white/10 text-slate-400 text-xs sm:text-sm cursor-not-allowed"
              />
              <Building className="w-4 h-4 absolute right-3 top-3 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* 4. Seller Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldSellerName")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <User className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 5. Seller NID */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldSellerNid")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={sellerNid}
                onChange={(e) => setSellerNid(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white font-mono text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <CreditCard className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 6. Share to Transact (Highlighted with Red Flag) */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
              <span>{t("validateDeed.fieldShare")}</span>
              <span className="text-red-400 font-mono text-[10px] font-bold">
                {t("validateDeed.quotaFlag")}
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={share}
                onChange={(e) => setShare(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 text-red-400 border border-red-500/50 font-mono text-xs sm:text-sm focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400 transition-all"
              />
              <PieChart className="w-4 h-4 absolute right-3 top-3 text-red-400 pointer-events-none" />
            </div>
          </div>

          {/* 7. Declared Area */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldArea")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white font-mono text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <Square className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 8. Buyer NID Field */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t("validateDeed.fieldBuyer")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={buyerInfo}
                onChange={(e) => setBuyerInfo(e.target.value)}
                className="w-full h-10 px-3.5 pr-10 rounded-xl bg-slate-950/60 border border-white/15 text-white text-xs sm:text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
              />
              <UserCheck className="w-4 h-4 absolute right-3 top-3 text-emerald-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Cadastral Inscription Timestamp */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{t("validateDeed.epoch")}</span>
          </div>
          <div className="font-mono text-slate-300 text-[11px]">
            {t("validateDeed.epochVal")}
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isChecking}
            className="w-full h-12 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(56,189,248,0.55)] hover:shadow-[0_0_32px_rgba(56,189,248,0.75)] active:scale-[0.99] transition-all cursor-pointer"
          >
            {isChecking ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>{t("validateDeed.checking")}</span>
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 text-slate-950" />
                <span>{t("validateDeed.btnCrossCheck")}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  );
};
