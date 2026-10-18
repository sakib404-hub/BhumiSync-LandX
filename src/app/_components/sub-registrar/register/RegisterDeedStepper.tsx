"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface StepperProps {
  currentStep?: number;
}

export const RegisterDeedStepper = ({ currentStep = 2 }: StepperProps) => {
  const { t } = useLanguage();

  const steps = [
    {
      num: 1,
      title: t("registerDeed.step1Title"),
      status: t("registerDeed.step1Status"),
      isCompleted: true,
      isActive: false,
    },
    {
      num: 2,
      title: t("registerDeed.step2Title"),
      status: t("registerDeed.step2Status"),
      isCompleted: false,
      isActive: currentStep === 2,
    },
    {
      num: 3,
      title: t("registerDeed.step3Title"),
      status: t("registerDeed.step3Status"),
      isCompleted: false,
      isActive: currentStep === 3,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 relative">
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                step.isActive
                  ? "bg-white/[0.04] border border-sky-400/30 shadow-[0_0_16px_rgba(56,189,248,0.15)]"
                  : step.isCompleted
                  ? "bg-white/[0.02]"
                  : "opacity-60"
              }`}
            >
              {step.isCompleted ? (
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(86,229,169,0.35)] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              ) : step.isActive ? (
                <div className="w-9 h-9 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center text-sky-300 font-bold text-sm shadow-[0_0_16px_rgba(56,189,248,0.5)] shrink-0">
                  {step.num}
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-slate-400 text-sm font-semibold shrink-0">
                  {step.num}
                </div>
              )}

              <div className="flex flex-col min-w-0">
                <span
                  className={`text-xs sm:text-sm font-semibold truncate ${
                    step.isActive
                      ? "text-sky-300"
                      : step.isCompleted
                      ? "text-white"
                      : "text-slate-300"
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`text-[11px] truncate flex items-center gap-1.5 ${
                    step.isCompleted
                      ? "text-emerald-400 font-medium"
                      : step.isActive
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {step.isCompleted && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                  {step.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
