"use client";

import * as React from "react";
import { ShieldAlert, AlertTriangle, ToggleLeft, ToggleRight, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export const FraudDiagnosticCard = () => {
  const { t } = useLanguage();
  const [isSimulatedTampered, setIsSimulatedTampered] = React.useState(false);

  return (
    <Card
      level={1}
      className={`p-6 sm:p-7 rounded-2xl relative overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        isSimulatedTampered
          ? "bg-rose-950/20 border-rose-500/40 shadow-[0_0_30px_rgba(244,63,94,0.25)]"
          : "bg-white/[0.04] border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      }`}
    >
      {/* Ambient Internal Glow */}
      <div
        className={`absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-300 ${
          isSimulatedTampered ? "bg-rose-500/20" : "bg-sky-500/10"
        }`}
      />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10 text-left">
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          {/* Status Icon */}
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
              isSimulatedTampered
                ? "bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_24px_rgba(244,63,94,0.4)]"
                : "bg-sky-500/10 border-sky-400/30 text-sky-400"
            }`}
          >
            {isSimulatedTampered ? (
              <ShieldAlert className="h-7 w-7 sm:h-8 sm:w-8" />
            ) : (
              <AlertTriangle className="h-7 w-7 sm:h-8 sm:w-8" />
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded-full border ${
                  isSimulatedTampered
                    ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                    : "bg-sky-500/15 border-sky-400/30 text-sky-300"
                }`}
              >
                {t("qr.diagSimulation")}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {t("qr.diagTitle")}
              </h2>
              {isSimulatedTampered && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse">
                  {t("qr.diagTampered")}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 max-w-3xl leading-relaxed">
              {isSimulatedTampered ? (
                <>
                  {t("qr.diagDesc")}
                </>
              ) : (
                "Toggle the security simulation below to test real-time double-spend prevention and cryptographic cryptographic checksum invalidation."
              )}
            </p>
          </div>
        </div>

        {/* Action Toggle / Diagnostic Controls */}
        <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto justify-end">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsSimulatedTampered(!isSimulatedTampered)}
            className={`text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
              isSimulatedTampered
                ? "border-rose-500/50 text-rose-300 bg-rose-950/40 hover:bg-rose-900/40"
                : "border-sky-400/30 text-sky-300 bg-slate-900/60 hover:bg-slate-800/60"
            }`}
          >
            {isSimulatedTampered ? (
              <>
                <ToggleRight className="h-4 w-4 text-rose-400" />
                <span>{t("qr.simToggleValid")}</span>
              </>
            ) : (
              <>
                <ToggleLeft className="h-4 w-4 text-sky-400" />
                <span>{t("qr.simToggleTampered")}</span>
              </>
            )}
          </Button>

          {isSimulatedTampered && (
            <span className="px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-400 font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_16px_rgba(244,63,94,0.35)]">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
              {t("qr.diagBlocked")}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};
