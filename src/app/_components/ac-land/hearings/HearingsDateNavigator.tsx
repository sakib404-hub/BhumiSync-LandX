"use client";

import { Search, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HearingsDateNavigatorProps {
  activeDateTab: string;
  onSelectDateTab: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  hearingTypeFilter: string;
  onSelectHearingType: (type: string) => void;
}

export const HearingsDateNavigator = ({
  activeDateTab,
  onSelectDateTab,
  searchQuery,
  onSearchChange,
  hearingTypeFilter,
  onSelectHearingType,
}: HearingsDateNavigatorProps) => {
  const { t, language } = useLanguage();

  const dateTabs = [
    { id: "today", label: t("mutationHearings.tabToday") },
    { id: "tomorrow", label: t("mutationHearings.tabTomorrow") },
    { id: "nextWeek", label: t("mutationHearings.tabNextWeek") },
    { id: "all", label: t("mutationHearings.tabAll") },
    { id: "past", label: t("mutationHearings.tabPast") },
  ];

  return (
    <section className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Date Tabs Carousel / Cluster */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/60 border border-white/10 self-start lg:self-auto max-w-full overflow-x-auto">
          {dateTabs.map((tab) => {
            const isActive = activeDateTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectDateTab(tab.id)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Box */}
          <div className="relative w-full sm:w-72 lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t("mutationHearings.searchPlaceholder")}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          {/* Hearing Type Dropdown */}
          <div className="relative w-full sm:w-auto shrink-0">
            <div className="relative">
              <select
                value={hearingTypeFilter}
                onChange={(e) => onSelectHearingType(e.target.value)}
                className="w-full sm:w-auto appearance-none pl-9 pr-8 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
              >
                <option value="all">
                  {language === "bn" ? "সকল প্রকার শুনানি" : "All Hearing Types"}
                </option>
                <option value="waived">
                  {language === "bn" ? "নিষ্কণ্টক (শুনানি মওকুফ)" : "Clear Titles (Waived)"}
                </option>
                <option value="boundary">
                  {language === "bn" ? "সীমানা জটিলতা / বিরোধ" : "Boundary Overlap Claimed"}
                </option>
                <option value="heir">
                  {language === "bn" ? "ওয়ারিশান জটিলতা" : "Khatian Heir Contest"}
                </option>
                <option value="routine">
                  {language === "bn" ? "নিয়মিত রেকর্ড সংশোধন" : "Routine Title Inscription"}
                </option>
              </select>
              <Filter className="w-3.5 h-3.5 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
