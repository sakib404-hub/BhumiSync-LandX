"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Building2,
  Lock,
  ShieldAlert,
  Boxes,
  ShieldCheck,
  Download,
  Loader2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

interface PlotDossierHeaderProps {
  plotId?: string;
}

export const PlotDossierHeader = ({ plotId = "452-1" }: PlotDossierHeaderProps) => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const formattedDaag = plotId.replace(/-/g, "/");

  const handleDownloadPdf = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 1200);
  };

  return (
    <div className="space-y-4">
      {/* Prominent Result Page Top Navigation Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/verify"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-sky-400/30 hover:border-sky-400/60 text-sky-300 hover:text-white text-xs sm:text-sm font-semibold transition-all group backdrop-blur-xl shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_22px_rgba(56,189,248,0.3)] active:scale-[0.98] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 text-sky-400 group-hover:-translate-x-1 transition-transform" />
          <span>{t("verify.backToSearch")}</span>
        </Link>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 border border-white/10 text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYN-LEDGER // DAAG-{formattedDaag}</span>
        </div>
      </div>

      {/* Main Plot Dossier Card */}
      <motion.section
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-6 sm:p-7 relative overflow-hidden"
      >
        {/* Ambient atmospheric inner glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Left Info Column */}
          <div className="space-y-3 max-w-3xl">
            {/* Breadcrumb Metadata Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/15 text-xs text-slate-300 font-medium">
              <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span className="text-slate-400">{t("plot.breadcrumbDistrict")}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">{t("plot.breadcrumbUpazila")}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">{t("plot.breadcrumbMouza")}</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-300 font-semibold">{t("plot.breadcrumbDaag")} ({formattedDaag})</span>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-300 font-mono">{t("plot.breadcrumbKhatian")}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t("plot.title")}
            </h1>

            {/* Subtitle / Jurisdictional Authority */}
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 flex-wrap">
              <Building2 className="h-4 w-4 text-sky-400 shrink-0" />
              <span>{t("plot.subtitle")}</span>
            </p>

            {/* Status Indicators Cluster */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* Locked Pending Mutation Badge */}
              <div className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 flex items-center gap-2 text-xs font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                </span>
                <Lock className="h-3.5 w-3.5" />
                <span>{t("plot.statusLocked")}</span>
              </div>

              {/* Risk Badge: Medium */}
              <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5 text-xs font-semibold">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>{t("plot.statusRisk")}</span>
              </div>

              {/* Ledger Block Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 text-slate-400 text-xs font-mono">
                <Boxes className="h-3.5 w-3.5 text-emerald-400" />
                <span>{t("plot.statusBlock")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex flex-row lg:flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link href="/verify/qr" className="flex-1 sm:flex-initial">
              <button
                type="button"
                className="w-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_28px_rgba(56,189,248,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
                <span>{t("plot.verifyDeedBtn")}</span>
              </button>
            </Link>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex-1 sm:flex-initial bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 backdrop-blur-md transition-all active:scale-[0.98] cursor-pointer"
            >
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
                  <span>{t("plot.pdfDownloading")}</span>
                </>
              ) : downloadComplete ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{t("plot.pdfDownloaded")}</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 text-sky-400" />
                  <span>{t("plot.downloadPdfBtn")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
