"use client";

import { FileText, ArrowLeftRight, Lock, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const DeedsBentoStats = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("citizenDeeds.totalDeedsTitle"),
      value: t("citizenDeeds.totalDeedsVal"),
      subtext: t("citizenDeeds.totalDeedsSub"),
      icon: FileText,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      hasPing: true,
      pingColor: "bg-emerald-400",
    },
    {
      title: t("citizenDeeds.roleTitle"),
      value: t("citizenDeeds.roleVal"),
      subtext: t("citizenDeeds.roleSub"),
      icon: ArrowLeftRight,
      accent: "text-sky-400 bg-sky-500/10 border-sky-400/20",
      hasPing: false,
    },
    {
      title: t("citizenDeeds.escrowTitle"),
      value: t("citizenDeeds.escrowVal"),
      subtext: t("citizenDeeds.escrowSub"),
      icon: Lock,
      accent: "text-amber-400 bg-amber-500/10 border-amber-400/20",
      hasPing: false,
      textColor: "text-amber-300",
    },
    {
      title: t("citizenDeeds.mutationsTitle"),
      value: t("citizenDeeds.mutationsVal"),
      subtext: t("citizenDeeds.mutationsSub"),
      icon: GitBranch,
      accent: "text-sky-300 bg-sky-400/10 border-sky-400/25",
      hasPing: false,
      fontMono: true,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            className="rounded-2xl p-5 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/30 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {card.title}
              </span>
              <div className={`p-2 rounded-lg border ${card.accent}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-4">
              <div className="text-2xl font-bold tracking-tight text-white">
                {card.value}
              </div>
              <div
                className={`flex items-center gap-1.5 mt-1.5 text-xs font-medium ${
                  card.textColor || (card.fontMono ? "text-sky-300 font-mono" : "text-slate-400")
                }`}
              >
                {card.hasPing && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                )}
                <span>{card.subtext}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
