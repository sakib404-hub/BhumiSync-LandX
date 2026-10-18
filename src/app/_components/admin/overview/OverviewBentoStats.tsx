"use client";

import { motion } from "framer-motion";
import {
  Flag,
  RotateCcw,
  Users,
  Scroll,
  AlertTriangle,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const OverviewBentoStats = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      title: t("admin.statFraudTitle"),
      value: "7",
      delta: t("admin.statFraudDelta"),
      deltaClass: "bg-rose-500/15 text-rose-300 border border-rose-500/30",
      subText: t("admin.statFraudJurisdiction"),
      icon: Flag,
      subIcon: AlertTriangle,
      iconColor: "text-rose-400",
      iconBg: "bg-rose-500/10 border-rose-500/30",
      accentGlow: "bg-rose-500/10",
      borderHover: "hover:border-rose-500/40",
    },
    {
      title: t("admin.statOutboxTitle"),
      value: "3",
      delta: t("admin.statOutboxBadge"),
      deltaClass: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
      subText: t("admin.statOutboxDesc"),
      icon: RotateCcw,
      subIcon: Clock,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/10 border-sky-400/30",
      accentGlow: "bg-sky-500/10",
      borderHover: "hover:border-sky-500/40",
    },
    {
      title: t("admin.statStaffTitle"),
      value: language === "bn" ? "৪২" : "42",
      delta: t("admin.statStaffBadge"),
      deltaClass: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
      subText: t("admin.statStaffLocations"),
      icon: Users,
      subIcon: MapPin,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      accentGlow: "bg-emerald-500/10",
      borderHover: "hover:border-emerald-500/40",
      isLive: true,
    },
    {
      title: t("admin.statDeedsTitle"),
      value: language === "bn" ? "১২৮" : "128",
      delta: t("admin.statDeedsBadge"),
      deltaClass: "bg-sky-500/15 text-sky-300 border border-sky-400/30",
      subText: t("admin.statDeedsDesc"),
      icon: Scroll,
      subIcon: CheckCircle2,
      iconColor: "text-sky-300",
      iconBg: "bg-sky-500/10 border-sky-400/30",
      accentGlow: "bg-sky-500/15",
      borderHover: "hover:border-sky-400/40",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const SubIcon = stat.subIcon;

        return (
          <motion.div
            key={idx}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={`relative overflow-hidden rounded-2xl p-5 bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors ${stat.borderHover}`}
          >
            {/* Header: Title & Icon Pill */}
            <div className="flex items-start justify-between">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                {stat.title}
              </span>
              <div
                className={`p-2 rounded-xl border ${stat.iconBg} ${stat.iconColor} shadow-inner`}
              >
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
            </div>

            {/* Metric Value & Delta Tag */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
                {stat.value}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${stat.deltaClass} flex items-center gap-1.5`}
              >
                {stat.isLive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                )}
                {stat.delta}
              </span>
            </div>

            {/* Sub-label with context icon */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
              <SubIcon className={`w-3.5 h-3.5 ${stat.iconColor} shrink-0`} />
              <span className="truncate">{stat.subText}</span>
            </div>

            {/* Ambient Background Blur Spot */}
            <div
              className={`absolute -right-6 -bottom-6 w-24 h-24 ${stat.accentGlow} rounded-full blur-xl pointer-events-none`}
            />
          </motion.div>
        );
      })}
    </section>
  );
};
