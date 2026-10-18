"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Gavel,
  ShieldCheck,
  CheckCircle2,
  Info,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface MutationCaseItem {
  caseNo: string;
  timeTag: string;
  timeIcon?: "schedule" | "alert" | "gavel";
  deedNo: string;
  deedOffice: string;
  plotTitle: string;
  khatian: string;
  share: string;
  shareDetail: string;
  parties: string;
  auditFlag: string;
  auditType: "warning" | "alert" | "clear" | "critical";
  age: string;
  ageSub: string;
  ageClass?: string;
  statusText: string;
  statusType: "new" | "review" | "stale";
  isStale: boolean;
  isTarget?: boolean;
}

interface QueueTableProps {
  filter: string;
  searchQuery: string;
  sortBy: string;
}

export const QueueTable = ({
  filter,
  searchQuery,
  sortBy,
}: QueueTableProps) => {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const initialCases: MutationCaseItem[] = [
    {
      caseNo: "MUT-2026-000001",
      timeTag: language === "bn" ? "আজ, ১১:৪৫ পূর্বাহ্ন" : "Today, 11:45 AM",
      timeIcon: "schedule",
      deedNo: "Deed SYN-D-0001",
      deedOffice: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      plotTitle: "Mouza SYN-Savar • Daag 452/1",
      khatian: "Khatian 1187 (BS)",
      share: "0.2500",
      shareDetail: language === "bn" ? "(৪ আনা)" : "(4 anna)",
      parties: "SYN Rahim → SYN Karim",
      auditFlag: language === "bn" ? "১টি সামান্য নামের অমিল (নিষ্পন্ন)" : "1 Minor Name Variance (Cleared)",
      auditType: "warning",
      age: language === "bn" ? "১ দিন" : "1 day",
      ageSub: language === "bn" ? "নতুন প্রেরণ" : "Fresh Dispatch",
      ageClass: "text-emerald-400",
      statusText: language === "bn" ? "নতুন / কানুনগো পর্যালোচনার অপেক্ষায়" : "New / Pending Kanungo Review",
      statusType: "new",
      isStale: false,
      isTarget: true,
    },
    {
      caseNo: "MUT-2026-000004",
      timeTag: language === "bn" ? "স্থগিত কেস সতর্কতা" : "Stale Case Alert",
      timeIcon: "alert",
      deedNo: "Deed SYN-D-8894",
      deedOffice: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      plotTitle: "Mouza SYN-Savar • Daag 312/4",
      khatian: "Khatian 610 (CS)",
      share: "0.5000",
      shareDetail: language === "bn" ? "(৮ আনা)" : "(8 anna)",
      parties: language === "bn" ? "সাধারণ হস্তান্তর" : "Standard Conveyance",
      auditFlag: language === "bn" ? "সীমানা ওভারল্যাপ দাবি" : "Boundary Overlap Claimed",
      auditType: "warning",
      age: language === "bn" ? "৯ দিন" : "9 days",
      ageSub: language === "bn" ? "এসএলএ লঙ্ঘন" : "SLA Breached",
      ageClass: "text-amber-400 font-medium",
      statusText: language === "bn" ? "স্থগিত / মাঠ জরিপে বিলম্ব" : "Stale / Field Survey Delayed",
      statusType: "stale",
      isStale: true,
      isTarget: false,
    },
    {
      caseNo: "MUT-2026-000002",
      timeTag: language === "bn" ? "লেজারে ৩ দিন" : "3 days in ledger",
      timeIcon: "schedule",
      deedNo: "Deed SYN-D-0002",
      deedOffice: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      plotTitle: "Mouza SYN-Savar • Daag 480/2",
      khatian: "Khatian 942 (BS)",
      share: "0.1250",
      shareDetail: language === "bn" ? "(২ আনা)" : "(2 anna)",
      parties: language === "bn" ? "ওয়ারিশান অংশ" : "Inheritance Portion",
      auditFlag: language === "bn" ? "কোনো অমিল নেই" : "Zero Mismatches",
      auditType: "clear",
      age: language === "bn" ? "৩ দিন" : "3 days",
      ageSub: language === "bn" ? "এসএলএ সীমার মধ্যে" : "Within SLA",
      statusText: language === "bn" ? "পর্যালোচনাধীন (কানুনগো রিপোর্ট দাখিল)" : "Under Review (Kanungo Report Filed)",
      statusType: "review",
      isStale: false,
      isTarget: false,
    },
    {
      caseNo: "MUT-2026-000008",
      timeTag: language === "bn" ? "শুনানি জরুরি" : "Hearing Critical",
      timeIcon: "gavel",
      deedNo: "Deed SYN-D-8712",
      deedOffice: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      plotTitle: "Mouza SYN-Savar • Daag 119/A",
      khatian: "Khatian 334 (RS)",
      share: "0.3333",
      shareDetail: language === "bn" ? "(৫.৩৩ আনা)" : "(5.33 anna)",
      parties: language === "bn" ? "একাধিক ওয়ারিশ" : "Heir Multi-party",
      auditFlag: language === "bn" ? "খতিয়ান ওয়ারিশ আপত্তি" : "Khatian Heir Contest",
      auditType: "critical",
      age: language === "bn" ? "১২ দিন" : "12 days",
      ageSub: language === "bn" ? "জরুরি" : "Urgent",
      ageClass: "text-rose-400 font-semibold",
      statusText: language === "bn" ? "স্থগিত / শুনানি মূলতবি" : "Stale / Hearing Adjourned",
      statusType: "stale",
      isStale: true,
      isTarget: false,
    },
    {
      caseNo: "MUT-2026-000003",
      timeTag: language === "bn" ? "লেজারে ২ দিন" : "2 days in ledger",
      timeIcon: "schedule",
      deedNo: "Deed SYN-D-0003",
      deedOffice: language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry",
      plotTitle: "Mouza SYN-Savar • Daag 501/2",
      khatian: "Khatian 102 (BS)",
      share: "0.2500",
      shareDetail: language === "bn" ? "(৪ আনা)" : "(4 anna)",
      parties: language === "bn" ? "নিষ্কণ্টক স্বত্ব" : "Clear Title",
      auditFlag: language === "bn" ? "কোনো অমিল নেই" : "Zero Mismatches",
      auditType: "clear",
      age: language === "bn" ? "২ দিন" : "2 days",
      ageSub: language === "bn" ? "এসএলএ সীমার মধ্যে" : "Within SLA",
      statusText: language === "bn" ? "মাঠ জরিপ নির্ধারিত" : "Survey Scheduled",
      statusType: "review",
      isStale: false,
      isTarget: false,
    },
  ];

  // Filtering
  const filteredCases = initialCases.filter((item) => {
    if (filter === "new" && item.statusType !== "new") return false;
    if (filter === "under_review" && item.statusType !== "review") return false;
    if (filter === "stale" && !item.isStale) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        item.caseNo.toLowerCase().includes(q) ||
        item.deedNo.toLowerCase().includes(q) ||
        item.plotTitle.toLowerCase().includes(q) ||
        item.khatian.toLowerCase().includes(q) ||
        item.parties.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <section className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden flex flex-col">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-sky-500/20 scrollbar-track-transparent">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-950/80 border-b border-white/12 text-xs uppercase tracking-wider text-slate-400 select-none">
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thCaseNo")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thDeedSource")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thPlot")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thShare")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thAuditFlag")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thAge")}</th>
              <th className="py-3 px-4 font-semibold">{t("acLandQueue.thStatus")}</th>
              <th className="py-3 px-4 font-semibold text-right">{t("acLandQueue.thAction")}</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-white/8 text-xs">
            {filteredCases.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <AlertCircle className="w-8 h-8 text-slate-500" />
                    <span>{t("acLandQueue.noCasesFound")}</span>
                  </div>
                </td>
              </tr>
            ) : (
              filteredCases.map((row) => (
                <tr
                  key={row.caseNo}
                  className={`hover:bg-white/[0.05] transition-colors duration-150 group ${
                    row.isStale
                      ? "border-l-4 border-l-amber-500 bg-amber-500/[0.03]"
                      : "border-l-4 border-l-transparent"
                  }`}
                >
                  {/* Case No. */}
                  <td className="py-3.5 px-4 align-middle">
                    <div className="flex flex-col">
                      <span
                        className={`font-mono font-semibold tracking-tight text-sm ${
                          row.isStale
                            ? "text-amber-300"
                            : row.isTarget
                            ? "text-sky-300"
                            : "text-white"
                        }`}
                      >
                        {row.caseNo}
                      </span>
                      <span
                        className={`text-[11px] flex items-center gap-1 mt-0.5 ${
                          row.timeIcon === "alert"
                            ? "text-amber-400/90 font-medium"
                            : row.timeIcon === "gavel"
                            ? "text-rose-400 font-medium"
                            : "text-emerald-400"
                        }`}
                      >
                        {row.timeIcon === "alert" && <AlertTriangle className="w-3 h-3 text-amber-400" />}
                        {row.timeIcon === "gavel" && <Gavel className="w-3 h-3 text-rose-400" />}
                        {row.timeIcon === "schedule" && <Clock className="w-3 h-3 text-emerald-400" />}
                        <span>{row.timeTag}</span>
                      </span>
                    </div>
                  </td>

                  {/* Deed No. & Source */}
                  <td className="py-3.5 px-4 align-middle">
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">{row.deedNo}</span>
                      <span className="text-[11px] text-slate-400">{row.deedOffice}</span>
                    </div>
                  </td>

                  {/* Cadastral Plot */}
                  <td className="py-3.5 px-4 align-middle max-w-[210px]">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-200 truncate" title={row.plotTitle}>
                        {row.plotTitle}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{row.khatian}</span>
                    </div>
                  </td>

                  {/* Transacted Share */}
                  <td className="py-3.5 px-4 align-middle">
                    <div className="flex flex-col">
                      <span className="font-mono text-white font-semibold">
                        {row.share} <span className="text-slate-400 font-sans font-normal text-[11px]">{row.shareDetail}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[180px]" title={row.parties}>
                        {row.parties}
                      </span>
                    </div>
                  </td>

                  {/* Mismatch / Audit Flag */}
                  <td className="py-3.5 px-4 align-middle">
                    {row.auditType === "warning" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-500/35 text-amber-300">
                        <Info className="w-3 h-3" />
                        <span>{row.auditFlag}</span>
                      </span>
                    )}
                    {row.auditType === "critical" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-500/15 border border-rose-500/35 text-rose-300">
                        <XCircle className="w-3 h-3" />
                        <span>{row.auditFlag}</span>
                      </span>
                    )}
                    {row.auditType === "clear" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/35 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{row.auditFlag}</span>
                      </span>
                    )}
                  </td>

                  {/* Age */}
                  <td className="py-3.5 px-4 align-middle">
                    <div className="flex flex-col">
                      <span className={`font-semibold ${row.isStale ? "text-amber-300" : "text-white"}`}>
                        {row.age}
                      </span>
                      <span className={`text-[10px] ${row.ageClass || "text-slate-400"}`}>
                        {row.ageSub}
                      </span>
                    </div>
                  </td>

                  {/* Mutation Status */}
                  <td className="py-3.5 px-4 align-middle">
                    {row.statusType === "new" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/15 border border-sky-400/40 text-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span>{row.statusText}</span>
                      </span>
                    )}
                    {row.statusType === "stale" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-500/40 text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{row.statusText}</span>
                      </span>
                    )}
                    {row.statusType === "review" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/15 border border-blue-400/35 text-blue-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{row.statusText}</span>
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 align-middle text-right">
                    {row.isTarget ? (
                      <Link
                        href={`/ac-land/case/${row.caseNo}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.5)] transition-all duration-150 active:scale-95 text-xs whitespace-nowrap cursor-pointer"
                      >
                        <span>{t("acLandQueue.btnOpenDossier")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        href={`/ac-land/case/${row.caseNo}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/18 border border-white/20 transition-all duration-150 active:scale-95 text-xs whitespace-nowrap cursor-pointer"
                      >
                        <span>{t("acLandQueue.btnOpenDossier")}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                      </Link>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination and SLA Compliance Footer */}
      <div className="bg-slate-950/90 border-t border-white/12 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Ledger Status Indicator */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-slate-400">
            {language === "bn" ? (
              <>৪৭টি নামজারি কেসের মধ্যে <span className="font-semibold text-white">১–৫টি</span> প্রদর্শিত</>
            ) : (
              <>Showing <span className="font-semibold text-white">1–5</span> of <span className="font-semibold text-white">47</span> mutation cases</>
            )}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("acLandQueue.ledgerConfirmed")}</span>
          </span>
        </div>

        {/* Frosted Pagination Pills */}
        <div className="flex items-center gap-1.5 select-none">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-400 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>{t("acLandQueue.prev")}</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
              currentPage === 1
                ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            1
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(2)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
              currentPage === 2
                ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            2
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(3)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
              currentPage === 3
                ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            3
          </button>

          <span className="text-slate-500 px-1 font-mono text-xs">...</span>

          <button
            type="button"
            onClick={() => setCurrentPage(10)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
              currentPage === 10
                ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            10
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
            disabled={currentPage === 10}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-sky-300 transition-all flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>{t("acLandQueue.next")}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
