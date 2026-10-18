"use client";

import * as React from "react";
import { GitCommit, Check, Clock, CloudCheck, Fingerprint } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const SealTimeline = () => {
  const { t } = useLanguage();

  return (
    <Card
      level={1}
      className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.35)] space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <GitCommit className="h-4 w-4 text-sky-400" />
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {t("qr.timelineTitle")}
          </h2>
        </div>
        <span className="text-[11px] font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
          {t("qr.timelineChainId")}
        </span>
      </div>

      {/* Stepper Flow with Glowing Vertical Track */}
      <div className="relative pl-6 space-y-7 before:absolute before:left-3 before:top-2 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:via-sky-400 before:to-white/20">
        {/* Node 1: Deed Registered (Completed) */}
        <div className="relative group">
          <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-white/10 ml-2 space-y-2.5 transition-all group-hover:border-emerald-500/40 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {t("qr.node1Title")}
                </h3>
                <p className="text-xs text-slate-400">
                  {t("qr.node1Office")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="verified" className="text-[10px] px-2 py-0.5">
                  {t("qr.node1Block")}
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  {t("qr.node1Date")}
                </span>
              </div>
            </div>

            {/* Hash Details */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg flex items-center justify-between font-mono text-xs border border-white/5">
              <span className="text-slate-400">{t("qr.node1SealHash")}</span>
              <span className="text-sky-300 font-semibold select-all">
                0x8f3be792c019d45a98bf6829e4a1
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t("qr.node1Desc")}
            </p>
          </div>
        </div>

        {/* Node 2: Mutation Approved / In Review (Active Pending Node) */}
        <div className="relative group">
          <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center shadow-[0_0_14px_rgba(56,189,248,0.7)]">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-sky-400/30 ml-2 space-y-2.5 transition-all group-hover:border-sky-400/50 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {t("qr.node2Title")}
                  </h3>
                  <Badge variant="pending" className="text-[10px] px-2 py-0.5">
                    {t("qr.node2Status")}
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t("qr.node2Office")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="verified" className="text-[10px] px-2 py-0.5">
                  {t("qr.node2Synced")}
                </Badge>
              </div>
            </div>

            {/* Hash Details */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg flex items-center justify-between font-mono text-xs border border-white/5">
              <span className="text-slate-400">{t("qr.node2StageHash")}</span>
              <span className="text-sky-300 font-semibold select-all">
                0x3d7ca94101e9903bce38827ab92f
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t("qr.node2Desc")}
            </p>
          </div>
        </div>
      </div>

      {/* QR Genesis Root Verification Strip */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-sky-500/[0.05] p-3 rounded-xl border border-sky-400/20">
        <div className="flex items-center gap-2 font-mono">
          <Fingerprint className="h-4 w-4 text-sky-400 shrink-0" />
          <span className="text-slate-400">{t("qr.genesisRoot")}</span>
          <span className="text-white font-bold">0x91ae9f82c44e77cd</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <CloudCheck className="h-4 w-4 shrink-0" />
          <span>{t("qr.cloudVerified")}</span>
        </div>
      </div>
    </Card>
  );
};
