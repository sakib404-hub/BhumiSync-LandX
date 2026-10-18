"use client";

import { motion } from "framer-motion";
import { Layers, Lock, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const BentoStatsRibbon = () => {
  const { t } = useLanguage();

  const stats = [
    {
      title: t("citizenLand.activeHoldings"),
      value: t("citizenLand.activeHoldingsVal"),
      sub: t("citizenLand.activeHoldingsSub"),
      icon: Layers,
      color: "text-sky-400",
      bgGlow: "group-hover:border-sky-400/40",
      accentDot: "bg-emerald-400",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: t("citizenLand.lockedEscrow"),
      value: t("citizenLand.lockedEscrowVal"),
      sub: t("citizenLand.lockedEscrowSub"),
      icon: Lock,
      color: "text-sky-300",
      bgGlow: "group-hover:border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.12)]",
      accentDot: "bg-sky-400 animate-pulse",
      badgeColor: "text-sky-300 bg-sky-500/15 border-sky-400/30",
    },
    {
      title: t("citizenLand.pendingMutations"),
      value: t("citizenLand.pendingMutationsVal"),
      sub: t("citizenLand.pendingMutationsSub"),
      icon: Clock,
      color: "text-amber-400",
      bgGlow: "group-hover:border-amber-400/40",
      accentDot: "bg-amber-400",
      badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: t("citizenLand.encumbrances"),
      value: t("citizenLand.encumbrancesVal"),
      sub: t("citizenLand.encumbrancesSub"),
      icon: ShieldCheck,
      color: "text-emerald-400",
      bgGlow: "group-hover:border-emerald-400/40",
      accentDot: "bg-emerald-400",
      badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            className={`group relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 flex flex-col justify-between ${stat.bgGlow}`}
          >
            {/* Top Row: Title & Icon */}
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {stat.title}
              </span>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition-colors">
                <IconComponent className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>

            {/* Middle Row: Main Metric Value */}
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {stat.value}
            </div>

            {/* Bottom Row: Context subline with status badge */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-xs text-slate-300">
              <span className={`inline-block w-2 h-2 rounded-full ${stat.accentDot}`} />
              <span className="truncate font-mono">{stat.sub}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
