"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { DeedsArchiveStats } from "@/app/_components/sub-registrar/deeds/DeedsArchiveStats";
import { DeedsArchiveFilterBar } from "@/app/_components/sub-registrar/deeds/DeedsArchiveFilterBar";
import { DeedsArchiveTable } from "@/app/_components/sub-registrar/deeds/DeedsArchiveTable";
import { DeedsArchiveFootnote } from "@/app/_components/sub-registrar/deeds/DeedsArchiveFootnote";

export const SubRegistrarDeedsPage = () => {
  const { t } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "registered" | "mutated" | "cancelled">("all");
  const [isExporting, setIsExporting] = useState(false);
  const [exportDone, setExportDone] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportDone(true);
      setTimeout(() => setExportDone(false), 3000);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* 1. Left Institutional SideNav (Desktop Fixed + Mobile Drawer) */}
      <SubRegistrarSideNav
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* 2. Top Institutional Navigation Bar */}
      <SubRegistrarTopNav
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* 3. Main Workspace Content Canvas */}
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10 max-w-[1440px]">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t("deedsArchive.title")}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t("deedsArchive.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {t("deedsArchive.jurisdictionCycle")}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.07] border border-white/10 font-mono text-xs text-sky-300 font-semibold">
              {t("deedsArchive.jurisdictionCycleVal")}
            </span>
          </div>
        </motion.div>

        {/* 4 Frosted Glass Stat Counters */}
        <DeedsArchiveStats />

        {/* Controls & Filter Bar */}
        <DeedsArchiveFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onExport={handleExport}
          isExporting={isExporting}
          exportDone={exportDone}
        />

        {/* Cadastral Glass Table */}
        <DeedsArchiveTable
          searchQuery={searchQuery}
          activeFilter={activeFilter}
        />

        {/* Cadastral Record Audit Watermark Footnote */}
        <DeedsArchiveFootnote />
      </main>
    </div>
  );
};

export default SubRegistrarDeedsPage;
