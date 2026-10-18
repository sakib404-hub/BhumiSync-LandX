"use client";

import { Receipt, Network, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AuditStatCards = () => {
  const { t, language } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Stat 1: Total Audit Events */}
      <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.15)] transition-all duration-200">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {language === "bn" ? "মোট অডিট ইভেন্ট" : "Total Audit Events"}
          </span>
          <Receipt className="w-5 h-5 text-sky-400" />
        </div>
        <div className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
          {language === "bn" ? "২৪,৮১৯" : "24,819"}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span>{language === "bn" ? "১০০% ক্রিপ্টোগ্রাফিকভাবে যাচাইকৃত" : "100% Cryptographically Verified"}</span>
        </div>
      </div>

      {/* Stat 2: Actor Distribution */}
      <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.15)] transition-all duration-200">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {language === "bn" ? "অপারেটর অনুপাত" : "Actor Distribution"}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
        </div>
        <div className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight">
          {language === "bn" ? "৮৪% প্রাতিষ্ঠানিক" : "84% Institutional"}
        </div>
        <div className="mt-2 text-xs text-slate-400 truncate">
          {language === "bn" ? "১৬% স্বয়ংক্রিয় ডিমন্স" : "16% Autonomous Daemons"}
        </div>
      </div>

      {/* Stat 3: Block Height */}
      <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.15)] transition-all duration-200">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {language === "bn" ? "ব্লক হাইট" : "Block Height"}
          </span>
          <Layers className="w-5 h-5 text-sky-400" />
        </div>
        <div className="mt-3 text-2xl sm:text-3xl font-bold text-sky-400 font-mono tracking-tight">
          #8,492,109
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>{language === "bn" ? "ঢাকা কেন্দ্রীয় রুটের সাথে শূন্য ড্রিফট" : "0s drift relative to Dhaka Cadastral Root"}</span>
        </div>
      </div>

      {/* Stat 4: Integrity Proof */}
      <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.15)] transition-all duration-200">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {language === "bn" ? "অখণ্ডতার প্রমাণ" : "Integrity Proof"}
          </span>
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="mt-3 text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
          {language === "bn" ? "কোন অসঙ্গতি নেই" : "Zero Inconsistencies"}
        </div>
        <div className="mt-2 text-xs text-slate-400 truncate">
          {language === "bn" ? "ফুল মারকেল ভ্যালিডেশন ৪২ সে পূর্বে পাস" : "Full Merkle validation passed 42s ago"}
        </div>
      </div>
    </div>
  );
};
