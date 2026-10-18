"use client";

import { motion } from "framer-motion";
import { GitFork, Check, Clock, Hourglass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AcLandMutationPipeline = () => {
  const { t } = useLanguage();

  const stages = [
    {
      id: 1,
      badge: t("deedDossier.stage1Title").split(". ")[0] ? `Stage 1` : "Stage 1",
      title: t("deedDossier.stage1Title"),
      location: t("deedDossier.stage1Sub"),
      time: t("deedDossier.stage1Time"),
      status: "completed",
    },
    {
      id: 2,
      badge: `Stage 2`,
      title: t("deedDossier.stage2Title"),
      location: t("deedDossier.stage2Sub"),
      time: t("deedDossier.stage2Time"),
      status: "completed",
    },
    {
      id: 3,
      badge: t("deedDossier.stage3Active"),
      title: t("deedDossier.stage3Title"),
      location: t("deedDossier.stage3Sub"),
      note: t("deedDossier.stage3Note"),
      status: "active",
    },
    {
      id: 4,
      badge: `Stage 4`,
      title: t("deedDossier.stage4Title"),
      location: t("deedDossier.stage4Sub"),
      note: t("deedDossier.stage4Note"),
      status: "pending",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5 sm:p-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <GitFork className="w-4 h-4" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {t("deedDossier.pipelineTitle")}
          </h2>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/30">
            {t("deedDossier.realtimeRelay")}
          </span>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          {t("deedDossier.caseRef")}
        </span>
      </div>

      {/* 4 Stages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage) => {
          const isCompleted = stage.status === "completed";
          const isActive = stage.status === "active";
          const isPending = stage.status === "pending";

          return (
            <div
              key={stage.id}
              className={`relative p-4 rounded-xl flex flex-col justify-between transition-all ${
                isActive
                  ? "bg-sky-500/10 border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                  : isCompleted
                  ? "bg-slate-900/60 border border-emerald-500/30"
                  : "bg-slate-950/40 border border-white/10 opacity-75"
              }`}
            >
              {/* Stage Top Badge & Status Icon */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    isActive
                      ? "text-sky-300"
                      : isCompleted
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  {isActive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                    </span>
                  )}
                  {stage.badge}
                </span>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isCompleted
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                      : isActive
                      ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                      : "bg-slate-800 text-slate-500 border border-white/10"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : isActive ? (
                    <Clock className="w-3.5 h-3.5" />
                  ) : (
                    <Hourglass className="w-3 h-3" />
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {stage.title}
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isActive ? "text-sky-300 font-medium" : "text-slate-400"
                  }`}
                >
                  {stage.location}
                </p>
              </div>

              {/* Bottom Note or Timestamp */}
              <div className="pt-3 mt-3 border-t border-white/5 text-[11px] font-mono">
                {stage.time ? (
                  <span className="text-emerald-400">{stage.time}</span>
                ) : (
                  <span className={isActive ? "text-slate-300" : "text-slate-500"}>
                    {stage.note}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
