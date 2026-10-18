"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SubRegistrarSideNav } from "@/app/_components/sub-registrar/SubRegistrarSideNav";
import { SubRegistrarTopNav } from "@/app/_components/sub-registrar/SubRegistrarTopNav";
import { SubRegistrarBentoMetrics } from "@/app/_components/sub-registrar/dashboard/SubRegistrarBentoMetrics";
import { InitiateDeedHeroCard } from "@/app/_components/sub-registrar/dashboard/InitiateDeedHeroCard";
import { RecentDeedsLedgerTable } from "@/app/_components/sub-registrar/dashboard/RecentDeedsLedgerTable";

export const SubRegistrarDashboardPage = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (language === "bn") {
        setCurrentTime(
          now.toLocaleTimeString("bn-BD", { hour12: true }) + " বিএসটি"
        );
        setCurrentDate(
          now.toLocaleDateString("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        );
      } else {
        setCurrentTime(
          now.toLocaleTimeString("en-US", { hour12: true }) + " BST"
        );
        setCurrentDate(
          now.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
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
        {/* Section 1: Page Header & Live Session Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>{t("subRegistrar.portalBadge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {t("subRegistrar.dashboardTitle")}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Live Clock Card */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 text-xs shadow-sm">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-300 font-medium">{currentDate}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono font-bold text-sky-300">{currentTime}</span>
            </div>

            {/* Session Encrypted Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("subRegistrar.sessionActive")}</span>
            </div>
          </div>
        </motion.div>

        {/* Section 2: 4-Column Bento Metric Row */}
        <SubRegistrarBentoMetrics />

        {/* Section 3: "Start New Deed" Hero Glass Card */}
        <InitiateDeedHeroCard />

        {/* Section 4: "Recent Deeds" Compact Glass Table Card */}
        <RecentDeedsLedgerTable />
      </main>
    </div>
  );
};

export default SubRegistrarDashboardPage;
