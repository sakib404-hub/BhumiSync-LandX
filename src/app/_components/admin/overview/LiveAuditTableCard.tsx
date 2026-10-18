"use client";

import { useState } from "react";
import {
  ScrollText,
  Download,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Shield,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AuditLogRow {
  time: string;
  actorCode: string;
  actorName: string;
  action: string;
  actionSub: string;
  entity: string;
  entitySub: string;
  status: "committed" | "notarized" | "frozen" | "flag_raised" | "restraint" | "cleared";
}

export const LiveAuditTableCard = () => {
  const { t, language } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportNotice("audit_trail_log.csv exported successfully");
      setTimeout(() => setExportNotice(null), 3000);
    }, 1000);
  };

  const rows: AuditLogRow[] = [
    {
      time: language === "bn" ? "এইমাত্র" : "Just now",
      actorCode: "ACL-DH-04",
      actorName: language === "bn" ? "এসি ল্যান্ড সাভার" : "AC Land Savar",
      action: language === "bn" ? "নামজারি মঞ্জুর" : "Sanction Mutation",
      actionSub: "MUT-2026-000001",
      entity: "Daag 452/1",
      entitySub: "Khatian 1187 (BS)",
      status: "committed",
    },
    {
      time: language === "bn" ? "৪ মিনিট পূর্বে" : "4m ago",
      actorCode: "SUB-REG-01",
      actorName: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      action: language === "bn" ? "দলিল রেজিস্ট্রি SYN-D-0001" : "Register Deed SYN-D-0001",
      actionSub: "SYN Rahim Uddin → SYN Karim Hossain",
      entity: language === "bn" ? "অংশ: ০.২৫০০ (৪ আনা)" : "Share: 0.2500 (4a)",
      entitySub: "Mouza SYN-Savar",
      status: "notarized",
    },
    {
      time: language === "bn" ? "১৮ মিনিট পূর্বে" : "18m ago",
      actorCode: "BNK-SAV-09",
      actorName: language === "bn" ? "সোনালী ব্যাংক হাব" : "Sonali Bank Hub",
      action: language === "bn" ? "বন্ধক লিয়েন আবেদন" : "Attempt Mortgage Inscription",
      actionSub: "Credit Lien Security Ingestion",
      entity: "Daag 452/1",
      entitySub: "Khatian 1187",
      status: "frozen",
    },
    {
      time: language === "bn" ? "৩২ মিনিট পূর্বে" : "32m ago",
      actorCode: "SYS-SENTINEL",
      actorName: language === "bn" ? "এআই কনসেনসাস ডিমন" : "AI Consensus Daemon",
      action: language === "bn" ? "দ্বৈত এনআইডি সনাক্ত" : "Duplicate NID Ingestion Attempt",
      actionSub: "Collision: SYN-NID-A10021",
      entity: "SYN Rahim Uddin",
      entitySub: "Profile Sync Anomaly",
      status: "flag_raised",
    },
    {
      time: language === "bn" ? "১ ঘণ্টা পূর্বে" : "1h ago",
      actorCode: "CRT-DH-SAV-02",
      actorName: language === "bn" ? "জেলা জজ আদালত" : "District Senior Court",
      action: language === "bn" ? "স্থগিতাদেশ কার্যকর" : "Injunction Stay Order Inscription",
      actionSub: "Title Dispute Litigation",
      entity: "Daag 310/2",
      entitySub: "Khatian 610",
      status: "restraint",
    },
    {
      time: language === "bn" ? "২ ঘণ্টা পূর্বে" : "2h ago",
      actorCode: "REG-OFFICER-03",
      actorName: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      action: language === "bn" ? "বায়োমেট্রিক অমিল নিষ্পত্তি" : "Biometric Verification Overlap",
      actionSub: "Live Fingerprint Auth Scan",
      entity: "Citizen B20045",
      entitySub: "SYN Karim Hossain",
      status: "cleared",
    },
  ];

  const getStatusBadge = (status: AuditLogRow["status"]) => {
    switch (status) {
      case "committed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            {t("admin.statusCommitted")}
          </span>
        );
      case "notarized":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            {t("admin.statusNotarized")}
          </span>
        );
      case "frozen":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            {t("admin.statusFrozen")}
          </span>
        );
      case "flag_raised":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/15 border border-rose-500/30 text-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_6px_#f43f5e]" />
            {t("admin.statusFlagRaised")}
          </span>
        );
      case "restraint":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/15 border border-rose-500/30 text-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            {t("admin.statusRestraint")}
          </span>
        );
      case "cleared":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            {t("admin.statusCleared")}
          </span>
        );
    }
  };

  return (
    <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 gap-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <ScrollText className="w-5 h-5 text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t("admin.auditTitle")}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("admin.auditDesc")}
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          {exportNotice && (
            <span className="text-xs text-emerald-400 font-medium">
              {exportNotice}
            </span>
          )}
          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/15 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" />
            <span>{isExporting ? "Exporting..." : t("admin.exportCsv")}</span>
          </button>
        </div>
      </div>

      {/* Table Container with Overflow Protection */}
      <div className="overflow-x-auto mt-4 -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="bg-slate-900/60 border-b border-white/10 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">{t("admin.colTime")}</th>
              <th className="py-3 px-3">{t("admin.colActor")}</th>
              <th className="py-3 px-3">{t("admin.colAction")}</th>
              <th className="py-3 px-3">{t("admin.colEntity")}</th>
              <th className="py-3 px-3 text-right">{t("admin.colStatus")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/[0.04] transition-colors"
              >
                {/* Time */}
                <td className="py-3.5 px-3 text-slate-400 font-mono text-xs tabular-nums whitespace-nowrap">
                  {row.time}
                </td>

                {/* Actor */}
                <td className="py-3.5 px-3">
                  <span className="font-semibold text-sky-300 block font-mono">
                    {row.actorCode}
                  </span>
                  <span className="text-[11px] text-slate-400 block truncate">
                    {row.actorName}
                  </span>
                </td>

                {/* Action */}
                <td className="py-3.5 px-3">
                  <span className="font-semibold text-white block">
                    {row.action}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    {row.actionSub}
                  </span>
                </td>

                {/* Entity / Parcel */}
                <td className="py-3.5 px-3">
                  <span className="font-semibold text-slate-200 block font-mono">
                    {row.entity}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {row.entitySub}
                  </span>
                </td>

                {/* Status */}
                <td className="py-3.5 px-3 text-right whitespace-nowrap">
                  {getStatusBadge(row.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer with Pagination */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <span>{t("admin.showingRecords")}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40 text-xs font-medium border border-white/10 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>{t("admin.prev")}</span>
          </button>
          <span className="text-white font-mono px-2">{page} / 208</span>
          <button
            type="button"
            onClick={() => setPage((p) => p + 1)}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors"
          >
            <span>{t("admin.next")}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
