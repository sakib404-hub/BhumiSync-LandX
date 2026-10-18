"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Landmark,
  Scale,
  Building2,
  Clock,
  Check,
  FileCheck,
} from "lucide-react";

export const EncumbranceSideCards = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      id: "mortgage",
      titleKey: "plot.cardMortgage",
      subKey: "plot.cardMortgageSub",
      descKey: "plot.cardMortgageDesc",
      icon: Landmark,
      status: "none",
      highlight: false,
    },
    {
      id: "injunction",
      titleKey: "plot.cardInjunction",
      subKey: "plot.cardInjunctionSub",
      descKey: "plot.cardInjunctionDesc",
      icon: Scale,
      status: "none",
      highlight: false,
    },
    {
      id: "acquisition",
      titleKey: "plot.cardAcquisition",
      subKey: "plot.cardAcquisitionSub",
      descKey: "plot.cardAcquisitionDesc",
      icon: Building2,
      status: "none",
      highlight: false,
    },
    {
      id: "mutation",
      titleKey: "plot.cardMutation",
      subKey: "plot.cardMutationSub",
      descKey: "plot.cardMutationDesc",
      icon: Clock,
      status: "yes",
      highlight: true,
    },
  ];

  return (
    <aside className="lg:col-span-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-sky-400" />
          <span>{t("plot.encumbranceTitle")}</span>
        </h3>
        <span className="text-xs font-mono text-slate-400">
          {t("plot.encumbranceChecks")}
        </span>
      </div>

      {/* 4 Stacked Mini Cards */}
      <div className="space-y-3">
        {cards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -2, transition: { duration: 0.2 } }
              }
              className={`rounded-2xl p-4 sm:p-5 space-y-2.5 transition-all backdrop-blur-xl ${
                card.highlight
                  ? "bg-slate-900/80 border border-sky-400/40 hover:border-sky-400/70 shadow-[0_8px_32px_rgba(56,189,248,0.15)] relative overflow-hidden"
                  : "bg-slate-900/60 border border-white/10 hover:border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      card.highlight
                        ? "bg-sky-500/20 border-sky-400/40 text-sky-300"
                        : "bg-white/5 border-white/10 text-sky-400"
                    }`}
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                      {t(card.titleKey)}
                    </h4>
                    <span
                      className={`text-[11px] block ${
                        card.highlight
                          ? "text-sky-300 font-mono font-medium"
                          : "text-slate-400"
                      }`}
                    >
                      {t(card.subKey)}
                    </span>
                  </div>
                </div>

                {/* Status Chip */}
                {card.status === "none" ? (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1 shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>{t("plot.statusNone")}</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/15 border border-sky-400/40 text-sky-300 flex items-center gap-1.5 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                    <span>{t("plot.statusYes")}</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 pl-12 leading-relaxed">
                {t(card.descKey)}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Side Audit Micro-Banner */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl p-3 bg-white/[0.04] border border-white/10 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <p className="text-[11px] leading-tight text-slate-300">
          {t("plot.sideMicroBanner")}
        </p>
      </motion.div>
    </aside>
  );
};
