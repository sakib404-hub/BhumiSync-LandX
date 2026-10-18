"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  UserCheck,
  AlertTriangle,
  PlusCircle,
  ClipboardList,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface QueueStatCardsProps {
  activeFilter?: string;
  onSelectFilter?: (filter: string) => void;
}

export const QueueStatCards = ({
  activeFilter = "all",
  onSelectFilter,
}: QueueStatCardsProps) => {
  const { t } = useLanguage();

  const stats = [
    {
      id: "new",
      title: t("acLandQueue.statNewCases"),
      value: t("acLandQueue.statNewCasesVal"),
      unit: t("acLandQueue.statNewCasesUnit"),
      pill: t("acLandQueue.statNewCasesPill"),
      pillIcon: PlusCircle,
      icon: Inbox,
      cardBorder: "border-sky-400/25 hover:border-sky-400/50",
      iconBg: "bg-sky-500/15 border-sky-400/30 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]",
      pillBg: "bg-sky-500/10 border-sky-400/30 text-sky-300",
      valueColor: "text-white",
    },
    {
      id: "under_review",
      title: t("acLandQueue.statUnderReview"),
      value: t("acLandQueue.statUnderReviewVal"),
      unit: t("acLandQueue.statUnderReviewUnit"),
      pill: t("acLandQueue.statUnderReviewPill"),
      pillIcon: ClipboardList,
      icon: UserCheck,
      cardBorder: "border-blue-400/25 hover:border-blue-400/50",
      iconBg: "bg-blue-500/15 border-blue-400/30 text-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.25)]",
      pillBg: "bg-blue-500/10 border-blue-400/30 text-blue-300",
      valueColor: "text-white",
    },
    {
      id: "stale",
      title: t("acLandQueue.statStale"),
      value: t("acLandQueue.statStaleVal"),
      unit: t("acLandQueue.statStaleUnit"),
      pill: t("acLandQueue.statStalePill"),
      pillIcon: Clock,
      icon: AlertTriangle,
      cardBorder: "border-amber-400/35 hover:border-amber-400/60",
      iconBg: "bg-amber-500/15 border-amber-500/35 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.25)]",
      pillBg: "bg-amber-500/15 border-amber-500/40 text-amber-300",
      valueColor: "text-amber-300",
    },
  ];

  return (
    <section aria-label="Summary Metrics" className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const PillIcon = stat.pillIcon;
        const isSelected = activeFilter === stat.id;

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            onClick={() => onSelectFilter && onSelectFilter(stat.id)}
            className={`rounded-[20px] bg-slate-900/60 backdrop-blur-xl border ${
              isSelected ? "ring-2 ring-sky-400/60 " + stat.cardBorder : stat.cardBorder
            } p-5 flex flex-col justify-between transition-all duration-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-pointer group`}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
                  {stat.title}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold tracking-tight font-mono ${stat.valueColor}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400">{stat.unit}</span>
                </div>
              </div>

              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${stat.iconBg}`}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${stat.pillBg}`}
              >
                <PillIcon className="w-3.5 h-3.5" />
                <span>{stat.pill}</span>
              </span>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
