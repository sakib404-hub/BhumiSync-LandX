"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Check, Lock, Sparkles, Search, RefreshCw, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const StateMachineStepper = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const steps = [
    {
      num: "01",
      title: t("hiw.step1Title"),
      desc: t("hiw.step1Desc"),
      status: t("hiw.step1Status"),
      badgeVariant: "verified" as const,
      metaLeft: t("hiw.step1Meta"),
      metaRight: t("hiw.step1MetaCode"),
      accentGlow: "border-emerald-500/30",
      numBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    },
    {
      num: "02",
      title: t("hiw.step2Title"),
      desc: t("hiw.step2Desc"),
      status: t("hiw.step2Status"),
      badgeVariant: "pending" as const,
      metaLeft: t("hiw.step2Meta"),
      metaRight: t("hiw.step2MetaCode"),
      accentGlow: "border-sky-500/30",
      numBg: "bg-sky-500/20 text-sky-400 border-sky-500/40",
    },
    {
      num: "03",
      title: t("hiw.step3Title"),
      desc: t("hiw.step3Desc"),
      status: t("hiw.step3Status"),
      badgeVariant: "pending" as const,
      metaLeft: t("hiw.step3Meta"),
      metaRight: t("hiw.step3MetaCode"),
      accentGlow: "border-sky-500/30",
      numBg: "bg-sky-500/20 text-sky-400 border-sky-500/40",
    },
    {
      num: "04",
      title: t("hiw.step4Title"),
      desc: t("hiw.step4Desc"),
      status: t("hiw.step4Status"),
      badgeVariant: "glass" as const,
      metaLeft: t("hiw.step4Meta"),
      metaRight: t("hiw.step4MetaCode"),
      accentGlow: "border-amber-500/30",
      numBg: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    },
    {
      num: "05",
      title: t("hiw.step5Title"),
      desc: t("hiw.step5Desc"),
      status: t("hiw.step5Status"),
      badgeVariant: "pending" as const,
      metaLeft: t("hiw.step5Meta"),
      metaRight: t("hiw.step5MetaCode"),
      accentGlow: "border-sky-500/30",
      numBg: "bg-sky-500/20 text-sky-400 border-sky-500/40",
    },
    {
      num: "06",
      title: t("hiw.step6Title"),
      desc: t("hiw.step6Desc"),
      status: t("hiw.step6Status"),
      badgeVariant: "verified" as const,
      metaLeft: t("hiw.step6Meta"),
      metaRight: t("hiw.step6MetaCode"),
      accentGlow: "border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
      numBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
    },
  ];

  return (
    <section className="space-y-4">
      {/* Sequence Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-sky-400" />
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {t("hiw.sequenceTitle")}
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
          {t("hiw.sequenceSub")}
        </span>
      </div>

      {/* 6-Card Grid with Desktop Connecting Gradient Track */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative"
      >
        {/* Connecting Gradient Wire on Desktop - Synchronized with cards */}
        <motion.div
          variants={lineVariants}
          className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500/40 via-sky-400 to-emerald-400/40 origin-left pointer-events-none z-0 shadow-[0_0_12px_rgba(56,189,248,0.45)]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 relative z-10">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
              }
              className="h-full"
            >
              <Card
                level={1}
                className={`p-4 flex flex-col justify-between h-full rounded-2xl relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border ${step.accentGlow} shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all`}
              >
                <div className="space-y-3">
                  {/* Step Top: Number & Status Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-7 h-7 rounded-full border text-xs font-bold font-mono flex items-center justify-center ${step.numBg}`}
                    >
                      {step.num}
                    </span>
                    <Badge variant={step.badgeVariant} className="text-[10px] px-2 py-0.5">
                      {step.status}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-300/80 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Metadata Footnote */}
                <div className="mt-4 pt-2.5 border-t border-white/10 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                  <span className="truncate pr-1">{step.metaLeft}</span>
                  <span className="text-sky-300 font-bold shrink-0">{step.metaRight}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
