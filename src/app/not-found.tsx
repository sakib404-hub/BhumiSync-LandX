"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Home, ArrowLeft, RefreshCw, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const NotFound = () => {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Radiant Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[500px] h-[500px] rounded-full opacity-25 blur-[120px] bg-sky-500/25" />
        <div className="absolute bottom-[20%] right-[25%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px] bg-amber-500/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-xl rounded-3xl p-6 sm:p-8 bg-white/[0.07] backdrop-blur-2xl border border-white/[0.18] shadow-[0_16px_48px_rgba(0,0,0,0.5)] text-center space-y-6"
      >
        {/* Top Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.3)]">
          <Search className="w-8 h-8" />
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span>{language === "bn" ? "৪০৪ • ক্যাডাস্ট্রাল রেকর্ড নাল" : "404 • CADASTRAL RECORD MISS"}</span>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === "bn" ? "প্লট অথবা পৃষ্ঠাটি পাওয়া যায়নি" : "Parcel or Route Not Found"}
          </h1>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            {language === "bn"
              ? "প্রদত্ত ইউআরএল বা দাগ নম্বরটি জাতীয় ভূমি রেজিস্ট্রি নেটওয়ার্কে অন্তর্ভুক্ত নেই।"
              : "The requested route or cadastral coordinate does not correspond to an active sovereign block on the ledger."}
          </p>
        </div>

        {/* Technical Ledger Context Box */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 text-xs font-mono text-left space-y-2 text-slate-300">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Query Status:</span>
            <span className="text-amber-400 font-semibold">Unmapped Leaf Node</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Consensus Tree:</span>
            <span className="text-sky-300">Merkle Sparse Root Verified</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Action:</span>
            <span className="text-slate-200">Re-index or verify spatial sheet</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/verify"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{language === "bn" ? "ভূমি যাচাইকরণে যান" : "Verify Land Record"}</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{language === "bn" ? "নীড় পাতায় ফিরে যান" : "Return to Home"}</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
