"use client";

import { Archive, CheckCircle2, Gavel, Fingerprint, TrendingUp, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HistoryStatsRibbon = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      title: t("mutationHistory.statTotal"),
      value: t("mutationHistory.statTotalVal"),
      pill: t("mutationHistory.statTotalPill"),
      sub: "Consensus 100%",
      pillIcon: TrendingUp,
      icon: Archive,
      borderColor: "border-sky-500/20 hover:border-sky-400/50",
      iconColor: "text-sky-400",
      valueColor: "text-white",
      pillClass: "bg-teal-500/15 text-teal-300 border-teal-400/30",
    },
    {
      title: t("mutationHistory.statApproved"),
      value: t("mutationHistory.statApprovedVal"),
      pill: t("mutationHistory.statApprovedPill"),
      sub: language === "bn" ? "খতিয়ান সিলকৃত" : "Khatian Sealed",
      pillIcon: CheckCircle2,
      icon: CheckCircle2,
      borderColor: "border-teal-500/20 hover:border-teal-400/50",
      iconColor: "text-teal-400",
      valueColor: "text-teal-400",
      pillClass: "bg-teal-500/15 text-teal-300 border-teal-400/35",
    },
    {
      title: t("mutationHistory.statRejected"),
      value: t("mutationHistory.statRejectedVal"),
      pill: t("mutationHistory.statRejectedPill"),
      sub: language === "bn" ? "আদালতের নির্দেশ" : "Court Orders",
      pillIcon: Gavel,
      icon: Gavel,
      borderColor: "border-rose-500/20 hover:border-rose-400/50",
      iconColor: "text-rose-400",
      valueColor: "text-rose-400",
      pillClass: "bg-rose-500/15 text-rose-300 border-rose-400/35",
    },
    {
      title: t("mutationHistory.statSeals"),
      value: t("mutationHistory.statSealsVal"),
      pill: t("mutationHistory.statSealsPill"),
      sub: "SHA-256",
      pillIcon: Lock,
      icon: Fingerprint,
      borderColor: "border-sky-500/20 hover:border-sky-400/50",
      iconColor: "text-sky-400",
      valueColor: "text-sky-400 font-mono",
      pillClass: "bg-sky-500/15 text-sky-300 border-sky-400/35",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        const PillIcon = s.pillIcon;
        return (
          <div
            key={idx}
            className={`rounded-2xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border ${s.borderColor} shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-200 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {s.title}
              </span>
              <Icon className={`w-4 h-4 ${s.iconColor}`} />
            </div>

            <div className="my-2.5">
              <span className={`text-2xl sm:text-[28px] font-bold tracking-tight ${s.valueColor}`}>
                {s.value}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${s.pillClass}`}
              >
                <PillIcon className="w-3 h-3 shrink-0" />
                <span className="truncate">{s.pill}</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">{s.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
