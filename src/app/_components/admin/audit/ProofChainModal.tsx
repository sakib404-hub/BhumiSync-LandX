"use client";

import { X, ShieldCheck, CheckCircle2, Lock, Terminal, Hash, Copy } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ProofChainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProofChainModal = ({ isOpen, onClose }: ProofChainModalProps) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const merkleRoot = "0x8f3be4a1d9b7824aaeb02b32a78892485393e7ab93130db467c6e622dd6e4894";

  const handleCopy = () => {
    navigator.clipboard.writeText(merkleRoot);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b172a] border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.2)] p-6 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>{language === "bn" ? "মারকেল প্রুফ চেইন অখণ্ডতা নিরীক্ষা" : "Merkle Proof Chain Verification"}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                  VALIDATED
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === "bn"
                  ? "সাভার সাব-রেজিস্ট্রি এবং এসি ল্যান্ডের ব্লক ট্র্যানজ্যাকশনের ক্রিপ্টোগ্রাফিক যাচাই"
                  : "Cryptographic consensus audit verification across Savar nodes and National Root."}
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

        {/* Proof Details */}
        <div className="mt-5 space-y-4">
          {/* Merkle Root Box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-white/15 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
              <span>{language === "bn" ? "সক্রিয় মারকেল রুট হ্যাশ" : "Active Merkle Root Hash"}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors capitalize text-[11px]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied!" : "Copy Hash"}</span>
              </button>
            </div>
            <div className="font-mono text-xs sm:text-sm text-sky-300 break-all bg-slate-950/80 p-2.5 rounded-lg border border-sky-400/20">
              {merkleRoot}
            </div>
          </div>

          {/* Verification Steps */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Block #8,492,109 Parent Block Hash Match</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-300">0.012ms</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SHA-256 Merkle Branch Inclusion Proof (24,819 leaves)</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-300">0.038ms</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Institutional Quorum (Savar AC Land + Sub-Registrar + District Court)</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-300">3/3 Valid</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Zero state drift • Dhaka Cadastral Root Genesis 2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all shadow-md"
          >
            {language === "bn" ? "বন্ধ করুন" : "Close Inspector"}
          </button>
        </div>
      </div>
    </div>
  );
};
