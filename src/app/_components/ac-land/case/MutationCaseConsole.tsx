"use client";

import { motion } from "framer-motion";
import { CaseHeaderBanner } from "@/app/_components/ac-land/case/CaseHeaderBanner";
import { CadastralShareMutationCard } from "@/app/_components/ac-land/case/CadastralShareMutationCard";
import { AuditClearanceCard } from "@/app/_components/ac-land/case/AuditClearanceCard";
import { PlotExtractTableCard } from "@/app/_components/ac-land/case/PlotExtractTableCard";
import { MutationOrderCard } from "@/app/_components/ac-land/case/MutationOrderCard";

interface MutationCaseConsoleProps {
  caseId: string;
}

export const MutationCaseConsole = ({ caseId }: MutationCaseConsoleProps) => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Case Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <CaseHeaderBanner caseId={caseId} />
      </motion.div>

      {/* 2. Asymmetric 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Mathematical & Audit Verification Evidence */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col gap-6 min-w-0"
        >
          {/* Cadastral Share Mutation Math */}
          <CadastralShareMutationCard />

          {/* Plot Extraction & Merkle Cross-Reference */}
          <PlotExtractTableCard />

          {/* Kanungo Field Clearance & Boundary Verification */}
          <AuditClearanceCard />
        </motion.div>

        {/* Right Column: Statutory Mutation Order Decision Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 min-w-0"
        >
          <div className="lg:sticky lg:top-24">
            <MutationOrderCard caseId={caseId} />
          </div>
        </motion.div>
      </div>
    </main>
  );
};
