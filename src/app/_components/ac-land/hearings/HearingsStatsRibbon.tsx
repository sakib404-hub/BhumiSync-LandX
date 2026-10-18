"use client";

import { Calendar, CalendarRange, MailCheck, AlertTriangle, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HearingsStatsRibbon = () => {
  const { t } = useLanguage();

  const stats = [
    {
      title: t("mutationHearings.statToday"),
      value: t("mutationHearings.statTodayVal"),
      subtitle: t("mutationHearings.statTodaySub"),
      subIcon: Clock,
      icon: Calendar,
      borderColor: "border-sky-500/20 hover:border-sky-400/50",
      iconColor: "text-sky-400",
      valueColor: "text-sky-400",
      glowColor: "shadow-[0_0_16px_rgba(56,189,248,0.15)]",
    },
    {
      title: t("mutationHearings.statWeek"),
      value: t("mutationHearings.statWeekVal"),
      subtitle: t("mutationHearings.statWeekSub"),
      subIcon: MapPin,
      icon: CalendarRange,
      borderColor: "border-white/10 hover:border-sky-400/30",
      iconColor: "text-sky-300",
      valueColor: "text-white",
      glowColor: "shadow-[0_0_16px_rgba(56,189,248,0.1)]",
    },
    {
      title: t("mutationHearings.statSummons"),
      value: t("mutationHearings.statSummonsVal"),
      subtitle: t("mutationHearings.statSummonsSub"),
      subIcon: CheckCircle2,
      icon: MailCheck,
      borderColor: "border-teal-500/20 hover:border-teal-400/50",
      iconColor: "text-teal-400",
      valueColor: "text-teal-400",
      glowColor: "shadow-[0_0_16px_rgba(20,184,166,0.15)]",
    },
    {
      title: t("mutationHearings.statContested"),
      value: t("mutationHearings.statContestedVal"),
      subtitle: t("mutationHearings.statContestedSub"),
      subIcon: AlertTriangle,
      icon: AlertTriangle,
      borderColor: "border-amber-500/20 hover:border-amber-400/50",
      iconColor: "text-amber-400",
      valueColor: "text-amber-300",
      glowColor: "shadow-[0_0_16px_rgba(245,158,11,0.15)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const SubIcon = stat.subIcon;
        return (
          <div
            key={idx}
            className={`rounded-2xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border ${stat.borderColor} ${stat.glowColor} transition-all duration-200 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {stat.title}
              </span>
              <Icon className={`w-4 h-4 ${stat.iconColor}`} />
            </div>

            <div className="my-2">
              <span className={`text-2xl sm:text-[28px] font-bold tracking-tight ${stat.valueColor}`}>
                {stat.value}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <SubIcon className={`w-3.5 h-3.5 ${stat.iconColor} shrink-0`} />
              <span className="truncate">{stat.subtitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
