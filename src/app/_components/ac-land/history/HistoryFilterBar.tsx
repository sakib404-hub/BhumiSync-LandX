"use client";

import { Search, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HistoryFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeFilter: string;
  onSelectFilter: (f: string) => void;
  sortBy: string;
  onSelectSort: (s: string) => void;
}

export const HistoryFilterBar = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onSelectFilter,
  sortBy,
  onSelectSort,
}: HistoryFilterBarProps) => {
  const { t, language } = useLanguage();

  const filterButtons = [
    { id: "all", label: language === "bn" ? "সকল আদেশ (১,৪২৯)" : "All Disposed (1,429)" },
    { id: "approved", label: language === "bn" ? "অনুমোদিত (১,৩৮৪)" : "Approved (1,384)" },
    { id: "rejected", label: language === "bn" ? "নামঞ্জুর (৪৫)" : "Rejected (45)" },
    { id: "savar", label: language === "bn" ? "সাভার মৌজা" : "Savar Mouza", icon: MapPin },
  ];

  return (
    <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t("mutationHistory.searchPlaceholder")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
          />
        </div>

        {/* Filter Chips and Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.id;
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                onClick={() => onSelectFilter(btn.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                    : "text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{btn.label}</span>
              </button>
            );
          })}

          <span className="h-5 w-px bg-white/15 mx-1 hidden sm:inline-block" />

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="appearance-none pl-3 pr-8 py-1.5 rounded-xl bg-slate-950/60 border border-white/15 text-xs text-slate-200 focus:outline-none focus:border-sky-400 cursor-pointer"
            >
              <option value="date_desc">
                {language === "bn" ? "নিষ্পত্তির তারিখ (নতুনতম)" : "Disposal Date (Newest)"}
              </option>
              <option value="date_asc">
                {language === "bn" ? "নিষ্পত্তির তারিখ (প্রাচীনতম)" : "Disposal Date (Oldest)"}
              </option>
              <option value="case_asc">
                {language === "bn" ? "কেস নম্বর (ঊর্ধ্বক্রম)" : "Case No (Ascending)"}
              </option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
