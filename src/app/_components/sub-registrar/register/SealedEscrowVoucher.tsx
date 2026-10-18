"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Lock,
  Key,
  Send,
  Download,
  Printer,
  Sparkles,
  QrCode,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const SealedEscrowVoucher = () => {
  const { t, language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printDone, setPrintDone] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 3000);
    }, 1200);
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
      setPrintDone(true);
      setTimeout(() => setPrintDone(false), 3000);
    }, 1200);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-5 sm:p-7 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-sky-400/40 shadow-[0_12px_40px_0_rgba(0,0,0,0.45),0_0_20px_rgba(56,189,248,0.20)] flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Subtle Glow Flare */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header & Sealed Status */}
      <div className="flex items-start gap-3.5 relative z-10">
        <div className="w-11 h-11 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(86,229,169,0.5)] shrink-0">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
            {t("registerDeed.voucherTitle")}
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {language === "bn" ? (
              <>
                সার্বভৌম লেজার ব্লক{" "}
                <span className="text-sky-400 font-mono font-bold">#৮৮৪,৯১৬</span>-এ
                ক্রিপ্টোগ্রাফিক এসক্রো লক সক্রিয় হয়েছে।
              </>
            ) : (
              <>
                Cryptographic escrow lock activated on sovereign ledger block{" "}
                <span className="text-sky-400 font-mono font-bold">#884,916</span>.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Visual Share Conveyance Bar */}
      <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-slate-950/70 border border-white/15 relative z-10">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">
            {t("registerDeed.sellerOriginalShare")}
          </span>
          <span className="text-sky-400 font-mono font-semibold">
            {t("registerDeed.baseCadastre")}
          </span>
        </div>

        {/* Segmented Conveyance Bar */}
        <div className="h-9 w-full rounded-lg bg-slate-900 p-1 flex gap-1 border border-white/10">
          {/* Transacted 50% / 0.2500 */}
          <div className="w-1/2 h-full rounded bg-sky-500 shadow-[0_0_14px_rgba(56,189,248,0.7)] flex items-center justify-center gap-1.5 text-slate-950 text-xs font-bold truncate px-2">
            <Lock className="w-3.5 h-3.5" />
            <span>{t("registerDeed.escrowLockSegment")}</span>
          </div>
          {/* Freehold Remainder 50% / 0.2500 */}
          <div className="w-1/2 h-full rounded bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 text-xs font-medium truncate px-2">
            <span>{t("registerDeed.freeholdSegment")}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 flex-wrap gap-2">
          <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            {t("registerDeed.transfereeText")}
          </span>
          <span className="text-slate-400">
            {t("registerDeed.postEscrowFreehold")}
          </span>
        </div>
      </div>

      {/* Cryptographic QR Code & Hash Seal Box */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-white/15 flex flex-col sm:flex-row items-center gap-4 relative z-10">
        {/* High-Tech Graphic QR Code Container */}
        <div className="w-24 h-24 rounded-xl bg-white p-2 flex flex-col justify-between shrink-0 shadow-lg relative group">
          <div className="w-full h-full border border-black/20 flex flex-col justify-between p-1 bg-white">
            <div className="flex justify-between">
              <div className="w-4 h-4 bg-slate-950 border-2 border-slate-950 rounded-sm" />
              <div className="w-4 h-4 bg-slate-950 border-2 border-slate-950 rounded-sm" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-sky-600 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">BS</span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="w-4 h-4 bg-slate-950 border-2 border-slate-950 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-slate-950" />
            </div>
          </div>
        </div>

        {/* Hash Details */}
        <div className="flex flex-col gap-1 overflow-hidden text-center sm:text-left w-full">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
            <Key className="w-3.5 h-3.5" />
            <span>{t("registerDeed.shaCertified")}</span>
          </span>
          <div className="font-mono text-xs text-white truncate mt-0.5">
            Genesis Hash: <span className="text-sky-300 font-semibold">0x8f3b9c...e4a17d</span>
          </div>
          <div className="text-[11px] text-slate-400">
            {t("registerDeed.timestamp")}
          </div>
          <div className="text-[11px] text-slate-400">
            {t("registerDeed.notaryAnchor")}
          </div>
        </div>
      </div>

      {/* Inter-Departmental Relay Notification Card */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30 backdrop-blur-md flex flex-col gap-2 relative z-10">
        <div className="flex items-center gap-2">
          <Send className="w-4 h-4 text-indigo-400 shrink-0" />
          <div className="text-xs sm:text-sm font-bold text-indigo-200">
            {t("registerDeed.relayTitle")}
          </div>
        </div>
        <div className="text-xs text-white pl-6">
          Reference: <span className="font-mono font-bold text-sky-300">MUT-2026-000001</span>
        </div>
        <div className="text-xs text-slate-300 pl-6 leading-relaxed">
          {t("registerDeed.relayDesc")}
        </div>
      </div>

      {/* Quick Voucher Output Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 relative z-10">
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-sky-300 border border-sky-400/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          {isDownloading ? (
            <>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-300 border-t-transparent animate-spin" />
              <span>{language === "bn" ? "ডাউনলোড হচ্ছে..." : "Generating PDF..."}</span>
            </>
          ) : downloadDone ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{language === "bn" ? "PDF প্রস্তুত!" : "PDF Downloaded"}</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>{t("registerDeed.downloadPdf")}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handlePrint}
          disabled={isPrinting}
          className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          {isPrinting ? (
            <>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span>{language === "bn" ? "প্রিন্ট হচ্ছে..." : "Printing Receipt..."}</span>
            </>
          ) : printDone ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{language === "bn" ? "প্রিন্ট সম্পন্ন!" : "Receipt Printed"}</span>
            </>
          ) : (
            <>
              <Printer className="w-4 h-4" />
              <span>{t("registerDeed.printReceipt")}</span>
            </>
          )}
        </button>
      </div>
    </motion.section>
  );
};
