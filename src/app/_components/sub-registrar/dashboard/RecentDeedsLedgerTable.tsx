"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Table as TableIcon,
  Search,
  ArrowRight,
  ShieldAlert,
  FileSpreadsheet,
  ChevronRight,
  ShieldCheck,
  Check,
  AlertTriangle,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface LedgerRowItem {
  id: string;
  deedNo: string;
  stationTag: string;
  time: string;
  mouza: string;
  daag: string;
  khatian: string;
  share: string;
  shareFraction: string;
  sellerName: string;
  sellerNid: string;
  buyerName: string;
  buyerNid: string;
  deedStatus: string;
  deedStatusType: "success" | "pending" | "error";
  mutationStatus: string;
  mutationStatusType: "in_review" | "survey_dispatched" | "approved" | "hold" | "frozen";
  category: "escrow" | "settled" | "intercepted";
  isBlocked?: boolean;
}

export const RecentDeedsLedgerTable = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "escrow" | "settled" | "intercepted">("all");
  const [isExporting, setIsExporting] = useState(false);
  const [auditModalItem, setAuditModalItem] = useState<LedgerRowItem | null>(null);

  const rawDeeds: LedgerRowItem[] = [
    {
      id: "SYN-D-0001",
      deedNo: "SYN-D-0001",
      stationTag: "Savar",
      time: "14 Oct 2024, 11:42 AM",
      mouza: "Mouza SYN-Savar",
      daag: "452/1",
      khatian: "1187 (BS)",
      share: "0.2500",
      shareFraction: "(4 anna) of 0.5000",
      sellerName: "SYN Rahim Uddin",
      sellerNid: "SYN-NID-A10021",
      buyerName: "SYN Karim Hossain",
      buyerNid: "SYN-NID-B20045",
      deedStatus: language === "bn" ? "নিবন্ধিত ও সিলমোহরকৃত" : "Registered & Sealed",
      deedStatusType: "success",
      mutationStatus: language === "bn" ? "কেস MUT-2026-000001 (পর্যালোচনাধীন)" : "Case MUT-2026-000001 (In Review)",
      mutationStatusType: "in_review",
      category: "escrow",
    },
    {
      id: "SYN-D-0002",
      deedNo: "SYN-D-0002",
      stationTag: "Savar",
      time: "14 Oct 2024, 10:15 AM",
      mouza: "Mouza SYN-Savar",
      daag: "480/2",
      khatian: "942 (BS)",
      share: "0.1250",
      shareFraction: "(2 anna)",
      sellerName: "SYN M. Alam",
      sellerNid: "SYN-NID-C30491",
      buyerName: "SYN F. Begum",
      buyerNid: "SYN-NID-D49201",
      deedStatus: language === "bn" ? "নিবন্ধিত ও সিলমোহরকৃত" : "Registered & Sealed",
      deedStatusType: "success",
      mutationStatus: language === "bn" ? "MUT-2026-000002 (সার্ভেয়ার প্রেরিত)" : "MUT-2026-000002 (Survey Dispatched)",
      mutationStatusType: "survey_dispatched",
      category: "escrow",
    },
    {
      id: "SYN-D-0003",
      deedNo: "SYN-D-0003",
      stationTag: "Savar",
      time: "14 Oct 2024, 09:30 AM",
      mouza: "Mouza SYN-Savar",
      daag: "312/4",
      khatian: "610 (CS)",
      share: "0.5000",
      shareFraction: "(8 anna)",
      sellerName: "SYN T. Haque",
      sellerNid: "SYN-NID-E50112",
      buyerName: "SYN Z. Rahman",
      buyerNid: "SYN-NID-F60884",
      deedStatus: language === "bn" ? "নিবন্ধিত ও সিলমোহরকৃত" : "Registered & Sealed",
      deedStatusType: "success",
      mutationStatus: language === "bn" ? "অনুমোদিত (খতিয়ান প্রস্তুত)" : "Approved (Khatian Issued)",
      mutationStatusType: "approved",
      category: "settled",
    },
    {
      id: "SYN-D-0004",
      deedNo: "SYN-D-0004",
      stationTag: "Savar",
      time: "14 Oct 2024, 09:05 AM",
      mouza: "Mouza SYN-Savar",
      daag: "119/A",
      khatian: "334 (RS)",
      share: "0.3333",
      shareFraction: "(5.3 anna)",
      sellerName: "SYN A. Chowdhury",
      sellerNid: "SYN-NID-G70921",
      buyerName: "SYN D. Khan",
      buyerNid: "SYN-NID-H81230",
      deedStatus: language === "bn" ? "বায়োমেট্রিক মুলতুবি" : "Pending Biometrics",
      deedStatusType: "pending",
      mutationStatus: language === "bn" ? "এসক্রো হোল্ড" : "Escrow Hold",
      mutationStatusType: "hold",
      category: "escrow",
    },
    {
      id: "SYN-D-0005",
      deedNo: "SYN-D-0005",
      stationTag: language === "bn" ? "চিহ্নিত" : "Flagged",
      time: "14 Oct 2024, 08:40 AM",
      mouza: "Mouza SYN-Savar",
      daag: "501/2",
      khatian: "102 (BS)",
      share: "0.2500",
      shareFraction: "(4 anna)",
      sellerName: "SYN Unknown",
      sellerNid: "SYN-NID-UNKNOWN",
      buyerName: "SYN R. Hasan",
      buyerNid: "SYN-NID-J90234",
      deedStatus: language === "bn" ? "ব্লকড / স্বাক্ষরের অমিল" : "Blocked / Signature Mismatch",
      deedStatusType: "error",
      mutationStatus: language === "bn" ? "নামজারি স্থগিত" : "Mutation Frozen",
      mutationStatusType: "frozen",
      category: "intercepted",
      isBlocked: true,
    },
  ];

  const filteredDeeds = useMemo(() => {
    return rawDeeds.filter((deed) => {
      // Category filter
      if (statusFilter !== "all" && deed.category !== statusFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesDeed = deed.deedNo.toLowerCase().includes(query);
        const matchesDaag = deed.daag.toLowerCase().includes(query);
        const matchesKhatian = deed.khatian.toLowerCase().includes(query);
        const matchesSeller = deed.sellerName.toLowerCase().includes(query);
        const matchesBuyer = deed.buyerName.toLowerCase().includes(query);
        const matchesNid =
          deed.sellerNid.toLowerCase().includes(query) ||
          deed.buyerNid.toLowerCase().includes(query);

        if (
          !matchesDeed &&
          !matchesDaag &&
          !matchesKhatian &&
          !matchesSeller &&
          !matchesBuyer &&
          !matchesNid
        ) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, statusFilter, rawDeeds]);

  const handleExportCsv = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      // Trigger simple CSV download simulation
      const csvContent =
        "data:text/csv;charset=utf-8," +
        "DeedNo,Time,Daag,Khatian,Share,Seller,Buyer,DeedStatus,MutationStatus\n" +
        rawDeeds
          .map(
            (d) =>
              `${d.deedNo},${d.time},${d.daag},${d.khatian},${d.share},${d.sellerName},${d.buyerName},"${d.deedStatus}","${d.mutationStatus}"`
          )
          .join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "bhumisync_savar_deeds_registry.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-5 sm:p-6 bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-5"
      >
        {/* Table Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-sky-400" />
                <span>{t("subRegistrar.tableTitle")}</span>
              </h3>
              <span className="px-2 py-0.5 rounded-md bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[10px] font-mono font-bold tracking-wider">
                {t("subRegistrar.tableLive")}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("subRegistrar.tableSubtitle")}
            </p>
          </div>

          {/* Search & Status Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px] max-w-full flex-grow sm:flex-grow-0">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("subRegistrar.searchPlaceholder")}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-950/70 border border-white/15 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-950/70 border border-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  statusFilter === "all"
                    ? "bg-sky-400 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("subRegistrar.filterAll")}
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("escrow")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  statusFilter === "escrow"
                    ? "bg-sky-400 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("subRegistrar.filterEscrow")}
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("settled")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  statusFilter === "settled"
                    ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("subRegistrar.filterSettled")}
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter("intercepted")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  statusFilter === "intercepted"
                    ? "bg-red-500/25 text-red-300 border border-red-400/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("subRegistrar.filterIntercepted")}
              </button>
            </div>
          </div>
        </div>

        {/* High-Density Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/70 border-b border-white/10 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                <th className="py-3 px-4">{t("subRegistrar.thDeedNo")}</th>
                <th className="py-3 px-4">{t("subRegistrar.thPlot")}</th>
                <th className="py-3 px-4">{t("subRegistrar.thShare")}</th>
                <th className="py-3 px-4">{t("subRegistrar.thParties")}</th>
                <th className="py-3 px-4">{t("subRegistrar.thDeedStatus")}</th>
                <th className="py-3 px-4">{t("subRegistrar.thMutationStatus")}</th>
                <th className="py-3 px-4 text-right">{t("subRegistrar.thAction")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {filteredDeeds.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    {t("subRegistrar.noDeedsFound")}
                  </td>
                </tr>
              ) : (
                filteredDeeds.map((deed) => (
                  <tr
                    key={deed.id}
                    className={`transition-colors group ${
                      deed.isBlocked
                        ? "bg-red-500/5 hover:bg-red-500/10"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    {/* Deed No & Time */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono font-bold ${
                            deed.isBlocked ? "text-red-400" : "text-sky-300"
                          }`}
                        >
                          {deed.deedNo}
                        </span>
                        <span
                          className={`px-1.5 py-0.2 rounded text-[10px] font-medium ${
                            deed.isBlocked
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : "bg-white/10 text-slate-300"
                          }`}
                        >
                          {deed.stationTag}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {deed.time}
                      </div>
                    </td>

                    {/* Plot (Mouza / Daag / Khatian) */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-semibold text-white">
                        {deed.mouza} • Daag {deed.daag}
                      </div>
                      <div className="text-slate-400 text-[11px] font-mono mt-0.5">
                        Khatian {deed.khatian}
                      </div>
                    </td>

                    {/* Transacted Share */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div
                        className={`font-mono font-bold ${
                          deed.isBlocked ? "text-slate-400" : "text-sky-300"
                        }`}
                      >
                        {deed.share}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {deed.shareFraction}
                      </div>
                    </td>

                    {/* Parties */}
                    <td className="py-3.5 px-4 max-w-[260px]">
                      <div className="flex items-center gap-1.5 text-white truncate">
                        <span
                          className={`font-semibold ${
                            deed.isBlocked ? "text-red-300 line-through" : ""
                          }`}
                        >
                          {deed.sellerName}
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                        <span className="font-semibold">{deed.buyerName}</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                        {deed.sellerNid} → {deed.buyerNid}
                      </div>
                    </td>

                    {/* Deed Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          deed.deedStatusType === "success"
                            ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                            : deed.deedStatusType === "pending"
                            ? "bg-amber-500/15 border border-amber-500/30 text-amber-300"
                            : "bg-red-500/20 border border-red-500/35 text-red-300"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            deed.deedStatusType === "success"
                              ? "bg-emerald-400"
                              : deed.deedStatusType === "pending"
                              ? "bg-amber-400"
                              : "bg-red-400"
                          }`}
                        />
                        <span>{deed.deedStatus}</span>
                      </span>
                    </td>

                    {/* Mutation Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          deed.mutationStatusType === "approved"
                            ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                            : deed.mutationStatusType === "frozen"
                            ? "bg-red-500/20 border border-red-500/35 text-red-300"
                            : deed.mutationStatusType === "hold"
                            ? "bg-amber-500/15 border border-amber-500/30 text-amber-300"
                            : "bg-sky-500/15 border border-sky-400/30 text-sky-300"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            deed.mutationStatusType === "approved"
                              ? "bg-emerald-400"
                              : deed.mutationStatusType === "frozen"
                              ? "bg-red-400"
                              : deed.mutationStatusType === "hold"
                              ? "bg-amber-400"
                              : "bg-sky-400 animate-pulse"
                          }`}
                        />
                        <span>{deed.mutationStatus}</span>
                      </span>
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      {deed.isBlocked ? (
                        <button
                          type="button"
                          onClick={() => setAuditModalItem(deed)}
                          className="px-3 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 text-xs font-semibold transition-all cursor-pointer"
                        >
                          {t("subRegistrar.actionAudit")}
                        </button>
                      ) : (
                        <Link
                          href={deed.deedNo === "SYN-D-0001" ? "/sub-registrar/deed/SYN-D-0001" : "/verify/plot/452-1"}
                          className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all inline-flex items-center gap-1"
                        >
                          <span>{t("subRegistrar.actionInspect")}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Ledger Summary Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-2 px-1 gap-3">
          <div className="flex items-center gap-2">
            <span>{t("subRegistrar.tableSummary")}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={isExporting}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
            >
              <FileSpreadsheet className={`w-3.5 h-3.5 ${isExporting ? "animate-pulse text-sky-400" : "text-emerald-400"}`} />
              <span>
                {isExporting
                  ? t("subRegistrar.exportingCsv")
                  : t("subRegistrar.exportCsv")}
              </span>
            </button>

            <Link
              href="/citizen/deeds"
              className="text-sky-300 hover:text-sky-200 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>{t("subRegistrar.viewAllDeeds")}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Intercepted Deed Forensic Audit Log Modal */}
      <AnimatePresence>
        {auditModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuditModalItem(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg rounded-2xl bg-slate-900/95 border border-red-500/40 p-6 shadow-2xl backdrop-blur-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {language === "bn"
                        ? "জালিয়াতি ও বিকৃতি সনাক্তকরণ রিপোর্ট"
                        : "Deed Collision & Tamper Interception Report"}
                    </h3>
                    <p className="text-xs font-mono text-red-300">
                      FLAGGED DEED: {auditModalItem.deedNo}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAuditModalItem(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1.5">
                  <span className="font-bold text-red-300 uppercase tracking-wider block text-[11px]">
                    {language === "bn" ? "সনাক্তকৃত অসঙ্গতি" : "Violation Detected:"}
                  </span>
                  <p>
                    {language === "bn"
                      ? "বিক্রেতার ডিজিটাল স্বাক্ষর ও সার্ভার বায়োমেট্রিক পাবলিক-কী মিলছে না। একই দাগ ৫০১/২-এ অন্য একটি সক্রিয় এসক্রো লক বহাল রয়েছে।"
                      : "Seller biometric signature hash failed cryptographic validation. An active escrow lock already encumbers Daag 501/2."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-400 font-mono text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                    <span>SELLER NID:</span>
                    <p className="text-red-400 font-bold mt-0.5">SYN-NID-UNKNOWN</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5">
                    <span>ATTEMPT TIMESTAMP:</span>
                    <p className="text-white font-bold mt-0.5">{auditModalItem.time}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {language === "bn" ? "অটোমেটেড নিরাপত্তা ব্যবস্থা" : "Automated Defensive Action:"}
                  </span>
                  <p className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>
                      {language === "bn"
                        ? "স্বত্ব সংঘর্ষ লক কার্যকর: জমি হস্তান্তর ও নামজারি সম্পূর্ণ স্থগিত।"
                        : "Collision lock enforced: All deed mutation relays frozen immediately."}
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setAuditModalItem(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
                >
                  {t("citizenDeeds.closeModal")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
