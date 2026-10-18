"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Compass, History, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CheckAnotherPlotCard = () => {
  const { t, language } = useLanguage();
  const router = useRouter();

  const [district, setDistrict] = useState("Dhaka");
  const [upazila, setUpazila] = useState("Savar");
  const [mouza, setMouza] = useState("SYN-Savar");
  const [daag, setDaag] = useState("452/1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify/plot/452-1");
  };

  const handleChipClick = (sampleDaag: string, sampleMouza = "SYN-Savar") => {
    setDaag(sampleDaag);
    setMouza(sampleMouza);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden"
    >
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {t("citizenLand.checkPlotTitle")}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {t("citizenLand.checkPlotDesc")}
          </p>
        </div>

        {/* 5-Column Search Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {/* District */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">
              {t("citizenLand.district")}
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-slate-950/70 border border-white/15 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all"
            >
              <option value="Dhaka">{language === "bn" ? "ঢাকা" : "Dhaka"}</option>
              <option value="Gazipur">{language === "bn" ? "গাজীপুর" : "Gazipur"}</option>
              <option value="Narayanganj">{language === "bn" ? "নারায়ণগঞ্জ" : "Narayanganj"}</option>
            </select>
          </div>

          {/* Upazila */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">
              {t("citizenLand.upazila")}
            </label>
            <select
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
              className="w-full bg-slate-950/70 border border-white/15 rounded-xl px-3 py-2 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all"
            >
              <option value="Savar">{language === "bn" ? "সাভার" : "Savar"}</option>
              <option value="Dhamrai">{language === "bn" ? "ধামরাই" : "Dhamrai"}</option>
              <option value="Keraniganj">{language === "bn" ? "কেরানীগঞ্জ" : "Keraniganj"}</option>
            </select>
          </div>

          {/* Mouza */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">
              {t("citizenLand.mouza")}
            </label>
            <input
              type="text"
              value={mouza}
              onChange={(e) => setMouza(e.target.value)}
              placeholder="e.g. SYN-Savar"
              className="w-full bg-slate-950/70 border border-white/15 rounded-xl px-3 py-2 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Daag Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300">
              {t("citizenLand.daagNo")}
            </label>
            <input
              type="text"
              value={daag}
              onChange={(e) => setDaag(e.target.value)}
              placeholder="e.g. 452/1"
              className="w-full bg-slate-950/70 border border-white/15 rounded-xl px-3 py-2 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Submit CTA Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>{t("citizenLand.verifyPlotBtn")}</span>
            </button>
          </div>
        </form>

        {/* Quick Query Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">{t("citizenLand.quickQuery")}</span>

          <button
            type="button"
            onClick={() => handleChipClick("452/1")}
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sky-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer text-xs"
          >
            <History className="w-3 h-3 text-sky-400" />
            <span>{t("citizenLand.chipRecentlyVerified")}</span>
          </button>

          <button
            type="button"
            onClick={() => handleChipClick("480/2")}
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer text-xs"
          >
            <Sparkles className="w-3 h-3 text-sky-400/70" />
            <span>{t("citizenLand.chipSample1")}</span>
          </button>

          <button
            type="button"
            onClick={() => handleChipClick("119/A")}
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer text-xs"
          >
            <Sparkles className="w-3 h-3 text-sky-400/70" />
            <span>{t("citizenLand.chipSample2")}</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};
