"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Plus,
  CheckCircle2,
  Calculator,
  ArrowLeftRight,
  Lock,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const InitiateDeedHeroCard = () => {
  const { t, language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setModalOpen(false);
      }, 1600);
    }, 1000);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-6 sm:p-7 relative overflow-hidden bg-white/[0.05] backdrop-blur-2xl border border-sky-400/30 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_24px_rgba(56,189,248,0.12)]"
      >
        {/* Ambient Corner Luminescence */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Text & Badges */}
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded-md bg-sky-400/15 border border-sky-400/30 text-sky-400">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold text-sky-300 uppercase tracking-widest">
                {t("subRegistrar.heroBadge")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {t("subRegistrar.heroTitle")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              {t("subRegistrar.heroDesc")}
            </p>

            {/* Micro Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mt-4">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-xs font-medium text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t("subRegistrar.heroTagMouza")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-xs font-medium text-slate-200">
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t("subRegistrar.heroTagShare")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-xs font-medium text-slate-200">
                <ArrowLeftRight className="w-3.5 h-3.5 text-sky-400" />
                <span>{t("subRegistrar.heroTagRelay")}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/verify"
              className="px-4 py-2.5 rounded-xl bg-slate-950/70 hover:bg-white/10 border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>{t("subRegistrar.heroValidateBtn")}</span>
            </Link>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_24px_rgba(56,189,248,0.5)] hover:shadow-[0_0_32px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-slate-950 stroke-[3]" />
              <span>{t("subRegistrar.heroRegisterBtn")}</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Interactive Official Deed Registration Execution Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg rounded-2xl bg-slate-900/95 border border-sky-400/30 p-6 shadow-2xl backdrop-blur-2xl z-10 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t("subRegistrar.heroTitle")}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Station #04 • Savar Sub-Registry Notary Gate
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">
                    {language === "bn"
                      ? "দলিল সফলভাবে নিবন্ধিত ও এসক্রো লক জারি করা হয়েছে"
                      : "Deed Biometrically Notarized & Escrow Lock Committed"}
                  </p>
                  <p className="text-xs text-slate-300 font-mono">
                    Deed SYN-D-0006 • Block #884,913 • Relayed to Savar AC Land
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === "bn" ? "মৌজা ও দাগ নম্বর" : "Mouza & Cadastral Plot No."}
                    </label>
                    <input
                      type="text"
                      defaultValue="Mouza: SYN-Savar • Daag: 452/1 • Khatian: 1187 (BS)"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "বিক্রেতার এনআইডি" : "Seller NID"}
                      </label>
                      <input
                        type="text"
                        defaultValue="SYN-NID-A10021"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "ক্রেতার এনআইডি" : "Buyer NID"}
                      </label>
                      <input
                        type="text"
                        defaultValue="SYN-NID-B20045"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "হস্তান্তরিত হিস্যা" : "Transacted Share"}
                      </label>
                      <input
                        type="text"
                        defaultValue="0.2500"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "দলিলের শ্রেণি" : "Deed Class"}
                      </label>
                      <select className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400">
                        <option>Kabala (বিক্রয় কবলা)</option>
                        <option>Heba (হেবা / দান)</option>
                        <option>Exchange (বিনিময়)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-400/25 flex items-center gap-2 text-xs text-sky-300">
                    <Lock className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>
                      {language === "bn"
                        ? "স্বয়ংক্রিয় হিস্যা যাচাই সম্পন্ন: বিক্রেতার অবশিষ্ট হিস্যা ০.২৫০০ মুক্ত থাকবে।"
                        : "Share math auto-verified: Residual seller balance 0.2500 will remain free title."}
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-all"
                    >
                      {t("citizenDeeds.cancel")}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all flex items-center gap-1.5 disabled:opacity-75"
                    >
                      <span>
                        {isSubmitting
                          ? language === "bn"
                            ? "নোটারাইজ হচ্ছে..."
                            : "Notarizing & Locking..."
                          : language === "bn"
                          ? "নিবন্ধন ও এসক্রো জারি করুন"
                          : "Execute Deed & Lock"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
