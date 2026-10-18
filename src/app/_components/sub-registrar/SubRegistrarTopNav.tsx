"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  MapPin,
  RefreshCw,
  Bell,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

interface TopNavProps {
  onToggleMobileMenu: () => void;
}

export const SubRegistrarTopNav = ({ onToggleMobileMenu }: TopNavProps) => {
  const { t, language } = useLanguage();
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

  return (
    <header className="sticky top-0 right-0 z-30 h-16 w-full lg:ml-[260px] lg:max-w-[calc(100%-260px)] bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-sm flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle + Breadcrumb / Jurisdiction Banner */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Sub-Registrar Navigation"
        >
          <Menu className="w-5 h-5 text-sky-400" />
        </button>

        {/* Title & Jurisdiction Banner */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
            {pathname.includes("/register")
              ? t("registerDeed.title")
              : pathname.includes("/validate")
              ? t("validateDeed.title")
              : pathname.includes("/parties")
              ? t("partiesRegistry.title")
              : pathname.includes("/deeds")
              ? t("deedsArchive.title")
              : pathname.includes("/deed")
              ? t("deedDossier.title")
              : t("subRegistrar.dashboardTitle")}
          </h1>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{t("subRegistrar.breadcrumb")}</span>
          </div>
        </div>
      </div>

      {/* Right Controls: Consensus, Live Sync & Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Ledger Consensus Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 shadow-inner text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono font-semibold text-emerald-400">
            {language === "bn" ? "ব্লক #৮৮৪,৯১২ সিঙ্কড" : "Block #884,912 Synced"}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 text-[11px]">Savar AC Land</span>
        </div>

        {/* Live Ledger Sync Button */}
        <button
          type="button"
          onClick={handleLiveSync}
          disabled={isSyncing}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all cursor-pointer disabled:opacity-75"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">
            {isSyncing
              ? t("subRegistrar.syncing")
              : syncDone
              ? t("subRegistrar.synced")
              : t("subRegistrar.liveSyncBtn")}
          </span>
        </button>

        {/* Action Icons & Language Toggle */}
        <div className="flex items-center gap-1 pl-1 sm:pl-2 border-l border-white/10">
          <button
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors relative"
            title="Registry Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
          </button>

          <button
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors hidden sm:block"
            title="Cadastral Security Shield"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </button>

          <button
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors hidden sm:block"
            title="Registry Handbook & Standards"
          >
            <HelpCircle className="w-4 h-4 text-sky-300" />
          </button>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
