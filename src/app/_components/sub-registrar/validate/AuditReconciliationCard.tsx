"use client";

import { useState } from "react";
import {
  FileSpreadsheet,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  Send,
  Lock,
  Download,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const AuditReconciliationCard = () => {
  const { t, language } = useLanguage();

  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      setTimeout(() => setExported(false), 3000);
    }, 1200);
  };

  const handleRequestHearing = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setIsDispatching(false);
      setDispatched(true);
      setTimeout(() => setDispatched(false), 3000);
    }, 1200);
  };

  const auditRows = [
    {
      label: t("validateDeed.rowLocation"),
      deed: "Mouza SYN-Savar",
      record: "Mouza SYN-Savar",
      status: "match",
      statusText: t("validateDeed.statusMatch"),
    },
    {
      label: t("validateDeed.rowDaag"),
      deed: "Daag 452/1",
      record: "Daag 452/1",
      status: "match",
      statusText: t("validateDeed.statusMatch"),
    },
    {
      label: t("validateDeed.rowKhatian"),
      deed: "1187 (BS)",
      record: "1187 (BS)",
      status: "match",
      statusText: t("validateDeed.statusMatch"),
    },
    {
      label: t("validateDeed.rowSellerNid"),
      deed: "SYN-NID-A10021",
      record: "SYN-NID-A10021",
      status: "match",
      statusText: t("validateDeed.statusMatch"),
    },
    {
      label: t("validateDeed.rowSellerName"),
      deed: "SYN Rahim Uddin",
      record: t("validateDeed.rowSellerNameVal"),
      note: t("validateDeed.rowSellerNameNote"),
      status: "warning",
      statusText: t("validateDeed.statusWarning"),
    },
    {
      label: t("validateDeed.rowShare"),
      deed: "0.2500 (4 anna)",
      record: t("validateDeed.rowShareAvailable"),
      note: t("validateDeed.rowShareEncumbered"),
      status: "critical",
      statusText: t("validateDeed.statusCritical"),
    },
    {
      label: t("validateDeed.rowArea"),
      deed: "12.5 Decimals",
      record: "12.5 Decimals",
      status: "match",
      statusText: t("validateDeed.statusMatch"),
    },
    {
      label: t("validateDeed.rowStatus"),
      deed: t("validateDeed.rowStatusDeed"),
      record: t("validateDeed.rowStatusVal"),
      status: "clear",
      statusText: t("validateDeed.statusClear"),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-5 sm:p-6 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-5"
    >
      {/* Header & Status Cluster */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
            <AlertOctagon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t("validateDeed.resultTitle")}
            </h2>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span>Target:</span>
              <span className="font-mono text-sky-400 font-semibold">
                {t("validateDeed.targetDeed")}
              </span>
            </div>
          </div>
        </div>

        {/* System State Pills Cluster */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 border border-white/10 p-1 rounded-full">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {t("validateDeed.passCount")}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
            {t("validateDeed.warningCount")}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/40">
            {t("validateDeed.blockCount")}
          </span>
        </div>
      </div>

      {/* Prominent Verdict Banner */}
      <div className="p-4 rounded-xl bg-red-500/15 border-2 border-red-500/40 shadow-[0_0_24px_rgba(239,68,68,0.22)] relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(239,68,68,0.6)]">
              <XCircle className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-red-400 flex items-center gap-2">
                <span>{t("validateDeed.verdictTitle")}</span>
                <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                {t("validateDeed.verdictDesc")}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-red-500 text-slate-950 uppercase shadow-md">
            {t("validateDeed.verdictBadge")}
          </span>
        </div>
      </div>

      {/* Comparison Table in Frosted Glass */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-white/[0.04] border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider">
              <th className="py-2.5 px-3 font-semibold">{t("validateDeed.thParam")}</th>
              <th className="py-2.5 px-3 font-semibold">{t("validateDeed.thDeed")}</th>
              <th className="py-2.5 px-3 font-semibold">{t("validateDeed.thRecord")}</th>
              <th className="py-2.5 px-3 font-semibold text-center w-24">
                {t("validateDeed.thStatus")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {auditRows.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  row.status === "critical"
                    ? "bg-red-500/15 border-l-2 border-l-red-500 hover:bg-red-500/20"
                    : row.status === "warning"
                    ? "bg-amber-500/10 hover:bg-amber-500/15"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                <td
                  className={`py-2.5 px-3 font-medium ${
                    row.status === "critical"
                      ? "text-red-300 font-bold"
                      : row.status === "warning"
                      ? "text-amber-200"
                      : "text-slate-300"
                  }`}
                >
                  {row.label}
                </td>
                <td
                  className={`py-2.5 px-3 font-mono ${
                    row.status === "critical"
                      ? "text-red-300 font-bold"
                      : "text-white"
                  }`}
                >
                  {row.deed}
                </td>
                <td className="py-2.5 px-3">
                  <div
                    className={`font-mono ${
                      row.status === "critical"
                        ? "text-red-300 font-bold"
                        : row.status === "warning"
                        ? "text-amber-200 font-semibold"
                        : "text-slate-200"
                    }`}
                  >
                    {row.record}
                  </div>
                  {row.note && (
                    <div
                      className={`text-[11px] mt-0.5 leading-tight ${
                        row.status === "critical"
                          ? "text-red-400 font-medium"
                          : "text-amber-300/80 italic"
                      }`}
                    >
                      {row.note}
                    </div>
                  )}
                </td>
                <td className="py-2.5 px-3 text-center">
                  {row.status === "match" || row.status === "clear" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {row.statusText}
                    </span>
                  ) : row.status === "warning" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                      {row.statusText}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-slate-950 shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                      <XCircle className="w-3 h-3 text-slate-950" />
                      {row.statusText}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Explanatory Alert Box for Critical Share Error */}
      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
        <AlertOctagon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-red-400">
            {t("validateDeed.conflictTitle")}
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {t("validateDeed.conflictDesc")}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Secondary Resolution Actions */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {isExporting ? (
              <>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>{language === "bn" ? "প্রস্তুত হচ্ছে..." : "Exporting..."}</span>
              </>
            ) : exported ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === "bn" ? "রিপোর্ট প্রস্তুত!" : "Report Ready"}</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>{t("validateDeed.exportReport")}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleRequestHearing}
            disabled={isDispatching}
            className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {isDispatching ? (
              <>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>{language === "bn" ? "প্রেরণ হচ্ছে..." : "Dispatching..."}</span>
              </>
            ) : dispatched ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === "bn" ? "আবেদন প্রেরিত!" : "Hearing Requested"}</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>{t("validateDeed.requestHearing")}</span>
              </>
            )}
          </button>
        </div>

        {/* Primary Gated CTA (Disabled on BLOCK State with Tooltip) */}
        <div
          className="w-full sm:w-auto relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button
            type="button"
            disabled
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 cursor-not-allowed flex items-center justify-center gap-2 text-xs font-bold transition-all"
          >
            <Lock className="w-4 h-4 text-slate-500" />
            <span>{t("validateDeed.btnContinue")}</span>
          </button>

          {/* Tooltip Overlay */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 w-64 p-2.5 rounded-xl bg-slate-900 border border-white/20 text-white text-[11px] shadow-2xl z-50 text-center pointer-events-none">
              <span className="text-red-400 font-bold block mb-0.5">
                {language === "bn" ? "নিবন্ধন প্রতিহত" : "Registration Blocked"}
              </span>
              <span>{t("validateDeed.tooltipBlocked")}</span>
              <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-slate-900" />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};
