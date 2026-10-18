"use client";

import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HistoryCharterFooter = () => {
  const { language } = useLanguage();

  return (
    <footer className="pt-2 pb-6">
      <div className="rounded-xl px-4 sm:px-6 py-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
          </div>
          <p className="text-xs text-slate-300">
            <span className="font-semibold text-white">
              {language === "bn"
                ? "দ্য স্টেট অ্যাকুইজিশন অ্যান্ড প্রজাস্বত্ব আইন (১৯৫০) ধারা ১৪৩ / ১৪৪"
                : "The State Acquisition and Tenancy Act (1950) §143 / §144"}
            </span>{" "}
            •{" "}
            {language === "bn"
              ? "সকল নিষ্পন্ন নামজারি আদেশ ক্রিপ্টোগ্রাফিকভাবে সিলকৃত এবং সাভার সাব-রেজিস্ট্রি ও এসি ল্যান্ড লেজারে রিয়েল-টাইমে সমন্বিত। কোনো পরিবর্তন ঘটলে তাৎক্ষণিক কোরাম পুনঃযাচাই সক্রিয় হয়।"
              : "All disposed Namzari orders are cryptographically sealed and synchronized across Savar Sub-Registry and AC Land ledgers. Modifications trigger immediate quorum re-verification."}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs text-teal-400">
          <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf] animate-pulse" />
          <span>Synchronized (0ms latency)</span>
        </div>
      </div>
    </footer>
  );
};
