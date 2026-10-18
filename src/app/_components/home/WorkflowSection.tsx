"use client";

import { motion } from "framer-motion";
import { FileCheck, Lock, Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const WorkflowSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      stepNumber: t("workflow.step1Number"),
      title: t("workflow.step1Title"),
      description: t("workflow.step1Desc"),
      badge: t("workflow.step1Badge"),
      badgeVariant: "verified" as const,
      icon: <FileCheck className="h-5 w-5 text-sky-400" />,
      barColor: "bg-sky-400",
    },
    {
      stepNumber: t("workflow.step2Number"),
      title: t("workflow.step2Title"),
      description: t("workflow.step2Desc"),
      badge: t("workflow.step2Badge"),
      badgeVariant: "verified" as const,
      icon: <Lock className="h-5 w-5 text-sky-400" />,
      barColor: "bg-sky-400",
    },
    {
      stepNumber: t("workflow.step3Number"),
      title: t("workflow.step3Title"),
      description: t("workflow.step3Desc"),
      badge: t("workflow.step3Badge"),
      badgeVariant: "verified" as const,
      icon: <Landmark className="h-5 w-5 text-emerald-400" />,
      barColor: "bg-[#10b981]",
    },
  ];

  return (
    <section className="space-y-6 sm:space-y-10" id="how-it-works">
      <div className="text-center space-y-2 px-1">
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
          {t("workflow.tag")}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          {t("workflow.title")}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300/80 max-w-xl mx-auto leading-relaxed">
          {t("workflow.description")}
        </p>
      </div>

      {/* 3-Step Grid with Framer Motion Stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative"
      >
        {steps.map((step) => (
          <motion.div
            key={step.stepNumber}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            className="h-full"
          >
            <Card
              level={1}
              interactive
              className="rounded-2xl p-4 sm:p-6 space-y-3.5 sm:space-y-4 relative flex flex-col justify-between h-full"
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 shrink-0">
                    {step.icon}
                  </div>
                  <Badge variant={step.badgeVariant} className="text-xs">{step.badge}</Badge>
                </div>

                <div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-4">
                <div className={`h-full w-full ${step.barColor}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

