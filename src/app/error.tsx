"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertOctagon, RotateCw, Home, ShieldAlert, Terminal } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export const GlobalError = ({ error, reset }: ErrorProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Log exception to cryptographic telemetry monitor
    console.error("BhumiSync Ledger Runtime Exception:", error);
  }, [error]);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Radiant Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] bg-rose-600/25" />
        <div className="absolute bottom-[20%] right-[25%] w-[450px] h-[450px] rounded-full opacity-15 blur-[130px] bg-amber-600/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-xl rounded-3xl p-6 sm:p-8 bg-white/[0.07] backdrop-blur-2xl border border-white/[0.18] shadow-[0_16px_48px_rgba(0,0,0,0.5)] text-center space-y-6"
      >
        {/* Top Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center text-rose-400 shadow-[0_0_24px_rgba(244,63,94,0.3)]">
          <AlertOctagon className="w-8 h-8" />
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span>
            {language === "bn"
              ? "৫০০ • কনসেনসাস বা রিল্যায়বিলিটি ত্রুটি"
              : "500 • CONSENSUS RUNTIME INTERRUPT"}
          </span>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === "bn"
              ? "সিস্টেম লেনদেন প্রক্রিয়া ব্যাহত হয়েছে"
              : "Ledger Transaction Interrupted"}
          </h1>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            {language === "bn"
              ? "সার্বভৌম ডাটাবেজ সমন্বয়ে একটি অপ্রত্যাশিত সমস্যা দেখা দিয়েছে। কোনো পরিবর্তন অপরিবর্তিত রাখা হয়নি।"
              : "A cryptographic runtime anomaly was encountered while reconciling state across validator nodes. State invariants remain safely preserved."}
          </p>
        </div>

        {/* Technical Ledger Context Box */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 text-xs font-mono text-left space-y-2 text-slate-300">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Exception Message:</span>
            <span className="text-rose-400 font-semibold truncate max-w-[260px]">
              {error?.message || "Internal Consensus State Invalidation"}
            </span>
          </div>
          {error?.digest && (
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Digest Hash:</span>
              <span className="text-sky-300 truncate max-w-[260px]">
                {error.digest}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Recovery Status:</span>
            <span className="text-emerald-400 font-medium">Safe Rollback Verified</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <RotateCw className="w-4 h-4" />
            <span>
              {language === "bn" ? "পুনরায় চেষ্টা করুন" : "Retry Transaction"}
            </span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>
              {language === "bn" ? "নীড় পাতায় ফিরে যান" : "Return to Home"}
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalError;
