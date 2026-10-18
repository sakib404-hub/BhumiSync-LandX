"use client";

import { useState } from "react";
import { Send, RotateCcw, CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const OutboxHealthCard = () => {
  const { t, language } = useLanguage();
  const [isFlushing, setIsFlushing] = useState(false);
  const [flushMessage, setFlushMessage] = useState<string | null>(null);

  const handleFlush = () => {
    setIsFlushing(true);
    setTimeout(() => {
      setIsFlushing(false);
      setFlushMessage(t("admin.queueFlushed"));
      setTimeout(() => setFlushMessage(null), 3500);
    }, 1200);
  };

  return (
    <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Send className="w-5 h-5 text-sky-400" />
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {t("admin.outboxTitle")}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>{t("admin.outboxOperational")}</span>
        </div>
      </div>

      {flushMessage && (
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-400/40 text-emerald-300 text-xs flex items-center justify-between animate-fadeIn">
          <span>{flushMessage}</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      )}

      {/* Counter Metrics 3-Col Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
        {/* Sent Events */}
        <div className="p-3 rounded-xl bg-slate-900/50 border border-white/10">
          <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            {t("admin.sentEvents")}
          </div>
          <div className="text-base sm:text-xl font-bold font-mono text-emerald-400 tabular-nums mt-1">
            {language === "bn" ? "১৪,৮৯২" : "14,892"}
          </div>
          <div className="text-[10px] text-emerald-400/90 mt-0.5 font-medium">
            {t("admin.sentRate")}
          </div>
        </div>

        {/* Failed Retries */}
        <div className="p-3 rounded-xl bg-slate-900/50 border border-white/10">
          <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            {t("admin.failedRetries")}
          </div>
          <div className="text-base sm:text-xl font-bold font-mono text-amber-300 tabular-nums mt-1">
            {language === "bn" ? "৩" : "3"}
          </div>
          <div className="text-[10px] text-amber-300/90 mt-0.5 font-medium">
            {t("admin.retryBackoff")}
          </div>
        </div>

        {/* Dead Letter */}
        <div className="p-3 rounded-xl bg-slate-900/50 border border-white/10">
          <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            {t("admin.deadLetter")}
          </div>
          <div className="text-base sm:text-xl font-bold font-mono text-emerald-400 tabular-nums mt-1">
            {language === "bn" ? "০" : "0"}
          </div>
          <div className="text-[10px] text-emerald-400/90 mt-0.5 font-medium">
            {t("admin.zeroDropped")}
          </div>
        </div>
      </div>

      {/* Relay Telemetry Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-300">
          <span>{t("admin.relaySync")}</span>
          <span className="font-mono text-emerald-400 font-semibold">
            {t("admin.relayHealthy")}
          </span>
        </div>
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-white/10">
          <div className="bg-gradient-to-r from-emerald-400 to-sky-400 h-full rounded-full w-[98%] shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
        </div>
      </div>

      {/* Quick Action Footer */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
        <span className="text-xs text-slate-400 flex items-center gap-1.5">
          <RotateCcw className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: "12s" }} />
          <span>{t("admin.nextFlush")}</span>
        </span>
        <button
          type="button"
          onClick={handleFlush}
          disabled={isFlushing}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-300 text-xs font-semibold shadow-sm transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isFlushing ? "animate-spin" : ""}`} />
          <span>{isFlushing ? t("admin.flushingQueue") : t("admin.btnFlushQueue")}</span>
        </button>
      </div>
    </div>
  );
};
