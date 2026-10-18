"use client";

import { motion } from "framer-motion";
import { OverviewBentoStats } from "@/app/_components/admin/overview/OverviewBentoStats";
import { LiveAuditTableCard } from "@/app/_components/admin/overview/LiveAuditTableCard";
import { ActiveFraudFlagsCard } from "@/app/_components/admin/overview/ActiveFraudFlagsCard";
import { OutboxHealthCard } from "@/app/_components/admin/overview/OutboxHealthCard";

export const AdminOverviewConsole = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8">
      {/* 1. TOP SECTION: 4 Stat Bento Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <OverviewBentoStats />
      </motion.div>

      {/* 2. MIDDLE SECTION: Two-Column Split (Audit Table vs Fraud & Outbox) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column (7 cols): Live Cadastral Audit Log */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="xl:col-span-7 space-y-6"
        >
          <LiveAuditTableCard />
        </motion.section>

        {/* Right Column (5 cols): Active Fraud Flags & Outbox Health */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="xl:col-span-5 space-y-6"
        >
          <ActiveFraudFlagsCard />
          <OutboxHealthCard />
        </motion.section>
      </div>
    </main>
  );
};
