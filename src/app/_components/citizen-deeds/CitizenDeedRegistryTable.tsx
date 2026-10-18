"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Table as TableIcon,
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  Eye,
  ShieldCheck,
  History,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface DeedRow {
  id: string;
  deedNo: string;
  officeKey: string;
  registeredDateKey: string;
  role: "Seller" | "Buyer";
  roleLabelKey: string;
  mouza: string;
  daag: string;
  khatian: string;
  share: string;
  shareSubKey: string;
  deedStatusKey: string;
  mutationStatusKey: string;
  mutationCase: string;
  statusType: "escrow" | "approved";
  actionHref: string;
  actionTextKey: string;
  isPrimary?: boolean;
}

export const CitizenDeedRegistryTable = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "seller" | "buyer">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "escrow" | "approved">("all");

  const rawDeeds: DeedRow[] = [
    {
      id: "SYN-D-0001",
      deedNo: "SYN-D-0001",
      officeKey: "citizenDeeds.step1Office",
      registeredDateKey: "citizenDeeds.row1RegisteredDate",
      role: "Seller",
      roleLabelKey: "citizenDeeds.filterSeller",
      mouza: "SYN-Savar",
      daag: "452/1",
      khatian: "1187 (BS)",
      share: "0.2500 (4 anna)",
      shareSubKey: "citizenDeeds.row1ConveyedSub",
      deedStatusKey: "citizenDeeds.row1DeedStatus",
      mutationStatusKey: "citizenDeeds.row1MutationStatus",
      mutationCase: "MUT-2026-000001",
      statusType: "escrow",
      actionHref: "/verify/plot/452-1",
      actionTextKey: "citizenDeeds.viewDeedDetails",
      isPrimary: true,
    },
    {
      id: "SYN-D-0000-ORIG",
      deedNo: "SYN-D-0000-ORIG",
      officeKey: "citizenDeeds.row2Office",
      registeredDateKey: "citizenDeeds.row2RegisteredDate",
      role: "Buyer",
      roleLabelKey: "citizenDeeds.row2Role",
      mouza: "SYN-Savar",
      daag: "452/1",
      khatian: "1187 (BS)",
      share: "0.5000 (8 anna)",
      shareSubKey: "citizenDeeds.row2ShareSub",
      deedStatusKey: "citizenDeeds.row2DeedStatus",
      mutationStatusKey: "citizenDeeds.row2MutationStatus",
      mutationCase: "MUT-2018-091442",
      statusType: "approved",
      actionHref: "/verify/plot/452-1",
      actionTextKey: "citizenDeeds.view",
      isPrimary: false,
    },
  ];

  const filteredDeeds = useMemo(() => {
    return rawDeeds.filter((deed) => {
      // Role filter
      if (roleFilter === "seller" && deed.role !== "Seller") return false;
      if (roleFilter === "buyer" && deed.role !== "Buyer") return false;

      // Status filter
      if (statusFilter === "escrow" && deed.statusType !== "escrow") return false;
      if (statusFilter === "approved" && deed.statusType !== "approved") return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesDeed = deed.deedNo.toLowerCase().includes(query);
        const matchesCase = deed.mutationCase.toLowerCase().includes(query);
        const matchesDaag = deed.daag.toLowerCase().includes(query);
        const matchesMouza = deed.mouza.toLowerCase().includes(query);
        if (!matchesDeed && !matchesCase && !matchesDaag && !matchesMouza) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, roleFilter, statusFilter]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-0"
    >
      {/* 1. Table Header & Filter Bar */}
      <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <TableIcon className="w-5 h-5 text-sky-400" />
            <span>{t("citizenDeeds.tableTitle")}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {t("citizenDeeds.tableSubtitle")}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative min-w-[220px] max-w-full flex-grow sm:flex-grow-0">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("citizenDeeds.searchPlaceholder")}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950/70 border border-white/15 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
            />
          </div>

          {/* Role Filter Chips */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950/70 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRoleFilter("all")}
              className={`px-3 py-1 rounded-lg transition-all ${
                roleFilter === "all"
                  ? "bg-sky-400 text-slate-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterAll")}
            </button>
            <button
              type="button"
              onClick={() => setRoleFilter("seller")}
              className={`px-3 py-1 rounded-lg transition-all ${
                roleFilter === "seller"
                  ? "bg-sky-400 text-slate-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterSeller")}
            </button>
            <button
              type="button"
              onClick={() => setRoleFilter("buyer")}
              className={`px-3 py-1 rounded-lg transition-all ${
                roleFilter === "buyer"
                  ? "bg-sky-400 text-slate-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterBuyer")}
            </button>
          </div>

          {/* Status Filter Chips */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950/70 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === "all"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterAllStatus")}
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("escrow")}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === "escrow"
                  ? "bg-amber-500/25 text-amber-300 border border-amber-400/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterInEscrow")}
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("approved")}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === "approved"
                  ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t("citizenDeeds.filterApproved")}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Responsive Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/60 border-b border-white/10 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3.5 px-4 sm:px-6">{t("citizenDeeds.thDeedNo")}</th>
              <th className="py-3.5 px-4">{t("citizenDeeds.thRole")}</th>
              <th className="py-3.5 px-4">{t("citizenDeeds.thPlot")}</th>
              <th className="py-3.5 px-4">{t("citizenDeeds.thShare")}</th>
              <th className="py-3.5 px-4">{t("citizenDeeds.thDeedStatus")}</th>
              <th className="py-3.5 px-4">{t("citizenDeeds.thMutationStatus")}</th>
              <th className="py-3.5 px-4 sm:px-6 text-right">{t("citizenDeeds.thActions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
            {filteredDeeds.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-400">
                  {t("citizenDeeds.noRecordsFound")}
                </td>
              </tr>
            ) : (
              filteredDeeds.map((deed) => (
                <tr
                  key={deed.id}
                  className="hover:bg-white/[0.03] transition-colors group"
                >
                  {/* Deed No & Office */}
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 mt-0.5 shrink-0">
                        {deed.isPrimary ? (
                          <ShieldCheck className="w-4 h-4" />
                        ) : (
                          <History className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <span className="font-mono font-bold text-white block text-sm">
                          {deed.deedNo}
                        </span>
                        <span className="text-slate-400 text-xs block">
                          {t(deed.officeKey)}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                          {t(deed.registeredDateKey)}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        deed.role === "Seller"
                          ? "bg-sky-500/15 border border-sky-400/30 text-sky-300"
                          : "bg-teal-500/15 border border-teal-400/30 text-teal-300"
                      }`}
                    >
                      {deed.role === "Seller" ? (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                      )}
                      <span>{t(deed.roleLabelKey)}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1">
                      SYN-NID-A10021
                    </div>
                  </td>

                  {/* Cadastral Plot */}
                  <td className="py-4 px-4">
                    <div>
                      <span className="font-semibold text-white">
                        {language === "bn" ? "মৌজা: সিন-সাভার" : "Mouza: SYN-Savar"}
                      </span>
                      <div className="text-slate-400 text-xs font-mono mt-0.5">
                        {language === "bn" ? "দাগ: " : "Daag: "}
                        <span className="text-white font-semibold">{deed.daag}</span> |{" "}
                        {language === "bn" ? "খতিয়ান: " : "Khatian: "}
                        <span className="text-white font-semibold">{deed.khatian}</span>
                      </div>
                    </div>
                  </td>

                  {/* Transacted Share */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-mono font-bold text-sky-300">
                      {deed.share}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {t(deed.shareSubKey)}
                    </div>
                  </td>

                  {/* Deed Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{t(deed.deedStatusKey)}</span>
                    </span>
                  </td>

                  {/* Mutation Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    {deed.statusType === "escrow" ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span>{t(deed.mutationStatusKey)}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>{t(deed.mutationStatusKey)}</span>
                      </div>
                    )}
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Case: {deed.mutationCase}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                    <Link
                      href={deed.actionHref}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        deed.isPrimary
                          ? "bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                          : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                      }`}
                    >
                      {deed.isPrimary ? (
                        <>
                          <span>{t(deed.actionTextKey)}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>{t(deed.actionTextKey)}</span>
                        </>
                      )}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Table Footer Micro-Pagination & Stats */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-950/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          {t("citizenDeeds.tableShowing")}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          <span>{t("citizenDeeds.tableConsensus")}</span>
        </div>
      </div>
    </motion.section>
  );
};
