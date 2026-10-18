"use client";

import * as React from "react";
import { ShieldCheck, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const MismatchCheckerCard = () => {
  const { t } = useLanguage();

  const checklist = [
    {
      title: t("hiw.chkKhatian"),
      sub: null,
      status: t("hiw.pass"),
      statusColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    },
    {
      title: t("hiw.chkInheritance"),
      sub: null,
      status: t("hiw.pass"),
      statusColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    },
    {
      title: t("hiw.chkBoundary"),
      sub: t("hiw.chkBoundarySub"),
      status: t("hiw.warning"),
      statusColor: "bg-amber-500/15 border-amber-500/30 text-amber-400",
    },
    {
      title: t("hiw.chkMortgage"),
      sub: t("hiw.chkMortgageSub"),
      status: t("hiw.pass"),
      statusColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    },
    {
      title: t("hiw.chkCourt"),
      sub: t("hiw.chkCourtSub"),
      status: t("hiw.block"),
      statusColor: "bg-rose-500/15 border-rose-500/30 text-rose-400",
    },
  ];

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
              <ShieldCheck className="h-5 w-5" />
            </div>
            <Badge variant="verified" className="text-xs">
              {t("hiw.mismatchEngine")}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {t("hiw.mismatchTitle")}
          </h3>
          <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">
            {t("hiw.mismatchDesc")}
          </p>
        </div>

        {/* Live Verification Checklist Box */}
        <div className="space-y-2 bg-slate-950/60 rounded-xl p-3 border border-white/10">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between py-1.5 ${
                idx < checklist.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-200">
                  {item.title}
                </span>
                {item.sub && (
                  <span className="text-[10px] text-amber-300/80 font-mono">
                    {item.sub}
                  </span>
                )}
              </div>
              <span
                className={`px-2 py-0.5 rounded-full border text-[10px] font-bold font-mono tracking-wider ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Latency & Hash Info */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/10">
        <span className="flex items-center gap-1.5">
          <RefreshCw className="h-3 w-3 text-sky-400 animate-spin" />
          {t("hiw.latency")}
        </span>
        <span className="text-emerald-400 font-bold">{t("hiw.auditHash")}</span>
      </div>
    </Card>
  );
};
