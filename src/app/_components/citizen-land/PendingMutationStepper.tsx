"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, RefreshCw, Circle, ExternalLink, Clock, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PendingMutationStepper = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: 1,
      title: t("citizenLand.step1Title"),
      desc: t("citizenLand.step1Desc"),
      status: "COMPLETED",
    },
    {
      step: 2,
      title: t("citizenLand.step2Title"),
      desc: t("citizenLand.step2Desc"),
      status: "COMPLETED",
    },
    {
      step: 3,
      title: t("citizenLand.step3Title"),
      desc: t("citizenLand.step3Desc"),
      status: "IN_PROGRESS",
    },
    {
      step: 4,
      title: t("citizenLand.step4Title"),
      desc: t("citizenLand.step4Desc"),
      status: "PENDING",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t("citizenLand.mutationMilestoneTitle")}
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-mono font-semibold">
            {t("citizenLand.mutationCaseId")}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xs text-slate-300 leading-relaxed">
          {t("citizenLand.mutationDesc")}
        </p>

        {/* Milestone Stepper */}
        <div className="py-2 flex flex-col gap-4 relative">
          {/* Vertical Track Line */}
          <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-400 to-white/15" />

          {steps.map((item, idx) => {
            const isCompleted = item.status === "COMPLETED";
            const isInProgress = item.status === "IN_PROGRESS";

            return (
              <div key={idx} className="flex items-start gap-3 relative z-10 group">
                {/* Node Icon */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                    isCompleted
                      ? "bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)] font-bold"
                      : isInProgress
                        ? "bg-sky-400 text-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.7)] animate-pulse font-bold"
                        : "bg-white/10 border border-white/20 text-slate-400"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                  ) : isInProgress ? (
                    <RefreshCw className="w-3.5 h-3.5 text-slate-950 animate-spin" />
                  ) : (
                    <Circle className="w-2.5 h-2.5 text-slate-400" />
                  )}
                </div>

                {/* Node Text Content */}
                <div className="flex flex-col">
                  <span
                    className={`text-xs sm:text-sm font-semibold leading-tight ${
                      isCompleted
                        ? "text-white"
                        : isInProgress
                          ? "text-sky-300"
                          : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`text-[11px] mt-0.5 ${
                      isCompleted
                        ? "text-emerald-400 font-medium"
                        : isInProgress
                          ? "text-sky-400/90 font-medium"
                          : "text-slate-500"
                    }`}
                  >
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action CTA: Track Case Status */}
      <div className="pt-4 mt-2 border-t border-white/10">
        <Link
          href="/verify/plot/452-1"
          className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-98"
        >
          <span>{t("citizenLand.trackStatus")}</span>
          <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
