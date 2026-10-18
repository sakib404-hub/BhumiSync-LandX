"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Handshake,
  Printer,
  Download,
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Building2,
  FileCheck2,
  Lock,
  QrCode,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const ActiveDeedDossierCard = () => {
  const { t, language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1200);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-5 sm:p-7 bg-white/[0.05] backdrop-blur-2xl border border-sky-400/25 shadow-[0_12px_40px_0_rgba(0,0,0,0.45),0_0_16px_rgba(56,189,248,0.15)] space-y-7"
    >
      {/* 1. Dossier Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {t("citizenDeeds.dossierTitle")}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300 flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5" />
              <span>{t("citizenDeeds.deedTypeBadge")}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("citizenDeeds.escrowBadge")}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300">
            <span className="text-slate-400">{t("citizenDeeds.parties")}</span>
            <span className="text-sky-300 font-semibold">{t("citizenDeeds.seller")}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-300 font-semibold">{t("citizenDeeds.buyer")}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4 text-slate-300" />
            <span>{t("citizenDeeds.printExtract")}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_26px_rgba(56,189,248,0.7)] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
          >
            <Download className={`w-4 h-4 ${isDownloading ? "animate-bounce" : ""}`} />
            <span>
              {isDownloading
                ? t("citizenDeeds.pdfDownloading")
                : downloadSuccess
                ? t("citizenDeeds.pdfDownloaded")
                : t("citizenDeeds.downloadPdf")}
            </span>
          </button>
        </div>
      </div>

      {/* 2. Horizontal 4-Stage Mutation Tracker */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            {t("citizenDeeds.pipelineTitle")}
          </h3>
          <span className="text-xs font-mono font-semibold text-sky-300 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20">
            {t("citizenDeeds.pipelineCase")}
          </span>
        </div>

        {/* Visual Progress Track (Desktop) */}
        <div className="hidden md:block space-y-1.5 pt-1 pb-1">
          <div className="flex items-center justify-between text-[11px] font-semibold px-2">
            <span className="text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>{t("citizenDeeds.step1")}</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>{t("citizenDeeds.step2")}</span>
            </span>
            <span className="text-sky-300 flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>{t("citizenDeeds.step3")}</span>
            </span>
            <span className="text-slate-500">
              {t("citizenDeeds.step4")}
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-950/70 rounded-full border border-white/10 overflow-hidden relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
              style={{ width: "68%" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Step 1: Registered */}
          <div className="rounded-2xl p-3.5 sm:p-4 bg-slate-950/50 backdrop-blur-xl border border-emerald-500/40 flex md:flex-col items-center md:text-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(52,211,153,0.35)]">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left md:text-center">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                {t("citizenDeeds.step1")}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                {t("citizenDeeds.step1Office")}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5">
                {t("citizenDeeds.step1Date")}
              </p>
            </div>
          </div>

          {/* Step 2: Case Created */}
          <div className="rounded-2xl p-3.5 sm:p-4 bg-slate-950/50 backdrop-blur-xl border border-emerald-500/40 flex md:flex-col items-center md:text-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(52,211,153,0.35)]">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left md:text-center">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                {t("citizenDeeds.step2")}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                {t("citizenDeeds.step2Case")}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5">
                {t("citizenDeeds.step2Date")}
              </p>
            </div>
          </div>

          {/* Step 3: Hearing & Survey (ACTIVE) */}
          <div className="rounded-2xl p-3.5 sm:p-4 bg-sky-500/10 backdrop-blur-xl border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)] flex md:flex-col items-center md:text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-400/25 border-2 border-sky-400 text-sky-300 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(56,189,248,0.6)] animate-pulse">
              <Clock className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left md:text-center">
              <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                {t("citizenDeeds.step3")}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                {t("citizenDeeds.step3Office")}
              </p>
              <p className="text-[10px] sm:text-[11px] text-sky-300 font-mono font-medium mt-0.5">
                {t("citizenDeeds.step3Status")}
              </p>
            </div>
          </div>

          {/* Step 4: Namzari Approval (Pending) */}
          <div className="rounded-2xl p-3.5 sm:p-4 bg-slate-950/40 backdrop-blur-xl border border-white/10 opacity-70 flex md:flex-col items-center md:text-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-white/20 text-slate-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="text-left md:text-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                {t("citizenDeeds.step4")}
              </span>
              <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                {t("citizenDeeds.step4Office")}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5">
                {t("citizenDeeds.step4Status")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Side-by-side Technical Specs (8 cols) & Cryptographic QR Card (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
        {/* Left 8-col: Cadastral Plot Breakdown */}
        <div className="lg:col-span-8 rounded-2xl p-4 sm:p-5 bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/10 gap-2">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-sky-400" />
              <span>{t("citizenDeeds.plotBreakdown")}</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">
              {t("citizenDeeds.genesisSeal")}
            </span>
          </div>

          {/* 4 Cadastral Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <p className="text-[11px] font-medium text-slate-400">{t("citizenDeeds.mouzaDivision")}</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">
                {t("citizenDeeds.mouzaDivisionVal")}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <p className="text-[11px] font-medium text-slate-400">{t("citizenDeeds.daagNo")}</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">
                {t("citizenDeeds.daagNoVal")}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <p className="text-[11px] font-medium text-slate-400">{t("citizenDeeds.khatian")}</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">
                {t("citizenDeeds.khatianVal")}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <p className="text-[11px] font-medium text-slate-400">{t("citizenDeeds.transactedShare")}</p>
              <p className="text-xs sm:text-sm font-bold text-sky-300 mt-1">
                {t("citizenDeeds.transactedShareVal")}
              </p>
            </div>
          </div>

          {/* 2 Institutional Authority Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-950/50 border border-white/10">
              <p className="text-[11px] font-medium text-slate-400 mb-1">
                {t("citizenDeeds.regAuthority")}
              </p>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-400/20">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {t("citizenDeeds.regAuthorityVal")}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    {t("citizenDeeds.regAuthoritySub")}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-white/10">
              <p className="text-[11px] font-medium text-slate-400 mb-1">
                {t("citizenDeeds.revAdmin")}
              </p>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-400/20">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {t("citizenDeeds.revAdminVal")}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    {t("citizenDeeds.revAdminSub")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Escrow Lock Banner */}
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-sky-400 shrink-0" />
              <div className="text-xs text-slate-200">
                <span className="font-bold text-white">
                  {t("citizenDeeds.escrowTitleLock")}
                </span>
                <span className="text-slate-300 ml-1.5">
                  {t("citizenDeeds.escrowLockDesc")}
                </span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold text-sky-300 bg-sky-400/15 border border-sky-400/30 shrink-0">
              {t("citizenDeeds.blockNo")}
            </span>
          </div>
        </div>

        {/* Right 4-col: Cryptographic QR Sealed Badge Card */}
        <div className="lg:col-span-4 rounded-2xl p-4 sm:p-5 bg-white/[0.04] backdrop-blur-xl border border-sky-400/30 flex flex-col items-center justify-between text-center relative group">
          <div className="w-full flex items-center justify-between pb-2.5 border-b border-white/10">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
              <QrCode className="w-3.5 h-3.5 text-sky-400" />
              <span>{t("citizenDeeds.qrSeal")}</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {t("citizenDeeds.sha256")}
            </span>
          </div>

          {/* Stylized Cadastral QR Code */}
          <Link
            href="/verify/plot/452-1"
            className="my-4 p-3 bg-slate-950/90 rounded-2xl border border-sky-400/40 shadow-inner relative group-hover:border-sky-300 group-hover:scale-105 transition-all cursor-pointer block"
            title={t("citizenDeeds.scanQrBtn")}
          >
            <div className="w-36 h-36 sm:w-40 sm:h-40 bg-[#081324] p-2.5 rounded-xl border border-sky-400/25 flex flex-col items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full text-sky-400" fill="currentColor" viewBox="0 0 100 100">
                {/* Standard Positioning Blocks */}
                <rect fill="none" height="26" rx="4" stroke="currentColor" stroke-width="4" width="26" x="5" y="5"></rect>
                <rect fill="currentColor" height="14" rx="2" width="14" x="11" y="11"></rect>
                <rect fill="none" height="26" rx="4" stroke="currentColor" stroke-width="4" width="26" x="69" y="5"></rect>
                <rect fill="currentColor" height="14" rx="2" width="14" x="75" y="11"></rect>
                <rect fill="none" height="26" rx="4" stroke="currentColor" stroke-width="4" width="26" x="5" y="69"></rect>
                <rect fill="currentColor" height="14" rx="2" width="14" x="11" y="75"></rect>
                {/* Cadastral Pattern Bits */}
                <rect height="8" rx="1" width="8" x="38" y="8"></rect>
                <rect height="8" rx="1" width="8" x="52" y="8"></rect>
                <rect height="8" rx="1" width="8" x="38" y="22"></rect>
                <rect height="8" rx="1" width="8" x="52" y="22"></rect>
                <rect height="8" rx="1" width="8" x="8" y="38"></rect>
                <rect height="8" rx="1" width="8" x="22" y="38"></rect>
                <rect fill="#38bdf8" height="24" opacity="0.3" rx="3" width="24" x="38" y="38"></rect>
                <circle cx="50" cy="50" fill="#38bdf8" r="6"></circle>
                <rect height="8" rx="1" width="8" x="68" y="38"></rect>
                <rect height="8" rx="1" width="8" x="82" y="38"></rect>
                <rect height="8" rx="1" width="8" x="8" y="52"></rect>
                <rect height="8" rx="1" width="8" x="22" y="52"></rect>
                <rect height="8" rx="1" width="8" x="68" y="52"></rect>
                <rect height="8" rx="1" width="8" x="82" y="52"></rect>
                <rect height="8" rx="1" width="8" x="38" y="68"></rect>
                <rect height="8" rx="1" width="8" x="52" y="68"></rect>
                <rect height="8" rx="1" width="8" x="68" y="68"></rect>
                <rect height="8" rx="1" width="8" x="82" y="68"></rect>
                <rect height="8" rx="1" width="8" x="38" y="82"></rect>
                <rect height="8" rx="1" width="8" x="52" y="82"></rect>
                <rect height="8" rx="1" width="8" x="68" y="82"></rect>
                <rect height="8" rx="1" width="8" x="82" y="82"></rect>
              </svg>
              <div className="absolute inset-0 bg-sky-400/5 pointer-events-none" />
            </div>
            <p className="text-[10px] font-mono text-sky-300 mt-2">
              BHUMISYNC::DEED::SYN-D-0001
            </p>
          </Link>

          <div className="w-full space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("citizenDeeds.scanQrBtn")}</span>
            </span>
            <p className="text-[11px] text-slate-400 leading-tight">
              {t("citizenDeeds.scanQrDesc")}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
