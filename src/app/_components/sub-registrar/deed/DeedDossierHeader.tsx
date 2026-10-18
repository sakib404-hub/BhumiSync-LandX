"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Lock,
  CheckCircle2,
  QrCode,
  Check,
  Copy,
  Download,
  Printer,
  Loader2,
  X,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DeedHeaderProps {
  deedId?: string;
}

export const DeedDossierHeader = ({ deedId = "SYN-D-0001" }: DeedHeaderProps) => {
  const { t } = useLanguage();

  const [copiedHash, setCopiedHash] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printNotice, setPrintNotice] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const fullHash = "0x8f3b9ce4a1610dc89270bb34e912ca872e4a1d892";
  const displayHash = "0x8f3b9c...e4a1";

  const handleCopyHash = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(fullHash);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2500);
    }
  };

  const handleDownloadPdf = () => {
    setIsDownloadingPdf(true);
    setTimeout(() => {
      setIsDownloadingPdf(false);
      setDownloadNotice(true);
      setTimeout(() => setDownloadNotice(false), 3000);
    }, 1200);
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
      setPrintNotice(true);
      setTimeout(() => setPrintNotice(false), 3000);
    }, 1000);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[20px] bg-white/[0.08] backdrop-blur-[24px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 sm:p-6 transition-all relative overflow-hidden"
      >
        {/* Subtle top inner sheen highlight */}
        <div className="absolute -top-12 left-1/4 w-96 h-24 bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Left: Dossier Title & Metadata */}
          <div className="flex flex-col gap-3">
            {/* Back Link */}
            <Link
              href="/citizen/deeds"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors w-fit group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{t("deedDossier.backArchive")}</span>
            </Link>

            {/* Title & Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t("deedDossier.title") ? t("deedDossier.title").replace("Deed Dossier: ", "") : `Deed ${deedId}`}
              </h1>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-sky-200 border border-white/15">
                {t("deedDossier.deedType")}
              </span>

              {/* Status Pill: Green Verified */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("deedDossier.statusRegistered")}
              </span>

              {/* Status Pill: Blue Escrow Bound */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                <Lock className="w-3.5 h-3.5" />
                {t("deedDossier.statusEscrow")}
              </span>
            </div>

            {/* Subtext summary */}
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t("deedDossier.notaryMeta")}</span>
            </p>
          </div>

          {/* Right: Cryptographic QR & Download Actions */}
          <div className="flex flex-wrap items-center gap-3.5 bg-slate-950/60 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {/* QR Code Preview Block */}
            <button
              type="button"
              onClick={() => setShowQrModal(true)}
              className="w-14 h-14 rounded-xl bg-slate-900 border border-white/20 p-1 flex items-center justify-center shrink-0 relative group cursor-pointer shadow-inner hover:scale-105 transition-all"
              title="Click to view full cryptographic QR voucher"
            >
              <div className="w-full h-full bg-sky-500/10 rounded-lg flex flex-col items-center justify-center text-sky-400 group-hover:text-sky-300">
                <QrCode className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-slate-950 stroke-[3]" />
              </div>
            </button>

            {/* Hash & Action Buttons */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold text-slate-400">
                  {t("deedDossier.genesisHashLabel")}
                </span>
                <code className="text-xs text-sky-300 font-mono bg-slate-900 px-2 py-0.5 rounded-md border border-white/10 tracking-wider">
                  {displayHash}
                </code>
                <button
                  type="button"
                  onClick={handleCopyHash}
                  className="p-1 rounded text-slate-400 hover:text-sky-300 transition-colors"
                  title="Copy Full Hash"
                >
                  {copiedHash ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-0.5 flex-wrap">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {isDownloadingPdf ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                      <span>{t("deedDossier.pdfDownloading")}</span>
                    </>
                  ) : downloadNotice ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t("deedDossier.pdfDownloaded")}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-sky-400" />
                      <span>{t("deedDossier.btnDownloadPdf")}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  disabled={isPrinting}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {isPrinting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                      <span>{t("deedDossier.printing")}</span>
                    </>
                  ) : printNotice ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t("deedDossier.printed")}</span>
                    </>
                  ) : (
                    <>
                      <Printer className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t("deedDossier.btnPrintEscrow")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Cryptographic QR Modal */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-2xl p-6 bg-slate-900 border border-white/20 shadow-2xl relative text-center"
            >
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mx-auto mb-3 shadow-[0_0_16px_rgba(56,189,248,0.3)]">
                <FileText className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                Sovereign QR Seal: SYN-D-0001
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Scan with any standard device or BhumiSync scanner to verify on-chain notarization.
              </p>

              {/* SVG QR Code Simulation */}
              <div className="bg-white p-4 rounded-xl mx-auto w-48 h-48 flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-slate-950"
                  fill="currentColor"
                >
                  <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,10 h20 v10 h-20 z M40,30 h10 v20 h-10 z M60,40 h20 v10 h-20 z M40,70 h10 v20 h-10 z M60,70 h30 v10 h-30 z M80,90 h10 v10 h-10 z M50,50 h10 v10 h-10 z M20,40 h10 v10 h-10 z" />
                </svg>
              </div>

              <div className="mt-4 p-2.5 rounded-lg bg-slate-950 border border-white/10 font-mono text-[10px] text-sky-300 select-all break-all">
                {fullHash}
              </div>

              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="mt-4 w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all"
              >
                Close Preview
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
