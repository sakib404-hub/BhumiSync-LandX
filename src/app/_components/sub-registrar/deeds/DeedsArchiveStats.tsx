"use client";

import { motion } from "framer-motion";
import { FolderCheck, Lock, Send, AlertOctagon, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DeedsArchiveStats = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      id: "total",
      label: t("deedsArchive.statTotalDeeds"),
      value: language === "bn" ? "১,২৪৮" : "1,248",
      subLabel: t("deedsArchive.statTotalSub"),
      pill: t("deedsArchive.statTotalPill"),
      pillColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      note: t("deedsArchive.statTotalNote"),
      icon: FolderCheck,
      iconColor: "text-sky-400",
    },
    {
      id: "escrow",
      label: t("deedsArchive.statEscrowLocks"),
      value: language === "bn" ? "৩৪টি দলিল" : "34 Deeds",
      subLabel: "",
      pill: t("deedsArchive.statEscrowPill"),
      pillColor: "bg-sky-500/15 border-sky-400/35 text-sky-300",
      note: t("deedsArchive.statEscrowNote"),
      icon: Lock,
      iconColor: "text-sky-400",
    },
    {
      id: "mutation",
      label: t("deedsArchive.statMutation"),
      value: language === "bn" ? "৮৯টি কেস" : "89 Cases",
      subLabel: "",
      pill: t("deedsArchive.statMutationPill"),
      pillColor: "bg-blue-500/15 border-blue-400/35 text-blue-300",
      note: t("deedsArchive.statMutationNote"),
      icon: Send,
      iconColor: "text-blue-400",
    },
    {
      id: "revoked",
      label: t("deedsArchive.statRevoked"),
      value: language === "bn" ? "৩টি প্রচেষ্টা" : "3 Attempts",
      subLabel: "",
      pill: t("deedsArchive.statRevokedPill"),
      pillColor: "bg-red-500/20 border-red-500/30 text-red-300",
      note: t("deedsArchive.statRevokedNote"),
      icon: AlertOctagon,
      iconColor: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-xl p-4 bg-white/[0.10] backdrop-blur-[20px] border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between relative overflow-hidden group hover:border-white/[0.28] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </span>
              <Icon className={`w-5 h-5 ${stat.iconColor} opacity-80`} />
            </div>

            <div className="my-2.5 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              {stat.subLabel && (
                <span className="text-xs text-slate-400">
                  {stat.subLabel}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${stat.pillColor}`}
              >
                {stat.id === "total" && <ArrowUpRight className="w-3 h-3" />}
                {stat.pill}
              </span>
              <span className="text-[11px] text-slate-400">
                {stat.note}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
