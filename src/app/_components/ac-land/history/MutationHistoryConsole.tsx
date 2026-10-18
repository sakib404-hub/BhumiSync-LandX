"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HistoryHeaderBanner } from "@/app/_components/ac-land/history/HistoryHeaderBanner";
import { HistoryStatsRibbon } from "@/app/_components/ac-land/history/HistoryStatsRibbon";
import { HistoryFilterBar } from "@/app/_components/ac-land/history/HistoryFilterBar";
import { HistoryLedgerTable } from "@/app/_components/ac-land/history/HistoryLedgerTable";
import { HistoryCharterFooter } from "@/app/_components/ac-land/history/HistoryCharterFooter";

export const MutationHistoryConsole = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date_desc");

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Header Banner & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <HistoryHeaderBanner />
      </motion.div>

      {/* 2. Top Summary Stat Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <HistoryStatsRibbon />
      </motion.div>

      {/* 3. Search & Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
      >
        <HistoryFilterBar
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
          sortBy={sortBy}
          onSelectSort={(s) => setSortBy(s)}
        />
      </motion.div>

      {/* 4. Table of Decided Cases */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HistoryLedgerTable
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          sortBy={sortBy}
        />
      </motion.div>

      {/* 5. Statutory Compliance Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.26 }}
      >
        <HistoryCharterFooter />
      </motion.div>
    </main>
  );
};
