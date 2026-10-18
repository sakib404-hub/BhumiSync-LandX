"use client";

import { useState } from "react";
import { AdminSideNav } from "@/app/_components/admin/AdminSideNav";
import { AdminTopNav } from "@/app/_components/admin/AdminTopNav";
import { NewParcelModal } from "@/app/_components/admin/overview/NewParcelModal";

interface AdminShellProps {
  children: React.ReactNode;
}

export const AdminShell = ({ children }: AdminShellProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newParcelModalOpen, setNewParcelModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Fixed Ambient Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[12%] left-[10%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-sky-900/30 to-sky-500/15 blur-[140px]" />
        <div className="absolute top-[30%] -right-[8%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-900/25 to-teal-500/15 blur-[150px]" />
        <div className="absolute -bottom-[12%] left-[25%] w-[620px] h-[620px] rounded-full bg-gradient-to-t from-sky-950/40 via-cyan-900/20 to-transparent blur-[130px]" />
      </div>

      {/* Shell Wrapper */}
      <div className="relative z-10 flex min-h-screen">
        {/* Fixed Glass Sidebar (Desktop w-[260px] + Mobile Drawer) */}
        <AdminSideNav
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenNewParcelModal={() => setNewParcelModalOpen(true)}
        />

        {/* Main Content Canvas Structure */}
        <div className="flex-1 flex flex-col lg:ml-[260px] min-w-0">
          {/* Persistent Sticky Top Bar */}
          <AdminTopNav onToggleMobileMenu={() => setMobileMenuOpen(true)} />

          {/* Dynamic Nested Route Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {children}
          </div>
        </div>
      </div>

      {/* Global New Parcel Provisioning Modal */}
      <NewParcelModal
        isOpen={newParcelModalOpen}
        onClose={() => setNewParcelModalOpen(false)}
      />
    </div>
  );
};
