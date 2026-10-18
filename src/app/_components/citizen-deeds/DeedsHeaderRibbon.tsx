"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  UserCheck,
  LogOut,
  History,
  Plus,
  Layers,
  FileText,
  X,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const DeedsHeaderRibbon = () => {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bhumisync_auth_user");
      const logoutAlert = {
        type: "logout" as const,
      };
      sessionStorage.setItem("bhumisync_alert", JSON.stringify(logoutAlert));
      window.dispatchEvent(new Event("bhumisync_auth_change"));
      window.dispatchEvent(
        new CustomEvent("bhumisync_alert", {
          detail: logoutAlert,
        })
      );
    }
    router.push("/login");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setRegisterModalOpen(false);
    }, 1800);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        {/* Top Identity & Portal Tabs Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {/* User Capsule */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)] bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-sky-300 font-mono">RU</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <ShieldCheck className="w-2.5 h-2.5 text-slate-950" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white tracking-tight">
                  {language === "bn" ? "রহিম উদ্দিন" : "SYN Rahim Uddin"}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                  <UserCheck className="w-3 h-3" />
                  {language === "bn" ? "যাচাইকৃত নাগরিক" : "Sovereign Citizen"}
                </span>
              </div>
              <span className="text-xs font-mono text-sky-300/80 tracking-wider">
                SYN-NID-A10021
              </span>
            </div>
          </div>

          {/* Portal Switching Tabs & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-xl bg-slate-950/60 p-1 border border-white/10">
              <Link
                href="/citizen/land"
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {t("citizenLand.title")}
              </Link>
              <Link
                href="/citizen/deeds"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all"
              >
                {t("citizenDeeds.title")}
              </Link>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-400/30 text-slate-300 hover:text-red-300 text-xs font-medium transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("citizenLand.logout")}</span>
            </button>
          </div>
        </div>

        {/* Main Title & Action Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-1">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[11px] font-semibold tracking-wider text-sky-400 uppercase">
                <FileText className="w-3 h-3 text-sky-400" />
                {t("citizenDeeds.tag")}
              </span>
              <span className="text-xs text-slate-400 font-mono">SYN-LEDGER // DEED-VAULT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t("citizenDeeds.title")}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
              {t("citizenDeeds.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setHistoryModalOpen(true)}
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <History className="w-4 h-4 text-sky-300" />
              <span>{t("citizenDeeds.historyBtn")}</span>
            </button>

            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_26px_rgba(56,189,248,0.7)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span>{t("citizenDeeds.registerTransferBtn")}</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Interactive Ledger History Modal */}
      <AnimatePresence>
        {historyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setHistoryModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-2xl rounded-2xl bg-slate-900/90 border border-sky-400/30 p-6 shadow-2xl backdrop-blur-2xl z-10 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t("citizenDeeds.historyModalTitle")}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t("citizenDeeds.historyModalDesc")}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setHistoryModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* History Timeline Entries */}
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-sky-400/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-sky-300 text-sm">SYN-D-0001 (Conveyance)</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                      Active Escrow Lock
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {language === "bn"
                      ? "সাভার সাব-রেজিস্ট্রিতে ০.২৫০০ হিস্যা করিম হোসেনের অনুকূলে সম্পাদিত। এসি ল্যান্ড অফিসে নামজারি কেস MUT-2026-000001 পর্যালোচনাধীন।"
                      : "Executed 0.2500 share transfer to Karim Hossain at Savar Sub-Registry. AC Land mutation MUT-2026-000001 in review."}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span>Block #149022 • Hash: 0x8f3b...e4a1</span>
                    <span>14 Oct 2024 • 11:42 AM</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-slate-200 text-sm">SYN-D-0000-ORIG (Inheritance)</span>
                    <span className="text-[11px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                      Immutable Settled
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {language === "bn"
                      ? "পৈতৃক ওয়ারিশ হিসেবে দাগ ৪৫২/১-এ ০.৫০০০ হিস্যার প্রাথমিক নামজারি ও খতিয়ান ১১৮৭ সৃজিত।"
                      : "Original inheritance recording 0.5000 share on Daag 452/1. Khatian 1187 created under MUT-2018-091442."}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span>Genesis Block #001290 • Savar AC Land</span>
                    <span>28 Jan 2018</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setHistoryModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
                >
                  {t("citizenDeeds.closeModal")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Register New Transfer Modal */}
      <AnimatePresence>
        {registerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setRegisterModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg rounded-2xl bg-slate-900/90 border border-sky-400/30 p-6 shadow-2xl backdrop-blur-2xl z-10 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-400/20">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t("citizenDeeds.registerModalTitle")}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t("citizenDeeds.registerModalDesc")}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setRegisterModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {transferSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">
                    {language === "bn" ? "হস্তান্তর আবেদন সফলভাবে সংরক্ষিত হয়েছে" : "Transfer Request Biometrically Queued"}
                  </p>
                  <p className="text-xs text-slate-300">
                    {language === "bn"
                      ? "সাভার সাব-রেজিস্ট্রি ডেটাগেটে আবেদন পাঠানো হয়েছে।"
                      : "Dispatched to Savar Sub-Registry cryptographic queue."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === "bn" ? "দাগ ও খতিয়ান নির্বাচন করুন" : "Select Holding Plot"}
                    </label>
                    <select className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400">
                      <option>Daag 452/1 • Khatian 1187 (BS) • Savar (0.2500 Residual Free)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {language === "bn" ? "ক্রেতার এনআইডি নম্বর" : "Buyer's Sovereign NID"}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SYN-NID-B20045"
                      defaultValue="SYN-NID-B20045"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "হস্তান্তরিত হিস্যা" : "Transfer Share"}
                      </label>
                      <input
                        type="text"
                        defaultValue="0.2500"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {language === "bn" ? "দলিলের প্রকার" : "Deed Type"}
                      </label>
                      <select className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400">
                        <option>Kabala (বিক্রয় দলিল)</option>
                        <option>Heba (হেবা / দানপত্র)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center gap-2 text-[11px] text-sky-300">
                    <Lock className="w-4 h-4 shrink-0 text-sky-400" />
                    <span>
                      {language === "bn"
                        ? "স্বত্ব সংঘর্ষ প্রতিরোধে সাব-রেজিস্ট্রারে ডিজিটাল এসক্রো সক্রিয় হবে।"
                        : "Digital escrow lock will lock against double-selling instantly."}
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setRegisterModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-all"
                    >
                      {t("citizenDeeds.cancel")}
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all flex items-center gap-1.5"
                    >
                      <span>{t("citizenDeeds.submitTransfer")}</span>
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
