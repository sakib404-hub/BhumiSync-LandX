"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { ValidateDeedAlert } from "@/app/_components/sub-registrar/validate/ValidateDeedAlert";
import { DeedParameterForm } from "@/app/_components/sub-registrar/validate/DeedParameterForm";
import { AuditReconciliationCard } from "@/app/_components/sub-registrar/validate/AuditReconciliationCard";
import { AuditPipelineStepper } from "@/app/_components/sub-registrar/validate/AuditPipelineStepper";

export const ValidateDeedPage = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Ambient Glow Orbs */}
      <div className="fixed top-[-100px] left-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* 1. Left Institutional SideNav (Desktop Fixed + Mobile Collapsible Drawer) */}
      <SubRegistrarSideNav
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* 2. Top Institutional Navigation Bar */}
      <SubRegistrarTopNav
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* 3. Main Workspace Content Canvas */}
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10">
        {/* Top Analytical Notification Alert */}
        <ValidateDeedAlert />

        {/* 2-Column Responsive Workspace Grid (5 Cols Form / 7 Cols Results) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 of 12 cols): Deed Check Input Form */}
          <div className="lg:col-span-5">
            <DeedParameterForm />
          </div>

          {/* Right Column (7 of 12 cols): Validation Result & Reconciliation Card */}
          <div className="lg:col-span-7">
            <AuditReconciliationCard />
          </div>
        </div>

        {/* Ledger Audit Trail Stepper */}
        <AuditPipelineStepper />
      </main>
    </div>
  );
};

export default ValidateDeedPage;
