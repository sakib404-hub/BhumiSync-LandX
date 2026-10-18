"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PlotExtractTableCard = () => {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t("mutationCase.extractTitle")}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("mutationCase.extractSubtitle")}
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 self-start sm:self-auto">
          {t("mutationCase.surveySeries")}
        </span>
      </div>

      {/* 5-Column Data Grid */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/70">
        <div className="min-w-[650px]">
          {/* Grid Header */}
          <div className="grid grid-cols-5 bg-slate-900/80 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-white/10">
            <div>{t("mutationCase.thKhatian")}</div>
            <div>{t("mutationCase.thDaag")}</div>
            <div>{t("mutationCase.thMouza")}</div>
            <div>{t("mutationCase.thClass")}</div>
            <div>{t("mutationCase.thDeed")}</div>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-5 px-4 py-3.5 text-xs text-white items-center hover:bg-white/[0.04] transition-colors">
            <div className="font-mono font-bold text-sky-400">1187 (BS)</div>
            <div className="font-mono font-medium">452/1</div>
            <div>
              SYN-Savar <span className="text-[11px] text-slate-400">(J.L. 42)</span>
            </div>
            <div>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                {t("mutationCase.classVal")}
              </span>
            </div>
            <div>
              <Link
                href="/sub-registrar/deed/SYN-D-0001"
                className="font-mono text-sky-300 hover:text-sky-200 inline-flex items-center gap-1 font-semibold group"
              >
                <span>SYN-D-0001</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
