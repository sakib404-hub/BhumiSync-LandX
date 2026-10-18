"use client";

import { Scale, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CadastralShareMutationCard = () => {
  const { t, language } = useLanguage();

  return (
    <section className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t("mutationCase.shareMutationTitle")}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("mutationCase.shareMutationSubtitle")}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 self-start sm:self-auto">
          <Scale className="w-3.5 h-3.5 text-sky-400" />
          <span>{t("mutationCase.daagEqualized")}</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* Seller Card */}
        <div className="rounded-xl bg-slate-950/70 border border-white/10 p-4 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                {t("mutationCase.sellerTransferor")}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                SYN Rahim Uddin
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              SYN-NID-A10021
            </span>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-3 gap-2 py-1 text-center bg-slate-900/80 rounded-lg p-2 border border-white/5">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">
                {t("mutationCase.sellerInitialShare")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">0.5000</span>
              <span className="text-[10px] text-slate-400 block">
                {language === "bn" ? "৮ আনা (২৫.০ শতাংশ)" : "8 anna (25.0 Dec)"}
              </span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">
                {t("mutationCase.sellerRetained")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-sky-300 font-mono">0.2500</span>
              <span className="text-[10px] text-sky-400/80 block">
                {language === "bn" ? "৪ আনা (১২.৫ শতাংশ)" : "4 anna (12.5 Dec)"}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-amber-400 block uppercase">
                {t("mutationCase.sellerTransferred")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 font-mono">-0.2500</span>
              <span className="text-[10px] text-amber-400/80 block">
                {t("mutationCase.escrowLocked")}
              </span>
            </div>
          </div>

          {/* Visual Proportion Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>{language === "bn" ? "বণ্টন বিবরণী" : "Allocation Breakdown"}</span>
              <span>{language === "bn" ? "৫০% বিভাজিত" : "50% Partitioned"}</span>
            </div>
            <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex p-0.5 border border-white/10">
              <div
                className="h-full bg-sky-400 rounded-l-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                style={{ width: "50%" }}
                title="Retained 0.2500"
              />
              <div
                className="h-full bg-amber-400/40 border border-dashed border-amber-400/70 rounded-r-full"
                style={{ width: "50%" }}
                title="Transferred 0.2500"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5 flex-wrap gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>{language === "bn" ? "অবশিষ্ট (০.২৫০০)" : "Retained (0.2500)"}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400/50 border border-amber-400" />
                <span>{language === "bn" ? "হস্তান্তরিত (-০.২৫০০)" : "Transferred (-0.2500)"}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Buyer Card */}
        <div className="rounded-xl bg-slate-950/70 border border-white/10 p-4 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                {t("mutationCase.buyerTransferee")}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                SYN Karim Hossain
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              SYN-NID-B20045
            </span>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-3 gap-2 py-1 text-center bg-slate-900/80 rounded-lg p-2 border border-white/5">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase">
                {t("mutationCase.buyerInitialShare")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">0.0000</span>
              <span className="text-[10px] text-slate-400 block">
                {language === "bn" ? "০ আনা" : "0 anna"}
              </span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">
                {t("mutationCase.buyerMutatedShare")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">0.2500</span>
              <span className="text-[10px] text-emerald-400/80 block">
                {language === "bn" ? "৪ আনা (১২.৫ শতাংশ)" : "4 anna (12.5 Dec)"}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-emerald-400 block uppercase">
                {t("mutationCase.buyerNetGain")}
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">+0.2500</span>
              <span className="text-[10px] text-emerald-400/80 block">
                {t("mutationCase.verifiedEntitlement")}
              </span>
            </div>
          </div>

          {/* Visual Proportion Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>{language === "bn" ? "নতুন স্বত্ব সংযোজন" : "New Title Accretion"}</span>
              <span className="text-emerald-400 font-medium">100% Validated</span>
            </div>
            <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div
                className="h-full bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all duration-500"
                style={{ width: "50%" }}
                title="Mutated Gain 0.2500"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5 flex-wrap gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{language === "bn" ? "ইনবাউন্ড নামজারি (+০.২৫০০)" : "Mutated Inbound (+0.2500)"}</span>
              </span>
              <span className="text-emerald-400 font-mono">
                {language === "bn" ? "নামজারি ১১৮৭/১ লক্ষ্য" : "Namzari 1187/1 Target"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Strip */}
      <div className="mt-4 px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
        <Info className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{t("mutationCase.totalPlotArea")}</span>
      </div>
    </section>
  );
};
