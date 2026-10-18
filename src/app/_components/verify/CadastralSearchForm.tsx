"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  ChevronDown,
  Building2,
  Hash,
  Zap,
  CheckCircle2,
  ArrowLeftRight,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export const CadastralSearchForm = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const [district, setDistrict] = useState("Dhaka");
  const [upazila, setUpazila] = useState("Savar");
  const [mouza, setMouza] = useState("SYN-Savar");
  const [daag, setDaag] = useState("452/1");
  const [surveyType, setSurveyType] = useState<"BS" | "RS" | "CS">("BS");
  const [isSearching, setIsSearching] = useState(false);

  const handleQuickFill = () => {
    setDistrict("Dhaka");
    setUpazila("Savar");
    setMouza("SYN-Savar");
    setDaag("452/1");
    setSurveyType("BS");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      // Format plot query slug e.g. "452-1"
      const cleanDaag = daag.replace(/\//g, "-").trim() || "452-1";
      router.push(`/verify/plot/${cleanDaag}`);
    }, 600);
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-6 sm:p-7 flex flex-col justify-between space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header and Ledger Node Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/25 flex items-center justify-center shrink-0">
              <Search className="h-5 w-5 text-sky-400" />
            </span>
            <div className="space-y-0.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                {t("verify.searchTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                {t("verify.searchSubtitle")}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t("verify.nodeOnline")}
          </span>
        </div>

        {/* Cadastral Survey Pill Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
            {t("verify.surveyLabel")}
          </label>
          <div className="inline-flex p-1 rounded-xl bg-slate-950/70 border border-white/10 gap-1.5 items-center">
            {(["BS", "RS", "CS"] as const).map((type) => {
              const labelKey =
                type === "BS"
                  ? "verify.surveyBs"
                  : type === "RS"
                  ? "verify.surveyRs"
                  : "verify.surveyCs";
              const isActive = surveyType === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSurveyType(type)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.45)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Structured Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* District Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              {t("verify.districtLabel")}
            </label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full rounded-xl bg-slate-950/70 border border-white/15 px-3.5 pr-10 py-2.5 text-white text-sm font-medium focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="Dhaka">{t("verify.districtDhaka")}</option>
                <option value="Chittagong">{t("verify.districtChittagong")}</option>
                <option value="Sylhet">{t("verify.districtSylhet")}</option>
                <option value="Rajshahi">{t("verify.districtRajshahi")}</option>
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Upazila Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              {t("verify.upazilaLabel")}
            </label>
            <div className="relative">
              <select
                value={upazila}
                onChange={(e) => setUpazila(e.target.value)}
                className="w-full rounded-xl bg-slate-950/70 border border-white/15 px-3.5 pr-10 py-2.5 text-white text-sm font-medium focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="Savar">{t("verify.upazilaSavar")}</option>
                <option value="Dhamrai">{t("verify.upazilaDhamrai")}</option>
                <option value="Keraniganj">{t("verify.upazilaKeraniganj")}</option>
                <option value="Mirpur">{t("verify.upazilaMirpur")}</option>
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Mouza Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              {t("verify.mouzaLabel")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={mouza}
                onChange={(e) => setMouza(e.target.value)}
                placeholder={t("verify.mouzaPlaceholder")}
                className="w-full rounded-xl bg-slate-950/70 border border-white/15 px-3.5 pr-10 py-2.5 text-white text-sm font-medium focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all placeholder:text-slate-600"
              />
              <Building2 className="h-4 w-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Daag (Plot) Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              {t("verify.daagLabel")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={daag}
                onChange={(e) => setDaag(e.target.value)}
                placeholder={t("verify.daagPlaceholder")}
                className="w-full rounded-xl bg-slate-950/70 border border-white/15 px-3.5 pr-10 py-2.5 text-white text-sm font-semibold focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all placeholder:text-slate-600 font-mono"
              />
              <Hash className="h-4 w-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Quick Fill Sample Pill */}
        <button
          type="button"
          onClick={handleQuickFill}
          className="w-full text-left flex items-center gap-2 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 text-xs text-slate-300 transition-colors group cursor-pointer"
        >
          <Zap className="h-4 w-4 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-slate-400">{t("verify.samplePrefix")}</span>
          <code className="text-sky-300 font-mono bg-sky-500/10 px-2 py-0.5 rounded border border-sky-400/20 font-semibold">
            {t("verify.sampleDeed")}
          </code>
          <span className="hidden sm:inline text-slate-400">{t("verify.sampleKhatian")}</span>
          <span className="hidden md:inline text-slate-400">{t("verify.sampleSeller")}</span>
        </button>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{t("verify.instantSha")}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ArrowLeftRight className="h-4 w-4 text-sky-400 shrink-0" />
              <span>{t("verify.escrowCheck")}</span>
            </span>
          </div>

          <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-7 py-3 rounded-xl text-sm shadow-[0_0_24px_rgba(56,189,248,0.45)] hover:shadow-[0_0_32px_rgba(56,189,248,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
          >
            {isSearching ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-slate-950 shrink-0" />
                <span className="text-slate-950 font-bold">{t("verify.searching")}</span>
              </>
            ) : (
              <>
                <ShieldCheck className="h-4 w-4 text-slate-950 shrink-0 stroke-[2.5]" />
                <span className="text-slate-950 font-bold tracking-wide">{t("verify.searchBtn")}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
