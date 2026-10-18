"use client";

import * as React from "react";
import { Users, Shield, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const PartiesEncumbrance = () => {
  const { t } = useLanguage();

  const encumbrances = [
    {
      label: t("qr.bankMortgage"),
      status: t("qr.statusNone"),
      badgeVariant: "verified" as const,
    },
    {
      label: t("qr.civilInjunction"),
      status: t("qr.statusNone"),
      badgeVariant: "verified" as const,
    },
    {
      label: t("qr.acquisitionGazette"),
      status: t("qr.statusNone"),
      badgeVariant: "verified" as const,
    },
    {
      label: t("qr.escrowSecurity"),
      status: t("qr.statusActive"),
      badgeVariant: "pending" as const,
    },
  ];

  return (
    <Card
      level={1}
      className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.35)] space-y-5 text-left"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <Users className="h-4 w-4 text-sky-400" />
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {t("qr.partiesTitle")}
          </h2>
        </div>
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
      </div>

      {/* Masked Current Parties */}
      <div className="space-y-3">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
          {t("qr.maskedTitle")}
        </span>

        {/* Seller Profile */}
        <div className="bg-slate-950/50 p-3.5 rounded-xl border border-white/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold bg-white/10 px-2 py-0.5 rounded text-slate-300">
              {t("qr.sellerRole")}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {t("qr.sellerNid")}
            </span>
          </div>
          <p className="text-sm font-semibold text-white">
            {t("qr.sellerName")}
          </p>
          <p className="text-xs text-slate-400">
            {t("qr.sellerShare")}
          </p>
        </div>

        {/* Buyer Profile */}
        <div className="bg-slate-950/50 p-3.5 rounded-xl border border-white/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-400/30">
              {t("qr.buyerRole")}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {t("qr.buyerNid")}
            </span>
          </div>
          <p className="text-sm font-semibold text-white">
            {t("qr.buyerName")}
          </p>
          <p className="text-xs text-slate-400">
            {t("qr.buyerShare")}
          </p>
        </div>
      </div>

      {/* Encumbrance Matrix Chips */}
      <div className="pt-3 space-y-2.5 border-t border-white/10">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
          {t("qr.encumbranceTitle")}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {encumbrances.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/40 p-2.5 rounded-lg border border-white/5 flex items-center justify-between"
            >
              <span className="text-xs text-slate-300">{item.label}</span>
              <Badge variant={item.badgeVariant} className="text-[10px] px-2 py-0.5">
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Cadastral Geo Summary Box */}
      <div className="p-3 bg-slate-900/60 rounded-xl border border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin className="h-3.5 w-3.5 text-sky-400" />
          <span>{t("qr.coordLabel")}</span>
        </div>
        <span className="font-mono text-sky-300 font-semibold text-[11px]">
          {t("qr.coordVal")}
        </span>
      </div>
    </Card>
  );
};
