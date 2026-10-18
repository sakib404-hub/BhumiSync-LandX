"use client";

import { useState } from "react";
import { InstitutionalSideNav } from "@/app/_components/institutional/InstitutionalSideNav";
import { InstitutionalTopNav } from "@/app/_components/institutional/InstitutionalTopNav";

interface InstitutionalShellProps {
  children: React.ReactNode;
}

export const InstitutionalShell = ({ children }: InstitutionalShellProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Ambient Celestial Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[15%] left-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-sky-900/30 to-blue-600/15 blur-[140px]" />
        <div className="absolute top-[35%] -right-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-br from-indigo-900/25 to-sky-500/15 blur-[150px]" />
        <div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-sky-950/40 via-cyan-950/20 to-transparent blur-[130px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Fixed Glass Sidebar (Desktop w-[260px] + Mobile Drawer) */}
        <InstitutionalSideNav
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Workspace Canvas (Offset left 260px on Desktop) */}
        <div className="flex-1 flex flex-col lg:ml-[260px] min-w-0">
          <InstitutionalTopNav onToggleMobileMenu={() => setMobileMenuOpen(true)} />

          <div className="flex-1 flex flex-col min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
