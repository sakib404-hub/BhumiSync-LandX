"use client";

import { useState } from "react";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { DeedDossierHeader } from "@/app/_components/sub-registrar/deed/DeedDossierHeader";
import { AcLandMutationPipeline } from "@/app/_components/sub-registrar/deed/AcLandMutationPipeline";
import { DeedBentoGrid } from "@/app/_components/sub-registrar/deed/DeedBentoGrid";
import { MismatchAuditReport } from "@/app/_components/sub-registrar/deed/MismatchAuditReport";
import { SealChainLedger } from "@/app/_components/sub-registrar/deed/SealChainLedger";

interface DeedDossierClientProps {
  deedId: string;
}

export const DeedDossierClient = ({ deedId }: DeedDossierClientProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Section 1: Deed Dossier Header Panel */}
        <DeedDossierHeader deedId={deedId} />

        {/* Section 2: Real-Time AC Land Mutation Pipeline Tracker */}
        <AcLandMutationPipeline />

        {/* Section 3: 3-Column Info Cards Bento Grid */}
        <DeedBentoGrid />

        {/* Section 4: Pre-Registration Name Variance Audit Report */}
        <MismatchAuditReport />

        {/* Section 5: Cryptographic Seal Chain Merkle Ledger */}
        <SealChainLedger />
      </main>
    </div>
  );
};
