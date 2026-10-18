"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AcLandSideNav } from "@/app/_components/ac-land/AcLandSideNav";
import { AcLandTopNav } from "@/app/_components/ac-land/AcLandTopNav";
import { QueueStatCards } from "@/app/_components/ac-land/queue/QueueStatCards";
import { QueueFilterBar } from "@/app/_components/ac-land/queue/QueueFilterBar";
import { QueueTable } from "@/app/_components/ac-land/queue/QueueTable";
import { QueueCharterFooter } from "@/app/_components/ac-land/queue/QueueCharterFooter";

export const MutationQueueConsole = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("age_asc");

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Fixed Ambient Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[15%] left-[10%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-sky-900/35 to-sky-500/20 blur-[130px]" />
        <div className="absolute top-[40%] -right-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-900/30 to-teal-500/15 blur-[140px]" />
        <div className="absolute -bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-sky-950/40 via-cyan-900/20 to-transparent blur-[120px]" />
      </div>

      {/* Shell Wrapper */}
      <div className="relative z-10 flex min-h-screen">
        {/* Fixed Glass Sidebar */}
        <AcLandSideNav
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Canvas Structure */}
        <div className="flex-1 flex flex-col lg:ml-[260px] min-w-0">
          {/* Top Bar */}
          <AcLandTopNav onToggleMobileMenu={() => setMobileMenuOpen(true)} />

          {/* Main Workspace Container */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
            {/* 1. Top Stat Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <QueueStatCards
                activeFilter={activeFilter}
                onSelectFilter={(filter) => setActiveFilter(filter)}
              />
            </motion.div>

            {/* 2. Filter & Controls Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <QueueFilterBar
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </motion.div>

            {/* 3. Mutation Cases Glass Table */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <QueueTable
                filter={activeFilter}
                searchQuery={searchQuery}
                sortBy={sortBy}
              />
            </motion.div>

            {/* 4. Bottom Institutional Charter Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.25 }}
            >
              <QueueCharterFooter />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};
