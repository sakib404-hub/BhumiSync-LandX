"use client";

import * as React from "react";
import { ShieldCheck, Copy, Check, Clock, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const QrVerdictCard = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText("0x8f3be792c019d45a98bf6829e4a1");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      level={2}
      className="p-6 sm:p-8 rounded-2xl relative overflow-hidden backdrop-blur-2xl bg-white/[0.05] border border-white/[0.22] shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_24px_rgba(56,189,248,0.12)] space-y-6"
    >
      {/* Ambient Internal Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Verdict Row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
          {/* Glowing Emerald Badge Container */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(16,185,129,0.35)]">
            <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400" />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t("qr.verdictTitle")}
              </h1>
              <Badge variant="verified" className="text-xs px-2.5 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                {t("qr.verdictPass")}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/80 max-w-2xl leading-relaxed">
              {t("qr.verdictDesc")}
            </p>
          </div>
        </div>

        {/* Quick Proof Action */}
        <div className="flex items-center gap-3 self-stretch lg:self-auto justify-end shrink-0">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
              {t("qr.protocolIntegrity")}
            </p>
            <p className="text-xs font-mono font-bold text-emerald-400">
              {t("qr.consensusPoa")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyHash}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-medium transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-inner"
            title="Copy SHA-256 Ledger Hash"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">{t("qr.hashCopied")}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-slate-300" />
                <span>{t("qr.copyHash")}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 5-Column Metadata Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1 relative z-10 text-left">
        {/* 1. Deed Identifier */}
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("qr.metaDeed")}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold font-mono text-white">SYN-D-0001</span>
            <span className="text-[10px] font-bold text-sky-400 bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-400/30">
              {t("qr.metaRoot")}
            </span>
          </div>
        </div>

        {/* 2. Registration Date */}
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("qr.metaDate")}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
            <Clock className="h-3.5 w-3.5 text-sky-400 shrink-0" />
            <span>{t("qr.metaDateVal")}</span>
          </div>
        </div>

        {/* 3. Registry Escrow */}
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("qr.metaEscrow")}
          </span>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/35">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              {t("qr.metaEscrowVal")}
            </span>
          </div>
        </div>

        {/* 4. Mutation Status */}
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("qr.metaMutation")}
          </span>
          <div className="truncate">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/35 truncate max-w-full">
              <Layers className="h-3 w-3 shrink-0" />
              <span className="truncate">{t("qr.metaMutationVal")}</span>
            </span>
          </div>
        </div>

        {/* 5. Cadastral Index */}
        <div className="bg-slate-950/50 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("qr.metaCadastral")}
          </span>
          <p className="text-xs font-medium text-slate-200 truncate">
            {t("qr.metaCadastralVal")}
          </p>
        </div>
      </div>
    </Card>
  );
};
