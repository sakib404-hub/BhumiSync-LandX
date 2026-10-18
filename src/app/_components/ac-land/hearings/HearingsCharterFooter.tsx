"use client";

import { Scale, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HearingsCharterFooter = () => {
  const { language } = useLanguage();

  return (
    <footer className="pt-2 pb-6">
      <div className="rounded-xl px-4 sm:px-6 py-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
            <Scale className="w-4 h-4 text-sky-400" />
          </div>
          <p className="text-xs text-slate-300">
            {language === "bn"
              ? "দ্য স্টেট অ্যাকুইজিশন অ্যান্ড প্রজাস্বত্ব আইন (১৯৫০) ধারা ১৪৩ • প্রশাসনিক শুনানির সকল কার্যবিবরণী সার্বভৌম ক্যাডাস্ট্রে লেজারে ক্রিপ্টোগ্রাফিকভাবে সংরক্ষিত।"
              : "The State Acquisition and Tenancy Act (1950) §143 • Administrative hearing minutes are cryptographically stamped into the sovereign cadastre ledger."}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Node: Dhaka-Savar-AC04</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
