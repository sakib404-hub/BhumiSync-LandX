"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Download,
  Fingerprint,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { PartiesStatRibbon } from "@/app/_components/sub-registrar/parties/PartiesStatRibbon";
import { EnrollPartyForm } from "@/app/_components/sub-registrar/parties/EnrollPartyForm";
import { EnrolledPartiesTable } from "@/app/_components/sub-registrar/parties/EnrolledPartiesTable";
import { PartiesRegulatoryFooter } from "@/app/_components/sub-registrar/parties/PartiesRegulatoryFooter";

export const PartiesDirectoryPage = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExportingAudit, setIsExportingAudit] = useState(false);
  const [auditExported, setAuditExported] = useState(false);
  const [isScanningToken, setIsScanningToken] = useState(false);
  const [tokenScanned, setTokenScanned] = useState(false);

  const handleExportAudit = () => {
    setIsExportingAudit(true);
    setTimeout(() => {
      setIsExportingAudit(false);
      setAuditExported(true);
      setTimeout(() => setAuditExported(false), 3000);
    }, 1200);
  };

  const handleScanToken = () => {
    setIsScanningToken(true);
    setTimeout(() => {
      setIsScanningToken(false);
      setTokenScanned(true);
      setTimeout(() => setTokenScanned(false), 3000);
    }, 1200);
  };

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
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10">
        {/* Title & Institutional Context Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-sky-500/10 border border-sky-400/30 text-sky-400 tracking-wider">
                {t("partiesRegistry.moduleTag")}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                • {t("partiesRegistry.jurisdiction")}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t("partiesRegistry.title")}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t("partiesRegistry.subtitle")}
            </p>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button
              type="button"
              onClick={handleExportAudit}
              disabled={isExportingAudit}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              {isExportingAudit ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                  <span>Loading...</span>
                </>
              ) : auditExported ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Audit Exported</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t("partiesRegistry.btnExportAudit")}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleScanToken}
              disabled={isScanningToken}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              {isScanningToken ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" />
                  <span>{t("partiesRegistry.scanningToken")}</span>
                </>
              ) : tokenScanned ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                  <span>{t("partiesRegistry.tokenScanned")}</span>
                </>
              ) : (
                <>
                  <Fingerprint className="w-3.5 h-3.5 text-slate-950" />
                  <span>{t("partiesRegistry.btnScanToken")}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Stat Counters Ribbon (4 Bento Glass Cards) */}
        <PartiesStatRibbon />

        {/* Two-Column Asymmetric Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN: Add / Verify New Party Form (5 cols) */}
          <div className="lg:col-span-5">
            <EnrollPartyForm />
          </div>

          {/* RIGHT COLUMN: Recent Enrolled Parties Ledger (7 cols) */}
          <div className="lg:col-span-7">
            <EnrolledPartiesTable />
          </div>
        </div>

        {/* Regulatory Note & Institutional Footer */}
        <PartiesRegulatoryFooter />
      </main>
    </div>
  );
};

export default PartiesDirectoryPage;
