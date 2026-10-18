"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileCheck, Clock, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const KeyMetricsGrid = () => {
  const { t, language } = useLanguage();

  const toBn = (numStr: string) => {
    if (language !== "bn") return numStr;
    const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return numStr.replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
  };

  const stats = [
    {
      title: t("metrics.blockedTitle"),
      value: toBn("1,420+"),
      badgeText: t("metrics.blockedBadge"),
      badgeVariant: "verified" as const,
      icon: <ShieldAlert className="h-5 w-5 text-rose-400" />,
      subtext: t("metrics.blockedSub"),
    },
    {
      title: t("metrics.deedsTitle"),
      value: toBn("84,910"),
      badgeText: t("metrics.deedsBadge"),
      badgeVariant: "pending" as const,
      icon: <FileCheck className="h-5 w-5 text-sky-400" />,
      subtext: t("metrics.deedsSub"),
    },
    {
      title: t("metrics.mutationsTitle"),
      value: toBn("32,450"),
      badgeText: t("metrics.mutationsBadge"),
      badgeVariant: "glass" as const,
      icon: <Clock className="h-5 w-5 text-sky-300" />,
      subtext: t("metrics.mutationsSub"),
    },
    {
      title: t("metrics.officesTitle"),
      value: toBn("64/64"),
      badgeText: t("metrics.officesBadge"),
      badgeVariant: "verified" as const,
      icon: <Building2 className="h-5 w-5 text-emerald-400" />,
      subtext: t("metrics.officesSub"),
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.title}
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
          whileTap={{ scale: 0.98 }}
        >
          <Card
            level={1}
            interactive
            className="rounded-2xl p-5 space-y-4 h-full"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                {stat.icon}
              </div>
              <Badge variant={stat.badgeVariant}>{stat.badgeText}</Badge>
            </div>

            <div>
              <span className="text-3xl font-bold text-white font-mono tracking-tight block tabular-data">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-slate-200 block mt-1">
                {stat.title}
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">
                {stat.subtext}
              </span>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  );
};

