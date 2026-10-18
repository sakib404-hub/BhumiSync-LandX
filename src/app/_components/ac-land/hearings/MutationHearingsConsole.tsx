"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HearingsHeaderBanner } from "@/app/_components/ac-land/hearings/HearingsHeaderBanner";
import { HearingsStatsRibbon } from "@/app/_components/ac-land/hearings/HearingsStatsRibbon";
import { HearingsDateNavigator } from "@/app/_components/ac-land/hearings/HearingsDateNavigator";
import { HearingsDocketList } from "@/app/_components/ac-land/hearings/HearingsDocketList";
import { HearingsCharterFooter } from "@/app/_components/ac-land/hearings/HearingsCharterFooter";

export const MutationHearingsConsole = () => {
  const [activeDateTab, setActiveDateTab] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [hearingTypeFilter, setHearingTypeFilter] = useState("all");

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Header & Actions Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <HearingsHeaderBanner />
      </motion.div>

      {/* 2. Quick Stats Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <HearingsStatsRibbon />
      </motion.div>

      {/* 3. Date Navigator & Search Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
      >
        <HearingsDateNavigator
          activeDateTab={activeDateTab}
          onSelectDateTab={(tab) => setActiveDateTab(tab)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          hearingTypeFilter={hearingTypeFilter}
          onSelectHearingType={(type) => setHearingTypeFilter(type)}
        />
      </motion.div>

      {/* 4. Glass List of Hearings Grouped by Date */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HearingsDocketList
          activeDateTab={activeDateTab}
          searchQuery={searchQuery}
          hearingTypeFilter={hearingTypeFilter}
        />
      </motion.div>

      {/* 5. Statutory Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.26 }}
      >
        <HearingsCharterFooter />
      </motion.div>
    </main>
  );
};
