"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  CheckCheck,
  Send,
  AlertTriangle,
  XCircle,
  Gavel,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DeedsTableProps {
  searchQuery: string;
  activeFilter: "all" | "registered" | "mutated" | "cancelled";
}

interface DeedRecord {
  id: string;
  deedNo: string;
  tag: string;
  tagType: "primary" | "warning" | "error";
  time: string;
  mouza: string;
  daag: string;
  khatian: string;
  khatianType: string;
  isKhatianLocked?: boolean;
  sellerName: string;
  sellerNid: string;
  sellerShare?: string;
  isSellerSpoofed?: boolean;
  buyerName: string;
  buyerNid: string;
  share: string;
  shareDetail: string;
  isShareStruck?: boolean;
  isShareZero?: boolean;
  deedStatus: string;
  deedStatusType: "registered" | "warning" | "cancelled";
  mutationStatus: string;
  mutationStatusType: "scheduled" | "mutated" | "dispatched" | "pending" | "disallowed";
  actionType: "primary" | "white" | "error";
}

export const DeedsArchiveTable = ({ searchQuery, activeFilter }: DeedsTableProps) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const canonicalDeeds: DeedRecord[] = [
    {
      id: "SYN-D-0001",
      deedNo: "SYN-D-0001",
      tag: "Savar Sub-Registry",
      tagType: "primary",
      time: "14 Oct 2024, 11:42 AM",
      mouza: "Mouza SYN-Savar",
      daag: "452/1",
      khatian: "1187",
      khatianType: "(BS)",
      sellerName: "SYN Rahim Uddin",
      sellerNid: "SYN-NID-A10021",
      sellerShare: "(Share: 0.5000)",
      buyerName: "SYN Karim Hossain",
      buyerNid: "SYN-NID-B20045",
      share: "0.2500 (4 anna)",
      shareDetail: "Post-escrow: 0.2500",
      deedStatus: "Registered & Sealed",
      deedStatusType: "registered",
      mutationStatus: "MUT-2026-000001 (Hearing Scheduled • AC Land)",
      mutationStatusType: "scheduled",
      actionType: "primary",
    },
    {
      id: "SYN-D-0002",
      deedNo: "SYN-D-0002",
      tag: "Savar Sub-Registry",
      tagType: "primary",
      time: "14 Oct 2024, 10:15 AM",
      mouza: "Mouza SYN-Savar",
      daag: "480/2",
      khatian: "942",
      khatianType: "(BS)",
      sellerName: "SYN M. Alam",
      sellerNid: "SYN-NID-C30491",
      buyerName: "SYN F. Begum",
      buyerNid: "SYN-NID-D49201",
      share: "0.1250 (2 anna)",
      shareDetail: "Standard transfer",
      deedStatus: "Registered & Sealed",
      deedStatusType: "registered",
      mutationStatus: "MUT-2026-000002 (Mutated / Namzari Issued)",
      mutationStatusType: "mutated",
      actionType: "white",
    },
    {
      id: "SYN-D-0003",
      deedNo: "SYN-D-0003",
      tag: "Savar Sub-Registry",
      tagType: "primary",
      time: "14 Oct 2024, 09:30 AM",
      mouza: "Mouza SYN-Savar",
      daag: "312/4",
      khatian: "610",
      khatianType: "(CS)",
      sellerName: "SYN T. Haque",
      sellerNid: "SYN-NID-E50112",
      buyerName: "SYN Z. Rahman",
      buyerNid: "SYN-NID-F60884",
      share: "0.5000 (8 anna)",
      shareDetail: "Full ancestral share",
      deedStatus: "Registered & Sealed",
      deedStatusType: "registered",
      mutationStatus: "MUT-2026-000003 (Dispatched to AC Land)",
      mutationStatusType: "dispatched",
      actionType: "white",
    },
    {
      id: "SYN-D-0004",
      deedNo: "SYN-D-0004",
      tag: "Review Tagged",
      tagType: "warning",
      time: "14 Oct 2024, 09:05 AM",
      mouza: "Mouza SYN-Savar",
      daag: "119/A",
      khatian: "334",
      khatianType: "(RS)",
      sellerName: "SYN A. Chowdhury",
      sellerNid: "SYN-NID-G70921",
      buyerName: "SYN D. Khan",
      buyerNid: "SYN-NID-H81230",
      share: "0.3333 (5.3 anna)",
      shareDetail: "Partition clause 3B",
      deedStatus: "Warning / Transliteration Variance",
      deedStatusType: "warning",
      mutationStatus: "MUT-2026-000004 (Pending AC Land Pre-Check)",
      mutationStatusType: "pending",
      actionType: "white",
    },
    {
      id: "SYN-D-0005",
      deedNo: "SYN-D-0005",
      tag: "Fraud Quarantined",
      tagType: "error",
      time: "14 Oct 2024, 08:40 AM",
      mouza: "Mouza SYN-Savar",
      daag: "501/2",
      khatian: "102 (BS) [LOCKED]",
      khatianType: "",
      isKhatianLocked: true,
      sellerName: "SYN Unknown / Spoofed",
      sellerNid: "SYN-NID-UNKNOWN",
      isSellerSpoofed: true,
      buyerName: "SYN R. Hasan",
      buyerNid: "SYN-NID-J90234",
      share: "0.2500 (4 anna)",
      shareDetail: "Zero equity balance",
      isShareStruck: true,
      isShareZero: true,
      deedStatus: "Cancelled / Quota Fraud Block",
      deedStatusType: "cancelled",
      mutationStatus: "MUT Disallowed (Interception #28)",
      mutationStatusType: "disallowed",
      actionType: "error",
    },
  ];

  // Filter deeds
  const filteredDeeds = canonicalDeeds.filter((d) => {
    // Status filter
    if (activeFilter === "registered" && d.deedStatusType !== "registered") return false;
    if (activeFilter === "mutated" && d.mutationStatusType !== "mutated") return false;
    if (activeFilter === "cancelled" && d.deedStatusType !== "cancelled") return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchDeed = d.deedNo.toLowerCase().includes(q);
      const matchSeller = d.sellerName.toLowerCase().includes(q) || d.sellerNid.toLowerCase().includes(q);
      const matchBuyer = d.buyerName.toLowerCase().includes(q) || d.buyerNid.toLowerCase().includes(q);
      const matchDaag = d.daag.toLowerCase().includes(q);
      const matchMouza = d.mouza.toLowerCase().includes(q);
      if (!matchDeed && !matchSeller && !matchBuyer && !matchDaag && !matchMouza) return false;
    }
    return true;
  });

  return (
    <div className="rounded-2xl bg-white/[0.12] backdrop-blur-[24px] border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-[#0f172a]/60 border-b border-white/[0.12] text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thDeedNoDate")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thPlot")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thSeller")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thBuyer")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thShare")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thDeedStatus")}</th>
              <th className="py-3 px-4 whitespace-nowrap">{t("deedsArchive.thMutationStatus")}</th>
              <th className="py-3 px-4 text-right whitespace-nowrap">{t("deedsArchive.thAction")}</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
            {filteredDeeds.map((deed) => {
              const isError = deed.deedStatusType === "cancelled";
              const isWarning = deed.deedStatusType === "warning";

              return (
                <tr
                  key={deed.id}
                  className={`transition-colors group ${
                    isError
                      ? "bg-red-500/[0.06] hover:bg-red-500/[0.10]"
                      : isWarning
                      ? "bg-amber-500/[0.04] hover:bg-amber-500/[0.08]"
                      : "hover:bg-white/[0.06]"
                  }`}
                >
                  {/* Deed No & Date */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono font-bold transition-colors ${
                          isError
                            ? "text-red-300"
                            : isWarning
                            ? "text-amber-200 group-hover:text-amber-300"
                            : "text-white group-hover:text-sky-300"
                        }`}
                      >
                        {deed.deedNo}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                          deed.tagType === "primary"
                            ? "bg-sky-500/15 text-sky-300 border border-sky-400/30"
                            : deed.tagType === "warning"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-red-500/40 text-red-200 border border-red-500/40"
                        }`}
                      >
                        {deed.tag}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{deed.time}</span>
                    </div>
                  </td>

                  {/* Plot (Mouza / Daag / Khatian) */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-white font-medium">
                      {deed.mouza} • Daag {deed.daag}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Khatian:{" "}
                      <span className={deed.isKhatianLocked ? "text-red-400 font-bold" : "text-sky-300"}>
                        {deed.khatian} {deed.khatianType}
                      </span>
                    </div>
                  </td>

                  {/* Seller */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className={deed.isSellerSpoofed ? "text-red-400 font-bold" : "text-white font-medium"}>
                      {deed.sellerName}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      NID:{" "}
                      <span className={deed.isSellerSpoofed ? "text-red-400" : ""}>{deed.sellerNid}</span>{" "}
                      {deed.sellerShare && <span className="text-sky-300">{deed.sellerShare}</span>}
                    </div>
                  </td>

                  {/* Buyer */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-white font-medium">{deed.buyerName}</div>
                    <div className="text-[11px] text-slate-400 font-mono">NID: {deed.buyerNid}</div>
                  </td>

                  {/* Transacted Share */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div
                      className={`font-mono font-medium ${
                        deed.isShareStruck ? "line-through text-slate-500" : "text-white"
                      }`}
                    >
                      {deed.share}
                    </div>
                    <div
                      className={`text-[11px] font-mono ${
                        deed.isShareZero ? "text-red-400" : "text-emerald-400"
                      }`}
                    >
                      {deed.shareDetail}
                    </div>
                  </td>

                  {/* Deed Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {deed.deedStatusType === "registered" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{deed.deedStatus}</span>
                      </span>
                    )}
                    {deed.deedStatusType === "warning" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/35 text-amber-300 text-xs font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        <span>{deed.deedStatus}</span>
                      </span>
                    )}
                    {deed.deedStatusType === "cancelled" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/30 border border-red-500/40 text-red-300 text-xs font-medium">
                        <XCircle className="w-3.5 h-3.5 text-red-400" />
                        <span>{deed.deedStatus}</span>
                      </span>
                    )}
                  </td>

                  {/* Mutation Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {deed.mutationStatusType === "scheduled" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    )}
                    {deed.mutationStatusType === "mutated" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <CheckCheck className="w-3.5 h-3.5" />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    )}
                    {deed.mutationStatusType === "dispatched" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/35 text-blue-300 text-xs font-medium">
                        <Send className="w-3.5 h-3.5" />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    )}
                    {deed.mutationStatusType === "pending" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    )}
                    {deed.mutationStatusType === "disallowed" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-medium">
                        <Gavel className="w-3.5 h-3.5 text-red-400" />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    {deed.actionType === "primary" ? (
                      <Link
                        href={`/sub-registrar/deed/${deed.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-[0_0_12px_rgba(56,189,248,0.35)] hover:shadow-[0_0_18px_rgba(56,189,248,0.55)] transition-all cursor-pointer"
                      >
                        <span>{t("deedsArchive.actionViewDossier")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : deed.actionType === "error" ? (
                      <Link
                        href={`/sub-registrar/deed/SYN-D-0001`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-transparent hover:bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold transition-all cursor-pointer"
                      >
                        <span>{t("deedsArchive.actionViewDossier")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        href={`/sub-registrar/deed/SYN-D-0001`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.12] hover:bg-white/[0.20] border border-white/[0.22] text-white text-xs font-medium transition-all cursor-pointer"
                      >
                        <span>{t("deedsArchive.actionViewDossier")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}

            {filteredDeeds.length === 0 && (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400 text-xs">
                  No deeds match the active filter or search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar & Consensus Audit Footer */}
      <div className="px-6 py-4 bg-[#0a1526]/80 border-t border-white/[0.10] flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Status & Total Count */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            {t("deedsArchive.paginationShowing")}
          </span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/20" />
          <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t("deedsArchive.consensusVerified")}</span>
          </div>
        </div>

        {/* Right: Pagination Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] text-white/40 border border-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs transition-all ${
                currentPage === page
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.5)] border border-sky-400"
                  : "bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/10"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-1 text-slate-500 font-mono text-xs">...</span>

          <button
            type="button"
            onClick={() => setCurrentPage(125)}
            className={`flex items-center justify-center min-w-[32px] h-8 px-2 rounded-lg text-xs font-semibold border transition-all ${
              currentPage === 125
                ? "bg-sky-500 text-slate-950"
                : "bg-white/[0.08] hover:bg-white/[0.16] text-white border-white/10"
            }`}
          >
            125
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/10 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
