"use client";

import { X, AlertOctagon, Lock, ShieldAlert, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FreezePlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  plotId: string;
  flagId: string;
  onConfirmFreeze: (flagId: string) => void;
}

export const FreezePlotModal = ({
  isOpen,
  onClose,
  plotId,
  flagId,
  onConfirmFreeze,
}: FreezePlotModalProps) => {
  const { language } = useLanguage();
  const [reason, setReason] = useState("Suspected double conveyance and active dispute inquiry");
  const [isFreezing, setIsFreezing] = useState(false);

  if (!isOpen) return null;

  const handleFreeze = () => {
    setIsFreezing(true);
    setTimeout(() => {
      setIsFreezing(false);
      onConfirmFreeze(flagId);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b172a] border border-rose-500/40 shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(244,63,94,0.3)] p-6 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <AlertOctagon className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {language === "bn" ? "জরুরি দাগ লেনদেন স্থগিতকরণ" : "Emergency Plot Transaction Freeze"}
              </h3>
              <p className="text-xs text-rose-300 font-mono mt-0.5">
                {plotId} • {flagId}
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

        <div className="mt-5 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === "bn"
              ? "এই আদেশ কার্যকর হলে সাব-রেজিস্ট্রার ও এসি ল্যান্ড উভয় সিস্টেমে তাৎক্ষণিকভাবে দাগটি ব্লক হয়ে যাবে। তদন্ত নিষ্পত্তি না হওয়া পর্যন্ত কোনো হস্তান্তর দলিল বা নামজারি মঞ্জুর হবে না।"
              : "Executing this action instantly engages a cryptographic escrow lock on this parcel across both the Sub-Registry conveyance pipeline and AC Land mutation queue."}
          </p>

          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {language === "bn" ? "স্থগিতাদেশের প্রাতিষ্ঠানিক কারণ" : "Statutory Grounds for Restraint"}
            </label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all resize-none"
            />
          </div>

          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
            <Lock className="w-4 h-4 shrink-0" />
            <span>Digital seal signed by Chief Cadastral Officer (Savar Hub)</span>
          </div>
        </div>

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
            onClick={handleFreeze}
            disabled={isFreezing}
            className="px-5 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Lock className="w-4 h-4" />
            <span>
              {isFreezing
                ? language === "bn"
                  ? "লক হচ্ছে..."
                  : "Locking..."
                : language === "bn"
                ? "দাগ লেনদেন লক করুন"
                : "Confirm Transaction Freeze"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
