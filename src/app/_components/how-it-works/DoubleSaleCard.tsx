"use client";

import * as React from "react";
import { Lock, LockKeyhole, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const DoubleSaleCard = () => {
  const { t } = useLanguage();

  return (
    <Card
      level={1}
      className="p-6 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.35)] space-y-5"
    >
      <div className="space-y-4">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400">
              <Lock className="h-5 w-5" />
            </div>
            <Badge variant="pending" className="text-xs">
              {t("hiw.doubleSaleBadge")}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {t("hiw.doubleSaleTitle")}
          </h3>
          <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">
            {t("hiw.doubleSaleDesc")}
          </p>
        </div>

        {/* Segmented Share Allocation Visualization */}
        <div className="space-y-3 bg-slate-950/60 rounded-xl p-3.5 border border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {t("hiw.totalSeller")}
            </span>
            <span className="font-mono font-bold text-white">
              {t("hiw.totalSellerVal")}
            </span>
          </div>

          {/* Segmented Bar */}
          <div className="w-full h-8 rounded-lg overflow-hidden flex border border-white/15 p-0.5 bg-slate-900">
            <div className="h-full w-1/2 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-l flex items-center justify-center text-[10px] font-bold text-slate-950 tracking-tight shadow-inner">
              {t("hiw.lockedShare")}
            </div>
            <div className="h-full w-1/2 bg-white/[0.06] rounded-r flex items-center justify-center text-[10px] font-medium text-slate-300 tracking-tight">
              {t("hiw.remainingShare")}
            </div>
          </div>

          {/* 2-Column Party Details */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-left">
            <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/10 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                {t("hiw.buyerAlloc")}
              </span>
              <p className="text-xs font-bold text-sky-300 truncate">
                {t("hiw.buyerName")}
              </p>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                {t("hiw.buyerNid")}
              </span>
            </div>

            <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/10 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                {t("hiw.sellerRetained")}
              </span>
              <p className="text-xs font-bold text-slate-200 truncate">
                {t("hiw.sellerName")}
              </p>
              <span className="text-[10px] font-mono text-slate-400 block truncate">
                {t("hiw.sellerNid")}
              </span>
            </div>
          </div>

          {/* Status Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[10px] font-semibold font-mono flex items-center gap-1.5">
              <LockKeyhole className="h-3 w-3" />
              {t("hiw.lockStatusChip1")}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1.5">
              <CheckCircle className="h-3 w-3" />
              {t("hiw.lockStatusChip2")}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Deed Ref */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/10">
        <span>{t("hiw.deedRef")}</span>
        <span className="text-sky-400 font-bold">SYN-D-0001</span>
      </div>
    </Card>
  );
};
