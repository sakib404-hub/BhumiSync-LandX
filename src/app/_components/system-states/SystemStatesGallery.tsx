"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Lock,
  Gavel,
  ShieldAlert,
  Copy,
  Check,
  RotateCw,
  Eye,
  FileCheck2,
  KeyRound,
  ShieldCheck,
  ChevronRight,
  Network,
  Clock,
  AlertTriangle,
  X,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const SystemStatesGallery = () => {
  const { t } = useLanguage();

  // State for interactive actions
  const [copiedHash, setCopiedHash] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [selectedDeedModal, setSelectedDeedModal] = useState(false);
  const [selectedInjunctionModal, setSelectedInjunctionModal] = useState(false);
  const [elevationRequested, setElevationRequested] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText("0x9d7248ba7216cbe18a0029f438a20392");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleSearchRetry = () => {
    setIsSearching(true);
    setSearchSuccess(false);
    setTimeout(() => {
      setIsSearching(false);
      setSearchSuccess(true);
      setTimeout(() => setSearchSuccess(false), 3000);
    }, 1000);
  };

  const handleRequestElevation = () => {
    setElevationRequested(true);
    setTimeout(() => setElevationRequested(false), 3500);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[12%] w-[680px] h-[680px] rounded-full opacity-30 blur-[130px] bg-sky-600/30" />
        <div className="absolute top-[40%] right-[10%] w-[580px] h-[580px] rounded-full opacity-25 blur-[140px] bg-sky-400/20" />
        <div className="absolute -bottom-[15%] left-[30%] w-[620px] h-[620px] rounded-full opacity-20 blur-[150px] bg-teal-500/20" />
      </div>

      <div className="relative z-10 space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>BhumiSync Platform</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-sky-400 font-semibold">
                {t("states.breadcrumb")}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {t("states.title")}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl">
              {t("states.subtitle")}
            </p>
          </div>

          {/* Quick Telemetry Chips */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.16] shadow-sm">
              <Network className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs text-slate-200">
                {t("states.protocols")}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.16] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-xs text-slate-200">
                {t("states.consensus")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2x2 Grid of Glass Exception Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* CARD 1: Plot Not Found */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.37)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

            <div>
              {/* Header: Icon & Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.25)]">
                  <Search className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-400/30 text-sky-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {t("states.indexMiss")}
                </span>
              </div>

              {/* Title & Context Note */}
              <h2 className="text-xl font-bold text-white mb-1">
                {t("states.plotNotFound")}
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                {t("states.plotNotFoundDesc")}
              </p>

              {/* Short Meta Details Box */}
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm mb-6 flex items-center justify-between font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">{t("states.query")}:</span>
                  <span className="text-white font-semibold">Daag 999/X</span>
                </div>
                <div className="h-3 w-[1px] bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">
                    {t("states.ledgerIndex")}:
                  </span>
                  <span className="text-amber-400 font-semibold">
                    {t("states.unmapped")}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {t("states.cacheCheck")}
              </span>
              <button
                onClick={handleSearchRetry}
                disabled={isSearching}
                className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 text-xs font-semibold hover:bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RotateCw
                  className={`w-3.5 h-3.5 ${isSearching ? "animate-spin" : ""}`}
                />
                <span>
                  {searchSuccess
                    ? "Checked (0 Matches)"
                    : t("states.searchAgain")}
                </span>
              </button>
            </div>
          </motion.div>

          {/* CARD 2: Share is Locked by Pending Deed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.37)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div>
              {/* Header: Icon & Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/35 flex items-center justify-center text-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.25)]">
                  <Lock className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-400/35 text-amber-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  {t("states.lockedShare")}
                </span>
              </div>

              {/* Title & Context Note */}
              <h2 className="text-xl font-bold text-white mb-1">
                {t("states.lockedDeed")}
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                {t("states.lockedDeedDesc")}
              </p>

              {/* Short Meta Details Box */}
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm mb-6 flex flex-col gap-1.5 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.parcelCoords")}:
                  </span>
                  <span className="text-white font-semibold">
                    Mouza SYN-Savar, Daag 452/1
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.khatianSeller")}:
                  </span>
                  <span className="text-amber-300">
                    Khatian 1187 (BS) • SYN Rahim Uddin
                  </span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                MUT-2026-000001
              </span>
              <button
                onClick={() => setSelectedDeedModal(true)}
                className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold hover:bg-amber-500/30 shadow-[0_0_16px_rgba(245,158,11,0.25)] transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("states.viewPendingDeed")}</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 3: Plot is Frozen by Court Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.37)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

            <div>
              {/* Header: Icon & Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/15 border border-rose-400/35 flex items-center justify-center text-rose-400 shadow-[0_0_14px_rgba(244,63,94,0.25)]">
                  <Gavel className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-400/35 text-rose-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  {t("states.frozenInjunction")}
                </span>
              </div>

              {/* Title & Context Note */}
              <h2 className="text-xl font-bold text-white mb-1">
                {t("states.plotFrozen")}
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                {t("states.plotFrozenDesc")}
              </p>

              {/* Short Meta Details Box */}
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm mb-6 flex flex-col gap-1.5 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.encumberedParcel")}:
                  </span>
                  <span className="text-white font-semibold">
                    Daag 310/2, Khatian 610
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.injunctionRef")}:
                  </span>
                  <span className="text-rose-400 font-medium">
                    Case: CS-2024-00412 • Stay Enforced
                  </span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                {t("states.jurisdiction")}
              </span>
              <button
                onClick={() => setSelectedInjunctionModal(true)}
                className="px-4 py-2 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-semibold hover:bg-rose-500/30 shadow-[0_0_16px_rgba(244,63,94,0.25)] transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>{t("states.inspectInjunction")}</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 4: Access Denied for Your Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/[0.07] backdrop-blur-xl border border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.37)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div>
              {/* Header: Icon & Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-white/20 flex items-center justify-center text-cyan-400 shadow-[0_0_14px_rgba(147,204,255,0.2)]">
                  <KeyRound className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {t("states.restrictedAuthority")}
                </span>
              </div>

              {/* Title & Context Note */}
              <h2 className="text-xl font-bold text-white mb-1">
                {t("states.accessDenied")}
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                {t("states.accessDeniedDesc")}
              </p>

              {/* Short Meta Details Box */}
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm mb-6 flex flex-col gap-1.5 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.currentSession")}:
                  </span>
                  <span className="text-white font-medium">
                    Citizen / Observer (SYN-NID-B20045)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    {t("states.requiredClearance")}:
                  </span>
                  <span className="text-sky-300 font-semibold">
                    Savar AC Land Key Pair
                  </span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <KeyRound className="w-3.5 h-3.5 text-slate-500" />
                {t("states.publicKey")}
              </span>
              <button
                onClick={handleRequestElevation}
                className="px-4 py-2 rounded-xl bg-white/[0.12] border border-sky-400/50 text-white text-xs font-semibold hover:bg-white/[0.20] hover:border-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.25)] transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                {elevationRequested ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Request Sent</span>
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t("states.requestElevation")}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Administrative Protocol Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.14] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                {t("states.ledgerInvariants")}
              </h4>
              <p className="text-xs text-slate-400">
                {t("states.ledgerInvariantsDesc")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-slate-400">
              {t("states.ledgerHash")}:{" "}
              <code className="text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                0x9d72...e18a
              </code>
            </span>
            <button
              onClick={handleCopyHash}
              className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              {copiedHash ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 text-xs">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t("states.copy")}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL 1: Pending Deed Inspection */}
      <AnimatePresence>
        {selectedDeedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Pending Deed Collision Lock
                    </h3>
                    <p className="text-xs text-amber-400 font-mono">
                      MUT-2026-000001 • Deed SYN-D-0001
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDeedModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Mouza & Daag:</span>
                  <span className="text-white font-mono font-medium">
                    Mouza SYN-Savar, Daag 452/1
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Locked Share:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    0.2500 Decimal Portion
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Seller NID:</span>
                  <span className="text-white font-mono">19882690...8124</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Sub-Registry Office:</span>
                  <span className="text-white">Savar Sub-Registry, Dhaka</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  href="/sub-registrar/deed/SYN-D-0001"
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-semibold text-xs text-center hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  Open Deed Dossier
                </Link>
                <button
                  onClick={() => setSelectedDeedModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Judicial Injunction Inspection */}
      <AnimatePresence>
        {selectedInjunctionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-rose-500/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Gavel className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Civil Court Injunction Restraint
                    </h3>
                    <p className="text-xs text-rose-400 font-mono">
                      Title Suit No. 89/2024 • Dhaka District
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInjunctionModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Jurisdiction Court:</span>
                  <span className="text-white font-medium">
                    Court of Senior Assistant Judge, Dhaka
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Encumbered Plot:</span>
                  <span className="text-rose-300 font-mono font-bold">
                    Daag 310/2, Khatian 610
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Restraint Nature:</span>
                  <span className="text-white">
                    Temporary Injunction under CPC Order 39, Rule 1
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                  <span className="text-slate-400">Cadastral Lock:</span>
                  <span className="text-rose-400 font-bold">
                    Transfer & Mutation Pipelines Frozen
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  href="/institutional/injunctions"
                  className="flex-1 py-2.5 rounded-xl bg-rose-500 text-white font-semibold text-xs text-center hover:bg-rose-400 transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                >
                  Open Injunction Registry
                </Link>
                <button
                  onClick={() => setSelectedInjunctionModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
