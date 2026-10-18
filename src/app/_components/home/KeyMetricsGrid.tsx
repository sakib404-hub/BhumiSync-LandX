"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileCheck, Clock, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  const stats = [
    {
      title: "Double sales blocked",
      value: "1,420+",
      badgeText: "+100% prevented",
      badgeVariant: "verified" as const,
      icon: <ShieldAlert className="h-5 w-5 text-rose-400" />,
      subtext: "Real-time ledger collision lock",
    },
    {
      title: "Deeds sealed",
      value: "84,910",
      badgeText: "Tamper-proof",
      badgeVariant: "pending" as const,
      icon: <FileCheck className="h-5 w-5 text-sky-400" />,
      subtext: "SHA-256 cryptographically audited",
    },
    {
      title: "Mutations completed",
      value: "32,450",
      badgeText: "Avg. 48 hrs",
      badgeVariant: "glass" as const,
      icon: <Clock className="h-5 w-5 text-sky-300" />,
      subtext: "Direct Sub-Registrar to AC Land sync",
    },
    {
      title: "Offices connected",
      value: "64/64",
      badgeText: "All Upazilas",
      badgeVariant: "verified" as const,
      icon: <Building2 className="h-5 w-5 text-emerald-400" />,
      subtext: "Complete national registry grid",
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

