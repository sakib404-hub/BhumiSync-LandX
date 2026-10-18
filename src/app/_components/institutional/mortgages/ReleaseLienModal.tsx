"use client";

import { X, Unlock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface MortgageLienData {
  id: string;
  plot: string;
  mouzaKhatian?: string;
  bank: string;
  loanNo: string;
  amount: string;
  borrower: string;
  state?: "active" | "contested" | "released";
  branch?: string;
  mouza?: string;
  khatian?: string;
  date?: string;
  status?: "active" | "released";
}

interface ReleaseLienModalProps {
  isOpen: boolean;
  onClose: () => void;
  lien: MortgageLienData | null;
  onConfirmRelease: (lienId: string) => void;
}

export const ReleaseLienModal = ({
  isOpen,
  onClose,
  lien,
  onConfirmRelease,
}: ReleaseLienModalProps) => {
  const { language } = useLanguage();
  const [nocRef, setNocRef] = useState("NOC-SB-2026-8819");
  const [isReleasing, setIsReleasing] = useState(false);

  if (!isOpen || !lien) return null;

  const handleRelease = () => {
    setIsReleasing(true);
    setTimeout(() => {
      setIsReleasing(false);
      onConfirmRelease(lien.id);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b172a] border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.2)] p-6 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Unlock className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {language === "bn" ? "বন্ধক দায় ও লিয়েন অবমুক্তকরণ" : "Release Mortgage Lien & Encumbrance"}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {lien.plot} • {lien.loanNo}
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
              ? "এই আদেশ জারি হলে সাব-রেজিস্ট্রার সিস্টেমে তাৎক্ষণিকভাবে অনাপত্তিপত্র (NOC) প্রেরিত হবে এবং জমির হস্তান্তরে আর কোনো বাধা থাকবে না।"
              : "Releasing this institutional mortgage automatically transmits a signed digital NOC to the Savar Sub-Registry and removes the financial encumbrance from the land title."}
          </p>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Borrower:</span>
              <span className="text-white font-semibold">{lien.borrower || "SYN Rahim Uddin"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Sanctioned Amount:</span>
              <span className="text-sky-300 font-mono font-bold">{lien.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Lender:</span>
              <span className="text-white">{lien.bank}</span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {language === "bn" ? "ব্যাংক এনওসি / রিলিজ রেফারেন্স" : "Bank NOC Release Reference No."}
            </label>
            <input
              type="text"
              value={nocRef}
              onChange={(e) => setNocRef(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-sky-400"
            />
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Cryptographic release voucher signed by Sonali Bank Savar Hub</span>
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
            onClick={handleRelease}
            disabled={isReleasing}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Unlock className="w-4 h-4" />
            <span>
              {isReleasing
                ? language === "bn"
                  ? "অবমুক্ত হচ্ছে..."
                  : "Releasing..."
                : language === "bn"
                ? "লিয়েন অবমুক্ত করুন"
                : "Confirm Lien Release"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
