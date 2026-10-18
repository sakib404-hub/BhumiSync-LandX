"use client";

import { X, Gavel, ShieldCheck, Scale } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface InjunctionRestraintData {
  id: string;
  caseNo: string;
  court: string;
  plot: string;
  mouza: string;
  parties: string;
  decree: string;
  status: "stay_order" | "temporary" | "status_quo" | "vacated";
}

interface LiftInjunctionModalProps {
  isOpen: boolean;
  onClose: () => void;
  injunction: InjunctionRestraintData | null;
  onConfirmLift: (caseId: string) => void;
}

export const LiftInjunctionModal = ({
  isOpen,
  onClose,
  injunction,
  onConfirmLift,
}: LiftInjunctionModalProps) => {
  const { language } = useLanguage();
  const [orderRef, setOrderRef] = useState("JUD-VAC-2026-9921");
  const [isLifting, setIsLifting] = useState(false);

  if (!isOpen || !injunction) return null;

  const handleLift = () => {
    setIsLifting(true);
    setTimeout(() => {
      setIsLifting(false);
      onConfirmLift(injunction.id);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b172a] border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.2)] p-6 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Scale className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {language === "bn" ? "আদালতের নিষেধাজ্ঞা প্রত্যাহার" : "Vacate Judicial Injunction"}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {injunction.caseNo} • {injunction.plot}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-5 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === "bn"
              ? "আদালতের রুল নিষ্পত্তি বা নিষেধাজ্ঞা প্রত্যাহার আদেশ জারি হলে সাব-রেজিস্ট্রি এবং এসি ল্যান্ডে দাগের ওপর বলবৎ লাল সতর্কতা স্বয়ংক্রিয়ভাবে প্রত্যাহার হবে।"
              : "Submitting this court order vacates the cadastral freeze across all land registry and mutation nodes under Civil Procedure Code § 151."}
          </p>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Court Authority:</span>
              <span className="text-white font-medium">{injunction.court}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Disputing Parties:</span>
              <span className="text-slate-200">{injunction.parties}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Decree:</span>
              <span className="text-amber-300 font-mono">{injunction.decree}</span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {language === "bn" ? "আদালত অবমুক্তকরণ আদেশ স্মারক নং" : "Vacation / Order Judgment Memo No."}
            </label>
            <input
              type="text"
              value={orderRef}
              onChange={(e) => setOrderRef(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-sky-400"
            />
          </div>

          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-200 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-sky-400" />
            <span>Digital seal signed by Judicial Settlement Magistrate</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-colors"
          >
            {language === "bn" ? "বাতিল" : "Cancel"}
          </button>
          <button
            type="button"
            onClick={handleLift}
            disabled={isLifting}
            className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Gavel className="w-4 h-4" />
            <span>
              {isLifting
                ? language === "bn"
                  ? "প্রত্যাহার হচ্ছে..."
                  : "Vacating..."
                : language === "bn"
                ? "নিষেধাজ্ঞা প্রত্যাহার নিশ্চিত করুন"
                : "Confirm Order Vacation"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
