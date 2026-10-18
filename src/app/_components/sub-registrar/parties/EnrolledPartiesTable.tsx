"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen,
  Search,
  RefreshCw,
  FileDown,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Fingerprint,
  X,
  FileCheck2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PartyRow {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  nid: string;
  contact: string;
  daag: string;
  deedRef: string;
  status: string;
  statusType: "verified" | "warning" | "blocked";
  actionText: string;
  actionType: "audit" | "review" | "block";
  isDeedBound: boolean;
  biometricHash?: string;
  ecTimestamp?: string;
  flagReason?: string;
}

export const EnrolledPartiesTable = () => {
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "verified" | "warning" | "deed_bound">("all");
  const [selectedParty, setSelectedParty] = useState<PartyRow | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const initialParties: PartyRow[] = [
    {
      id: "pty-1",
      name: "SYN Rahim Uddin",
      role: t("partiesRegistry.roleSeller"),
      initials: "RU",
      avatarColor: "bg-sky-500/20 text-sky-400 border-sky-400/40",
      nid: "SYN-NID-A10021",
      contact: "+880 1711-234567",
      daag: "Daag 452/1",
      deedRef: "Deed SYN-D-0001",
      status: t("partiesRegistry.statusEcVerified"),
      statusType: "verified",
      actionText: t("partiesRegistry.actionAudit"),
      actionType: "audit",
      isDeedBound: true,
      biometricHash: "0x89f2c...41ba9e",
      ecTimestamp: "18 May 2026, 09:14 BST",
    },
    {
      id: "pty-2",
      name: "SYN Karim Hossain",
      role: t("partiesRegistry.roleBuyer"),
      initials: "KH",
      avatarColor: "bg-blue-500/20 text-blue-400 border-blue-400/40",
      nid: "SYN-NID-B20045",
      contact: "+880 1819-876543",
      daag: "Daag 452/1",
      deedRef: "Deed SYN-D-0001",
      status: t("partiesRegistry.statusBioCleared"),
      statusType: "verified",
      actionText: t("partiesRegistry.actionAudit"),
      actionType: "audit",
      isDeedBound: true,
      biometricHash: "0x33b8a...90f12c",
      ecTimestamp: "18 May 2026, 09:22 BST",
    },
    {
      id: "pty-3",
      name: "SYN M. Alam",
      role: t("partiesRegistry.roleSeller"),
      initials: "MA",
      avatarColor: "bg-slate-700 text-slate-200 border-white/20",
      nid: "SYN-NID-C30491",
      contact: "+880 1912-345678",
      daag: "Daag 480/2",
      deedRef: "Deed SYN-D-0002",
      status: t("partiesRegistry.statusVerified"),
      statusType: "verified",
      actionText: t("partiesRegistry.actionAudit"),
      actionType: "audit",
      isDeedBound: true,
      biometricHash: "0x7a22e...09c4d1",
      ecTimestamp: "17 May 2026, 14:40 BST",
    },
    {
      id: "pty-4",
      name: "SYN A. Chowdhury",
      role: language === "bn" ? "সহ-অংশীদার" : "Co-Sharer",
      initials: "AC",
      avatarColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      nid: "SYN-NID-G70921",
      contact: "+880 1611-987123",
      daag: "Daag 119/A",
      deedRef: "Deed SYN-D-0004",
      status: t("partiesRegistry.statusTranslit"),
      statusType: "warning",
      actionText: t("partiesRegistry.actionReview"),
      actionType: "review",
      isDeedBound: true,
      biometricHash: "0x6198f...dd417a",
      ecTimestamp: "16 May 2026, 11:05 BST",
      flagReason: language === "bn"
        ? "জাতীয় পরিচয়পত্রের বানান (Anwar) দলিলের নামের সাথে (Anowar) সামান্য অমিল রয়েছে।"
        : "Minor phonetic spelling discrepancy between NID card ('Anwar') and registered deed ('Anowar').",
    },
    {
      id: "pty-5",
      name: "SYN Unknown / Spoofed",
      role: language === "bn" ? "প্রতারক বিক্রেতা" : "Attempted Seller",
      initials: "!!",
      avatarColor: "bg-red-500/30 text-red-400 border-red-500/50",
      nid: "SYN-NID-UNKNOWN",
      contact: "Unverified VoIP",
      daag: "Daag 501/2",
      deedRef: "Quarantine",
      status: t("partiesRegistry.statusFlagged"),
      statusType: "blocked",
      actionText: t("partiesRegistry.actionBlockDetails"),
      actionType: "block",
      isDeedBound: false,
      biometricHash: "MISMATCH_HASH_REJECTED",
      ecTimestamp: "FAILED_AUTHENTICATION",
      flagReason: language === "bn"
        ? "ভুয়া এনআইডি নম্বর এবং অসামঞ্জস্যপূর্ণ আঙুলের ছাপ সনাক্ত হয়েছে। সাব-রেজিস্ট্রার এখতিয়ারে অ্যাকাউন্ট অবরুদ্ধ।"
        : "Forged sovereign NID format and spoofed biometric hash rejected by Election Commission gateway.",
    },
  ];

  // Filtering logic
  const filteredParties = initialParties.filter((p) => {
    // 1. Filter Chip
    if (activeFilter === "verified" && p.statusType !== "verified") return false;
    if (activeFilter === "warning" && p.statusType !== "warning") return false;
    if (activeFilter === "deed_bound" && !p.isDeedBound) return false;

    // 2. Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchNid = p.nid.toLowerCase().includes(q);
      const matchContact = p.contact.toLowerCase().includes(q);
      const matchDaag = p.daag.toLowerCase().includes(q);
      if (!matchName && !matchNid && !matchContact && !matchDaag) return false;
    }
    return true;
  });

  const handleExportCsv = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportNotice(true);
      setTimeout(() => setExportNotice(false), 3500);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Main Glass Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-5 sm:p-6 bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        {/* Table Header & Total Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-sky-400" />
              <span>{t("partiesRegistry.tableTitle")}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t("partiesRegistry.tableSubtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-400/30">
              {t("partiesRegistry.enrolledCount")}
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              title="Reload Table"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="py-4 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("partiesRegistry.searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/15 text-white placeholder:text-slate-500 text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all outline-none"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">
              {t("partiesRegistry.filterLabel")}
            </span>

            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {t("partiesRegistry.filterAll")}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("verified")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "verified"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {t("partiesRegistry.filterVerified")}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("warning")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "warning"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}
            >
              {t("partiesRegistry.filterWarning")}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("deed_bound")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeFilter === "deed_bound"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              {t("partiesRegistry.filterDeedBound")}
            </button>
          </div>
        </div>

        {/* Compact Glass Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/40">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-950/80 border-b border-white/10 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                <th className="py-3 px-3.5">{t("partiesRegistry.thPartyNameRole")}</th>
                <th className="py-3 px-3">{t("partiesRegistry.thNid")}</th>
                <th className="py-3 px-3 hidden md:table-cell">{t("partiesRegistry.thContact")}</th>
                <th className="py-3 px-3">{t("partiesRegistry.thLinked")}</th>
                <th className="py-3 px-3">{t("partiesRegistry.thStatus")}</th>
                <th className="py-3 px-3 text-right">{t("partiesRegistry.thAction")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredParties.map((party) => {
                const isAmber = party.statusType === "warning";
                const isBlocked = party.statusType === "blocked";

                return (
                  <tr
                    key={party.id}
                    className={`transition-colors group ${
                      isAmber
                        ? "bg-amber-500/[0.04] hover:bg-amber-500/[0.08]"
                        : isBlocked
                        ? "bg-red-500/[0.08] hover:bg-red-500/[0.12]"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Column 1: Party Name & Role */}
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 ${party.avatarColor}`}
                        >
                          {party.initials}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span
                            className={`font-semibold truncate transition-colors ${
                              isAmber
                                ? "text-amber-200 group-hover:text-amber-300"
                                : isBlocked
                                ? "text-red-300 group-hover:text-red-200"
                                : "text-white group-hover:text-sky-300"
                            }`}
                          >
                            {party.name}
                          </span>
                          <span
                            className={`text-[11px] font-medium ${
                              isBlocked ? "text-red-400" : "text-slate-400"
                            }`}
                          >
                            {party.role}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Column 2: Sovereign NID */}
                    <td
                      className={`py-3 px-3 font-mono text-[11px] whitespace-nowrap ${
                        isAmber
                          ? "text-amber-300 font-bold"
                          : isBlocked
                          ? "text-red-400 font-bold"
                          : "text-sky-300 font-semibold"
                      }`}
                    >
                      {party.nid}
                    </td>

                    {/* Column 3: Contact */}
                    <td
                      className={`py-3 px-3 hidden md:table-cell text-xs whitespace-nowrap ${
                        isBlocked ? "text-red-400" : "text-slate-300"
                      }`}
                    >
                      {party.contact}
                    </td>

                    {/* Column 4: Linked Cadastre / Deed */}
                    <td className="py-3 px-3">
                      <div className="flex flex-col">
                        <span className="text-white font-medium text-xs whitespace-nowrap">
                          {party.daag}
                        </span>
                        <span
                          className={`text-[10px] ${
                            isBlocked ? "text-red-400 font-bold uppercase" : "text-slate-400"
                          }`}
                        >
                          {party.deedRef}
                        </span>
                      </div>
                    </td>

                    {/* Column 5: Status */}
                    <td className="py-3 px-3">
                      {isAmber ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/35 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {party.status}
                        </span>
                      ) : isBlocked ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/20 text-red-300 border border-red-500/40 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          {party.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {party.status}
                        </span>
                      )}
                    </td>

                    {/* Column 6: Action */}
                    <td className="py-3 px-3 text-right">
                      {isAmber ? (
                        <button
                          type="button"
                          onClick={() => setSelectedParty(party)}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 transition-all cursor-pointer"
                        >
                          {party.actionText}
                        </button>
                      ) : isBlocked ? (
                        <button
                          type="button"
                          onClick={() => setSelectedParty(party)}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500/30 hover:bg-red-500/40 text-red-200 border border-red-500/50 transition-all cursor-pointer"
                        >
                          {party.actionText}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedParty(party)}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 hover:bg-sky-500 hover:text-slate-950 border border-white/10 text-slate-200 transition-all cursor-pointer"
                        >
                          {party.actionText}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}

              {filteredParties.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                    No parties match the specified query or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer: Pagination & Export */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            {t("partiesRegistry.paginationShowing")}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center justify-center transition-colors disabled:opacity-40"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg font-semibold text-xs flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? "bg-sky-500 text-slate-950 shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="px-1 text-slate-500">...</span>

            <button
              type="button"
              onClick={() => setCurrentPage(484)}
              className={`w-8 h-7 rounded-lg font-semibold text-xs flex items-center justify-center transition-colors ${
                currentPage === 484
                  ? "bg-sky-500 text-slate-950"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              484
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Export CSV Button */}
          <div className="relative">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {isExporting
                  ? t("partiesRegistry.exportingCsv")
                  : exportNotice
                  ? t("partiesRegistry.csvExported")
                  : t("partiesRegistry.btnExportCsv")}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Audit / Review / Block Inspection Modal */}
      <AnimatePresence>
        {selectedParty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-lg rounded-2xl p-6 bg-slate-900 border border-white/20 shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedParty(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold text-base ${selectedParty.avatarColor}`}
                >
                  {selectedParty.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{selectedParty.name}</span>
                    {selectedParty.statusType === "verified" && (
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    )}
                    {selectedParty.statusType === "warning" && (
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                    )}
                    {selectedParty.statusType === "blocked" && (
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedParty.role} • {selectedParty.contact}
                  </p>
                </div>
              </div>

              {/* Details Content */}
              <div className="py-4 space-y-3 text-xs">
                {selectedParty.flagReason && (
                  <div
                    className={`p-3 rounded-xl border text-xs leading-relaxed ${
                      selectedParty.statusType === "blocked"
                        ? "bg-red-500/15 border-red-500/30 text-red-200"
                        : "bg-amber-500/15 border-amber-500/30 text-amber-200"
                    }`}
                  >
                    <span className="font-bold block mb-1">
                      {selectedParty.statusType === "blocked"
                        ? "SECURITY LOCK REASON:"
                        : "TRANSLITERATION NOTICE:"}
                    </span>
                    {selectedParty.flagReason}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Sovereign NID</span>
                    <span className="font-mono font-semibold text-sky-300">
                      {selectedParty.nid}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Linked Cadastre</span>
                    <span className="font-semibold text-white">
                      {selectedParty.daag} ({selectedParty.deedRef})
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Biometric Hash</span>
                    <span className="font-mono text-emerald-400 text-[11px] flex items-center gap-1">
                      <Fingerprint className="w-3 h-3" />
                      {selectedParty.biometricHash}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">EC Gateway Timestamp</span>
                    <span className="text-slate-300 text-[11px]">
                      {selectedParty.ecTimestamp}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Sub-Registrar Digital Attestation:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    IMMUTABLE LEDGER INSCRIBED
                  </span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedParty(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
                {selectedParty.statusType !== "blocked" && (
                  <Link
                    href="/sub-registrar/deed/SYN-D-0001"
                    onClick={() => setSelectedParty(null)}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Deed Dossier
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
