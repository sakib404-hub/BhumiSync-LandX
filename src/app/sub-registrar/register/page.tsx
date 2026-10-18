"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { RegisterDeedStepper } from "@/app/_components/sub-registrar/register/RegisterDeedStepper";
import { DeedExecutionForm } from "@/app/_components/sub-registrar/register/DeedExecutionForm";
import { SealedEscrowVoucher } from "@/app/_components/sub-registrar/register/SealedEscrowVoucher";

export const RegisterDeedPage = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Ambient Glow Orbs */}
      <div className="fixed top-[-100px] left-[15%] w-[550px] h-[550px] rounded-full bg-sky-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[5%] w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

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
        {/* Horizontal Stepper Audit Trail */}
        <RegisterDeedStepper currentStep={2} />

        {/* Two-Column Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Glass Registration Form (7 Cols on desktop) */}
          <div className="lg:col-span-7">
            <DeedExecutionForm />
          </div>

          {/* Right Column: Sealed Escrow Card / Notarization Voucher (5 Cols on desktop) */}
          <div className="lg:col-span-5">
            <SealedEscrowVoucher />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterDeedPage;
