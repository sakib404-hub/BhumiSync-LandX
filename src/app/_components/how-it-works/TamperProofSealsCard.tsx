"use client";

import * as React from "react";
import { Fingerprint, ShieldCheck, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const TamperProofSealsCard = () => {
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
              <Fingerprint className="h-5 w-5" />
            </div>
            <Badge variant="verified" className="text-xs">
              {t("hiw.tamperBadge")}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {t("hiw.tamperTitle")}
          </h3>
          <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">
            {t("hiw.tamperDesc")}
          </p>
        </div>

        {/* Micro Hash Chain Timeline Box */}
        <div className="space-y-3 bg-slate-950/60 rounded-xl p-3.5 border border-white/10">
          {/* Node 1 */}
          <div className="flex items-start gap-3 relative pb-2.5 border-l border-sky-400/30 pl-3 ml-2">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-400" />
            <div className="w-full">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white font-mono">
                  {t("hiw.block1Title")}
                </span>
                <span className="text-[10px] text-slate-400">
                  {t("hiw.block1Office")}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-sky-300 bg-white/[0.04] px-2 py-0.5 rounded mt-1 border border-white/5">
                Hash: 0x8f3b...e4a1
              </div>
            </div>
          </div>

          {/* Node 2 */}
          <div className="flex items-start gap-3 relative pb-2.5 border-l border-sky-400/30 pl-3 ml-2">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-400" />
            <div className="w-full">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white font-mono">
                  {t("hiw.block2Title")}
                </span>
                <span className="text-[10px] text-slate-400">
                  {t("hiw.block2Office")}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-sky-300 bg-white/[0.04] px-2 py-0.5 rounded mt-1 border border-white/5">
                Hash: 0x3d7c...b92f
              </div>
            </div>
          </div>

          {/* Node 3: Sealed Root Certificate with QR thumbnail */}
          <div className="flex items-start gap-3 relative pl-3 ml-2">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <div className="w-full flex items-center justify-between gap-3 bg-slate-900/80 p-2.5 rounded-lg border border-emerald-500/30">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-emerald-300 font-mono">
                    {t("hiw.block3Title")}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
                    {t("hiw.block3Status")}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-emerald-400 font-bold">
                  0x91ae...77cd
                </div>
                <div className="text-[10px] text-slate-400">
                  {t("hiw.rootDesc")}
                </div>
              </div>

              {/* QR Seal Thumbnail Graphic */}
              <div className="w-11 h-11 rounded-lg bg-sky-500/15 p-1 flex items-center justify-center border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.25)] shrink-0">
                <QrCode className="h-6 w-6 text-sky-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Proof Status */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/10">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          {t("hiw.zkProof")}
        </span>
        <span className="text-emerald-400 font-bold">{t("hiw.consensus")}</span>
      </div>
    </Card>
  );
};
