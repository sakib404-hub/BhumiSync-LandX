"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QueueStatCards } from "@/app/_components/ac-land/queue/QueueStatCards";
import { QueueFilterBar } from "@/app/_components/ac-land/queue/QueueFilterBar";
import { QueueTable } from "@/app/_components/ac-land/queue/QueueTable";
import { QueueCharterFooter } from "@/app/_components/ac-land/queue/QueueCharterFooter";

export const MutationQueueConsole = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("age_asc");

  return (
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
          onFilterChange={(filter) => setActiveFilter(filter)}
          searchQuery={searchQuery}
          onSearchChange={(query) => setSearchQuery(query)}
          sortBy={sortBy}
          onSortChange={(sort) => setSortBy(sort)}
        />
      </motion.div>

      {/* 3. Cadastral Mutation Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <QueueTable
          filter={activeFilter}
          searchQuery={searchQuery}
          sortBy={sortBy}
        />
      </motion.div>

      {/* 4. SLA Charter Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.2 }}
      >
        <QueueCharterFooter />
      </motion.div>
    </main>
  );
};
