"use client";

import { motion } from "framer-motion";
import { Users, IdCard, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PartiesStatRibbon = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      id: "total",
      label: t("partiesRegistry.metricTotal"),
      value: language === "bn" ? "২,৪১৮" : "2,418",
      subBadge: t("partiesRegistry.metricTotalToday"),
      subText: t("partiesRegistry.metricTotalEc"),
      icon: Users,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-400/20",
      valueColor: "text-white",
    },
    {
      id: "landowners",
      label: t("partiesRegistry.metricLandowners"),
      value: language === "bn" ? "১,৮৯৪" : "1,894",
      subBadge: t("partiesRegistry.metricLandownersMouza"),
      subText: `• ${t("partiesRegistry.metricLandownersActive")}`,
      icon: IdCard,
      badgeColor: "text-sky-300 font-semibold",
      iconColor: "text-sky-400 bg-sky-500/20 border-sky-400/30",
      valueColor: "text-white",
    },
    {
      id: "biometric",
      label: t("partiesRegistry.metricBiometric"),
      value: language === "bn" ? "৯৯.৪%" : "99.4%",
      subBadge: t("partiesRegistry.metricBiometricSynced"),
      subText: "",
      icon: CheckCircle2,
      badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      iconColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40",
      valueColor: "text-white",
    },
    {
      id: "alerts",
      label: t("partiesRegistry.metricAlerts"),
      value: language === "bn" ? "৩টি চিহ্নিত" : "3 Flagged",
      subBadge: t("partiesRegistry.metricAlertsReview"),
      subText: t("partiesRegistry.metricAlertsSign"),
      icon: AlertTriangle,
      badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      valueColor: "text-amber-300",
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
            className="rounded-2xl p-4 flex flex-col justify-between bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-sky-400/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
              <span
                className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${stat.iconColor}`}
              >
                <Icon className="w-4 h-4" />
              </span>
            </div>

            <div className="my-2.5">
              <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.valueColor}`}>
                {stat.value}
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {stat.id === "total" ? (
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${stat.badgeColor}`}
                >
                  <TrendingUp className="w-3 h-3" />
                  {stat.subBadge}
                </span>
              ) : stat.id === "landowners" ? (
                <span className="text-xs font-semibold text-sky-400">
                  {stat.subBadge}
                </span>
              ) : (
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${stat.badgeColor}`}
                >
                  {stat.subBadge}
                </span>
              )}

              {stat.subText && (
                <span className="text-[11px] text-slate-400">
                  {stat.subText}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
