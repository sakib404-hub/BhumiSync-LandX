"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  Share2,
  RefreshCw,
  Bell,
  Scale,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

interface AcLandTopNavProps {
  onToggleMobileMenu: () => void;
}

export const AcLandTopNav = ({ onToggleMobileMenu }: AcLandTopNavProps) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  const handleLiveSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncDone(true);
      setTimeout(() => setSyncDone(false), 3000);
    }, 1200);
  };

  const getBreadcrumbModule = () => {
    if (pathname.includes("/hearings")) return t("acLand.navHearings");
    if (pathname.includes("/history")) return t("acLand.navHistory");
    if (pathname.includes("/case")) return "Case Docket";
    return t("acLand.breadcrumbModule");
  };

  const getPageTitle = () => {
    if (pathname.includes("/hearings")) return "Mutation Hearings Calendar";
    if (pathname.includes("/history")) return "Mutation Archive & History";
    if (pathname.includes("/case")) return "Mutation Case Docket";
    return t("acLandQueue.title");
  };

  return (
    <header className="sticky top-0 right-0 z-30 h-16 w-full lg:ml-[260px] lg:max-w-[calc(100%-260px)] bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Breadcrumbs / Page Title */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Drawer Trigger */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5 text-sky-400" />
        </button>

        {/* Title & Breadcrumbs */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
            <span>{t("acLand.breadcrumbSystem")}</span>
            <span className="text-slate-600">/</span>
            <span className="text-sky-400">{getBreadcrumbModule()}</span>
          </div>
          <h1 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
            {getPageTitle()}
          </h1>
        </div>
      </div>

      {/* Right Controls: Station Zone, Ledger Status, Sync & Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Station Zone Badge */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-white/10 text-xs text-slate-300">
          <Share2 className="w-3.5 h-3.5 text-sky-400" />
          <span>{t("acLand.stationZone")}</span>
        </div>

        {/* Blockchain Ledger Node Status */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 shadow-inner text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono font-semibold text-emerald-400 tracking-wide text-[11px] sm:text-xs">
            {t("acLand.blockSynced")}
          </span>
        </div>

        {/* Action Cluster: Ledger Sync, Notification, Language Toggle */}
        <div className="flex items-center gap-1.5 pl-1 sm:pl-2 border-l border-white/10">
          {/* Sync Button */}
          <button
            type="button"
            onClick={handleLiveSync}
            disabled={isSyncing}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all cursor-pointer disabled:opacity-75 flex items-center gap-1.5"
            title={t("acLand.syncLedger")}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
            <span className="hidden md:inline">
              {isSyncing
                ? t("acLand.syncing")
                : syncDone
                ? t("acLand.synced")
                : t("acLand.syncLedger")}
            </span>
          </button>

          {/* Notification Bell */}
          <button
            type="button"
            className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title={t("acLand.caseNotifications")}
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
          </button>

          {/* Global Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
