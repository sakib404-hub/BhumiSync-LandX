"use client";

import { useState } from "react";
import { Search, Calendar, Download, Loader2, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: "all" | "registered" | "mutated" | "cancelled";
  onFilterChange: (filter: "all" | "registered" | "mutated" | "cancelled") => void;
  onExport: () => void;
  isExporting: boolean;
  exportDone: boolean;
}

export const DeedsArchiveFilterBar = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  onExport,
  isExporting,
  exportDone,
}: FilterBarProps) => {
  const { t } = useLanguage();
  const [showBatchDropdown, setShowBatchDropdown] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState("Oct 2024 (Current Batch)");

  return (
    <div className="rounded-xl p-3 bg-white/[0.10] backdrop-blur-[20px] border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
      {/* Search Input Container */}
      <div className="relative flex-1 max-w-2xl">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t("deedsArchive.searchPlaceholder")}
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0a1526]/60 border border-white/[0.15] text-white text-xs sm:text-sm placeholder:text-slate-400/70 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
        />
      </div>

      {/* Filter Chips & Action Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Filter: All */}
        <button
          type="button"
          onClick={() => onFilterChange("all")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === "all"
              ? "bg-sky-500 text-slate-950 shadow-[0_0_14px_rgba(56,189,248,0.5)] border border-sky-400"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white border border-white/[0.15]"
          }`}
        >
          <span>{t("deedsArchive.filterAll")}</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeFilter === "all" ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-white/10 text-sky-200"
            }`}
          >
            1,248
          </span>
        </button>

        {/* Filter: Registered */}
        <button
          type="button"
          onClick={() => onFilterChange("registered")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === "registered"
              ? "bg-emerald-500 text-slate-950 shadow-[0_0_14px_rgba(16,185,129,0.5)] border border-emerald-400"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white border border-white/[0.15]"
          }`}
        >
          <span>{t("deedsArchive.filterRegistered")}</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeFilter === "registered" ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-white/10 text-emerald-300"
            }`}
          >
            1,122
          </span>
        </button>

        {/* Filter: Mutated */}
        <button
          type="button"
          onClick={() => onFilterChange("mutated")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === "mutated"
              ? "bg-sky-500 text-slate-950 shadow-[0_0_14px_rgba(56,189,248,0.5)] border border-sky-400"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white border border-white/[0.15]"
          }`}
        >
          <span>{t("deedsArchive.filterMutated")}</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeFilter === "mutated" ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-white/10 text-sky-300"
            }`}
          >
            89
          </span>
        </button>

        {/* Filter: Cancelled */}
        <button
          type="button"
          onClick={() => onFilterChange("cancelled")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === "cancelled"
              ? "bg-red-500 text-slate-950 shadow-[0_0_14px_rgba(239,68,68,0.5)] border border-red-400"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white border border-white/[0.15]"
          }`}
        >
          <span>{t("deedsArchive.filterCancelled")}</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              activeFilter === "cancelled" ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-red-500/20 text-red-300"
            }`}
          >
            3
          </span>
        </button>

        {/* Batch Date Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowBatchDropdown(!showBatchDropdown)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1526]/60 border border-white/[0.15] hover:border-white/30 text-white text-xs transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            <span>{selectedBatch}</span>
          </button>

          {showBatchDropdown && (
            <div className="absolute top-full mt-1.5 right-0 z-20 w-56 rounded-xl bg-slate-900 border border-white/20 shadow-xl p-1 text-xs">
              {["Oct 2024 (Current Batch)", "Sep 2024 Batch", "Aug 2024 Batch", "FY-2023 Full Archive"].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setSelectedBatch(b);
                    setShowBatchDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedBatch === b ? "bg-sky-500/20 text-sky-300 font-bold" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Export Registry Ledger Button */}
        <button
          type="button"
          onClick={onExport}
          disabled={isExporting}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.12] hover:bg-white/[0.20] border border-white/[0.22] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer disabled:opacity-75"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
              <span>{t("deedsArchive.exporting")}</span>
            </>
          ) : exportDone ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("deedsArchive.exported")}</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>{t("deedsArchive.btnExport")}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
