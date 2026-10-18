"use client";

import { Gavel } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const ValidateDeedAlert = () => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="p-3.5 sm:p-4 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white shadow-[0_0_24px_rgba(239,68,68,0.15)]"
    >
      <div className="flex items-start sm:items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 mt-0.5 sm:mt-0 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
          <Gavel className="w-4 h-4" />
        </div>
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-bold text-red-400">
            {t("validateDeed.alertTitle")}
          </span>
          <span className="text-slate-200 ml-1.5">
            {language === "bn" ? (
              <>
                খসড়া দলিল <span className="font-mono text-sky-300 font-bold">SYN-D-0001</span>-এ
                গুরুতর ক্যাডাস্ট্রাল কোটা অমিল ও স্বত্ব হিস্যা লঙ্ঘন পাওয়া গেছে। নিবন্ধন স্থগিত রাখা হয়েছে।
              </>
            ) : (
              <>
                Draft deed <span className="font-mono text-sky-300 font-bold">SYN-D-0001</span>{" "}
                contains severe cadastral quota mismatch and title share violation. Registration authorization withheld.
              </>
            )}
          </span>
        </div>
      </div>

      <div className="self-end sm:self-center shrink-0">
        <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-red-500/20 border border-red-500/40 text-red-300 tracking-wider uppercase shadow-sm">
          {t("validateDeed.ruleBadge")}
        </span>
      </div>
    </motion.div>
  );
};
