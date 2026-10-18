"use client";

import { useState } from "react";
import { Search, Download, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface QueueFilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const QueueFilterBar = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: QueueFilterBarProps) => {
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const handleExportCsv = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportNotice(t("acLandQueue.exportedCsv"));
      setTimeout(() => setExportNotice(null), 3500);
    }, 1000);
  };

  const filterChips = [
    { id: "all", label: t("acLandQueue.filterAll"), count: "47" },
    { id: "new", label: t("acLandQueue.filterNew"), count: "14" },
    { id: "under_review", label: t("acLandQueue.filterUnderReview"), count: "28" },
    { id: "stale", label: t("acLandQueue.filterStale"), count: "5", isAmber: true },
  ];

  return (
    <section className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-3 flex flex-wrap items-center justify-between gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
      {/* Left: Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        {filterChips.map((chip) => {
          const isActive = activeFilter === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              onClick={() => onFilterChange(chip.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? chip.isAmber
                    ? "bg-amber-500 text-slate-950 font-bold border border-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.4)]"
                    : "bg-sky-400 text-slate-950 font-bold border border-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.45)]"
                  : chip.isAmber
                  ? "text-amber-300/80 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30"
                  : "text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span>{chip.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive
                    ? "bg-black/20 text-slate-950 font-bold"
                    : "bg-white/10 text-slate-300"
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right: Search, Sort Dropdown & Export Action */}
      <div className="flex items-center gap-2.5 flex-1 sm:flex-initial justify-end flex-wrap sm:flex-nowrap">
        {/* Search Recessed Field */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t("acLandQueue.searchPlaceholder")}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950/70 border border-white/15 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative shrink-0">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-slate-950/80 border border-white/15 text-xs text-slate-300 rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:border-sky-400 cursor-pointer transition-all"
          >
            <option value="age_asc">{t("acLandQueue.sortAge")}</option>
            <option value="sla_urgency">{t("acLandQueue.sortUrgency")}</option>
            <option value="newest">{t("acLandQueue.sortNewest")}</option>
            <option value="plot">{t("acLandQueue.sortPlot")}</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" />
        </div>

        {/* Export SLA Audit */}
        <button
          type="button"
          onClick={handleExportCsv}
          disabled={isExporting}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap cursor-pointer disabled:opacity-75"
        >
          <Download className="w-3.5 h-3.5 text-sky-400" />
          <span>
            {isExporting ? t("acLandQueue.exportingCsv") : t("acLandQueue.exportCsv")}
          </span>
        </button>
      </div>

      {/* Export Success Toast notification banner */}
      {exportNotice && (
        <div className="w-full mt-1 px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{exportNotice}</span>
        </div>
      )}
    </section>
  );
};
