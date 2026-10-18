"use client";

import { useState } from "react";
import { AcLandSideNav } from "@/app/_components/ac-land/AcLandSideNav";
import { AcLandTopNav } from "@/app/_components/ac-land/AcLandTopNav";

interface AcLandShellProps {
  children: React.ReactNode;
}

export const AcLandShell = ({ children }: AcLandShellProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Fixed Ambient Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[15%] left-[10%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-sky-900/35 to-sky-500/20 blur-[130px]" />
        <div className="absolute top-[35%] -right-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-900/30 to-teal-500/15 blur-[140px]" />
        <div className="absolute -bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-sky-950/40 via-cyan-900/20 to-transparent blur-[120px]" />
      </div>

      {/* Shell Wrapper */}
      <div className="relative z-10 flex min-h-screen">
        {/* Fixed Glass Sidebar (Desktop w-[260px] + Mobile Drawer) */}
        <AcLandSideNav
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Canvas Structure */}
        <div className="flex-1 flex flex-col lg:ml-[260px] min-w-0">
          {/* Persistent Sticky Top Bar */}
          <AcLandTopNav onToggleMobileMenu={() => setMobileMenuOpen(true)} />

          {/* Dynamic Nested Route Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
