"use client";

import { FileText, Lock, RefreshCw, ShieldAlert, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const SubRegistrarBentoMetrics = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("subRegistrar.metricDeedsToday"),
      value: t("subRegistrar.metricDeedsVal"),
      subtext: t("subRegistrar.metricDeedsSub"),
      status: t("subRegistrar.metricDeedsStatus"),
      icon: FileText,
      accent: "text-sky-400 bg-sky-500/10 border-sky-400/25",
      statusAccent: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      dotColor: "bg-emerald-400",
      hasTrend: true,
    },
    {
      title: t("subRegistrar.metricLocksToday"),
      value: t("subRegistrar.metricLocksVal"),
      subtext: t("subRegistrar.metricLocksSub"),
      status: t("subRegistrar.metricLocksStatus"),
      icon: Lock,
      accent: "text-sky-300 bg-sky-400/10 border-sky-400/25",
      statusAccent: "bg-sky-500/10 border-sky-400/30 text-sky-300",
      dotColor: "bg-sky-400",
      fontMono: true,
    },
    {
      title: t("subRegistrar.metricMutationToday"),
      value: t("subRegistrar.metricMutationVal"),
      subtext: t("subRegistrar.metricMutationSub"),
      status: t("subRegistrar.metricMutationStatus"),
      icon: RefreshCw,
      accent: "text-cyan-300 bg-cyan-500/10 border-cyan-400/25",
      statusAccent: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
      dotColor: "bg-cyan-400",
    },
    {
      title: t("subRegistrar.metricBlockedToday"),
      value: t("subRegistrar.metricBlockedVal"),
      subtext: t("subRegistrar.metricBlockedSub"),
      status: t("subRegistrar.metricBlockedStatus"),
      icon: ShieldAlert,
      accent: "text-red-400 bg-red-500/10 border-red-400/25",
      statusAccent: "bg-red-500/15 border-red-500/30 text-red-300",
      dotColor: "bg-red-400",
      isAlert: true,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`rounded-2xl p-5 bg-white/[0.04] backdrop-blur-xl border shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all flex flex-col justify-between group ${
              card.isAlert
                ? "border-red-500/30 hover:border-red-400/50"
                : "border-white/10 hover:border-sky-400/40"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {card.title}
              </span>
              <div className={`p-2 rounded-xl border ${card.accent}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-4">
              <div
                className={`text-2xl font-bold tracking-tight ${
                  card.isAlert ? "text-red-300" : "text-white"
                }`}
              >
                {card.value}
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs">
                <span
                  className={`truncate max-w-[130px] flex items-center gap-1 ${
                    card.fontMono ? "font-mono text-slate-300" : "text-slate-400"
                  }`}
                >
                  {card.hasTrend && (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  )}
                  <span>{card.subtext}</span>
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${card.statusAccent}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`} />
                  <span>{card.status}</span>
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
