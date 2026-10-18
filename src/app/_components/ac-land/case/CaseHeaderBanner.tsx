"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  MapPin,
  Building,
  Hourglass,
  PieChart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CaseHeaderBannerProps {
  caseId: string;
}

export const CaseHeaderBanner = ({ caseId }: CaseHeaderBannerProps) => {
  const { t } = useLanguage();

  return (
    <section className="space-y-4">
      <div>
        <Link
          href="/ac-land/queue"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group mb-2"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{t("mutationCase.backQueue")}</span>
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Case {caseId}
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-300 text-xs font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>{t("mutationCase.underReview")}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>{t("mutationCase.deedRelay")}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400">{t("mutationCase.relayTimestamp")}</span>
            <code className="px-2 py-0.5 rounded-lg bg-slate-900/80 border border-white/10 text-sky-300 font-mono text-xs">
              2024-10-14 16:42:01 UTC
            </code>
          </div>
        </div>
      </div>

      {/* Metadata Strip (Glass Card with 4 Metrics) */}
      <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Plot */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {t("mutationCase.metaCadastralPlot")}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              {t("mutationCase.metaCadastralPlotVal")}
            </p>
          </div>
        </div>

        {/* Origin */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-300 shrink-0">
            <Building className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {t("mutationCase.metaOrigin")}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              {t("mutationCase.metaOriginVal")}
            </p>
          </div>
        </div>

        {/* Age */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
            <Hourglass className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {t("mutationCase.metaAge")}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              {t("mutationCase.metaAgeVal")}
            </p>
          </div>
        </div>

        {/* Transacted Share */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 shrink-0">
            <PieChart className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {t("mutationCase.metaShare")}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              {t("mutationCase.metaShareVal")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
